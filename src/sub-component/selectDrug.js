import React, { useState } from "react";
import "./selectDrug.css";
import { useDispatch } from "react-redux";
import { filterDrug } from "../slice/chooseDrug";
import { useSelector } from "react-redux";
import mainDrug from "../data/mainDrug";
import { addRecipe } from "../slice/recipeSlice";

const SelectDrug = () => {
  const dispatch = useDispatch();
  const drugArray = useSelector(state => state.chooseDrug);
  const patientInfo = useSelector(state => state.patientInfo)
  const recipe = useSelector(state => state.recipe)
  const [ name, setName ] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterDrug(name.toLowerCase()));
  }



  return (
    <div className="selectDrug">
      <h2>Chọn loại thuốc</h2>
      <form className="drug" onSubmit={handleSubmit}>
        <label htmlFor="drugName" className="drugName-label">Tên thuốc</label>
        <input
          type="text"
          name="drugName"
          className="drugName-input"
          value={name || ''}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Tìm</button>        
      </form>

      <div className="drug-list">
        {drugArray.map(item => (
          <div className="list-banner" key={item.id}>
            <p>{item.name}</p>
            <span 
              className="material-symbols-outlined"
              onClick={() => {
                const mainGroup = mainDrug.filter(element => element.name === item.group)[0];
                const finalInfo = {
                  age: patientInfo.age,
                  weight: patientInfo.weight,
                  subGroup: item,
                  mainGroup: mainGroup
                }
                dispatch(addRecipe(finalInfo));
                alert(recipe)
              }}
            >add</span>
          </div>

        ))}
        
      </div>
    </div>
  )
};

export default SelectDrug;