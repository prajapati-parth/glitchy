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
			eleValue = document.getElementById(currentKey).value

		if(!eleValue) {
			this.state.boxArr.filter(function(element, index) {
				if(element.id === currentKey) {
					boxArr_current.splice(index, 1)
				}
			})
			this.setState({
				boxArr: boxArr_current
			})
		}
	}

    render() {
        return (
            <div className="glitchyMainContiner row">
            	<div className="col-sm-6 stepsContainer">
                	<p className="stepsContainerTitle">Steps:</p>
                	{
                		this.state.boxArr.map((item) => (
                			<GlitchyBox
                				itemId={item.id}
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
