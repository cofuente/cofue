(this.webpackJsonpcofue=this.webpackJsonpcofue||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/cardStock.cad8bdb1.jpg"},29:function(e,t,a){e.exports=a.p+"static/media/resume.da744c1b.pdf"},30:function(e){e.exports=JSON.parse('{"firstName":"Chiara","lastName":"Marcial Mart\xednez","title":"full stack software engineer","email":"contact@cofuente.io","githubUrl":"https://github.com/cofuente","linkedInUrl":"https://www.linkedin.com/in/cofuente/"}')},32:function(e,t,a){e.exports=a(74)},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),i=a(25),l=a.n(i),s=a(26),u=a.n(s),d=a(3),h=a(5),p=a(2),m=a(6),f=a(7),b=a(4),v=a(13),g=a(15),w=a(27),O=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{icon:g.a,size:"2x","aria-hidden":!0})}}]),t}(n.PureComponent),y=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{icon:g.b,size:"2x","aria-hidden":!0})}}]),t}(n.PureComponent),j=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{icon:w.a,size:"2x","aria-hidden":!0})}}]),t}(n.PureComponent),E=(a(52),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,a=e.height,n=e.userInfo,c=Math.round(t/70),o={width:"".concat(t,"px"),height:"".concat(a,"px"),fontSize:"".concat(c,"px")},i=n.firstName,l=n.lastName,s=n.title,u=n.email,d=n.resume,h=n.linkedInUrl,p=n.githubUrl;return r.a.createElement("div",null,r.a.createElement("div",{className:"text-wrapper",style:o},r.a.createElement("h1",{className:"full_name"},i,r.a.createElement("br",null),l),r.a.createElement("h2",{className:"title"},s),r.a.createElement("p",{className:"email"},r.a.createElement("a",{href:"mailto:".concat(u)},u)),r.a.createElement("div",{className:"link_buttons"},r.a.createElement("button",{type:"button",className:"link_button",onClick:function(){return window.open("".concat(p))},"aria-label":"Check out my work on GitHub!"},r.a.createElement(O,{className:"item"})),r.a.createElement("button",{type:"button",className:"link_button",onClick:function(){return function(e,t,a){var n=function(e){return e.replace(/\s+/g,"")},r="".concat(n(t).toLowerCase()+n(a).toLowerCase(),".pdf"),c=document.createElement("a");c.download=r,c.href=e,document.body.appendChild(c),c.click(),document.body.removeChild(c)}(d,i,l)},"aria-label":"Click here to download my r\xe9sum\xe9"},r.a.createElement(j,{className:"item"})),r.a.createElement("button",{type:"button",className:"link_button",onClick:function(){return window.open("".concat(h))},"aria-label":"I'm on LinkedIn too."},r.a.createElement(y,{className:"item"})))))}}]),t}(n.PureComponent)),k=a(11),M=a(31),N=window.__sensor__=Symbol("__sensor__"),C={};Object.defineProperty(C,"angle",{get:function(){return window.orientation||0}});var x=function(e,t){for(var a in console.log("slot:",N,typeof N),t)Object.defineProperty(e,a,{configurable:!0,value:t[a]})},S=function(e,t,a){var n=e[t]||(e[t]=new WeakMap),r=function(t){n[t]=a[t],Object.defineProperty(e,t,{get:function(){return n[t]}})};for(var c in a)r(c)},X=function(e,t){return Object.defineProperty(e,"on".concat(t),{enumerable:!0,configurable:!1,writable:!0,value:null})},Y=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),t}(function(e){function t(){var e;Object(d.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e=Object(h.a)(this,Object(p.a)(t).call(this,n));var c=document.createDocumentFragment();return e.addEventListener=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return c.addEventListener.apply(c,[e].concat(a))},e.removeEventListener=function(){return c.removeEventListener.apply(c,arguments)},e.dispatchEvent=function(t){x(t,{currentTarget:Object(m.a)(e)}),t.target||x(t,{target:Object(m.a)(e)});var a="on".concat(t.type);"function"==typeof e[a]&&e[a](t);var n=c.dispatchEvent(t);return n&&e.parentNode&&e.parentNode.dispatchEvent(t),x(t,{currentTarget:null,target:null}),n},e}return Object(b.a)(t,e),t}(Object)),q=0,I=1,L=2,P=3,T=function(e){function t(e,a){var n;if(Object(d.a)(this,t),n=Object(h.a)(this,Object(p.a)(t).call(this,e,a)),!a||!a.error instanceof DOMException)throw TypeError("Failed to construct 'SensorErrorEvent':2nd argument much contain 'error' property");return Object.defineProperty(Object(m.a)(n),"error",{configurable:!1,writable:!1,value:a.error}),n}return Object(b.a)(t,e),t}(Object(M.a)(Event)),A=function(e){function t(e){var a;if(Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this)))[N]=new WeakMap,X(Object(m.a)(a),"reading"),X(Object(m.a)(a),"activate"),X(Object(m.a)(a),"error"),S(Object(m.a)(a),N,{activated:!1,hasReading:!1,timestamp:null}),a[N].setState=function(e){switch(e){case q:var t=new T("error",{error:new DOMException("Could not connect to a sensor")});a.dispatchEvent(t),a.stop();break;case I:a[N].activated=!1,a[N].hasReading=!1,a[N].timestamp=null;break;case L:break;case P:var n=new Event("activate");a[N].activated=!0,a.dispatchEvent(n)}},a[N].frequency=null,window&&window.parent!=window.top)throw new DOMException("Only instantiable in a top-level browsing context","SecurityError");return e&&"number"==typeof e.frequency&&e.frequency>60&&(a.frequency=e.frequency),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"start",value:function(){}},{key:"stop",value:function(){}}]),t}(Y),D=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return function(e){function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];e=Object(h.a)(this,Object(p.a)(t).call(this,r));var o=!0,i=!1,l=void 0;try{for(var s,u=a[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var m=s.value;if("on".concat(m)in window){e[N].eventName=m;break}}}catch(f){i=!0,l=f}finally{try{o||null==u.return||u.return()}finally{if(i)throw l}}return e}return Object(b.a)(t,e),Object(f.a)(t,[{key:"start",value:function(){Object(k.a)(Object(p.a)(t.prototype),"start",this).call(this),this[N].setState(L),window.addEventListener(this[N].eventName,this[N].handleEvent,{capture:!0})}},{key:"stop",value:function(){Object(k.a)(Object(p.a)(t.prototype),"stop",this).call(this),this[N].setState(I),window.removeEventListener(this[N].eventName,this[N].handleEvent,{capture:!0})}}]),t}(e)},_=function(e,t,a){var n=Math.PI/180,r=(t||0)*n,c=(a||0)*n,o=(e||0)*n,i=Math.cos(.5*o),l=Math.sin(.5*o),s=Math.cos(.5*c),u=Math.sin(.5*c),d=Math.cos(.5*r),h=Math.sin(.5*r);return[h*s*i-d*u*l,d*u*i+h*s*l,d*s*l+h*u*i,d*s*i-h*u*l]},z=function(e){return e?function(e,t,a){var n,r,c=Math.sin(a/2),o=Math.cos(a/2),i=[t[0]*c,t[1]*c,t[2]*c,o];return function(e){var t=Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2));return 0===t?[0,0,0,1]:e.map((function(e){return e/t}))}((r=i,[(n=e)[0]*r[3]+n[3]*r[0]+n[1]*r[2]-n[2]*r[1],n[1]*r[3]+n[3]*r[1]+n[2]*r[0]-n[0]*r[2],n[2]*r[3]+n[3]*r[2]+n[0]*r[1]-n[1]*r[0],n[3]*r[3]-n[0]*r[0]-n[1]*r[1]-n[2]*r[2]]))}(e,[0,0,1],-C.angle*Math.PI/180):null},F=window.AbsoluteOrientationSensor||function(e){function t(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(Object(d.a)(this,t),e=Object(h.a)(this,Object(p.a)(t).call(this,a)),a.coordinateSystem||"world"){case"screen":Object.defineProperty(Object(m.a)(e),"quaternion",{get:function(){return z(e[N].quaternion)}});break;case"world":default:Object.defineProperty(Object(m.a)(e),"quaternion",{get:function(){return e[N].quaternion}})}return e[N].handleEvent=function(t){var a=!0===t.absolute||"webkitCompassHeading"in t,n=null!==t.alpha||void 0!==t.webkitCompassHeading;if(a&&n){e[N].activated||e[N].setState(P),e[N].hasReading=!0,e[N].timestamp=performance.now();var r=null!=t.webkitCompassHeading?360-t.webkitCompassHeading:t.alpha;e[N].quaternion=_(r,t.beta,t.gamma),e.dispatchEvent(new Event("reading"))}else e[N].setState(q)},e}return Object(b.a)(t,e),Object(f.a)(t,[{key:"stop",value:function(){Object(k.a)(Object(p.a)(t.prototype),"stop",this).call(this),this[N].quaternion=null}},{key:"populateMatrix",value:function(e){!function(e,t){(e instanceof Float32Array||e instanceof Float64Array)&&e.length>=16&&(e[0]=1-2*(Math.pow(t[1],2)+Math.pow(t[2],2)),e[1]=2*(t[0]*t[1]-t[2]*t[3]),e[2]=2*(t[0]*t[2]+t[1]*t[3]),e[3]=0,e[4]=2*(t[0]*t[1]+t[2]*t[3]),e[5]=1-2*(Math.pow(t[0],2)+Math.pow(t[2],2)),e[6]=2*(t[1]*t[2]-t[0]*t[3]),e[7]=0,e[8]=2*(t[0]*t[2]-t[1]*t[3]),e[9]=2*(t[1]*t[2]+t[0]*t[3]),e[10]=1-2*(Math.pow(t[0],2)+Math.pow(t[1],2)),e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1)}(e,this.quaternion)}}]),t}(D(A,"deviceorientationabsolute","deviceorientation")),R=(window.Gyroscope||D(A,"devicemotion"),a(53),function(e){function t(e){var a;Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).sensor=new F({frequency:60});var n=a.props,r=n.width,c=n.height;return a.state={rotateX:0,rotateY:0,shadowMovement:0,shadowSize:0,scale:1,angle:0,alpha:0,width:r,height:c},a.calculateAlphaFromCenter=a.calculateAlphaFromCenter.bind(Object(m.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(m.a)(a)),a.handleMouseMove=a.handleMouseMove.bind(Object(m.a)(a)),a.renderCardContent=a.renderCardContent.bind(Object(m.a)(a)),a}return Object(b.a)(t,e),Object(f.a)(t,null,[{key:"calculateDistance",value:function(e,t,a){var n=Math.pow(t-e.width/2,2),r=Math.pow(a-e.height/2,2);return Math.floor(Math.sqrt(n+r))}},{key:"convertRadToDeg",value:function(e,t){var a=180*Math.atan2(e,t)/Math.PI-90;return a<0?a+360:a}},{key:"getDerivedStateFromProps",value:function(e,t){return e.width!==t.width||e.height!==t.height?{width:e.width,height:e.height}:null}}]),Object(f.a)(t,[{key:"calculateAlphaFromCenter",value:function(e){var t=this.state,a=t.width,n=t.height;return e/Math.max(a,n)*.4}},{key:"handleMouseLeave",value:function(){this.setState({rotateX:0,rotateY:0,shadowMovement:0,shadowSize:0,scale:1,angle:0,alpha:0})}},{key:"handleMouseMove",value:function(e){var a=e.pageX,n=e.pageY,r=e.nativeEvent,c=this.state,o=c.width,i=c.height,l=document.body,s=l.scrollTop,u=l.scrollLeft,d=this.wrapper.getBoundingClientRect(),h=o/2,p=i/2,m=.52-(a-d.left-u)/o,f=.52-(n-d.top-s)/i,b=a-d.left-u-h,v=n-d.top-s-p,g=320/o,w=.08*g*(v-f),O=.04*g*(m-b),y=t.convertRadToDeg(v,b),j=t.calculateDistance(d,r.offsetX,r.offsetY),E=.25*p,k=this.calculateAlphaFromCenter(j);this.setState({rotateX:w,rotateY:O,shadowMovement:E,shadowSize:120,scale:1.03,angle:y,alpha:k})}},{key:"initSensor",value:function(){var e=this;this.sensor.onreading=function(){console.log(e.sensor.quaternion)},this.sensor.onerror=function(e){"NotReadableError"===e.error.name&&console.log("Sensor is not available.")},this.sensor.start()}},{key:"renderCardContent",value:function(e){var t=this.state,a=t.scale,n=t.rotateX,c=t.rotateY,o={WebkitTransform:"perspective(1000px) scale3d(".concat(a,", ").concat(a,", ").concat(a,") rotateX(").concat(n,"deg) rotateY(").concat(c,"deg)"),MozTransform:"perspective(1000px) scale3d(".concat(a,", ").concat(a,", ").concat(a,") rotateX(").concat(n,"deg) rotateY(").concat(c,"deg)"),MsTransform:"perspective(1000px) scale3d(".concat(a,", ").concat(a,", ").concat(a,") rotateX(").concat(n,"deg) rotateY(").concat(c,"deg)"),OTransform:"perspective(1000px) scale3d(".concat(a,", ").concat(a,", ").concat(a,") rotateX(").concat(n,"deg) rotateY(").concat(c,"deg)"),transform:"perspective(1000px) scale3d(".concat(a,", ").concat(a,", ").concat(a,") rotateX(").concat(n,"deg) rotateY(").concat(c,"deg)")};return e.map((function(e,t){var a=t+1,n="rbc-layer-0".concat(t),c=o,i=e;return r.a.createElement("div",{style:c,className:n,key:a},i)}))}},{key:"render",value:function(){var e=this;F in window?this.initSensor():console.log("AOS not supported");var t=this.state,a=t.scale,n=t.rotateX,c=t.rotateY,o=t.width,i=t.height,l=t.shadowMovement,s=t.shadowSize,u=t.angle,d=t.alpha,h=this.props.children,p={WebkitTransform:"perspective(1000px) scale3d(".concat(a,", ").concat(a,", ").concat(a,") rotateX(").concat(n,"deg) rotateY(").concat(c,"deg)"),MozTransform:"perspective(1000px) scale3d(".concat(a,", ").concat(a,", ").concat(a,") rotateX(").concat(n,"deg) rotateY(").concat(c,"deg)"),MsTransform:"perspective(1000px) scale3d(".concat(a,", ").concat(a,", ").concat(a,") rotateX(").concat(n,"deg) rotateY(").concat(c,"deg)"),OTransform:"perspective(1000px) scale3d(".concat(a,", ").concat(a,", ").concat(a,") rotateX(").concat(n,"deg) rotateY(").concat(c,"deg)"),transform:"perspective(1000px) scale3d(".concat(a,", ").concat(a,", ").concat(a,") rotateX(").concat(n,"deg) rotateY(").concat(c,"deg)")},m=Object.assign({},{width:o,height:i},p),f=Object.assign({},{boxShadow:"0px ".concat(l,"px ").concat(s,"px rgba(0, 0, 0, 0.6)")},p),b=Object.assign({},{backgroundImage:"linear-gradient(".concat(u,"deg, rgba(255,255,255, ").concat(d,") 0%, rgba(255,255,255,0) 40%)")},p);return r.a.createElement("div",{className:"rbc-outer"},r.a.createElement("div",{style:m,ref:function(t){e.wrapper=t},className:"rbc-wrapper",onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave},r.a.createElement("div",{className:"rbc-shadow",style:f}),r.a.createElement("div",{className:"rbc-layers"},this.renderCardContent(h)),r.a.createElement("div",{className:"rbc-lighting",style:b})))}}]),t}(n.Component)),H=(a(54),function(e){var t,a,n=e.cardStock,c=e.resume,o=e.contactInfo,i={resume:c,firstName:o.firstName,lastName:o.lastName,title:o.title,email:o.email,githubUrl:o.githubUrl,linkedInUrl:o.linkedInUrl},s=l()(),d=window,h=d.innerWidth,p=d.innerHeight,m=h>p?"landscape":"portrait";return"portrait"===m&&(a=(t=h<750?.9*h:700)<700?4*t/7:400),"landscape"===m&&(p>=700?(t=700,a=400):h/p>=1.75?t=1.75*(a=.9*p):a=4*(t=.9*h)/7),r.a.createElement("div",{id:"my-card"},r.a.createElement(u.a,{target:"window",onResize:function(){s()},onOrientationChange:function(){s()}}),r.a.createElement(R,{width:t,height:a},r.a.createElement("img",{width:t,height:a,src:n,alt:"The lovely card stock I picked for this printing. Like it?"}),r.a.createElement(E,{width:t,height:a,userInfo:i})))}),U=a(28),W=a.n(U),B=a(29),J=a.n(B),G=a(30),$=a(8),K=a.n($),Q=(a(72),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"console-container"},r.a.createElement(K.a,{className:"console",speed:35},r.a.createElement("div",{className:"line",id:"line-1"},r.a.createElement("span",null,"Hey stranger."),r.a.createElement(K.a.Delay,{ms:900})),r.a.createElement("div",{className:"line",id:"line-2"},r.a.createElement("br",null),r.a.createElement("span",null,"Why don't you take my card?")),r.a.createElement("div",{className:"line",id:"line-3"},r.a.createElement("br",null),r.a.createElement("span",null,"-"),r.a.createElement("span",{role:"img","aria-label":"Alien",id:"alien"}," "),r.a.createElement(K.a.Speed,{ms:120}),r.a.createElement(K.a.Delay,{ms:375}),r.a.createElement("span",{role:"img","aria-label":"Seedling",id:"seedling"}," "),r.a.createElement(K.a.Delay,{ms:375}),r.a.createElement("span",{role:"img","aria-label":"Red Heart",id:"heart"}," "),r.a.createElement(K.a.Delay,{ms:12e4}))))}}]),t}(n.PureComponent)),V=(a(73),function(){return r.a.createElement("div",{id:"super"},r.a.createElement(Q,null),r.a.createElement(H,{cardStock:W.a,resume:J.a,contactInfo:G}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.61128a3d.chunk.js.map