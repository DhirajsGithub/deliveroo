import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
import resturantReducer from "./features/resturantSlice";

export const store = configureStore({
  reducer: {
    // where we combine all of the different slices
    basket: basketReducer,
    resturant: resturantReducer,
  },
});
