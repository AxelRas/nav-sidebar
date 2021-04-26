import React from "react";
import "./Header.css";
import SidebarBtn from "./SidebarBtn/SidebarBtn";
import Navbar from "./Nav/Navbar";

export default function Header(props) {
  return (
    <div className="header-nav">
      <SidebarBtn onClick={props.onToggleSidebar} />
      <div className="title">
        <h1>Some website</h1>
      </div>
      <Navbar onClick={props.onToggleNav} items={props.navItems} />
    </div>
  );
}
