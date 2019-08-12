import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactBusinessCard from './ReactBusinessCard'
import cardStock from './card.png'
import CardContent from './CardContent'
import resumeUri from './resume.pdf'
import './styles/MyCard.css'

const cardInfo = {
  firstName: 'Chiara',
  lastName: 'Marcial Martínez',
  title: 'full stack software engineer',
  email: 'contact@cofuente.io',
  githubUrl: 'https://github.com/cofuente',
  resume: resumeUri,
  linkedInUrl: 'https://www.linkedin.com/in/cofuente/',
}
export default class MyCard extends PureComponent {
  render() {
    const { width, height } = this.props
    return (
      <div id='my-card'>
        <ReactBusinessCard width={width} height={height}>
          <img width={width} height={height} src={cardStock} alt='The lovely card stock I picked for this printing. Like it?' />
          <CardContent width={width} height={height} cardInfo={cardInfo} />
        </ReactBusinessCard>
      </div>
    )
  }
}

MyCard.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}
