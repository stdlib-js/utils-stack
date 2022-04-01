// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,a=n.__lookupSetter__;var l,p=r,c=function(t,e,r){var l,p,c,s;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((p="value"in r)&&(f.call(t,e)||a.call(t,e)?(l=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=l):t[e]=r.value),c="get"in r,s="set"in r,p&&(c||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return c&&u&&u.call(t,e,r.get),s&&i&&i.call(t,e,r.set),t},s=(l=e()?p:c,l);var _=function(t,e,r){s(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},b=l;var h=function(t,e,r){b(t,e,{configurable:!1,enumerable:!1,get:r})},y=Object.prototype.hasOwnProperty;var v=function(t,e){return null!=t&&y.call(t,e)};var g=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&v(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,d=_,m=h,j=g;function w(){return this instanceof w?(this._buffer=[],this):new w}d(w.prototype,"clear",(function(){return this._buffer.length=0,this})),d(w.prototype,"first",(function(){if(this._buffer.length)return this._buffer[this._buffer.length-1]})),d(w.prototype,"iterator",(function(){var t,e,r,n,o;return r=this,o=this._buffer.length,t=this._buffer.slice(),d(e={},"next",(function(){if(o-=1,n||o<0)return{done:!0};return{value:t[o],done:!1}})),d(e,"return",(function(t){if(n=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),j&&d(e,j,(function(){return r.iterator()})),e})),d(w.prototype,"last",(function(){if(this._buffer.length)return this._buffer[0]})),m(w.prototype,"length",(function(){return this._buffer.length})),d(w.prototype,"pop",(function(){if(this._buffer.length)return this._buffer.pop()})),d(w.prototype,"push",(function(t){return this._buffer.push(t),this})),d(w.prototype,"toArray",(function(){var t,e;for(t=[],e=this._buffer.length-1;e>=0;e--)t.push(this._buffer[e]);return t})),d(w.prototype,"toJSON",(function(){var t={type:"stack"};return t.data=this.toArray(),t}));var S=w;export{S as default};
//# sourceMappingURL=mod.js.map
