import React from 'react'
import useForceUpdate from 'use-force-update'
import EventListener from 'react-event-listener'
import MyCard from './MyCard'
import { TextConsole } from './TextConsole'
import './styles/App.css'

const App = () => {
  const forceUpdate = useForceUpdate()
  const handleResize = () => {
    forceUpdate()
  }
  const handleOrientationChange = () => {
    forceUpdate()
  }
  let cardWidth
  let cardHeight
  const { innerWidth, innerHeight } = window
  const orientation = innerWidth > innerHeight ? 'landscape' : 'portrait'
  const aspectRatio = innerWidth / innerHeight
  if (orientation === 'portrait') {
    cardWidth = innerWidth < 750 ? innerWidth * 0.9 : 700
    cardHeight = cardWidth < 700 ? ((cardWidth * 4) / 7) : 400
  }
  if (orientation === 'landscape') {
    if (innerHeight >= 700) {
      cardWidth = 700
      cardHeight = 400
    } else if (aspectRatio >= 1.75) {
      cardHeight = innerHeight * 0.9
      cardWidth = cardHeight * 1.75
    } else {
      cardWidth = innerWidth * 0.9
      cardHeight = (cardWidth * 4) / 7
    }
  }
  return (
    <div id='super'>
      <EventListener
        target='window'
        onResize={handleResize}
        onOrientationChange={handleOrientationChange}
      />
      <TextConsole />
      <MyCard width={cardWidth} height={cardHeight} />
    </div>
  )
}

export default App
