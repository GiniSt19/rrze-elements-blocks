!function(){"use strict";var e,t={14:function(){var e=window.wp.blocks;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o=window.wp.element,l=window.wp.components,c=window.wp.blockEditor,a=window.wp.i18n;function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=(0,window.wp.data.withSelect)((function(e,t){var r=e("core/block-editor"),n=r.getBlock,o=r.getBlockParents,l=r.getBlocks,c=t.clientId,a=o(c,!0),i=a[0];return{selectedBlock:n(c),blockParents:a,siblingBlocks:l(i)}}))((function(e){var t,s,f=e.attributes,m=e.setAttributes,b=e.selectedBlock,p=e.blockParents,d=e.siblingBlocks,y=(0,c.useBlockProps)(),v=(t=(0,o.useState)(!1),s=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l,c,a=[],i=!0,u=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=l.call(r)).done)&&(a.push(n.value),a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{if(!i&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(u)throw o}}return a}}(t,s)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=v[0],g=v[1],O=(f.sameBlockCount,f.title),w=f.color,k={"#04316A":"","#C50F3C":"rw","#7bb725":"nat","#18B4F1":"med","#FDB735":"phil","#8C9FB1":"tech"},j=0;if(b&&p.length>0){var E,P=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,l=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw l}}}}(d);try{for(P.s();!(E=P.n()).done;){var C=E.value;if(C.clientId===b.clientId)break;C.name===b.name&&j++}}catch(e){P.e(e)}finally{P.f()}j!==f.sameBlockCount&&m({sameBlockCount:j})}var S=function(e){m({color:e})};return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(c.BlockControls,null,(0,o.createElement)(l.Toolbar,{label:"Options"},(0,o.createElement)(l.ToolbarGroup,null,(0,o.createElement)(l.ToolbarDropdownMenu,{icon:null,label:"Select a color",value:f.color,controls:[{title:(0,a.__)("FAU Blau","rrze-elements"),isDisabled:""===w,onClick:function(){return S("")}},{title:(0,a.__)("RW Rot","rrze-elements"),isDisabled:"rw"===w,onClick:function(){return S("rw")}},{title:(0,a.__)("Phil Gelb","rrze-elements"),isDisabled:"phil"===w,onClick:function(){return S("phil")}},{title:(0,a.__)("Nat Grün","rrze-elements"),isDisabled:"nat"===w,onClick:function(){return S("nat")}},{title:(0,a.__)("Med Blau","rrze-elements"),isDisabled:"med"===w,onClick:function(){return S("med")}},{title:(0,a.__)("TF Grau","rrze-elements"),isDisabled:"tf"===w,onClick:function(){return S("tf")}}]})))),(0,o.createElement)(c.InspectorControls,null,(0,o.createElement)(l.PanelBody,{title:(0,a.__)("Settings","text-box")},(0,o.createElement)(l.ColorPalette,{colors:[{name:"Zentrale Institution",color:"#04316A",slug:""},{name:"Rechts- und Wirtschafts­wissenschaftliche Fakultät",color:"#C50F3C"},{name:"Naturwissenschaftliche Fakultät",color:"#7bb725"},{name:"Medizinische Fakultät",color:"#18B4F1"},{name:"Philosophische Fakultät und Fachbereich Theologie",color:"#FDB735"},{name:"Technische Fakultät",color:"#8C9FB1"}],value:Object.keys(k).find((function(e){return k[e]===w})),onChange:function(e){m({color:k[e]})}}))),(0,o.createElement)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},y),(0,o.createElement)("div",{className:"accordion-group ".concat(w)},(0,o.createElement)("h2",{className:"accordion-heading",onClick:function(){g(!h)}},(0,o.createElement)("span",{className:"read-mode-only"},O),(0,o.createElement)(l.TextControl,{className:"accordion-toggle ".concat(h?"active":""),onChange:function(e){m(""===e?{title:" "}:{title:e})},value:O,placeholder:(0,a.__)("Your Text","text-box")})),(0,o.createElement)("div",{id:"collapse_".concat(j),className:"accordion-body ".concat(h?"active":"")},(0,o.createElement)("div",{className:"accordion-inner clearfix"},(0,o.createElement)(c.InnerBlocks,null))))))}));function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var m=JSON.parse('{"u2":"rrze-elements/collapse"}');(0,e.registerBlockType)(m.u2,{edit:s,save:function(e){var t=e.attributes,n=c.useBlockProps.save(),l=t.sameBlockCount,a=t.color;return(0,o.createElement)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n)," ",(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{className:"accordion-group ".concat(a)},(0,o.createElement)("h2",{className:"accordion-heading"},(0,o.createElement)("span",{className:"read-mode-only"},"Test "),(0,o.createElement)("button",{className:"accordion-toggle","data-toggle":"collapse",href:"#collapse_".concat(l)}," ","Test"," ")),(0,o.createElement)("div",{id:"collapse_".concat(l),className:"accordion-body",style:{display:"none"}},(0,o.createElement)("div",{className:"accordion-inner clearfix"},(0,o.createElement)(c.InnerBlocks.Content,null))))))}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=function(t,r,o,l){if(!r){var c=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],l=e[s][2];for(var a=!0,i=0;i<r.length;i++)(!1&l||c>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(a=!1,l<c&&(c=l));if(a){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[r,o,l]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={45:0,153:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,l,c=r[0],a=r[1],i=r[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(i)var s=i(n)}for(t&&t(r);u<c.length;u++)l=c[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(s)},r=self.webpackChunkrrze_elements=self.webpackChunkrrze_elements||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[153],(function(){return n(14)}));o=n.O(o)}();