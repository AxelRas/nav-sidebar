import React from "react";
import "./Navbar.css";

export default function Nav(props) {
  return (
    <div className="navbar">
      {props.items.map((item, i) => (
        <p key={`nav-item-${i}`}>{item}</p>
      ))}
    </div>
  );
}
