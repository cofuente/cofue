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
          <Typing.Speed ms={300} />
          <span>Umm... What&apos;s up? </span>
          <Typing.Speed ms={100} />
          <span>You recruiting?</span>
          <Typing.Delay ms={400} />
          <br />
          <span>If you are, I can hook you up with the deets of this engineer I know.</span>
          <br />
          <span>On the come up.</span>
          <span>Highly recommend.</span>
          <br />
          <span>Here, take her card.</span>
          <span> -Go on, take it.</span>
        </Typing>
      </div>
    )
  }
}

export default TextConsole
