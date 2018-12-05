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
        let max = Math.max(this.props.iW, this.props.iH)
        return current / max * 0.4 // Alpha channel modifer: 1.01 -> 1.1~  from config.alpha but currently at .4????
    }

    handleMouseMove(e) {
        const pageX = e.pageX
        const pageY = e.pageY
        const nativeEvent = e.nativeEvent
        const width = this.props.iW
        const height = this.props.iH
        const scrollTop = document.body.scrollTop
        const scrollLeft = document.body.scrollLeft
        const bounds = this.refs.wrapper.getBoundingClientRect()
        const centerX = width / 2
        const centerY = height / 2
        const widthMultiplier = 320 / width
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
            scale:  1.03, // How large to scale the item: 1.00 -> 1.10~        from config.scale
            angle: angleDeg,
            alpha: alpha,
        })
        // console.log(this.state)
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
        // console.log(this.state)
    }

    renderCardContent(children) {
        const baseStyle = {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
        }
        const textStyle= {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '5rem',
            color: '#ffffff',
            zIndex:'1', //css I added but necessary for clickable icons
        }
        const transformsStyle = {
            WebkitTransform: 'perspective(1000px) scale(' +this.state.scale+ ') rotateX(' +this.state.rotateX+ 'deg) rotateY(' +this.state.rotateY+ 'deg)',
            MozTransform: 'perspective(1000px) scale(' +this.state.scale+ ') rotateX(' +this.state.rotateX+ 'deg) rotateY(' +this.state.rotateY+ 'deg)',
            transform: 'perspective(1000px) scale(' +this.state.scale+ ') rotateX(' +this.state.rotateX+ 'deg) rotateY(' +this.state.rotateY+ 'deg)',
        }
        if (!Array.isArray(children)) {
            const rbcLayerStyle = Object.assign({}, baseStyle, transformsStyle)
            // return (<div style={rbcLayerStyle} className='rbc-layer' props={children} />)
         return React.createElement('div', { style: rbcLayerStyle, className: 'rbc-layer' }, children )
        }
        return children.map( (layer, key) => {
            const num = ++key
            const rotateX = Math.floor(this.state.rotateX / num)
            const rotateY = Math.floor(this.state.rotateY / num)
            let layerSpecificStyle = {
                WebkitTransform: 'perspective(1000px) scale(' +this.state.scale+ ') rotateX(' +rotateX+ ') rotateY(' +rotateY+ 'deg)',
                MozTransform: 'perspective(1000px) scale(' +this.state.scale+ ') rotateX(' +rotateX+ ') rotateY(' +rotateY+ 'deg)',
                transform: 'perspective(1000px) scale(' +this.state.scale+ ') rotateX(' +rotateX+ ') rotateY(' +rotateY+ 'deg)',            }
            if (layer.ref === 'text') {
                const textShadowStyle = { textShadow: rotateY * 0.5 + 'px ' + rotateX * 0.5 + 'px 10px rgba(0, 0, 0, 0.3)'}
                layer = layer.props.children
                layerSpecificStyle = Object.assign({}, baseStyle, textStyle, textShadowStyle, layerSpecificStyle)
            }
            // return (<div style={layerSpecificStyle} className='rbc-layer' key={key} props={layer} />)
         return React.createElement('div', { style: layerSpecificStyle, key: key }, layer )
        })
    }

	render() {
        const transitionStyle = {transition: 'all 0.3s ease-out'}
        const transformsStyle = {
            WebkitTransform: 'perspective(1000px) scale(' +this.state.scale+ ') rotateX(' +this.state.rotateX+ 'deg) rotateY(' +this.state.rotateY+ 'deg)',
            MozTransform: 'perspective(1000px) scale(' +this.state.scale+ ') rotateX(' +this.state.rotateX+ 'deg) rotateY(' +this.state.rotateY+ 'deg)',
            transform: 'perspective(1000px) scale(' +this.state.scale+ ') rotateX(' +this.state.rotateX+ 'deg) rotateY(' +this.state.rotateY+ 'deg)',
        }
        const baseStyle = {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
        }
        const rbcWrapperStyle = Object.assign({}, {
            position: 'relative',
            margin: '0',
            padding: '0',
            width: this.props.iW,
            height: this.props.iH,
        }, transitionStyle, transformsStyle)
        const shadowStyle = Object.assign({}, {
            width: '90%',
            height: '90%',
            position: 'absolute',
            top: '5%',
            left: '5%',
            bottom: '0',
            right: '0',
            background: 'none',
            boxShadow: '0px ' + this.state.shadowMovement + 'px ' + this.state.shadowSize + 'px rgba(0, 0, 0, 0.6)',
            borderRadius: '10px',
            border: '1px solid #e1e1e1',
        }, transitionStyle, transformsStyle )
        const lightingStyle = Object.assign({}, {
            backgroundImage: 'linear-gradient(' +this.state.angle+ 'deg, rgba(255,255,255, ' +this.state.alpha+ ') 0%, rgba(255,255,255,0) 40%)',
            borderRadius: '0.75rem', //css I added
        }, baseStyle, transformsStyle)
        return (
            <div style={{transformStyle: 'preserve-3d'}}>
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




    /*

    Original Styles w/ respective Layers:
                phOuter
                phWrapper
                    phShadow
                    phLayers
                        phLayer div w/ styles wrapped around img
                        phLayer div w/ phText styles wrapped around 'wrapper' wrapped around all the text
                    phLighting


*/