!function(){"use strict";var t={75251:function(t,e,r){var n=r(99196),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(t,e,r){var n,s={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(u=e.ref),e)i.call(e,n)&&!c.hasOwnProperty(n)&&(s[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===s[n]&&(s[n]=e[n]);return{$$typeof:o,type:t,key:l,ref:u,props:s,_owner:a.current}}e.jsx=s,e.jsxs=s},85893:function(t,e,r){t.exports=r(75251)},99196:function(t){t.exports=window.React}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}!function(){var t=window.wp.blocks,e=r(85893),n=window.wp.components,o=window.wp.blockEditor,i=window.wp.i18n,a=window.wp.blob;function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(){s=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",m="suspendedYield",v="executing",y="completed",g={};function w(){}function b(){}function x(){}var j={};h(j,a,(function(){return this}));var _=Object.getPrototypeOf,L=_&&_(_(z([])));L&&L!==r&&n.call(L,a)&&(j=L);var N=x.prototype=w.prototype=Object.create(j);function E(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,s){var l=p(t[o],t,i);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==c(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(l.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=d;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=S(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=p(e,r,n);if("normal"===l.type){if(o=n.done?y:m,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function S(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function z(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(c(e)+" is not iterable")}return b.prototype=x,o(N,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=h(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,u,"GeneratorFunction")),t.prototype=Object.create(N),t},e.awrap=function(t){return{__await:t}},E(O.prototype),h(O.prototype,l,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(N),h(N,u,"Generator"),h(N,a,(function(){return this})),h(N,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=z,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:z(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}var l=JSON.parse('{"u2":"rrze-elements/cta"}');(0,t.registerBlockType)(l.u2,{example:{attributes:{message:"Accordion"}},icon:{src:"minus",background:"#00458c"},edit:function(t){var r=this,c=(t.blockProps,t.attributes),l=t.setAttributes,u=(0,o.useBlockProps)(),h=c.id,f=c.url,p=f?"has-image":"no-image";return(0,e.jsxs)("div",Object.assign({},u,{children:[(0,e.jsx)(o.BlockControls,{controls:!0,children:(0,e.jsx)(o.MediaReplaceFlow,{mediaId:h,mediaURL:f,allowedTypes:"image",accept:"image/*,video/*",onSelect:function(t){return e=r,n=void 0,o=void 0,i=s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.url||l({id:void 0,url:void 0}),(0,a.isBlobURL)(t.url)&&(t.type=(0,a.getBlobTypeByURL)(t.url)),!t.media_type){e.next=6;break}e.next=8;break;case 6:if("image"===t.type){e.next=8;break}return e.abrupt("return");case 8:console.log("newMedia.id",t.id),console.log("newMedia.url",t.url),l({id:t.id,url:t.url});case 11:case"end":return e.stop()}}),e)})),new(o||(o=Promise))((function(t,r){function a(t){try{s(i.next(t))}catch(t){r(t)}}function c(t){try{s(i.throw(t))}catch(t){r(t)}}function s(e){var r;e.done?t(e.value):(r=e.value,r instanceof o?r:new o((function(t){t(r)}))).then(a,c)}s((i=i.apply(e,n||[])).next())}));var e,n,o,i},useFeaturedImage:!1,name:f?(0,i.__)("Replace Image","rrze-elements-b"):(0,i.__)("Add Image","rrze-elements-b")})}),(0,e.jsxs)("div",{className:"rrze-elements-cta ".concat(p," bg-1"),children:[(0,e.jsxs)("div",{className:"cta-content",children:[(0,e.jsx)(o.RichText,Object.assign({},u,{tagName:"span",value:"",onChange:function(){},placeholder:(0,i.__)("CTA Title","rrze-elements-b"),allowedFormats:[],className:"cta-title"})),(0,e.jsx)(o.RichText,Object.assign({},u,{tagName:"span",value:"",onChange:function(){},placeholder:(0,i.__)("CTA Subtitle","rrze-elements-b"),allowedFormats:[],className:"cta-subtitle"}))]}),f&&(0,e.jsx)("div",{className:"cta-image",children:(0,e.jsx)("img",{width:"620",height:"620",src:f,className:"attachment-large size-large",alt:"Ein gelber Singvogel sitzt auf einem Ast.",decoding:"async",sizes:"(max-width: 620px) 100vw, 620px"})}),(0,e.jsx)("div",{className:"cta-button-container",children:(0,e.jsxs)("a",{href:"#",className:"btn cta-button",children:[(0,e.jsx)(o.RichText,Object.assign({},u,{tagName:"span",value:"",onChange:function(){},placeholder:(0,i.__)("CTA Button Text","rrze-elements-b"),allowedFormats:[],className:"cta-button-text"}))," ",(0,e.jsx)(n.SVG,{height:"1em",width:"1em",className:"rrze-elements-icon","aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,e.jsx)(n.Path,{d:"M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"})})]})})]})]}))},save:function(t){var r=t.attributes,n=o.useBlockProps.save();return r.blockId,(0,e.jsx)("div",Object.assign({},n,{children:(0,e.jsxs)("div",{className:"rrze-elements-cta no-image bg-1",children:[(0,e.jsxs)("div",{className:"cta-content",children:[(0,e.jsx)("span",{className:"cta-title",children:"Der Titel des CTA!"}),(0,e.jsx)("span",{className:"cta-subtitle",children:"Wissen bewegen."})]}),(0,e.jsx)("div",{className:"cta-button-container",children:(0,e.jsxs)("a",{href:"#",className:"btn cta-button",children:["FAU Forschung kennenlernen",(0,e.jsx)("svg",{height:"1em",width:"1em",className:"rrze-elements-icon","aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,e.jsx)("path",{d:"M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"})})]})})]})}))}})}()}();