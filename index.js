// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t,e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var a,p,c,s;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((p="value"in r)&&(f.call(t,e)||l.call(t,e)?(a=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=a):t[e]=r.value),c="get"in r,s="set"in r,p&&(c||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return c&&i&&i.call(t,e,r.get),s&&u&&u.call(t,e,r.set),t};var a=t;function p(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var c,s,b,h=Object.prototype.hasOwnProperty,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&(c=Symbol,s="iterator",null!=c&&h.call(c,s))&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function _(){return this instanceof _?(this._buffer=[],this):new _}return p(_.prototype,"clear",(function(){return this._buffer.length=0,this})),p(_.prototype,"first",(function(){if(this._buffer.length)return this._buffer[this._buffer.length-1]})),p(_.prototype,"iterator",(function(){var t,e,r,o,n;return r=this,n=this._buffer.length,t=this._buffer.slice(),p(e={},"next",(function(){return n-=1,o||n<0?{done:!0}:{value:t[n],done:!1}})),p(e,"return",(function(t){return o=!0,arguments.length?{value:t,done:!0}:{done:!0}})),y&&p(e,y,(function(){return r.iterator()})),e})),p(_.prototype,"last",(function(){if(this._buffer.length)return this._buffer[0]})),b=_.prototype,a(b,"length",{configurable:!1,enumerable:!1,get:function(){return this._buffer.length}}),p(_.prototype,"pop",(function(){if(this._buffer.length)return this._buffer.pop()})),p(_.prototype,"push",(function(t){return this._buffer.push(t),this})),p(_.prototype,"toArray",(function(){var t,e;for(t=[],e=this._buffer.length-1;e>=0;e--)t.push(this._buffer[e]);return t})),p(_.prototype,"toJSON",(function(){var t={type:"stack"};return t.data=this.toArray(),t})),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).stack=e();
//# sourceMappingURL=index.js.map
