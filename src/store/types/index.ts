import { IBookDetailsApi } from "../../services/types";

export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export interface IBookApi {
  books: IBook[];
  error: any;
  status: RequestStatusType;
  total: string;
  result: IBookDetailsApi;
}

export interface IUserStore {
  isAuth: boolean;
  email: string | undefined;
  name: string | undefined;
  favorites: IBookDetailsApi[];
  password: string | undefined;
}

export interface IArguments {
  title: string;
  page: string;
}

export interface ICartStore {
  cartItems: IBookCartItem[];

  total: number;
  isLoading: boolean;
}

export interface IBookCartItem extends IBookDetailsApi {
  amount: number;
}

export type RequestStatusType = "idle" | "success" | "loading" | "error";
