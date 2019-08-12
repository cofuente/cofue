import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardContent from './CardContent'
import './styles/ReactBusinessCard.css'

export default class ReactBusinessCard extends Component {
  static calculateDistance(bounds, offsetX, offsetY) {
    const distanceX = (offsetX - bounds.width / 2) ** 2
    const distanceY = (offsetY - bounds.height / 2) ** 2
    return Math.floor(Math.sqrt(distanceX + distanceY))
  }

  static convertRadToDeg(deltaY, deltaX) {
    const angleRad = Math.atan2(deltaY, deltaX)
    const angleRaw = (angleRad * 180) / Math.PI - 90
    const angleDeg = angleRaw < 0 ? angleRaw + 360 : angleRaw
    return angleDeg
  }

  static getDerivedStateFromProps(props, state) {
    if (props.width !== state.width || props.height !== state.height) {
      return {
        width: props.width,
        height: props.height
      }
    }
    return null
  }

  constructor(props) {
    super(props)
    const { width, height } = this.props
    this.state = {
      rotateX: 0,
      rotateY: 0,
      shadowMovement: 0,
      shadowSize: 0,
      scale: 1,
      angle: 0,
      alpha: 0,
      width,
      height,
    }

    this.calculateAlphaFromCenter = this.calculateAlphaFromCenter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.renderCardContent = this.renderCardContent.bind(this)
  }

  calculateAlphaFromCenter(current) {
    const { width, height } = this.state
    const max = Math.max(width, height)
    return (current / max) * 0.4
  }

  handleMouseLeave() {
    this.setState({
      rotateX: 0,
      rotateY: 0,
      shadowMovement: 0,
      shadowSize: 0,
      scale: 1,
      angle: 0,
      alpha: 0
    })
  }

  handleMouseMove(e) {
    const { pageX, pageY, nativeEvent } = e
    const { width, height } = this.state
    const { scrollTop, scrollLeft } = document.body

    const bounds = this.wrapper.getBoundingClientRect()

    const centerX = width / 2
    const centerY = height / 2

    const offsetX = 0.52 - (pageX - bounds.left - scrollLeft) / width
    const offsetY = 0.52 - (pageY - bounds.top - scrollTop) / height

    const deltaX = pageX - bounds.left - scrollLeft - centerX
    const deltaY = pageY - bounds.top - scrollTop - centerY

    const widthMultiplier = 320 / width
    const rotateX = (deltaY - offsetY) * (0.08 * widthMultiplier)
    const rotateY = (offsetX - deltaX) * (0.04 * widthMultiplier)

    const angle = ReactBusinessCard.convertRadToDeg(deltaY, deltaX)

    const distanceFromCenter = ReactBusinessCard.calculateDistance(
      bounds,
      nativeEvent.offsetX,
      nativeEvent.offsetY
    )
    const shadowMovement = centerY * 0.25
    const shadowSize = 120
    const alpha = this.calculateAlphaFromCenter(distanceFromCenter)

    this.setState({
      rotateX,
      rotateY,
      shadowMovement,
      shadowSize,
      scale: 1.03,
      angle,
      alpha
    })
  }

  renderCardContent(children) {
    const { scale, rotateX, rotateY } = this.state
    const genericTransforms = {
      WebkitTransform: `perspective(1000px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      MozTransform: `perspective(1000px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      MsTransform: `perspective(1000px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      OTransform: `perspective(1000px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transform: `perspective(1000px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }
    return children.map((childLayer, key) => {
      const num = key + 1
      const layerClassName = `rbc-layer-0${key}`
      const layerSpecificTransforms = genericTransforms
      const childLayerAlt = childLayer
      return (
        <div
          style={layerSpecificTransforms}
          className={layerClassName}
          key={num}
        >
          {childLayerAlt}
        </div>
      )
    })
  }

  render() {
    const {
      scale,
      rotateX,
      rotateY,
      width,
      height,
      shadowMovement,
      shadowSize,
      angle,
      alpha
    } = this.state
    const { children } = this.props
    const genericTransforms = {
      WebkitTransform: `perspective(1000px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      MozTransform: `perspective(1000px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      MsTransform: `perspective(1000px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      OTransform: `perspective(1000px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transform: `perspective(1000px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }
    const rbcWrapperStyle = Object.assign({},
      {
        width,
        height
      },
      genericTransforms)
    const shadowStyle = Object.assign({},
      { boxShadow: `0px ${shadowMovement}px ${shadowSize}px rgba(0, 0, 0, 0.6)` },
      genericTransforms)
    const lightingStyle = Object.assign({},
      { backgroundImage: `linear-gradient(${angle}deg, rgba(255,255,255, ${alpha}) 0%, rgba(255,255,255,0) 40%)` },
      genericTransforms)
    return (
      <div className='rbc-outer'>
        <div
          style={rbcWrapperStyle}
          ref={(x) => {
            this.wrapper = x
          }}
          className='rbc-wrapper'
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}
        >
          <div className='rbc-shadow' style={shadowStyle} />
          <div className='rbc-layers'>{this.renderCardContent(children)}</div>
          <div className='rbc-lighting' style={lightingStyle} />
        </div>
      </div>
    )
  }
}

ReactBusinessCard.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.element,
    PropTypes.instanceOf(CardContent)
  ).isRequired
}
