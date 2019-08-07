import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardContent from './CardContent'

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
      height
    }

    this.calculateAlphaFromCenter = this.calculateAlphaFromCenter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.renderCardContent = this.renderCardContent.bind(this)
  }

  calculateAlphaFromCenter(current) {
    const { width, height } = this.state
    const max = Math.max(width, height)
    // Alpha channel modifer: 1.01 -> 1.1~  from config.alpha but currently at .4????
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

    const offsetX = 0.52 - (pageX - bounds.left - scrollLeft) / width // make a prop called offset buffer
    const offsetY = 0.52 - (pageY - bounds.top - scrollTop) / height

    const deltaX = pageX - bounds.left - scrollLeft - centerX
    const deltaY = pageY - bounds.top - scrollTop - centerY

    const widthMultiplier = 320 / width // ~.457 // make a prop called width multiplier
    const rotateX = (deltaY - offsetY) * (0.08 * widthMultiplier) // make a prop called horizontal rotation multiplier
    const rotateY = (offsetX - deltaX) * (0.04 * widthMultiplier) // make a prop called vertical rotation multiplier

    const angle = ReactBusinessCard.convertRadToDeg(deltaY, deltaX)

    const distanceFromCenter = ReactBusinessCard.calculateDistance(
      bounds,
      nativeEvent.offsetX,
      nativeEvent.offsetY
    )
    const shadowMovement = centerY * 0.25 // make a prop called shadow movement multiplier
    const shadowSize = 120 // make a prop
    const alpha = this.calculateAlphaFromCenter(distanceFromCenter)

    this.setState({
      rotateX,
      rotateY,
      shadowMovement,
      shadowSize,
      scale: 1.03, // How large to scale the item once hovered: 1.00 -> 1.10~
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
      const rotateXAlt = Math.floor(rotateX / num)
      const rotateYAlt = Math.floor(rotateY / num)
      // for now the image layer gets generic transforms until
      // I can figure out better transform math that works
      let layerSpecificTransforms = genericTransforms
      let childLayerAlt = childLayer
      if (childLayer.ref === 'text') {
        childLayerAlt = childLayer.props.children
        layerSpecificTransforms = {
          WebkitTransform: `perspective(1000px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}) rotateY(${rotateY}deg)`,
          MozTransform: `perspective(1000px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}) rotateY(${rotateY}deg)`,
          MsTransform: `perspective(1000px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}) rotateY(${rotateY}deg)`,
          OTransform: `perspective(1000px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}) rotateY(${rotateY}deg)`,
          transform: `perspective(1000px) scale3d(${scale}, ${scale}, ${scale}) rotateX(${rotateX}) rotateY(${rotateY}deg)`,
          textShadow: `${rotateYAlt * 0.5}px ${rotateXAlt * 0.5}px 10px rgba(0, 0, 0, 0.3)`
        }
      }
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
