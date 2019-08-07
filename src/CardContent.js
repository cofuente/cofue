import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { GithubIcon, LinkedinIcon, ResumeIcon } from './Icons'

const downloadResume = (uri, first, last) => {
  const noSpaces = string => string.replace(/\s+/g, '')
  const fileName = `${noSpaces(first).toLowerCase() + noSpaces(last).toLowerCase()}.pdf`
  const link = document.createElement('a')
  link.download = fileName
  link.href = uri
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default class CardContent extends PureComponent {
  render() {
    const { width, height, cardInfo } = this.props
    const proportionedFontSize = Math.round(width / 70) // will have to look into this...
    const textWrapStyle = {
      width: `${width}px`,
      height: `${height}px`,
      fontSize: `${proportionedFontSize}px`
    }
    const {
      firstName,
      lastName,
      title,
      email,
      resume,
      linkedInUrl,
      githubUrl,
    } = cardInfo
    return (
      <div ref='text'>
        <div className='text-wrapper' style={textWrapStyle}>
          <h1 className='full_name'>
            {firstName}
            <br />
            {lastName}
          </h1>
          <h2 className='title'>{title}</h2>
          <p className='email'>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <div className='link_buttons'>
            <button type='button' className='link_button' onClick={() => window.open(`${githubUrl}`)} aria-label='Check out my work on GitHub!'>
              <GithubIcon className='item' />
            </button>
            <button type='button' className='link_button' onClick={() => downloadResume(resume, firstName, lastName)} aria-label='Click here to download my résumé'>
              <ResumeIcon className='item' />
            </button>
            <button type='button' className='link_button' onClick={() => window.open(`${linkedInUrl}`)} aria-label={'I\'m on LinkedIn too.'}>
              <LinkedinIcon className='item' />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

CardContent.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  cardInfo: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string,
    githubUrl: PropTypes.string,
    resume: PropTypes.string,
    linkedInUrl: PropTypes.string
  }).isRequired
}
