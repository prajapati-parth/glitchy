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

	//UTILITY
	removeByAttr(arr, attr, value) {
		var i = arr.length;
		while(i--){
			if( arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value ) ){
				arr.splice(i,1);
			}
		}
		return arr;
	}

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
	//utility

	//events
	handleTabPressEvent(itemIndex) {
		//insert new item only if the current position is the last postion
		if(itemIndex == this.state.boxArr.length-1) {
			this.setState({
				boxArr: this.state.boxArr.concat([{id: this.state.boxArr.length}])
			})
		}
	}

	handleBackspaceEvent(itemIndex, itemValue) {
		// remove the current glitchybox only if it has no text in it or more than one of them exists
		if(!itemValue && this.state.boxArr.length > 1) {
			this.setState({
				boxArr: this.removeByAttr(this.state.boxArr, "id", itemIndex)
			})
		}
	}

    render() {
        return (
            <div className="glitchyMainContiner row">
            	<div className="col-sm-6 stepsContainer">
                	<p className="stepsContainerTitle">Steps:</p>
                	<GlitchyBox
                		elements={this.state.boxArr}
                		tabPressed={this.handleTabPressEvent.bind(this)}
	        			backspacePressed={this.handleBackspaceEvent.bind(this)}
                	/>
                </div>
            </div>
        )
    }
}
