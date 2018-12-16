import React, { Component } from 'react'
import ReactBusinessCard from './ReactBusinessCard'
import windowSize from 'react-window-size'
import cardStock from './card.jpg'
import CardContent from './CardContent'
class MyRBC extends Component {
	render() {
		const windowHeight = this.props.windowHeight
		const windowWidth = this.props.windowWidth
		const orientation = windowWidth > windowHeight ? 'landscape' : 'portrait'
		const aspectRatio = windowWidth/windowHeight
		let cardHeight, cardWidth
		if (orientation==="portrait") {
			cardWidth = windowWidth < 750 ? windowWidth * .9 : 700
			cardHeight = cardWidth < 700 ? ((cardWidth * 4)/7) : 400
		}
		if (orientation==="landscape") {
			if (windowHeight >= 700 ) {
				cardWidth = 700
				cardHeight = 400
			} else if (aspectRatio >= 1.75 ) {
				cardHeight = windowHeight * 0.9
				cardWidth = cardHeight * 1.75
			} else {
				cardWidth = windowWidth * 0.9
				cardHeight = (cardWidth * 4)/7
			}
		}
		console.log(orientation, aspectRatio)
		console.log(cardWidth, cardHeight)
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