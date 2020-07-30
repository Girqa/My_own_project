import React from 'react';


const Serials = (props) => {
	const DelBtn = () => (
		<button className="del-button" onClick={props.delItem}>Delete</button>
		)
	const listItems = props.list;
	return (
		<li className="toDoList">
			<div className="serials">{props.item}</div>
			<DelBtn/>
		</li>
		)
}
	

export default Serials;