// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,i,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!t(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(i=(-s).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(r),s||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,v,"$1e"),i=f.call(i,y,"e"),i=f.call(i,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,h,"e-0$1"),e.alternate&&(i=f.call(i,d,"$1."),i=f.call(i,b,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):l.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function k(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var x=String.fromCharCode,E=isNaN,S=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,i,a,o,p,l,u,f;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(i=e[u]))p+=i;else{if(r=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,E(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=k(i.arg,i.width,i.padRight)),p+=i.arg||"",l+=1}return p}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,t,i,n;for(t=[],n=0,i=$.exec(e);i;)(r=e.slice(n,$.lastIndex-i[0].length)).length&&t.push(r),t.push(F(i)),n=$.lastIndex,i=$.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function A(e){return"string"==typeof e}function I(e){var r,t;if(!A(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return V.apply(null,r)}var C,O=Object.prototype,R=O.toString,P=O.__defineGetter__,Z=O.__defineSetter__,G=O.__lookupGetter__,W=O.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(G.call(e,r)||W.call(e,r)?(i=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};var L=C;function N(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var U="function"==typeof Object.defineProperty?Object.defineProperty:null,X=Object.defineProperty;function z(e){return"number"==typeof e}function M(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function J(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+M(n):M(n)+e,i&&(e="-"+e)),e}var q=String.prototype.toLowerCase,B=String.prototype.toUpperCase;function D(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!z(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=J(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=J(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===B.call(e.specifier)?B.call(t):q.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function H(e){return"string"==typeof e}var K=Math.abs,Q=String.prototype.toLowerCase,Y=String.prototype.toUpperCase,ee=String.prototype.replace,re=/e\+(\d)$/,te=/e-(\d)$/,ie=/^(\d+)$/,ne=/^(\d+)e/,ae=/\.0$/,oe=/\.0*e/,se=/(\..*[^0])0*e/;function ce(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!z(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":K(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ee.call(t,se,"$1e"),t=ee.call(t,oe,"e"),t=ee.call(t,ae,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ee.call(t,re,"e+0$1"),t=ee.call(t,te,"e-0$1"),e.alternate&&(t=ee.call(t,ie,"$1."),t=ee.call(t,ne,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Y.call(e.specifier)?Y.call(t):Q.call(t)}function pe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function le(e,r,t){var i=r-e.length;return i<0?e:e=t?e+pe(i):pe(i)+e}var ue=String.fromCharCode,fe=isNaN,ge=Array.isArray;function he(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function de(e){var r,t,i,n,a,o,s,c,p;if(!ge(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(H(i=e[c]))o+=i;else{if(r=void 0!==i.precision,!(i=he(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,fe(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,fe(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=D(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!fe(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=fe(a)?String(i.arg):ue(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=ce(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=J(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=le(i.arg,i.width,i.padRight)),o+=i.arg||"",s+=1}return o}var be=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function we(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ye(e){var r,t,i,n;for(t=[],n=0,i=be.exec(e);i;)(r=e.slice(n,be.lastIndex-i[0].length)).length&&t.push(r),t.push(we(i)),n=be.lastIndex,i=be.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function ve(e){return"string"==typeof e}function me(e){var r,t;if(!ve(e))throw new TypeError(me("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[ye(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return de.apply(null,r)}var _e,ke=Object.prototype,xe=ke.toString,Ee=ke.__defineGetter__,Se=ke.__defineSetter__,je=ke.__lookupGetter__,Ve=ke.__lookupSetter__;_e=function(){try{return U({},"x",{}),!0}catch(e){return!1}}()?X:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===xe.call(e))throw new TypeError(me("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===xe.call(t))throw new TypeError(me("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(je.call(e,r)||Ve.call(e,r)?(i=e.__proto__,e.__proto__=ke,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Ee&&Ee.call(e,r,t.get),o&&Se&&Se.call(e,r,t.set),e};var $e,Fe,Te,Ae=_e,Ie=Object.prototype.hasOwnProperty,Ce="function"==typeof Symbol?Symbol:void 0,Oe="function"==typeof Ce&&"symbol"==typeof Ce("foo")&&(Fe="iterator",null!=($e=Ce)&&Ie.call($e,Fe))&&"symbol"==typeof Ce.iterator?Symbol.iterator:null;function Re(){return this instanceof Re?(this._buffer=[],this):new Re}return N(Re.prototype,"clear",(function(){return this._buffer.length=0,this})),N(Re.prototype,"first",(function(){if(this._buffer.length)return this._buffer[this._buffer.length-1]})),N(Re.prototype,"iterator",(function(){var e,r,t,i,n;return t=this,n=this._buffer.length,e=this._buffer.slice(),N(r={},"next",(function(){return n-=1,i||n<0?{done:!0}:{value:e[n],done:!1}})),N(r,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Oe&&N(r,Oe,(function(){return t.iterator()})),r})),N(Re.prototype,"last",(function(){if(this._buffer.length)return this._buffer[0]})),Te=Re.prototype,Ae(Te,"length",{configurable:!1,enumerable:!1,get:function(){return this._buffer.length}}),N(Re.prototype,"pop",(function(){if(this._buffer.length)return this._buffer.pop()})),N(Re.prototype,"push",(function(e){return this._buffer.push(e),this})),N(Re.prototype,"toArray",(function(){var e,r;for(e=[],r=this._buffer.length-1;r>=0;r--)e.push(this._buffer[r]);return e})),N(Re.prototype,"toJSON",(function(){var e={type:"stack"};return e.data=this.toArray(),e})),Re},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).stack=r();
//# sourceMappingURL=index.js.map
