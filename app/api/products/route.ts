import { constructFormObject } from "@/lib/constructFormObject";
import { NextResponse } from "next/server";

export async function GET() {
  const data = { greetings: "Hello world" };
  return NextResponse.json(data);
}
export async function POST(request: Request) {
  const data = await request.formData();
  const formObject = constructFormObject(data);
  console.log(formObject)
  return NextResponse.json(formObject);
}
