import React, { Component } from "react";
import SingleListItem from './components/SingleListItem';
import logo from './assets/images/alaska-airlines-squarelogo-1453767867811.png';
import sky from './assets/images/sky.png';
import './App.css';
import { NAV_DATA } from './menu';


export default class App extends Component {

  state = {
    navShowing: false
  }

  render() {
    return (
      <div>
        <nav>
          <a href="/">
            <img src={logo} alt="Alaska Airlines Logo" />
          </a>
          {this.renderOpenClose()}
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
                  return <SingleListItem title={element} key={element}/>;
                })
              }

            </ul>
          </div>


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
  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    this.setState({ navShowing: true });
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    this.setState({ navShowing: false });
  }

}


