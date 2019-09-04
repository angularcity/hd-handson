import { Product } from "./product.model";
import { ProductActions, ProductActionTypes } from "./product.action";
export interface ProductState {
  products: Product[];
  homeDepotProducts: Product[];
  availableProductIDs: {};
  currentProductID: number | string;
  currentAvailableProduct: Product;
}

const INITIAL_STATE: ProductState = {
  products: [],
  homeDepotProducts: [],
  availableProductIDs: [],
  currentProductID: null,
  currentAvailableProduct: null
};

export function reducer(
  state = INITIAL_STATE,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case ProductActionTypes.GetAllProducts:
      // console.log("caught get all products in reducer");
      return {
        ...state
      };

    case ProductActionTypes.GetAllProductsSuccess:
      console.log("get me all products..", action.payload);
      return {
        ...state,
        products: action.payload
      };

    case ProductActionTypes.GetProductByIdSuccess:
      // console.log("individual product success..", action.payload);
      return {
        ...state,
        homeDepotProducts: [...state.homeDepotProducts, action.payload],
        availableProductIDs: {
          ...state.availableProductIDs,
          [action.payload.id]: action.payload.id
        },
        currentProductID: action.payload.id
      };
    case ProductActionTypes.GetAvailableProductFromStore:
      return {
        ...state,
        currentAvailableProduct: state.homeDepotProducts.find(
          prod => prod.id === action.payload
        )
      };
    default:
      return state;
  }
}
