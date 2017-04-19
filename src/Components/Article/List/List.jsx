import React from 'react';

class Item extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className={this.props.setClass}>
				<input type="text" id="text-input"/>
				<input type="button" value={this.props.name}/>
			</div>
		)
	}
}

export default Item