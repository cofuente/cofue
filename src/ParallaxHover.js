import React, { Component } from 'react'


export default class ParallaxCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            rotateX: 0,
            rotateY: 0,
            shadowMovement: 0,
            shadowSize: 0,
            scale: 1,
            angle: 0,
            alpha: 0,
            // width: 50,
            // height: 50
        }

        this.buildTransformStrings = this.buildTransformStrings.bind(this)
        this.calculateDistance = this.calculateDistance.bind(this)
        this.calculateAlphaFromCenter = this.calculateAlphaFromCenter.bind(this)
    }

/*      Original Styles w/ respective Layers:
                phOuter
                phWrapper
                phShadow
                phLayers
                phLayer
                phLighting
                phText

*/

    buildTransformStrings(rotateX, rotateY, scale) {
       return {
           WebkitTransform: `perspective(1000px) scale(${scale}) rotateX(${rotateX}) rotateY(${rotateY}deg)`,
           MozTransform: `perspective(1000px) scale(${scale}) rotateX(${rotateX}) rotateY(${rotateY}deg)`,
           transform: `perspective(1000px) scale(${scale}) rotateX(${rotateX}) rotateY(${rotateY}deg)`
        }
    }

    calculateDistance(bounds, offsetX, offsetY) {
        let distanceX = Math.pow(offsetX - bounds.width / 2, 2)
        let distanceY = Math.pow(offsetY - bounds.height / 2, 2)
        return Math.floor(Math.sqrt(distanceX + distanceY))
    }

    calculateAlphaFromCenter(current) {
        let max = Math.max(this.props.width, this.props.height)
        return current / max * config.alpha
    }

    // handleMouseMove(e) {
    //     let pageX = e.pageX,
    //         pageY = e.pageY,
    //         nativeEvent = e.nativeEvent

    //     let width = this.props.width
    //     let height = this.props.height

    //     let _document$body = document.body,
    //         scrollTop = _document$body.scrollTop,
    //         scrollLeft = _document$body.scrollLeft

    //     let bounds = this.refs.wrapper.getBoundingClientRect()
    //     let centerX = this.props.width / 2
    //     let centerY = this.props.height / 2
    //     let widthMultiplier = 320 / this.props.width
    //     let offsetX = 0.52 - (pageX - bounds.left - scrollLeft) / width
    //     let offsetY = 0.52 - (pageY - bounds.top - scrollTop) / height
    //     let deltaX = pageX - bounds.left - scrollLeft - centerX
    //     let deltaY = pageY - bounds.top - scrollTop - centerY
    //     let rotateX = (deltaY - offsetY) * (0.08 * widthMultiplier)
    //     let rotateY = (offsetX - deltaX) * (0.04 * widthMultiplier)
    //     let angleRad = Math.atan2(deltaY, deltaX)
    //     let angleRaw = angleRad * 180 / Math.PI - 90
    //     let angleDeg = angleRaw < 0 ? angleRaw + 360 : angleRaw
    //     let distanceFromCenter = this.calculateDistance(bounds, nativeEvent.offsetX, nativeEvent.offsetY)
    //     let shadowMovement = centerY * 0.25
    //     let shadowSize = 120
    //     let alpha = this.calculateAlphaFromCenter(distanceFromCenter)
    //     this.setState({
    //         rotateX : rotateX,
    //         rotateY : rotateY,
    //         shadowMovement : shadowMovement,
    //         shadowSize : shadowSize,
    //         scale: config.scale,
    //         angle: angleDeg,
    //         alpha: alpha,
    //     })
    //   }

    handleMouseLeave() {
        this.setState({
            rotateX: 0,
            rotateY: 0,
            shadowMovement: 0,
            shadowSize: 0,
            scale: 1,
            angle: 0,
            alpha: 0,
            width: 50,
            height:50
        })
    }

	render() {
        return (
            <div style={style}
              onMouseEnter={this.onMouseEnter}
              onMouseMove={this.onMouseMove}
              onMouseLeave={this.handleMouseLeave}
              >
              {this.props.children}
            </div>
        )
    }
}
