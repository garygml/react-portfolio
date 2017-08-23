import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import Footer from "./components/Footer";


const app = document.getElementById('app');

ReactDOM.render(
	<BrowserRouter>
		<Layout />
	</BrowserRouter>, 
	app);