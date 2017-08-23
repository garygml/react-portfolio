import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {

	changeLanguage(lang) {
		this.props.setLanguage(lang);
	}

	render() {

	const containerStyle = {
    	background: "rgba(0,0,0,0.6)",
    	width: "100vw",
    	left: "0",
    	top: "0",
    	zIndex: "9998",
    	position: "fixed"
	};

	const menuItemStyle = {
		marginLeft: "50vw",
		transform: "translateX(-50%)"
	};

	const ulStyle = {
		margin: "0",
	};

	const listStyle = {
		display: "inline-block",
		margin: "10px 10px"

	};

	return (
			<div id="myNavbar" style={containerStyle}>
    			<div style={menuItemStyle}>
		            <ul style={ulStyle} >
		                <li style={listStyle}><Link to="/">Home</Link></li>
		                <li style={listStyle}><Link to="/projects">Projects</Link></li>
		                <li style={listStyle}><Link to="/my-life">My Life</Link></li>
		                <li style={listStyle}><Link to="/resume">Resume</Link></li>
		                <li style={listStyle}><Link to="/contact-me">Contact Me</Link></li>
		                <li style={listStyle}>
		                <Link to="#" onClick={() => this.changeLanguage("ZH_CN")}>查看中文</Link> 
		                <Link to="#" onClick={() => this.changeLanguage("EN")} >View In English</Link>
		                </li>
		            </ul>
    			</div>
			</div>
		);
	}
}