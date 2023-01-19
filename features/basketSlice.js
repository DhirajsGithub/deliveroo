import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
      // the argument with action function are payload
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1); // remove 1 item with index as index
      } else {
        console.log(
          "can't remove that item coz it's not in your basket : " +
            action.payload.id
        );
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => {
    return item.id === id;
  });

export const selectBasketTotal = (state) => {
  return state.basket.items.reduce((total, curItem) => {
    return total + curItem.price;
  }, 0);
};
export default basketSlice.reducer;
