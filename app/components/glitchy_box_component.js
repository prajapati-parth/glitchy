import React from 'react'

export default class GlitchyBox extends React.Component {
	//events
	keyPress(id, event) {
		switch(event.keyCode) {
			case 9:
				if(!event.shiftKey) { //skips if shift+Tab is pressed
					this.props.tabPressed(id)
				}
				break

			case 8:
				this.props.backspacePressed(id, event.currentTarget.value)
				break
		}
	}

	render() {
		return (
			<div className="gbMainContainer">
				{
					this.props.elements.map( (element, index) => {
						return (
							<div style={componentStyle.gbContainer} className="input-group" key={element.id}>
								<span className="input-group-addon">{"#"+index}</span>
	        					<input type="text" id={element.id} className="form-control" onKeyDown={this.keyPress.bind(this, element.id)}/>
        					</div>
        				)
        			})
				}
			</div>
		)
	}
}

const componentStyle = {
	gbContainer: {
		marginBottom: '15px'
	}
}
