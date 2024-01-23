!function(){"use strict";var e={251:function(e,t,r){var n=r(196),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,c={},s=null,u=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:u,props:c,_owner:l.current}}t.jsx=c,t.jsxs=c},893:function(e,t,r){e.exports=r(251)},196:function(e){e.exports=window.React}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}!function(){var e=window.wp.blocks,t=r(893),n=window.wp.blockEditor,o=window.wp.components,i=window.wp.i18n,l=window.wp.element,a=r(196),c=window.wp.primitives,s=(0,a.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(c.Path,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})),u=(0,a.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(c.Path,{d:"M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"})),h=(0,a.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(c.Path,{d:"M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"})),d=function(e){var r=e.attributes,n=e.setAttributes,l=e.showLeftAlign,a=void 0===l||l,c=e.showCenterAlign,d=void 0!==c&&c,f=e.showRightAlign,m=void 0===f||f,w=r.alignment,p=function(e){n({alignment:e})},v=[a&&{title:(0,i.__)("Align left","rrze-elements-b"),icon:s,onClick:function(){return p("left")}},d&&{title:(0,i.__)("Align center","rrze-elements-b"),icon:u,onClick:function(){return p("center")}},m&&{title:(0,i.__)("Align right","rrze-elements-b"),icon:h,onClick:function(){return p("right")}}].filter(Boolean);return(0,t.jsx)(o.ToolbarGroup,{children:(0,t.jsx)(o.ToolbarItem,{children:function(){return(0,t.jsx)(o.ToolbarDropdownMenu,{icon:"left"===w?s:"center"===w?u:h,label:(0,i.__)("Display options for the Editor","rrze-elements-b"),controls:v})}})})};function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,l,a=[],c=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var w=JSON.parse('{"u2":"rrze-elements/block-contentwidthlimiter"}');(0,e.registerBlockType)(w.u2,{icon:{src:React.createElement("svg",{id:"Ebene_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},React.createElement("rect",{x:"77.51",y:"114.93",width:"153.67",height:"280.62",rx:"5.73",ry:"5.73",fill:"evenodd",strokeWidth:"0"}),React.createElement("g",{opacity:".25"},React.createElement("rect",{x:"175.76",y:"114.93",width:"271.12",height:"280.62",rx:"5.73",ry:"5.73",fill:"evenodd",strokeWidth:"0"})),React.createElement("path",{d:"m475.16,248.35v20.36c0,4.29-3.46,7.76-7.76,7.76h-173.77l40.78,40.78c3.03,3.03,3.03,7.94,0,10.96l-2.1,2.1c-3.02,3.03-7.93,3.03-10.96,0l-64.76-64.76c-2.98-2.99-3.02-7.81-.11-10.84.38-.88.92-1.71,1.64-2.42l64.76-64.76c3.03-3.02,7.93-3.02,10.96,0l2.1,2.1c3.03,3.03,3.03,7.93,0,10.96l-40.02,40.02h171.49c4.29,0,7.76,3.46,7.76,7.76Z",fill:"evenodd",strokeWidth:"0"}))},__experimentalLabel:function(e,t){var r=t.context,n=e.title;if("list-view"===r&&n)return n},edit:function(e){e.blockProps;var r,a=e.attributes,c=e.setAttributes,s=(0,n.useBlockProps)(),u=f((0,l.useState)(a.width),2),h=u[0],m=u[1],w=f((0,l.useState)("transparent"),2),p=w[0],v=w[1],g=f((0,l.useState)(!1),2),b=g[0],y=g[1],x=a.alignment;r=Math.round(.125*h)>=50&&Math.round(.125*h)<=75?(0,i.__)(" (Ideale Leselänge)","rrze-elements-b"):h<=300||h>=1040?(0,i.__)(" (Außerhalb des sichtbaren Bereichs)","rrze-elements-b"):"";var _=!1,j=!1;return"right"===x?(_=!0,j=!1):"center"===x?(_=!0,j=!0):(_=!1,j=!0),(0,t.jsxs)("div",Object.assign({},s,{className:"".concat(s.className),children:[(0,t.jsx)(n.BlockControls,{controls:!0,children:(0,t.jsx)(d,{attributes:{alignment:x},setAttributes:c,showCenterAlign:!0})}),b&&(0,i.__)("Ca. ")+Math.round(.125*h)+(0,i.__)(" Zeichen","rrze-elements-b")+r,(0,t.jsx)(o.ResizableBox,{className:"limit-width cwl-".concat(x),enable:{bottom:!1,bottomLeft:!1,bottomRight:!1,left:_,right:j,top:!1,topLeft:!1,topRight:!1},onResizeStop:function(e,t,r,n){var o=r.offsetWidth;o>=300&&o<=1040&&(m(o),c({width:o})),v("transparent"),console.log("Resize stopped: final width is ",o),y(!1)},onResize:function(e,t,r,n){var o=r.offsetWidth;o>=300&&o<=1040&&m(o),y(!0),Math.round(.125*o)>=50&&Math.round(.125*o)<=75?v("#cfedd8"):v(o<=300||o>=1040?"#E61607":"#f2ded1")},size:{height:"auto",width:h},children:(0,t.jsx)("div",{style:{alignItems:"center",background:p,display:"flex",height:"100%",justifyContent:"left",width:Math.round(.125*h)+"ch"},children:(0,t.jsx)(n.InnerBlocks,{template:[["core/paragraph",{placeholder:(0,i.__)("Add your content here...","rrze-elements-b")}]]})})})]}))},save:function(e){var r,o,i=e.attributes,l=n.useBlockProps.save(),a=i.width,c=Math.round(.125*a),s=i.alignment;return o="left"===s?"margin-right: auto;":"right"===s?"margin-left: auto;":"margin: 0 auto;",(0,t.jsx)("div",{className:"limit-width ".concat(null==l?void 0:l.className),style:Object.assign({maxWidth:"min(".concat(c,"ch, 100%)")},(r=o,r.split(";").map((function(e){return e.split(":")})).reduce((function(e,t){if(2===t.length){var r=t[0].trim(),n=t[1].trim();e[r]=n}return e}),{}))),children:(0,t.jsx)(n.InnerBlocks.Content,{})})}})}()}();