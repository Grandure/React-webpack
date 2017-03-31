import React from 'react'

const TreeNode = React.createClass({

	render() {

		const nodeListDOM = [];
		const node = this.props.node;
		for (let nodeId of this.props.node.childIds) {
			var childNode = node.getChild(nodeId);
			nodeListDOM.push(<TreeNode node={childNode} />)
		}
		return (
			return <ul>
				<h3>{node.data('title')}</h3>
				{nodeListDOM}
			</ul>

		)
	}
})