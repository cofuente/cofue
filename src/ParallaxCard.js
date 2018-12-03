import React, { Component } from 'react'
import ParallaxHover from 'react-parallax-hover-with-borders'
import { GithubIcon, LinkedinIcon, ResumeIcon } from './Icons'
import card from './card.jpg'
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

export default class ParallaxCard extends Component {
	render() {
		return (
			<div id="main">
				<ParallaxHover width={700} height={400}>
					<img ref="image" alt="You got it. Now you can click on the icons to learn more about me." src={card} />
					<div ref="text">
						<div className="wrapper">
							<h1 className="full_name">Chiara<br />Marcial Martínez</h1>
							<h2 className="title">full stack software engineer</h2>
							<p className="email">
								<a href="mailto:c0fu3nt3@gmail.com" aria-label="Go on. Send me an email!">
									c0fu3nt3@gmail.com
								</a>
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
				</ParallaxHover>
			</div>
		)
	}
}
