!function(){"use strict";var e,r,s,t,i,n={808:function(e,r,s){var t=s(280),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,s){var t,n={},c=null,a=null;for(t in void 0!==s&&(c=""+s),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(a=r.ref),r)l.call(r,t)&&!d.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===n[t]&&(n[t]=r[t]);return{$$typeof:i,type:e,key:c,ref:a,props:n,_owner:o.current}}r.Fragment=n,r.jsx=c,r.jsxs=c},624:function(e,r,s){e.exports=s(808)},280:function(e){e.exports=window.React}},l={};e=function e(r){var s=l[r];if(void 0!==s)return s.exports;var t=l[r]={exports:{}};return n[r](t,t.exports,e),t.exports}(624),r=window.wp.blocks,s=window.wp.blockEditor,t=window.wp.data,i=JSON.parse('{"N9":"rrze-elements/textslider"}'),(0,r.registerBlockType)(i.N9,{icon:{src:(0,e.jsxs)("svg",{id:"Ebene_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[(0,e.jsx)("rect",{x:"60.05",y:"115.69",width:"112.94",height:"280.62",rx:"5.73",ry:"5.73",fill:"evenodd",strokeWidth:"0"}),(0,e.jsx)("rect",{x:"199.53",y:"115.69",width:"112.94",height:"280.62",rx:"5.73",ry:"5.73",fill:"evenodd",strokeWidth:"0"}),(0,e.jsx)("rect",{x:"339.01",y:"115.69",width:"112.94",height:"280.62",rx:"5.73",ry:"5.73",fill:"evenodd",strokeWidth:"0"})]})},__experimentalLabel:function(e,r){var s=r.context,t=e.title;if("list-view"===s&&t)return t},edit:function(r){r.blockProps,r.attributes,r.setAttributes;var i=r.clientId,n=(0,s.useBlockProps)();return(0,t.useSelect)((function(e){var r=e("core/block-editor"),s=(r.getBlock,r.getBlocks),t=(r.getBlockIndex,s(i)),n=0;return{innerClientIds:t.map((function(e){return{clientId:null==e?void 0:e.clientId,position:n++}}))}}),[i]).innerClientIds,(0,e.jsx)("div",Object.assign({},n,{children:(0,e.jsxs)("section",{className:"slider-wrapper",children:[(0,e.jsx)("button",{className:"slide-arrow",id:"slide-arrow-prev",children:"‹"}),(0,e.jsx)("button",{className:"slide-arrow",id:"slide-arrow-next",children:"›"}),(0,e.jsx)("ul",{className:"slides-container",id:"slides-container",children:(0,e.jsx)(s.InnerBlocks,{template:[["rrze-elements/textslideritem"],["rrze-elements/textslideritem"],["rrze-elements/textslideritem"]],allowedBlocks:["rrze-elements/textslideritem"]})})]})}))},save:function(r){r.attributes;var t=s.useBlockProps.save();return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",Object.assign({},t,{children:(0,e.jsxs)("section",{className:"slider-wrapper",children:[(0,e.jsx)("button",{className:"slide-arrow",id:"slide-arrow-prev",children:"‹"}),(0,e.jsx)("button",{className:"slide-arrow",id:"slide-arrow-next",children:"›"}),(0,e.jsxs)("ul",{className:"slides-container",id:"slides-container",children:[(0,e.jsx)("li",{className:"slide"}),(0,e.jsx)("li",{className:"slide"}),(0,e.jsx)("li",{className:"slide"}),(0,e.jsx)("li",{className:"slide"})]})]})}))})}})}();