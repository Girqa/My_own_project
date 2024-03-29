import React from 'react';
import './App.css';
import Serials from "./components/serials";
import InputSerial from "./components/inputSerial";

import Header from "./components/header";

class App extends React.Component {
	constructor(){
		super()

		this.state={
			items: (localStorage.length !==0)&&(localStorage.getItem("Items") !== "") ? localStorage.getItem("Items").split(":;") : [],
		};

		this.addItem = this.addItem.bind(this);
	}

	addItem = item => {
		this.setState( state => {
			const {items} = this.state;
			if (items.indexOf(item) === -1){
				items.push(item);
				localStorage.setItem("Items", items.join(":;"));
			}
			return items;
		})
	};

	delItem = id => {
		let {items} = this.state;
		let filtIt = items.filter((item) => item != items[id])
		this.setState({
			items: filtIt
		});
		localStorage.setItem("Items",filtIt.join(":;"));
	}

	render(){
		const {items} = this.state;
  		return (
  		  <div className="App">
  		    <Header/>
  		  </div>
  		);
	}
}

export default App;
