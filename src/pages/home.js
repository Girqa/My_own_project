import React from 'react';
import Serials from "../components/serials";
import InputSerial from "../components/inputSerial";
import "./home.css";

class Home extends React.Component {
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
  			<>
   		  	<div className="content">
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
  		  	<a href="B:\Sublime Text 3\React\App2\src\note.png" title="B:\Sublime Text 3\React\App2\src\note.png">НапоминалОчка</a>
  			</>
  			);
  		}
  	}
 export default Home;