import React from 'react';

import Header from './Header/Head.jsx';
import Article from './Article/Article.jsx';
import Footer from './Footer/Footer.jsx';

const App = React.createClass({
	render() {
		return (
			<div className={this.props.name}>
				<Header name='Header' />
				<Article name='Article'/>
				<Footer name='Footer'/>
			</div>
		)
	}
})

export default App