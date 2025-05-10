import { Product } from "@/app/components/Bill";

export interface LoginForm {
  email: string;
  password: string;
  officeId?: string;
}

export interface Message {
  message: string;
  data: string;
  error: boolean;
}

export interface Product_Billing {
  customerName: string;
  paymentStatus: string;
  products: Product[];
  totalPrice: Number;
  customerGST: string;
  customerLicence: string;
}
