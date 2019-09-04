import { Action } from "@ngrx/store";
import { Product } from "./product.model";

export enum ProductActionTypes {
  GetAllProducts = "[Product] GetAllProducts",
  GetAllProductsSuccess = "[Product] GetAllProductsSuccess",
  GetAllProductsFail = "[Product] GetAllProductsFail",
  GetProductById = "[Product] GetProductById",
  GetProductByIdSuccess = "[Product] GetProductByIdSuccess",
  GetAvailableProductFromStore = "[Product] GetAvailableProductFromStore"
}
export class GetAllProducts implements Action {
  readonly type = ProductActionTypes.GetAllProducts;
}
export class GetAllProductsSuccess implements Action {
  readonly type = ProductActionTypes.GetAllProductsSuccess;
  constructor(public payload: Product[]) {}
}
export class GetProductById implements Action {
  readonly type = ProductActionTypes.GetProductById;
  constructor(public payload: number) {}
}

export class GetAvailableProductFromStore implements Action {
  readonly type = ProductActionTypes.GetAvailableProductFromStore;
  constructor(public payload: number) {}
}

export class GetProductByIdSuccess implements Action {
  readonly type = ProductActionTypes.GetProductByIdSuccess;
  constructor(public payload: Product) {}
}
// export class GetAllProductFail implements Action {
//   readonly type = ProductActionTypes.GetAllProductsFail;
//   constructor(public payload: string) {}
// }
export type ProductActions =
  | GetAllProducts
  | GetAllProductsSuccess
  | GetProductById
  | GetProductByIdSuccess
  | GetAvailableProductFromStore;
