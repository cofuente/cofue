import React, { PureComponent } from 'react'
import Typing from 'react-typing-animation'
import './styles/TextConsole.css'

export class TextConsole extends PureComponent {
  render() {
    return (
      <div id='console-container'>
        <Typing className='console' speed={60}>
          <div className='line' id='line-1'>
            <span>Hey there.</span>
            <Typing.Delay ms={600} />
            <br />
          </div>
          <div className='line' id='line-5'>
            <Typing.Speed ms={70} />
            <span>Take my card.</span>
          </div>
        </Typing>
      </div>
    )
  }
}

export default TextConsole
