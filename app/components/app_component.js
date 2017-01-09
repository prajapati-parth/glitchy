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
		var selector_next = "gb"+(key+1),
			element_focus = document.getElementById(selector_next)

		setTimeout(function() {
			//if previous element exists, focus it else focus the first element
			if (element_focus) {
				element_focus.focus()
			} else {
				let container_focus = document.getElementsByClassName('gbMainContainer')[0]
				container_focus.getElementsByTagName('input')[boxArr_current.length-1].focus()
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
			delete boxArr_current[currentKey] //using delete because splice didnt seem to work
				
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
