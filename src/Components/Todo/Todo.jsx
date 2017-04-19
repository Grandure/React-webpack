import React from 'react'

import TodoHeader from './TodoHeader/TodoHeader.jsx'
import TodoContent from './TodoContent/TodoContent.jsx'

class Todo extends React.Component{

	constructor(props){
		super(props);
	};

	render(){
		return(
			<div>
				<TodoHeader name='添加' setClass='myTodoHeader'/>
			</div>
		)
	}
}

export default Todo