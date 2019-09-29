import React from 'react'
import MyCard from './ReactBusinessCard/MyCard'
import cardStock from './cardAssets/cardStock.jpg'
import resumeUri from './cardAssets/resume.pdf'
import * as userInfo from './cardAssets/contactInfo.json'
import { TextConsole } from './TextConsole'
import './styles.css'

const App = () => (
  <div id='super'>
    <TextConsole />
    <MyCard cardStock={cardStock} resumeUri={resumeUri} userInfo={userInfo} />
  </div>
)

export default App
