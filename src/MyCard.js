import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactBusinessCard from './ReactBusinessCard'
import cardStock from './card.png'
import CardContent from './CardContent'
import resumeUri from './resume.pdf'

const cardInfo = {
  firstName: 'Chiara',
  lastName: 'Marcial Martínez',
  title: 'full stack software engineer',
  email: 'contact@cofuente.io',
  githubUrl: 'https://github.com/cofuente',
  resume: resumeUri,
  linkedInUrl: 'https://www.linkedin.com/in/cofuente/',
}
// settings will go back here, but for testing I'm just going to move it up temporarily
const settings = {
  offsetBuffer: 0.52, // needs explanation
  aspect: 320, // aspect multiplier // ~.457
  xRotation: 0.08, // rotation multiplier
  yRotation: 0.04, // rotation multiplier
  shadowMotion: 0.25, // shadow movement multiplier
  shadowSize: 120, // size of shadow in pixels; 100 - ?
  scale: 1.03 // How large to scale the item once hovered; 1.00 -> 1.10~
}
export default class MyCard extends PureComponent {
  render() {
    const { width, height } = this.props
    return (
      <div id='rbc'>
        <ReactBusinessCard width={width} height={height} settings={settings}>
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
