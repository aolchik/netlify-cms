!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("netlify-cms-lib-util")):"function"==typeof define&&define.amd?define("NetlifyCmsMediaLibraryCloudinary",["netlify-cms-lib-util"],n):"object"==typeof exports?exports.NetlifyCmsMediaLibraryCloudinary=n(require("netlify-cms-lib-util")):t.NetlifyCmsMediaLibraryCloudinary=n(t.NetlifyCmsLibUtil)}(window,(function(t){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=19)}([function(t,n){var r=Array.isArray;t.exports=r},function(t,n,r){var e=r(0),o=r(23),i=r(28),u=r(57);t.exports=function(t,n){return e(t)?t:o(t,n)?[t]:i(u(t))}},function(t,n,r){var e=r(8).Symbol;t.exports=e},function(t,n,r){var e=r(10)(Object,"create");t.exports=e},function(t,n,r){var e=r(13);t.exports=function(t,n){for(var r=t.length;r--;)if(e(t[r][0],n))return r;return-1}},function(t,n,r){var e=r(53);t.exports=function(t,n){var r=t.__data__;return e(n)?r["string"==typeof n?"string":"hash"]:r.map}},function(t,n,r){var e=r(7),o=r(9);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==e(t)}},function(t,n,r){var e=r(2),o=r(26),i=r(27),u=e?e.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):i(t)}},function(t,n,r){var e=r(24),o="object"==typeof self&&self&&self.Object===Object&&self,i=e||o||Function("return this")();t.exports=i},function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,n,r){var e=r(35),o=r(40);t.exports=function(t,n){var r=o(t,n);return e(r)?r:void 0}},function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},function(t,n,r){var e=r(6);t.exports=function(t){if("string"==typeof t||e(t))return t;var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},function(t,n,r){var e=r(10),o=function(){try{var t=e(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,n){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var e=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==e||"symbol"!=e&&r.test(t))&&t>-1&&t%1==0&&t<n}},function(t,n,r){var e=r(66),o=r(9),i=Object.prototype,u=i.hasOwnProperty,c=i.propertyIsEnumerable,a=e(function(){return arguments}())?e:function(t){return o(t)&&u.call(t,"callee")&&!c.call(t,"callee")};t.exports=a},function(t,n,r){var e=r(20),o=r(68)((function(t,n){return null==t?{}:e(t,n)}));t.exports=o},function(n,r){n.exports=t},function(t,n,r){"use strict";r.r(n),r.d(n,"NetlifyCmsMediaLibraryCloudinary",(function(){return h}));var e=r(17),o=r.n(e),i=r(18);const u=["config"];function c(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function a(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){f(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function f(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function s(t,n){if(null==t)return{};var r,e,o=function(t,n){if(null==t)return{};var r,e,o={},i=Object.keys(t);for(e=0;e<i.length;e++)r=i[e],n.indexOf(r)>=0||(o[r]=t[r]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(e=0;e<i.length;e++)r=i[e],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const l={use_secure_url:!0,use_transformations:!0,output_filename_only:!1},p={button_class:void 0,inline_container:void 0,insert_transformation:!1,z_index:"99999"},v={multiple:!1};function y(t,n){let{use_secure_url:r,use_transformations:e,output_filename_only:o}=n;if(o)return`${t.public_id}.${t.format}`;return(t.derived&&e?t.derived[0]:t)[r?"secure_url":"url"]}const d={name:"cloudinary",init:async function(){let{options:t={},handleInsert:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{config:r={}}=t,e=s(t,u),c=a(a({},l),e),f=a(a(a({},v),r),p),d=["default_transformations","max_files","multiple"],h=o()(f,d);function b(t){const e=t.assets.map(t=>y(t,c));n(r.multiple||e.length>1?e:e[0])}await Object(i.loadScript)("https://media-library.cloudinary.com/global/all.js");const _=window.cloudinary.createMediaLibrary(f,{insertHandler:b});return{show:function(){let{config:t={},allowMultiple:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!1===n&&(t.multiple=!1),_.show(a(a({},h),t))},hide:()=>_.hide(),enableStandalone:()=>!0}}},h=d;n.default=d},function(t,n,r){var e=r(21),o=r(63);t.exports=function(t,n){return e(t,n,(function(n,r){return o(t,r)}))}},function(t,n,r){var e=r(22),o=r(60),i=r(1);t.exports=function(t,n,r){for(var u=-1,c=n.length,a={};++u<c;){var f=n[u],s=e(t,f);r(s,f)&&o(a,i(f,t),s)}return a}},function(t,n,r){var e=r(1),o=r(12);t.exports=function(t,n){for(var r=0,i=(n=e(n,t)).length;null!=t&&r<i;)t=t[o(n[r++])];return r&&r==i?t:void 0}},function(t,n,r){var e=r(0),o=r(6),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=function(t,n){if(e(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||(u.test(t)||!i.test(t)||null!=n&&t in Object(n))}},function(t,n,r){(function(n){var r="object"==typeof n&&n&&n.Object===Object&&n;t.exports=r}).call(this,r(25))},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(2),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,c=e?e.toStringTag:void 0;t.exports=function(t){var n=i.call(t,c),r=t[c];try{t[c]=void 0;var e=!0}catch(t){}var o=u.call(t);return e&&(n?t[c]=r:delete t[c]),o}},function(t,n){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,n,r){var e=r(29),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,u=e((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(o,(function(t,r,e,o){n.push(e?o.replace(i,"$1"):r||t)})),n}));t.exports=u},function(t,n,r){var e=r(30);t.exports=function(t){var n=e(t,(function(t){return 500===r.size&&r.clear(),t})),r=n.cache;return n}},function(t,n,r){var e=r(31);function o(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var r=function(){var e=arguments,o=n?n.apply(this,e):e[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,e);return r.cache=i.set(o,u)||i,u};return r.cache=new(o.Cache||e),r}o.Cache=e,t.exports=o},function(t,n,r){var e=r(32),o=r(52),i=r(54),u=r(55),c=r(56);function a(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}a.prototype.clear=e,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=u,a.prototype.set=c,t.exports=a},function(t,n,r){var e=r(33),o=r(45),i=r(51);t.exports=function(){this.size=0,this.__data__={hash:new e,map:new(i||o),string:new e}}},function(t,n,r){var e=r(34),o=r(41),i=r(42),u=r(43),c=r(44);function a(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}a.prototype.clear=e,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=u,a.prototype.set=c,t.exports=a},function(t,n,r){var e=r(3);t.exports=function(){this.__data__=e?e(null):{},this.size=0}},function(t,n,r){var e=r(36),o=r(37),i=r(11),u=r(39),c=/^\[object .+?Constructor\]$/,a=Function.prototype,f=Object.prototype,s=a.toString,l=f.hasOwnProperty,p=RegExp("^"+s.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(e(t)?p:c).test(u(t))}},function(t,n,r){var e=r(7),o=r(11);t.exports=function(t){if(!o(t))return!1;var n=e(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},function(t,n,r){var e,o=r(38),i=(e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+e:"";t.exports=function(t){return!!i&&i in t}},function(t,n,r){var e=r(8)["__core-js_shared__"];t.exports=e},function(t,n){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,n){t.exports=function(t,n){return null==t?void 0:t[n]}},function(t,n){t.exports=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}},function(t,n,r){var e=r(3),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;if(e){var r=n[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(n,t)?n[t]:void 0}},function(t,n,r){var e=r(3),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;return e?void 0!==n[t]:o.call(n,t)}},function(t,n,r){var e=r(3);t.exports=function(t,n){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=e&&void 0===n?"__lodash_hash_undefined__":n,this}},function(t,n,r){var e=r(46),o=r(47),i=r(48),u=r(49),c=r(50);function a(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}a.prototype.clear=e,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=u,a.prototype.set=c,t.exports=a},function(t,n){t.exports=function(){this.__data__=[],this.size=0}},function(t,n,r){var e=r(4),o=Array.prototype.splice;t.exports=function(t){var n=this.__data__,r=e(n,t);return!(r<0)&&(r==n.length-1?n.pop():o.call(n,r,1),--this.size,!0)}},function(t,n,r){var e=r(4);t.exports=function(t){var n=this.__data__,r=e(n,t);return r<0?void 0:n[r][1]}},function(t,n,r){var e=r(4);t.exports=function(t){return e(this.__data__,t)>-1}},function(t,n,r){var e=r(4);t.exports=function(t,n){var r=this.__data__,o=e(r,t);return o<0?(++this.size,r.push([t,n])):r[o][1]=n,this}},function(t,n,r){var e=r(10)(r(8),"Map");t.exports=e},function(t,n,r){var e=r(5);t.exports=function(t){var n=e(this,t).delete(t);return this.size-=n?1:0,n}},function(t,n){t.exports=function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}},function(t,n,r){var e=r(5);t.exports=function(t){return e(this,t).get(t)}},function(t,n,r){var e=r(5);t.exports=function(t){return e(this,t).has(t)}},function(t,n,r){var e=r(5);t.exports=function(t,n){var r=e(this,t),o=r.size;return r.set(t,n),this.size+=r.size==o?0:1,this}},function(t,n,r){var e=r(58);t.exports=function(t){return null==t?"":e(t)}},function(t,n,r){var e=r(2),o=r(59),i=r(0),u=r(6),c=e?e.prototype:void 0,a=c?c.toString:void 0;t.exports=function t(n){if("string"==typeof n)return n;if(i(n))return o(n,t)+"";if(u(n))return a?a.call(n):"";var r=n+"";return"0"==r&&1/n==-1/0?"-0":r}},function(t,n){t.exports=function(t,n){for(var r=-1,e=null==t?0:t.length,o=Array(e);++r<e;)o[r]=n(t[r],r,t);return o}},function(t,n,r){var e=r(61),o=r(1),i=r(15),u=r(11),c=r(12);t.exports=function(t,n,r,a){if(!u(t))return t;for(var f=-1,s=(n=o(n,t)).length,l=s-1,p=t;null!=p&&++f<s;){var v=c(n[f]),y=r;if("__proto__"===v||"constructor"===v||"prototype"===v)return t;if(f!=l){var d=p[v];void 0===(y=a?a(d,v,p):void 0)&&(y=u(d)?d:i(n[f+1])?[]:{})}e(p,v,y),p=p[v]}return t}},function(t,n,r){var e=r(62),o=r(13),i=Object.prototype.hasOwnProperty;t.exports=function(t,n,r){var u=t[n];i.call(t,n)&&o(u,r)&&(void 0!==r||n in t)||e(t,n,r)}},function(t,n,r){var e=r(14);t.exports=function(t,n,r){"__proto__"==n&&e?e(t,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[n]=r}},function(t,n,r){var e=r(64),o=r(65);t.exports=function(t,n){return null!=t&&o(t,n,e)}},function(t,n){t.exports=function(t,n){return null!=t&&n in Object(t)}},function(t,n,r){var e=r(1),o=r(16),i=r(0),u=r(15),c=r(67),a=r(12);t.exports=function(t,n,r){for(var f=-1,s=(n=e(n,t)).length,l=!1;++f<s;){var p=a(n[f]);if(!(l=null!=t&&r(t,p)))break;t=t[p]}return l||++f!=s?l:!!(s=null==t?0:t.length)&&c(s)&&u(p,s)&&(i(t)||o(t))}},function(t,n,r){var e=r(7),o=r(9);t.exports=function(t){return o(t)&&"[object Arguments]"==e(t)}},function(t,n){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,n,r){var e=r(69),o=r(73),i=r(75);t.exports=function(t){return i(o(t,void 0,e),t+"")}},function(t,n,r){var e=r(70);t.exports=function(t){return(null==t?0:t.length)?e(t,1):[]}},function(t,n,r){var e=r(71),o=r(72);t.exports=function t(n,r,i,u,c){var a=-1,f=n.length;for(i||(i=o),c||(c=[]);++a<f;){var s=n[a];r>0&&i(s)?r>1?t(s,r-1,i,u,c):e(c,s):u||(c[c.length]=s)}return c}},function(t,n){t.exports=function(t,n){for(var r=-1,e=n.length,o=t.length;++r<e;)t[o+r]=n[r];return t}},function(t,n,r){var e=r(2),o=r(16),i=r(0),u=e?e.isConcatSpreadable:void 0;t.exports=function(t){return i(t)||o(t)||!!(u&&t&&t[u])}},function(t,n,r){var e=r(74),o=Math.max;t.exports=function(t,n,r){return n=o(void 0===n?t.length-1:n,0),function(){for(var i=arguments,u=-1,c=o(i.length-n,0),a=Array(c);++u<c;)a[u]=i[n+u];u=-1;for(var f=Array(n+1);++u<n;)f[u]=i[u];return f[n]=r(a),e(t,this,f)}}},function(t,n){t.exports=function(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}},function(t,n,r){var e=r(76),o=r(79)(e);t.exports=o},function(t,n,r){var e=r(77),o=r(14),i=r(78),u=o?function(t,n){return o(t,"toString",{configurable:!0,enumerable:!1,value:e(n),writable:!0})}:i;t.exports=u},function(t,n){t.exports=function(t){return function(){return t}}},function(t,n){t.exports=function(t){return t}},function(t,n){var r=Date.now;t.exports=function(t){var n=0,e=0;return function(){var o=r(),i=16-(o-e);if(e=o,i>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}}]).NetlifyCmsMediaLibraryCloudinary}));
//# sourceMappingURL=netlify-cms-media-library-cloudinary.js.map