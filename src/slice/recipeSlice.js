import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipe",
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      return action.payload;
    },
  }
});

export const recipeSliceReducer = recipeSlice.reducer;
export const { addRecipe } = recipeSlice.actions;

