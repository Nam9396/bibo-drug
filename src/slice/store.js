import { configureStore } from "@reduxjs/toolkit";
import { chooseDrugSliceReducer } from "./chooseDrug";
import { patientInfoSliceReducer } from "./infoSlice";
import { recipeSliceReducer } from "./recipeSlice";

const store = configureStore({
  reducer: {
    chooseDrug: chooseDrugSliceReducer,  
    patientInfo: patientInfoSliceReducer,
    recipe: recipeSliceReducer,
  }
});

export default store;