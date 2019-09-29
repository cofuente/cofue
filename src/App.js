import React from 'react'
import MyCard from './ReactBusinessCard/MyCard'
import cardStock from './cardAssets/cardStock.jpg'
import resume from './cardAssets/resume.pdf'
import contactInfo from './cardAssets/contactInfo.json'
import { TextConsole } from './TextConsole'
import './styles.css'

const App = () => (
  <div id='super'>
    <TextConsole />
    <MyCard cardStock={cardStock} resume={resume} contactInfo={contactInfo} />
  </div>
)

export default App
