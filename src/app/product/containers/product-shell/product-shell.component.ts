import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../../store/product.model";
import { Store, select } from "@ngrx/store";
import * as fromProduct from "./../../store";
import * as productActions from "./../../store/product.action";

@Component({
  selector: "app-product-shell",
  templateUrl: "./product-shell.component.html",
  styleUrls: ["./product-shell.component.scss"]
})
export class ProductShellComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private store: Store<fromProduct.State>) {}

  ngOnInit() {
    this.store.dispatch(new productActions.GetAllProducts());
    this.products$ = this.store.pipe(select(fromProduct.getAllProducts));
  }
}
