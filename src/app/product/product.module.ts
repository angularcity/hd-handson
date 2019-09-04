import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductShellComponent } from "./containers/product-shell/product-shell.component";
import { ProductRoutingModule } from "./product-routing.module";

import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/product.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ProductEffects } from "./store/product.effects";
import { ProductDisplayComponent } from './components/product-display/product-display.component';

@NgModule({
  declarations: [ProductShellComponent, ProductDisplayComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature("products", reducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule {}
