import React, { Component } from "react";
import SingleListItem from './components/SingleListItem';
import logo from './assets/images/alaska-airlines-squarelogo-1453767867811.png';
import sky from './assets/images/sky.png';
import './App.css';
import { NAV_DATA } from './menu';

export default class App extends Component {

  state = {
    navShowing: false,
    secondaryNavTitle: "",
    secondaryNavOptions: []
  }
  render() {
    return (
      <div>
        <nav>
          <a href="/">
            <img src={logo} alt="Alaska Airlines Logo" />
          </a>
          {this.renderOpenClose()}
          {this.renderPrimaryNav()}
          {this.renderSecondaryNav()}
        </nav>
      </div>
    );
  }
  renderOpenClose() {
    if (this.state.navShowing) {
      return (
        <button className="icon" onClick={() => this.closeNav()}>
          <i className="fas fa-times fa-2x"></i>
        </button>
      );
    } else {
      return (
        <button className="icon" onClick={() => this.openNav()}>
          <i className="fas fa-bars fa-2x"></i>
        </button>
      );
    }
  }
  renderPrimaryNav() {
    return (
      <div id="mySidenav" className="sidenav">
        <div className="greeting-container">
          <div className="greeting-centered-text">
            <p>Hello {NAV_DATA.userName}</p>
          </div>
          <img src={sky} alt="clouds in the sky" />
        </div>
        <ul id="menu">
          {
            NAV_DATA.usersOptions.map(element => {
              return <SingleListItem menuItem={element} key={element.title} openSubNavCallBack={(title, optionsArr) => this.openSubNav(title, optionsArr)} />;
            })
          }
        </ul>
      </div>
    );
  }
  renderSecondaryNav() {
    return (
      <div id="fromRight" className="from-left-side-nav">
        <div id="second-nav-header">
          <p>{this.state.secondaryNavTitle}</p>
          <button className="white" onClick={() => this.closeSubNav()}>
            <i className="fas fa-times fa-lg"></i>
          </button>
        </div>
        {
          this.state.secondaryNavOptions.map(element => {
            return (
              <div key={element.title}>
                <button className="dropdown-btn" onClick={(e) => {
                  let button = e.target.parentElement;
                  button.classList.toggle("active");
                  console.log(button);
                  let dropDownContent = button.nextElementSibling;
                  console.log(dropDownContent);
                  if (dropDownContent.classList.contains("dropdown-container")) {
                    dropDownContent.classList.add("dropdown-container-active");
                    dropDownContent.classList.remove("dropdown-container");
                  } else {
                    dropDownContent.classList.add("dropdown-container");
                    dropDownContent.classList.remove("dropdown-container-active");
                  }
                }}>
                  {element.title}
                  <i className="fas fa-chevron-down fa-sm"></i>
                </button>
                <div className="dropdown-container">
                  <ul>
                    {
                      element.options.map(option => {
                        return <li key={option}>{option}</li>;
                      })
                    }
                  </ul>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    this.setState({ navShowing: true });
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    this.setState({ navShowing: false });
  }
  openSubNav(title, optionsArr) {
    this.setState({ secondaryNavTitle: title, secondaryNavOptions: optionsArr });
    document.getElementById("fromRight").style.width = "308px";
    document.getElementById("menu").style.marginright = "308px";
    console.log(optionsArr);
  }
  closeSubNav() {
    document.getElementById("fromRight").style.width = "0";
    document.getElementById("menu").style.marginright = "0";
  }
  dropDown() {
    let dropdowns = document.getElementsByClassName("dropdown-btn");
    console.log(dropdowns);
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", () => { this.classList.toggle("active") });
      let dropDownContent = this.nextElementSibling;
      if (dropDownContent.style.display === "block") {
        dropDownContent.style.display = "none";
      } else {
        dropDownContent.style.display = "block";
      }
    });
  }
}