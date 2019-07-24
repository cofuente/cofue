import React, { Component } from 'react'
import { GithubIcon, LinkedinIcon, ResumeIcon } from './Icons'
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

export default class CardContent extends Component {
	render() {
		let idealFontSize = Math.round(this.props.width/70)
		const textWrapStyle = {
			width: `${this.props.width}px`,
			height: `${this.props.height}px`,
			fontSize: `${idealFontSize}px`
		}
		return (
			<div ref="text">
				<div className="text-wrapper" style={textWrapStyle}>
					<h1 className="full_name">Chiara<br />Marcial Martínez</h1>
					<h2 className="title">full stack software engineer</h2>
					<p className="email">
						<a href="mailto:contact@cofuente.io">contact@cofuente.io</a>
					</p>
					<div className="link_buttons">
						<button className="link_button" onClick={() => openGitHub()} aria-label="Check out my Repos">
							<GithubIcon className="item" />
						</button>
						<button className="link_button" onClick={() => downloadResume(cwd, 'chiaramarcialmartínez.pdf')} aria-label={`Download my Résumé`}>
							<ResumeIcon className="item" />
						</button>
						<button className="link_button" onClick={() => openLinkedIn()} aria-label={`I'm on LinkedIn too.`}>
							<LinkedinIcon className="item" />
						</button>
					</div>
				</div>
			</div>
		)
	}
}