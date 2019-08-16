import React, { PureComponent } from 'react'
import Typing from 'react-typing-animation'
import './styles/TextConsole.css'

export class TextConsole extends PureComponent {
  render() {
    return (
      <div id='console-container'>
        <Typing className='console' speed={60}>
          <div className='line' id='line-1'>
            <span>Hey there, stranger.</span>
            <Typing.Delay ms={800} />
            <br />
          </div>
          <div className='line' id='line-2'>
            <Typing.Speed ms={80} />
            <span>How&apos;s life? </span>
            <span role='img' aria-label='Seedling'>&#127793;</span>
            <Typing.Delay ms={1000} />
            <br />
          </div>
          <div className='line' id='line-3'>
            <span>Doing well, I ho</span>
            <Typing.Speed ms={600} />
            <span>pe...</span>
            <Typing.Delay ms={600} />
            <Typing.Speed ms={60} />
            <br />
          </div>
          <div className='line' id='line-4'>
            <span>Wanna actually tell me about it?</span>
            <Typing.Delay ms={900} />
            <br />
          </div>
          <div className='line' id='line-5'>
            <Typing.Speed ms={80} />
            <span>Cool! </span>
            <span>Take my card.</span>
            <Typing.Delay ms={1000} />
          </div>
        </Typing>
      </div>
    )
  }
}

export default TextConsole
