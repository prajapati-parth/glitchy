import React from 'react'

export default class GlitchyBox extends React.Component {
	//events
	keyPress(event) {
		if(event.keyCode == 9) {
			console.log(event)
			this.props.tabPressed()
		}
	}

	render() {
		return (
			<input type="text" className="form-control" onKeyDown={this.keyPress.bind(this)} />
		)
	}
}