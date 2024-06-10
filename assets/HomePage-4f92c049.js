import{g as xn,r as S,a as Id,b as Xo,M as Nd,u as F,j as c,L as Dt,R as de,m as Ko,c as ia,d as oe,h as os,e as Fn,_ as Zo,f as Rd}from"./index-fdb569fa.js";function _o(t,e){return function(){return t.apply(e,arguments)}}const{toString:Ld}=Object.prototype,{getPrototypeOf:ls}=Object,yi=(t=>e=>{const n=Ld.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ye=t=>(t=t.toLowerCase(),e=>yi(e)===t),Si=t=>e=>typeof e===t,{isArray:Vt}=Array,ln=Si("undefined");function zd(t){return t!==null&&!ln(t)&&t.constructor!==null&&!ln(t.constructor)&&Pe(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const $o=Ye("ArrayBuffer");function Fd(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&$o(t.buffer),e}const Dd=Si("string"),Pe=Si("function"),el=Si("number"),Ai=t=>t!==null&&typeof t=="object",Bd=t=>t===!0||t===!1,Zn=t=>{if(yi(t)!=="object")return!1;const e=ls(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Hd=Ye("Date"),Ud=Ye("File"),Wd=Ye("Blob"),Vd=Ye("FileList"),Gd=t=>Ai(t)&&Pe(t.pipe),Jd=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Pe(t.append)&&((e=yi(t))==="formdata"||e==="object"&&Pe(t.toString)&&t.toString()==="[object FormData]"))},Qd=Ye("URLSearchParams"),qd=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vn(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Vt(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),a=s.length;let o;for(i=0;i<a;i++)o=s[i],e.call(null,t[o],o,t)}}function tl(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const nl=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),il=t=>!ln(t)&&t!==nl;function Pr(){const{caseless:t}=il(this)&&this||{},e={},n=(i,r)=>{const s=t&&tl(e,r)||r;Zn(e[s])&&Zn(i)?e[s]=Pr(e[s],i):Zn(i)?e[s]=Pr({},i):Vt(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&vn(arguments[i],n);return e}const Yd=(t,e,n,{allOwnKeys:i}={})=>(vn(e,(r,s)=>{n&&Pe(r)?t[s]=_o(r,n):t[s]=r},{allOwnKeys:i}),t),Xd=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Kd=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Zd=(t,e,n,i)=>{let r,s,a;const o={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)a=r[s],(!i||i(a,t,e))&&!o[a]&&(e[a]=t[a],o[a]=!0);t=n!==!1&&ls(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},_d=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},$d=t=>{if(!t)return null;if(Vt(t))return t;let e=t.length;if(!el(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},eu=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&ls(Uint8Array)),tu=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},nu=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},iu=Ye("HTMLFormElement"),ru=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),ra=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),su=Ye("RegExp"),rl=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};vn(n,(r,s)=>{let a;(a=e(r,s,t))!==!1&&(i[s]=a||r)}),Object.defineProperties(t,i)},au=t=>{rl(t,(e,n)=>{if(Pe(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(Pe(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ou=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Vt(t)?i(t):i(String(t).split(e)),n},lu=()=>{},cu=(t,e)=>(t=+t,Number.isFinite(t)?t:e),or="abcdefghijklmnopqrstuvwxyz",sa="0123456789",sl={DIGIT:sa,ALPHA:or,ALPHA_DIGIT:or+or.toUpperCase()+sa},du=(t=16,e=sl.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function uu(t){return!!(t&&Pe(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const pu=t=>{const e=new Array(10),n=(i,r)=>{if(Ai(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=Vt(i)?[]:{};return vn(i,(a,o)=>{const l=n(a,r+1);!ln(l)&&(s[o]=l)}),e[r]=void 0,s}}return i};return n(t,0)},fu=Ye("AsyncFunction"),hu=t=>t&&(Ai(t)||Pe(t))&&Pe(t.then)&&Pe(t.catch),C={isArray:Vt,isArrayBuffer:$o,isBuffer:zd,isFormData:Jd,isArrayBufferView:Fd,isString:Dd,isNumber:el,isBoolean:Bd,isObject:Ai,isPlainObject:Zn,isUndefined:ln,isDate:Hd,isFile:Ud,isBlob:Wd,isRegExp:su,isFunction:Pe,isStream:Gd,isURLSearchParams:Qd,isTypedArray:eu,isFileList:Vd,forEach:vn,merge:Pr,extend:Yd,trim:qd,stripBOM:Xd,inherits:Kd,toFlatObject:Zd,kindOf:yi,kindOfTest:Ye,endsWith:_d,toArray:$d,forEachEntry:tu,matchAll:nu,isHTMLForm:iu,hasOwnProperty:ra,hasOwnProp:ra,reduceDescriptors:rl,freezeMethods:au,toObjectSet:ou,toCamelCase:ru,noop:lu,toFiniteNumber:cu,findKey:tl,global:nl,isContextDefined:il,ALPHABET:sl,generateString:du,isSpecCompliantForm:uu,toJSONObject:pu,isAsyncFn:fu,isThenable:hu};function J(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}C.inherits(J,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const al=J.prototype,ol={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{ol[t]={value:t}});Object.defineProperties(J,ol);Object.defineProperty(al,"isAxiosError",{value:!0});J.from=(t,e,n,i,r,s)=>{const a=Object.create(al);return C.toFlatObject(t,a,function(l){return l!==Error.prototype},o=>o!=="isAxiosError"),J.call(a,t.message,e,n,i,r),a.cause=t,a.name=t.name,s&&Object.assign(a,s),a};const mu=null;function Ir(t){return C.isPlainObject(t)||C.isArray(t)}function ll(t){return C.endsWith(t,"[]")?t.slice(0,-2):t}function aa(t,e,n){return t?t.concat(e).map(function(r,s){return r=ll(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function gu(t){return C.isArray(t)&&!t.some(Ir)}const bu=C.toFlatObject(C,{},null,function(e){return/^is[A-Z]/.test(e)});function Ei(t,e,n){if(!C.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,v){return!C.isUndefined(v[b])});const i=n.metaTokens,r=n.visitor||d,s=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(e);if(!C.isFunction(r))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(C.isDate(m))return m.toISOString();if(!l&&C.isBlob(m))throw new J("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(m)||C.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function d(m,b,v){let f=m;if(m&&!v&&typeof m=="object"){if(C.endsWith(b,"{}"))b=i?b:b.slice(0,-2),m=JSON.stringify(m);else if(C.isArray(m)&&gu(m)||(C.isFileList(m)||C.endsWith(b,"[]"))&&(f=C.toArray(m)))return b=ll(b),f.forEach(function(w,E){!(C.isUndefined(w)||w===null)&&e.append(a===!0?aa([b],E,s):a===null?b:b+"[]",u(w))}),!1}return Ir(m)?!0:(e.append(aa(v,b,s),u(m)),!1)}const p=[],h=Object.assign(bu,{defaultVisitor:d,convertValue:u,isVisitable:Ir});function g(m,b){if(!C.isUndefined(m)){if(p.indexOf(m)!==-1)throw Error("Circular reference detected in "+b.join("."));p.push(m),C.forEach(m,function(f,x){(!(C.isUndefined(f)||f===null)&&r.call(e,f,C.isString(x)?x.trim():x,b,h))===!0&&g(f,b?b.concat(x):[x])}),p.pop()}}if(!C.isObject(t))throw new TypeError("data must be an object");return g(t),e}function oa(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function cs(t,e){this._pairs=[],t&&Ei(t,this,e)}const cl=cs.prototype;cl.append=function(e,n){this._pairs.push([e,n])};cl.toString=function(e){const n=e?function(i){return e.call(this,i,oa)}:oa;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function xu(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function dl(t,e,n){if(!e)return t;const i=n&&n.encode||xu,r=n&&n.serialize;let s;if(r?s=r(e,n):s=C.isURLSearchParams(e)?e.toString():new cs(e,n).toString(i),s){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class vu{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){C.forEach(this.handlers,function(i){i!==null&&e(i)})}}const la=vu,ul={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},wu=typeof URLSearchParams<"u"?URLSearchParams:cs,yu=typeof FormData<"u"?FormData:null,Su=typeof Blob<"u"?Blob:null,Au={isBrowser:!0,classes:{URLSearchParams:wu,FormData:yu,Blob:Su},protocols:["http","https","file","blob","url","data"]},pl=typeof window<"u"&&typeof document<"u",Eu=(t=>pl&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),Tu=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Cu=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pl,hasStandardBrowserEnv:Eu,hasStandardBrowserWebWorkerEnv:Tu},Symbol.toStringTag,{value:"Module"})),Ge={...Cu,...Au};function Mu(t,e){return Ei(t,new Ge.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return Ge.isNode&&C.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function ju(t){return C.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Ou(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function fl(t){function e(n,i,r,s){let a=n[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),l=s>=n.length;return a=!a&&C.isArray(r)?r.length:a,l?(C.hasOwnProp(r,a)?r[a]=[r[a],i]:r[a]=i,!o):((!r[a]||!C.isObject(r[a]))&&(r[a]=[]),e(n,i,r[a],s)&&C.isArray(r[a])&&(r[a]=Ou(r[a])),!o)}if(C.isFormData(t)&&C.isFunction(t.entries)){const n={};return C.forEachEntry(t,(i,r)=>{e(ju(i),r,n,0)}),n}return null}function ku(t,e,n){if(C.isString(t))try{return(e||JSON.parse)(t),C.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const ds={transitional:ul,adapter:["xhr","http"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=C.isObject(e);if(s&&C.isHTMLForm(e)&&(e=new FormData(e)),C.isFormData(e))return r?JSON.stringify(fl(e)):e;if(C.isArrayBuffer(e)||C.isBuffer(e)||C.isStream(e)||C.isFile(e)||C.isBlob(e))return e;if(C.isArrayBufferView(e))return e.buffer;if(C.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Mu(e,this.formSerializer).toString();if((o=C.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ei(o?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),ku(e)):e}],transformResponse:[function(e){const n=this.transitional||ds.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(e&&C.isString(e)&&(i&&!this.responseType||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?J.from(o,J.ERR_BAD_RESPONSE,this,null,this.response):o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ge.classes.FormData,Blob:Ge.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],t=>{ds.headers[t]={}});const us=ds,Pu=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Iu=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(a){r=a.indexOf(":"),n=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim(),!(!n||e[n]&&Pu[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},ca=Symbol("internals");function _t(t){return t&&String(t).trim().toLowerCase()}function _n(t){return t===!1||t==null?t:C.isArray(t)?t.map(_n):String(t)}function Nu(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const Ru=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function lr(t,e,n,i,r){if(C.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!C.isString(e)){if(C.isString(i))return e.indexOf(i)!==-1;if(C.isRegExp(i))return i.test(e)}}function Lu(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function zu(t,e){const n=C.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,a){return this[i].call(this,e,r,s,a)},configurable:!0})})}class Ti{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(o,l,u){const d=_t(l);if(!d)throw new Error("header name must be a non-empty string");const p=C.findKey(r,d);(!p||r[p]===void 0||u===!0||u===void 0&&r[p]!==!1)&&(r[p||l]=_n(o))}const a=(o,l)=>C.forEach(o,(u,d)=>s(u,d,l));return C.isPlainObject(e)||e instanceof this.constructor?a(e,n):C.isString(e)&&(e=e.trim())&&!Ru(e)?a(Iu(e),n):e!=null&&s(n,e,i),this}get(e,n){if(e=_t(e),e){const i=C.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return Nu(r);if(C.isFunction(n))return n.call(this,r,i);if(C.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=_t(e),e){const i=C.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||lr(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(a){if(a=_t(a),a){const o=C.findKey(i,a);o&&(!n||lr(i,i[o],o,n))&&(delete i[o],r=!0)}}return C.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||lr(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return C.forEach(this,(r,s)=>{const a=C.findKey(i,s);if(a){n[a]=_n(r),delete n[s];return}const o=e?Lu(s):String(s).trim();o!==s&&delete n[s],n[o]=_n(r),i[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return C.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&C.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[ca]=this[ca]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=_t(a);i[o]||(zu(r,a),i[o]=!0)}return C.isArray(e)?e.forEach(s):s(e),this}}Ti.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(Ti.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});C.freezeMethods(Ti);const et=Ti;function cr(t,e){const n=this||us,i=e||n,r=et.from(i.headers);let s=i.data;return C.forEach(t,function(o){s=o.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function hl(t){return!!(t&&t.__CANCEL__)}function wn(t,e,n){J.call(this,t??"canceled",J.ERR_CANCELED,e,n),this.name="CanceledError"}C.inherits(wn,J,{__CANCEL__:!0});function Fu(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new J("Request failed with status code "+n.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Du=Ge.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const a=[t+"="+encodeURIComponent(e)];C.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),C.isString(i)&&a.push("path="+i),C.isString(r)&&a.push("domain="+r),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Bu(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Hu(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function ml(t,e){return t&&!Bu(e)?Hu(t,e):e}const Uu=Ge.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function r(s){let a=s;return e&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(a){const o=C.isString(a)?r(a):a;return o.protocol===i.protocol&&o.host===i.host}}():function(){return function(){return!0}}();function Wu(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Vu(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),d=i[s];a||(a=u),n[r]=l,i[r]=u;let p=s,h=0;for(;p!==r;)h+=n[p++],p=p%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),u-a<e)return;const g=d&&u-d;return g?Math.round(h*1e3/g):void 0}}function da(t,e){let n=0;const i=Vu(50,250);return r=>{const s=r.loaded,a=r.lengthComputable?r.total:void 0,o=s-n,l=i(o),u=s<=a;n=s;const d={loaded:s,total:a,progress:a?s/a:void 0,bytes:o,rate:l||void 0,estimated:l&&a&&u?(a-s)/l:void 0,event:r};d[e?"download":"upload"]=!0,t(d)}}const Gu=typeof XMLHttpRequest<"u",Ju=Gu&&function(t){return new Promise(function(n,i){let r=t.data;const s=et.from(t.headers).normalize();let{responseType:a,withXSRFToken:o}=t,l;function u(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let d;if(C.isFormData(r)){if(Ge.hasStandardBrowserEnv||Ge.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((d=s.getContentType())!==!1){const[b,...v]=d?d.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([b||"multipart/form-data",...v].join("; "))}}let p=new XMLHttpRequest;if(t.auth){const b=t.auth.username||"",v=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(b+":"+v))}const h=ml(t.baseURL,t.url);p.open(t.method.toUpperCase(),dl(h,t.params,t.paramsSerializer),!0),p.timeout=t.timeout;function g(){if(!p)return;const b=et.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),f={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:b,config:t,request:p};Fu(function(w){n(w),u()},function(w){i(w),u()},f),p=null}if("onloadend"in p?p.onloadend=g:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(g)},p.onabort=function(){p&&(i(new J("Request aborted",J.ECONNABORTED,t,p)),p=null)},p.onerror=function(){i(new J("Network Error",J.ERR_NETWORK,t,p)),p=null},p.ontimeout=function(){let v=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const f=t.transitional||ul;t.timeoutErrorMessage&&(v=t.timeoutErrorMessage),i(new J(v,f.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,t,p)),p=null},Ge.hasStandardBrowserEnv&&(o&&C.isFunction(o)&&(o=o(t)),o||o!==!1&&Uu(h))){const b=t.xsrfHeaderName&&t.xsrfCookieName&&Du.read(t.xsrfCookieName);b&&s.set(t.xsrfHeaderName,b)}r===void 0&&s.setContentType(null),"setRequestHeader"in p&&C.forEach(s.toJSON(),function(v,f){p.setRequestHeader(f,v)}),C.isUndefined(t.withCredentials)||(p.withCredentials=!!t.withCredentials),a&&a!=="json"&&(p.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&p.addEventListener("progress",da(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&p.upload&&p.upload.addEventListener("progress",da(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=b=>{p&&(i(!b||b.type?new wn(null,t,p):b),p.abort(),p=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const m=Wu(h);if(m&&Ge.protocols.indexOf(m)===-1){i(new J("Unsupported protocol "+m+":",J.ERR_BAD_REQUEST,t));return}p.send(r||null)})},Nr={http:mu,xhr:Ju};C.forEach(Nr,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const ua=t=>`- ${t}`,Qu=t=>C.isFunction(t)||t===null||t===!1,gl={getAdapter:t=>{t=C.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let a;if(i=n,!Qu(n)&&(i=Nr[(a=String(n)).toLowerCase()],i===void 0))throw new J(`Unknown adapter '${a}'`);if(i)break;r[a||"#"+s]=i}if(!i){const s=Object.entries(r).map(([o,l])=>`adapter ${o} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=e?s.length>1?`since :
`+s.map(ua).join(`
`):" "+ua(s[0]):"as no adapter specified";throw new J("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return i},adapters:Nr};function dr(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new wn(null,t)}function pa(t){return dr(t),t.headers=et.from(t.headers),t.data=cr.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),gl.getAdapter(t.adapter||us.adapter)(t).then(function(i){return dr(t),i.data=cr.call(t,t.transformResponse,i),i.headers=et.from(i.headers),i},function(i){return hl(i)||(dr(t),i&&i.response&&(i.response.data=cr.call(t,t.transformResponse,i.response),i.response.headers=et.from(i.response.headers))),Promise.reject(i)})}const fa=t=>t instanceof et?{...t}:t;function Bt(t,e){e=e||{};const n={};function i(u,d,p){return C.isPlainObject(u)&&C.isPlainObject(d)?C.merge.call({caseless:p},u,d):C.isPlainObject(d)?C.merge({},d):C.isArray(d)?d.slice():d}function r(u,d,p){if(C.isUndefined(d)){if(!C.isUndefined(u))return i(void 0,u,p)}else return i(u,d,p)}function s(u,d){if(!C.isUndefined(d))return i(void 0,d)}function a(u,d){if(C.isUndefined(d)){if(!C.isUndefined(u))return i(void 0,u)}else return i(void 0,d)}function o(u,d,p){if(p in e)return i(u,d);if(p in t)return i(void 0,u)}const l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(u,d)=>r(fa(u),fa(d),!0)};return C.forEach(Object.keys(Object.assign({},t,e)),function(d){const p=l[d]||r,h=p(t[d],e[d],d);C.isUndefined(h)&&p!==o||(n[d]=h)}),n}const bl="1.6.8",ps={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ps[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const ha={};ps.transitional=function(e,n,i){function r(s,a){return"[Axios v"+bl+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return(s,a,o)=>{if(e===!1)throw new J(r(a," has been removed"+(n?" in "+n:"")),J.ERR_DEPRECATED);return n&&!ha[a]&&(ha[a]=!0,console.warn(r(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,a,o):!0}};function qu(t,e,n){if(typeof t!="object")throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],a=e[s];if(a){const o=t[s],l=o===void 0||a(o,s,t);if(l!==!0)throw new J("option "+s+" must be "+l,J.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new J("Unknown option "+s,J.ERR_BAD_OPTION)}}const Rr={assertOptions:qu,validators:ps},rt=Rr.validators;class ai{constructor(e){this.defaults=e,this.interceptors={request:new la,response:new la}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Bt(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Rr.assertOptions(i,{silentJSONParsing:rt.transitional(rt.boolean),forcedJSONParsing:rt.transitional(rt.boolean),clarifyTimeoutError:rt.transitional(rt.boolean)},!1),r!=null&&(C.isFunction(r)?n.paramsSerializer={serialize:r}:Rr.assertOptions(r,{encode:rt.function,serialize:rt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=s&&C.merge(s.common,s[n.method]);s&&C.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),n.headers=et.concat(a,s);const o=[];let l=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(l=l&&b.synchronous,o.unshift(b.fulfilled,b.rejected))});const u=[];this.interceptors.response.forEach(function(b){u.push(b.fulfilled,b.rejected)});let d,p=0,h;if(!l){const m=[pa.bind(this),void 0];for(m.unshift.apply(m,o),m.push.apply(m,u),h=m.length,d=Promise.resolve(n);p<h;)d=d.then(m[p++],m[p++]);return d}h=o.length;let g=n;for(p=0;p<h;){const m=o[p++],b=o[p++];try{g=m(g)}catch(v){b.call(this,v);break}}try{d=pa.call(this,g)}catch(m){return Promise.reject(m)}for(p=0,h=u.length;p<h;)d=d.then(u[p++],u[p++]);return d}getUri(e){e=Bt(this.defaults,e);const n=ml(e.baseURL,e.url);return dl(n,e.params,e.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(e){ai.prototype[e]=function(n,i){return this.request(Bt(i||{},{method:e,url:n,data:(i||{}).data}))}});C.forEach(["post","put","patch"],function(e){function n(i){return function(s,a,o){return this.request(Bt(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}ai.prototype[e]=n(),ai.prototype[e+"Form"]=n(!0)});const $n=ai;class fs{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{i.subscribe(o),s=o}).then(r);return a.cancel=function(){i.unsubscribe(s)},a},e(function(s,a,o){i.reason||(i.reason=new wn(s,a,o),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new fs(function(r){e=r}),cancel:e}}}const Yu=fs;function Xu(t){return function(n){return t.apply(null,n)}}function Ku(t){return C.isObject(t)&&t.isAxiosError===!0}const Lr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Lr).forEach(([t,e])=>{Lr[e]=t});const Zu=Lr;function xl(t){const e=new $n(t),n=_o($n.prototype.request,e);return C.extend(n,$n.prototype,e,{allOwnKeys:!0}),C.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return xl(Bt(t,r))},n}const ce=xl(us);ce.Axios=$n;ce.CanceledError=wn;ce.CancelToken=Yu;ce.isCancel=hl;ce.VERSION=bl;ce.toFormData=Ei;ce.AxiosError=J;ce.Cancel=ce.CanceledError;ce.all=function(e){return Promise.all(e)};ce.spread=Xu;ce.isAxiosError=Ku;ce.mergeConfig=Bt;ce.AxiosHeaders=et;ce.formToJSON=t=>fl(C.isHTMLForm(t)?new FormData(t):t);ce.getAdapter=gl.getAdapter;ce.HttpStatusCode=Zu;ce.default=ce;const Ci=ce;function vl(t){var e;if((e=t==null?void 0:t.asset)!=null&&e._ref){const n=t.asset._ref.split("-");return`https://cdn.sanity.io/images/l8zwdlyt/production/${n[1]}-${n[2]}.${n[3]}`}else return null}async function jM(){try{const{data:{result:t}}=await Ci.get('https://l8zwdlyt.api.sanity.io/v2022-03-07/data/query/production?query=*[_type=="goal"]{ _id, goal, raised }');return t[0]}catch{return}}async function _u(){try{const{data:{result:t}}=await Ci.get('https://l8zwdlyt.api.sanity.io/v2022-03-07/data/query/production?query=*[_type=="companies"]{ _id, id, name, logoURL, link, question, answer } | order(id asc)');return t.map(n=>(n.logoURL&&(n.logoURL=vl(n.logoURL)),n))}catch{return}}async function $u(){try{const{data:{result:t}}=await Ci.get('https://l8zwdlyt.api.sanity.io/v2022-03-07/data/query/production?query=*[_type=="people"]{ _id, id,firstName,secondName,type, imageURL, facebook, instagram, otherLink, question, answer  } | order(id asc)');return t.map(n=>(n.imageURL&&(n.imageURL=vl(n.imageURL)),n))}catch{return}}async function ep(t){const{data:e}=await Ci.post("https://api.telegram.org/bot6593525660:AAGrKfdt_B8SslnCs0UhvyMPZ3nn_HHEU0Q/sendMessage",{chat_id:"5921930260",parse_mode:"html",text:t});return e}var zr={exports:{}},yt={},wl={exports:{}},tp="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",np=tp,ip=np;function yl(){}function Sl(){}Sl.resetWarningCache=yl;var rp=function(){function t(i,r,s,a,o,l){if(l!==ip){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Sl,resetWarningCache:yl};return n.PropTypes=n,n};wl.exports=rp();var Et=wl.exports;const X=xn(Et);var Fr={exports:{}},Fe={},Dr={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",i="contents",r=/input|select|textarea|button|object|iframe/;function s(p,h){return h.getPropertyValue("overflow")!=="visible"||p.scrollWidth<=0&&p.scrollHeight<=0}function a(p){var h=p.offsetWidth<=0&&p.offsetHeight<=0;if(h&&!p.innerHTML)return!0;try{var g=window.getComputedStyle(p),m=g.getPropertyValue("display");return h?m!==i&&s(p,g):m===n}catch{return console.warn("Failed to inspect element style"),!1}}function o(p){for(var h=p,g=p.getRootNode&&p.getRootNode();h&&h!==document.body;){if(g&&h===g&&(h=g.host.parentNode),a(h))return!1;h=h.parentNode}return!0}function l(p,h){var g=p.nodeName.toLowerCase(),m=r.test(g)&&!p.disabled||g==="a"&&p.href||h;return m&&o(p)}function u(p){var h=p.getAttribute("tabindex");h===null&&(h=void 0);var g=isNaN(h);return(g||h>=0)&&l(p,!g)}function d(p){var h=[].slice.call(p.querySelectorAll("*"),0).reduce(function(g,m){return g.concat(m.shadowRoot?d(m.shadowRoot):[m])},[]);return h.filter(u)}t.exports=e.default})(Dr,Dr.exports);var Al=Dr.exports;Object.defineProperty(Fe,"__esModule",{value:!0});Fe.resetState=lp;Fe.log=cp;Fe.handleBlur=cn;Fe.handleFocus=dn;Fe.markForFocusLater=dp;Fe.returnFocus=up;Fe.popWithoutFocus=pp;Fe.setupScopedFocus=fp;Fe.teardownScopedFocus=hp;var sp=Al,ap=op(sp);function op(t){return t&&t.__esModule?t:{default:t}}var Ht=[],Rt=null,Br=!1;function lp(){Ht=[]}function cp(){}function cn(){Br=!0}function dn(){if(Br){if(Br=!1,!Rt)return;setTimeout(function(){if(!Rt.contains(document.activeElement)){var t=(0,ap.default)(Rt)[0]||Rt;t.focus()}},0)}}function dp(){Ht.push(document.activeElement)}function up(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{Ht.length!==0&&(e=Ht.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function pp(){Ht.length>0&&Ht.pop()}function fp(t){Rt=t,window.addEventListener?(window.addEventListener("blur",cn,!1),document.addEventListener("focus",dn,!0)):(window.attachEvent("onBlur",cn),document.attachEvent("onFocus",dn))}function hp(){Rt=null,window.addEventListener?(window.removeEventListener("blur",cn),document.removeEventListener("focus",dn)):(window.detachEvent("onBlur",cn),document.detachEvent("onFocus",dn))}var Hr={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var n=Al,i=r(n);function r(o){return o&&o.__esModule?o:{default:o}}function s(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return o.activeElement.shadowRoot?s(o.activeElement.shadowRoot):o.activeElement}function a(o,l){var u=(0,i.default)(o);if(!u.length){l.preventDefault();return}var d=void 0,p=l.shiftKey,h=u[0],g=u[u.length-1],m=s();if(o===m){if(!p)return;d=g}if(g===m&&!p&&(d=h),h===m&&p&&(d=g),d){l.preventDefault(),d.focus();return}var b=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),v=b!=null&&b[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(v){var f=u.indexOf(m);if(f>-1&&(f+=p?-1:1),d=u[f],typeof d>"u"){l.preventDefault(),d=p?g:h,d.focus();return}l.preventDefault(),d.focus()}}t.exports=e.default})(Hr,Hr.exports);var mp=Hr.exports,De={},gp=function(){},bp=gp,Le={},El={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(El);var xp=El.exports;Object.defineProperty(Le,"__esModule",{value:!0});Le.canUseDOM=Le.SafeNodeList=Le.SafeHTMLCollection=void 0;var vp=xp,wp=yp(vp);function yp(t){return t&&t.__esModule?t:{default:t}}var Mi=wp.default,Sp=Mi.canUseDOM?window.HTMLElement:{};Le.SafeHTMLCollection=Mi.canUseDOM?window.HTMLCollection:{};Le.SafeNodeList=Mi.canUseDOM?window.NodeList:{};Le.canUseDOM=Mi.canUseDOM;Le.default=Sp;Object.defineProperty(De,"__esModule",{value:!0});De.resetState=Mp;De.log=jp;De.assertNodeList=Tl;De.setElement=Op;De.validateElement=hs;De.hide=kp;De.show=Pp;De.documentNotReadyOrSSRTesting=Ip;var Ap=bp,Ep=Cp(Ap),Tp=Le;function Cp(t){return t&&t.__esModule?t:{default:t}}var ke=null;function Mp(){ke&&(ke.removeAttribute?ke.removeAttribute("aria-hidden"):ke.length!=null?ke.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(ke).forEach(function(t){return t.removeAttribute("aria-hidden")})),ke=null}function jp(){}function Tl(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Op(t){var e=t;if(typeof e=="string"&&Tp.canUseDOM){var n=document.querySelectorAll(e);Tl(n,e),e=n}return ke=e||ke,ke}function hs(t){var e=t||ke;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Ep.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function kp(t){var e=!0,n=!1,i=void 0;try{for(var r=hs(t)[Symbol.iterator](),s;!(e=(s=r.next()).done);e=!0){var a=s.value;a.setAttribute("aria-hidden","true")}}catch(o){n=!0,i=o}finally{try{!e&&r.return&&r.return()}finally{if(n)throw i}}}function Pp(t){var e=!0,n=!1,i=void 0;try{for(var r=hs(t)[Symbol.iterator](),s;!(e=(s=r.next()).done);e=!0){var a=s.value;a.removeAttribute("aria-hidden")}}catch(o){n=!0,i=o}finally{try{!e&&r.return&&r.return()}finally{if(n)throw i}}}function Ip(){ke=null}var Gt={};Object.defineProperty(Gt,"__esModule",{value:!0});Gt.resetState=Np;Gt.log=Rp;var nn={},rn={};function ma(t,e){t.classList.remove(e)}function Np(){var t=document.getElementsByTagName("html")[0];for(var e in nn)ma(t,nn[e]);var n=document.body;for(var i in rn)ma(n,rn[i]);nn={},rn={}}function Rp(){}var Lp=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},zp=function(e,n){return e[n]&&(e[n]-=1),n},Fp=function(e,n,i){i.forEach(function(r){Lp(n,r),e.add(r)})},Dp=function(e,n,i){i.forEach(function(r){zp(n,r),n[r]===0&&e.remove(r)})};Gt.add=function(e,n){return Fp(e.classList,e.nodeName.toLowerCase()=="html"?nn:rn,n.split(" "))};Gt.remove=function(e,n){return Dp(e.classList,e.nodeName.toLowerCase()=="html"?nn:rn,n.split(" "))};var Jt={};Object.defineProperty(Jt,"__esModule",{value:!0});Jt.log=Hp;Jt.resetState=Up;function Bp(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Cl=function t(){var e=this;Bp(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var i=e.openInstances.indexOf(n);i!==-1&&(e.openInstances.splice(i,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(i){return i(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},oi=new Cl;function Hp(){console.log("portalOpenInstances ----------"),console.log(oi.openInstances.length),oi.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Up(){oi=new Cl}Jt.default=oi;var ms={};Object.defineProperty(ms,"__esModule",{value:!0});ms.resetState=Jp;ms.log=Qp;var Wp=Jt,Vp=Gp(Wp);function Gp(t){return t&&t.__esModule?t:{default:t}}var ve=void 0,Ne=void 0,xt=[];function Jp(){for(var t=[ve,Ne],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}ve=Ne=null,xt=[]}function Qp(){console.log("bodyTrap ----------"),console.log(xt.length);for(var t=[ve,Ne],e=0;e<t.length;e++){var n=t[e],i=n||{};console.log(i.nodeName,i.className,i.id)}console.log("edn bodyTrap ----------")}function ga(){xt.length!==0&&xt[xt.length-1].focusContent()}function qp(t,e){!ve&&!Ne&&(ve=document.createElement("div"),ve.setAttribute("data-react-modal-body-trap",""),ve.style.position="absolute",ve.style.opacity="0",ve.setAttribute("tabindex","0"),ve.addEventListener("focus",ga),Ne=ve.cloneNode(),Ne.addEventListener("focus",ga)),xt=e,xt.length>0?(document.body.firstChild!==ve&&document.body.insertBefore(ve,document.body.firstChild),document.body.lastChild!==Ne&&document.body.appendChild(Ne)):(ve.parentElement&&ve.parentElement.removeChild(ve),Ne.parentElement&&Ne.parentElement.removeChild(Ne))}Vp.default.subscribe(qp);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(k){for(var z=1;z<arguments.length;z++){var Q=arguments[z];for(var A in Q)Object.prototype.hasOwnProperty.call(Q,A)&&(k[A]=Q[A])}return k},i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},r=function(){function k(z,Q){for(var A=0;A<Q.length;A++){var H=Q[A];H.enumerable=H.enumerable||!1,H.configurable=!0,"value"in H&&(H.writable=!0),Object.defineProperty(z,H.key,H)}}return function(z,Q,A){return Q&&k(z.prototype,Q),A&&k(z,A),z}}(),s=S,a=Et,o=M(a),l=Fe,u=E(l),d=mp,p=M(d),h=De,g=E(h),m=Gt,b=E(m),v=Le,f=M(v),x=Jt,w=M(x);function E(k){if(k&&k.__esModule)return k;var z={};if(k!=null)for(var Q in k)Object.prototype.hasOwnProperty.call(k,Q)&&(z[Q]=k[Q]);return z.default=k,z}function M(k){return k&&k.__esModule?k:{default:k}}function T(k,z){if(!(k instanceof z))throw new TypeError("Cannot call a class as a function")}function j(k,z){if(!k)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return z&&(typeof z=="object"||typeof z=="function")?z:k}function L(k,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof z);k.prototype=Object.create(z&&z.prototype,{constructor:{value:k,enumerable:!1,writable:!0,configurable:!0}}),z&&(Object.setPrototypeOf?Object.setPrototypeOf(k,z):k.__proto__=z)}var N={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},O=function(z){return z.code==="Tab"||z.keyCode===9},I=function(z){return z.code==="Escape"||z.keyCode===27},R=0,P=function(k){L(z,k);function z(Q){T(this,z);var A=j(this,(z.__proto__||Object.getPrototypeOf(z)).call(this,Q));return A.setOverlayRef=function(H){A.overlay=H,A.props.overlayRef&&A.props.overlayRef(H)},A.setContentRef=function(H){A.content=H,A.props.contentRef&&A.props.contentRef(H)},A.afterClose=function(){var H=A.props,G=H.appElement,Z=H.ariaHideApp,te=H.htmlOpenClassName,be=H.bodyOpenClassName,Be=H.parentSelector,nt=Be&&Be().ownerDocument||document;be&&b.remove(nt.body,be),te&&b.remove(nt.getElementsByTagName("html")[0],te),Z&&R>0&&(R-=1,R===0&&g.show(G)),A.props.shouldFocusAfterRender&&(A.props.shouldReturnFocusAfterClose?(u.returnFocus(A.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),A.props.onAfterClose&&A.props.onAfterClose(),w.default.deregister(A)},A.open=function(){A.beforeOpen(),A.state.afterOpen&&A.state.beforeClose?(clearTimeout(A.closeTimer),A.setState({beforeClose:!1})):(A.props.shouldFocusAfterRender&&(u.setupScopedFocus(A.node),u.markForFocusLater()),A.setState({isOpen:!0},function(){A.openAnimationFrame=requestAnimationFrame(function(){A.setState({afterOpen:!0}),A.props.isOpen&&A.props.onAfterOpen&&A.props.onAfterOpen({overlayEl:A.overlay,contentEl:A.content})})}))},A.close=function(){A.props.closeTimeoutMS>0?A.closeWithTimeout():A.closeWithoutTimeout()},A.focusContent=function(){return A.content&&!A.contentHasFocus()&&A.content.focus({preventScroll:!0})},A.closeWithTimeout=function(){var H=Date.now()+A.props.closeTimeoutMS;A.setState({beforeClose:!0,closesAt:H},function(){A.closeTimer=setTimeout(A.closeWithoutTimeout,A.state.closesAt-Date.now())})},A.closeWithoutTimeout=function(){A.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},A.afterClose)},A.handleKeyDown=function(H){O(H)&&(0,p.default)(A.content,H),A.props.shouldCloseOnEsc&&I(H)&&(H.stopPropagation(),A.requestClose(H))},A.handleOverlayOnClick=function(H){A.shouldClose===null&&(A.shouldClose=!0),A.shouldClose&&A.props.shouldCloseOnOverlayClick&&(A.ownerHandlesClose()?A.requestClose(H):A.focusContent()),A.shouldClose=null},A.handleContentOnMouseUp=function(){A.shouldClose=!1},A.handleOverlayOnMouseDown=function(H){!A.props.shouldCloseOnOverlayClick&&H.target==A.overlay&&H.preventDefault()},A.handleContentOnClick=function(){A.shouldClose=!1},A.handleContentOnMouseDown=function(){A.shouldClose=!1},A.requestClose=function(H){return A.ownerHandlesClose()&&A.props.onRequestClose(H)},A.ownerHandlesClose=function(){return A.props.onRequestClose},A.shouldBeClosed=function(){return!A.state.isOpen&&!A.state.beforeClose},A.contentHasFocus=function(){return document.activeElement===A.content||A.content.contains(document.activeElement)},A.buildClassName=function(H,G){var Z=(typeof G>"u"?"undefined":i(G))==="object"?G:{base:N[H],afterOpen:N[H]+"--after-open",beforeClose:N[H]+"--before-close"},te=Z.base;return A.state.afterOpen&&(te=te+" "+Z.afterOpen),A.state.beforeClose&&(te=te+" "+Z.beforeClose),typeof G=="string"&&G?te+" "+G:te},A.attributesFromObject=function(H,G){return Object.keys(G).reduce(function(Z,te){return Z[H+"-"+te]=G[te],Z},{})},A.state={afterOpen:!1,beforeClose:!1},A.shouldClose=null,A.moveFromContentToOverlay=null,A}return r(z,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(A,H){this.props.isOpen&&!A.isOpen?this.open():!this.props.isOpen&&A.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!H.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var A=this.props,H=A.appElement,G=A.ariaHideApp,Z=A.htmlOpenClassName,te=A.bodyOpenClassName,be=A.parentSelector,Be=be&&be().ownerDocument||document;te&&b.add(Be.body,te),Z&&b.add(Be.getElementsByTagName("html")[0],Z),G&&(R+=1,g.hide(H)),w.default.register(this)}},{key:"render",value:function(){var A=this.props,H=A.id,G=A.className,Z=A.overlayClassName,te=A.defaultStyles,be=A.children,Be=G?{}:te.content,nt=Z?{}:te.overlay;if(this.shouldBeClosed())return null;var it={ref:this.setOverlayRef,className:this.buildClassName("overlay",Z),style:n({},nt,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},zn=n({id:H,ref:this.setContentRef,style:n({},Be,this.props.style.content),className:this.buildClassName("content",G),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Zt=this.props.contentElement(zn,be);return this.props.overlayElement(it,Zt)}}]),z}(s.Component);P.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},P.propTypes={isOpen:o.default.bool.isRequired,defaultStyles:o.default.shape({content:o.default.object,overlay:o.default.object}),style:o.default.shape({content:o.default.object,overlay:o.default.object}),className:o.default.oneOfType([o.default.string,o.default.object]),overlayClassName:o.default.oneOfType([o.default.string,o.default.object]),parentSelector:o.default.func,bodyOpenClassName:o.default.string,htmlOpenClassName:o.default.string,ariaHideApp:o.default.bool,appElement:o.default.oneOfType([o.default.instanceOf(f.default),o.default.instanceOf(v.SafeHTMLCollection),o.default.instanceOf(v.SafeNodeList),o.default.arrayOf(o.default.instanceOf(f.default))]),onAfterOpen:o.default.func,onAfterClose:o.default.func,onRequestClose:o.default.func,closeTimeoutMS:o.default.number,shouldFocusAfterRender:o.default.bool,shouldCloseOnOverlayClick:o.default.bool,shouldReturnFocusAfterClose:o.default.bool,preventScroll:o.default.bool,role:o.default.string,contentLabel:o.default.string,aria:o.default.object,data:o.default.object,children:o.default.node,shouldCloseOnEsc:o.default.bool,overlayRef:o.default.func,contentRef:o.default.func,id:o.default.string,overlayElement:o.default.func,contentElement:o.default.func,testId:o.default.string},e.default=P,t.exports=e.default})(Fr,Fr.exports);var Yp=Fr.exports;function Ml(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function jl(t){function e(n){var i=this.constructor.getDerivedStateFromProps(t,n);return i??null}this.setState(e.bind(this))}function Ol(t,e){try{var n=this.props,i=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,i)}finally{this.props=n,this.state=i}}Ml.__suppressDeprecationWarning=!0;jl.__suppressDeprecationWarning=!0;Ol.__suppressDeprecationWarning=!0;function Xp(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,i=null,r=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?i="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(i="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?r="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(r="UNSAFE_componentWillUpdate"),n!==null||i!==null||r!==null){var s=t.displayName||t.name,a=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+a+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(i!==null?`
  `+i:"")+(r!==null?`
  `+r:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=Ml,e.componentWillReceiveProps=jl),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=Ol;var o=e.componentDidUpdate;e.componentDidUpdate=function(u,d,p){var h=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:p;o.call(this,u,d,h)}}return t}const Kp=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Xp},Symbol.toStringTag,{value:"Module"})),Zp=Id(Kp);Object.defineProperty(yt,"__esModule",{value:!0});yt.bodyOpenClassName=yt.portalClassName=void 0;var ba=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_p=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),kl=S,li=yn(kl),$p=Xo,ci=yn($p),ef=Et,W=yn(ef),tf=Yp,xa=yn(tf),nf=De,rf=af(nf),ot=Le,va=yn(ot),sf=Zp;function af(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function yn(t){return t&&t.__esModule?t:{default:t}}function of(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function wa(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function lf(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var cf=yt.portalClassName="ReactModalPortal",df=yt.bodyOpenClassName="ReactModal__Body--open",ht=ot.canUseDOM&&ci.default.createPortal!==void 0,ya=function(e){return document.createElement(e)},Sa=function(){return ht?ci.default.createPortal:ci.default.unstable_renderSubtreeIntoContainer};function Dn(t){return t()}var Sn=function(t){lf(e,t);function e(){var n,i,r,s;of(this,e);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return s=(i=(r=wa(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(o))),r),r.removePortal=function(){!ht&&ci.default.unmountComponentAtNode(r.node);var u=Dn(r.props.parentSelector);u&&u.contains(r.node)?u.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(u){r.portal=u},r.renderPortal=function(u){var d=Sa(),p=d(r,li.default.createElement(xa.default,ba({defaultStyles:e.defaultStyles},u)),r.node);r.portalRef(p)},i),wa(r,s)}return _p(e,[{key:"componentDidMount",value:function(){if(ot.canUseDOM){ht||(this.node=ya("div")),this.node.className=this.props.portalClassName;var i=Dn(this.props.parentSelector);i.appendChild(this.node),!ht&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(i){var r=Dn(i.parentSelector),s=Dn(this.props.parentSelector);return{prevParent:r,nextParent:s}}},{key:"componentDidUpdate",value:function(i,r,s){if(ot.canUseDOM){var a=this.props,o=a.isOpen,l=a.portalClassName;i.portalClassName!==l&&(this.node.className=l);var u=s.prevParent,d=s.nextParent;d!==u&&(u.removeChild(this.node),d.appendChild(this.node)),!(!i.isOpen&&!o)&&!ht&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!ot.canUseDOM||!this.node||!this.portal)){var i=this.portal.state,r=Date.now(),s=i.isOpen&&this.props.closeTimeoutMS&&(i.closesAt||r+this.props.closeTimeoutMS);s?(i.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-r)):this.removePortal()}}},{key:"render",value:function(){if(!ot.canUseDOM||!ht)return null;!this.node&&ht&&(this.node=ya("div"));var i=Sa();return i(li.default.createElement(xa.default,ba({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(i){rf.setElement(i)}}]),e}(kl.Component);Sn.propTypes={isOpen:W.default.bool.isRequired,style:W.default.shape({content:W.default.object,overlay:W.default.object}),portalClassName:W.default.string,bodyOpenClassName:W.default.string,htmlOpenClassName:W.default.string,className:W.default.oneOfType([W.default.string,W.default.shape({base:W.default.string.isRequired,afterOpen:W.default.string.isRequired,beforeClose:W.default.string.isRequired})]),overlayClassName:W.default.oneOfType([W.default.string,W.default.shape({base:W.default.string.isRequired,afterOpen:W.default.string.isRequired,beforeClose:W.default.string.isRequired})]),appElement:W.default.oneOfType([W.default.instanceOf(va.default),W.default.instanceOf(ot.SafeHTMLCollection),W.default.instanceOf(ot.SafeNodeList),W.default.arrayOf(W.default.instanceOf(va.default))]),onAfterOpen:W.default.func,onRequestClose:W.default.func,closeTimeoutMS:W.default.number,ariaHideApp:W.default.bool,shouldFocusAfterRender:W.default.bool,shouldCloseOnOverlayClick:W.default.bool,shouldReturnFocusAfterClose:W.default.bool,preventScroll:W.default.bool,parentSelector:W.default.func,aria:W.default.object,data:W.default.object,role:W.default.string,contentLabel:W.default.string,shouldCloseOnEsc:W.default.bool,overlayRef:W.default.func,contentRef:W.default.func,id:W.default.string,overlayElement:W.default.func,contentElement:W.default.func};Sn.defaultProps={isOpen:!1,portalClassName:cf,bodyOpenClassName:df,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return li.default.createElement("div",e,n)},contentElement:function(e,n){return li.default.createElement("div",e,n)}};Sn.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,sf.polyfill)(Sn);yt.default=Sn;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=yt,i=r(n);function r(s){return s&&s.__esModule?s:{default:s}}e.default=i.default,t.exports=e.default})(zr,zr.exports);var uf=zr.exports;const An=xn(uf);var gs={};gs.match=bf;gs.parse=Pl;var pf=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,ff=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,hf=/^(?:(min|max)-)?(.+)/,mf=/(em|rem|px|cm|mm|in|pt|pc)?$/,gf=/(dpi|dpcm|dppx)?$/;function bf(t,e){return Pl(t).some(function(n){var i=n.inverse,r=n.type==="all"||e.type===n.type;if(r&&i||!(r||i))return!1;var s=n.expressions.every(function(a){var o=a.feature,l=a.modifier,u=a.value,d=e[o];if(!d)return!1;switch(o){case"orientation":case"scan":return d.toLowerCase()===u.toLowerCase();case"width":case"height":case"device-width":case"device-height":u=Ta(u),d=Ta(d);break;case"resolution":u=Ea(u),d=Ea(d);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":u=Aa(u),d=Aa(d);break;case"grid":case"color":case"color-index":case"monochrome":u=parseInt(u,10)||1,d=parseInt(d,10)||0;break}switch(l){case"min":return d>=u;case"max":return d<=u;default:return d===u}});return s&&!i||!s&&i})}function Pl(t){return t.split(",").map(function(e){e=e.trim();var n=e.match(pf),i=n[1],r=n[2],s=n[3]||"",a={};return a.inverse=!!i&&i.toLowerCase()==="not",a.type=r?r.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],a.expressions=s.map(function(o){var l=o.match(ff),u=l[1].toLowerCase().match(hf);return{modifier:u[1],feature:u[2],value:l[2]}}),a})}function Aa(t){var e=Number(t),n;return e||(n=t.match(/^(\d+)\s*\/\s*(\d+)$/),e=n[1]/n[2]),e}function Ea(t){var e=parseFloat(t),n=String(t).match(gf)[1];switch(n){case"dpcm":return e/2.54;case"dppx":return e*96;default:return e}}function Ta(t){var e=parseFloat(t),n=String(t).match(mf)[1];switch(n){case"em":return e*16;case"rem":return e*16;case"cm":return e*96/2.54;case"mm":return e*96/2.54/10;case"in":return e*96;case"pt":return e*72;case"pc":return e*72/12;default:return e}}var xf=gs.match,Ca=typeof window<"u"?window.matchMedia:null;function vf(t,e,n){var i=this,r;Ca&&!n&&(r=Ca.call(window,t)),r?(this.matches=r.matches,this.media=r.media,r.addListener(o)):(this.matches=xf(t,e),this.media=t),this.addListener=s,this.removeListener=a,this.dispose=l;function s(u){r&&r.addListener(u)}function a(u){r&&r.removeListener(u)}function o(u){i.matches=u.matches,i.media=u.media}function l(){r&&r.removeListener(o)}}function wf(t,e,n){return new vf(t,e,n)}var yf=wf;const Sf=xn(yf);var Af=/[A-Z]/g,Ef=/^ms-/,ur={};function Tf(t){return"-"+t.toLowerCase()}function Il(t){if(ur.hasOwnProperty(t))return ur[t];var e=t.replace(Af,Tf);return ur[t]=Ef.test(e)?"-"+e:e}function Cf(t,e){if(t===e)return!0;if(!t||!e)return!1;const n=Object.keys(t),i=Object.keys(e),r=n.length;if(i.length!==r)return!1;for(let s=0;s<r;s++){const a=n[s];if(t[a]!==e[a]||!Object.prototype.hasOwnProperty.call(e,a))return!1}return!0}const we=X.oneOfType([X.string,X.number]),bs={all:X.bool,grid:X.bool,aural:X.bool,braille:X.bool,handheld:X.bool,print:X.bool,projection:X.bool,screen:X.bool,tty:X.bool,tv:X.bool,embossed:X.bool},Nl={orientation:X.oneOf(["portrait","landscape"]),scan:X.oneOf(["progressive","interlace"]),aspectRatio:X.string,deviceAspectRatio:X.string,height:we,deviceHeight:we,width:we,deviceWidth:we,color:X.bool,colorIndex:X.bool,monochrome:X.bool,resolution:we,type:Object.keys(bs)},{type:OM,...Mf}=Nl,Rl={minAspectRatio:X.string,maxAspectRatio:X.string,minDeviceAspectRatio:X.string,maxDeviceAspectRatio:X.string,minHeight:we,maxHeight:we,minDeviceHeight:we,maxDeviceHeight:we,minWidth:we,maxWidth:we,minDeviceWidth:we,maxDeviceWidth:we,minColor:X.number,maxColor:X.number,minColorIndex:X.number,maxColorIndex:X.number,minMonochrome:X.number,maxMonochrome:X.number,minResolution:we,maxResolution:we,...Mf},jf={...bs,...Rl};var Of={all:jf,types:bs,matchers:Nl,features:Rl};const kf=t=>`not ${t}`,Pf=(t,e)=>{const n=Il(t);return typeof e=="number"&&(e=`${e}px`),e===!0?n:e===!1?kf(n):`(${n}: ${e})`},If=t=>t.join(" and "),Nf=t=>{const e=[];return Object.keys(Of.all).forEach(n=>{const i=t[n];i!=null&&e.push(Pf(n,i))}),If(e)},Rf=S.createContext(void 0),Lf=t=>t.query||Nf(t),Ma=t=>t?Object.keys(t).reduce((n,i)=>(n[Il(i)]=t[i],n),{}):void 0,Ll=()=>{const t=S.useRef(!1);return S.useEffect(()=>{t.current=!0},[]),t.current},zf=t=>{const e=S.useContext(Rf),n=()=>Ma(t)||Ma(e),[i,r]=S.useState(n);return S.useEffect(()=>{const s=n();Cf(i,s)||r(s)},[t,e]),i},Ff=t=>{const e=()=>Lf(t),[n,i]=S.useState(e);return S.useEffect(()=>{const r=e();n!==r&&i(r)},[t]),n},Df=(t,e)=>{const n=()=>Sf(t,e||{},!!e),[i,r]=S.useState(n),s=Ll();return S.useEffect(()=>{if(s){const a=n();return r(a),()=>{a&&a.dispose()}}},[t,e]),i},Bf=t=>{const[e,n]=S.useState(t.matches);return S.useEffect(()=>{const i=r=>{n(r.matches)};return t.addListener(i),n(t.matches),()=>{t.removeListener(i)}},[t]),e},ze=(t,e,n)=>{const i=zf(e),r=Ff(t);if(!r)throw new Error("Invalid or missing MediaQuery!");const s=Df(r,i),a=Bf(s),o=Ll();return S.useEffect(()=>{o&&n&&n(a)},[a]),S.useEffect(()=>()=>{s&&s.dispose()},[]),a},Hf=({children:t,device:e,onChange:n,...i})=>{const r=ze(i,e,n);return typeof t=="function"?t(r):r?t:null},Qt=()=>S.useContext(Nd),ji=F.div`
  width: 100%;
  max-width: 375px;
  padding: 0 16px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 120px;
  }
`,En=({children:t,...e})=>c.jsx(ji,{...e,children:t}),Uf=F.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: transparent;

  .hidden-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;

    transition:
      opacity 1s ease-in-out,
      height 1ms ease-in-out 0.1s,
      overflow 1ms ease-in-out 0.1s,
      background-color 700ms ease-in-out,
      backdrop-filter 700ms ease-in-out;
  }

  .dark-header.hidden-wrap {
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
  }

  .hidden-wrap.hidden {
    height: 0;
    opacity: 0;
    overflow: hidden;
    transition:
      opacity 1s ease-in-out,
      height 1ms ease-in-out 1s,
      overflow 1ms ease-in-out 1s;
  }

  .main-logo {
    fill: #ffffff;
    transition: fill 0.5s;
  }

  .burger-menu-icon {
    stroke: #ffffff;
    transition: fill 1s;
  }

  .burger-menu-icon.dark-header {
    stroke: #0b0b0b;
  }

  .main-logo.dark-header {
    fill: #0b0b0b;
  }

  @media screen and (min-width: 768px) {
    .hidden-wrap {
      height: 117px;
    }
  }

  @media screen and (min-width: 1440px) {
    .hidden-wrap {
      height: 125px;
    }
  }
`,Wf=F(En)`
  padding: 16px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 16px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 120px;
  }

  .menu-wrapper {
    width: 100%;
    max-width: 376px;
    height: 85px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
    display: flex;
    svg {
      align-self: center;
    }
  }

  .btn-clouds {
    position: relative;
    width: 100%;
    max-width: 180px;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      font-weight: 600;
      font-size: 14px;
      line-height: 1.29; //18px
      letter-spacing: -1px;
      color: #fff;
    }
  }

  svg.cloud-icon {
    fill: #f77d07;
    transform: rotate(-4deg);
  }

  .btn-clouds:hover .cloud-icon {
    fill: #e97200;
    transition: fill 0.25s ease-in-out;
  }

  .btn-clouds:active .cloud-icon {
    fill: #e3e3e3;
    transition: fill 0.25s ease-in-out;
  }
`,Vf="/MistoHub/assets/icons-395c4493.svg",K=({width:t,height:e,iconName:n,styles:i})=>c.jsx("svg",{width:t,height:e,className:i,children:c.jsx("use",{href:`${Vf}#${n}`})}),Gf=F.div`
  display: flex;
  column-gap: 8px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${({$sections:t})=>t.menu?"#f77d07":"#fff"};
    transition: background 0.25s ease-in-out;
    svg {
      fill: ${({$sections:t})=>t.menu?"#fff":"#0b0b0b"};
      transition: fill 0.25s ease-in-out;
    }
  }

  a.dark-header {
    background: #0b0b0b;
    svg.dark-header {
      fill: #fff;
    }
  }

  .link-instagram:active {
    background: radial-gradient(
      circle 88px at 109% 8%,
      #f9ed32 0%,
      #ee2a7b 36%,
      #d22a8a 44%,
      #8b2ab2 60%,
      #1b2af0 83%,
      #002aff 88%
    );
    svg {
      fill: #fff;
    }
  }

  .link-facebook:active {
    background: linear-gradient(180deg, #18acfe 0, #0165e1 100%);
    svg {
      fill: #fff;
    }
  }

  @media screen and (min-width: 768px) {
    column-gap: 14px;

    a {
      width: 40px;
      height: 40px;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-left: ${({$sections:t})=>t.footer&&"auto"};
    align-self: ${({$sections:t})=>t.footer&&"center"};

    .link-instagram:hover {
      background: radial-gradient(
        circle 88px at 109% 8%,
        #f9ed32 0%,
        #ee2a7b 36%,
        #d22a8a 44%,
        #8b2ab2 60%,
        #1b2af0 83%,
        #002aff 88%
      );
      svg {
        fill: #fff;
      }
    }

    .link-facebook:hover {
      background: linear-gradient(180deg, #18acfe 0, #0165e1 100%);
      svg {
        fill: #fff;
      }
    }
  }
`;function xs({darkStyle:t,sectionName:e}){let n={};switch(e){case"header":n[e]=!0;break;case"footer":n[e]=!0;break;case"menu":n[e]=!0;break}return c.jsxs(Gf,{$sections:n,children:[c.jsx(Dt,{className:`link-instagram ${n.header?t:""}`,to:"https://www.instagram.com/mistohub",target:"_blank",rel:"noopener noreferrer","aria-label":"go and view the Mistohub Instagram account",children:c.jsx(K,{width:"20",height:"20",iconName:"icon-instagram",styles:t})}),c.jsx(Dt,{className:`link-facebook ${n.header?t:""}`,to:"https://www.facebook.com/mistohub/?locale=uk_UA",target:"_blank",rel:"noopener noreferrer","aria-label":"go to the Mistohub Facebook page",children:c.jsx(K,{width:"20",height:"20",iconName:"icon-faceb",styles:t})})]})}function Jf(){const[t,e]=S.useState(""),{openModal:n}=Qt(),i=ze({maxWidth:767});return S.useEffect(()=>{const r=document.getElementById("footer"),s=document.querySelector(".hidden-wrap"),a=()=>{window.scrollY!==0&&r.offsetTop-375>=window.scrollY?(s.classList.value.includes("hidden")&&s.classList.remove("hidden"),e("dark-header")):window.scrollY===0?e(""):s.classList.add("hidden")};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),c.jsx(Uf,{children:c.jsx("div",{className:`hidden-wrap ${t}`,children:c.jsxs(Wf,{children:[c.jsx(K,{width:i?"99":"118",height:i?"34":"40",iconName:"main-logo",styles:`main-logo ${t} `}),i?c.jsx(c.Fragment,{children:c.jsx("button",{type:"button",onClick:()=>n("menu_modal"),children:c.jsx(K,{width:"44",height:"38",iconName:"burger-menu",styles:`${t} burger-menu-icon`})})}):c.jsxs("div",{className:"menu-wrapper",children:[c.jsx(xs,{darkStyle:t,sectionName:"header"}),c.jsxs("button",{type:"button",className:"btn-clouds",onClick:()=>n("join_modal"),children:[c.jsx(K,{width:"180",height:"85",iconName:"cloud",styles:`${t} cloud-icon`}),c.jsx("span",{children:"Підтримати проєкт"})]}),c.jsx("button",{type:"button",onClick:()=>n("menu_modal"),children:c.jsx(K,{width:"54",height:"47",iconName:"burger-menu",styles:`${t} burger-menu-icon`})})]})]})})})}function ja(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function vs(t,e){t===void 0&&(t={}),e===void 0&&(e={}),Object.keys(e).forEach(n=>{typeof t[n]>"u"?t[n]=e[n]:ja(e[n])&&ja(t[n])&&Object.keys(e[n]).length>0&&vs(t[n],e[n])})}const zl={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function qt(){const t=typeof document<"u"?document:{};return vs(t,zl),t}const Qf={document:zl,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function Me(){const t=typeof window<"u"?window:{};return vs(t,Qf),t}function qf(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function Yf(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function Ur(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function di(){return Date.now()}function Xf(t){const e=Me();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function Kf(t,e){e===void 0&&(e="x");const n=Me();let i,r,s;const a=Xf(t);return n.WebKitCSSMatrix?(r=a.transform||a.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(o=>o.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix(r==="none"?"":r)):(s=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=s.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?r=s.m41:i.length===16?r=parseFloat(i[12]):r=parseFloat(i[4])),e==="y"&&(n.WebKitCSSMatrix?r=s.m42:i.length===16?r=parseFloat(i[13]):r=parseFloat(i[5])),r||0}function Bn(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function Zf(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function Te(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const i=n<0||arguments.length<=n?void 0:arguments[n];if(i!=null&&!Zf(i)){const r=Object.keys(Object(i)).filter(s=>e.indexOf(s)<0);for(let s=0,a=r.length;s<a;s+=1){const o=r[s],l=Object.getOwnPropertyDescriptor(i,o);l!==void 0&&l.enumerable&&(Bn(t[o])&&Bn(i[o])?i[o].__swiper__?t[o]=i[o]:Te(t[o],i[o]):!Bn(t[o])&&Bn(i[o])?(t[o]={},i[o].__swiper__?t[o]=i[o]:Te(t[o],i[o])):t[o]=i[o])}}}return t}function Hn(t,e,n){t.style.setProperty(e,n)}function Fl(t){let{swiper:e,targetPosition:n,side:i}=t;const r=Me(),s=-e.translate;let a=null,o;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const u=n>s?"next":"prev",d=(h,g)=>u==="next"&&h>=g||u==="prev"&&h<=g,p=()=>{o=new Date().getTime(),a===null&&(a=o);const h=Math.max(Math.min((o-a)/l,1),0),g=.5-Math.cos(h*Math.PI)/2;let m=s+g*(n-s);if(d(m,n)&&(m=n),e.wrapperEl.scrollTo({[i]:m}),d(m,n)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:m})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(p)};p()}function Je(t,e){return e===void 0&&(e=""),[...t.children].filter(n=>n.matches(e))}function ui(t){try{console.warn(t);return}catch{}}function pi(t,e){e===void 0&&(e=[]);const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:qf(e)),n}function _f(t,e){const n=[];for(;t.previousElementSibling;){const i=t.previousElementSibling;e?i.matches(e)&&n.push(i):n.push(i),t=i}return n}function $f(t,e){const n=[];for(;t.nextElementSibling;){const i=t.nextElementSibling;e?i.matches(e)&&n.push(i):n.push(i),t=i}return n}function lt(t,e){return Me().getComputedStyle(t,null).getPropertyValue(e)}function fi(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function Dl(t,e){const n=[];let i=t.parentElement;for(;i;)e?i.matches(e)&&n.push(i):n.push(i),i=i.parentElement;return n}function Wr(t,e,n){const i=Me();return n?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}function fe(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}let pr;function eh(){const t=Me(),e=qt();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function Bl(){return pr||(pr=eh()),pr}let fr;function th(t){let{userAgent:e}=t===void 0?{}:t;const n=Bl(),i=Me(),r=i.navigator.platform,s=e||i.navigator.userAgent,a={ios:!1,android:!1},o=i.screen.width,l=i.screen.height,u=s.match(/(Android);?[\s\/]+([\d.]+)?/);let d=s.match(/(iPad).*OS\s([\d_]+)/);const p=s.match(/(iPod)(.*OS\s([\d_]+))?/),h=!d&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=r==="Win32";let m=r==="MacIntel";const b=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&m&&n.touch&&b.indexOf(`${o}x${l}`)>=0&&(d=s.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),m=!1),u&&!g&&(a.os="android",a.android=!0),(d||h||p)&&(a.os="ios",a.ios=!0),a}function Hl(t){return t===void 0&&(t={}),fr||(fr=th(t)),fr}let hr;function nh(){const t=Me(),e=Hl();let n=!1;function i(){const o=t.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(i()){const o=String(t.navigator.userAgent);if(o.includes("Version/")){const[l,u]=o.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=l<16||l===16&&u<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),s=i(),a=s||r&&e.ios;return{isSafari:n||s,needPerspectiveFix:n,need3dFix:a,isWebView:r}}function ih(){return hr||(hr=nh()),hr}function rh(t){let{swiper:e,on:n,emit:i}=t;const r=Me();let s=null,a=null;const o=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(p=>{a=r.requestAnimationFrame(()=>{const{width:h,height:g}=e;let m=h,b=g;p.forEach(v=>{let{contentBoxSize:f,contentRect:x,target:w}=v;w&&w!==e.el||(m=x?x.width:(f[0]||f).inlineSize,b=x?x.height:(f[0]||f).blockSize)}),(m!==h||b!==g)&&o()})}),s.observe(e.el))},u=()=>{a&&r.cancelAnimationFrame(a),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},d=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};n("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",o),r.addEventListener("orientationchange",d)}),n("destroy",()=>{u(),r.removeEventListener("resize",o),r.removeEventListener("orientationchange",d)})}function sh(t){let{swiper:e,extendParams:n,on:i,emit:r}=t;const s=[],a=Me(),o=function(d,p){p===void 0&&(p={});const h=a.MutationObserver||a.WebkitMutationObserver,g=new h(m=>{if(e.__preventObserver__)return;if(m.length===1){r("observerUpdate",m[0]);return}const b=function(){r("observerUpdate",m[0])};a.requestAnimationFrame?a.requestAnimationFrame(b):a.setTimeout(b,0)});g.observe(d,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:typeof p.childList>"u"?!0:p.childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),s.push(g)},l=()=>{if(e.params.observer){if(e.params.observeParents){const d=Dl(e.hostEl);for(let p=0;p<d.length;p+=1)o(d[p])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},u=()=>{s.forEach(d=>{d.disconnect()}),s.splice(0,s.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",l),i("destroy",u)}var ah={on(t,e,n){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const r=n?"unshift":"push";return t.split(" ").forEach(s=>{i.eventsListeners[s]||(i.eventsListeners[s]=[]),i.eventsListeners[s][r](e)}),i},once(t,e,n){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function r(){i.off(t,r),r.__emitterProxy&&delete r.__emitterProxy;for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];e.apply(i,a)}return r.__emitterProxy=e,i.on(t,r,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const i=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[i](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(i=>{typeof e>"u"?n.eventsListeners[i]=[]:n.eventsListeners[i]&&n.eventsListeners[i].forEach((r,s)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&n.eventsListeners[i].splice(s,1)})}),n},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,n,i;for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],n=s.slice(1,s.length),i=t):(e=s[0].events,n=s[0].data,i=s[0].context||t),n.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(u=>{u.apply(i,[l,...n])}),t.eventsListeners&&t.eventsListeners[l]&&t.eventsListeners[l].forEach(u=>{u.apply(i,n)})}),t}};function oh(){const t=this;let e,n;const i=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=i.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=i.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(lt(i,"padding-left")||0,10)-parseInt(lt(i,"padding-right")||0,10),n=n-parseInt(lt(i,"padding-top")||0,10)-parseInt(lt(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function lh(){const t=this;function e(O,I){return parseFloat(O.getPropertyValue(t.getDirectionLabel(I))||0)}const n=t.params,{wrapperEl:i,slidesEl:r,size:s,rtlTranslate:a,wrongRTL:o}=t,l=t.virtual&&n.virtual.enabled,u=l?t.virtual.slides.length:t.slides.length,d=Je(r,`.${t.params.slideClass}, swiper-slide`),p=l?t.virtual.slides.length:d.length;let h=[];const g=[],m=[];let b=n.slidesOffsetBefore;typeof b=="function"&&(b=n.slidesOffsetBefore.call(t));let v=n.slidesOffsetAfter;typeof v=="function"&&(v=n.slidesOffsetAfter.call(t));const f=t.snapGrid.length,x=t.slidesGrid.length;let w=n.spaceBetween,E=-b,M=0,T=0;if(typeof s>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*s:typeof w=="string"&&(w=parseFloat(w)),t.virtualSize=-w,d.forEach(O=>{a?O.style.marginLeft="":O.style.marginRight="",O.style.marginBottom="",O.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Hn(i,"--swiper-centered-offset-before",""),Hn(i,"--swiper-centered-offset-after",""));const j=n.grid&&n.grid.rows>1&&t.grid;j?t.grid.initSlides(d):t.grid&&t.grid.unsetSlides();let L;const N=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(O=>typeof n.breakpoints[O].slidesPerView<"u").length>0;for(let O=0;O<p;O+=1){L=0;let I;if(d[O]&&(I=d[O]),j&&t.grid.updateSlide(O,I,d),!(d[O]&&lt(I,"display")==="none")){if(n.slidesPerView==="auto"){N&&(d[O].style[t.getDirectionLabel("width")]="");const R=getComputedStyle(I),P=I.style.transform,k=I.style.webkitTransform;if(P&&(I.style.transform="none"),k&&(I.style.webkitTransform="none"),n.roundLengths)L=t.isHorizontal()?Wr(I,"width",!0):Wr(I,"height",!0);else{const z=e(R,"width"),Q=e(R,"padding-left"),A=e(R,"padding-right"),H=e(R,"margin-left"),G=e(R,"margin-right"),Z=R.getPropertyValue("box-sizing");if(Z&&Z==="border-box")L=z+H+G;else{const{clientWidth:te,offsetWidth:be}=I;L=z+Q+A+H+G+(be-te)}}P&&(I.style.transform=P),k&&(I.style.webkitTransform=k),n.roundLengths&&(L=Math.floor(L))}else L=(s-(n.slidesPerView-1)*w)/n.slidesPerView,n.roundLengths&&(L=Math.floor(L)),d[O]&&(d[O].style[t.getDirectionLabel("width")]=`${L}px`);d[O]&&(d[O].swiperSlideSize=L),m.push(L),n.centeredSlides?(E=E+L/2+M/2+w,M===0&&O!==0&&(E=E-s/2-w),O===0&&(E=E-s/2-w),Math.abs(E)<1/1e3&&(E=0),n.roundLengths&&(E=Math.floor(E)),T%n.slidesPerGroup===0&&h.push(E),g.push(E)):(n.roundLengths&&(E=Math.floor(E)),(T-Math.min(t.params.slidesPerGroupSkip,T))%t.params.slidesPerGroup===0&&h.push(E),g.push(E),E=E+L+w),t.virtualSize+=L+w,M=L,T+=1}}if(t.virtualSize=Math.max(t.virtualSize,s)+v,a&&o&&(n.effect==="slide"||n.effect==="coverflow")&&(i.style.width=`${t.virtualSize+w}px`),n.setWrapperSize&&(i.style[t.getDirectionLabel("width")]=`${t.virtualSize+w}px`),j&&t.grid.updateWrapperSize(L,h),!n.centeredSlides){const O=[];for(let I=0;I<h.length;I+=1){let R=h[I];n.roundLengths&&(R=Math.floor(R)),h[I]<=t.virtualSize-s&&O.push(R)}h=O,Math.floor(t.virtualSize-s)-Math.floor(h[h.length-1])>1&&h.push(t.virtualSize-s)}if(l&&n.loop){const O=m[0]+w;if(n.slidesPerGroup>1){const I=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/n.slidesPerGroup),R=O*n.slidesPerGroup;for(let P=0;P<I;P+=1)h.push(h[h.length-1]+R)}for(let I=0;I<t.virtual.slidesBefore+t.virtual.slidesAfter;I+=1)n.slidesPerGroup===1&&h.push(h[h.length-1]+O),g.push(g[g.length-1]+O),t.virtualSize+=O}if(h.length===0&&(h=[0]),w!==0){const O=t.isHorizontal()&&a?"marginLeft":t.getDirectionLabel("marginRight");d.filter((I,R)=>!n.cssMode||n.loop?!0:R!==d.length-1).forEach(I=>{I.style[O]=`${w}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let O=0;m.forEach(R=>{O+=R+(w||0)}),O-=w;const I=O-s;h=h.map(R=>R<=0?-b:R>I?I+v:R)}if(n.centerInsufficientSlides){let O=0;if(m.forEach(I=>{O+=I+(w||0)}),O-=w,O<s){const I=(s-O)/2;h.forEach((R,P)=>{h[P]=R-I}),g.forEach((R,P)=>{g[P]=R+I})}}if(Object.assign(t,{slides:d,snapGrid:h,slidesGrid:g,slidesSizesGrid:m}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Hn(i,"--swiper-centered-offset-before",`${-h[0]}px`),Hn(i,"--swiper-centered-offset-after",`${t.size/2-m[m.length-1]/2}px`);const O=-t.snapGrid[0],I=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(R=>R+O),t.slidesGrid=t.slidesGrid.map(R=>R+I)}if(p!==u&&t.emit("slidesLengthChange"),h.length!==f&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),g.length!==x&&t.emit("slidesGridLengthChange"),n.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const O=`${n.containerModifierClass}backface-hidden`,I=t.el.classList.contains(O);p<=n.maxBackfaceHiddenSlides?I||t.el.classList.add(O):I&&t.el.classList.remove(O)}}function ch(t){const e=this,n=[],i=e.virtual&&e.params.virtual.enabled;let r=0,s;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const a=o=>i?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{n.push(o)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const o=e.activeIndex+s;if(o>e.slides.length&&!i)break;n.push(a(o))}else n.push(a(e.activeIndex));for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const o=n[s].offsetHeight;r=o>r?o:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function dh(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(t.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-n-t.cssOverflowAdjustment()}function uh(t){t===void 0&&(t=this&&this.translate||0);const e=this,n=e.params,{slides:i,rtlTranslate:r,snapGrid:s}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-t;r&&(a=t),i.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=n.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<i.length;l+=1){const u=i[l];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=i[0].swiperSlideOffset);const p=(a+(n.centeredSlides?e.minTranslate():0)-d)/(u.swiperSlideSize+o),h=(a-s[0]+(n.centeredSlides?e.minTranslate():0)-d)/(u.swiperSlideSize+o),g=-(a-d),m=g+e.slidesSizesGrid[l],b=g>=0&&g<=e.size-e.slidesSizesGrid[l];(g>=0&&g<e.size-1||m>1&&m<=e.size||g<=0&&m>=e.size)&&(e.visibleSlides.push(u),e.visibleSlidesIndexes.push(l),i[l].classList.add(n.slideVisibleClass)),b&&i[l].classList.add(n.slideFullyVisibleClass),u.progress=r?-p:p,u.originalProgress=r?-h:h}}function ph(t){const e=this;if(typeof t>"u"){const d=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*d||0}const n=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:s,isEnd:a,progressLoop:o}=e;const l=s,u=a;if(i===0)r=0,s=!0,a=!0;else{r=(t-e.minTranslate())/i;const d=Math.abs(t-e.minTranslate())<1,p=Math.abs(t-e.maxTranslate())<1;s=d||r<=0,a=p||r>=1,d&&(r=0),p&&(r=1)}if(n.loop){const d=e.getSlideIndexByData(0),p=e.getSlideIndexByData(e.slides.length-1),h=e.slidesGrid[d],g=e.slidesGrid[p],m=e.slidesGrid[e.slidesGrid.length-1],b=Math.abs(t);b>=h?o=(b-h)/m:o=(b+m-g)/m,o>1&&(o-=1)}Object.assign(e,{progress:r,progressLoop:o,isBeginning:s,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),s&&!l&&e.emit("reachBeginning toEdge"),a&&!u&&e.emit("reachEnd toEdge"),(l&&!s||u&&!a)&&e.emit("fromEdge"),e.emit("progress",r)}const mr=(t,e,n)=>{e&&!t.classList.contains(n)?t.classList.add(n):!e&&t.classList.contains(n)&&t.classList.remove(n)};function fh(){const t=this,{slides:e,params:n,slidesEl:i,activeIndex:r}=t,s=t.virtual&&n.virtual.enabled,a=t.grid&&n.grid&&n.grid.rows>1,o=p=>Je(i,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let l,u,d;if(s)if(n.loop){let p=r-t.virtual.slidesBefore;p<0&&(p=t.virtual.slides.length+p),p>=t.virtual.slides.length&&(p-=t.virtual.slides.length),l=o(`[data-swiper-slide-index="${p}"]`)}else l=o(`[data-swiper-slide-index="${r}"]`);else a?(l=e.filter(p=>p.column===r)[0],d=e.filter(p=>p.column===r+1)[0],u=e.filter(p=>p.column===r-1)[0]):l=e[r];l&&(a||(d=$f(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=e[0]),u=_f(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=e[e.length-1]))),e.forEach(p=>{mr(p,p===l,n.slideActiveClass),mr(p,p===d,n.slideNextClass),mr(p,p===u,n.slidePrevClass)}),t.emitSlidesClasses()}const ei=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,i=e.closest(n());if(i){let r=i.querySelector(`.${t.params.lazyPreloaderClass}`);!r&&t.isElement&&(i.shadowRoot?r=i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(r=i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},gr=(t,e)=>{if(!t.slides[e])return;const n=t.slides[e].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Vr=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const n=t.slides.length;if(!n||!e||e<0)return;e=Math.min(e,n);const i=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),r=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const a=r,o=[a-e];o.push(...Array.from({length:e}).map((l,u)=>a+i+u)),t.slides.forEach((l,u)=>{o.includes(l.column)&&gr(t,u)});return}const s=r+i-1;if(t.params.rewind||t.params.loop)for(let a=r-e;a<=s+e;a+=1){const o=(a%n+n)%n;(o<r||o>s)&&gr(t,o)}else for(let a=Math.max(r-e,0);a<=Math.min(s+e,n-1);a+=1)a!==r&&(a>s||a<r)&&gr(t,a)};function hh(t){const{slidesGrid:e,params:n}=t,i=t.rtlTranslate?t.translate:-t.translate;let r;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?i>=e[s]&&i<e[s+1]-(e[s+1]-e[s])/2?r=s:i>=e[s]&&i<e[s+1]&&(r=s+1):i>=e[s]&&(r=s);return n.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function mh(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:r,activeIndex:s,realIndex:a,snapIndex:o}=e;let l=t,u;const d=g=>{let m=g-e.virtual.slidesBefore;return m<0&&(m=e.virtual.slides.length+m),m>=e.virtual.slides.length&&(m-=e.virtual.slides.length),m};if(typeof l>"u"&&(l=hh(e)),i.indexOf(n)>=0)u=i.indexOf(n);else{const g=Math.min(r.slidesPerGroupSkip,l);u=g+Math.floor((l-g)/r.slidesPerGroup)}if(u>=i.length&&(u=i.length-1),l===s&&!e.params.loop){u!==o&&(e.snapIndex=u,e.emit("snapIndexChange"));return}if(l===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=d(l);return}const p=e.grid&&r.grid&&r.grid.rows>1;let h;if(e.virtual&&r.virtual.enabled&&r.loop)h=d(l);else if(p){const g=e.slides.filter(b=>b.column===l)[0];let m=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(e.slides.indexOf(g),0)),h=Math.floor(m/r.grid.rows)}else if(e.slides[l]){const g=e.slides[l].getAttribute("data-swiper-slide-index");g?h=parseInt(g,10):h=l}else h=l;Object.assign(e,{previousSnapIndex:o,snapIndex:u,previousRealIndex:a,realIndex:h,previousIndex:s,activeIndex:l}),e.initialized&&Vr(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==h&&e.emit("realIndexChange"),e.emit("slideChange"))}function gh(t,e){const n=this,i=n.params;let r=t.closest(`.${i.slideClass}, swiper-slide`);!r&&n.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(o=>{!r&&o.matches&&o.matches(`.${i.slideClass}, swiper-slide`)&&(r=o)});let s=!1,a;if(r){for(let o=0;o<n.slides.length;o+=1)if(n.slides[o]===r){s=!0,a=o;break}}if(r&&s)n.clickedSlide=r,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}i.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var bh={updateSize:oh,updateSlides:lh,updateAutoHeight:ch,updateSlidesOffset:dh,updateSlidesProgress:uh,updateProgress:ph,updateSlidesClasses:fh,updateActiveIndex:mh,updateClickedSlide:gh};function xh(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:n,rtlTranslate:i,translate:r,wrapperEl:s}=e;if(n.virtualTranslate)return i?-r:r;if(n.cssMode)return r;let a=Kf(s,t);return a+=e.cssOverflowAdjustment(),i&&(a=-a),a||0}function vh(t,e){const n=this,{rtlTranslate:i,params:r,wrapperEl:s,progress:a}=n;let o=0,l=0;const u=0;n.isHorizontal()?o=i?-t:t:l=t,r.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?o:l,r.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-o:-l:r.virtualTranslate||(n.isHorizontal()?o-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${o}px, ${l}px, ${u}px)`);let d;const p=n.maxTranslate()-n.minTranslate();p===0?d=0:d=(t-n.minTranslate())/p,d!==a&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function wh(){return-this.snapGrid[0]}function yh(){return-this.snapGrid[this.snapGrid.length-1]}function Sh(t,e,n,i,r){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),i===void 0&&(i=!0);const s=this,{params:a,wrapperEl:o}=s;if(s.animating&&a.preventInteractionOnTransition)return!1;const l=s.minTranslate(),u=s.maxTranslate();let d;if(i&&t>l?d=l:i&&t<u?d=u:d=t,s.updateProgress(d),a.cssMode){const p=s.isHorizontal();if(e===0)o[p?"scrollLeft":"scrollTop"]=-d;else{if(!s.support.smoothScroll)return Fl({swiper:s,targetPosition:-d,side:p?"left":"top"}),!0;o.scrollTo({[p?"left":"top"]:-d,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(d),n&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(d),n&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(h){!s||s.destroyed||h.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var Ah={getTranslate:xh,setTranslate:vh,minTranslate:wh,maxTranslate:yh,translateTo:Sh};function Eh(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`,n.wrapperEl.style.transitionDelay=t===0?"0ms":""),n.emit("setTransition",t,e)}function Ul(t){let{swiper:e,runCallbacks:n,direction:i,step:r}=t;const{activeIndex:s,previousIndex:a}=e;let o=i;if(o||(s>a?o="next":s<a?o="prev":o="reset"),e.emit(`transition${r}`),n&&s!==a){if(o==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),o==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function Th(t,e){t===void 0&&(t=!0);const n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),Ul({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function Ch(t,e){t===void 0&&(t=!0);const n=this,{params:i}=n;n.animating=!1,!i.cssMode&&(n.setTransition(0),Ul({swiper:n,runCallbacks:t,direction:e,step:"End"}))}var Mh={setTransition:Eh,transitionStart:Th,transitionEnd:Ch};function jh(t,e,n,i,r){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const s=this;let a=t;a<0&&(a=0);const{params:o,snapGrid:l,slidesGrid:u,previousIndex:d,activeIndex:p,rtlTranslate:h,wrapperEl:g,enabled:m}=s;if(!m&&!i&&!r||s.destroyed||s.animating&&o.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const b=Math.min(s.params.slidesPerGroupSkip,a);let v=b+Math.floor((a-b)/s.params.slidesPerGroup);v>=l.length&&(v=l.length-1);const f=-l[v];if(o.normalizeSlideIndex)for(let w=0;w<u.length;w+=1){const E=-Math.floor(f*100),M=Math.floor(u[w]*100),T=Math.floor(u[w+1]*100);typeof u[w+1]<"u"?E>=M&&E<T-(T-M)/2?a=w:E>=M&&E<T&&(a=w+1):E>=M&&(a=w)}if(s.initialized&&a!==p&&(!s.allowSlideNext&&(h?f>s.translate&&f>s.minTranslate():f<s.translate&&f<s.minTranslate())||!s.allowSlidePrev&&f>s.translate&&f>s.maxTranslate()&&(p||0)!==a))return!1;a!==(d||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(f);let x;if(a>p?x="next":a<p?x="prev":x="reset",h&&-f===s.translate||!h&&f===s.translate)return s.updateActiveIndex(a),o.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),o.effect!=="slide"&&s.setTranslate(f),x!=="reset"&&(s.transitionStart(n,x),s.transitionEnd(n,x)),!1;if(o.cssMode){const w=s.isHorizontal(),E=h?f:-f;if(e===0){const M=s.virtual&&s.params.virtual.enabled;M&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),M&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[w?"scrollLeft":"scrollTop"]=E})):g[w?"scrollLeft":"scrollTop"]=E,M&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return Fl({swiper:s,targetPosition:E,side:w?"left":"top"}),!0;g.scrollTo({[w?"left":"top"]:E,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(f),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,i),s.transitionStart(n,x),e===0?s.transitionEnd(n,x):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(E){!s||s.destroyed||E.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,x))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function Oh(t,e,n,i){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);const s=r.grid&&r.params.grid&&r.params.grid.rows>1;let a=t;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)a=a+r.virtual.slidesBefore;else{let o;if(s){const h=a*r.params.grid.rows;o=r.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===h)[0].column}else o=r.getSlideIndexByData(a);const l=s?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:u}=r.params;let d=r.params.slidesPerView;d==="auto"?d=r.slidesPerViewDynamic():(d=Math.ceil(parseFloat(r.params.slidesPerView,10)),u&&d%2===0&&(d=d+1));let p=l-o<d;if(u&&(p=p||o<Math.ceil(d/2)),i&&u&&r.params.slidesPerView!=="auto"&&!s&&(p=!1),p){const h=u?o<r.activeIndex?"prev":"next":o-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?o+1:o-l+1,slideRealIndex:h==="next"?r.realIndex:void 0})}if(s){const h=a*r.params.grid.rows;a=r.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===h)[0].column}else a=r.getSlideIndexByData(a)}return requestAnimationFrame(()=>{r.slideTo(a,e,n,i)}),r}function kh(t,e,n){e===void 0&&(e=!0);const i=this,{enabled:r,params:s,animating:a}=i;if(!r||i.destroyed)return i;typeof t>"u"&&(t=i.params.speed);let o=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(o=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<s.slidesPerGroupSkip?1:o,u=i.virtual&&s.virtual.enabled;if(s.loop){if(a&&!u&&s.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,t,e,n)}),!0}return s.rewind&&i.isEnd?i.slideTo(0,t,e,n):i.slideTo(i.activeIndex+l,t,e,n)}function Ph(t,e,n){e===void 0&&(e=!0);const i=this,{params:r,snapGrid:s,slidesGrid:a,rtlTranslate:o,enabled:l,animating:u}=i;if(!l||i.destroyed)return i;typeof t>"u"&&(t=i.params.speed);const d=i.virtual&&r.virtual.enabled;if(r.loop){if(u&&!d&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const p=o?i.translate:-i.translate;function h(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const g=h(p),m=s.map(f=>h(f));let b=s[m.indexOf(g)-1];if(typeof b>"u"&&r.cssMode){let f;s.forEach((x,w)=>{g>=x&&(f=w)}),typeof f<"u"&&(b=s[f>0?f-1:f])}let v=0;if(typeof b<"u"&&(v=a.indexOf(b),v<0&&(v=i.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(v=v-i.slidesPerViewDynamic("previous",!0)+1,v=Math.max(v,0))),r.rewind&&i.isBeginning){const f=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(f,t,e,n)}else if(r.loop&&i.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(v,t,e,n)}),!0;return i.slideTo(v,t,e,n)}function Ih(t,e,n){e===void 0&&(e=!0);const i=this;if(!i.destroyed)return typeof t>"u"&&(t=i.params.speed),i.slideTo(i.activeIndex,t,e,n)}function Nh(t,e,n,i){e===void 0&&(e=!0),i===void 0&&(i=.5);const r=this;if(r.destroyed)return;typeof t>"u"&&(t=r.params.speed);let s=r.activeIndex;const a=Math.min(r.params.slidesPerGroupSkip,s),o=a+Math.floor((s-a)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[o]){const u=r.snapGrid[o],d=r.snapGrid[o+1];l-u>(d-u)*i&&(s+=r.params.slidesPerGroup)}else{const u=r.snapGrid[o-1],d=r.snapGrid[o];l-u<=(d-u)*i&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,t,e,n)}function Rh(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:n}=t,i=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let r=t.clickedIndex,s;const a=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;s=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<t.loopedSlides-i/2||r>t.slides.length-t.loopedSlides+i/2?(t.loopFix(),r=t.getSlideIndex(Je(n,`${a}[data-swiper-slide-index="${s}"]`)[0]),Ur(()=>{t.slideTo(r)})):t.slideTo(r):r>t.slides.length-i?(t.loopFix(),r=t.getSlideIndex(Je(n,`${a}[data-swiper-slide-index="${s}"]`)[0]),Ur(()=>{t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}var Lh={slideTo:jh,slideToLoop:Oh,slideNext:kh,slidePrev:Ph,slideReset:Ih,slideToClosest:Nh,slideToClickedSlide:Rh};function zh(t){const e=this,{params:n,slidesEl:i}=e;if(!n.loop||e.virtual&&e.params.virtual.enabled)return;const r=()=>{Je(i,`.${n.slideClass}, swiper-slide`).forEach((p,h)=>{p.setAttribute("data-swiper-slide-index",h)})},s=e.grid&&n.grid&&n.grid.rows>1,a=n.slidesPerGroup*(s?n.grid.rows:1),o=e.slides.length%a!==0,l=s&&e.slides.length%n.grid.rows!==0,u=d=>{for(let p=0;p<d;p+=1){const h=e.isElement?pi("swiper-slide",[n.slideBlankClass]):pi("div",[n.slideClass,n.slideBlankClass]);e.slidesEl.append(h)}};if(o){if(n.loopAddBlankSlides){const d=a-e.slides.length%a;u(d),e.recalcSlides(),e.updateSlides()}else ui("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(l){if(n.loopAddBlankSlides){const d=n.grid.rows-e.slides.length%n.grid.rows;u(d),e.recalcSlides(),e.updateSlides()}else ui("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();e.loopFix({slideRealIndex:t,direction:n.centeredSlides?void 0:"next"})}function Fh(t){let{slideRealIndex:e,slideTo:n=!0,direction:i,setTranslate:r,activeSlideIndex:s,byController:a,byMousewheel:o}=t===void 0?{}:t;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:p,slidesEl:h,params:g}=l,{centeredSlides:m}=g;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&g.virtual.enabled){n&&(!g.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):g.centeredSlides&&l.snapIndex<g.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=p,l.emit("loopFix");return}let b=g.slidesPerView;b==="auto"?b=l.slidesPerViewDynamic():(b=Math.ceil(parseFloat(g.slidesPerView,10)),m&&b%2===0&&(b=b+1));const v=g.slidesPerGroupAuto?b:g.slidesPerGroup;let f=v;f%v!==0&&(f+=v-f%v),f+=g.loopAdditionalSlides,l.loopedSlides=f;const x=l.grid&&g.grid&&g.grid.rows>1;u.length<b+f?ui("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):x&&g.grid.fill==="row"&&ui("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const w=[],E=[];let M=l.activeIndex;typeof s>"u"?s=l.getSlideIndex(u.filter(P=>P.classList.contains(g.slideActiveClass))[0]):M=s;const T=i==="next"||!i,j=i==="prev"||!i;let L=0,N=0;const O=x?Math.ceil(u.length/g.grid.rows):u.length,R=(x?u[s].column:s)+(m&&typeof r>"u"?-b/2+.5:0);if(R<f){L=Math.max(f-R,v);for(let P=0;P<f-R;P+=1){const k=P-Math.floor(P/O)*O;if(x){const z=O-k-1;for(let Q=u.length-1;Q>=0;Q-=1)u[Q].column===z&&w.push(Q)}else w.push(O-k-1)}}else if(R+b>O-f){N=Math.max(R-(O-f*2),v);for(let P=0;P<N;P+=1){const k=P-Math.floor(P/O)*O;x?u.forEach((z,Q)=>{z.column===k&&E.push(Q)}):E.push(k)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),j&&w.forEach(P=>{u[P].swiperLoopMoveDOM=!0,h.prepend(u[P]),u[P].swiperLoopMoveDOM=!1}),T&&E.forEach(P=>{u[P].swiperLoopMoveDOM=!0,h.append(u[P]),u[P].swiperLoopMoveDOM=!1}),l.recalcSlides(),g.slidesPerView==="auto"?l.updateSlides():x&&(w.length>0&&j||E.length>0&&T)&&l.slides.forEach((P,k)=>{l.grid.updateSlide(k,P,l.slides)}),g.watchSlidesProgress&&l.updateSlidesOffset(),n){if(w.length>0&&j){if(typeof e>"u"){const P=l.slidesGrid[M],z=l.slidesGrid[M+L]-P;o?l.setTranslate(l.translate-z):(l.slideTo(M+Math.ceil(L),0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-z,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-z))}else if(r){const P=x?w.length/g.grid.rows:w.length;l.slideTo(l.activeIndex+P,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(E.length>0&&T)if(typeof e>"u"){const P=l.slidesGrid[M],z=l.slidesGrid[M-N]-P;o?l.setTranslate(l.translate-z):(l.slideTo(M-N,0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-z,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-z))}else{const P=x?E.length/g.grid.rows:E.length;l.slideTo(l.activeIndex-P,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=p,l.controller&&l.controller.control&&!a){const P={slideRealIndex:e,direction:i,setTranslate:r,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(k=>{!k.destroyed&&k.params.loop&&k.loopFix({...P,slideTo:k.params.slidesPerView===g.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...P,slideTo:l.controller.control.params.slidesPerView===g.slidesPerView?n:!1})}l.emit("loopFix")}function Dh(){const t=this,{params:e,slidesEl:n}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const i=[];t.slides.forEach(r=>{const s=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;i[s]=r}),t.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),i.forEach(r=>{n.append(r)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var Bh={loopCreate:zh,loopFix:Fh,loopDestroy:Dh};function Hh(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Uh(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var Wh={setGrabCursor:Hh,unsetGrabCursor:Uh};function Vh(t,e){e===void 0&&(e=this);function n(i){if(!i||i===qt()||i===Me())return null;i.assignedSlot&&(i=i.assignedSlot);const r=i.closest(t);return!r&&!i.getRootNode?null:r||n(i.getRootNode().host)}return n(e)}function Oa(t,e,n){const i=Me(),{params:r}=t,s=r.edgeSwipeDetection,a=r.edgeSwipeThreshold;return s&&(n<=a||n>=i.innerWidth-a)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function Gh(t){const e=this,n=qt();let i=t;i.originalEvent&&(i=i.originalEvent);const r=e.touchEventsData;if(i.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==i.pointerId)return;r.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(r.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){Oa(e,i,i.targetTouches[0].pageX);return}const{params:s,touches:a,enabled:o}=e;if(!o||!s.simulateTouch&&i.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=i.target;if(s.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in i&&i.which===3||"button"in i&&i.button>0||r.isTouched&&r.isMoved)return;const u=!!s.noSwipingClass&&s.noSwipingClass!=="",d=i.composedPath?i.composedPath():i.path;u&&i.target&&i.target.shadowRoot&&d&&(l=d[0]);const p=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,h=!!(i.target&&i.target.shadowRoot);if(s.noSwiping&&(h?Vh(p,l):l.closest(p))){e.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;a.currentX=i.pageX,a.currentY=i.pageY;const g=a.currentX,m=a.currentY;if(!Oa(e,i,g))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=g,a.startY=m,r.touchStartTime=di(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let b=!0;l.matches(r.focusableElements)&&(b=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),n.activeElement&&n.activeElement.matches(r.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const v=b&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||v)&&!l.isContentEditable&&i.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function Jh(t){const e=qt(),n=this,i=n.touchEventsData,{params:r,touches:s,rtlTranslate:a,enabled:o}=n;if(!o||!r.simulateTouch&&t.pointerType==="mouse")return;let l=t;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].filter(T=>T.identifier===i.touchId)[0],!u||u.identifier!==i.touchId)return}else u=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&n.emit("touchMoveOpposite",l);return}const d=u.pageX,p=u.pageY;if(l.preventedByNestedSwiper){s.startX=d,s.startY=p;return}if(!n.allowTouchMove){l.target.matches(i.focusableElements)||(n.allowClick=!1),i.isTouched&&(Object.assign(s,{startX:d,startY:p,currentX:d,currentY:p}),i.touchStartTime=di());return}if(r.touchReleaseOnEdges&&!r.loop){if(n.isVertical()){if(p<s.startY&&n.translate<=n.maxTranslate()||p>s.startY&&n.translate>=n.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(d<s.startX&&n.translate<=n.maxTranslate()||d>s.startX&&n.translate>=n.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,n.allowClick=!1;return}i.allowTouchCallbacks&&n.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=d,s.currentY=p;const h=s.currentX-s.startX,g=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(h**2+g**2)<n.params.threshold)return;if(typeof i.isScrolling>"u"){let T;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?i.isScrolling=!1:h*h+g*g>=25&&(T=Math.atan2(Math.abs(g),Math.abs(h))*180/Math.PI,i.isScrolling=n.isHorizontal()?T>r.touchAngle:90-T>r.touchAngle)}if(i.isScrolling&&n.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(i.startMoving=!0),i.isScrolling||l.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;n.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let m=n.isHorizontal()?h:g,b=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),b=Math.abs(b)*(a?1:-1)),s.diff=m,m*=r.touchRatio,a&&(m=-m,b=-b);const v=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=b>0?"prev":"next";const f=n.params.loop&&!r.cssMode,x=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!i.isMoved){if(f&&x&&n.loopFix({direction:n.swipeDirection}),i.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(T)}i.allowMomentumBounce=!1,r.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let w;if(new Date().getTime(),i.isMoved&&i.allowThresholdMove&&v!==n.touchesDirection&&f&&x&&Math.abs(m)>=1){Object.assign(s,{startX:d,startY:p,currentX:d,currentY:p,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}n.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=m+i.startTranslate;let E=!0,M=r.resistanceRatio;if(r.touchReleaseOnEdges&&(M=0),m>0?(f&&x&&!w&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>n.minTranslate()&&(E=!1,r.resistance&&(i.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+i.startTranslate+m)**M))):m<0&&(f&&x&&!w&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(r.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<n.maxTranslate()&&(E=!1,r.resistance&&(i.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-i.startTranslate-m)**M))),E&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(i.currentTranslate=i.startTranslate),r.threshold>0)if(Math.abs(m)>r.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,i.currentTranslate=i.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{i.currentTranslate=i.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&n.freeMode||r.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(i.currentTranslate),n.setTranslate(i.currentTranslate))}function Qh(t){const e=this,n=e.touchEventsData;let i=t;i.originalEvent&&(i=i.originalEvent);let r;if(i.type==="touchend"||i.type==="touchcancel"){if(r=[...i.changedTouches].filter(M=>M.identifier===n.touchId)[0],!r||r.identifier!==n.touchId)return}else{if(n.touchId!==null||i.pointerId!==n.pointerId)return;r=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:o,rtlTranslate:l,slidesGrid:u,enabled:d}=e;if(!d||!a.simulateTouch&&i.pointerType==="mouse")return;if(n.allowTouchCallbacks&&e.emit("touchEnd",i),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const p=di(),h=p-n.touchStartTime;if(e.allowClick){const M=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(M&&M[0]||i.target,M),e.emit("tap click",i),h<300&&p-n.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(n.lastClickTime=di(),Ur(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||o.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(a.followFinger?g=l?e.translate:-e.translate:g=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:g});return}const m=g>=-e.maxTranslate()&&!e.params.loop;let b=0,v=e.slidesSizesGrid[0];for(let M=0;M<u.length;M+=M<a.slidesPerGroupSkip?1:a.slidesPerGroup){const T=M<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[M+T]<"u"?(m||g>=u[M]&&g<u[M+T])&&(b=M,v=u[M+T]-u[M]):(m||g>=u[M])&&(b=M,v=u[u.length-1]-u[u.length-2])}let f=null,x=null;a.rewind&&(e.isBeginning?x=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(f=0));const w=(g-u[b])/v,E=b<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(h>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(w>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?f:b+E):e.slideTo(b)),e.swipeDirection==="prev"&&(w>1-a.longSwipesRatio?e.slideTo(b+E):x!==null&&w<0&&Math.abs(w)>a.longSwipesRatio?e.slideTo(x):e.slideTo(b))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(b+E):e.slideTo(b):(e.swipeDirection==="next"&&e.slideTo(f!==null?f:b+E),e.swipeDirection==="prev"&&e.slideTo(x!==null?x:b))}}function ka(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:s}=t,a=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const o=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!o?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!a?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=r,t.allowSlideNext=i,t.params.watchOverflow&&s!==t.snapGrid&&t.checkOverflow()}function qh(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function Yh(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:i}=t;if(!i)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let r;const s=t.maxTranslate()-t.minTranslate();s===0?r=0:r=(t.translate-t.minTranslate())/s,r!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function Xh(t){const e=this;ei(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Kh(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const Wl=(t,e)=>{const n=qt(),{params:i,el:r,wrapperEl:s,device:a}=t,o=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",u=e;n[l]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:o}),r[l]("touchstart",t.onTouchStart,{passive:!1}),r[l]("pointerdown",t.onTouchStart,{passive:!1}),n[l]("touchmove",t.onTouchMove,{passive:!1,capture:o}),n[l]("pointermove",t.onTouchMove,{passive:!1,capture:o}),n[l]("touchend",t.onTouchEnd,{passive:!0}),n[l]("pointerup",t.onTouchEnd,{passive:!0}),n[l]("pointercancel",t.onTouchEnd,{passive:!0}),n[l]("touchcancel",t.onTouchEnd,{passive:!0}),n[l]("pointerout",t.onTouchEnd,{passive:!0}),n[l]("pointerleave",t.onTouchEnd,{passive:!0}),n[l]("contextmenu",t.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[l]("click",t.onClick,!0),i.cssMode&&s[l]("scroll",t.onScroll),i.updateOnWindowResize?t[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",ka,!0):t[u]("observerUpdate",ka,!0),r[l]("load",t.onLoad,{capture:!0})};function Zh(){const t=this,{params:e}=t;t.onTouchStart=Gh.bind(t),t.onTouchMove=Jh.bind(t),t.onTouchEnd=Qh.bind(t),t.onDocumentTouchStart=Kh.bind(t),e.cssMode&&(t.onScroll=Yh.bind(t)),t.onClick=qh.bind(t),t.onLoad=Xh.bind(t),Wl(t,"on")}function _h(){Wl(this,"off")}var $h={attachEvents:Zh,detachEvents:_h};const Pa=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function em(){const t=this,{realIndex:e,initialized:n,params:i,el:r}=t,s=i.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const a=t.getBreakpoint(s,t.params.breakpointsBase,t.el);if(!a||t.currentBreakpoint===a)return;const l=(a in s?s[a]:void 0)||t.originalParams,u=Pa(t,i),d=Pa(t,l),p=t.params.grabCursor,h=l.grabCursor,g=i.enabled;u&&!d?(r.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),t.emitContainerClasses()):!u&&d&&(r.classList.add(`${i.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&i.grid.fill==="column")&&r.classList.add(`${i.containerModifierClass}grid-column`),t.emitContainerClasses()),p&&!h?t.unsetGrabCursor():!p&&h&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(w=>{if(typeof l[w]>"u")return;const E=i[w]&&i[w].enabled,M=l[w]&&l[w].enabled;E&&!M&&t[w].disable(),!E&&M&&t[w].enable()});const m=l.direction&&l.direction!==i.direction,b=i.loop&&(l.slidesPerView!==i.slidesPerView||m),v=i.loop;m&&n&&t.changeDirection(),Te(t.params,l);const f=t.params.enabled,x=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),g&&!f?t.disable():!g&&f&&t.enable(),t.currentBreakpoint=a,t.emit("_beforeBreakpoint",l),n&&(b?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!v&&x?(t.loopCreate(e),t.updateSlides()):v&&!x&&t.loopDestroy()),t.emit("breakpoint",l)}function tm(t,e,n){if(e===void 0&&(e="window"),!t||e==="container"&&!n)return;let i=!1;const r=Me(),s=e==="window"?r.innerHeight:n.clientHeight,a=Object.keys(t).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:s*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){const{point:l,value:u}=a[o];e==="window"?r.matchMedia(`(min-width: ${u}px)`).matches&&(i=l):u<=n.clientWidth&&(i=l)}return i||"max"}var nm={setBreakpoint:em,getBreakpoint:tm};function im(t,e){const n=[];return t.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(r=>{i[r]&&n.push(e+r)}):typeof i=="string"&&n.push(e+i)}),n}function rm(){const t=this,{classNames:e,params:n,rtl:i,el:r,device:s}=t,a=im(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...a),r.classList.add(...e),t.emitContainerClasses()}function sm(){const t=this,{el:e,classNames:n}=t;e.classList.remove(...n),t.emitContainerClasses()}var am={addClasses:rm,removeClasses:sm};function om(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:i}=n;if(i){const r=t.slides.length-1,s=t.slidesGrid[r]+t.slidesSizesGrid[r]+i*2;t.isLocked=t.size>s}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var lm={checkOverflow:om},Gr={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function cm(t,e){return function(i){i===void 0&&(i={});const r=Object.keys(i)[0],s=i[r];if(typeof s!="object"||s===null){Te(e,i);return}if(t[r]===!0&&(t[r]={enabled:!0}),r==="navigation"&&t[r]&&t[r].enabled&&!t[r].prevEl&&!t[r].nextEl&&(t[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&t[r]&&t[r].enabled&&!t[r].el&&(t[r].auto=!0),!(r in t&&"enabled"in s)){Te(e,i);return}typeof t[r]=="object"&&!("enabled"in t[r])&&(t[r].enabled=!0),t[r]||(t[r]={enabled:!1}),Te(e,i)}}const br={eventsEmitter:ah,update:bh,translate:Ah,transition:Mh,slide:Lh,loop:Bh,grabCursor:Wh,events:$h,breakpoints:nm,checkOverflow:lm,classes:am},xr={};let ws=class $e{constructor(){let e,n;for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?n=r[0]:[e,n]=r,n||(n={}),n=Te({},n),e&&!n.el&&(n.el=e);const a=qt();if(n.el&&typeof n.el=="string"&&a.querySelectorAll(n.el).length>1){const d=[];return a.querySelectorAll(n.el).forEach(p=>{const h=Te({},n,{el:p});d.push(new $e(h))}),d}const o=this;o.__swiper__=!0,o.support=Bl(),o.device=Hl({userAgent:n.userAgent}),o.browser=ih(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],n.modules&&Array.isArray(n.modules)&&o.modules.push(...n.modules);const l={};o.modules.forEach(d=>{d({params:n,swiper:o,extendParams:cm(n,l),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const u=Te({},Gr,l);return o.params=Te({},u,xr,n),o.originalParams=Te({},o.params),o.passedParams=Te({},n),o.params&&o.params.on&&Object.keys(o.params.on).forEach(d=>{o.on(d,o.params.on[d])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:n,params:i}=this,r=Je(n,`.${i.slideClass}, swiper-slide`),s=fi(r[0]);return fi(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:n,params:i}=e;e.slides=Je(n,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const i=this;e=Math.min(Math.max(e,0),1);const r=i.minTranslate(),a=(i.maxTranslate()-r)*e+r;i.translateTo(a,typeof n>"u"?0:n),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(i=>{const r=e.getSlideClasses(i);n.push({slideEl:i,classNames:r}),e.emit("_slideClass",i,r)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e,n){e===void 0&&(e="current"),n===void 0&&(n=!1);const i=this,{params:r,slides:s,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:u}=i;let d=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let p=s[u]?Math.ceil(s[u].swiperSlideSize):0,h;for(let g=u+1;g<s.length;g+=1)s[g]&&!h&&(p+=Math.ceil(s[g].swiperSlideSize),d+=1,p>l&&(h=!0));for(let g=u-1;g>=0;g-=1)s[g]&&!h&&(p+=s[g].swiperSlideSize,d+=1,p>l&&(h=!0))}else if(e==="current")for(let p=u+1;p<s.length;p+=1)(n?a[p]+o[p]-a[u]<l:a[p]-a[u]<l)&&(d+=1);else for(let p=u-1;p>=0;p-=1)a[u]-a[p]<l&&(d+=1);return d}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&ei(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const a=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)r(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const a=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(a.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||r()}i.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n){n===void 0&&(n=!0);const i=this,r=i.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${r}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),i.emit("changeDirection"),n&&i.update()),i}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let i=e||n.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=n,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const r=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(r()):Je(i,r())[0])();return!a&&n.params.createElements&&(a=pi("div",n.params.wrapperClass),i.append(a),Je(i,`.${n.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(n,{el:i,wrapperEl:a,slidesEl:n.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:a,hostEl:n.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||lt(i,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||lt(i,"direction")==="rtl"),wrongRTL:lt(a,"display")==="-webkit-box"}),!0}init(e){const n=this;if(n.initialized||n.mount(e)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const r=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&r.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(s=>{s.complete?ei(n,s):s.addEventListener("load",a=>{ei(n,a.target)})}),Vr(n),n.initialized=!0,Vr(n),n.emit("init"),n.emit("afterInit"),n}destroy(e,n){e===void 0&&(e=!0),n===void 0&&(n=!0);const i=this,{params:r,el:s,wrapperEl:a,slides:o}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),r.loop&&i.loopDestroy(),n&&(i.removeClasses(),s.removeAttribute("style"),a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el.swiper=null,Yf(i)),i.destroyed=!0),null}static extendDefaults(e){Te(xr,e)}static get extendedDefaults(){return xr}static get defaults(){return Gr}static installModule(e){$e.prototype.__modules__||($e.prototype.__modules__=[]);const n=$e.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>$e.installModule(n)),$e):($e.installModule(e),$e)}};Object.keys(br).forEach(t=>{Object.keys(br[t]).forEach(e=>{ws.prototype[e]=br[t][e]})});ws.use([rh,sh]);const Vl=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function St(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function zt(t,e){const n=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>n.indexOf(i)<0).forEach(i=>{typeof t[i]>"u"?t[i]=e[i]:St(e[i])&&St(t[i])&&Object.keys(e[i]).length>0?e[i].__swiper__?t[i]=e[i]:zt(t[i],e[i]):t[i]=e[i]})}function Gl(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function Jl(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function Ql(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function ql(t){t===void 0&&(t="");const e=t.split(" ").map(i=>i.trim()).filter(i=>!!i),n=[];return e.forEach(i=>{n.indexOf(i)<0&&n.push(i)}),n.join(" ")}function dm(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function um(t){let{swiper:e,slides:n,passedParams:i,changedParams:r,nextEl:s,prevEl:a,scrollbarEl:o,paginationEl:l}=t;const u=r.filter(N=>N!=="children"&&N!=="direction"&&N!=="wrapperClass"),{params:d,pagination:p,navigation:h,scrollbar:g,virtual:m,thumbs:b}=e;let v,f,x,w,E,M,T,j;r.includes("thumbs")&&i.thumbs&&i.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(v=!0),r.includes("controller")&&i.controller&&i.controller.control&&d.controller&&!d.controller.control&&(f=!0),r.includes("pagination")&&i.pagination&&(i.pagination.el||l)&&(d.pagination||d.pagination===!1)&&p&&!p.el&&(x=!0),r.includes("scrollbar")&&i.scrollbar&&(i.scrollbar.el||o)&&(d.scrollbar||d.scrollbar===!1)&&g&&!g.el&&(w=!0),r.includes("navigation")&&i.navigation&&(i.navigation.prevEl||a)&&(i.navigation.nextEl||s)&&(d.navigation||d.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(E=!0);const L=N=>{e[N]&&(e[N].destroy(),N==="navigation"?(e.isElement&&(e[N].prevEl.remove(),e[N].nextEl.remove()),d[N].prevEl=void 0,d[N].nextEl=void 0,e[N].prevEl=void 0,e[N].nextEl=void 0):(e.isElement&&e[N].el.remove(),d[N].el=void 0,e[N].el=void 0))};r.includes("loop")&&e.isElement&&(d.loop&&!i.loop?M=!0:!d.loop&&i.loop?T=!0:j=!0),u.forEach(N=>{if(St(d[N])&&St(i[N]))Object.assign(d[N],i[N]),(N==="navigation"||N==="pagination"||N==="scrollbar")&&"enabled"in i[N]&&!i[N].enabled&&L(N);else{const O=i[N];(O===!0||O===!1)&&(N==="navigation"||N==="pagination"||N==="scrollbar")?O===!1&&L(N):d[N]=i[N]}}),u.includes("controller")&&!f&&e.controller&&e.controller.control&&d.controller&&d.controller.control&&(e.controller.control=d.controller.control),r.includes("children")&&n&&m&&d.virtual.enabled?(m.slides=n,m.update(!0)):r.includes("virtual")&&m&&d.virtual.enabled&&(n&&(m.slides=n),m.update(!0)),r.includes("children")&&n&&d.loop&&(j=!0),v&&b.init()&&b.update(!0),f&&(e.controller.control=d.controller.control),x&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(d.pagination.el=l),p.init(),p.render(),p.update()),w&&(e.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-scrollbar"),o.part.add("scrollbar"),e.el.appendChild(o)),o&&(d.scrollbar.el=o),g.init(),g.updateSize(),g.setTranslate()),E&&(e.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),s.innerHTML=e.hostEl.constructor.nextButtonSvg,s.part.add("button-next"),e.el.appendChild(s)),(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-prev"),a.innerHTML=e.hostEl.constructor.prevButtonSvg,a.part.add("button-prev"),e.el.appendChild(a))),s&&(d.navigation.nextEl=s),a&&(d.navigation.prevEl=a),h.init(),h.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=i.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=i.allowSlidePrev),r.includes("direction")&&e.changeDirection(i.direction,!1),(M||j)&&e.loopDestroy(),(T||j)&&e.loopCreate(),e.update()}function pm(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const n={on:{}},i={},r={};zt(n,Gr),n._emitClasses=!0,n.init=!1;const s={},a=Vl.map(l=>l.replace(/_/,"")),o=Object.assign({},t);return Object.keys(o).forEach(l=>{typeof t[l]>"u"||(a.indexOf(l)>=0?St(t[l])?(n[l]={},r[l]={},zt(n[l],t[l]),zt(r[l],t[l])):(n[l]=t[l],r[l]=t[l]):l.search(/on[A-Z]/)===0&&typeof t[l]=="function"?e?i[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:s[l]=t[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:r,rest:s,events:i}}function fm(t,e){let{el:n,nextEl:i,prevEl:r,paginationEl:s,scrollbarEl:a,swiper:o}=t;Gl(e)&&i&&r&&(o.params.navigation.nextEl=i,o.originalParams.navigation.nextEl=i,o.params.navigation.prevEl=r,o.originalParams.navigation.prevEl=r),Jl(e)&&s&&(o.params.pagination.el=s,o.originalParams.pagination.el=s),Ql(e)&&a&&(o.params.scrollbar.el=a,o.originalParams.scrollbar.el=a),o.init(n)}function hm(t,e,n,i,r){const s=[];if(!e)return s;const a=l=>{s.indexOf(l)<0&&s.push(l)};if(n&&i){const l=i.map(r),u=n.map(r);l.join("")!==u.join("")&&a("children"),i.length!==n.length&&a("children")}return Vl.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in t&&l in e)if(St(t[l])&&St(e[l])){const u=Object.keys(t[l]),d=Object.keys(e[l]);u.length!==d.length?a(l):(u.forEach(p=>{t[l][p]!==e[l][p]&&a(l)}),d.forEach(p=>{t[l][p]!==e[l][p]&&a(l)}))}else t[l]!==e[l]&&a(l)}),s}const mm=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function hi(){return hi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},hi.apply(this,arguments)}function Yl(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function Xl(t){const e=[];return de.Children.toArray(t).forEach(n=>{Yl(n)?e.push(n):n.props&&n.props.children&&Xl(n.props.children).forEach(i=>e.push(i))}),e}function gm(t){const e=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return de.Children.toArray(t).forEach(i=>{if(Yl(i))e.push(i);else if(i.props&&i.props.slot&&n[i.props.slot])n[i.props.slot].push(i);else if(i.props&&i.props.children){const r=Xl(i.props.children);r.length>0?r.forEach(s=>e.push(s)):n["container-end"].push(i)}else n["container-end"].push(i)}),{slides:e,slots:n}}function bm(t,e,n){if(!n)return null;const i=d=>{let p=d;return d<0?p=e.length+d:p>=e.length&&(p=p-e.length),p},r=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:s,to:a}=n,o=t.params.loop?-e.length:0,l=t.params.loop?e.length*2:e.length,u=[];for(let d=o;d<l;d+=1)d>=s&&d<=a&&u.push(e[i(d)]);return u.map((d,p)=>de.cloneElement(d,{swiper:t,style:r,key:d.props.virtualIndex||d.key||`slide-${p}`}))}function sn(t,e){return typeof window>"u"?S.useEffect(t,e):S.useLayoutEffect(t,e)}const Ia=S.createContext(null),xm=S.createContext(null),Tn=S.forwardRef(function(t,e){let{className:n,tag:i="div",wrapperTag:r="div",children:s,onSwiper:a,...o}=t===void 0?{}:t,l=!1;const[u,d]=S.useState("swiper"),[p,h]=S.useState(null),[g,m]=S.useState(!1),b=S.useRef(!1),v=S.useRef(null),f=S.useRef(null),x=S.useRef(null),w=S.useRef(null),E=S.useRef(null),M=S.useRef(null),T=S.useRef(null),j=S.useRef(null),{params:L,passedParams:N,rest:O,events:I}=pm(o),{slides:R,slots:P}=gm(s),k=()=>{m(!g)};Object.assign(L.on,{_containerClasses(G,Z){d(Z)}});const z=()=>{Object.assign(L.on,I),l=!0;const G={...L};if(delete G.wrapperClass,f.current=new ws(G),f.current.virtual&&f.current.params.virtual.enabled){f.current.virtual.slides=R;const Z={cache:!1,slides:R,renderExternal:h,renderExternalUpdate:!1};zt(f.current.params.virtual,Z),zt(f.current.originalParams.virtual,Z)}};v.current||z(),f.current&&f.current.on("_beforeBreakpoint",k);const Q=()=>{l||!I||!f.current||Object.keys(I).forEach(G=>{f.current.on(G,I[G])})},A=()=>{!I||!f.current||Object.keys(I).forEach(G=>{f.current.off(G,I[G])})};S.useEffect(()=>()=>{f.current&&f.current.off("_beforeBreakpoint",k)}),S.useEffect(()=>{!b.current&&f.current&&(f.current.emitSlidesClasses(),b.current=!0)}),sn(()=>{if(e&&(e.current=v.current),!!v.current)return f.current.destroyed&&z(),fm({el:v.current,nextEl:E.current,prevEl:M.current,paginationEl:T.current,scrollbarEl:j.current,swiper:f.current},L),a&&!f.current.destroyed&&a(f.current),()=>{f.current&&!f.current.destroyed&&f.current.destroy(!0,!1)}},[]),sn(()=>{Q();const G=hm(N,x.current,R,w.current,Z=>Z.key);return x.current=N,w.current=R,G.length&&f.current&&!f.current.destroyed&&um({swiper:f.current,slides:R,passedParams:N,changedParams:G,nextEl:E.current,prevEl:M.current,scrollbarEl:j.current,paginationEl:T.current}),()=>{A()}}),sn(()=>{mm(f.current)},[p]);function H(){return L.virtual?bm(f.current,R,p):R.map((G,Z)=>de.cloneElement(G,{swiper:f.current,swiperSlideIndex:Z}))}return de.createElement(i,hi({ref:v,className:ql(`${u}${n?` ${n}`:""}`)},O),de.createElement(xm.Provider,{value:f.current},P["container-start"],de.createElement(r,{className:dm(L.wrapperClass)},P["wrapper-start"],H(),P["wrapper-end"]),Gl(L)&&de.createElement(de.Fragment,null,de.createElement("div",{ref:M,className:"swiper-button-prev"}),de.createElement("div",{ref:E,className:"swiper-button-next"})),Ql(L)&&de.createElement("div",{ref:j,className:"swiper-scrollbar"}),Jl(L)&&de.createElement("div",{ref:T,className:"swiper-pagination"}),P["container-end"]))});Tn.displayName="Swiper";const Re=S.forwardRef(function(t,e){let{tag:n="div",children:i,className:r="",swiper:s,zoom:a,lazy:o,virtualIndex:l,swiperSlideIndex:u,...d}=t===void 0?{}:t;const p=S.useRef(null),[h,g]=S.useState("swiper-slide"),[m,b]=S.useState(!1);function v(E,M,T){M===p.current&&g(T)}sn(()=>{if(typeof u<"u"&&(p.current.swiperSlideIndex=u),e&&(e.current=p.current),!(!p.current||!s)){if(s.destroyed){h!=="swiper-slide"&&g("swiper-slide");return}return s.on("_slideClass",v),()=>{s&&s.off("_slideClass",v)}}}),sn(()=>{s&&p.current&&!s.destroyed&&g(s.getSlideClasses(p.current))},[s]);const f={isActive:h.indexOf("swiper-slide-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0},x=()=>typeof i=="function"?i(f):i,w=()=>{b(!0)};return de.createElement(n,hi({ref:p,className:ql(`${h}${r?` ${r}`:""}`),"data-swiper-slide-index":l,onLoad:w},d),a&&de.createElement(Ia.Provider,{value:f},de.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof a=="number"?a:void 0},x(),o&&!m&&de.createElement("div",{className:"swiper-lazy-preloader"}))),!a&&de.createElement(Ia.Provider,{value:f},x(),o&&!m&&de.createElement("div",{className:"swiper-lazy-preloader"})))});Re.displayName="SwiperSlide";function Kl(t,e,n,i){return t.params.createElements&&Object.keys(i).forEach(r=>{if(!n[r]&&n.auto===!0){let s=Je(t.el,`.${i[r]}`)[0];s||(s=pi("div",i[r]),s.className=i[r],t.el.append(s)),n[r]=s,e[r]=s}}),n}function vm(t){let{swiper:e,extendParams:n,on:i,emit:r}=t;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function s(m){let b;return m&&typeof m=="string"&&e.isElement&&(b=e.el.querySelector(m),b)?b:(m&&(typeof m=="string"&&(b=[...document.querySelectorAll(m)]),e.params.uniqueNavElements&&typeof m=="string"&&b&&b.length>1&&e.el.querySelectorAll(m).length===1?b=e.el.querySelector(m):b&&b.length===1&&(b=b[0])),m&&!b?m:b)}function a(m,b){const v=e.params.navigation;m=fe(m),m.forEach(f=>{f&&(f.classList[b?"add":"remove"](...v.disabledClass.split(" ")),f.tagName==="BUTTON"&&(f.disabled=b),e.params.watchOverflow&&e.enabled&&f.classList[e.isLocked?"add":"remove"](v.lockClass))})}function o(){const{nextEl:m,prevEl:b}=e.navigation;if(e.params.loop){a(b,!1),a(m,!1);return}a(b,e.isBeginning&&!e.params.rewind),a(m,e.isEnd&&!e.params.rewind)}function l(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function u(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function d(){const m=e.params.navigation;if(e.params.navigation=Kl(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let b=s(m.nextEl),v=s(m.prevEl);Object.assign(e.navigation,{nextEl:b,prevEl:v}),b=fe(b),v=fe(v);const f=(x,w)=>{x&&x.addEventListener("click",w==="next"?u:l),!e.enabled&&x&&x.classList.add(...m.lockClass.split(" "))};b.forEach(x=>f(x,"next")),v.forEach(x=>f(x,"prev"))}function p(){let{nextEl:m,prevEl:b}=e.navigation;m=fe(m),b=fe(b);const v=(f,x)=>{f.removeEventListener("click",x==="next"?u:l),f.classList.remove(...e.params.navigation.disabledClass.split(" "))};m.forEach(f=>v(f,"next")),b.forEach(f=>v(f,"prev"))}i("init",()=>{e.params.navigation.enabled===!1?g():(d(),o())}),i("toEdge fromEdge lock unlock",()=>{o()}),i("destroy",()=>{p()}),i("enable disable",()=>{let{nextEl:m,prevEl:b}=e.navigation;if(m=fe(m),b=fe(b),e.enabled){o();return}[...m,...b].filter(v=>!!v).forEach(v=>v.classList.add(e.params.navigation.lockClass))}),i("click",(m,b)=>{let{nextEl:v,prevEl:f}=e.navigation;v=fe(v),f=fe(f);const x=b.target;if(e.params.navigation.hideOnClick&&!f.includes(x)&&!v.includes(x)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===x||e.pagination.el.contains(x)))return;let w;v.length?w=v[0].classList.contains(e.params.navigation.hiddenClass):f.length&&(w=f[0].classList.contains(e.params.navigation.hiddenClass)),r(w===!0?"navigationShow":"navigationHide"),[...v,...f].filter(E=>!!E).forEach(E=>E.classList.toggle(e.params.navigation.hiddenClass))}});const h=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),d(),o()},g=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(e.navigation,{enable:h,disable:g,update:o,init:d,destroy:p})}function $t(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Zl(t){let{swiper:e,extendParams:n,on:i,emit:r}=t;const s="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let a,o=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function u(f,x){const{bulletActiveClass:w}=e.params.pagination;f&&(f=f[`${x==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${w}-${x}`),f=f[`${x==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${w}-${x}-${x}`)))}function d(f){const x=f.target.closest($t(e.params.pagination.bulletClass));if(!x)return;f.preventDefault();const w=fi(x)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===w)return;e.slideToLoop(w)}else e.slideTo(w)}function p(){const f=e.rtl,x=e.params.pagination;if(l())return;let w=e.pagination.el;w=fe(w);let E,M;const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,j=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(M=e.previousRealIndex||0,E=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(E=e.snapIndex,M=e.previousSnapIndex):(M=e.previousIndex||0,E=e.activeIndex||0),x.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const L=e.pagination.bullets;let N,O,I;if(x.dynamicBullets&&(a=Wr(L[0],e.isHorizontal()?"width":"height",!0),w.forEach(R=>{R.style[e.isHorizontal()?"width":"height"]=`${a*(x.dynamicMainBullets+4)}px`}),x.dynamicMainBullets>1&&M!==void 0&&(o+=E-(M||0),o>x.dynamicMainBullets-1?o=x.dynamicMainBullets-1:o<0&&(o=0)),N=Math.max(E-o,0),O=N+(Math.min(L.length,x.dynamicMainBullets)-1),I=(O+N)/2),L.forEach(R=>{const P=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(k=>`${x.bulletActiveClass}${k}`)].map(k=>typeof k=="string"&&k.includes(" ")?k.split(" "):k).flat();R.classList.remove(...P)}),w.length>1)L.forEach(R=>{const P=fi(R);P===E?R.classList.add(...x.bulletActiveClass.split(" ")):e.isElement&&R.setAttribute("part","bullet"),x.dynamicBullets&&(P>=N&&P<=O&&R.classList.add(...`${x.bulletActiveClass}-main`.split(" ")),P===N&&u(R,"prev"),P===O&&u(R,"next"))});else{const R=L[E];if(R&&R.classList.add(...x.bulletActiveClass.split(" ")),e.isElement&&L.forEach((P,k)=>{P.setAttribute("part",k===E?"bullet-active":"bullet")}),x.dynamicBullets){const P=L[N],k=L[O];for(let z=N;z<=O;z+=1)L[z]&&L[z].classList.add(...`${x.bulletActiveClass}-main`.split(" "));u(P,"prev"),u(k,"next")}}if(x.dynamicBullets){const R=Math.min(L.length,x.dynamicMainBullets+4),P=(a*R-a)/2-I*a,k=f?"right":"left";L.forEach(z=>{z.style[e.isHorizontal()?k:"top"]=`${P}px`})}}w.forEach((L,N)=>{if(x.type==="fraction"&&(L.querySelectorAll($t(x.currentClass)).forEach(O=>{O.textContent=x.formatFractionCurrent(E+1)}),L.querySelectorAll($t(x.totalClass)).forEach(O=>{O.textContent=x.formatFractionTotal(j)})),x.type==="progressbar"){let O;x.progressbarOpposite?O=e.isHorizontal()?"vertical":"horizontal":O=e.isHorizontal()?"horizontal":"vertical";const I=(E+1)/j;let R=1,P=1;O==="horizontal"?R=I:P=I,L.querySelectorAll($t(x.progressbarFillClass)).forEach(k=>{k.style.transform=`translate3d(0,0,0) scaleX(${R}) scaleY(${P})`,k.style.transitionDuration=`${e.params.speed}ms`})}x.type==="custom"&&x.renderCustom?(L.innerHTML=x.renderCustom(e,E+1,j),N===0&&r("paginationRender",L)):(N===0&&r("paginationRender",L),r("paginationUpdate",L)),e.params.watchOverflow&&e.enabled&&L.classList[e.isLocked?"add":"remove"](x.lockClass)})}function h(){const f=e.params.pagination;if(l())return;const x=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let w=e.pagination.el;w=fe(w);let E="";if(f.type==="bullets"){let M=e.params.loop?Math.ceil(x/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&M>x&&(M=x);for(let T=0;T<M;T+=1)f.renderBullet?E+=f.renderBullet.call(e,T,f.bulletClass):E+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?E=f.renderFraction.call(e,f.currentClass,f.totalClass):E=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?E=f.renderProgressbar.call(e,f.progressbarFillClass):E=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],w.forEach(M=>{f.type!=="custom"&&(M.innerHTML=E||""),f.type==="bullets"&&e.pagination.bullets.push(...M.querySelectorAll($t(f.bulletClass)))}),f.type!=="custom"&&r("paginationRender",w[0])}function g(){e.params.pagination=Kl(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let x;typeof f.el=="string"&&e.isElement&&(x=e.el.querySelector(f.el)),!x&&typeof f.el=="string"&&(x=[...document.querySelectorAll(f.el)]),x||(x=f.el),!(!x||x.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(x)&&x.length>1&&(x=[...e.el.querySelectorAll(f.el)],x.length>1&&(x=x.filter(w=>Dl(w,".swiper")[0]===e.el)[0])),Array.isArray(x)&&x.length===1&&(x=x[0]),Object.assign(e.pagination,{el:x}),x=fe(x),x.forEach(w=>{f.type==="bullets"&&f.clickable&&w.classList.add(...(f.clickableClass||"").split(" ")),w.classList.add(f.modifierClass+f.type),w.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(w.classList.add(`${f.modifierClass}${f.type}-dynamic`),o=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&w.classList.add(f.progressbarOppositeClass),f.clickable&&w.addEventListener("click",d),e.enabled||w.classList.add(f.lockClass)}))}function m(){const f=e.params.pagination;if(l())return;let x=e.pagination.el;x&&(x=fe(x),x.forEach(w=>{w.classList.remove(f.hiddenClass),w.classList.remove(f.modifierClass+f.type),w.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(w.classList.remove(...(f.clickableClass||"").split(" ")),w.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(w=>w.classList.remove(...f.bulletActiveClass.split(" ")))}i("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:x}=e.pagination;x=fe(x),x.forEach(w=>{w.classList.remove(f.horizontalClass,f.verticalClass),w.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),i("init",()=>{e.params.pagination.enabled===!1?v():(g(),h(),p())}),i("activeIndexChange",()=>{typeof e.snapIndex>"u"&&p()}),i("snapIndexChange",()=>{p()}),i("snapGridLengthChange",()=>{h(),p()}),i("destroy",()=>{m()}),i("enable disable",()=>{let{el:f}=e.pagination;f&&(f=fe(f),f.forEach(x=>x.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),i("lock unlock",()=>{p()}),i("click",(f,x)=>{const w=x.target,E=fe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&E&&E.length>0&&!w.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&w===e.navigation.nextEl||e.navigation.prevEl&&w===e.navigation.prevEl))return;const M=E[0].classList.contains(e.params.pagination.hiddenClass);r(M===!0?"paginationShow":"paginationHide"),E.forEach(T=>T.classList.toggle(e.params.pagination.hiddenClass))}});const b=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=fe(f),f.forEach(x=>x.classList.remove(e.params.pagination.paginationDisabledClass))),g(),h(),p()},v=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=fe(f),f.forEach(x=>x.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:b,disable:v,render:h,update:p,init:g,destroy:m})}function Jr(){return Jr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Jr.apply(this,arguments)}var wm=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ym=Ko(function(t){return wm.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function Sm(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Am(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Em=function(){function t(n){var i=this;this._insertTag=function(r){var s;i.tags.length===0?i.insertionPoint?s=i.insertionPoint.nextSibling:i.prepend?s=i.container.firstChild:s=i.before:s=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,s),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Am(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Sm(r);try{s.insertRule(i,s.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},t}(),xe="-ms-",mi="-moz-",q="-webkit-",_l="comm",ys="rule",Ss="decl",Tm="@import",$l="@keyframes",Cm="@layer",Mm=Math.abs,Oi=String.fromCharCode,jm=Object.assign;function Om(t,e){return ge(t,0)^45?(((e<<2^ge(t,0))<<2^ge(t,1))<<2^ge(t,2))<<2^ge(t,3):0}function ec(t){return t.trim()}function km(t,e){return(t=e.exec(t))?t[0]:t}function Y(t,e,n){return t.replace(e,n)}function Qr(t,e){return t.indexOf(e)}function ge(t,e){return t.charCodeAt(e)|0}function un(t,e,n){return t.slice(e,n)}function Ue(t){return t.length}function As(t){return t.length}function Un(t,e){return e.push(t),t}function Pm(t,e){return t.map(e).join("")}var ki=1,Ut=1,tc=0,Ae=0,le=0,Yt="";function Pi(t,e,n,i,r,s,a){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:ki,column:Ut,length:a,return:""}}function en(t,e){return jm(Pi("",null,null,"",null,null,0),t,{length:-t.length},e)}function Im(){return le}function Nm(){return le=Ae>0?ge(Yt,--Ae):0,Ut--,le===10&&(Ut=1,ki--),le}function Ce(){return le=Ae<tc?ge(Yt,Ae++):0,Ut++,le===10&&(Ut=1,ki++),le}function Qe(){return ge(Yt,Ae)}function ti(){return Ae}function Cn(t,e){return un(Yt,t,e)}function pn(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nc(t){return ki=Ut=1,tc=Ue(Yt=t),Ae=0,[]}function ic(t){return Yt="",t}function ni(t){return ec(Cn(Ae-1,qr(t===91?t+2:t===40?t+1:t)))}function Rm(t){for(;(le=Qe())&&le<33;)Ce();return pn(t)>2||pn(le)>3?"":" "}function Lm(t,e){for(;--e&&Ce()&&!(le<48||le>102||le>57&&le<65||le>70&&le<97););return Cn(t,ti()+(e<6&&Qe()==32&&Ce()==32))}function qr(t){for(;Ce();)switch(le){case t:return Ae;case 34:case 39:t!==34&&t!==39&&qr(le);break;case 40:t===41&&qr(t);break;case 92:Ce();break}return Ae}function zm(t,e){for(;Ce()&&t+le!==47+10;)if(t+le===42+42&&Qe()===47)break;return"/*"+Cn(e,Ae-1)+"*"+Oi(t===47?t:Ce())}function Fm(t){for(;!pn(Qe());)Ce();return Cn(t,Ae)}function Dm(t){return ic(ii("",null,null,null,[""],t=nc(t),0,[0],t))}function ii(t,e,n,i,r,s,a,o,l){for(var u=0,d=0,p=a,h=0,g=0,m=0,b=1,v=1,f=1,x=0,w="",E=r,M=s,T=i,j=w;v;)switch(m=x,x=Ce()){case 40:if(m!=108&&ge(j,p-1)==58){Qr(j+=Y(ni(x),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:j+=ni(x);break;case 9:case 10:case 13:case 32:j+=Rm(m);break;case 92:j+=Lm(ti()-1,7);continue;case 47:switch(Qe()){case 42:case 47:Un(Bm(zm(Ce(),ti()),e,n),l);break;default:j+="/"}break;case 123*b:o[u++]=Ue(j)*f;case 125*b:case 59:case 0:switch(x){case 0:case 125:v=0;case 59+d:f==-1&&(j=Y(j,/\f/g,"")),g>0&&Ue(j)-p&&Un(g>32?Ra(j+";",i,n,p-1):Ra(Y(j," ","")+";",i,n,p-2),l);break;case 59:j+=";";default:if(Un(T=Na(j,e,n,u,d,r,o,w,E=[],M=[],p),s),x===123)if(d===0)ii(j,e,T,T,E,s,p,o,M);else switch(h===99&&ge(j,3)===110?100:h){case 100:case 108:case 109:case 115:ii(t,T,T,i&&Un(Na(t,T,T,0,0,r,o,w,r,E=[],p),M),r,M,p,o,i?E:M);break;default:ii(j,T,T,T,[""],M,0,o,M)}}u=d=g=0,b=f=1,w=j="",p=a;break;case 58:p=1+Ue(j),g=m;default:if(b<1){if(x==123)--b;else if(x==125&&b++==0&&Nm()==125)continue}switch(j+=Oi(x),x*b){case 38:f=d>0?1:(j+="\f",-1);break;case 44:o[u++]=(Ue(j)-1)*f,f=1;break;case 64:Qe()===45&&(j+=ni(Ce())),h=Qe(),d=p=Ue(w=j+=Fm(ti())),x++;break;case 45:m===45&&Ue(j)==2&&(b=0)}}return s}function Na(t,e,n,i,r,s,a,o,l,u,d){for(var p=r-1,h=r===0?s:[""],g=As(h),m=0,b=0,v=0;m<i;++m)for(var f=0,x=un(t,p+1,p=Mm(b=a[m])),w=t;f<g;++f)(w=ec(b>0?h[f]+" "+x:Y(x,/&\f/g,h[f])))&&(l[v++]=w);return Pi(t,e,n,r===0?ys:o,l,u,d)}function Bm(t,e,n){return Pi(t,e,n,_l,Oi(Im()),un(t,2,-2),0)}function Ra(t,e,n,i){return Pi(t,e,n,Ss,un(t,0,i),un(t,i+1,-1),i)}function Ft(t,e){for(var n="",i=As(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function Hm(t,e,n,i){switch(t.type){case Cm:if(t.children.length)break;case Tm:case Ss:return t.return=t.return||t.value;case _l:return"";case $l:return t.return=t.value+"{"+Ft(t.children,i)+"}";case ys:t.value=t.props.join(",")}return Ue(n=Ft(t.children,i))?t.return=t.value+"{"+n+"}":""}function Um(t){var e=As(t);return function(n,i,r,s){for(var a="",o=0;o<e;o++)a+=t[o](n,i,r,s)||"";return a}}function Wm(t){return function(e){e.root||(e=e.return)&&t(e)}}var Vm=function(e,n,i){for(var r=0,s=0;r=s,s=Qe(),r===38&&s===12&&(n[i]=1),!pn(s);)Ce();return Cn(e,Ae)},Gm=function(e,n){var i=-1,r=44;do switch(pn(r)){case 0:r===38&&Qe()===12&&(n[i]=1),e[i]+=Vm(Ae-1,n,i);break;case 2:e[i]+=ni(r);break;case 4:if(r===44){e[++i]=Qe()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=Oi(r)}while(r=Ce());return e},Jm=function(e,n){return ic(Gm(nc(e),n))},La=new WeakMap,Qm=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!La.get(i))&&!r){La.set(e,!0);for(var s=[],a=Jm(n,s),o=i.props,l=0,u=0;l<a.length;l++)for(var d=0;d<o.length;d++,u++)e.props[u]=s[l]?a[l].replace(/&\f/g,o[d]):o[d]+" "+a[l]}}},qm=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function rc(t,e){switch(Om(t,e)){case 5103:return q+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return q+t+mi+t+xe+t+t;case 6828:case 4268:return q+t+xe+t+t;case 6165:return q+t+xe+"flex-"+t+t;case 5187:return q+t+Y(t,/(\w+).+(:[^]+)/,q+"box-$1$2"+xe+"flex-$1$2")+t;case 5443:return q+t+xe+"flex-item-"+Y(t,/flex-|-self/,"")+t;case 4675:return q+t+xe+"flex-line-pack"+Y(t,/align-content|flex-|-self/,"")+t;case 5548:return q+t+xe+Y(t,"shrink","negative")+t;case 5292:return q+t+xe+Y(t,"basis","preferred-size")+t;case 6060:return q+"box-"+Y(t,"-grow","")+q+t+xe+Y(t,"grow","positive")+t;case 4554:return q+Y(t,/([^-])(transform)/g,"$1"+q+"$2")+t;case 6187:return Y(Y(Y(t,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),t,"")+t;case 5495:case 3959:return Y(t,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return Y(Y(t,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+t+t;case 4095:case 3583:case 4068:case 2532:return Y(t,/(.+)-inline(.+)/,q+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ue(t)-1-e>6)switch(ge(t,e+1)){case 109:if(ge(t,e+4)!==45)break;case 102:return Y(t,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+mi+(ge(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Qr(t,"stretch")?rc(Y(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(ge(t,e+1)!==115)break;case 6444:switch(ge(t,Ue(t)-3-(~Qr(t,"!important")&&10))){case 107:return Y(t,":",":"+q)+t;case 101:return Y(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+q+(ge(t,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+xe+"$2box$3")+t}break;case 5936:switch(ge(t,e+11)){case 114:return q+t+xe+Y(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return q+t+xe+Y(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return q+t+xe+Y(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return q+t+xe+t+t}return t}var Ym=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case Ss:e.return=rc(e.value,e.length);break;case $l:return Ft([en(e,{value:Y(e.value,"@","@"+q)})],r);case ys:if(e.length)return Pm(e.props,function(s){switch(km(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ft([en(e,{props:[Y(s,/:(read-\w+)/,":"+mi+"$1")]})],r);case"::placeholder":return Ft([en(e,{props:[Y(s,/:(plac\w+)/,":"+q+"input-$1")]}),en(e,{props:[Y(s,/:(plac\w+)/,":"+mi+"$1")]}),en(e,{props:[Y(s,/:(plac\w+)/,xe+"input-$1")]})],r)}return""})}},Xm=[Ym],Km=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(b){var v=b.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(b),b.setAttribute("data-s",""))})}var r=e.stylisPlugins||Xm,s={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(b){for(var v=b.getAttribute("data-emotion").split(" "),f=1;f<v.length;f++)s[v[f]]=!0;o.push(b)});var l,u=[Qm,qm];{var d,p=[Hm,Wm(function(b){d.insert(b)})],h=Um(u.concat(r,p)),g=function(v){return Ft(Dm(v),h)};l=function(v,f,x,w){d=x,g(v?v+"{"+f.styles+"}":f.styles),w&&(m.inserted[f.name]=!0)}}var m={key:n,sheet:new Em({key:n,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return m.sheet.hydrate(o),m},sc={exports:{}},$={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me=typeof Symbol=="function"&&Symbol.for,Es=me?Symbol.for("react.element"):60103,Ts=me?Symbol.for("react.portal"):60106,Ii=me?Symbol.for("react.fragment"):60107,Ni=me?Symbol.for("react.strict_mode"):60108,Ri=me?Symbol.for("react.profiler"):60114,Li=me?Symbol.for("react.provider"):60109,zi=me?Symbol.for("react.context"):60110,Cs=me?Symbol.for("react.async_mode"):60111,Fi=me?Symbol.for("react.concurrent_mode"):60111,Di=me?Symbol.for("react.forward_ref"):60112,Bi=me?Symbol.for("react.suspense"):60113,Zm=me?Symbol.for("react.suspense_list"):60120,Hi=me?Symbol.for("react.memo"):60115,Ui=me?Symbol.for("react.lazy"):60116,_m=me?Symbol.for("react.block"):60121,$m=me?Symbol.for("react.fundamental"):60117,eg=me?Symbol.for("react.responder"):60118,tg=me?Symbol.for("react.scope"):60119;function je(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Es:switch(t=t.type,t){case Cs:case Fi:case Ii:case Ri:case Ni:case Bi:return t;default:switch(t=t&&t.$$typeof,t){case zi:case Di:case Ui:case Hi:case Li:return t;default:return e}}case Ts:return e}}}function ac(t){return je(t)===Fi}$.AsyncMode=Cs;$.ConcurrentMode=Fi;$.ContextConsumer=zi;$.ContextProvider=Li;$.Element=Es;$.ForwardRef=Di;$.Fragment=Ii;$.Lazy=Ui;$.Memo=Hi;$.Portal=Ts;$.Profiler=Ri;$.StrictMode=Ni;$.Suspense=Bi;$.isAsyncMode=function(t){return ac(t)||je(t)===Cs};$.isConcurrentMode=ac;$.isContextConsumer=function(t){return je(t)===zi};$.isContextProvider=function(t){return je(t)===Li};$.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Es};$.isForwardRef=function(t){return je(t)===Di};$.isFragment=function(t){return je(t)===Ii};$.isLazy=function(t){return je(t)===Ui};$.isMemo=function(t){return je(t)===Hi};$.isPortal=function(t){return je(t)===Ts};$.isProfiler=function(t){return je(t)===Ri};$.isStrictMode=function(t){return je(t)===Ni};$.isSuspense=function(t){return je(t)===Bi};$.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ii||t===Fi||t===Ri||t===Ni||t===Bi||t===Zm||typeof t=="object"&&t!==null&&(t.$$typeof===Ui||t.$$typeof===Hi||t.$$typeof===Li||t.$$typeof===zi||t.$$typeof===Di||t.$$typeof===$m||t.$$typeof===eg||t.$$typeof===tg||t.$$typeof===_m)};$.typeOf=je;sc.exports=$;var ng=sc.exports,oc=ng,ig={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lc={};lc[oc.ForwardRef]=ig;lc[oc.Memo]=rg;var sg=!0;function ag(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):i+=r+" "}),i}var cc=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||sg===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},og=function(e,n,i){cc(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+r:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function lg(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var cg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dg=/[A-Z]|^ms/g,ug=/_EMO_([^_]+?)_([^]*?)_EMO_/g,dc=function(e){return e.charCodeAt(1)===45},za=function(e){return e!=null&&typeof e!="boolean"},vr=Ko(function(t){return dc(t)?t:t.replace(dg,"-$&").toLowerCase()}),Fa=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(ug,function(i,r,s){return We={name:r,styles:s,next:We},r})}return cg[e]!==1&&!dc(e)&&typeof n=="number"&&n!==0?n+"px":n};function fn(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return We={name:n.name,styles:n.styles,next:We},n.name;if(n.styles!==void 0){var i=n.next;if(i!==void 0)for(;i!==void 0;)We={name:i.name,styles:i.styles,next:We},i=i.next;var r=n.styles+";";return r}return pg(t,e,n)}case"function":{if(t!==void 0){var s=We,a=n(t);return We=s,fn(t,e,a)}break}}if(e==null)return n;var o=e[n];return o!==void 0?o:n}function pg(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=fn(t,e,n[r])+";";else for(var s in n){var a=n[s];if(typeof a!="object")e!=null&&e[a]!==void 0?i+=s+"{"+e[a]+"}":za(a)&&(i+=vr(s)+":"+Fa(s,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(e==null||e[a[0]]===void 0))for(var o=0;o<a.length;o++)za(a[o])&&(i+=vr(s)+":"+Fa(s,a[o])+";");else{var l=fn(t,e,a);switch(s){case"animation":case"animationName":{i+=vr(s)+":"+l+";";break}default:i+=s+"{"+l+"}"}}}return i}var Da=/label:\s*([^\s;\n{]+)\s*(;|$)/g,We,fg=function(e,n,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,s="";We=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,s+=fn(i,n,a)):s+=a[0];for(var o=1;o<e.length;o++)s+=fn(i,n,e[o]),r&&(s+=a[o]);Da.lastIndex=0;for(var l="",u;(u=Da.exec(s))!==null;)l+="-"+u[1];var d=lg(s)+l;return{name:d,styles:s,next:We}},hg=function(e){return e()},mg=ia["useInsertionEffect"]?ia["useInsertionEffect"]:!1,gg=mg||hg,uc=S.createContext(typeof HTMLElement<"u"?Km({key:"css"}):null);uc.Provider;var bg=function(e){return S.forwardRef(function(n,i){var r=S.useContext(uc);return e(n,r,i)})},xg=S.createContext({}),vg=ym,wg=function(e){return e!=="theme"},Ba=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?vg:wg},Ha=function(e,n,i){var r;if(n){var s=n.shouldForwardProp;r=e.__emotion_forwardProp&&s?function(a){return e.__emotion_forwardProp(a)&&s(a)}:s}return typeof r!="function"&&i&&(r=e.__emotion_forwardProp),r},yg=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return cc(n,i,r),gg(function(){return og(n,i,r)}),null},Sg=function t(e,n){var i=e.__emotion_real===e,r=i&&e.__emotion_base||e,s,a;n!==void 0&&(s=n.label,a=n.target);var o=Ha(e,n,i),l=o||Ba(r),u=!l("as");return function(){var d=arguments,p=i&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&p.push("label:"+s+";"),d[0]==null||d[0].raw===void 0)p.push.apply(p,d);else{p.push(d[0][0]);for(var h=d.length,g=1;g<h;g++)p.push(d[g],d[0][g])}var m=bg(function(b,v,f){var x=u&&b.as||r,w="",E=[],M=b;if(b.theme==null){M={};for(var T in b)M[T]=b[T];M.theme=S.useContext(xg)}typeof b.className=="string"?w=ag(v.registered,E,b.className):b.className!=null&&(w=b.className+" ");var j=fg(p.concat(E),v.registered,M);w+=v.key+"-"+j.name,a!==void 0&&(w+=" "+a);var L=u&&o===void 0?Ba(x):l,N={};for(var O in b)u&&O==="as"||L(O)&&(N[O]=b[O]);return N.className=w,N.ref=f,S.createElement(S.Fragment,null,S.createElement(yg,{cache:v,serialized:j,isStringTag:typeof x=="string"}),S.createElement(x,N))});return m.displayName=s!==void 0?s:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",m.defaultProps=e.defaultProps,m.__emotion_real=m,m.__emotion_base=r,m.__emotion_styles=p,m.__emotion_forwardProp=o,Object.defineProperty(m,"toString",{value:function(){return"."+a}}),m.withComponent=function(b,v){return t(b,Jr({},n,v,{shouldForwardProp:Ha(m,v,!0)})).apply(void 0,p)},m}},Ag=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],he=Sg.bind();Ag.forEach(function(t){he[t]=he(t)});const Eg=he.section`
  width: 100%;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    margin-bottom: 78px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 150px;
  }
`,Ms=he(En)`
  width: 100%;
  min-width: 320px;
  max-width: 375px;
  padding: 60px 16px 0;
  margin: 0 auto;
  outline: none;

  @media (min-width: 768px) {
    width: 768px;
    min-width: unset;
    max-width: unset;
    padding: 120px 32px 0;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 150px 120px 0;
  }
`,Tg=he(Ms)`
  margin-bottom: 60px;

  .about-project {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-align: left;
    color: #0b0b0b80;
    margin-bottom: 8px;
  }

  .about-title {
    font-family: 'Oddval';
    font-weight: 600;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    margin-bottom: 32px;
  }

  .accent {
    color: #f77d07;
    text-transform: uppercase;
  }

  .swiper {
    width: 100%;
    height: 100%;
    margin-bottom: 60px;
  }

  .about-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
  }

  .about-list-item {
    background: #f8f8f8;
    padding: 38px 32px;
    border-radius: 20px;
  }
  .swiper-slide {
    height: unset;
  }

  .about-list-item-number {
    padding-top: 3px;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: #0b0b0b;
    box-shadow: 0px 1px 4px 0px #1018280f;
    margin-bottom: 24px;

    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #ffffff;
  }

  .about-list-item-title {
    font-family: 'Oddval';
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: left;
    color: #0b0b0b;
    margin-bottom: 12px;
  }

  .about-list-item-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.02em;
    text-align: left;
    color: #0b0b0bcc;
  }

  .about-info {
    font-family: 'Oddval';
    font-weight: 600;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    text-align: center;
    padding: 24px 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 120px;

    .about-project {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 30px;
    }

    .about-title {
      font-size: 45px;
      line-height: 1.11;
      margin-bottom: 60px;
    }

    .swiper {
      margin-bottom: 120px;
      padding-bottom: 48px;
    }

    .about-list {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      gap: 0;
    }

    .about-list-item {
      padding: 38px 38px;
      min-height: 100%;
      align-self: stretch;
    }

    .about-list-item-number {
      padding-top: 4px;
      width: 60px;
      height: 60px;
      margin-bottom: 32px;

      font-size: 32px;
      line-height: 1.125;
    }

    .about-list-item-title {
      font-size: 22px;
      line-height: 1.18;
      margin-bottom: 16px;
    }

    .about-list-item-text {
      font-size: 18px;
      line-height: 1.33;
    }

    .swiper-pagination {
      margin-top: 48px;
    }

    .swiper-pagination-bullet {
      background: #0b0b0b;
    }

    .swiper-pagination-bullet-active {
      background: #f77d07;
    }

    .about-info {
      font-size: 45px;
      line-height: 1.11;
      padding: 32px 44px;
    }
  }

  @media (min-width: 1440px) {
    margin-bottom: 150px;

    .about-title {
      font-size: 60px;
      line-height: 1.13;
      margin-bottom: 80px;
    }

    .swiper {
      margin-bottom: 150px;
      padding-bottom: 0px;
    }

    .about-list {
      gap: 24px;
    }
    .about-list-item {
      width: 369px !important;
      &:nth-of-type(3) {
        width: 414px !important;
      }
    }
    .about-list-item-number {
      padding-top: 5px;
      width: 72px;
      height: 72px;
      margin-bottom: 40px;

      font-size: 40px;
      line-height: 1.1;
    }

    .about-list-item-title {
      font-size: 28px;
      line-height: 1.14;
      margin-bottom: 20px;
    }

    .about-list-item-text {
      font-size: 20px;
      line-height: 1.3;
    }

    .about-info {
      font-size: 60px;
      line-height: 1.13;
      padding: 40px 84px;
    }
  }
`,Cg=()=>c.jsxs(Tg,{children:[c.jsx("p",{className:"about-project",children:"Про проєкт"}),c.jsxs("h2",{className:"about-title",children:[c.jsx("span",{className:"accent",children:"МІСТОХАБ"})," це"]}),c.jsxs(Tn,{wrapperTag:"ul",wrapperClass:"about-list",className:"swiper",resizeObserver:!0,onResize:t=>{t.slideTo(0),t.update()},breakpoints:{1440:{slidesPerView:3,initialSlide:0,slideTo:0,enabled:!0,spaceBetween:0,grid:{row:1}},768:{slidesPerView:2,initialSlide:0,slideTo:0,enabled:!0,spaceBetween:"16px",allowTouchMove:!0,grid:{row:1},pagination:{enabled:!0,clickable:!0}}},slidesPerView:1,allowTouchMove:!1,grid:{rows:3},initialSlide:0,enabled:!0,pagination:{enabled:!1,clickable:!0},modules:[Zl],children:[c.jsxs(Re,{tag:"li",className:"about-list-item",children:[c.jsx("div",{className:"about-list-item-number",children:"1"}),c.jsx("h3",{className:"about-list-item-title",children:"Кафе"}),c.jsx("p",{className:"about-list-item-text",children:"Стане місцем якісного відпочинку, знайомств та генерування ідей."})]}),c.jsxs(Re,{tag:"li",className:"about-list-item",children:[c.jsx("div",{className:"about-list-item-number",children:"2"}),c.jsx("h3",{className:"about-list-item-title",children:"Івент-простір"}),c.jsx("p",{className:"about-list-item-text",children:"Розвиватиме культурне життя Полтави та стане місцем для самореалізації."})]}),c.jsxs(Re,{tag:"li",className:"about-list-item",children:[c.jsx("div",{className:"about-list-item-number",children:"3"}),c.jsx("h3",{className:"about-list-item-title",children:"Крамниця МІСТОШОП"}),c.jsx("p",{className:"about-list-item-text",children:"Продаватиме унікальні сучасні сувеніри, що відображають дух міста та його культурну спадщину."})]})]}),c.jsxs("p",{className:"about-info",children:["80% прибутку ",c.jsx("span",{className:"accent",children:"МІСТОХАБ"})," буде спрямовано на фінансування соціальних проєктів містян"]})]}),Mg="/MistoHub/assets/howItWorkBg-220ae44c.svg",jg="/MistoHub/assets/howItWorkBg-tablet-6f286e72.svg",Og="/MistoHub/assets/howItWorkBg-desktop-c7cada1c.svg",kg=he.div`
  width: 100%;

  background-image: url(${Mg});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 60% center;

  @media (min-width: 768px) {
    background-image: url(${jg});
    background-position: 60% center;
  }

  @media (min-width: 1440px) {
    background-image: url(${Og});
    background-position: 67% center;
  }
`,Pg=he(Ms)`
  margin-bottom: 60px;

  .container-inner {
    padding: 104px 0 82px;
  }

  .how-it-work-title {
    font-family: Oddval;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.33;
    letter-spacing: -0.02em;
    text-align: left;
    color: #ffffff;
    margin-bottom: 32px;
  }

  .accent {
    color: #f77d07;
  }

  .how-it-work-btn {
    display: block;
    padding: 15px 20px;
    border-radius: 30px;
    background: #ffffff;
    border: none;
    outline: none;
    margin: 0 auto;

    font-size: 14px;
    font-weight: 600;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-align: center;
    color: #0b0b0b;

    &:active {
      color: #f77d07;
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 60px;
  }

  .how-it-work-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
  }

  .how-it-work-item {
    background: #ffffff;
    padding: 32px;
    border-radius: 20px;
  }
  .swiper-slide {
    height: unset;
  }

  .how-it-work-number {
    padding-top: 3px;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    opacity: 0px;
    background: #f77d07;
    box-shadow: 0px 1px 4px 0px #1018280f;
    margin-bottom: 16px;

    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #ffffff;
  }

  .how-it-work-text {
    font-family: Oddval;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.11;
    letter-spacing: -0.02em;
    text-align: left;
    color: #0b0b0b;
  }

  .swiper-pagination {
    bottom: 40px;
  }

  .swiper-pagination-bullet {
    background: #ffffffa6;
  }

  .swiper-pagination-bullet-active {
    background: #ffffff;
  }

  @media (min-width: 768px) {
    margin-bottom: 120px;

    .container-inner {
      padding: 200px 0 161px;
    }

    .how-it-work-title {
      font-size: 45px;
      line-height: 1.11;
      margin-bottom: 60px;
    }

    .how-it-work-btn {
      padding: 20px 40px;
      border-radius: 30px;

      font-size: 16px;
      line-height: 1.5;
    }

    .how-it-work-list {
      flex-flow: row wrap;
      gap: 16px;
      row-gap: 16px;
      margin-bottom: 60px;
    }

    .swiper-slide,
    .how-it-work-item {
      padding: 32px;
      border-radius: 20px;

      &:first-of-type {
        width: 274px !important;
      }
      &:nth-of-type(2) {
        width: 414px !important;
      }
      &:nth-of-type(3) {
        width: 203px !important;
      }
      &:nth-of-type(4) {
        width: 266px !important;
      }
      &:nth-of-type(5) {
        width: 203px !important;
      }
    }

    .how-it-work-number {
      padding-top: 4px;
      width: 60px;
      height: 60px;
      margin-bottom: 16px;

      font-size: 32px;
      line-height: 1.125;
    }

    .how-it-work-text {
      font-size: 16px;
      line-height: 1.25;
    }

    .swiper {
      padding-bottom: 0;
    }
  }

  @media (min-width: 1440px) {
    margin-bottom: 150px;

    .container-inner {
      padding: 258px 0 207px;
    }

    .how-it-work-title {
      font-size: 60px;
      line-height: 1.13;
      margin-bottom: 80px;
    }

    .how-it-work-btn {
      padding: 23px 46px;
      border-radius: 60px;

      font-size: 18px;
      line-height: 1.33;

      &:hover {
        color: #f77d07;
      }
    }

    .how-it-work-list {
      gap: 24px;
      margin-bottom: 80px;
    }

    .swiper-slide,
    .how-it-work-item {
      padding: 40px;
      &:first-of-type {
        width: 540px !important;
      }
      &:nth-of-type(2) {
        width: 636px !important;
      }
      &:nth-of-type(3) {
        width: 384px !important;
      }
      &:nth-of-type(4) {
        width: 384px !important;
      }
      &:nth-of-type(5) {
        width: 384px !important;
      }
    }

    .how-it-work-number {
      padding-top: 5px;
      width: 72px;
      height: 72px;
      margin-bottom: 30px;

      font-size: 40px;
      line-height: 1.1;
    }

    .how-it-work-text {
      font-size: 22px;
      line-height: 1.18;
    }
  }
`,Ig=()=>{const t=S.useRef(null),{openModal:e}=Qt();return S.useEffect(()=>{const n=()=>{const i=window.innerWidth;let r=0;i>=1440?r=(i-1440)/2-335:i>=768&&i<1440?r=(i-768)/2-393:r=(i-375)/2-194,t.current.style.backgroundPosition=`left ${r}px center`};return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)}),c.jsx(kg,{ref:t,children:c.jsx(Pg,{children:c.jsxs("div",{className:"container-inner",children:[c.jsx("h2",{className:"how-it-work-title",children:"Як це працює?"}),c.jsxs(Tn,{wrapperTag:"ul",wrapperClass:"how-it-work-list",className:"swiper",resizeObserver:!0,onResize:n=>{n.slideTo(0),n.update()},breakpoints:{768:{slidesPerView:5,enabled:!0,initialSlide:0,slideTo:0,pagination:{enabled:!1},spaceBetween:0}},slidesPerView:1,grid:{row:1},enabled:!0,initialSlide:0,pagination:{enabled:!0,clickable:!0},spaceBetween:16,modules:[Zl],children:[c.jsxs(Re,{tag:"li",className:"how-it-work-item",children:[c.jsx("div",{className:"how-it-work-number",children:"1"}),c.jsxs("p",{className:"how-it-work-text",children:["Люди і компанії вкладають кошти у відновлення історичної будівлі ",c.jsx("span",{className:"accent",children:"МІСТОХАБ"})]})]}),c.jsxs(Re,{tag:"li",className:"how-it-work-item",children:[c.jsx("div",{className:"how-it-work-number",children:"2"}),c.jsxs("p",{className:"how-it-work-text",children:["У відновленій будівлі відкривається МІСТОХАБ, в якому функціонують:"," ",c.jsx("span",{className:"accent",children:"Кафе, Крамниця локальних виробників Містошоп, Івент-простір"})," ","та генерують прибуток"]})]}),c.jsxs(Re,{tag:"li",className:"how-it-work-item",children:[c.jsx("div",{className:"how-it-work-number",children:"3"}),c.jsxs("p",{className:"how-it-work-text",children:["80% прибутку передається у Фонд міських ініціатив"," ",c.jsx("span",{className:"accent",children:"МІСТОХАБ"})]})]}),c.jsxs(Re,{tag:"li",className:"how-it-work-item",children:[c.jsx("div",{className:"how-it-work-number",children:"4"}),c.jsxs("p",{className:"how-it-work-text",children:[c.jsx("span",{className:"accent",children:"Фонд міських ініціатив"})," ","оголошує конкурс проєктів містян, a імпакт-інвестори обирають найкращі ідеї"]})]}),c.jsxs(Re,{tag:"li",className:"how-it-work-item",children:[c.jsx("div",{className:"how-it-work-number",children:"5"}),c.jsxs("p",{className:"how-it-work-text",children:[c.jsx("span",{className:"accent",children:"Фонд міських ініціатив"})," ","фінансує проєкти переможців"]})]})]}),c.jsx("button",{className:"how-it-work-btn",type:"button",onClick:()=>e("join_modal"),children:"Приєднатися"})]})})})},Ng="/MistoHub/assets/building1-7921ea51.svg",Rg="/MistoHub/assets/building2-f1c01339.svg",Lg="/MistoHub/assets/building3-5c8bd933.svg",zg="/MistoHub/assets/building4-204b02df.svg",Fg=he(Ms)`
  margin-bottom: 60px;
  padding-bottom:21px;
  width: 100%;
  overflow: hidden;

  .building-title {
    font-family: 'Oddval';
    font-weight: 600;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    margin-bottom: 14px;
  }

  .accent {
    color: #f77d07;
    text-transform: uppercase;
  }

  .building-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.02em;
    text-align: left;
    color: #0b0b0bcc;
    margin-bottom: 40px;
  }
  .building-img-container {
    position: relative;
  }
  .building-img {
    max-width: 100%;
    object-fit: contain;
    border-radius: 20px;
  }

  @media (min-width: 768px) {
    margin-bottom: 78px;
    padding-bottom:21px;

    .building-title {
      font-size: 45px;
      line-height: 1.11;
      margin-bottom: 30px;
    }
    .building-text {
      font-size: 24px;
      line-height: 1.33;
    }
  }

  @media (min-width: 1440px) {
    margin-bottom: 181px;
    padding-bottom:31px;

    .building-title {
      font-size: 60px;
      line-height: 1.13;
      margin-bottom: 30px;
    }
    .building-text {
      font-size: 28px;
      line-height: 1.21;
      padding-right: 120px;
      margin-bottom: 40px;
    }
  }
`,Wi=he.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
`,Dg=he(Wi)`
  background-image: url(${Ng});
  top: 106px;
  left: -21px;
  width: 61px;
  height: 84px;

  @media (min-width: 768px) {
    top: 141px;
    left: -44px;
    width: 114px;
    height: 139px;
  }
  @media (min-width: 1440px) {
    top: 174px;
    left: -103px;
    width: 136px;
    height: 168px;
  }
`,Bg=he(Wi)`
  background-image: url(${Rg});
  top: 221px;
  left: -22px;
  width: 40px;
  height: 40px;

  @media (min-width: 768px) {
    top: 332px;
    left: -39px;
    width: 65px;
    height: 65px;
  }
  @media (min-width: 1440px) {
    left: -87px;
    top: 423px;
    width: 65px;
    height: 65px;
  }
`,Hg=he(Wi)`
  background-image: url(${Lg});
  top: 49%;
  left: 94%;
  width: 40px;
  height: 55px;

  @media (min-width: 768px) {
    top: 168px;
    left: 678px;
    width: 79px;
    height: 111px;
  }
  @media (min-width: 1440px) {
    top: 349px;
    left: 1222px;
    width: 81px;
    height: 112px;
  }
`,Ug=he(Wi)`
  background-image: url(${zg});
  top: 77%;
  left: 85%;
  width: 73px;
  height: 101px;
  
  @media (min-width: 768px) {
    top: 352px;
    left: 614px;
    width: 143px;
    height: 201px;
  }
  @media (min-width: 1440px) {
    top: 527px;
    left: 1128px;
    width: 186px;
    height: 257px;
    }
`,Ua="/MistoHub/assets/building-0fd1d2de.jpg",Wg="/MistoHub/assets/building@2x-6f4bbcf0.jpg",Vg="/MistoHub/assets/building-tablet-fcd0323f.jpg",Gg="/MistoHub/assets/building-tablet@2x-4bed8edc.jpg",Jg="/MistoHub/assets/building-mobile-f96d3050.jpg",Qg="/MistoHub/assets/building-mobile@2x-2ecbf732.jpg",qg="/MistoHub/assets/building-546dad3d.webp",Yg="/MistoHub/assets/building@2x-cdd55e18.webp",Xg="/MistoHub/assets/building-tablet-6b49ad77.webp",Kg="/MistoHub/assets/building-tablet@2x-e385e999.webp",Zg="/MistoHub/assets/building-mobile-24746013.webp",_g="/MistoHub/assets/building-mobile@2x-ac0864e6.webp",$g=()=>c.jsxs(Fg,{children:[c.jsxs("h2",{className:"building-title",children:["Будівля ",c.jsx("span",{className:"accent",children:"МІСТОХАБ"})," це історична спадщина Полтави"]}),c.jsx("p",{className:"building-text",children:"В 1909 році на Спаській, 10 розташовувався перший у Полтаві пивоварний завод та пивниця «Притулок друзів»"}),c.jsxs("div",{className:"building-img-container",children:[c.jsxs("picture",{children:[c.jsx("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:`${Zg} 1x, ${_g} 2x`,width:"343",height:"348"}),c.jsx("source",{media:"(max-width: 767px)",srcSet:`${Jg} 1x, ${Qg} 2x`,width:"343",height:"348"}),c.jsx("source",{type:"image/webp",media:"(max-width: 1439px)",srcSet:`${Xg} 1x, ${Kg} 2x`,width:"704",height:"534"}),c.jsx("source",{media:"(max-width: 1439px)",srcSet:`${Vg} 1x, ${Gg} 2x`,width:"704",height:"534"}),c.jsx("source",{type:"image/webp",srcSet:`${qg} 1x, ${Yg} 2x`,width:"1200",height:"753"}),c.jsx("img",{className:"building-img",srcSet:`${Ua} 1x, ${Wg} 2x`,src:Ua,alt:"Будівля МІСТОХАБ",width:"1200",height:"753"})]}),c.jsx(Dg,{}),c.jsx(Bg,{}),c.jsx(Hg,{}),c.jsx(Ug,{})]})]}),eb=()=>c.jsxs(Eg,{id:"about",children:[c.jsx(Cg,{}),c.jsx(Ig,{}),c.jsx($g,{})]}),pc=F.div`
  .text {
    color: rgba(11, 11, 11, 0.5);
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.24px;
  }

  .textQuestion {
    color: #0b0b0b;
    font-family: Oddval;
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.36px;
    margin-top: 28px;
  }

  .companyName {
    color: #0b0b0b;
    font-family: Oddval;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.32px;
  }

  .textAnswer {
    color: #0b0b0b;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
    min-width: 303px;
    position: relative;
    padding-right: 20px;
  }

  .contentWrapper {
    padding: 0 0 20px 20px;
    position: relative;
    background-image: url('/src/assets/investors/illustration_modal_mob.svg');
    background-repeat: no-repeat;
    background-size: 207px 143px;
    background-position: bottom right;
    border-radius: 10px;
  }

  .main-heading-wrapper {
    display: flex;
    flex-direction: column;
    padding-top: 28px;
    height: fit-content;
    gap: 4px;
    width: fit-content;
  }

  .closeWrapper {
    display: flex;
    justify-content: flex-end;
    width: fit-content;
    height: fit-content;
    order: 1;
    margin-left: auto;
    padding-top: 10px;
    padding-right: 10px;
  }
  .closeButton {
    float: right;
    border: none;
    background: transparent;
    padding: 0;
  }

  .close-icon {
    fill: rgba(11, 11, 11, 0.5);
  }

  .close-icon:active {
    stroke: #0b0b0b;
  }

  .instaIcon {
    width: 14px;
    height: 14px;
    fill: white;
  }
  .svgWrapper {
    background: #f77d07;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    display: inline-flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 82px;
    left: 41px;
  }

  a {
    padding: 0;
    height: 16px;
  }

  .svgBackground {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 189px;
    height: 115px;
  }

  .closeWord {
    display: none;
  }

  .top-wrapper {
    display: flex;
    gap: 10px;
  }

  .title-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 28px;
  }

  .main-image {
    width: 70px;
    height: 70px;
    object-fit: contain;
  }

  @media screen and (min-width: 768px) {
    .text {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.28px;
    }

    .textQuestion {
      font-size: 20px;
      line-height: 26px;
      margin-top: 32px;
    }

    .companyName {
      font-size: 20px;
      line-height: 26px;
    }

    .textAnswer {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.32px;
      max-width: 516px;
      position: relative;
    }

    .contentWrapper {
      padding: 0 0 30px 30px;
      background-image: url('/src/assets/investors/illustration_modal_desktop.svg');
      background-repeat: no-repeat;
      background-size: 410px 282px;
      background-position: bottom right;
      border-radius: 10px;
      position: relative;
    }

    .main-heading-wrapper {
      display: flex;
      flex-direction: column;
      padding-top: 30px;
      height: fit-content;
      gap: 4px;
    }

    .closeWrapper {
      padding-top: 16px;
      padding-right: 16px;
      gap: 4px;
    }

    .closeWord {
      color: rgba(11, 11, 11, 0.5);
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.32px;
      background: transparent;
      border: none;
      width: 65px;
      hieght: 24px;
      padding: 0;
      display: block;
    }

    .closeWord:hover {
      color: #0b0b0b;
    }

    .close-icon:hover {
      stroke: #0b0b0b;
    }

    .closeSvg {
      width: 28px;
      height: 28px;
    }

    .svgWrapper {
      background: #f77d07;
      width: 40px;
      height: 40px;
      border-radius: 100px;
      display: inline-flex;
      padding: 8px;
      align-items: center;
      justify-content: center;
      gap: 10px;
      position: absolute;
      top: 109px;
      left: 61px;
    }

    .instaIcon {
      width: 16px;
      height: 16px;
      fill: white;
    }

    .top-wrapper {
      display: flex;
      gap: 16px;
    }

    .title-wrapper {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding-top: 30px;
    }

    .main-image {
      width: 100px;
      height: 100px;
    }
  }
`,fc=F(An)`
  &.ReactModal__Content {
    width: 100%;
    height: fit-content;
    margin: auto;
    border-radius: 10px;
    border: none;
    background: #fff;
    box-shadow:
      4px 17px 102.1px 0px rgba(0, 0, 0, 0.19),
      0px 25px 30.4px 0px rgba(0, 0, 0, 0.09);
    overflow: hidden;
    backgroundcolor: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 375px) and (max-width: 767.9px) {
      width: 343px;
    }

    @media screen and (min-width: 768px) {
      width: 576px;
    }
  }
`,hc="/MistoHub/assets/noname-a8edc818.jpg",mc=({data:t,onClose:e,isOpen:n})=>{const{firstName:i,secondName:r,type:s,imageURL:a,facebook:o,instagram:l,question:u,answer:d}=t;return c.jsx(fc,{onRequestClose:e,isOpen:n,style:{overlay:{zIndex:"2"}},onClose:e,shouldCloseOnOverlayClick:!0,contentLabel:"Image Modal",children:c.jsx(pc,{children:c.jsxs("div",{className:"contentWrapper",children:[c.jsxs("div",{className:"top-wrapper",children:[c.jsxs("div",{className:"title-wrapper",children:[c.jsx("img",{className:"main-image",src:a||hc,alt:`${i} ${r}`,loading:"lazy"}),c.jsx("div",{className:"svgWrapper",children:c.jsx("a",{href:o||l,target:"_blank",rel:"noopener noreferrer",children:o?c.jsx(K,{width:"28",height:"28",iconName:"icon-faceb",styles:"instaIcon"}):c.jsx(K,{width:"28",height:"28",iconName:"icon-instagram",styles:"instaIcon"})})})]}),c.jsxs("div",{className:"main-heading-wrapper",children:[c.jsx("h2",{className:"companyName",children:`${i} ${r}`}),c.jsx("p",{className:"text",children:s})]}),c.jsxs("div",{className:"closeWrapper",children:[c.jsx("button",{className:"closeWord",onClick:e,children:"Закрити"}),c.jsx("button",{className:"closeButton",onClick:e,children:c.jsx(K,{width:"12",height:"12",iconName:"close",styles:"close-icon"})})]})]}),c.jsx("p",{className:"textQuestion",children:u}),c.jsx("p",{className:"textAnswer",children:d})]})})})},Pt=({startTranslate:t,endTranslate:e})=>os`
  0% {
    transform: translateX(${t}%);
  }
  100% {
    transform: translateX(${e}%);
  }
`,tb=F.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  div {
    position: relative;
    overflow: hidden;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap: 13px;
  }
`,nb=F.div`
  max-width: 375px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,ib=F.div`
  ${t=>{const e={startTranslate:0,endTranslate:t.$length===20?-(t.$length*t.$length-.3*t.$length):-(t.$length*t.$length+.3*t.$length)},n={startTranslate:t.$length===20?-(t.$length*t.$length-.3*t.$length):-(t.$length*t.$length+.3*t.$length),endTranslate:0},i=Pt(e),r=Pt(n),s={startTranslate:0,endTranslate:t.$length===20?-(t.$length*t.$length+2.2*t.$length):-(t.$length*t.$length+.2*t.$length)},a={startTranslate:t.$length===20?-(t.$length*t.$length+2.2*t.$length):-(t.$length*t.$length+.2*t.$length),endTranslate:0},o=Pt(s),l=Pt(a),u={startTranslate:0,endTranslate:t.$length===20?-(t.$length*t.$length-10.5*t.$length):-(t.$length*t.$length+1.2*t.$length)},d={startTranslate:t.$length===20?-(t.$length*t.$length-10.5*t.$length):-(t.$length*t.$length-8*t.$length),endTranslate:0},p=Pt(u),h=Pt(d);return oe`
      &.group-0 {
        overflow: visible;
        animation: ${oe`
          ${i} 50s linear infinite
        `};
      }
      &.group-1 {
        overflow: visible;
        animation: ${oe`
          ${r} 50s linear infinite
        `};
      }
      &.group-2 {
        overflow: visible;
        animation: ${oe`
          ${i} 50s linear infinite
        `};
      }
      &.group-3 {
        overflow: visible;
        animation: ${oe`
          ${r} 50s linear infinite
        `};
      }
      &.group-4 {
        overflow: visible;
        animation: ${oe`
          ${i} 50s linear infinite
        `};
      }
      &.group-5 {
        overflow: visible;
        animation: ${oe`
          ${r} 50s linear infinite
        `};
      }
      &.group-0:hover,
      &.group-1:hover,
      &.group-2:hover,
      &.group-3:hover,
      &.group-4:hover,
      &.group-5:hover {
        animation-play-state: paused;
      }
      @media screen and (min-width: 768px) {
        &.group-0 {
          overflow: visible;
          animation: ${oe`
            ${o} 50s linear infinite
          `};
        }
        &.group-1 {
          overflow: visible;
          animation: ${oe`
            ${l} 50s linear infinite
          `};
        }
        &.group-2 {
          overflow: visible;
          animation: ${oe`
            ${o} 50s linear infinite
          `};
        }
        &.group-3 {
          overflow: visible;
          animation: ${oe`
            ${l} 50s linear infinite
          `};
        }
        &.group-4 {
          overflow: visible;
          animation: ${oe`
            ${o} 50s linear infinite
          `};
        }
        &.group-5 {
          overflow: visible;
          animation: ${oe`
            ${l} 50s linear infinite
          `};
        }
      }
      @media screen and (min-width: 1440px) {
        &.group-0 {
          overflow: visible;
          animation: ${oe`
            ${p} 80s linear infinite
          `};
        }
        &.group-1 {
          overflow: visible;
          animation: ${oe`
            ${h} 80s linear infinite
          `};
        }
        &.group-2 {
          overflow: visible;
          animation: ${oe`
            ${p} 80s linear infinite
          `};
        }
        &.group-3 {
          overflow: visible;
          animation: ${oe`
            ${h} 80s linear infinite
          `};
        }
        &.group-4 {
          overflow: visible;
          animation: ${oe`
            ${p} 80s linear infinite
          `};
        }
        &.group-5 {
          overflow: visible;
          animation: ${oe`
            ${h} 80s linear infinite
          `};
        }
      }
    `}}
  .item-list {
    width: 80px;
    height: 62px;
    margin: 0;
    padding: 0;
    border-radius: 10px;
    background-color: transparent;
    border: none;
  }

  .item-list img {
    filter: opacity(0px);
    transition: filter 1s linear;
  }

  .item-list.on-blur img {
    filter: opacity(35%);
  }

  ul:hover {
    animation-play-state: paused;
  }

  li {
    cursor: pointer;
    flex-shrink: 0;
    flex-grow: 0;
  }

  img {
    display: block;
    width: 80px;
    height: 62px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    row-gap: 30px;

    ul {
      column-gap: 30px;
    }

    .item-list {
      width: 180px;
      height: 140px;
    }

    img {
      width: 180px;
      height: 140px;
      border-radius: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    .item-list img {
      filter: opacity(0px);
      transition: filter 1s linear;
    }

    .item-list.on-blur img {
      filter: opacity(35%);
    }

    ul:hover {
      animation-play-state: paused;
    }

    li {
      cursor: pointer;
    }
  }
`,rb="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let hn=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+=rb[n[t]&63];return e};const sb=(t,e,n,i,r,s)=>{const a=t%2===0,o=t===(s==null?void 0:s.length)-1;let l=!1;return a?l=t===0||o?e.left<=n.left+(i?40:r?80:200)||e.left>=n.right-(i?80:r?180:400):e.left<=n.left+(i?-30:r?-40:10)||e.left>=n.right-(i?50:r?90:170):l=o?e.right<=n.left+(i?80:r?180:400)||e.right>=n.right-(i?40:r?80:200):e.right<=n.left+(i?50:r?90:170)||e.right>=n.right-(i?-30:r?-40:10),l},ab=t=>{const e=[];for(let n=0;n<t.length;n+=20){let i=t.slice(n,n+20);if(i.length<20&&n+20>=t.length){const r=20-i.length;i=[...i,...Array.from({length:r},(s,a)=>i[a%i.length])]}e.push(i)}return e},ob=({people:t})=>{const[e,n]=S.useState(null),[i,r]=S.useState(null),[s,a]=S.useState(!1),o=ze({maxWidth:767}),l=ze({maxWidth:1440});S.useEffect(()=>{(async()=>{try{const g=ab(t);n(g)}catch(g){console.error("Error fetching people data:",g)}})()},[t]);const u=S.useMemo(()=>h=>{const g=document.getElementById("investors-anim"),b=document.getElementById(`container-${h}`).getElementsByClassName("item-list");for(const v of b){const f=v.getBoundingClientRect(),x=g.getBoundingClientRect();sb(h,f,x,o,l,e)?(v.classList.add("on-blur"),v.disabled=!0):(v.classList.remove("on-blur"),v.disabled=!1)}},[o,l,e]);S.useEffect(()=>{if(!e)return;const h=setInterval(()=>{e.forEach((g,m)=>{u(m)})},10);return()=>clearInterval(h)},[e,u]);const d=h=>{r(h),a(!0)},p=()=>{r(null),a(!1)};return c.jsxs(tb,{children:[c.jsx(nb,{id:"investors-anim",children:e==null?void 0:e.map((h,g)=>c.jsx(ib,{id:`container-${g}`,$length:h.length,className:`group-${g} ${g%2===0?"odd-group":"even-group"}`,children:c.jsx("ul",{children:h.map(m=>c.jsx("li",{children:c.jsx("button",{"data-group_id":g,className:"item-list",type:"button",onClick:()=>d(m),children:c.jsx("img",{src:m.imageURL?m.imageURL:hc,alt:`Investor ${m.id}`,loading:"lazy"})})},hn()))})},hn()))}),i&&c.jsx(mc,{data:i,onClose:p,isOpen:s})]})},gc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAACkCAAAAAA7nASIAAACrklEQVR42u3cu26kMBSA4bz/S6GVCwoKiikopnBB4YLCBQWFC5axxzeGTBJlR3sY/acJHIHCp+O7onys7xsf2LBhw4YNGzZs2LBhw4YNGzZs2LBhw4YNGzZsb2378yRe/nm/+t3YsGETZ5M1AGLDhg0bNmzYsGHDhg0bNmzYsGF7ke28gQ0bNmzYsGHDhg2bYJsdtR7n47R9SM9Ga22dLJttttD7rNOq8dHqw7TSFcO0Id0Mi3jbfCfcosufO7dFOpfU9TmtJuG2krZ9rnuedl2ZbibRNucN7Wjt1V/193So2qDNtS3Sq6+aulo7+rRaJNsunlDUxPhr7cW+Kbohp41voaGIPn0RbLNlUWYPStVUsZd1CdGWtfKVm+XahqrXXOLdWD043e5S2YY0YFZ38my+PuvD1/pulUf+Xhub7Gm+c6nMIm1z2STXdfHdabuIP3ehYgFzW20WqTazSzTh4+dPhokduS6jNJveJbrQFo/XL/XAE98ez2LrQyWK53QM+4lNn9eWliD6LWzuRzaxbXJ6Mpb0D7ZzjSW7OcCVc0CYuewt4mu7OaAXPQfs5u4pzt31zOXia7tCNdXLwtdcw/GaK82C51pz2bIL5bXyUm7awn5Hp4XJUqYFr5VDnxmK7ajJFQybGXdJY0kYGe/pbjdqSrDl6BNo25tOQ1N87OLTajDmqvI4ee+It71pSEvbm9a20GvyyYgrO1N6sI22+qjhH0wAL7WtRh3QKlznxtSUyyMiNa/Cbesy3O9bUx0SxROtq7vNAvqLoz2pZ6/Oboth81CFZdrSk/vukaxM2/8NbNiwYcOGDRs2bNhea+PvzLFhw4YNGzZs2LBhw4YNGzZs2LBhO4GN/xuKDRu2X9rOG9iwYcOGDRs2bNiwYcOGDRs2bNiwYcOGDRu2EH8B4ajrnFKix8YAAAAASUVORK5CYII=",lb=({isOpen:t,data:e,onClose:n})=>{const{name:i,logoURL:r,link:s,question:a,answer:o}=e;return t?c.jsx(fc,{onRequestClose:n,isOpen:t,style:{overlay:{zIndex:"2"}},onClose:n,shouldCloseOnOverlayClick:!0,contentLabel:"Image Modal",children:c.jsx(pc,{children:c.jsxs("div",{className:"contentWrapper",children:[c.jsxs("div",{className:"top-wrapper",children:[c.jsxs("div",{className:"title-wrapper",children:[c.jsx("img",{className:"main-image",src:r||gc,alt:i,loading:"lazy"}),s&&c.jsx("div",{className:"svgWrapper",children:c.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:c.jsx(K,{iconName:"icon-instagram",styles:"instaIcon"})})})]}),c.jsxs("div",{className:"main-heading-wrapper",children:[c.jsx("h2",{className:"companyName",children:i}),c.jsx("p",{className:"text",children:"компанія"})]}),c.jsxs("div",{className:"closeWrapper",children:[c.jsx("button",{className:"closeWord",onClick:n,children:"Закрити"}),c.jsx("button",{className:"closeButton",onClick:n,children:c.jsx(K,{iconName:"close",styles:"close-icon",width:12,height:12})})]})]}),c.jsx("p",{className:"textQuestion",children:a}),c.jsx("p",{className:"textAnswer",children:o})]})})}):null},cb=({start:t,end:e})=>os`
  0% {
    transform: translateX(${t});
  }
  100% {
    transform: translateX(${e}px);
  }
`,db=F.div`
  margin-bottom: 60px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-bottom: 120px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 150px;
  }
`,ub=F.ul`
  ${t=>{if(!t.$anim)return;const e=cb(t.$anim);return oe`
      animation: ${e} ${t.$anim.time}s linear infinite;
    `}}

  display: flex;
  column-gap: 12px;

  &:active {
    animation-play-state: paused;
  }

  li {
    cursor: pointer;
  }

  img {
    width: 80px;
    height: 62px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 32px;

    img {
      width: 180px;
      height: 140px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:hover {
      animation-play-state: paused;
    }
  }
`,pb=(t,e,n)=>{if(!t)return;const i=t*(e||n?212:92),r=e?1440:n?768:375,s=i*2-r,a=e?34.2:n?68.2:29.6;return{start:0,end:-s,time:s/a}},fb=({companies:t})=>{const[e,n]=S.useState(null),i=ze({minWidth:1440}),r=ze({minWidth:768}),s=o=>{n(o)},a=()=>{n(null)};if(t)return c.jsx(db,{children:Array.isArray(t)&&c.jsxs(ub,{$anim:pb(t.length,i,r),children:[Array.from([...t,...t]).map(o=>c.jsx("li",{children:c.jsx("img",{src:o.logoURL||gc,alt:`Company ${o.id}`,onClick:()=>s(o),loading:"lazy"})},hn())),e&&c.jsx(lb,{isOpen:e!==null,data:e,onClose:a})]})})},gi=(t,e="p")=>{const n={p:["людина","людини","людей"],i:["імпакт-інвестор","імпакт-інвестори","імпакт-інвесторів"],k:["компанія","компанії","компаній"]};return t%10===1&&t%100!==11?n[e][0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[e][1]:n[e][2]},Wa=F(En)`
  padding-top: 60px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    padding-top: 120px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 150px;
    margin-bottom: 80px;
  }
`,hb=F(En)`
  padding: 0;
`,mb=F.p`
  color: rgba(11, 11, 11, 0.5);
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.32px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.32px;
  }
`,gb=F.h2`
  color: #0b0b0b;
  font-family: Oddval;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.48px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    font-size: 45px;
    line-height: 50px;
    letter-spacing: -0.9px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 60px;
    font-weight: 600;
    line-height: 68px;
    letter-spacing: -1.2px;
  }
`,Va=F.p`
  color: rgba(11, 11, 11, 0.8);
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.32px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.48px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -0.56px;
  }
`,bb=({people:t,companies:e})=>{const[n,i]=S.useState(null),r=()=>{i(null)};return c.jsxs("section",{id:"investors",children:[c.jsxs(Wa,{children:[c.jsx(mb,{children:"Імпакт-інвестори МІСТОХАБ"}),c.jsx(gb,{children:"З нами вже"}),(t==null?void 0:t.length)>0&&c.jsxs(Va,{children:[t.length," ",gi(t.length,"p")]})]}),c.jsxs(hb,{children:[t&&c.jsx(ob,{people:t}),c.jsx(Wa,{children:(e==null?void 0:e.length)>0&&c.jsxs(Va,{children:[e.length," ",gi(e.length,"k")]})}),e&&c.jsx(fb,{companies:e})]}),n&&c.jsx(mc,{data:n,onClose:r})]})},xb=F.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #f77d07;
  border: none;
  outline: none;
  transition: opacity 0.3s ease;
  z-index: 90;
  padding: 0;
  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
  }

  svg {
    margin: 0 auto;
    width: 12px;
    height: 8px;
    stroke-width: 1.6px;
    fill: none;
    stroke: #fff;

    @media screen and (min-width: 768px) {
      width: 14px;
      height: 10px;
      stroke-width: 2px;
    }
  }
`;var ae={},js={},Mn={},jn={},bc="Expected a function",Ga=0/0,vb="[object Symbol]",wb=/^\s+|\s+$/g,yb=/^[-+]0x[0-9a-f]+$/i,Sb=/^0b[01]+$/i,Ab=/^0o[0-7]+$/i,Eb=parseInt,Tb=typeof Fn=="object"&&Fn&&Fn.Object===Object&&Fn,Cb=typeof self=="object"&&self&&self.Object===Object&&self,Mb=Tb||Cb||Function("return this")(),jb=Object.prototype,Ob=jb.toString,kb=Math.max,Pb=Math.min,wr=function(){return Mb.Date.now()};function Ib(t,e,n){var i,r,s,a,o,l,u=0,d=!1,p=!1,h=!0;if(typeof t!="function")throw new TypeError(bc);e=Ja(e)||0,bi(n)&&(d=!!n.leading,p="maxWait"in n,s=p?kb(Ja(n.maxWait)||0,e):s,h="trailing"in n?!!n.trailing:h);function g(T){var j=i,L=r;return i=r=void 0,u=T,a=t.apply(L,j),a}function m(T){return u=T,o=setTimeout(f,e),d?g(T):a}function b(T){var j=T-l,L=T-u,N=e-j;return p?Pb(N,s-L):N}function v(T){var j=T-l,L=T-u;return l===void 0||j>=e||j<0||p&&L>=s}function f(){var T=wr();if(v(T))return x(T);o=setTimeout(f,b(T))}function x(T){return o=void 0,h&&i?g(T):(i=r=void 0,a)}function w(){o!==void 0&&clearTimeout(o),u=0,i=l=r=o=void 0}function E(){return o===void 0?a:x(wr())}function M(){var T=wr(),j=v(T);if(i=arguments,r=this,l=T,j){if(o===void 0)return m(l);if(p)return o=setTimeout(f,e),g(l)}return o===void 0&&(o=setTimeout(f,e)),a}return M.cancel=w,M.flush=E,M}function Nb(t,e,n){var i=!0,r=!0;if(typeof t!="function")throw new TypeError(bc);return bi(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),Ib(t,e,{leading:i,maxWait:e,trailing:r})}function bi(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Rb(t){return!!t&&typeof t=="object"}function Lb(t){return typeof t=="symbol"||Rb(t)&&Ob.call(t)==vb}function Ja(t){if(typeof t=="number")return t;if(Lb(t))return Ga;if(bi(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=bi(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(wb,"");var n=Sb.test(t);return n||Ab.test(t)?Eb(t.slice(2),n?2:8):yb.test(t)?Ga:+t}var zb=Nb,On={};Object.defineProperty(On,"__esModule",{value:!0});On.addPassiveEventListener=function(e,n,i){var r=i.name;r||(r=n,console.warn("Listener must be a named function.")),ri.has(n)||ri.set(n,new Set);var s=ri.get(n);if(!s.has(r)){var a=function(){var o=!1;try{var l=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",null,l)}catch{}return o}();e.addEventListener(n,i,a?{passive:!0}:!1),s.add(r)}};On.removePassiveEventListener=function(e,n,i){e.removeEventListener(n,i),ri.get(n).delete(i.name||n)};var ri=new Map;Object.defineProperty(jn,"__esModule",{value:!0});var Fb=zb,Db=Hb(Fb),Bb=On;function Hb(t){return t&&t.__esModule?t:{default:t}}var Ub=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,Db.default)(e,n)},re={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var i=Ub(function(r){re.scrollHandler(e)},n);re.scrollSpyContainers.push(e),(0,Bb.addPassiveEventListener)(e,"scroll",i)}},isMounted:function(e){return re.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=re.scrollSpyContainers[re.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(i){return i(re.currentPositionX(e),re.currentPositionY(e))})},addStateHandler:function(e){re.spySetState.push(e)},addSpyHandler:function(e,n){var i=re.scrollSpyContainers[re.scrollSpyContainers.indexOf(n)];i.spyCallbacks||(i.spyCallbacks=[]),i.spyCallbacks.push(e),e(re.currentPositionX(n),re.currentPositionY(n))},updateStates:function(){re.spySetState.forEach(function(e){return e()})},unmount:function(e,n){re.scrollSpyContainers.forEach(function(i){return i.spyCallbacks&&i.spyCallbacks.length&&i.spyCallbacks.indexOf(n)>-1&&i.spyCallbacks.splice(i.spyCallbacks.indexOf(n),1)}),re.spySetState&&re.spySetState.length&&re.spySetState.indexOf(e)>-1&&re.spySetState.splice(re.spySetState.indexOf(e),1),document.removeEventListener("scroll",re.scrollHandler)},update:function(){return re.scrollSpyContainers.forEach(function(e){return re.scrollHandler(e)})}};jn.default=re;var Xt={},kn={};Object.defineProperty(kn,"__esModule",{value:!0});var Wb=function(e,n){var i=e.indexOf("#")===0?e.substring(1):e,r=i?"#"+i:"",s=window&&window.location,a=r?s.pathname+s.search+r:s.pathname+s.search;n?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},Vb=function(){return window.location.hash.replace(/^#/,"")},Gb=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},Jb=function(e){return getComputedStyle(e).position!=="static"},yr=function(e,n){for(var i=e.offsetTop,r=e.offsetParent;r&&!n(r);)i+=r.offsetTop,r=r.offsetParent;return{offsetTop:i,offsetParent:r}},Qb=function(e,n,i){if(i)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(Jb(e)){if(n.offsetParent!==e){var r=function(d){return d===e||d===document},s=yr(n,r),a=s.offsetTop,o=s.offsetParent;if(o!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(d){return d===document};return yr(n,l).offsetTop-yr(e,l).offsetTop};kn.default={updateHash:Wb,getHash:Vb,filterElementInContainer:Gb,scrollOffset:Qb};var Vi={},Os={};Object.defineProperty(Os,"__esModule",{value:!0});Os.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var ks={};Object.defineProperty(ks,"__esModule",{value:!0});var qb=On,Yb=["mousedown","mousewheel","touchmove","keydown"];ks.default={subscribe:function(e){return typeof document<"u"&&Yb.forEach(function(n){return(0,qb.addPassiveEventListener)(document,n,e)})}};var Pn={};Object.defineProperty(Pn,"__esModule",{value:!0});var Yr={registered:{},scrollEvent:{register:function(e,n){Yr.registered[e]=n},remove:function(e){Yr.registered[e]=null}}};Pn.default=Yr;Object.defineProperty(Vi,"__esModule",{value:!0});var Xb=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Kb=kn;Gi(Kb);var Zb=Os,Qa=Gi(Zb),_b=ks,$b=Gi(_b),ex=Pn,Ve=Gi(ex);function Gi(t){return t&&t.__esModule?t:{default:t}}var xc=function(e){return Qa.default[e.smooth]||Qa.default.defaultEasing},tx=function(e){return typeof e=="function"?e:function(){return e}},nx=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Xr=function(){return nx()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),vc=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},wc=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},yc=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},ix=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var i=document.body,r=document.documentElement;return Math.max(i.scrollWidth,i.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)},rx=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var i=document.body,r=document.documentElement;return Math.max(i.scrollHeight,i.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)},sx=function t(e,n,i){var r=n.data;if(!n.ignoreCancelEvents&&r.cancel){Ve.default.registered.end&&Ve.default.registered.end(r.to,r.target,r.currentPositionY);return}if(r.delta=Math.round(r.targetPosition-r.startPosition),r.start===null&&(r.start=i),r.progress=i-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var s=t.bind(null,e,n);Xr.call(window,s);return}Ve.default.registered.end&&Ve.default.registered.end(r.to,r.target,r.currentPosition)},Ps=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},In=function(e,n,i,r){n.data=n.data||vc(),window.clearTimeout(n.data.delayTimeout);var s=function(){n.data.cancel=!0};if($b.default.subscribe(s),Ps(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?wc(n):yc(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){Ve.default.registered.end&&Ve.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=tx(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=i,n.data.target=r;var a=xc(n),o=sx.bind(null,a,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){Ve.default.registered.begin&&Ve.default.registered.begin(n.data.to,n.data.target),Xr.call(window,o)},n.delay);return}Ve.default.registered.begin&&Ve.default.registered.begin(n.data.to,n.data.target),Xr.call(window,o)},Ji=function(e){return e=Xb({},e),e.data=e.data||vc(),e.absolute=!0,e},ax=function(e){In(0,Ji(e))},ox=function(e,n){In(e,Ji(n))},lx=function(e){e=Ji(e),Ps(e),In(e.horizontal?ix(e):rx(e),e)},cx=function(e,n){n=Ji(n),Ps(n);var i=n.horizontal?wc(n):yc(n);In(e+i,n)};Vi.default={animateTopScroll:In,getAnimationType:xc,scrollToTop:ax,scrollToBottom:lx,scrollTo:ox,scrollMore:cx};Object.defineProperty(Xt,"__esModule",{value:!0});var dx=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ux=kn,px=Is(ux),fx=Vi,hx=Is(fx),mx=Pn,Wn=Is(mx);function Is(t){return t&&t.__esModule?t:{default:t}}var Vn={},qa=void 0;Xt.default={unmount:function(){Vn={}},register:function(e,n){Vn[e]=n},unregister:function(e){delete Vn[e]},get:function(e){return Vn[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return qa=e},getActiveLink:function(){return qa},scrollTo:function(e,n){var i=this.get(e);if(!i){console.warn("target Element not found");return}n=dx({},n,{absolute:!1});var r=n.containerId,s=n.container,a=void 0;r?a=document.getElementById(r):s&&s.nodeType?a=s:a=document,n.absolute=!0;var o=n.horizontal,l=px.default.scrollOffset(a,i,o)+(n.offset||0);if(!n.smooth){Wn.default.registered.begin&&Wn.default.registered.begin(e,i),a===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):a.scrollTop=l,Wn.default.registered.end&&Wn.default.registered.end(e,i);return}hx.default.animateTopScroll(l,n,e,i)}};var Qi={};Object.defineProperty(Qi,"__esModule",{value:!0});var gx=kn,Sr=bx(gx);function bx(t){return t&&t.__esModule?t:{default:t}}var xx={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var i=this.scroller,r=i.get(e);if(r&&(n||e!==i.getActiveLink())){var s=this.containers[e]||document;i.scrollTo(e,{container:s})}},getHash:function(){return Sr.default.getHash()},changeHash:function(e,n){this.isInitialized()&&Sr.default.getHash()!==e&&Sr.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Qi.default=xx;Object.defineProperty(Mn,"__esModule",{value:!0});var Gn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vx=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),wx=S,Ya=Nn(wx),yx=jn,Jn=Nn(yx),Sx=Xt,Ax=Nn(Sx),Ex=Et,ie=Nn(Ex),Tx=Qi,st=Nn(Tx);function Nn(t){return t&&t.__esModule?t:{default:t}}function Cx(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Mx(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function jx(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Xa={to:ie.default.string.isRequired,containerId:ie.default.string,container:ie.default.object,activeClass:ie.default.string,activeStyle:ie.default.object,spy:ie.default.bool,horizontal:ie.default.bool,smooth:ie.default.oneOfType([ie.default.bool,ie.default.string]),offset:ie.default.number,delay:ie.default.number,isDynamic:ie.default.bool,onClick:ie.default.func,duration:ie.default.oneOfType([ie.default.number,ie.default.func]),absolute:ie.default.bool,onSetActive:ie.default.func,onSetInactive:ie.default.func,ignoreCancelEvents:ie.default.bool,hashSpy:ie.default.bool,saveHashHistory:ie.default.bool,spyThrottle:ie.default.number};Mn.default=function(t,e){var n=e||Ax.default,i=function(s){jx(a,s);function a(o){Cx(this,a);var l=Mx(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,o));return r.call(l),l.state={active:!1},l}return vx(a,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,u=this.props.container;return l&&!u?document.getElementById(l):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();Jn.default.isMounted(l)||Jn.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(st.default.isMounted()||st.default.mount(n),st.default.mapContainer(this.props.to,l)),Jn.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){Jn.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var u={};this.state&&this.state.active?u=Gn({},this.props.style,this.props.activeStyle):u=Gn({},this.props.style);var d=Gn({},this.props);for(var p in Xa)d.hasOwnProperty(p)&&delete d[p];return d.className=l,d.style=u,d.onClick=this.handleClick,Ya.default.createElement(t,d)}}]),a}(Ya.default.PureComponent),r=function(){var a=this;this.scrollTo=function(o,l){n.scrollTo(o,Gn({},a.state,l))},this.handleClick=function(o){a.props.onClick&&a.props.onClick(o),o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault(),a.scrollTo(a.props.to,a.props)},this.spyHandler=function(o,l){var u=a.getScrollSpyContainer();if(!(st.default.isMounted()&&!st.default.isInitialized())){var d=a.props.horizontal,p=a.props.to,h=null,g=void 0,m=void 0;if(d){var b=0,v=0,f=0;if(u.getBoundingClientRect){var x=u.getBoundingClientRect();f=x.left}if(!h||a.props.isDynamic){if(h=n.get(p),!h)return;var w=h.getBoundingClientRect();b=w.left-f+o,v=b+w.width}var E=o-a.props.offset;g=E>=Math.floor(b)&&E<Math.floor(v),m=E<Math.floor(b)||E>=Math.floor(v)}else{var M=0,T=0,j=0;if(u.getBoundingClientRect){var L=u.getBoundingClientRect();j=L.top}if(!h||a.props.isDynamic){if(h=n.get(p),!h)return;var N=h.getBoundingClientRect();M=N.top-j+l,T=M+N.height}var O=l-a.props.offset;g=O>=Math.floor(M)&&O<Math.floor(T),m=O<Math.floor(M)||O>=Math.floor(T)}var I=n.getActiveLink();if(m){if(p===I&&n.setActiveLink(void 0),a.props.hashSpy&&st.default.getHash()===p){var R=a.props.saveHashHistory,P=R===void 0?!1:R;st.default.changeHash("",P)}a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive(p,h))}if(g&&(I!==p||a.state.active===!1)){n.setActiveLink(p);var k=a.props.saveHashHistory,z=k===void 0?!1:k;a.props.hashSpy&&st.default.changeHash(p,z),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(p,h))}}}};return i.propTypes=Xa,i.defaultProps={offset:0},i};Object.defineProperty(js,"__esModule",{value:!0});var Ox=S,Ka=Sc(Ox),kx=Mn,Px=Sc(kx);function Sc(t){return t&&t.__esModule?t:{default:t}}function Ix(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Za(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Nx(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Rx=function(t){Nx(e,t);function e(){var n,i,r,s;Ix(this,e);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return s=(i=(r=Za(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(o))),r),r.render=function(){return Ka.default.createElement("a",r.props,r.props.children)},i),Za(r,s)}return e}(Ka.default.Component);js.default=(0,Px.default)(Rx);var Ns={};Object.defineProperty(Ns,"__esModule",{value:!0});var Lx=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),zx=S,_a=Ac(zx),Fx=Mn,Dx=Ac(Fx);function Ac(t){return t&&t.__esModule?t:{default:t}}function Bx(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Hx(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Ux(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Wx=function(t){Ux(e,t);function e(){return Bx(this,e),Hx(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return Lx(e,[{key:"render",value:function(){return _a.default.createElement("button",this.props,this.props.children)}}]),e}(_a.default.Component);Ns.default=(0,Dx.default)(Wx);var Rs={},qi={};Object.defineProperty(qi,"__esModule",{value:!0});var Vx=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Gx=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Jx=S,$a=Yi(Jx),Qx=Xo;Yi(Qx);var qx=Xt,eo=Yi(qx),Yx=Et,to=Yi(Yx);function Yi(t){return t&&t.__esModule?t:{default:t}}function Xx(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Kx(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Zx(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}qi.default=function(t){var e=function(n){Zx(i,n);function i(r){Xx(this,i);var s=Kx(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return s.childBindings={domNode:null},s}return Gx(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;eo.default.unregister(this.props.name)}},{key:"registerElems",value:function(s){eo.default.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return $a.default.createElement(t,Vx({},this.props,{parentBindings:this.childBindings}))}}]),i}($a.default.Component);return e.propTypes={name:to.default.string,id:to.default.string},e};Object.defineProperty(Rs,"__esModule",{value:!0});var no=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_x=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),$x=S,io=Ls($x),e0=qi,t0=Ls(e0),n0=Et,ro=Ls(n0);function Ls(t){return t&&t.__esModule?t:{default:t}}function i0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r0(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function s0(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Ec=function(t){s0(e,t);function e(){return i0(this,e),r0(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return _x(e,[{key:"render",value:function(){var i=this,r=no({},this.props);return delete r.name,r.parentBindings&&delete r.parentBindings,io.default.createElement("div",no({},r,{ref:function(a){i.props.parentBindings.domNode=a}}),this.props.children)}}]),e}(io.default.Component);Ec.propTypes={name:ro.default.string,id:ro.default.string};Rs.default=(0,t0.default)(Ec);var Ar=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},so=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function ao(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function oo(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function lo(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Qn=S,pt=jn,Er=Xt,se=Et,at=Qi,co={to:se.string.isRequired,containerId:se.string,container:se.object,activeClass:se.string,spy:se.bool,smooth:se.oneOfType([se.bool,se.string]),offset:se.number,delay:se.number,isDynamic:se.bool,onClick:se.func,duration:se.oneOfType([se.number,se.func]),absolute:se.bool,onSetActive:se.func,onSetInactive:se.func,ignoreCancelEvents:se.bool,hashSpy:se.bool,spyThrottle:se.number},a0={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var i=n||Er,r=function(a){lo(o,a);function o(l){ao(this,o);var u=oo(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,l));return s.call(u),u.state={active:!1},u}return so(o,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,d=this.props.container;return u?document.getElementById(u):d&&d.nodeType?d:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();pt.isMounted(u)||pt.mount(u,this.props.spyThrottle),this.props.hashSpy&&(at.isMounted()||at.mount(i),at.mapContainer(this.props.to,u)),this.props.spy&&pt.addStateHandler(this.stateHandler),pt.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){pt.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var d=Ar({},this.props);for(var p in co)d.hasOwnProperty(p)&&delete d[p];return d.className=u,d.onClick=this.handleClick,Qn.createElement(e,d)}}]),o}(Qn.Component),s=function(){var o=this;this.scrollTo=function(l,u){i.scrollTo(l,Ar({},o.state,u))},this.handleClick=function(l){o.props.onClick&&o.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),o.scrollTo(o.props.to,o.props)},this.stateHandler=function(){i.getActiveLink()!==o.props.to&&(o.state!==null&&o.state.active&&o.props.onSetInactive&&o.props.onSetInactive(),o.setState({active:!1}))},this.spyHandler=function(l){var u=o.getScrollSpyContainer();if(!(at.isMounted()&&!at.isInitialized())){var d=o.props.to,p=null,h=0,g=0,m=0;if(u.getBoundingClientRect){var b=u.getBoundingClientRect();m=b.top}if(!p||o.props.isDynamic){if(p=i.get(d),!p)return;var v=p.getBoundingClientRect();h=v.top-m+l,g=h+v.height}var f=l-o.props.offset,x=f>=Math.floor(h)&&f<Math.floor(g),w=f<Math.floor(h)||f>=Math.floor(g),E=i.getActiveLink();if(w)return d===E&&i.setActiveLink(void 0),o.props.hashSpy&&at.getHash()===d&&at.changeHash(),o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive()),pt.updateStates();if(x&&E!==d)return i.setActiveLink(d),o.props.hashSpy&&at.changeHash(d),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(d)),pt.updateStates()}}};return r.propTypes=co,r.defaultProps={offset:0},r},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(i){lo(r,i);function r(s){ao(this,r);var a=oo(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,s));return a.childBindings={domNode:null},a}return so(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Er.unregister(this.props.name)}},{key:"registerElems",value:function(a){Er.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return Qn.createElement(e,Ar({},this.props,{parentBindings:this.childBindings}))}}]),r}(Qn.Component);return n.propTypes={name:se.string,id:se.string},n}},o0=a0;Object.defineProperty(ae,"__esModule",{value:!0});ae.Helpers=ae.ScrollElement=ae.ScrollLink=Lc=ae.animateScroll=ae.scrollSpy=ae.Events=ae.scroller=ae.Element=ae.Button=ae.Link=void 0;var l0=js,Tc=Xe(l0),c0=Ns,Cc=Xe(c0),d0=Rs,Mc=Xe(d0),u0=Xt,jc=Xe(u0),p0=Pn,Oc=Xe(p0),f0=jn,kc=Xe(f0),h0=Vi,Pc=Xe(h0),m0=Mn,Ic=Xe(m0),g0=qi,Nc=Xe(g0),b0=o0,Rc=Xe(b0);function Xe(t){return t&&t.__esModule?t:{default:t}}ae.Link=Tc.default;ae.Button=Cc.default;ae.Element=Mc.default;ae.scroller=jc.default;ae.Events=Oc.default;ae.scrollSpy=kc.default;var Lc=ae.animateScroll=Pc.default;ae.ScrollLink=Ic.default;ae.ScrollElement=Nc.default;ae.Helpers=Rc.default;ae.default={Link:Tc.default,Button:Cc.default,Element:Mc.default,scroller:jc.default,Events:Oc.default,scrollSpy:kc.default,animateScroll:Pc.default,ScrollLink:Ic.default,ScrollElement:Nc.default,Helpers:Rc.default};const x0=()=>{const[t,e]=S.useState(0),n=()=>{window.scrollY>250?e(1):e(0)},i=()=>{Lc.scrollToTop({duration:500,smooth:"easeInOutQuart"})};return S.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]),c.jsx(xb,{style:{opacity:t},type:"button",title:"Вгору",onClick:i,children:c.jsx(K,{iconName:"topscroll"})})},v0=()=>{const t=ze({query:"(max-width: 768px)"});return c.jsx("address",{children:c.jsxs("ul",{children:[c.jsxs("li",{children:[c.jsx("span",{children:"Телефон: "}),c.jsx(Dt,{to:t?"tel:+380680745765":"https://t.me/MISTOHUB_admin",target:"blank",rel:"noopener noreferrer",children:"+38 (068) 074-57-65"})]}),c.jsxs("li",{children:[c.jsx("span",{children:"Email:"}),c.jsx(Dt,{to:"mailto:mistohub@gmail.com",target:"blank",rel:"noopener noreferrer",children:"mistohub@gmail.com"})]})]})})},w0=F.footer`
  width: 100%;
  background-color: #0b0b0b;
  color: #ffffff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  @media (min-width: 375px) {
    font-size: 16px;
  }
`,y0=F(ji)`
  min-width: 320px;
  max-width: 375px;
  padding: 32px 16px 20px;

  .map-wrapper {
    width: 343px;
    height: 370px;
    border-radius: 20px;
    margin-bottom: 32px;
  }
  @media (max-width: 374px) {
    .map-wrapper {
      width: 288px;
    }
  }
  .icon-logo {
    width: 81px;
    height: 27px;
    fill: #ffffff;
    margin-bottom: 24px;
  }
  address {
    font-style: normal;
  }
  .address-mistohub {
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: left;

    margin-bottom: 24px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 244px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 40px;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  a {
    color: inherit;
    outline: none;
    font-size: 20px;
    transition: color 0.25s ease-in-out;
    &:active {
      color: #f77d07;
    }
  }
  .btn-supp {
    font-size: 16px;
    font-weight: 600;
    color: inherit;
    padding: 14px 24px;
    gap: 8px;
    border: none;
    border-radius: 30px;
    background-color: #f77d07;
    margin-bottom: 64px;
    outline: none;
    transition: background 0.25s ease-in-out;
    transition: color 0.25s ease-in-out;
    &:active {
      color: #898b90;
      background: #e3e3e3;
    }
  }
  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 768px) {
    width: 768px;
    min-width: unset;
    max-width: unset;
    padding: 64px 32px 32px;

    .map-wrapper {
      width: 704px;
      height: 486px;
      margin-bottom: 64px;
    }
    .icon-logo {
      width: 118px;
      height: 40px;
      margin-bottom: 30px;
    }
    .address-mistohub {
      line-height: 1.5;
      margin-bottom: 30px;
    }
    ul {
      gap: 24px;
      width: 293px;
      padding: 24px;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin-bottom: 30px;
    }
    a {
      font-size: 24px;
    }
    .btn-supp {
      font-size: 18px;
      padding: 23px 43px;
      border-radius: 60px;
      margin-bottom: 80px;
    }
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 120px 120px 38px;
    .footer-up {
      display: flex;
      gap: 120px;
      flex-direction: row-reverse;
    }
    .map-wrapper {
      width: 787px;
      height: 516px;
      margin-bottom: 80px;
    }

    ul {
      margin-bottom: 60px;
    }
    a:hover {
      color: #f77d07;
    }
    .btn-supp {
      margin-bottom: 0px;
      &:hover {
        background: #e97200;
      }
    }
  }
`,S0=F.div`
  color: rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 20px;
  width: 100%;

  div:first-child {
    display: flex;
    margin-bottom: 8px;
    gap: 8px;
  }

  p {
    padding-right: 8px;
    position: relative;
  }

  p::after {
    content: '';
    position: absolute;
    top: 55%;
    height: 80%;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.5);
    right: 0;
    transform: translateY(-50%);
  }

  .btn-goit {
    display: flex;
    align-items: center;
    gap: 8px;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: none;
    margin-bottom: 20px;
    transition: color 0.25s ease-in-out;

    &:active {
      color: #ffffff;
      .icon-goit-white {
        fill: #ffffff;
      }
    }
  }

  .icon-goit-white {
    width: 59px;
    height: 18px;
    fill: #f77d07;
    transition: fill 0.25s ease-in-out;
  }

  @media (min-width: 768px) {
    padding-top: 38px;
    display: flex;
    column-gap: 10px;
    align-items: baseline;
    flex-wrap: wrap;
    row-gap: 24px;

    p {
      padding-right: 10px;
    }

    .btn-goit {
      gap: 10px;
      margin-bottom: 0px;
    }

    .icon-goit-white {
      width: 100px;
      height: 30px;
    }
  }

  @media (min-width: 1440px) {
    align-items: center;

    div:first-child {
      margin-bottom: 0;
    }
    .btn-goit:hover {
      color: #ffffff;
      .icon-goit-white {
        fill: #ffffff;
      }
    }
  }
`;function A0(){const{openModal:t}=Qt();return c.jsx(w0,{id:"footer",children:c.jsxs(y0,{children:[c.jsxs("div",{className:"footer-up",children:[c.jsx("iframe",{className:"map-wrapper",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.710898082731!2d34.5648984!3d49.5843421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d825941b73909d%3A0xc6c99d30efb9fc4a!2z0JzQhtCh0KLQntCl0JDQkQ!5e0!3m2!1sru!2sua!4v1715196007146!5m2!1sua!2sua",loading:"lazy"}),c.jsxs("div",{children:[c.jsx(K,{width:"81",height:"27",iconName:"main-logo",styles:"icon-logo"}),c.jsx("p",{className:"address-mistohub",children:"м.Полтава, вул. Спаська, 10"}),c.jsx(v0,{}),c.jsx("button",{className:"btn-supp",type:"button",onClick:()=>t("join_modal"),children:c.jsx("span",{children:"Підтримати проєкт"})})]})]}),c.jsxs(S0,{children:[c.jsxs("div",{children:[c.jsx("p",{children:"© ГО «МІСТО ХАБ»"}),c.jsx("p",{children:"Всі права захищені"})]}),c.jsxs("button",{type:"button",className:"btn-goit",onClick:()=>t("team_modal"),children:["Розроблено студентами"," ",c.jsx(K,{width:"59",height:"18",iconName:"icon-goit-white",styles:"icon-goit-white"})]}),c.jsx(xs,{sectionName:"footer"})]})]})})}const E0="/MistoHub/assets/hero1-467405ac.png",T0="/MistoHub/assets/hero1@2x-bac38f8b.png",C0="/MistoHub/assets/hero1-61ef068c.webp",M0="/MistoHub/assets/hero1@2x-1d7d899a.webp",j0="/MistoHub/assets/hero2-0dc9576f.png",O0="/MistoHub/assets/hero2@2x-fcfc1f52.png",k0="/MistoHub/assets/hero2-1d678767.webp",P0="/MistoHub/assets/hero2@2x-eaab9d3e.webp",I0="/MistoHub/assets/hero3-cb0802fe.png",N0="/MistoHub/assets/hero3@2x-b06dc8d7.png",R0="/MistoHub/assets/hero3-494c0e3b.webp",L0="/MistoHub/assets/hero3@2x-14174f0d.webp",z0="/MistoHub/assets/hero4-eaf95bb1.png",F0="/MistoHub/assets/hero4@2x-99b52b9b.png",D0="/MistoHub/assets/hero4-a36809e4.webp",B0="/MistoHub/assets/hero4@2x-99a7f7bd.webp",H0="/MistoHub/assets/hero5-6f2417a3.png",U0="/MistoHub/assets/hero5@2x-830c1cd4.png",W0="/MistoHub/assets/hero5-2ab4f108.webp",V0="/MistoHub/assets/hero5@2x-0a268f87.webp",G0=[{imgPng1:E0,imgPng2:T0,imgWebP1:C0,imgWebP2:M0,alt:"Kitchen 1"},{imgPng1:j0,imgPng2:O0,imgWebP1:k0,imgWebP2:P0,alt:"Kitchen 2"},{imgPng1:I0,imgPng2:N0,imgWebP1:R0,imgWebP2:L0,alt:"Kitchen 3"},{imgPng1:z0,imgPng2:F0,imgWebP1:D0,imgWebP2:B0,alt:"Kitchen 4"},{imgPng1:H0,imgPng2:U0,imgWebP1:W0,imgWebP2:V0,alt:"Kitchen 5"}],J0=F.section`
  min-width: 320px;
  width: 100%;
  height: 700px;

  @media only screen and (min-width: 768px) {
    height: 1024px;
  }

  @media only screen and (min-width: 1440px) {
    height: 880px;
  }
`,Q0=F(En)`
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 320px;
  max-width: 100%;
  height: 700px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    min-width: 100%;
    height: 1024px;
  }

  @media only screen and (min-width: 1440px) {
    min-width: 100%;
    height: 880px;
  }

  .hero-img {
    min-width: 320px;
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    object-fit: cover;
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media only screen and (min-width: 768px) {
      height: 1024px;
    }

    @media only screen and (min-width: 1440px) {
      height: 880px;
    }
  }

  .custom-navigation {
    position: absolute;
    bottom: 40px;
    display: flex;
    gap: 16px;

    @media only screen and (min-width: 768px) {
      bottom: 80px;
      gap: 20px;
    }
  }

  .swiper-btn-prev,
  .swiper-btn-next {
    font-size: 14px;
    line-height: 0.5;
    padding: 0;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 14px 44px 0 rgba(14, 20, 34, 0.08);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus-visible,
    &:active {
      background-color: #f77d07;

      & svg {
        fill: white;
      }
    }

    @media only screen and (min-width: 768px) {
      font-size: 16px;
      width: 60px;
      height: 60px;
    }
  }

  @media only screen and (min-width: 1440px) {
    .swiper-btn-prev:hover,
    .swiper-btn-next:hover {
      background-color: #f77d07;

      & svg {
        fill: white;
      }
    }
  }

  .disabled {
    background-color: rgba(230, 230, 230, 0.15);
    backdrop-filter: blur(17px);
    opacity: 0.5;
    pointer-events: auto;

    & svg {
      fill: #fff;
    }

    &:focus-visible,
    &:active {
      background-color: rgba(230, 230, 230, 0.15);
      border: 2px solid rgba(247, 125, 7);

      & svg {
        fill: #f77d07;
      }
    }

    @media only screen and (min-width: 1440px) {
      &:hover {
        background-color: rgba(230, 230, 230, 0.15);
        border: 2px solid rgba(247, 125, 7);

        & svg {
          fill: #f77d07;
        }
      }
    }
  }

  svg {
    width: 16px;
    height: 14px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media only screen and (min-width: 768px) {
      width: 20px;
      height: 18px;
    }
  }

  .swiper {
    z-index: 0;
  }

  .my-swiper {
    min-width: 320px;
    width: 100%;
    height: 700px;
    margin: 0 auto;

    @media only screen and (min-width: 768px) {
      height: 1024px;
    }

    @media only screen and (min-width: 1440px) {
      height: 880px;
    }
  }

  .swiper-wrapper {
    position: relative;
    z-index: 0;
  }

  .swiper-slide {
    min-width: 320px;
    width: 100%;
    position: relative;
    filter: brightness(0.8);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(11, 11, 11, 0.6);
      filter: brightness(0.8);
    }

    @media only screen and (min-width: 768px) {
      height: 1024px;
    }

    @media only screen and (min-width: 1440px) {
      height: 880px;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    z-index: 0;
    display: none;
  }

  .swiper-button-prev::after {
    content: '';
  }

  .swiper-button-next::after {
    content: '';
  }

  .hero-title {
    padding-left: 16px;
    padding-right: 16px;
    font-family: 'Oddval', sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 1;
    letter-spacing: -0.02em;
    text-align: center;
    color: #fff;
    position: absolute;

    & > span {
      text-transform: uppercase;
    }

    @media only screen and (min-width: 768px) {
      padding-left: 32px;
      padding-right: 32px;
      font-size: 68px;
      line-height: 0.9;
    }

    @media only screen and (min-width: 1440px) {
      font-size: 90px;
      line-height: 1;
    }
  }
`,q0=()=>{const t=S.useRef(null),[e,n]=S.useState(!0),[i,r]=S.useState(!1);S.useEffect(()=>{t.current&&t.current.swiper&&t.current.swiper.on("slideChange",()=>{n(t.current.swiper.isBeginning),r(t.current.swiper.isEnd)})},[]);const s=()=>{t.current&&t.current.swiper&&t.current.swiper.slideNext()},a=()=>{t.current&&t.current.swiper&&t.current.swiper.slidePrev()};return c.jsx(J0,{children:c.jsxs(Q0,{children:[c.jsx(Tn,{ref:t,className:"my-swiper",navigation:!0,children:G0.map((o,l)=>c.jsx(Re,{children:c.jsxs("picture",{children:[c.jsx("source",{srcSet:`${o.imgWebP1} 1x, ${o.imgWebP2} 2x`,type:"image/webp"}),c.jsx("source",{srcSet:`${o.imgPng1} 1x, ${o.imgPng2} 2x`,type:"image/png"}),c.jsx("img",{fetchpriority:l===0?"high":"low",className:"hero-img",src:o.imgPng1,alt:o.alt})]})},hn()))}),c.jsxs("div",{className:"custom-navigation",children:[c.jsx("button",{className:`swiper-btn-prev ${e?"disabled":""}`,onClick:a,disabled:e,type:"button",title:"Попередній слайд",children:c.jsx(K,{iconName:"arrow-left2"})}),c.jsx("button",{className:`swiper-btn-next ${i?"disabled":""}`,onClick:s,disabled:i,type:"button",title:"Наступний слайд",children:c.jsx(K,{iconName:"arrow-right2"})})]}),c.jsxs("h1",{className:"hero-title",children:[c.jsx("span",{children:"МІСТОХАБ -"}),c.jsx("br",{}),"створюємо простір",c.jsx("br",{}),"розвитку міста"]})]})})},Y0="/MistoHub/assets/zigzag-icon-a969ad4c.svg",X0="/MistoHub/assets/octagon-icon-16f05493.svg",K0="/MistoHub/assets/oval-icon-13125d97.svg",Z0="/MistoHub/assets/blob-icon-c6231adc.svg",_0="/MistoHub/assets/slice-icon-bce271a8.svg",$0="/MistoHub/assets/tree-icon-e418ad4c.svg",ev=F.div`
  width: 100%;
  height: 100%;

  .zigzagIcon {
    width: 25px;
    height: 29px;
    position: absolute;
    top: 216px;
    left: 2px;
    background-image: url(${Y0});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .octagonIcon {
    width: 52px;
    height: 52px;
    position: absolute;
    left: -15px;
    top: 417px;
    background-image: url(${X0});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .ovalIcon {
    width: 41px;
    height: 28px;
    position: absolute;
    left: 1px;
    top: 628px;
    background-image: url(${K0});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .blobIcon {
    width: 33px;
    height: 36px;
    position: absolute;
    right: 5px;
    top: 381px;
    background-image: url(${Z0});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .sliceIcon {
    width: 90px;
    height: 66px;
    position: absolute;
    top: 583px;
    right: -45px;
    background-image: url(${_0});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .treeIcon {
    width: 116px;
    height: 80px;
    position: absolute;
    right: -44px;
    top: 856px;

    background-image: url(${$0});
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 374px) {
    .octagonIcon {
      left: -28px;
    }

    .ovalIcon {
      height: 20px;
      top: 654px;
    }

    .sliceIcon {
      top: 616px;
      right: -52px;
      width: 89px;
      height: 62px;
    }

    .treeIcon {
      top: 906px;
    }
  }

  @media screen and (min-width: 768px) {
    .instagramIcon {
      width: 16px;
      height: 16px;
    }

    .zigzagIcon {
      width: 69px;
      height: 78px;
      top: 407px;
      left: 18px;
    }

    .octagonIcon {
      width: 154px;
      height: 154px;
      left: -57px;
      top: 736px;
    }
    .ovalIcon {
      width: 106px;
      height: 71px;
      left: 20px;
      top: 1154px;
    }

    .blobIcon {
      width: 70px;
      height: 71px;
      right: 10px;
      top: 511px;
    }

    .sliceIcon {
      width: 226px;
      height: 159px;
      top: 853px;
      right: -130px;
    }

    .treeIcon {
      width: 238px;
      height: 132px;
      right: -130px;
      top: 1344px;
    }
  }

  @media screen and (min-width: 1440px) {
    .zigzagIcon {
      width: 69px;
      height: 78px;
      top: 437px;
      left: 68px;
    }

    .octagonIcon {
      width: 154px;
      height: 154px;
      left: 43px;
      top: 676px;
    }
    .ovalIcon {
      width: 106px;
      height: 71px;
      left: 106px;
      top: 928px;
    }

    .blobIcon {
      width: 70px;
      height: 71px;
      right: 20px;
      top: 484px;
    }

    .sliceIcon {
      width: 170px;
      height: 159px;
      top: 610px;
      right: 6px;
    }

    .treeIcon {
      width: 238px;
      height: 132px;
      right: 4px;
      top: 934px;
    }
  }
`,tv=()=>c.jsxs(ev,{children:[c.jsx("div",{className:"zigzagIcon"}),c.jsx("div",{className:"octagonIcon"}),c.jsx("div",{className:"ovalIcon"}),c.jsx("div",{className:"blobIcon"}),c.jsx("div",{className:"sliceIcon"}),c.jsx("div",{className:"treeIcon"})]}),nv=F.div`
  width: 159px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 374px) {
    width: 152px;
  }
  @media screen and (min-width: 768px) {
    width: 234px;
  }
`,iv=F.h3`
  font-family: 'Oddval';
  font-weight: 600;
  font-size: 18px;
  line-height: 122%;
  letter-spacing: -0.02em;
  color: #0b0b0b;
  text-align: center;
  margin-top: 16px;
  @media screen and (max-width: 374px) {
    width: 100px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 130%;
    margin-top: 30px;
  }
`,rv=F.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  letter-spacing: -0.02em;
  text-align: center;
  margin-top: 8px;
  color: rgba(11, 11, 11, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,sv=F.div`
  position: relative;
`,av=F.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
`,uo=F.a`
  background-color: #f77d07;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  padding: 8px;
  position: absolute;
  left: 50%;
  bottom: -8px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    background: #e97200;
  }
  .socialNetworkIcon {
    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 768px) {

    .socialNetworkIcon {
      width: 16px;
      height: 16px;
    }
    padding: 10px;
    width: 36px;
    height: 36px;
    bottom: -16px;
  }
  @media screen and (min-width: 1440px) {
    &:hover {
      background: #e97200;
    }
  }
`,ov=({person:{webp:t,jpg:e,webpRetina:n,jpgRetina:i,webpMobile:r,jpgMobile:s,webpMobileRetina:a,jpgMobileRetina:o,instagram:l,facebook:u,name:d,description:p}})=>c.jsxs(nv,{children:[c.jsxs(sv,{children:[c.jsxs("picture",{children:[c.jsx("source",{srcSet:n,type:"image/webp",media:"(min-width: 768px) and  (min-resolution: 192dpi)"}),c.jsx("source",{srcSet:i,type:"image/jpg",media:"(min-width: 768px) and (min-resolution: 192dpi)"}),c.jsx("source",{srcSet:t,type:"image/webp",media:"(min-width: 768px)"}),c.jsx("source",{srcSet:e,type:"image/jpg",media:"(min-width: 768px)"}),c.jsx("source",{srcSet:a,type:"image/webp",media:"(min-resolution: 192dpi)"}),c.jsx("source",{srcSet:o,type:"image/jpg",media:"(min-resolution: 192dpi)"}),c.jsx("source",{srcSet:r,type:"image/webp"}),c.jsx("source",{srcSet:s,type:"image/jpg"}),c.jsx(av,{src:s,alt:"Co-Founder avatar."})]}),l!==null?c.jsx(uo,{href:l,target:"blank",children:c.jsx(K,{iconName:"instagramIcon",styles:"socialNetworkIcon"})}):c.jsx(uo,{href:u,target:"blank",children:c.jsx(K,{iconName:"facebookIcon",styles:"socialNetworkIcon"})})]}),c.jsx(iv,{children:d}),c.jsx(rv,{children:p})]}),lv=he.section``,cv=he(ji)`
  position: relative;
  padding: 60px 15px;
  overflow: hidden;
  display: block;
  @media screen and (max-width: 374px) {
    padding: 60px 0;
  }
  @media screen and (min-width: 430px) {
    overflow: unset;
  }
  @media (min-width: 768px) {
    padding: 120px 32px;
    overflow: hidden;
  }
  @media screen and (min-width: 950px) {
    overflow: unset;
  }
  @media (min-width: 1440px) {
    padding: 150px 120px;
  }
`,dv=he.h2`
  font-family: 'Oddval';
  color: #0b0b0b;
  font-weight: 600;
  font-size: 24px;
  line-height: 133%;
  letter-spacing: -0.02em;
  @media screen and (max-width: 374px) {
    margin-left: 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 45px;
    line-height: 111%;
  }
  @media screen and (min-width: 1440px) {
    font-size: 60px;
    line-height: 113%;
  }
`,uv=he.span`
  color: #f77d07;
  text-transform: uppercase;
`,pv=he.ul`
  display: flex;
  gap: 36px 25px;
  justify-content: center;
  max-width: 343px;
  margin: 32px auto 0;
  flex-wrap: wrap;
  @media screen and (max-width: 374px) {
    max-width: 312px;
    gap: 36px 8px;
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
    margin-top: 80px;
    gap: 54px 50px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1200px;
    gap: 50px;
  }
`,fv="/MistoHub/assets/alyonagoncharenko@2x-5089cbc9.webp",hv="/MistoHub/assets/alyonagoncharenko@2x-9a2cc24b.jpg",mv="data:image/webp;base64,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",gv="/MistoHub/assets/alyonagoncharenko-11dce0fb.jpg",bv="/MistoHub/assets/marynagerasymenko@2x-6542d635.webp",xv="/MistoHub/assets/marynagerasymenko@2x-c8d9ad07.jpg",vv="data:image/webp;base64,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",wv="/MistoHub/assets/marynagerasymenko-80367483.jpg",yv="/MistoHub/assets/nataliiagranchak@2x-743f3df1.webp",Sv="/MistoHub/assets/nataliiagranchak@2x-b2368df5.jpg",Av="data:image/webp;base64,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",Ev="/MistoHub/assets/nataliiagranchak-2cc74635.jpg",Tv="/MistoHub/assets/nataliabarannyk@2x-b8491a87.webp",Cv="/MistoHub/assets/nataliabarannyk@2x-19db3dc4.jpg",Mv="data:image/webp;base64,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",jv="/MistoHub/assets/nataliabarannyk-130666b4.jpg",Ov="/MistoHub/assets/valentynbybniyk@2x-df799a53.webp",kv="/MistoHub/assets/valentynbybniyk@2x-4b4fd2bf.jpg",Pv="data:image/webp;base64,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",Iv="/MistoHub/assets/valentynbybniyk-75b33657.jpg",Nv="/MistoHub/assets/denissergeev@2x-73c15dbf.webp",Rv="/MistoHub/assets/denissergeev@2x-9f45d219.jpg",Lv="data:image/webp;base64,UklGRmgNAABXRUJQVlA4IFwNAABwSwCdASq0ALQAPpE+mkkloyKhKhLcmLASCWcA0ITF17VV0UjgK/dniLY/LrOUn0G5APR++pfTe91/d32QP27RsxzMmdl8Cv/knASLGhWpuFNUvS6KAacVE3y9pBVVOpMVGjy6Js0tIGP6o9TewwGO0X36HqOze0oESeDdgdDwUQztopptI2PzRXJe+q+lrCgDPvqbpAuHyHhc7SrzCZNpLcxNgMWzEqxLjjiDxxK8tIj/TA6BKZWcE/60rpVZaZyANkN6hvD+7a/VWZxTGMoXEs5mv5d/If5RzWfuuRqJcGvzzF5pzwWs8JnttDHrn3wff2EGFejvitEny0SC+7jTaU6LLMNBz+BN+30+fCs49dAsGIqxhWOTQaXTI6JMa4rmSVZ+gQNEi5AS1Sy8bpsya14F9AtbyzSh4mHGe1TMB+29RMZc7IkEt502DA1XYEzcvoY0ObzcpaG4IL1BXDdRKI9k8JlwFREWM3G3txmuekpQEjLSxyRd+MeMlp1kxgMehjnTh/qUwbK+qiapYbgvkGRiFqoh2Dy0sxxTRU2jisltyc3c+eP71FIHDgZizy4fbmyfrC/0DQOb77WGpzcNXy/t/IDrS0nAxKslFvRe/o4V76f+hMu98pS4fktKsb8eLrRrm/OJyP9ZkqqF6VtEyt5oeknAuJjmBixAJ2g8+C0OxeIXF/0riYBBhHtsNuXP8T8wDTA+d9BlWJizBIRiXk5moqlBYpY19/GJqtPRwhBm5qwQTulwvHHCoZg8Ci7KAbzNH9XEn6n1TqXQNNdkztmTdJLVTSvre5nT0DQa0qGrZAAA/vuUAU/6n0ooNh+9Dn+vS5iwN7+wedfx8Oq4aG0RTFBj0FGBHYbzXvN4fK7TezFMBcAtPCYHHTqHDnEuMfvG6h7aAYrLFMXLBZj4f/gIi16k0ovH0XJ4iNGWuy4OB+1jjijaEiM+7TA3xJ/y1wXzUh0A7CyvQaCf2Zv6IqiGHRDmd92bDcW8H4BIH0OZjaJPDRq9Zftx+3EPjjzMVKvwixyJsurn3t2H7ziv0HCLJoStwg3RIkK6XnKuEewVVqw1/B0NwLQXIeuZHzOLPfJ4gdT4zfpmrybmOXzUEkRtTNuUUpHOKrGybOF6TqV7XpG1YxqhKL9YA3M5bewudxBXfQGA608G5QNX4H+xnHqd0M/x/qv8IUU6ao/o9GbxImDOGqXEEclQApi4eyFmo63h8nlymOgVApXine45aeZqC8RFt+5bFVpeoqzYnbRRSTv8u8I1+lmF1TUhfsQqzVuEkYhyB9FmOlD9WdV/tzNqK8MCZ0FenPc95iD8Ijy/u5SZv9EyL7LqufGVXVjMHI7Dukm9/l16E+og/k2uSa80JXCqSRj1zUDFYZOJLErh4p+aAkpC6kDLGSAw/r8YBWSp5LK4dvVMbjw37HosSiLEV9lD/Qon06GDFln3lSjrG9kQLQbAq6mlFjoWTWVF2pRXs6uwdDoumWT9poJxNduOR1R1TxU4TpzjzR7QK/p9iaGkyN+erHnjmwzCe9IuisKPFnp82/8xHvKy+zk0Zs31oXqnw/1jC6y2SlGY0KICVdw6PhPxm7N5Ynj1bZ83K7ckmRNLBp15zLNudLA1W3b7lcN2/D3Ca5tEwUbzObZQ6d3QkWoHHYhW1+1AC0NqYDXlbMKSIzY9QN3LYMy/zh6OFT0XjKaFsLw5KrWQdfPiHBRvIvAexDr6veaF6FreFfQzl34kE+x025zPCgOy6L82rXNk3BL/VG6ZfSLT/fj+6zFoH91vNElWBwOuvJJn/2llP84IXsx84E0SFrXS86Ene1lJNU75khAvzWFj070ly5sU47r6MmGIdEd38j2kFPNpKX50j7vNTK09dViaka/FaS20WSIoa9C+VrZrm+Il8fPcn7RngqKgKYUBFD5oZKu6cPOb1p+q4EbXnk3FU3Pt9iYEF+GkLOx0gIOfmKs3eW6yjiaLMVpKcVZ4jTc83aLz1Y1YoHQ6w0upGP8wkfN+XNKZaNnKOy6YDjlnMwxyF4PIJ4Du7Q2WZh4UF10nGsIAHBDMrMZ2bWZPKUJiNpDjhj43eXFTMr9bMywCXjffftdGhVCi5uo9aOOTjjRIigDEDaMZa3ItFdims0jwlb3SLV8Nj5DhFzYZydf0ZR0Bqd26z033wl6YxGThegGShYxqrMi/uxm12Uvo6UuQIKLYxAn/NA6468+rYAmIXR6IlR5WL+pbExg1tFY1ONjHMJP0pxkZM1BFlDTPnTagTSn2ZafMFk0yFijnxUnOAhO/x8rXWzdT6Jb4qHwPrAd5v5ZtuuLhfEKw//MTyZtlOTklte3wOrETmYwbWzhXvK0KgplbKp+7X/coRFjV2XKN2rzWyuODgNLQBIZPEJZ3sLt1D9LBXE+Gn7YOcx49LYAweGYPzwr2k/aGygCudhNtAOyzbNZinzNqOV18EOadIOtt4g1VPNvCYDSoT8a/GuEUtpt++sQl8Bh9xEq/T/Eu8X8m434UY20XQgT5kGqNVgMWFo4bqI6pdnsgKrd1Ofc0hhi2AmMmOEkfHcQkV8c9QkQaWYUe+XnvyUkgNfk6jBwFX0anpSnxmCCnESvQDRqV/metAf4FiolSFUKa2v5ABicSDxNy8Uz6aAC4b3QUvEvFfEdpcfyCd+UtMbtVZBJlJj6eDCpGgAm740HkqOuQtpqP832ovDvuuuxGXWVmTxvd6MYxc+BcrjrrWLi/uJTDxTOOPOeWvY63mNS/60QJ5/ibVEToNEAOG5WRjt2I6eiBbmWASt4IMu+b3nf4VyWtBNiL90tBSaqeFwgbWqdRMRjMjd1gTWOlYslNf8qoXPMHmkEYr8aHcGYzNOZDIeyU5NIOLZWD4rS0nAdjNxJmeM+MpmfxUCiEBYs+izCAXRwx7YcO7X++06DkXBh1vfDu5c8ACCuqn+6VHMdJv4rbOgDpRnIiM+FFadtYCOqQl57VZLg8pIdJ9cPwuKtTuKqHlWgJdFSL7BNgFWGv8KK+NILKrpJ+V6zC31rRu1sdxr6SyidGjw7nzCk7FUfIUK5TEzkNUFh4NtuX/eTH/W//omwzHPXoX0DebdJuNN5Ca9QjO0pV8YhU4l4T8RHg0bCgl5UPc2cvbCNGG66A0fAvGXOG6couLxEEuCUv8d1YFlM6PNL3S7SyEa9mEEYVVNCmxUNNJvnfjbEw7mJ59qPky6Q5ZbpqgMsc8KalbwUp/7D/ZCEuRT+Aa964oS/YIpwrUuyB6ILcVF3Xn8ZNbuq/NUlBO9qj9ax3FcvbFOrkxhzGxS9UfTbruHydmU9CPTfTQaguGx9xQp5wLr9vxW1SzqdUA/PJC9s7sjLT+RQPx3wrjH7++mAP+xDSd+2P+q4mk+SSE2n1rFpxeW395HPQVu6xjyu3P7EkEN1r/C+ly5wzsFp584iUj4skkj77pTnMTS3jl+rdge0llzoKOYffCmOXTq1i9yvaNMVvs4+SV7FXL7T2l2FhT8hRNiCCJyMzDkbR8zQDQFOeiTtQ2nW1Ph+ET7WBS5V+XoIzUvtYuB3/GNCYJw5ZRU/fZ833RqjMDdmXvJybi9ala3MHzCPl+n6PIom1XdX+6zvYl91wSrbA3a5g4iMPBfS0ByEUggTL1RjoRyuugwLV7Gk+wild0t/9Em21vAyyZCrc1eLVgiGoXu3mIu5PfMF2bfJBWhzaG58HujN5JbZ0jXegpaShq69jO0JOfHzMSlHAlk7Pdvc1KmUE8fjdWsVfApR2Z67TUr2qrCGkc5zoY1pG2Crs66H2ObYqw3/duC59sJmSk45+2U/VEQhIeYQ60hhmwwtmtqSTq7mM9EngFfRpzmlJG31OC1ITfOXGf9Vg3aOCb0DHxEY64zxEDu6NpkWO2Vw1ois8KFZrnxziWh0IssgkuK+Ks+D38m/6+F/KtdEbI5pH9jALJJyoVMbuUupmunIMoi3AbqQjB6C062TF30wqKpHlJJcjyAAxJxVK4hD1FO1MLPfVnmLSyoO0ORmU1FJh7XE3CIGWbAYYnKcGWWjlySemLFos9HDQ85WGpgd1tQvx8wjA4n0KGZjxxbv8211T423MSDddfbGQHbjbwhOzU+6XyIiD94j59tg3yyPBd93ybo4dVrjwFWJH1Ql2GDBX609geh1S1cjUCGbb7NaiiceD0CPj/h8Xvp4ZQ7dm4fP2J5q3kFonY1H8DrFv36DcM2AEj9iP3sG2dOe59dsvCU7QwPqdH4RDSFwBNuu04/jaERDjNOcm3tuvvkBQPfwfmsiiXYuX6YpTUSj4+uM3sSj1Djyt0KGTYzllQQnexW3Tmq3d3OkLegAjUb7njJjRAoHP3VPNQZby/EliAXPXdVXUlFwAkfknMji4YmAXiWnW2SabMb2wWCVRNXTB9uyIkkTzi+MKtHztz2gD/l2tqEAIroQ/q5J3HFTqPnMw7ve5R0IujHP8dp0xf2ZX/O4uax1VcWfNsKW9LTf/NNtrG/9LICTHl4ZQtKOxl7K2LlG7EsHiF9UAnj20+HT7uh7U8SL5tEQpNtvt2NkbIdSfBPRsOSFl8YQAAAA=",zv="/MistoHub/assets/denissergeev-29e52737.jpg",Fv="/MistoHub/assets/vitaliyvolodchenko@2x-07796d62.webp",Dv="/MistoHub/assets/vitaliyvolodchenko@2x-f147d65b.jpg",Bv="/MistoHub/assets/vitaliyvolodchenko-28aaba11.webp",Hv="/MistoHub/assets/vitaliyvolodchenko-c92cba0f.jpg",Uv="/MistoHub/assets/alyonagoncharenko@2x-4f5d28bb.webp",Wv="/MistoHub/assets/alyonagoncharenko@2x-8d152053.jpg",Vv="data:image/webp;base64,UklGRnoFAABXRUJQVlA4IG4FAADQHQCdASplAGQAPpE8mEelo6KhKxWuOLASCWcAzgL49gobq7dZnDCnUXTyHg1or+A0psod2KOWqBTteNS17L1T835a+sNa5bQPH7bkO/sDTaNe1OrBKrGfvICnK8b0HfEIxOUAc02S1M8saUnAPV817GbecLMX4tZhQQ90pSBh3XCoWujjrFKS4bpKd1bdT0lckvdsLiAwK3kiLRvOtyr82s3m92Td0W7Zn7504kTtrmsah/Guj+x5Tz8Sa/bIam0tIKkm9ZSm5GU5UneYTdqiey8lrr+zAQ1NHFJxZfpT7lib5wmf72TpRyz93jTxTPcV2zp2hZ4AAP7+k4YKNe2eCSFvn+t0SBSMwldO6FdE2FbAtad85XX9OAxkLi7gsqguU+x6qeqelJAL6FebZNQdi8S0hHr0DnbXAM5K+aV4iVOrqzQBMQEEKpTgKcyCT1wEoIbNtYkoetiqYuOTHpuH1valOC5WFpZ+mDZfv/Y2rah27GE1qUJER+xgIdBCDfHATjp78pkYAkGi/HGQNQuzWC1klPPaDuNNNkhOHSgdJ40iyhux/9LJrotG1usNxkn7PmVu8QiMm7+91iv5sWMPwfXvXqFB7K9SjfAY46tD6M7vtFIruHXjg9HFJRa/VY8ZAUZZ3uKVGZ0M3Jrecul4UrWxOUQag5Vp167jes0oq3Vc5nfbSZSGSwoWOFH4byAZzw3aM+Unc5MOZODYx3h5lQKd0YxirXG31qCCzonWPGfXXLv6vRz7UDlUAN1ioj/GYKpKqZ7rtIf4RvNYxqpARHQwVCFRuxToHSU6ef8CCvhXqmxlwFKlunNkPTb87dul6K188RFQGtlQb7eKoV1Yp5n0vXZiMS3h31nAhKjr7XVD9OG+RaEP/3/MTNVXEhvlBmeomVkgSzQrvktLmUe/w894aqSaiWnrK2heyKiYVDWQXav8MKWXJdegZ2j+dkAJDeAKLAUR28LsC5x1kedOUwJxdoMIZ3qdE9UOWvdFPB49XydWgcUfO2lJk1PmFKleppkfSFWV8pYqsRbKvtVlmzcIAwr29ptXJb9owpjoCIFibk1iVyEFlOfJyr4gPiHIq8yCQtw4gOXPyzolZHoRBRMrZUC9Wmr731YHBrczZrf4LcSr87K5cOthIeYt+KsWq6S6EM+5wHMJ5nz6NQbyuGh5JchnrNSqy6nt3b3vhnQo0vRKdrosy61cCQDMn+sokxfiYa2vFnvZAU53Oejt+EFL7wnoLFx6fTWCmjkc6MhDgS+Sx/PQZwBihts4EJPQH1unn+Mzhco2HNZZOfk99vKvDKRBYrQhzLesBiT8Ybd3HDkzQACbvJl/gJJlsZzhJltB4mMW+ptVJtRDitdXE2HDyxu4pP0yQ43t2iRHY7LDTB0LZtxwn2fvDA/Q/wgvIUxI2H08j/DwKR3Lg8NyLOaAUuhZcoqaKkpdp7hQwVLL3Nrf0bK+GzjJX5+D37e0OmqmoIM9f7PbqEQLZVjD1y06We0g1srEX/QNOXP+7L2IIGLzaDokPzevh4gtnYfy2aZz7b5hrqPbz6uZzvM2HoMFk9vA7zsJXBrKatBrhOrKwGTWTZJosl2UO0/CY5RiC8FsE1xxKxn264PSzlG1CV9gSuFhGHkimOv7kGPWCR1cY0gmgVNYn9R0nry6mQiCAoyY9pGzbAjy3S4YrxuLNzae3de5hLiNF8XaXwGZs555PU5ntcfvge7faPSroEoxaSIuVpCVgn2KM+0XGaZqXuihie6ywjPaMNanG36uI4bT/7/h7BHTR9cOUHY+mjNu9aatgZLDj7/Ir+bBJHX8xOzw8+UfdM0qkgB9BYRhUp3S2KNHw8G0Ih16AAAA",Gv="/MistoHub/assets/alyonagoncharenko-6d3b6ec2.jpg",Jv="data:image/webp;base64,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",Qv="/MistoHub/assets/marynagerasymenko@2x-c8d9ad07.jpg",qv="data:image/webp;base64,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",Yv="/MistoHub/assets/marynagerasymenko-83a15467.jpg",Xv="/MistoHub/assets/nataliiagranchak@2x-6d1023a2.webp",Kv="/MistoHub/assets/nataliiagranchak@2x-b2368df5.jpg",Zv="data:image/webp;base64,UklGRogFAABXRUJQVlA4IHwFAABwHgCdASplAGQAPpE+mEelo6KhKxWtuLASCWMA0uC+kBihvUx5tu5zwCn8lqkLp0As/8DXyiFKsR28iGQ5kezTGjJpw6k8tkfIulEOuNlKLVa1rsOcV+uwLCz2A9ym3RmaOYepWY/9eCplIAnohdA9wUfGCRGpv2jgprgnoF81oEv4SzfRcfMwvNqo6j4VMhKM5dWq+15vabQmxVq3qcgU/1tl8lcx+5UivkHZ4Hlmi6W3zr/64DUrWu6tAEm+0769NWCMkxyFKOEjQNx4ujKePrWZc9EK7KJ0UFgz4haogYxs0MWUznOVjmCI6SBWZOnTge2anCdOjjtaK5AA/v6ThkvZtOk1SDasgpW7LUnI+oNLMCMq+gGcj/jn5dzphrq9ra125/lxVPVRME9UED8Gfu0UTgNvUrPcthCmmFlNzyZc2m1TIcgrvKx4sRV4XB77BUgFETjr5PtIU7CMNadgG1Ts69D/FGPW+E7Q9jTzLlRCo7l7wzxlyc/GPPX3i+01yU5/XhDl1zP3lWtiVNqDYaHPeomDjpSXV8nWIhTQ+wMdDsK7/pWr6BL2NNH98I1kgFTxiKPUUWdiOJlEgsXZyc2wU5YGcd7M1+J3Kuc5twxUqxkqhHdd5EzjyqTbylNRLczcDyzQlw1QTCpiML2Y7xjVkcQHVRXe2h7B32eC1SiGTPFz/OsFx0t+Ugfb1OG5rPDhULgtSZbJQSywlAe30RkFprOoHFpgUUsbxkl/OLhipsZGjvtYGlUlQkAJVE8w/CpPQwe04B4kAleW39Z0k3N1RoCqhl/bLvZACUkKSiwbd+IfLgr2RmCC+aRuLrTm4aGWEEJUPwC77c9bbYO0X6hdnJzbcj6W7N183MVtIvqFsy40Qur0/oVzcH6bL9pqf/6l2e/2JTRcAoJfydO19EX9pqXT0BoksWkxYfcgfUjHs5j2RVMHUO20UyQn0xEnx1c9TZ1i/zUZH5UryocdEM4xPWvRIxJSVKx1S81fw4YACtOrB40yd6BdyhoPcEuGKbrn509/aFGx4KiOh1fgDCqju/64fiQZsfLW6/vz4kOdqHc/psfv3UtVTvqQuaFgQcpU3EX1fOuQijtQH9/QmAgq3HFm76wxk08p3tN2DAk1aUDzY2ZtMqg2AuQI/pVXqb4y0zs7sVy/ZTaVUG348RPyx8sgoqJgNdB5jnmZ5cIV419GAOXMrNOUYV8D3ThoYilgt6Yr31TJ6Cz+8mDGJ94iNYkgoN54kHoLdkhKkKUPHygWbbVfUn6HcrFTs/aV1ErpOxRcd1US/EiRhD8eG0GsfZV0OBAwUPPOIZUfTaYKp7cgPy3smWpOaXxwHALXqGrGVFvGxG40RaNgx8OIb1sNWZPGwv0P7BvyRwrnon1jnYPxsGbHjADpOl7rT30Kct9g6vSrgY0DMXPSKOiIJsGdOjEb2WARAf4Rg4brtVGM5nUfQz/ergBC/DPnT+ZeM6sPHbYY+DM0mMC22vV6NggL+Mj9QhNKdxy5Usn43hPPvFUFzvlz3HePcit5w9j/0oDS0Su0t8Nrw1cS7w+M8OQtzLzM4URK2ZPPYYhhWMP0nzGL4GmvAEfBqxYO6GDxq4DPh3zE3ftgo/WIcdX9fawwte0pUA2qzmFHFxvKL/W0y3aKd/jPHmL/B3MpoIYIVN6Svml6SfO7+WiUrs1cnqFzTn82QCCpmz94IsdWwC/FBdJlGNlZVr48pi5s4XGJMYgVPsCPNEJtfYvyS8Dbb+DYJD0m0c6I5fn062xlUQetfwm+RtofmuV9QXH4Wbk9YlETz6GFNL6gyCyKZns5xPmuYtvBT0zV3ZWisQSTuHn8K5XGTzPSSyogNVjb+0Rt3XnWltabDLomAAA=",_v="/MistoHub/assets/nataliiagranchak-1f78472b.jpg",$v="data:image/webp;base64,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",ew="/MistoHub/assets/nataliabarannyk@2x-19db3dc4.jpg",tw="data:image/webp;base64,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",nw="/MistoHub/assets/nataliabarannyk-46ac70a9.jpg",iw="data:image/webp;base64,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",rw="/MistoHub/assets/valentynbybniyk@2x-4b4fd2bf.jpg",sw="data:image/webp;base64,UklGRigEAABXRUJQVlA4IBwEAADwGACdASplAGQAPpFEm0mlpCKiJJbc8LASCWcA1UdymvZf3dYwNL8v7b5lLDG0hM7pQN4AzcAQSCSg+Gm8V1zWJVCYyoM8TYGLXU9dkR5bbKfAN/WowDw8/jUayvNFNtkRflIHDJOVR+XMVNODjPpKfrQnL/5fs5s8hsommA3fn9gziw+UvIRgbcg2FGBJJR66Y1ad5PM411fRsovSlRZqntiPPvEsl7anXyZpQnBARP1vtMxkKCOFnXHOl07a7gjuoxwCptmUEnLYUkoVbxDAAP7+LozLpXE5EAglI4MNKml34NrrwIjAm0SQxWBBvRkslDQzU5M0y1QgtF03rULQ/mVs2aaDeK2JrP6oBkWtNx813tHEp5lbyfDzZIhefGuWn3/wOvwPaLbSYboKvUPgRJFD8P1JB5MoDSehqBN5ZgR+eQs0oOt0JW0sIg/40OmeyIZ3qCCm3qTdo7zoe8AArFzLEB0cT0mbgMeMV42YsOy2+YTqHQcUiF5x/SDqc5mLhpc/1cHpYIXv4e3PKN6mon319fWhlLvMQZp/Xp7+K95sUevjIEeIt2YM4/LpdQ/0BVJ7cZD7AsFgXeDs1UG35CALxlBKIXhRwZQhqUujwjSfMsgfUssh3M6S6JOOChAMJImYMrlkzrAsosIkJTGfSuwDC3cS9ipZ7QzOOlwZT/kMcKwQV1/9AL6UmY+8dsID8oo7QqHlFfyu7TLc/7EM1O7HgVzjiidIGRFA18IqTKsMFn29yv+vEyRqt/GNEiOVzq/gO8dMMaKChLTjprM0CscwHL6vm8aB1x4gres6T7SdB+58QRXtr3Mag59x/0nXErVv44906pTMm06QPlMaqpH4D8+Ez4dQ2n72lxMBTbmOFE8vvstSFC9JVaDdBYhlLorNuqUVaT7Q/YDRyLtw8blSy+eWTKUXzS0q2OxZ2vcfKDADz3/VcYg0KO++9VOUe/op1jPJEn2DdIsleC7lw7r0g4ESjRtGTAq/daRHqUbthC+5ei+is4O60QHLfss4oVqDlzdlQCsLFOX8hQY3E75HIt9e6EoiPdJSWt0/r0z/OIy7DsSPjH/kQXbi3BgnL4LbwG11g0ElZsA5qBdhMk331wNaFQnDD1vJJUF+2bpyOJ5FSIoghdSFvsfGAexzJAuVJD3MJcIdozEbJIIOocdudKidE3kZkJ07DuAKGd8jjS79VOH1cuvNzykQ1JhnSeioNG9Kg+ouF9RMShT4XiH9frGeHqpMy5qglzBz0nDfkRqcsPVV+3qZ9uABWlsVXuzxm8T0NSOR2TnHYDAz3D7A2OCw64ROPeto4VgwTv6O9wlRKcwnRrytxHb3v8HgpEGwstzDWhsssgUycmx4xnENOlLsYxt8DdXT/6bdy58NgSC00PJBnAAAAA==",aw="/MistoHub/assets/valentynbybniyk-54ce43d8.jpg",ow="data:image/webp;base64,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",lw="/MistoHub/assets/denissergeev@2x-9f45d219.jpg",cw="data:image/webp;base64,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",dw="/MistoHub/assets/denissergeev-a1d6056a.jpg",uw="/MistoHub/assets/vitaliyvolodchenko@2x-206d1729.webp",pw="/MistoHub/assets/vitaliyvolodchenko@2x-f147d65b.jpg",fw="data:image/webp;base64,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",hw="/MistoHub/assets/vitaliyvolodchenko-550e7fbc.jpg",mw=[{id:0,webpRetina:fv,jpgRetina:hv,webp:mv,jpg:gv,webpMobileRetina:Uv,jpgMobileRetina:Wv,webpMobile:Vv,jpgMobile:Gv,instagram:"https://www.instagram.com/alena_poltava/",name:"Альона Гончаренко",description:"Керівниця центру підтримки підприємців Дія.Бізнес Полтава"},{id:1,webpRetina:bv,jpgRetina:xv,webp:vv,jpg:wv,webpMobileRetina:Jv,jpgMobileRetina:Qv,webpMobile:qv,jpgMobile:Yv,instagram:"https://www.instagram.com/herasymenko.maryna/",name:"Марина Герасименко",description:"Проектна менеджерка, інструкторка з першої домедичної допомоги"},{id:2,webpRetina:yv,jpgRetina:Sv,webp:Av,jpg:Ev,webpMobileRetina:Xv,jpgMobileRetina:Kv,webpMobile:Zv,jpgMobile:_v,instagram:"https://instagram.com/nngranat?igshid=YmMyMTA2M2Y=",name:"Наталія Гранчак",description:"Голова БО «Полтавський Батальйон Небайдужих»"},{id:3,webpRetina:Tv,jpgRetina:Cv,webp:Mv,jpg:jv,webpMobileRetina:$v,jpgMobileRetina:ew,webpMobile:tw,jpgMobile:nw,instagram:"https://www.instagram.com/natalibarannik?igsh=d2h5cmxpbGNxajE=",name:"Наталя Баранник",description:"Ілюстраторка-аніматорка, менеджерка проєктів"},{id:4,webpRetina:Ov,jpgRetina:kv,webp:Pv,jpg:Iv,webpMobileRetina:iw,jpgMobileRetina:rw,webpMobile:sw,jpgMobile:aw,instagram:null,facebook:"https://www.facebook.com/profile.php?id=100009217334803",name:"Валентин Бубнюк",description:"Митрополит Полтавський і Кременчуцький"},{id:5,webpRetina:Nv,jpgRetina:Rv,webp:Lv,jpg:zv,webpMobileRetina:ow,jpgMobileRetina:lw,webpMobile:cw,jpgMobile:dw,instagram:"https://www.instagram.com/denys.serheyev?igsh=MWY2Z3BucWs5Zzd4bQ==",name:"Денис Сергєєв",description:"Операційний директор IT-компанії"},{id:6,webpRetina:Fv,jpgRetina:Dv,webp:Bv,jpg:Hv,webpMobileRetina:uw,jpgMobileRetina:pw,webpMobile:fw,jpgMobile:hw,instagram:null,facebook:"https://www.facebook.com/volodchenk/?locale=ru_RU",name:"Віталій Володченко",description:'Підприємець, тренер з неформальної освіти та віце-президент БО "Взаємопоміч"'}],gw=()=>c.jsx(lv,{id:"founders",children:c.jsxs(cv,{children:[c.jsxs(dv,{children:["Співзасновники ",c.jsx("br",{}),c.jsx(uv,{children:"МІСТОХАБ"})]}),c.jsx(pv,{children:mw.map(t=>c.jsx("li",{children:c.jsx(ov,{person:t})},t.id))}),c.jsx(tv,{})]})}),bw=F.div``,xw=F.img`
  position: absolute;
  top: 484px;
  left: 27px;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  @media screen and (min-width: 375px) {
    top: 506px;
  }
  @media screen and (min-width: 768px) {
    top: 808px;
    left: 131px;
    width: 156px;
    height: 156px;
  }
  @media screen and (min-width: 1440px) {
    top: 597px;
    left: 746px;
    width: 215px;
    height: 215px;
  }
`,vw=F.img`
  position: absolute;
  top: 441px;
  left: 121px;
  width: 75px;
  height: 65px;
  transform: rotate(39deg);
  @media screen and (min-width: 375px) {
    top: 451px;
    left: 121px;
  }
  @media screen and (min-width: 768px) {
    top: 668px;
    left: 317px;
    width: 131px;
    height: 114px;
  }
  @media screen and (min-width: 1440px) {
    top: 514px;
    left: 975px;
    width: 157px;
    height: 136px;
  }
`,ww=F.img`
  position: absolute;
  top: 414px;
  right: 8px;
  width: 51px;
  height: 50 px;
  transform: rotate(-5deg);
  @media screen and (min-width: 375px) {
    top: 400px;
    right: 21px;
    width: 67px;
    height: 66px;
  }
  @media screen and (min-width: 768px) {
    top: 584px;
    right: 26px;
    width: 131px;
    height: 130px;
  }
  @media screen and (min-width: 1440px) {
    top: 286px;
    right: 184px;
    width: 175px;
    height: 174px;
  }
`,yw=F.img`
  position: absolute;
  width: 121px;
  height: 163px;
  top: 505px;
  right: -11px;
  object-fit: contain;
  border-radius: 10px;
  transform: rotate(-19deg);
  @media screen and (min-width: 375px) {
    width: 149px;
    height: 200px;
    top: 520px;
    right: -20px;
  }
  @media screen and (min-width: 768px) {
    top: 768px;
    right: -23px;
    width: 252px;
    height: 338px;
  }
  @media screen and (min-width: 1440px) {
    top: 469px;
    right: -61px;
    width: 309px;
    height: 415px;
  }
`,Sw=F.img`
  position: absolute;
  top: 393px;
  left: 178px;
  width: 74px;
  height: 33px;
  @media screen and (min-width: 375px) {
    top: 400px;
    left: 183px;
  }
  @media screen and (min-width: 768px) {
    top: 569px;
    left: 430px;
    width: 144px;
    height: 64px;
  }
  @media screen and (min-width: 1440px) {
    top: 281px;
    left: 811px;
    width: 191px;
    height: 86px;
  }
`,Aw=F.img`
  position: absolute;
  top: 462px;
  left: 204px;
  width: 29px;
  height: 29px;
  transform: rotate(18deg);
  @media screen and (min-width: 375px) {
    left: 230px;
  }
  @media screen and (min-width: 768px) {
    top: 680px;
    left: 497px;
    width: 57px;
    height: 57px;
  }
  @media screen and (min-width: 1440px) {
    top: 420px;
    left: 934px;
    width: 76px;
    height: 77px;
  }
`,Ew="/MistoHub/assets/person-circle-87e5b01c.jpg",Tw="/MistoHub/assets/person-circle@2x-2fa23513.jpg",Cw="/MistoHub/assets/person-triangle-27865367.png",Mw="/MistoHub/assets/person-triangle@2x-1e5e780b.png",jw="/MistoHub/assets/person-star-b698f3b4.png",Ow="/MistoHub/assets/person-star@2x-52484050.png",kw="/MistoHub/assets/cafe-e5b4566c.jpg",Pw="/MistoHub/assets/cafe@2x-bbecd071.jpg",Iw="/MistoHub/assets/cafe-oval-bc41cfec.png",Nw="/MistoHub/assets/cafe-oval@2x-b0db3682.png",Rw="/MistoHub/assets/cafe-square-248a88c9.png",Lw="/MistoHub/assets/cafe-square@2x-6d972327.png",zw="data:image/webp;base64,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",Fw="/MistoHub/assets/person-circle@2x-7214c58c.webp",Dw="data:image/webp;base64,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",Bw="data:image/webp;base64,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",Hw="data:image/webp;base64,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",Uw="/MistoHub/assets/person-star@2x-758485d8.webp",Ww="/MistoHub/assets/cafe-01e488b8.webp",Vw="/MistoHub/assets/cafe@2x-4b15c4b7.webp",Gw="data:image/webp;base64,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",Jw="/MistoHub/assets/cafe-oval@2x-70ea213e.webp",Qw="data:image/webp;base64,UklGRtoHAABXRUJQVlA4WAoAAAAQAAAATAAATQAAQUxQSCwAAAABP0CQbRubwY8wlEVE4FcKQ22j3IECPBIcEPx/J4BE9H8CCqo9ZlDyi9bDTFZQOCCIBwAAUB0AnQEqTQBOAD6RPJlIpaMioSpZ/DiwEgliALUbx498ouzttp3zztzj3eCH23wT8eHuKRP3I6incXhv3vyzOCf2C10jznogdCv2B7CXTBOKh/jgL/k4Ckv+I6fT6a5EMunMAoImQ+8UEQcjBYjm8EiOdFx2kQCa9VJt04xlLFQy1iMAh/SILFbCAfenOaH4kUnK6nV/ySCpA8klGawT5MMZt/cYhSf4RbVX1z3eADgxfhZd8Oyzl+SZeq6+95NYzfBcZEP7Z9u9Urp69M5pyxJgjFmm5e3UnHeSWEviVhi/Ihv54Le7b0PVZF/Brmfg2YgAAP71s1RJyhT9XIsqi3wDj+3CXx4H00qZ4jbt6YAqFrNeChArE3ZStFP+fS+S7Z7RJk1XntrcjfsEhv/5mD3LRpnGr2FUnZtx0P7nCcFa7o84PFYqq3m9oajGUauPQVrVT8p0H+tH04CDSflDeFmS8waCCP/Bpki8s7x7ES2QpfQ5BIq8fL445vo1zv5aLNpucWrZXVMfBBlT5uPda5fKJzCA/fmj3/lL4wv8GulGqrGhn9zzDs+L1v7PVFCEJze9z0KAzz7r6J+jK1iAWLOj2S4kAk1VHSZxx174J4TBusvRsFlVv6elyz4r9CtCbK3bbZfeNS1sHCg56ORxEXDKusYAtwWwOm6klQHlhZF3IMtrS44E+9KsxQBjk4vcqEoZbVH/qtpj1TjObcUmT43IL2uE8OyapYO0IqZ7SG7sNXh162JwQfspxulCY3AQxievRFvGezkDl8hPc35hTSJ7MUE0AzfYEYuP0FRFkEppz/KKAdoPyIX4PEe5xsxNCEXGIKRcdleeUjMj6JKnaux2RsZQU36vhG1KKQ2tT8cF/uCGGam39iodK1tw0HJ34sKJJ1a5C64td+le0quk7+niLKyuFH3o7Sdx4AE4uXkSgZ45L9NOXh8mR4CjUtoIRuzX7e46r6GDo4EsC1phrs6UwByiEXR81TjJA/DTiXnlyMjighphQhGnISQ51h/1dY7bCxIgR+nTkOobwwPaU2SQyrfglxxtunvuwgoPn491luPQzhv+PCYQr/M6z74Fo3wGjVzETeusQA9zGEWDSMNhPM9mcrp1N87hdUc0nLu6YpNQ0X73Xhpc8voHV0FPbRJiihEtft6a6NQbsX8LwtpFH82cA1mateJSqtAW+fgbo3u34cWCc3tVUsxfkE+HyN384e7f366gbsCQGxo/zx6NpD50g+vutnvOe/tPx+1fEUX5gVV52zYU+pTEny1MCyX9zSzBrFx5NFIlfGD1uZrSZ1+B6gE8lN+b87apYv0662VF6vSp7KQycYhZ24hCE/byNJEFITwXvl6k39ANek7lomH/B8uKz441O2JFN/BpA4cg6t4JgtLgvAs5qR6YPAYDiekDELsIuWFADEXeRN9LaVG9qx3kqD3yCajUDS4EPTOgg1rH3Iry/rlk1wE7JBJXFbVb4vLX0Mir4Maggk+rvkk3TcZHQUlbGiV/r3pNmiXJAzg3EkL4SmdYbBROGMOqYfU3EabHPH+LNnARWPdsp9juqfeFrtDTUy4UHEkd0ws1rUQTnJDnZmyKurUNR+Ab/f8p5jBn4uKJONszmcc+cKFZ9Zomm3Ma70ABTjjz8c1aR36cfNTt1HexFGtWoAzUPofqNBx6SoGdSXriEQU0HPph7IbeFt9/3GO9Off6+VnuyzQVreryHyzLtks8qQl3R09fiULrdYoYA9THFyb4ShQeoBfM3kbgJuH3Ai764Gde7lH8YVFggjKjsxC/z22c1J9qhWVpGzwE030E8P2cr8vVkX+c4s7vqRONGIDz2ivpJS0sVjjIdFvyuvS8AVwBBTj0phOCnQTBJalnFr0kmcYPBhQqfh2h/fABR4TLvY0/BlTCw14xeBZbF4qfweBu6kxoCpmteyNVi6/B1Oi02IjYPbIOU0UlniEfA4yRSpPbnQvgwNSpKopt8SvftmUGOV/0L76tPlbBHjfyrw7AVgxF/hWESJJ7RHxzNz/bqldXzjWHTVNYaBp09Ki989+wOKJySktQYdBt5UXTgGznIrXes9xlH6H9yPz8Wb1PeP6GbyDiTitLo27X/PHF3RIoxSQdqnc6PKytYRt8eDNBE0HAq1yhCnUej3bI2Ju1pPAJJyjNypY/eZffn+yfgdEfOCNGu7nB9bRLMJEf4IJmB/mEZCYmdzt7u46H+44QFm4zJvKHW7no+N9ILtW29MUBDaIUYrxCndsQZ+IPJvFEs4fwH4T4WazbKBGtLQe+rhHqc8bmcBxKXpr6nhhhiDL8Mjyl2FQFl/fCyZX/j+5LL154rP9G6dbTqhLqNM9/df5gXfyFiPsIuuvsYh6Wx5BoaDxF65HKSuSny3RGtzScZ7jSvXwSzpWiz995KiCXLp5m1ssCfpaPwrNFskUaNvn5cWh1Zx8GANqTF4aeKU9Y+4FUk30LOwtMkmO/vyWTfjc2vytiLXq7sEpEiz/TpoRt9REUy5e78iHGnltqRQ07J1ZM2ySLX75RurKymkd45R5qB+etO8r1UfG0jkNrjhh+ckXIAAA=",qw="/MistoHub/assets/cafe-square@2x-d62fad17.webp",Yw=[{name:"PersonCircle",className:xw,jpg:Ew,jpgRetina:Tw,webp:zw,webpRetina:Fw,description:"Person Image"},{name:"PersonTriangle",className:vw,jpg:Cw,jpgRetina:Mw,webp:Dw,webpRetina:Bw,description:"Person Image"},{name:"PersonStar",className:ww,jpg:jw,jpgRetina:Ow,webp:Hw,webpRetina:Uw,description:"Person Image"},{name:"Cafe",className:yw,jpg:kw,jpgRetina:Pw,webp:Ww,webpRetina:Vw,description:"Cafe Image"},{name:"CafeOval",className:Sw,jpg:Iw,jpgRetina:Nw,webp:Gw,webpRetina:Jw,description:"Cafe Image"},{name:"CafeSquare",className:Aw,jpg:Rw,jpgRetina:Lw,webp:Qw,webpRetina:qw,description:"Cafe Image"}],Xw=()=>c.jsx(bw,{children:Yw.map(t=>c.jsxs("picture",{children:[c.jsx("source",{srcSet:t.webpRetina,type:"image/webp",media:"(min-resolution: 192dpi)"}),c.jsx("source",{srcSet:t.webp,type:"image/webp"}),c.jsx("source",{srcSet:t.jpgRetina,type:"image/jpg",media:"(min-resolution: 192dpi)"}),c.jsx("source",{srcSet:t.jpg,type:"image/jpg"}),c.jsx(t.className,{src:t.jpg,loading:"lazy",alt:t.description})]},hn()))}),Kw="/MistoHub/assets/blob-image-mobile-cdfc9f3b.jpg",Zw="/MistoHub/assets/blob-image-mobile-ab9dda47.webp",_w="/MistoHub/assets/blob-image-mobile@2x-572c42d4.jpg",$w="/MistoHub/assets/blob-image-mobile@2x-40627629.webp",ey="/MistoHub/assets/blob-image-tablet-4c686988.jpg",ty="/MistoHub/assets/blob-image-tablet-25516b7b.webp",ny="/MistoHub/assets/blob-image-tablet@2x-85151834.jpg",iy="/MistoHub/assets/blob-image-tablet@2x-0e060af8.webp",ry="/MistoHub/assets/blob-image-dekstop-ba4bd23c.jpg",sy="/MistoHub/assets/blob-image-dekstop-1ed3290e.webp",ay="/MistoHub/assets/blob-image-dekstop@2x-9856da11.jpg",oy="/MistoHub/assets/blob-image-dekstop@2x-7190f328.webp",ly=F.section`
  letter-spacing: -0.02em;
  color: #ffffff;

  background-image: url(${Kw});
  background-image: -webkit-image-set(url(${Zw}));

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${_w});
    background-image: -webkit-image-set(url(${$w}));
  }
  background-position: 36% center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  @media screen and (min-width: 375px) {
    background-position: 38% center;
  }
  @media screen and (min-width: 768px) {
    background-image: url(${ey});
    background-image: -webkit-image-set(url(${ty}));
    background-position: 33% center;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${ny});
      background-image: -webkit-image-set(url(${iy}));
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${ry});
    background-image: -webkit-image-set(url(${sy}));
    background-position: 36% center;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${ay});
      background-image: -webkit-image-set(url(${oy}));
    }
  }
  @media screen and (min-width: 1680px) {
    background-position: center;
  }
`,cy=F(ji)`
  position: relative;
  height: 740px;
  max-width: 375px;
  padding-top: 130px;
  overflow: hidden;

  @media screen and (min-width: 466px) {
    overflow: unset;
  }

  @media screen and (min-width: 768px) {
    padding-top: 217px;
    overflow: hidden;
    height: 1152px;
    max-width: 768px;
  }
  @media screen and (min-width: 906px) {
    overflow: unset;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 302px;
    overflow: hidden;
    height: 1111px;
    max-width: 1440px;
  }
  @media screen and (min-width: 1680px) {
    overflow: unset;
  }
`,dy=F.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  color: #ffffff;
    font-family: Oddval;

  @media screen and (min-width: 768px) {
    font-size: 45px;
    line-height: 111%;
    max-width: 600px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 60px;
    line-height: 113%;
    max-width: 720px;
  }
`,uy=F.p`
  margin-top: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    font-size: 18px;
    line-height: 133%;
    max-width: 450px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 28px;
    font-size: 20px;
    line-height: 130%;
    max-width: 580px;
  }
`,py=F.div`
  margin-top: 24px;
  @media screen and (min-width: 1440px) {
    margin-top: 28px;
  }
`,fy=F.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133%;
  }
  @media screen and (min-width: 1440px) {
    font-size: 28px;
    line-height: 121%;
  }
`,hy=F.ul`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: 133%;
  @media screen and (min-width: 768px) {
    margin-top: 24px;
    font-size: 16px;
    line-height: 150%;
  }
`,po=F.li`
  padding: 10px 12px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  @media screen and (min-width: 768px) {
    padding: 15px 26px;
  }
`,my=F.button`
  margin-top: 24px;
  padding: 15px 20px;

  font-weight: 600;
  font-size: 14px;
  line-height: 129%;
  border-radius: 30px;
  color: #0b0b0b;
  background: #ffffff;
  border: none;
  transition: 0.25s ease-in-out;
  &:hover {
    color: #f77d07;
  }
  &:active {
    background: #e3e3e3;
    color: #898b90;
  }

  @media screen and (min-width: 768px) {
    margin-top: 48px;
    padding: 23px 46px;
    font-size: 18px;
    line-height: 133%;
    border-radius: 60px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 44px;
  }
`,gy=F.div`
& p {
  margin: 0;
}

  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 129%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  width: fit-content;

  position: absolute;
  top: 561px;
  left: 82px;
  @media screen and (min-width: 375px) {
    left: 111px;
  }
  @media screen and (min-width: 768px) {
    top: 864px;
    left: 316px;
    font-size: 18px;
    line-height: 133%;
    span {
      font-size: 22px;
      line-height: 118%;
    }
  }
  @media screen and (min-width: 1440px) {
    top: 730px;
    left: 1000px;
    font-size: 20px;
    line-height: 130%;
    span {
      font-size: 28px;
      line-height: 121%;
    }
  }
`,by=({people:t=[],companies:e=[]})=>{const{openModal:n}=Qt();return c.jsx(ly,{id:"how",children:c.jsxs(cy,{children:[c.jsx(dy,{children:"Приєднуйся до спільноти людей, які змінюють Полтаву!"}),c.jsx(uy,{children:"Саме імпакт-інвестори будуть впливати на розподіл коштів серед проєктів містян"}),c.jsxs(py,{children:[c.jsx(fy,{children:"До відкриття МІСТОХАБ залишилось:"}),c.jsxs(hy,{children:[c.jsxs(po,{children:[116-t.length," ",gi(116-t.length,"i")]}),c.jsxs(po,{children:[17-e.length," ",gi(17-e.length,"k")]})]})]}),c.jsx(my,{type:"button",onClick:()=>n("join_modal"),children:"Приєднатися"}),c.jsxs(gy,{children:[c.jsx("p",{children:(t==null?void 0:t.length)>100&&c.jsx("span",{children:"100+ людей"})}),c.jsx("p",{children:(e==null?void 0:e.length)>10&&c.jsx("span",{children:"10+ компаній"})}),"вже приєдналися"]}),c.jsx(Xw,{})]})})};var xy=function(e){return vy(e)&&!wy(e)};function vy(t){return!!t&&typeof t=="object"}function wy(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||Ay(t)}var yy=typeof Symbol=="function"&&Symbol.for,Sy=yy?Symbol.for("react.element"):60103;function Ay(t){return t.$$typeof===Sy}function Ey(t){return Array.isArray(t)?[]:{}}function xi(t,e){return e.clone!==!1&&e.isMergeableObject(t)?mn(Ey(t),t,e):t}function Ty(t,e,n){return t.concat(e).map(function(i){return xi(i,n)})}function Cy(t,e,n){var i={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(r){i[r]=xi(t[r],n)}),Object.keys(e).forEach(function(r){!n.isMergeableObject(e[r])||!t[r]?i[r]=xi(e[r],n):i[r]=mn(t[r],e[r],n)}),i}function mn(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||Ty,n.isMergeableObject=n.isMergeableObject||xy;var i=Array.isArray(e),r=Array.isArray(t),s=i===r;return s?i?n.arrayMerge(t,e,n):Cy(t,e,n):xi(e,n)}mn.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(i,r){return mn(i,r,n)},{})};var Kr=mn,My=typeof global=="object"&&global&&global.Object===Object&&global;const zc=My;var jy=typeof self=="object"&&self&&self.Object===Object&&self,Oy=zc||jy||Function("return this")();const Ke=Oy;var ky=Ke.Symbol;const dt=ky;var Fc=Object.prototype,Py=Fc.hasOwnProperty,Iy=Fc.toString,tn=dt?dt.toStringTag:void 0;function Ny(t){var e=Py.call(t,tn),n=t[tn];try{t[tn]=void 0;var i=!0}catch{}var r=Iy.call(t);return i&&(e?t[tn]=n:delete t[tn]),r}var Ry=Object.prototype,Ly=Ry.toString;function zy(t){return Ly.call(t)}var Fy="[object Null]",Dy="[object Undefined]",fo=dt?dt.toStringTag:void 0;function Tt(t){return t==null?t===void 0?Dy:Fy:fo&&fo in Object(t)?Ny(t):zy(t)}function Dc(t,e){return function(n){return t(e(n))}}var By=Dc(Object.getPrototypeOf,Object);const zs=By;function Ct(t){return t!=null&&typeof t=="object"}var Hy="[object Object]",Uy=Function.prototype,Wy=Object.prototype,Bc=Uy.toString,Vy=Wy.hasOwnProperty,Gy=Bc.call(Object);function ho(t){if(!Ct(t)||Tt(t)!=Hy)return!1;var e=zs(t);if(e===null)return!0;var n=Vy.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&Bc.call(n)==Gy}function Jy(){this.__data__=[],this.size=0}function Hc(t,e){return t===e||t!==t&&e!==e}function Xi(t,e){for(var n=t.length;n--;)if(Hc(t[n][0],e))return n;return-1}var Qy=Array.prototype,qy=Qy.splice;function Yy(t){var e=this.__data__,n=Xi(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():qy.call(e,n,1),--this.size,!0}function Xy(t){var e=this.__data__,n=Xi(e,t);return n<0?void 0:e[n][1]}function Ky(t){return Xi(this.__data__,t)>-1}function Zy(t,e){var n=this.__data__,i=Xi(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}function tt(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}tt.prototype.clear=Jy;tt.prototype.delete=Yy;tt.prototype.get=Xy;tt.prototype.has=Ky;tt.prototype.set=Zy;function _y(){this.__data__=new tt,this.size=0}function $y(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function e1(t){return this.__data__.get(t)}function t1(t){return this.__data__.has(t)}function Rn(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var n1="[object AsyncFunction]",i1="[object Function]",r1="[object GeneratorFunction]",s1="[object Proxy]";function Uc(t){if(!Rn(t))return!1;var e=Tt(t);return e==i1||e==r1||e==n1||e==s1}var a1=Ke["__core-js_shared__"];const Tr=a1;var mo=function(){var t=/[^.]+$/.exec(Tr&&Tr.keys&&Tr.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function o1(t){return!!mo&&mo in t}var l1=Function.prototype,c1=l1.toString;function Mt(t){if(t!=null){try{return c1.call(t)}catch{}try{return t+""}catch{}}return""}var d1=/[\\^$.*+?()[\]{}|]/g,u1=/^\[object .+?Constructor\]$/,p1=Function.prototype,f1=Object.prototype,h1=p1.toString,m1=f1.hasOwnProperty,g1=RegExp("^"+h1.call(m1).replace(d1,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function b1(t){if(!Rn(t)||o1(t))return!1;var e=Uc(t)?g1:u1;return e.test(Mt(t))}function x1(t,e){return t==null?void 0:t[e]}function jt(t,e){var n=x1(t,e);return b1(n)?n:void 0}var v1=jt(Ke,"Map");const gn=v1;var w1=jt(Object,"create");const bn=w1;function y1(){this.__data__=bn?bn(null):{},this.size=0}function S1(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var A1="__lodash_hash_undefined__",E1=Object.prototype,T1=E1.hasOwnProperty;function C1(t){var e=this.__data__;if(bn){var n=e[t];return n===A1?void 0:n}return T1.call(e,t)?e[t]:void 0}var M1=Object.prototype,j1=M1.hasOwnProperty;function O1(t){var e=this.__data__;return bn?e[t]!==void 0:j1.call(e,t)}var k1="__lodash_hash_undefined__";function P1(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=bn&&e===void 0?k1:e,this}function At(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}At.prototype.clear=y1;At.prototype.delete=S1;At.prototype.get=C1;At.prototype.has=O1;At.prototype.set=P1;function I1(){this.size=0,this.__data__={hash:new At,map:new(gn||tt),string:new At}}function N1(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Ki(t,e){var n=t.__data__;return N1(e)?n[typeof e=="string"?"string":"hash"]:n.map}function R1(t){var e=Ki(this,t).delete(t);return this.size-=e?1:0,e}function L1(t){return Ki(this,t).get(t)}function z1(t){return Ki(this,t).has(t)}function F1(t,e){var n=Ki(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}function ut(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}ut.prototype.clear=I1;ut.prototype.delete=R1;ut.prototype.get=L1;ut.prototype.has=z1;ut.prototype.set=F1;var D1=200;function B1(t,e){var n=this.__data__;if(n instanceof tt){var i=n.__data__;if(!gn||i.length<D1-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new ut(i)}return n.set(t,e),this.size=n.size,this}function Kt(t){var e=this.__data__=new tt(t);this.size=e.size}Kt.prototype.clear=_y;Kt.prototype.delete=$y;Kt.prototype.get=e1;Kt.prototype.has=t1;Kt.prototype.set=B1;function H1(t,e){for(var n=-1,i=t==null?0:t.length;++n<i&&e(t[n],n,t)!==!1;);return t}var U1=function(){try{var t=jt(Object,"defineProperty");return t({},"",{}),t}catch{}}();const go=U1;function Wc(t,e,n){e=="__proto__"&&go?go(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var W1=Object.prototype,V1=W1.hasOwnProperty;function Vc(t,e,n){var i=t[e];(!(V1.call(t,e)&&Hc(i,n))||n===void 0&&!(e in t))&&Wc(t,e,n)}function Zi(t,e,n,i){var r=!n;n||(n={});for(var s=-1,a=e.length;++s<a;){var o=e[s],l=i?i(n[o],t[o],o,n,t):void 0;l===void 0&&(l=t[o]),r?Wc(n,o,l):Vc(n,o,l)}return n}function G1(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}var J1="[object Arguments]";function bo(t){return Ct(t)&&Tt(t)==J1}var Gc=Object.prototype,Q1=Gc.hasOwnProperty,q1=Gc.propertyIsEnumerable,Y1=bo(function(){return arguments}())?bo:function(t){return Ct(t)&&Q1.call(t,"callee")&&!q1.call(t,"callee")};const X1=Y1;var K1=Array.isArray;const Ln=K1;function Z1(){return!1}var Jc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,xo=Jc&&typeof module=="object"&&module&&!module.nodeType&&module,_1=xo&&xo.exports===Jc,vo=_1?Ke.Buffer:void 0,$1=vo?vo.isBuffer:void 0,eS=$1||Z1;const Qc=eS;var tS=9007199254740991,nS=/^(?:0|[1-9]\d*)$/;function iS(t,e){var n=typeof t;return e=e??tS,!!e&&(n=="number"||n!="symbol"&&nS.test(t))&&t>-1&&t%1==0&&t<e}var rS=9007199254740991;function qc(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=rS}var sS="[object Arguments]",aS="[object Array]",oS="[object Boolean]",lS="[object Date]",cS="[object Error]",dS="[object Function]",uS="[object Map]",pS="[object Number]",fS="[object Object]",hS="[object RegExp]",mS="[object Set]",gS="[object String]",bS="[object WeakMap]",xS="[object ArrayBuffer]",vS="[object DataView]",wS="[object Float32Array]",yS="[object Float64Array]",SS="[object Int8Array]",AS="[object Int16Array]",ES="[object Int32Array]",TS="[object Uint8Array]",CS="[object Uint8ClampedArray]",MS="[object Uint16Array]",jS="[object Uint32Array]",ne={};ne[wS]=ne[yS]=ne[SS]=ne[AS]=ne[ES]=ne[TS]=ne[CS]=ne[MS]=ne[jS]=!0;ne[sS]=ne[aS]=ne[xS]=ne[oS]=ne[vS]=ne[lS]=ne[cS]=ne[dS]=ne[uS]=ne[pS]=ne[fS]=ne[hS]=ne[mS]=ne[gS]=ne[bS]=!1;function OS(t){return Ct(t)&&qc(t.length)&&!!ne[Tt(t)]}function Fs(t){return function(e){return t(e)}}var Yc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,an=Yc&&typeof module=="object"&&module&&!module.nodeType&&module,kS=an&&an.exports===Yc,Cr=kS&&zc.process,PS=function(){try{var t=an&&an.require&&an.require("util").types;return t||Cr&&Cr.binding&&Cr.binding("util")}catch{}}();const Wt=PS;var wo=Wt&&Wt.isTypedArray,IS=wo?Fs(wo):OS;const NS=IS;var RS=Object.prototype,LS=RS.hasOwnProperty;function Xc(t,e){var n=Ln(t),i=!n&&X1(t),r=!n&&!i&&Qc(t),s=!n&&!i&&!r&&NS(t),a=n||i||r||s,o=a?G1(t.length,String):[],l=o.length;for(var u in t)(e||LS.call(t,u))&&!(a&&(u=="length"||r&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||iS(u,l)))&&o.push(u);return o}var zS=Object.prototype;function Ds(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||zS;return t===n}var FS=Dc(Object.keys,Object);const DS=FS;var BS=Object.prototype,HS=BS.hasOwnProperty;function US(t){if(!Ds(t))return DS(t);var e=[];for(var n in Object(t))HS.call(t,n)&&n!="constructor"&&e.push(n);return e}function Kc(t){return t!=null&&qc(t.length)&&!Uc(t)}function Bs(t){return Kc(t)?Xc(t):US(t)}function WS(t,e){return t&&Zi(e,Bs(e),t)}function VS(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var GS=Object.prototype,JS=GS.hasOwnProperty;function QS(t){if(!Rn(t))return VS(t);var e=Ds(t),n=[];for(var i in t)i=="constructor"&&(e||!JS.call(t,i))||n.push(i);return n}function Hs(t){return Kc(t)?Xc(t,!0):QS(t)}function qS(t,e){return t&&Zi(e,Hs(e),t)}var Zc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,yo=Zc&&typeof module=="object"&&module&&!module.nodeType&&module,YS=yo&&yo.exports===Zc,So=YS?Ke.Buffer:void 0,Ao=So?So.allocUnsafe:void 0;function XS(t,e){if(e)return t.slice();var n=t.length,i=Ao?Ao(n):new t.constructor(n);return t.copy(i),i}function _c(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e}function KS(t,e){for(var n=-1,i=t==null?0:t.length,r=0,s=[];++n<i;){var a=t[n];e(a,n,t)&&(s[r++]=a)}return s}function $c(){return[]}var ZS=Object.prototype,_S=ZS.propertyIsEnumerable,Eo=Object.getOwnPropertySymbols,$S=Eo?function(t){return t==null?[]:(t=Object(t),KS(Eo(t),function(e){return _S.call(t,e)}))}:$c;const Us=$S;function eA(t,e){return Zi(t,Us(t),e)}function ed(t,e){for(var n=-1,i=e.length,r=t.length;++n<i;)t[r+n]=e[n];return t}var tA=Object.getOwnPropertySymbols,nA=tA?function(t){for(var e=[];t;)ed(e,Us(t)),t=zs(t);return e}:$c;const td=nA;function iA(t,e){return Zi(t,td(t),e)}function nd(t,e,n){var i=e(t);return Ln(t)?i:ed(i,n(t))}function rA(t){return nd(t,Bs,Us)}function sA(t){return nd(t,Hs,td)}var aA=jt(Ke,"DataView");const Zr=aA;var oA=jt(Ke,"Promise");const _r=oA;var lA=jt(Ke,"Set");const $r=lA;var cA=jt(Ke,"WeakMap");const es=cA;var To="[object Map]",dA="[object Object]",Co="[object Promise]",Mo="[object Set]",jo="[object WeakMap]",Oo="[object DataView]",uA=Mt(Zr),pA=Mt(gn),fA=Mt(_r),hA=Mt($r),mA=Mt(es),mt=Tt;(Zr&&mt(new Zr(new ArrayBuffer(1)))!=Oo||gn&&mt(new gn)!=To||_r&&mt(_r.resolve())!=Co||$r&&mt(new $r)!=Mo||es&&mt(new es)!=jo)&&(mt=function(t){var e=Tt(t),n=e==dA?t.constructor:void 0,i=n?Mt(n):"";if(i)switch(i){case uA:return Oo;case pA:return To;case fA:return Co;case hA:return Mo;case mA:return jo}return e});const Ws=mt;var gA=Object.prototype,bA=gA.hasOwnProperty;function xA(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&bA.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var vA=Ke.Uint8Array;const ko=vA;function Vs(t){var e=new t.constructor(t.byteLength);return new ko(e).set(new ko(t)),e}function wA(t,e){var n=e?Vs(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var yA=/\w*$/;function SA(t){var e=new t.constructor(t.source,yA.exec(t));return e.lastIndex=t.lastIndex,e}var Po=dt?dt.prototype:void 0,Io=Po?Po.valueOf:void 0;function AA(t){return Io?Object(Io.call(t)):{}}function EA(t,e){var n=e?Vs(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var TA="[object Boolean]",CA="[object Date]",MA="[object Map]",jA="[object Number]",OA="[object RegExp]",kA="[object Set]",PA="[object String]",IA="[object Symbol]",NA="[object ArrayBuffer]",RA="[object DataView]",LA="[object Float32Array]",zA="[object Float64Array]",FA="[object Int8Array]",DA="[object Int16Array]",BA="[object Int32Array]",HA="[object Uint8Array]",UA="[object Uint8ClampedArray]",WA="[object Uint16Array]",VA="[object Uint32Array]";function GA(t,e,n){var i=t.constructor;switch(e){case NA:return Vs(t);case TA:case CA:return new i(+t);case RA:return wA(t,n);case LA:case zA:case FA:case DA:case BA:case HA:case UA:case WA:case VA:return EA(t,n);case MA:return new i;case jA:case PA:return new i(t);case OA:return SA(t);case kA:return new i;case IA:return AA(t)}}var No=Object.create,JA=function(){function t(){}return function(e){if(!Rn(e))return{};if(No)return No(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();const QA=JA;function qA(t){return typeof t.constructor=="function"&&!Ds(t)?QA(zs(t)):{}}var YA="[object Map]";function XA(t){return Ct(t)&&Ws(t)==YA}var Ro=Wt&&Wt.isMap,KA=Ro?Fs(Ro):XA;const ZA=KA;var _A="[object Set]";function $A(t){return Ct(t)&&Ws(t)==_A}var Lo=Wt&&Wt.isSet,eE=Lo?Fs(Lo):$A;const tE=eE;var nE=1,iE=2,rE=4,id="[object Arguments]",sE="[object Array]",aE="[object Boolean]",oE="[object Date]",lE="[object Error]",rd="[object Function]",cE="[object GeneratorFunction]",dE="[object Map]",uE="[object Number]",sd="[object Object]",pE="[object RegExp]",fE="[object Set]",hE="[object String]",mE="[object Symbol]",gE="[object WeakMap]",bE="[object ArrayBuffer]",xE="[object DataView]",vE="[object Float32Array]",wE="[object Float64Array]",yE="[object Int8Array]",SE="[object Int16Array]",AE="[object Int32Array]",EE="[object Uint8Array]",TE="[object Uint8ClampedArray]",CE="[object Uint16Array]",ME="[object Uint32Array]",ee={};ee[id]=ee[sE]=ee[bE]=ee[xE]=ee[aE]=ee[oE]=ee[vE]=ee[wE]=ee[yE]=ee[SE]=ee[AE]=ee[dE]=ee[uE]=ee[sd]=ee[pE]=ee[fE]=ee[hE]=ee[mE]=ee[EE]=ee[TE]=ee[CE]=ee[ME]=!0;ee[lE]=ee[rd]=ee[gE]=!1;function on(t,e,n,i,r,s){var a,o=e&nE,l=e&iE,u=e&rE;if(n&&(a=r?n(t,i,r,s):n(t)),a!==void 0)return a;if(!Rn(t))return t;var d=Ln(t);if(d){if(a=xA(t),!o)return _c(t,a)}else{var p=Ws(t),h=p==rd||p==cE;if(Qc(t))return XS(t,o);if(p==sd||p==id||h&&!r){if(a=l||h?{}:qA(t),!o)return l?iA(t,qS(a,t)):eA(t,WS(a,t))}else{if(!ee[p])return r?t:{};a=GA(t,p,o)}}s||(s=new Kt);var g=s.get(t);if(g)return g;s.set(t,a),tE(t)?t.forEach(function(v){a.add(on(v,e,n,v,t,s))}):ZA(t)&&t.forEach(function(v,f){a.set(f,on(v,e,n,f,t,s))});var m=u?l?sA:rA:l?Hs:Bs,b=d?void 0:m(t);return H1(b||t,function(v,f){b&&(f=v,v=t[f]),Vc(a,f,on(v,e,n,f,t,s))}),a}var jE=1,OE=4;function qn(t){return on(t,jE|OE)}var zo=Array.isArray,Fo=Object.keys,kE=Object.prototype.hasOwnProperty,PE=typeof Element<"u";function ts(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=zo(t),i=zo(e),r,s,a;if(n&&i){if(s=t.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!ts(t[r],e[r]))return!1;return!0}if(n!=i)return!1;var o=t instanceof Date,l=e instanceof Date;if(o!=l)return!1;if(o&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==e.toString();var p=Fo(t);if(s=p.length,s!==Fo(e).length)return!1;for(r=s;r--!==0;)if(!kE.call(e,p[r]))return!1;if(PE&&t instanceof Element&&e instanceof Element)return t===e;for(r=s;r--!==0;)if(a=p[r],!(a==="_owner"&&t.$$typeof)&&!ts(t[a],e[a]))return!1;return!0}return t!==t&&e!==e}var IE=function(e,n){try{return ts(e,n)}catch(i){if(i.message&&i.message.match(/stack|recursion/i)||i.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",i.name,i.message),!1;throw i}};const gt=xn(IE);var NE=!0;function RE(t,e){if(!NE){if(t)return;var n="Warning: "+e;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}var LE=4;function Do(t){return on(t,LE)}function ad(t,e){for(var n=-1,i=t==null?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r}var zE="[object Symbol]";function Gs(t){return typeof t=="symbol"||Ct(t)&&Tt(t)==zE}var FE="Expected a function";function Js(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(FE);var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],s=n.cache;if(s.has(r))return s.get(r);var a=t.apply(this,i);return n.cache=s.set(r,a)||s,a};return n.cache=new(Js.Cache||ut),n}Js.Cache=ut;var DE=500;function BE(t){var e=Js(t,function(i){return n.size===DE&&n.clear(),i}),n=e.cache;return e}var HE=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,UE=/\\(\\)?/g,WE=BE(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(HE,function(n,i,r,s){e.push(r?s.replace(UE,"$1"):i||n)}),e});const VE=WE;var GE=1/0;function JE(t){if(typeof t=="string"||Gs(t))return t;var e=t+"";return e=="0"&&1/t==-GE?"-0":e}var QE=1/0,Bo=dt?dt.prototype:void 0,Ho=Bo?Bo.toString:void 0;function od(t){if(typeof t=="string")return t;if(Ln(t))return ad(t,od)+"";if(Gs(t))return Ho?Ho.call(t):"";var e=t+"";return e=="0"&&1/t==-QE?"-0":e}function qE(t){return t==null?"":od(t)}function ld(t){return Ln(t)?ad(t,JE):Gs(t)?[t]:_c(VE(qE(t)))}function pe(){return pe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},pe.apply(this,arguments)}function cd(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}var _i=S.createContext(void 0);_i.displayName="FormikContext";_i.Provider;_i.Consumer;function YE(){var t=S.useContext(_i);return t||RE(!1),t}var Ie=function(e){return typeof e=="function"},$i=function(e){return e!==null&&typeof e=="object"},XE=function(e){return String(Math.floor(Number(e)))===e},Mr=function(e){return Object.prototype.toString.call(e)==="[object String]"},jr=function(e){return $i(e)&&Ie(e.then)};function Ee(t,e,n,i){i===void 0&&(i=0);for(var r=ld(e);t&&i<r.length;)t=t[r[i++]];return i!==r.length&&!t||t===void 0?n:t}function vt(t,e,n){for(var i=Do(t),r=i,s=0,a=ld(e);s<a.length-1;s++){var o=a[s],l=Ee(t,a.slice(0,s+1));if(l&&($i(l)||Array.isArray(l)))r=r[o]=Do(l);else{var u=a[s+1];r=r[o]=XE(u)&&Number(u)>=0?[]:{}}}return(s===0?t:r)[a[s]]===n?t:(n===void 0?delete r[a[s]]:r[a[s]]=n,s===0&&n===void 0&&delete i[a[s]],i)}function dd(t,e,n,i){n===void 0&&(n=new WeakMap),i===void 0&&(i={});for(var r=0,s=Object.keys(t);r<s.length;r++){var a=s[r],o=t[a];$i(o)?n.get(o)||(n.set(o,!0),i[a]=Array.isArray(o)?[]:{},dd(o,e,n,i[a])):i[a]=e}return i}function KE(t,e){switch(e.type){case"SET_VALUES":return pe({},t,{values:e.payload});case"SET_TOUCHED":return pe({},t,{touched:e.payload});case"SET_ERRORS":return gt(t.errors,e.payload)?t:pe({},t,{errors:e.payload});case"SET_STATUS":return pe({},t,{status:e.payload});case"SET_ISSUBMITTING":return pe({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return pe({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return pe({},t,{values:vt(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return pe({},t,{touched:vt(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return pe({},t,{errors:vt(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return pe({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return pe({},t,{touched:dd(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return pe({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return pe({},t,{isSubmitting:!1});default:return t}}var ft={},Yn={};function ZE(t){var e=t.validateOnChange,n=e===void 0?!0:e,i=t.validateOnBlur,r=i===void 0?!0:i,s=t.validateOnMount,a=s===void 0?!1:s,o=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,d=t.onSubmit,p=cd(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),h=pe({validateOnChange:n,validateOnBlur:r,validateOnMount:a,onSubmit:d},p),g=S.useRef(h.initialValues),m=S.useRef(h.initialErrors||ft),b=S.useRef(h.initialTouched||Yn),v=S.useRef(h.initialStatus),f=S.useRef(!1),x=S.useRef({});S.useEffect(function(){return f.current=!0,function(){f.current=!1}},[]);var w=S.useState(0),E=w[1],M=S.useRef({values:qn(h.initialValues),errors:qn(h.initialErrors)||ft,touched:qn(h.initialTouched)||Yn,status:qn(h.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),T=M.current,j=S.useCallback(function(y){var D=M.current;M.current=KE(D,y),D!==M.current&&E(function(B){return B+1})},[]),L=S.useCallback(function(y,D){return new Promise(function(B,U){var V=h.validate(y,D);V==null?B(ft):jr(V)?V.then(function(_){B(_||ft)},function(_){U(_)}):B(V)})},[h.validate]),N=S.useCallback(function(y,D){var B=h.validationSchema,U=Ie(B)?B(D):B,V=D&&U.validateAt?U.validateAt(D,y):$E(y,U);return new Promise(function(_,ue){V.then(function(){_(ft)},function(Ze){Ze.name==="ValidationError"?_(_E(Ze)):ue(Ze)})})},[h.validationSchema]),O=S.useCallback(function(y,D){return new Promise(function(B){return B(x.current[y].validate(D))})},[]),I=S.useCallback(function(y){var D=Object.keys(x.current).filter(function(U){return Ie(x.current[U].validate)}),B=D.length>0?D.map(function(U){return O(U,Ee(y,U))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(B).then(function(U){return U.reduce(function(V,_,ue){return _==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||_&&(V=vt(V,D[ue],_)),V},{})})},[O]),R=S.useCallback(function(y){return Promise.all([I(y),h.validationSchema?N(y):{},h.validate?L(y):{}]).then(function(D){var B=D[0],U=D[1],V=D[2],_=Kr.all([B,U,V],{arrayMerge:e2});return _})},[h.validate,h.validationSchema,I,L,N]),P=Oe(function(y){return y===void 0&&(y=T.values),j({type:"SET_ISVALIDATING",payload:!0}),R(y).then(function(D){return f.current&&(j({type:"SET_ISVALIDATING",payload:!1}),j({type:"SET_ERRORS",payload:D})),D})});S.useEffect(function(){a&&f.current===!0&&gt(g.current,h.initialValues)&&P(g.current)},[a,P]);var k=S.useCallback(function(y){var D=y&&y.values?y.values:g.current,B=y&&y.errors?y.errors:m.current?m.current:h.initialErrors||{},U=y&&y.touched?y.touched:b.current?b.current:h.initialTouched||{},V=y&&y.status?y.status:v.current?v.current:h.initialStatus;g.current=D,m.current=B,b.current=U,v.current=V;var _=function(){j({type:"RESET_FORM",payload:{isSubmitting:!!y&&!!y.isSubmitting,errors:B,touched:U,status:V,values:D,isValidating:!!y&&!!y.isValidating,submitCount:y&&y.submitCount&&typeof y.submitCount=="number"?y.submitCount:0}})};if(h.onReset){var ue=h.onReset(T.values,ta);jr(ue)?ue.then(_):_()}else _()},[h.initialErrors,h.initialStatus,h.initialTouched,h.onReset]);S.useEffect(function(){f.current===!0&&!gt(g.current,h.initialValues)&&u&&(g.current=h.initialValues,k(),a&&P(g.current))},[u,h.initialValues,k,a,P]),S.useEffect(function(){u&&f.current===!0&&!gt(m.current,h.initialErrors)&&(m.current=h.initialErrors||ft,j({type:"SET_ERRORS",payload:h.initialErrors||ft}))},[u,h.initialErrors]),S.useEffect(function(){u&&f.current===!0&&!gt(b.current,h.initialTouched)&&(b.current=h.initialTouched||Yn,j({type:"SET_TOUCHED",payload:h.initialTouched||Yn}))},[u,h.initialTouched]),S.useEffect(function(){u&&f.current===!0&&!gt(v.current,h.initialStatus)&&(v.current=h.initialStatus,j({type:"SET_STATUS",payload:h.initialStatus}))},[u,h.initialStatus,h.initialTouched]);var z=Oe(function(y){if(x.current[y]&&Ie(x.current[y].validate)){var D=Ee(T.values,y),B=x.current[y].validate(D);return jr(B)?(j({type:"SET_ISVALIDATING",payload:!0}),B.then(function(U){return U}).then(function(U){j({type:"SET_FIELD_ERROR",payload:{field:y,value:U}}),j({type:"SET_ISVALIDATING",payload:!1})})):(j({type:"SET_FIELD_ERROR",payload:{field:y,value:B}}),Promise.resolve(B))}else if(h.validationSchema)return j({type:"SET_ISVALIDATING",payload:!0}),N(T.values,y).then(function(U){return U}).then(function(U){j({type:"SET_FIELD_ERROR",payload:{field:y,value:Ee(U,y)}}),j({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Q=S.useCallback(function(y,D){var B=D.validate;x.current[y]={validate:B}},[]),A=S.useCallback(function(y){delete x.current[y]},[]),H=Oe(function(y,D){j({type:"SET_TOUCHED",payload:y});var B=D===void 0?r:D;return B?P(T.values):Promise.resolve()}),G=S.useCallback(function(y){j({type:"SET_ERRORS",payload:y})},[]),Z=Oe(function(y,D){var B=Ie(y)?y(T.values):y;j({type:"SET_VALUES",payload:B});var U=D===void 0?n:D;return U?P(B):Promise.resolve()}),te=S.useCallback(function(y,D){j({type:"SET_FIELD_ERROR",payload:{field:y,value:D}})},[]),be=Oe(function(y,D,B){j({type:"SET_FIELD_VALUE",payload:{field:y,value:D}});var U=B===void 0?n:B;return U?P(vt(T.values,y,D)):Promise.resolve()}),Be=S.useCallback(function(y,D){var B=D,U=y,V;if(!Mr(y)){y.persist&&y.persist();var _=y.target?y.target:y.currentTarget,ue=_.type,Ze=_.name,sr=_.id,ar=_.value,kd=_.checked,CM=_.outerHTML,na=_.options,Pd=_.multiple;B=D||Ze||sr,U=/number|range/.test(ue)?(V=parseFloat(ar),isNaN(V)?"":V):/checkbox/.test(ue)?n2(Ee(T.values,B),kd,ar):na&&Pd?t2(na):ar}B&&be(B,U)},[be,T.values]),nt=Oe(function(y){if(Mr(y))return function(D){return Be(D,y)};Be(y)}),it=Oe(function(y,D,B){D===void 0&&(D=!0),j({type:"SET_FIELD_TOUCHED",payload:{field:y,value:D}});var U=B===void 0?r:B;return U?P(T.values):Promise.resolve()}),zn=S.useCallback(function(y,D){y.persist&&y.persist();var B=y.target,U=B.name,V=B.id,_=B.outerHTML,ue=D||U||V;it(ue,!0)},[it]),Zt=Oe(function(y){if(Mr(y))return function(D){return zn(D,y)};zn(y)}),_s=S.useCallback(function(y){Ie(y)?j({type:"SET_FORMIK_STATE",payload:y}):j({type:"SET_FORMIK_STATE",payload:function(){return y}})},[]),$s=S.useCallback(function(y){j({type:"SET_STATUS",payload:y})},[]),ea=S.useCallback(function(y){j({type:"SET_ISSUBMITTING",payload:y})},[]),ir=Oe(function(){return j({type:"SUBMIT_ATTEMPT"}),P().then(function(y){var D=y instanceof Error,B=!D&&Object.keys(y).length===0;if(B){var U;try{if(U=Ad(),U===void 0)return}catch(V){throw V}return Promise.resolve(U).then(function(V){return f.current&&j({type:"SUBMIT_SUCCESS"}),V}).catch(function(V){if(f.current)throw j({type:"SUBMIT_FAILURE"}),V})}else if(f.current&&(j({type:"SUBMIT_FAILURE"}),D))throw y})}),Sd=Oe(function(y){y&&y.preventDefault&&Ie(y.preventDefault)&&y.preventDefault(),y&&y.stopPropagation&&Ie(y.stopPropagation)&&y.stopPropagation(),ir().catch(function(D){console.warn("Warning: An unhandled error was caught from submitForm()",D)})}),ta={resetForm:k,validateForm:P,validateField:z,setErrors:G,setFieldError:te,setFieldTouched:it,setFieldValue:be,setStatus:$s,setSubmitting:ea,setTouched:H,setValues:Z,setFormikState:_s,submitForm:ir},Ad=Oe(function(){return d(T.values,ta)}),Ed=Oe(function(y){y&&y.preventDefault&&Ie(y.preventDefault)&&y.preventDefault(),y&&y.stopPropagation&&Ie(y.stopPropagation)&&y.stopPropagation(),k()}),Td=S.useCallback(function(y){return{value:Ee(T.values,y),error:Ee(T.errors,y),touched:!!Ee(T.touched,y),initialValue:Ee(g.current,y),initialTouched:!!Ee(b.current,y),initialError:Ee(m.current,y)}},[T.errors,T.touched,T.values]),Cd=S.useCallback(function(y){return{setValue:function(B,U){return be(y,B,U)},setTouched:function(B,U){return it(y,B,U)},setError:function(B){return te(y,B)}}},[be,it,te]),Md=S.useCallback(function(y){var D=$i(y),B=D?y.name:y,U=Ee(T.values,B),V={name:B,value:U,onChange:nt,onBlur:Zt};if(D){var _=y.type,ue=y.value,Ze=y.as,sr=y.multiple;_==="checkbox"?ue===void 0?V.checked=!!U:(V.checked=!!(Array.isArray(U)&&~U.indexOf(ue)),V.value=ue):_==="radio"?(V.checked=U===ue,V.value=ue):Ze==="select"&&sr&&(V.value=V.value||[],V.multiple=!0)}return V},[Zt,nt,T.values]),rr=S.useMemo(function(){return!gt(g.current,T.values)},[g.current,T.values]),jd=S.useMemo(function(){return typeof o<"u"?rr?T.errors&&Object.keys(T.errors).length===0:o!==!1&&Ie(o)?o(h):o:T.errors&&Object.keys(T.errors).length===0},[o,rr,T.errors,h]),Od=pe({},T,{initialValues:g.current,initialErrors:m.current,initialTouched:b.current,initialStatus:v.current,handleBlur:Zt,handleChange:nt,handleReset:Ed,handleSubmit:Sd,resetForm:k,setErrors:G,setFormikState:_s,setFieldTouched:it,setFieldValue:be,setFieldError:te,setStatus:$s,setSubmitting:ea,setTouched:H,setValues:Z,submitForm:ir,validateForm:P,validateField:z,isValid:jd,dirty:rr,unregisterField:A,registerField:Q,getFieldProps:Md,getFieldMeta:Td,getFieldHelpers:Cd,validateOnBlur:r,validateOnChange:n,validateOnMount:a});return Od}function _E(t){var e={};if(t.inner){if(t.inner.length===0)return vt(e,t.path,t.message);for(var r=t.inner,n=Array.isArray(r),i=0,r=n?r:r[Symbol.iterator]();;){var s;if(n){if(i>=r.length)break;s=r[i++]}else{if(i=r.next(),i.done)break;s=i.value}var a=s;Ee(e,a.path)||(e=vt(e,a.path,a.message))}}return e}function $E(t,e,n,i){n===void 0&&(n=!1);var r=ns(t);return e[n?"validateSync":"validate"](r,{abortEarly:!1,context:i||r})}function ns(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=String(n);Array.isArray(t[i])===!0?e[i]=t[i].map(function(r){return Array.isArray(r)===!0||ho(r)?ns(r):r!==""?r:void 0}):ho(t[i])?e[i]=ns(t[i]):e[i]=t[i]!==""?t[i]:void 0}return e}function e2(t,e,n){var i=t.slice();return e.forEach(function(s,a){if(typeof i[a]>"u"){var o=n.clone!==!1,l=o&&n.isMergeableObject(s);i[a]=l?Kr(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?i[a]=Kr(t[a],s,n):t.indexOf(s)===-1&&i.push(s)}),i}function t2(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function n2(t,e,n){if(typeof t=="boolean")return!!e;var i=[],r=!1,s=-1;if(Array.isArray(t))i=t,s=t.indexOf(n),r=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!r?i.concat(n):r?i.slice(0,s).concat(i.slice(s+1)):i}var i2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?S.useLayoutEffect:S.useEffect;function Oe(t){var e=S.useRef(t);return i2(function(){e.current=t}),S.useCallback(function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.current.apply(void 0,i)},[])}var r2=S.forwardRef(function(t,e){var n=t.action,i=cd(t,["action"]),r=n??"#",s=YE(),a=s.handleReset,o=s.handleSubmit;return S.createElement("form",pe({onSubmit:o,ref:e,onReset:a,action:r},i))});r2.displayName="Form";function Ot(t){this._maxSize=t,this.clear()}Ot.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ot.prototype.get=function(t){return this._values[t]};Ot.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var s2=/[^.^\]^[]+|(?=\[\]|\.\.)/g,ud=/^\d+$/,a2=/^\d/,o2=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,l2=/^\s*(['"]?)(.*?)(\1)\s*$/,Qs=512,Uo=new Ot(Qs),Wo=new Ot(Qs),Vo=new Ot(Qs),wt={Cache:Ot,split:is,normalizePath:Or,setter:function(t){var e=Or(t);return Wo.get(t)||Wo.set(t,function(i,r){for(var s=0,a=e.length,o=i;s<a-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return i;o=o[e[s++]]}o[e[s]]=r})},getter:function(t,e){var n=Or(t);return Vo.get(t)||Vo.set(t,function(r){for(var s=0,a=n.length;s<a;)if(r!=null||!e)r=r[n[s++]];else return;return r})},join:function(t){return t.reduce(function(e,n){return e+(qs(n)||ud.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){c2(Array.isArray(t)?t:is(t),e,n)}};function Or(t){return Uo.get(t)||Uo.set(t,is(t).map(function(e){return e.replace(l2,"$2")}))}function is(t){return t.match(s2)||[""]}function c2(t,e,n){var i=t.length,r,s,a,o;for(s=0;s<i;s++)r=t[s],r&&(p2(r)&&(r='"'+r+'"'),o=qs(r),a=!o&&/^\d+$/.test(r),e.call(n,r,o,a,s,t))}function qs(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function d2(t){return t.match(a2)&&!t.match(ud)}function u2(t){return o2.test(t)}function p2(t){return!qs(t)&&(d2(t)||u2(t))}const f2=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,er=t=>t.match(f2)||[],tr=t=>t[0].toUpperCase()+t.slice(1),Ys=(t,e)=>er(t).join(e).toLowerCase(),pd=t=>er(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),h2=t=>tr(pd(t)),m2=t=>Ys(t,"_"),g2=t=>Ys(t,"-"),b2=t=>tr(Ys(t," ")),x2=t=>er(t).map(tr).join(" ");var kr={words:er,upperFirst:tr,camelCase:pd,pascalCase:h2,snakeCase:m2,kebabCase:g2,sentenceCase:b2,titleCase:x2},Xs={exports:{}};Xs.exports=function(t){return fd(v2(t),t)};Xs.exports.array=fd;function fd(t,e){var n=t.length,i=new Array(n),r={},s=n,a=w2(e),o=y2(t);for(e.forEach(function(u){if(!o.has(u[0])||!o.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)r[s]||l(t[s],s,new Set);return i;function l(u,d,p){if(p.has(u)){var h;try{h=", node was:"+JSON.stringify(u)}catch{h=""}throw new Error("Cyclic dependency"+h)}if(!o.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!r[d]){r[d]=!0;var g=a.get(u)||new Set;if(g=Array.from(g),d=g.length){p.add(u);do{var m=g[--d];l(m,o.get(m),p)}while(d);p.delete(u)}i[--n]=u}}}function v2(t){for(var e=new Set,n=0,i=t.length;n<i;n++){var r=t[n];e.add(r[0]),e.add(r[1])}return Array.from(e)}function w2(t){for(var e=new Map,n=0,i=t.length;n<i;n++){var r=t[n];e.has(r[0])||e.set(r[0],new Set),e.has(r[1])||e.set(r[1],new Set),e.get(r[0]).add(r[1])}return e}function y2(t){for(var e=new Map,n=0,i=t.length;n<i;n++)e.set(t[n],n);return e}var S2=Xs.exports;const A2=xn(S2),E2=Object.prototype.toString,T2=Error.prototype.toString,C2=RegExp.prototype.toString,M2=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",j2=/^Symbol\((.*)\)(.*)$/;function O2(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function Go(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return O2(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return M2.call(t).replace(j2,"Symbol($1)");const i=E2.call(t).slice(8,-1);return i==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):i==="Error"||t instanceof Error?"["+T2.call(t)+"]":i==="RegExp"?C2.call(t):null}function ct(t,e){let n=Go(t,e);return n!==null?n:JSON.stringify(t,function(i,r){let s=Go(this[i],e);return s!==null?s:r},2)}function hd(t){return t==null?[]:[].concat(t)}let md,gd,bd,k2=/\$\{\s*(\w+)\s*\}/g;md=Symbol.toStringTag;class Jo{constructor(e,n,i,r){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[md]="Error",this.name="ValidationError",this.value=n,this.path=i,this.type=r,this.errors=[],this.inner=[],hd(e).forEach(s=>{if(Se.isError(s)){this.errors.push(...s.errors);const a=s.inner.length?s.inner:[s];this.inner.push(...a)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}gd=Symbol.hasInstance;bd=Symbol.toStringTag;class Se extends Error{static formatError(e,n){const i=n.label||n.path||"this";return i!==n.path&&(n=Object.assign({},n,{path:i})),typeof e=="string"?e.replace(k2,(r,s)=>ct(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,i,r,s){const a=new Jo(e,n,i,r);if(s)return a;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[bd]="Error",this.name=a.name,this.message=a.message,this.type=a.type,this.value=a.value,this.path=a.path,this.errors=a.errors,this.inner=a.inner,Error.captureStackTrace&&Error.captureStackTrace(this,Se)}static[gd](e){return Jo[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let He={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:i})=>{const r=i!=null&&i!==n?` (cast from the value \`${ct(i,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${ct(n,!0)}\``+r:`${t} must match the configured type. The validated value was: \`${ct(n,!0)}\``+r}},ye={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},P2={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},rs={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},I2={isValue:"${path} field must be ${value}"},ss={noUnknown:"${path} field has unspecified keys: ${unknown}"},N2={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},R2={notType:t=>{const{path:e,value:n,spec:i}=t,r=i.types.length;if(Array.isArray(n)){if(n.length<r)return`${e} tuple value has too few items, expected a length of ${r} but got ${n.length} for value: \`${ct(n,!0)}\``;if(n.length>r)return`${e} tuple value has too many items, expected a length of ${r} but got ${n.length} for value: \`${ct(n,!0)}\``}return Se.formatError(He.notType,t)}};Object.assign(Object.create(null),{mixed:He,string:ye,number:P2,date:rs,object:ss,array:N2,boolean:I2,tuple:R2});const Ks=t=>t&&t.__isYupSchema__;class vi{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:i,then:r,otherwise:s}=n,a=typeof i=="function"?i:(...o)=>o.every(l=>l===i);return new vi(e,(o,l)=>{var u;let d=a(...o)?r:s;return(u=d==null?void 0:d(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let i=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),r=this.fn(i,e,n);if(r===void 0||r===e)return e;if(!Ks(r))throw new TypeError("conditions must return a schema object");return r.resolve(n)}}const Xn={context:"$",value:"."};class kt{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Xn.context,this.isValue=this.key[0]===Xn.value,this.isSibling=!this.isContext&&!this.isValue;let i=this.isContext?Xn.context:this.isValue?Xn.value:"";this.path=this.key.slice(i.length),this.getter=this.path&&wt.getter(this.path,!0),this.map=n.map}getValue(e,n,i){let r=this.isContext?i:this.isValue?e:n;return this.getter&&(r=this.getter(r||{})),this.map&&(r=this.map(r)),r}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}kt.prototype.__isYupRef=!0;const bt=t=>t==null;function It(t){function e({value:n,path:i="",options:r,originalValue:s,schema:a},o,l){const{name:u,test:d,params:p,message:h,skipAbsent:g}=t;let{parent:m,context:b,abortEarly:v=a.spec.abortEarly,disableStackTrace:f=a.spec.disableStackTrace}=r;function x(I){return kt.isRef(I)?I.getValue(n,m,b):I}function w(I={}){const R=Object.assign({value:n,originalValue:s,label:a.spec.label,path:I.path||i,spec:a.spec,disableStackTrace:I.disableStackTrace||f},p,I.params);for(const k of Object.keys(R))R[k]=x(R[k]);const P=new Se(Se.formatError(I.message||h,R),n,R.path,I.type||u,R.disableStackTrace);return P.params=R,P}const E=v?o:l;let M={path:i,parent:m,type:u,from:r.from,createError:w,resolve:x,options:r,originalValue:s,schema:a};const T=I=>{Se.isError(I)?E(I):I?l(null):E(w())},j=I=>{Se.isError(I)?E(I):o(I)};if(g&&bt(n))return T(!0);let N;try{var O;if(N=d.call(M,n,M),typeof((O=N)==null?void 0:O.then)=="function"){if(r.sync)throw new Error(`Validation test of type: "${M.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(N).then(T,j)}}catch(I){j(I);return}T(N)}return e.OPTIONS=t,e}function L2(t,e,n,i=n){let r,s,a;return e?(wt.forEach(e,(o,l,u)=>{let d=l?o.slice(1,o.length-1):o;t=t.resolve({context:i,parent:r,value:n});let p=t.type==="tuple",h=u?parseInt(d,10):0;if(t.innerType||p){if(p&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&h>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${e}. because there is no value at that index. `);r=n,n=n&&n[h],t=p?t.spec.types[h]:t.innerType}if(!u){if(!t.fields||!t.fields[d])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${a} which is a type: "${t.type}")`);r=n,n=n&&n[d],t=t.fields[d]}s=d,a=l?"["+o+"]":"."+o}),{schema:t,parent:r,parentPath:s}):{parent:r,parentPath:e,schema:t}}class wi extends Set{describe(){const e=[];for(const n of this.values())e.push(kt.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const i of this.values())n.push(e(i));return n}clone(){return new wi(this.values())}merge(e,n){const i=this.clone();return e.forEach(r=>i.add(r)),n.forEach(r=>i.delete(r)),i}}function Lt(t,e=new Map){if(Ks(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let i=0;i<t.length;i++)n[i]=Lt(t[i],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[i,r]of t.entries())n.set(i,Lt(r,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const i of t)n.add(Lt(i,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[i,r]of Object.entries(t))n[i]=Lt(r,e)}else throw Error(`Unable to clone ${t}`);return n}class qe{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new wi,this._blacklist=new wi,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(He.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Lt(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let i=e(this);return this._mutate=n,i}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,i=e.clone();const r=Object.assign({},n.spec,i.spec);return i.spec=r,i.internalTests=Object.assign({},n.internalTests,i.internalTests),i._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),i._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),i.tests=n.tests,i.exclusiveTests=n.exclusiveTests,i.withMutation(s=>{e.tests.forEach(a=>{s.test(a.OPTIONS)})}),i.transforms=[...n.transforms,...i.transforms],i}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let i=n.conditions;n=n.clone(),n.conditions=[],n=i.reduce((r,s)=>s.resolve(r,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,i,r,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(i=e.abortEarly)!=null?i:this.spec.abortEarly,recursive:(r=e.recursive)!=null?r:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let i=this.resolve(Object.assign({value:e},n)),r=n.assert==="ignore-optionality",s=i._cast(e,n);if(n.assert!==!1&&!i.isType(s)){if(r&&bt(s))return s;let a=ct(e),o=ct(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${i.type}". 

attempted value: ${a} 
`+(o!==a?`result of cast: ${o}`:""))}return s}_cast(e,n){let i=e===void 0?e:this.transforms.reduce((r,s)=>s.call(this,r,e,this),e);return i===void 0&&(i=this.getDefault(n)),i}_validate(e,n={},i,r){let{path:s,originalValue:a=e,strict:o=this.spec.strict}=n,l=e;o||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let d of Object.values(this.internalTests))d&&u.push(d);this.runTests({path:s,value:l,originalValue:a,options:n,tests:u},i,d=>{if(d.length)return r(d,l);this.runTests({path:s,value:l,originalValue:a,options:n,tests:this.tests},i,r)})}runTests(e,n,i){let r=!1,{tests:s,value:a,originalValue:o,path:l,options:u}=e,d=b=>{r||(r=!0,n(b,a))},p=b=>{r||(r=!0,i(b,a))},h=s.length,g=[];if(!h)return p([]);let m={value:a,originalValue:o,path:l,options:u,schema:this};for(let b=0;b<s.length;b++){const v=s[b];v(m,d,function(x){x&&(Array.isArray(x)?g.push(...x):g.push(x)),--h<=0&&p(g)})}}asNestedTest({key:e,index:n,parent:i,parentPath:r,originalParent:s,options:a}){const o=e??n;if(o==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof o=="number";let u=i[o];const d=Object.assign({},a,{strict:!0,parent:i,value:u,originalValue:s[o],key:void 0,[l?"index":"key"]:o,path:l||o.includes(".")?`${r||""}[${l?o:`"${o}"`}]`:(r?`${r}.`:"")+e});return(p,h,g)=>this.resolve(d)._validate(u,d,h,g)}validate(e,n){var i;let r=this.resolve(Object.assign({},n,{value:e})),s=(i=n==null?void 0:n.disableStackTrace)!=null?i:r.spec.disableStackTrace;return new Promise((a,o)=>r._validate(e,n,(l,u)=>{Se.isError(l)&&(l.value=u),o(l)},(l,u)=>{l.length?o(new Se(l,u,void 0,void 0,s)):a(u)}))}validateSync(e,n){var i;let r=this.resolve(Object.assign({},n,{value:e})),s,a=(i=n==null?void 0:n.disableStackTrace)!=null?i:r.spec.disableStackTrace;return r._validate(e,Object.assign({},n,{sync:!0}),(o,l)=>{throw Se.isError(o)&&(o.value=l),o},(o,l)=>{if(o.length)throw new Se(o,e,void 0,void 0,a);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,i=>{if(Se.isError(i))return!1;throw i})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(i){if(Se.isError(i))return!1;throw i}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):Lt(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const i=this.clone({nullable:e});return i.internalTests.nullable=It({message:n,name:"nullable",test(r){return r===null?this.schema.spec.nullable:!0}}),i}optionality(e,n){const i=this.clone({optional:e});return i.internalTests.optionality=It({message:n,name:"optionality",test(r){return r===void 0?this.schema.spec.optional:!0}}),i}optional(){return this.optionality(!0)}defined(e=He.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=He.notNull){return this.nullability(!1,e)}required(e=He.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=He.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let i=this.clone(),r=It(n),s=n.exclusive||n.name&&i.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(i.exclusiveTests[n.name]=!!n.exclusive),i.tests=i.tests.filter(a=>!(a.OPTIONS.name===n.name&&(s||a.OPTIONS.test===r.OPTIONS.test))),i.tests.push(r),i}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let i=this.clone(),r=hd(e).map(s=>new kt(s));return r.forEach(s=>{s.isSibling&&i.deps.push(s.key)}),i.conditions.push(typeof n=="function"?new vi(r,n):vi.fromOptions(r,n)),i}typeError(e){let n=this.clone();return n.internalTests.typeError=It({message:e,name:"typeError",skipAbsent:!0,test(i){return this.schema._typeCheck(i)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=He.oneOf){let i=this.clone();return e.forEach(r=>{i._whitelist.add(r),i._blacklist.delete(r)}),i.internalTests.whiteList=It({message:n,name:"oneOf",skipAbsent:!0,test(r){let s=this.schema._whitelist,a=s.resolveAll(this.resolve);return a.includes(r)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:a}})}}),i}notOneOf(e,n=He.notOneOf){let i=this.clone();return e.forEach(r=>{i._blacklist.add(r),i._whitelist.delete(r)}),i.internalTests.blacklist=It({message:n,name:"notOneOf",test(r){let s=this.schema._blacklist,a=s.resolveAll(this.resolve);return a.includes(r)?this.createError({params:{values:Array.from(s).join(", "),resolved:a}}):!0}}),i}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:i,meta:r,optional:s,nullable:a}=n.spec;return{meta:r,label:i,optional:s,nullable:a,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,d)=>d.findIndex(p=>p.name===l.name)===u)}}}qe.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])qe.prototype[`${t}At`]=function(e,n,i={}){const{parent:r,parentPath:s,schema:a}=L2(this,e,n,i.context);return a[t](r&&r[s],Object.assign({},i,{parent:r,path:e}))};for(const t of["equals","is"])qe.prototype[t]=qe.prototype.oneOf;for(const t of["not","nope"])qe.prototype[t]=qe.prototype.notOneOf;const z2=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function F2(t){const e=as(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let n=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(n=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(n=0-n)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+n,e.second,e.millisecond)}function as(t){var e,n;const i=z2.exec(t);return i?{year:_e(i[1]),month:_e(i[2],1)-1,day:_e(i[3],1),hour:_e(i[4]),minute:_e(i[5]),second:_e(i[6]),millisecond:i[7]?_e(i[7].substring(0,3)):0,precision:(e=(n=i[7])==null?void 0:n.length)!=null?e:void 0,z:i[8]||void 0,plusMinus:i[9]||void 0,hourOffset:_e(i[10]),minuteOffset:_e(i[11])}:null}function _e(t,e=0){return Number(t)||e}let D2=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,B2=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,H2=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,U2="^\\d{4}-\\d{2}-\\d{2}",W2="\\d{2}:\\d{2}:\\d{2}",V2="(([+-]\\d{2}(:?\\d{2})?)|Z)",G2=new RegExp(`${U2}T${W2}(\\.\\d+)?${V2}$`),J2=t=>bt(t)||t===t.trim(),Q2={}.toString();function Nt(){return new xd}class xd extends qe{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,i)=>{if(!i.spec.coerce||i.isType(e)||Array.isArray(e))return e;const r=e!=null&&e.toString?e.toString():e;return r===Q2?e:r})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||He.required,name:"required",skipAbsent:!0,test:i=>!!i.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=ye.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(i){return i.length===this.resolve(e)}})}min(e,n=ye.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i.length>=this.resolve(e)}})}max(e,n=ye.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(i){return i.length<=this.resolve(e)}})}matches(e,n){let i=!1,r,s;return n&&(typeof n=="object"?{excludeEmptyString:i=!1,message:r,name:s}=n:r=n),this.test({name:s||"matches",message:r||ye.matches,params:{regex:e},skipAbsent:!0,test:a=>a===""&&i||a.search(e)!==-1})}email(e=ye.email){return this.matches(D2,{name:"email",message:e,excludeEmptyString:!0})}url(e=ye.url){return this.matches(B2,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=ye.uuid){return this.matches(H2,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let n="",i,r;return e&&(typeof e=="object"?{message:n="",allowOffset:i=!1,precision:r=void 0}=e:n=e),this.matches(G2,{name:"datetime",message:n||ye.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||ye.datetime_offset,params:{allowOffset:i},skipAbsent:!0,test:s=>{if(!s||i)return!0;const a=as(s);return a?!!a.z:!1}}).test({name:"datetime_precision",message:n||ye.datetime_precision,params:{precision:r},skipAbsent:!0,test:s=>{if(!s||r==null)return!0;const a=as(s);return a?a.precision===r:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=ye.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:J2})}lowercase(e=ye.lowercase){return this.transform(n=>bt(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>bt(n)||n===n.toLowerCase()})}uppercase(e=ye.uppercase){return this.transform(n=>bt(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>bt(n)||n===n.toUpperCase()})}}Nt.prototype=xd.prototype;let q2=new Date(""),Y2=t=>Object.prototype.toString.call(t)==="[object Date]";class nr extends qe{constructor(){super({type:"date",check(e){return Y2(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,i)=>!i.spec.coerce||i.isType(e)||e===null?e:(e=F2(e),isNaN(e)?nr.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let i;if(kt.isRef(e))i=e;else{let r=this.cast(e);if(!this._typeCheck(r))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);i=r}return i}min(e,n=rs.min){let i=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r>=this.resolve(i)}})}max(e,n=rs.max){let i=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(r){return r<=this.resolve(i)}})}}nr.INVALID_DATE=q2;nr.prototype;function X2(t,e=[]){let n=[],i=new Set,r=new Set(e.map(([a,o])=>`${a}-${o}`));function s(a,o){let l=wt.split(a)[0];i.add(l),r.has(`${o}-${l}`)||n.push([o,l])}for(const a of Object.keys(t)){let o=t[a];i.add(a),kt.isRef(o)&&o.isSibling?s(o.path,a):Ks(o)&&"deps"in o&&o.deps.forEach(l=>s(l,a))}return A2.array(Array.from(i),n).reverse()}function Qo(t,e){let n=1/0;return t.some((i,r)=>{var s;if((s=e.path)!=null&&s.includes(i))return n=r,!0}),n}function vd(t){return(e,n)=>Qo(t,e)-Qo(t,n)}const K2=(t,e,n)=>{if(typeof t!="string")return t;let i=t;try{i=JSON.parse(t)}catch{}return n.isType(i)?i:t};function si(t){if("fields"in t){const e={};for(const[n,i]of Object.entries(t.fields))e[n]=si(i);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=si(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(si)}):"optional"in t?t.optional():t}const Z2=(t,e)=>{const n=[...wt.normalizePath(e)];if(n.length===1)return n[0]in t;let i=n.pop(),r=wt.getter(wt.join(n),!0)(t);return!!(r&&i in r)};let qo=t=>Object.prototype.toString.call(t)==="[object Object]";function _2(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(i=>n.indexOf(i)===-1)}const $2=vd([]);function wd(t){return new yd(t)}class yd extends qe{constructor(e){super({type:"object",check(n){return qo(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=$2,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var i;let r=super._cast(e,n);if(r===void 0)return this.getDefault(n);if(!this._typeCheck(r))return r;let s=this.fields,a=(i=n.stripUnknown)!=null?i:this.spec.noUnknown,o=[].concat(this._nodes,Object.keys(r).filter(p=>!this._nodes.includes(p))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),d=!1;for(const p of o){let h=s[p],g=p in r;if(h){let m,b=r[p];u.path=(n.path?`${n.path}.`:"")+p,h=h.resolve({value:b,context:n.context,parent:l});let v=h instanceof qe?h.spec:void 0,f=v==null?void 0:v.strict;if(v!=null&&v.strip){d=d||p in r;continue}m=!n.__validating||!f?h.cast(r[p],u):r[p],m!==void 0&&(l[p]=m)}else g&&!a&&(l[p]=r[p]);(g!==p in l||l[p]!==r[p])&&(d=!0)}return d?l:r}_validate(e,n={},i,r){let{from:s=[],originalValue:a=e,recursive:o=this.spec.recursive}=n;n.from=[{schema:this,value:a},...s],n.__validating=!0,n.originalValue=a,super._validate(e,n,i,(l,u)=>{if(!o||!qo(u)){r(l,u);return}a=a||u;let d=[];for(let p of this._nodes){let h=this.fields[p];!h||kt.isRef(h)||d.push(h.asNestedTest({options:n,key:p,parent:u,parentPath:n.path,originalParent:a}))}this.runTests({tests:d,value:u,originalValue:a,options:n},i,p=>{r(p.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),i=n.fields;for(let[r,s]of Object.entries(this.fields)){const a=i[r];i[r]=a===void 0?s:a}return n.withMutation(r=>r.setFields(i,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(i=>{var r;const s=this.fields[i];let a=e;(r=a)!=null&&r.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[i]})),n[i]=s&&"getDefault"in s?s.getDefault(a):void 0}),n}setFields(e,n){let i=this.clone();return i.fields=e,i._nodes=X2(e,n),i._sortErrors=vd(Object.keys(e)),n&&(i._excludedEdges=n),i}shape(e,n=[]){return this.clone().withMutation(i=>{let r=i._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),r=[...i._excludedEdges,...n]),i.setFields(Object.assign(i.fields,e),r)})}partial(){const e={};for(const[n,i]of Object.entries(this.fields))e[n]="optional"in i&&i.optional instanceof Function?i.optional():i;return this.setFields(e)}deepPartial(){return si(this)}pick(e){const n={};for(const i of e)this.fields[i]&&(n[i]=this.fields[i]);return this.setFields(n,this._excludedEdges.filter(([i,r])=>e.includes(i)&&e.includes(r)))}omit(e){const n=[];for(const i of Object.keys(this.fields))e.includes(i)||n.push(i);return this.pick(n)}from(e,n,i){let r=wt.getter(e,!0);return this.transform(s=>{if(!s)return s;let a=s;return Z2(s,e)&&(a=Object.assign({},s),i||delete a[e],a[n]=r(s)),a})}json(){return this.transform(K2)}noUnknown(e=!0,n=ss.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let i=this.test({name:"noUnknown",exclusive:!0,message:n,test(r){if(r==null)return!0;const s=_2(this.schema,r);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return i.spec.noUnknown=e,i}unknown(e=!0,n=ss.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const i={};for(const r of Object.keys(n))i[e(r)]=n[r];return i})}camelCase(){return this.transformKeys(kr.camelCase)}snakeCase(){return this.transformKeys(kr.snakeCase)}constantCase(){return this.transformKeys(e=>kr.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),i=super.describe(e);i.fields={};for(const[s,a]of Object.entries(n.fields)){var r;let o=e;(r=o)!=null&&r.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[s]})),i.fields[s]=a.describe(o)}return i}}wd.prototype=yd.prototype;const eT=F(An)`
  min-width: 320px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 23px 16px 20px 16px;
  box-shadow:
    0px 6px 10px rgba(123, 107, 88, 0.95),
    -8px 6px 16px rgba(199, 190, 185, 0.95),
    8px 6px 16px rgba(199, 190, 185, 0.95);

  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  font-weight: 500;
  color: rgba(11, 11, 11, 0.5);
  overflow-y: auto;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    padding: 32px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 40px 80px;
  }

  .headerContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .joinCloseText {
    display: none;

    @media only screen and (min-width: 768px) {
      display: block;
    }
  }

  .joinCloseBtn:active .joinCloseText {
    color: #0b0b0b;
  }

  .joinCloseBtn:active svg {
    fill: #0b0b0b;
  }

  @media only screen and (min-width: 1440px) {
    .joinCloseBtn:hover .joinCloseText {
      color: #0b0b0b;
    }

    .joinCloseBtn:hover svg {
      fill: #0b0b0b;
    }

    .joinInput:hover {
      border: 2px solid #f77d07;
    }

    .joinSubmitBtn:hover,
    .joinSuccessBtn:hover {
      background-color: #e97200;
    }
  }

  .joinMainContainer {
    display: flex;
    justify-content: center;
    gap: 90px;
    margin: 0 auto;

    @media only screen and (min-width: 1440px) {
      padding: 0;
    }
  }

  .joinForm {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (min-width: 768px) {
      padding: 86px 0;
      gap: 30px;
    }

    @media only screen and (min-width: 1440px) {
      padding: 60px 0 66px 0;
      margin: auto;
    }
  }

  .joinTitle {
    font-family: 'Oddval', sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: #0b0b0b;

    @media only screen and (min-width: 768px) {
      font-size: 44px;
    }
  }

  .joinTitleAccent {
    color: #f77d07;
  }

  .joinList {
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media only screen and (min-width: 768px) {
      width: 642px;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  .joinFields {
    height: 82px;

    @media only screen and (min-width: 768px) {
      height: 108px;
    }

    @media only screen and (min-width: 1440px) {
      height: 108px;
    }
  }

  .joinFields:last-child {
    height: 148px;

    @media only screen and (min-width: 768px) {
      height: 230px;
    }

    @media only screen and (min-width: 1440px) {
      height: 230px;
    }
  }

  .joinLabel {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .joinInput {
    font-size: 14px;
    border: 1px solid rgba(11, 11, 11, 0.15);
    border-radius: 16px;
    padding: 14px;
    padding-bottom: 10px;
    width: 100%;
    min-width: 302px;
    height: 44px;
    outline-color: #f77d07;

    @media only screen and (min-width: 375px) {
      width: 343px;
    }

    @media only screen and (min-width: 768px) {
      padding: 15px;
      padding-bottom: 12px;
      font-size: 16px;
      width: 314px;
    }
  }

  .area {
    height: 110px;

    @media only screen and (min-width: 768px) {
      height: 186px;
      width: 642px;
    }
  }

  .joinInput:active,
  .joinInput:focus,
  .joinInput:focus-visible {
    border: 2px solid #f77d07;
  }

  ::placeholder {
    color: rgba(11, 11, 11, 0.5);
    font-size: 14px;
    letter-spacing: -0.02em;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  .joinSubmitBtn {
    border-radius: 30px;
    padding: 13px 20px;
    width: 122px;
    height: 44px;
    background-color: #f77d07;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;

    @media only screen and (min-width: 768px) {
      padding: 15px 40px;
      width: 174px;
      height: 54px;
      font-size: 16px;
    }
  }

  .joinSubmitBtn:focus-visible,
  .joinSuccessBtn:focus-visible,
  .joinSubmitBtn:active,
  .joinSuccessBtn:active {
    background-color: #e97200;
  }

  @media only screen and (min-width: 1440px) {
    .joinSubmitBtn:active,
    .joinSuccessBtn:active {
      color: #898b90;
      background-color: #e3e3e3;
    }
  }

  .hidden {
    display: none;
  }

  .error {
    color: red;
    font-size: 14px;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  .errorInput {
    border: 2px solid red;
  }
`,tT=F.div`
  margin-top: 56px;
  width: 548px;
  height: 600px;

  .joinImg {
    width: 548px;
    height: 600px;
  }
`,nT=F.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  .joinProtectionBlock {
    display: flex;
    align-items: center;
    gap: 8px;

    @media only screen and (min-width: 768px) {
      justify-content: space-between;
    }
  }

  .joinProtectionBig {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .joinProtection {
    position: relative;
  }

  .joinProtection::after {
    content: '';
    position: absolute;
    top: 35%;
    right: -8px;
    transform: translateY(-50%);
    display: block;
    width: 1px;
    height: 14px;
    background-color: rgba(11, 11, 11, 0.5);

    @media only screen and (min-width: 768px) {
      right: -10px;
    }
  }

  .developers {
    font-size: 14px;
    display: flex;
    align-items: center;
    line-height: 1;
    background-color: transparent;
    border: none;
    color: rgba(11, 11, 11, 0.5);
    padding: 0;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
      margin-left: 10px;
    }

    & svg {
      margin-left: 8px;
      width: 59px;
      height: 18px;
      fill: #f77d07;

      @media only screen and (min-width: 768px) {
        margin-left: 10px;
        width: 100px;
        height: 30px;
      }
    }
  }

  .developers:active {
    color: #0b0b0b;
  }

  .developers:active svg {
    fill: #0b0b0b;
  }

  @media only screen and (min-width: 1440px) {
    .developers:hover {
      color: #0b0b0b;
    }

    .developers:hover svg {
      fill: #0b0b0b;
    }
  }
`,iT=F.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    gap: 30px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 164px 0 174px 0;
  }

  & svg {
    width: 16px;
    height: 16px;
    fill: red;

    @media only screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  .joinContacts {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid rgba(11, 11, 11, 0.2);
    border-radius: 16px;
    padding: 20px;
    width: 244px;
    height: 152px;
    color: #0b0b0b;

    @media only screen and (min-width: 768px) {
      gap: 24px;
      padding: 24px;
      width: 293px;
      height: 196px;
    }
  }

  .joinItemContact {
    font-size: 20px;
    color: #0b0b0b;

    @media only screen and (min-width: 768px) {
      font-size: 24px;
      margin-top: 6px;
    }
  }

  .joinItemContact:focus-visible,
  .joinItemContact:active {
    color: #f77d07;
  }

  @media only screen and (min-width: 1440px) {
    .joinItemContact:hover {
      color: #f77d07;
    }
  }
`,rT=F.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: 768px) {
    gap: 30px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 178px 0 170px 0;
  }

  .joinText {
    color: rgba(11, 11, 11, 0.8);
    font-size: 16px;

    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  .joinSuccessBtn {
    margin-top: 20px;
    border-radius: 30px;
    padding: 13px 20px;
    width: 130px;
    height: 44px;
    background-color: #f77d07;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;

    @media only screen and (min-width: 768px) {
      margin-top: 30px;
      padding: 15px 40px;
      width: 180px;
      height: 54px;
      font-size: 16px;
    }
  }
`,sT=({handleCloseModal:t})=>{const e=S.useRef(null);return S.useEffect(()=>{e.current.focus()},[]),c.jsx("div",{ref:e,tabIndex:-1,onKeyDown:n=>{n.key==="Escape"&&t()},children:c.jsxs(iT,{children:[c.jsxs("h2",{className:"joinTitle",children:["На жаль, зараз сервіс ",c.jsx("br",{}),c.jsx("span",{className:"joinTitleAccent ",children:"не відповідає :("})]}),c.jsxs("p",{className:"joinText",children:["Будь ласка, скористайтеся поштою або зателефонуйте"," ",c.jsx(K,{iconName:"heart"})]}),c.jsxs("ul",{className:"joinContacts",children:[c.jsxs("li",{children:[c.jsx("p",{children:"Телефон:"}),c.jsx("a",{className:"joinItemContact",href:"tel:+380680745765",children:"+38 (068) 074-57-65"})]}),c.jsxs("li",{children:[c.jsx("p",{children:"Email:"}),c.jsx("a",{className:"joinItemContact",href:"mailto:mistohub@gmail.com",children:"mistohub@gmail.com"})]})]})]})})},aT=({handleCloseModal:t})=>{const e=S.useRef(null);S.useEffect(()=>{e.current.focus()},[]);const n=ze({minWidth:1440}),i=ze({maxWidth:375});return c.jsx("div",{ref:e,tabIndex:-1,onKeyDown:r=>{r.key==="Escape"&&t()},children:c.jsxs(rT,{children:[c.jsxs("h2",{className:"joinTitle",children:[c.jsx("span",{className:"joinTitleAccent",children:"Дякуємо "}),"за перший крок",!i&&c.jsx("br",{})," до змін Полтави! Ваші дані",!i&&c.jsx("br",{})," успішно",c.jsx("span",{className:"joinTitleAccent",children:" відправлені!"})]}),c.jsxs("p",{className:"joinText",children:["Протягом доби звʼяжемось з вами для ",!n&&c.jsx("br",{}),"обговорення подальших етапів."]}),c.jsx("button",{className:"joinSuccessBtn",type:"button",title:"На сторінку",onClick:t,children:"На сторінку"})]})})},Yo="/MistoHub/assets/maska-4bddf763.png",oT="/MistoHub/assets/maska@2x-52e2d73a.png",lT="/MistoHub/assets/maska-910d1107.webp",cT="/MistoHub/assets/maska@2x-ba53fd99.webp",dT=()=>c.jsx(tT,{children:c.jsxs("picture",{children:[c.jsx("source",{className:"joinImg",srcSet:`${lT} 1x, ${cT} 2x`,type:"image/png"}),c.jsx("source",{className:"joinImg",srcSet:`${Yo} 1x, ${oT} 2x`,type:"image/webp"}),c.jsx("img",{className:"joinImg",src:Yo,alt:"Maska"})]})}),uT=()=>{const{openModal:t}=Qt(),e=ze({maxWidth:767});return c.jsx(c.Fragment,{children:c.jsxs(nT,{children:[c.jsxs("div",{className:"joinProtectionBlock",children:[c.jsx("p",{children:"© ГО «МІСТО ХАБ»"}),e&&c.jsx("p",{className:"joinProtection",children:"Всі права захищені"}),!e&&c.jsxs("div",{className:"joinProtectionBig",children:[c.jsx("p",{className:"joinProtection",children:"Всі права захищені"}),c.jsxs("button",{type:"button",title:"Розроблено студентами",className:"developers",onClick:()=>t("team_modal"),children:["Розроблено студентами",c.jsx(K,{iconName:"logoGoIT"})]})]})]}),e&&c.jsxs("button",{type:"button",title:"Розроблено студентами",className:"developers",onClick:()=>t("team_modal"),children:["Розроблено студентами",c.jsx(K,{iconName:"logoGoIT"})]})]})})},pT=os`
  to {
    transform: rotate(360deg);
  }
`,fT=F.div`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

.house-svg{
  margin-right: 20px;
  fill: #F77D07;
  
}

.wave-svg{
  fill: #F77D07;
margin-left: 3px;
}
`,hT=F.div`
  text-align: center;
  color: #fff;
  margin:0;
  margin-top: -60px;
  margin-right: 40px;
  -webkit-text-stroke: 0.5px #0B0B0B;
  font-size: 25px;
  animation: ${pT} 2s linear infinite;
`,mT=()=>c.jsxs(fT,{children:[c.jsx(K,{width:"30%",height:"16%",iconName:"house",styles:"house-svg"}),c.jsx(hT,{children:"МІСТОХАБ"}),c.jsx(K,{width:"37%",height:"20%",iconName:"wave",styles:"wave-svg"})]}),gT=F.button`
  padding: 0;
  display: flex;
  gap: 4px;
  background: none;
  border: none;

  &:active span {
    color: #0b0b0b;
  }

  &:active svg {
    stroke: #0b0b0b;
  }

  @media screen and (min-width: 1440px) {
    &:hover span {
      color: #0b0b0b;
    }
    &:hover svg {
      stroke: #0b0b0b;
    }
  }

  span {
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: rgba(11, 11, 11, 0.5);
    display: none;
    align-self: flex-end;
    @media screen and (min-width: 768px) {
      display: inline;
    }
  }
  svg {
    stroke-width: 2px;
    stroke: rgba(11, 11, 11, 0.5);
  }
`,Zs=({onClose:t})=>c.jsxs(gT,{type:"button",title:"Закрити вікно",onClick:t,children:[c.jsx("span",{children:"Закрити"}),c.jsx(K,{iconName:"close-component-btn",width:"28",height:"28"})]}),bT=wd().shape({name:Nt().required("Ім'я обов'язкове для заповнення!").min(2,"Ім'я має бути мінімум 2 символи!").max(50,"Ім'я занадто довге!"),lastname:Nt().required("Прізвище обов'язкове для заповнення!").min(2,"Прізвище має бути мінімум 2 символи!").max(50,"Прізвище занадто довге!"),phone:Nt().required("Номер телефону обов'язковий!").matches(/^\+380\d{9}$/,"Невірний формат"),link:Nt().matches(/(https?:\/\/)?(www\.)?(facebook|instagram)\.com\/.+/,"Посилання на Facebook або Instagram").url("Невірна адреса"),about:Nt().max(500,"Про себе може містити до 500 символів.")}),xT=({controlsModal:{isModalOpen:t,closeModal:e}})=>{const n={name:"",lastname:"",phone:"",link:"",about:""},[i,r]=S.useState(!1),[s,a]=S.useState(!1),[o,l]=S.useState(!1),u=ze({minWidth:1440}),d=()=>{l(!1),a(!1),r(!1),e("join_modal")},p=m=>{g.handleChange(m);const{name:b,value:v}=m.target;g.setValues(f=>({...f,[b]:v})),sessionStorage.setItem("formData",JSON.stringify({...g.values,[b]:v}))},h=async m=>{const b=`<b>Ім’я: ${m.name}</b>
<b>Прізвище: ${m.lastname}</b>
Телефон: <b>${m.phone}</b>
Інстаграм/Фейсбук: <b>${m.link}</b>
Про себе:${m.about}`;try{a(!0),(await ep(b)).result.text!==""&&(r(!0),g.resetForm(),sessionStorage.removeItem("formData"))}catch{l(!0)}finally{a(!1)}},g=ZE({initialValues:sessionStorage.getItem("formData")?JSON.parse(sessionStorage.getItem("formData")):n,validateOnBlur:!0,validateOnChange:!0,validationSchema:bT,onSubmit:h});return c.jsxs(eT,{isOpen:t.join_modal,onRequestClose:d,style:{overlay:{zIndex:"101"}},bodyOpenClassName:"modal-open",children:[s&&c.jsx(mT,{style:{display:"block",overlay:{zIndex:"999"},width:"100vw",height:"100vh"}}),c.jsxs("div",{className:"headerContainer",children:[c.jsx("p",{children:"Підтримати проєкт"}),c.jsx(Zs,{onClose:d})]}),c.jsxs("div",{className:"joinMainContainer",children:[c.jsxs("div",{children:[!i&&!o&&c.jsxs("form",{className:"joinForm",onSubmit:g.handleSubmit,children:[c.jsxs("h2",{className:"joinTitle",children:["Приєднуйся до спільноти ",c.jsx("br",{}),c.jsx("span",{className:"joinTitleAccent",children:"супергероїв"})," міста!"]}),c.jsxs("ul",{className:"joinList",children:[c.jsxs("li",{className:"joinFields",children:[c.jsx("label",{className:"joinLabel",htmlFor:"name",children:"Ім’я*"}),c.jsx("input",{className:`joinInput ${g.errors.name&&g.touched.name?"errorInput":""}`,id:"name",name:"name",type:"text",onBlur:g.handleBlur,onChange:m=>{g.handleChange(m),p(m)},value:g.values.name}),g.errors.name&&g.touched.name&&c.jsx("div",{className:"error",children:g.errors.name})]}),c.jsxs("li",{className:"joinFields",children:[c.jsx("label",{className:"joinLabel",htmlFor:"lastname",children:"Прізвище*"}),c.jsx("input",{className:`joinInput ${g.errors.lastname&&g.touched.lastname?"errorInput":""}`,id:"lastname",name:"lastname",type:"text",onBlur:g.handleBlur,onChange:m=>{g.handleChange(m),p(m)},value:g.values.lastname}),g.errors.lastname&&g.touched.lastname&&c.jsx("div",{className:"error",children:g.errors.lastname})]}),c.jsxs("li",{className:"joinFields",children:[c.jsx("label",{className:"joinLabel",htmlFor:"phone",children:"Телефон*"}),c.jsx("input",{className:`joinInput ${g.errors.phone&&g.touched.phone?"errorInput":""}`,id:"phone",name:"phone",type:"text",placeholder:"+380",onBlur:g.handleBlur,onChange:m=>{g.handleChange(m),p(m)},value:g.values.phone}),g.errors.phone&&g.touched.phone&&c.jsx("div",{className:"error",children:g.errors.phone})]}),c.jsxs("li",{className:"joinFields",children:[c.jsx("label",{className:"joinLabel",htmlFor:"link",children:"Інстаграм/Фейсбук"}),c.jsx("input",{className:`joinInput ${g.errors.link&&g.touched.link?"errorInput":""}`,id:"link",name:"link",type:"text",placeholder:"Вставити посилання",onBlur:g.handleBlur,onChange:m=>{g.handleChange(m),p(m)},value:g.values.link}),g.errors.link&&g.touched.link&&c.jsx("div",{className:"error",children:g.errors.link})]}),c.jsxs("li",{className:"joinFields",children:[c.jsx("label",{className:"joinLabel",htmlFor:"about",children:"Коротко про себе"}),c.jsx("textarea",{className:`joinInput ${g.errors.about&&g.touched.about?"errorInput":""} area`,id:"about",name:"about",type:"text",onBlur:g.handleBlur,onChange:m=>{g.handleChange(m),p(m)},value:g.values.about}),g.errors.about&&g.touched.about&&c.jsx("div",{className:"error",children:g.errors.about})]})]}),c.jsx("button",{className:"joinSubmitBtn",type:"submit",title:"Відправити дані","aria-label":"Відправити",children:"Відправити"})]}),i&&c.jsx(aT,{handleCloseModal:d}),o&&c.jsx(sT,{handleCloseModal:d})]}),u&&c.jsx(dT,{})]}),c.jsx(uT,{})]})},vT=F.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  a {
    font-family: 'Oddval', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    outline: none;
    border: none;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .active {
    color: #f77d07;

    svg {
      display: none;
    }

    &:active svg {
      display: block;
    }

    @media screen and (min-width: 1440px) {
      &:hover svg {
        display: block;
      }
    }

    @media screen and (min-width: 768px) {
      font-size: 44px;
    }
  }

  .link {
    svg {
      display: none;
    }

    &:active svg {
      display: block;
    }

    @media screen and (min-width: 1440px) {
      &:hover svg {
        display: block;
      }
    }

    @media screen and (min-width: 768px) {
      font-size: 44px;
    }
  }
`,wT=F.li`
  width: 261px;
  height: 28px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  &:active a {
    color: #f77d07;
  }

  @media screen and (min-width: 1440px) {
    &:hover a {
      color: #f77d07;
    }
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
  }

  @media screen and (min-width: 768px) {
    height: 50px;
    width: 466px;
  }

  svg {
    width: 40px;
    height: 40px;

    @media screen and (min-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }
`;F.div`
  width: 265px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 466px;
  }

  svg {
    width: 40px;
    height: 40px;

    @media screen and (min-width: 768px) {
      width: 60px;
      height: 60px;
    }
  }
`;const yT=[{value:"Головна",id:"main"},{value:"Про проєкт",id:"about"},{value:"Дизайн-проєкт",id:"design"},{value:"Зібрані кошти",id:"funds"},{value:"Інвестори",id:"investors"},{value:"Як інвестувати",id:"how"},{value:"Співзасновники",id:"founders"}],ST=({activeSection:t,closeModal:e})=>{const n=i=>{if(e("menu_modal"),i!=="main"){const r=document.getElementById(i);window.scrollTo({top:r.offsetTop-100,behavior:"smooth"})}else window.scrollTo({top:0,behavior:"smooth"})};return c.jsx(c.Fragment,{children:c.jsx("nav",{children:c.jsx(vT,{children:yT.map(i=>c.jsx(wT,{children:c.jsxs(Dt,{onClick:()=>n(i.id),className:t===i.id?"active":"link",children:[i.value," ",c.jsx(K,{iconName:"hoverarrow"})]})},i.id))})})})},AT="/MistoHub/assets/menu-cloud-x1-c51ff675.png",ET="/MistoHub/assets/menu-cloud-x2-d293537b.png",TT="/MistoHub/assets/menu-cloud-x1-f27528c5.webp",CT="/MistoHub/assets/menu-cloud-x2-8f9e24d1.webp",MT="/MistoHub/assets/support-3fb75e7d.svg",jT=F(An)`
  background-color: #ffffff;
  padding: 20px 16px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 80px;
  }

  .close-button {
    border: none;
    outline: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    span {
      display: none;
      font-weight: 500;
      font-size: 14px;
      line-height: 1.29;
      letter-spacing: -0.02em;
      color: rgba(11, 11, 11, 0.5);

      @media screen and (min-width: 768px) {
        display: inline;
        font-size: 16px;
      }
    }

    svg {
      stroke-width: 2px;
      fill: rgba(11, 11, 11, 0.5);
      margin-bottom: 0;
    }
  }

  .close-button:active span {
    color: #0b0b0b;
  }

  .close-button:active svg {
    fill: #0b0b0b;
  }

  @media screen and (min-width: 1440px) {
    .close-button:hover span {
      color: #0b0b0b;
    }
    .close-button:hover svg {
      fill: #0b0b0b;
    }
  }
`,Kn=F.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(11, 11, 11, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,OT=F.button`
  width: 129px;
  height: 61px;
  font-weight: 600;
  border: none;
  padding: 0;
  outline: none;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #fff;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${MT});
  background-color: transparent;

  @media screen and (min-width: 768px) {
    display: none;
  }
`,kT=F.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,PT=F.div`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 283px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    max-width: 100%;
  }
`,IT=F.div`
  width: 1053px;
  height: 563px;
  background-image: url(${AT});
  background-image: -webkit-image-set(url(${TT}) 1x);
  background-repeat: no-repeat;
  padding: 0;
  display: none;
  position: relative;
  background-size: cover;
  left: 80px;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 1440px) {
    display: block;
  }

  img {
    width: 100%;
  }

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${ET});
    background-image: -webkit-image-set(url(${CT}) 2x);
  }
`,NT=F.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 0;
  max-width: 2160px;
  overflow: visible;
`,RT=F.div`
  display: flex;
  gap: 8px;
  max-width: 283px;
  flex-wrap: wrap;
  padding: 0;
  align-items: center;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    justify-content: end;
    max-width: 100%;

    span {
      margin-right: auto;
    }
  }
`,LT=F.button`
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: rgba(11, 11, 11, 0.5);

    @media screen and (min-width: 768px) {
      display: inline;
      font-size: 16px;
    }
  }

  svg {
    fill: #f77d07;
  }

  &:active span {
    color: #0b0b0b;
  }

  &:active svg {
    fill: #0b0b0b;
  }

  @media screen and (min-width: 1440px) {
    &:hover span {
      color: #0b0b0b;
    }
    &:hover svg {
      fill: #0b0b0b;
    }
  }
`,zT=({controlsMenuModal:t})=>{const{activeSection:e,isModalOpen:n,openModal:i,closeModal:r}=t,s={top:"0",left:"0",overlay:{zIndex:"100"}};return c.jsxs(jT,{style:s,isOpen:n.menu_modal,onRequestClose:()=>r("menu_modal"),shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!1,children:[c.jsxs(kT,{children:[c.jsx(Kn,{children:"Меню"}),c.jsxs(PT,{children:[c.jsx(OT,{type:"button",onClick:()=>i("join_modal"),children:"Підтримати проєкт"}),c.jsx(Zs,{onClose:()=>r("menu_modal")})]})]}),c.jsxs(NT,{children:[c.jsx(ST,{closeModal:r,activeSection:e}),c.jsx(IT,{children:c.jsx(K,{iconName:"misto-hub-logo",width:"357",height:"121"})})]}),c.jsxs("div",{children:[c.jsxs(RT,{children:[c.jsx("span",{children:c.jsx(Kn,{children:"© ГО «МІСТО ХАБ»"})}),c.jsx(Kn,{children:"Всі права захищені"}),c.jsx(Kn,{children:"|"}),c.jsxs(LT,{type:"button",onClick:()=>i("team_modal"),children:[c.jsx("span",{children:"Poзроблено студентами"}),c.jsx(K,{iconName:"logoGoIT",width:"100",height:"30"})]})]}),c.jsx(Hf,{maxWidth:767,children:c.jsx(xs,{sectionName:"menu"})})]})]})},FT=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .photo-container {
    position: relative;
    margin-bottom: 16px;
  }
  .photo-img {
    border-radius: 50%;
    position: relative;
  }

  .dev-link {
    background-color: #f77d07;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    padding: 8px;
    position: absolute;
    left: 50%;
    bottom: -12px;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon-linkedin {
    fill: #ffffff;
  }

  h3 {
    color: #0b0b0b;
    font-family: Oddval;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom: 8px;
  }
  p {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: -0.02em;
    text-align: center;
  }

  @media (min-width: 768px) {
    .photo-container {
      margin-bottom: 30px;
    }
    h3 {
      font-size: 20px;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }
    p {
      font-size: 16px;
    }
    .dev-link {
      padding: 10px;
      width: 36px;
      height: 36px;
    }
  }
`,DT=({name:t,role:e,link:n,jpg:i,jpgx2:r,webp:s,webpx2:a})=>c.jsxs(FT,{children:[c.jsxs("div",{className:"photo-container",children:[c.jsxs("picture",{children:[c.jsx("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:`${s} 1x, ${a} 2x`,width:"120",height:"120"}),c.jsx("source",{media:"(max-width: 767px)",srcSet:`${i} 1x, ${r} 2x`,width:"120",height:"120"}),c.jsx("source",{type:"image/webp",srcSet:`${s} 1x, ${a} 2x`,width:"180",height:"180"}),c.jsx("img",{className:"photo-img",srcSet:`${i} 1x, ${r} 2x`,src:i,alt:`${t}, ${e}`,width:"180",height:"180",loading:"lazy"})]}),c.jsx(Dt,{className:"dev-link",to:n,target:"blank",rel:"noopener noreferrer",children:c.jsx(K,{iconName:"icon-linkedin",styles:"icon-linkedin"})})]}),c.jsx("h3",{className:"dev-name",children:t}),c.jsx("p",{className:"dev-role",children:e})]}),BT="/MistoHub/assets/id-1-3f5dd827.jpg",HT="/MistoHub/assets/id-1-1e529217.webp",UT="/MistoHub/assets/id-1x2-9e886be7.jpg",WT="/MistoHub/assets/id-1x2-2a6d72fe.webp",VT="/MistoHub/assets/id-2-ff3558b5.jpg",GT="/MistoHub/assets/id-2-27e25a06.webp",JT="/MistoHub/assets/id-2x2-0edbae59.jpg",QT="/MistoHub/assets/id-2x2-3bd042a6.webp",qT="/MistoHub/assets/id-3-30d2fd23.jpg",YT="data:image/webp;base64,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",XT="/MistoHub/assets/id-3x2-1aeea65b.jpg",KT="/MistoHub/assets/id-3x2-414702be.webp",ZT="/MistoHub/assets/id-4-427701db.jpg",_T="data:image/webp;base64,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",$T="/MistoHub/assets/id-4x2-b3ad46d5.jpg",eC="/MistoHub/assets/id-4x2-174fa447.webp",tC="/MistoHub/assets/id-5-16e6e875.jpg",nC="data:image/webp;base64,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",iC="/MistoHub/assets/id-5x2-9e831bba.jpg",rC="/MistoHub/assets/id-5x2-a84c65f5.webp",sC="/MistoHub/assets/id-6-a4200287.jpg",aC="data:image/webp;base64,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",oC="/MistoHub/assets/id-6x2-ca1f7d1d.jpg",lC="/MistoHub/assets/id-6x2-eabd2071.webp",cC="/MistoHub/assets/id-7-62aaf854.jpg",dC="/MistoHub/assets/id-7-41523edb.webp",uC="/MistoHub/assets/id-7x2-66e049d5.jpg",pC="/MistoHub/assets/id-7x2-c105f5b1.webp",fC="/MistoHub/assets/id-8-f5d906ad.png",hC="/MistoHub/assets/id-8-5831cda8.webp",mC="/MistoHub/assets/id-8x2-79d2ed74.png",gC="/MistoHub/assets/id-8x2-da629058.webp",bC="/MistoHub/assets/id-9-a94a20f3.jpg",xC="/MistoHub/assets/id-9-6d861f8a.webp",vC="/MistoHub/assets/id-9x2-ad21c2f5.jpg",wC="/MistoHub/assets/id-9x2-07d8f176.webp",yC="/MistoHub/assets/id-10-7d72914f.jpg",SC="/MistoHub/assets/id-10-636e9f84.webp",AC="/MistoHub/assets/id-10x2-bff93bcb.jpg",EC="/MistoHub/assets/id-10x2-043ee1b9.webp",TC="/MistoHub/assets/id-11-9aada8a1.jpg",CC="/MistoHub/assets/id-11-16d25ee5.webp",MC="/MistoHub/assets/id-11x2-93c1acd4.jpg",jC="/MistoHub/assets/id-11x2-ac6fdefd.webp",OC="/MistoHub/assets/id-12-f6bf2339.jpg",kC="/MistoHub/assets/id-12-eaa76717.webp",PC="/MistoHub/assets/id-12x2-649360b7.jpg",IC="/MistoHub/assets/id-12x2-a4885d20.webp",NC="/MistoHub/assets/id-13-cb04f7e3.jpg",RC="/MistoHub/assets/id-13-225f6c3d.webp",LC="/MistoHub/assets/id-13x2-3aff6a40.jpg",zC="/MistoHub/assets/id-13x2-4bf90c2c.webp",FC="/MistoHub/assets/id-14-3a05f85c.jpg",DC="/MistoHub/assets/id-14-de701467.webp",BC="/MistoHub/assets/id-14x2-4b561cc0.jpg",HC="/MistoHub/assets/id-14x2-72b686c1.webp",UC="/MistoHub/assets/id-15-e36375b8.jpg",WC="/MistoHub/assets/id-15-6df778ab.webp",VC="/MistoHub/assets/id-15x2-fc61b543.jpg",GC="/MistoHub/assets/id-15x2-e2abc974.webp",JC="/MistoHub/assets/id-16-9ca273c9.jpg",QC="/MistoHub/assets/id-16-e9b9d155.webp",qC="/MistoHub/assets/id-16x2-52f530f7.jpg",YC="/MistoHub/assets/id-16x2-9ef4d9e8.webp",XC="/MistoHub/assets/id-17-be9a2225.jpg",KC="/MistoHub/assets/id-17-4673a0f4.webp",ZC="/MistoHub/assets/id-17x2-10e738a7.jpg",_C="/MistoHub/assets/id-17x2-ba3300b8.webp",$C="/MistoHub/assets/id-18-229b3d54.jpg",eM="/MistoHub/assets/id-18-714a85ac.webp",tM="/MistoHub/assets/id-18x2-be6f9082.jpg",nM="/MistoHub/assets/id-18x2-61687c09.webp",iM="/MistoHub/assets/id-19-bbd562fe.jpg",rM="/MistoHub/assets/id-19-ea64f76b.webp",sM="/MistoHub/assets/id-19x2-720bbaae.jpg",aM="/MistoHub/assets/id-19x2-56efcfed.webp",oM="/MistoHub/assets/id-20-f9862b64.jpg",lM="/MistoHub/assets/id-20-1640a3d3.webp",cM="/MistoHub/assets/id-20x2-4c6f5d3e.jpg",dM="/MistoHub/assets/id-20x2-e66e774b.webp",uM=[{id:"id-1",name:"Єгор Шевцов",role:"Project Manager",link:"https://www.linkedin.com/in/yehor-shevtsov/",jpg:BT,jpgx2:HT,webp:UT,webpx2:WT},{id:"id-2",name:"Юрій Шукан",role:"Front-end розробник",link:"https://www.linkedin.com/in/yuriy-shukan/",jpg:VT,jpgx2:GT,webp:JT,webpx2:QT},{id:"id-3",name:"Анна Дуднік",role:"Front-end розробник",link:"http://www.linkedin.com/in/anna-dudnik-dev/",jpg:qT,jpgx2:YT,webp:XT,webpx2:KT},{id:"id-4",name:"Ілона Ратушняк",role:"UI/UX Designer ",link:"http://linkedin.com/in/ilona-ratushniak-3a678624b/",jpg:ZT,jpgx2:_T,webp:$T,webpx2:eC},{id:"id-5",name:"Анна Ричкова",role:"Front-end розробник",link:"https://www.linkedin.com/in/annarychkova1/",jpg:tC,jpgx2:nC,webp:iC,webpx2:rC},{id:"id-6",name:"Анастасія Дудка",role:"Front-end розробник",link:"https://www.linkedin.com/in/anastasiia-dudka-/",jpg:sC,jpgx2:aC,webp:oC,webpx2:lC},{id:"id-7",name:"Володимир Демчук",role:"Front-end розробник",link:"https://www.linkedin.com/in/demchuk-volodymyr/",jpg:cC,jpgx2:dC,webp:uC,webpx2:pC},{id:"id-8",name:"Сергій Савченко",role:"Front-end розробник",link:"https://www.linkedin.com/in/serhiy-savchenko/",jpg:fC,jpgx2:hC,webp:mC,webpx2:gC},{id:"id-9",name:"Микита Кудлай",role:"Front-end розробник",link:"https://www.linkedin.com/in/mykytakudlai/",jpg:bC,jpgx2:xC,webp:vC,webpx2:wC},{id:"id-10",name:"Кароліна Таран",role:"Front-end розробник",link:"http://www.linkedin.com/in/karolina-taran-developer/",jpg:yC,jpgx2:SC,webp:AC,webpx2:EC},{id:"id-11",name:"Сергій Монжелесов",role:"Team Lead",link:"http://www.linkedin.com/in/serhii-monzhelesov/",jpg:TC,jpgx2:CC,webp:MC,webpx2:jC},{id:"id-12",name:"Людмила Пасєка",role:"QA-тестувальник",link:"https://www.linkedin.com/in/liudmyla-pasieka-112a6429b/",jpg:OC,jpgx2:kC,webp:PC,webpx2:IC},{id:"id-13",name:"Олена Салобай",role:"QA-тестувальник",link:"http://www.linkedin.com/in/olena-salobai/",jpg:NC,jpgx2:RC,webp:LC,webpx2:zC},{id:"id-14",name:"Любомир Сенчишин",role:"QA-тестувальник",link:"https://www.linkedin.com/in/liubomyr-senchyshyn-691596298/",jpg:FC,jpgx2:DC,webp:BC,webpx2:HC},{id:"id-15",name:"Анна Олійник",role:"QA-тестувальник",link:"https://www.linkedin.com/in/hanna-oliinyk-66835715a/",jpg:UC,jpgx2:WC,webp:VC,webpx2:GC},{id:"id-16",name:"Нікіта Яцухно",role:"QA-тестувальник",link:"http://www.linkedin.com/in/nikita-yatsukhno/",jpg:JC,jpgx2:QC,webp:qC,webpx2:YC},{id:"id-17",name:"Іветта Дашкова",role:"Tech Lead",link:"https://www.linkedin.com/in/ivettadashkova/",jpg:XC,jpgx2:KC,webp:ZC,webpx2:_C},{id:"id-18",name:"Ігор Піляєв",role:"Front-end розробник",link:"https://www.linkedin.com/in/igor-piliaiev/",jpg:$C,jpgx2:eM,webp:tM,webpx2:nM},{id:"id-19",name:"Вікторія Бєлінська",role:"QA-тестувальник",link:"http://www.linkedin.com/in/viktoriia-bielinska-95892429b/",jpg:iM,jpgx2:rM,webp:sM,webpx2:aM},{id:"id-20",name:"Катерина Драцька",role:"QA-тестувальник",link:"https://www.linkedin.com/in/kateryna-dratska/",jpg:oM,jpgx2:lM,webp:cM,webpx2:dM}],pM=()=>{const e=(n=>n.sort(function(){return Math.random()-.5}))(uM);return c.jsx(Tn,{wrapperTag:"ul",wrapperClass:"list",className:"swiper",resizeObserver:!0,breakpoints:{1440:{slidesPerView:5,spaceBetween:40,initialSlide:0},768:{slidesPerView:3,spaceBetween:30,initialSlide:0},320:{slidesPerView:2,spaceBetween:20,initialSlide:0}},slidesPerView:4,initialSlide:0,spaceBetween:10,enabled:!0,navigation:{nextEl:".next-btn",prevEl:".prev-btn"},modules:[vm],children:e.map(n=>c.jsx(Re,{tag:"li",className:"item",children:c.jsx(DT,{name:n.name,role:n.role,link:n.link,jpg:n.jpg,jpgx2:n.jpgx2,webp:n.webp,webpx2:n.webpx2})},n.id))})},fM="/MistoHub/assets/bg-modal-mob-f5fa1178.png",hM="/MistoHub/assets/bg-modal-tabl-35cc034e.png",mM="/MistoHub/assets/bg-modal-desk-02f0110a.png",gM="data:image/webp;base64,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",bM="data:image/webp;base64,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",xM="data:image/webp;base64,UklGRnYOAABXRUJQVlA4TGoOAAAvGoN1EG+hqJGkqHYB/1553WDDTNs23q7x57tWUdtGkjuv5Q9ySVxFzEiSag0W7fxfi9AGF9CzP0IfiEoQhgeyAZwWMjBofMJnaKTk20E3zNGeNx7SBV1+BdF0oKmh/GnAibWZPj6OgrZtpLTjj/q7HoOImADCkrMAofrsO5Jsu4i254mT5gWz1exgqK4XjqV+6OrMDwDOtjC117brthE3bwKnM6PUQyAP2in7IvSBN///Pw4q3kvoYoCI/k+AZAdg67Yx5ZxEsIDobUI0gBexMyXo/3+wb0lRBp8i+j8BtCXbjttW5wCUrpNY8MBIKOrayESwCgD1/x84c/Q+5ymi/yFbse26kdaIk35qlAETa67qqwKSWv//j/Y5h8Bhhoj+T0A6nddTIgePCO8iEnEUrdvFv2oLCN/uKOZ61dM7Ofh5n/R6p8lBv0Hqhe68O+j9yBc5JRhy/1sub6MKjHuUS9uomT/7KNe1Jvz5R7mm9Y1jvGd9HjcO0wZt/p050jpp8igcrA163IXjPWYlvnPINmnwKBy0CfqrF4670V4Vjvyou3vm2LdZcffM0W+T2u6Z47dJaffMDLdZZTUzx21WWBVm+aKvQ5jnUV2/MtNeWStzjar6m8mapKgqs2GnqBvzParpnRlHJdU8Jaek/zLnXkUbkzZZQ2VW7BW0Mm2T1VPzvLhXz8LEv2mnMvWonGVutW6qzM3oZmPyuimBoRMYSmBQAkOLDFtgUAJDiwwlMkhg2AkMLTJcI8NTYBgEhh4ZvkeGt8hwjQxbZPgnMvD/DPMfDffI8Pn/KfP/UwgNKTI8R4bvkeEWGb4iw0tkmJGBFBlyZNgjw0tkGJGBHBlKZGiRgRQZ9sjQIgPPkaFEhhEZyJGhRQZyZGiRgRwZWmQgR4YWGbhFhpECAysykCPDTIGBFRm4RoYhgYGZAgP3FBhokYGWAgN3CQxMCQzMS2CAEhmoEhiYOTDASoGBeQsMUCUwMPfAAPMWGKBJYIAqgQGqBAaoD4GB9OM5MKS0vwSGlPTlIS6klNpjYEhpfwkMKWl7jAsppf3lIS6klH68BIaURnuOCyklbc9xIaW0P8aFeyYqdOEA5VzN7FRVM6tPkG4conTrKS0xoYMvOqSQYtb6pIzKQcq1amPv4McdpaZPRxfODGdjhK59yuV5GDeOU55nIwdD7keuT4FeOClUYQdDUyvLd8+cEmojmKFPZeXGjWOVYm0E8/RSVk0vnA+qEsw25CXbhdOBJgcz3qUs10fmZDAawbyPslaVA5bdqJm5ky5U5VzQS+b4SdayciroG5O0YRUrZ4K+MdFdt36VE0HfmGydVq5yHugbE67TmjWsBn1jzjasV8NaoIV527RS/1gJRs1MvU5rVIwSNGH2NqxPsawCfcOCdVqb/1gDxg0j2rAuDWtAy9ixTisSWAF0w5S2W41iFOCesWazFpbFv18w6DatQsPir9jU/l2BlqW/XzBrs/hspX/PGPYlLfzIstcN29q06MKy/52xrglLtqIfNyzcLLdhyatg4+NSC0v+I2PlbVrmu+RvGNqmJbYsd71gatst0Mp9F4xt/i4usNg/Mvbul2bFXjF5s6zAQh8FozeLskIfF8zeLCiwzFUwfLMcK3MVTH9cSmCR7xnj/1yIFfmeMf/PRQSW+J5x4M8lWInvGRc2829Z4HvGic3sXwW+Z9zYzLywvPeMI5t5v8tbBVf2s7biVsGZHzMOLO0heNN0892Je8OfJs21sLRveNSmmXppV3xq8zytsDtedbNsWdYqbuHjHN+FLTi2maGV9Q3XfsyuZVE3fGu6ub2LWsU5bNPMrKg33LudV8uSrjj4OKuDpBUX93Oykv7LRxzn07GgG062aTa9oFW8xG42O0EX/HycSWY5K57+mEcraHGVSbM4yLnh622ew5OcxVl8nEFmMTfc/TH9LzmLv0ya/CDmhsO3kz+JWTzGx4kzS7nh8zhtK2Zxms2Teil3vO4m3Un56jbupzRCVvxu0nQdC/nNceym+yVl8Rz7yQ5C7vi+m2on5OK8bZ7ICFmcx8dpOpZxx/1xkl9CLv6zeQovZPEf+yleZbyzArsJnmT8uQS2E7CMtyXAfvROyKxBk8b+JeO+CNiN3cv4cxVwP/JBxtdlYPK4OxnLMuB63GcRDxZiHJVF3FeCzSN2Mv5cCexHbMVkZqb/hnldCiaN18uhmtmpqiIiMcbEzExEiIgOPizDbEuB3Xge6GpmpqoiIi3GyMxMRB4RHXR6bMM+rQWOo71CaWamqllEWowxMXMgIkREmGMZh8Vo81g7rKqZnaoqIhJjTMzMRISI6OABHtuwuhrYj/UMRjUzU1URkRZjZGYmIo+IDh7+rYzTl4NJI/FX35g5EBEiIqxu3P4f8cs448t/hXW+bQN/Ww8cR9m//O33OslInwvCjdK//upW6baN/LYguB/j29fP8lJ9NJk8Qg8A2UeZU+8RYT+CR2D6qD+eTBq+R4DioY3HE78Mf4VgiIP6I4rj4B0ENP9sPKTc4CcM2L0j/THFcegzCCM5p/CgskMZBJZvZJzOo8I9RmTXVB5WJg8qOMzkGOH8PSzsMaI4pirwiYvJQ1ogELc8oeAvXNiD1Nxy16ADxiSM2J2yoWEBhusBn1CM5JOuAiHDCSNeXbKh4zMyDiSyR7oST8hwfNiDMZM/CkruoXEgsdwhXQsPDUeQuHijouUnNg6l5gxBzQ4bjiCx+6LqkcFxD+7xGOIJQdFnbDiCxKsnmiZ7cBxKZD9saNqDwxGlmdzQVYnoOJRYXthQNaPDESWyE7ou9ISOg6n5oKDsAR2OKLF7QLo2n/DUMA1xQEXbDA8nlGj2Cfo+w3OAiat5VaEDPCbDNJNxgsIRHvYwsYxrGmUDj8kwkU27orKDh/29AzB307pOPT4m3/HAUAzb0Dnjwz1OQ+zqSpHD5xtONLN2tPb4cMSJm1HS1SoAuduf2Ixk0xd6O3w44sQySVDcA/QCFNmiqlkGiDNQ0yBBdQeQv9WiQ7Gn6tYDZDJQQ6zJ6J4NPtzf6OChWdOVowNA324UfNht2dA+AsQRqZFM6eqRA8hdE0AsSzb07wHihBTZDukGZAOQv35GaCYzChZ6gExGimKFYGIGiPurJ4gQI6oN5AByVzuMmg2CkREgjpd7jNhNqFaQA+jl8gDSSAZkzIwAmXzhQeLVgG4HbfBhf9GjRFZvw9AAkLn4hGkm7bolVOHD8dzCxFJuw9QAkDsXnLioJt0WqvDhDFZTrWBsAMgTES0UdsVkWEMVPvb8z0IZolfF3IAPRyJ6Wii8qiUY7PCpiei6UshaVYsiPiYTvSyVmXR6wmQHD/dEb0uFpdPdpoiPI/q2VsgabRi9h4c7+r5YmkbdqmLg8aSLhV2fDbM9PIbGahmiTrcrV+hwTHmx0LQpGP4bnjo9rRauuki3jBw6ZlyXy0yqVEwv6HB7XS4sTQTjPTrPn+uFrEi1Llfg0BbMXQ/B/IjO64KhqNHsIwfO84oZosSGA4vBhrxgaEp0D9AJnIl7jpsKGz50+jSSBt0JxagTS4GCF0/6RD6ddDeQ06d5uoofi1EnyskET570aci5qivIqRPtVIIvi1En9jO9O4P+6NNI57nizoM6sc7T/ZErdSKfZcOhUZ9mOklZETqpE+Ucf7Y1deqEnOFWFqVU6tTOELdVjerEfrzbtq5enUY6nCwMOW3i9Wi3bWVLpU3kg8nSUFSnmQ71si3uSZtYhyqrQ3tt4nKgY+vUzOxR5Y02tQOVb7IzS0wcCBHhiw6RKHCKkvWsD4GKUSb2wxzbVy03DuigX6QQm551ahS1achBbuUTVRt7B8M6CjGfdVJ0UiZeDxK3d02Shzl6SqJ1PnRQJvIhbtu2VWGE2foQc5kLbZRppiOI3gmm7SjmMo9S6RLrCA6mv4emc6BidIl8gEdJKdfxKCpTc8Nbf+QyGJ10id0Tb/2Ry0jkdWmIM976pHUY2qsSzSFvqZ2D5I0qcfUJAOxHrgNQqVRpJq+8pXZ2R6XSJJZnAGA/tDPqjCaRfQMA7pDaE/1Wpbt73pKUfuiPJlE8BAAkpRfymjTERwBAUsYhr0j8cBMA7EIagw5qNH59c/Yu5OG0VyK9YPD632B6UaGesbmt24F5o0B3DG/7NITyRn0qxt+F/DjljfLcsL+p24epVKpT8KEN6UEqld6MDT++/XuMSqU144IrbZMeoVIpzVfc+fbvASqVyhQ8akO6S6VSmIpX6/YelUpdKo614Q6VSlnu+NbW6SaVSlU0O4eZ6/YW5Y2iqOBhG25Q3ujJhpNtk64o77Wk4ug6XRLtdaTj67f2kryGqDiL2YYL8gK2U1pijk3rIAWH23AmL1dTiRzQwWdJ6gANn9v/ExH9kWa1LIk9wjfv99qbitOY7TERdUaGdkpLwTv48V06K3i+TlQq0ZlK5IAOOr531XB+nUolsGq5JfYIQ/7qSbzHXHdOTnZKS8E7GPtXP5UVWO/FYyqRA8Is770oJ9fRquWW2CNM97WTck6yU1oK3sG099KFcjKquXFAeIAvXZRTUW0Ej/PeQedM9NfBQ339ue1EtF+YrE1DW9bDe2a6bui7HlZm3AwrrIaVOcdB72r4m0nbNKCwFqrMit2AkxoW5t08brVQmXl8NLAWlqnZ9OBOC5W5u8cKa2GZHDcP9Woos+P4iNXCxvRtut+yFsr82N1/18KOBZu7VguLCTjeaVkJFRvadPughcUI7G5bLRQrcHOrsBI27BhvBC0UQ9h0/aqEHUu6a6OExRTcXHasg4ox40VQwmINk87vSijWYHd+0sGGPY9ExDooBuFIrQ52LGrSLx0sJmHnVVA5//8HJTAMCQyNwCCBoRMYroFBCQwlMAwJDI3AIIGhExiugUEJDCUwDAkMjcAggaETGK6BQQkMJTAMCQyNSAg=",vM=F(An)`
  position: absolute;
  border: none;
  outline: none;
  transform: translate(-50%, -50%);
  transition: all 1s ease-in-out;
  width: 100%;
  max-height: 100%;
  background-color: #fff;
  top: 50%;
  left: 50%;
  overflow-y: auto;

  .bg-container {
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: auto;
    background-image: url(${fM});
    background-image: -webkit-image-set(url(${gM}));
  }
  .content-container {
    color: #0b0b0b80;
    padding: 20px 16px;
    font-size: 14px;
    letter-spacing: -0.02em;
  }
  .dev-modal-up {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 65px;
  }

  h2 {
    font-family: Oddval;
    color: #0b0b0b;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    text-align: left;
    max-width: 270px;
    margin-bottom: 60px;
  }
  .orange-el {
    color: #f77d07;
  }

  .item {
    margin-bottom: 60px;
  }
  .nav-control {
    margin-bottom: 213px;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }

  .next-btn,
  .prev-btn {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: #f77d07;
  }
  .next-btn.swiper-button-disabled,
  .prev-btn.swiper-button-disabled {
    background-color: inherit;
    border: 1px solid #f77d07;
  }
  .icon-arrow {
    fill: #ffffff;
  }
  .swiper-button-disabled .icon-arrow {
    fill: #f77d07;
  }

  @media (min-width: 768px) {
    .bg-container {
      background-image: url(${hM});
      background-image: -webkit-image-set(url(${bM}));
    }
    .content-container {
      padding: 32px 32px;
      font-size: 16px;
    }
    .dev-modal-up {
      margin-bottom: 144px;
    }

    .сloseText {
      display: block;
    }
    .icon-close {
      width: 14px;
      height: 14px;
    }

    h2 {
      font-size: 45px;
      margin-bottom: 80px;
      max-width: unset;
    }
    .item {
      margin-bottom: 160px;
    }
    .nav-control {
      gap: 20px;
      margin-bottom: 148px;
    }

    .next-btn,
    .prev-btn {
      width: 60px;
      height: 60px;
    }
    .icon-arrow {
      width: 21px;
      height: 18px;
    }
  }
  @media (min-width: 1440px) {
    .bg-container {
      background-image: url(${mM});
      background-image: -webkit-image-set(url(${xM}));
    }
    .content-container {
      padding: 40px 80px;
    }
    .dev-modal-up {
      margin-bottom: 80px;
    }
    h2 {
      font-size: 60px;
    }
    .nav-control {
      margin-bottom: 110px;
    }
  }
`,wM=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .after-el {
    position: relative;
  }

  .after-el::after {
    content: '';
    position: absolute;
    top: 40%;
    height: 70%;
    width: 1px;
    background-color: #0b0b0b80;
    right: -8px;
    transform: translateY(-50%);
  }
  div {
    width: 100%;
    display: flex;
    gap: 8px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    align-items: baseline;

    .after-el {
      margin-left: auto;
    }
    .after-el::after {
      right: -10px;
    }
    div {
      width: unset;
      gap: 10px;
      margin-left: 10px;
      align-items: center;
    }
    .icon-logo-goit {
      width: 100px;
      height: 30px;
    }
  }
`,yM=({controlsModal:{isModalOpen:t,closeModal:e}})=>c.jsx(vM,{onRequestClose:()=>e("team_modal"),isOpen:t.team_modal,onClose:()=>e("team_modal"),shouldCloseOnOverlayClick:!0,style:{overlay:{zIndex:"200"}},bodyOpenClassName:"modal-open",children:c.jsx("div",{className:"bg-container",children:c.jsxs("div",{className:"content-container",children:[c.jsxs("div",{className:"dev-modal-up",children:[c.jsx("span",{children:"Команда"}),c.jsx(Zs,{onClose:()=>e("team_modal")})]}),c.jsxs("h2",{children:[c.jsx("span",{className:"orange-el",children:"Команда"}),", що створила сайт"]}),c.jsx(pM,{}),c.jsxs("div",{className:"nav-control",children:[c.jsx("button",{type:"button",className:"prev-btn",children:c.jsx(K,{width:"17",height:"13",iconName:"icon-arrow-back",styles:"icon-arrow"})}),c.jsx("button",{type:"button",className:"next-btn",children:c.jsx(K,{width:"17",height:"13",iconName:"icon-arrow-next",styles:"icon-arrow"})})]}),c.jsxs(wM,{children:[c.jsx("span",{children:"© ГО «МІСТО ХАБ»"}),c.jsx("span",{className:"after-el",children:"Всі права захищені"}),c.jsxs("div",{children:[c.jsx("span",{children:"Розроблено студентами"}),c.jsx(K,{width:"59",height:"18",iconName:"icon-logo-goit",styles:"icon-logo-goit"})]})]})]})})}),SM=t=>{const e=Qt();return c.jsxs(c.Fragment,{children:[c.jsx(xT,{controlsModal:e}),c.jsx(zT,{controlsMenuModal:{...e,...t}}),c.jsx(yM,{controlsModal:e})]})},AM=S.lazy(()=>Zo(()=>import("./Visualization-c8ef743c.js"),["assets/Visualization-c8ef743c.js","assets/index-fdb569fa.js","assets/index-a6b3472e.css","assets/Visualization-68f18769.css"])),EM=S.lazy(()=>Zo(()=>import("./AccumulatedMoney-bec7e07e.js"),["assets/AccumulatedMoney-bec7e07e.js","assets/index-fdb569fa.js","assets/index-a6b3472e.css"]));An.setAppElement("#root");const TM=()=>{const[t,e]=S.useState("main"),n=Rd(),[i,r]=S.useState([]),[s,a]=S.useState([]),o=S.useMemo(()=>async()=>{try{const[l,u]=await Promise.all([_u(),$u()]);r(l),a(u)}catch(l){console.error("Error fetching data:",l)}},[]);return S.useEffect(()=>{o()},[o]),S.useEffect(()=>{const{hash:l}=n;if(l){const u=l.substring(1),d=document.getElementById(u);d&&window.scrollTo({top:d.offsetTop-100,behavior:"smooth"})}},[n]),S.useEffect(()=>{const l=()=>{document.querySelectorAll("section").forEach(d=>{const h=document.getElementById("about").offsetTop;window.scrollY<h-110&&e("main");const g=d.offsetTop,m=d.offsetHeight,b=d.getAttribute("id");if(window.scrollY>=g-100&&window.scrollY<g+m-100){e(b);const v=`/MistoHub/#${b}`;b!==null?window.history.pushState(null,"",v):window.history.pushState(null,"",window.location.pathname)}})};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]),c.jsxs(c.Fragment,{children:[c.jsx(Jf,{}),c.jsxs("main",{children:[c.jsx(q0,{}),c.jsx(eb,{}),c.jsx(AM,{}),c.jsx(EM,{}),c.jsx(bb,{people:s,companies:i}),c.jsx(by,{people:s,companies:i}),c.jsx(gw,{}),c.jsx(x0,{})]}),c.jsx(A0,{}),c.jsx(SM,{activeSection:t})]})},kM=Object.freeze(Object.defineProperty({__proto__:null,default:TM},Symbol.toStringTag,{value:"Module"}));export{En as C,kM as H,K as I,he as a,Qt as b,jM as f,hn as n,fg as s,ze as u};
