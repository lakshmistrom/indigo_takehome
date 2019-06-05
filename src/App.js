import React, { Component } from "react";
import SingleListItem from './components/SingleListItem';
import logo from './assets/images/alaska-airlines-squarelogo-1453767867811.png';
import sky from './assets/images/sky.png';
import './App.css';
import { NAV_DATA } from './menu';
import SingleDropDownItem from "./components/SingleDropDownItem";

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
    let click = () => this.state.navShowing ? this.closeNav() : this.openNav();
    let icon = this.state.navShowing ? "fa-times" : "fa-bars";

    return (
      <button className="icon" onClick={click}>
        <i className={`fas ${icon} fa-2x`}></i>
      </button>
    );
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
            return <SingleDropDownItem dropDownItem={element} key={element.title} />;
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
}