import React, { PureComponent } from 'react'
import ReactBusinessCard from './ReactBusinessCard'
import cardStock from './card.png'
import CardContent from './CardContent'

export class MyRBC extends PureComponent {
  render() {
    const { width, height } = this.props
    return (
      <div id='rbc'>
        <ReactBusinessCard width={width} height={height}>
          <img width={width} height={height} src={cardStock} alt='The lovely card stock I picked for this printing. Like it?' />
          <CardContent width={width} height={height} />
        </ReactBusinessCard>
      </div>
    )
  }
}

export default MyRBC
