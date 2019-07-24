import React, { Component } from 'react'

export default class FloatingCard extends Component {
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
            width: this.props.width,
            height: this.props.height,
        }

        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.calculateDistance = this.calculateDistance.bind(this)
        this.calculateAlphaFromCenter = this.calculateAlphaFromCenter.bind(this)
        this.renderCardContent = this.renderCardContent.bind(this)
    }

    calculateDistance(bounds, offsetX, offsetY) {
        let distanceX = Math.pow(offsetX - bounds.width / 2, 2)
        let distanceY = Math.pow(offsetY - bounds.height / 2, 2)
        return Math.floor(Math.sqrt(distanceX + distanceY))
    }

    calculateAlphaFromCenter(current) {
        let max = Math.max(this.state.width, this.state.height)
        return current / max * 0.4 // Alpha channel modifer: 1.01 -> 1.1~  from config.alpha but currently at .4????
    }

    handleMouseMove(e) {
        const pageX = e.pageX
        const pageY = e.pageY
        const nativeEvent = e.nativeEvent
        const width = this.state.width
        const height = this.state.height
        const scrollTop = document.body.scrollTop
        const scrollLeft = document.body.scrollLeft
        const bounds = this.refs.wrapper.getBoundingClientRect()
        const centerX = width / 2
        const centerY = height / 2
        const widthMultiplier = 320 / width //~.457
        const offsetX = 0.52 - (pageX - bounds.left - scrollLeft) / width
        const offsetY = 0.52 - (pageY - bounds.top - scrollTop) / height
        const deltaX = pageX - bounds.left - scrollLeft - centerX
        const deltaY = pageY - bounds.top - scrollTop - centerY
        const rotateX = (deltaY - offsetY) * (0.08 * widthMultiplier)
        const rotateY = (offsetX - deltaX) * (0.04 * widthMultiplier)
        const angleRad = Math.atan2(deltaY, deltaX)
        const angleRaw = angleRad * 180 / Math.PI - 90
        const angleDeg = angleRaw < 0 ? angleRaw + 360 : angleRaw
        const distanceFromCenter = this.calculateDistance(bounds, nativeEvent.offsetX, nativeEvent.offsetY)
        const shadowMovement = centerY * 0.25
        const shadowSize = 120
        const alpha = this.calculateAlphaFromCenter(distanceFromCenter)
        this.setState({
            rotateX : rotateX,
            rotateY : rotateY,
            shadowMovement : shadowMovement,
            shadowSize : shadowSize,
            scale:  1.03, // How large to scale the item once hovered: 1.00 -> 1.10~
            angle: angleDeg,
            alpha: alpha,
        })
    }

    handleMouseLeave(e) {
        this.setState({
            rotateX: 0,
            rotateY: 0,
            shadowMovement: 0,
            shadowSize: 0,
            scale: 1,
            angle: 0,
            alpha: 0,
        })
    }

    renderCardContent(children) {
        const genericTransforms = {
          WebkitTransform: 'perspective(1000px) scale3d(' + this.state.scale + ', ' + this.state.scale + ', ' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
          MozTransform: 'perspective(1000px) scale3d(' + this.state.scale + ', ' + this.state.scale + ', ' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
          MsTransform: 'perspective(1000px) scale3d(' + this.state.scale + ', ' + this.state.scale + ', ' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
          OTransform: 'perspective(1000px) scale3d(' + this.state.scale + ', ' + this.state.scale + ', ' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
          transform: 'perspective(1000px) scale3d(' + this.state.scale + ', ' + this.state.scale + ', ' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
        }
        if (!Array.isArray(children)) {//in case of only one child, likely just the card img
            return (
                <div style={genericTransforms} className='rbc-layer-solo' >
                    {children}
                </div>
                )
        }
        return children.map( (childLayer, key) => {
            const num = key+1
            const layerClassName='rbc-layer-0'+key
            const rotateX = Math.floor(this.state.rotateX/num)
            const rotateY = Math.floor(this.state.rotateY/num)
            let layerSpecificTransforms = genericTransforms // for now the image layer gets generic transforms until I can figure out better transform math that works
            if (childLayer.ref === 'text') {
                childLayer = childLayer.props.children
                layerSpecificTransforms = {
                  WebkitTransform: 'perspective(1000px) scale3d(' + this.state.scale + ', ' + this.state.scale + ', ' + this.state.scale + ') rotateX(' + rotateX + ') rotateY(' + rotateY + 'deg)',
                  MozTransform: 'perspective(1000px) scale3d(' + this.state.scale + ', ' + this.state.scale + ', ' + this.state.scale + ') rotateX(' + rotateX + ') rotateY(' + rotateY + 'deg)',
                  MsTransform: 'perspective(1000px) scale3d(' + this.state.scale + ', ' + this.state.scale + ', ' + this.state.scale + ') rotateX(' + rotateX + ') rotateY(' + rotateY + 'deg)',
                  OTransform: 'perspective(1000px) scale3d(' + this.state.scale + ', ' + this.state.scale + ', ' + this.state.scale + ') rotateX(' + rotateX + ') rotateY(' + rotateY + 'deg)',
                  transform: 'perspective(1000px) scale3d(' + this.state.scale + ', ' + this.state.scale + ', ' + this.state.scale + ') rotateX(' + rotateX + ') rotateY(' + rotateY + 'deg)',
                  textShadow: rotateY * 0.5 + 'px ' + rotateX * 0.5 + 'px 10px rgba(0, 0, 0, 0.3)'
                }
            }
            return (
                <div style={layerSpecificTransforms} className={layerClassName} key={key} >
                    {childLayer}
                </div>
                )
        })

    }

	render() {
        const genericTransforms = {
          WebkitTransform: 'perspective(1000px) scale3d(' + this.state.scale + ', ' + this.state.scale + ', ' + this.state.scale + ') rotateX(' +this.state.rotateX+ 'deg) rotateY(' +this.state.rotateY+ 'deg)',
          MozTransform: 'perspective(1000px) scale3d(' + this.state.scale + ', ' + this.state.scale + ', ' + this.state.scale + ') rotateX(' +this.state.rotateX+ 'deg) rotateY(' +this.state.rotateY+ 'deg)',
          MsTransform: 'perspective(1000px) scale3d(' + this.state.scale + ', ' + this.state.scale + ', ' + this.state.scale + ') rotateX(' +this.state.rotateX+ 'deg) rotateY(' +this.state.rotateY+ 'deg)',
          OTransform: 'perspective(1000px) scale3d(' + this.state.scale + ', ' + this.state.scale + ', ' + this.state.scale + ') rotateX(' +this.state.rotateX+ 'deg) rotateY(' +this.state.rotateY+ 'deg)',
          transform: 'perspective(1000px) scale3d(' + this.state.scale + ', ' + this.state.scale + ', ' + this.state.scale + ') rotateX(' +this.state.rotateX+ 'deg) rotateY(' +this.state.rotateY+ 'deg)',
        }
        const rbcWrapperStyle = Object.assign({}, {
            width: this.state.width,
            height: this.state.height
        }, genericTransforms)
        const shadowStyle = Object.assign({}, {
            boxShadow: '0px ' + this.state.shadowMovement + 'px ' + this.state.shadowSize + 'px rgba(0, 0, 0, 0.6)',
        }, genericTransforms )
        const lightingStyle = Object.assign({}, {
            backgroundImage: 'linear-gradient(' +this.state.angle+ 'deg, rgba(255,255,255, ' +this.state.alpha+ ') 0%, rgba(255,255,255,0) 40%)',
        }, genericTransforms)
        return (
            <div className='rbc-outer' >
                <div style={rbcWrapperStyle} ref='wrapper' className='rbc-wrapper' onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseLeave} >
                    <div className='rbc-shadow' style={shadowStyle} />
                    <div className='rbc-layers' >
                        {this.renderCardContent(this.props.children)}
                    </div>
                    <div className='rbc-lighting' style={lightingStyle} />
                </div>
            </div>
        )
    }
}