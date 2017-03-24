import React from 'react';

const App = React.createClass({
	render() {
		return (
			<div>{this.props.name}
				<h2 className='header'>我是二级标题</h2>
				<div className='center'>我错了</div>
				<p className='footer'>Hello World</p>
				<p className='foot'>Greed is Good!</p>
				<p>666</p>
			</div>
		)
	}
})

export default App