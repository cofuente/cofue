import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

export class GithubIcon extends PureComponent {
  render() {
    return (
      <FontAwesomeIcon icon={faGithubSquare} size='2x' aria-hidden />
    )
  }
}

export class LinkedinIcon extends PureComponent {
  render() {
    return <FontAwesomeIcon icon={faLinkedin} size='2x' aria-hidden />
  }
}

export class ResumeIcon extends PureComponent {
  render() {
    return <FontAwesomeIcon icon={faFilePdf} size='2x' aria-hidden />
  }
}
