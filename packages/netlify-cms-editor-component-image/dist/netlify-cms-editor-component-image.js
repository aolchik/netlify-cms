!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("NetlifyCmsEditorComponentImage",["react"],t):"object"==typeof exports?exports.NetlifyCmsEditorComponentImage=t(require("react")):e.NetlifyCmsEditorComponentImage=t(e.React)}(window,(function(e){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(t,r){t.exports=e},function(e,t,r){var a=r(2);e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,a(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(t,a){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t,a)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){"use strict";r.r(t),r.d(t,"NetlifyCmsEditorComponentImage",(function(){return G}));var a=r(0);function n(e,t){return(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var i=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t,r=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(r,t),this.tags.push(r)}var a=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(a);try{var i=105===e.charCodeAt(1)&&64===e.charCodeAt(0);n.insertRule(e,i?0:n.cssRules.length)}catch(e){0}}else a.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}();var c=function(e){function t(e,t,a){var n=t.trim().split(p);t=n;var i=n.length,c=e.length;switch(c){case 0:case 1:var o=0;for(e=0===c?"":e[0]+" ";o<i;++o)t[o]=r(e,t[o],a).trim();break;default:var s=o=0;for(t=[];o<i;++o)for(var l=0;l<c;++l)t[s++]=r(e[l]+" ",n[o],a).trim()}return t}function r(e,t,r){var a=t.charCodeAt(0);switch(33>a&&(a=(t=t.trim()).charCodeAt(0)),a){case 38:return t.replace(b,"$1"+e.trim());case 58:return e.trim()+t.replace(b,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(b,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function a(e,t,r,i){var c=e+";",o=2*t+3*r+4*i;if(944===o){e=c.indexOf(":",9)+1;var s=c.substring(e,c.length-1).trim();return s=c.substring(0,e).trim()+s+";",1===S||2===S&&n(s,1)?"-webkit-"+s+s:s}if(0===S||2===S&&!n(c,1))return c;switch(o){case 1015:return 97===c.charCodeAt(10)?"-webkit-"+c+c:c;case 951:return 116===c.charCodeAt(3)?"-webkit-"+c+c:c;case 963:return 110===c.charCodeAt(5)?"-webkit-"+c+c:c;case 1009:if(100!==c.charCodeAt(4))break;case 969:case 942:return"-webkit-"+c+c;case 978:return"-webkit-"+c+"-moz-"+c+c;case 1019:case 983:return"-webkit-"+c+"-moz-"+c+"-ms-"+c+c;case 883:if(45===c.charCodeAt(8))return"-webkit-"+c+c;if(0<c.indexOf("image-set(",11))return c.replace(O,"$1-webkit-$2")+c;break;case 932:if(45===c.charCodeAt(4))switch(c.charCodeAt(5)){case 103:return"-webkit-box-"+c.replace("-grow","")+"-webkit-"+c+"-ms-"+c.replace("grow","positive")+c;case 115:return"-webkit-"+c+"-ms-"+c.replace("shrink","negative")+c;case 98:return"-webkit-"+c+"-ms-"+c.replace("basis","preferred-size")+c}return"-webkit-"+c+"-ms-"+c+c;case 964:return"-webkit-"+c+"-ms-flex-"+c+c;case 1023:if(99!==c.charCodeAt(8))break;return"-webkit-box-pack"+(s=c.substring(c.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+c+"-ms-flex-pack"+s+c;case 1005:return d.test(c)?c.replace(f,":-webkit-")+c.replace(f,":-moz-")+c:c;case 1e3:switch(t=(s=c.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=c.replace(k,"tb");break;case 232:s=c.replace(k,"tb-rl");break;case 220:s=c.replace(k,"lr");break;default:return c}return"-webkit-"+c+"-ms-"+s+c;case 1017:if(-1===c.indexOf("sticky",9))break;case 975:switch(t=(c=e).length-10,o=(s=(33===c.charCodeAt(t)?c.substring(0,t):c).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:c=c.replace(s,"-webkit-"+s)+";"+c;break;case 207:case 102:c=c.replace(s,"-webkit-"+(102<o?"inline-":"")+"box")+";"+c.replace(s,"-webkit-"+s)+";"+c.replace(s,"-ms-"+s+"box")+";"+c}return c+";";case 938:if(45===c.charCodeAt(5))switch(c.charCodeAt(6)){case 105:return s=c.replace("-items",""),"-webkit-"+c+"-webkit-box-"+s+"-ms-flex-"+s+c;case 115:return"-webkit-"+c+"-ms-flex-item-"+c.replace(C,"")+c;default:return"-webkit-"+c+"-ms-flex-line-pack"+c.replace("align-content","").replace(C,"")+c}break;case 973:case 989:if(45!==c.charCodeAt(3)||122===c.charCodeAt(4))break;case 931:case 953:if(!0===x.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),t,r,i).replace(":fill-available",":stretch"):c.replace(s,"-webkit-"+s)+c.replace(s,"-moz-"+s.replace("fill-",""))+c;break;case 962:if(c="-webkit-"+c+(102===c.charCodeAt(5)?"-ms-"+c:"")+c,211===r+i&&105===c.charCodeAt(13)&&0<c.indexOf("transform",10))return c.substring(0,c.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+c}return c}function n(e,t){var r=e.indexOf(1===t?":":"{"),a=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),P(2!==t?a:a.replace(A,"$1"),r,t)}function i(e,t){var r=a(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(w," or ($1)").substring(4):"("+t+")"}function c(e,t,r,a,n,i,c,o,l,u){for(var f,d=0,h=t;d<I;++d)switch(f=N[d].call(s,e,h,r,a,n,i,c,o,l,u)){case void 0:case!1:case!0:case null:break;default:h=f}if(h!==t)return h}function o(e){return void 0!==(e=e.prefix)&&(P=null,e?"function"!=typeof e?S=1:(S=2,P=e):S=0),o}function s(e,r){var o=e;if(33>o.charCodeAt(0)&&(o=o.trim()),o=[o],0<I){var s=c(-1,r,o,o,j,_,0,0,0,0);void 0!==s&&"string"==typeof s&&(r=s)}var f=function e(r,o,s,f,d){for(var h,p,b,k,w,C=0,A=0,x=0,O=0,N=0,P=0,z=b=h=0,R=0,T=0,G=0,F=0,L=s.length,W=L-1,q="",B="",D="",H="";R<L;){if(p=s.charCodeAt(R),R===W&&0!==A+O+x+C&&(0!==A&&(p=47===A?10:47),O=x=C=0,L++,W++),0===A+O+x+C){if(R===W&&(0<T&&(q=q.replace(u,"")),0<q.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:q+=s.charAt(R)}p=59}switch(p){case 123:for(h=(q=q.trim()).charCodeAt(0),b=1,F=++R;R<L;){switch(p=s.charCodeAt(R)){case 123:b++;break;case 125:b--;break;case 47:switch(p=s.charCodeAt(R+1)){case 42:case 47:e:{for(z=R+1;z<W;++z)switch(s.charCodeAt(z)){case 47:if(42===p&&42===s.charCodeAt(z-1)&&R+2!==z){R=z+1;break e}break;case 10:if(47===p){R=z+1;break e}}R=z}}break;case 91:p++;case 40:p++;case 34:case 39:for(;R++<W&&s.charCodeAt(R)!==p;);}if(0===b)break;R++}switch(b=s.substring(F,R),0===h&&(h=(q=q.replace(l,"").trim()).charCodeAt(0)),h){case 64:switch(0<T&&(q=q.replace(u,"")),p=q.charCodeAt(1)){case 100:case 109:case 115:case 45:T=o;break;default:T=$}if(F=(b=e(o,T,b,p,d+1)).length,0<I&&(w=c(3,b,T=t($,q,G),o,j,_,F,p,d,f),q=T.join(""),void 0!==w&&0===(F=(b=w.trim()).length)&&(p=0,b="")),0<F)switch(p){case 115:q=q.replace(y,i);case 100:case 109:case 45:b=q+"{"+b+"}";break;case 107:b=(q=q.replace(m,"$1 $2"))+"{"+b+"}",b=1===S||2===S&&n("@"+b,3)?"@-webkit-"+b+"@"+b:"@"+b;break;default:b=q+b,112===f&&(B+=b,b="")}else b="";break;default:b=e(o,t(o,q,G),b,f,d+1)}D+=b,b=G=T=z=h=0,q="",p=s.charCodeAt(++R);break;case 125:case 59:if(1<(F=(q=(0<T?q.replace(u,""):q).trim()).length))switch(0===z&&(h=q.charCodeAt(0),45===h||96<h&&123>h)&&(F=(q=q.replace(" ",":")).length),0<I&&void 0!==(w=c(1,q,o,r,j,_,B.length,f,d,f))&&0===(F=(q=w.trim()).length)&&(q="\0\0"),h=q.charCodeAt(0),p=q.charCodeAt(1),h){case 0:break;case 64:if(105===p||99===p){H+=q+s.charAt(R);break}default:58!==q.charCodeAt(F-1)&&(B+=a(q,h,p,q.charCodeAt(2)))}G=T=z=h=0,q="",p=s.charCodeAt(++R)}}switch(p){case 13:case 10:47===A?A=0:0===1+h&&107!==f&&0<q.length&&(T=1,q+="\0"),0<I*M&&c(0,q,o,r,j,_,B.length,f,d,f),_=1,j++;break;case 59:case 125:if(0===A+O+x+C){_++;break}default:switch(_++,k=s.charAt(R),p){case 9:case 32:if(0===O+C+A)switch(N){case 44:case 58:case 9:case 32:k="";break;default:32!==p&&(k=" ")}break;case 0:k="\\0";break;case 12:k="\\f";break;case 11:k="\\v";break;case 38:0===O+A+C&&(T=G=1,k="\f"+k);break;case 108:if(0===O+A+C+E&&0<z)switch(R-z){case 2:112===N&&58===s.charCodeAt(R-3)&&(E=N);case 8:111===P&&(E=P)}break;case 58:0===O+A+C&&(z=R);break;case 44:0===A+x+O+C&&(T=1,k+="\r");break;case 34:case 39:0===A&&(O=O===p?0:0===O?p:O);break;case 91:0===O+A+x&&C++;break;case 93:0===O+A+x&&C--;break;case 41:0===O+A+C&&x--;break;case 40:if(0===O+A+C){if(0===h)switch(2*N+3*P){case 533:break;default:h=1}x++}break;case 64:0===A+x+O+C+z+b&&(b=1);break;case 42:case 47:if(!(0<O+C+x))switch(A){case 0:switch(2*p+3*s.charCodeAt(R+1)){case 235:A=47;break;case 220:F=R,A=42}break;case 42:47===p&&42===N&&F+2!==R&&(33===s.charCodeAt(F+2)&&(B+=s.substring(F,R+1)),k="",A=0)}}0===A&&(q+=k)}P=N,N=p,R++}if(0<(F=B.length)){if(T=o,0<I&&(void 0!==(w=c(2,B,T,r,j,_,F,f,d,f))&&0===(B=w).length))return H+B+D;if(B=T.join(",")+"{"+B+"}",0!=S*E){switch(2!==S||n(B,2)||(E=0),E){case 111:B=B.replace(v,":-moz-$1")+B;break;case 112:B=B.replace(g,"::-webkit-input-$1")+B.replace(g,"::-moz-$1")+B.replace(g,":-ms-input-$1")+B}E=0}}return H+B+D}($,o,r,0,0);return 0<I&&(void 0!==(s=c(-2,f,o,o,j,_,f.length,0,0,0))&&(f=s)),"",E=0,_=j=1,f}var l=/^\0+/g,u=/[\0\r\f]/g,f=/: */g,d=/zoo|gra/,h=/([,: ])(transform)/g,p=/,\r+?/g,b=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,v=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,y=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,C=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,x=/stretch|:\s*\w+\-(?:conte|avail)/,O=/([^-])(image-set\()/,_=1,j=1,E=0,S=1,$=[],N=[],I=0,P=null,M=0;return s.use=function e(t){switch(t){case void 0:case null:I=N.length=0;break;default:if("function"==typeof t)N[I++]=t;else if("object"==typeof t)for(var r=0,a=t.length;r<a;++r)e(t[r]);else M=0|!!t}return e},s.set=o,void 0!==e&&o(e),s};function o(e){e&&s.current.insert(e+"}")}var s={current:null},l=function(e,t,r,a,n,i,c,l,u,f){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return s.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===l)return t+"/*|*/";break;case 3:switch(l){case 102:case 112:return s.current.insert(r[0]+t),"";default:return t+(0===f?"/*|*/":"")}case-2:t.split("/*|*/}").forEach(o)}},u=function(e){void 0===e&&(e={});var t,r=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var a=new c(t);var n,o={};n=e.container||document.head;var u,f=document.querySelectorAll("style[data-emotion-"+r+"]");Array.prototype.forEach.call(f,(function(e){e.getAttribute("data-emotion-"+r).split(" ").forEach((function(e){o[e]=!0})),e.parentNode!==n&&n.appendChild(e)})),a.use(e.stylisPlugins)(l),u=function(e,t,r,n){var i=t.name;s.current=r,a(e,t.styles),n&&(d.inserted[i]=!0)};var d={key:r,sheet:new i({key:r,container:n,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:o,registered:{},insert:u};return d};r(1);function f(e,t,r){var a="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]):a+=r+" "})),a}var d=function(e,t,r){var a=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[a]&&(e.registered[a]=t.styles),void 0===e.inserted[t.name]){var n=t;do{e.insert("."+a,n,e.sheet,!0);n=n.next}while(void 0!==n)}};var h=function(e){for(var t,r=0,a=0,n=e.length;n>=4;++a,n-=4)t=1540483477*(65535&(t=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(n){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(a)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},p={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var b=/[A-Z]|^ms/g,m=/_EMO_([^_]+?)_([^]*?)_EMO_/g,g=function(e){return 45===e.charCodeAt(1)},v=function(e){return null!=e&&"boolean"!=typeof e},k=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return g(e)?e:e.replace(b,"-$&").toLowerCase()})),y=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(m,(function(e,t,r){return C={name:t,styles:r,next:C},t}))}return 1===p[e]||g(e)||"number"!=typeof t||0===t?t:t+"px"};function w(e,t,r,a){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return C={name:r.name,styles:r.styles,next:C},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)C={name:n.name,styles:n.styles,next:C},n=n.next;return r.styles+";"}return function(e,t,r){var a="";if(Array.isArray(r))for(var n=0;n<r.length;n++)a+=w(e,t,r[n],!1);else for(var i in r){var c=r[i];if("object"!=typeof c)null!=t&&void 0!==t[c]?a+=i+"{"+t[c]+"}":v(c)&&(a+=k(i)+":"+y(i,c)+";");else if(!Array.isArray(c)||"string"!=typeof c[0]||null!=t&&void 0!==t[c[0]]){var o=w(e,t,c,!1);switch(i){case"animation":case"animationName":a+=k(i)+":"+o+";";break;default:a+=i+"{"+o+"}"}}else for(var s=0;s<c.length;s++)v(c[s])&&(a+=k(i)+":"+y(i,c[s])+";")}return a}(e,t,r);case"function":if(void 0!==e){var i=C,c=r(e);return C=i,w(e,t,c,a)}break;case"string":}if(null==t)return r;var o=t[r];return void 0===o||a?r:o}var C,A=/label:\s*([^\s;\n{]+)\s*;/g;var x=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a=!0,n="";C=void 0;var i=e[0];null==i||void 0===i.raw?(a=!1,n+=w(r,t,i,!1)):n+=i[0];for(var c=1;c<e.length;c++)n+=w(r,t,e[c],46===n.charCodeAt(n.length-1)),a&&(n+=i[c]);A.lastIndex=0;for(var o,s="";null!==(o=A.exec(n));)s+="-"+o[1];return{name:h(n)+s,styles:n,next:C}},O=Object.prototype.hasOwnProperty,_=Object(a.createContext)("undefined"!=typeof HTMLElement?u():null),j=Object(a.createContext)({}),E=(_.Provider,function(e){var t=function(t,r){return Object(a.createElement)(_.Consumer,null,(function(a){return e(t,a,r)}))};return Object(a.forwardRef)(t)}),S="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",$=function(e,t){var r={};for(var a in t)O.call(t,a)&&(r[a]=t[a]);return r[S]=e,r},N=function(){return null},I=function(e,t,r,n){var i=null===r?t.css:t.css(r);"string"==typeof i&&void 0!==e.registered[i]&&(i=e.registered[i]);var c=t[S],o=[i],s="";"string"==typeof t.className?s=f(e.registered,o,t.className):null!=t.className&&(s=t.className+" ");var l=x(o);d(e,l,"string"==typeof c);s+=e.key+"-"+l.name;var u={};for(var h in t)O.call(t,h)&&"css"!==h&&h!==S&&(u[h]=t[h]);u.ref=n,u.className=s;var p=Object(a.createElement)(c,u),b=Object(a.createElement)(N,null);return Object(a.createElement)(a.Fragment,null,b,p)},P=E((function(e,t,r){return"function"==typeof e.css?Object(a.createElement)(j.Consumer,null,(function(a){return I(t,e,a,r)})):I(t,e,null,r)}));a.Component;var M=function e(t){for(var r=t.length,a=0,n="";a<r;a++){var i=t[a];if(null!=i){var c=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))c=e(i);else for(var o in c="",i)i[o]&&o&&(c&&(c+=" "),c+=o);break;default:c=i}c&&(n&&(n+=" "),n+=c)}}return n};function z(e,t,r){var a=[],n=f(e,a,r);return a.length<2?r:n+t(a)}var R=function(){return null};E((function(e,t){return Object(a.createElement)(j.Consumer,null,(function(r){var n=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var n=x(r,t.registered);return d(t,n,!1),t.key+"-"+n.name},i={css:n,cx:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return z(t.registered,n,M(r))},theme:r},c=e.children(i);var o=Object(a.createElement)(R,null);return Object(a.createElement)(a.Fragment,null,o,c)}))}));const T={label:"Image",id:"image",fromBlock:e=>e&&{image:e[2],alt:e[1],title:e[4]},toBlock:e=>{let{alt:t,image:r,title:a}=e;return`![${t||""}](${r||""}${a?` "${a.replace(/"/g,'\\"')}"`:""})`},toPreview:(e,t,r)=>{let{alt:n,image:i,title:c}=e;return function(e,t){var r=arguments;if(null==t||!O.call(t,"css"))return a.createElement.apply(void 0,r);var n=r.length,i=new Array(n);i[0]=P,i[1]=$(e,t);for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}("img",{src:t(i,null==r?void 0:r.find(e=>"image"===e.get("widget")))||"",alt:n||"",title:c||""})},pattern:/^!\[(.*)\]\((.*?)(\s"(.*)")?\)$/,fields:[{label:"Image",name:"image",widget:"image",media_library:{allow_multiple:!1}},{label:"Alt Text",name:"alt"},{label:"Title",name:"title"}]},G=T;t.default=T}]).NetlifyCmsEditorComponentImage}));
//# sourceMappingURL=netlify-cms-editor-component-image.js.map