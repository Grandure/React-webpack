import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
import '../TodoHeader/TodoHeader.less';

class Item extends React.Component{
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
	}
	MouseLeaveHandle(){
		ReactDOM.findDOMNode(this).style.backgroundColor='#ccc';
		this.refs.myHover.style.display='none';
	// 	ReactDOM.findDOMNode(this).style.display = 'none';
	 }
	render(){
		return(
			<li onMouseEnter={this.MouseEnterHandle.bind(this)} 
			    onMouseLeave={this.MouseLeaveHandle.bind(this)}>
			    <input type="radio" checked={this.state.value} onClick={this.ClickHandle.bind(this)}/>
			    <span>{this.props.mydata}</span>
			    <input type="button" value='删除' className='content-box'  ref='myHover' data-index={this.props.dataIndex} onClick={this.props.deleteItem}/>
			</li>
		)
	}
}

export default Item