import React from 'react'
import useForceUpdate from 'use-force-update'
import EventListener from 'react-event-listener'
import PropTypes from 'prop-types'
import ReactBusinessCard from '../index'
import './styles.css'
import CardLayout from '../CardLayout'

const MyCard = (props) => {
  const { cardStock, resume, contactInfo } = props
  const userInfo = {
    resume,
    firstName: contactInfo.firstName,
    lastName: contactInfo.lastName,
    title: contactInfo.title,
    email: contactInfo.email,
    githubUrl: contactInfo.githubUrl,
    linkedInUrl: contactInfo.linkedInUrl,
  }
  // May seem like an unnecessary function reassignment below,
  // but this is just to keep in line with react hooks rules which
  // checks for function scope where hooks are used.
  const forceUpdate = useForceUpdate()
  const handleResize = () => {
    forceUpdate()
  }
  const handleOrientationChange = () => {
    forceUpdate()
  }
  let width
  let height
  const { innerWidth, innerHeight } = window
  const orientation = innerWidth > innerHeight ? 'landscape' : 'portrait'
  const aspectRatio = innerWidth / innerHeight
  if (orientation === 'portrait') {
    width = innerWidth < 750 ? innerWidth * 0.9 : 700
    height = width < 700 ? ((width * 4) / 7) : 400
  }
  if (orientation === 'landscape') {
    if (innerHeight >= 700) {
      width = 700
      height = 400
    } else if (aspectRatio >= 1.75) {
      height = innerHeight * 0.9
      width = height * 1.75
    } else {
      width = innerWidth * 0.9
      height = (width * 4) / 7
    }
  }
  return (
    <div id='my-card'>
      <EventListener
        target='window'
        onResize={handleResize}
        onOrientationChange={handleOrientationChange}
      />
      <ReactBusinessCard width={width} height={height}>
        <img width={width} height={height} src={cardStock} alt='The lovely card stock I picked for this printing. Like it?' />
        <CardLayout width={width} height={height} userInfo={userInfo} />
      </ReactBusinessCard>
    </div>
  )
}

MyCard.propTypes = {
  resume: PropTypes.string.isRequired,
  cardStock: PropTypes.string.isRequired,
  contactInfo: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string,
    githubUrl: PropTypes.string,
    linkedInUrl: PropTypes.string
  }).isRequired

}

export default MyCard
