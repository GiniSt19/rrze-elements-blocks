!function(){"use strict";var e={20:function(e,t,r){var n=r(609),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,i={},a=null,u=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:s.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},848:function(e,t,r){e.exports=r(20)},609:function(e){e.exports=window.React}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}var n=r(848),o=window.wp.blocks,i=window.wp.blockEditor,l=window.wp.i18n,s=window.wp.components,c=r(609),a=window.wp.primitives,u=(0,c.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(a.Path,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})),d=(0,c.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(a.Path,{d:"M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"})),h=(0,c.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(a.Path,{d:"M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"})),v=function(e){var t=e.attributes,r=e.setAttributes,o=e.showLeftAlign,i=void 0===o||o,c=e.showCenterAlign,a=void 0!==c&&c,v=e.showRightAlign,w=void 0===v||v,p=t.alignment,m=function(e){r({alignment:e})},f=[i&&{title:(0,l.__)("Align left","rrze-elements-b"),icon:u,onClick:function(){return m("left")}},a&&{title:(0,l.__)("Align center","rrze-elements-b"),icon:d,onClick:function(){return m("center")}},w&&{title:(0,l.__)("Align right","rrze-elements-b"),icon:h,onClick:function(){return m("right")}}].filter(Boolean);return(0,n.jsx)(s.ToolbarGroup,{children:(0,n.jsx)(s.ToolbarItem,{children:function(){return(0,n.jsx)(s.ToolbarDropdownMenu,{icon:"left"===p?u:"center"===p?d:h,label:(0,l.__)("Display options for the Editor","rrze-elements-b"),controls:f})}})})},w=JSON.parse('{"UU":"rrze-elements/insertion"}');(0,o.registerBlockType)(w.UU,{icon:{src:(0,n.jsxs)("svg",{id:"Ebene_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[(0,n.jsx)("path",{d:"m443.28,267.16v86.6c0,3.17-2.56,5.73-5.73,5.73H74.45c-3.16,0-5.73-2.56-5.73-5.73v-195.51c0-3.16,2.57-5.73,5.73-5.73h193.33v108.92c0,3.16,2.56,5.72,5.73,5.72h169.77Z",fillRule:"evenodd",strokeWidth:"0"}),(0,n.jsx)("rect",{x:"280.49",y:"153.81",width:"161",height:"100.64",rx:"5.73",ry:"5.73",fillRule:"evenodd",opacity:".2",strokeWidth:"0"})]})},__experimentalLabel:function(e,t){var r=t.context,n=e.title;if("list-view"===r&&n)return n},edit:function(e){e.blockProps;var t=e.attributes,r=e.setAttributes,o=(0,i.useBlockProps)(),s=t.alignment;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",Object.assign({},o,{children:[(0,n.jsx)(i.BlockControls,{children:(0,n.jsx)(v,{attributes:{alignment:s},setAttributes:r})}),(0,n.jsx)("aside",{className:"pull-".concat(s," ").concat(null==o?void 0:o.className),children:(0,n.jsx)(i.InnerBlocks,{allowedBlocks:["core/paragraph","core/heading","core/list","core/image"],template:[["core/paragraph",{placeholder:(0,l.__)("Insertion","rrze-elements-b")}]]})})]}))})},save:function(e){var t=e.attributes,r=i.useBlockProps.save(),o=t.alignment;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("aside",{className:"pull-".concat(o," ").concat(null==r?void 0:r.className),children:(0,n.jsx)(i.InnerBlocks.Content,{})})})}})}();