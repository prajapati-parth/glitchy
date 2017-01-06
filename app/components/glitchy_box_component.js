import React from 'react'

export default class GlitchyBox extends React.Component {
	//events
	keyPress(event) {
		switch(event.keyCode) {
			case 9:
				if(!event.shiftKey) { //skips if shift+Tab is pressed
					this.props.tabPressed(this.props.itemId)
				}
				break;

			case 8:
				this.props.backspacePressed(this.props.itemId)
		}
	}

	render() {
		return (
			<div className="form-group">
				<input id={this.props.itemId} type="text" className="form-control" onKeyDown={this.keyPress.bind(this)} />
			</div>
		)
	}
}