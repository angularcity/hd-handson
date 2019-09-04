import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProductShellComponent } from "./containers/product-shell/product-shell.component";
import { ProductDisplayComponent } from "./components/product-display/product-display.component";

const routes: Routes = [
  {
    path: "",
    component: ProductShellComponent
  },
  {
    path: ":id",
    component: ProductDisplayComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class ProductRoutingModule {}
