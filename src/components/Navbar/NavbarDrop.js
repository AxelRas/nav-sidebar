import React from "react";
import "./NavbarDrop.css";

export default function NavbarDrop(props) {
  return <div className="navbar-drop">
    <ul>
      {props.items.map((item, i) => (
        <li key={`sidebar-item-${i}`}>{item}</li>
      ))}
    </ul>
  </div>;
}
