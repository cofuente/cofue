import React, { PureComponent } from 'react'
import { MyRBC } from './MyRBC'
import { TextConsole } from './TextConsole'
import './App.css'

export default class App extends PureComponent {
  render() {
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    const orientation = windowWidth > windowHeight ? 'landscape' : 'portrait'
    const aspectRatio = windowWidth / windowHeight
    let cardHeight
    let cardWidth
    if (orientation === 'portrait') {
      cardWidth = windowWidth < 750 ? windowWidth * 0.9 : 700
      cardHeight = cardWidth < 700 ? ((cardWidth * 4) / 7) : 400
    }
    if (orientation === 'landscape') {
      if (windowHeight >= 700) {
        cardWidth = 700
        cardHeight = 400
      } else if (aspectRatio >= 1.75) {
        cardHeight = windowHeight * 0.9
        cardWidth = cardHeight * 1.75
      } else {
        cardWidth = windowWidth * 0.9
        cardHeight = (cardWidth * 4) / 7
      }
    }
    return (
      <div id='super'>
        <TextConsole />
        <MyRBC width={cardWidth} height={cardHeight} />
      </div>
    )
  }
}
