import React from 'react';
import Item from './List/List.jsx'

var pic = require('file-loader!./test.bmp')
const Input = React.createClass({
	render(){
		return(
			<div className={this.props.setClass}>
				<input type={this.props.setType} placeholder='请输入内容'/>
			</div>
		)
	}
})

function Pic(props){
	return (
		<div className={props.setClass}>{props.value}
			<img src={props.setSrc} alt=""/>
			<div className="pic"></div>
			<div data-id={props.setId}>{props.name}</div>
		</div>
	)
}

const Article = React.createClass({
	
	render(){
		return(
			<article className={this.props.name}>
				<Item name='+' setClass='myItem'/>
			</article>
		)
	}
})


export default Article