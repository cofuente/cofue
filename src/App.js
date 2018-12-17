import React, { Component } from 'react'
import './App.css'
import MyRBC from './MyRBC'

class App extends Component {
	render() {
		return (
			<div id="super">
				<div className="css-typing" id="intro">
					<h1>Hello, stranger.</h1>
					<h1>Welcome to my page.</h1>
					<h1>In all likelihood, I gave you the link myself.</h1>
					<h1>So here, take my card.</h1>
					<h1> -Go on, take it.</h1>
				</div>
				<div className="css-typing2" id="mobile-intro">
					<h1>Hello, stranger.</h1>
					<h1>Welcome to my page.</h1>
					<h1>In all likelihood, I</h1>
					<h1>gave you the link myself.</h1>
					<h1>You probably want my card, huh?</h1>
				</div>
				<MyRBC />
			<div id="rotate-device" >Rotate Your Device<br/>🔄</div>
			<div id="screen-too-small" />
		</div>)
	}
}

export default App
