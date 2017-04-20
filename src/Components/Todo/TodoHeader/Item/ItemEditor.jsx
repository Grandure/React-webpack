import React from 'react';

class ItemEditor extends React.Component{
	render(){
		return(
			<li onMouseEnter={this.MouseEnterHandle.bind(this)} 
			    onMouseLeave={this.MouseLeaveHandle.bind(this)}>
			    <input type="text" onClick={this.ClickHandle.bind(this)}/>
			    <input type="button" value='确认' className='content-box'/>
			    <button className='content-change' ref='myChange'>取消</button>
			</li>
		)
	}
}


export default ItemEditor