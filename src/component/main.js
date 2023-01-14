import React from "react";
import "./main.css";
import PatientInfo from "../sub-component/patientInfo";
import SelectDrug from "../sub-component/selectDrug";
import Recipe from "../sub-component/recipe";
import { useSelector, useDispatch } from "react-redux";

const Main = () => {
  const recipe = useSelector(state => state.recipe);

  return (
    <>
      <div className="outer-box">
        <PatientInfo />
      </div>

      <div className="outer-box">
        <SelectDrug />
      </div>

      {/* <div className="outer-box">
        <Recipe />
      </div> */}
      {console.log(recipe)}
    </>
  )
};

export default Main;