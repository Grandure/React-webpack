import React from 'react';

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
				<Pic value='我是图片部分' setClass='picWapper' setId='myId' name=''/>
				<Input setClass='inputWapper' setType='text' />
			</article>
		)
	}
})


export default Article