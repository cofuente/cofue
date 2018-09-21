import React, { Component } from 'react'
import ParallaxCard from './ParallaxCard'
import './App.css'

class App extends Component {
	render() {
		return (
			<div id="super">
				<div className="css-typing" id="intro">
					<h1>Hello, stranger.</h1>
					<h1>Welcome to my site.</h1>
					<h1>In all likelihood I gave you the link myself.</h1>
					<h1>So here, take my card.</h1>
					<h1> -Go on, take it.</h1>
					<p id="mobile-only">
						Trust me, this is best viewed on a regular browser.
					</p>
				</div>
				<ParallaxCard />
			</div>
		)
	}
}

export default App
