import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resturant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
  },
};

export const resturantSlice = createSlice({
  name: "resturant",
  initialState,
  reducers: {
    setResturant: (state, action) => {
      state.resturant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setResturant } = resturantSlice.actions;
export const selectResturant = (state) => state.resturant.resturant; // resturant being slice name and in this slice select the resturant

export default resturantSlice.reducer;
