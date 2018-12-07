import React, { Component } from 'react'
import ReactBusinessCard from './ReactBusinessCard'
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

export default class MyCard extends Component {
	render() {
		return (
			<div id="test">
				<ReactBusinessCard iW={700} iH={400}>
					<img ref="image" src={card} alt="jhg"/>
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
