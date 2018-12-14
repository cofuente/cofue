import React, { Component } from 'react'
import ReactBusinessCard from './ReactBusinessCard'
import { GithubIcon, LinkedinIcon, ResumeIcon } from './Icons'
import cardStock from './card.jpg'
import cwd from './cwd.pdf'

const openLinkedIn = () => {
	window.open('https://www.linkedin.com/in/cofuente/')
}
const openGitHub = () => {
	window.open('https://github.com/cofuente')
}
const downloadResume = (uri, name) => {
	const link = document.createElement('a')
	link.download = name
	link.href = uri
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}

export default class MyCard extends Component {
	render() {
		const orientation = window.screen.orientation.type
		let cardHeight, cardWidth
		switch(orientation){
			case 'portrait-primary':
console.log(window.screen.availWidth, window.screen.availHeight, 'this is portrait')
				cardWidth = window.screen.availWidth < 750 ? window.screen.availWidth * .9 : 700
				cardHeight = cardWidth < 700 ? (cardWidth * 0.5714285714285714) : 400
				break
			case 'landscape-primary':
console.log(window.screen.availWidth, window.screen.availHeight, 'this is landscape')
				if (window.screen.availHeight >= 700 ){
					cardWidth = 700
					cardHeight = 400
				} else if ((window.screen.availHeight/window.screen.availWidth) <= 0.5714285714285714 /* min aspect ratio of 7/4 */) {
					cardHeight = window.screen.availHeight * 0.9
					cardWidth = cardHeight * 1.75
				} else {
					cardWidth = window.screen.availWidth * 0.9
					cardHeight = (cardWidth * 4)/7
				}
				break
			default:
				cardHeight = 400
				cardWidth = 700
		}
		console.log(cardWidth, cardHeight)
		return (
			<div id="main">
				<ReactBusinessCard iW={cardWidth} iH={cardHeight}>
					<img ref="image" src={cardStock} alt="THIS IS THE CARD ALT"/>
					<div ref="text">
						<div className="text-wrapper">
							<h1 className="full_name">Chiara<br />Marcial Martínez</h1>
							<h2 className="title">full stack software engineer</h2>
							<p className="email">
								<a href="mailto:contact@cofuente.io">contact@cofuente.io</a>
							</p>
							<div className="link_buttons">
                                <a className="link_button" onClick={() => openGitHub()} aria-label="Check out my Repos">
                                    <GithubIcon className="item" />
                                </a>
								<a className="link_button" onClick={() => downloadResume(cwd, 'chiaramarcialmartínez.pdf')} aria-label={`Download my Résumé`}>
									<ResumeIcon className="item" />
								</a>
                                <a className="link_button" onClick={() => openLinkedIn()} aria-label={`I'm on LinkedIn too.`}>
                                    <LinkedinIcon className="item" />
                                </a>
							</div>
						</div>
					</div>
				</ReactBusinessCard>
			</div>
		)
	}
}
