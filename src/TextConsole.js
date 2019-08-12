import React, { PureComponent } from 'react'
import './TextConsole.css'

export class TextConsole extends PureComponent {
  render() {
    return (
      <div className='css-typing' id='intro'>
        <h1>Hello, stranger.</h1>
        <h1>Welcome to my page.</h1>
        <h1>In all likelihood, I gave you the link myself.</h1>
        <h1>So here, take my card.</h1>
        <h1> -Go on, take it.</h1>
      </div>
    )
  }
}

export default TextConsole
