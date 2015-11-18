import React from 'react'
import Label from './Label'


export default class Button extends React.Component {

	render() {
		return (
			<div onClick={this.props.click}>
				<Label name={this.props.name} />
			</div>
		)
	}

}
