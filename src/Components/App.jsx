import React from 'react';

import Header from './Header/Head.jsx';
import Article from './Article/Article.jsx';
import Footer from './Footer/Footer.jsx';
import RouteConfigExample from './Router/router'
import BasicExample from './Router/BaseRouter'


const numbers = [1, 2, 3, 4, 5];
const App = React.createClass({
	render() {
		return (
			<div className={this.props.name}>
				<BasicExample />
			</div>
		)
	}
})

export default App