!function(){"use strict";var e={20:function(e,r,t){var o=t(609),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var o,n={},d=null,a=null;for(o in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(a=r.ref),r)s.call(r,o)&&!c.hasOwnProperty(o)&&(n[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===n[o]&&(n[o]=r[o]);return{$$typeof:i,type:e,key:d,ref:a,props:n,_owner:l.current}}r.Fragment=n,r.jsx=d,r.jsxs=d},848:function(e,r,t){e.exports=t(20)},609:function(e){e.exports=window.React}},r={},t=function t(o){var i=r[o];if(void 0!==i)return i.exports;var n=r[o]={exports:{}};return e[o](n,n.exports,t),n.exports}(848),o=window.wp.blocks,i=window.wp.blockEditor,n=JSON.parse('{"UU":"rrze-elements/block-blueprint"}');(0,o.registerBlockType)(n.UU,{icon:{src:(0,t.jsxs)("svg",{id:"Ebene_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[(0,t.jsx)("rect",{x:"60.05",y:"115.69",width:"112.94",height:"280.62",rx:"5.73",ry:"5.73",fill:"evenodd",strokeWidth:"0"}),(0,t.jsx)("rect",{x:"199.53",y:"115.69",width:"112.94",height:"280.62",rx:"5.73",ry:"5.73",fill:"evenodd",strokeWidth:"0"}),(0,t.jsx)("rect",{x:"339.01",y:"115.69",width:"112.94",height:"280.62",rx:"5.73",ry:"5.73",fill:"evenodd",strokeWidth:"0"})]})},__experimentalLabel:function(e,r){var t=r.context,o=e.title;if("list-view"===t&&o)return o},edit:function(e){e.blockProps,e.attributes,e.setAttributes;var r=(0,i.useBlockProps)();return(0,t.jsx)("div",Object.assign({},r,{children:(0,t.jsx)("h2",{children:"Hello World!"})}))},save:function(e){e.attributes;var r=i.useBlockProps.save();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",Object.assign({},r,{children:(0,t.jsx)("h2",{children:"Hello World!"})}))})}})}();