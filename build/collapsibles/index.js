!function(){"use strict";var e={75251:function(e,t,n){var r=n(99196),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!a.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:l,type:e,key:c,ref:u,props:o,_owner:i.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},85893:function(e,t,n){e.exports=n(75251)},99196:function(e){e.exports=window.React}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}!function(){var e=window.wp.blocks,t=n(85893),r=window.wp.element,l=window.wp.blockEditor,o=window.wp.components,s=window.lodash,i=window.wp.data,a=window.wp.i18n,c=function(e){var n=e.attributes,r=e.setAttributes;return(0,t.jsx)(o.CheckboxControl,{label:(0,a.__)("Show Expand-All-Link","rrze-elements-b"),checked:n.expandAllLink,onChange:function(){r({expandAllLink:!n.expandAllLink})}})},u=n(99196),d=window.wp.primitives,p=(0,u.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,u.createElement)(d.Path,{d:"M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"})),v=(0,u.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,u.createElement)(d.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"})),h=(0,u.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,u.createElement)(d.Path,{d:"M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"})),m=(0,u.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,u.createElement)(d.Path,{d:"M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"})),b=(0,u.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,u.createElement)(d.Path,{d:"M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"})),f=function(e){switch(e){case 2:default:return p;case 3:return v;case 4:return h;case 5:return m;case 6:return b}},x=function(e){var n=e.attributes,r=e.setAttributes,l=function(e){r({hstart:e})};return(0,t.jsx)(o.ToolbarDropdownMenu,{icon:f(n.hstart),label:"Select heading level",controls:[{title:"H2",isDisabled:2===n.hstart,onClick:function(){return l(2)}},{title:"H3",isDisabled:3===n.hstart,onClick:function(){return l(3)}},{title:"H4",isDisabled:4===n.hstart,onClick:function(){return l(4)}},{title:"H5",isDisabled:5===n.hstart,onClick:function(){return l(5)}},{title:"H6",isDisabled:6===n.hstart,onClick:function(){return l(6)}}]})},w=function(e){var n=e.attributes,r=e.setAttributes;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.__experimentalToggleGroupControl,{label:(0,a.__)("Heading level","rrze-elements-b"),value:n.hstart,onChange:function(e){r({hstart:e})},isBlock:!0,children:[(0,t.jsx)(o.__experimentalToggleGroupControlOption,{value:2,label:"H2"}),(0,t.jsx)(o.__experimentalToggleGroupControlOption,{value:3,label:"H3"}),(0,t.jsx)(o.__experimentalToggleGroupControlOption,{value:4,label:"H4"}),(0,t.jsx)(o.__experimentalToggleGroupControlOption,{value:5,label:"H5"}),(0,t.jsx)(o.__experimentalToggleGroupControlOption,{value:6,label:"H6"})]}),(0,t.jsx)(o.__experimentalText,{children:(0,a.__)("Controls the heading level of the accordion","rrze-elements-b")}),(0,t.jsx)(o.__experimentalDivider,{})]})};function g(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=function e(t){var n=g(t);return t.forEach((function(t){t.innerBlocks&&t.innerBlocks.length>0&&(n=[].concat(g(n),g(e(t.innerBlocks))))})),n},j=JSON.parse('{"u2":"rrze-elements/collapsibles"}');(0,e.registerBlockType)(j.u2,{icon:{src:"align-center",background:"#00458c"},edit:function(e){var n=e.attributes,u=e.setAttributes,d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n}(e,["attributes","setAttributes"]),p=(0,l.useBlockProps)(),v=(n.sameBlockCount,n.previousBlockIds,n.hstart,(0,i.useSelect)((function(e){var t=e("core/block-editor"),n=t.getBlock,r=t.getBlocks,l=t.getBlockIndex,o=d.clientId,s=r(o).length;r(o).forEach((function(e){0!==(null==e?void 0:e.innerBlocks.length)&&(null==e||e.innerBlocks.forEach((function(e){"rrze-elements/accordions"===(null==e?void 0:e.name)&&(s+=e.attributes.childrenCount)})))}));var i=l(o),a=r(),c=_(a).filter((function(e){return"rrze-elements/collapsibles"===e.name})).map((function(e){return e.clientId})),u=c.indexOf(o),p=c.slice(0,u);return{selectedBlock:n(o),numberChildren:s,blockIndex:i,previousBlockClients:p}}),[d.clientId])),h=(v.selectedBlock,v.numberChildren),m=(v.blockIndex,v.previousBlockClients);return(0,r.useEffect)((function(){n.childrenCount!==h&&u({childrenCount:h})}),[h,u,n.childrenCount]),(0,r.useEffect)((function(){(0,s.isEqual)(n.previousBlockIds,m)||u({previousBlockIds:m})}),[m,u,n.previousBlockClients]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",Object.assign({},p,{children:[(0,t.jsx)(l.BlockControls,{controls:!0,children:(0,t.jsx)(x,{attributes:n,setAttributes:u})}),(0,t.jsxs)(l.InspectorControls,{children:[(0,t.jsx)(o.PanelBody,{title:(0,a.__)("Heading Settings","rrze-elements-b"),initialOpen:!0,children:(0,t.jsx)(w,{attributes:n,setAttributes:u})}),(0,t.jsx)(o.PanelBody,{title:(0,a.__)("Collapsibles Settings","rrze-elements-b"),initialOpen:!0,children:(0,t.jsx)(c,{attributes:n,setAttributes:u})})]}),(0,t.jsxs)("div",{className:"accordion",id:"accordion-",children:[n.expandAllLink&&(0,t.jsx)("div",{className:"button-container-right",children:(0,t.jsx)("button",{className:"expand-all standard-btn primary-btn xsmall-btn","data-status":"closed",children:(0,a.__)("Expand All","rrze-elements-b")})}),n.message&&(0,t.jsx)(t.Fragment,{}),(0,t.jsx)(l.InnerBlocks,{allowedBlocks:["rrze-elements/collapse"],template:[["rrze-elements/collapse",{}],["rrze-elements/collapse",{}]]})]})]}))})},save:function(e){var n=e.attributes,r=l.useBlockProps.save(),o=n.sameBlockCount,s=n.expandAllLink;return(0,t.jsxs)("div",Object.assign({},r,{children:[" ",(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"accordion",id:"accordion-".concat(o),children:[s&&(0,t.jsx)("div",{className:"button-container-right",children:(0,t.jsx)("button",{className:"expand-all standard-btn primary-btn xsmall-btn","data-status":"closed",children:(0,a.__)("Expand All","rrze-elements-b")})}),(0,t.jsx)(l.InnerBlocks.Content,{})]})})]}))}})}()}();