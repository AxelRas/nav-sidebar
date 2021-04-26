import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

const sidebar = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Sidebar items={props.sideBarItems} />,
        document.getElementById("sidebar-root")
      )}
    </React.Fragment>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navItems: ["Home", "About", "Projects", "Contact", "Profile"],
      sideBarItems: ["Home", "Team", "Projects", "Calendar", "Documents"],
      sideBarShown: false,
    };

    this.onToggleSidebar = this.onToggleSidebar.bind(this);
  }

  onToggleSidebar() {
    if (this.state.sideBarShown) {
      this.setState({
        sideBarShown: false,
      });
      document.querySelector(".sidebar").style.transform = `translateX(-100%)`;
    } else {
      this.setState({
        sideBarShown: true,
      });
      document.querySelector(".sidebar").style.transform = `translateX(0)`;
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
          />
          <Sidebar
            onToggleSidebar={this.onToggleSidebar}
            items={this.state.sideBarItems}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
