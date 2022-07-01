// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t,e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(t){return!1}},o=Object.defineProperty,n=Object.prototype,i=n.toString,u=n.__defineGetter__,f=n.__defineSetter__,l=n.__lookupGetter__,a=n.__lookupSetter__,p=o,c=function(t,e,r){var o,p,c,s;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((p="value"in r)&&(l.call(t,e)||a.call(t,e)?(o=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=o):t[e]=r.value),c="get"in r,s="set"in r,p&&(c||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return c&&u&&u.call(t,e,r.get),s&&f&&f.call(t,e,r.set),t},s=t=r()?p:c,b=function(t,e,r){s(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},h=t,y=function(t,e,r){h(t,e,{configurable:!1,enumerable:!1,get:r})},_=Object.prototype.hasOwnProperty,d=function(t,e){return null!=t&&_.call(t,e)},g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&d(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function m(){return this instanceof m?(this._buffer=[],this):new m}return b(m.prototype,"clear",(function(){return this._buffer.length=0,this})),b(m.prototype,"first",(function(){if(this._buffer.length)return this._buffer[this._buffer.length-1]})),b(m.prototype,"iterator",(function(){var t,e,r,o,n;return r=this,n=this._buffer.length,t=this._buffer.slice(),b(e={},"next",(function(){return n-=1,o||n<0?{done:!0}:{value:t[n],done:!1}})),b(e,"return",(function(t){return o=!0,arguments.length?{value:t,done:!0}:{done:!0}})),g&&b(e,g,(function(){return r.iterator()})),e})),b(m.prototype,"last",(function(){if(this._buffer.length)return this._buffer[0]})),y(m.prototype,"length",(function(){return this._buffer.length})),b(m.prototype,"pop",(function(){if(this._buffer.length)return this._buffer.pop()})),b(m.prototype,"push",(function(t){return this._buffer.push(t),this})),b(m.prototype,"toArray",(function(){var t,e;for(t=[],e=this._buffer.length-1;e>=0;e--)t.push(this._buffer[e]);return t})),b(m.prototype,"toJSON",(function(){var t={type:"stack"};return t.data=this.toArray(),t})),m},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).stack=e();
//# sourceMappingURL=index.js.map
