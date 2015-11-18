import React from 'react'


export default class Label extends React.Component {

	render() {
		return (
			<span>
				Hello {this.props.name}
			</span>
		)
	}

}
