import React from "react";
import "./recipe.css";

const Recipe = () => {
  return (
    <div className="recipe">
      <h2>Đơn thuốc</h2>
      <div className="recipe-detail">
        <div className="detail">
          <input
            type="text"
            name="drugName"
            value="Hapacol 250mg"
            className="detail-input"
          />
          <input
            type="text"
            name="element"
            value="Paracetamol"
            className="detail-input"
          /><br/>
          <input
            type="text"
            name="detail"
            value="1 viên mỗi lần, 4 lần mỗi ngày, cách nhau 6 giờ"
            className="detail-input-large"
          /><br/>
          <input
            type="text"
            name="notice"
            value="Không uống nhiều hơn 4 lần/ngày"
            className="detail-input-large"
          />
        </div>

        <div className="detail">
          <input
            type="text"
            name="drugName"
            value="Hapacol 250mg"
            className="detail-input"
          />
          <input
            type="text"
            name="element"
            value="Paracetamol"
            className="detail-input"
          /><br/>
          <input
            type="text"
            name="detail"
            value="1 viên mỗi lần, 4 lần mỗi ngày, cách nhau 6 giờ"
            className="detail-input-large"
          /><br/>
          <input
            type="text"
            name="notice"
            value="Không uống nhiều hơn 4 lần/ngày"
            className="detail-input-large"
          />
        </div>

        <div className="detail">
          <input
            type="text"
            name="drugName"
            value="Hapacol 250mg"
            className="detail-input"
          />
          <input
            type="text"
            name="element"
            value="Paracetamol"
            className="detail-input"
          /><br/>
          <input
            type="text"
            name="detail"
            value="1 viên mỗi lần, 4 lần mỗi ngày, cách nhau 6 giờ"
            className="detail-input-large"
          /><br/>
          <input
            type="text"
            name="notice"
            value="Không uống nhiều hơn 4 lần/ngày"
            className="detail-input-large"
          />
        </div>
      </div>
    </div>
  )
};

export default Recipe;