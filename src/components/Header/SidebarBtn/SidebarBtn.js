import React from "react";
import "./SidebarBtn.css";

export default function SidebarBtn(props) {
  return (
    <div onClick={props.onClick} className="sidebar-btn">
      <p>-</p>
      <p>-</p>
      <p>-</p>
    </div>
  );
}
