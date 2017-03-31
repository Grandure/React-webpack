import React from 'react';

function Item(props){
		const bool = props.bool
		// {props.bold? <strong><li className={props.setClass}>{props.value}</li></strong>:<li className={props.setClass}>{props.value}</li>}
		if(bool){
		return	(
					<li className={props.setClass}>
						<strong>
							<a href={props.href}>{props.value}</a>
						</strong>
					</li>
				)
		}
		return (
					<li className={props.setClass}>
						<a href={props.href}>{props.value}</a>
					</li>
				)
}
function ListItem(props){
	const datas = props.datas;
	return(
		<ul>
			{datas.map((data,index)=><Item key={index} 
										   value={data.value} 
										   bool={data.bold} 
										   href={data.url}
										   setClass={props.setListClass}
										   />)}
		</ul>
	)
}
const arrydata = ['糯米','新闻','hao123','地图','视频','贴吧','登录','设置'];

const datas = [
	{
		'value':'糯米',
		'bold':true,
		'url':'http://www.baidu.com'
	},
	{
		'value':'新闻',
		'bold':true,
		'url':'http://www.taobao.com'
	},
	{
		'value':'hao123',
		'bold':true,
		'url':'http://www.taobao.com'
	},
	{
		'value':'地图',
		'bold':true,
		'url':'http://www.taobao.com'
	},
	{
		'value':'视频',
		'bold':true,
		'url':'http://www.taobao.com'
	},
	{
		'value':'贴吧',
		'bold':true,
		'url':'http://www.taobao.com'
	},
	{
		'value':'登录',
		'bold':false,
		'url':'http://www.taobao.com'
	},
	{
		'value':'设置',
		'bold':false,
		'url':'http://www.taobao.com'
	}
]

const Header = React.createClass({
	render(){
		return(
			<header className={this.props.name}>
				<ListItem datas={datas} setListClass='headList'/>
			</header>
		)
	}
})

export default Header