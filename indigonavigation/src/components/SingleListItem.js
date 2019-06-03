import React, {Component} from "react";
import { NAV_DATA } from '../menu';

export default class SingleListItem extends Component{
    constructor(props){
        super(props);
        this.state = {data: NAV_DATA.data}
    }
    componentDidMount(){}
    render(){
        return(
            <li>
                <span className="grow-1 padding-15"><i className="fas fa-plane fa-lg "></i></span>
                <span className="grow-10">{this.props.title}</span>
                <button className="grow-1 padding-15"><i className="fas fa-chevron-right fa-lg"></i></button>
            </li>
        )
    }
}