// import React, { Component } from 'react'


// export default class CardContent extends Component {
//     constructor(props){
//         super(props)

//     }

//     const baseStyle = {
//         width: '100%',
//         height: '100%',
//         position: 'absolute',
//         top: '0',
//         left: '0',
//         bottom: '0',
//         right: '0',
//     }
//     const textStyle= {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center',
//         fontSize: '5rem',
//         color: '#ffffff',
//         zIndex:'1', //css I added but necessary for clickable icons
//     }
//     const transformsStyle = {
//         WebkitTransform: 'perspective(1000px) scale(' +this.state.scale+ ') rotateX(' +this.state.rotateX+ 'deg) rotateY(' +this.state.rotateY+ 'deg)',
//         MozTransform: 'perspective(1000px) scale(' +this.state.scale+ ') rotateX(' +this.state.rotateX+ 'deg) rotateY(' +this.state.rotateY+ 'deg)',
//         transform: 'perspective(1000px) scale(' +this.state.scale+ ') rotateX(' +this.state.rotateX+ 'deg) rotateY(' +this.state.rotateY+ 'deg)',
//     }
//     render() {
//     if (!Array.isArray(children)) {
//         const rbcLayerStyle = Object.assign({}, baseStyle, transformsStyle)
//         return React.createElement( 'div', { style: rbcLayerStyle, className: 'ph-layer' }, children)
//     }
//     return children.map( (layer, key) => {
//         const num = ++key
//         const rotateX = Math.floor(this.state.rotateX / num)
//         const rotateY = Math.floor(this.state.rotateY / num)
//         let layerSpecificStyle = {
//             WebkitTransform: 'perspective(1000px) scale(' +this.state.scale+ ') rotateX(' +rotateX+ ') rotateY(' +rotateY+ 'deg)',
//             MozTransform: 'perspective(1000px) scale(' +this.state.scale+ ') rotateX(' +rotateX+ ') rotateY(' +rotateY+ 'deg)',
//             transform: 'perspective(1000px) scale(' +this.state.scale+ ') rotateX(' +rotateX+ ') rotateY(' +rotateY+ 'deg)',            }
//         if (layer.ref === 'text') {
//             const textShadowStyle = { textShadow: rotateY * 0.5 + 'px ' + rotateX * 0.5 + 'px 10px rgba(0, 0, 0, 0.3)'}
//             layer = layer.props.children
//             layerSpecificStyle = Object.assign({}, baseStyle, textStyle, textShadowStyle, layerSpecificStyle)
//         }
//      return React.createElement('div', { style: layerSpecificStyle, key: key }, layer )
//     })