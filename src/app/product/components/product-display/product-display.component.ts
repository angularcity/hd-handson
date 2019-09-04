import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as productActions from "./../../store/product.action";
import { Store, select } from "@ngrx/store";
import * as fromProduct from "./../../store";
import { Observable } from "rxjs";
import { Product } from "../../store/product.model";

@Component({
  selector: "app-product-display",
  templateUrl: "./product-display.component.html",
  styleUrls: ["./product-display.component.scss"]
})
export class ProductDisplayComponent implements OnInit {
  productId = null;
  product$: Observable<Product>;
  productIDs$: any;
  constructor(
    private route: ActivatedRoute,
    private store: Store<fromProduct.State>
  ) {}

  ngOnInit() {
    this.productId = +this.route.snapshot.params["id"];
    this.product$ = this.store.pipe(select(fromProduct.getProductByID));
    this.store
      .pipe(select(fromProduct.getHomeDepotProductsID))
      .subscribe(productIDs => {
        this.productIDs$ = productIDs;
        if (this.productIDs$[this.productId]) {
          this.getExistingProd(this.productId);
        } else {
          this.getNewProduct(this.productId);
        }
      });
  }

  getExistingProd(productId) {
    this.store.dispatch(
      new productActions.GetAvailableProductFromStore(productId)
    );
  }
  getNewProduct(productId) {
    this.store.dispatch(new productActions.GetProductById(productId));
  }
}
