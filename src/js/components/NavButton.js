import React from "react";
import { Link } from "react-router-dom";

export default class NavButton extends React.Component {

	constructor(){
		super();
		this.state = {
			symbol: 'X',
		}
	}

	clickNav() {
		this.props.toggleNav();
		if (this.state.symbol === "X") { 
				this.setState({symbol: "O"})
		}
		else {
			this.setState({symbol: 'X' })
		}
	};

	render() {

	const containerStyle = {
    	width: "25px",
    	height: "25px",
    	left: "10px",
    	top: "10px",
    	zIndex: "9999",
    	position: "fixed",
    	cursor: "pointer",
	};

	return (
			<button href="#" id="navButton" style={containerStyle} onClick={this.clickNav.bind(this)}>
			{this.state.symbol}
			</button>
		);
	}
}