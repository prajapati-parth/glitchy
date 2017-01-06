import React from 'react'
import GlitchyBox from '../components/glitchy_box_component'

export default class AppComponent extends React.Component {
	//constructor
	constructor(props) {
		super(props);
		this.state = {
			indexId: 1,
			boxArr: [{id: 1}]
		}
	}

	//events
	handleTabPressEvent(currentKey) {
		if(currentKey == this.state.indexId) { //only add new element if tab pressed on last child
			var boxArr_next = [{id: this.state.indexId+1}]
			this.setState({
				indexId: this.state.indexId+1,
				boxArr: this.state.boxArr.concat(boxArr_next)
			})
		}
	}

	handleBackspaceEvent(currentKey) {
		var boxArr_current = this.state.boxArr,
			selector = "gb"+currentKey,
			eleValue = document.getElementById(selector).value

		if(!eleValue) {
			this.state.boxArr.filter(function(element, index) {
				if(element.id === currentKey) {
					boxArr_current.splice(index, 1)
				}
			})

			this.setState({
				boxArr: boxArr_current
			})

			if(currentKey-1>0) {
				let selector_previous = "gb"+(currentKey-1)
				setTimeout(function() {
					document.getElementById(selector_previous).focus()
				}, 50)
			} else if (document.getElementsByClassName('gbMainContainer').length) {
				setTimeout(function() {
					document.getElementsByClassName('gbMainContainer')[0].focus()
				}, 50)
			}
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
                				itemId={item.id}
								itemIndex={index}
                				key={item.id}
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
