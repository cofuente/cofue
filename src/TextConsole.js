import React, { PureComponent } from 'react'
import Typing from 'react-typing-animation'
import './styles/TextConsole.css'

export class TextConsole extends PureComponent {
  render() {
    return (
      <div id='console-container'>
        <Typing className='console' speed={60}>
          <span>Hey there, stranger.</span>
          <Typing.Delay ms={800} />
          <br />
          <Typing.Speed ms={80} />
          <span>How&apos;s life?</span>
          <Typing.Delay ms={1000} />
          <br />
          <span>Doing well, I ho</span>
          <Typing.Speed ms={600} />
          <span>pe...</span>
          <Typing.Delay ms={600} />
          <Typing.Speed ms={80} />
          <br />
          <span>Wanna actually tell me about it?</span>
          <Typing.Delay ms={900} />
          <br />
          <Typing.Speed ms={80} />
          <span>Cool! </span>
          <span>Take my card.</span>
          <Typing.Delay ms={1000} />
        </Typing>
      </div>
    )
  }
}

export default TextConsole
