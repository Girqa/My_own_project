import React from 'react';


const Serials = (props) => {
	const DelBtn = () => (
		<button onClick={props.delItem}>Удалить</button>
		)
	const listItems = props.list;
	return (
		<li className="toDoList">
			<div className="serials">{props.item}</div>
			<DelBtn className="del-button"/>
		</li>
		)
}
	

export default Serials;