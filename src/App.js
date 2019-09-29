import React from 'react'
import MyCard from './ReactBusinessCard/MyCard'
import cardStock from './assets/cardStock.jpg'
import resume from './assets/resume.pdf'
import contactInfo from './assets/contactInfo.json'
import { TextConsole } from './TextConsole'
import './styles.css'

const App = () => (
  <div id='super'>
    <TextConsole />
    <MyCard cardStock={cardStock} resume={resume} contactInfo={contactInfo} />
  </div>
)

export default App
