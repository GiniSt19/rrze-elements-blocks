!function(){"use strict";var e,r,t,o,i={20:function(e,r,t){var o=t(609),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var o,n={},d=null,a=null;for(o in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(a=r.ref),r)s.call(r,o)&&!c.hasOwnProperty(o)&&(n[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===n[o]&&(n[o]=r[o]);return{$$typeof:i,type:e,key:d,ref:a,props:n,_owner:l.current}}r.Fragment=n,r.jsx=d,r.jsxs=d},848:function(e,r,t){e.exports=t(20)},609:function(e){e.exports=window.React}},n={};e=function e(r){var t=n[r];if(void 0!==t)return t.exports;var o=n[r]={exports:{}};return i[r](o,o.exports,e),o.exports}(848),r=window.wp.blocks,t=window.wp.blockEditor,o=JSON.parse('{"UU":"rrze-elements/block-blueprint"}'),(0,r.registerBlockType)(o.UU,{icon:{src:(0,e.jsxs)("svg",{id:"Ebene_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[(0,e.jsx)("rect",{x:"60.05",y:"115.69",width:"112.94",height:"280.62",rx:"5.73",ry:"5.73",fill:"evenodd",strokeWidth:"0"}),(0,e.jsx)("rect",{x:"199.53",y:"115.69",width:"112.94",height:"280.62",rx:"5.73",ry:"5.73",fill:"evenodd",strokeWidth:"0"}),(0,e.jsx)("rect",{x:"339.01",y:"115.69",width:"112.94",height:"280.62",rx:"5.73",ry:"5.73",fill:"evenodd",strokeWidth:"0"})]})},__experimentalLabel:function(e,r){var t=r.context,o=e.title;if("list-view"===t&&o)return o},edit:function(r){r.blockProps,r.attributes,r.setAttributes;var o=(0,t.useBlockProps)();return(0,e.jsx)("div",Object.assign({},o,{children:(0,e.jsx)("h2",{children:"Hello World!"})}))},save:function(r){r.attributes;var o=t.useBlockProps.save();return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",Object.assign({},o,{children:(0,e.jsx)("h2",{children:"Hello World!"})}))})}})}();