!function(){"use strict";var e,r,t,o,n={251:function(e,r,t){var o=t(196),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};r.Fragment=i,r.jsx=function(e,r,t){var o,i={},u=null,a=null;for(o in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(a=r.ref),r)s.call(r,o)&&!l.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===i[o]&&(i[o]=r[o]);return{$$typeof:n,type:e,key:u,ref:a,props:i,_owner:c.current}}},893:function(e,r,t){e.exports=t(251)},196:function(e){e.exports=window.React}},i={};e=window.wp.blocks,r=function e(r){var t=i[r];if(void 0!==t)return t.exports;var o=i[r]={exports:{}};return n[r](o,o.exports,e),o.exports}(893),t=window.wp.blockEditor,o=JSON.parse('{"u2":"rrze-elements/columns"}'),(0,e.registerBlockType)(o.u2,{icon:{src:"minus",background:"#00458c"},__experimentalLabel:function(e,r){var t=r.context,o=e.title;if("list-view"===t&&o)return o},edit:function(e){e.blockProps,e.attributes,e.setAttributes;var o=(0,t.useBlockProps)();return(0,r.jsx)("div",Object.assign({},o,{children:(0,r.jsx)("h2",{children:"Hello World!"})}))},save:function(e){e.attributes;var o=t.useBlockProps.save();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",Object.assign({},o,{children:(0,r.jsx)("h2",{children:"Hello World!"})}))})}})}();