import React, { Component } from 'react'
import ReactBusinessCard from './ReactBusinessCard'
import windowSize from 'react-window-size'
import cardStock from './card.jpg'
import CardContent from './CardContent'
class MyRBC extends Component {
	render() {
		const windowHeight = this.props.windowWidth
		const windowWidth = this.props.windowHeight
		const orientation = windowWidth > windowHeight ? 'landscape' : 'portrait'
		const aspectRatio = windowWidth/windowWidth

		let cardHeight = 400
		let cardWidth = 700
		if (orientation==="portrait") {
			cardWidth = window.screen.availWidth < 750 ? window.screen.availWidth * .9 : 700
			cardHeight = cardWidth < 700 ? (cardWidth * 0.5714285714285714) : 400
		}
		if (orientation==="landscape") {
			if (windowHeight >= 700 ) {
				cardWidth = 700
				cardHeight = 400
			} else if ((windowHeight/windowWidth) <= 0.5714285714285714 /* min aspect ratio of 7/4 */) {
				cardHeight = windowHeight * 0.9
				cardWidth = cardHeight * 1.75
			} else {
				cardWidth = windowWidth * 0.9
				cardHeight = (cardWidth * 4)/7
			}
		}
		console.log(orientation, windowWidth, windowHeight, aspectRatio)
		return (
			<div id="rbc">
				<ReactBusinessCard width={cardWidth} height={cardHeight}>
					<img ref="image" width={cardWidth} height={cardHeight} src={cardStock} alt="THIS IS THE CARD ALT"/>
					<CardContent width={cardWidth} height={cardHeight} />
				</ReactBusinessCard>
			</div>
		)
	}
}

export default windowSize(MyRBC)