import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NavbarDrop from "./components/Navbar/NavbarDrop";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navItems: ["Home", "About", "Projects", "Contact", "Profile"],
      sideBarItems: ["Home", "Team", "Projects", "Calendar", "Documents"],
      sideBarShown: false,
      normalNavBar: true,
    };

    this.onToggleSidebar = this.onToggleSidebar.bind(this);
    this.onToggleNav = this.onToggleNav.bind(this);
  }

  onToggleSidebar() {
    if (this.state.sideBarShown) {
      this.setState({
        sideBarShown: false,
      });
      document.querySelector(".sidebar").style.transform = `translateX(-120%)`;
    } else {
      this.setState({
        sideBarShown: true,
      });
      document.querySelector(".sidebar").style.transform = `translateX(0)`;
    }
  }

  onToggleNav() {
    if (this.state.normalNavBar) {
      this.setState({ normalNavBar: false });
      document.querySelector(
        ".navbar-drop"
      ).style.transform = `translateY(72px)`;
    } else {
      this.setState({ normalNavBar: true });
      document.querySelector(
        ".navbar-drop"
      ).style.transform = `translateY(-328px)`;
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Header
            navItems={this.state.navItems}
            onToggleSidebar={this.onToggleSidebar}
            showSideBar={this.state.sideBarShown}
            onToggleNav={this.onToggleNav}
          />
          <Sidebar
            onToggleSidebar={this.onToggleSidebar}
            items={this.state.sideBarItems}
          />
          <NavbarDrop items={this.state.navItems} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
