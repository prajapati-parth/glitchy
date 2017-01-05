import React from 'react'
import GlitchyBox from '../components/glitchy_box_component'

export default class AppComponent extends React.Component {
	//constructor
	constructor(props) {
		super(props);
		this.state = {
			boxArr: [{id: 1}]
		}
	}

	//events
	handleTabPressEvent() {
		console.log("Tab pressed yo!")
		this.setState({
			boxArr: this.state.boxArr.concat([{id: 2}])
		})
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
		                	/>
                		))
                	}
                </div>
            </div>
        )
    }
}
