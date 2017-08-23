import React from "react";

import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import MyLife from "./MyLife";
import Nav from "./Nav";
import NavButton from "./NavButton";
import Projects from "./Projects";
import Resume from "./Resume";



import { Route, Switch } from "react-router-dom";

export default class Layout extends React.Component {

	constructor() {
		super();
		this.state = {
			lang: "EN",
			navOpened: true
		};
	}

	setLanguage(lang) {
		this.setState({lang});
	}

	toggleNav() {
		this.setState({navOpened: !this.state.navOpened});
	}

	render() {

		const navPanel = this.state.navOpened === true ? <Nav setLanguage={this.setLanguage.bind(this)} /> : null;
		return (
			<div>
			<NavButton toggleNav={this.toggleNav.bind(this)} /> 
			{navPanel}
			<Header />
			<Switch>
				<Route path="/" exact><Home lang={this.state.lang}/></Route>
				<Route path="/projects" exact  component={Projects} />
				<Route path="/my-life" exact  component={MyLife} />
				<Route path="/resume" exact component={Resume} />
				<Route path="/contact-me" exact component={ContactMe} />
			</Switch>
			<Footer />

			</div>
		);
	}
}