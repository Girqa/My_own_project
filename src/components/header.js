import React, {Component} from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from "./dumLogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

import XXX from "../pages/xxx";
import Home from "../pages/home";



const Header = () => (	
	<>
	<Navbar sticky="top" collapseOnSellect expand="md" dialogClassName="navbar">
		<Container>
			<Navbar.Brand href="/">
				<img 
					src={logo}	
					height = "40rem"
					alt="Logo"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/xxx">XXX</Nav.Link>
				</Nav>
				<Form inline >
					<FormControl 
						type="text"
						placeholder="Search"
						className="mr-sm-2"
					/>
					<Button variant="outline-info">Search</Button>
				</Form>
			</Navbar.Collapse>
		</Container>
	</Navbar>
	
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/xxx" component={XXX} />
		</Switch>
	</Router>
	</>

)

export default Header;