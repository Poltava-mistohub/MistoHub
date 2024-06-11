import{g as ni,r as O,a as yo,b as Hr,M as So,u as G,j as b,L as ki,R as $,m as Fr,c as Ii,d as Tt,_ as ut,e as Ao}from"./index-802f1575.js";function Ur(t,e){return function(){return t.apply(e,arguments)}}const{toString:Eo}=Object.prototype,{getPrototypeOf:ii}=Object,en=(t=>e=>{const n=Eo.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ae=t=>(t=t.toLowerCase(),e=>en(e)===t),tn=t=>e=>typeof e===t,{isArray:Qe}=Array,st=tn("undefined");function To(t){return t!==null&&!st(t)&&t.constructor!==null&&!st(t.constructor)&&de(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Wr=Ae("ArrayBuffer");function Co(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Wr(t.buffer),e}const Mo=tn("string"),de=tn("function"),Vr=tn("number"),nn=t=>t!==null&&typeof t=="object",Oo=t=>t===!0||t===!1,Nt=t=>{if(en(t)!=="object")return!1;const e=ii(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Po=Ae("Date"),ko=Ae("File"),Io=Ae("Blob"),Ro=Ae("FileList"),Lo=t=>nn(t)&&de(t.pipe),jo=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||de(t.append)&&((e=en(t))==="formdata"||e==="object"&&de(t.toString)&&t.toString()==="[object FormData]"))},No=Ae("URLSearchParams"),zo=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ft(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Qe(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function Gr(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Jr=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),qr=t=>!st(t)&&t!==Jr;function Bn(){const{caseless:t}=qr(this)&&this||{},e={},n=(i,r)=>{const s=t&&Gr(e,r)||r;Nt(e[s])&&Nt(i)?e[s]=Bn(e[s],i):Nt(i)?e[s]=Bn({},i):Qe(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&ft(arguments[i],n);return e}const Bo=(t,e,n,{allOwnKeys:i}={})=>(ft(e,(r,s)=>{n&&de(r)?t[s]=Ur(r,n):t[s]=r},{allOwnKeys:i}),t),Do=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Ho=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Fo=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&ii(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Uo=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Wo=t=>{if(!t)return null;if(Qe(t))return t;let e=t.length;if(!Vr(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Vo=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&ii(Uint8Array)),Go=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},Jo=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},qo=Ae("HTMLFormElement"),Qo=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),Ri=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Xo=Ae("RegExp"),Qr=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};ft(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},Yo=t=>{Qr(t,(e,n)=>{if(de(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(de(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ko=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Qe(t)?i(t):i(String(t).split(e)),n},Zo=()=>{},_o=(t,e)=>(t=+t,Number.isFinite(t)?t:e),wn="abcdefghijklmnopqrstuvwxyz",Li="0123456789",Xr={DIGIT:Li,ALPHA:wn,ALPHA_DIGIT:wn+wn.toUpperCase()+Li},$o=(t=16,e=Xr.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function ea(t){return!!(t&&de(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const ta=t=>{const e=new Array(10),n=(i,r)=>{if(nn(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=Qe(i)?[]:{};return ft(i,(o,a)=>{const l=n(o,r+1);!st(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},na=Ae("AsyncFunction"),ia=t=>t&&(nn(t)||de(t))&&de(t.then)&&de(t.catch),S={isArray:Qe,isArrayBuffer:Wr,isBuffer:To,isFormData:jo,isArrayBufferView:Co,isString:Mo,isNumber:Vr,isBoolean:Oo,isObject:nn,isPlainObject:Nt,isUndefined:st,isDate:Po,isFile:ko,isBlob:Io,isRegExp:Xo,isFunction:de,isStream:Lo,isURLSearchParams:No,isTypedArray:Vo,isFileList:Ro,forEach:ft,merge:Bn,extend:Bo,trim:zo,stripBOM:Do,inherits:Ho,toFlatObject:Fo,kindOf:en,kindOfTest:Ae,endsWith:Uo,toArray:Wo,forEachEntry:Go,matchAll:Jo,isHTMLForm:qo,hasOwnProperty:Ri,hasOwnProp:Ri,reduceDescriptors:Qr,freezeMethods:Yo,toObjectSet:Ko,toCamelCase:Qo,noop:Zo,toFiniteNumber:_o,findKey:Gr,global:Jr,isContextDefined:qr,ALPHABET:Xr,generateString:$o,isSpecCompliantForm:ea,toJSONObject:ta,isAsyncFn:na,isThenable:ia};function H(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}S.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Yr=H.prototype,Kr={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Kr[t]={value:t}});Object.defineProperties(H,Kr);Object.defineProperty(Yr,"isAxiosError",{value:!0});H.from=(t,e,n,i,r,s)=>{const o=Object.create(Yr);return S.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),H.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const ra=null;function Dn(t){return S.isPlainObject(t)||S.isArray(t)}function Zr(t){return S.endsWith(t,"[]")?t.slice(0,-2):t}function ji(t,e,n){return t?t.concat(e).map(function(r,s){return r=Zr(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function sa(t){return S.isArray(t)&&!t.some(Dn)}const oa=S.toFlatObject(S,{},null,function(e){return/^is[A-Z]/.test(e)});function rn(t,e,n){if(!S.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=S.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,y){return!S.isUndefined(y[g])});const i=n.metaTokens,r=n.visitor||c,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(e);if(!S.isFunction(r))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(S.isDate(h))return h.toISOString();if(!l&&S.isBlob(h))throw new H("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(h)||S.isTypedArray(h)?l&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function c(h,g,y){let f=h;if(h&&!y&&typeof h=="object"){if(S.endsWith(g,"{}"))g=i?g:g.slice(0,-2),h=JSON.stringify(h);else if(S.isArray(h)&&sa(h)||(S.isFileList(h)||S.endsWith(g,"[]"))&&(f=S.toArray(h)))return g=Zr(g),f.forEach(function(w,A){!(S.isUndefined(w)||w===null)&&e.append(o===!0?ji([g],A,s):o===null?g:g+"[]",u(w))}),!1}return Dn(h)?!0:(e.append(ji(y,g,s),u(h)),!1)}const d=[],p=Object.assign(oa,{defaultVisitor:c,convertValue:u,isVisitable:Dn});function m(h,g){if(!S.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+g.join("."));d.push(h),S.forEach(h,function(f,v){(!(S.isUndefined(f)||f===null)&&r.call(e,f,S.isString(v)?v.trim():v,g,p))===!0&&m(f,g?g.concat(v):[v])}),d.pop()}}if(!S.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Ni(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function ri(t,e){this._pairs=[],t&&rn(t,this,e)}const _r=ri.prototype;_r.append=function(e,n){this._pairs.push([e,n])};_r.toString=function(e){const n=e?function(i){return e.call(this,i,Ni)}:Ni;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function aa(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $r(t,e,n){if(!e)return t;const i=n&&n.encode||aa,r=n&&n.serialize;let s;if(r?s=r(e,n):s=S.isURLSearchParams(e)?e.toString():new ri(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class la{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){S.forEach(this.handlers,function(i){i!==null&&e(i)})}}const zi=la,es={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ca=typeof URLSearchParams<"u"?URLSearchParams:ri,da=typeof FormData<"u"?FormData:null,ua=typeof Blob<"u"?Blob:null,fa={isBrowser:!0,classes:{URLSearchParams:ca,FormData:da,Blob:ua},protocols:["http","https","file","blob","url","data"]},ts=typeof window<"u"&&typeof document<"u",pa=(t=>ts&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),ha=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ma=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ts,hasStandardBrowserEnv:pa,hasStandardBrowserWebWorkerEnv:ha},Symbol.toStringTag,{value:"Module"})),xe={...ma,...fa};function ga(t,e){return rn(t,new xe.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return xe.isNode&&S.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function ba(t){return S.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function va(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function ns(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&S.isArray(r)?r.length:o,l?(S.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!S.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&S.isArray(r[o])&&(r[o]=va(r[o])),!a)}if(S.isFormData(t)&&S.isFunction(t.entries)){const n={};return S.forEachEntry(t,(i,r)=>{e(ba(i),r,n,0)}),n}return null}function wa(t,e,n){if(S.isString(t))try{return(e||JSON.parse)(t),S.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const si={transitional:es,adapter:["xhr","http"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=S.isObject(e);if(s&&S.isHTMLForm(e)&&(e=new FormData(e)),S.isFormData(e))return r?JSON.stringify(ns(e)):e;if(S.isArrayBuffer(e)||S.isBuffer(e)||S.isStream(e)||S.isFile(e)||S.isBlob(e))return e;if(S.isArrayBufferView(e))return e.buffer;if(S.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return ga(e,this.formSerializer).toString();if((a=S.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return rn(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),wa(e)):e}],transformResponse:[function(e){const n=this.transitional||si.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(e&&S.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?H.from(a,H.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:xe.classes.FormData,Blob:xe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(["delete","get","head","post","put","patch"],t=>{si.headers[t]={}});const oi=si,xa=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ya=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&xa[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Bi=Symbol("internals");function $e(t){return t&&String(t).trim().toLowerCase()}function zt(t){return t===!1||t==null?t:S.isArray(t)?t.map(zt):String(t)}function Sa(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const Aa=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function xn(t,e,n,i,r){if(S.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!S.isString(e)){if(S.isString(i))return e.indexOf(i)!==-1;if(S.isRegExp(i))return i.test(e)}}function Ea(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function Ta(t,e){const n=S.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}class sn{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,u){const c=$e(l);if(!c)throw new Error("header name must be a non-empty string");const d=S.findKey(r,c);(!d||r[d]===void 0||u===!0||u===void 0&&r[d]!==!1)&&(r[d||l]=zt(a))}const o=(a,l)=>S.forEach(a,(u,c)=>s(u,c,l));return S.isPlainObject(e)||e instanceof this.constructor?o(e,n):S.isString(e)&&(e=e.trim())&&!Aa(e)?o(ya(e),n):e!=null&&s(n,e,i),this}get(e,n){if(e=$e(e),e){const i=S.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return Sa(r);if(S.isFunction(n))return n.call(this,r,i);if(S.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=$e(e),e){const i=S.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||xn(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=$e(o),o){const a=S.findKey(i,o);a&&(!n||xn(i,i[a],a,n))&&(delete i[a],r=!0)}}return S.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||xn(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return S.forEach(this,(r,s)=>{const o=S.findKey(i,s);if(o){n[o]=zt(r),delete n[s];return}const a=e?Ea(s):String(s).trim();a!==s&&delete n[s],n[a]=zt(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return S.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&S.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Bi]=this[Bi]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=$e(o);i[a]||(Ta(r,o),i[a]=!0)}return S.isArray(e)?e.forEach(s):s(e),this}}sn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(sn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});S.freezeMethods(sn);const Oe=sn;function yn(t,e){const n=this||oi,i=e||n,r=Oe.from(i.headers);let s=i.data;return S.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function is(t){return!!(t&&t.__CANCEL__)}function pt(t,e,n){H.call(this,t??"canceled",H.ERR_CANCELED,e,n),this.name="CanceledError"}S.inherits(pt,H,{__CANCEL__:!0});function Ca(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new H("Request failed with status code "+n.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ma=xe.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];S.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),S.isString(i)&&o.push("path="+i),S.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Oa(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Pa(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function rs(t,e){return t&&!Oa(e)?Pa(t,e):e}const ka=xe.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function r(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(o){const a=S.isString(o)?r(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function Ia(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Ra(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=i[s];o||(o=u),n[r]=l,i[r]=u;let d=s,p=0;for(;d!==r;)p+=n[d++],d=d%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),u-o<e)return;const m=c&&u-c;return m?Math.round(p*1e3/m):void 0}}function Di(t,e){let n=0;const i=Ra(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a),u=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&u?(o-s)/l:void 0,event:r};c[e?"download":"upload"]=!0,t(c)}}const La=typeof XMLHttpRequest<"u",ja=La&&function(t){return new Promise(function(n,i){let r=t.data;const s=Oe.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,l;function u(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let c;if(S.isFormData(r)){if(xe.hasStandardBrowserEnv||xe.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((c=s.getContentType())!==!1){const[g,...y]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([g||"multipart/form-data",...y].join("; "))}}let d=new XMLHttpRequest;if(t.auth){const g=t.auth.username||"",y=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(g+":"+y))}const p=rs(t.baseURL,t.url);d.open(t.method.toUpperCase(),$r(p,t.params,t.paramsSerializer),!0),d.timeout=t.timeout;function m(){if(!d)return;const g=Oe.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),f={data:!o||o==="text"||o==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:g,config:t,request:d};Ca(function(w){n(w),u()},function(w){i(w),u()},f),d=null}if("onloadend"in d?d.onloadend=m:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(m)},d.onabort=function(){d&&(i(new H("Request aborted",H.ECONNABORTED,t,d)),d=null)},d.onerror=function(){i(new H("Network Error",H.ERR_NETWORK,t,d)),d=null},d.ontimeout=function(){let y=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const f=t.transitional||es;t.timeoutErrorMessage&&(y=t.timeoutErrorMessage),i(new H(y,f.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,t,d)),d=null},xe.hasStandardBrowserEnv&&(a&&S.isFunction(a)&&(a=a(t)),a||a!==!1&&ka(p))){const g=t.xsrfHeaderName&&t.xsrfCookieName&&Ma.read(t.xsrfCookieName);g&&s.set(t.xsrfHeaderName,g)}r===void 0&&s.setContentType(null),"setRequestHeader"in d&&S.forEach(s.toJSON(),function(y,f){d.setRequestHeader(f,y)}),S.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),o&&o!=="json"&&(d.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&d.addEventListener("progress",Di(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",Di(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=g=>{d&&(i(!g||g.type?new pt(null,t,d):g),d.abort(),d=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const h=Ia(p);if(h&&xe.protocols.indexOf(h)===-1){i(new H("Unsupported protocol "+h+":",H.ERR_BAD_REQUEST,t));return}d.send(r||null)})},Hn={http:ra,xhr:ja};S.forEach(Hn,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Hi=t=>`- ${t}`,Na=t=>S.isFunction(t)||t===null||t===!1,ss={getAdapter:t=>{t=S.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!Na(n)&&(i=Hn[(o=String(n)).toLowerCase()],i===void 0))throw new H(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Hi).join(`
`):" "+Hi(s[0]):"as no adapter specified";throw new H("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:Hn};function Sn(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new pt(null,t)}function Fi(t){return Sn(t),t.headers=Oe.from(t.headers),t.data=yn.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),ss.getAdapter(t.adapter||oi.adapter)(t).then(function(i){return Sn(t),i.data=yn.call(t,t.transformResponse,i),i.headers=Oe.from(i.headers),i},function(i){return is(i)||(Sn(t),i&&i.response&&(i.response.data=yn.call(t,t.transformResponse,i.response),i.response.headers=Oe.from(i.response.headers))),Promise.reject(i)})}const Ui=t=>t instanceof Oe?{...t}:t;function Ge(t,e){e=e||{};const n={};function i(u,c,d){return S.isPlainObject(u)&&S.isPlainObject(c)?S.merge.call({caseless:d},u,c):S.isPlainObject(c)?S.merge({},c):S.isArray(c)?c.slice():c}function r(u,c,d){if(S.isUndefined(c)){if(!S.isUndefined(u))return i(void 0,u,d)}else return i(u,c,d)}function s(u,c){if(!S.isUndefined(c))return i(void 0,c)}function o(u,c){if(S.isUndefined(c)){if(!S.isUndefined(u))return i(void 0,u)}else return i(void 0,c)}function a(u,c,d){if(d in e)return i(u,c);if(d in t)return i(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,c)=>r(Ui(u),Ui(c),!0)};return S.forEach(Object.keys(Object.assign({},t,e)),function(c){const d=l[c]||r,p=d(t[c],e[c],c);S.isUndefined(p)&&d!==a||(n[c]=p)}),n}const os="1.6.8",ai={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ai[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Wi={};ai.transitional=function(e,n,i){function r(s,o){return"[Axios v"+os+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new H(r(o," has been removed"+(n?" in "+n:"")),H.ERR_DEPRECATED);return n&&!Wi[o]&&(Wi[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function za(t,e,n){if(typeof t!="object")throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new H("option "+s+" must be "+l,H.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new H("Unknown option "+s,H.ERR_BAD_OPTION)}}const Fn={assertOptions:za,validators:ai},Pe=Fn.validators;class Vt{constructor(e){this.defaults=e,this.interceptors={request:new zi,response:new zi}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ge(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Fn.assertOptions(i,{silentJSONParsing:Pe.transitional(Pe.boolean),forcedJSONParsing:Pe.transitional(Pe.boolean),clarifyTimeoutError:Pe.transitional(Pe.boolean)},!1),r!=null&&(S.isFunction(r)?n.paramsSerializer={serialize:r}:Fn.assertOptions(r,{encode:Pe.function,serialize:Pe.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&S.merge(s.common,s[n.method]);s&&S.forEach(["delete","get","head","post","put","patch","common"],h=>{delete s[h]}),n.headers=Oe.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(l=l&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});let c,d=0,p;if(!l){const h=[Fi.bind(this),void 0];for(h.unshift.apply(h,a),h.push.apply(h,u),p=h.length,c=Promise.resolve(n);d<p;)c=c.then(h[d++],h[d++]);return c}p=a.length;let m=n;for(d=0;d<p;){const h=a[d++],g=a[d++];try{m=h(m)}catch(y){g.call(this,y);break}}try{c=Fi.call(this,m)}catch(h){return Promise.reject(h)}for(d=0,p=u.length;d<p;)c=c.then(u[d++],u[d++]);return c}getUri(e){e=Ge(this.defaults,e);const n=rs(e.baseURL,e.url);return $r(n,e.params,e.paramsSerializer)}}S.forEach(["delete","get","head","options"],function(e){Vt.prototype[e]=function(n,i){return this.request(Ge(i||{},{method:e,url:n,data:(i||{}).data}))}});S.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Ge(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Vt.prototype[e]=n(),Vt.prototype[e+"Form"]=n(!0)});const Bt=Vt;class li{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new pt(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new li(function(r){e=r}),cancel:e}}}const Ba=li;function Da(t){return function(n){return t.apply(null,n)}}function Ha(t){return S.isObject(t)&&t.isAxiosError===!0}const Un={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Un).forEach(([t,e])=>{Un[e]=t});const Fa=Un;function as(t){const e=new Bt(t),n=Ur(Bt.prototype.request,e);return S.extend(n,Bt.prototype,e,{allOwnKeys:!0}),S.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return as(Ge(t,r))},n}const _=as(oi);_.Axios=Bt;_.CanceledError=pt;_.CancelToken=Ba;_.isCancel=is;_.VERSION=os;_.toFormData=rn;_.AxiosError=H;_.Cancel=_.CanceledError;_.all=function(e){return Promise.all(e)};_.spread=Da;_.isAxiosError=Ha;_.mergeConfig=Ge;_.AxiosHeaders=Oe;_.formToJSON=t=>ns(S.isHTMLForm(t)?new FormData(t):t);_.getAdapter=ss.getAdapter;_.HttpStatusCode=Fa;_.default=_;const on=_;function ls(t){var e;if((e=t==null?void 0:t.asset)!=null&&e._ref){const n=t.asset._ref.split("-");return`https://cdn.sanity.io/images/l8zwdlyt/production/${n[1]}-${n[2]}.${n[3]}`}else return null}async function Hb(){try{const{data:{result:t}}=await on.get('https://l8zwdlyt.api.sanity.io/v2022-03-07/data/query/production?query=*[_type=="goal"]{ _id, goal, raised }');return t[0]}catch{return}}async function Ua(){try{const{data:{result:t}}=await on.get('https://l8zwdlyt.api.sanity.io/v2022-03-07/data/query/production?query=*[_type=="companies"]{ _id, id, name, logoURL, link, question, answer } | order(id asc)');return t.map(n=>(n.logoURL&&(n.logoURL=ls(n.logoURL)),n))}catch{return}}async function Wa(){try{const{data:{result:t}}=await on.get('https://l8zwdlyt.api.sanity.io/v2022-03-07/data/query/production?query=*[_type=="people"]{ _id, id,firstName,secondName,type, imageURL, facebook, instagram, otherLink, question, answer  } | order(id asc)');return t.map(n=>(n.imageURL&&(n.imageURL=ls(n.imageURL)),n))}catch{return}}async function Fb(t){const{data:e}=await on.post("https://api.telegram.org/bot6593525660:AAGrKfdt_B8SslnCs0UhvyMPZ3nn_HHEU0Q/sendMessage",{chat_id:"5921930260",parse_mode:"html",text:t});return e}var Wn={exports:{}},De={},cs={exports:{}},Va="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ga=Va,Ja=Ga;function ds(){}function us(){}us.resetWarningCache=ds;var qa=function(){function t(i,r,s,o,a,l){if(l!==Ja){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:us,resetWarningCache:ds};return n.PropTypes=n,n};cs.exports=qa();var Fe=cs.exports;const V=ni(Fe);var Vn={exports:{}},he={},Gn={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",i="contents",r=/input|select|textarea|button|object|iframe/;function s(d,p){return p.getPropertyValue("overflow")!=="visible"||d.scrollWidth<=0&&d.scrollHeight<=0}function o(d){var p=d.offsetWidth<=0&&d.offsetHeight<=0;if(p&&!d.innerHTML)return!0;try{var m=window.getComputedStyle(d),h=m.getPropertyValue("display");return p?h!==i&&s(d,m):h===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(d){for(var p=d,m=d.getRootNode&&d.getRootNode();p&&p!==document.body;){if(m&&p===m&&(p=m.host.parentNode),o(p))return!1;p=p.parentNode}return!0}function l(d,p){var m=d.nodeName.toLowerCase(),h=r.test(m)&&!d.disabled||m==="a"&&d.href||p;return h&&a(d)}function u(d){var p=d.getAttribute("tabindex");p===null&&(p=void 0);var m=isNaN(p);return(m||p>=0)&&l(d,!m)}function c(d){var p=[].slice.call(d.querySelectorAll("*"),0).reduce(function(m,h){return m.concat(h.shadowRoot?c(h.shadowRoot):[h])},[]);return p.filter(u)}t.exports=e.default})(Gn,Gn.exports);var fs=Gn.exports;Object.defineProperty(he,"__esModule",{value:!0});he.resetState=Ka;he.log=Za;he.handleBlur=ot;he.handleFocus=at;he.markForFocusLater=_a;he.returnFocus=$a;he.popWithoutFocus=el;he.setupScopedFocus=tl;he.teardownScopedFocus=nl;var Qa=fs,Xa=Ya(Qa);function Ya(t){return t&&t.__esModule?t:{default:t}}var Je=[],Ue=null,Jn=!1;function Ka(){Je=[]}function Za(){}function ot(){Jn=!0}function at(){if(Jn){if(Jn=!1,!Ue)return;setTimeout(function(){if(!Ue.contains(document.activeElement)){var t=(0,Xa.default)(Ue)[0]||Ue;t.focus()}},0)}}function _a(){Je.push(document.activeElement)}function $a(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{Je.length!==0&&(e=Je.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function el(){Je.length>0&&Je.pop()}function tl(t){Ue=t,window.addEventListener?(window.addEventListener("blur",ot,!1),document.addEventListener("focus",at,!0)):(window.attachEvent("onBlur",ot),document.attachEvent("onFocus",at))}function nl(){Ue=null,window.addEventListener?(window.removeEventListener("blur",ot),document.removeEventListener("focus",at)):(window.detachEvent("onBlur",ot),document.detachEvent("onFocus",at))}var qn={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=fs,i=r(n);function r(a){return a&&a.__esModule?a:{default:a}}function s(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?s(a.activeElement.shadowRoot):a.activeElement}function o(a,l){var u=(0,i.default)(a);if(!u.length){l.preventDefault();return}var c=void 0,d=l.shiftKey,p=u[0],m=u[u.length-1],h=s();if(a===h){if(!d)return;c=m}if(m===h&&!d&&(c=p),p===h&&d&&(c=m),c){l.preventDefault(),c.focus();return}var g=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),y=g!=null&&g[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(y){var f=u.indexOf(h);if(f>-1&&(f+=d?-1:1),c=u[f],typeof c>"u"){l.preventDefault(),c=d?m:p,c.focus();return}l.preventDefault(),c.focus()}}t.exports=e.default})(qn,qn.exports);var il=qn.exports,me={},rl=function(){},sl=rl,pe={},ps={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(ps);var ol=ps.exports;Object.defineProperty(pe,"__esModule",{value:!0});pe.canUseDOM=pe.SafeNodeList=pe.SafeHTMLCollection=void 0;var al=ol,ll=cl(al);function cl(t){return t&&t.__esModule?t:{default:t}}var an=ll.default,dl=an.canUseDOM?window.HTMLElement:{};pe.SafeHTMLCollection=an.canUseDOM?window.HTMLCollection:{};pe.SafeNodeList=an.canUseDOM?window.NodeList:{};pe.canUseDOM=an.canUseDOM;pe.default=dl;Object.defineProperty(me,"__esModule",{value:!0});me.resetState=ml;me.log=gl;me.assertNodeList=hs;me.setElement=bl;me.validateElement=ci;me.hide=vl;me.show=wl;me.documentNotReadyOrSSRTesting=xl;var ul=sl,fl=hl(ul),pl=pe;function hl(t){return t&&t.__esModule?t:{default:t}}var ce=null;function ml(){ce&&(ce.removeAttribute?ce.removeAttribute("aria-hidden"):ce.length!=null?ce.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(ce).forEach(function(t){return t.removeAttribute("aria-hidden")})),ce=null}function gl(){}function hs(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function bl(t){var e=t;if(typeof e=="string"&&pl.canUseDOM){var n=document.querySelectorAll(e);hs(n,e),e=n}return ce=e||ce,ce}function ci(t){var e=t||ce;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,fl.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function vl(t){var e=!0,n=!1,i=void 0;try{for(var r=ci(t)[Symbol.iterator](),s;!(e=(s=r.next()).done);e=!0){var o=s.value;o.setAttribute("aria-hidden","true")}}catch(a){n=!0,i=a}finally{try{!e&&r.return&&r.return()}finally{if(n)throw i}}}function wl(t){var e=!0,n=!1,i=void 0;try{for(var r=ci(t)[Symbol.iterator](),s;!(e=(s=r.next()).done);e=!0){var o=s.value;o.removeAttribute("aria-hidden")}}catch(a){n=!0,i=a}finally{try{!e&&r.return&&r.return()}finally{if(n)throw i}}}function xl(){ce=null}var Xe={};Object.defineProperty(Xe,"__esModule",{value:!0});Xe.resetState=yl;Xe.log=Sl;var nt={},it={};function Vi(t,e){t.classList.remove(e)}function yl(){var t=document.getElementsByTagName("html")[0];for(var e in nt)Vi(t,nt[e]);var n=document.body;for(var i in it)Vi(n,it[i]);nt={},it={}}function Sl(){}var Al=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},El=function(e,n){return e[n]&&(e[n]-=1),n},Tl=function(e,n,i){i.forEach(function(r){Al(n,r),e.add(r)})},Cl=function(e,n,i){i.forEach(function(r){El(n,r),n[r]===0&&e.remove(r)})};Xe.add=function(e,n){return Tl(e.classList,e.nodeName.toLowerCase()=="html"?nt:it,n.split(" "))};Xe.remove=function(e,n){return Cl(e.classList,e.nodeName.toLowerCase()=="html"?nt:it,n.split(" "))};var Ye={};Object.defineProperty(Ye,"__esModule",{value:!0});Ye.log=Ol;Ye.resetState=Pl;function Ml(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var ms=function t(){var e=this;Ml(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var i=e.openInstances.indexOf(n);i!==-1&&(e.openInstances.splice(i,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(i){return i(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Gt=new ms;function Ol(){console.log("portalOpenInstances ----------"),console.log(Gt.openInstances.length),Gt.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Pl(){Gt=new ms}Ye.default=Gt;var di={};Object.defineProperty(di,"__esModule",{value:!0});di.resetState=Ll;di.log=jl;var kl=Ye,Il=Rl(kl);function Rl(t){return t&&t.__esModule?t:{default:t}}var ie=void 0,ue=void 0,Be=[];function Ll(){for(var t=[ie,ue],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}ie=ue=null,Be=[]}function jl(){console.log("bodyTrap ----------"),console.log(Be.length);for(var t=[ie,ue],e=0;e<t.length;e++){var n=t[e],i=n||{};console.log(i.nodeName,i.className,i.id)}console.log("edn bodyTrap ----------")}function Gi(){Be.length!==0&&Be[Be.length-1].focusContent()}function Nl(t,e){!ie&&!ue&&(ie=document.createElement("div"),ie.setAttribute("data-react-modal-body-trap",""),ie.style.position="absolute",ie.style.opacity="0",ie.setAttribute("tabindex","0"),ie.addEventListener("focus",Gi),ue=ie.cloneNode(),ue.addEventListener("focus",Gi)),Be=e,Be.length>0?(document.body.firstChild!==ie&&document.body.insertBefore(ie,document.body.firstChild),document.body.lastChild!==ue&&document.body.appendChild(ue)):(ie.parentElement&&ie.parentElement.removeChild(ie),ue.parentElement&&ue.parentElement.removeChild(ue))}Il.default.subscribe(Nl);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(M){for(var R=1;R<arguments.length;R++){var F=arguments[R];for(var x in F)Object.prototype.hasOwnProperty.call(F,x)&&(M[x]=F[x])}return M},i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},r=function(){function M(R,F){for(var x=0;x<F.length;x++){var z=F[x];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(R,z.key,z)}}return function(R,F,x){return F&&M(R.prototype,F),x&&M(R,x),R}}(),s=O,o=Fe,a=E(o),l=he,u=A(l),c=il,d=E(c),p=me,m=A(p),h=Xe,g=A(h),y=pe,f=E(y),v=Ye,w=E(v);function A(M){if(M&&M.__esModule)return M;var R={};if(M!=null)for(var F in M)Object.prototype.hasOwnProperty.call(M,F)&&(R[F]=M[F]);return R.default=M,R}function E(M){return M&&M.__esModule?M:{default:M}}function C(M,R){if(!(M instanceof R))throw new TypeError("Cannot call a class as a function")}function j(M,R){if(!M)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return R&&(typeof R=="object"||typeof R=="function")?R:M}function L(M,R){if(typeof R!="function"&&R!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof R);M.prototype=Object.create(R&&R.prototype,{constructor:{value:M,enumerable:!1,writable:!0,configurable:!0}}),R&&(Object.setPrototypeOf?Object.setPrototypeOf(M,R):M.__proto__=R)}var P={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},T=function(R){return R.code==="Tab"||R.keyCode===9},N=function(R){return R.code==="Escape"||R.keyCode===27},I=0,k=function(M){L(R,M);function R(F){C(this,R);var x=j(this,(R.__proto__||Object.getPrototypeOf(R)).call(this,F));return x.setOverlayRef=function(z){x.overlay=z,x.props.overlayRef&&x.props.overlayRef(z)},x.setContentRef=function(z){x.content=z,x.props.contentRef&&x.props.contentRef(z)},x.afterClose=function(){var z=x.props,D=z.appElement,J=z.ariaHideApp,K=z.htmlOpenClassName,Te=z.bodyOpenClassName,je=z.parentSelector,Et=je&&je().ownerDocument||document;Te&&g.remove(Et.body,Te),K&&g.remove(Et.getElementsByTagName("html")[0],K),J&&I>0&&(I-=1,I===0&&m.show(D)),x.props.shouldFocusAfterRender&&(x.props.shouldReturnFocusAfterClose?(u.returnFocus(x.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),x.props.onAfterClose&&x.props.onAfterClose(),w.default.deregister(x)},x.open=function(){x.beforeOpen(),x.state.afterOpen&&x.state.beforeClose?(clearTimeout(x.closeTimer),x.setState({beforeClose:!1})):(x.props.shouldFocusAfterRender&&(u.setupScopedFocus(x.node),u.markForFocusLater()),x.setState({isOpen:!0},function(){x.openAnimationFrame=requestAnimationFrame(function(){x.setState({afterOpen:!0}),x.props.isOpen&&x.props.onAfterOpen&&x.props.onAfterOpen({overlayEl:x.overlay,contentEl:x.content})})}))},x.close=function(){x.props.closeTimeoutMS>0?x.closeWithTimeout():x.closeWithoutTimeout()},x.focusContent=function(){return x.content&&!x.contentHasFocus()&&x.content.focus({preventScroll:!0})},x.closeWithTimeout=function(){var z=Date.now()+x.props.closeTimeoutMS;x.setState({beforeClose:!0,closesAt:z},function(){x.closeTimer=setTimeout(x.closeWithoutTimeout,x.state.closesAt-Date.now())})},x.closeWithoutTimeout=function(){x.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},x.afterClose)},x.handleKeyDown=function(z){T(z)&&(0,d.default)(x.content,z),x.props.shouldCloseOnEsc&&N(z)&&(z.stopPropagation(),x.requestClose(z))},x.handleOverlayOnClick=function(z){x.shouldClose===null&&(x.shouldClose=!0),x.shouldClose&&x.props.shouldCloseOnOverlayClick&&(x.ownerHandlesClose()?x.requestClose(z):x.focusContent()),x.shouldClose=null},x.handleContentOnMouseUp=function(){x.shouldClose=!1},x.handleOverlayOnMouseDown=function(z){!x.props.shouldCloseOnOverlayClick&&z.target==x.overlay&&z.preventDefault()},x.handleContentOnClick=function(){x.shouldClose=!1},x.handleContentOnMouseDown=function(){x.shouldClose=!1},x.requestClose=function(z){return x.ownerHandlesClose()&&x.props.onRequestClose(z)},x.ownerHandlesClose=function(){return x.props.onRequestClose},x.shouldBeClosed=function(){return!x.state.isOpen&&!x.state.beforeClose},x.contentHasFocus=function(){return document.activeElement===x.content||x.content.contains(document.activeElement)},x.buildClassName=function(z,D){var J=(typeof D>"u"?"undefined":i(D))==="object"?D:{base:P[z],afterOpen:P[z]+"--after-open",beforeClose:P[z]+"--before-close"},K=J.base;return x.state.afterOpen&&(K=K+" "+J.afterOpen),x.state.beforeClose&&(K=K+" "+J.beforeClose),typeof D=="string"&&D?K+" "+D:K},x.attributesFromObject=function(z,D){return Object.keys(D).reduce(function(J,K){return J[z+"-"+K]=D[K],J},{})},x.state={afterOpen:!1,beforeClose:!1},x.shouldClose=null,x.moveFromContentToOverlay=null,x}return r(R,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(x,z){this.props.isOpen&&!x.isOpen?this.open():!this.props.isOpen&&x.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!z.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var x=this.props,z=x.appElement,D=x.ariaHideApp,J=x.htmlOpenClassName,K=x.bodyOpenClassName,Te=x.parentSelector,je=Te&&Te().ownerDocument||document;K&&g.add(je.body,K),J&&g.add(je.getElementsByTagName("html")[0],J),D&&(I+=1,m.hide(z)),w.default.register(this)}},{key:"render",value:function(){var x=this.props,z=x.id,D=x.className,J=x.overlayClassName,K=x.defaultStyles,Te=x.children,je=D?{}:K.content,Et=J?{}:K.overlay;if(this.shouldBeClosed())return null;var vo={ref:this.setOverlayRef,className:this.buildClassName("overlay",J),style:n({},Et,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},wo=n({id:z,ref:this.setContentRef,style:n({},je,this.props.style.content),className:this.buildClassName("content",D),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),xo=this.props.contentElement(wo,Te);return this.props.overlayElement(vo,xo)}}]),R}(s.Component);k.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},k.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(f.default),a.default.instanceOf(y.SafeHTMLCollection),a.default.instanceOf(y.SafeNodeList),a.default.arrayOf(a.default.instanceOf(f.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=k,t.exports=e.default})(Vn,Vn.exports);var zl=Vn.exports;function gs(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function bs(t){function e(n){var i=this.constructor.getDerivedStateFromProps(t,n);return i??null}this.setState(e.bind(this))}function vs(t,e){try{var n=this.props,i=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,i)}finally{this.props=n,this.state=i}}gs.__suppressDeprecationWarning=!0;bs.__suppressDeprecationWarning=!0;vs.__suppressDeprecationWarning=!0;function Bl(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,i=null,r=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?i="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(i="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?r="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(r="UNSAFE_componentWillUpdate"),n!==null||i!==null||r!==null){var s=t.displayName||t.name,o=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+o+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(i!==null?`
  `+i:"")+(r!==null?`
  `+r:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=gs,e.componentWillReceiveProps=bs),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=vs;var a=e.componentDidUpdate;e.componentDidUpdate=function(u,c,d){var p=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:d;a.call(this,u,c,p)}}return t}const Dl=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Bl},Symbol.toStringTag,{value:"Module"})),Hl=yo(Dl);Object.defineProperty(De,"__esModule",{value:!0});De.bodyOpenClassName=De.portalClassName=void 0;var Ji=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Fl=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),ws=O,Jt=ht(ws),Ul=Hr,qt=ht(Ul),Wl=Fe,B=ht(Wl),Vl=zl,qi=ht(Vl),Gl=me,Jl=Ql(Gl),Re=pe,Qi=ht(Re),ql=Hl;function Ql(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function ht(t){return t&&t.__esModule?t:{default:t}}function Xl(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Xi(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Yl(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Kl=De.portalClassName="ReactModalPortal",Zl=De.bodyOpenClassName="ReactModal__Body--open",ze=Re.canUseDOM&&qt.default.createPortal!==void 0,Yi=function(e){return document.createElement(e)},Ki=function(){return ze?qt.default.createPortal:qt.default.unstable_renderSubtreeIntoContainer};function Ct(t){return t()}var mt=function(t){Yl(e,t);function e(){var n,i,r,s;Xl(this,e);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return s=(i=(r=Xi(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),r),r.removePortal=function(){!ze&&qt.default.unmountComponentAtNode(r.node);var u=Ct(r.props.parentSelector);u&&u.contains(r.node)?u.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(u){r.portal=u},r.renderPortal=function(u){var c=Ki(),d=c(r,Jt.default.createElement(qi.default,Ji({defaultStyles:e.defaultStyles},u)),r.node);r.portalRef(d)},i),Xi(r,s)}return Fl(e,[{key:"componentDidMount",value:function(){if(Re.canUseDOM){ze||(this.node=Yi("div")),this.node.className=this.props.portalClassName;var i=Ct(this.props.parentSelector);i.appendChild(this.node),!ze&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(i){var r=Ct(i.parentSelector),s=Ct(this.props.parentSelector);return{prevParent:r,nextParent:s}}},{key:"componentDidUpdate",value:function(i,r,s){if(Re.canUseDOM){var o=this.props,a=o.isOpen,l=o.portalClassName;i.portalClassName!==l&&(this.node.className=l);var u=s.prevParent,c=s.nextParent;c!==u&&(u.removeChild(this.node),c.appendChild(this.node)),!(!i.isOpen&&!a)&&!ze&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!Re.canUseDOM||!this.node||!this.portal)){var i=this.portal.state,r=Date.now(),s=i.isOpen&&this.props.closeTimeoutMS&&(i.closesAt||r+this.props.closeTimeoutMS);s?(i.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-r)):this.removePortal()}}},{key:"render",value:function(){if(!Re.canUseDOM||!ze)return null;!this.node&&ze&&(this.node=Yi("div"));var i=Ki();return i(Jt.default.createElement(qi.default,Ji({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(i){Jl.setElement(i)}}]),e}(ws.Component);mt.propTypes={isOpen:B.default.bool.isRequired,style:B.default.shape({content:B.default.object,overlay:B.default.object}),portalClassName:B.default.string,bodyOpenClassName:B.default.string,htmlOpenClassName:B.default.string,className:B.default.oneOfType([B.default.string,B.default.shape({base:B.default.string.isRequired,afterOpen:B.default.string.isRequired,beforeClose:B.default.string.isRequired})]),overlayClassName:B.default.oneOfType([B.default.string,B.default.shape({base:B.default.string.isRequired,afterOpen:B.default.string.isRequired,beforeClose:B.default.string.isRequired})]),appElement:B.default.oneOfType([B.default.instanceOf(Qi.default),B.default.instanceOf(Re.SafeHTMLCollection),B.default.instanceOf(Re.SafeNodeList),B.default.arrayOf(B.default.instanceOf(Qi.default))]),onAfterOpen:B.default.func,onRequestClose:B.default.func,closeTimeoutMS:B.default.number,ariaHideApp:B.default.bool,shouldFocusAfterRender:B.default.bool,shouldCloseOnOverlayClick:B.default.bool,shouldReturnFocusAfterClose:B.default.bool,preventScroll:B.default.bool,parentSelector:B.default.func,aria:B.default.object,data:B.default.object,role:B.default.string,contentLabel:B.default.string,shouldCloseOnEsc:B.default.bool,overlayRef:B.default.func,contentRef:B.default.func,id:B.default.string,overlayElement:B.default.func,contentElement:B.default.func};mt.defaultProps={isOpen:!1,portalClassName:Kl,bodyOpenClassName:Zl,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return Jt.default.createElement("div",e,n)},contentElement:function(e,n){return Jt.default.createElement("div",e,n)}};mt.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,ql.polyfill)(mt);De.default=mt;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=De,i=r(n);function r(s){return s&&s.__esModule?s:{default:s}}e.default=i.default,t.exports=e.default})(Wn,Wn.exports);var _l=Wn.exports;const $l=ni(_l);var ui={};ui.match=sc;ui.parse=xs;var ec=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,tc=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,nc=/^(?:(min|max)-)?(.+)/,ic=/(em|rem|px|cm|mm|in|pt|pc)?$/,rc=/(dpi|dpcm|dppx)?$/;function sc(t,e){return xs(t).some(function(n){var i=n.inverse,r=n.type==="all"||e.type===n.type;if(r&&i||!(r||i))return!1;var s=n.expressions.every(function(o){var a=o.feature,l=o.modifier,u=o.value,c=e[a];if(!c)return!1;switch(a){case"orientation":case"scan":return c.toLowerCase()===u.toLowerCase();case"width":case"height":case"device-width":case"device-height":u=$i(u),c=$i(c);break;case"resolution":u=_i(u),c=_i(c);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":u=Zi(u),c=Zi(c);break;case"grid":case"color":case"color-index":case"monochrome":u=parseInt(u,10)||1,c=parseInt(c,10)||0;break}switch(l){case"min":return c>=u;case"max":return c<=u;default:return c===u}});return s&&!i||!s&&i})}function xs(t){return t.split(",").map(function(e){e=e.trim();var n=e.match(ec),i=n[1],r=n[2],s=n[3]||"",o={};return o.inverse=!!i&&i.toLowerCase()==="not",o.type=r?r.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],o.expressions=s.map(function(a){var l=a.match(tc),u=l[1].toLowerCase().match(nc);return{modifier:u[1],feature:u[2],value:l[2]}}),o})}function Zi(t){var e=Number(t),n;return e||(n=t.match(/^(\d+)\s*\/\s*(\d+)$/),e=n[1]/n[2]),e}function _i(t){var e=parseFloat(t),n=String(t).match(rc)[1];switch(n){case"dpcm":return e/2.54;case"dppx":return e*96;default:return e}}function $i(t){var e=parseFloat(t),n=String(t).match(ic)[1];switch(n){case"em":return e*16;case"rem":return e*16;case"cm":return e*96/2.54;case"mm":return e*96/2.54/10;case"in":return e*96;case"pt":return e*72;case"pc":return e*72/12;default:return e}}var oc=ui.match,er=typeof window<"u"?window.matchMedia:null;function ac(t,e,n){var i=this,r;er&&!n&&(r=er.call(window,t)),r?(this.matches=r.matches,this.media=r.media,r.addListener(a)):(this.matches=oc(t,e),this.media=t),this.addListener=s,this.removeListener=o,this.dispose=l;function s(u){r&&r.addListener(u)}function o(u){r&&r.removeListener(u)}function a(u){i.matches=u.matches,i.media=u.media}function l(){r&&r.removeListener(a)}}function lc(t,e,n){return new ac(t,e,n)}var cc=lc;const dc=ni(cc);var uc=/[A-Z]/g,fc=/^ms-/,An={};function pc(t){return"-"+t.toLowerCase()}function ys(t){if(An.hasOwnProperty(t))return An[t];var e=t.replace(uc,pc);return An[t]=fc.test(e)?"-"+e:e}function hc(t,e){if(t===e)return!0;if(!t||!e)return!1;const n=Object.keys(t),i=Object.keys(e),r=n.length;if(i.length!==r)return!1;for(let s=0;s<r;s++){const o=n[s];if(t[o]!==e[o]||!Object.prototype.hasOwnProperty.call(e,o))return!1}return!0}const re=V.oneOfType([V.string,V.number]),fi={all:V.bool,grid:V.bool,aural:V.bool,braille:V.bool,handheld:V.bool,print:V.bool,projection:V.bool,screen:V.bool,tty:V.bool,tv:V.bool,embossed:V.bool},Ss={orientation:V.oneOf(["portrait","landscape"]),scan:V.oneOf(["progressive","interlace"]),aspectRatio:V.string,deviceAspectRatio:V.string,height:re,deviceHeight:re,width:re,deviceWidth:re,color:V.bool,colorIndex:V.bool,monochrome:V.bool,resolution:re,type:Object.keys(fi)},{type:Ub,...mc}=Ss,As={minAspectRatio:V.string,maxAspectRatio:V.string,minDeviceAspectRatio:V.string,maxDeviceAspectRatio:V.string,minHeight:re,maxHeight:re,minDeviceHeight:re,maxDeviceHeight:re,minWidth:re,maxWidth:re,minDeviceWidth:re,maxDeviceWidth:re,minColor:V.number,maxColor:V.number,minColorIndex:V.number,maxColorIndex:V.number,minMonochrome:V.number,maxMonochrome:V.number,minResolution:re,maxResolution:re,...mc},gc={...fi,...As};var bc={all:gc,types:fi,matchers:Ss,features:As};const vc=t=>`not ${t}`,wc=(t,e)=>{const n=ys(t);return typeof e=="number"&&(e=`${e}px`),e===!0?n:e===!1?vc(n):`(${n}: ${e})`},xc=t=>t.join(" and "),yc=t=>{const e=[];return Object.keys(bc.all).forEach(n=>{const i=t[n];i!=null&&e.push(wc(n,i))}),xc(e)},Sc=O.createContext(void 0),Ac=t=>t.query||yc(t),tr=t=>t?Object.keys(t).reduce((n,i)=>(n[ys(i)]=t[i],n),{}):void 0,Es=()=>{const t=O.useRef(!1);return O.useEffect(()=>{t.current=!0},[]),t.current},Ec=t=>{const e=O.useContext(Sc),n=()=>tr(t)||tr(e),[i,r]=O.useState(n);return O.useEffect(()=>{const s=n();hc(i,s)||r(s)},[t,e]),i},Tc=t=>{const e=()=>Ac(t),[n,i]=O.useState(e);return O.useEffect(()=>{const r=e();n!==r&&i(r)},[t]),n},Cc=(t,e)=>{const n=()=>dc(t,e||{},!!e),[i,r]=O.useState(n),s=Es();return O.useEffect(()=>{if(s){const o=n();return r(o),()=>{o&&o.dispose()}}},[t,e]),i},Mc=t=>{const[e,n]=O.useState(t.matches);return O.useEffect(()=>{const i=r=>{n(r.matches)};return t.addListener(i),n(t.matches),()=>{t.removeListener(i)}},[t]),e},Ts=(t,e,n)=>{const i=Ec(e),r=Tc(t);if(!r)throw new Error("Invalid or missing MediaQuery!");const s=Cc(r,i),o=Mc(s),a=Es();return O.useEffect(()=>{a&&n&&n(o)},[o]),O.useEffect(()=>()=>{s&&s.dispose()},[]),o},Wb=({children:t,device:e,onChange:n,...i})=>{const r=Ts(i,e,n);return typeof t=="function"?t(r):r?t:null},pi=()=>O.useContext(So),hi=G.div`
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
`,mi=({children:t,...e})=>b.jsx(hi,{...e,children:t}),Oc=G.header`
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
`,Pc=G(mi)`
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
`,kc="/MistoHub/assets/icons-395c4493.svg",fe=({width:t,height:e,iconName:n,styles:i})=>b.jsx("svg",{width:t,height:e,className:i,children:b.jsx("use",{href:`${kc}#${n}`})}),Ic=G.div`
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
`;function Rc({darkStyle:t,sectionName:e}){let n={};switch(e){case"header":n[e]=!0;break;case"footer":n[e]=!0;break;case"menu":n[e]=!0;break}return b.jsxs(Ic,{$sections:n,children:[b.jsx(ki,{className:`link-instagram ${n.header?t:""}`,to:"https://www.instagram.com/mistohub",target:"_blank",rel:"noopener noreferrer","aria-label":"go and view the Mistohub Instagram account",children:b.jsx(fe,{width:"20",height:"20",iconName:"icon-instagram",styles:t})}),b.jsx(ki,{className:`link-facebook ${n.header?t:""}`,to:"https://www.facebook.com/mistohub/?locale=uk_UA",target:"_blank",rel:"noopener noreferrer","aria-label":"go to the Mistohub Facebook page",children:b.jsx(fe,{width:"20",height:"20",iconName:"icon-faceb",styles:t})})]})}function Lc(){const[t,e]=O.useState(""),{openModal:n}=pi(),i=Ts({maxWidth:767});return O.useEffect(()=>{const r=document.getElementById("footer"),s=document.querySelector(".hidden-wrap"),o=()=>{window.scrollY!==0&&r.offsetTop-375>=window.scrollY?(s.classList.value.includes("hidden")&&s.classList.remove("hidden"),e("dark-header")):window.scrollY===0?e(""):s.classList.add("hidden")};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[]),b.jsx(Oc,{children:b.jsx("div",{className:`hidden-wrap ${t}`,children:b.jsxs(Pc,{children:[b.jsx(fe,{width:i?"99":"118",height:i?"34":"40",iconName:"main-logo",styles:`main-logo ${t} `}),i?b.jsx(b.Fragment,{children:b.jsx("button",{type:"button",onClick:()=>n("menu_modal"),children:b.jsx(fe,{width:"44",height:"38",iconName:"burger-menu",styles:`${t} burger-menu-icon`})})}):b.jsxs("div",{className:"menu-wrapper",children:[b.jsx(Rc,{darkStyle:t,sectionName:"header"}),b.jsxs("button",{type:"button",className:"btn-clouds",onClick:()=>n("join_modal"),children:[b.jsx(fe,{width:"180",height:"85",iconName:"cloud",styles:`${t} cloud-icon`}),b.jsx("span",{children:"Підтримати проєкт"})]}),b.jsx("button",{type:"button",onClick:()=>n("menu_modal"),children:b.jsx(fe,{width:"54",height:"47",iconName:"burger-menu",styles:`${t} burger-menu-icon`})})]})]})})})}function nr(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function gi(t,e){t===void 0&&(t={}),e===void 0&&(e={}),Object.keys(e).forEach(n=>{typeof t[n]>"u"?t[n]=e[n]:nr(e[n])&&nr(t[n])&&Object.keys(e[n]).length>0&&gi(t[n],e[n])})}const Cs={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Ke(){const t=typeof document<"u"?document:{};return gi(t,Cs),t}const jc={document:Cs,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function le(){const t=typeof window<"u"?window:{};return gi(t,jc),t}function Nc(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function zc(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function Qn(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function Qt(){return Date.now()}function Bc(t){const e=le();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function Dc(t,e){e===void 0&&(e="x");const n=le();let i,r,s;const o=Bc(t);return n.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix(r==="none"?"":r)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=s.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?r=s.m41:i.length===16?r=parseFloat(i[12]):r=parseFloat(i[4])),e==="y"&&(n.WebKitCSSMatrix?r=s.m42:i.length===16?r=parseFloat(i[13]):r=parseFloat(i[5])),r||0}function Mt(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function Hc(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function oe(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const i=n<0||arguments.length<=n?void 0:arguments[n];if(i!=null&&!Hc(i)){const r=Object.keys(Object(i)).filter(s=>e.indexOf(s)<0);for(let s=0,o=r.length;s<o;s+=1){const a=r[s],l=Object.getOwnPropertyDescriptor(i,a);l!==void 0&&l.enumerable&&(Mt(t[a])&&Mt(i[a])?i[a].__swiper__?t[a]=i[a]:oe(t[a],i[a]):!Mt(t[a])&&Mt(i[a])?(t[a]={},i[a].__swiper__?t[a]=i[a]:oe(t[a],i[a])):t[a]=i[a])}}}return t}function Ot(t,e,n){t.style.setProperty(e,n)}function Ms(t){let{swiper:e,targetPosition:n,side:i}=t;const r=le(),s=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const u=n>s?"next":"prev",c=(p,m)=>u==="next"&&p>=m||u==="prev"&&p<=m,d=()=>{a=new Date().getTime(),o===null&&(o=a);const p=Math.max(Math.min((a-o)/l,1),0),m=.5-Math.cos(p*Math.PI)/2;let h=s+m*(n-s);if(c(h,n)&&(h=n),e.wrapperEl.scrollTo({[i]:h}),c(h,n)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:h})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(d)};d()}function ye(t,e){return e===void 0&&(e=""),[...t.children].filter(n=>n.matches(e))}function Xt(t){try{console.warn(t);return}catch{}}function Yt(t,e){e===void 0&&(e=[]);const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:Nc(e)),n}function Fc(t,e){const n=[];for(;t.previousElementSibling;){const i=t.previousElementSibling;e?i.matches(e)&&n.push(i):n.push(i),t=i}return n}function Uc(t,e){const n=[];for(;t.nextElementSibling;){const i=t.nextElementSibling;e?i.matches(e)&&n.push(i):n.push(i),t=i}return n}function Le(t,e){return le().getComputedStyle(t,null).getPropertyValue(e)}function Kt(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function Os(t,e){const n=[];let i=t.parentElement;for(;i;)e?i.matches(e)&&n.push(i):n.push(i),i=i.parentElement;return n}function Xn(t,e,n){const i=le();return n?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}function Ce(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}let En;function Wc(){const t=le(),e=Ke();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function Ps(){return En||(En=Wc()),En}let Tn;function Vc(t){let{userAgent:e}=t===void 0?{}:t;const n=Ps(),i=le(),r=i.navigator.platform,s=e||i.navigator.userAgent,o={ios:!1,android:!1},a=i.screen.width,l=i.screen.height,u=s.match(/(Android);?[\s\/]+([\d.]+)?/);let c=s.match(/(iPad).*OS\s([\d_]+)/);const d=s.match(/(iPod)(.*OS\s([\d_]+))?/),p=!c&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m=r==="Win32";let h=r==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&h&&n.touch&&g.indexOf(`${a}x${l}`)>=0&&(c=s.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),h=!1),u&&!m&&(o.os="android",o.android=!0),(c||p||d)&&(o.os="ios",o.ios=!0),o}function ks(t){return t===void 0&&(t={}),Tn||(Tn=Vc(t)),Tn}let Cn;function Gc(){const t=le(),e=ks();let n=!1;function i(){const a=t.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(i()){const a=String(t.navigator.userAgent);if(a.includes("Version/")){const[l,u]=a.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));n=l<16||l===16&&u<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),s=i(),o=s||r&&e.ios;return{isSafari:n||s,needPerspectiveFix:n,need3dFix:o,isWebView:r}}function Jc(){return Cn||(Cn=Gc()),Cn}function qc(t){let{swiper:e,on:n,emit:i}=t;const r=le();let s=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(d=>{o=r.requestAnimationFrame(()=>{const{width:p,height:m}=e;let h=p,g=m;d.forEach(y=>{let{contentBoxSize:f,contentRect:v,target:w}=y;w&&w!==e.el||(h=v?v.width:(f[0]||f).inlineSize,g=v?v.height:(f[0]||f).blockSize)}),(h!==p||g!==m)&&a()})}),s.observe(e.el))},u=()=>{o&&r.cancelAnimationFrame(o),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},c=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};n("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",c)}),n("destroy",()=>{u(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",c)})}function Qc(t){let{swiper:e,extendParams:n,on:i,emit:r}=t;const s=[],o=le(),a=function(c,d){d===void 0&&(d={});const p=o.MutationObserver||o.WebkitMutationObserver,m=new p(h=>{if(e.__preventObserver__)return;if(h.length===1){r("observerUpdate",h[0]);return}const g=function(){r("observerUpdate",h[0])};o.requestAnimationFrame?o.requestAnimationFrame(g):o.setTimeout(g,0)});m.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:typeof d.childList>"u"?!0:d.childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),s.push(m)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=Os(e.hostEl);for(let d=0;d<c.length;d+=1)a(c[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},u=()=>{s.forEach(c=>{c.disconnect()}),s.splice(0,s.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",l),i("destroy",u)}var Xc={on(t,e,n){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const r=n?"unshift":"push";return t.split(" ").forEach(s=>{i.eventsListeners[s]||(i.eventsListeners[s]=[]),i.eventsListeners[s][r](e)}),i},once(t,e,n){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function r(){i.off(t,r),r.__emitterProxy&&delete r.__emitterProxy;for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];e.apply(i,o)}return r.__emitterProxy=e,i.on(t,r,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const i=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[i](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(i=>{typeof e>"u"?n.eventsListeners[i]=[]:n.eventsListeners[i]&&n.eventsListeners[i].forEach((r,s)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&n.eventsListeners[i].splice(s,1)})}),n},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,n,i;for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],n=s.slice(1,s.length),i=t):(e=s[0].events,n=s[0].data,i=s[0].context||t),n.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(u=>{u.apply(i,[l,...n])}),t.eventsListeners&&t.eventsListeners[l]&&t.eventsListeners[l].forEach(u=>{u.apply(i,n)})}),t}};function Yc(){const t=this;let e,n;const i=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=i.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=i.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(Le(i,"padding-left")||0,10)-parseInt(Le(i,"padding-right")||0,10),n=n-parseInt(Le(i,"padding-top")||0,10)-parseInt(Le(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function Kc(){const t=this;function e(T,N){return parseFloat(T.getPropertyValue(t.getDirectionLabel(N))||0)}const n=t.params,{wrapperEl:i,slidesEl:r,size:s,rtlTranslate:o,wrongRTL:a}=t,l=t.virtual&&n.virtual.enabled,u=l?t.virtual.slides.length:t.slides.length,c=ye(r,`.${t.params.slideClass}, swiper-slide`),d=l?t.virtual.slides.length:c.length;let p=[];const m=[],h=[];let g=n.slidesOffsetBefore;typeof g=="function"&&(g=n.slidesOffsetBefore.call(t));let y=n.slidesOffsetAfter;typeof y=="function"&&(y=n.slidesOffsetAfter.call(t));const f=t.snapGrid.length,v=t.slidesGrid.length;let w=n.spaceBetween,A=-g,E=0,C=0;if(typeof s>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*s:typeof w=="string"&&(w=parseFloat(w)),t.virtualSize=-w,c.forEach(T=>{o?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Ot(i,"--swiper-centered-offset-before",""),Ot(i,"--swiper-centered-offset-after",""));const j=n.grid&&n.grid.rows>1&&t.grid;j?t.grid.initSlides(c):t.grid&&t.grid.unsetSlides();let L;const P=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(T=>typeof n.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<d;T+=1){L=0;let N;if(c[T]&&(N=c[T]),j&&t.grid.updateSlide(T,N,c),!(c[T]&&Le(N,"display")==="none")){if(n.slidesPerView==="auto"){P&&(c[T].style[t.getDirectionLabel("width")]="");const I=getComputedStyle(N),k=N.style.transform,M=N.style.webkitTransform;if(k&&(N.style.transform="none"),M&&(N.style.webkitTransform="none"),n.roundLengths)L=t.isHorizontal()?Xn(N,"width",!0):Xn(N,"height",!0);else{const R=e(I,"width"),F=e(I,"padding-left"),x=e(I,"padding-right"),z=e(I,"margin-left"),D=e(I,"margin-right"),J=I.getPropertyValue("box-sizing");if(J&&J==="border-box")L=R+z+D;else{const{clientWidth:K,offsetWidth:Te}=N;L=R+F+x+z+D+(Te-K)}}k&&(N.style.transform=k),M&&(N.style.webkitTransform=M),n.roundLengths&&(L=Math.floor(L))}else L=(s-(n.slidesPerView-1)*w)/n.slidesPerView,n.roundLengths&&(L=Math.floor(L)),c[T]&&(c[T].style[t.getDirectionLabel("width")]=`${L}px`);c[T]&&(c[T].swiperSlideSize=L),h.push(L),n.centeredSlides?(A=A+L/2+E/2+w,E===0&&T!==0&&(A=A-s/2-w),T===0&&(A=A-s/2-w),Math.abs(A)<1/1e3&&(A=0),n.roundLengths&&(A=Math.floor(A)),C%n.slidesPerGroup===0&&p.push(A),m.push(A)):(n.roundLengths&&(A=Math.floor(A)),(C-Math.min(t.params.slidesPerGroupSkip,C))%t.params.slidesPerGroup===0&&p.push(A),m.push(A),A=A+L+w),t.virtualSize+=L+w,E=L,C+=1}}if(t.virtualSize=Math.max(t.virtualSize,s)+y,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(i.style.width=`${t.virtualSize+w}px`),n.setWrapperSize&&(i.style[t.getDirectionLabel("width")]=`${t.virtualSize+w}px`),j&&t.grid.updateWrapperSize(L,p),!n.centeredSlides){const T=[];for(let N=0;N<p.length;N+=1){let I=p[N];n.roundLengths&&(I=Math.floor(I)),p[N]<=t.virtualSize-s&&T.push(I)}p=T,Math.floor(t.virtualSize-s)-Math.floor(p[p.length-1])>1&&p.push(t.virtualSize-s)}if(l&&n.loop){const T=h[0]+w;if(n.slidesPerGroup>1){const N=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/n.slidesPerGroup),I=T*n.slidesPerGroup;for(let k=0;k<N;k+=1)p.push(p[p.length-1]+I)}for(let N=0;N<t.virtual.slidesBefore+t.virtual.slidesAfter;N+=1)n.slidesPerGroup===1&&p.push(p[p.length-1]+T),m.push(m[m.length-1]+T),t.virtualSize+=T}if(p.length===0&&(p=[0]),w!==0){const T=t.isHorizontal()&&o?"marginLeft":t.getDirectionLabel("marginRight");c.filter((N,I)=>!n.cssMode||n.loop?!0:I!==c.length-1).forEach(N=>{N.style[T]=`${w}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let T=0;h.forEach(I=>{T+=I+(w||0)}),T-=w;const N=T-s;p=p.map(I=>I<=0?-g:I>N?N+y:I)}if(n.centerInsufficientSlides){let T=0;if(h.forEach(N=>{T+=N+(w||0)}),T-=w,T<s){const N=(s-T)/2;p.forEach((I,k)=>{p[k]=I-N}),m.forEach((I,k)=>{m[k]=I+N})}}if(Object.assign(t,{slides:c,snapGrid:p,slidesGrid:m,slidesSizesGrid:h}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Ot(i,"--swiper-centered-offset-before",`${-p[0]}px`),Ot(i,"--swiper-centered-offset-after",`${t.size/2-h[h.length-1]/2}px`);const T=-t.snapGrid[0],N=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(I=>I+T),t.slidesGrid=t.slidesGrid.map(I=>I+N)}if(d!==u&&t.emit("slidesLengthChange"),p.length!==f&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),m.length!==v&&t.emit("slidesGridLengthChange"),n.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const T=`${n.containerModifierClass}backface-hidden`,N=t.el.classList.contains(T);d<=n.maxBackfaceHiddenSlides?N||t.el.classList.add(T):N&&t.el.classList.remove(T)}}function Zc(t){const e=this,n=[],i=e.virtual&&e.params.virtual.enabled;let r=0,s;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const o=a=>i?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{n.push(a)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const a=e.activeIndex+s;if(a>e.slides.length&&!i)break;n.push(o(a))}else n.push(o(e.activeIndex));for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const a=n[s].offsetHeight;r=a>r?a:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function _c(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(t.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-n-t.cssOverflowAdjustment()}function $c(t){t===void 0&&(t=this&&this.translate||0);const e=this,n=e.params,{slides:i,rtlTranslate:r,snapGrid:s}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-t;r&&(o=t),i.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<i.length;l+=1){const u=i[l];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=i[0].swiperSlideOffset);const d=(o+(n.centeredSlides?e.minTranslate():0)-c)/(u.swiperSlideSize+a),p=(o-s[0]+(n.centeredSlides?e.minTranslate():0)-c)/(u.swiperSlideSize+a),m=-(o-c),h=m+e.slidesSizesGrid[l],g=m>=0&&m<=e.size-e.slidesSizesGrid[l];(m>=0&&m<e.size-1||h>1&&h<=e.size||m<=0&&h>=e.size)&&(e.visibleSlides.push(u),e.visibleSlidesIndexes.push(l),i[l].classList.add(n.slideVisibleClass)),g&&i[l].classList.add(n.slideFullyVisibleClass),u.progress=r?-d:d,u.originalProgress=r?-p:p}}function ed(t){const e=this;if(typeof t>"u"){const c=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*c||0}const n=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:s,isEnd:o,progressLoop:a}=e;const l=s,u=o;if(i===0)r=0,s=!0,o=!0;else{r=(t-e.minTranslate())/i;const c=Math.abs(t-e.minTranslate())<1,d=Math.abs(t-e.maxTranslate())<1;s=c||r<=0,o=d||r>=1,c&&(r=0),d&&(r=1)}if(n.loop){const c=e.getSlideIndexByData(0),d=e.getSlideIndexByData(e.slides.length-1),p=e.slidesGrid[c],m=e.slidesGrid[d],h=e.slidesGrid[e.slidesGrid.length-1],g=Math.abs(t);g>=p?a=(g-p)/h:a=(g+h-m)/h,a>1&&(a-=1)}Object.assign(e,{progress:r,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),s&&!l&&e.emit("reachBeginning toEdge"),o&&!u&&e.emit("reachEnd toEdge"),(l&&!s||u&&!o)&&e.emit("fromEdge"),e.emit("progress",r)}const Mn=(t,e,n)=>{e&&!t.classList.contains(n)?t.classList.add(n):!e&&t.classList.contains(n)&&t.classList.remove(n)};function td(){const t=this,{slides:e,params:n,slidesEl:i,activeIndex:r}=t,s=t.virtual&&n.virtual.enabled,o=t.grid&&n.grid&&n.grid.rows>1,a=d=>ye(i,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let l,u,c;if(s)if(n.loop){let d=r-t.virtual.slidesBefore;d<0&&(d=t.virtual.slides.length+d),d>=t.virtual.slides.length&&(d-=t.virtual.slides.length),l=a(`[data-swiper-slide-index="${d}"]`)}else l=a(`[data-swiper-slide-index="${r}"]`);else o?(l=e.filter(d=>d.column===r)[0],c=e.filter(d=>d.column===r+1)[0],u=e.filter(d=>d.column===r-1)[0]):l=e[r];l&&(o||(c=Uc(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=e[0]),u=Fc(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=e[e.length-1]))),e.forEach(d=>{Mn(d,d===l,n.slideActiveClass),Mn(d,d===c,n.slideNextClass),Mn(d,d===u,n.slidePrevClass)}),t.emitSlidesClasses()}const Dt=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,i=e.closest(n());if(i){let r=i.querySelector(`.${t.params.lazyPreloaderClass}`);!r&&t.isElement&&(i.shadowRoot?r=i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(r=i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},On=(t,e)=>{if(!t.slides[e])return;const n=t.slides[e].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Yn=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const n=t.slides.length;if(!n||!e||e<0)return;e=Math.min(e,n);const i=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),r=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const o=r,a=[o-e];a.push(...Array.from({length:e}).map((l,u)=>o+i+u)),t.slides.forEach((l,u)=>{a.includes(l.column)&&On(t,u)});return}const s=r+i-1;if(t.params.rewind||t.params.loop)for(let o=r-e;o<=s+e;o+=1){const a=(o%n+n)%n;(a<r||a>s)&&On(t,a)}else for(let o=Math.max(r-e,0);o<=Math.min(s+e,n-1);o+=1)o!==r&&(o>s||o<r)&&On(t,o)};function nd(t){const{slidesGrid:e,params:n}=t,i=t.rtlTranslate?t.translate:-t.translate;let r;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?i>=e[s]&&i<e[s+1]-(e[s+1]-e[s])/2?r=s:i>=e[s]&&i<e[s+1]&&(r=s+1):i>=e[s]&&(r=s);return n.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function id(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:r,activeIndex:s,realIndex:o,snapIndex:a}=e;let l=t,u;const c=m=>{let h=m-e.virtual.slidesBefore;return h<0&&(h=e.virtual.slides.length+h),h>=e.virtual.slides.length&&(h-=e.virtual.slides.length),h};if(typeof l>"u"&&(l=nd(e)),i.indexOf(n)>=0)u=i.indexOf(n);else{const m=Math.min(r.slidesPerGroupSkip,l);u=m+Math.floor((l-m)/r.slidesPerGroup)}if(u>=i.length&&(u=i.length-1),l===s&&!e.params.loop){u!==a&&(e.snapIndex=u,e.emit("snapIndexChange"));return}if(l===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=c(l);return}const d=e.grid&&r.grid&&r.grid.rows>1;let p;if(e.virtual&&r.virtual.enabled&&r.loop)p=c(l);else if(d){const m=e.slides.filter(g=>g.column===l)[0];let h=parseInt(m.getAttribute("data-swiper-slide-index"),10);Number.isNaN(h)&&(h=Math.max(e.slides.indexOf(m),0)),p=Math.floor(h/r.grid.rows)}else if(e.slides[l]){const m=e.slides[l].getAttribute("data-swiper-slide-index");m?p=parseInt(m,10):p=l}else p=l;Object.assign(e,{previousSnapIndex:a,snapIndex:u,previousRealIndex:o,realIndex:p,previousIndex:s,activeIndex:l}),e.initialized&&Yn(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==p&&e.emit("realIndexChange"),e.emit("slideChange"))}function rd(t,e){const n=this,i=n.params;let r=t.closest(`.${i.slideClass}, swiper-slide`);!r&&n.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(a=>{!r&&a.matches&&a.matches(`.${i.slideClass}, swiper-slide`)&&(r=a)});let s=!1,o;if(r){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===r){s=!0,o=a;break}}if(r&&s)n.clickedSlide=r,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}i.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var sd={updateSize:Yc,updateSlides:Kc,updateAutoHeight:Zc,updateSlidesOffset:_c,updateSlidesProgress:$c,updateProgress:ed,updateSlidesClasses:td,updateActiveIndex:id,updateClickedSlide:rd};function od(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:n,rtlTranslate:i,translate:r,wrapperEl:s}=e;if(n.virtualTranslate)return i?-r:r;if(n.cssMode)return r;let o=Dc(s,t);return o+=e.cssOverflowAdjustment(),i&&(o=-o),o||0}function ad(t,e){const n=this,{rtlTranslate:i,params:r,wrapperEl:s,progress:o}=n;let a=0,l=0;const u=0;n.isHorizontal()?a=i?-t:t:l=t,r.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,r.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:r.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${l}px, ${u}px)`);let c;const d=n.maxTranslate()-n.minTranslate();d===0?c=0:c=(t-n.minTranslate())/d,c!==o&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function ld(){return-this.snapGrid[0]}function cd(){return-this.snapGrid[this.snapGrid.length-1]}function dd(t,e,n,i,r){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),i===void 0&&(i=!0);const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),u=s.maxTranslate();let c;if(i&&t>l?c=l:i&&t<u?c=u:c=t,s.updateProgress(c),o.cssMode){const d=s.isHorizontal();if(e===0)a[d?"scrollLeft":"scrollTop"]=-c;else{if(!s.support.smoothScroll)return Ms({swiper:s,targetPosition:-c,side:d?"left":"top"}),!0;a.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(p){!s||s.destroyed||p.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var ud={getTranslate:od,setTranslate:ad,minTranslate:ld,maxTranslate:cd,translateTo:dd};function fd(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`,n.wrapperEl.style.transitionDelay=t===0?"0ms":""),n.emit("setTransition",t,e)}function Is(t){let{swiper:e,runCallbacks:n,direction:i,step:r}=t;const{activeIndex:s,previousIndex:o}=e;let a=i;if(a||(s>o?a="next":s<o?a="prev":a="reset"),e.emit(`transition${r}`),n&&s!==o){if(a==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function pd(t,e){t===void 0&&(t=!0);const n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),Is({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function hd(t,e){t===void 0&&(t=!0);const n=this,{params:i}=n;n.animating=!1,!i.cssMode&&(n.setTransition(0),Is({swiper:n,runCallbacks:t,direction:e,step:"End"}))}var md={setTransition:fd,transitionStart:pd,transitionEnd:hd};function gd(t,e,n,i,r){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const s=this;let o=t;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:p,wrapperEl:m,enabled:h}=s;if(!h&&!i&&!r||s.destroyed||s.animating&&a.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const g=Math.min(s.params.slidesPerGroupSkip,o);let y=g+Math.floor((o-g)/s.params.slidesPerGroup);y>=l.length&&(y=l.length-1);const f=-l[y];if(a.normalizeSlideIndex)for(let w=0;w<u.length;w+=1){const A=-Math.floor(f*100),E=Math.floor(u[w]*100),C=Math.floor(u[w+1]*100);typeof u[w+1]<"u"?A>=E&&A<C-(C-E)/2?o=w:A>=E&&A<C&&(o=w+1):A>=E&&(o=w)}if(s.initialized&&o!==d&&(!s.allowSlideNext&&(p?f>s.translate&&f>s.minTranslate():f<s.translate&&f<s.minTranslate())||!s.allowSlidePrev&&f>s.translate&&f>s.maxTranslate()&&(d||0)!==o))return!1;o!==(c||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(f);let v;if(o>d?v="next":o<d?v="prev":v="reset",p&&-f===s.translate||!p&&f===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(f),v!=="reset"&&(s.transitionStart(n,v),s.transitionEnd(n,v)),!1;if(a.cssMode){const w=s.isHorizontal(),A=p?f:-f;if(e===0){const E=s.virtual&&s.params.virtual.enabled;E&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),E&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[w?"scrollLeft":"scrollTop"]=A})):m[w?"scrollLeft":"scrollTop"]=A,E&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return Ms({swiper:s,targetPosition:A,side:w?"left":"top"}),!0;m.scrollTo({[w?"left":"top"]:A,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(f),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,i),s.transitionStart(n,v),e===0?s.transitionEnd(n,v):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(A){!s||s.destroyed||A.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,v))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function bd(t,e,n,i){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);const s=r.grid&&r.params.grid&&r.params.grid.rows>1;let o=t;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)o=o+r.virtual.slidesBefore;else{let a;if(s){const p=o*r.params.grid.rows;a=r.slides.filter(m=>m.getAttribute("data-swiper-slide-index")*1===p)[0].column}else a=r.getSlideIndexByData(o);const l=s?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:u}=r.params;let c=r.params.slidesPerView;c==="auto"?c=r.slidesPerViewDynamic():(c=Math.ceil(parseFloat(r.params.slidesPerView,10)),u&&c%2===0&&(c=c+1));let d=l-a<c;if(u&&(d=d||a<Math.ceil(c/2)),i&&u&&r.params.slidesPerView!=="auto"&&!s&&(d=!1),d){const p=u?a<r.activeIndex?"prev":"next":a-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?a+1:a-l+1,slideRealIndex:p==="next"?r.realIndex:void 0})}if(s){const p=o*r.params.grid.rows;o=r.slides.filter(m=>m.getAttribute("data-swiper-slide-index")*1===p)[0].column}else o=r.getSlideIndexByData(o)}return requestAnimationFrame(()=>{r.slideTo(o,e,n,i)}),r}function vd(t,e,n){e===void 0&&(e=!0);const i=this,{enabled:r,params:s,animating:o}=i;if(!r||i.destroyed)return i;typeof t>"u"&&(t=i.params.speed);let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<s.slidesPerGroupSkip?1:a,u=i.virtual&&s.virtual.enabled;if(s.loop){if(o&&!u&&s.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,t,e,n)}),!0}return s.rewind&&i.isEnd?i.slideTo(0,t,e,n):i.slideTo(i.activeIndex+l,t,e,n)}function wd(t,e,n){e===void 0&&(e=!0);const i=this,{params:r,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:u}=i;if(!l||i.destroyed)return i;typeof t>"u"&&(t=i.params.speed);const c=i.virtual&&r.virtual.enabled;if(r.loop){if(u&&!c&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const d=a?i.translate:-i.translate;function p(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const m=p(d),h=s.map(f=>p(f));let g=s[h.indexOf(m)-1];if(typeof g>"u"&&r.cssMode){let f;s.forEach((v,w)=>{m>=v&&(f=w)}),typeof f<"u"&&(g=s[f>0?f-1:f])}let y=0;if(typeof g<"u"&&(y=o.indexOf(g),y<0&&(y=i.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(y=y-i.slidesPerViewDynamic("previous",!0)+1,y=Math.max(y,0))),r.rewind&&i.isBeginning){const f=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(f,t,e,n)}else if(r.loop&&i.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(y,t,e,n)}),!0;return i.slideTo(y,t,e,n)}function xd(t,e,n){e===void 0&&(e=!0);const i=this;if(!i.destroyed)return typeof t>"u"&&(t=i.params.speed),i.slideTo(i.activeIndex,t,e,n)}function yd(t,e,n,i){e===void 0&&(e=!0),i===void 0&&(i=.5);const r=this;if(r.destroyed)return;typeof t>"u"&&(t=r.params.speed);let s=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[a]){const u=r.snapGrid[a],c=r.snapGrid[a+1];l-u>(c-u)*i&&(s+=r.params.slidesPerGroup)}else{const u=r.snapGrid[a-1],c=r.snapGrid[a];l-u<=(c-u)*i&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,t,e,n)}function Sd(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:n}=t,i=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let r=t.clickedIndex,s;const o=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;s=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<t.loopedSlides-i/2||r>t.slides.length-t.loopedSlides+i/2?(t.loopFix(),r=t.getSlideIndex(ye(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),Qn(()=>{t.slideTo(r)})):t.slideTo(r):r>t.slides.length-i?(t.loopFix(),r=t.getSlideIndex(ye(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),Qn(()=>{t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}var Ad={slideTo:gd,slideToLoop:bd,slideNext:vd,slidePrev:wd,slideReset:xd,slideToClosest:yd,slideToClickedSlide:Sd};function Ed(t){const e=this,{params:n,slidesEl:i}=e;if(!n.loop||e.virtual&&e.params.virtual.enabled)return;const r=()=>{ye(i,`.${n.slideClass}, swiper-slide`).forEach((d,p)=>{d.setAttribute("data-swiper-slide-index",p)})},s=e.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(s?n.grid.rows:1),a=e.slides.length%o!==0,l=s&&e.slides.length%n.grid.rows!==0,u=c=>{for(let d=0;d<c;d+=1){const p=e.isElement?Yt("swiper-slide",[n.slideBlankClass]):Yt("div",[n.slideClass,n.slideBlankClass]);e.slidesEl.append(p)}};if(a){if(n.loopAddBlankSlides){const c=o-e.slides.length%o;u(c),e.recalcSlides(),e.updateSlides()}else Xt("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(l){if(n.loopAddBlankSlides){const c=n.grid.rows-e.slides.length%n.grid.rows;u(c),e.recalcSlides(),e.updateSlides()}else Xt("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();e.loopFix({slideRealIndex:t,direction:n.centeredSlides?void 0:"next"})}function Td(t){let{slideRealIndex:e,slideTo:n=!0,direction:i,setTranslate:r,activeSlideIndex:s,byController:o,byMousewheel:a}=t===void 0?{}:t;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:d,slidesEl:p,params:m}=l,{centeredSlides:h}=m;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&m.virtual.enabled){n&&(!m.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):m.centeredSlides&&l.snapIndex<m.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=c,l.allowSlideNext=d,l.emit("loopFix");return}let g=m.slidesPerView;g==="auto"?g=l.slidesPerViewDynamic():(g=Math.ceil(parseFloat(m.slidesPerView,10)),h&&g%2===0&&(g=g+1));const y=m.slidesPerGroupAuto?g:m.slidesPerGroup;let f=y;f%y!==0&&(f+=y-f%y),f+=m.loopAdditionalSlides,l.loopedSlides=f;const v=l.grid&&m.grid&&m.grid.rows>1;u.length<g+f?Xt("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):v&&m.grid.fill==="row"&&Xt("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const w=[],A=[];let E=l.activeIndex;typeof s>"u"?s=l.getSlideIndex(u.filter(k=>k.classList.contains(m.slideActiveClass))[0]):E=s;const C=i==="next"||!i,j=i==="prev"||!i;let L=0,P=0;const T=v?Math.ceil(u.length/m.grid.rows):u.length,I=(v?u[s].column:s)+(h&&typeof r>"u"?-g/2+.5:0);if(I<f){L=Math.max(f-I,y);for(let k=0;k<f-I;k+=1){const M=k-Math.floor(k/T)*T;if(v){const R=T-M-1;for(let F=u.length-1;F>=0;F-=1)u[F].column===R&&w.push(F)}else w.push(T-M-1)}}else if(I+g>T-f){P=Math.max(I-(T-f*2),y);for(let k=0;k<P;k+=1){const M=k-Math.floor(k/T)*T;v?u.forEach((R,F)=>{R.column===M&&A.push(F)}):A.push(M)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),j&&w.forEach(k=>{u[k].swiperLoopMoveDOM=!0,p.prepend(u[k]),u[k].swiperLoopMoveDOM=!1}),C&&A.forEach(k=>{u[k].swiperLoopMoveDOM=!0,p.append(u[k]),u[k].swiperLoopMoveDOM=!1}),l.recalcSlides(),m.slidesPerView==="auto"?l.updateSlides():v&&(w.length>0&&j||A.length>0&&C)&&l.slides.forEach((k,M)=>{l.grid.updateSlide(M,k,l.slides)}),m.watchSlidesProgress&&l.updateSlidesOffset(),n){if(w.length>0&&j){if(typeof e>"u"){const k=l.slidesGrid[E],R=l.slidesGrid[E+L]-k;a?l.setTranslate(l.translate-R):(l.slideTo(E+Math.ceil(L),0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-R,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-R))}else if(r){const k=v?w.length/m.grid.rows:w.length;l.slideTo(l.activeIndex+k,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(A.length>0&&C)if(typeof e>"u"){const k=l.slidesGrid[E],R=l.slidesGrid[E-P]-k;a?l.setTranslate(l.translate-R):(l.slideTo(E-P,0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-R,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-R))}else{const k=v?A.length/m.grid.rows:A.length;l.slideTo(l.activeIndex-k,0,!1,!0)}}if(l.allowSlidePrev=c,l.allowSlideNext=d,l.controller&&l.controller.control&&!o){const k={slideRealIndex:e,direction:i,setTranslate:r,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(M=>{!M.destroyed&&M.params.loop&&M.loopFix({...k,slideTo:M.params.slidesPerView===m.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...k,slideTo:l.controller.control.params.slidesPerView===m.slidesPerView?n:!1})}l.emit("loopFix")}function Cd(){const t=this,{params:e,slidesEl:n}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const i=[];t.slides.forEach(r=>{const s=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;i[s]=r}),t.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),i.forEach(r=>{n.append(r)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var Md={loopCreate:Ed,loopFix:Td,loopDestroy:Cd};function Od(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Pd(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var kd={setGrabCursor:Od,unsetGrabCursor:Pd};function Id(t,e){e===void 0&&(e=this);function n(i){if(!i||i===Ke()||i===le())return null;i.assignedSlot&&(i=i.assignedSlot);const r=i.closest(t);return!r&&!i.getRootNode?null:r||n(i.getRootNode().host)}return n(e)}function ir(t,e,n){const i=le(),{params:r}=t,s=r.edgeSwipeDetection,o=r.edgeSwipeThreshold;return s&&(n<=o||n>=i.innerWidth-o)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function Rd(t){const e=this,n=Ke();let i=t;i.originalEvent&&(i=i.originalEvent);const r=e.touchEventsData;if(i.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==i.pointerId)return;r.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(r.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){ir(e,i,i.targetTouches[0].pageX);return}const{params:s,touches:o,enabled:a}=e;if(!a||!s.simulateTouch&&i.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=i.target;if(s.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in i&&i.which===3||"button"in i&&i.button>0||r.isTouched&&r.isMoved)return;const u=!!s.noSwipingClass&&s.noSwipingClass!=="",c=i.composedPath?i.composedPath():i.path;u&&i.target&&i.target.shadowRoot&&c&&(l=c[0]);const d=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,p=!!(i.target&&i.target.shadowRoot);if(s.noSwiping&&(p?Id(d,l):l.closest(d))){e.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;o.currentX=i.pageX,o.currentY=i.pageY;const m=o.currentX,h=o.currentY;if(!ir(e,i,m))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=m,o.startY=h,r.touchStartTime=Qt(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let g=!0;l.matches(r.focusableElements)&&(g=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),n.activeElement&&n.activeElement.matches(r.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const y=g&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||y)&&!l.isContentEditable&&i.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function Ld(t){const e=Ke(),n=this,i=n.touchEventsData,{params:r,touches:s,rtlTranslate:o,enabled:a}=n;if(!a||!r.simulateTouch&&t.pointerType==="mouse")return;let l=t;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].filter(C=>C.identifier===i.touchId)[0],!u||u.identifier!==i.touchId)return}else u=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&n.emit("touchMoveOpposite",l);return}const c=u.pageX,d=u.pageY;if(l.preventedByNestedSwiper){s.startX=c,s.startY=d;return}if(!n.allowTouchMove){l.target.matches(i.focusableElements)||(n.allowClick=!1),i.isTouched&&(Object.assign(s,{startX:c,startY:d,currentX:c,currentY:d}),i.touchStartTime=Qt());return}if(r.touchReleaseOnEdges&&!r.loop){if(n.isVertical()){if(d<s.startY&&n.translate<=n.maxTranslate()||d>s.startY&&n.translate>=n.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(c<s.startX&&n.translate<=n.maxTranslate()||c>s.startX&&n.translate>=n.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,n.allowClick=!1;return}i.allowTouchCallbacks&&n.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=c,s.currentY=d;const p=s.currentX-s.startX,m=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(p**2+m**2)<n.params.threshold)return;if(typeof i.isScrolling>"u"){let C;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?i.isScrolling=!1:p*p+m*m>=25&&(C=Math.atan2(Math.abs(m),Math.abs(p))*180/Math.PI,i.isScrolling=n.isHorizontal()?C>r.touchAngle:90-C>r.touchAngle)}if(i.isScrolling&&n.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(i.startMoving=!0),i.isScrolling||l.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;n.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let h=n.isHorizontal()?p:m,g=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(h=Math.abs(h)*(o?1:-1),g=Math.abs(g)*(o?1:-1)),s.diff=h,h*=r.touchRatio,o&&(h=-h,g=-g);const y=n.touchesDirection;n.swipeDirection=h>0?"prev":"next",n.touchesDirection=g>0?"prev":"next";const f=n.params.loop&&!r.cssMode,v=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!i.isMoved){if(f&&v&&n.loopFix({direction:n.swipeDirection}),i.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(C)}i.allowMomentumBounce=!1,r.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let w;if(new Date().getTime(),i.isMoved&&i.allowThresholdMove&&y!==n.touchesDirection&&f&&v&&Math.abs(h)>=1){Object.assign(s,{startX:c,startY:d,currentX:c,currentY:d,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}n.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=h+i.startTranslate;let A=!0,E=r.resistanceRatio;if(r.touchReleaseOnEdges&&(E=0),h>0?(f&&v&&!w&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>n.minTranslate()&&(A=!1,r.resistance&&(i.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+i.startTranslate+h)**E))):h<0&&(f&&v&&!w&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(r.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<n.maxTranslate()&&(A=!1,r.resistance&&(i.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-i.startTranslate-h)**E))),A&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(i.currentTranslate=i.startTranslate),r.threshold>0)if(Math.abs(h)>r.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,i.currentTranslate=i.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{i.currentTranslate=i.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&n.freeMode||r.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(i.currentTranslate),n.setTranslate(i.currentTranslate))}function jd(t){const e=this,n=e.touchEventsData;let i=t;i.originalEvent&&(i=i.originalEvent);let r;if(i.type==="touchend"||i.type==="touchcancel"){if(r=[...i.changedTouches].filter(E=>E.identifier===n.touchId)[0],!r||r.identifier!==n.touchId)return}else{if(n.touchId!==null||i.pointerId!==n.pointerId)return;r=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:a,rtlTranslate:l,slidesGrid:u,enabled:c}=e;if(!c||!o.simulateTouch&&i.pointerType==="mouse")return;if(n.allowTouchCallbacks&&e.emit("touchEnd",i),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const d=Qt(),p=d-n.touchStartTime;if(e.allowClick){const E=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(E&&E[0]||i.target,E),e.emit("tap click",i),p<300&&d-n.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(n.lastClickTime=Qt(),Qn(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let m;if(o.followFinger?m=l?e.translate:-e.translate:m=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:m});return}const h=m>=-e.maxTranslate()&&!e.params.loop;let g=0,y=e.slidesSizesGrid[0];for(let E=0;E<u.length;E+=E<o.slidesPerGroupSkip?1:o.slidesPerGroup){const C=E<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof u[E+C]<"u"?(h||m>=u[E]&&m<u[E+C])&&(g=E,y=u[E+C]-u[E]):(h||m>=u[E])&&(g=E,y=u[u.length-1]-u[u.length-2])}let f=null,v=null;o.rewind&&(e.isBeginning?v=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(f=0));const w=(m-u[g])/y,A=g<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(w>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?f:g+A):e.slideTo(g)),e.swipeDirection==="prev"&&(w>1-o.longSwipesRatio?e.slideTo(g+A):v!==null&&w<0&&Math.abs(w)>o.longSwipesRatio?e.slideTo(v):e.slideTo(g))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(g+A):e.slideTo(g):(e.swipeDirection==="next"&&e.slideTo(f!==null?f:g+A),e.swipeDirection==="prev"&&e.slideTo(v!==null?v:g))}}function rr(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:s}=t,o=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!a?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!o?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=r,t.allowSlideNext=i,t.params.watchOverflow&&s!==t.snapGrid&&t.checkOverflow()}function Nd(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function zd(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:i}=t;if(!i)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let r;const s=t.maxTranslate()-t.minTranslate();s===0?r=0:r=(t.translate-t.minTranslate())/s,r!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function Bd(t){const e=this;Dt(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Dd(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const Rs=(t,e)=>{const n=Ke(),{params:i,el:r,wrapperEl:s,device:o}=t,a=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",u=e;n[l]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:a}),r[l]("touchstart",t.onTouchStart,{passive:!1}),r[l]("pointerdown",t.onTouchStart,{passive:!1}),n[l]("touchmove",t.onTouchMove,{passive:!1,capture:a}),n[l]("pointermove",t.onTouchMove,{passive:!1,capture:a}),n[l]("touchend",t.onTouchEnd,{passive:!0}),n[l]("pointerup",t.onTouchEnd,{passive:!0}),n[l]("pointercancel",t.onTouchEnd,{passive:!0}),n[l]("touchcancel",t.onTouchEnd,{passive:!0}),n[l]("pointerout",t.onTouchEnd,{passive:!0}),n[l]("pointerleave",t.onTouchEnd,{passive:!0}),n[l]("contextmenu",t.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[l]("click",t.onClick,!0),i.cssMode&&s[l]("scroll",t.onScroll),i.updateOnWindowResize?t[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",rr,!0):t[u]("observerUpdate",rr,!0),r[l]("load",t.onLoad,{capture:!0})};function Hd(){const t=this,{params:e}=t;t.onTouchStart=Rd.bind(t),t.onTouchMove=Ld.bind(t),t.onTouchEnd=jd.bind(t),t.onDocumentTouchStart=Dd.bind(t),e.cssMode&&(t.onScroll=zd.bind(t)),t.onClick=Nd.bind(t),t.onLoad=Bd.bind(t),Rs(t,"on")}function Fd(){Rs(this,"off")}var Ud={attachEvents:Hd,detachEvents:Fd};const sr=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function Wd(){const t=this,{realIndex:e,initialized:n,params:i,el:r}=t,s=i.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=t.getBreakpoint(s,t.params.breakpointsBase,t.el);if(!o||t.currentBreakpoint===o)return;const l=(o in s?s[o]:void 0)||t.originalParams,u=sr(t,i),c=sr(t,l),d=t.params.grabCursor,p=l.grabCursor,m=i.enabled;u&&!c?(r.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),t.emitContainerClasses()):!u&&c&&(r.classList.add(`${i.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&i.grid.fill==="column")&&r.classList.add(`${i.containerModifierClass}grid-column`),t.emitContainerClasses()),d&&!p?t.unsetGrabCursor():!d&&p&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(w=>{if(typeof l[w]>"u")return;const A=i[w]&&i[w].enabled,E=l[w]&&l[w].enabled;A&&!E&&t[w].disable(),!A&&E&&t[w].enable()});const h=l.direction&&l.direction!==i.direction,g=i.loop&&(l.slidesPerView!==i.slidesPerView||h),y=i.loop;h&&n&&t.changeDirection(),oe(t.params,l);const f=t.params.enabled,v=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),m&&!f?t.disable():!m&&f&&t.enable(),t.currentBreakpoint=o,t.emit("_beforeBreakpoint",l),n&&(g?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!y&&v?(t.loopCreate(e),t.updateSlides()):y&&!v&&t.loopDestroy()),t.emit("breakpoint",l)}function Vd(t,e,n){if(e===void 0&&(e="window"),!t||e==="container"&&!n)return;let i=!1;const r=le(),s=e==="window"?r.innerHeight:n.clientHeight,o=Object.keys(t).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:s*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:u}=o[a];e==="window"?r.matchMedia(`(min-width: ${u}px)`).matches&&(i=l):u<=n.clientWidth&&(i=l)}return i||"max"}var Gd={setBreakpoint:Wd,getBreakpoint:Vd};function Jd(t,e){const n=[];return t.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(r=>{i[r]&&n.push(e+r)}):typeof i=="string"&&n.push(e+i)}),n}function qd(){const t=this,{classNames:e,params:n,rtl:i,el:r,device:s}=t,o=Jd(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...o),r.classList.add(...e),t.emitContainerClasses()}function Qd(){const t=this,{el:e,classNames:n}=t;e.classList.remove(...n),t.emitContainerClasses()}var Xd={addClasses:qd,removeClasses:Qd};function Yd(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:i}=n;if(i){const r=t.slides.length-1,s=t.slidesGrid[r]+t.slidesSizesGrid[r]+i*2;t.isLocked=t.size>s}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var Kd={checkOverflow:Yd},Kn={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Zd(t,e){return function(i){i===void 0&&(i={});const r=Object.keys(i)[0],s=i[r];if(typeof s!="object"||s===null){oe(e,i);return}if(t[r]===!0&&(t[r]={enabled:!0}),r==="navigation"&&t[r]&&t[r].enabled&&!t[r].prevEl&&!t[r].nextEl&&(t[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&t[r]&&t[r].enabled&&!t[r].el&&(t[r].auto=!0),!(r in t&&"enabled"in s)){oe(e,i);return}typeof t[r]=="object"&&!("enabled"in t[r])&&(t[r].enabled=!0),t[r]||(t[r]={enabled:!1}),oe(e,i)}}const Pn={eventsEmitter:Xc,update:sd,translate:ud,transition:md,slide:Ad,loop:Md,grabCursor:kd,events:Ud,breakpoints:Gd,checkOverflow:Kd,classes:Xd},kn={};let bi=class Me{constructor(){let e,n;for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?n=r[0]:[e,n]=r,n||(n={}),n=oe({},n),e&&!n.el&&(n.el=e);const o=Ke();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const c=[];return o.querySelectorAll(n.el).forEach(d=>{const p=oe({},n,{el:d});c.push(new Me(p))}),c}const a=this;a.__swiper__=!0,a.support=Ps(),a.device=ks({userAgent:n.userAgent}),a.browser=Jc(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const l={};a.modules.forEach(c=>{c({params:n,swiper:a,extendParams:Zd(n,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const u=oe({},Kn,l);return a.params=oe({},u,kn,n),a.originalParams=oe({},a.params),a.passedParams=oe({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(c=>{a.on(c,a.params.on[c])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:n,params:i}=this,r=ye(n,`.${i.slideClass}, swiper-slide`),s=Kt(r[0]);return Kt(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:n,params:i}=e;e.slides=ye(n,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const i=this;e=Math.min(Math.max(e,0),1);const r=i.minTranslate(),o=(i.maxTranslate()-r)*e+r;i.translateTo(o,typeof n>"u"?0:n),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(i=>{const r=e.getSlideClasses(i);n.push({slideEl:i,classNames:r}),e.emit("_slideClass",i,r)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e,n){e===void 0&&(e="current"),n===void 0&&(n=!1);const i=this,{params:r,slides:s,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:u}=i;let c=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let d=s[u]?Math.ceil(s[u].swiperSlideSize):0,p;for(let m=u+1;m<s.length;m+=1)s[m]&&!p&&(d+=Math.ceil(s[m].swiperSlideSize),c+=1,d>l&&(p=!0));for(let m=u-1;m>=0;m-=1)s[m]&&!p&&(d+=s[m].swiperSlideSize,c+=1,d>l&&(p=!0))}else if(e==="current")for(let d=u+1;d<s.length;d+=1)(n?o[d]+a[d]-o[u]<l:o[d]-o[u]<l)&&(c+=1);else for(let d=u-1;d>=0;d-=1)o[u]-o[d]<l&&(c+=1);return c}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Dt(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)r(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const o=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(o.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||r()}i.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n){n===void 0&&(n=!0);const i=this,r=i.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${r}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),i.emit("changeDirection"),n&&i.update()),i}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let i=e||n.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=n,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const r=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(r()):ye(i,r())[0])();return!o&&n.params.createElements&&(o=Yt("div",n.params.wrapperClass),i.append(o),ye(i,`.${n.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(n,{el:i,wrapperEl:o,slidesEl:n.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:o,hostEl:n.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||Le(i,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||Le(i,"direction")==="rtl"),wrongRTL:Le(o,"display")==="-webkit-box"}),!0}init(e){const n=this;if(n.initialized||n.mount(e)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const r=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&r.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(s=>{s.complete?Dt(n,s):s.addEventListener("load",o=>{Dt(n,o.target)})}),Yn(n),n.initialized=!0,Yn(n),n.emit("init"),n.emit("afterInit"),n}destroy(e,n){e===void 0&&(e=!0),n===void 0&&(n=!0);const i=this,{params:r,el:s,wrapperEl:o,slides:a}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),r.loop&&i.loopDestroy(),n&&(i.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el.swiper=null,zc(i)),i.destroyed=!0),null}static extendDefaults(e){oe(kn,e)}static get extendedDefaults(){return kn}static get defaults(){return Kn}static installModule(e){Me.prototype.__modules__||(Me.prototype.__modules__=[]);const n=Me.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>Me.installModule(n)),Me):(Me.installModule(e),Me)}};Object.keys(Pn).forEach(t=>{Object.keys(Pn[t]).forEach(e=>{bi.prototype[e]=Pn[t][e]})});bi.use([qc,Qc]);const Ls=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function He(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function We(t,e){const n=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>n.indexOf(i)<0).forEach(i=>{typeof t[i]>"u"?t[i]=e[i]:He(e[i])&&He(t[i])&&Object.keys(e[i]).length>0?e[i].__swiper__?t[i]=e[i]:We(t[i],e[i]):t[i]=e[i]})}function js(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function Ns(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function zs(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function Bs(t){t===void 0&&(t="");const e=t.split(" ").map(i=>i.trim()).filter(i=>!!i),n=[];return e.forEach(i=>{n.indexOf(i)<0&&n.push(i)}),n.join(" ")}function _d(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function $d(t){let{swiper:e,slides:n,passedParams:i,changedParams:r,nextEl:s,prevEl:o,scrollbarEl:a,paginationEl:l}=t;const u=r.filter(P=>P!=="children"&&P!=="direction"&&P!=="wrapperClass"),{params:c,pagination:d,navigation:p,scrollbar:m,virtual:h,thumbs:g}=e;let y,f,v,w,A,E,C,j;r.includes("thumbs")&&i.thumbs&&i.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(y=!0),r.includes("controller")&&i.controller&&i.controller.control&&c.controller&&!c.controller.control&&(f=!0),r.includes("pagination")&&i.pagination&&(i.pagination.el||l)&&(c.pagination||c.pagination===!1)&&d&&!d.el&&(v=!0),r.includes("scrollbar")&&i.scrollbar&&(i.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&m&&!m.el&&(w=!0),r.includes("navigation")&&i.navigation&&(i.navigation.prevEl||o)&&(i.navigation.nextEl||s)&&(c.navigation||c.navigation===!1)&&p&&!p.prevEl&&!p.nextEl&&(A=!0);const L=P=>{e[P]&&(e[P].destroy(),P==="navigation"?(e.isElement&&(e[P].prevEl.remove(),e[P].nextEl.remove()),c[P].prevEl=void 0,c[P].nextEl=void 0,e[P].prevEl=void 0,e[P].nextEl=void 0):(e.isElement&&e[P].el.remove(),c[P].el=void 0,e[P].el=void 0))};r.includes("loop")&&e.isElement&&(c.loop&&!i.loop?E=!0:!c.loop&&i.loop?C=!0:j=!0),u.forEach(P=>{if(He(c[P])&&He(i[P]))Object.assign(c[P],i[P]),(P==="navigation"||P==="pagination"||P==="scrollbar")&&"enabled"in i[P]&&!i[P].enabled&&L(P);else{const T=i[P];(T===!0||T===!1)&&(P==="navigation"||P==="pagination"||P==="scrollbar")?T===!1&&L(P):c[P]=i[P]}}),u.includes("controller")&&!f&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),r.includes("children")&&n&&h&&c.virtual.enabled?(h.slides=n,h.update(!0)):r.includes("virtual")&&h&&c.virtual.enabled&&(n&&(h.slides=n),h.update(!0)),r.includes("children")&&n&&c.loop&&(j=!0),y&&g.init()&&g.update(!0),f&&(e.controller.control=c.controller.control),v&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(c.pagination.el=l),d.init(),d.render(),d.update()),w&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(c.scrollbar.el=a),m.init(),m.updateSize(),m.setTranslate()),A&&(e.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),s.innerHTML=e.hostEl.constructor.nextButtonSvg,s.part.add("button-next"),e.el.appendChild(s)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=e.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),e.el.appendChild(o))),s&&(c.navigation.nextEl=s),o&&(c.navigation.prevEl=o),p.init(),p.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=i.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=i.allowSlidePrev),r.includes("direction")&&e.changeDirection(i.direction,!1),(E||j)&&e.loopDestroy(),(C||j)&&e.loopCreate(),e.update()}function eu(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const n={on:{}},i={},r={};We(n,Kn),n._emitClasses=!0,n.init=!1;const s={},o=Ls.map(l=>l.replace(/_/,"")),a=Object.assign({},t);return Object.keys(a).forEach(l=>{typeof t[l]>"u"||(o.indexOf(l)>=0?He(t[l])?(n[l]={},r[l]={},We(n[l],t[l]),We(r[l],t[l])):(n[l]=t[l],r[l]=t[l]):l.search(/on[A-Z]/)===0&&typeof t[l]=="function"?e?i[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:s[l]=t[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:r,rest:s,events:i}}function tu(t,e){let{el:n,nextEl:i,prevEl:r,paginationEl:s,scrollbarEl:o,swiper:a}=t;js(e)&&i&&r&&(a.params.navigation.nextEl=i,a.originalParams.navigation.nextEl=i,a.params.navigation.prevEl=r,a.originalParams.navigation.prevEl=r),Ns(e)&&s&&(a.params.pagination.el=s,a.originalParams.pagination.el=s),zs(e)&&o&&(a.params.scrollbar.el=o,a.originalParams.scrollbar.el=o),a.init(n)}function nu(t,e,n,i,r){const s=[];if(!e)return s;const o=l=>{s.indexOf(l)<0&&s.push(l)};if(n&&i){const l=i.map(r),u=n.map(r);l.join("")!==u.join("")&&o("children"),i.length!==n.length&&o("children")}return Ls.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in t&&l in e)if(He(t[l])&&He(e[l])){const u=Object.keys(t[l]),c=Object.keys(e[l]);u.length!==c.length?o(l):(u.forEach(d=>{t[l][d]!==e[l][d]&&o(l)}),c.forEach(d=>{t[l][d]!==e[l][d]&&o(l)}))}else t[l]!==e[l]&&o(l)}),s}const iu=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function Zt(){return Zt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Zt.apply(this,arguments)}function Ds(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function Hs(t){const e=[];return $.Children.toArray(t).forEach(n=>{Ds(n)?e.push(n):n.props&&n.props.children&&Hs(n.props.children).forEach(i=>e.push(i))}),e}function ru(t){const e=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return $.Children.toArray(t).forEach(i=>{if(Ds(i))e.push(i);else if(i.props&&i.props.slot&&n[i.props.slot])n[i.props.slot].push(i);else if(i.props&&i.props.children){const r=Hs(i.props.children);r.length>0?r.forEach(s=>e.push(s)):n["container-end"].push(i)}else n["container-end"].push(i)}),{slides:e,slots:n}}function su(t,e,n){if(!n)return null;const i=c=>{let d=c;return c<0?d=e.length+c:d>=e.length&&(d=d-e.length),d},r=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:s,to:o}=n,a=t.params.loop?-e.length:0,l=t.params.loop?e.length*2:e.length,u=[];for(let c=a;c<l;c+=1)c>=s&&c<=o&&u.push(e[i(c)]);return u.map((c,d)=>$.cloneElement(c,{swiper:t,style:r,key:c.props.virtualIndex||c.key||`slide-${d}`}))}function rt(t,e){return typeof window>"u"?O.useEffect(t,e):O.useLayoutEffect(t,e)}const or=O.createContext(null),ou=O.createContext(null),ln=O.forwardRef(function(t,e){let{className:n,tag:i="div",wrapperTag:r="div",children:s,onSwiper:o,...a}=t===void 0?{}:t,l=!1;const[u,c]=O.useState("swiper"),[d,p]=O.useState(null),[m,h]=O.useState(!1),g=O.useRef(!1),y=O.useRef(null),f=O.useRef(null),v=O.useRef(null),w=O.useRef(null),A=O.useRef(null),E=O.useRef(null),C=O.useRef(null),j=O.useRef(null),{params:L,passedParams:P,rest:T,events:N}=eu(a),{slides:I,slots:k}=ru(s),M=()=>{h(!m)};Object.assign(L.on,{_containerClasses(D,J){c(J)}});const R=()=>{Object.assign(L.on,N),l=!0;const D={...L};if(delete D.wrapperClass,f.current=new bi(D),f.current.virtual&&f.current.params.virtual.enabled){f.current.virtual.slides=I;const J={cache:!1,slides:I,renderExternal:p,renderExternalUpdate:!1};We(f.current.params.virtual,J),We(f.current.originalParams.virtual,J)}};y.current||R(),f.current&&f.current.on("_beforeBreakpoint",M);const F=()=>{l||!N||!f.current||Object.keys(N).forEach(D=>{f.current.on(D,N[D])})},x=()=>{!N||!f.current||Object.keys(N).forEach(D=>{f.current.off(D,N[D])})};O.useEffect(()=>()=>{f.current&&f.current.off("_beforeBreakpoint",M)}),O.useEffect(()=>{!g.current&&f.current&&(f.current.emitSlidesClasses(),g.current=!0)}),rt(()=>{if(e&&(e.current=y.current),!!y.current)return f.current.destroyed&&R(),tu({el:y.current,nextEl:A.current,prevEl:E.current,paginationEl:C.current,scrollbarEl:j.current,swiper:f.current},L),o&&!f.current.destroyed&&o(f.current),()=>{f.current&&!f.current.destroyed&&f.current.destroy(!0,!1)}},[]),rt(()=>{F();const D=nu(P,v.current,I,w.current,J=>J.key);return v.current=P,w.current=I,D.length&&f.current&&!f.current.destroyed&&$d({swiper:f.current,slides:I,passedParams:P,changedParams:D,nextEl:A.current,prevEl:E.current,scrollbarEl:j.current,paginationEl:C.current}),()=>{x()}}),rt(()=>{iu(f.current)},[d]);function z(){return L.virtual?su(f.current,I,d):I.map((D,J)=>$.cloneElement(D,{swiper:f.current,swiperSlideIndex:J}))}return $.createElement(i,Zt({ref:y,className:Bs(`${u}${n?` ${n}`:""}`)},T),$.createElement(ou.Provider,{value:f.current},k["container-start"],$.createElement(r,{className:_d(L.wrapperClass)},k["wrapper-start"],z(),k["wrapper-end"]),js(L)&&$.createElement($.Fragment,null,$.createElement("div",{ref:E,className:"swiper-button-prev"}),$.createElement("div",{ref:A,className:"swiper-button-next"})),zs(L)&&$.createElement("div",{ref:j,className:"swiper-scrollbar"}),Ns(L)&&$.createElement("div",{ref:C,className:"swiper-pagination"}),k["container-end"]))});ln.displayName="Swiper";const we=O.forwardRef(function(t,e){let{tag:n="div",children:i,className:r="",swiper:s,zoom:o,lazy:a,virtualIndex:l,swiperSlideIndex:u,...c}=t===void 0?{}:t;const d=O.useRef(null),[p,m]=O.useState("swiper-slide"),[h,g]=O.useState(!1);function y(A,E,C){E===d.current&&m(C)}rt(()=>{if(typeof u<"u"&&(d.current.swiperSlideIndex=u),e&&(e.current=d.current),!(!d.current||!s)){if(s.destroyed){p!=="swiper-slide"&&m("swiper-slide");return}return s.on("_slideClass",y),()=>{s&&s.off("_slideClass",y)}}}),rt(()=>{s&&d.current&&!s.destroyed&&m(s.getSlideClasses(d.current))},[s]);const f={isActive:p.indexOf("swiper-slide-active")>=0,isVisible:p.indexOf("swiper-slide-visible")>=0,isPrev:p.indexOf("swiper-slide-prev")>=0,isNext:p.indexOf("swiper-slide-next")>=0},v=()=>typeof i=="function"?i(f):i,w=()=>{g(!0)};return $.createElement(n,Zt({ref:d,className:Bs(`${p}${r?` ${r}`:""}`),"data-swiper-slide-index":l,onLoad:w},c),o&&$.createElement(or.Provider,{value:f},$.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},v(),a&&!h&&$.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&$.createElement(or.Provider,{value:f},v(),a&&!h&&$.createElement("div",{className:"swiper-lazy-preloader"})))});we.displayName="SwiperSlide";function au(t,e,n,i){return t.params.createElements&&Object.keys(i).forEach(r=>{if(!n[r]&&n.auto===!0){let s=ye(t.el,`.${i[r]}`)[0];s||(s=Yt("div",i[r]),s.className=i[r],t.el.append(s)),n[r]=s,e[r]=s}}),n}function et(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Fs(t){let{swiper:e,extendParams:n,on:i,emit:r}=t;const s="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function u(f,v){const{bulletActiveClass:w}=e.params.pagination;f&&(f=f[`${v==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${w}-${v}`),f=f[`${v==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${w}-${v}-${v}`)))}function c(f){const v=f.target.closest(et(e.params.pagination.bulletClass));if(!v)return;f.preventDefault();const w=Kt(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===w)return;e.slideToLoop(w)}else e.slideTo(w)}function d(){const f=e.rtl,v=e.params.pagination;if(l())return;let w=e.pagination.el;w=Ce(w);let A,E;const C=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,j=e.params.loop?Math.ceil(C/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,A=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(A=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,A=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const L=e.pagination.bullets;let P,T,N;if(v.dynamicBullets&&(o=Xn(L[0],e.isHorizontal()?"width":"height",!0),w.forEach(I=>{I.style[e.isHorizontal()?"width":"height"]=`${o*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&E!==void 0&&(a+=A-(E||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),P=Math.max(A-a,0),T=P+(Math.min(L.length,v.dynamicMainBullets)-1),N=(T+P)/2),L.forEach(I=>{const k=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(M=>`${v.bulletActiveClass}${M}`)].map(M=>typeof M=="string"&&M.includes(" ")?M.split(" "):M).flat();I.classList.remove(...k)}),w.length>1)L.forEach(I=>{const k=Kt(I);k===A?I.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&I.setAttribute("part","bullet"),v.dynamicBullets&&(k>=P&&k<=T&&I.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),k===P&&u(I,"prev"),k===T&&u(I,"next"))});else{const I=L[A];if(I&&I.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&L.forEach((k,M)=>{k.setAttribute("part",M===A?"bullet-active":"bullet")}),v.dynamicBullets){const k=L[P],M=L[T];for(let R=P;R<=T;R+=1)L[R]&&L[R].classList.add(...`${v.bulletActiveClass}-main`.split(" "));u(k,"prev"),u(M,"next")}}if(v.dynamicBullets){const I=Math.min(L.length,v.dynamicMainBullets+4),k=(o*I-o)/2-N*o,M=f?"right":"left";L.forEach(R=>{R.style[e.isHorizontal()?M:"top"]=`${k}px`})}}w.forEach((L,P)=>{if(v.type==="fraction"&&(L.querySelectorAll(et(v.currentClass)).forEach(T=>{T.textContent=v.formatFractionCurrent(A+1)}),L.querySelectorAll(et(v.totalClass)).forEach(T=>{T.textContent=v.formatFractionTotal(j)})),v.type==="progressbar"){let T;v.progressbarOpposite?T=e.isHorizontal()?"vertical":"horizontal":T=e.isHorizontal()?"horizontal":"vertical";const N=(A+1)/j;let I=1,k=1;T==="horizontal"?I=N:k=N,L.querySelectorAll(et(v.progressbarFillClass)).forEach(M=>{M.style.transform=`translate3d(0,0,0) scaleX(${I}) scaleY(${k})`,M.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(L.innerHTML=v.renderCustom(e,A+1,j),P===0&&r("paginationRender",L)):(P===0&&r("paginationRender",L),r("paginationUpdate",L)),e.params.watchOverflow&&e.enabled&&L.classList[e.isLocked?"add":"remove"](v.lockClass)})}function p(){const f=e.params.pagination;if(l())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let w=e.pagination.el;w=Ce(w);let A="";if(f.type==="bullets"){let E=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&E>v&&(E=v);for(let C=0;C<E;C+=1)f.renderBullet?A+=f.renderBullet.call(e,C,f.bulletClass):A+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?A=f.renderFraction.call(e,f.currentClass,f.totalClass):A=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?A=f.renderProgressbar.call(e,f.progressbarFillClass):A=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],w.forEach(E=>{f.type!=="custom"&&(E.innerHTML=A||""),f.type==="bullets"&&e.pagination.bullets.push(...E.querySelectorAll(et(f.bulletClass)))}),f.type!=="custom"&&r("paginationRender",w[0])}function m(){e.params.pagination=au(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let v;typeof f.el=="string"&&e.isElement&&(v=e.el.querySelector(f.el)),!v&&typeof f.el=="string"&&(v=[...document.querySelectorAll(f.el)]),v||(v=f.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(f.el)],v.length>1&&(v=v.filter(w=>Os(w,".swiper")[0]===e.el)[0])),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=Ce(v),v.forEach(w=>{f.type==="bullets"&&f.clickable&&w.classList.add(...(f.clickableClass||"").split(" ")),w.classList.add(f.modifierClass+f.type),w.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(w.classList.add(`${f.modifierClass}${f.type}-dynamic`),a=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&w.classList.add(f.progressbarOppositeClass),f.clickable&&w.addEventListener("click",c),e.enabled||w.classList.add(f.lockClass)}))}function h(){const f=e.params.pagination;if(l())return;let v=e.pagination.el;v&&(v=Ce(v),v.forEach(w=>{w.classList.remove(f.hiddenClass),w.classList.remove(f.modifierClass+f.type),w.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(w.classList.remove(...(f.clickableClass||"").split(" ")),w.removeEventListener("click",c))})),e.pagination.bullets&&e.pagination.bullets.forEach(w=>w.classList.remove(...f.bulletActiveClass.split(" ")))}i("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:v}=e.pagination;v=Ce(v),v.forEach(w=>{w.classList.remove(f.horizontalClass,f.verticalClass),w.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),i("init",()=>{e.params.pagination.enabled===!1?y():(m(),p(),d())}),i("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),i("snapIndexChange",()=>{d()}),i("snapGridLengthChange",()=>{p(),d()}),i("destroy",()=>{h()}),i("enable disable",()=>{let{el:f}=e.pagination;f&&(f=Ce(f),f.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),i("lock unlock",()=>{d()}),i("click",(f,v)=>{const w=v.target,A=Ce(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&A&&A.length>0&&!w.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&w===e.navigation.nextEl||e.navigation.prevEl&&w===e.navigation.prevEl))return;const E=A[0].classList.contains(e.params.pagination.hiddenClass);r(E===!0?"paginationShow":"paginationHide"),A.forEach(C=>C.classList.toggle(e.params.pagination.hiddenClass))}});const g=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=Ce(f),f.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),m(),p(),d()},y=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=Ce(f),f.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:g,disable:y,render:p,update:d,init:m,destroy:h})}function Zn(){return Zn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Zn.apply(this,arguments)}var lu=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,cu=Fr(function(t){return lu.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function du(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function uu(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var fu=function(){function t(n){var i=this;this._insertTag=function(r){var s;i.tags.length===0?i.insertionPoint?s=i.insertionPoint.nextSibling:i.prepend?s=i.container.firstChild:s=i.before:s=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,s),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(uu(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var s=du(r);try{s.insertRule(i,s.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},t}(),ne="-ms-",_t="-moz-",U="-webkit-",Us="comm",vi="rule",wi="decl",pu="@import",Ws="@keyframes",hu="@layer",mu=Math.abs,cn=String.fromCharCode,gu=Object.assign;function bu(t,e){return te(t,0)^45?(((e<<2^te(t,0))<<2^te(t,1))<<2^te(t,2))<<2^te(t,3):0}function Vs(t){return t.trim()}function vu(t,e){return(t=e.exec(t))?t[0]:t}function W(t,e,n){return t.replace(e,n)}function _n(t,e){return t.indexOf(e)}function te(t,e){return t.charCodeAt(e)|0}function lt(t,e,n){return t.slice(e,n)}function ge(t){return t.length}function xi(t){return t.length}function Pt(t,e){return e.push(t),t}function wu(t,e){return t.map(e).join("")}var dn=1,qe=1,Gs=0,se=0,Z=0,Ze="";function un(t,e,n,i,r,s,o){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:dn,column:qe,length:o,return:""}}function tt(t,e){return gu(un("",null,null,"",null,null,0),t,{length:-t.length},e)}function xu(){return Z}function yu(){return Z=se>0?te(Ze,--se):0,qe--,Z===10&&(qe=1,dn--),Z}function ae(){return Z=se<Gs?te(Ze,se++):0,qe++,Z===10&&(qe=1,dn++),Z}function Se(){return te(Ze,se)}function Ht(){return se}function gt(t,e){return lt(Ze,t,e)}function ct(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Js(t){return dn=qe=1,Gs=ge(Ze=t),se=0,[]}function qs(t){return Ze="",t}function Ft(t){return Vs(gt(se-1,$n(t===91?t+2:t===40?t+1:t)))}function Su(t){for(;(Z=Se())&&Z<33;)ae();return ct(t)>2||ct(Z)>3?"":" "}function Au(t,e){for(;--e&&ae()&&!(Z<48||Z>102||Z>57&&Z<65||Z>70&&Z<97););return gt(t,Ht()+(e<6&&Se()==32&&ae()==32))}function $n(t){for(;ae();)switch(Z){case t:return se;case 34:case 39:t!==34&&t!==39&&$n(Z);break;case 40:t===41&&$n(t);break;case 92:ae();break}return se}function Eu(t,e){for(;ae()&&t+Z!==47+10;)if(t+Z===42+42&&Se()===47)break;return"/*"+gt(e,se-1)+"*"+cn(t===47?t:ae())}function Tu(t){for(;!ct(Se());)ae();return gt(t,se)}function Cu(t){return qs(Ut("",null,null,null,[""],t=Js(t),0,[0],t))}function Ut(t,e,n,i,r,s,o,a,l){for(var u=0,c=0,d=o,p=0,m=0,h=0,g=1,y=1,f=1,v=0,w="",A=r,E=s,C=i,j=w;y;)switch(h=v,v=ae()){case 40:if(h!=108&&te(j,d-1)==58){_n(j+=W(Ft(v),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:j+=Ft(v);break;case 9:case 10:case 13:case 32:j+=Su(h);break;case 92:j+=Au(Ht()-1,7);continue;case 47:switch(Se()){case 42:case 47:Pt(Mu(Eu(ae(),Ht()),e,n),l);break;default:j+="/"}break;case 123*g:a[u++]=ge(j)*f;case 125*g:case 59:case 0:switch(v){case 0:case 125:y=0;case 59+c:f==-1&&(j=W(j,/\f/g,"")),m>0&&ge(j)-d&&Pt(m>32?lr(j+";",i,n,d-1):lr(W(j," ","")+";",i,n,d-2),l);break;case 59:j+=";";default:if(Pt(C=ar(j,e,n,u,c,r,a,w,A=[],E=[],d),s),v===123)if(c===0)Ut(j,e,C,C,A,s,d,a,E);else switch(p===99&&te(j,3)===110?100:p){case 100:case 108:case 109:case 115:Ut(t,C,C,i&&Pt(ar(t,C,C,0,0,r,a,w,r,A=[],d),E),r,E,d,a,i?A:E);break;default:Ut(j,C,C,C,[""],E,0,a,E)}}u=c=m=0,g=f=1,w=j="",d=o;break;case 58:d=1+ge(j),m=h;default:if(g<1){if(v==123)--g;else if(v==125&&g++==0&&yu()==125)continue}switch(j+=cn(v),v*g){case 38:f=c>0?1:(j+="\f",-1);break;case 44:a[u++]=(ge(j)-1)*f,f=1;break;case 64:Se()===45&&(j+=Ft(ae())),p=Se(),c=d=ge(w=j+=Tu(Ht())),v++;break;case 45:h===45&&ge(j)==2&&(g=0)}}return s}function ar(t,e,n,i,r,s,o,a,l,u,c){for(var d=r-1,p=r===0?s:[""],m=xi(p),h=0,g=0,y=0;h<i;++h)for(var f=0,v=lt(t,d+1,d=mu(g=o[h])),w=t;f<m;++f)(w=Vs(g>0?p[f]+" "+v:W(v,/&\f/g,p[f])))&&(l[y++]=w);return un(t,e,n,r===0?vi:a,l,u,c)}function Mu(t,e,n){return un(t,e,n,Us,cn(xu()),lt(t,2,-2),0)}function lr(t,e,n,i){return un(t,e,n,wi,lt(t,0,i),lt(t,i+1,-1),i)}function Ve(t,e){for(var n="",i=xi(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function Ou(t,e,n,i){switch(t.type){case hu:if(t.children.length)break;case pu:case wi:return t.return=t.return||t.value;case Us:return"";case Ws:return t.return=t.value+"{"+Ve(t.children,i)+"}";case vi:t.value=t.props.join(",")}return ge(n=Ve(t.children,i))?t.return=t.value+"{"+n+"}":""}function Pu(t){var e=xi(t);return function(n,i,r,s){for(var o="",a=0;a<e;a++)o+=t[a](n,i,r,s)||"";return o}}function ku(t){return function(e){e.root||(e=e.return)&&t(e)}}var Iu=function(e,n,i){for(var r=0,s=0;r=s,s=Se(),r===38&&s===12&&(n[i]=1),!ct(s);)ae();return gt(e,se)},Ru=function(e,n){var i=-1,r=44;do switch(ct(r)){case 0:r===38&&Se()===12&&(n[i]=1),e[i]+=Iu(se-1,n,i);break;case 2:e[i]+=Ft(r);break;case 4:if(r===44){e[++i]=Se()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=cn(r)}while(r=ae());return e},Lu=function(e,n){return qs(Ru(Js(e),n))},cr=new WeakMap,ju=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!cr.get(i))&&!r){cr.set(e,!0);for(var s=[],o=Lu(n,s),a=i.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},Nu=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function Qs(t,e){switch(bu(t,e)){case 5103:return U+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return U+t+_t+t+ne+t+t;case 6828:case 4268:return U+t+ne+t+t;case 6165:return U+t+ne+"flex-"+t+t;case 5187:return U+t+W(t,/(\w+).+(:[^]+)/,U+"box-$1$2"+ne+"flex-$1$2")+t;case 5443:return U+t+ne+"flex-item-"+W(t,/flex-|-self/,"")+t;case 4675:return U+t+ne+"flex-line-pack"+W(t,/align-content|flex-|-self/,"")+t;case 5548:return U+t+ne+W(t,"shrink","negative")+t;case 5292:return U+t+ne+W(t,"basis","preferred-size")+t;case 6060:return U+"box-"+W(t,"-grow","")+U+t+ne+W(t,"grow","positive")+t;case 4554:return U+W(t,/([^-])(transform)/g,"$1"+U+"$2")+t;case 6187:return W(W(W(t,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),t,"")+t;case 5495:case 3959:return W(t,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return W(W(t,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+t+t;case 4095:case 3583:case 4068:case 2532:return W(t,/(.+)-inline(.+)/,U+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ge(t)-1-e>6)switch(te(t,e+1)){case 109:if(te(t,e+4)!==45)break;case 102:return W(t,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+_t+(te(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~_n(t,"stretch")?Qs(W(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(te(t,e+1)!==115)break;case 6444:switch(te(t,ge(t)-3-(~_n(t,"!important")&&10))){case 107:return W(t,":",":"+U)+t;case 101:return W(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+U+(te(t,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+ne+"$2box$3")+t}break;case 5936:switch(te(t,e+11)){case 114:return U+t+ne+W(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return U+t+ne+W(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return U+t+ne+W(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return U+t+ne+t+t}return t}var zu=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case wi:e.return=Qs(e.value,e.length);break;case Ws:return Ve([tt(e,{value:W(e.value,"@","@"+U)})],r);case vi:if(e.length)return wu(e.props,function(s){switch(vu(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ve([tt(e,{props:[W(s,/:(read-\w+)/,":"+_t+"$1")]})],r);case"::placeholder":return Ve([tt(e,{props:[W(s,/:(plac\w+)/,":"+U+"input-$1")]}),tt(e,{props:[W(s,/:(plac\w+)/,":"+_t+"$1")]}),tt(e,{props:[W(s,/:(plac\w+)/,ne+"input-$1")]})],r)}return""})}},Bu=[zu],Du=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(g){var y=g.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var r=e.stylisPlugins||Bu,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var y=g.getAttribute("data-emotion").split(" "),f=1;f<y.length;f++)s[y[f]]=!0;a.push(g)});var l,u=[ju,Nu];{var c,d=[Ou,ku(function(g){c.insert(g)})],p=Pu(u.concat(r,d)),m=function(y){return Ve(Cu(y),p)};l=function(y,f,v,w){c=v,m(y?y+"{"+f.styles+"}":f.styles),w&&(h.inserted[f.name]=!0)}}var h={key:n,sheet:new fu({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return h.sheet.hydrate(a),h},Hu=!0;function Fu(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):i+=r+" "}),i}var Xs=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||Hu===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},Uu=function(e,n,i){Xs(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+r:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function Wu(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Vu={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gu=/[A-Z]|^ms/g,Ju=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ys=function(e){return e.charCodeAt(1)===45},dr=function(e){return e!=null&&typeof e!="boolean"},In=Fr(function(t){return Ys(t)?t:t.replace(Gu,"-$&").toLowerCase()}),ur=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(Ju,function(i,r,s){return be={name:r,styles:s,next:be},r})}return Vu[e]!==1&&!Ys(e)&&typeof n=="number"&&n!==0?n+"px":n};function dt(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return be={name:n.name,styles:n.styles,next:be},n.name;if(n.styles!==void 0){var i=n.next;if(i!==void 0)for(;i!==void 0;)be={name:i.name,styles:i.styles,next:be},i=i.next;var r=n.styles+";";return r}return qu(t,e,n)}case"function":{if(t!==void 0){var s=be,o=n(t);return be=s,dt(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function qu(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=dt(t,e,n[r])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?i+=s+"{"+e[o]+"}":dr(o)&&(i+=In(s)+":"+ur(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)dr(o[a])&&(i+=In(s)+":"+ur(s,o[a])+";");else{var l=dt(t,e,o);switch(s){case"animation":case"animationName":{i+=In(s)+":"+l+";";break}default:i+=s+"{"+l+"}"}}}return i}var fr=/label:\s*([^\s;\n{]+)\s*(;|$)/g,be,Qu=function(e,n,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,s="";be=void 0;var o=e[0];o==null||o.raw===void 0?(r=!1,s+=dt(i,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=dt(i,n,e[a]),r&&(s+=o[a]);fr.lastIndex=0;for(var l="",u;(u=fr.exec(s))!==null;)l+="-"+u[1];var c=Wu(s)+l;return{name:c,styles:s,next:be}},Xu=function(e){return e()},Yu=Ii["useInsertionEffect"]?Ii["useInsertionEffect"]:!1,Ku=Yu||Xu,Ks=O.createContext(typeof HTMLElement<"u"?Du({key:"css"}):null);Ks.Provider;var Zu=function(e){return O.forwardRef(function(n,i){var r=O.useContext(Ks);return e(n,r,i)})},_u=O.createContext({}),$u=cu,ef=function(e){return e!=="theme"},pr=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?$u:ef},hr=function(e,n,i){var r;if(n){var s=n.shouldForwardProp;r=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof r!="function"&&i&&(r=e.__emotion_forwardProp),r},tf=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return Xs(n,i,r),Ku(function(){return Uu(n,i,r)}),null},nf=function t(e,n){var i=e.__emotion_real===e,r=i&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=hr(e,n,i),l=a||pr(r),u=!l("as");return function(){var c=arguments,d=i&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&d.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var p=c.length,m=1;m<p;m++)d.push(c[m],c[0][m])}var h=Zu(function(g,y,f){var v=u&&g.as||r,w="",A=[],E=g;if(g.theme==null){E={};for(var C in g)E[C]=g[C];E.theme=O.useContext(_u)}typeof g.className=="string"?w=Fu(y.registered,A,g.className):g.className!=null&&(w=g.className+" ");var j=Qu(d.concat(A),y.registered,E);w+=y.key+"-"+j.name,o!==void 0&&(w+=" "+o);var L=u&&a===void 0?pr(v):l,P={};for(var T in g)u&&T==="as"||L(T)&&(P[T]=g[T]);return P.className=w,P.ref=f,O.createElement(O.Fragment,null,O.createElement(tf,{cache:y,serialized:j,isStringTag:typeof v=="string"}),O.createElement(v,P))});return h.displayName=s!==void 0?s:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",h.defaultProps=e.defaultProps,h.__emotion_real=h,h.__emotion_base=r,h.__emotion_styles=d,h.__emotion_forwardProp=a,Object.defineProperty(h,"toString",{value:function(){return"."+o}}),h.withComponent=function(g,y){return t(g,Zn({},n,y,{shouldForwardProp:hr(h,y,!0)})).apply(void 0,d)},h}},rf=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ee=nf.bind();rf.forEach(function(t){ee[t]=ee(t)});const sf=ee.section`
  width: 100%;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    margin-bottom: 78px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 150px;
  }
`,yi=ee(mi)`
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
`,of=ee(yi)`
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
`,af=()=>b.jsxs(of,{children:[b.jsx("p",{className:"about-project",children:"Про проєкт"}),b.jsxs("h2",{className:"about-title",children:[b.jsx("span",{className:"accent",children:"МІСТОХАБ"})," це"]}),b.jsxs(ln,{wrapperTag:"ul",wrapperClass:"about-list",className:"swiper",resizeObserver:!0,onResize:t=>{t.slideTo(0),t.update()},breakpoints:{1440:{slidesPerView:3,initialSlide:0,slideTo:0,enabled:!0,spaceBetween:0,grid:{row:1}},768:{slidesPerView:2,initialSlide:0,slideTo:0,enabled:!0,spaceBetween:"16px",allowTouchMove:!0,grid:{row:1},pagination:{enabled:!0,clickable:!0}}},slidesPerView:1,allowTouchMove:!1,grid:{rows:3},initialSlide:0,enabled:!0,pagination:{enabled:!1,clickable:!0},modules:[Fs],children:[b.jsxs(we,{tag:"li",className:"about-list-item",children:[b.jsx("div",{className:"about-list-item-number",children:"1"}),b.jsx("h3",{className:"about-list-item-title",children:"Кафе"}),b.jsx("p",{className:"about-list-item-text",children:"Стане місцем якісного відпочинку, знайомств та генерування ідей."})]}),b.jsxs(we,{tag:"li",className:"about-list-item",children:[b.jsx("div",{className:"about-list-item-number",children:"2"}),b.jsx("h3",{className:"about-list-item-title",children:"Івент-простір"}),b.jsx("p",{className:"about-list-item-text",children:"Розвиватиме культурне життя Полтави та стане місцем для самореалізації."})]}),b.jsxs(we,{tag:"li",className:"about-list-item",children:[b.jsx("div",{className:"about-list-item-number",children:"3"}),b.jsx("h3",{className:"about-list-item-title",children:"Крамниця МІСТОШОП"}),b.jsx("p",{className:"about-list-item-text",children:"Продаватиме унікальні сучасні сувеніри, що відображають дух міста та його культурну спадщину."})]})]}),b.jsxs("p",{className:"about-info",children:["80% прибутку ",b.jsx("span",{className:"accent",children:"МІСТОХАБ"})," буде спрямовано на фінансування соціальних проєктів містян"]})]}),lf="/MistoHub/assets/howItWorkBg-220ae44c.svg",cf="/MistoHub/assets/howItWorkBg-tablet-6f286e72.svg",df="/MistoHub/assets/howItWorkBg-desktop-c7cada1c.svg",uf=ee.div`
  width: 100%;

  background-image: url(${lf});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 60% center;

  @media (min-width: 768px) {
    background-image: url(${cf});
    background-position: 60% center;
  }

  @media (min-width: 1440px) {
    background-image: url(${df});
    background-position: 67% center;
  }
`,ff=ee(yi)`
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
`,pf=()=>{const t=O.useRef(null),{openModal:e}=pi();return O.useEffect(()=>{const n=()=>{const i=window.innerWidth;let r=0;i>=1440?r=(i-1440)/2-335:i>=768&&i<1440?r=(i-768)/2-393:r=(i-375)/2-194,t.current.style.backgroundPosition=`left ${r}px center`};return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)}),b.jsx(uf,{ref:t,children:b.jsx(ff,{children:b.jsxs("div",{className:"container-inner",children:[b.jsx("h2",{className:"how-it-work-title",children:"Як це працює?"}),b.jsxs(ln,{wrapperTag:"ul",wrapperClass:"how-it-work-list",className:"swiper",resizeObserver:!0,onResize:n=>{n.slideTo(0),n.update()},breakpoints:{768:{slidesPerView:5,enabled:!0,initialSlide:0,slideTo:0,pagination:{enabled:!1},spaceBetween:0}},slidesPerView:1,grid:{row:1},enabled:!0,initialSlide:0,pagination:{enabled:!0,clickable:!0},spaceBetween:16,modules:[Fs],children:[b.jsxs(we,{tag:"li",className:"how-it-work-item",children:[b.jsx("div",{className:"how-it-work-number",children:"1"}),b.jsxs("p",{className:"how-it-work-text",children:["Люди і компанії вкладають кошти у відновлення історичної будівлі ",b.jsx("span",{className:"accent",children:"МІСТОХАБ"})]})]}),b.jsxs(we,{tag:"li",className:"how-it-work-item",children:[b.jsx("div",{className:"how-it-work-number",children:"2"}),b.jsxs("p",{className:"how-it-work-text",children:["У відновленій будівлі відкривається МІСТОХАБ, в якому функціонують:"," ",b.jsx("span",{className:"accent",children:"Кафе, Крамниця локальних виробників Містошоп, Івент-простір"})," ","та генерують прибуток"]})]}),b.jsxs(we,{tag:"li",className:"how-it-work-item",children:[b.jsx("div",{className:"how-it-work-number",children:"3"}),b.jsxs("p",{className:"how-it-work-text",children:["80% прибутку передається у Фонд міських ініціатив"," ",b.jsx("span",{className:"accent",children:"МІСТОХАБ"})]})]}),b.jsxs(we,{tag:"li",className:"how-it-work-item",children:[b.jsx("div",{className:"how-it-work-number",children:"4"}),b.jsxs("p",{className:"how-it-work-text",children:[b.jsx("span",{className:"accent",children:"Фонд міських ініціатив"})," ","оголошує конкурс проєктів містян, a імпакт-інвестори обирають найкращі ідеї"]})]}),b.jsxs(we,{tag:"li",className:"how-it-work-item",children:[b.jsx("div",{className:"how-it-work-number",children:"5"}),b.jsxs("p",{className:"how-it-work-text",children:[b.jsx("span",{className:"accent",children:"Фонд міських ініціатив"})," ","фінансує проєкти переможців"]})]})]}),b.jsx("button",{className:"how-it-work-btn",type:"button",onClick:()=>e("join_modal"),children:"Приєднатися"})]})})})},hf="/MistoHub/assets/building1-7921ea51.svg",mf="/MistoHub/assets/building2-f1c01339.svg",gf="/MistoHub/assets/building3-5c8bd933.svg",bf="/MistoHub/assets/building4-204b02df.svg",vf=ee(yi)`
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
`,fn=ee.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
`,wf=ee(fn)`
  background-image: url(${hf});
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
`,xf=ee(fn)`
  background-image: url(${mf});
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
`,yf=ee(fn)`
  background-image: url(${gf});
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
`,Sf=ee(fn)`
  background-image: url(${bf});
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
`,mr="/MistoHub/assets/building-0fd1d2de.jpg",Af="/MistoHub/assets/building@2x-6f4bbcf0.jpg",Ef="/MistoHub/assets/building-tablet-fcd0323f.jpg",Tf="/MistoHub/assets/building-tablet@2x-4bed8edc.jpg",Cf="/MistoHub/assets/building-mobile-f96d3050.jpg",Mf="/MistoHub/assets/building-mobile@2x-2ecbf732.jpg",Of="/MistoHub/assets/building-546dad3d.webp",Pf="/MistoHub/assets/building@2x-cdd55e18.webp",kf="/MistoHub/assets/building-tablet-6b49ad77.webp",If="/MistoHub/assets/building-tablet@2x-e385e999.webp",Rf="/MistoHub/assets/building-mobile-24746013.webp",Lf="/MistoHub/assets/building-mobile@2x-ac0864e6.webp",jf=()=>b.jsxs(vf,{children:[b.jsxs("h2",{className:"building-title",children:["Будівля ",b.jsx("span",{className:"accent",children:"МІСТОХАБ"})," це історична спадщина Полтави"]}),b.jsx("p",{className:"building-text",children:"В 1909 році на Спаській, 10 розташовувався перший у Полтаві пивоварний завод та пивниця «Притулок друзів»"}),b.jsxs("div",{className:"building-img-container",children:[b.jsxs("picture",{children:[b.jsx("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:`${Rf} 1x, ${Lf} 2x`,width:"343",height:"348"}),b.jsx("source",{media:"(max-width: 767px)",srcSet:`${Cf} 1x, ${Mf} 2x`,width:"343",height:"348"}),b.jsx("source",{type:"image/webp",media:"(max-width: 1439px)",srcSet:`${kf} 1x, ${If} 2x`,width:"704",height:"534"}),b.jsx("source",{media:"(max-width: 1439px)",srcSet:`${Ef} 1x, ${Tf} 2x`,width:"704",height:"534"}),b.jsx("source",{type:"image/webp",srcSet:`${Of} 1x, ${Pf} 2x`,width:"1200",height:"753"}),b.jsx("img",{className:"building-img",srcSet:`${mr} 1x, ${Af} 2x`,src:mr,alt:"Будівля МІСТОХАБ",width:"1200",height:"753"})]}),b.jsx(wf,{}),b.jsx(xf,{}),b.jsx(yf,{}),b.jsx(Sf,{})]})]}),Nf=()=>b.jsxs(sf,{id:"about",children:[b.jsx(af,{}),b.jsx(pf,{}),b.jsx(jf,{})]}),zf=G.button`
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
`;var Y={},Si={},bt={},vt={},Zs="Expected a function",gr=0/0,Bf="[object Symbol]",Df=/^\s+|\s+$/g,Hf=/^[-+]0x[0-9a-f]+$/i,Ff=/^0b[01]+$/i,Uf=/^0o[0-7]+$/i,Wf=parseInt,Vf=typeof Tt=="object"&&Tt&&Tt.Object===Object&&Tt,Gf=typeof self=="object"&&self&&self.Object===Object&&self,Jf=Vf||Gf||Function("return this")(),qf=Object.prototype,Qf=qf.toString,Xf=Math.max,Yf=Math.min,Rn=function(){return Jf.Date.now()};function Kf(t,e,n){var i,r,s,o,a,l,u=0,c=!1,d=!1,p=!0;if(typeof t!="function")throw new TypeError(Zs);e=br(e)||0,$t(n)&&(c=!!n.leading,d="maxWait"in n,s=d?Xf(br(n.maxWait)||0,e):s,p="trailing"in n?!!n.trailing:p);function m(C){var j=i,L=r;return i=r=void 0,u=C,o=t.apply(L,j),o}function h(C){return u=C,a=setTimeout(f,e),c?m(C):o}function g(C){var j=C-l,L=C-u,P=e-j;return d?Yf(P,s-L):P}function y(C){var j=C-l,L=C-u;return l===void 0||j>=e||j<0||d&&L>=s}function f(){var C=Rn();if(y(C))return v(C);a=setTimeout(f,g(C))}function v(C){return a=void 0,p&&i?m(C):(i=r=void 0,o)}function w(){a!==void 0&&clearTimeout(a),u=0,i=l=r=a=void 0}function A(){return a===void 0?o:v(Rn())}function E(){var C=Rn(),j=y(C);if(i=arguments,r=this,l=C,j){if(a===void 0)return h(l);if(d)return a=setTimeout(f,e),m(l)}return a===void 0&&(a=setTimeout(f,e)),o}return E.cancel=w,E.flush=A,E}function Zf(t,e,n){var i=!0,r=!0;if(typeof t!="function")throw new TypeError(Zs);return $t(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),Kf(t,e,{leading:i,maxWait:e,trailing:r})}function $t(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function _f(t){return!!t&&typeof t=="object"}function $f(t){return typeof t=="symbol"||_f(t)&&Qf.call(t)==Bf}function br(t){if(typeof t=="number")return t;if($f(t))return gr;if($t(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=$t(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Df,"");var n=Ff.test(t);return n||Uf.test(t)?Wf(t.slice(2),n?2:8):Hf.test(t)?gr:+t}var ep=Zf,wt={};Object.defineProperty(wt,"__esModule",{value:!0});wt.addPassiveEventListener=function(e,n,i){var r=i.name;r||(r=n,console.warn("Listener must be a named function.")),Wt.has(n)||Wt.set(n,new Set);var s=Wt.get(n);if(!s.has(r)){var o=function(){var a=!1;try{var l=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,l)}catch{}return a}();e.addEventListener(n,i,o?{passive:!0}:!1),s.add(r)}};wt.removePassiveEventListener=function(e,n,i){e.removeEventListener(n,i),Wt.get(n).delete(i.name||n)};var Wt=new Map;Object.defineProperty(vt,"__esModule",{value:!0});var tp=ep,np=rp(tp),ip=wt;function rp(t){return t&&t.__esModule?t:{default:t}}var sp=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,np.default)(e,n)},Q={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var i=sp(function(r){Q.scrollHandler(e)},n);Q.scrollSpyContainers.push(e),(0,ip.addPassiveEventListener)(e,"scroll",i)}},isMounted:function(e){return Q.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=Q.scrollSpyContainers[Q.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(i){return i(Q.currentPositionX(e),Q.currentPositionY(e))})},addStateHandler:function(e){Q.spySetState.push(e)},addSpyHandler:function(e,n){var i=Q.scrollSpyContainers[Q.scrollSpyContainers.indexOf(n)];i.spyCallbacks||(i.spyCallbacks=[]),i.spyCallbacks.push(e),e(Q.currentPositionX(n),Q.currentPositionY(n))},updateStates:function(){Q.spySetState.forEach(function(e){return e()})},unmount:function(e,n){Q.scrollSpyContainers.forEach(function(i){return i.spyCallbacks&&i.spyCallbacks.length&&i.spyCallbacks.indexOf(n)>-1&&i.spyCallbacks.splice(i.spyCallbacks.indexOf(n),1)}),Q.spySetState&&Q.spySetState.length&&Q.spySetState.indexOf(e)>-1&&Q.spySetState.splice(Q.spySetState.indexOf(e),1),document.removeEventListener("scroll",Q.scrollHandler)},update:function(){return Q.scrollSpyContainers.forEach(function(e){return Q.scrollHandler(e)})}};vt.default=Q;var _e={},xt={};Object.defineProperty(xt,"__esModule",{value:!0});var op=function(e,n){var i=e.indexOf("#")===0?e.substring(1):e,r=i?"#"+i:"",s=window&&window.location,o=r?s.pathname+s.search+r:s.pathname+s.search;n?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},ap=function(){return window.location.hash.replace(/^#/,"")},lp=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},cp=function(e){return getComputedStyle(e).position!=="static"},Ln=function(e,n){for(var i=e.offsetTop,r=e.offsetParent;r&&!n(r);)i+=r.offsetTop,r=r.offsetParent;return{offsetTop:i,offsetParent:r}},dp=function(e,n,i){if(i)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(cp(e)){if(n.offsetParent!==e){var r=function(c){return c===e||c===document},s=Ln(n,r),o=s.offsetTop,a=s.offsetParent;if(a!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(c){return c===document};return Ln(n,l).offsetTop-Ln(e,l).offsetTop};xt.default={updateHash:op,getHash:ap,filterElementInContainer:lp,scrollOffset:dp};var pn={},Ai={};Object.defineProperty(Ai,"__esModule",{value:!0});Ai.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var Ei={};Object.defineProperty(Ei,"__esModule",{value:!0});var up=wt,fp=["mousedown","mousewheel","touchmove","keydown"];Ei.default={subscribe:function(e){return typeof document<"u"&&fp.forEach(function(n){return(0,up.addPassiveEventListener)(document,n,e)})}};var yt={};Object.defineProperty(yt,"__esModule",{value:!0});var ei={registered:{},scrollEvent:{register:function(e,n){ei.registered[e]=n},remove:function(e){ei.registered[e]=null}}};yt.default=ei;Object.defineProperty(pn,"__esModule",{value:!0});var pp=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},hp=xt;hn(hp);var mp=Ai,vr=hn(mp),gp=Ei,bp=hn(gp),vp=yt,ve=hn(vp);function hn(t){return t&&t.__esModule?t:{default:t}}var _s=function(e){return vr.default[e.smooth]||vr.default.defaultEasing},wp=function(e){return typeof e=="function"?e:function(){return e}},xp=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},ti=function(){return xp()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),$s=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},eo=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},to=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},yp=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var i=document.body,r=document.documentElement;return Math.max(i.scrollWidth,i.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)},Sp=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var i=document.body,r=document.documentElement;return Math.max(i.scrollHeight,i.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)},Ap=function t(e,n,i){var r=n.data;if(!n.ignoreCancelEvents&&r.cancel){ve.default.registered.end&&ve.default.registered.end(r.to,r.target,r.currentPositionY);return}if(r.delta=Math.round(r.targetPosition-r.startPosition),r.start===null&&(r.start=i),r.progress=i-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var s=t.bind(null,e,n);ti.call(window,s);return}ve.default.registered.end&&ve.default.registered.end(r.to,r.target,r.currentPosition)},Ti=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},St=function(e,n,i,r){n.data=n.data||$s(),window.clearTimeout(n.data.delayTimeout);var s=function(){n.data.cancel=!0};if(bp.default.subscribe(s),Ti(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?eo(n):to(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){ve.default.registered.end&&ve.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=wp(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=i,n.data.target=r;var o=_s(n),a=Ap.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){ve.default.registered.begin&&ve.default.registered.begin(n.data.to,n.data.target),ti.call(window,a)},n.delay);return}ve.default.registered.begin&&ve.default.registered.begin(n.data.to,n.data.target),ti.call(window,a)},mn=function(e){return e=pp({},e),e.data=e.data||$s(),e.absolute=!0,e},Ep=function(e){St(0,mn(e))},Tp=function(e,n){St(e,mn(n))},Cp=function(e){e=mn(e),Ti(e),St(e.horizontal?yp(e):Sp(e),e)},Mp=function(e,n){n=mn(n),Ti(n);var i=n.horizontal?eo(n):to(n);St(e+i,n)};pn.default={animateTopScroll:St,getAnimationType:_s,scrollToTop:Ep,scrollToBottom:Cp,scrollTo:Tp,scrollMore:Mp};Object.defineProperty(_e,"__esModule",{value:!0});var Op=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Pp=xt,kp=Ci(Pp),Ip=pn,Rp=Ci(Ip),Lp=yt,kt=Ci(Lp);function Ci(t){return t&&t.__esModule?t:{default:t}}var It={},wr=void 0;_e.default={unmount:function(){It={}},register:function(e,n){It[e]=n},unregister:function(e){delete It[e]},get:function(e){return It[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return wr=e},getActiveLink:function(){return wr},scrollTo:function(e,n){var i=this.get(e);if(!i){console.warn("target Element not found");return}n=Op({},n,{absolute:!1});var r=n.containerId,s=n.container,o=void 0;r?o=document.getElementById(r):s&&s.nodeType?o=s:o=document,n.absolute=!0;var a=n.horizontal,l=kp.default.scrollOffset(o,i,a)+(n.offset||0);if(!n.smooth){kt.default.registered.begin&&kt.default.registered.begin(e,i),o===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):o.scrollTop=l,kt.default.registered.end&&kt.default.registered.end(e,i);return}Rp.default.animateTopScroll(l,n,e,i)}};var gn={};Object.defineProperty(gn,"__esModule",{value:!0});var jp=xt,jn=Np(jp);function Np(t){return t&&t.__esModule?t:{default:t}}var zp={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var i=this.scroller,r=i.get(e);if(r&&(n||e!==i.getActiveLink())){var s=this.containers[e]||document;i.scrollTo(e,{container:s})}},getHash:function(){return jn.default.getHash()},changeHash:function(e,n){this.isInitialized()&&jn.default.getHash()!==e&&jn.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};gn.default=zp;Object.defineProperty(bt,"__esModule",{value:!0});var Rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Bp=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Dp=O,xr=At(Dp),Hp=vt,Lt=At(Hp),Fp=_e,Up=At(Fp),Wp=Fe,q=At(Wp),Vp=gn,ke=At(Vp);function At(t){return t&&t.__esModule?t:{default:t}}function Gp(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Jp(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function qp(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var yr={to:q.default.string.isRequired,containerId:q.default.string,container:q.default.object,activeClass:q.default.string,activeStyle:q.default.object,spy:q.default.bool,horizontal:q.default.bool,smooth:q.default.oneOfType([q.default.bool,q.default.string]),offset:q.default.number,delay:q.default.number,isDynamic:q.default.bool,onClick:q.default.func,duration:q.default.oneOfType([q.default.number,q.default.func]),absolute:q.default.bool,onSetActive:q.default.func,onSetInactive:q.default.func,ignoreCancelEvents:q.default.bool,hashSpy:q.default.bool,saveHashHistory:q.default.bool,spyThrottle:q.default.number};bt.default=function(t,e){var n=e||Up.default,i=function(s){qp(o,s);function o(a){Gp(this,o);var l=Jp(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,a));return r.call(l),l.state={active:!1},l}return Bp(o,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,u=this.props.container;return l&&!u?document.getElementById(l):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();Lt.default.isMounted(l)||Lt.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(ke.default.isMounted()||ke.default.mount(n),ke.default.mapContainer(this.props.to,l)),Lt.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){Lt.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var u={};this.state&&this.state.active?u=Rt({},this.props.style,this.props.activeStyle):u=Rt({},this.props.style);var c=Rt({},this.props);for(var d in yr)c.hasOwnProperty(d)&&delete c[d];return c.className=l,c.style=u,c.onClick=this.handleClick,xr.default.createElement(t,c)}}]),o}(xr.default.PureComponent),r=function(){var o=this;this.scrollTo=function(a,l){n.scrollTo(a,Rt({},o.state,l))},this.handleClick=function(a){o.props.onClick&&o.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),o.scrollTo(o.props.to,o.props)},this.spyHandler=function(a,l){var u=o.getScrollSpyContainer();if(!(ke.default.isMounted()&&!ke.default.isInitialized())){var c=o.props.horizontal,d=o.props.to,p=null,m=void 0,h=void 0;if(c){var g=0,y=0,f=0;if(u.getBoundingClientRect){var v=u.getBoundingClientRect();f=v.left}if(!p||o.props.isDynamic){if(p=n.get(d),!p)return;var w=p.getBoundingClientRect();g=w.left-f+a,y=g+w.width}var A=a-o.props.offset;m=A>=Math.floor(g)&&A<Math.floor(y),h=A<Math.floor(g)||A>=Math.floor(y)}else{var E=0,C=0,j=0;if(u.getBoundingClientRect){var L=u.getBoundingClientRect();j=L.top}if(!p||o.props.isDynamic){if(p=n.get(d),!p)return;var P=p.getBoundingClientRect();E=P.top-j+l,C=E+P.height}var T=l-o.props.offset;m=T>=Math.floor(E)&&T<Math.floor(C),h=T<Math.floor(E)||T>=Math.floor(C)}var N=n.getActiveLink();if(h){if(d===N&&n.setActiveLink(void 0),o.props.hashSpy&&ke.default.getHash()===d){var I=o.props.saveHashHistory,k=I===void 0?!1:I;ke.default.changeHash("",k)}o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive(d,p))}if(m&&(N!==d||o.state.active===!1)){n.setActiveLink(d);var M=o.props.saveHashHistory,R=M===void 0?!1:M;o.props.hashSpy&&ke.default.changeHash(d,R),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(d,p))}}}};return i.propTypes=yr,i.defaultProps={offset:0},i};Object.defineProperty(Si,"__esModule",{value:!0});var Qp=O,Sr=no(Qp),Xp=bt,Yp=no(Xp);function no(t){return t&&t.__esModule?t:{default:t}}function Kp(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ar(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Zp(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var _p=function(t){Zp(e,t);function e(){var n,i,r,s;Kp(this,e);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return s=(i=(r=Ar(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),r),r.render=function(){return Sr.default.createElement("a",r.props,r.props.children)},i),Ar(r,s)}return e}(Sr.default.Component);Si.default=(0,Yp.default)(_p);var Mi={};Object.defineProperty(Mi,"__esModule",{value:!0});var $p=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),eh=O,Er=io(eh),th=bt,nh=io(th);function io(t){return t&&t.__esModule?t:{default:t}}function ih(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function rh(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function sh(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var oh=function(t){sh(e,t);function e(){return ih(this,e),rh(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return $p(e,[{key:"render",value:function(){return Er.default.createElement("button",this.props,this.props.children)}}]),e}(Er.default.Component);Mi.default=(0,nh.default)(oh);var Oi={},bn={};Object.defineProperty(bn,"__esModule",{value:!0});var ah=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},lh=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),ch=O,Tr=vn(ch),dh=Hr;vn(dh);var uh=_e,Cr=vn(uh),fh=Fe,Mr=vn(fh);function vn(t){return t&&t.__esModule?t:{default:t}}function ph(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function hh(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function mh(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}bn.default=function(t){var e=function(n){mh(i,n);function i(r){ph(this,i);var s=hh(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return s.childBindings={domNode:null},s}return lh(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Cr.default.unregister(this.props.name)}},{key:"registerElems",value:function(s){Cr.default.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return Tr.default.createElement(t,ah({},this.props,{parentBindings:this.childBindings}))}}]),i}(Tr.default.Component);return e.propTypes={name:Mr.default.string,id:Mr.default.string},e};Object.defineProperty(Oi,"__esModule",{value:!0});var Or=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},gh=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),bh=O,Pr=Pi(bh),vh=bn,wh=Pi(vh),xh=Fe,kr=Pi(xh);function Pi(t){return t&&t.__esModule?t:{default:t}}function yh(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Sh(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Ah(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ro=function(t){Ah(e,t);function e(){return yh(this,e),Sh(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return gh(e,[{key:"render",value:function(){var i=this,r=Or({},this.props);return delete r.name,r.parentBindings&&delete r.parentBindings,Pr.default.createElement("div",Or({},r,{ref:function(o){i.props.parentBindings.domNode=o}}),this.props.children)}}]),e}(Pr.default.Component);ro.propTypes={name:kr.default.string,id:kr.default.string};Oi.default=(0,wh.default)(ro);var Nn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ir=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function Rr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Lr(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function jr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var jt=O,Ne=vt,zn=_e,X=Fe,Ie=gn,Nr={to:X.string.isRequired,containerId:X.string,container:X.object,activeClass:X.string,spy:X.bool,smooth:X.oneOfType([X.bool,X.string]),offset:X.number,delay:X.number,isDynamic:X.bool,onClick:X.func,duration:X.oneOfType([X.number,X.func]),absolute:X.bool,onSetActive:X.func,onSetInactive:X.func,ignoreCancelEvents:X.bool,hashSpy:X.bool,spyThrottle:X.number},Eh={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var i=n||zn,r=function(o){jr(a,o);function a(l){Rr(this,a);var u=Lr(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return s.call(u),u.state={active:!1},u}return Ir(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,c=this.props.container;return u?document.getElementById(u):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();Ne.isMounted(u)||Ne.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Ie.isMounted()||Ie.mount(i),Ie.mapContainer(this.props.to,u)),this.props.spy&&Ne.addStateHandler(this.stateHandler),Ne.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){Ne.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var c=Nn({},this.props);for(var d in Nr)c.hasOwnProperty(d)&&delete c[d];return c.className=u,c.onClick=this.handleClick,jt.createElement(e,c)}}]),a}(jt.Component),s=function(){var a=this;this.scrollTo=function(l,u){i.scrollTo(l,Nn({},a.state,u))},this.handleClick=function(l){a.props.onClick&&a.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){i.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(l){var u=a.getScrollSpyContainer();if(!(Ie.isMounted()&&!Ie.isInitialized())){var c=a.props.to,d=null,p=0,m=0,h=0;if(u.getBoundingClientRect){var g=u.getBoundingClientRect();h=g.top}if(!d||a.props.isDynamic){if(d=i.get(c),!d)return;var y=d.getBoundingClientRect();p=y.top-h+l,m=p+y.height}var f=l-a.props.offset,v=f>=Math.floor(p)&&f<Math.floor(m),w=f<Math.floor(p)||f>=Math.floor(m),A=i.getActiveLink();if(w)return c===A&&i.setActiveLink(void 0),a.props.hashSpy&&Ie.getHash()===c&&Ie.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),Ne.updateStates();if(v&&A!==c)return i.setActiveLink(c),a.props.hashSpy&&Ie.changeHash(c),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(c)),Ne.updateStates()}}};return r.propTypes=Nr,r.defaultProps={offset:0},r},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(i){jr(r,i);function r(s){Rr(this,r);var o=Lr(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,s));return o.childBindings={domNode:null},o}return Ir(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;zn.unregister(this.props.name)}},{key:"registerElems",value:function(o){zn.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return jt.createElement(e,Nn({},this.props,{parentBindings:this.childBindings}))}}]),r}(jt.Component);return n.propTypes={name:X.string,id:X.string},n}},Th=Eh;Object.defineProperty(Y,"__esModule",{value:!0});Y.Helpers=Y.ScrollElement=Y.ScrollLink=go=Y.animateScroll=Y.scrollSpy=Y.Events=Y.scroller=Y.Element=Y.Button=Y.Link=void 0;var Ch=Si,so=Ee(Ch),Mh=Mi,oo=Ee(Mh),Oh=Oi,ao=Ee(Oh),Ph=_e,lo=Ee(Ph),kh=yt,co=Ee(kh),Ih=vt,uo=Ee(Ih),Rh=pn,fo=Ee(Rh),Lh=bt,po=Ee(Lh),jh=bn,ho=Ee(jh),Nh=Th,mo=Ee(Nh);function Ee(t){return t&&t.__esModule?t:{default:t}}Y.Link=so.default;Y.Button=oo.default;Y.Element=ao.default;Y.scroller=lo.default;Y.Events=co.default;Y.scrollSpy=uo.default;var go=Y.animateScroll=fo.default;Y.ScrollLink=po.default;Y.ScrollElement=ho.default;Y.Helpers=mo.default;Y.default={Link:so.default,Button:oo.default,Element:ao.default,scroller:lo.default,Events:co.default,scrollSpy:uo.default,animateScroll:fo.default,ScrollLink:po.default,ScrollElement:ho.default,Helpers:mo.default};const zh=()=>{const[t,e]=O.useState(0),n=()=>{window.scrollY>250?e(1):e(0)},i=()=>{go.scrollToTop({duration:500,smooth:"easeInOutQuart"})};return O.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]),b.jsx(zf,{style:{opacity:t},type:"button",title:"Вгору",onClick:i,children:b.jsx(fe,{iconName:"topscroll"})})},Bh="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let bo=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+=Bh[n[t]&63];return e};const Dh="/MistoHub/assets/hero1-467405ac.png",Hh="/MistoHub/assets/hero1@2x-bac38f8b.png",Fh="/MistoHub/assets/hero1-61ef068c.webp",Uh="/MistoHub/assets/hero1@2x-1d7d899a.webp",Wh="/MistoHub/assets/hero2-0dc9576f.png",Vh="/MistoHub/assets/hero2@2x-fcfc1f52.png",Gh="/MistoHub/assets/hero2-1d678767.webp",Jh="/MistoHub/assets/hero2@2x-eaab9d3e.webp",qh="/MistoHub/assets/hero3-cb0802fe.png",Qh="/MistoHub/assets/hero3@2x-b06dc8d7.png",Xh="/MistoHub/assets/hero3-494c0e3b.webp",Yh="/MistoHub/assets/hero3@2x-14174f0d.webp",Kh="/MistoHub/assets/hero4-eaf95bb1.png",Zh="/MistoHub/assets/hero4@2x-99b52b9b.png",_h="/MistoHub/assets/hero4-a36809e4.webp",$h="/MistoHub/assets/hero4@2x-99a7f7bd.webp",em="/MistoHub/assets/hero5-6f2417a3.png",tm="/MistoHub/assets/hero5@2x-830c1cd4.png",nm="/MistoHub/assets/hero5-2ab4f108.webp",im="/MistoHub/assets/hero5@2x-0a268f87.webp",rm=[{imgPng1:Dh,imgPng2:Hh,imgWebP1:Fh,imgWebP2:Uh,alt:"Kitchen 1"},{imgPng1:Wh,imgPng2:Vh,imgWebP1:Gh,imgWebP2:Jh,alt:"Kitchen 2"},{imgPng1:qh,imgPng2:Qh,imgWebP1:Xh,imgWebP2:Yh,alt:"Kitchen 3"},{imgPng1:Kh,imgPng2:Zh,imgWebP1:_h,imgWebP2:$h,alt:"Kitchen 4"},{imgPng1:em,imgPng2:tm,imgWebP1:nm,imgWebP2:im,alt:"Kitchen 5"}],sm=G.section`
  min-width: 320px;
  width: 100%;
  height: 700px;

  @media only screen and (min-width: 768px) {
    height: 1024px;
  }

  @media only screen and (min-width: 1440px) {
    height: 880px;
  }
`,om=G(mi)`
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
`,am=()=>{const t=O.useRef(null),[e,n]=O.useState(!0),[i,r]=O.useState(!1);O.useEffect(()=>{t.current&&t.current.swiper&&t.current.swiper.on("slideChange",()=>{n(t.current.swiper.isBeginning),r(t.current.swiper.isEnd)})},[]);const s=()=>{t.current&&t.current.swiper&&t.current.swiper.slideNext()},o=()=>{t.current&&t.current.swiper&&t.current.swiper.slidePrev()};return b.jsx(sm,{children:b.jsxs(om,{children:[b.jsx(ln,{ref:t,className:"my-swiper",navigation:!0,children:rm.map((a,l)=>b.jsx(we,{children:b.jsxs("picture",{children:[b.jsx("source",{srcSet:`${a.imgWebP1} 1x, ${a.imgWebP2} 2x`,type:"image/webp"}),b.jsx("source",{srcSet:`${a.imgPng1} 1x, ${a.imgPng2} 2x`,type:"image/png"}),b.jsx("img",{fetchpriority:l===0?"high":"low",className:"hero-img",src:a.imgPng1,alt:a.alt})]})},bo()))}),b.jsxs("div",{className:"custom-navigation",children:[b.jsx("button",{className:`swiper-btn-prev ${e?"disabled":""}`,onClick:o,disabled:e,type:"button",title:"Попередній слайд",children:b.jsx(fe,{iconName:"arrow-left2"})}),b.jsx("button",{className:`swiper-btn-next ${i?"disabled":""}`,onClick:s,disabled:i,type:"button",title:"Наступний слайд",children:b.jsx(fe,{iconName:"arrow-right2"})})]}),b.jsxs("h1",{className:"hero-title",children:[b.jsx("span",{children:"МІСТОХАБ -"}),b.jsx("br",{}),"створюємо простір",b.jsx("br",{}),"розвитку міста"]})]})})},lm="/MistoHub/assets/zigzag-icon-a969ad4c.svg",cm="/MistoHub/assets/octagon-icon-16f05493.svg",dm="/MistoHub/assets/oval-icon-13125d97.svg",um="/MistoHub/assets/blob-icon-c6231adc.svg",fm="/MistoHub/assets/slice-icon-bce271a8.svg",pm="/MistoHub/assets/tree-icon-e418ad4c.svg",hm=G.div`
  width: 100%;
  height: 100%;

  .zigzagIcon {
    width: 25px;
    height: 29px;
    position: absolute;
    top: 216px;
    left: 2px;
    background-image: url(${lm});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .octagonIcon {
    width: 52px;
    height: 52px;
    position: absolute;
    left: -15px;
    top: 417px;
    background-image: url(${cm});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .ovalIcon {
    width: 41px;
    height: 28px;
    position: absolute;
    left: 1px;
    top: 628px;
    background-image: url(${dm});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .blobIcon {
    width: 33px;
    height: 36px;
    position: absolute;
    right: 5px;
    top: 381px;
    background-image: url(${um});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .sliceIcon {
    width: 90px;
    height: 66px;
    position: absolute;
    top: 583px;
    right: -45px;
    background-image: url(${fm});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .treeIcon {
    width: 116px;
    height: 80px;
    position: absolute;
    right: -44px;
    top: 856px;

    background-image: url(${pm});
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
`,mm=()=>b.jsxs(hm,{children:[b.jsx("div",{className:"zigzagIcon"}),b.jsx("div",{className:"octagonIcon"}),b.jsx("div",{className:"ovalIcon"}),b.jsx("div",{className:"blobIcon"}),b.jsx("div",{className:"sliceIcon"}),b.jsx("div",{className:"treeIcon"})]}),gm=G.div`
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
`,bm=G.h3`
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
`,vm=G.p`
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
`,wm=G.div`
  position: relative;
`,xm=G.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
`,zr=G.a`
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
`,ym=({person:{webp:t,jpg:e,webpRetina:n,jpgRetina:i,webpMobile:r,jpgMobile:s,webpMobileRetina:o,jpgMobileRetina:a,instagram:l,facebook:u,name:c,description:d}})=>b.jsxs(gm,{children:[b.jsxs(wm,{children:[b.jsxs("picture",{children:[b.jsx("source",{srcSet:n,type:"image/webp",media:"(min-width: 768px) and  (min-resolution: 192dpi)"}),b.jsx("source",{srcSet:i,type:"image/jpg",media:"(min-width: 768px) and (min-resolution: 192dpi)"}),b.jsx("source",{srcSet:t,type:"image/webp",media:"(min-width: 768px)"}),b.jsx("source",{srcSet:e,type:"image/jpg",media:"(min-width: 768px)"}),b.jsx("source",{srcSet:o,type:"image/webp",media:"(min-resolution: 192dpi)"}),b.jsx("source",{srcSet:a,type:"image/jpg",media:"(min-resolution: 192dpi)"}),b.jsx("source",{srcSet:r,type:"image/webp"}),b.jsx("source",{srcSet:s,type:"image/jpg"}),b.jsx(xm,{src:s,alt:"Co-Founder avatar."})]}),l!==null?b.jsx(zr,{href:l,target:"blank",children:b.jsx(fe,{iconName:"instagramIcon",styles:"socialNetworkIcon"})}):b.jsx(zr,{href:u,target:"blank",children:b.jsx(fe,{iconName:"facebookIcon",styles:"socialNetworkIcon"})})]}),b.jsx(bm,{children:c}),b.jsx(vm,{children:d})]}),Sm=ee.section``,Am=ee(hi)`
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
`,Em=ee.h2`
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
`,Tm=ee.span`
  color: #f77d07;
  text-transform: uppercase;
`,Cm=ee.ul`
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
`,Mm="/MistoHub/assets/alyonagoncharenko@2x-5089cbc9.webp",Om="/MistoHub/assets/alyonagoncharenko@2x-9a2cc24b.jpg",Pm="data:image/webp;base64,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",km="/MistoHub/assets/alyonagoncharenko-11dce0fb.jpg",Im="/MistoHub/assets/marynagerasymenko@2x-6542d635.webp",Rm="/MistoHub/assets/marynagerasymenko@2x-c8d9ad07.jpg",Lm="data:image/webp;base64,UklGRmYMAABXRUJQVlA4IFoMAADQQwCdASq0ALQAPpFEm0olo6KmpBY8kNASCWcA0Dn3JXFocd+cOeJVhwulVp6QX1kP9/ywPjvQo/aM3cJt4eUBR//hCfm/KrKXEZ2Odt3L3kw43s0YtDV8COxWjBLYbhxRxcly3QWc93Azc4rk8hgUhuC6NChEWs7egzKyfxFog0m6tIsfPOy5BEsE0jDjPXUb3WosN33eRqA5rvUjUHoPGQCuqixSzOxqCk2o8ePec+rPiRhH+YObMOgcuoGG9ud6VSYDcYJhdLOH3NniD50sJY8U/qliPeEAzuTYg2IHzFC5pIJXOGP/EpTUQFmkMQbFAlj/iZeD+zaHwY7u3HNFOmQmAbBW/xcio6+lNgydYPRUpz1C2yk7P/+ITEzkANaK6fUWnzu+X9dEFS7NFfDY597jJTUow3/zz82upuYWW+VfI8jbo9y3ATiNG4oWdKJ2wnQMehHPNjQtFHuh+0wkVNUjj82V8ApdkGND05YWE8dYlY06Ng+QTp+PkSeOnWbAX18lHNSWSu4ETSRTgt7rUHYNx+xzf9ezWBkuiCCXypXUXHL2n15t3er8+CaMzDuv9wPTNaE1NwU8CAbZqaYy0FnEWRRjsj4MyhCBPpqA/6WJAcLPpjhjUuN7AnUEZOvQ8/GS6p3lUImRmudsYTjq72/EcjHw0N8OZ0HrVMJWB9PJ2VAQMT18YQDkO2j12MnEHgLtlpHrMCUn/YXaLJwa5PxCMS0MuAD++yGBaPbH1zzk/9zZoxPh2L33KqZwMV2kRgAUeq9aWgclZcF0eSBq861QCfG9PwLpQf2faP55GvGCj40q2HLZ3Opi2oGDLXRF9jv+hxuvxJQY1q7fpO3WBYt05+FomEQo3i/iH0unuib9o0/kjj/rqayNs3GWwel1cWllKcSIXlgdTNyS0Y53HqqBrlnw9oG3FNeL0m8FtxkH/8qUDvG+8UIFBjSaeR/hWyMXeBPhCyQ3YwqLv90Wguk77PZbKOeYTavxQcJLdT9uWjqOWRqwlXE+LDcFSywV8UwwI/wduNLTRsdb/E4zqnt0YSq5tS3i7hkmVHP8OVQfsBeXY6+cBUlXwOAPEYbC1huf+fmMJFa9eqy8WvsVWQXV5wXGJTI29lojkr9f5otN4GuADGuV/onThjuaFyVgaWafso9KJVuIGrgx14ve4Wm86qw0xQuWvUsT1j4h8n+jHoFTM/VkXyzGXVNXtNsTyAZOt8ZnRRXh9wFlXv/ZI2cRyINk+D5z6qcM3IbNC6Nb42756D+W3v7eGAFnalZBlkJlCTE5z4M+ynLd/WlHyf2cVVIhMGPXirE1PhokulaFRNTaJiNwgwkFXQZVzAUD+VkiiWtf/68pmdrZlAimoqgxN7CmbibhOqH/1DsgpwkAVPM2l3uf8MCVrW2Eyd7JN5BzOQS2b9VeflP8HimLg2+8JPaoVYnaoYuyQ0XRTUcWhmW31IhnxJweebsalUDTbMtzsAUemJ38v1ydL8l+6rVxOErqTsJnjjBj4b+nnHaMgnHcp1jxeeYux+EgxO8LMH1bwMoTY04y+wMhzmct2J/paYFqlo7iUUtLSkZJjXG4//1LxaH9tX/qMSUg8douG658BIFR16Qe1ubblDNz3l07uZXq4sqaCrPVRAaMzg4umVClqOndUPcQiTuC5zk3RxlBVGl2JmyzN4YdkM6ybQi7/SRl7jjWcXQxzTzm5Y7bYkpZ9RGyBqkEEt+aKvC+ulwVhsQodZfM/Ed40iDq8DubaktvNOBoZXsN8ejzw6GRwqVIbNERB0wwh6tLdTON102f5L+rTAN+WHRtLV3pgXiD6Sh4N3yAuQYBlrUIALl87ub0Cahyuh5ZZZLyMl4MPIYNbsjpZrDiPcWliFTtP2K0Y/ASFR7dmNEDieWfy27TdvldRyRxnY/hJA5d3zfqOSvydOyHX5fxB6b2HY+O7RnrgNSHExczzdSvhw5AUbJZK0r523ijFrW9Cyub+HQgc5acJACR2P/zUYnHD69mu61CySDYPwrZa81bnn0m78zhh19qeE737JRrUYpxUlG72POh5Y2uD1InFTQdCFy6r9c7nNCl7DYyvnge3K3TiE9nNeDcr72UCAXIaOdtKMacmP5FLiEQyMeCnEnxo23rb+M6NGgeMzPg7XsfvyAUXOiENqJjRBBnxsV1VlEut/4dIxyttKXOQ5Rr9xHUdSVphzKbZ653JET0DXb/iKG9aX1c1/dopLQzBcb9m/amysCGCrQupNzPuuU76NvU1AAdzVfYArtzSmQsRVIeDj7BDzGWCj0o4nNxV4VKC3qrqmC/+99M6xKRbydNkh8RKsh+8ErQxCoLjR9xaR4gEqoqqRCysVhUYzyWvzvdp3KJfNyMGfKKL8maStjfreEB1iLHcVrJKWbhCdr3m/tykDPc4Qzvjcf061WGXCDjy8EifIJqqYjPzbsFd+5UPbvQewvZ9HdH5OF/ufSsJrpYYfoq+jg47kl/WS0m6ElD+UqMlkfIPbhHp+C7QIcoBYMt+VQq6xHIwsViDcjDXcjnL5ufjMPVirklNQ9CYi6XLwuWxlpB3vxL8TkQJa/cnLEIA7D+e5aTASHpkDKyVp8p/EJDcpO/DeYfOdG/qq4/g8ckfwjLD5825XoQ4sron0/UZmL3YrbcFpBQMHWhf+H0LpbWWD2sAeZjMNzv9jaMXEY6VF59QGSxLX3SFjXE2jUYG68FNH14hMIz0aphbjekBSQPf1W1IzaGqNKeA46kETEMsHVUdthmmqfO3vSZcZSdOyjH9/MePUOFyYr+Yht83uMX4mh+dCLQmG5u7u/BRrWCsEFGWKjrF7lJp1hB4NWuB+V+94AlvwTRwN8xWYHHeF/eY2xy8WwfZNZnogPEyfqWI8mQfEL0lrgOeDLNKXTA4iVCrN8ST6IxUCq2Zm97DgINeyFxTbPN26+JuSt1jlwH40nBDjOFbLgMJ02OrHdh1lu0V7JXJAbZbUsYp2Q0Dkn584UbF2ybXUjrilySCLepPoDbfpzxcNxZqiKRW/Q5QrX1sEwEgNFVDYllHVXmaqOYxDdG7Fh4jX/WMTzgRy/FUS0J/mvaO+eMj8teKtv+T77LK8ap/4w8pXnm88027By7gFWTZOLWDHce93AoY+rV6OuN7wUpVjl+7+RvBLtFuRTo/omm+9YKzL3Pzwcjh89sretXKJ+hUffgu2MdAKORl5FHeqs4i9Ii0I+jyJzJ6OWpYbjb3BPKsxV12ybU9oD1mxXcxjaSO761z/+PlMd+B3JrPRrknb+spX3Wqo2KUU6W0NXyixk3I1VL7gQuCLVH71vyTqu+QzvVpypUmqWobb4nB+BbA/Y0za8Q/j8eonYJa/lYWVPCkTMD0rPKfjNhSRV7dTda8LbIGPjj/BQBykKQm9vcCh7xvS+Ag563kkkEKdidumsMwOhiWEKGUe7BEYwaDSySkqL4n71EfKI2ehuATW45vs92Os0FT3wEH+esHZwjDukm3D82j3BNDlp+PxNCHN7yfMNo1r979ekxTAXqTd1v5rYUiEywPjfdtglnGtJ7oTLnGsiLnMt2AYndN9+G1xG6RJ8Jh/pJMRyUYtsIoyT5qkryLqrOphMUB0kVo8M1VLQKp0kLTZnl9V2LjQhF54FnjfniMVIa6yfuwKia7fDmHkacb+qoL+d50xeWLhTA19/od8GAcBSsU1XC52DR+S0dIYRM2ERcRSE/CB3f115vZI4xb+fpsxKuA9jP3TvXsr7UW5b4hDf/A5lzXMwXdIrj6CmOdu8uymSRCX1dT14xoKKVxDC+WCcl3nKzEGIkJo4ARn3dvUri4ASuklpTmhFT5DUVtNEelDHLwiovGB9ssMh1/Z/mUG2NfsEzIB5p8S3ml2MPKO9B7LspQRr8lSAJ+ic+3bNPAANnbtdBCf5IfF+1P2iBnNpeUx4oK3BMRo+1TnaHIcCPTqk//JxRrDdHUh3BH3MHLaNV9A0FOiUPQmROzcpQo9F+fivfac3EMCPFm51VDRzjLO1uEMZVKvFUMrTFpZhz4EgnmYEf4VqPZURLeq1Uv3DPHypd9qS8ZlBg44VRuazOAfWlLtYRv4AOCACuquo7d/E09P9PLAWVtgMtnjf/MwsCBzjdffzZ+KJMTG0mjC+Nm40D8JcIOLlrKRWfQN8FJBHnYX+9CCziXlTWJBXqGnSnFODfr+5BIZfNk1MjDLpJ4SNG+GrL67AAAAAAAAA=",jm="/MistoHub/assets/marynagerasymenko-80367483.jpg",Nm="/MistoHub/assets/nataliiagranchak@2x-743f3df1.webp",zm="/MistoHub/assets/nataliiagranchak@2x-b2368df5.jpg",Bm="data:image/webp;base64,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",Dm="/MistoHub/assets/nataliiagranchak-2cc74635.jpg",Hm="/MistoHub/assets/nataliabarannyk@2x-b8491a87.webp",Fm="/MistoHub/assets/nataliabarannyk@2x-19db3dc4.jpg",Um="data:image/webp;base64,UklGRqgMAABXRUJQVlA4IJwMAACwSACdASq0ALQAPpE8mkmloyIiKTBtCLASCWcAzbkvTTB14buh+QofD0fNSlkQ5dj5hDoERF/Iwo//1ANDmK6urBWtmzP32L51IHJp0t/19eCIAAdj5yc6q1h/Ewk+/LkyoarOTAlBiKiPNpxzeYRcO/Qj22cQOlTyOILd0i6dKsv2voZ1Nzqo753GLQ+oyPbnRDPaBkD5Z9FBckoX4AWbZG0xC7KpUl7eZYfUBbZLZNGbq66SuNdGMuLtrXuDo9kgjwnWAaws/WRlJj59DJdBuFH1KEparNpLhsM2GfEO364FkooLMzI4imtioPiROMB6NVRCwf9HY1fgwwXNACfZt80aQOaNKDSKu/gMB8reOW58O4B+4lFYG5lgzMc22bWzbATV30DQ8R+Id0vT0uAzwrf/nKluFJbizI4lO+yiRG9RG0hX7wkyXx2OX3wrfBySB5BzlSgSfz+ipVAuLqHGKtakvX+rEKrfTeDNYqqIJxodorFppjqAyzy+/0Z6wxpVOA3LgesKk8FMn8CrpK0caha3LgMLCgmiuybZOi6D+8LtEcts+LI5AKp8XZOJ5rw2wMOZQCF9Sx7/uJXxvuYLzZfTFTYZ5Wd0oMr9RR7iPQE+t0wWy1CedWebHMtuzjkJIe65qpqvu6ZsMTWLgRG0NruUIIvopBRZOtQMLrk7UmxxG2+FeY7n2a5g6uiRcMpM77Y0OTSlyK+NpOWgB5rZn1QvNb53YUvbqBwA9AU5pzdx/LY4tKC8El9WC165H72isERD0ADUrsMyWC//gAD++5QAh79QAwUgULRwc/5IV0TMJyG8/r3ghXhwujhT4TKr7Jrpjee1krD7ZxTBwhcDguZQW6yBsWpx11gUoI9TFCmNrFtguONDOE37KtuCdJmOdWLHideGfNj5vIiQFKpbpyW13MP4aA8b9RkB6Q1E2aKt2rjqde5NKvG9oiQXJEqH76wkiuKYDdy2b/tni0ZOQGAtab/g/up7q3ao3fIDvzYI0I/mQi6nqRiXNk7PdzdZpJDMyAKbpAvvzWv3+/IPzweGOdYMzD9Vqr5pu8l4NQfkRlNCiz9A0xHe9uJPOEEs9rK1y7btQo3xVoJl06P0fwtQGLVUjCA/6wjyt+Amb9QyzPotJeOymbvThBksbWjJF/bC1SdX+t+Nas/o5saWq62UpH+jvBY8KEH2DdFBG8p2DXP6rtlImXTvAiKvqG3P2ArykSiUkGCfnqrp+NtfIbg8jRzMAxoCJwQUJqeaAtXprp9z8pt70wEmB+Fr2BmFNEAe6/7xb4ZX/O2ZyKu9gyjRiNMbKhVKFF22z2BfA6LojG7uLh4U5drEtmPCoJdSETEIJYKIuv7JOo8lzL7ql4pfbefEYjmTUph1s9rc2OhlZ0Ht0KGqe7fU4j0aDG08GqppXxq8oB6DqRrYL2qRgLzLWYcdg0YXrxH22cBZLxv/lNhFQ0SS45jzTpWIMy81rnFMimbeJxgGpBRqP+4QBg32UntTFdJaLIOS+41Vx50hT72RGQerc8yQMpoezydBVmgBh7vaw9SJYW0Vlm+Bh28uViDSIpyM4Xen5N7vrTW9bhteXAgc0UwgmA/xzge2kijl5TtVl9RLHECkz/dg4EXueU02ZDRW+173oCNYLGNvPAzbKQQHW9IzsG8c49liMxuTINT6MQC+m/R9fkzfrzYj2aTR/YEmBAnkDWD7/aN3+r2zRZgi5EGWonJ7na5WnkIsQ9R1vq9Qrwl7zb0GrCNctE+F4iKllMAaxJhMV3MvXzbHU8IkJGTKcby/UjZ1FVXP/fFs/DcrZiGgjTTCyN2yx0N64397Cz0aHFNMXK04KlOPgodCy/nU5VBPWQ7UpKApnOgqxS7SNmxnD1/leUMKyFEivqLwPl2DZ+dV1tHO34+mi9mYbP3bXOrzFgYNmKIQkdHJx+rOk3kcspOJEzhZYmwe0oNraC7lp8TQMmNduM91E/rhSC3mmuq8+iTfVn3lrU+XfDQoaPLAIOMJB3byXu7UfQVOWjMrCPpVZg4nrqyK+zd5iCsv3F1JUVLflklSLXsUMS9iDYVOjr6+5ookK8WcKwWOCbEmVodf5Kwqw6rI1t9oBcd1G5ClsrD0z+Kimr3PHnC0zqyt/wr+yRTf3X55TR04DxRR063zsWSk1QNR4Id6bj9xrsLTw2Z2xbjhuh0jZbFWYWU2Qtni3JwYPta3b0JmcZ6L7tQQ9T4IzXAaWlrGABn12OaHyoHS9V2wl7Sz15m6ZvU9dJidsGIjHsFgLt/WLMCx7Q2oy4elrLdCqrDmGmGoq8bdDsd+fBZjcOZtsYkdVCL9doVtyZyB9KlIcgSH73HfvRaLAaScvoF3t4eJ/Ovx0X/l3uDd+qSN4/1IbN4BFPFOYRmAg1jSfYFjSFlztc3q/hIV7X6fKdLxVTxdOldH8l5OQ+JoNUxx5vz8KevwD2knfV8H9vrGs6hVIZli01Gc5mE6vBVx4O81GwV0N3uowEUrg1FnY+r3pZ52BcvYFVrkJ/YpPiV5bfAZXbjSVh5T6314NI8pM/whhzvjpYbnNlk8xbm5AH7tq8XB3PlvVv1RqI9l7MIFnwf0s0FDRIliFU8KkIYYBqhYHOfwjSOWngUCGJUO5rNr1iwmpH3aZX77lwcEzUYiU5ofRmLpssTerQ5fVJKaK77fe/hGU5Gg6LNjRyIhW2dLz2cV46Oxz+JC4WZ95PU4IRoanALV1b1vheoR3OemW74vj8T190DEVnhgk8+z3QB4N84T0T0DCEiKGiNWNETS0MOAxLDVdknD9vEjC/igvHvSolaV5ioLYCiBXuTDu9IUs4gzpL40C+x7opCtWabhX+j5HnGAyraDa5nFuVZ1UlNAkARdU0p9WMRqApEDbYdpzhSM6HQUvzVkgzl8hj0o1WHaKrxssnHvCHVqXybJa2EKHJe/K8yIrnrRkmG2wOz6sVcZRBIEIO2+WBRa5jKz1hZ+Psctg76yYjbXiUVAlUxpNv8OK85IUH2mJYT1sTQEB4swC4k2OFWHFbA+M+9/au/zakEHZHhpWKowe5tfzr04qjy6OP8+OK+VwLGLJNhElhio+dnhJmPVifOAGrSvQN5tDskBrtjnH4pj90YOyUtMYVu/TUH32V6jTC5SUuY1ooG2mWgdUZECcF1aQW4ShGXOQFOZzLxpqjJ1Z4+cgfxPsxXKPF21lTWxdHwTglYQv46ygDD82gIpOuaMBsLSaCxRib8tp9keIWTcdImCmfrG7mTC/XFUW0L9pTfzQj41g/9BKNam2Dfz24h9uxW9dnKpfrNhBf2NggRcrd/eO2bCEgYcGWU45DHHxrTCm7Daf5Gp6WJ604naimlvXGW+SVwFmj0LTPjB4kS7td7vy3JETFFf6OOO6PAkHaupNwx8RctKLgSHbfWXUKxOq8v6L19Fr0e5RpRZL4Um1sWmoJxyLNPXt4KUkp8xYwIQSPg76gV+xRRQVnmq3Yzv732FrdEThRPHC+nQjUfTNDCAp42WnM7G7SDtvpJeVcHoVU9PiHin53c0NaMKmydIFdSqQwYX1uG+huZCwNZQSDAObQp5P7dWmynyIvLNBop8qrO2rZ/o0GQFuI4baGtxeN+MQp5a9ePL46aetM1qjdtwnI3CMzq6NVvzSPl4DaxYlRTi6UEcUVL5H7HJlYO3K5/nx8n1+r9/eO3SaPzyaUVabT+G42u02SqfHk1yyNG+Dp2A8BYiDBspU597PH7Mf6HhIZ7VwC87QqGwFsLItWEpOisPbpQ3Ell7rTL52Tfcbez+62dUy6HodMvbBZwiYkPT7kzbQevXH584m821IbuAoSh3uflHOBMhhF4IWLDMEVuvfBMMN3hap2B3WfYs9RrSbXZQUoxjWszkXEJ4jQZH7vWBuTo9t+7dgaKUnqIgg7m8hoA2LPd6+gKh1y5IAeDPA6LcBaPhVRTxN0iQcBCdFEUpRO94Gh2QAS+7dfxhYF3hlZcVidJxqqVylyDDkjZ4jSJS+yPbTVkoU8F13PSWSE2uYIBBfkRfVDvW0uG1qC/b8njegij3db/Ce0KiJO0XMkyri8QwCIlOb7HbyChVwaYnUVJQOjmlF3H408IgV/3wRJJI9/F5fFTg5uCJVuwTmapB23hprn5xraOsKOX8qP4DxmMQ2Sb2nEy+KYWYkzvlIo/D6LeuLVxxsc6vZGmDe52BvGTYAACgqbuTAgsC8XbGkIjP2Yh89ZI3mzHWBB6r7Pda2jtNM/IwiGUY76gDIPaoLO13/ZCws6J/ra1NgG0R36S+5hAu6ndHgpl3RbN/sgAAAAAAAAA=",Wm="/MistoHub/assets/nataliabarannyk-130666b4.jpg",Vm="/MistoHub/assets/valentynbybniyk@2x-df799a53.webp",Gm="/MistoHub/assets/valentynbybniyk@2x-4b4fd2bf.jpg",Jm="data:image/webp;base64,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",qm="/MistoHub/assets/valentynbybniyk-75b33657.jpg",Qm="/MistoHub/assets/denissergeev@2x-73c15dbf.webp",Xm="/MistoHub/assets/denissergeev@2x-9f45d219.jpg",Ym="data:image/webp;base64,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",Km="/MistoHub/assets/denissergeev-29e52737.jpg",Zm="/MistoHub/assets/vitaliyvolodchenko@2x-07796d62.webp",_m="/MistoHub/assets/vitaliyvolodchenko@2x-f147d65b.jpg",$m="/MistoHub/assets/vitaliyvolodchenko-28aaba11.webp",eg="/MistoHub/assets/vitaliyvolodchenko-c92cba0f.jpg",tg="/MistoHub/assets/alyonagoncharenko@2x-4f5d28bb.webp",ng="/MistoHub/assets/alyonagoncharenko@2x-8d152053.jpg",ig="data:image/webp;base64,UklGRnoFAABXRUJQVlA4IG4FAADQHQCdASplAGQAPpE8mEelo6KhKxWuOLASCWcAzgL49gobq7dZnDCnUXTyHg1or+A0psod2KOWqBTteNS17L1T835a+sNa5bQPH7bkO/sDTaNe1OrBKrGfvICnK8b0HfEIxOUAc02S1M8saUnAPV817GbecLMX4tZhQQ90pSBh3XCoWujjrFKS4bpKd1bdT0lckvdsLiAwK3kiLRvOtyr82s3m92Td0W7Zn7504kTtrmsah/Guj+x5Tz8Sa/bIam0tIKkm9ZSm5GU5UneYTdqiey8lrr+zAQ1NHFJxZfpT7lib5wmf72TpRyz93jTxTPcV2zp2hZ4AAP7+k4YKNe2eCSFvn+t0SBSMwldO6FdE2FbAtad85XX9OAxkLi7gsqguU+x6qeqelJAL6FebZNQdi8S0hHr0DnbXAM5K+aV4iVOrqzQBMQEEKpTgKcyCT1wEoIbNtYkoetiqYuOTHpuH1valOC5WFpZ+mDZfv/Y2rah27GE1qUJER+xgIdBCDfHATjp78pkYAkGi/HGQNQuzWC1klPPaDuNNNkhOHSgdJ40iyhux/9LJrotG1usNxkn7PmVu8QiMm7+91iv5sWMPwfXvXqFB7K9SjfAY46tD6M7vtFIruHXjg9HFJRa/VY8ZAUZZ3uKVGZ0M3Jrecul4UrWxOUQag5Vp167jes0oq3Vc5nfbSZSGSwoWOFH4byAZzw3aM+Unc5MOZODYx3h5lQKd0YxirXG31qCCzonWPGfXXLv6vRz7UDlUAN1ioj/GYKpKqZ7rtIf4RvNYxqpARHQwVCFRuxToHSU6ef8CCvhXqmxlwFKlunNkPTb87dul6K188RFQGtlQb7eKoV1Yp5n0vXZiMS3h31nAhKjr7XVD9OG+RaEP/3/MTNVXEhvlBmeomVkgSzQrvktLmUe/w894aqSaiWnrK2heyKiYVDWQXav8MKWXJdegZ2j+dkAJDeAKLAUR28LsC5x1kedOUwJxdoMIZ3qdE9UOWvdFPB49XydWgcUfO2lJk1PmFKleppkfSFWV8pYqsRbKvtVlmzcIAwr29ptXJb9owpjoCIFibk1iVyEFlOfJyr4gPiHIq8yCQtw4gOXPyzolZHoRBRMrZUC9Wmr731YHBrczZrf4LcSr87K5cOthIeYt+KsWq6S6EM+5wHMJ5nz6NQbyuGh5JchnrNSqy6nt3b3vhnQo0vRKdrosy61cCQDMn+sokxfiYa2vFnvZAU53Oejt+EFL7wnoLFx6fTWCmjkc6MhDgS+Sx/PQZwBihts4EJPQH1unn+Mzhco2HNZZOfk99vKvDKRBYrQhzLesBiT8Ybd3HDkzQACbvJl/gJJlsZzhJltB4mMW+ptVJtRDitdXE2HDyxu4pP0yQ43t2iRHY7LDTB0LZtxwn2fvDA/Q/wgvIUxI2H08j/DwKR3Lg8NyLOaAUuhZcoqaKkpdp7hQwVLL3Nrf0bK+GzjJX5+D37e0OmqmoIM9f7PbqEQLZVjD1y06We0g1srEX/QNOXP+7L2IIGLzaDokPzevh4gtnYfy2aZz7b5hrqPbz6uZzvM2HoMFk9vA7zsJXBrKatBrhOrKwGTWTZJosl2UO0/CY5RiC8FsE1xxKxn264PSzlG1CV9gSuFhGHkimOv7kGPWCR1cY0gmgVNYn9R0nry6mQiCAoyY9pGzbAjy3S4YrxuLNzae3de5hLiNF8XaXwGZs555PU5ntcfvge7faPSroEoxaSIuVpCVgn2KM+0XGaZqXuihie6ywjPaMNanG36uI4bT/7/h7BHTR9cOUHY+mjNu9aatgZLDj7/Ir+bBJHX8xOzw8+UfdM0qkgB9BYRhUp3S2KNHw8G0Ih16AAAA",rg="/MistoHub/assets/alyonagoncharenko-6d3b6ec2.jpg",sg="data:image/webp;base64,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",og="/MistoHub/assets/marynagerasymenko@2x-c8d9ad07.jpg",ag="data:image/webp;base64,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",lg="/MistoHub/assets/marynagerasymenko-83a15467.jpg",cg="/MistoHub/assets/nataliiagranchak@2x-6d1023a2.webp",dg="/MistoHub/assets/nataliiagranchak@2x-b2368df5.jpg",ug="data:image/webp;base64,UklGRogFAABXRUJQVlA4IHwFAABwHgCdASplAGQAPpE+mEelo6KhKxWtuLASCWMA0uC+kBihvUx5tu5zwCn8lqkLp0As/8DXyiFKsR28iGQ5kezTGjJpw6k8tkfIulEOuNlKLVa1rsOcV+uwLCz2A9ym3RmaOYepWY/9eCplIAnohdA9wUfGCRGpv2jgprgnoF81oEv4SzfRcfMwvNqo6j4VMhKM5dWq+15vabQmxVq3qcgU/1tl8lcx+5UivkHZ4Hlmi6W3zr/64DUrWu6tAEm+0769NWCMkxyFKOEjQNx4ujKePrWZc9EK7KJ0UFgz4haogYxs0MWUznOVjmCI6SBWZOnTge2anCdOjjtaK5AA/v6ThkvZtOk1SDasgpW7LUnI+oNLMCMq+gGcj/jn5dzphrq9ra125/lxVPVRME9UED8Gfu0UTgNvUrPcthCmmFlNzyZc2m1TIcgrvKx4sRV4XB77BUgFETjr5PtIU7CMNadgG1Ts69D/FGPW+E7Q9jTzLlRCo7l7wzxlyc/GPPX3i+01yU5/XhDl1zP3lWtiVNqDYaHPeomDjpSXV8nWIhTQ+wMdDsK7/pWr6BL2NNH98I1kgFTxiKPUUWdiOJlEgsXZyc2wU5YGcd7M1+J3Kuc5twxUqxkqhHdd5EzjyqTbylNRLczcDyzQlw1QTCpiML2Y7xjVkcQHVRXe2h7B32eC1SiGTPFz/OsFx0t+Ugfb1OG5rPDhULgtSZbJQSywlAe30RkFprOoHFpgUUsbxkl/OLhipsZGjvtYGlUlQkAJVE8w/CpPQwe04B4kAleW39Z0k3N1RoCqhl/bLvZACUkKSiwbd+IfLgr2RmCC+aRuLrTm4aGWEEJUPwC77c9bbYO0X6hdnJzbcj6W7N183MVtIvqFsy40Qur0/oVzcH6bL9pqf/6l2e/2JTRcAoJfydO19EX9pqXT0BoksWkxYfcgfUjHs5j2RVMHUO20UyQn0xEnx1c9TZ1i/zUZH5UryocdEM4xPWvRIxJSVKx1S81fw4YACtOrB40yd6BdyhoPcEuGKbrn509/aFGx4KiOh1fgDCqju/64fiQZsfLW6/vz4kOdqHc/psfv3UtVTvqQuaFgQcpU3EX1fOuQijtQH9/QmAgq3HFm76wxk08p3tN2DAk1aUDzY2ZtMqg2AuQI/pVXqb4y0zs7sVy/ZTaVUG348RPyx8sgoqJgNdB5jnmZ5cIV419GAOXMrNOUYV8D3ThoYilgt6Yr31TJ6Cz+8mDGJ94iNYkgoN54kHoLdkhKkKUPHygWbbVfUn6HcrFTs/aV1ErpOxRcd1US/EiRhD8eG0GsfZV0OBAwUPPOIZUfTaYKp7cgPy3smWpOaXxwHALXqGrGVFvGxG40RaNgx8OIb1sNWZPGwv0P7BvyRwrnon1jnYPxsGbHjADpOl7rT30Kct9g6vSrgY0DMXPSKOiIJsGdOjEb2WARAf4Rg4brtVGM5nUfQz/ergBC/DPnT+ZeM6sPHbYY+DM0mMC22vV6NggL+Mj9QhNKdxy5Usn43hPPvFUFzvlz3HePcit5w9j/0oDS0Su0t8Nrw1cS7w+M8OQtzLzM4URK2ZPPYYhhWMP0nzGL4GmvAEfBqxYO6GDxq4DPh3zE3ftgo/WIcdX9fawwte0pUA2qzmFHFxvKL/W0y3aKd/jPHmL/B3MpoIYIVN6Svml6SfO7+WiUrs1cnqFzTn82QCCpmz94IsdWwC/FBdJlGNlZVr48pi5s4XGJMYgVPsCPNEJtfYvyS8Dbb+DYJD0m0c6I5fn062xlUQetfwm+RtofmuV9QXH4Wbk9YlETz6GFNL6gyCyKZns5xPmuYtvBT0zV3ZWisQSTuHn8K5XGTzPSSyogNVjb+0Rt3XnWltabDLomAAA=",fg="/MistoHub/assets/nataliiagranchak-1f78472b.jpg",pg="data:image/webp;base64,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",hg="/MistoHub/assets/nataliabarannyk@2x-19db3dc4.jpg",mg="data:image/webp;base64,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",gg="/MistoHub/assets/nataliabarannyk-46ac70a9.jpg",bg="data:image/webp;base64,UklGRqAMAABXRUJQVlA4IJQMAACwRgCdASrJAMgAPmUsk0gkIiGnorErQPAMiWkGgyWGIDO72Kk5e5Qy7l/4WdG7lXxzTUPCWv/SE+sV/oeUjNy65HocfsAT9WVcO/jywfN6r4Th+v73rOobgPtpJIDUT3Olny1SA5J3judEoWwwZZBRFe2qJIv3+swgjkuOUUqLS9wGI1lDL1ZzYZB009e26sSxch8LLBPGlAVLQFi36hc3Hk3MRjPeTqLlgVytvYeHhjCNQ61Ts6nHzdNTWsM2vOt4jTFIWeLr1Iv9zUl1QKnNTeuJ8ehA7tnhvQgnNRNQreSkBsdmEJY9k4cbwR4dUXcDlzgo+mYh1yzVoLU/LmBwHA+KGqAK4APjT9yovVItP/uPnPFXQauPqxpNYnuZEOvneDyLLb97PGZ3rpmj3c068AB8/5vYNqzn/HEWr9mS581Z2geFZvVXigzcfKZggMnQLq3lKvWVweFK6JxNt3WEKsSsnHyTApgt4S7dQ3meAQ5cSnABJj4kLoV9wN2HBR//ehx2PRDW0kXJxUl6YjUHGJhds3AHYfM34TGuKAC1bYt2NFw8JOFpE1hY/bS6BQO2g1qu+SFXIw84OlhCJ1dXvzPK+XEHpaMuToxwrCsn+JuFwEMOqy8kfBicebnNdB6yVROVqJIyEZTtbU8MiUtlwU+EEeq2V9sBdxPsr9NagYHDPXdJt9fipMTPuQQwby5V6Sz4W/n1U9HqvQYcxcg2tKUP4W3WQOr58Mbd+lxOY+AMigyKrqsVfudv83gAAP789BfLajEqPy3uZpwZkJhHb1RePDAHxCIkHYpOPxhjtFryWe2ri8BABy3yO7eMYlj9UQjIXS1NkQOQbWunj2t1cOQofmmIE4tm2ix8d/mDzLFIJhs8YQgGOJ+Zn+eaw5pips0xTwCOL4TdgTKodqiIJLzBP9/Z5DYL3sBcKgBNQLpiAhK5DX3mirfCj6cpK3Ssi5oLfJcnwFmazNs4zh3QgTxEpU8sHfFchiG7c0zeK2CBJF0/AYCAyLmybQQ1strKShYAtI0l95R3QB+9Q+VmbrVNNyIDBuCTG+1kMfWNZd9aP1j+KLzA6bQ026NWwPHTgBOHp4bn68d7tCciGf1nXdQSci9yZqxm5a5oBeA65nUeLw+dDNdS8B5d9hdoF5mI69NJQXUx4om0bfBMZemmcxC5PaaOCINdFYsu2mOV5OiTF7f6wNNPMsIUjl3Q4ai4vHXwCn3Qpk6xQJ+u3B9Zcy1VJ6fGczrvwRqrkRtq5dZIGrEugX9QUsst8smAXVcz2FifLDXDmDDfAtMk2vqfncn/698/x6IDRLrTa5Aav565cIwYQ5ZcsKZ/j3J/nnq/wMFGMbbUAHj/DiqtSmP2f6AWV4a34Qsdj6JdSrYsb5AZbMq17WZQDzamgHjq/WypZL0gzrEdfHxapmq1PDNdfhV2HjIiu//MxGdsAj9UqW2B1xi8xB/QaGM/XqPuqy6bHEoZS7m9P/7BVZR4jBqR/biG1Q24P/01W2+no2ydGqVIYlNKhjy3M6mnshjRUTVVB9n+uW+1wfF18g7qgCEHrYIzYWkvwr8DT8RoT4tl+MpmOlYw55D3feJR1JBPRsPtQt9mNg/xs4B5LYcxjIrQiRjHG4fySnXLdNVwSoV6/Uj4VyRmB91UuoPeSpW0Y7ZfcM7bOcUxDJVUA5XRJH7LRGvivMz1J2gE8Tj+p5kxWwr/bVvlynNIeM7m2kIiEXtiQMC6vPCJTj+R+rO9FZ4DjC3nZyrbSb+gnIr+GX25zNV58rB6CTJ/36VgFh+xqOkzq4jBiRFRo/YSooVdrjKA0B0DyTfK/H39/Vf4md4KVaK5CSbCpbfCGddO4FbftZaBi0yvNl8FirGLHNIIBiCiijnTwnXJ32Yr/lO2S3YFEeE+c3JrXJaAjM7Tdj7W7yjTa1wtpoxmxdnev4S1UghmvE0EaZ7D47PzV1RVtvUbq8TBtw1jsAp1qEqM7jhj52bME/S8/Gt5ytRRMDICeE6Q91pMcCX2fz09ryIiW8OqI5tccPQBfL67GKcOUWxFNADT5z6RUQ34yEuriEeWc0cZBt1PHh4FAu3cZNo0vbXwDOmLyyWyikJkd6n+8HtgQDA9Dap8fELrrQ4KDY68IuS4Fuhk4h/JcZ6K2gk71x8fK/fiwMmc9aQR37k5yIsdUyfV/QdrEPThXNaYLs/XMy50Dg11Ceg/ltzCh9nDNeE4rW4E1RPxECrB/9+A9K2S4aK32E6CzlJ8EMcC9FpZvt2aXf9ESlKqLgNIOT6+bxo19BX3H5wd/ZRkcHf3mLiGJW/Ixo2iGrGbNeespoSE7NleetA6gfOXeblnySjxjRunJIS2A798TJ8Gjj7Mm1saIyYYZGnsB8wLxqTC+8eaLXzMfjHOvPjUELJC8K8fclwRfTXML7IAtue1F/rpIYymUaLb8/gFCp8s7m9zhxcLwSi0p9V6JCMjc9yi9AJM/hKIEulKWfP6e8ulT8Xfa/GVxWh+j8UOtaUzd4Wz1tcMYRLIF+XjdISgALRlRh24aoOhH05zVkvDE+VVVhGrce+6F9lfia7Dnml+KSscwEa2HxnZuD5U44g3TM/gAQ3iI6usT1rJGjfGcPPN/kEcOC9G+Lmso9lhEwUO/hc+b35xECKzediXFEBepUxXJEaLttgSxPR5G7hyTsbCG76ps82P0bZxjYsGO6UuoZdQLBl/fRjX6N5dOvFDo1eViA3AIwD8gbWAjVyQDdSmsErHkJewPz+nn8jh0Qqbi0612XJokf0SLEUEqJd2dXApsfcU9CgHE81NCndKXW97vbm60gdCwJz3QLxUqL9oxP9LCOELowk16wGhtGaQNbn5LT9YsA1C89lMy4zhSKgwqbO0iGIh4Unsg8YN59bQKD9scaMkJ3qqM2oiUhEIdUdq563C6FUAR07so0K63wVNX9b8yrij1ju2H4m65SJpWt/lBV4SNLZwZvOFso3/1R9XoSzty6mrhOOP1S0Sk2Y8ip3D9Zmn0sojls2XQklBYT7dZca0+ZrhDORTtKZSWbgWNZATB0nuCuHnOemfYWNt57ZfSI+Xr0IRoRSAh2XVCPXvpDE71Q5zQc6JlxMBJXJVlF3Y9IAad8If7Zwbb5oQwYLbBbw5d3iBhnqOOOtUooIDToy33QER3oZsqccG+KvKmaiV+y/+nw5Nnl9Ni8pMxDL0fBPDUq9y5GC4Iif7IEqi3SMhBq3o0HNTPcmBBKxy6kC1Wu68iD1ZIFaAAL1fRnl6GStiDGIVEtzWN7QSgK9PC+z2ks7kfK7WYtNj7Ak4GfQuTlkjGAIfaJmKIg5LrO9kBljNtEk9oLsAPgfij8tIrz6h9J3CxPIPXxe7dJmgEd+UdcMp+poIYiAvkVS9EP0YqYQmj8fxf83xPu6PpMVpH/u5ZchtCj5pN1cfEIcmFlHoIRVRK1RiHk0VbzcUErK9kKQTDImr6K89c0JdVRUeephh5SF1hajdEVNg/oLyWpkZmz60Uz5CjAOLVZHips2qMQuUZCQHZu9XuF9yoD+1uGOXwKcvbj+Lkbiw9pHJctZ3NjFIRMR0ZE0SlA2zlZnyeZnVys/44ZlXW7Pgt1texJ/cJ0ShBsIdE1Lrvywb77Ujt162eDX4XT9R5/yzABrSUCyJQdQkz0uDf2mvp4D2ONAxXRGlXLdnea0emHSy5HsLPUwnjhB2EespVEtDADrep5moXBgPa4Hl370uH9Wm2olk6rmcMwtS8NBVzAnJ9BRH0PPpzmVVp6eRUWGHK4+b8X/8L4ZfJ9n0QXp/Hk/tn+rGJt9iczwHT2JTvx2qAmlAN8k11OE5FtAInHypfHD09rNkatfWIbn1rl3r8Y9vcjLI3dDyV+T5sGS8vYsJsyNlZTczsxGl/+Fr3zvn60lxalsDQnDs0hrvPydJb7noM7FAty91maKnSqQ1J36pOlfSHZXOO87/jxj0EWmpHXejMd7z9JeXSZz3WkorhNvLgf0hvb/lG2pNr9MIzvD5o31/vPud3ZfKW5h49INbBR3QfaaO870pUYvzgApe0w/7cP10d5hGyuo6KPTyq+Pi/5QeaQVQACaVWEZ64pJ9u9wROVJr3vEeqL7tW3EB+n66TzfcHrb4WZZoT3dkvbXrwRyfga+bJOHK9lItRodBZtG74tu8jh/uaMa2taSABC7GZtu+b//YFg2ZXOcIfza1E1pf7bUt4rPR85u49+NYPIBC1yncehr1Uv2JSv6D5ge7vKxH9O65UwVENlrRD0RshBv037QR2I64Zqsc+VDLxoW34JACSgAAAAAA",vg="/MistoHub/assets/valentynbybniyk@2x-4b4fd2bf.jpg",wg="data:image/webp;base64,UklGRigEAABXRUJQVlA4IBwEAADwGACdASplAGQAPpFEm0mlpCKiJJbc8LASCWcA1UdymvZf3dYwNL8v7b5lLDG0hM7pQN4AzcAQSCSg+Gm8V1zWJVCYyoM8TYGLXU9dkR5bbKfAN/WowDw8/jUayvNFNtkRflIHDJOVR+XMVNODjPpKfrQnL/5fs5s8hsommA3fn9gziw+UvIRgbcg2FGBJJR66Y1ad5PM411fRsovSlRZqntiPPvEsl7anXyZpQnBARP1vtMxkKCOFnXHOl07a7gjuoxwCptmUEnLYUkoVbxDAAP7+LozLpXE5EAglI4MNKml34NrrwIjAm0SQxWBBvRkslDQzU5M0y1QgtF03rULQ/mVs2aaDeK2JrP6oBkWtNx813tHEp5lbyfDzZIhefGuWn3/wOvwPaLbSYboKvUPgRJFD8P1JB5MoDSehqBN5ZgR+eQs0oOt0JW0sIg/40OmeyIZ3qCCm3qTdo7zoe8AArFzLEB0cT0mbgMeMV42YsOy2+YTqHQcUiF5x/SDqc5mLhpc/1cHpYIXv4e3PKN6mon319fWhlLvMQZp/Xp7+K95sUevjIEeIt2YM4/LpdQ/0BVJ7cZD7AsFgXeDs1UG35CALxlBKIXhRwZQhqUujwjSfMsgfUssh3M6S6JOOChAMJImYMrlkzrAsosIkJTGfSuwDC3cS9ipZ7QzOOlwZT/kMcKwQV1/9AL6UmY+8dsID8oo7QqHlFfyu7TLc/7EM1O7HgVzjiidIGRFA18IqTKsMFn29yv+vEyRqt/GNEiOVzq/gO8dMMaKChLTjprM0CscwHL6vm8aB1x4gres6T7SdB+58QRXtr3Mag59x/0nXErVv44906pTMm06QPlMaqpH4D8+Ez4dQ2n72lxMBTbmOFE8vvstSFC9JVaDdBYhlLorNuqUVaT7Q/YDRyLtw8blSy+eWTKUXzS0q2OxZ2vcfKDADz3/VcYg0KO++9VOUe/op1jPJEn2DdIsleC7lw7r0g4ESjRtGTAq/daRHqUbthC+5ei+is4O60QHLfss4oVqDlzdlQCsLFOX8hQY3E75HIt9e6EoiPdJSWt0/r0z/OIy7DsSPjH/kQXbi3BgnL4LbwG11g0ElZsA5qBdhMk331wNaFQnDD1vJJUF+2bpyOJ5FSIoghdSFvsfGAexzJAuVJD3MJcIdozEbJIIOocdudKidE3kZkJ07DuAKGd8jjS79VOH1cuvNzykQ1JhnSeioNG9Kg+ouF9RMShT4XiH9frGeHqpMy5qglzBz0nDfkRqcsPVV+3qZ9uABWlsVXuzxm8T0NSOR2TnHYDAz3D7A2OCw64ROPeto4VgwTv6O9wlRKcwnRrytxHb3v8HgpEGwstzDWhsssgUycmx4xnENOlLsYxt8DdXT/6bdy58NgSC00PJBnAAAAA==",xg="/MistoHub/assets/valentynbybniyk-54ce43d8.jpg",yg="data:image/webp;base64,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",Sg="/MistoHub/assets/denissergeev@2x-9f45d219.jpg",Ag="data:image/webp;base64,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",Eg="/MistoHub/assets/denissergeev-a1d6056a.jpg",Tg="/MistoHub/assets/vitaliyvolodchenko@2x-206d1729.webp",Cg="/MistoHub/assets/vitaliyvolodchenko@2x-f147d65b.jpg",Mg="data:image/webp;base64,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",Og="/MistoHub/assets/vitaliyvolodchenko-550e7fbc.jpg",Pg=[{id:0,webpRetina:Mm,jpgRetina:Om,webp:Pm,jpg:km,webpMobileRetina:tg,jpgMobileRetina:ng,webpMobile:ig,jpgMobile:rg,instagram:"https://www.instagram.com/alena_poltava/",name:"Альона Гончаренко",description:"Керівниця центру підтримки підприємців Дія.Бізнес Полтава"},{id:1,webpRetina:Im,jpgRetina:Rm,webp:Lm,jpg:jm,webpMobileRetina:sg,jpgMobileRetina:og,webpMobile:ag,jpgMobile:lg,instagram:"https://www.instagram.com/herasymenko.maryna/",name:"Марина Герасименко",description:"Проектна менеджерка, інструкторка з першої домедичної допомоги"},{id:2,webpRetina:Nm,jpgRetina:zm,webp:Bm,jpg:Dm,webpMobileRetina:cg,jpgMobileRetina:dg,webpMobile:ug,jpgMobile:fg,instagram:"https://instagram.com/nngranat?igshid=YmMyMTA2M2Y=",name:"Наталія Гранчак",description:"Голова БО «Полтавський Батальйон Небайдужих»"},{id:3,webpRetina:Hm,jpgRetina:Fm,webp:Um,jpg:Wm,webpMobileRetina:pg,jpgMobileRetina:hg,webpMobile:mg,jpgMobile:gg,instagram:"https://www.instagram.com/natalibarannik?igsh=d2h5cmxpbGNxajE=",name:"Наталя Баранник",description:"Ілюстраторка-аніматорка, менеджерка проєктів"},{id:4,webpRetina:Vm,jpgRetina:Gm,webp:Jm,jpg:qm,webpMobileRetina:bg,jpgMobileRetina:vg,webpMobile:wg,jpgMobile:xg,instagram:null,facebook:"https://www.facebook.com/profile.php?id=100009217334803",name:"Валентин Бубнюк",description:"Митрополит Полтавський і Кременчуцький"},{id:5,webpRetina:Qm,jpgRetina:Xm,webp:Ym,jpg:Km,webpMobileRetina:yg,jpgMobileRetina:Sg,webpMobile:Ag,jpgMobile:Eg,instagram:"https://www.instagram.com/denys.serheyev?igsh=MWY2Z3BucWs5Zzd4bQ==",name:"Денис Сергєєв",description:"Операційний директор IT-компанії"},{id:6,webpRetina:Zm,jpgRetina:_m,webp:$m,jpg:eg,webpMobileRetina:Tg,jpgMobileRetina:Cg,webpMobile:Mg,jpgMobile:Og,instagram:null,facebook:"https://www.facebook.com/volodchenk/?locale=ru_RU",name:"Віталій Володченко",description:'Підприємець, тренер з неформальної освіти та віце-президент БО "Взаємопоміч"'}],kg=()=>b.jsx(Sm,{id:"founders",children:b.jsxs(Am,{children:[b.jsxs(Em,{children:["Співзасновники ",b.jsx("br",{}),b.jsx(Tm,{children:"МІСТОХАБ"})]}),b.jsx(Cm,{children:Pg.map(t=>b.jsx("li",{children:b.jsx(ym,{person:t})},t.id))}),b.jsx(mm,{})]})}),Br=(t,e="p")=>{const n={p:["людина","людини","людей"],i:["імпакт-інвестор","імпакт-інвестори","імпакт-інвесторів"],k:["компанія","компанії","компаній"]};return t%10===1&&t%100!==11?n[e][0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[e][1]:n[e][2]},Ig=G.div``,Rg=G.img`
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
`,Lg=G.img`
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
`,jg=G.img`
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
`,Ng=G.img`
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
`,zg=G.img`
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
`,Bg=G.img`
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
`,Dg="/MistoHub/assets/person-circle-87e5b01c.jpg",Hg="/MistoHub/assets/person-circle@2x-2fa23513.jpg",Fg="/MistoHub/assets/person-triangle-27865367.png",Ug="/MistoHub/assets/person-triangle@2x-1e5e780b.png",Wg="/MistoHub/assets/person-star-b698f3b4.png",Vg="/MistoHub/assets/person-star@2x-52484050.png",Gg="/MistoHub/assets/cafe-e5b4566c.jpg",Jg="/MistoHub/assets/cafe@2x-bbecd071.jpg",qg="/MistoHub/assets/cafe-oval-bc41cfec.png",Qg="/MistoHub/assets/cafe-oval@2x-b0db3682.png",Xg="/MistoHub/assets/cafe-square-248a88c9.png",Yg="/MistoHub/assets/cafe-square@2x-6d972327.png",Kg="data:image/webp;base64,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",Zg="/MistoHub/assets/person-circle@2x-7214c58c.webp",_g="data:image/webp;base64,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",$g="data:image/webp;base64,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",eb="data:image/webp;base64,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",tb="/MistoHub/assets/person-star@2x-758485d8.webp",nb="/MistoHub/assets/cafe-01e488b8.webp",ib="/MistoHub/assets/cafe@2x-4b15c4b7.webp",rb="data:image/webp;base64,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",sb="/MistoHub/assets/cafe-oval@2x-70ea213e.webp",ob="data:image/webp;base64,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",ab="/MistoHub/assets/cafe-square@2x-d62fad17.webp",lb=[{name:"PersonCircle",className:Rg,jpg:Dg,jpgRetina:Hg,webp:Kg,webpRetina:Zg,description:"Person Image"},{name:"PersonTriangle",className:Lg,jpg:Fg,jpgRetina:Ug,webp:_g,webpRetina:$g,description:"Person Image"},{name:"PersonStar",className:jg,jpg:Wg,jpgRetina:Vg,webp:eb,webpRetina:tb,description:"Person Image"},{name:"Cafe",className:Ng,jpg:Gg,jpgRetina:Jg,webp:nb,webpRetina:ib,description:"Cafe Image"},{name:"CafeOval",className:zg,jpg:qg,jpgRetina:Qg,webp:rb,webpRetina:sb,description:"Cafe Image"},{name:"CafeSquare",className:Bg,jpg:Xg,jpgRetina:Yg,webp:ob,webpRetina:ab,description:"Cafe Image"}],cb=()=>b.jsx(Ig,{children:lb.map(t=>b.jsxs("picture",{children:[b.jsx("source",{srcSet:t.webpRetina,type:"image/webp",media:"(min-resolution: 192dpi)"}),b.jsx("source",{srcSet:t.webp,type:"image/webp"}),b.jsx("source",{srcSet:t.jpgRetina,type:"image/jpg",media:"(min-resolution: 192dpi)"}),b.jsx("source",{srcSet:t.jpg,type:"image/jpg"}),b.jsx(t.className,{src:t.jpg,loading:"lazy",alt:t.description})]},bo()))}),db="/MistoHub/assets/blob-image-mobile-cdfc9f3b.jpg",ub="/MistoHub/assets/blob-image-mobile-ab9dda47.webp",fb="/MistoHub/assets/blob-image-mobile@2x-572c42d4.jpg",pb="/MistoHub/assets/blob-image-mobile@2x-40627629.webp",hb="/MistoHub/assets/blob-image-tablet-4c686988.jpg",mb="/MistoHub/assets/blob-image-tablet-25516b7b.webp",gb="/MistoHub/assets/blob-image-tablet@2x-85151834.jpg",bb="/MistoHub/assets/blob-image-tablet@2x-0e060af8.webp",vb="/MistoHub/assets/blob-image-dekstop-ba4bd23c.jpg",wb="/MistoHub/assets/blob-image-dekstop-1ed3290e.webp",xb="/MistoHub/assets/blob-image-dekstop@2x-9856da11.jpg",yb="/MistoHub/assets/blob-image-dekstop@2x-7190f328.webp",Sb=G.section`
  letter-spacing: -0.02em;
  color: #ffffff;

  background-image: url(${db});
  background-image: -webkit-image-set(url(${ub}));

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${fb});
    background-image: -webkit-image-set(url(${pb}));
  }
  background-position: 36% center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  @media screen and (min-width: 375px) {
    background-position: 38% center;
  }
  @media screen and (min-width: 768px) {
    background-image: url(${hb});
    background-image: -webkit-image-set(url(${mb}));
    background-position: 33% center;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${gb});
      background-image: -webkit-image-set(url(${bb}));
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${vb});
    background-image: -webkit-image-set(url(${wb}));
    background-position: 36% center;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${xb});
      background-image: -webkit-image-set(url(${yb}));
    }
  }
  @media screen and (min-width: 1680px) {
    background-position: center;
  }
`,Ab=G(hi)`
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
`,Eb=G.h2`
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
`,Tb=G.p`
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
`,Cb=G.div`
  margin-top: 24px;
  @media screen and (min-width: 1440px) {
    margin-top: 28px;
  }
`,Mb=G.h3`
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
`,Ob=G.ul`
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
`,Dr=G.li`
  padding: 10px 12px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  @media screen and (min-width: 768px) {
    padding: 15px 26px;
  }
`,Pb=G.button`
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
`,kb=G.div`
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
`,Ib=({people:t=[],companies:e=[]})=>{const{openModal:n}=pi();return b.jsx(Sb,{id:"how",children:b.jsxs(Ab,{children:[b.jsx(Eb,{children:"Приєднуйся до спільноти людей, які змінюють Полтаву!"}),b.jsx(Tb,{children:"Саме імпакт-інвестори будуть впливати на розподіл коштів серед проєктів містян"}),b.jsxs(Cb,{children:[b.jsx(Mb,{children:"До відкриття МІСТОХАБ залишилось:"}),b.jsxs(Ob,{children:[b.jsxs(Dr,{children:[116-t.length," ",Br(116-t.length,"i")]}),b.jsxs(Dr,{children:[17-e.length," ",Br(17-e.length,"k")]})]})]}),b.jsx(Pb,{type:"button",onClick:()=>n("join_modal"),children:"Приєднатися"}),b.jsxs(kb,{children:[b.jsx("p",{children:(t==null?void 0:t.length)>100&&b.jsx("span",{children:"100+ людей"})}),b.jsx("p",{children:(e==null?void 0:e.length)>10&&b.jsx("span",{children:"10+ компаній"})}),"вже приєдналися"]}),b.jsx(cb,{})]})})},Rb=O.lazy(()=>ut(()=>import("./Visualization-94a29056.js"),["assets/Visualization-94a29056.js","assets/index-802f1575.js","assets/index-a6b3472e.css","assets/Visualization-68f18769.css"])),Lb=O.lazy(()=>ut(()=>import("./AccumulatedMoney-1cde8f9e.js"),["assets/AccumulatedMoney-1cde8f9e.js","assets/index-802f1575.js","assets/index-a6b3472e.css","assets/hoist-non-react-statics.cjs-3f8ebaa8.js"])),jb=O.lazy(()=>ut(()=>import("./InvestorsBlock-da6a5708.js"),["assets/InvestorsBlock-da6a5708.js","assets/index-802f1575.js","assets/index-a6b3472e.css"])),Nb=O.lazy(()=>ut(()=>import("./Footer-c7414d4c.js"),["assets/Footer-c7414d4c.js","assets/index-802f1575.js","assets/index-a6b3472e.css"])),zb=O.lazy(()=>ut(()=>import("./ModalsManager-57ebce1a.js"),["assets/ModalsManager-57ebce1a.js","assets/index-802f1575.js","assets/index-a6b3472e.css","assets/hoist-non-react-statics.cjs-3f8ebaa8.js"]));$l.setAppElement("#root");const Bb=()=>{const[t,e]=O.useState("main"),n=Ao(),[i,r]=O.useState([]),[s,o]=O.useState([]),a=O.useMemo(()=>async()=>{try{const[l,u]=await Promise.all([Ua(),Wa()]);r(l),o(u)}catch(l){console.error("Error fetching data:",l)}},[]);return O.useEffect(()=>{a()},[a]),O.useEffect(()=>{const{hash:l}=n;if(l){const u=l.substring(1),c=document.getElementById(u);c&&window.scrollTo({top:c.offsetTop-100,behavior:"smooth"})}},[n]),O.useEffect(()=>{const l=()=>{document.querySelectorAll("section").forEach(c=>{const p=document.getElementById("about").offsetTop;window.scrollY<p-110&&e("main");const m=c.offsetTop,h=c.offsetHeight,g=c.getAttribute("id");if(window.scrollY>=m-100&&window.scrollY<m+h-100){e(g);const y=`/MistoHub/#${g}`;g!==null?window.history.pushState(null,"",y):window.history.pushState(null,"",window.location.pathname)}})};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]),b.jsxs(O.Suspense,{children:[b.jsx(Lc,{}),b.jsxs("main",{children:[b.jsx(am,{}),b.jsx(Nf,{}),b.jsx(Rb,{}),b.jsx(Lb,{}),b.jsx(jb,{people:s,companies:i}),b.jsx(Ib,{people:s,companies:i}),b.jsx(kg,{}),b.jsx(zh,{})]}),b.jsx(Nb,{}),b.jsx(zb,{activeSection:t})]})},Vb=Object.freeze(Object.defineProperty({__proto__:null,default:Bb},Symbol.toStringTag,{value:"Module"}));export{mi as C,Vb as H,fe as I,$l as M,hi as S,ee as a,pi as b,Rc as c,au as d,Wb as e,Hb as f,Br as g,ln as h,we as i,Ce as m,bo as n,Fb as p,Qu as s,Ts as u};
