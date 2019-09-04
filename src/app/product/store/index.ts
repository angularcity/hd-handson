import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromRoot from "../../root-store/store";
import * as fromProducts from "./product.reducer";

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends fromRoot.State {
  products: fromProducts.ProductState;
}

const getProductFeatureState = createFeatureSelector<fromProducts.ProductState>(
  "products"
);

export const getAllProducts = createSelector(
  getProductFeatureState,
  state => state.products
);

export const getProductByID = createSelector(
  getProductFeatureState,
  (state: fromProducts.ProductState) =>
    state.homeDepotProducts.find(item => item.id === state.currentProductID)
);

export const getHomeDepotProducts = createSelector(
  getProductFeatureState,
  (state: fromProducts.ProductState) => state.homeDepotProducts
);

export const getHomeDepotProductsID = createSelector(
  getProductFeatureState,
  (state: fromProducts.ProductState) => state.availableProductIDs
);

export const getCurrentAvailableProduct = createSelector(
  getProductFeatureState,
  (state: fromProducts.ProductState) => state.currentAvailableProduct
);
