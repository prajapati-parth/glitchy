import React from 'react'
import ReactDOM from 'react-dom'

//import application main component
import AppComponent from '../app/components/app_component'

class App extends React.Component {
    render() {
        return (
            <AppComponent />
        )
    }
}

//render back to mark-up file
ReactDOM.render(
    <App />,
    document.getElementById('content')
)
