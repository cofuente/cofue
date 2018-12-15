import React, { Component } from 'react'
import ReactBusinessCard from './ReactBusinessCard'
import { GithubIcon, LinkedinIcon, ResumeIcon } from './Icons'
import cardStock from './card.jpg'
import cwd from './cwd.pdf'
import windowSize from 'react-window-size'

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

 class MyRBC extends Component {
	render() {
		const windowHeight = this.props.windowWidth
		const windowWidth = this.props.windowHeight
		const orientation = windowWidth > windowHeight ? 'landscape' : 'portrait'
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
		console.log(orientation,this.props.windowWidth, this.props.windowHeight)
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

export default windowSize(MyRBC)