import React from 'react';

const Header = React.createClass({
	render(){
		return(
			<div className='header'>{this.props.name}</div>
		)
	}
})

export default Header