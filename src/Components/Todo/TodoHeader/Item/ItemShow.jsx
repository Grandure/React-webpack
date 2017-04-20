import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
import '../TodoHeader.less';

class ItemShow extends React.Component{
	constructor(props){
		super(props);
		this.state={
			value:false
		};
	};
	ClickHandle(e){
		this.setState({value:!this.state.value});
	}
	MouseEnterHandle(){
		ReactDOM.findDOMNode(this).style.backgroundColor='#eee';
		this.refs.myHover.style.display='inline-block';
		this.refs.myChange.style.display='inline-block';
	}
	MouseLeaveHandle(){
		ReactDOM.findDOMNode(this).style.backgroundColor='#ccc';
		this.refs.myHover.style.display='none';
		this.refs.myChange.style.display='none';
	// 	ReactDOM.findDOMNode(this).style.display = 'none';
	 }

	 modifyHandle(){
	 	console.log(ReactDOM.findDOMNode(this).parentNode.parentNode);
	 }
	render(){
		return(
			<li onMouseEnter={this.MouseEnterHandle.bind(this)} 
			    onMouseLeave={this.MouseLeaveHandle.bind(this)}>
			    <input type="radio" checked={this.state.value} onClick={this.ClickHandle.bind(this)}/>
			    <span>{this.props.mydata}</span>
			    <input type="button" value='删除' className='content-box'  ref='myHover' data-index={this.props.dataIndex} onClick={this.props.deleteItem}/>
			    <button className='content-change' ref='myChange' onClick={this.modifyHandle.bind(this)}>修改</button>
			</li>
		)
	}
}

export default ItemShow