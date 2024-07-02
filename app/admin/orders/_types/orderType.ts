export type Image = {
  name: string;
  url: string;
  public_id: string;
};

export type TableTopFormData = {
  id: string;
  name: string;
  description: string;
  color: string;
  weight: string;
  mrpPrice: string;
  discountPrice: string;
  quantity: string;
  images: Image[];
};

type Address = {
  id: string;
  firstName: string;
  lastName: string;
  userEmail: string;
  company: string;
  street: string;
  apartment: string;
  city: string;
  state: string;
  pincode: number;
  phone: number;
  createdAt: string;
  updatedAt: string;
};

type OrderItem = {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: string;
  createdAt: string;
  updatedAt: string;
  product: TableTopFormData;
};

export type OrderType = {
  id: string;
  orderDate: string;
  userEmail: string;
  status: string;
  totalAmount: number;
  paymentType: string;
  paymentStatus: string;
  addressId: string;
  createdAt: string;
  updatedAt: string;
  address: Address;
  orderItems: OrderItem[];
};
