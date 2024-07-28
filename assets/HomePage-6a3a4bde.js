import{g as si,r as _,M as Ls,u as Ee,j as v,L as or,c as et,a as As,R as G,m as ai,b as lr,d as Is,_ as Te}from"./index-ceaa3d0e.js";function oi(t,e){return function(){return t.apply(e,arguments)}}const{toString:Rs}=Object.prototype,{getPrototypeOf:zn}=Object,Pt=(t=>e=>{const n=Rs.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ue=t=>(t=t.toLowerCase(),e=>Pt(e)===t),_t=t=>e=>typeof e===t,{isArray:Me}=Array,ze=_t("undefined");function js(t){return t!==null&&!ze(t)&&t.constructor!==null&&!ze(t.constructor)&&te(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const li=ue("ArrayBuffer");function $s(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&li(t.buffer),e}const Ns=_t("string"),te=_t("function"),ci=_t("number"),Ot=t=>t!==null&&typeof t=="object",zs=t=>t===!0||t===!1,ct=t=>{if(Pt(t)!=="object")return!1;const e=zn(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Hs=ue("Date"),Ds=ue("File"),Bs=ue("Blob"),Fs=ue("FileList"),Vs=t=>Ot(t)&&te(t.pipe),Ws=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||te(t.append)&&((e=Pt(t))==="formdata"||e==="object"&&te(t.toString)&&t.toString()==="[object FormData]"))},Gs=ue("URLSearchParams"),Us=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Fe(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Me(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),a=s.length;let o;for(r=0;r<a;r++)o=s[r],e.call(null,t[o],o,t)}}function di(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const ui=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),fi=t=>!ze(t)&&t!==ui;function Tn(){const{caseless:t}=fi(this)&&this||{},e={},n=(r,i)=>{const s=t&&di(e,i)||i;ct(e[s])&&ct(r)?e[s]=Tn(e[s],r):ct(r)?e[s]=Tn({},r):Me(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Fe(arguments[r],n);return e}const qs=(t,e,n,{allOwnKeys:r}={})=>(Fe(e,(i,s)=>{n&&te(i)?t[s]=oi(i,n):t[s]=i},{allOwnKeys:r}),t),Ys=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Xs=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Ks=(t,e,n,r)=>{let i,s,a;const o={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)a=i[s],(!r||r(a,t,e))&&!o[a]&&(e[a]=t[a],o[a]=!0);t=n!==!1&&zn(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Qs=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Js=t=>{if(!t)return null;if(Me(t))return t;let e=t.length;if(!ci(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Zs=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&zn(Uint8Array)),ea=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},ta=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},na=ue("HTMLFormElement"),ra=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),cr=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),ia=ue("RegExp"),pi=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Fe(n,(i,s)=>{let a;(a=e(i,s,t))!==!1&&(r[s]=a||i)}),Object.defineProperties(t,r)},sa=t=>{pi(t,(e,n)=>{if(te(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(te(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},aa=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Me(t)?r(t):r(String(t).split(e)),n},oa=()=>{},la=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Vt="abcdefghijklmnopqrstuvwxyz",dr="0123456789",hi={DIGIT:dr,ALPHA:Vt,ALPHA_DIGIT:Vt+Vt.toUpperCase()+dr},ca=(t=16,e=hi.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function da(t){return!!(t&&te(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const ua=t=>{const e=new Array(10),n=(r,i)=>{if(Ot(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Me(r)?[]:{};return Fe(r,(a,o)=>{const l=n(a,i+1);!ze(l)&&(s[o]=l)}),e[i]=void 0,s}}return r};return n(t,0)},fa=ue("AsyncFunction"),pa=t=>t&&(Ot(t)||te(t))&&te(t.then)&&te(t.catch),x={isArray:Me,isArrayBuffer:li,isBuffer:js,isFormData:Ws,isArrayBufferView:$s,isString:Ns,isNumber:ci,isBoolean:zs,isObject:Ot,isPlainObject:ct,isUndefined:ze,isDate:Hs,isFile:Ds,isBlob:Bs,isRegExp:ia,isFunction:te,isStream:Vs,isURLSearchParams:Gs,isTypedArray:Zs,isFileList:Fs,forEach:Fe,merge:Tn,extend:qs,trim:Us,stripBOM:Ys,inherits:Xs,toFlatObject:Ks,kindOf:Pt,kindOfTest:ue,endsWith:Qs,toArray:Js,forEachEntry:ea,matchAll:ta,isHTMLForm:na,hasOwnProperty:cr,hasOwnProp:cr,reduceDescriptors:pi,freezeMethods:sa,toObjectSet:aa,toCamelCase:ra,noop:oa,toFiniteNumber:la,findKey:di,global:ui,isContextDefined:fi,ALPHABET:hi,generateString:ca,isSpecCompliantForm:da,toJSONObject:ua,isAsyncFn:fa,isThenable:pa};function R(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}x.inherits(R,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:x.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const mi=R.prototype,gi={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{gi[t]={value:t}});Object.defineProperties(R,gi);Object.defineProperty(mi,"isAxiosError",{value:!0});R.from=(t,e,n,r,i,s)=>{const a=Object.create(mi);return x.toFlatObject(t,a,function(l){return l!==Error.prototype},o=>o!=="isAxiosError"),R.call(a,t.message,e,n,r,i),a.cause=t,a.name=t.name,s&&Object.assign(a,s),a};const ha=null;function Pn(t){return x.isPlainObject(t)||x.isArray(t)}function bi(t){return x.endsWith(t,"[]")?t.slice(0,-2):t}function ur(t,e,n){return t?t.concat(e).map(function(i,s){return i=bi(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function ma(t){return x.isArray(t)&&!t.some(Pn)}const ga=x.toFlatObject(x,{},null,function(e){return/^is[A-Z]/.test(e)});function Ct(t,e,n){if(!x.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=x.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,y){return!x.isUndefined(y[m])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&x.isSpecCompliantForm(e);if(!x.isFunction(i))throw new TypeError("visitor must be a function");function d(p){if(p===null)return"";if(x.isDate(p))return p.toISOString();if(!l&&x.isBlob(p))throw new R("Blob is not supported. Use a Buffer instead.");return x.isArrayBuffer(p)||x.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function c(p,m,y){let f=p;if(p&&!y&&typeof p=="object"){if(x.endsWith(m,"{}"))m=r?m:m.slice(0,-2),p=JSON.stringify(p);else if(x.isArray(p)&&ma(p)||(x.isFileList(p)||x.endsWith(m,"[]"))&&(f=x.toArray(p)))return m=bi(m),f.forEach(function(w,S){!(x.isUndefined(w)||w===null)&&e.append(a===!0?ur([m],S,s):a===null?m:m+"[]",d(w))}),!1}return Pn(p)?!0:(e.append(ur(y,m,s),d(p)),!1)}const u=[],h=Object.assign(ga,{defaultVisitor:c,convertValue:d,isVisitable:Pn});function b(p,m){if(!x.isUndefined(p)){if(u.indexOf(p)!==-1)throw Error("Circular reference detected in "+m.join("."));u.push(p),x.forEach(p,function(f,g){(!(x.isUndefined(f)||f===null)&&i.call(e,f,x.isString(g)?g.trim():g,m,h))===!0&&b(f,m?m.concat(g):[g])}),u.pop()}}if(!x.isObject(t))throw new TypeError("data must be an object");return b(t),e}function fr(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Hn(t,e){this._pairs=[],t&&Ct(t,this,e)}const wi=Hn.prototype;wi.append=function(e,n){this._pairs.push([e,n])};wi.toString=function(e){const n=e?function(r){return e.call(this,r,fr)}:fr;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function ba(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function vi(t,e,n){if(!e)return t;const r=n&&n.encode||ba,i=n&&n.serialize;let s;if(i?s=i(e,n):s=x.isURLSearchParams(e)?e.toString():new Hn(e,n).toString(r),s){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class wa{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){x.forEach(this.handlers,function(r){r!==null&&e(r)})}}const pr=wa,xi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},va=typeof URLSearchParams<"u"?URLSearchParams:Hn,xa=typeof FormData<"u"?FormData:null,ya=typeof Blob<"u"?Blob:null,Sa={isBrowser:!0,classes:{URLSearchParams:va,FormData:xa,Blob:ya},protocols:["http","https","file","blob","url","data"]},yi=typeof window<"u"&&typeof document<"u",Ea=(t=>yi&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),Ta=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Pa=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:yi,hasStandardBrowserEnv:Ea,hasStandardBrowserWebWorkerEnv:Ta},Symbol.toStringTag,{value:"Module"})),le={...Pa,...Sa};function _a(t,e){return Ct(t,new le.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return le.isNode&&x.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function Oa(t){return x.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Ca(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Si(t){function e(n,r,i,s){let a=n[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),l=s>=n.length;return a=!a&&x.isArray(i)?i.length:a,l?(x.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!o):((!i[a]||!x.isObject(i[a]))&&(i[a]=[]),e(n,r,i[a],s)&&x.isArray(i[a])&&(i[a]=Ca(i[a])),!o)}if(x.isFormData(t)&&x.isFunction(t.entries)){const n={};return x.forEachEntry(t,(r,i)=>{e(Oa(r),i,n,0)}),n}return null}function ka(t,e,n){if(x.isString(t))try{return(e||JSON.parse)(t),x.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Dn={transitional:xi,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=x.isObject(e);if(s&&x.isHTMLForm(e)&&(e=new FormData(e)),x.isFormData(e))return i?JSON.stringify(Si(e)):e;if(x.isArrayBuffer(e)||x.isBuffer(e)||x.isStream(e)||x.isFile(e)||x.isBlob(e))return e;if(x.isArrayBufferView(e))return e.buffer;if(x.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return _a(e,this.formSerializer).toString();if((o=x.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ct(o?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),ka(e)):e}],transformResponse:[function(e){const n=this.transitional||Dn.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&x.isString(e)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?R.from(o,R.ERR_BAD_RESPONSE,this,null,this.response):o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:le.classes.FormData,Blob:le.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};x.forEach(["delete","get","head","post","put","patch"],t=>{Dn.headers[t]={}});const Bn=Dn,Ma=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),La=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||e[n]&&Ma[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},hr=Symbol("internals");function Re(t){return t&&String(t).trim().toLowerCase()}function dt(t){return t===!1||t==null?t:x.isArray(t)?t.map(dt):String(t)}function Aa(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Ia=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Wt(t,e,n,r,i){if(x.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!x.isString(e)){if(x.isString(r))return e.indexOf(r)!==-1;if(x.isRegExp(r))return r.test(e)}}function Ra(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function ja(t,e){const n=x.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,a){return this[r].call(this,e,i,s,a)},configurable:!0})})}class kt{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(o,l,d){const c=Re(l);if(!c)throw new Error("header name must be a non-empty string");const u=x.findKey(i,c);(!u||i[u]===void 0||d===!0||d===void 0&&i[u]!==!1)&&(i[u||l]=dt(o))}const a=(o,l)=>x.forEach(o,(d,c)=>s(d,c,l));return x.isPlainObject(e)||e instanceof this.constructor?a(e,n):x.isString(e)&&(e=e.trim())&&!Ia(e)?a(La(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=Re(e),e){const r=x.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return Aa(i);if(x.isFunction(n))return n.call(this,i,r);if(x.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Re(e),e){const r=x.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Wt(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(a){if(a=Re(a),a){const o=x.findKey(r,a);o&&(!n||Wt(r,r[o],o,n))&&(delete r[o],i=!0)}}return x.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Wt(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return x.forEach(this,(i,s)=>{const a=x.findKey(r,s);if(a){n[a]=dt(i),delete n[s];return}const o=e?Ra(s):String(s).trim();o!==s&&delete n[s],n[o]=dt(i),r[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return x.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&x.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[hr]=this[hr]={accessors:{}}).accessors,i=this.prototype;function s(a){const o=Re(a);r[o]||(ja(i,a),r[o]=!0)}return x.isArray(e)?e.forEach(s):s(e),this}}kt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.reduceDescriptors(kt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});x.freezeMethods(kt);const ge=kt;function Gt(t,e){const n=this||Bn,r=e||n,i=ge.from(r.headers);let s=r.data;return x.forEach(t,function(o){s=o.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Ei(t){return!!(t&&t.__CANCEL__)}function Ve(t,e,n){R.call(this,t??"canceled",R.ERR_CANCELED,e,n),this.name="CanceledError"}x.inherits(Ve,R,{__CANCEL__:!0});function $a(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new R("Request failed with status code "+n.status,[R.ERR_BAD_REQUEST,R.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Na=le.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const a=[t+"="+encodeURIComponent(e)];x.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),x.isString(r)&&a.push("path="+r),x.isString(i)&&a.push("domain="+i),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function za(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Ha(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Ti(t,e){return t&&!za(e)?Ha(t,e):e}const Da=le.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let a=s;return e&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const o=x.isString(a)?i(a):a;return o.protocol===r.protocol&&o.host===r.host}}():function(){return function(){return!0}}();function Ba(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Fa(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,a;return e=e!==void 0?e:1e3,function(l){const d=Date.now(),c=r[s];a||(a=d),n[i]=l,r[i]=d;let u=s,h=0;for(;u!==i;)h+=n[u++],u=u%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),d-a<e)return;const b=c&&d-c;return b?Math.round(h*1e3/b):void 0}}function mr(t,e){let n=0;const r=Fa(50,250);return i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,o=s-n,l=r(o),d=s<=a;n=s;const c={loaded:s,total:a,progress:a?s/a:void 0,bytes:o,rate:l||void 0,estimated:l&&a&&d?(a-s)/l:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const Va=typeof XMLHttpRequest<"u",Wa=Va&&function(t){return new Promise(function(n,r){let i=t.data;const s=ge.from(t.headers).normalize();let{responseType:a,withXSRFToken:o}=t,l;function d(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let c;if(x.isFormData(i)){if(le.hasStandardBrowserEnv||le.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((c=s.getContentType())!==!1){const[m,...y]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([m||"multipart/form-data",...y].join("; "))}}let u=new XMLHttpRequest;if(t.auth){const m=t.auth.username||"",y=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(m+":"+y))}const h=Ti(t.baseURL,t.url);u.open(t.method.toUpperCase(),vi(h,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function b(){if(!u)return;const m=ge.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),f={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:m,config:t,request:u};$a(function(w){n(w),d()},function(w){r(w),d()},f),u=null}if("onloadend"in u?u.onloadend=b:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(b)},u.onabort=function(){u&&(r(new R("Request aborted",R.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new R("Network Error",R.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let y=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const f=t.transitional||xi;t.timeoutErrorMessage&&(y=t.timeoutErrorMessage),r(new R(y,f.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,t,u)),u=null},le.hasStandardBrowserEnv&&(o&&x.isFunction(o)&&(o=o(t)),o||o!==!1&&Da(h))){const m=t.xsrfHeaderName&&t.xsrfCookieName&&Na.read(t.xsrfCookieName);m&&s.set(t.xsrfHeaderName,m)}i===void 0&&s.setContentType(null),"setRequestHeader"in u&&x.forEach(s.toJSON(),function(y,f){u.setRequestHeader(f,y)}),x.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),a&&a!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",mr(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",mr(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=m=>{u&&(r(!m||m.type?new Ve(null,t,u):m),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const p=Ba(h);if(p&&le.protocols.indexOf(p)===-1){r(new R("Unsupported protocol "+p+":",R.ERR_BAD_REQUEST,t));return}u.send(i||null)})},_n={http:ha,xhr:Wa};x.forEach(_n,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const gr=t=>`- ${t}`,Ga=t=>x.isFunction(t)||t===null||t===!1,Pi={getAdapter:t=>{t=x.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let a;if(r=n,!Ga(n)&&(r=_n[(a=String(n)).toLowerCase()],r===void 0))throw new R(`Unknown adapter '${a}'`);if(r)break;i[a||"#"+s]=r}if(!r){const s=Object.entries(i).map(([o,l])=>`adapter ${o} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=e?s.length>1?`since :
`+s.map(gr).join(`
`):" "+gr(s[0]):"as no adapter specified";throw new R("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:_n};function Ut(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ve(null,t)}function br(t){return Ut(t),t.headers=ge.from(t.headers),t.data=Gt.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Pi.getAdapter(t.adapter||Bn.adapter)(t).then(function(r){return Ut(t),r.data=Gt.call(t,t.transformResponse,r),r.headers=ge.from(r.headers),r},function(r){return Ei(r)||(Ut(t),r&&r.response&&(r.response.data=Gt.call(t,t.transformResponse,r.response),r.response.headers=ge.from(r.response.headers))),Promise.reject(r)})}const wr=t=>t instanceof ge?{...t}:t;function Ce(t,e){e=e||{};const n={};function r(d,c,u){return x.isPlainObject(d)&&x.isPlainObject(c)?x.merge.call({caseless:u},d,c):x.isPlainObject(c)?x.merge({},c):x.isArray(c)?c.slice():c}function i(d,c,u){if(x.isUndefined(c)){if(!x.isUndefined(d))return r(void 0,d,u)}else return r(d,c,u)}function s(d,c){if(!x.isUndefined(c))return r(void 0,c)}function a(d,c){if(x.isUndefined(c)){if(!x.isUndefined(d))return r(void 0,d)}else return r(void 0,c)}function o(d,c,u){if(u in e)return r(d,c);if(u in t)return r(void 0,d)}const l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(d,c)=>i(wr(d),wr(c),!0)};return x.forEach(Object.keys(Object.assign({},t,e)),function(c){const u=l[c]||i,h=u(t[c],e[c],c);x.isUndefined(h)&&u!==o||(n[c]=h)}),n}const _i="1.6.8",Fn={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Fn[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const vr={};Fn.transitional=function(e,n,r){function i(s,a){return"[Axios v"+_i+"] Transitional option '"+s+"'"+a+(r?". "+r:"")}return(s,a,o)=>{if(e===!1)throw new R(i(a," has been removed"+(n?" in "+n:"")),R.ERR_DEPRECATED);return n&&!vr[a]&&(vr[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,a,o):!0}};function Ua(t,e,n){if(typeof t!="object")throw new R("options must be an object",R.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],a=e[s];if(a){const o=t[s],l=o===void 0||a(o,s,t);if(l!==!0)throw new R("option "+s+" must be "+l,R.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new R("Unknown option "+s,R.ERR_BAD_OPTION)}}const On={assertOptions:Ua,validators:Fn},be=On.validators;class bt{constructor(e){this.defaults=e,this.interceptors={request:new pr,response:new pr}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ce(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&On.assertOptions(r,{silentJSONParsing:be.transitional(be.boolean),forcedJSONParsing:be.transitional(be.boolean),clarifyTimeoutError:be.transitional(be.boolean)},!1),i!=null&&(x.isFunction(i)?n.paramsSerializer={serialize:i}:On.assertOptions(i,{encode:be.function,serialize:be.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=s&&x.merge(s.common,s[n.method]);s&&x.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),n.headers=ge.concat(a,s);const o=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(l=l&&m.synchronous,o.unshift(m.fulfilled,m.rejected))});const d=[];this.interceptors.response.forEach(function(m){d.push(m.fulfilled,m.rejected)});let c,u=0,h;if(!l){const p=[br.bind(this),void 0];for(p.unshift.apply(p,o),p.push.apply(p,d),h=p.length,c=Promise.resolve(n);u<h;)c=c.then(p[u++],p[u++]);return c}h=o.length;let b=n;for(u=0;u<h;){const p=o[u++],m=o[u++];try{b=p(b)}catch(y){m.call(this,y);break}}try{c=br.call(this,b)}catch(p){return Promise.reject(p)}for(u=0,h=d.length;u<h;)c=c.then(d[u++],d[u++]);return c}getUri(e){e=Ce(this.defaults,e);const n=Ti(e.baseURL,e.url);return vi(n,e.params,e.paramsSerializer)}}x.forEach(["delete","get","head","options"],function(e){bt.prototype[e]=function(n,r){return this.request(Ce(r||{},{method:e,url:n,data:(r||{}).data}))}});x.forEach(["post","put","patch"],function(e){function n(r){return function(s,a,o){return this.request(Ce(o||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}bt.prototype[e]=n(),bt.prototype[e+"Form"]=n(!0)});const ut=bt;class Vn{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const a=new Promise(o=>{r.subscribe(o),s=o}).then(i);return a.cancel=function(){r.unsubscribe(s)},a},e(function(s,a,o){r.reason||(r.reason=new Ve(s,a,o),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Vn(function(i){e=i}),cancel:e}}}const qa=Vn;function Ya(t){return function(n){return t.apply(null,n)}}function Xa(t){return x.isObject(t)&&t.isAxiosError===!0}const Cn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Cn).forEach(([t,e])=>{Cn[e]=t});const Ka=Cn;function Oi(t){const e=new ut(t),n=oi(ut.prototype.request,e);return x.extend(n,ut.prototype,e,{allOwnKeys:!0}),x.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return Oi(Ce(t,i))},n}const W=Oi(Bn);W.Axios=ut;W.CanceledError=Ve;W.CancelToken=qa;W.isCancel=Ei;W.VERSION=_i;W.toFormData=Ct;W.AxiosError=R;W.Cancel=W.CanceledError;W.all=function(e){return Promise.all(e)};W.spread=Ya;W.isAxiosError=Xa;W.mergeConfig=Ce;W.AxiosHeaders=ge;W.formToJSON=t=>Si(x.isHTMLForm(t)?new FormData(t):t);W.getAdapter=Pi.getAdapter;W.HttpStatusCode=Ka;W.default=W;const Mt=W;function Ci(t){var e;if((e=t==null?void 0:t.asset)!=null&&e._ref){const n=t.asset._ref.split("-");return`https://cdn.sanity.io/images/l8zwdlyt/production/${n[1]}-${n[2]}.${n[3]}`}else return null}async function gp(){try{const{data:{result:t}}=await Mt.get('https://l8zwdlyt.api.sanity.io/v2022-03-07/data/query/production?query=*[_type=="goal"]{ _id, goal, raised }');return t[0]}catch{return}}async function Qa(){try{const{data:{result:t}}=await Mt.get('https://l8zwdlyt.api.sanity.io/v2022-03-07/data/query/production?query=*[_type=="companies"]{ _id, id, name, logoURL, link, question, answer } | order(id asc)');return t.map(n=>(n.logoURL&&(n.logoURL=Ci(n.logoURL)),n))}catch{return}}async function Ja(){try{const{data:{result:t}}=await Mt.get('https://l8zwdlyt.api.sanity.io/v2022-03-07/data/query/production?query=*[_type=="people"]{ _id, id,firstName,secondName,type, imageURL, facebook, instagram, otherLink, question, answer  } | order(id asc)');return t.map(n=>(n.imageURL&&(n.imageURL=Ci(n.imageURL)),n))}catch{return}}async function bp(t){const{data:e}=await Mt.post("https://api.telegram.org/bot6593525660:AAGrKfdt_B8SslnCs0UhvyMPZ3nn_HHEU0Q/sendMessage",{chat_id:"5921930260",parse_mode:"html",text:t});return e}var Wn={};Wn.match=io;Wn.parse=ki;var Za=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,eo=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,to=/^(?:(min|max)-)?(.+)/,no=/(em|rem|px|cm|mm|in|pt|pc)?$/,ro=/(dpi|dpcm|dppx)?$/;function io(t,e){return ki(t).some(function(n){var r=n.inverse,i=n.type==="all"||e.type===n.type;if(i&&r||!(i||r))return!1;var s=n.expressions.every(function(a){var o=a.feature,l=a.modifier,d=a.value,c=e[o];if(!c)return!1;switch(o){case"orientation":case"scan":return c.toLowerCase()===d.toLowerCase();case"width":case"height":case"device-width":case"device-height":d=Sr(d),c=Sr(c);break;case"resolution":d=yr(d),c=yr(c);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":d=xr(d),c=xr(c);break;case"grid":case"color":case"color-index":case"monochrome":d=parseInt(d,10)||1,c=parseInt(c,10)||0;break}switch(l){case"min":return c>=d;case"max":return c<=d;default:return c===d}});return s&&!r||!s&&r})}function ki(t){return t.split(",").map(function(e){e=e.trim();var n=e.match(Za),r=n[1],i=n[2],s=n[3]||"",a={};return a.inverse=!!r&&r.toLowerCase()==="not",a.type=i?i.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],a.expressions=s.map(function(o){var l=o.match(eo),d=l[1].toLowerCase().match(to);return{modifier:d[1],feature:d[2],value:l[2]}}),a})}function xr(t){var e=Number(t),n;return e||(n=t.match(/^(\d+)\s*\/\s*(\d+)$/),e=n[1]/n[2]),e}function yr(t){var e=parseFloat(t),n=String(t).match(ro)[1];switch(n){case"dpcm":return e/2.54;case"dppx":return e*96;default:return e}}function Sr(t){var e=parseFloat(t),n=String(t).match(no)[1];switch(n){case"em":return e*16;case"rem":return e*16;case"cm":return e*96/2.54;case"mm":return e*96/2.54/10;case"in":return e*96;case"pt":return e*72;case"pc":return e*72/12;default:return e}}var so=Wn.match,Er=typeof window<"u"?window.matchMedia:null;function ao(t,e,n){var r=this,i;Er&&!n&&(i=Er.call(window,t)),i?(this.matches=i.matches,this.media=i.media,i.addListener(o)):(this.matches=so(t,e),this.media=t),this.addListener=s,this.removeListener=a,this.dispose=l;function s(d){i&&i.addListener(d)}function a(d){i&&i.removeListener(d)}function o(d){r.matches=d.matches,r.media=d.media}function l(){i&&i.removeListener(o)}}function oo(t,e,n){return new ao(t,e,n)}var lo=oo;const co=si(lo);var uo=/[A-Z]/g,fo=/^ms-/,qt={};function po(t){return"-"+t.toLowerCase()}function Mi(t){if(qt.hasOwnProperty(t))return qt[t];var e=t.replace(uo,po);return qt[t]=fo.test(e)?"-"+e:e}function ho(t,e){if(t===e)return!0;if(!t||!e)return!1;const n=Object.keys(t),r=Object.keys(e),i=n.length;if(r.length!==i)return!1;for(let s=0;s<i;s++){const a=n[s];if(t[a]!==e[a]||!Object.prototype.hasOwnProperty.call(e,a))return!1}return!0}var Li={exports:{}},mo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",go=mo,bo=go;function Ai(){}function Ii(){}Ii.resetWarningCache=Ai;var wo=function(){function t(r,i,s,a,o,l){if(l!==bo){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ii,resetWarningCache:Ai};return n.PropTypes=n,n};Li.exports=wo();var We=Li.exports;const N=si(We),X=N.oneOfType([N.string,N.number]),Gn={all:N.bool,grid:N.bool,aural:N.bool,braille:N.bool,handheld:N.bool,print:N.bool,projection:N.bool,screen:N.bool,tty:N.bool,tv:N.bool,embossed:N.bool},Ri={orientation:N.oneOf(["portrait","landscape"]),scan:N.oneOf(["progressive","interlace"]),aspectRatio:N.string,deviceAspectRatio:N.string,height:X,deviceHeight:X,width:X,deviceWidth:X,color:N.bool,colorIndex:N.bool,monochrome:N.bool,resolution:X,type:Object.keys(Gn)},{type:wp,...vo}=Ri,ji={minAspectRatio:N.string,maxAspectRatio:N.string,minDeviceAspectRatio:N.string,maxDeviceAspectRatio:N.string,minHeight:X,maxHeight:X,minDeviceHeight:X,maxDeviceHeight:X,minWidth:X,maxWidth:X,minDeviceWidth:X,maxDeviceWidth:X,minColor:N.number,maxColor:N.number,minColorIndex:N.number,maxColorIndex:N.number,minMonochrome:N.number,maxMonochrome:N.number,minResolution:X,maxResolution:X,...vo},xo={...Gn,...ji};var yo={all:xo,types:Gn,matchers:Ri,features:ji};const So=t=>`not ${t}`,Eo=(t,e)=>{const n=Mi(t);return typeof e=="number"&&(e=`${e}px`),e===!0?n:e===!1?So(n):`(${n}: ${e})`},To=t=>t.join(" and "),Po=t=>{const e=[];return Object.keys(yo.all).forEach(n=>{const r=t[n];r!=null&&e.push(Eo(n,r))}),To(e)},_o=_.createContext(void 0),Oo=t=>t.query||Po(t),Tr=t=>t?Object.keys(t).reduce((n,r)=>(n[Mi(r)]=t[r],n),{}):void 0,$i=()=>{const t=_.useRef(!1);return _.useEffect(()=>{t.current=!0},[]),t.current},Co=t=>{const e=_.useContext(_o),n=()=>Tr(t)||Tr(e),[r,i]=_.useState(n);return _.useEffect(()=>{const s=n();ho(r,s)||i(s)},[t,e]),r},ko=t=>{const e=()=>Oo(t),[n,r]=_.useState(e);return _.useEffect(()=>{const i=e();n!==i&&r(i)},[t]),n},Mo=(t,e)=>{const n=()=>co(t,e||{},!!e),[r,i]=_.useState(n),s=$i();return _.useEffect(()=>{if(s){const a=n();return i(a),()=>{a&&a.dispose()}}},[t,e]),r},Lo=t=>{const[e,n]=_.useState(t.matches);return _.useEffect(()=>{const r=i=>{n(i.matches)};return t.addListener(r),n(t.matches),()=>{t.removeListener(r)}},[t]),e},Ni=(t,e,n)=>{const r=Co(e),i=ko(t);if(!i)throw new Error("Invalid or missing MediaQuery!");const s=Mo(i,r),a=Lo(s),o=$i();return _.useEffect(()=>{o&&n&&n(a)},[a]),_.useEffect(()=>()=>{s&&s.dispose()},[]),a},vp=({children:t,device:e,onChange:n,...r})=>{const i=Ni(r,e,n);return typeof t=="function"?t(i):i?t:null},zi=()=>_.useContext(Ls),Ao=Ee.div`
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
`,Un=({children:t,...e})=>v.jsx(Ao,{...e,children:t}),Io=Ee.header`
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
`,Ro=Ee(Un)`
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
`,jo="/MistoHub/assets/icons-395c4493.svg",me=({width:t,height:e,iconName:n,styles:r})=>v.jsx("svg",{width:t,height:e,className:r,children:v.jsx("use",{href:`${jo}#${n}`})}),$o=Ee.div`
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
`;function No({darkStyle:t,sectionName:e}){let n={};switch(e){case"header":n[e]=!0;break;case"footer":n[e]=!0;break;case"menu":n[e]=!0;break}return v.jsxs($o,{$sections:n,children:[v.jsx(or,{className:`link-instagram ${n.header?t:""}`,to:"https://www.instagram.com/mistohub",target:"_blank",rel:"noopener noreferrer","aria-label":"go and view the Mistohub Instagram account",children:v.jsx(me,{width:"20",height:"20",iconName:"icon-instagram",styles:t})}),v.jsx(or,{className:`link-facebook ${n.header?t:""}`,to:"https://www.facebook.com/mistohub/?locale=uk_UA",target:"_blank",rel:"noopener noreferrer","aria-label":"go to the Mistohub Facebook page",children:v.jsx(me,{width:"20",height:"20",iconName:"icon-faceb",styles:t})})]})}function zo(){const[t,e]=_.useState(""),{openModal:n}=zi(),r=Ni({maxWidth:767});return _.useEffect(()=>{let i=document.getElementById("footer");const s=document.querySelector(".hidden-wrap"),a=()=>{i||(i=document.getElementById("footer")),window.scrollY!==0&&(i==null?void 0:i.offsetTop)-375>=window.scrollY?(s.classList.value.includes("hidden")&&s.classList.remove("hidden"),e("dark-header")):window.scrollY===0?e(""):s.classList.add("hidden")};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),v.jsx(Io,{children:v.jsx("div",{className:`hidden-wrap ${t}`,children:v.jsxs(Ro,{children:[v.jsx(me,{width:r?"99":"118",height:r?"34":"40",iconName:"main-logo",styles:`main-logo ${t} `}),r?v.jsx(v.Fragment,{children:v.jsx("button",{type:"button",onClick:()=>n("menu_modal"),children:v.jsx(me,{width:"44",height:"38",iconName:"burger-menu",styles:`${t} burger-menu-icon`})})}):v.jsxs("div",{className:"menu-wrapper",children:[v.jsx(No,{darkStyle:t,sectionName:"header"}),v.jsxs("button",{type:"button",className:"btn-clouds",onClick:()=>n("join_modal"),children:[v.jsx(me,{width:"180",height:"85",iconName:"cloud",styles:`${t} cloud-icon`}),v.jsx("span",{children:"Підтримати проєкт"})]}),v.jsx("button",{type:"button",onClick:()=>n("menu_modal"),children:v.jsx(me,{width:"54",height:"47",iconName:"burger-menu",styles:`${t} burger-menu-icon`})})]})]})})})}const Ho=Ee.button`
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
`;var F={},qn={},Ge={},Ue={},Hi="Expected a function",Pr=0/0,Do="[object Symbol]",Bo=/^\s+|\s+$/g,Fo=/^[-+]0x[0-9a-f]+$/i,Vo=/^0b[01]+$/i,Wo=/^0o[0-7]+$/i,Go=parseInt,Uo=typeof et=="object"&&et&&et.Object===Object&&et,qo=typeof self=="object"&&self&&self.Object===Object&&self,Yo=Uo||qo||Function("return this")(),Xo=Object.prototype,Ko=Xo.toString,Qo=Math.max,Jo=Math.min,Yt=function(){return Yo.Date.now()};function Zo(t,e,n){var r,i,s,a,o,l,d=0,c=!1,u=!1,h=!0;if(typeof t!="function")throw new TypeError(Hi);e=_r(e)||0,wt(n)&&(c=!!n.leading,u="maxWait"in n,s=u?Qo(_r(n.maxWait)||0,e):s,h="trailing"in n?!!n.trailing:h);function b(P){var L=r,k=i;return r=i=void 0,d=P,a=t.apply(k,L),a}function p(P){return d=P,o=setTimeout(f,e),c?b(P):a}function m(P){var L=P-l,k=P-d,O=e-L;return u?Jo(O,s-k):O}function y(P){var L=P-l,k=P-d;return l===void 0||L>=e||L<0||u&&k>=s}function f(){var P=Yt();if(y(P))return g(P);o=setTimeout(f,m(P))}function g(P){return o=void 0,h&&r?b(P):(r=i=void 0,a)}function w(){o!==void 0&&clearTimeout(o),d=0,r=l=i=o=void 0}function S(){return o===void 0?a:g(Yt())}function E(){var P=Yt(),L=y(P);if(r=arguments,i=this,l=P,L){if(o===void 0)return p(l);if(u)return o=setTimeout(f,e),b(l)}return o===void 0&&(o=setTimeout(f,e)),a}return E.cancel=w,E.flush=S,E}function el(t,e,n){var r=!0,i=!0;if(typeof t!="function")throw new TypeError(Hi);return wt(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Zo(t,e,{leading:r,maxWait:e,trailing:i})}function wt(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function tl(t){return!!t&&typeof t=="object"}function nl(t){return typeof t=="symbol"||tl(t)&&Ko.call(t)==Do}function _r(t){if(typeof t=="number")return t;if(nl(t))return Pr;if(wt(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=wt(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Bo,"");var n=Vo.test(t);return n||Wo.test(t)?Go(t.slice(2),n?2:8):Fo.test(t)?Pr:+t}var rl=el,qe={};Object.defineProperty(qe,"__esModule",{value:!0});qe.addPassiveEventListener=function(e,n,r){var i=r.name;i||(i=n,console.warn("Listener must be a named function.")),ft.has(n)||ft.set(n,new Set);var s=ft.get(n);if(!s.has(i)){var a=function(){var o=!1;try{var l=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",null,l)}catch{}return o}();e.addEventListener(n,r,a?{passive:!0}:!1),s.add(i)}};qe.removePassiveEventListener=function(e,n,r){e.removeEventListener(n,r),ft.get(n).delete(r.name||n)};var ft=new Map;Object.defineProperty(Ue,"__esModule",{value:!0});var il=rl,sl=ol(il),al=qe;function ol(t){return t&&t.__esModule?t:{default:t}}var ll=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,sl.default)(e,n)},D={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var r=ll(function(i){D.scrollHandler(e)},n);D.scrollSpyContainers.push(e),(0,al.addPassiveEventListener)(e,"scroll",r)}},isMounted:function(e){return D.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=D.scrollSpyContainers[D.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(r){return r(D.currentPositionX(e),D.currentPositionY(e))})},addStateHandler:function(e){D.spySetState.push(e)},addSpyHandler:function(e,n){var r=D.scrollSpyContainers[D.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(e),e(D.currentPositionX(n),D.currentPositionY(n))},updateStates:function(){D.spySetState.forEach(function(e){return e()})},unmount:function(e,n){D.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),D.spySetState&&D.spySetState.length&&D.spySetState.indexOf(e)>-1&&D.spySetState.splice(D.spySetState.indexOf(e),1),document.removeEventListener("scroll",D.scrollHandler)},update:function(){return D.scrollSpyContainers.forEach(function(e){return D.scrollHandler(e)})}};Ue.default=D;var Le={},Ye={};Object.defineProperty(Ye,"__esModule",{value:!0});var cl=function(e,n){var r=e.indexOf("#")===0?e.substring(1):e,i=r?"#"+r:"",s=window&&window.location,a=i?s.pathname+s.search+i:s.pathname+s.search;n?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},dl=function(){return window.location.hash.replace(/^#/,"")},ul=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},fl=function(e){return getComputedStyle(e).position!=="static"},Xt=function(e,n){for(var r=e.offsetTop,i=e.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},pl=function(e,n,r){if(r)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(fl(e)){if(n.offsetParent!==e){var i=function(c){return c===e||c===document},s=Xt(n,i),a=s.offsetTop,o=s.offsetParent;if(o!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(c){return c===document};return Xt(n,l).offsetTop-Xt(e,l).offsetTop};Ye.default={updateHash:cl,getHash:dl,filterElementInContainer:ul,scrollOffset:pl};var Lt={},Yn={};Object.defineProperty(Yn,"__esModule",{value:!0});Yn.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var Xn={};Object.defineProperty(Xn,"__esModule",{value:!0});var hl=qe,ml=["mousedown","mousewheel","touchmove","keydown"];Xn.default={subscribe:function(e){return typeof document<"u"&&ml.forEach(function(n){return(0,hl.addPassiveEventListener)(document,n,e)})}};var Xe={};Object.defineProperty(Xe,"__esModule",{value:!0});var kn={registered:{},scrollEvent:{register:function(e,n){kn.registered[e]=n},remove:function(e){kn.registered[e]=null}}};Xe.default=kn;Object.defineProperty(Lt,"__esModule",{value:!0});var gl=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bl=Ye;At(bl);var wl=Yn,Or=At(wl),vl=Xn,xl=At(vl),yl=Xe,ie=At(yl);function At(t){return t&&t.__esModule?t:{default:t}}var Di=function(e){return Or.default[e.smooth]||Or.default.defaultEasing},Sl=function(e){return typeof e=="function"?e:function(){return e}},El=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Mn=function(){return El()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),Bi=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},Fi=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},Vi=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},Tl=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},Pl=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},_l=function t(e,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){ie.default.registered.end&&ie.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:e(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var s=t.bind(null,e,n);Mn.call(window,s);return}ie.default.registered.end&&ie.default.registered.end(i.to,i.target,i.currentPosition)},Kn=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},Ke=function(e,n,r,i){n.data=n.data||Bi(),window.clearTimeout(n.data.delayTimeout);var s=function(){n.data.cancel=!0};if(xl.default.subscribe(s),Kn(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?Fi(n):Vi(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){ie.default.registered.end&&ie.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=Sl(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var a=Di(n),o=_l.bind(null,a,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){ie.default.registered.begin&&ie.default.registered.begin(n.data.to,n.data.target),Mn.call(window,o)},n.delay);return}ie.default.registered.begin&&ie.default.registered.begin(n.data.to,n.data.target),Mn.call(window,o)},It=function(e){return e=gl({},e),e.data=e.data||Bi(),e.absolute=!0,e},Ol=function(e){Ke(0,It(e))},Cl=function(e,n){Ke(e,It(n))},kl=function(e){e=It(e),Kn(e),Ke(e.horizontal?Tl(e):Pl(e),e)},Ml=function(e,n){n=It(n),Kn(n);var r=n.horizontal?Fi(n):Vi(n);Ke(e+r,n)};Lt.default={animateTopScroll:Ke,getAnimationType:Di,scrollToTop:Ol,scrollToBottom:kl,scrollTo:Cl,scrollMore:Ml};Object.defineProperty(Le,"__esModule",{value:!0});var Ll=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Al=Ye,Il=Qn(Al),Rl=Lt,jl=Qn(Rl),$l=Xe,tt=Qn($l);function Qn(t){return t&&t.__esModule?t:{default:t}}var nt={},Cr=void 0;Le.default={unmount:function(){nt={}},register:function(e,n){nt[e]=n},unregister:function(e){delete nt[e]},get:function(e){return nt[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return Cr=e},getActiveLink:function(){return Cr},scrollTo:function(e,n){var r=this.get(e);if(!r){console.warn("target Element not found");return}n=Ll({},n,{absolute:!1});var i=n.containerId,s=n.container,a=void 0;i?a=document.getElementById(i):s&&s.nodeType?a=s:a=document,n.absolute=!0;var o=n.horizontal,l=Il.default.scrollOffset(a,r,o)+(n.offset||0);if(!n.smooth){tt.default.registered.begin&&tt.default.registered.begin(e,r),a===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):a.scrollTop=l,tt.default.registered.end&&tt.default.registered.end(e,r);return}jl.default.animateTopScroll(l,n,e,r)}};var Rt={};Object.defineProperty(Rt,"__esModule",{value:!0});var Nl=Ye,Kt=zl(Nl);function zl(t){return t&&t.__esModule?t:{default:t}}var Hl={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var r=this.scroller,i=r.get(e);if(i&&(n||e!==r.getActiveLink())){var s=this.containers[e]||document;r.scrollTo(e,{container:s})}},getHash:function(){return Kt.default.getHash()},changeHash:function(e,n){this.isInitialized()&&Kt.default.getHash()!==e&&Kt.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Rt.default=Hl;Object.defineProperty(Ge,"__esModule",{value:!0});var rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Dl=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Bl=_,kr=Qe(Bl),Fl=Ue,it=Qe(Fl),Vl=Le,Wl=Qe(Vl),Gl=We,H=Qe(Gl),Ul=Rt,we=Qe(Ul);function Qe(t){return t&&t.__esModule?t:{default:t}}function ql(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Yl(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Xl(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Mr={to:H.default.string.isRequired,containerId:H.default.string,container:H.default.object,activeClass:H.default.string,activeStyle:H.default.object,spy:H.default.bool,horizontal:H.default.bool,smooth:H.default.oneOfType([H.default.bool,H.default.string]),offset:H.default.number,delay:H.default.number,isDynamic:H.default.bool,onClick:H.default.func,duration:H.default.oneOfType([H.default.number,H.default.func]),absolute:H.default.bool,onSetActive:H.default.func,onSetInactive:H.default.func,ignoreCancelEvents:H.default.bool,hashSpy:H.default.bool,saveHashHistory:H.default.bool,spyThrottle:H.default.number};Ge.default=function(t,e){var n=e||Wl.default,r=function(s){Xl(a,s);function a(o){ql(this,a);var l=Yl(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,o));return i.call(l),l.state={active:!1},l}return Dl(a,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,d=this.props.container;return l&&!d?document.getElementById(l):d&&d.nodeType?d:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();it.default.isMounted(l)||it.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(we.default.isMounted()||we.default.mount(n),we.default.mapContainer(this.props.to,l)),it.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){it.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var d={};this.state&&this.state.active?d=rt({},this.props.style,this.props.activeStyle):d=rt({},this.props.style);var c=rt({},this.props);for(var u in Mr)c.hasOwnProperty(u)&&delete c[u];return c.className=l,c.style=d,c.onClick=this.handleClick,kr.default.createElement(t,c)}}]),a}(kr.default.PureComponent),i=function(){var a=this;this.scrollTo=function(o,l){n.scrollTo(o,rt({},a.state,l))},this.handleClick=function(o){a.props.onClick&&a.props.onClick(o),o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault(),a.scrollTo(a.props.to,a.props)},this.spyHandler=function(o,l){var d=a.getScrollSpyContainer();if(!(we.default.isMounted()&&!we.default.isInitialized())){var c=a.props.horizontal,u=a.props.to,h=null,b=void 0,p=void 0;if(c){var m=0,y=0,f=0;if(d.getBoundingClientRect){var g=d.getBoundingClientRect();f=g.left}if(!h||a.props.isDynamic){if(h=n.get(u),!h)return;var w=h.getBoundingClientRect();m=w.left-f+o,y=m+w.width}var S=o-a.props.offset;b=S>=Math.floor(m)&&S<Math.floor(y),p=S<Math.floor(m)||S>=Math.floor(y)}else{var E=0,P=0,L=0;if(d.getBoundingClientRect){var k=d.getBoundingClientRect();L=k.top}if(!h||a.props.isDynamic){if(h=n.get(u),!h)return;var O=h.getBoundingClientRect();E=O.top-L+l,P=E+O.height}var T=l-a.props.offset;b=T>=Math.floor(E)&&T<Math.floor(P),p=T<Math.floor(E)||T>=Math.floor(P)}var A=n.getActiveLink();if(p){if(u===A&&n.setActiveLink(void 0),a.props.hashSpy&&we.default.getHash()===u){var M=a.props.saveHashHistory,C=M===void 0?!1:M;we.default.changeHash("",C)}a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive(u,h))}if(b&&(A!==u||a.state.active===!1)){n.setActiveLink(u);var I=a.props.saveHashHistory,z=I===void 0?!1:I;a.props.hashSpy&&we.default.changeHash(u,z),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(u,h))}}}};return r.propTypes=Mr,r.defaultProps={offset:0},r};Object.defineProperty(qn,"__esModule",{value:!0});var Kl=_,Lr=Wi(Kl),Ql=Ge,Jl=Wi(Ql);function Wi(t){return t&&t.__esModule?t:{default:t}}function Zl(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ar(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function ec(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var tc=function(t){ec(e,t);function e(){var n,r,i,s;Zl(this,e);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return s=(r=(i=Ar(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(o))),i),i.render=function(){return Lr.default.createElement("a",i.props,i.props.children)},r),Ar(i,s)}return e}(Lr.default.Component);qn.default=(0,Jl.default)(tc);var Jn={};Object.defineProperty(Jn,"__esModule",{value:!0});var nc=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),rc=_,Ir=Gi(rc),ic=Ge,sc=Gi(ic);function Gi(t){return t&&t.__esModule?t:{default:t}}function ac(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function oc(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function lc(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var cc=function(t){lc(e,t);function e(){return ac(this,e),oc(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return nc(e,[{key:"render",value:function(){return Ir.default.createElement("button",this.props,this.props.children)}}]),e}(Ir.default.Component);Jn.default=(0,sc.default)(cc);var Zn={},jt={};Object.defineProperty(jt,"__esModule",{value:!0});var dc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uc=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),fc=_,Rr=$t(fc),pc=As;$t(pc);var hc=Le,jr=$t(hc),mc=We,$r=$t(mc);function $t(t){return t&&t.__esModule?t:{default:t}}function gc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function bc(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function wc(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}jt.default=function(t){var e=function(n){wc(r,n);function r(i){gc(this,r);var s=bc(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return s.childBindings={domNode:null},s}return uc(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;jr.default.unregister(this.props.name)}},{key:"registerElems",value:function(s){jr.default.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return Rr.default.createElement(t,dc({},this.props,{parentBindings:this.childBindings}))}}]),r}(Rr.default.Component);return e.propTypes={name:$r.default.string,id:$r.default.string},e};Object.defineProperty(Zn,"__esModule",{value:!0});var Nr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vc=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),xc=_,zr=er(xc),yc=jt,Sc=er(yc),Ec=We,Hr=er(Ec);function er(t){return t&&t.__esModule?t:{default:t}}function Tc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pc(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function _c(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Ui=function(t){_c(e,t);function e(){return Tc(this,e),Pc(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return vc(e,[{key:"render",value:function(){var r=this,i=Nr({},this.props);return delete i.name,i.parentBindings&&delete i.parentBindings,zr.default.createElement("div",Nr({},i,{ref:function(a){r.props.parentBindings.domNode=a}}),this.props.children)}}]),e}(zr.default.Component);Ui.propTypes={name:Hr.default.string,id:Hr.default.string};Zn.default=(0,Sc.default)(Ui);var Qt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Dr=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function Br(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Fr(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Vr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var st=_,ye=Ue,Jt=Le,B=We,ve=Rt,Wr={to:B.string.isRequired,containerId:B.string,container:B.object,activeClass:B.string,spy:B.bool,smooth:B.oneOfType([B.bool,B.string]),offset:B.number,delay:B.number,isDynamic:B.bool,onClick:B.func,duration:B.oneOfType([B.number,B.func]),absolute:B.bool,onSetActive:B.func,onSetInactive:B.func,ignoreCancelEvents:B.bool,hashSpy:B.bool,spyThrottle:B.number},Oc={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Jt,i=function(a){Vr(o,a);function o(l){Br(this,o);var d=Fr(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,l));return s.call(d),d.state={active:!1},d}return Dr(o,[{key:"getScrollSpyContainer",value:function(){var d=this.props.containerId,c=this.props.container;return d?document.getElementById(d):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var d=this.getScrollSpyContainer();ye.isMounted(d)||ye.mount(d,this.props.spyThrottle),this.props.hashSpy&&(ve.isMounted()||ve.mount(r),ve.mapContainer(this.props.to,d)),this.props.spy&&ye.addStateHandler(this.stateHandler),ye.addSpyHandler(this.spyHandler,d),this.setState({container:d})}}},{key:"componentWillUnmount",value:function(){ye.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var d="";this.state&&this.state.active?d=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():d=this.props.className;var c=Qt({},this.props);for(var u in Wr)c.hasOwnProperty(u)&&delete c[u];return c.className=d,c.onClick=this.handleClick,st.createElement(e,c)}}]),o}(st.Component),s=function(){var o=this;this.scrollTo=function(l,d){r.scrollTo(l,Qt({},o.state,d))},this.handleClick=function(l){o.props.onClick&&o.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),o.scrollTo(o.props.to,o.props)},this.stateHandler=function(){r.getActiveLink()!==o.props.to&&(o.state!==null&&o.state.active&&o.props.onSetInactive&&o.props.onSetInactive(),o.setState({active:!1}))},this.spyHandler=function(l){var d=o.getScrollSpyContainer();if(!(ve.isMounted()&&!ve.isInitialized())){var c=o.props.to,u=null,h=0,b=0,p=0;if(d.getBoundingClientRect){var m=d.getBoundingClientRect();p=m.top}if(!u||o.props.isDynamic){if(u=r.get(c),!u)return;var y=u.getBoundingClientRect();h=y.top-p+l,b=h+y.height}var f=l-o.props.offset,g=f>=Math.floor(h)&&f<Math.floor(b),w=f<Math.floor(h)||f>=Math.floor(b),S=r.getActiveLink();if(w)return c===S&&r.setActiveLink(void 0),o.props.hashSpy&&ve.getHash()===c&&ve.changeHash(),o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive()),ye.updateStates();if(g&&S!==c)return r.setActiveLink(c),o.props.hashSpy&&ve.changeHash(c),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(c)),ye.updateStates()}}};return i.propTypes=Wr,i.defaultProps={offset:0},i},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Vr(i,r);function i(s){Br(this,i);var a=Fr(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,s));return a.childBindings={domNode:null},a}return Dr(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Jt.unregister(this.props.name)}},{key:"registerElems",value:function(a){Jt.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return st.createElement(e,Qt({},this.props,{parentBindings:this.childBindings}))}}]),i}(st.Component);return n.propTypes={name:B.string,id:B.string},n}},Cc=Oc;Object.defineProperty(F,"__esModule",{value:!0});F.Helpers=F.ScrollElement=F.ScrollLink=rs=F.animateScroll=F.scrollSpy=F.Events=F.scroller=F.Element=F.Button=F.Link=void 0;var kc=qn,qi=fe(kc),Mc=Jn,Yi=fe(Mc),Lc=Zn,Xi=fe(Lc),Ac=Le,Ki=fe(Ac),Ic=Xe,Qi=fe(Ic),Rc=Ue,Ji=fe(Rc),jc=Lt,Zi=fe(jc),$c=Ge,es=fe($c),Nc=jt,ts=fe(Nc),zc=Cc,ns=fe(zc);function fe(t){return t&&t.__esModule?t:{default:t}}F.Link=qi.default;F.Button=Yi.default;F.Element=Xi.default;F.scroller=Ki.default;F.Events=Qi.default;F.scrollSpy=Ji.default;var rs=F.animateScroll=Zi.default;F.ScrollLink=es.default;F.ScrollElement=ts.default;F.Helpers=ns.default;F.default={Link:qi.default,Button:Yi.default,Element:Xi.default,scroller:Ki.default,Events:Qi.default,scrollSpy:Ji.default,animateScroll:Zi.default,ScrollLink:es.default,ScrollElement:ts.default,Helpers:ns.default};const Hc=()=>{const[t,e]=_.useState(0),n=()=>{window.scrollY>250?e(1):e(0)},r=()=>{rs.scrollToTop({duration:500,smooth:"easeInOutQuart"})};return _.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]),v.jsx(Ho,{style:{opacity:t},type:"button",title:"Вгору",onClick:r,children:v.jsx(me,{iconName:"topscroll"})})};function Gr(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function tr(t,e){t===void 0&&(t={}),e===void 0&&(e={}),Object.keys(e).forEach(n=>{typeof t[n]>"u"?t[n]=e[n]:Gr(e[n])&&Gr(t[n])&&Object.keys(e[n]).length>0&&tr(t[n],e[n])})}const is={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Ae(){const t=typeof document<"u"?document:{};return tr(t,is),t}const Dc={document:is,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function ee(){const t=typeof window<"u"?window:{};return tr(t,Dc),t}function Bc(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function Fc(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function Ln(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function vt(){return Date.now()}function Vc(t){const e=ee();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function Wc(t,e){e===void 0&&(e="x");const n=ee();let r,i,s;const a=Vc(t);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(o=>o.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix(i==="none"?"":i)):(s=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),e==="y"&&(n.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function at(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function Gc(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function Q(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!Gc(r)){const i=Object.keys(Object(r)).filter(s=>e.indexOf(s)<0);for(let s=0,a=i.length;s<a;s+=1){const o=i[s],l=Object.getOwnPropertyDescriptor(r,o);l!==void 0&&l.enumerable&&(at(t[o])&&at(r[o])?r[o].__swiper__?t[o]=r[o]:Q(t[o],r[o]):!at(t[o])&&at(r[o])?(t[o]={},r[o].__swiper__?t[o]=r[o]:Q(t[o],r[o])):t[o]=r[o])}}}return t}function ot(t,e,n){t.style.setProperty(e,n)}function ss(t){let{swiper:e,targetPosition:n,side:r}=t;const i=ee(),s=-e.translate;let a=null,o;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const d=n>s?"next":"prev",c=(h,b)=>d==="next"&&h>=b||d==="prev"&&h<=b,u=()=>{o=new Date().getTime(),a===null&&(a=o);const h=Math.max(Math.min((o-a)/l,1),0),b=.5-Math.cos(h*Math.PI)/2;let p=s+b*(n-s);if(c(p,n)&&(p=n),e.wrapperEl.scrollTo({[r]:p}),c(p,n)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:p})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(u)};u()}function ce(t,e){return e===void 0&&(e=""),[...t.children].filter(n=>n.matches(e))}function xt(t){try{console.warn(t);return}catch{}}function yt(t,e){e===void 0&&(e=[]);const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:Bc(e)),n}function Uc(t,e){const n=[];for(;t.previousElementSibling;){const r=t.previousElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function qc(t,e){const n=[];for(;t.nextElementSibling;){const r=t.nextElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function xe(t,e){return ee().getComputedStyle(t,null).getPropertyValue(e)}function St(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function as(t,e){const n=[];let r=t.parentElement;for(;r;)e?r.matches(e)&&n.push(r):n.push(r),r=r.parentElement;return n}function An(t,e,n){const r=ee();return n?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}function pe(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}let Zt;function Yc(){const t=ee(),e=Ae();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function os(){return Zt||(Zt=Yc()),Zt}let en;function Xc(t){let{userAgent:e}=t===void 0?{}:t;const n=os(),r=ee(),i=r.navigator.platform,s=e||r.navigator.userAgent,a={ios:!1,android:!1},o=r.screen.width,l=r.screen.height,d=s.match(/(Android);?[\s\/]+([\d.]+)?/);let c=s.match(/(iPad).*OS\s([\d_]+)/);const u=s.match(/(iPod)(.*OS\s([\d_]+))?/),h=!c&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),b=i==="Win32";let p=i==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&p&&n.touch&&m.indexOf(`${o}x${l}`)>=0&&(c=s.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),p=!1),d&&!b&&(a.os="android",a.android=!0),(c||h||u)&&(a.os="ios",a.ios=!0),a}function ls(t){return t===void 0&&(t={}),en||(en=Xc(t)),en}let tn;function Kc(){const t=ee(),e=ls();let n=!1;function r(){const o=t.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(r()){const o=String(t.navigator.userAgent);if(o.includes("Version/")){const[l,d]=o.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));n=l<16||l===16&&d<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),s=r(),a=s||i&&e.ios;return{isSafari:n||s,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function Qc(){return tn||(tn=Kc()),tn}function Jc(t){let{swiper:e,on:n,emit:r}=t;const i=ee();let s=null,a=null;const o=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(u=>{a=i.requestAnimationFrame(()=>{const{width:h,height:b}=e;let p=h,m=b;u.forEach(y=>{let{contentBoxSize:f,contentRect:g,target:w}=y;w&&w!==e.el||(p=g?g.width:(f[0]||f).inlineSize,m=g?g.height:(f[0]||f).blockSize)}),(p!==h||m!==b)&&o()})}),s.observe(e.el))},d=()=>{a&&i.cancelAnimationFrame(a),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},c=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};n("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",o),i.addEventListener("orientationchange",c)}),n("destroy",()=>{d(),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",c)})}function Zc(t){let{swiper:e,extendParams:n,on:r,emit:i}=t;const s=[],a=ee(),o=function(c,u){u===void 0&&(u={});const h=a.MutationObserver||a.WebkitMutationObserver,b=new h(p=>{if(e.__preventObserver__)return;if(p.length===1){i("observerUpdate",p[0]);return}const m=function(){i("observerUpdate",p[0])};a.requestAnimationFrame?a.requestAnimationFrame(m):a.setTimeout(m,0)});b.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:typeof u.childList>"u"?!0:u.childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),s.push(b)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=as(e.hostEl);for(let u=0;u<c.length;u+=1)o(c[u])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},d=()=>{s.forEach(c=>{c.disconnect()}),s.splice(0,s.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",d)}var ed={on(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const i=n?"unshift":"push";return t.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](e)}),r},once(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function i(){r.off(t,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];e.apply(r,a)}return i.__emitterProxy=e,r.on(t,i,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const r=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[r](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(r=>{typeof e>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,s)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&n.eventsListeners[r].splice(s,1)})}),n},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,n,r;for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],n=s.slice(1,s.length),r=t):(e=s[0].events,n=s[0].data,r=s[0].context||t),n.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(d=>{d.apply(r,[l,...n])}),t.eventsListeners&&t.eventsListeners[l]&&t.eventsListeners[l].forEach(d=>{d.apply(r,n)})}),t}};function td(){const t=this;let e,n;const r=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=r.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=r.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(xe(r,"padding-left")||0,10)-parseInt(xe(r,"padding-right")||0,10),n=n-parseInt(xe(r,"padding-top")||0,10)-parseInt(xe(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function nd(){const t=this;function e(T,A){return parseFloat(T.getPropertyValue(t.getDirectionLabel(A))||0)}const n=t.params,{wrapperEl:r,slidesEl:i,size:s,rtlTranslate:a,wrongRTL:o}=t,l=t.virtual&&n.virtual.enabled,d=l?t.virtual.slides.length:t.slides.length,c=ce(i,`.${t.params.slideClass}, swiper-slide`),u=l?t.virtual.slides.length:c.length;let h=[];const b=[],p=[];let m=n.slidesOffsetBefore;typeof m=="function"&&(m=n.slidesOffsetBefore.call(t));let y=n.slidesOffsetAfter;typeof y=="function"&&(y=n.slidesOffsetAfter.call(t));const f=t.snapGrid.length,g=t.slidesGrid.length;let w=n.spaceBetween,S=-m,E=0,P=0;if(typeof s>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*s:typeof w=="string"&&(w=parseFloat(w)),t.virtualSize=-w,c.forEach(T=>{a?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(ot(r,"--swiper-centered-offset-before",""),ot(r,"--swiper-centered-offset-after",""));const L=n.grid&&n.grid.rows>1&&t.grid;L?t.grid.initSlides(c):t.grid&&t.grid.unsetSlides();let k;const O=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(T=>typeof n.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<u;T+=1){k=0;let A;if(c[T]&&(A=c[T]),L&&t.grid.updateSlide(T,A,c),!(c[T]&&xe(A,"display")==="none")){if(n.slidesPerView==="auto"){O&&(c[T].style[t.getDirectionLabel("width")]="");const M=getComputedStyle(A),C=A.style.transform,I=A.style.webkitTransform;if(C&&(A.style.transform="none"),I&&(A.style.webkitTransform="none"),n.roundLengths)k=t.isHorizontal()?An(A,"width",!0):An(A,"height",!0);else{const z=e(M,"width"),re=e(M,"padding-left"),Ft=e(M,"padding-right"),Ze=e(M,"margin-left"),U=e(M,"margin-right"),ne=M.getPropertyValue("box-sizing");if(ne&&ne==="border-box")k=z+Ze+U;else{const{clientWidth:ks,offsetWidth:Ms}=A;k=z+re+Ft+Ze+U+(Ms-ks)}}C&&(A.style.transform=C),I&&(A.style.webkitTransform=I),n.roundLengths&&(k=Math.floor(k))}else k=(s-(n.slidesPerView-1)*w)/n.slidesPerView,n.roundLengths&&(k=Math.floor(k)),c[T]&&(c[T].style[t.getDirectionLabel("width")]=`${k}px`);c[T]&&(c[T].swiperSlideSize=k),p.push(k),n.centeredSlides?(S=S+k/2+E/2+w,E===0&&T!==0&&(S=S-s/2-w),T===0&&(S=S-s/2-w),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),P%n.slidesPerGroup===0&&h.push(S),b.push(S)):(n.roundLengths&&(S=Math.floor(S)),(P-Math.min(t.params.slidesPerGroupSkip,P))%t.params.slidesPerGroup===0&&h.push(S),b.push(S),S=S+k+w),t.virtualSize+=k+w,E=k,P+=1}}if(t.virtualSize=Math.max(t.virtualSize,s)+y,a&&o&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${t.virtualSize+w}px`),n.setWrapperSize&&(r.style[t.getDirectionLabel("width")]=`${t.virtualSize+w}px`),L&&t.grid.updateWrapperSize(k,h),!n.centeredSlides){const T=[];for(let A=0;A<h.length;A+=1){let M=h[A];n.roundLengths&&(M=Math.floor(M)),h[A]<=t.virtualSize-s&&T.push(M)}h=T,Math.floor(t.virtualSize-s)-Math.floor(h[h.length-1])>1&&h.push(t.virtualSize-s)}if(l&&n.loop){const T=p[0]+w;if(n.slidesPerGroup>1){const A=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/n.slidesPerGroup),M=T*n.slidesPerGroup;for(let C=0;C<A;C+=1)h.push(h[h.length-1]+M)}for(let A=0;A<t.virtual.slidesBefore+t.virtual.slidesAfter;A+=1)n.slidesPerGroup===1&&h.push(h[h.length-1]+T),b.push(b[b.length-1]+T),t.virtualSize+=T}if(h.length===0&&(h=[0]),w!==0){const T=t.isHorizontal()&&a?"marginLeft":t.getDirectionLabel("marginRight");c.filter((A,M)=>!n.cssMode||n.loop?!0:M!==c.length-1).forEach(A=>{A.style[T]=`${w}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let T=0;p.forEach(M=>{T+=M+(w||0)}),T-=w;const A=T-s;h=h.map(M=>M<=0?-m:M>A?A+y:M)}if(n.centerInsufficientSlides){let T=0;if(p.forEach(A=>{T+=A+(w||0)}),T-=w,T<s){const A=(s-T)/2;h.forEach((M,C)=>{h[C]=M-A}),b.forEach((M,C)=>{b[C]=M+A})}}if(Object.assign(t,{slides:c,snapGrid:h,slidesGrid:b,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){ot(r,"--swiper-centered-offset-before",`${-h[0]}px`),ot(r,"--swiper-centered-offset-after",`${t.size/2-p[p.length-1]/2}px`);const T=-t.snapGrid[0],A=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(M=>M+T),t.slidesGrid=t.slidesGrid.map(M=>M+A)}if(u!==d&&t.emit("slidesLengthChange"),h.length!==f&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),b.length!==g&&t.emit("slidesGridLengthChange"),n.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const T=`${n.containerModifierClass}backface-hidden`,A=t.el.classList.contains(T);u<=n.maxBackfaceHiddenSlides?A||t.el.classList.add(T):A&&t.el.classList.remove(T)}}function rd(t){const e=this,n=[],r=e.virtual&&e.params.virtual.enabled;let i=0,s;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const a=o=>r?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{n.push(o)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const o=e.activeIndex+s;if(o>e.slides.length&&!r)break;n.push(a(o))}else n.push(a(e.activeIndex));for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const o=n[s].offsetHeight;i=o>i?o:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function id(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(t.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-n-t.cssOverflowAdjustment()}function sd(t){t===void 0&&(t=this&&this.translate||0);const e=this,n=e.params,{slides:r,rtlTranslate:i,snapGrid:s}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-t;i&&(a=t),r.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=n.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<r.length;l+=1){const d=r[l];let c=d.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const u=(a+(n.centeredSlides?e.minTranslate():0)-c)/(d.swiperSlideSize+o),h=(a-s[0]+(n.centeredSlides?e.minTranslate():0)-c)/(d.swiperSlideSize+o),b=-(a-c),p=b+e.slidesSizesGrid[l],m=b>=0&&b<=e.size-e.slidesSizesGrid[l];(b>=0&&b<e.size-1||p>1&&p<=e.size||b<=0&&p>=e.size)&&(e.visibleSlides.push(d),e.visibleSlidesIndexes.push(l),r[l].classList.add(n.slideVisibleClass)),m&&r[l].classList.add(n.slideFullyVisibleClass),d.progress=i?-u:u,d.originalProgress=i?-h:h}}function ad(t){const e=this;if(typeof t>"u"){const c=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*c||0}const n=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:s,isEnd:a,progressLoop:o}=e;const l=s,d=a;if(r===0)i=0,s=!0,a=!0;else{i=(t-e.minTranslate())/r;const c=Math.abs(t-e.minTranslate())<1,u=Math.abs(t-e.maxTranslate())<1;s=c||i<=0,a=u||i>=1,c&&(i=0),u&&(i=1)}if(n.loop){const c=e.getSlideIndexByData(0),u=e.getSlideIndexByData(e.slides.length-1),h=e.slidesGrid[c],b=e.slidesGrid[u],p=e.slidesGrid[e.slidesGrid.length-1],m=Math.abs(t);m>=h?o=(m-h)/p:o=(m+p-b)/p,o>1&&(o-=1)}Object.assign(e,{progress:i,progressLoop:o,isBeginning:s,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),s&&!l&&e.emit("reachBeginning toEdge"),a&&!d&&e.emit("reachEnd toEdge"),(l&&!s||d&&!a)&&e.emit("fromEdge"),e.emit("progress",i)}const nn=(t,e,n)=>{e&&!t.classList.contains(n)?t.classList.add(n):!e&&t.classList.contains(n)&&t.classList.remove(n)};function od(){const t=this,{slides:e,params:n,slidesEl:r,activeIndex:i}=t,s=t.virtual&&n.virtual.enabled,a=t.grid&&n.grid&&n.grid.rows>1,o=u=>ce(r,`.${n.slideClass}${u}, swiper-slide${u}`)[0];let l,d,c;if(s)if(n.loop){let u=i-t.virtual.slidesBefore;u<0&&(u=t.virtual.slides.length+u),u>=t.virtual.slides.length&&(u-=t.virtual.slides.length),l=o(`[data-swiper-slide-index="${u}"]`)}else l=o(`[data-swiper-slide-index="${i}"]`);else a?(l=e.filter(u=>u.column===i)[0],c=e.filter(u=>u.column===i+1)[0],d=e.filter(u=>u.column===i-1)[0]):l=e[i];l&&(a||(c=qc(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=e[0]),d=Uc(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d===0&&(d=e[e.length-1]))),e.forEach(u=>{nn(u,u===l,n.slideActiveClass),nn(u,u===c,n.slideNextClass),nn(u,u===d,n.slidePrevClass)}),t.emitSlidesClasses()}const pt=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,r=e.closest(n());if(r){let i=r.querySelector(`.${t.params.lazyPreloaderClass}`);!i&&t.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},rn=(t,e)=>{if(!t.slides[e])return;const n=t.slides[e].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},In=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const n=t.slides.length;if(!n||!e||e<0)return;e=Math.min(e,n);const r=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),i=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const a=i,o=[a-e];o.push(...Array.from({length:e}).map((l,d)=>a+r+d)),t.slides.forEach((l,d)=>{o.includes(l.column)&&rn(t,d)});return}const s=i+r-1;if(t.params.rewind||t.params.loop)for(let a=i-e;a<=s+e;a+=1){const o=(a%n+n)%n;(o<i||o>s)&&rn(t,o)}else for(let a=Math.max(i-e,0);a<=Math.min(s+e,n-1);a+=1)a!==i&&(a>s||a<i)&&rn(t,a)};function ld(t){const{slidesGrid:e,params:n}=t,r=t.rtlTranslate?t.translate:-t.translate;let i;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?r>=e[s]&&r<e[s+1]-(e[s+1]-e[s])/2?i=s:r>=e[s]&&r<e[s+1]&&(i=s+1):r>=e[s]&&(i=s);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function cd(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:a,snapIndex:o}=e;let l=t,d;const c=b=>{let p=b-e.virtual.slidesBefore;return p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),p};if(typeof l>"u"&&(l=ld(e)),r.indexOf(n)>=0)d=r.indexOf(n);else{const b=Math.min(i.slidesPerGroupSkip,l);d=b+Math.floor((l-b)/i.slidesPerGroup)}if(d>=r.length&&(d=r.length-1),l===s&&!e.params.loop){d!==o&&(e.snapIndex=d,e.emit("snapIndexChange"));return}if(l===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=c(l);return}const u=e.grid&&i.grid&&i.grid.rows>1;let h;if(e.virtual&&i.virtual.enabled&&i.loop)h=c(l);else if(u){const b=e.slides.filter(m=>m.column===l)[0];let p=parseInt(b.getAttribute("data-swiper-slide-index"),10);Number.isNaN(p)&&(p=Math.max(e.slides.indexOf(b),0)),h=Math.floor(p/i.grid.rows)}else if(e.slides[l]){const b=e.slides[l].getAttribute("data-swiper-slide-index");b?h=parseInt(b,10):h=l}else h=l;Object.assign(e,{previousSnapIndex:o,snapIndex:d,previousRealIndex:a,realIndex:h,previousIndex:s,activeIndex:l}),e.initialized&&In(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==h&&e.emit("realIndexChange"),e.emit("slideChange"))}function dd(t,e){const n=this,r=n.params;let i=t.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(o=>{!i&&o.matches&&o.matches(`.${r.slideClass}, swiper-slide`)&&(i=o)});let s=!1,a;if(i){for(let o=0;o<n.slides.length;o+=1)if(n.slides[o]===i){s=!0,a=o;break}}if(i&&s)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var ud={updateSize:td,updateSlides:nd,updateAutoHeight:rd,updateSlidesOffset:id,updateSlidesProgress:sd,updateProgress:ad,updateSlidesClasses:od,updateActiveIndex:cd,updateClickedSlide:dd};function fd(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:s}=e;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=Wc(s,t);return a+=e.cssOverflowAdjustment(),r&&(a=-a),a||0}function pd(t,e){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:a}=n;let o=0,l=0;const d=0;n.isHorizontal()?o=r?-t:t:l=t,i.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?o:l,i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-o:-l:i.virtualTranslate||(n.isHorizontal()?o-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${o}px, ${l}px, ${d}px)`);let c;const u=n.maxTranslate()-n.minTranslate();u===0?c=0:c=(t-n.minTranslate())/u,c!==a&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function hd(){return-this.snapGrid[0]}function md(){return-this.snapGrid[this.snapGrid.length-1]}function gd(t,e,n,r,i){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const s=this,{params:a,wrapperEl:o}=s;if(s.animating&&a.preventInteractionOnTransition)return!1;const l=s.minTranslate(),d=s.maxTranslate();let c;if(r&&t>l?c=l:r&&t<d?c=d:c=t,s.updateProgress(c),a.cssMode){const u=s.isHorizontal();if(e===0)o[u?"scrollLeft":"scrollTop"]=-c;else{if(!s.support.smoothScroll)return ss({swiper:s,targetPosition:-c,side:u?"left":"top"}),!0;o.scrollTo({[u?"left":"top"]:-c,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(h){!s||s.destroyed||h.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var bd={getTranslate:fd,setTranslate:pd,minTranslate:hd,maxTranslate:md,translateTo:gd};function wd(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`,n.wrapperEl.style.transitionDelay=t===0?"0ms":""),n.emit("setTransition",t,e)}function cs(t){let{swiper:e,runCallbacks:n,direction:r,step:i}=t;const{activeIndex:s,previousIndex:a}=e;let o=r;if(o||(s>a?o="next":s<a?o="prev":o="reset"),e.emit(`transition${i}`),n&&s!==a){if(o==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),o==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function vd(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),cs({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function xd(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),cs({swiper:n,runCallbacks:t,direction:e,step:"End"}))}var yd={setTransition:wd,transitionStart:vd,transitionEnd:xd};function Sd(t,e,n,r,i){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const s=this;let a=t;a<0&&(a=0);const{params:o,snapGrid:l,slidesGrid:d,previousIndex:c,activeIndex:u,rtlTranslate:h,wrapperEl:b,enabled:p}=s;if(!p&&!r&&!i||s.destroyed||s.animating&&o.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const m=Math.min(s.params.slidesPerGroupSkip,a);let y=m+Math.floor((a-m)/s.params.slidesPerGroup);y>=l.length&&(y=l.length-1);const f=-l[y];if(o.normalizeSlideIndex)for(let w=0;w<d.length;w+=1){const S=-Math.floor(f*100),E=Math.floor(d[w]*100),P=Math.floor(d[w+1]*100);typeof d[w+1]<"u"?S>=E&&S<P-(P-E)/2?a=w:S>=E&&S<P&&(a=w+1):S>=E&&(a=w)}if(s.initialized&&a!==u&&(!s.allowSlideNext&&(h?f>s.translate&&f>s.minTranslate():f<s.translate&&f<s.minTranslate())||!s.allowSlidePrev&&f>s.translate&&f>s.maxTranslate()&&(u||0)!==a))return!1;a!==(c||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(f);let g;if(a>u?g="next":a<u?g="prev":g="reset",h&&-f===s.translate||!h&&f===s.translate)return s.updateActiveIndex(a),o.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),o.effect!=="slide"&&s.setTranslate(f),g!=="reset"&&(s.transitionStart(n,g),s.transitionEnd(n,g)),!1;if(o.cssMode){const w=s.isHorizontal(),S=h?f:-f;if(e===0){const E=s.virtual&&s.params.virtual.enabled;E&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),E&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{b[w?"scrollLeft":"scrollTop"]=S})):b[w?"scrollLeft":"scrollTop"]=S,E&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return ss({swiper:s,targetPosition:S,side:w?"left":"top"}),!0;b.scrollTo({[w?"left":"top"]:S,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(f),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,r),s.transitionStart(n,g),e===0?s.transitionEnd(n,g):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(S){!s||s.destroyed||S.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,g))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function Ed(t,e,n,r){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);const s=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=t;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let o;if(s){const h=a*i.params.grid.rows;o=i.slides.filter(b=>b.getAttribute("data-swiper-slide-index")*1===h)[0].column}else o=i.getSlideIndexByData(a);const l=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:d}=i.params;let c=i.params.slidesPerView;c==="auto"?c=i.slidesPerViewDynamic():(c=Math.ceil(parseFloat(i.params.slidesPerView,10)),d&&c%2===0&&(c=c+1));let u=l-o<c;if(d&&(u=u||o<Math.ceil(c/2)),r&&d&&i.params.slidesPerView!=="auto"&&!s&&(u=!1),u){const h=d?o<i.activeIndex?"prev":"next":o-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?o+1:o-l+1,slideRealIndex:h==="next"?i.realIndex:void 0})}if(s){const h=a*i.params.grid.rows;a=i.slides.filter(b=>b.getAttribute("data-swiper-slide-index")*1===h)[0].column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,e,n,r)}),i}function Td(t,e,n){e===void 0&&(e=!0);const r=this,{enabled:i,params:s,animating:a}=r;if(!i||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);let o=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(o=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<s.slidesPerGroupSkip?1:o,d=r.virtual&&s.virtual.enabled;if(s.loop){if(a&&!d&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,t,e,n)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,t,e,n):r.slideTo(r.activeIndex+l,t,e,n)}function Pd(t,e,n){e===void 0&&(e=!0);const r=this,{params:i,snapGrid:s,slidesGrid:a,rtlTranslate:o,enabled:l,animating:d}=r;if(!l||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);const c=r.virtual&&i.virtual.enabled;if(i.loop){if(d&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const u=o?r.translate:-r.translate;function h(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const b=h(u),p=s.map(f=>h(f));let m=s[p.indexOf(b)-1];if(typeof m>"u"&&i.cssMode){let f;s.forEach((g,w)=>{b>=g&&(f=w)}),typeof f<"u"&&(m=s[f>0?f-1:f])}let y=0;if(typeof m<"u"&&(y=a.indexOf(m),y<0&&(y=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(y=y-r.slidesPerViewDynamic("previous",!0)+1,y=Math.max(y,0))),i.rewind&&r.isBeginning){const f=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(f,t,e,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(y,t,e,n)}),!0;return r.slideTo(y,t,e,n)}function _d(t,e,n){e===void 0&&(e=!0);const r=this;if(!r.destroyed)return typeof t>"u"&&(t=r.params.speed),r.slideTo(r.activeIndex,t,e,n)}function Od(t,e,n,r){e===void 0&&(e=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);let s=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,s),o=a+Math.floor((s-a)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[o]){const d=i.snapGrid[o],c=i.snapGrid[o+1];l-d>(c-d)*r&&(s+=i.params.slidesPerGroup)}else{const d=i.snapGrid[o-1],c=i.snapGrid[o];l-d<=(c-d)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,t,e,n)}function Cd(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:n}=t,r=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let i=t.clickedIndex,s;const a=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;s=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<t.loopedSlides-r/2||i>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),i=t.getSlideIndex(ce(n,`${a}[data-swiper-slide-index="${s}"]`)[0]),Ln(()=>{t.slideTo(i)})):t.slideTo(i):i>t.slides.length-r?(t.loopFix(),i=t.getSlideIndex(ce(n,`${a}[data-swiper-slide-index="${s}"]`)[0]),Ln(()=>{t.slideTo(i)})):t.slideTo(i)}else t.slideTo(i)}var kd={slideTo:Sd,slideToLoop:Ed,slideNext:Td,slidePrev:Pd,slideReset:_d,slideToClosest:Od,slideToClickedSlide:Cd};function Md(t){const e=this,{params:n,slidesEl:r}=e;if(!n.loop||e.virtual&&e.params.virtual.enabled)return;const i=()=>{ce(r,`.${n.slideClass}, swiper-slide`).forEach((u,h)=>{u.setAttribute("data-swiper-slide-index",h)})},s=e.grid&&n.grid&&n.grid.rows>1,a=n.slidesPerGroup*(s?n.grid.rows:1),o=e.slides.length%a!==0,l=s&&e.slides.length%n.grid.rows!==0,d=c=>{for(let u=0;u<c;u+=1){const h=e.isElement?yt("swiper-slide",[n.slideBlankClass]):yt("div",[n.slideClass,n.slideBlankClass]);e.slidesEl.append(h)}};if(o){if(n.loopAddBlankSlides){const c=a-e.slides.length%a;d(c),e.recalcSlides(),e.updateSlides()}else xt("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const c=n.grid.rows-e.slides.length%n.grid.rows;d(c),e.recalcSlides(),e.updateSlides()}else xt("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();e.loopFix({slideRealIndex:t,direction:n.centeredSlides?void 0:"next"})}function Ld(t){let{slideRealIndex:e,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:s,byController:a,byMousewheel:o}=t===void 0?{}:t;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:d,allowSlidePrev:c,allowSlideNext:u,slidesEl:h,params:b}=l,{centeredSlides:p}=b;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&b.virtual.enabled){n&&(!b.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):b.centeredSlides&&l.snapIndex<b.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=c,l.allowSlideNext=u,l.emit("loopFix");return}let m=b.slidesPerView;m==="auto"?m=l.slidesPerViewDynamic():(m=Math.ceil(parseFloat(b.slidesPerView,10)),p&&m%2===0&&(m=m+1));const y=b.slidesPerGroupAuto?m:b.slidesPerGroup;let f=y;f%y!==0&&(f+=y-f%y),f+=b.loopAdditionalSlides,l.loopedSlides=f;const g=l.grid&&b.grid&&b.grid.rows>1;d.length<m+f?xt("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):g&&b.grid.fill==="row"&&xt("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const w=[],S=[];let E=l.activeIndex;typeof s>"u"?s=l.getSlideIndex(d.filter(C=>C.classList.contains(b.slideActiveClass))[0]):E=s;const P=r==="next"||!r,L=r==="prev"||!r;let k=0,O=0;const T=g?Math.ceil(d.length/b.grid.rows):d.length,M=(g?d[s].column:s)+(p&&typeof i>"u"?-m/2+.5:0);if(M<f){k=Math.max(f-M,y);for(let C=0;C<f-M;C+=1){const I=C-Math.floor(C/T)*T;if(g){const z=T-I-1;for(let re=d.length-1;re>=0;re-=1)d[re].column===z&&w.push(re)}else w.push(T-I-1)}}else if(M+m>T-f){O=Math.max(M-(T-f*2),y);for(let C=0;C<O;C+=1){const I=C-Math.floor(C/T)*T;g?d.forEach((z,re)=>{z.column===I&&S.push(re)}):S.push(I)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),L&&w.forEach(C=>{d[C].swiperLoopMoveDOM=!0,h.prepend(d[C]),d[C].swiperLoopMoveDOM=!1}),P&&S.forEach(C=>{d[C].swiperLoopMoveDOM=!0,h.append(d[C]),d[C].swiperLoopMoveDOM=!1}),l.recalcSlides(),b.slidesPerView==="auto"?l.updateSlides():g&&(w.length>0&&L||S.length>0&&P)&&l.slides.forEach((C,I)=>{l.grid.updateSlide(I,C,l.slides)}),b.watchSlidesProgress&&l.updateSlidesOffset(),n){if(w.length>0&&L){if(typeof e>"u"){const C=l.slidesGrid[E],z=l.slidesGrid[E+k]-C;o?l.setTranslate(l.translate-z):(l.slideTo(E+Math.ceil(k),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-z,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-z))}else if(i){const C=g?w.length/b.grid.rows:w.length;l.slideTo(l.activeIndex+C,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(S.length>0&&P)if(typeof e>"u"){const C=l.slidesGrid[E],z=l.slidesGrid[E-O]-C;o?l.setTranslate(l.translate-z):(l.slideTo(E-O,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-z,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-z))}else{const C=g?S.length/b.grid.rows:S.length;l.slideTo(l.activeIndex-C,0,!1,!0)}}if(l.allowSlidePrev=c,l.allowSlideNext=u,l.controller&&l.controller.control&&!a){const C={slideRealIndex:e,direction:r,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(I=>{!I.destroyed&&I.params.loop&&I.loopFix({...C,slideTo:I.params.slidesPerView===b.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...C,slideTo:l.controller.control.params.slidesPerView===b.slidesPerView?n:!1})}l.emit("loopFix")}function Ad(){const t=this,{params:e,slidesEl:n}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const r=[];t.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[s]=i}),t.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var Id={loopCreate:Md,loopFix:Ld,loopDestroy:Ad};function Rd(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function jd(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var $d={setGrabCursor:Rd,unsetGrabCursor:jd};function Nd(t,e){e===void 0&&(e=this);function n(r){if(!r||r===Ae()||r===ee())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(t);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(e)}function Ur(t,e,n){const r=ee(),{params:i}=t,s=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return s&&(n<=a||n>=r.innerWidth-a)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function zd(t){const e=this,n=Ae();let r=t;r.originalEvent&&(r=r.originalEvent);const i=e.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Ur(e,r,r.targetTouches[0].pageX);return}const{params:s,touches:a,enabled:o}=e;if(!o||!s.simulateTouch&&r.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=r.target;if(s.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const d=!!s.noSwipingClass&&s.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;d&&r.target&&r.target.shadowRoot&&c&&(l=c[0]);const u=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,h=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(h?Nd(u,l):l.closest(u))){e.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const b=a.currentX,p=a.currentY;if(!Ur(e,r,b))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=b,a.startY=p,i.touchStartTime=vt(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let m=!0;l.matches(i.focusableElements)&&(m=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const y=m&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||y)&&!l.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function Hd(t){const e=Ae(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:a,enabled:o}=n;if(!o||!i.simulateTouch&&t.pointerType==="mouse")return;let l=t;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let d;if(l.type==="touchmove"){if(d=[...l.changedTouches].filter(P=>P.identifier===r.touchId)[0],!d||d.identifier!==r.touchId)return}else d=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const c=d.pageX,u=d.pageY;if(l.preventedByNestedSwiper){s.startX=c,s.startY=u;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:c,startY:u,currentX:c,currentY:u}),r.touchStartTime=vt());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(u<s.startY&&n.translate<=n.maxTranslate()||u>s.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(c<s.startX&&n.translate<=n.maxTranslate()||c>s.startX&&n.translate>=n.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=c,s.currentY=u;const h=s.currentX-s.startX,b=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(h**2+b**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let P;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:h*h+b*b>=25&&(P=Math.atan2(Math.abs(b),Math.abs(h))*180/Math.PI,r.isScrolling=n.isHorizontal()?P>i.touchAngle:90-P>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling||l.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let p=n.isHorizontal()?h:b,m=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(p=Math.abs(p)*(a?1:-1),m=Math.abs(m)*(a?1:-1)),s.diff=p,p*=i.touchRatio,a&&(p=-p,m=-m);const y=n.touchesDirection;n.swipeDirection=p>0?"prev":"next",n.touchesDirection=m>0?"prev":"next";const f=n.params.loop&&!i.cssMode,g=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(f&&g&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const P=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(P)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let w;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&y!==n.touchesDirection&&f&&g&&Math.abs(p)>=1){Object.assign(s,{startX:c,startY:u,currentX:c,currentY:u,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=p+r.startTranslate;let S=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),p>0?(f&&g&&!w&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+p)**E))):p<0&&(f&&g&&!w&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-p)**E))),S&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(p)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function Dd(t){const e=this,n=e.touchEventsData;let r=t;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(E=>E.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:o,rtlTranslate:l,slidesGrid:d,enabled:c}=e;if(!c||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&e.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=vt(),h=u-n.touchStartTime;if(e.allowClick){const E=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(E&&E[0]||r.target,E),e.emit("tap click",r),h<300&&u-n.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(n.lastClickTime=vt(),Ln(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||o.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let b;if(a.followFinger?b=l?e.translate:-e.translate:b=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:b});return}const p=b>=-e.maxTranslate()&&!e.params.loop;let m=0,y=e.slidesSizesGrid[0];for(let E=0;E<d.length;E+=E<a.slidesPerGroupSkip?1:a.slidesPerGroup){const P=E<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof d[E+P]<"u"?(p||b>=d[E]&&b<d[E+P])&&(m=E,y=d[E+P]-d[E]):(p||b>=d[E])&&(m=E,y=d[d.length-1]-d[d.length-2])}let f=null,g=null;a.rewind&&(e.isBeginning?g=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(f=0));const w=(b-d[m])/y,S=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(h>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(w>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?f:m+S):e.slideTo(m)),e.swipeDirection==="prev"&&(w>1-a.longSwipesRatio?e.slideTo(m+S):g!==null&&w<0&&Math.abs(w)>a.longSwipesRatio?e.slideTo(g):e.slideTo(m))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(m+S):e.slideTo(m):(e.swipeDirection==="next"&&e.slideTo(f!==null?f:m+S),e.swipeDirection==="prev"&&e.slideTo(g!==null?g:m))}}function qr(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=t,a=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const o=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!o?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!a?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=i,t.allowSlideNext=r,t.params.watchOverflow&&s!==t.snapGrid&&t.checkOverflow()}function Bd(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function Fd(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:r}=t;if(!r)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let i;const s=t.maxTranslate()-t.minTranslate();s===0?i=0:i=(t.translate-t.minTranslate())/s,i!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function Vd(t){const e=this;pt(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Wd(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const ds=(t,e)=>{const n=Ae(),{params:r,el:i,wrapperEl:s,device:a}=t,o=!!r.nested,l=e==="on"?"addEventListener":"removeEventListener",d=e;n[l]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:o}),i[l]("touchstart",t.onTouchStart,{passive:!1}),i[l]("pointerdown",t.onTouchStart,{passive:!1}),n[l]("touchmove",t.onTouchMove,{passive:!1,capture:o}),n[l]("pointermove",t.onTouchMove,{passive:!1,capture:o}),n[l]("touchend",t.onTouchEnd,{passive:!0}),n[l]("pointerup",t.onTouchEnd,{passive:!0}),n[l]("pointercancel",t.onTouchEnd,{passive:!0}),n[l]("touchcancel",t.onTouchEnd,{passive:!0}),n[l]("pointerout",t.onTouchEnd,{passive:!0}),n[l]("pointerleave",t.onTouchEnd,{passive:!0}),n[l]("contextmenu",t.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",t.onClick,!0),r.cssMode&&s[l]("scroll",t.onScroll),r.updateOnWindowResize?t[d](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",qr,!0):t[d]("observerUpdate",qr,!0),i[l]("load",t.onLoad,{capture:!0})};function Gd(){const t=this,{params:e}=t;t.onTouchStart=zd.bind(t),t.onTouchMove=Hd.bind(t),t.onTouchEnd=Dd.bind(t),t.onDocumentTouchStart=Wd.bind(t),e.cssMode&&(t.onScroll=Fd.bind(t)),t.onClick=Bd.bind(t),t.onLoad=Vd.bind(t),ds(t,"on")}function Ud(){ds(this,"off")}var qd={attachEvents:Gd,detachEvents:Ud};const Yr=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function Yd(){const t=this,{realIndex:e,initialized:n,params:r,el:i}=t,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const a=t.getBreakpoint(s,t.params.breakpointsBase,t.el);if(!a||t.currentBreakpoint===a)return;const l=(a in s?s[a]:void 0)||t.originalParams,d=Yr(t,r),c=Yr(t,l),u=t.params.grabCursor,h=l.grabCursor,b=r.enabled;d&&!c?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),t.emitContainerClasses()):!d&&c&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),t.emitContainerClasses()),u&&!h?t.unsetGrabCursor():!u&&h&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(w=>{if(typeof l[w]>"u")return;const S=r[w]&&r[w].enabled,E=l[w]&&l[w].enabled;S&&!E&&t[w].disable(),!S&&E&&t[w].enable()});const p=l.direction&&l.direction!==r.direction,m=r.loop&&(l.slidesPerView!==r.slidesPerView||p),y=r.loop;p&&n&&t.changeDirection(),Q(t.params,l);const f=t.params.enabled,g=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),b&&!f?t.disable():!b&&f&&t.enable(),t.currentBreakpoint=a,t.emit("_beforeBreakpoint",l),n&&(m?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!y&&g?(t.loopCreate(e),t.updateSlides()):y&&!g&&t.loopDestroy()),t.emit("breakpoint",l)}function Xd(t,e,n){if(e===void 0&&(e="window"),!t||e==="container"&&!n)return;let r=!1;const i=ee(),s=e==="window"?i.innerHeight:n.clientHeight,a=Object.keys(t).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:s*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){const{point:l,value:d}=a[o];e==="window"?i.matchMedia(`(min-width: ${d}px)`).matches&&(r=l):d<=n.clientWidth&&(r=l)}return r||"max"}var Kd={setBreakpoint:Yd,getBreakpoint:Xd};function Qd(t,e){const n=[];return t.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(e+i)}):typeof r=="string"&&n.push(e+r)}),n}function Jd(){const t=this,{classNames:e,params:n,rtl:r,el:i,device:s}=t,a=Qd(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...a),i.classList.add(...e),t.emitContainerClasses()}function Zd(){const t=this,{el:e,classNames:n}=t;e.classList.remove(...n),t.emitContainerClasses()}var eu={addClasses:Jd,removeClasses:Zd};function tu(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:r}=n;if(r){const i=t.slides.length-1,s=t.slidesGrid[i]+t.slidesSizesGrid[i]+r*2;t.isLocked=t.size>s}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var nu={checkOverflow:tu},Rn={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ru(t,e){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){Q(e,r);return}if(t[i]===!0&&(t[i]={enabled:!0}),i==="navigation"&&t[i]&&t[i].enabled&&!t[i].prevEl&&!t[i].nextEl&&(t[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&t[i]&&t[i].enabled&&!t[i].el&&(t[i].auto=!0),!(i in t&&"enabled"in s)){Q(e,r);return}typeof t[i]=="object"&&!("enabled"in t[i])&&(t[i].enabled=!0),t[i]||(t[i]={enabled:!1}),Q(e,r)}}const sn={eventsEmitter:ed,update:ud,translate:bd,transition:yd,slide:kd,loop:Id,grabCursor:$d,events:qd,breakpoints:Kd,checkOverflow:nu,classes:eu},an={};let nr=class he{constructor(){let e,n;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[e,n]=i,n||(n={}),n=Q({},n),e&&!n.el&&(n.el=e);const a=Ae();if(n.el&&typeof n.el=="string"&&a.querySelectorAll(n.el).length>1){const c=[];return a.querySelectorAll(n.el).forEach(u=>{const h=Q({},n,{el:u});c.push(new he(h))}),c}const o=this;o.__swiper__=!0,o.support=os(),o.device=ls({userAgent:n.userAgent}),o.browser=Qc(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],n.modules&&Array.isArray(n.modules)&&o.modules.push(...n.modules);const l={};o.modules.forEach(c=>{c({params:n,swiper:o,extendParams:ru(n,l),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const d=Q({},Rn,l);return o.params=Q({},d,an,n),o.originalParams=Q({},o.params),o.passedParams=Q({},n),o.params&&o.params.on&&Object.keys(o.params.on).forEach(c=>{o.on(c,o.params.on[c])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:n,params:r}=this,i=ce(n,`.${r.slideClass}, swiper-slide`),s=St(i[0]);return St(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:n,params:r}=e;e.slides=ce(n,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const r=this;e=Math.min(Math.max(e,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*e+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(r=>{const i=e.getSlideClasses(r);n.push({slideEl:r,classNames:i}),e.emit("_slideClass",r,i)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e,n){e===void 0&&(e="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:s,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:d}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let u=s[d]?Math.ceil(s[d].swiperSlideSize):0,h;for(let b=d+1;b<s.length;b+=1)s[b]&&!h&&(u+=Math.ceil(s[b].swiperSlideSize),c+=1,u>l&&(h=!0));for(let b=d-1;b>=0;b-=1)s[b]&&!h&&(u+=s[b].swiperSlideSize,c+=1,u>l&&(h=!0))}else if(e==="current")for(let u=d+1;u<s.length;u+=1)(n?a[u]+o[u]-a[d]<l:a[u]-a[d]<l)&&(c+=1);else for(let u=d-1;u>=0;u-=1)a[d]-a[u]<l&&(c+=1);return c}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&pt(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const a=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const a=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(a.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let r=e||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):ce(r,i())[0])();return!a&&n.params.createElements&&(a=yt("div",n.params.wrapperClass),r.append(a),ce(r,`.${n.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||xe(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||xe(r,"direction")==="rtl"),wrongRTL:xe(a,"display")==="-webkit-box"}),!0}init(e){const n=this;if(n.initialized||n.mount(e)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?pt(n,s):s.addEventListener("load",a=>{pt(n,a.target)})}),In(n),n.initialized=!0,In(n),n.emit("init"),n.emit("afterInit"),n}destroy(e,n){e===void 0&&(e=!0),n===void 0&&(n=!0);const r=this,{params:i,el:s,wrapperEl:a,slides:o}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),s.removeAttribute("style"),a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),e!==!1&&(r.el.swiper=null,Fc(r)),r.destroyed=!0),null}static extendDefaults(e){Q(an,e)}static get extendedDefaults(){return an}static get defaults(){return Rn}static installModule(e){he.prototype.__modules__||(he.prototype.__modules__=[]);const n=he.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>he.installModule(n)),he):(he.installModule(e),he)}};Object.keys(sn).forEach(t=>{Object.keys(sn[t]).forEach(e=>{nr.prototype[e]=sn[t][e]})});nr.use([Jc,Zc]);const us=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Se(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function _e(t,e){const n=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:Se(e[r])&&Se(t[r])&&Object.keys(e[r]).length>0?e[r].__swiper__?t[r]=e[r]:_e(t[r],e[r]):t[r]=e[r]})}function fs(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function ps(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function hs(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function ms(t){t===void 0&&(t="");const e=t.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return e.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function iu(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function su(t){let{swiper:e,slides:n,passedParams:r,changedParams:i,nextEl:s,prevEl:a,scrollbarEl:o,paginationEl:l}=t;const d=i.filter(O=>O!=="children"&&O!=="direction"&&O!=="wrapperClass"),{params:c,pagination:u,navigation:h,scrollbar:b,virtual:p,thumbs:m}=e;let y,f,g,w,S,E,P,L;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(y=!0),i.includes("controller")&&r.controller&&r.controller.control&&c.controller&&!c.controller.control&&(f=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(c.pagination||c.pagination===!1)&&u&&!u.el&&(g=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||o)&&(c.scrollbar||c.scrollbar===!1)&&b&&!b.el&&(w=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||a)&&(r.navigation.nextEl||s)&&(c.navigation||c.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(S=!0);const k=O=>{e[O]&&(e[O].destroy(),O==="navigation"?(e.isElement&&(e[O].prevEl.remove(),e[O].nextEl.remove()),c[O].prevEl=void 0,c[O].nextEl=void 0,e[O].prevEl=void 0,e[O].nextEl=void 0):(e.isElement&&e[O].el.remove(),c[O].el=void 0,e[O].el=void 0))};i.includes("loop")&&e.isElement&&(c.loop&&!r.loop?E=!0:!c.loop&&r.loop?P=!0:L=!0),d.forEach(O=>{if(Se(c[O])&&Se(r[O]))Object.assign(c[O],r[O]),(O==="navigation"||O==="pagination"||O==="scrollbar")&&"enabled"in r[O]&&!r[O].enabled&&k(O);else{const T=r[O];(T===!0||T===!1)&&(O==="navigation"||O==="pagination"||O==="scrollbar")?T===!1&&k(O):c[O]=r[O]}}),d.includes("controller")&&!f&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),i.includes("children")&&n&&p&&c.virtual.enabled?(p.slides=n,p.update(!0)):i.includes("virtual")&&p&&c.virtual.enabled&&(n&&(p.slides=n),p.update(!0)),i.includes("children")&&n&&c.loop&&(L=!0),y&&m.init()&&m.update(!0),f&&(e.controller.control=c.controller.control),g&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(c.pagination.el=l),u.init(),u.render(),u.update()),w&&(e.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-scrollbar"),o.part.add("scrollbar"),e.el.appendChild(o)),o&&(c.scrollbar.el=o),b.init(),b.updateSize(),b.setTranslate()),S&&(e.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),s.innerHTML=e.hostEl.constructor.nextButtonSvg,s.part.add("button-next"),e.el.appendChild(s)),(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-prev"),a.innerHTML=e.hostEl.constructor.prevButtonSvg,a.part.add("button-prev"),e.el.appendChild(a))),s&&(c.navigation.nextEl=s),a&&(c.navigation.prevEl=a),h.init(),h.update()),i.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&e.changeDirection(r.direction,!1),(E||L)&&e.loopDestroy(),(P||L)&&e.loopCreate(),e.update()}function au(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const n={on:{}},r={},i={};_e(n,Rn),n._emitClasses=!0,n.init=!1;const s={},a=us.map(l=>l.replace(/_/,"")),o=Object.assign({},t);return Object.keys(o).forEach(l=>{typeof t[l]>"u"||(a.indexOf(l)>=0?Se(t[l])?(n[l]={},i[l]={},_e(n[l],t[l]),_e(i[l],t[l])):(n[l]=t[l],i[l]=t[l]):l.search(/on[A-Z]/)===0&&typeof t[l]=="function"?e?r[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:s[l]=t[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:s,events:r}}function ou(t,e){let{el:n,nextEl:r,prevEl:i,paginationEl:s,scrollbarEl:a,swiper:o}=t;fs(e)&&r&&i&&(o.params.navigation.nextEl=r,o.originalParams.navigation.nextEl=r,o.params.navigation.prevEl=i,o.originalParams.navigation.prevEl=i),ps(e)&&s&&(o.params.pagination.el=s,o.originalParams.pagination.el=s),hs(e)&&a&&(o.params.scrollbar.el=a,o.originalParams.scrollbar.el=a),o.init(n)}function lu(t,e,n,r,i){const s=[];if(!e)return s;const a=l=>{s.indexOf(l)<0&&s.push(l)};if(n&&r){const l=r.map(i),d=n.map(i);l.join("")!==d.join("")&&a("children"),r.length!==n.length&&a("children")}return us.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in t&&l in e)if(Se(t[l])&&Se(e[l])){const d=Object.keys(t[l]),c=Object.keys(e[l]);d.length!==c.length?a(l):(d.forEach(u=>{t[l][u]!==e[l][u]&&a(l)}),c.forEach(u=>{t[l][u]!==e[l][u]&&a(l)}))}else t[l]!==e[l]&&a(l)}),s}const cu=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function Et(){return Et=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Et.apply(this,arguments)}function gs(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function bs(t){const e=[];return G.Children.toArray(t).forEach(n=>{gs(n)?e.push(n):n.props&&n.props.children&&bs(n.props.children).forEach(r=>e.push(r))}),e}function du(t){const e=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return G.Children.toArray(t).forEach(r=>{if(gs(r))e.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=bs(r.props.children);i.length>0?i.forEach(s=>e.push(s)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:e,slots:n}}function uu(t,e,n){if(!n)return null;const r=c=>{let u=c;return c<0?u=e.length+c:u>=e.length&&(u=u-e.length),u},i=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:s,to:a}=n,o=t.params.loop?-e.length:0,l=t.params.loop?e.length*2:e.length,d=[];for(let c=o;c<l;c+=1)c>=s&&c<=a&&d.push(e[r(c)]);return d.map((c,u)=>G.cloneElement(c,{swiper:t,style:i,key:c.props.virtualIndex||c.key||`slide-${u}`}))}function Ne(t,e){return typeof window>"u"?_.useEffect(t,e):_.useLayoutEffect(t,e)}const Xr=_.createContext(null),fu=_.createContext(null),Nt=_.forwardRef(function(t,e){let{className:n,tag:r="div",wrapperTag:i="div",children:s,onSwiper:a,...o}=t===void 0?{}:t,l=!1;const[d,c]=_.useState("swiper"),[u,h]=_.useState(null),[b,p]=_.useState(!1),m=_.useRef(!1),y=_.useRef(null),f=_.useRef(null),g=_.useRef(null),w=_.useRef(null),S=_.useRef(null),E=_.useRef(null),P=_.useRef(null),L=_.useRef(null),{params:k,passedParams:O,rest:T,events:A}=au(o),{slides:M,slots:C}=du(s),I=()=>{p(!b)};Object.assign(k.on,{_containerClasses(U,ne){c(ne)}});const z=()=>{Object.assign(k.on,A),l=!0;const U={...k};if(delete U.wrapperClass,f.current=new nr(U),f.current.virtual&&f.current.params.virtual.enabled){f.current.virtual.slides=M;const ne={cache:!1,slides:M,renderExternal:h,renderExternalUpdate:!1};_e(f.current.params.virtual,ne),_e(f.current.originalParams.virtual,ne)}};y.current||z(),f.current&&f.current.on("_beforeBreakpoint",I);const re=()=>{l||!A||!f.current||Object.keys(A).forEach(U=>{f.current.on(U,A[U])})},Ft=()=>{!A||!f.current||Object.keys(A).forEach(U=>{f.current.off(U,A[U])})};_.useEffect(()=>()=>{f.current&&f.current.off("_beforeBreakpoint",I)}),_.useEffect(()=>{!m.current&&f.current&&(f.current.emitSlidesClasses(),m.current=!0)}),Ne(()=>{if(e&&(e.current=y.current),!!y.current)return f.current.destroyed&&z(),ou({el:y.current,nextEl:S.current,prevEl:E.current,paginationEl:P.current,scrollbarEl:L.current,swiper:f.current},k),a&&!f.current.destroyed&&a(f.current),()=>{f.current&&!f.current.destroyed&&f.current.destroy(!0,!1)}},[]),Ne(()=>{re();const U=lu(O,g.current,M,w.current,ne=>ne.key);return g.current=O,w.current=M,U.length&&f.current&&!f.current.destroyed&&su({swiper:f.current,slides:M,passedParams:O,changedParams:U,nextEl:S.current,prevEl:E.current,scrollbarEl:L.current,paginationEl:P.current}),()=>{Ft()}}),Ne(()=>{cu(f.current)},[u]);function Ze(){return k.virtual?uu(f.current,M,u):M.map((U,ne)=>G.cloneElement(U,{swiper:f.current,swiperSlideIndex:ne}))}return G.createElement(r,Et({ref:y,className:ms(`${d}${n?` ${n}`:""}`)},T),G.createElement(fu.Provider,{value:f.current},C["container-start"],G.createElement(i,{className:iu(k.wrapperClass)},C["wrapper-start"],Ze(),C["wrapper-end"]),fs(k)&&G.createElement(G.Fragment,null,G.createElement("div",{ref:E,className:"swiper-button-prev"}),G.createElement("div",{ref:S,className:"swiper-button-next"})),hs(k)&&G.createElement("div",{ref:L,className:"swiper-scrollbar"}),ps(k)&&G.createElement("div",{ref:P,className:"swiper-pagination"}),C["container-end"]))});Nt.displayName="Swiper";const oe=_.forwardRef(function(t,e){let{tag:n="div",children:r,className:i="",swiper:s,zoom:a,lazy:o,virtualIndex:l,swiperSlideIndex:d,...c}=t===void 0?{}:t;const u=_.useRef(null),[h,b]=_.useState("swiper-slide"),[p,m]=_.useState(!1);function y(S,E,P){E===u.current&&b(P)}Ne(()=>{if(typeof d<"u"&&(u.current.swiperSlideIndex=d),e&&(e.current=u.current),!(!u.current||!s)){if(s.destroyed){h!=="swiper-slide"&&b("swiper-slide");return}return s.on("_slideClass",y),()=>{s&&s.off("_slideClass",y)}}}),Ne(()=>{s&&u.current&&!s.destroyed&&b(s.getSlideClasses(u.current))},[s]);const f={isActive:h.indexOf("swiper-slide-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0},g=()=>typeof r=="function"?r(f):r,w=()=>{m(!0)};return G.createElement(n,Et({ref:u,className:ms(`${h}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:w},c),a&&G.createElement(Xr.Provider,{value:f},G.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof a=="number"?a:void 0},g(),o&&!p&&G.createElement("div",{className:"swiper-lazy-preloader"}))),!a&&G.createElement(Xr.Provider,{value:f},g(),o&&!p&&G.createElement("div",{className:"swiper-lazy-preloader"})))});oe.displayName="SwiperSlide";const pu="/MistoHub/assets/hero1mob-385cb7f2.png",hu="/MistoHub/assets/hero1mob-b7993bab.webp",mu="/MistoHub/assets/hero1mob@2x-ebe366bd.png",gu="/MistoHub/assets/hero1mob@2x-fcc35072.webp",bu="/MistoHub/assets/hero1tablet-b97df3e5.png",wu="/MistoHub/assets/hero1tablet-80eec5f8.webp",vu="/MistoHub/assets/hero1tablet@2x-07ce06dc.png",xu="/MistoHub/assets/hero1tablet@2x-1f51f6b4.webp",yu="/MistoHub/assets/hero1desktop-f60eaa24.png",Su="/MistoHub/assets/hero1desktop-ea5839ae.webp",Eu="/MistoHub/assets/hero1desktop@2x-671ffc9e.png",Tu="/MistoHub/assets/hero1desktop@2x-f5afe464.webp",on="/MistoHub/assets/hero2-0dc9576f.png",ln="/MistoHub/assets/hero2@2x-fcfc1f52.png",cn="/MistoHub/assets/hero2-1d678767.webp",dn="/MistoHub/assets/hero2@2x-eaab9d3e.webp",un="/MistoHub/assets/hero3-cb0802fe.png",fn="/MistoHub/assets/hero3@2x-b06dc8d7.png",pn="/MistoHub/assets/hero3-494c0e3b.webp",hn="/MistoHub/assets/hero3@2x-14174f0d.webp",mn="/MistoHub/assets/hero4-eaf95bb1.png",gn="/MistoHub/assets/hero4@2x-99b52b9b.png",bn="/MistoHub/assets/hero4-a36809e4.webp",wn="/MistoHub/assets/hero4@2x-99a7f7bd.webp",vn="/MistoHub/assets/hero5-6f2417a3.png",xn="/MistoHub/assets/hero5@2x-830c1cd4.png",yn="/MistoHub/assets/hero5-2ab4f108.webp",Sn="/MistoHub/assets/hero5@2x-0a268f87.webp",Pu=[{mobile:{png:pu,png_2x:mu,webp:hu,webp_2x:gu},tablet:{png:bu,png_2x:vu,webp:wu,webp_2x:xu},desktop:{png:yu,png_2x:Eu,webp:Su,webp_2x:Tu},alt:"Kitchen 1"},{mobile:{png:on,png_2x:ln,webp:cn,webp_2x:dn},tablet:{png:on,png_2x:ln,webp:cn,webp_2x:dn},desktop:{png:on,png_2x:ln,webp:cn,webp_2x:dn},alt:"Kitchen 2"},{mobile:{png:un,png_2x:fn,webp:pn,webp_2x:hn},tablet:{png:un,png_2x:fn,webp:pn,webp_2x:hn},desktop:{png:un,png_2x:fn,webp:pn,webp_2x:hn},alt:"Kitchen 3"},{mobile:{png:mn,png_2x:gn,webp:bn,webp_2x:wn},tablet:{png:mn,png_2x:gn,webp:bn,webp_2x:wn},desktop:{png:mn,png_2x:gn,webp:bn,webp_2x:wn},alt:"Kitchen 4"},{mobile:{png:vn,png_2x:xn,webp:yn,webp_2x:Sn},tablet:{png:vn,png_2x:xn,webp:yn,webp_2x:Sn},desktop:{png:vn,png_2x:xn,webp:yn,webp_2x:Sn},alt:"Kitchen 5"}],_u=Ee.section`
  min-width: 320px;
  width: 100%;
  height: 700px;

  @media only screen and (min-width: 768px) {
    height: 1024px;
  }

  @media only screen and (min-width: 1440px) {
    height: 880px;
  }
`,Ou=Ee(Un)`
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
`,Cu=({item:t,priority:e,hidden:n})=>v.jsxs("picture",{children:[v.jsx("source",{srcSet:`${t.mobile.webp} 375w, ${t.mobile.webp_2x} 750w`,media:"(max-width: 767px)",sizes:"(max-width: 767px) 375px, 100%",type:"image/webp"}),v.jsx("source",{srcSet:`${t.tablet.webp} 768w, ${t.tablet.webp_2x} 1536w`,media:"(min-width: 768px) and (max-width: 1439px)",sizes:"(min-width: 768px) and (max-width: 1439px) 768px, 100%",type:"image/webp"}),v.jsx("source",{srcSet:`${t.desktop.webp} 1440w, ${t.desktop.webp_2x} 2880w`,media:"(min-width: 1440px)",sizes:"(min-width: 1440px) 1440px, 100%",type:"image/webp"}),v.jsx("img",{fetchpriority:e?"high":"low",loading:e?"eager":"lazy",className:"hero-img",style:{display:n?"none":void 0},src:t.desktop.png,alt:t.alt})]}),ku=()=>{const t=_.useRef(null),[e,n]=_.useState(!0),[r,i]=_.useState(!1);_.useEffect(()=>{t.current&&t.current.swiper&&t.current.swiper.on("slideChange",()=>{n(t.current.swiper.isBeginning),i(t.current.swiper.isEnd)})},[]);const s=()=>{t.current&&t.current.swiper&&t.current.swiper.slideNext()},a=()=>{t.current&&t.current.swiper&&t.current.swiper.slidePrev()};return v.jsx(_u,{children:v.jsxs(Ou,{children:[v.jsx(Nt,{ref:t,className:"my-swiper",navigation:!0,children:Pu.map((o,l)=>v.jsx(oe,{children:v.jsx(Cu,{item:o,priority:l===0})},l))}),v.jsxs("div",{className:"custom-navigation",children:[v.jsx("button",{className:`swiper-btn-prev ${e?"disabled":""}`,onClick:a,disabled:e,type:"button",title:"Попередній слайд",children:v.jsx(me,{iconName:"arrow-left2"})}),v.jsx("button",{className:`swiper-btn-next ${r?"disabled":""}`,onClick:s,disabled:r,type:"button",title:"Наступний слайд",children:v.jsx(me,{iconName:"arrow-right2"})})]}),v.jsxs("h1",{className:"hero-title",children:[v.jsx("span",{children:"МІСТОХАБ -"}),v.jsx("br",{}),"створюємо простір",v.jsx("br",{}),"розвитку міста"]})]})})};function Mu(t,e,n,r){return t.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let s=ce(t.el,`.${r[i]}`)[0];s||(s=yt("div",r[i]),s.className=r[i],t.el.append(s)),n[i]=s,e[i]=s}}),n}function je(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ws(t){let{swiper:e,extendParams:n,on:r,emit:i}=t;const s="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let a,o=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function d(f,g){const{bulletActiveClass:w}=e.params.pagination;f&&(f=f[`${g==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${w}-${g}`),f=f[`${g==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${w}-${g}-${g}`)))}function c(f){const g=f.target.closest(je(e.params.pagination.bulletClass));if(!g)return;f.preventDefault();const w=St(g)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===w)return;e.slideToLoop(w)}else e.slideTo(w)}function u(){const f=e.rtl,g=e.params.pagination;if(l())return;let w=e.pagination.el;w=pe(w);let S,E;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,L=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,S=e.activeIndex||0),g.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const k=e.pagination.bullets;let O,T,A;if(g.dynamicBullets&&(a=An(k[0],e.isHorizontal()?"width":"height",!0),w.forEach(M=>{M.style[e.isHorizontal()?"width":"height"]=`${a*(g.dynamicMainBullets+4)}px`}),g.dynamicMainBullets>1&&E!==void 0&&(o+=S-(E||0),o>g.dynamicMainBullets-1?o=g.dynamicMainBullets-1:o<0&&(o=0)),O=Math.max(S-o,0),T=O+(Math.min(k.length,g.dynamicMainBullets)-1),A=(T+O)/2),k.forEach(M=>{const C=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(I=>`${g.bulletActiveClass}${I}`)].map(I=>typeof I=="string"&&I.includes(" ")?I.split(" "):I).flat();M.classList.remove(...C)}),w.length>1)k.forEach(M=>{const C=St(M);C===S?M.classList.add(...g.bulletActiveClass.split(" ")):e.isElement&&M.setAttribute("part","bullet"),g.dynamicBullets&&(C>=O&&C<=T&&M.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),C===O&&d(M,"prev"),C===T&&d(M,"next"))});else{const M=k[S];if(M&&M.classList.add(...g.bulletActiveClass.split(" ")),e.isElement&&k.forEach((C,I)=>{C.setAttribute("part",I===S?"bullet-active":"bullet")}),g.dynamicBullets){const C=k[O],I=k[T];for(let z=O;z<=T;z+=1)k[z]&&k[z].classList.add(...`${g.bulletActiveClass}-main`.split(" "));d(C,"prev"),d(I,"next")}}if(g.dynamicBullets){const M=Math.min(k.length,g.dynamicMainBullets+4),C=(a*M-a)/2-A*a,I=f?"right":"left";k.forEach(z=>{z.style[e.isHorizontal()?I:"top"]=`${C}px`})}}w.forEach((k,O)=>{if(g.type==="fraction"&&(k.querySelectorAll(je(g.currentClass)).forEach(T=>{T.textContent=g.formatFractionCurrent(S+1)}),k.querySelectorAll(je(g.totalClass)).forEach(T=>{T.textContent=g.formatFractionTotal(L)})),g.type==="progressbar"){let T;g.progressbarOpposite?T=e.isHorizontal()?"vertical":"horizontal":T=e.isHorizontal()?"horizontal":"vertical";const A=(S+1)/L;let M=1,C=1;T==="horizontal"?M=A:C=A,k.querySelectorAll(je(g.progressbarFillClass)).forEach(I=>{I.style.transform=`translate3d(0,0,0) scaleX(${M}) scaleY(${C})`,I.style.transitionDuration=`${e.params.speed}ms`})}g.type==="custom"&&g.renderCustom?(k.innerHTML=g.renderCustom(e,S+1,L),O===0&&i("paginationRender",k)):(O===0&&i("paginationRender",k),i("paginationUpdate",k)),e.params.watchOverflow&&e.enabled&&k.classList[e.isLocked?"add":"remove"](g.lockClass)})}function h(){const f=e.params.pagination;if(l())return;const g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let w=e.pagination.el;w=pe(w);let S="";if(f.type==="bullets"){let E=e.params.loop?Math.ceil(g/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&E>g&&(E=g);for(let P=0;P<E;P+=1)f.renderBullet?S+=f.renderBullet.call(e,P,f.bulletClass):S+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?S=f.renderFraction.call(e,f.currentClass,f.totalClass):S=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?S=f.renderProgressbar.call(e,f.progressbarFillClass):S=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],w.forEach(E=>{f.type!=="custom"&&(E.innerHTML=S||""),f.type==="bullets"&&e.pagination.bullets.push(...E.querySelectorAll(je(f.bulletClass)))}),f.type!=="custom"&&i("paginationRender",w[0])}function b(){e.params.pagination=Mu(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let g;typeof f.el=="string"&&e.isElement&&(g=e.el.querySelector(f.el)),!g&&typeof f.el=="string"&&(g=[...document.querySelectorAll(f.el)]),g||(g=f.el),!(!g||g.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(g)&&g.length>1&&(g=[...e.el.querySelectorAll(f.el)],g.length>1&&(g=g.filter(w=>as(w,".swiper")[0]===e.el)[0])),Array.isArray(g)&&g.length===1&&(g=g[0]),Object.assign(e.pagination,{el:g}),g=pe(g),g.forEach(w=>{f.type==="bullets"&&f.clickable&&w.classList.add(...(f.clickableClass||"").split(" ")),w.classList.add(f.modifierClass+f.type),w.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(w.classList.add(`${f.modifierClass}${f.type}-dynamic`),o=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&w.classList.add(f.progressbarOppositeClass),f.clickable&&w.addEventListener("click",c),e.enabled||w.classList.add(f.lockClass)}))}function p(){const f=e.params.pagination;if(l())return;let g=e.pagination.el;g&&(g=pe(g),g.forEach(w=>{w.classList.remove(f.hiddenClass),w.classList.remove(f.modifierClass+f.type),w.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(w.classList.remove(...(f.clickableClass||"").split(" ")),w.removeEventListener("click",c))})),e.pagination.bullets&&e.pagination.bullets.forEach(w=>w.classList.remove(...f.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:g}=e.pagination;g=pe(g),g.forEach(w=>{w.classList.remove(f.horizontalClass,f.verticalClass),w.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),r("init",()=>{e.params.pagination.enabled===!1?y():(b(),h(),u())}),r("activeIndexChange",()=>{typeof e.snapIndex>"u"&&u()}),r("snapIndexChange",()=>{u()}),r("snapGridLengthChange",()=>{h(),u()}),r("destroy",()=>{p()}),r("enable disable",()=>{let{el:f}=e.pagination;f&&(f=pe(f),f.forEach(g=>g.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),r("lock unlock",()=>{u()}),r("click",(f,g)=>{const w=g.target,S=pe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!w.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&w===e.navigation.nextEl||e.navigation.prevEl&&w===e.navigation.prevEl))return;const E=S[0].classList.contains(e.params.pagination.hiddenClass);i(E===!0?"paginationShow":"paginationHide"),S.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const m=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=pe(f),f.forEach(g=>g.classList.remove(e.params.pagination.paginationDisabledClass))),b(),h(),u()},y=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=pe(f),f.forEach(g=>g.classList.add(e.params.pagination.paginationDisabledClass))),p()};Object.assign(e.pagination,{enable:m,disable:y,render:h,update:u,init:b,destroy:p})}function jn(){return jn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jn.apply(this,arguments)}var Lu=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Au=ai(function(t){return Lu.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function Iu(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Ru(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var ju=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ru(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Iu(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Y="-ms-",Tt="-moz-",j="-webkit-",vs="comm",rr="rule",ir="decl",$u="@import",xs="@keyframes",Nu="@layer",zu=Math.abs,zt=String.fromCharCode,Hu=Object.assign;function Du(t,e){return q(t,0)^45?(((e<<2^q(t,0))<<2^q(t,1))<<2^q(t,2))<<2^q(t,3):0}function ys(t){return t.trim()}function Bu(t,e){return(t=e.exec(t))?t[0]:t}function $(t,e,n){return t.replace(e,n)}function $n(t,e){return t.indexOf(e)}function q(t,e){return t.charCodeAt(e)|0}function He(t,e,n){return t.slice(e,n)}function se(t){return t.length}function sr(t){return t.length}function lt(t,e){return e.push(t),t}function Fu(t,e){return t.map(e).join("")}var Ht=1,ke=1,Ss=0,K=0,V=0,Ie="";function Dt(t,e,n,r,i,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Ht,column:ke,length:a,return:""}}function $e(t,e){return Hu(Dt("",null,null,"",null,null,0),t,{length:-t.length},e)}function Vu(){return V}function Wu(){return V=K>0?q(Ie,--K):0,ke--,V===10&&(ke=1,Ht--),V}function J(){return V=K<Ss?q(Ie,K++):0,ke++,V===10&&(ke=1,Ht++),V}function de(){return q(Ie,K)}function ht(){return K}function Je(t,e){return He(Ie,t,e)}function De(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Es(t){return Ht=ke=1,Ss=se(Ie=t),K=0,[]}function Ts(t){return Ie="",t}function mt(t){return ys(Je(K-1,Nn(t===91?t+2:t===40?t+1:t)))}function Gu(t){for(;(V=de())&&V<33;)J();return De(t)>2||De(V)>3?"":" "}function Uu(t,e){for(;--e&&J()&&!(V<48||V>102||V>57&&V<65||V>70&&V<97););return Je(t,ht()+(e<6&&de()==32&&J()==32))}function Nn(t){for(;J();)switch(V){case t:return K;case 34:case 39:t!==34&&t!==39&&Nn(V);break;case 40:t===41&&Nn(t);break;case 92:J();break}return K}function qu(t,e){for(;J()&&t+V!==47+10;)if(t+V===42+42&&de()===47)break;return"/*"+Je(e,K-1)+"*"+zt(t===47?t:J())}function Yu(t){for(;!De(de());)J();return Je(t,K)}function Xu(t){return Ts(gt("",null,null,null,[""],t=Es(t),0,[0],t))}function gt(t,e,n,r,i,s,a,o,l){for(var d=0,c=0,u=a,h=0,b=0,p=0,m=1,y=1,f=1,g=0,w="",S=i,E=s,P=r,L=w;y;)switch(p=g,g=J()){case 40:if(p!=108&&q(L,u-1)==58){$n(L+=$(mt(g),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:L+=mt(g);break;case 9:case 10:case 13:case 32:L+=Gu(p);break;case 92:L+=Uu(ht()-1,7);continue;case 47:switch(de()){case 42:case 47:lt(Ku(qu(J(),ht()),e,n),l);break;default:L+="/"}break;case 123*m:o[d++]=se(L)*f;case 125*m:case 59:case 0:switch(g){case 0:case 125:y=0;case 59+c:f==-1&&(L=$(L,/\f/g,"")),b>0&&se(L)-u&&lt(b>32?Qr(L+";",r,n,u-1):Qr($(L," ","")+";",r,n,u-2),l);break;case 59:L+=";";default:if(lt(P=Kr(L,e,n,d,c,i,o,w,S=[],E=[],u),s),g===123)if(c===0)gt(L,e,P,P,S,s,u,o,E);else switch(h===99&&q(L,3)===110?100:h){case 100:case 108:case 109:case 115:gt(t,P,P,r&&lt(Kr(t,P,P,0,0,i,o,w,i,S=[],u),E),i,E,u,o,r?S:E);break;default:gt(L,P,P,P,[""],E,0,o,E)}}d=c=b=0,m=f=1,w=L="",u=a;break;case 58:u=1+se(L),b=p;default:if(m<1){if(g==123)--m;else if(g==125&&m++==0&&Wu()==125)continue}switch(L+=zt(g),g*m){case 38:f=c>0?1:(L+="\f",-1);break;case 44:o[d++]=(se(L)-1)*f,f=1;break;case 64:de()===45&&(L+=mt(J())),h=de(),c=u=se(w=L+=Yu(ht())),g++;break;case 45:p===45&&se(L)==2&&(m=0)}}return s}function Kr(t,e,n,r,i,s,a,o,l,d,c){for(var u=i-1,h=i===0?s:[""],b=sr(h),p=0,m=0,y=0;p<r;++p)for(var f=0,g=He(t,u+1,u=zu(m=a[p])),w=t;f<b;++f)(w=ys(m>0?h[f]+" "+g:$(g,/&\f/g,h[f])))&&(l[y++]=w);return Dt(t,e,n,i===0?rr:o,l,d,c)}function Ku(t,e,n){return Dt(t,e,n,vs,zt(Vu()),He(t,2,-2),0)}function Qr(t,e,n,r){return Dt(t,e,n,ir,He(t,0,r),He(t,r+1,-1),r)}function Oe(t,e){for(var n="",r=sr(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function Qu(t,e,n,r){switch(t.type){case Nu:if(t.children.length)break;case $u:case ir:return t.return=t.return||t.value;case vs:return"";case xs:return t.return=t.value+"{"+Oe(t.children,r)+"}";case rr:t.value=t.props.join(",")}return se(n=Oe(t.children,r))?t.return=t.value+"{"+n+"}":""}function Ju(t){var e=sr(t);return function(n,r,i,s){for(var a="",o=0;o<e;o++)a+=t[o](n,r,i,s)||"";return a}}function Zu(t){return function(e){e.root||(e=e.return)&&t(e)}}var ef=function(e,n,r){for(var i=0,s=0;i=s,s=de(),i===38&&s===12&&(n[r]=1),!De(s);)J();return Je(e,K)},tf=function(e,n){var r=-1,i=44;do switch(De(i)){case 0:i===38&&de()===12&&(n[r]=1),e[r]+=ef(K-1,n,r);break;case 2:e[r]+=mt(i);break;case 4:if(i===44){e[++r]=de()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=zt(i)}while(i=J());return e},nf=function(e,n){return Ts(tf(Es(e),n))},Jr=new WeakMap,rf=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Jr.get(r))&&!i){Jr.set(e,!0);for(var s=[],a=nf(n,s),o=r.props,l=0,d=0;l<a.length;l++)for(var c=0;c<o.length;c++,d++)e.props[d]=s[l]?a[l].replace(/&\f/g,o[c]):o[c]+" "+a[l]}}},sf=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function Ps(t,e){switch(Du(t,e)){case 5103:return j+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return j+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return j+t+Tt+t+Y+t+t;case 6828:case 4268:return j+t+Y+t+t;case 6165:return j+t+Y+"flex-"+t+t;case 5187:return j+t+$(t,/(\w+).+(:[^]+)/,j+"box-$1$2"+Y+"flex-$1$2")+t;case 5443:return j+t+Y+"flex-item-"+$(t,/flex-|-self/,"")+t;case 4675:return j+t+Y+"flex-line-pack"+$(t,/align-content|flex-|-self/,"")+t;case 5548:return j+t+Y+$(t,"shrink","negative")+t;case 5292:return j+t+Y+$(t,"basis","preferred-size")+t;case 6060:return j+"box-"+$(t,"-grow","")+j+t+Y+$(t,"grow","positive")+t;case 4554:return j+$(t,/([^-])(transform)/g,"$1"+j+"$2")+t;case 6187:return $($($(t,/(zoom-|grab)/,j+"$1"),/(image-set)/,j+"$1"),t,"")+t;case 5495:case 3959:return $(t,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return $($(t,/(.+:)(flex-)?(.*)/,j+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+j+t+t;case 4095:case 3583:case 4068:case 2532:return $(t,/(.+)-inline(.+)/,j+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(t)-1-e>6)switch(q(t,e+1)){case 109:if(q(t,e+4)!==45)break;case 102:return $(t,/(.+:)(.+)-([^]+)/,"$1"+j+"$2-$3$1"+Tt+(q(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~$n(t,"stretch")?Ps($(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(q(t,e+1)!==115)break;case 6444:switch(q(t,se(t)-3-(~$n(t,"!important")&&10))){case 107:return $(t,":",":"+j)+t;case 101:return $(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+j+(q(t,14)===45?"inline-":"")+"box$3$1"+j+"$2$3$1"+Y+"$2box$3")+t}break;case 5936:switch(q(t,e+11)){case 114:return j+t+Y+$(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return j+t+Y+$(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return j+t+Y+$(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return j+t+Y+t+t}return t}var af=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case ir:e.return=Ps(e.value,e.length);break;case xs:return Oe([$e(e,{value:$(e.value,"@","@"+j)})],i);case rr:if(e.length)return Fu(e.props,function(s){switch(Bu(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Oe([$e(e,{props:[$(s,/:(read-\w+)/,":"+Tt+"$1")]})],i);case"::placeholder":return Oe([$e(e,{props:[$(s,/:(plac\w+)/,":"+j+"input-$1")]}),$e(e,{props:[$(s,/:(plac\w+)/,":"+Tt+"$1")]}),$e(e,{props:[$(s,/:(plac\w+)/,Y+"input-$1")]})],i)}return""})}},of=[af],lf=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var y=m.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=e.stylisPlugins||of,s={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var y=m.getAttribute("data-emotion").split(" "),f=1;f<y.length;f++)s[y[f]]=!0;o.push(m)});var l,d=[rf,sf];{var c,u=[Qu,Zu(function(m){c.insert(m)})],h=Ju(d.concat(i,u)),b=function(y){return Oe(Xu(y),h)};l=function(y,f,g,w){c=g,b(y?y+"{"+f.styles+"}":f.styles),w&&(p.inserted[f.name]=!0)}}var p={key:n,sheet:new ju({key:n,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return p.sheet.hydrate(o),p},cf=!0;function df(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var _s=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||cf===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},uf=function(e,n,r){_s(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function ff(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var pf={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hf=/[A-Z]|^ms/g,mf=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Os=function(e){return e.charCodeAt(1)===45},Zr=function(e){return e!=null&&typeof e!="boolean"},En=ai(function(t){return Os(t)?t:t.replace(hf,"-$&").toLowerCase()}),ei=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(mf,function(r,i,s){return ae={name:i,styles:s,next:ae},i})}return pf[e]!==1&&!Os(e)&&typeof n=="number"&&n!==0?n+"px":n};function Be(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return ae={name:n.name,styles:n.styles,next:ae},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)ae={name:r.name,styles:r.styles,next:ae},r=r.next;var i=n.styles+";";return i}return gf(t,e,n)}case"function":{if(t!==void 0){var s=ae,a=n(t);return ae=s,Be(t,e,a)}break}}if(e==null)return n;var o=e[n];return o!==void 0?o:n}function gf(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Be(t,e,n[i])+";";else for(var s in n){var a=n[s];if(typeof a!="object")e!=null&&e[a]!==void 0?r+=s+"{"+e[a]+"}":Zr(a)&&(r+=En(s)+":"+ei(s,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(e==null||e[a[0]]===void 0))for(var o=0;o<a.length;o++)Zr(a[o])&&(r+=En(s)+":"+ei(s,a[o])+";");else{var l=Be(t,e,a);switch(s){case"animation":case"animationName":{r+=En(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var ti=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ae,bf=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";ae=void 0;var a=e[0];a==null||a.raw===void 0?(i=!1,s+=Be(r,n,a)):s+=a[0];for(var o=1;o<e.length;o++)s+=Be(r,n,e[o]),i&&(s+=a[o]);ti.lastIndex=0;for(var l="",d;(d=ti.exec(s))!==null;)l+="-"+d[1];var c=ff(s)+l;return{name:c,styles:s,next:ae}},wf=function(e){return e()},vf=lr["useInsertionEffect"]?lr["useInsertionEffect"]:!1,xf=vf||wf,Cs=_.createContext(typeof HTMLElement<"u"?lf({key:"css"}):null);Cs.Provider;var yf=function(e){return _.forwardRef(function(n,r){var i=_.useContext(Cs);return e(n,i,r)})},Sf=_.createContext({}),Ef=Au,Tf=function(e){return e!=="theme"},ni=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Ef:Tf},ri=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(a){return e.__emotion_forwardProp(a)&&s(a)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},Pf=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return _s(n,r,i),xf(function(){return uf(n,r,i)}),null},_f=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,a;n!==void 0&&(s=n.label,a=n.target);var o=ri(e,n,r),l=o||ni(i),d=!l("as");return function(){var c=arguments,u=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&u.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)u.push.apply(u,c);else{u.push(c[0][0]);for(var h=c.length,b=1;b<h;b++)u.push(c[b],c[0][b])}var p=yf(function(m,y,f){var g=d&&m.as||i,w="",S=[],E=m;if(m.theme==null){E={};for(var P in m)E[P]=m[P];E.theme=_.useContext(Sf)}typeof m.className=="string"?w=df(y.registered,S,m.className):m.className!=null&&(w=m.className+" ");var L=bf(u.concat(S),y.registered,E);w+=y.key+"-"+L.name,a!==void 0&&(w+=" "+a);var k=d&&o===void 0?ni(g):l,O={};for(var T in m)d&&T==="as"||k(T)&&(O[T]=m[T]);return O.className=w,O.ref=f,_.createElement(_.Fragment,null,_.createElement(Pf,{cache:y,serialized:L,isStringTag:typeof g=="string"}),_.createElement(g,O))});return p.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",p.defaultProps=e.defaultProps,p.__emotion_real=p,p.__emotion_base=i,p.__emotion_styles=u,p.__emotion_forwardProp=o,Object.defineProperty(p,"toString",{value:function(){return"."+a}}),p.withComponent=function(m,y){return t(m,jn({},n,y,{shouldForwardProp:ri(p,y,!0)})).apply(void 0,u)},p}},Of=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Z=_f.bind();Of.forEach(function(t){Z[t]=Z(t)});const Cf=Z.section`
  width: 100%;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    margin-bottom: 78px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 150px;
  }
`,ar=Z(Un)`
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
`,kf=Z(ar)`
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
`,Mf=()=>v.jsxs(kf,{children:[v.jsx("p",{className:"about-project",children:"Про проєкт"}),v.jsxs("h2",{className:"about-title",children:[v.jsx("span",{className:"accent",children:"МІСТОХАБ"})," це"]}),v.jsxs(Nt,{wrapperTag:"ul",wrapperClass:"about-list",className:"swiper",resizeObserver:!0,onResize:t=>{t.slideTo(0),t.update()},breakpoints:{1440:{slidesPerView:3,initialSlide:0,slideTo:0,enabled:!0,spaceBetween:0,grid:{row:1}},768:{slidesPerView:2,initialSlide:0,slideTo:0,enabled:!0,spaceBetween:"16px",allowTouchMove:!0,grid:{row:1},pagination:{enabled:!0,clickable:!0}}},slidesPerView:1,allowTouchMove:!1,grid:{rows:3},initialSlide:0,enabled:!0,pagination:{enabled:!1,clickable:!0},modules:[ws],children:[v.jsxs(oe,{tag:"li",className:"about-list-item",children:[v.jsx("div",{className:"about-list-item-number",children:"1"}),v.jsx("h3",{className:"about-list-item-title",children:"Кафе"}),v.jsx("p",{className:"about-list-item-text",children:"Стане місцем якісного відпочинку, знайомств та генерування ідей."})]}),v.jsxs(oe,{tag:"li",className:"about-list-item",children:[v.jsx("div",{className:"about-list-item-number",children:"2"}),v.jsx("h3",{className:"about-list-item-title",children:"Івент-простір"}),v.jsx("p",{className:"about-list-item-text",children:"Розвиватиме культурне життя Полтави та стане місцем для самореалізації."})]}),v.jsxs(oe,{tag:"li",className:"about-list-item",children:[v.jsx("div",{className:"about-list-item-number",children:"3"}),v.jsx("h3",{className:"about-list-item-title",children:"Крамниця МІСТОШОП"}),v.jsx("p",{className:"about-list-item-text",children:"Продаватиме унікальні сучасні сувеніри, що відображають дух міста та його культурну спадщину."})]})]}),v.jsxs("p",{className:"about-info",children:["80% прибутку ",v.jsx("span",{className:"accent",children:"МІСТОХАБ"})," буде спрямовано на фінансування соціальних проєктів містян"]})]}),Lf="/MistoHub/assets/howItWorkBg-220ae44c.svg",Af="/MistoHub/assets/howItWorkBg-tablet-6f286e72.svg",If="/MistoHub/assets/howItWorkBg-desktop-c7cada1c.svg",Rf=Z.div`
  width: 100%;

  background-image: url(${Lf});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 60% center;

  @media (min-width: 768px) {
    background-image: url(${Af});
    background-position: 60% center;
  }

  @media (min-width: 1440px) {
    background-image: url(${If});
    background-position: 67% center;
  }
`,jf=Z(ar)`
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
`,$f=()=>{const t=_.useRef(null),{openModal:e}=zi();return _.useEffect(()=>{const n=()=>{const r=window.innerWidth;let i=0;r>=1440?i=(r-1440)/2-335:r>=768&&r<1440?i=(r-768)/2-393:i=(r-375)/2-194,t.current.style.backgroundPosition=`left ${i}px center`};return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)}),v.jsx(Rf,{ref:t,children:v.jsx(jf,{children:v.jsxs("div",{className:"container-inner",children:[v.jsx("h2",{className:"how-it-work-title",children:"Як це працює?"}),v.jsxs(Nt,{wrapperTag:"ul",wrapperClass:"how-it-work-list",className:"swiper",resizeObserver:!0,onResize:n=>{n.slideTo(0),n.update()},breakpoints:{768:{slidesPerView:5,enabled:!0,initialSlide:0,slideTo:0,pagination:{enabled:!1},spaceBetween:0}},slidesPerView:1,grid:{row:1},enabled:!0,initialSlide:0,pagination:{enabled:!0,clickable:!0},spaceBetween:16,modules:[ws],children:[v.jsxs(oe,{tag:"li",className:"how-it-work-item",children:[v.jsx("div",{className:"how-it-work-number",children:"1"}),v.jsxs("p",{className:"how-it-work-text",children:["Люди і компанії вкладають кошти у відновлення історичної будівлі"," ",v.jsx("span",{className:"accent",children:"МІСТОХАБ"})]})]}),v.jsxs(oe,{tag:"li",className:"how-it-work-item",children:[v.jsx("div",{className:"how-it-work-number",children:"2"}),v.jsxs("p",{className:"how-it-work-text",children:["У відновленій будівлі відкривається МІСТОХАБ, в якому функціонують:"," ",v.jsx("span",{className:"accent",children:"Кафе, Крамниця локальних виробників Містошоп, Івент-простір"})," ","та генерують прибуток"]})]}),v.jsxs(oe,{tag:"li",className:"how-it-work-item",children:[v.jsx("div",{className:"how-it-work-number",children:"3"}),v.jsxs("p",{className:"how-it-work-text",children:["80% прибутку передається у Фонд міських ініціатив"," ",v.jsx("span",{className:"accent",children:"МІСТОХАБ"})]})]}),v.jsxs(oe,{tag:"li",className:"how-it-work-item",children:[v.jsx("div",{className:"how-it-work-number",children:"4"}),v.jsxs("p",{className:"how-it-work-text",children:[v.jsx("span",{className:"accent",children:"Фонд міських ініціатив"})," оголошує конкурс проєктів містян, a імпакт-інвестори обирають найкращі ідеї"]})]}),v.jsxs(oe,{tag:"li",className:"how-it-work-item",children:[v.jsx("div",{className:"how-it-work-number",children:"5"}),v.jsxs("p",{className:"how-it-work-text",children:[v.jsx("span",{className:"accent",children:"Фонд міських ініціатив"})," фінансує проєкти переможців"]})]})]}),v.jsx("button",{className:"how-it-work-btn",type:"button",onClick:()=>e("join_modal"),children:"Приєднатися"})]})})})},Nf="/MistoHub/assets/building1-7921ea51.svg",zf="/MistoHub/assets/building2-f1c01339.svg",Hf="/MistoHub/assets/building3-5c8bd933.svg",Df="/MistoHub/assets/building4-204b02df.svg",Bf=Z(ar)`
  margin-bottom: 60px;
  padding-bottom: 21px;
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
    padding-bottom: 21px;

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
    padding-bottom: 31px;

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
`,Bt=Z.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
`,Ff=Z(Bt)`
  background-image: url(${Nf});
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
`,Vf=Z(Bt)`
  background-image: url(${zf});
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
`,Wf=Z(Bt)`
  background-image: url(${Hf});
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
`,Gf=Z(Bt)`
  background-image: url(${Df});
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
`,ii="/MistoHub/assets/building-0fd1d2de.jpg",Uf="/MistoHub/assets/building@2x-6f4bbcf0.jpg",qf="/MistoHub/assets/building-tablet-fcd0323f.jpg",Yf="/MistoHub/assets/building-tablet@2x-4bed8edc.jpg",Xf="/MistoHub/assets/building-mobile-f96d3050.jpg",Kf="/MistoHub/assets/building-mobile@2x-2ecbf732.jpg",Qf="/MistoHub/assets/building-546dad3d.webp",Jf="/MistoHub/assets/building@2x-cdd55e18.webp",Zf="/MistoHub/assets/building-tablet-6b49ad77.webp",ep="/MistoHub/assets/building-tablet@2x-e385e999.webp",tp="/MistoHub/assets/building-mobile-24746013.webp",np="/MistoHub/assets/building-mobile@2x-ac0864e6.webp",rp=()=>v.jsxs(Bf,{children:[v.jsxs("h2",{className:"building-title",children:["Будівля ",v.jsx("span",{className:"accent",children:"МІСТОХАБ"})," це історична спадщина Полтави"]}),v.jsx("p",{className:"building-text",children:"В 1909 році на Спаській, 10 розташовувався перший у Полтаві пивоварний завод та пивниця «Притулок друзів»"}),v.jsxs("div",{className:"building-img-container",children:[v.jsxs("picture",{children:[v.jsx("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:`${tp} 1x, ${np} 2x`,width:"343",height:"348"}),v.jsx("source",{media:"(max-width: 767px)",srcSet:`${Xf} 1x, ${Kf} 2x`,width:"343",height:"348"}),v.jsx("source",{type:"image/webp",media:"(max-width: 1439px)",srcSet:`${Zf} 1x, ${ep} 2x`,width:"704",height:"534"}),v.jsx("source",{media:"(max-width: 1439px)",srcSet:`${qf} 1x, ${Yf} 2x`,width:"704",height:"534"}),v.jsx("source",{type:"image/webp",srcSet:`${Qf} 1x, ${Jf} 2x`,width:"1200",height:"753"}),v.jsx("img",{className:"building-img",srcSet:`${ii} 1x, ${Uf} 2x`,src:ii,alt:"Будівля МІСТОХАБ",width:"1200",height:"753"})]}),v.jsx(Ff,{}),v.jsx(Vf,{}),v.jsx(Wf,{}),v.jsx(Gf,{})]})]}),ip=()=>v.jsxs(Cf,{id:"about",children:[v.jsx(Mf,{}),v.jsx($f,{}),v.jsx(rp,{})]}),sp=()=>{const t=Is();_.useEffect(()=>{const{hash:e}=t;if(e){const n=e.substring(1),r=document.getElementById(n);r&&window.scrollTo({top:r.offsetTop-100,behavior:"smooth"})}},[t])},ap=({setActiveSection:t})=>{_.useEffect(()=>{const e=new URL("/MistoHub",window.location.origin),n=()=>{document.querySelectorAll("section").forEach(i=>{const a=document.getElementById("about").offsetTop;window.scrollY<a-110&&t("main");const o=i.offsetTop,l=i.offsetHeight,d=i.getAttribute("id");if(window.scrollY>=o-100&&window.scrollY<o+l-100){if(t(d),`#${d}`===window.location.hash||!d&&!window.location.hash)return;let c=new URL(window.location.pathname,e).toString();d!==null&&(c=new URL(`#${d}`,e).toString()),window.history.pushState(null,"",c)}})};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[t])};function Pe(t){const e="requestIdleCallback"in window?n=>window.requestIdleCallback(n,{timeout:100}):n=>setTimeout(n,0);return _.lazy(()=>new Promise(n=>e(n)).then(t))}const op=Pe(()=>Te(()=>import("./CoFounders-587577c7.js"),["assets/CoFounders-587577c7.js","assets/index-ceaa3d0e.js","assets/index-a6b3472e.css"])),lp=Pe(()=>Te(()=>import("./JoinUs-1d458108.js"),["assets/JoinUs-1d458108.js","assets/index-ceaa3d0e.js","assets/index-a6b3472e.css","assets/semantic-fc1421d8.js","assets/index.browser-342e672c.js"])),cp=Pe(()=>Te(()=>import("./Visualization-b51d9af2.js").then(t=>t.V),["assets/Visualization-b51d9af2.js","assets/index-ceaa3d0e.js","assets/index-a6b3472e.css","assets/index.browser-342e672c.js"])),dp=Pe(()=>Te(()=>import("./AccumulatedMoney-7f42920f.js"),["assets/AccumulatedMoney-7f42920f.js","assets/index-ceaa3d0e.js","assets/index-a6b3472e.css","assets/hoist-non-react-statics.cjs-3f8ebaa8.js","assets/index.browser-342e672c.js"])),up=Pe(()=>Te(()=>import("./InvestorsBlock-be76b600.js"),["assets/InvestorsBlock-be76b600.js","assets/index-ceaa3d0e.js","assets/index-a6b3472e.css","assets/index-5260f25d.js","assets/semantic-fc1421d8.js"])),fp=Pe(()=>Te(()=>import("./Footer-5ea16785.js"),["assets/Footer-5ea16785.js","assets/index-ceaa3d0e.js","assets/index-a6b3472e.css"])),pp=Pe(()=>Te(()=>import("./ModalsManager-435e2d1d.js"),["assets/ModalsManager-435e2d1d.js","assets/index-ceaa3d0e.js","assets/index-a6b3472e.css","assets/index-5260f25d.js","assets/hoist-non-react-statics.cjs-3f8ebaa8.js"])),hp=()=>{const[t,e]=_.useState("main"),[n,r]=_.useState([]),[i,s]=_.useState([]);return _.useEffect(()=>{async function a(){try{const[o,l]=await Promise.all([Qa(),Ja()]);r(o),s(l)}catch(o){console.error("Error fetching data:",o)}}a()},[]),v.jsxs(v.Fragment,{children:[v.jsx(zo,{}),v.jsxs("main",{children:[v.jsx(ku,{}),v.jsx(ip,{}),v.jsxs(_.Suspense,{fallback:null,children:[v.jsx(cp,{}),v.jsx(dp,{}),v.jsx(up,{people:i,companies:n}),v.jsx(lp,{people:i,companies:n}),v.jsx(op,{}),v.jsx(Hc,{}),v.jsx(sp,{}),v.jsx(ap,{setActiveSection:e})]})]}),v.jsxs(v.Fragment,{children:[v.jsx(_.Suspense,{fallback:null,children:v.jsx(fp,{})}),v.jsx(_.Suspense,{fallback:null,children:v.jsx(pp,{activeSection:t})})]})]})},xp=Object.freeze(Object.defineProperty({__proto__:null,default:hp},Symbol.toStringTag,{value:"Module"}));export{Un as C,xp as H,me as I,vp as M,Ao as S,Ni as a,No as b,Mu as c,Nt as d,oe as e,gp as f,We as g,pe as m,Z as n,bp as p,bf as s,zi as u};
