import React from 'react';

function Menu(props) {
const headListDateB = ['糯米','新闻','hao123','地图','视频','贴吧'];
	return (
		<div>
				<a>
		<strong>{headListDateB[0]}</strong>
	</a>
	<a>
		<strong>{headListDateB[1]}</strong>
	</a>
	<a>
		<strong>{headListDateB[2]}</strong>
	</a>
	<a>
		<strong>{headListDateB[3]}</strong>
	</a>
	<a>
		<strong>{headListDateB[4]}</strong>
	</a>
	<a>
		<strong>{headListDateB[5]}</strong>
	</a>
		</div>

	)
}

const headListDate = ['登录','设置'];

const Article = React.createClass({
	render(){
		return(
			<div className='article'>
				<Menu />
			</div>
		)
	}
})


export default Article