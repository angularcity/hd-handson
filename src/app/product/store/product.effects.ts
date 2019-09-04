import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { mergeMap, map, catchError, tap, take } from "rxjs/operators";

/* NgRx */

import { Actions, Effect, ofType } from "@ngrx/effects";
import * as productActions from "./product.action";
import { ProductsService } from "src/app/products.service";
import { Product } from "./product.model";

@Injectable()
export class ProductEffects {
  constructor(
    private productService: ProductsService,
    private actions$: Actions
  ) {}

  @Effect()
  getAllProd$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.GetAllProducts),
    mergeMap((action: productActions.GetAllProducts) =>
      this.productService
        .getProducts()
        .pipe(
          map(
            (products: Product[]) =>
              new productActions.GetAllProductsSuccess(products)
          )
        )
    ),
    take(1)
  );

  @Effect()
  getProdByID$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.GetProductById),
    mergeMap((action: productActions.GetProductById) =>
      this.productService
        .getProductByID(action.payload)
        .pipe(
          map(
            (product: any) => new productActions.GetProductByIdSuccess(product)
          )
        )
    )
  );
}
