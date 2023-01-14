import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "../slice/infoSlice";
import "./patientInfo.css"

const PatientInfo = () => {
  const [ age, setAge ] = useState();
  const [ height, setHeight ] = useState();
  const [ weight, setWeight ] = useState();
  const dispatch = useDispatch();
  const patientInfo = useSelector(state => state.patientInfo);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setInfo({
      age: age,
      height: height, 
      weight: weight
    }));
    setAge("");
    setHeight("");
    setWeight("");
  }

  return (
    <div className="patient-info">
        <h2>Thông tin bệnh nhân</h2>
        <form className="info-form" onSubmit={handleSubmit}>
          {/* <div className="input-field">
            <label htmlFor="sex" className="sex-info-label">Nam</label>
            <input
              type="radio"
              name="sex"
            />
            <label htmlFor="sex" className="sex-info-label" style={{marginLeft: "20px"}} >Nữ</label>
            <input
              type="radio"
              name="sex"
            /><br/>
          </div>
          <div className="input-field">
            <label htmlFor="name" className="info-label">Tên bệnh nhân</label>
            <input
              type="text"
              className="info-input"
              name="name"
            /><br/>
          </div> */}
          <div className="input-field">
            <label htmlFor="age" className="info-label">Tuổi</label>
            <input
              type="number"
              className="info-input"
              name="age"
              required
              value={age || ""}
              onChange={e => setAge(e.target.value)}
            /><br/>
          </div>
          <div className="input-field">
            <label htmlFor="hieght" className="info-label">Chiều cao (kg)</label>
            <input
              type="number"
              className="info-input"
              name="height"
              required
              value={height || ""}
              onChange={e => setHeight(e.target.value)}
            /><br/>
          </div>
          <div className="input-field">
            <label htmlFor="weight" className="info-label">Cân nặng (cm)</label>
            <input
              type="number"
              className="info-input"
              name="weight"
              required
              value={weight || ""}
              onChange={e => setWeight(e.target.value)}
            /><br/>
          </div>
          <button className="info-button" type="submit" >Submit</button>

          <div>
            {!patientInfo && <div></div>}
            {patientInfo  && <div>{`Tuổi: ${patientInfo.age} -- Cân nặng: ${patientInfo.height} -- Chiều cao: ${patientInfo.weight}`}</div>}
          </div>

        </form>
        
    </div>   
  )
};

export default PatientInfo;