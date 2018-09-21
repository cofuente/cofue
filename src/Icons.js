import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

export class EmailIcon extends Component {
	render() {
		return <FontAwesomeIcon icon={faAt} size="2x" aria-hidden={true} />
	}
}

export class GithubIcon extends Component {
	render() {
		return (
			<FontAwesomeIcon icon={faGithubSquare} size="2x" aria-hidden={true} />
		)
	}
}

export class LinkedinIcon extends Component {
	render() {
		return <FontAwesomeIcon icon={faLinkedin} size="2x" aria-hidden={true} />
	}
}

export class ResumeIcon extends Component {
	render() {
		return <FontAwesomeIcon icon={faFilePdf} size="2x" aria-hidden={true} />
	}
}
