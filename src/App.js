import React from 'react';
import './App.css';
import Serials from "./components/serials";
import InputSerial from "./components/inputSerial";


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
  		    <header>
  		      <nav className="dws-menu">
  		      	<ul>
  		      		<li><a href="#"><i className="fa fa-"></i>Разделы</a></li>
  		      		<li><a href="#"><i className="fa fa-"></i>Профиль</a></li>
  		      		<li><a href="#"><i className="fa fa-"></i>Друзья</a></li>
  		      		<li><a href="#"><i className="fa fa-"></i>Форум</a></li>
  		      		<li><a href="#"><i className="fa fa-"></i>Карта пользователей</a></li>
  		      	</ul>
  		      </nav>
  		    </header>
  		    <div className="content">
  		    	<div className="flexItems">
  		    		<ol>
  		    			{items.map ((item, index) => (
  		    					<Serials
  		    					item = {item}
  		    					id = {index}
  		    					delItem = {() => this.delItem(index)}
  		    					/>
  		    				))}
  		    		</ol>
  		    	</div>
  		    	<InputSerial addItem={this.addItem} />
  		  </div>
  		  <a href="B:\Sublime Text 3\React\App2\src\note.png" title="B:\Sublime Text 3\React\App2\src\note.png">НапоминалОчка</a>
  		  </div>
  		);
	}
}
export default App;
