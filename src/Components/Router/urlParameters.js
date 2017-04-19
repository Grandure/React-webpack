import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

const ParamsExample = () => (
	<Router>
		<div>
			<h2>内容</h2>
			<ul>
				<li><Link to="/one">One</Link></li>
				<li><Link to="/two">Two</Link></li>
				<li><Link to="/three">Three</Link></li>
				<li><Link to="/four">Four</Link></li>
			</ul>
			<Route path='/:id' component={Child}/>
		</div>
	</Router>
)
const Child = ({
	match
}) => (
	<div>Id:{match.params.id}</div>
)

export default ParamsExample