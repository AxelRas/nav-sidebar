import React from "react";
import "./Sidebar.css";

export default function Sidebar(props) {
  
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <p>Some website</p>
        <div className="sidebar-quit" onClick={props.onToggleSidebar}>
          <p>X</p>
        </div>
      </div>
      <ul>
        {props.items.map((item, i) => (
          <li key={`sidebar-item-${i}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
