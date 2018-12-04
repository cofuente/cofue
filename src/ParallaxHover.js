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
        this.renderKids = this.renderKids.bind(this)
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
        let pageX = e.pageX
        let pageY = e.pageY
        let nativeEvent = e.nativeEvent
        let width = this.props.iW
        let height = this.props.iH
        let scrollTop = document.body.scrollTop
        let scrollLeft = document.body.scrollLeft
        let bounds = this.refs.wrapper.getBoundingClientRect()
        let centerX = width / 2
        let centerY = height / 2
        let widthMultiplier = 320 / width
        let offsetX = 0.52 - (pageX - bounds.left - scrollLeft) / width
        let offsetY = 0.52 - (pageY - bounds.top - scrollTop) / height
        let deltaX = pageX - bounds.left - scrollLeft - centerX
        let deltaY = pageY - bounds.top - scrollTop - centerY
        let rotateX = (deltaY - offsetY) * (0.08 * widthMultiplier)
        let rotateY = (offsetX - deltaX) * (0.04 * widthMultiplier)
        let angleRad = Math.atan2(deltaY, deltaX)
        let angleRaw = angleRad * 180 / Math.PI - 90
        let angleDeg = angleRaw < 0 ? angleRaw + 360 : angleRaw
        let distanceFromCenter = this.calculateDistance(bounds, nativeEvent.offsetX, nativeEvent.offsetY)
        let shadowMovement = centerY * 0.25
        let shadowSize = 120
        let alpha = this.calculateAlphaFromCenter(distanceFromCenter)
        this.setState({
            rotateX : rotateX,
            rotateY : rotateY,
            shadowMovement : shadowMovement,
            shadowSize : shadowSize,
            scale:  1.03, // How large to scale the item: 1.00 -> 1.10~ from config.scale???
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

    renderKids(children) {
        // console.log(children)
        let style1= {
            width: '100%',                  //lb
            height: '100%',                 //lb
            position: 'absolute',           //lb
            top: '0',                       //lb
            left: '0',                      //lb
            bottom: '0',                    //lb
            right: '0',                     //lb
            WebkitTransform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
            MozTransform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
            transform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
        }
        let phTStyle= {
            width: '100%',                  //lb
            height: '100%',                 //lb
            position: 'absolute',           //lb
            top: '0',                       //lb
            left: '0',                      //lb
            bottom: '0',                    //lb
            right: '0',                     //lb
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '5rem',
            color: '#ffffff',
            zIndex: '1',
        }
        if (!Array.isArray(children)) {
            let style2 = Object.assign({}, style1)
            return React.createElement( 'div', { style: style2, className: 'ph-layer' }, children)
        }
        return children.map( (layer, key) => {
            let num = key++
            let rotateX = Math.floor(this.state.rotateX / num)
            let rotateY = Math.floor(this.state.rotateY / num)
            let style3 = {
                WebkitTransform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + rotateX + ') rotateY(' + rotateY + 'deg)',
                MozTransform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + rotateX + ') rotateY(' + rotateY + 'deg)',
                transform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + rotateX + ') rotateY(' + rotateY + 'deg)',
            }
            if (layer.ref === 'text') {
                let shadow = { textShadow: rotateY * 0.5 + 'px ' + rotateX * 0.5 + 'px 10px rgba(0, 0, 0, 0.3)'}
                layer = layer.props.children
                style3 = Object.assign({}, phTStyle, shadow, style3)
            }
            let child = React.createElement('div', { style: style3, key: key }, layer )
            console.log(child)
            return child
        })
    }

	render() {
        let transition = 'all 0.3s ease-out'
        // .ph-layers div:nth-child(2) {     this is css I added, yet to be incorporated
        //     z-index: 1;
        // }
        // let phTStyle= {
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     textAlign: 'center',
        //     fontSize: '5rem',
        //     color: '#ffffff'
        // }
        // let layersBase = {
        //     width: '100%',
        //     height: '100%',
        //     position: 'absolute',
        //     top: '0',
        //     left: '0',
        //     bottom: '0',
        //     right: '0'
        // }
        let phWStyle = {
            position: 'relative',
            transition: 'all 0.3s ease-out',
            margin: '0',
            padding: '0',
            WebkitTransform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
            MozTransform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
            transform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
            width: this.props.iW,
            height: this.props.iH,
        }
        let phSStyle = {
            width: '90%',
            height: '90%',
            position: 'absolute',
            top: '5%',
            left: '5%',
            bottom: '0',
            right: '0',
            background: 'none',
            transition: 'all 0.3s ease-out',
            WebkitTransform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
            MozTransform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
            transform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
            boxShadow: '0px ' + this.state.shadowMovement + 'px ' + this.state.shadowSize + 'px rgba(0, 0, 0, 0.6)',
            borderRadius: '0',
            border: '1px solid #e1e1e1',
            zIndex: '-1'
        }
        // let phLaStyle = {
        //     margin: '0',
        //     padding: '0',
        //     width: '100%',//lb
        //     height: '100%',//lb
        //     // position: 'relative',
        //     position: 'absolute',//lb
        //     top: '0',//lb
        //     left: '0',//lb
        //     bottom: '0',//lb
        //     right: '0',//lb
        // }
        // let phLa1Style = {
        //     WebkitTransform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
        //     MozTransform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
        //     transform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
        // }
        // let phLa2Style = {
        //     WebkitTransform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
        //     MozTransform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
        //     transform: 'perspective(1000px) scale(' + this.state.scale + ') rotateX(' + this.state.rotateX + 'deg) rotateY(' + this.state.rotateY + 'deg)',
        // }
        let phLiStyle = {
            // border-radius: 0.75rem; css I added
            // backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 33%)' initially it was this?
            // transforms
            backgroundImage: 'linear-gradient(' + this.state.angle + 'deg, rgba(255,255,255, ' + this.state.alpha + ') 0%, rgba(255,255,255,0) 40%)',
            width: '100%',
            height: '100%',
            position: 'absolute',
            // position: 'relative',
            top: '0',
            left: '0',
            bottom: '0',
            transition: transition,
            margin: '0',
            padding: '0',
        }
        return (
            <div style={{transformStyle: 'preserve-3d'}}>
                <div style={phWStyle} ref='wrapper' className='ph-wrapper' onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseLeave} >
                    <div className='ph-shadow' style={phSStyle} />
                    <div className='ph-layers' style={{display: 'block'}}>
                        {this.renderKids(this.props.children)}
                    </div>
                    <div className='ph-lighting' style={phLiStyle} />
                </div>
            </div>
        )
    }
}




    /*

    (
            <div style={{transformStyle: 'preserve-3d'}}>
                <div style={phWStyle} ref='wrapper' className='ph-wrapper' onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseLeave} >
                    <div className='ph-shadow' style={phSStyle} />
                    <div className='ph-layers' style={{display: 'block'}}>
                        {this.renderKids(this.props.children)}
                    </div>
                    <div className='ph-lighting' style={phLiStyle} />
                </div>
            </div>
        )















    <div style={phLa1Style}>
                            {this.props.children[0]}
                        </div>
                        <div style={phLa1Style}>
                            {this.props.children[1]}
                        </div>




    Original Styles w/ respective Layers:
                phOuter
                phWrapper
                    phShadow
                    phLayers
                        phLayer div w/ styles wrapped around img
                        phLayer div w/ phText styles wrapped around 'wrapper' wrapped around all the text
                    phLighting


    wrapper----
    position: relative;
    transition: all 0.3s ease-out 0s;
    margin: 0px;
    padding: 0px;
    transform: perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg);
    width: 700px;
    height: 400px;


        shadow----
        width: 90%;
        height: 90%;
        position: absolute;
        top: 5%;
        left: 5%;
        bottom: 0px;
        right: 0px;
        background: none;
        transition: all 0.3s ease-out 0s;
        transform: perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg);
        box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 0px;
        border-radius: 10px;
        border: 1px solid

        ph-layers----
        display: block;

            layer----
            transform: perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg);

                img----
                border-radius: 0.75rem;

            layer----
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            bottom: 0px;
            right: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 5rem;
            color: rgb(255, 255, 255);
            text-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
            transform: perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg);

                wrapper----
                ...
        lighting----
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        background-image: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 40%);
        transform: perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg);



*/