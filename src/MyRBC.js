import React, { Component } from 'react'
import ReactBusinessCard from './ReactBusinessCard'
import cardStock from './card.jpg'
import CardContent from './CardContent'
class MyRBC extends Component {
	render() {
		const windowHeight = window.innerHeight
		const windowWidth = window.innerWidth
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
		return (
			<div id="rbc">
				<ReactBusinessCard width={cardWidth} height={cardHeight}>
					<img ref="image" width={cardWidth} height={cardHeight} src={cardStock} alt="The lovely card stock I picked for this printing. Like it?"/>
					<CardContent width={cardWidth} height={cardHeight} />
				</ReactBusinessCard>
			</div>
		)
	}
}

export default MyRBC