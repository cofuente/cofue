import React, { PureComponent } from 'react'
import Typing from 'react-typing-animation'
import './styles.css'

export class TextConsole extends PureComponent {
  render() {
    return (
      <div id='console-container'>
        <Typing className='console' speed={35}>
          <div className='line' id='line-1'>
            <span>Hey stranger.</span>
            <Typing.Delay ms={900} />
          </div>
          <div className='line' id='line-2'>
            <br />
            <span>Why don&apos;t you take my card?</span>
          </div>
          <div className='line' id='line-3'>
            <br />
            <span>-</span>
            <span role='img' aria-label='Alien' id='alien'> </span>
            <Typing.Speed ms={120} />
            <Typing.Delay ms={375} />
            <span role='img' aria-label='Seedling' id='seedling'> </span>
            <Typing.Delay ms={375} />
            <span role='img' aria-label='Red Heart' id='heart'> </span>
            <Typing.Delay ms={120000} />
          </div>
        </Typing>
      </div>
    )
  }
}

export default TextConsole
