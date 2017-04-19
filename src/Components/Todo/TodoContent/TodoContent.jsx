import React from 'react'

class Item extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<li className={this.props.setMydata}>{this.props.list}</li>
		)
	}
}
class ListItem extends React.Component{
	constructor(props){
		super(props);
	};
	render(){
		const datas = this.props.datas;
		return(
			<ul>
				{datas.map((data, index)=><Item key={index} list={data} />)}
			</ul>
		)
	}
}

const myData = [
	'我是第一条',
	'我是第二条',
	'我是第三条',
	'我是第四条',
];

class TodoContent extends React.Component{
	
	constructor(props){
		super(props);
	
	};
	render(){
		return(
			<div className={this.props.setClass}><ListItem datas={myData} /></div>
		)
	}
}

export default TodoContent





