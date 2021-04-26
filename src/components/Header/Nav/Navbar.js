import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <React.Fragment>
      <div className="navbar">
        {props.items.map((item, i) => (
          <p key={`nav-item-${i}`}>{item}</p>
        ))}
      </div>
      <div onClick={props.onClick} className="navbar-btn">
        <p>-</p>
        <p>-</p>
        <p>-</p>
      </div>
    </React.Fragment>
  );
}
