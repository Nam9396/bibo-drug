import { createSlice } from "@reduxjs/toolkit";

const patientInfoSlice = createSlice({
  name: "patientInfo",
  initialState: null,
  reducers: {
    setInfo: (state, action) => {
      return action.payload;
    }
  }

});

export const patientInfoSliceReducer = patientInfoSlice.reducer;
export const { setInfo } = patientInfoSlice.actions;