import React, { Component } from "react";

export default class SingleDropDownItem extends Component {
    state = {
        dropDownShowing: false
    }
    render() {
        return (
            <div>
                {this.renderOpenCloseDropdown(this.props.dropDownItem)}
                <div className="dropdown-container">
                    <ul>
                        {
                            this.props.dropDownItem.options.map(option => {
                                return <li key={option} className="px-22">{option}</li>;
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    renderOpenCloseDropdown(element) {
        
        return (
            <button className="dropdown-btn" onClick={(e) => {
                let button = e.target.parentElement;
                button.classList.toggle("active");
                //console.log(button);
                let dropDownContent = button.nextElementSibling;
                //console.log(dropDownContent);
                if (dropDownContent.classList.contains("dropdown-container")) {
                    dropDownContent.classList.add("dropdown-container-active");
                    dropDownContent.classList.remove("dropdown-container");
                    this.setState({ dropDownShowing: true });
                } else {
                    dropDownContent.classList.add("dropdown-container");
                    dropDownContent.classList.remove("dropdown-container-active");
                    this.setState({ dropDownShowing: false });
                }
            }}>
                {element.title}
                {this.renderDropDownArrow(element)}
            </button>
        );
    }
    renderDropDownArrow(element) {
        if (element.options.length === 0) {
            return;
        } else {
            return (
                <i className={`fas fa-chevron-${this.getDropDownIconClass()} fa-sm`}></i>
            );
        }
    }
    getDropDownIconClass() {
        if (this.state.dropDownShowing === true) {
            return "up";
        } else {
            return "down";
        }
    }
}