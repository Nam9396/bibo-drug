import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">BiboDrug</div>
      <div className="nav">
        <NavLink to="/" className="nav-item">Kê đơn</NavLink>
        <NavLink to="/example" className="nav-item">Đơn mẫu</NavLink>
        <NavLink to="/info" className="nav-item">Thông tin</NavLink>
      </div>
    </div>
  )
};


export default Header;