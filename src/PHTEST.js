import React, { Component } from 'react'
import ParallaxHover from './ParallaxHover'
// import ParallaxHover from 'react-parallax-hover-with-borders'
import { GithubIcon, LinkedinIcon, ResumeIcon } from './Icons'
import card from './card.jpg'

const openLinkedIn = () => {
	window.open('https://www.linkedin.com/in/cofuente/')
}
const openGitHub = () => {
	window.open('https://github.com/cofuente')
}

export default class ParallaxCard2 extends Component {
	render() {
		return (
			<div id="test">
				<ParallaxHover iW={700} iH={400}>
					<img ref="image" src={card} alt="jhg"/>
					<div ref="text">
						<div className="wrapper">
							<h1 className="full_name">Chiara<br />Marcial Martínez</h1>
							<h2 className="title">full stack software engineer</h2>
							<p className="email">
								<a href="mailto:c0fu3nt3@gmail.com">c0fu3nt3@gmail.com</a>
							</p>
							<div className="link_buttons">
                                <a className="link_button" onClick={() => openGitHub()} aria-label="Check out my Repos">
                                    <GithubIcon className="item" />
                                </a>
								<a className="link_button" aria-label={`Download my Résumé`}>
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
