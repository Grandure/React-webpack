import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';

import Item from '../Item/Item.jsx';
import './TodoHeader.less';

class TodoHeader extends React.Component{
	constructor(props){
		super(props);
		this.state={
			value: '',
			newvalue:'',
			counter:0,
			content:[],
			index:0
		};
	};
	changeHandle(e){
		var inputValue = e.target.value;
			this.setState({
				value:inputValue
			});
		}
	componentUpdate(nextProps, nextState) {
		console.log(this.state.value);
	}
	clickHandle(e){
		var myArray = this.state.content;
			myArray.push(this.state.value);
			this.setState({content:myArray});
	}
	blurHandle(event){
		this.setState({
			newvalue:this.state.value
		})
	}
	deleteHandle(index){
		var deleteData = index.target.getAttribute("data-index")
		this.state.content.splice(deleteData, 1);
		this.setState({content:this.state.content});
	}
	render(){
		return(
			<div className={this.props.setClass}>
				<input type="text" 
					   id="text-input"
					   onChange={this.changeHandle.bind(this)} 
					   onBlur = {this.blurHandle.bind(this)}
					   placeholder='请输入要执行的任务' />
				<input type="button" 
					   value={this.props.name} 
					   className='form-control' 
					   onClick={this.clickHandle.bind(this)}/>
				<ul>
					{this.state.content.map((data, index)=>
						<Item key={index} 
						 	  deleteItem={this.deleteHandle.bind(this)} 
						 	  dataIndex={index} 
						 	  mydata={data}>
						</Item>)}
				</ul>
			</div>
		)
	}
}

export default TodoHeader