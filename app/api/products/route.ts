import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { ApiResponse, TableTopFormData } from "@/lib/types";
import { revalidatePath, revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  // console.log(id);
  try {
    if (id) {
      const product = await prisma.product.findFirst({
        where: { id: id },
        include: { images: true },
      });
      // console.log("one product fetched successfully in server", product);
      return NextResponse.json({
        success: true,
        message: "Product fetched sucessfully",
        data: product,
      });
    } else {
      const products = await prisma.product.findMany({
        include: { images: true },
      });

      return NextResponse.json({
        success: true,
        message: "Products fetched sucessfully",
        data: products,
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error fetching products from the database",
    });
  }
}

export async function POST(request: Request) {
  const Formdata: TableTopFormData = await request.json();
  // console.log("From Server Boi", Formdata);

  try {
    const res = await prisma.product.create({
      data: {
        name: Formdata.name,
        description: Formdata.description,
        color: Formdata.color,
        weight: Formdata.weight,
        mrpPrice: Formdata.mrpPrice,
        discountPrice: Formdata.discountPrice,
        category: "table top",
        images: {
          create: Object.values(Formdata.images).map((image) => ({
            name: image.name,
            url: image.url,
            public_id: image.public_id,
          })),
        },
      },
    });
    revalidateTag("products");
    // console.log("Product created successfully", res);
    return NextResponse.json({
      success: true,
      message: "Product created successfully",
    });
  } catch (error) {
    console.error("error creating product", error);
    return NextResponse.json({
      success: false,
      message: "Failed to create a product",
    });
  }
}
export async function PUT(request: Request) {
  const Formdata: TableTopFormData = await request.json();
  // console.log("From Server Boi", Formdata);

  try {
    const res = await prisma.product.update({
      where: {
        id: Formdata.id,
      },
      data: {
        name: Formdata.name,
        description: Formdata.description,
        color: Formdata.color,
        weight: Formdata.weight,
        mrpPrice: Formdata.mrpPrice,
        discountPrice: Formdata.discountPrice,
        category: "table top",
        images: {
          connectOrCreate: Object.values(Formdata.images).map((image) => ({
            where: { public_id: image.public_id },
            create: {
              name: image.name,
              url: image.url,
              public_id: image.public_id,
            },
          })) as any,
        },
      },
    });
    // console.log("Product updated successfully", res);
    revalidateTag("products");
    return NextResponse.json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    console.error("error creating product", error);
    return NextResponse.json({
      success: false,
      message: "Failed to create a product",
    });
  }
}
export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  // console.log(id);
  try {
    if (id) {
      const res = await prisma.product.delete({ where: { id: id } });
      return NextResponse.json({
        success: true,
        message: "Deleted product",
      });
    }
    revalidateTag("products");
  } catch (error) {
    console.error("error creating product", error);
    return NextResponse.json({
      success: false,
      message: "Failed to create a product",
    });
  }
}
