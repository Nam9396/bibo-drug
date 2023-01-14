import { createSlice } from "@reduxjs/toolkit";
import mainDrug from "../data/mainDrug";
import subDrug from "../data/subDrug";

const chooseDrugSlice = createSlice({
  name: "chooseDrug",
  initialState: [],
  reducers: {
    filterDrug: (state, action) => {
      if (action.payload) {
        const filterArray = subDrug.filter(item => item.group.includes(action.payload) || item.name.includes(action.payload));
        return filterArray;
      }
      return [];
    },
  }

});

export const chooseDrugSliceReducer = chooseDrugSlice.reducer;
export const { filterDrug } = chooseDrugSlice.actions;