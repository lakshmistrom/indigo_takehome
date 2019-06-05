import React, { Component } from "react";

export default class SingleListItem extends Component {
    render() {
        return (
            <li id="#list-item" className={this.addPadding()}>
                <span className="grow-1 py-15"><i className="fas fa-plane fa-lg "></i></span>
                <span className="grow-10">{this.props.menuItem.title}</span>
                {this.renderArrow()}
            </li>
        )
    }
    renderArrow() {
        if (this.props.menuItem.options.length === 0) {
            return;
        } else {
            return (
                <button 
                className="opaque-button grow-1 py-15 px-22" 
                onClick={() => this.subMenu()}>
                    <i className="fas fa-chevron-right fa-lg"></i>
                </button>
            );
        }
    }
    addPadding() {
        if (this.props.menuItem.options.length === 0) {
            return "px-22";
        }
    }
    subMenu() {
        this.props.openSubNavCallBack(this.props.menuItem.title, this.props.menuItem.options);
    }
}