/*! For license information please see 600.8c2e5c44.chunk.js.LICENSE.txt */
(self.webpackChunkshopping_cart=self.webpackChunkshopping_cart||[]).push([[600],{8600:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return f}});var i=e(2982),r=e(885),s=e(2791),a=e(6871),c=e(8048),o=e(1694),u=e.n(o),l=e(184);function f(){var n=(0,a.UO)(),t=(0,s.useState)(),e=(0,r.Z)(t,2),o=e[0],f=e[1],d=(0,s.useState)(0),m=(0,r.Z)(d,2),p=m[0],h=m[1],v=(0,s.useState)([]),x=(0,r.Z)(v,2),g=x[0],y=x[1],j=(0,s.useState)(0),b=(0,r.Z)(j,2),S=b[0],N=b[1],w=(0,s.useState)(0),Z=(0,r.Z)(w,2),k=Z[0],C=Z[1],E=(0,s.useState)("0.5"),P=(0,r.Z)(E,2),A=P[0],B=P[1],I=(0,s.useState)("none"),T=(0,r.Z)(I,2),O=T[0],D=T[1],L=(0,a.bx)(),$=(0,r.Z)(L,2),_=$[0],q=$[1];return(0,s.useEffect)((function(){var t=c.y.filter((function(t){return t.id===n.id}));if(f((function(){return t[0]})),o){var e=_.filter((function(n){return n.id.includes(o.id)}));C((function(n){return e.length}))}}),[o,n.id]),(0,s.useEffect)((function(){var n=g.reduce((function(n,t){return n+t[1]}),0);N((function(t){return n})),g.length>0&&g.some((function(n){return n===o.price[0]}))?(B((function(){return"1"})),D((function(){return"all"}))):(B((function(){return"0.5"})),D((function(){return"none"})))}),[g]),(0,s.useEffect)((function(){if(o){var n=_.filter((function(n){return n.id.includes(o.id)}));C((function(t){return n.length}))}}),[_]),(0,l.jsxs)("div",{id:"itemDetail",children:[(0,l.jsx)("div",{className:"itemImgContainer",id:o&&o.class,children:(0,l.jsx)("img",{src:o&&o.imgPreview,alt:o&&o.name,className:o&&o.class})}),(0,l.jsx)("div",{className:"itemPreviews",children:(0,l.jsx)("img",{src:o&&o.imgExamples.length>0&&o.imgExamples[p],alt:o&&o.name,onClick:o&&o.imgExamples.length>0&&function(){p<o.imgExamples.length-1?h((function(n){return n+1})):h((function(){return 0}))}})}),(0,l.jsxs)("div",{className:"pricingOptions",children:[o&&o.price.map((function(n){return(0,l.jsxs)("div",{className:"pricingInput",children:[(0,l.jsxs)("label",{htmlFor:o&&n[0],className:"pricingLabel",children:[o&&n[0],": $",o&&n[1],".00"]}),(0,l.jsx)("input",{type:"checkbox",id:o&&n[0],value:o&&n[1],className:"pricingCheckbox",onClick:function(t){return function(n,t){y((function(t){if(g.some((function(t){return t===n}))){var e=t.filter((function(t){return t!==n}));return(0,i.Z)(e)}return t.concat([n])}))}(n)}})]},"".concat(o&&o.id,"-").concat(o&&n[0]))})),(0,l.jsxs)("div",{className:"totalPrice",children:["Total: $",0===S?"000":S,".00 ","(shipping calculated at checkout)"]}),(0,l.jsx)("div",{className:"addToCart",children:o&&!_.some((function(n){return o.id===n.id}))?(0,l.jsxs)("button",{className:u()("addToButton","shopButtonStyle"),style:{pointerEvents:O,opacity:A},onClick:function(n){q((function(n){if(!_.some((function(n){return o.id===n.id})))return n.concat([{id:o.id,name:o.name,details:g,total:S,preview:o.imgPreview}])}))},children:["Add To Cart",(0,l.jsx)("span",{className:"shopSpanStyle"})]}):(0,l.jsxs)("div",{className:"incrementCart",children:[(0,l.jsxs)("button",{className:u()("incrementButton","shopButtonStyle"),onClick:function(n){q((function(){if(_.some((function(n){return"".concat(o.id,"-2")===n.id}))){var n=_.filter((function(n){return n.id!=="".concat(o.id,"-2")}));return(0,i.Z)(n)}var t=_.filter((function(n){return n.id!==o.id}));return(0,i.Z)(t)}))},children:["-",(0,l.jsx)("span",{className:"shopSpanStyle"})]}),(0,l.jsx)("h6",{children:k}),(0,l.jsxs)("button",{style:{opacity:2===k?"0.5":"1",pointerEvents:2===k?"none":"all"},className:u()("incrementButton","shopButtonStyle"),onClick:function(n){q((function(n){if(_.some((function(n){return o.id===n.id})))return n.concat([{id:"".concat(o.id,"-2"),name:o.name,details:g,total:S,preview:o.imgPreview}])}))},children:["+",(0,l.jsx)("span",{className:"shopSpanStyle"})]})]})}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("div",{className:"terms",children:"Limit two per customer. Please allow 6-8 weeks for fulfillment. Additional time may be needed if framing or detailing is requested. International customers are responsible for any customs fees and taxes that may be charged upon arrival in the destination country. Pricing is subject to change."})]}),(0,l.jsx)("div",{className:"itemDescription",children:(0,l.jsx)("p",{children:o&&o.description})})]})}},1694:function(n,t){var e;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var n=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var s=typeof e;if("string"===s||"number"===s)n.push(e);else if(Array.isArray(e)){if(e.length){var a=r.apply(null,e);a&&n.push(a)}}else if("object"===s)if(e.toString===Object.prototype.toString)for(var c in e)i.call(e,c)&&e[c]&&n.push(c);else n.push(e.toString())}}return n.join(" ")}n.exports?(r.default=r,n.exports=r):void 0===(e=function(){return r}.apply(t,[]))||(n.exports=e)}()},2982:function(n,t,e){"use strict";e.d(t,{Z:function(){return s}});var i=e(907);var r=e(181);function s(n){return function(n){if(Array.isArray(n))return(0,i.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,r.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=600.8c2e5c44.chunk.js.map