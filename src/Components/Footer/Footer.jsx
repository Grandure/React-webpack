import React from 'react';

const Footer = React.createClass({
	render(){
		return(
			<div className='footer'>{this.props.name}</div>
		)
	}
})

export default Footer