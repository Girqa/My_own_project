import React from "react";

export default class InputSerial extends React.Component{
	constructor(props){
		super(props)

		this.state={
			input:''
		}

	}

	handlerChange = (event) => {
		this.setState({
			input: event.target.value
		});
	}

	addItem = () => {
		const {input} = this.state;
		if (input){
			this.props.addItem(input);
			this.setState({input: ''});
		}
	}



render(){
		const {input} = this.state;

		return(
			<form className="inputStr"onSubmit={this.addItem}>
				<input className="inpTask" value={input} placeholder="Input" onChange={this.handlerChange}></input>
				<button className="add-button" type="submit">Add</button>
			</form>
		);}
}