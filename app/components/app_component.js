import React from 'react'
import GlitchyBox from '../components/glitchy_box_component'

export default class AppComponent extends React.Component {
	//constructor
	constructor(props) {
		super(props);
		this.state = {
			boxArr: [{id: 0}]
		}
	}

	//utility
	focusNextItem(key, boxArr_current) {
		setTimeout(function() {
			var selector_next = "gb"+(key),
			element_focus = document.getElementById(selector_next)

			//if previous element exists, focus it else focus the first element
			if (element_focus) {
				element_focus.focus()
			} else {
				// let container_focus = document.getElementsByClassName('gbMainContainer')
				// container_focus.getElementsByTagName('input')[boxArr_current.length-1].focus()
				let focusId = "#gb" + (boxArr_current.length-1).toString()
				document.querySelectorAll('.gbMainContainer '+focusId)[0].focus()
			}
		}, 50)
	}

	//events
	handleTabPressEvent(itemIndex) {
		if(itemIndex == this.state.boxArr.length-1) {
			this.setState({
				boxArr: this.state.boxArr.concat([{id: this.state.boxArr.length}])
			})
		}
	}

	handleBackspaceEvent(currentKey) {
		var boxArr_current = this.state.boxArr,
			selector = "gb"+currentKey,
			eleValue = document.getElementById(selector).value

		//remove the current glitchybox only if it has no text in it or more than one of them exists
		if(!eleValue && boxArr_current.length > 1) {
			boxArr_current.splice(currentKey, 1)
			
			this.setState({
				boxArr: boxArr_current
			})

			this.focusNextItem(currentKey, boxArr_current)
		}
	}

    render() {
        return (
            <div className="glitchyMainContiner row">
            	<div className="col-sm-6 stepsContainer">
                	<p className="stepsContainerTitle">Steps:</p>
                	{
                		this.state.boxArr.map((item, index) => (
                			<GlitchyBox
								itemIndex={index}
                				key={index}
		                		tabPressed={this.handleTabPressEvent.bind(this)}
		                		backspacePressed={this.handleBackspaceEvent.bind(this)}
		                	/>
                		))
                	}
                </div>
            </div>
        )
    }
}
