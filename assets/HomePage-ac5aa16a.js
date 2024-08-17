import{g as oi,r as _,M as Ls,u as Pe,j as v,L as lr,c as tt,a as As,R as G,m as ai,b as cr,d as Is,_ as ye}from"./index-66592a1d.js";function li(t,e){return function(){return t.apply(e,arguments)}}const{toString:Rs}=Object.prototype,{getPrototypeOf:zn}=Object,_t=(t=>e=>{const n=Rs.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ue=t=>(t=t.toLowerCase(),e=>_t(e)===t),Ot=t=>e=>typeof e===t,{isArray:Me}=Array,ze=Ot("undefined");function $s(t){return t!==null&&!ze(t)&&t.constructor!==null&&!ze(t.constructor)&&te(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const ci=ue("ArrayBuffer");function js(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ci(t.buffer),e}const Ns=Ot("string"),te=Ot("function"),di=Ot("number"),Ct=t=>t!==null&&typeof t=="object",zs=t=>t===!0||t===!1,dt=t=>{if(_t(t)!=="object")return!1;const e=zn(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Hs=ue("Date"),Ds=ue("File"),Bs=ue("Blob"),Fs=ue("FileList"),Vs=t=>Ct(t)&&te(t.pipe),Ws=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||te(t.append)&&((e=_t(t))==="formdata"||e==="object"&&te(t.toString)&&t.toString()==="[object FormData]"))},Gs=ue("URLSearchParams"),Us=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Fe(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Me(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function ui(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const fi=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),pi=t=>!ze(t)&&t!==fi;function Tn(){const{caseless:t}=pi(this)&&this||{},e={},n=(r,i)=>{const s=t&&ui(e,i)||i;dt(e[s])&&dt(r)?e[s]=Tn(e[s],r):dt(r)?e[s]=Tn({},r):Me(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Fe(arguments[r],n);return e}const qs=(t,e,n,{allOwnKeys:r}={})=>(Fe(e,(i,s)=>{n&&te(i)?t[s]=li(i,n):t[s]=i},{allOwnKeys:r}),t),Ys=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Xs=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Ks=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&zn(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Qs=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Js=t=>{if(!t)return null;if(Me(t))return t;let e=t.length;if(!di(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Zs=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&zn(Uint8Array)),eo=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},to=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},no=ue("HTMLFormElement"),ro=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),dr=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),io=ue("RegExp"),hi=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Fe(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},so=t=>{hi(t,(e,n)=>{if(te(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(te(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},oo=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Me(t)?r(t):r(String(t).split(e)),n},ao=()=>{},lo=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Vt="abcdefghijklmnopqrstuvwxyz",ur="0123456789",mi={DIGIT:ur,ALPHA:Vt,ALPHA_DIGIT:Vt+Vt.toUpperCase()+ur},co=(t=16,e=mi.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function uo(t){return!!(t&&te(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const fo=t=>{const e=new Array(10),n=(r,i)=>{if(Ct(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Me(r)?[]:{};return Fe(r,(o,a)=>{const l=n(o,i+1);!ze(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},po=ue("AsyncFunction"),ho=t=>t&&(Ct(t)||te(t))&&te(t.then)&&te(t.catch),x={isArray:Me,isArrayBuffer:ci,isBuffer:$s,isFormData:Ws,isArrayBufferView:js,isString:Ns,isNumber:di,isBoolean:zs,isObject:Ct,isPlainObject:dt,isUndefined:ze,isDate:Hs,isFile:Ds,isBlob:Bs,isRegExp:io,isFunction:te,isStream:Vs,isURLSearchParams:Gs,isTypedArray:Zs,isFileList:Fs,forEach:Fe,merge:Tn,extend:qs,trim:Us,stripBOM:Ys,inherits:Xs,toFlatObject:Ks,kindOf:_t,kindOfTest:ue,endsWith:Qs,toArray:Js,forEachEntry:eo,matchAll:to,isHTMLForm:no,hasOwnProperty:dr,hasOwnProp:dr,reduceDescriptors:hi,freezeMethods:so,toObjectSet:oo,toCamelCase:ro,noop:ao,toFiniteNumber:lo,findKey:ui,global:fi,isContextDefined:pi,ALPHABET:mi,generateString:co,isSpecCompliantForm:uo,toJSONObject:fo,isAsyncFn:po,isThenable:ho};function R(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}x.inherits(R,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:x.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const gi=R.prototype,bi={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{bi[t]={value:t}});Object.defineProperties(R,bi);Object.defineProperty(gi,"isAxiosError",{value:!0});R.from=(t,e,n,r,i,s)=>{const o=Object.create(gi);return x.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),R.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const mo=null;function Pn(t){return x.isPlainObject(t)||x.isArray(t)}function wi(t){return x.endsWith(t,"[]")?t.slice(0,-2):t}function fr(t,e,n){return t?t.concat(e).map(function(i,s){return i=wi(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function go(t){return x.isArray(t)&&!t.some(Pn)}const bo=x.toFlatObject(x,{},null,function(e){return/^is[A-Z]/.test(e)});function kt(t,e,n){if(!x.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=x.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,y){return!x.isUndefined(y[m])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&x.isSpecCompliantForm(e);if(!x.isFunction(i))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(x.isDate(h))return h.toISOString();if(!l&&x.isBlob(h))throw new R("Blob is not supported. Use a Buffer instead.");return x.isArrayBuffer(h)||x.isTypedArray(h)?l&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function c(h,m,y){let f=h;if(h&&!y&&typeof h=="object"){if(x.endsWith(m,"{}"))m=r?m:m.slice(0,-2),h=JSON.stringify(h);else if(x.isArray(h)&&go(h)||(x.isFileList(h)||x.endsWith(m,"[]"))&&(f=x.toArray(h)))return m=wi(m),f.forEach(function(w,S){!(x.isUndefined(w)||w===null)&&e.append(o===!0?fr([m],S,s):o===null?m:m+"[]",u(w))}),!1}return Pn(h)?!0:(e.append(fr(y,m,s),u(h)),!1)}const d=[],p=Object.assign(bo,{defaultVisitor:c,convertValue:u,isVisitable:Pn});function b(h,m){if(!x.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+m.join("."));d.push(h),x.forEach(h,function(f,g){(!(x.isUndefined(f)||f===null)&&i.call(e,f,x.isString(g)?g.trim():g,m,p))===!0&&b(f,m?m.concat(g):[g])}),d.pop()}}if(!x.isObject(t))throw new TypeError("data must be an object");return b(t),e}function pr(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Hn(t,e){this._pairs=[],t&&kt(t,this,e)}const vi=Hn.prototype;vi.append=function(e,n){this._pairs.push([e,n])};vi.toString=function(e){const n=e?function(r){return e.call(this,r,pr)}:pr;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function wo(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function xi(t,e,n){if(!e)return t;const r=n&&n.encode||wo,i=n&&n.serialize;let s;if(i?s=i(e,n):s=x.isURLSearchParams(e)?e.toString():new Hn(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class vo{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){x.forEach(this.handlers,function(r){r!==null&&e(r)})}}const hr=vo,yi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xo=typeof URLSearchParams<"u"?URLSearchParams:Hn,yo=typeof FormData<"u"?FormData:null,So=typeof Blob<"u"?Blob:null,Eo={isBrowser:!0,classes:{URLSearchParams:xo,FormData:yo,Blob:So},protocols:["http","https","file","blob","url","data"]},Si=typeof window<"u"&&typeof document<"u",To=(t=>Si&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),Po=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),_o=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Si,hasStandardBrowserEnv:To,hasStandardBrowserWebWorkerEnv:Po},Symbol.toStringTag,{value:"Module"})),le={..._o,...Eo};function Oo(t,e){return kt(t,new le.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return le.isNode&&x.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function Co(t){return x.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function ko(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Ei(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&x.isArray(i)?i.length:o,l?(x.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!x.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&x.isArray(i[o])&&(i[o]=ko(i[o])),!a)}if(x.isFormData(t)&&x.isFunction(t.entries)){const n={};return x.forEachEntry(t,(r,i)=>{e(Co(r),i,n,0)}),n}return null}function Mo(t,e,n){if(x.isString(t))try{return(e||JSON.parse)(t),x.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Dn={transitional:yi,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=x.isObject(e);if(s&&x.isHTMLForm(e)&&(e=new FormData(e)),x.isFormData(e))return i?JSON.stringify(Ei(e)):e;if(x.isArrayBuffer(e)||x.isBuffer(e)||x.isStream(e)||x.isFile(e)||x.isBlob(e))return e;if(x.isArrayBufferView(e))return e.buffer;if(x.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Oo(e,this.formSerializer).toString();if((a=x.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return kt(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),Mo(e)):e}],transformResponse:[function(e){const n=this.transitional||Dn.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&x.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?R.from(a,R.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:le.classes.FormData,Blob:le.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};x.forEach(["delete","get","head","post","put","patch"],t=>{Dn.headers[t]={}});const Bn=Dn,Lo=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ao=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&Lo[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},mr=Symbol("internals");function Re(t){return t&&String(t).trim().toLowerCase()}function ut(t){return t===!1||t==null?t:x.isArray(t)?t.map(ut):String(t)}function Io(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Ro=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Wt(t,e,n,r,i){if(x.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!x.isString(e)){if(x.isString(r))return e.indexOf(r)!==-1;if(x.isRegExp(r))return r.test(e)}}function $o(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function jo(t,e){const n=x.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class Mt{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,u){const c=Re(l);if(!c)throw new Error("header name must be a non-empty string");const d=x.findKey(i,c);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||l]=ut(a))}const o=(a,l)=>x.forEach(a,(u,c)=>s(u,c,l));return x.isPlainObject(e)||e instanceof this.constructor?o(e,n):x.isString(e)&&(e=e.trim())&&!Ro(e)?o(Ao(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=Re(e),e){const r=x.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return Io(i);if(x.isFunction(n))return n.call(this,i,r);if(x.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Re(e),e){const r=x.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Wt(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Re(o),o){const a=x.findKey(r,o);a&&(!n||Wt(r,r[a],a,n))&&(delete r[a],i=!0)}}return x.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Wt(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return x.forEach(this,(i,s)=>{const o=x.findKey(r,s);if(o){n[o]=ut(i),delete n[s];return}const a=e?$o(s):String(s).trim();a!==s&&delete n[s],n[a]=ut(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return x.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&x.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[mr]=this[mr]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Re(o);r[a]||(jo(i,o),r[a]=!0)}return x.isArray(e)?e.forEach(s):s(e),this}}Mt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.reduceDescriptors(Mt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});x.freezeMethods(Mt);const ge=Mt;function Gt(t,e){const n=this||Bn,r=e||n,i=ge.from(r.headers);let s=r.data;return x.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Ti(t){return!!(t&&t.__CANCEL__)}function Ve(t,e,n){R.call(this,t??"canceled",R.ERR_CANCELED,e,n),this.name="CanceledError"}x.inherits(Ve,R,{__CANCEL__:!0});function No(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new R("Request failed with status code "+n.status,[R.ERR_BAD_REQUEST,R.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const zo=le.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];x.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),x.isString(r)&&o.push("path="+r),x.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ho(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Do(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Pi(t,e){return t&&!Ho(e)?Do(t,e):e}const Bo=le.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=x.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Fo(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Vo(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=r[s];o||(o=u),n[i]=l,r[i]=u;let d=s,p=0;for(;d!==i;)p+=n[d++],d=d%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const b=c&&u-c;return b?Math.round(p*1e3/b):void 0}}function gr(t,e){let n=0;const r=Vo(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a),u=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&u?(o-s)/l:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const Wo=typeof XMLHttpRequest<"u",Go=Wo&&function(t){return new Promise(function(n,r){let i=t.data;const s=ge.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,l;function u(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let c;if(x.isFormData(i)){if(le.hasStandardBrowserEnv||le.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((c=s.getContentType())!==!1){const[m,...y]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([m||"multipart/form-data",...y].join("; "))}}let d=new XMLHttpRequest;if(t.auth){const m=t.auth.username||"",y=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(m+":"+y))}const p=Pi(t.baseURL,t.url);d.open(t.method.toUpperCase(),xi(p,t.params,t.paramsSerializer),!0),d.timeout=t.timeout;function b(){if(!d)return;const m=ge.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),f={data:!o||o==="text"||o==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:m,config:t,request:d};No(function(w){n(w),u()},function(w){r(w),u()},f),d=null}if("onloadend"in d?d.onloadend=b:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(b)},d.onabort=function(){d&&(r(new R("Request aborted",R.ECONNABORTED,t,d)),d=null)},d.onerror=function(){r(new R("Network Error",R.ERR_NETWORK,t,d)),d=null},d.ontimeout=function(){let y=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const f=t.transitional||yi;t.timeoutErrorMessage&&(y=t.timeoutErrorMessage),r(new R(y,f.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,t,d)),d=null},le.hasStandardBrowserEnv&&(a&&x.isFunction(a)&&(a=a(t)),a||a!==!1&&Bo(p))){const m=t.xsrfHeaderName&&t.xsrfCookieName&&zo.read(t.xsrfCookieName);m&&s.set(t.xsrfHeaderName,m)}i===void 0&&s.setContentType(null),"setRequestHeader"in d&&x.forEach(s.toJSON(),function(y,f){d.setRequestHeader(f,y)}),x.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),o&&o!=="json"&&(d.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&d.addEventListener("progress",gr(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",gr(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=m=>{d&&(r(!m||m.type?new Ve(null,t,d):m),d.abort(),d=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const h=Fo(p);if(h&&le.protocols.indexOf(h)===-1){r(new R("Unsupported protocol "+h+":",R.ERR_BAD_REQUEST,t));return}d.send(i||null)})},_n={http:mo,xhr:Go};x.forEach(_n,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const br=t=>`- ${t}`,Uo=t=>x.isFunction(t)||t===null||t===!1,_i={getAdapter:t=>{t=x.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!Uo(n)&&(r=_n[(o=String(n)).toLowerCase()],r===void 0))throw new R(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(br).join(`
`):" "+br(s[0]):"as no adapter specified";throw new R("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:_n};function Ut(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ve(null,t)}function wr(t){return Ut(t),t.headers=ge.from(t.headers),t.data=Gt.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),_i.getAdapter(t.adapter||Bn.adapter)(t).then(function(r){return Ut(t),r.data=Gt.call(t,t.transformResponse,r),r.headers=ge.from(r.headers),r},function(r){return Ti(r)||(Ut(t),r&&r.response&&(r.response.data=Gt.call(t,t.transformResponse,r.response),r.response.headers=ge.from(r.response.headers))),Promise.reject(r)})}const vr=t=>t instanceof ge?{...t}:t;function Ce(t,e){e=e||{};const n={};function r(u,c,d){return x.isPlainObject(u)&&x.isPlainObject(c)?x.merge.call({caseless:d},u,c):x.isPlainObject(c)?x.merge({},c):x.isArray(c)?c.slice():c}function i(u,c,d){if(x.isUndefined(c)){if(!x.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function s(u,c){if(!x.isUndefined(c))return r(void 0,c)}function o(u,c){if(x.isUndefined(c)){if(!x.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,d){if(d in e)return r(u,c);if(d in t)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,c)=>i(vr(u),vr(c),!0)};return x.forEach(Object.keys(Object.assign({},t,e)),function(c){const d=l[c]||i,p=d(t[c],e[c],c);x.isUndefined(p)&&d!==a||(n[c]=p)}),n}const Oi="1.6.8",Fn={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Fn[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const xr={};Fn.transitional=function(e,n,r){function i(s,o){return"[Axios v"+Oi+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new R(i(o," has been removed"+(n?" in "+n:"")),R.ERR_DEPRECATED);return n&&!xr[o]&&(xr[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function qo(t,e,n){if(typeof t!="object")throw new R("options must be an object",R.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new R("option "+s+" must be "+l,R.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new R("Unknown option "+s,R.ERR_BAD_OPTION)}}const On={assertOptions:qo,validators:Fn},be=On.validators;class wt{constructor(e){this.defaults=e,this.interceptors={request:new hr,response:new hr}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ce(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&On.assertOptions(r,{silentJSONParsing:be.transitional(be.boolean),forcedJSONParsing:be.transitional(be.boolean),clarifyTimeoutError:be.transitional(be.boolean)},!1),i!=null&&(x.isFunction(i)?n.paramsSerializer={serialize:i}:On.assertOptions(i,{encode:be.function,serialize:be.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&x.merge(s.common,s[n.method]);s&&x.forEach(["delete","get","head","post","put","patch","common"],h=>{delete s[h]}),n.headers=ge.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(l=l&&m.synchronous,a.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let c,d=0,p;if(!l){const h=[wr.bind(this),void 0];for(h.unshift.apply(h,a),h.push.apply(h,u),p=h.length,c=Promise.resolve(n);d<p;)c=c.then(h[d++],h[d++]);return c}p=a.length;let b=n;for(d=0;d<p;){const h=a[d++],m=a[d++];try{b=h(b)}catch(y){m.call(this,y);break}}try{c=wr.call(this,b)}catch(h){return Promise.reject(h)}for(d=0,p=u.length;d<p;)c=c.then(u[d++],u[d++]);return c}getUri(e){e=Ce(this.defaults,e);const n=Pi(e.baseURL,e.url);return xi(n,e.params,e.paramsSerializer)}}x.forEach(["delete","get","head","options"],function(e){wt.prototype[e]=function(n,r){return this.request(Ce(r||{},{method:e,url:n,data:(r||{}).data}))}});x.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Ce(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}wt.prototype[e]=n(),wt.prototype[e+"Form"]=n(!0)});const ft=wt;class Vn{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Ve(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Vn(function(i){e=i}),cancel:e}}}const Yo=Vn;function Xo(t){return function(n){return t.apply(null,n)}}function Ko(t){return x.isObject(t)&&t.isAxiosError===!0}const Cn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Cn).forEach(([t,e])=>{Cn[e]=t});const Qo=Cn;function Ci(t){const e=new ft(t),n=li(ft.prototype.request,e);return x.extend(n,ft.prototype,e,{allOwnKeys:!0}),x.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return Ci(Ce(t,i))},n}const W=Ci(Bn);W.Axios=ft;W.CanceledError=Ve;W.CancelToken=Yo;W.isCancel=Ti;W.VERSION=Oi;W.toFormData=kt;W.AxiosError=R;W.Cancel=W.CanceledError;W.all=function(e){return Promise.all(e)};W.spread=Xo;W.isAxiosError=Ko;W.mergeConfig=Ce;W.AxiosHeaders=ge;W.formToJSON=t=>Ei(x.isHTMLForm(t)?new FormData(t):t);W.getAdapter=_i.getAdapter;W.HttpStatusCode=Qo;W.default=W;const We=W;function Wn(t){var n;if(!((n=t==null?void 0:t.asset)!=null&&n._ref))return null;const e=t.asset._ref.split("-");return`https://cdn.sanity.io/images/l8zwdlyt/production/${e[1]}-${e[2]}.${e[3]}`}function Jo(t){return t!=null&&t.hotspot?{x:t.hotspot.x,y:t.hotspot.y}:t!=null&&t.crop?{x:t.crop.left+(1-t.crop.right)/2,y:t.crop.top+(1-t.crop.bottom)/2}:null}async function Zo(){try{const{data:{result:t}}=await We.get('https://l8zwdlyt.apicdn.sanity.io/v2022-03-07/data/query/production?query=*[_type=="goal"]{ _id, goal, raised }');return t[0]}catch{return}}async function ea(){try{const{data:{result:t}}=await We.get('https://l8zwdlyt.apicdn.sanity.io/v2022-03-07/data/query/production?query=*[_type=="companies"]{ _id, id, name, logoURL, link, question, answer } | order(id asc)');return t.map(n=>(n.logoURL&&(n.logoURL.crop&&(n.logoCrop=n.logoURL.crop),n.logoURL.hotspot&&(n.logoFocalScope=n.logoURL.hotspot),n.logoOriginal=n.logoURL,n.logoURL=Wn(n.logoURL)),n))}catch{return}}async function ta(){try{const{data:{result:t}}=await We.get('https://l8zwdlyt.apicdn.sanity.io/v2022-03-07/data/query/production?query=*[_type=="people"]{ _id, id,firstName,secondName,type, imageURL, facebook, instagram, otherLink, question, answer  } | order(id asc)');return t.map(n=>(n.imageURL&&(n.imageFocalPoint=Jo(n.imageURL),n.imageURL=Wn(n.imageURL)),n))}catch{return}}async function na(){try{const{data:{result:t}}=await We.get('https://l8zwdlyt.apicdn.sanity.io/v2022-03-07/data/query/production?query=*[_type=="partners"]{ _id, id, name, logoURL, link  } | order(id asc)');return t.map(n=>(n.logoURL&&(n.logoURL.crop&&(n.logoCrop=n.logoURL.crop),n.logoURL.hotspot&&(n.logoFocalScope=n.logoURL.hotspot),n.logoOriginal=n.logoURL,n.logoURL=Wn(n.logoURL)),n))}catch{return}}async function xp(t){const{data:e}=await We.post("https://api.telegram.org/bot6593525660:AAGrKfdt_B8SslnCs0UhvyMPZ3nn_HHEU0Q/sendMessage",{chat_id:"5921930260",parse_mode:"html",text:t});return e}var Gn={};Gn.match=la;Gn.parse=ki;var ra=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,ia=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,sa=/^(?:(min|max)-)?(.+)/,oa=/(em|rem|px|cm|mm|in|pt|pc)?$/,aa=/(dpi|dpcm|dppx)?$/;function la(t,e){return ki(t).some(function(n){var r=n.inverse,i=n.type==="all"||e.type===n.type;if(i&&r||!(i||r))return!1;var s=n.expressions.every(function(o){var a=o.feature,l=o.modifier,u=o.value,c=e[a];if(!c)return!1;switch(a){case"orientation":case"scan":return c.toLowerCase()===u.toLowerCase();case"width":case"height":case"device-width":case"device-height":u=Er(u),c=Er(c);break;case"resolution":u=Sr(u),c=Sr(c);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":u=yr(u),c=yr(c);break;case"grid":case"color":case"color-index":case"monochrome":u=parseInt(u,10)||1,c=parseInt(c,10)||0;break}switch(l){case"min":return c>=u;case"max":return c<=u;default:return c===u}});return s&&!r||!s&&r})}function ki(t){return t.split(",").map(function(e){e=e.trim();var n=e.match(ra),r=n[1],i=n[2],s=n[3]||"",o={};return o.inverse=!!r&&r.toLowerCase()==="not",o.type=i?i.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],o.expressions=s.map(function(a){var l=a.match(ia),u=l[1].toLowerCase().match(sa);return{modifier:u[1],feature:u[2],value:l[2]}}),o})}function yr(t){var e=Number(t),n;return e||(n=t.match(/^(\d+)\s*\/\s*(\d+)$/),e=n[1]/n[2]),e}function Sr(t){var e=parseFloat(t),n=String(t).match(aa)[1];switch(n){case"dpcm":return e/2.54;case"dppx":return e*96;default:return e}}function Er(t){var e=parseFloat(t),n=String(t).match(oa)[1];switch(n){case"em":return e*16;case"rem":return e*16;case"cm":return e*96/2.54;case"mm":return e*96/2.54/10;case"in":return e*96;case"pt":return e*72;case"pc":return e*72/12;default:return e}}var ca=Gn.match,Tr=typeof window<"u"?window.matchMedia:null;function da(t,e,n){var r=this,i;Tr&&!n&&(i=Tr.call(window,t)),i?(this.matches=i.matches,this.media=i.media,i.addListener(a)):(this.matches=ca(t,e),this.media=t),this.addListener=s,this.removeListener=o,this.dispose=l;function s(u){i&&i.addListener(u)}function o(u){i&&i.removeListener(u)}function a(u){r.matches=u.matches,r.media=u.media}function l(){i&&i.removeListener(a)}}function ua(t,e,n){return new da(t,e,n)}var fa=ua;const pa=oi(fa);var ha=/[A-Z]/g,ma=/^ms-/,qt={};function ga(t){return"-"+t.toLowerCase()}function Mi(t){if(qt.hasOwnProperty(t))return qt[t];var e=t.replace(ha,ga);return qt[t]=ma.test(e)?"-"+e:e}function ba(t,e){if(t===e)return!0;if(!t||!e)return!1;const n=Object.keys(t),r=Object.keys(e),i=n.length;if(r.length!==i)return!1;for(let s=0;s<i;s++){const o=n[s];if(t[o]!==e[o]||!Object.prototype.hasOwnProperty.call(e,o))return!1}return!0}var Li={exports:{}},wa="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",va=wa,xa=va;function Ai(){}function Ii(){}Ii.resetWarningCache=Ai;var ya=function(){function t(r,i,s,o,a,l){if(l!==xa){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ii,resetWarningCache:Ai};return n.PropTypes=n,n};Li.exports=ya();var Ge=Li.exports;const N=oi(Ge),X=N.oneOfType([N.string,N.number]),Un={all:N.bool,grid:N.bool,aural:N.bool,braille:N.bool,handheld:N.bool,print:N.bool,projection:N.bool,screen:N.bool,tty:N.bool,tv:N.bool,embossed:N.bool},Ri={orientation:N.oneOf(["portrait","landscape"]),scan:N.oneOf(["progressive","interlace"]),aspectRatio:N.string,deviceAspectRatio:N.string,height:X,deviceHeight:X,width:X,deviceWidth:X,color:N.bool,colorIndex:N.bool,monochrome:N.bool,resolution:X,type:Object.keys(Un)},{type:yp,...Sa}=Ri,$i={minAspectRatio:N.string,maxAspectRatio:N.string,minDeviceAspectRatio:N.string,maxDeviceAspectRatio:N.string,minHeight:X,maxHeight:X,minDeviceHeight:X,maxDeviceHeight:X,minWidth:X,maxWidth:X,minDeviceWidth:X,maxDeviceWidth:X,minColor:N.number,maxColor:N.number,minColorIndex:N.number,maxColorIndex:N.number,minMonochrome:N.number,maxMonochrome:N.number,minResolution:X,maxResolution:X,...Sa},Ea={...Un,...$i};var Ta={all:Ea,types:Un,matchers:Ri,features:$i};const Pa=t=>`not ${t}`,_a=(t,e)=>{const n=Mi(t);return typeof e=="number"&&(e=`${e}px`),e===!0?n:e===!1?Pa(n):`(${n}: ${e})`},Oa=t=>t.join(" and "),Ca=t=>{const e=[];return Object.keys(Ta.all).forEach(n=>{const r=t[n];r!=null&&e.push(_a(n,r))}),Oa(e)},ka=_.createContext(void 0),Ma=t=>t.query||Ca(t),Pr=t=>t?Object.keys(t).reduce((n,r)=>(n[Mi(r)]=t[r],n),{}):void 0,ji=()=>{const t=_.useRef(!1);return _.useEffect(()=>{t.current=!0},[]),t.current},La=t=>{const e=_.useContext(ka),n=()=>Pr(t)||Pr(e),[r,i]=_.useState(n);return _.useEffect(()=>{const s=n();ba(r,s)||i(s)},[t,e]),r},Aa=t=>{const e=()=>Ma(t),[n,r]=_.useState(e);return _.useEffect(()=>{const i=e();n!==i&&r(i)},[t]),n},Ia=(t,e)=>{const n=()=>pa(t,e||{},!!e),[r,i]=_.useState(n),s=ji();return _.useEffect(()=>{if(s){const o=n();return i(o),()=>{o&&o.dispose()}}},[t,e]),r},Ra=t=>{const[e,n]=_.useState(t.matches);return _.useEffect(()=>{const r=i=>{n(i.matches)};return t.addListener(r),n(t.matches),()=>{t.removeListener(r)}},[t]),e},Ni=(t,e,n)=>{const r=La(e),i=Aa(t);if(!i)throw new Error("Invalid or missing MediaQuery!");const s=Ia(i,r),o=Ra(s),a=ji();return _.useEffect(()=>{a&&n&&n(o)},[o]),_.useEffect(()=>()=>{s&&s.dispose()},[]),o},Sp=({children:t,device:e,onChange:n,...r})=>{const i=Ni(r,e,n);return typeof t=="function"?t(i):i?t:null},zi=()=>_.useContext(Ls),$a=Pe.div`
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
`,qn=({children:t,...e})=>v.jsx($a,{...e,children:t}),ja=Pe.header`
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
`,Na=Pe(qn)`
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
`,za="/MistoHub/assets/icons-395c4493.svg",me=({width:t,height:e,iconName:n,styles:r})=>v.jsx("svg",{width:t,height:e,className:r,children:v.jsx("use",{href:`${za}#${n}`})}),Ha=Pe.div`
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
`;function Da({darkStyle:t,sectionName:e}){let n={};switch(e){case"header":n[e]=!0;break;case"footer":n[e]=!0;break;case"menu":n[e]=!0;break}return v.jsxs(Ha,{$sections:n,children:[v.jsx(lr,{className:`link-instagram ${n.header?t:""}`,to:"https://www.instagram.com/mistohub",target:"_blank",rel:"noopener noreferrer","aria-label":"go and view the Mistohub Instagram account",children:v.jsx(me,{width:"20",height:"20",iconName:"icon-instagram",styles:t})}),v.jsx(lr,{className:`link-facebook ${n.header?t:""}`,to:"https://www.facebook.com/mistohub/?locale=uk_UA",target:"_blank",rel:"noopener noreferrer","aria-label":"go to the Mistohub Facebook page",children:v.jsx(me,{width:"20",height:"20",iconName:"icon-faceb",styles:t})})]})}function Ba(){const[t,e]=_.useState(""),{openModal:n}=zi(),r=Ni({maxWidth:767});return _.useEffect(()=>{let i=document.getElementById("footer");const s=document.querySelector(".hidden-wrap"),o=()=>{i||(i=document.getElementById("footer")),window.scrollY!==0&&(i==null?void 0:i.offsetTop)-375>=window.scrollY?(s.classList.value.includes("hidden")&&s.classList.remove("hidden"),e("dark-header")):window.scrollY===0?e(""):s.classList.add("hidden")};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[]),v.jsx(ja,{children:v.jsx("div",{className:`hidden-wrap ${t}`,children:v.jsxs(Na,{children:[v.jsx(me,{width:r?"99":"118",height:r?"34":"40",iconName:"main-logo",styles:`main-logo ${t} `}),r?v.jsx(v.Fragment,{children:v.jsx("button",{type:"button",onClick:()=>n("menu_modal"),children:v.jsx(me,{width:"44",height:"38",iconName:"burger-menu",styles:`${t} burger-menu-icon`})})}):v.jsxs("div",{className:"menu-wrapper",children:[v.jsx(Da,{darkStyle:t,sectionName:"header"}),v.jsxs("button",{type:"button",className:"btn-clouds",onClick:()=>n("join_modal"),children:[v.jsx(me,{width:"180",height:"85",iconName:"cloud",styles:`${t} cloud-icon`}),v.jsx("span",{children:"Підтримати проєкт"})]}),v.jsx("button",{type:"button",onClick:()=>n("menu_modal"),children:v.jsx(me,{width:"54",height:"47",iconName:"burger-menu",styles:`${t} burger-menu-icon`})})]})]})})})}const Fa=Pe.button`
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
`;var F={},Yn={},Ue={},qe={},Hi="Expected a function",_r=0/0,Va="[object Symbol]",Wa=/^\s+|\s+$/g,Ga=/^[-+]0x[0-9a-f]+$/i,Ua=/^0b[01]+$/i,qa=/^0o[0-7]+$/i,Ya=parseInt,Xa=typeof tt=="object"&&tt&&tt.Object===Object&&tt,Ka=typeof self=="object"&&self&&self.Object===Object&&self,Qa=Xa||Ka||Function("return this")(),Ja=Object.prototype,Za=Ja.toString,el=Math.max,tl=Math.min,Yt=function(){return Qa.Date.now()};function nl(t,e,n){var r,i,s,o,a,l,u=0,c=!1,d=!1,p=!0;if(typeof t!="function")throw new TypeError(Hi);e=Or(e)||0,vt(n)&&(c=!!n.leading,d="maxWait"in n,s=d?el(Or(n.maxWait)||0,e):s,p="trailing"in n?!!n.trailing:p);function b(P){var L=r,k=i;return r=i=void 0,u=P,o=t.apply(k,L),o}function h(P){return u=P,a=setTimeout(f,e),c?b(P):o}function m(P){var L=P-l,k=P-u,O=e-L;return d?tl(O,s-k):O}function y(P){var L=P-l,k=P-u;return l===void 0||L>=e||L<0||d&&k>=s}function f(){var P=Yt();if(y(P))return g(P);a=setTimeout(f,m(P))}function g(P){return a=void 0,p&&r?b(P):(r=i=void 0,o)}function w(){a!==void 0&&clearTimeout(a),u=0,r=l=i=a=void 0}function S(){return a===void 0?o:g(Yt())}function E(){var P=Yt(),L=y(P);if(r=arguments,i=this,l=P,L){if(a===void 0)return h(l);if(d)return a=setTimeout(f,e),b(l)}return a===void 0&&(a=setTimeout(f,e)),o}return E.cancel=w,E.flush=S,E}function rl(t,e,n){var r=!0,i=!0;if(typeof t!="function")throw new TypeError(Hi);return vt(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),nl(t,e,{leading:r,maxWait:e,trailing:i})}function vt(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function il(t){return!!t&&typeof t=="object"}function sl(t){return typeof t=="symbol"||il(t)&&Za.call(t)==Va}function Or(t){if(typeof t=="number")return t;if(sl(t))return _r;if(vt(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=vt(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Wa,"");var n=Ua.test(t);return n||qa.test(t)?Ya(t.slice(2),n?2:8):Ga.test(t)?_r:+t}var ol=rl,Ye={};Object.defineProperty(Ye,"__esModule",{value:!0});Ye.addPassiveEventListener=function(e,n,r){var i=r.name;i||(i=n,console.warn("Listener must be a named function.")),pt.has(n)||pt.set(n,new Set);var s=pt.get(n);if(!s.has(i)){var o=function(){var a=!1;try{var l=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,l)}catch{}return a}();e.addEventListener(n,r,o?{passive:!0}:!1),s.add(i)}};Ye.removePassiveEventListener=function(e,n,r){e.removeEventListener(n,r),pt.get(n).delete(r.name||n)};var pt=new Map;Object.defineProperty(qe,"__esModule",{value:!0});var al=ol,ll=dl(al),cl=Ye;function dl(t){return t&&t.__esModule?t:{default:t}}var ul=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,ll.default)(e,n)},D={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var r=ul(function(i){D.scrollHandler(e)},n);D.scrollSpyContainers.push(e),(0,cl.addPassiveEventListener)(e,"scroll",r)}},isMounted:function(e){return D.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=D.scrollSpyContainers[D.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(r){return r(D.currentPositionX(e),D.currentPositionY(e))})},addStateHandler:function(e){D.spySetState.push(e)},addSpyHandler:function(e,n){var r=D.scrollSpyContainers[D.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(e),e(D.currentPositionX(n),D.currentPositionY(n))},updateStates:function(){D.spySetState.forEach(function(e){return e()})},unmount:function(e,n){D.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),D.spySetState&&D.spySetState.length&&D.spySetState.indexOf(e)>-1&&D.spySetState.splice(D.spySetState.indexOf(e),1),document.removeEventListener("scroll",D.scrollHandler)},update:function(){return D.scrollSpyContainers.forEach(function(e){return D.scrollHandler(e)})}};qe.default=D;var Le={},Xe={};Object.defineProperty(Xe,"__esModule",{value:!0});var fl=function(e,n){var r=e.indexOf("#")===0?e.substring(1):e,i=r?"#"+r:"",s=window&&window.location,o=i?s.pathname+s.search+i:s.pathname+s.search;n?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},pl=function(){return window.location.hash.replace(/^#/,"")},hl=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},ml=function(e){return getComputedStyle(e).position!=="static"},Xt=function(e,n){for(var r=e.offsetTop,i=e.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},gl=function(e,n,r){if(r)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(ml(e)){if(n.offsetParent!==e){var i=function(c){return c===e||c===document},s=Xt(n,i),o=s.offsetTop,a=s.offsetParent;if(a!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(c){return c===document};return Xt(n,l).offsetTop-Xt(e,l).offsetTop};Xe.default={updateHash:fl,getHash:pl,filterElementInContainer:hl,scrollOffset:gl};var Lt={},Xn={};Object.defineProperty(Xn,"__esModule",{value:!0});Xn.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var Kn={};Object.defineProperty(Kn,"__esModule",{value:!0});var bl=Ye,wl=["mousedown","mousewheel","touchmove","keydown"];Kn.default={subscribe:function(e){return typeof document<"u"&&wl.forEach(function(n){return(0,bl.addPassiveEventListener)(document,n,e)})}};var Ke={};Object.defineProperty(Ke,"__esModule",{value:!0});var kn={registered:{},scrollEvent:{register:function(e,n){kn.registered[e]=n},remove:function(e){kn.registered[e]=null}}};Ke.default=kn;Object.defineProperty(Lt,"__esModule",{value:!0});var vl=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xl=Xe;At(xl);var yl=Xn,Cr=At(yl),Sl=Kn,El=At(Sl),Tl=Ke,ie=At(Tl);function At(t){return t&&t.__esModule?t:{default:t}}var Di=function(e){return Cr.default[e.smooth]||Cr.default.defaultEasing},Pl=function(e){return typeof e=="function"?e:function(){return e}},_l=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Mn=function(){return _l()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),Bi=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},Fi=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},Vi=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},Ol=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},Cl=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},kl=function t(e,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){ie.default.registered.end&&ie.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:e(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var s=t.bind(null,e,n);Mn.call(window,s);return}ie.default.registered.end&&ie.default.registered.end(i.to,i.target,i.currentPosition)},Qn=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},Qe=function(e,n,r,i){n.data=n.data||Bi(),window.clearTimeout(n.data.delayTimeout);var s=function(){n.data.cancel=!0};if(El.default.subscribe(s),Qn(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?Fi(n):Vi(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){ie.default.registered.end&&ie.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=Pl(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var o=Di(n),a=kl.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){ie.default.registered.begin&&ie.default.registered.begin(n.data.to,n.data.target),Mn.call(window,a)},n.delay);return}ie.default.registered.begin&&ie.default.registered.begin(n.data.to,n.data.target),Mn.call(window,a)},It=function(e){return e=vl({},e),e.data=e.data||Bi(),e.absolute=!0,e},Ml=function(e){Qe(0,It(e))},Ll=function(e,n){Qe(e,It(n))},Al=function(e){e=It(e),Qn(e),Qe(e.horizontal?Ol(e):Cl(e),e)},Il=function(e,n){n=It(n),Qn(n);var r=n.horizontal?Fi(n):Vi(n);Qe(e+r,n)};Lt.default={animateTopScroll:Qe,getAnimationType:Di,scrollToTop:Ml,scrollToBottom:Al,scrollTo:Ll,scrollMore:Il};Object.defineProperty(Le,"__esModule",{value:!0});var Rl=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$l=Xe,jl=Jn($l),Nl=Lt,zl=Jn(Nl),Hl=Ke,nt=Jn(Hl);function Jn(t){return t&&t.__esModule?t:{default:t}}var rt={},kr=void 0;Le.default={unmount:function(){rt={}},register:function(e,n){rt[e]=n},unregister:function(e){delete rt[e]},get:function(e){return rt[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return kr=e},getActiveLink:function(){return kr},scrollTo:function(e,n){var r=this.get(e);if(!r){console.warn("target Element not found");return}n=Rl({},n,{absolute:!1});var i=n.containerId,s=n.container,o=void 0;i?o=document.getElementById(i):s&&s.nodeType?o=s:o=document,n.absolute=!0;var a=n.horizontal,l=jl.default.scrollOffset(o,r,a)+(n.offset||0);if(!n.smooth){nt.default.registered.begin&&nt.default.registered.begin(e,r),o===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):o.scrollTop=l,nt.default.registered.end&&nt.default.registered.end(e,r);return}zl.default.animateTopScroll(l,n,e,r)}};var Rt={};Object.defineProperty(Rt,"__esModule",{value:!0});var Dl=Xe,Kt=Bl(Dl);function Bl(t){return t&&t.__esModule?t:{default:t}}var Fl={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var r=this.scroller,i=r.get(e);if(i&&(n||e!==r.getActiveLink())){var s=this.containers[e]||document;r.scrollTo(e,{container:s})}},getHash:function(){return Kt.default.getHash()},changeHash:function(e,n){this.isInitialized()&&Kt.default.getHash()!==e&&Kt.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Rt.default=Fl;Object.defineProperty(Ue,"__esModule",{value:!0});var it=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vl=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Wl=_,Mr=Je(Wl),Gl=qe,st=Je(Gl),Ul=Le,ql=Je(Ul),Yl=Ge,H=Je(Yl),Xl=Rt,we=Je(Xl);function Je(t){return t&&t.__esModule?t:{default:t}}function Kl(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ql(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Jl(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Lr={to:H.default.string.isRequired,containerId:H.default.string,container:H.default.object,activeClass:H.default.string,activeStyle:H.default.object,spy:H.default.bool,horizontal:H.default.bool,smooth:H.default.oneOfType([H.default.bool,H.default.string]),offset:H.default.number,delay:H.default.number,isDynamic:H.default.bool,onClick:H.default.func,duration:H.default.oneOfType([H.default.number,H.default.func]),absolute:H.default.bool,onSetActive:H.default.func,onSetInactive:H.default.func,ignoreCancelEvents:H.default.bool,hashSpy:H.default.bool,saveHashHistory:H.default.bool,spyThrottle:H.default.number};Ue.default=function(t,e){var n=e||ql.default,r=function(s){Jl(o,s);function o(a){Kl(this,o);var l=Ql(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,a));return i.call(l),l.state={active:!1},l}return Vl(o,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,u=this.props.container;return l&&!u?document.getElementById(l):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();st.default.isMounted(l)||st.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(we.default.isMounted()||we.default.mount(n),we.default.mapContainer(this.props.to,l)),st.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){st.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var u={};this.state&&this.state.active?u=it({},this.props.style,this.props.activeStyle):u=it({},this.props.style);var c=it({},this.props);for(var d in Lr)c.hasOwnProperty(d)&&delete c[d];return c.className=l,c.style=u,c.onClick=this.handleClick,Mr.default.createElement(t,c)}}]),o}(Mr.default.PureComponent),i=function(){var o=this;this.scrollTo=function(a,l){n.scrollTo(a,it({},o.state,l))},this.handleClick=function(a){o.props.onClick&&o.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),o.scrollTo(o.props.to,o.props)},this.spyHandler=function(a,l){var u=o.getScrollSpyContainer();if(!(we.default.isMounted()&&!we.default.isInitialized())){var c=o.props.horizontal,d=o.props.to,p=null,b=void 0,h=void 0;if(c){var m=0,y=0,f=0;if(u.getBoundingClientRect){var g=u.getBoundingClientRect();f=g.left}if(!p||o.props.isDynamic){if(p=n.get(d),!p)return;var w=p.getBoundingClientRect();m=w.left-f+a,y=m+w.width}var S=a-o.props.offset;b=S>=Math.floor(m)&&S<Math.floor(y),h=S<Math.floor(m)||S>=Math.floor(y)}else{var E=0,P=0,L=0;if(u.getBoundingClientRect){var k=u.getBoundingClientRect();L=k.top}if(!p||o.props.isDynamic){if(p=n.get(d),!p)return;var O=p.getBoundingClientRect();E=O.top-L+l,P=E+O.height}var T=l-o.props.offset;b=T>=Math.floor(E)&&T<Math.floor(P),h=T<Math.floor(E)||T>=Math.floor(P)}var A=n.getActiveLink();if(h){if(d===A&&n.setActiveLink(void 0),o.props.hashSpy&&we.default.getHash()===d){var M=o.props.saveHashHistory,C=M===void 0?!1:M;we.default.changeHash("",C)}o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive(d,p))}if(b&&(A!==d||o.state.active===!1)){n.setActiveLink(d);var I=o.props.saveHashHistory,z=I===void 0?!1:I;o.props.hashSpy&&we.default.changeHash(d,z),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(d,p))}}}};return r.propTypes=Lr,r.defaultProps={offset:0},r};Object.defineProperty(Yn,"__esModule",{value:!0});var Zl=_,Ar=Wi(Zl),ec=Ue,tc=Wi(ec);function Wi(t){return t&&t.__esModule?t:{default:t}}function nc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ir(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function rc(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ic=function(t){rc(e,t);function e(){var n,r,i,s;nc(this,e);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return s=(r=(i=Ir(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),i),i.render=function(){return Ar.default.createElement("a",i.props,i.props.children)},r),Ir(i,s)}return e}(Ar.default.Component);Yn.default=(0,tc.default)(ic);var Zn={};Object.defineProperty(Zn,"__esModule",{value:!0});var sc=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),oc=_,Rr=Gi(oc),ac=Ue,lc=Gi(ac);function Gi(t){return t&&t.__esModule?t:{default:t}}function cc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function dc(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function uc(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var fc=function(t){uc(e,t);function e(){return cc(this,e),dc(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return sc(e,[{key:"render",value:function(){return Rr.default.createElement("button",this.props,this.props.children)}}]),e}(Rr.default.Component);Zn.default=(0,lc.default)(fc);var er={},$t={};Object.defineProperty($t,"__esModule",{value:!0});var pc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hc=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),mc=_,$r=jt(mc),gc=As;jt(gc);var bc=Le,jr=jt(bc),wc=Ge,Nr=jt(wc);function jt(t){return t&&t.__esModule?t:{default:t}}function vc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xc(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function yc(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}$t.default=function(t){var e=function(n){yc(r,n);function r(i){vc(this,r);var s=xc(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return s.childBindings={domNode:null},s}return hc(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;jr.default.unregister(this.props.name)}},{key:"registerElems",value:function(s){jr.default.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return $r.default.createElement(t,pc({},this.props,{parentBindings:this.childBindings}))}}]),r}($r.default.Component);return e.propTypes={name:Nr.default.string,id:Nr.default.string},e};Object.defineProperty(er,"__esModule",{value:!0});var zr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sc=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Ec=_,Hr=tr(Ec),Tc=$t,Pc=tr(Tc),_c=Ge,Dr=tr(_c);function tr(t){return t&&t.__esModule?t:{default:t}}function Oc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Cc(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function kc(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Ui=function(t){kc(e,t);function e(){return Oc(this,e),Cc(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return Sc(e,[{key:"render",value:function(){var r=this,i=zr({},this.props);return delete i.name,i.parentBindings&&delete i.parentBindings,Hr.default.createElement("div",zr({},i,{ref:function(o){r.props.parentBindings.domNode=o}}),this.props.children)}}]),e}(Hr.default.Component);Ui.propTypes={name:Dr.default.string,id:Dr.default.string};er.default=(0,Pc.default)(Ui);var Qt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Br=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function Fr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Vr(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Wr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ot=_,Ee=qe,Jt=Le,B=Ge,ve=Rt,Gr={to:B.string.isRequired,containerId:B.string,container:B.object,activeClass:B.string,spy:B.bool,smooth:B.oneOfType([B.bool,B.string]),offset:B.number,delay:B.number,isDynamic:B.bool,onClick:B.func,duration:B.oneOfType([B.number,B.func]),absolute:B.bool,onSetActive:B.func,onSetInactive:B.func,ignoreCancelEvents:B.bool,hashSpy:B.bool,spyThrottle:B.number},Mc={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Jt,i=function(o){Wr(a,o);function a(l){Fr(this,a);var u=Vr(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return s.call(u),u.state={active:!1},u}return Br(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,c=this.props.container;return u?document.getElementById(u):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();Ee.isMounted(u)||Ee.mount(u,this.props.spyThrottle),this.props.hashSpy&&(ve.isMounted()||ve.mount(r),ve.mapContainer(this.props.to,u)),this.props.spy&&Ee.addStateHandler(this.stateHandler),Ee.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){Ee.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var c=Qt({},this.props);for(var d in Gr)c.hasOwnProperty(d)&&delete c[d];return c.className=u,c.onClick=this.handleClick,ot.createElement(e,c)}}]),a}(ot.Component),s=function(){var a=this;this.scrollTo=function(l,u){r.scrollTo(l,Qt({},a.state,u))},this.handleClick=function(l){a.props.onClick&&a.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){r.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(l){var u=a.getScrollSpyContainer();if(!(ve.isMounted()&&!ve.isInitialized())){var c=a.props.to,d=null,p=0,b=0,h=0;if(u.getBoundingClientRect){var m=u.getBoundingClientRect();h=m.top}if(!d||a.props.isDynamic){if(d=r.get(c),!d)return;var y=d.getBoundingClientRect();p=y.top-h+l,b=p+y.height}var f=l-a.props.offset,g=f>=Math.floor(p)&&f<Math.floor(b),w=f<Math.floor(p)||f>=Math.floor(b),S=r.getActiveLink();if(w)return c===S&&r.setActiveLink(void 0),a.props.hashSpy&&ve.getHash()===c&&ve.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),Ee.updateStates();if(g&&S!==c)return r.setActiveLink(c),a.props.hashSpy&&ve.changeHash(c),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(c)),Ee.updateStates()}}};return i.propTypes=Gr,i.defaultProps={offset:0},i},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Wr(i,r);function i(s){Fr(this,i);var o=Vr(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,s));return o.childBindings={domNode:null},o}return Br(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Jt.unregister(this.props.name)}},{key:"registerElems",value:function(o){Jt.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return ot.createElement(e,Qt({},this.props,{parentBindings:this.childBindings}))}}]),i}(ot.Component);return n.propTypes={name:B.string,id:B.string},n}},Lc=Mc;Object.defineProperty(F,"__esModule",{value:!0});F.Helpers=F.ScrollElement=F.ScrollLink=rs=F.animateScroll=F.scrollSpy=F.Events=F.scroller=F.Element=F.Button=F.Link=void 0;var Ac=Yn,qi=fe(Ac),Ic=Zn,Yi=fe(Ic),Rc=er,Xi=fe(Rc),$c=Le,Ki=fe($c),jc=Ke,Qi=fe(jc),Nc=qe,Ji=fe(Nc),zc=Lt,Zi=fe(zc),Hc=Ue,es=fe(Hc),Dc=$t,ts=fe(Dc),Bc=Lc,ns=fe(Bc);function fe(t){return t&&t.__esModule?t:{default:t}}F.Link=qi.default;F.Button=Yi.default;F.Element=Xi.default;F.scroller=Ki.default;F.Events=Qi.default;F.scrollSpy=Ji.default;var rs=F.animateScroll=Zi.default;F.ScrollLink=es.default;F.ScrollElement=ts.default;F.Helpers=ns.default;F.default={Link:qi.default,Button:Yi.default,Element:Xi.default,scroller:Ki.default,Events:Qi.default,scrollSpy:Ji.default,animateScroll:Zi.default,ScrollLink:es.default,ScrollElement:ts.default,Helpers:ns.default};const Fc=()=>{const[t,e]=_.useState(0),n=()=>{window.scrollY>250?e(1):e(0)},r=()=>{rs.scrollToTop({duration:500,smooth:"easeInOutQuart"})};return _.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]),v.jsx(Fa,{style:{opacity:t},type:"button",title:"Вгору",onClick:r,children:v.jsx(me,{iconName:"topscroll"})})};function Ur(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function nr(t,e){t===void 0&&(t={}),e===void 0&&(e={}),Object.keys(e).forEach(n=>{typeof t[n]>"u"?t[n]=e[n]:Ur(e[n])&&Ur(t[n])&&Object.keys(e[n]).length>0&&nr(t[n],e[n])})}const is={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Ae(){const t=typeof document<"u"?document:{};return nr(t,is),t}const Vc={document:is,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function ee(){const t=typeof window<"u"?window:{};return nr(t,Vc),t}function Wc(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function Gc(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function Ln(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function xt(){return Date.now()}function Uc(t){const e=ee();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function qc(t,e){e===void 0&&(e="x");const n=ee();let r,i,s;const o=Uc(t);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix(i==="none"?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),e==="y"&&(n.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function at(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function Yc(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function Q(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!Yc(r)){const i=Object.keys(Object(r)).filter(s=>e.indexOf(s)<0);for(let s=0,o=i.length;s<o;s+=1){const a=i[s],l=Object.getOwnPropertyDescriptor(r,a);l!==void 0&&l.enumerable&&(at(t[a])&&at(r[a])?r[a].__swiper__?t[a]=r[a]:Q(t[a],r[a]):!at(t[a])&&at(r[a])?(t[a]={},r[a].__swiper__?t[a]=r[a]:Q(t[a],r[a])):t[a]=r[a])}}}return t}function lt(t,e,n){t.style.setProperty(e,n)}function ss(t){let{swiper:e,targetPosition:n,side:r}=t;const i=ee(),s=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const u=n>s?"next":"prev",c=(p,b)=>u==="next"&&p>=b||u==="prev"&&p<=b,d=()=>{a=new Date().getTime(),o===null&&(o=a);const p=Math.max(Math.min((a-o)/l,1),0),b=.5-Math.cos(p*Math.PI)/2;let h=s+b*(n-s);if(c(h,n)&&(h=n),e.wrapperEl.scrollTo({[r]:h}),c(h,n)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:h})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(d)};d()}function ce(t,e){return e===void 0&&(e=""),[...t.children].filter(n=>n.matches(e))}function yt(t){try{console.warn(t);return}catch{}}function St(t,e){e===void 0&&(e=[]);const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:Wc(e)),n}function Xc(t,e){const n=[];for(;t.previousElementSibling;){const r=t.previousElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function Kc(t,e){const n=[];for(;t.nextElementSibling;){const r=t.nextElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function xe(t,e){return ee().getComputedStyle(t,null).getPropertyValue(e)}function Et(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function os(t,e){const n=[];let r=t.parentElement;for(;r;)e?r.matches(e)&&n.push(r):n.push(r),r=r.parentElement;return n}function An(t,e,n){const r=ee();return n?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}function pe(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}let Zt;function Qc(){const t=ee(),e=Ae();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function as(){return Zt||(Zt=Qc()),Zt}let en;function Jc(t){let{userAgent:e}=t===void 0?{}:t;const n=as(),r=ee(),i=r.navigator.platform,s=e||r.navigator.userAgent,o={ios:!1,android:!1},a=r.screen.width,l=r.screen.height,u=s.match(/(Android);?[\s\/]+([\d.]+)?/);let c=s.match(/(iPad).*OS\s([\d_]+)/);const d=s.match(/(iPod)(.*OS\s([\d_]+))?/),p=!c&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),b=i==="Win32";let h=i==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&h&&n.touch&&m.indexOf(`${a}x${l}`)>=0&&(c=s.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),h=!1),u&&!b&&(o.os="android",o.android=!0),(c||p||d)&&(o.os="ios",o.ios=!0),o}function ls(t){return t===void 0&&(t={}),en||(en=Jc(t)),en}let tn;function Zc(){const t=ee(),e=ls();let n=!1;function r(){const a=t.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(r()){const a=String(t.navigator.userAgent);if(a.includes("Version/")){const[l,u]=a.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));n=l<16||l===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),s=r(),o=s||i&&e.ios;return{isSafari:n||s,needPerspectiveFix:n,need3dFix:o,isWebView:i}}function ed(){return tn||(tn=Zc()),tn}function td(t){let{swiper:e,on:n,emit:r}=t;const i=ee();let s=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(d=>{o=i.requestAnimationFrame(()=>{const{width:p,height:b}=e;let h=p,m=b;d.forEach(y=>{let{contentBoxSize:f,contentRect:g,target:w}=y;w&&w!==e.el||(h=g?g.width:(f[0]||f).inlineSize,m=g?g.height:(f[0]||f).blockSize)}),(h!==p||m!==b)&&a()})}),s.observe(e.el))},u=()=>{o&&i.cancelAnimationFrame(o),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},c=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};n("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",c)}),n("destroy",()=>{u(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",c)})}function nd(t){let{swiper:e,extendParams:n,on:r,emit:i}=t;const s=[],o=ee(),a=function(c,d){d===void 0&&(d={});const p=o.MutationObserver||o.WebkitMutationObserver,b=new p(h=>{if(e.__preventObserver__)return;if(h.length===1){i("observerUpdate",h[0]);return}const m=function(){i("observerUpdate",h[0])};o.requestAnimationFrame?o.requestAnimationFrame(m):o.setTimeout(m,0)});b.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:typeof d.childList>"u"?!0:d.childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),s.push(b)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=os(e.hostEl);for(let d=0;d<c.length;d+=1)a(c[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},u=()=>{s.forEach(c=>{c.disconnect()}),s.splice(0,s.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",u)}var rd={on(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const i=n?"unshift":"push";return t.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](e)}),r},once(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function i(){r.off(t,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];e.apply(r,o)}return i.__emitterProxy=e,r.on(t,i,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const r=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[r](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(r=>{typeof e>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,s)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&n.eventsListeners[r].splice(s,1)})}),n},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,n,r;for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],n=s.slice(1,s.length),r=t):(e=s[0].events,n=s[0].data,r=s[0].context||t),n.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(u=>{u.apply(r,[l,...n])}),t.eventsListeners&&t.eventsListeners[l]&&t.eventsListeners[l].forEach(u=>{u.apply(r,n)})}),t}};function id(){const t=this;let e,n;const r=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=r.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=r.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(xe(r,"padding-left")||0,10)-parseInt(xe(r,"padding-right")||0,10),n=n-parseInt(xe(r,"padding-top")||0,10)-parseInt(xe(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function sd(){const t=this;function e(T,A){return parseFloat(T.getPropertyValue(t.getDirectionLabel(A))||0)}const n=t.params,{wrapperEl:r,slidesEl:i,size:s,rtlTranslate:o,wrongRTL:a}=t,l=t.virtual&&n.virtual.enabled,u=l?t.virtual.slides.length:t.slides.length,c=ce(i,`.${t.params.slideClass}, swiper-slide`),d=l?t.virtual.slides.length:c.length;let p=[];const b=[],h=[];let m=n.slidesOffsetBefore;typeof m=="function"&&(m=n.slidesOffsetBefore.call(t));let y=n.slidesOffsetAfter;typeof y=="function"&&(y=n.slidesOffsetAfter.call(t));const f=t.snapGrid.length,g=t.slidesGrid.length;let w=n.spaceBetween,S=-m,E=0,P=0;if(typeof s>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*s:typeof w=="string"&&(w=parseFloat(w)),t.virtualSize=-w,c.forEach(T=>{o?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(lt(r,"--swiper-centered-offset-before",""),lt(r,"--swiper-centered-offset-after",""));const L=n.grid&&n.grid.rows>1&&t.grid;L?t.grid.initSlides(c):t.grid&&t.grid.unsetSlides();let k;const O=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(T=>typeof n.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<d;T+=1){k=0;let A;if(c[T]&&(A=c[T]),L&&t.grid.updateSlide(T,A,c),!(c[T]&&xe(A,"display")==="none")){if(n.slidesPerView==="auto"){O&&(c[T].style[t.getDirectionLabel("width")]="");const M=getComputedStyle(A),C=A.style.transform,I=A.style.webkitTransform;if(C&&(A.style.transform="none"),I&&(A.style.webkitTransform="none"),n.roundLengths)k=t.isHorizontal()?An(A,"width",!0):An(A,"height",!0);else{const z=e(M,"width"),re=e(M,"padding-left"),Ft=e(M,"padding-right"),et=e(M,"margin-left"),U=e(M,"margin-right"),ne=M.getPropertyValue("box-sizing");if(ne&&ne==="border-box")k=z+et+U;else{const{clientWidth:ks,offsetWidth:Ms}=A;k=z+re+Ft+et+U+(Ms-ks)}}C&&(A.style.transform=C),I&&(A.style.webkitTransform=I),n.roundLengths&&(k=Math.floor(k))}else k=(s-(n.slidesPerView-1)*w)/n.slidesPerView,n.roundLengths&&(k=Math.floor(k)),c[T]&&(c[T].style[t.getDirectionLabel("width")]=`${k}px`);c[T]&&(c[T].swiperSlideSize=k),h.push(k),n.centeredSlides?(S=S+k/2+E/2+w,E===0&&T!==0&&(S=S-s/2-w),T===0&&(S=S-s/2-w),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),P%n.slidesPerGroup===0&&p.push(S),b.push(S)):(n.roundLengths&&(S=Math.floor(S)),(P-Math.min(t.params.slidesPerGroupSkip,P))%t.params.slidesPerGroup===0&&p.push(S),b.push(S),S=S+k+w),t.virtualSize+=k+w,E=k,P+=1}}if(t.virtualSize=Math.max(t.virtualSize,s)+y,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${t.virtualSize+w}px`),n.setWrapperSize&&(r.style[t.getDirectionLabel("width")]=`${t.virtualSize+w}px`),L&&t.grid.updateWrapperSize(k,p),!n.centeredSlides){const T=[];for(let A=0;A<p.length;A+=1){let M=p[A];n.roundLengths&&(M=Math.floor(M)),p[A]<=t.virtualSize-s&&T.push(M)}p=T,Math.floor(t.virtualSize-s)-Math.floor(p[p.length-1])>1&&p.push(t.virtualSize-s)}if(l&&n.loop){const T=h[0]+w;if(n.slidesPerGroup>1){const A=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/n.slidesPerGroup),M=T*n.slidesPerGroup;for(let C=0;C<A;C+=1)p.push(p[p.length-1]+M)}for(let A=0;A<t.virtual.slidesBefore+t.virtual.slidesAfter;A+=1)n.slidesPerGroup===1&&p.push(p[p.length-1]+T),b.push(b[b.length-1]+T),t.virtualSize+=T}if(p.length===0&&(p=[0]),w!==0){const T=t.isHorizontal()&&o?"marginLeft":t.getDirectionLabel("marginRight");c.filter((A,M)=>!n.cssMode||n.loop?!0:M!==c.length-1).forEach(A=>{A.style[T]=`${w}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let T=0;h.forEach(M=>{T+=M+(w||0)}),T-=w;const A=T-s;p=p.map(M=>M<=0?-m:M>A?A+y:M)}if(n.centerInsufficientSlides){let T=0;if(h.forEach(A=>{T+=A+(w||0)}),T-=w,T<s){const A=(s-T)/2;p.forEach((M,C)=>{p[C]=M-A}),b.forEach((M,C)=>{b[C]=M+A})}}if(Object.assign(t,{slides:c,snapGrid:p,slidesGrid:b,slidesSizesGrid:h}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){lt(r,"--swiper-centered-offset-before",`${-p[0]}px`),lt(r,"--swiper-centered-offset-after",`${t.size/2-h[h.length-1]/2}px`);const T=-t.snapGrid[0],A=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(M=>M+T),t.slidesGrid=t.slidesGrid.map(M=>M+A)}if(d!==u&&t.emit("slidesLengthChange"),p.length!==f&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),b.length!==g&&t.emit("slidesGridLengthChange"),n.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const T=`${n.containerModifierClass}backface-hidden`,A=t.el.classList.contains(T);d<=n.maxBackfaceHiddenSlides?A||t.el.classList.add(T):A&&t.el.classList.remove(T)}}function od(t){const e=this,n=[],r=e.virtual&&e.params.virtual.enabled;let i=0,s;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const o=a=>r?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{n.push(a)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const a=e.activeIndex+s;if(a>e.slides.length&&!r)break;n.push(o(a))}else n.push(o(e.activeIndex));for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const a=n[s].offsetHeight;i=a>i?a:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function ad(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(t.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-n-t.cssOverflowAdjustment()}function ld(t){t===void 0&&(t=this&&this.translate||0);const e=this,n=e.params,{slides:r,rtlTranslate:i,snapGrid:s}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-t;i&&(o=t),r.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<r.length;l+=1){const u=r[l];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const d=(o+(n.centeredSlides?e.minTranslate():0)-c)/(u.swiperSlideSize+a),p=(o-s[0]+(n.centeredSlides?e.minTranslate():0)-c)/(u.swiperSlideSize+a),b=-(o-c),h=b+e.slidesSizesGrid[l],m=b>=0&&b<=e.size-e.slidesSizesGrid[l];(b>=0&&b<e.size-1||h>1&&h<=e.size||b<=0&&h>=e.size)&&(e.visibleSlides.push(u),e.visibleSlidesIndexes.push(l),r[l].classList.add(n.slideVisibleClass)),m&&r[l].classList.add(n.slideFullyVisibleClass),u.progress=i?-d:d,u.originalProgress=i?-p:p}}function cd(t){const e=this;if(typeof t>"u"){const c=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*c||0}const n=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:a}=e;const l=s,u=o;if(r===0)i=0,s=!0,o=!0;else{i=(t-e.minTranslate())/r;const c=Math.abs(t-e.minTranslate())<1,d=Math.abs(t-e.maxTranslate())<1;s=c||i<=0,o=d||i>=1,c&&(i=0),d&&(i=1)}if(n.loop){const c=e.getSlideIndexByData(0),d=e.getSlideIndexByData(e.slides.length-1),p=e.slidesGrid[c],b=e.slidesGrid[d],h=e.slidesGrid[e.slidesGrid.length-1],m=Math.abs(t);m>=p?a=(m-p)/h:a=(m+h-b)/h,a>1&&(a-=1)}Object.assign(e,{progress:i,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),s&&!l&&e.emit("reachBeginning toEdge"),o&&!u&&e.emit("reachEnd toEdge"),(l&&!s||u&&!o)&&e.emit("fromEdge"),e.emit("progress",i)}const nn=(t,e,n)=>{e&&!t.classList.contains(n)?t.classList.add(n):!e&&t.classList.contains(n)&&t.classList.remove(n)};function dd(){const t=this,{slides:e,params:n,slidesEl:r,activeIndex:i}=t,s=t.virtual&&n.virtual.enabled,o=t.grid&&n.grid&&n.grid.rows>1,a=d=>ce(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let l,u,c;if(s)if(n.loop){let d=i-t.virtual.slidesBefore;d<0&&(d=t.virtual.slides.length+d),d>=t.virtual.slides.length&&(d-=t.virtual.slides.length),l=a(`[data-swiper-slide-index="${d}"]`)}else l=a(`[data-swiper-slide-index="${i}"]`);else o?(l=e.filter(d=>d.column===i)[0],c=e.filter(d=>d.column===i+1)[0],u=e.filter(d=>d.column===i-1)[0]):l=e[i];l&&(o||(c=Kc(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=e[0]),u=Xc(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=e[e.length-1]))),e.forEach(d=>{nn(d,d===l,n.slideActiveClass),nn(d,d===c,n.slideNextClass),nn(d,d===u,n.slidePrevClass)}),t.emitSlidesClasses()}const ht=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,r=e.closest(n());if(r){let i=r.querySelector(`.${t.params.lazyPreloaderClass}`);!i&&t.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},rn=(t,e)=>{if(!t.slides[e])return;const n=t.slides[e].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},In=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const n=t.slides.length;if(!n||!e||e<0)return;e=Math.min(e,n);const r=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),i=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const o=i,a=[o-e];a.push(...Array.from({length:e}).map((l,u)=>o+r+u)),t.slides.forEach((l,u)=>{a.includes(l.column)&&rn(t,u)});return}const s=i+r-1;if(t.params.rewind||t.params.loop)for(let o=i-e;o<=s+e;o+=1){const a=(o%n+n)%n;(a<i||a>s)&&rn(t,a)}else for(let o=Math.max(i-e,0);o<=Math.min(s+e,n-1);o+=1)o!==i&&(o>s||o<i)&&rn(t,o)};function ud(t){const{slidesGrid:e,params:n}=t,r=t.rtlTranslate?t.translate:-t.translate;let i;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?r>=e[s]&&r<e[s+1]-(e[s+1]-e[s])/2?i=s:r>=e[s]&&r<e[s+1]&&(i=s+1):r>=e[s]&&(i=s);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function fd(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:o,snapIndex:a}=e;let l=t,u;const c=b=>{let h=b-e.virtual.slidesBefore;return h<0&&(h=e.virtual.slides.length+h),h>=e.virtual.slides.length&&(h-=e.virtual.slides.length),h};if(typeof l>"u"&&(l=ud(e)),r.indexOf(n)>=0)u=r.indexOf(n);else{const b=Math.min(i.slidesPerGroupSkip,l);u=b+Math.floor((l-b)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),l===s&&!e.params.loop){u!==a&&(e.snapIndex=u,e.emit("snapIndexChange"));return}if(l===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=c(l);return}const d=e.grid&&i.grid&&i.grid.rows>1;let p;if(e.virtual&&i.virtual.enabled&&i.loop)p=c(l);else if(d){const b=e.slides.filter(m=>m.column===l)[0];let h=parseInt(b.getAttribute("data-swiper-slide-index"),10);Number.isNaN(h)&&(h=Math.max(e.slides.indexOf(b),0)),p=Math.floor(h/i.grid.rows)}else if(e.slides[l]){const b=e.slides[l].getAttribute("data-swiper-slide-index");b?p=parseInt(b,10):p=l}else p=l;Object.assign(e,{previousSnapIndex:a,snapIndex:u,previousRealIndex:o,realIndex:p,previousIndex:s,activeIndex:l}),e.initialized&&In(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==p&&e.emit("realIndexChange"),e.emit("slideChange"))}function pd(t,e){const n=this,r=n.params;let i=t.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(a=>{!i&&a.matches&&a.matches(`.${r.slideClass}, swiper-slide`)&&(i=a)});let s=!1,o;if(i){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===i){s=!0,o=a;break}}if(i&&s)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var hd={updateSize:id,updateSlides:sd,updateAutoHeight:od,updateSlidesOffset:ad,updateSlidesProgress:ld,updateProgress:cd,updateSlidesClasses:dd,updateActiveIndex:fd,updateClickedSlide:pd};function md(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:s}=e;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=qc(s,t);return o+=e.cssOverflowAdjustment(),r&&(o=-o),o||0}function gd(t,e){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:o}=n;let a=0,l=0;const u=0;n.isHorizontal()?a=r?-t:t:l=t,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:i.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${l}px, ${u}px)`);let c;const d=n.maxTranslate()-n.minTranslate();d===0?c=0:c=(t-n.minTranslate())/d,c!==o&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function bd(){return-this.snapGrid[0]}function wd(){return-this.snapGrid[this.snapGrid.length-1]}function vd(t,e,n,r,i){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),u=s.maxTranslate();let c;if(r&&t>l?c=l:r&&t<u?c=u:c=t,s.updateProgress(c),o.cssMode){const d=s.isHorizontal();if(e===0)a[d?"scrollLeft":"scrollTop"]=-c;else{if(!s.support.smoothScroll)return ss({swiper:s,targetPosition:-c,side:d?"left":"top"}),!0;a.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(p){!s||s.destroyed||p.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var xd={getTranslate:md,setTranslate:gd,minTranslate:bd,maxTranslate:wd,translateTo:vd};function yd(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`,n.wrapperEl.style.transitionDelay=t===0?"0ms":""),n.emit("setTransition",t,e)}function cs(t){let{swiper:e,runCallbacks:n,direction:r,step:i}=t;const{activeIndex:s,previousIndex:o}=e;let a=r;if(a||(s>o?a="next":s<o?a="prev":a="reset"),e.emit(`transition${i}`),n&&s!==o){if(a==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),a==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function Sd(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),cs({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function Ed(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),cs({swiper:n,runCallbacks:t,direction:e,step:"End"}))}var Td={setTransition:yd,transitionStart:Sd,transitionEnd:Ed};function Pd(t,e,n,r,i){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const s=this;let o=t;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:p,wrapperEl:b,enabled:h}=s;if(!h&&!r&&!i||s.destroyed||s.animating&&a.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const m=Math.min(s.params.slidesPerGroupSkip,o);let y=m+Math.floor((o-m)/s.params.slidesPerGroup);y>=l.length&&(y=l.length-1);const f=-l[y];if(a.normalizeSlideIndex)for(let w=0;w<u.length;w+=1){const S=-Math.floor(f*100),E=Math.floor(u[w]*100),P=Math.floor(u[w+1]*100);typeof u[w+1]<"u"?S>=E&&S<P-(P-E)/2?o=w:S>=E&&S<P&&(o=w+1):S>=E&&(o=w)}if(s.initialized&&o!==d&&(!s.allowSlideNext&&(p?f>s.translate&&f>s.minTranslate():f<s.translate&&f<s.minTranslate())||!s.allowSlidePrev&&f>s.translate&&f>s.maxTranslate()&&(d||0)!==o))return!1;o!==(c||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(f);let g;if(o>d?g="next":o<d?g="prev":g="reset",p&&-f===s.translate||!p&&f===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(f),g!=="reset"&&(s.transitionStart(n,g),s.transitionEnd(n,g)),!1;if(a.cssMode){const w=s.isHorizontal(),S=p?f:-f;if(e===0){const E=s.virtual&&s.params.virtual.enabled;E&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),E&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{b[w?"scrollLeft":"scrollTop"]=S})):b[w?"scrollLeft":"scrollTop"]=S,E&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return ss({swiper:s,targetPosition:S,side:w?"left":"top"}),!0;b.scrollTo({[w?"left":"top"]:S,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(f),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,r),s.transitionStart(n,g),e===0?s.transitionEnd(n,g):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(S){!s||s.destroyed||S.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,g))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function _d(t,e,n,r){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);const s=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=t;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o=o+i.virtual.slidesBefore;else{let a;if(s){const p=o*i.params.grid.rows;a=i.slides.filter(b=>b.getAttribute("data-swiper-slide-index")*1===p)[0].column}else a=i.getSlideIndexByData(o);const l=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u}=i.params;let c=i.params.slidesPerView;c==="auto"?c=i.slidesPerViewDynamic():(c=Math.ceil(parseFloat(i.params.slidesPerView,10)),u&&c%2===0&&(c=c+1));let d=l-a<c;if(u&&(d=d||a<Math.ceil(c/2)),r&&u&&i.params.slidesPerView!=="auto"&&!s&&(d=!1),d){const p=u?a<i.activeIndex?"prev":"next":a-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?a+1:a-l+1,slideRealIndex:p==="next"?i.realIndex:void 0})}if(s){const p=o*i.params.grid.rows;o=i.slides.filter(b=>b.getAttribute("data-swiper-slide-index")*1===p)[0].column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,e,n,r)}),i}function Od(t,e,n){e===void 0&&(e=!0);const r=this,{enabled:i,params:s,animating:o}=r;if(!i||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<s.slidesPerGroupSkip?1:a,u=r.virtual&&s.virtual.enabled;if(s.loop){if(o&&!u&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,t,e,n)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,t,e,n):r.slideTo(r.activeIndex+l,t,e,n)}function Cd(t,e,n){e===void 0&&(e=!0);const r=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:u}=r;if(!l||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=a?r.translate:-r.translate;function p(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const b=p(d),h=s.map(f=>p(f));let m=s[h.indexOf(b)-1];if(typeof m>"u"&&i.cssMode){let f;s.forEach((g,w)=>{b>=g&&(f=w)}),typeof f<"u"&&(m=s[f>0?f-1:f])}let y=0;if(typeof m<"u"&&(y=o.indexOf(m),y<0&&(y=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(y=y-r.slidesPerViewDynamic("previous",!0)+1,y=Math.max(y,0))),i.rewind&&r.isBeginning){const f=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(f,t,e,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(y,t,e,n)}),!0;return r.slideTo(y,t,e,n)}function kd(t,e,n){e===void 0&&(e=!0);const r=this;if(!r.destroyed)return typeof t>"u"&&(t=r.params.speed),r.slideTo(r.activeIndex,t,e,n)}function Md(t,e,n,r){e===void 0&&(e=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const u=i.snapGrid[a],c=i.snapGrid[a+1];l-u>(c-u)*r&&(s+=i.params.slidesPerGroup)}else{const u=i.snapGrid[a-1],c=i.snapGrid[a];l-u<=(c-u)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,t,e,n)}function Ld(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:n}=t,r=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let i=t.clickedIndex,s;const o=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;s=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<t.loopedSlides-r/2||i>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),i=t.getSlideIndex(ce(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),Ln(()=>{t.slideTo(i)})):t.slideTo(i):i>t.slides.length-r?(t.loopFix(),i=t.getSlideIndex(ce(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),Ln(()=>{t.slideTo(i)})):t.slideTo(i)}else t.slideTo(i)}var Ad={slideTo:Pd,slideToLoop:_d,slideNext:Od,slidePrev:Cd,slideReset:kd,slideToClosest:Md,slideToClickedSlide:Ld};function Id(t){const e=this,{params:n,slidesEl:r}=e;if(!n.loop||e.virtual&&e.params.virtual.enabled)return;const i=()=>{ce(r,`.${n.slideClass}, swiper-slide`).forEach((d,p)=>{d.setAttribute("data-swiper-slide-index",p)})},s=e.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(s?n.grid.rows:1),a=e.slides.length%o!==0,l=s&&e.slides.length%n.grid.rows!==0,u=c=>{for(let d=0;d<c;d+=1){const p=e.isElement?St("swiper-slide",[n.slideBlankClass]):St("div",[n.slideClass,n.slideBlankClass]);e.slidesEl.append(p)}};if(a){if(n.loopAddBlankSlides){const c=o-e.slides.length%o;u(c),e.recalcSlides(),e.updateSlides()}else yt("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const c=n.grid.rows-e.slides.length%n.grid.rows;u(c),e.recalcSlides(),e.updateSlides()}else yt("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();e.loopFix({slideRealIndex:t,direction:n.centeredSlides?void 0:"next"})}function Rd(t){let{slideRealIndex:e,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:s,byController:o,byMousewheel:a}=t===void 0?{}:t;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:d,slidesEl:p,params:b}=l,{centeredSlides:h}=b;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&b.virtual.enabled){n&&(!b.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):b.centeredSlides&&l.snapIndex<b.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=c,l.allowSlideNext=d,l.emit("loopFix");return}let m=b.slidesPerView;m==="auto"?m=l.slidesPerViewDynamic():(m=Math.ceil(parseFloat(b.slidesPerView,10)),h&&m%2===0&&(m=m+1));const y=b.slidesPerGroupAuto?m:b.slidesPerGroup;let f=y;f%y!==0&&(f+=y-f%y),f+=b.loopAdditionalSlides,l.loopedSlides=f;const g=l.grid&&b.grid&&b.grid.rows>1;u.length<m+f?yt("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):g&&b.grid.fill==="row"&&yt("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const w=[],S=[];let E=l.activeIndex;typeof s>"u"?s=l.getSlideIndex(u.filter(C=>C.classList.contains(b.slideActiveClass))[0]):E=s;const P=r==="next"||!r,L=r==="prev"||!r;let k=0,O=0;const T=g?Math.ceil(u.length/b.grid.rows):u.length,M=(g?u[s].column:s)+(h&&typeof i>"u"?-m/2+.5:0);if(M<f){k=Math.max(f-M,y);for(let C=0;C<f-M;C+=1){const I=C-Math.floor(C/T)*T;if(g){const z=T-I-1;for(let re=u.length-1;re>=0;re-=1)u[re].column===z&&w.push(re)}else w.push(T-I-1)}}else if(M+m>T-f){O=Math.max(M-(T-f*2),y);for(let C=0;C<O;C+=1){const I=C-Math.floor(C/T)*T;g?u.forEach((z,re)=>{z.column===I&&S.push(re)}):S.push(I)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),L&&w.forEach(C=>{u[C].swiperLoopMoveDOM=!0,p.prepend(u[C]),u[C].swiperLoopMoveDOM=!1}),P&&S.forEach(C=>{u[C].swiperLoopMoveDOM=!0,p.append(u[C]),u[C].swiperLoopMoveDOM=!1}),l.recalcSlides(),b.slidesPerView==="auto"?l.updateSlides():g&&(w.length>0&&L||S.length>0&&P)&&l.slides.forEach((C,I)=>{l.grid.updateSlide(I,C,l.slides)}),b.watchSlidesProgress&&l.updateSlidesOffset(),n){if(w.length>0&&L){if(typeof e>"u"){const C=l.slidesGrid[E],z=l.slidesGrid[E+k]-C;a?l.setTranslate(l.translate-z):(l.slideTo(E+Math.ceil(k),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-z,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-z))}else if(i){const C=g?w.length/b.grid.rows:w.length;l.slideTo(l.activeIndex+C,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(S.length>0&&P)if(typeof e>"u"){const C=l.slidesGrid[E],z=l.slidesGrid[E-O]-C;a?l.setTranslate(l.translate-z):(l.slideTo(E-O,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-z,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-z))}else{const C=g?S.length/b.grid.rows:S.length;l.slideTo(l.activeIndex-C,0,!1,!0)}}if(l.allowSlidePrev=c,l.allowSlideNext=d,l.controller&&l.controller.control&&!o){const C={slideRealIndex:e,direction:r,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(I=>{!I.destroyed&&I.params.loop&&I.loopFix({...C,slideTo:I.params.slidesPerView===b.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...C,slideTo:l.controller.control.params.slidesPerView===b.slidesPerView?n:!1})}l.emit("loopFix")}function $d(){const t=this,{params:e,slidesEl:n}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const r=[];t.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[s]=i}),t.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var jd={loopCreate:Id,loopFix:Rd,loopDestroy:$d};function Nd(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function zd(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var Hd={setGrabCursor:Nd,unsetGrabCursor:zd};function Dd(t,e){e===void 0&&(e=this);function n(r){if(!r||r===Ae()||r===ee())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(t);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(e)}function qr(t,e,n){const r=ee(),{params:i}=t,s=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return s&&(n<=o||n>=r.innerWidth-o)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function Bd(t){const e=this,n=Ae();let r=t;r.originalEvent&&(r=r.originalEvent);const i=e.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){qr(e,r,r.targetTouches[0].pageX);return}const{params:s,touches:o,enabled:a}=e;if(!a||!s.simulateTouch&&r.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=r.target;if(s.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!s.noSwipingClass&&s.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&c&&(l=c[0]);const d=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,p=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(p?Dd(d,l):l.closest(d))){e.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const b=o.currentX,h=o.currentY;if(!qr(e,r,b))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=b,o.startY=h,i.touchStartTime=xt(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let m=!0;l.matches(i.focusableElements)&&(m=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const y=m&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||y)&&!l.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function Fd(t){const e=Ae(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:a}=n;if(!a||!i.simulateTouch&&t.pointerType==="mouse")return;let l=t;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].filter(P=>P.identifier===r.touchId)[0],!u||u.identifier!==r.touchId)return}else u=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const c=u.pageX,d=u.pageY;if(l.preventedByNestedSwiper){s.startX=c,s.startY=d;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:c,startY:d,currentX:c,currentY:d}),r.touchStartTime=xt());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(d<s.startY&&n.translate<=n.maxTranslate()||d>s.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(c<s.startX&&n.translate<=n.maxTranslate()||c>s.startX&&n.translate>=n.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=c,s.currentY=d;const p=s.currentX-s.startX,b=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(p**2+b**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let P;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:p*p+b*b>=25&&(P=Math.atan2(Math.abs(b),Math.abs(p))*180/Math.PI,r.isScrolling=n.isHorizontal()?P>i.touchAngle:90-P>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling||l.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let h=n.isHorizontal()?p:b,m=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(h=Math.abs(h)*(o?1:-1),m=Math.abs(m)*(o?1:-1)),s.diff=h,h*=i.touchRatio,o&&(h=-h,m=-m);const y=n.touchesDirection;n.swipeDirection=h>0?"prev":"next",n.touchesDirection=m>0?"prev":"next";const f=n.params.loop&&!i.cssMode,g=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(f&&g&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const P=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(P)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let w;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&y!==n.touchesDirection&&f&&g&&Math.abs(h)>=1){Object.assign(s,{startX:c,startY:d,currentX:c,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=h+r.startTranslate;let S=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),h>0?(f&&g&&!w&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+h)**E))):h<0&&(f&&g&&!w&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-h)**E))),S&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(h)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function Vd(t){const e=this,n=e.touchEventsData;let r=t;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(E=>E.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:a,rtlTranslate:l,slidesGrid:u,enabled:c}=e;if(!c||!o.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&e.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const d=xt(),p=d-n.touchStartTime;if(e.allowClick){const E=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(E&&E[0]||r.target,E),e.emit("tap click",r),p<300&&d-n.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(n.lastClickTime=xt(),Ln(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let b;if(o.followFinger?b=l?e.translate:-e.translate:b=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:b});return}const h=b>=-e.maxTranslate()&&!e.params.loop;let m=0,y=e.slidesSizesGrid[0];for(let E=0;E<u.length;E+=E<o.slidesPerGroupSkip?1:o.slidesPerGroup){const P=E<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof u[E+P]<"u"?(h||b>=u[E]&&b<u[E+P])&&(m=E,y=u[E+P]-u[E]):(h||b>=u[E])&&(m=E,y=u[u.length-1]-u[u.length-2])}let f=null,g=null;o.rewind&&(e.isBeginning?g=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(f=0));const w=(b-u[m])/y,S=m<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(w>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?f:m+S):e.slideTo(m)),e.swipeDirection==="prev"&&(w>1-o.longSwipesRatio?e.slideTo(m+S):g!==null&&w<0&&Math.abs(w)>o.longSwipesRatio?e.slideTo(g):e.slideTo(m))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(m+S):e.slideTo(m):(e.swipeDirection==="next"&&e.slideTo(f!==null?f:m+S),e.swipeDirection==="prev"&&e.slideTo(g!==null?g:m))}}function Yr(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=t,o=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!a?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!o?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=i,t.allowSlideNext=r,t.params.watchOverflow&&s!==t.snapGrid&&t.checkOverflow()}function Wd(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function Gd(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:r}=t;if(!r)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let i;const s=t.maxTranslate()-t.minTranslate();s===0?i=0:i=(t.translate-t.minTranslate())/s,i!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function Ud(t){const e=this;ht(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function qd(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const ds=(t,e)=>{const n=Ae(),{params:r,el:i,wrapperEl:s,device:o}=t,a=!!r.nested,l=e==="on"?"addEventListener":"removeEventListener",u=e;n[l]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:a}),i[l]("touchstart",t.onTouchStart,{passive:!1}),i[l]("pointerdown",t.onTouchStart,{passive:!1}),n[l]("touchmove",t.onTouchMove,{passive:!1,capture:a}),n[l]("pointermove",t.onTouchMove,{passive:!1,capture:a}),n[l]("touchend",t.onTouchEnd,{passive:!0}),n[l]("pointerup",t.onTouchEnd,{passive:!0}),n[l]("pointercancel",t.onTouchEnd,{passive:!0}),n[l]("touchcancel",t.onTouchEnd,{passive:!0}),n[l]("pointerout",t.onTouchEnd,{passive:!0}),n[l]("pointerleave",t.onTouchEnd,{passive:!0}),n[l]("contextmenu",t.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",t.onClick,!0),r.cssMode&&s[l]("scroll",t.onScroll),r.updateOnWindowResize?t[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Yr,!0):t[u]("observerUpdate",Yr,!0),i[l]("load",t.onLoad,{capture:!0})};function Yd(){const t=this,{params:e}=t;t.onTouchStart=Bd.bind(t),t.onTouchMove=Fd.bind(t),t.onTouchEnd=Vd.bind(t),t.onDocumentTouchStart=qd.bind(t),e.cssMode&&(t.onScroll=Gd.bind(t)),t.onClick=Wd.bind(t),t.onLoad=Ud.bind(t),ds(t,"on")}function Xd(){ds(this,"off")}var Kd={attachEvents:Yd,detachEvents:Xd};const Xr=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function Qd(){const t=this,{realIndex:e,initialized:n,params:r,el:i}=t,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=t.getBreakpoint(s,t.params.breakpointsBase,t.el);if(!o||t.currentBreakpoint===o)return;const l=(o in s?s[o]:void 0)||t.originalParams,u=Xr(t,r),c=Xr(t,l),d=t.params.grabCursor,p=l.grabCursor,b=r.enabled;u&&!c?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),t.emitContainerClasses()):!u&&c&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),t.emitContainerClasses()),d&&!p?t.unsetGrabCursor():!d&&p&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(w=>{if(typeof l[w]>"u")return;const S=r[w]&&r[w].enabled,E=l[w]&&l[w].enabled;S&&!E&&t[w].disable(),!S&&E&&t[w].enable()});const h=l.direction&&l.direction!==r.direction,m=r.loop&&(l.slidesPerView!==r.slidesPerView||h),y=r.loop;h&&n&&t.changeDirection(),Q(t.params,l);const f=t.params.enabled,g=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),b&&!f?t.disable():!b&&f&&t.enable(),t.currentBreakpoint=o,t.emit("_beforeBreakpoint",l),n&&(m?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!y&&g?(t.loopCreate(e),t.updateSlides()):y&&!g&&t.loopDestroy()),t.emit("breakpoint",l)}function Jd(t,e,n){if(e===void 0&&(e="window"),!t||e==="container"&&!n)return;let r=!1;const i=ee(),s=e==="window"?i.innerHeight:n.clientHeight,o=Object.keys(t).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:s*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:u}=o[a];e==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=l):u<=n.clientWidth&&(r=l)}return r||"max"}var Zd={setBreakpoint:Qd,getBreakpoint:Jd};function eu(t,e){const n=[];return t.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(e+i)}):typeof r=="string"&&n.push(e+r)}),n}function tu(){const t=this,{classNames:e,params:n,rtl:r,el:i,device:s}=t,o=eu(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...o),i.classList.add(...e),t.emitContainerClasses()}function nu(){const t=this,{el:e,classNames:n}=t;e.classList.remove(...n),t.emitContainerClasses()}var ru={addClasses:tu,removeClasses:nu};function iu(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:r}=n;if(r){const i=t.slides.length-1,s=t.slidesGrid[i]+t.slidesSizesGrid[i]+r*2;t.isLocked=t.size>s}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var su={checkOverflow:iu},Rn={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ou(t,e){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){Q(e,r);return}if(t[i]===!0&&(t[i]={enabled:!0}),i==="navigation"&&t[i]&&t[i].enabled&&!t[i].prevEl&&!t[i].nextEl&&(t[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&t[i]&&t[i].enabled&&!t[i].el&&(t[i].auto=!0),!(i in t&&"enabled"in s)){Q(e,r);return}typeof t[i]=="object"&&!("enabled"in t[i])&&(t[i].enabled=!0),t[i]||(t[i]={enabled:!1}),Q(e,r)}}const sn={eventsEmitter:rd,update:hd,translate:xd,transition:Td,slide:Ad,loop:jd,grabCursor:Hd,events:Kd,breakpoints:Zd,checkOverflow:su,classes:ru},on={};let rr=class he{constructor(){let e,n;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[e,n]=i,n||(n={}),n=Q({},n),e&&!n.el&&(n.el=e);const o=Ae();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const c=[];return o.querySelectorAll(n.el).forEach(d=>{const p=Q({},n,{el:d});c.push(new he(p))}),c}const a=this;a.__swiper__=!0,a.support=as(),a.device=ls({userAgent:n.userAgent}),a.browser=ed(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const l={};a.modules.forEach(c=>{c({params:n,swiper:a,extendParams:ou(n,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const u=Q({},Rn,l);return a.params=Q({},u,on,n),a.originalParams=Q({},a.params),a.passedParams=Q({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(c=>{a.on(c,a.params.on[c])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:n,params:r}=this,i=ce(n,`.${r.slideClass}, swiper-slide`),s=Et(i[0]);return Et(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:n,params:r}=e;e.slides=ce(n,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const r=this;e=Math.min(Math.max(e,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*e+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(r=>{const i=e.getSlideClasses(r);n.push({slideEl:r,classNames:i}),e.emit("_slideClass",r,i)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e,n){e===void 0&&(e="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:s,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:u}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=s[u]?Math.ceil(s[u].swiperSlideSize):0,p;for(let b=u+1;b<s.length;b+=1)s[b]&&!p&&(d+=Math.ceil(s[b].swiperSlideSize),c+=1,d>l&&(p=!0));for(let b=u-1;b>=0;b-=1)s[b]&&!p&&(d+=s[b].swiperSlideSize,c+=1,d>l&&(p=!0))}else if(e==="current")for(let d=u+1;d<s.length;d+=1)(n?o[d]+a[d]-o[u]<l:o[d]-o[u]<l)&&(c+=1);else for(let d=u-1;d>=0;d-=1)o[u]-o[d]<l&&(c+=1);return c}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&ht(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const o=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(o.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let r=e||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):ce(r,i())[0])();return!o&&n.params.createElements&&(o=St("div",n.params.wrapperClass),r.append(o),ce(r,`.${n.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||xe(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||xe(r,"direction")==="rtl"),wrongRTL:xe(o,"display")==="-webkit-box"}),!0}init(e){const n=this;if(n.initialized||n.mount(e)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?ht(n,s):s.addEventListener("load",o=>{ht(n,o.target)})}),In(n),n.initialized=!0,In(n),n.emit("init"),n.emit("afterInit"),n}destroy(e,n){e===void 0&&(e=!0),n===void 0&&(n=!0);const r=this,{params:i,el:s,wrapperEl:o,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),e!==!1&&(r.el.swiper=null,Gc(r)),r.destroyed=!0),null}static extendDefaults(e){Q(on,e)}static get extendedDefaults(){return on}static get defaults(){return Rn}static installModule(e){he.prototype.__modules__||(he.prototype.__modules__=[]);const n=he.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>he.installModule(n)),he):(he.installModule(e),he)}};Object.keys(sn).forEach(t=>{Object.keys(sn[t]).forEach(e=>{rr.prototype[e]=sn[t][e]})});rr.use([td,nd]);const us=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Te(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function _e(t,e){const n=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:Te(e[r])&&Te(t[r])&&Object.keys(e[r]).length>0?e[r].__swiper__?t[r]=e[r]:_e(t[r],e[r]):t[r]=e[r]})}function fs(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function ps(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function hs(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function ms(t){t===void 0&&(t="");const e=t.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return e.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function au(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function lu(t){let{swiper:e,slides:n,passedParams:r,changedParams:i,nextEl:s,prevEl:o,scrollbarEl:a,paginationEl:l}=t;const u=i.filter(O=>O!=="children"&&O!=="direction"&&O!=="wrapperClass"),{params:c,pagination:d,navigation:p,scrollbar:b,virtual:h,thumbs:m}=e;let y,f,g,w,S,E,P,L;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(y=!0),i.includes("controller")&&r.controller&&r.controller.control&&c.controller&&!c.controller.control&&(f=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(c.pagination||c.pagination===!1)&&d&&!d.el&&(g=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&b&&!b.el&&(w=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||s)&&(c.navigation||c.navigation===!1)&&p&&!p.prevEl&&!p.nextEl&&(S=!0);const k=O=>{e[O]&&(e[O].destroy(),O==="navigation"?(e.isElement&&(e[O].prevEl.remove(),e[O].nextEl.remove()),c[O].prevEl=void 0,c[O].nextEl=void 0,e[O].prevEl=void 0,e[O].nextEl=void 0):(e.isElement&&e[O].el.remove(),c[O].el=void 0,e[O].el=void 0))};i.includes("loop")&&e.isElement&&(c.loop&&!r.loop?E=!0:!c.loop&&r.loop?P=!0:L=!0),u.forEach(O=>{if(Te(c[O])&&Te(r[O]))Object.assign(c[O],r[O]),(O==="navigation"||O==="pagination"||O==="scrollbar")&&"enabled"in r[O]&&!r[O].enabled&&k(O);else{const T=r[O];(T===!0||T===!1)&&(O==="navigation"||O==="pagination"||O==="scrollbar")?T===!1&&k(O):c[O]=r[O]}}),u.includes("controller")&&!f&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),i.includes("children")&&n&&h&&c.virtual.enabled?(h.slides=n,h.update(!0)):i.includes("virtual")&&h&&c.virtual.enabled&&(n&&(h.slides=n),h.update(!0)),i.includes("children")&&n&&c.loop&&(L=!0),y&&m.init()&&m.update(!0),f&&(e.controller.control=c.controller.control),g&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(c.pagination.el=l),d.init(),d.render(),d.update()),w&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(c.scrollbar.el=a),b.init(),b.updateSize(),b.setTranslate()),S&&(e.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),s.innerHTML=e.hostEl.constructor.nextButtonSvg,s.part.add("button-next"),e.el.appendChild(s)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=e.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),e.el.appendChild(o))),s&&(c.navigation.nextEl=s),o&&(c.navigation.prevEl=o),p.init(),p.update()),i.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&e.changeDirection(r.direction,!1),(E||L)&&e.loopDestroy(),(P||L)&&e.loopCreate(),e.update()}function cu(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const n={on:{}},r={},i={};_e(n,Rn),n._emitClasses=!0,n.init=!1;const s={},o=us.map(l=>l.replace(/_/,"")),a=Object.assign({},t);return Object.keys(a).forEach(l=>{typeof t[l]>"u"||(o.indexOf(l)>=0?Te(t[l])?(n[l]={},i[l]={},_e(n[l],t[l]),_e(i[l],t[l])):(n[l]=t[l],i[l]=t[l]):l.search(/on[A-Z]/)===0&&typeof t[l]=="function"?e?r[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:s[l]=t[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:s,events:r}}function du(t,e){let{el:n,nextEl:r,prevEl:i,paginationEl:s,scrollbarEl:o,swiper:a}=t;fs(e)&&r&&i&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=i,a.originalParams.navigation.prevEl=i),ps(e)&&s&&(a.params.pagination.el=s,a.originalParams.pagination.el=s),hs(e)&&o&&(a.params.scrollbar.el=o,a.originalParams.scrollbar.el=o),a.init(n)}function uu(t,e,n,r,i){const s=[];if(!e)return s;const o=l=>{s.indexOf(l)<0&&s.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&o("children"),r.length!==n.length&&o("children")}return us.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in t&&l in e)if(Te(t[l])&&Te(e[l])){const u=Object.keys(t[l]),c=Object.keys(e[l]);u.length!==c.length?o(l):(u.forEach(d=>{t[l][d]!==e[l][d]&&o(l)}),c.forEach(d=>{t[l][d]!==e[l][d]&&o(l)}))}else t[l]!==e[l]&&o(l)}),s}const fu=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function Tt(){return Tt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tt.apply(this,arguments)}function gs(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function bs(t){const e=[];return G.Children.toArray(t).forEach(n=>{gs(n)?e.push(n):n.props&&n.props.children&&bs(n.props.children).forEach(r=>e.push(r))}),e}function pu(t){const e=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return G.Children.toArray(t).forEach(r=>{if(gs(r))e.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=bs(r.props.children);i.length>0?i.forEach(s=>e.push(s)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:e,slots:n}}function hu(t,e,n){if(!n)return null;const r=c=>{let d=c;return c<0?d=e.length+c:d>=e.length&&(d=d-e.length),d},i=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:s,to:o}=n,a=t.params.loop?-e.length:0,l=t.params.loop?e.length*2:e.length,u=[];for(let c=a;c<l;c+=1)c>=s&&c<=o&&u.push(e[r(c)]);return u.map((c,d)=>G.cloneElement(c,{swiper:t,style:i,key:c.props.virtualIndex||c.key||`slide-${d}`}))}function Ne(t,e){return typeof window>"u"?_.useEffect(t,e):_.useLayoutEffect(t,e)}const Kr=_.createContext(null),mu=_.createContext(null),Nt=_.forwardRef(function(t,e){let{className:n,tag:r="div",wrapperTag:i="div",children:s,onSwiper:o,...a}=t===void 0?{}:t,l=!1;const[u,c]=_.useState("swiper"),[d,p]=_.useState(null),[b,h]=_.useState(!1),m=_.useRef(!1),y=_.useRef(null),f=_.useRef(null),g=_.useRef(null),w=_.useRef(null),S=_.useRef(null),E=_.useRef(null),P=_.useRef(null),L=_.useRef(null),{params:k,passedParams:O,rest:T,events:A}=cu(a),{slides:M,slots:C}=pu(s),I=()=>{h(!b)};Object.assign(k.on,{_containerClasses(U,ne){c(ne)}});const z=()=>{Object.assign(k.on,A),l=!0;const U={...k};if(delete U.wrapperClass,f.current=new rr(U),f.current.virtual&&f.current.params.virtual.enabled){f.current.virtual.slides=M;const ne={cache:!1,slides:M,renderExternal:p,renderExternalUpdate:!1};_e(f.current.params.virtual,ne),_e(f.current.originalParams.virtual,ne)}};y.current||z(),f.current&&f.current.on("_beforeBreakpoint",I);const re=()=>{l||!A||!f.current||Object.keys(A).forEach(U=>{f.current.on(U,A[U])})},Ft=()=>{!A||!f.current||Object.keys(A).forEach(U=>{f.current.off(U,A[U])})};_.useEffect(()=>()=>{f.current&&f.current.off("_beforeBreakpoint",I)}),_.useEffect(()=>{!m.current&&f.current&&(f.current.emitSlidesClasses(),m.current=!0)}),Ne(()=>{if(e&&(e.current=y.current),!!y.current)return f.current.destroyed&&z(),du({el:y.current,nextEl:S.current,prevEl:E.current,paginationEl:P.current,scrollbarEl:L.current,swiper:f.current},k),o&&!f.current.destroyed&&o(f.current),()=>{f.current&&!f.current.destroyed&&f.current.destroy(!0,!1)}},[]),Ne(()=>{re();const U=uu(O,g.current,M,w.current,ne=>ne.key);return g.current=O,w.current=M,U.length&&f.current&&!f.current.destroyed&&lu({swiper:f.current,slides:M,passedParams:O,changedParams:U,nextEl:S.current,prevEl:E.current,scrollbarEl:L.current,paginationEl:P.current}),()=>{Ft()}}),Ne(()=>{fu(f.current)},[d]);function et(){return k.virtual?hu(f.current,M,d):M.map((U,ne)=>G.cloneElement(U,{swiper:f.current,swiperSlideIndex:ne}))}return G.createElement(r,Tt({ref:y,className:ms(`${u}${n?` ${n}`:""}`)},T),G.createElement(mu.Provider,{value:f.current},C["container-start"],G.createElement(i,{className:au(k.wrapperClass)},C["wrapper-start"],et(),C["wrapper-end"]),fs(k)&&G.createElement(G.Fragment,null,G.createElement("div",{ref:E,className:"swiper-button-prev"}),G.createElement("div",{ref:S,className:"swiper-button-next"})),hs(k)&&G.createElement("div",{ref:L,className:"swiper-scrollbar"}),ps(k)&&G.createElement("div",{ref:P,className:"swiper-pagination"}),C["container-end"]))});Nt.displayName="Swiper";const ae=_.forwardRef(function(t,e){let{tag:n="div",children:r,className:i="",swiper:s,zoom:o,lazy:a,virtualIndex:l,swiperSlideIndex:u,...c}=t===void 0?{}:t;const d=_.useRef(null),[p,b]=_.useState("swiper-slide"),[h,m]=_.useState(!1);function y(S,E,P){E===d.current&&b(P)}Ne(()=>{if(typeof u<"u"&&(d.current.swiperSlideIndex=u),e&&(e.current=d.current),!(!d.current||!s)){if(s.destroyed){p!=="swiper-slide"&&b("swiper-slide");return}return s.on("_slideClass",y),()=>{s&&s.off("_slideClass",y)}}}),Ne(()=>{s&&d.current&&!s.destroyed&&b(s.getSlideClasses(d.current))},[s]);const f={isActive:p.indexOf("swiper-slide-active")>=0,isVisible:p.indexOf("swiper-slide-visible")>=0,isPrev:p.indexOf("swiper-slide-prev")>=0,isNext:p.indexOf("swiper-slide-next")>=0},g=()=>typeof r=="function"?r(f):r,w=()=>{m(!0)};return G.createElement(n,Tt({ref:d,className:ms(`${p}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:w},c),o&&G.createElement(Kr.Provider,{value:f},G.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},g(),a&&!h&&G.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&G.createElement(Kr.Provider,{value:f},g(),a&&!h&&G.createElement("div",{className:"swiper-lazy-preloader"})))});ae.displayName="SwiperSlide";const gu="/MistoHub/assets/hero1mob-385cb7f2.png",bu="/MistoHub/assets/hero1mob-b7993bab.webp",wu="/MistoHub/assets/hero1mob@2x-ebe366bd.png",vu="/MistoHub/assets/hero1mob@2x-fcc35072.webp",xu="/MistoHub/assets/hero1tablet-b97df3e5.png",yu="/MistoHub/assets/hero1tablet-80eec5f8.webp",Su="/MistoHub/assets/hero1tablet@2x-07ce06dc.png",Eu="/MistoHub/assets/hero1tablet@2x-1f51f6b4.webp",Tu="/MistoHub/assets/hero1desktop-f60eaa24.png",Pu="/MistoHub/assets/hero1desktop-ea5839ae.webp",_u="/MistoHub/assets/hero1desktop@2x-671ffc9e.png",Ou="/MistoHub/assets/hero1desktop@2x-f5afe464.webp",an="/MistoHub/assets/hero2-0dc9576f.png",ln="/MistoHub/assets/hero2@2x-fcfc1f52.png",cn="/MistoHub/assets/hero2-1d678767.webp",dn="/MistoHub/assets/hero2@2x-eaab9d3e.webp",un="/MistoHub/assets/hero3-cb0802fe.png",fn="/MistoHub/assets/hero3@2x-b06dc8d7.png",pn="/MistoHub/assets/hero3-494c0e3b.webp",hn="/MistoHub/assets/hero3@2x-14174f0d.webp",mn="/MistoHub/assets/hero4-eaf95bb1.png",gn="/MistoHub/assets/hero4@2x-99b52b9b.png",bn="/MistoHub/assets/hero4-a36809e4.webp",wn="/MistoHub/assets/hero4@2x-99a7f7bd.webp",vn="/MistoHub/assets/hero5-6f2417a3.png",xn="/MistoHub/assets/hero5@2x-830c1cd4.png",yn="/MistoHub/assets/hero5-2ab4f108.webp",Sn="/MistoHub/assets/hero5@2x-0a268f87.webp",Cu=[{mobile:{png:gu,png_2x:wu,webp:bu,webp_2x:vu},tablet:{png:xu,png_2x:Su,webp:yu,webp_2x:Eu},desktop:{png:Tu,png_2x:_u,webp:Pu,webp_2x:Ou},alt:"Kitchen 1"},{mobile:{png:an,png_2x:ln,webp:cn,webp_2x:dn},tablet:{png:an,png_2x:ln,webp:cn,webp_2x:dn},desktop:{png:an,png_2x:ln,webp:cn,webp_2x:dn},alt:"Kitchen 2"},{mobile:{png:un,png_2x:fn,webp:pn,webp_2x:hn},tablet:{png:un,png_2x:fn,webp:pn,webp_2x:hn},desktop:{png:un,png_2x:fn,webp:pn,webp_2x:hn},alt:"Kitchen 3"},{mobile:{png:mn,png_2x:gn,webp:bn,webp_2x:wn},tablet:{png:mn,png_2x:gn,webp:bn,webp_2x:wn},desktop:{png:mn,png_2x:gn,webp:bn,webp_2x:wn},alt:"Kitchen 4"},{mobile:{png:vn,png_2x:xn,webp:yn,webp_2x:Sn},tablet:{png:vn,png_2x:xn,webp:yn,webp_2x:Sn},desktop:{png:vn,png_2x:xn,webp:yn,webp_2x:Sn},alt:"Kitchen 5"}],ku=Pe.section`
  min-width: 320px;
  width: 100%;
  height: 700px;

  @media only screen and (min-width: 768px) {
    height: 1024px;
  }

  @media only screen and (min-width: 1440px) {
    height: 880px;
  }
`,Mu=Pe(qn)`
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
`,Lu=({item:t,priority:e,hidden:n})=>v.jsxs("picture",{children:[v.jsx("source",{srcSet:`${t.mobile.webp} 375w, ${t.mobile.webp_2x} 750w`,media:"(max-width: 767px)",sizes:"(max-width: 767px) 375px, 100%",type:"image/webp"}),v.jsx("source",{srcSet:`${t.tablet.webp} 768w, ${t.tablet.webp_2x} 1536w`,media:"(min-width: 768px) and (max-width: 1439px)",sizes:"(min-width: 768px) and (max-width: 1439px) 768px, 100%",type:"image/webp"}),v.jsx("source",{srcSet:`${t.desktop.webp} 1440w, ${t.desktop.webp_2x} 2880w`,media:"(min-width: 1440px)",sizes:"(min-width: 1440px) 1440px, 100%",type:"image/webp"}),v.jsx("img",{fetchpriority:e?"high":"low",loading:e?"eager":"lazy",className:"hero-img",style:{display:n?"none":void 0},src:t.desktop.png,alt:t.alt})]}),Au=()=>{const t=_.useRef(null),[e,n]=_.useState(!0),[r,i]=_.useState(!1);_.useEffect(()=>{t.current&&t.current.swiper&&t.current.swiper.on("slideChange",()=>{n(t.current.swiper.isBeginning),i(t.current.swiper.isEnd)})},[]);const s=()=>{t.current&&t.current.swiper&&t.current.swiper.slideNext()},o=()=>{t.current&&t.current.swiper&&t.current.swiper.slidePrev()};return v.jsx(ku,{children:v.jsxs(Mu,{children:[v.jsx(Nt,{ref:t,className:"my-swiper",navigation:!0,children:Cu.map((a,l)=>v.jsx(ae,{children:v.jsx(Lu,{item:a,priority:l===0})},l))}),v.jsxs("div",{className:"custom-navigation",children:[v.jsx("button",{className:`swiper-btn-prev ${e?"disabled":""}`,onClick:o,disabled:e,type:"button",title:"Попередній слайд",children:v.jsx(me,{iconName:"arrow-left2"})}),v.jsx("button",{className:`swiper-btn-next ${r?"disabled":""}`,onClick:s,disabled:r,type:"button",title:"Наступний слайд",children:v.jsx(me,{iconName:"arrow-right2"})})]}),v.jsxs("h1",{className:"hero-title",children:[v.jsx("span",{children:"МІСТОХАБ -"}),v.jsx("br",{}),"створюємо простір",v.jsx("br",{}),"розвитку міста"]})]})})};function Iu(t,e,n,r){return t.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let s=ce(t.el,`.${r[i]}`)[0];s||(s=St("div",r[i]),s.className=r[i],t.el.append(s)),n[i]=s,e[i]=s}}),n}function $e(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ws(t){let{swiper:e,extendParams:n,on:r,emit:i}=t;const s="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function u(f,g){const{bulletActiveClass:w}=e.params.pagination;f&&(f=f[`${g==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${w}-${g}`),f=f[`${g==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${w}-${g}-${g}`)))}function c(f){const g=f.target.closest($e(e.params.pagination.bulletClass));if(!g)return;f.preventDefault();const w=Et(g)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===w)return;e.slideToLoop(w)}else e.slideTo(w)}function d(){const f=e.rtl,g=e.params.pagination;if(l())return;let w=e.pagination.el;w=pe(w);let S,E;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,L=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,S=e.activeIndex||0),g.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const k=e.pagination.bullets;let O,T,A;if(g.dynamicBullets&&(o=An(k[0],e.isHorizontal()?"width":"height",!0),w.forEach(M=>{M.style[e.isHorizontal()?"width":"height"]=`${o*(g.dynamicMainBullets+4)}px`}),g.dynamicMainBullets>1&&E!==void 0&&(a+=S-(E||0),a>g.dynamicMainBullets-1?a=g.dynamicMainBullets-1:a<0&&(a=0)),O=Math.max(S-a,0),T=O+(Math.min(k.length,g.dynamicMainBullets)-1),A=(T+O)/2),k.forEach(M=>{const C=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(I=>`${g.bulletActiveClass}${I}`)].map(I=>typeof I=="string"&&I.includes(" ")?I.split(" "):I).flat();M.classList.remove(...C)}),w.length>1)k.forEach(M=>{const C=Et(M);C===S?M.classList.add(...g.bulletActiveClass.split(" ")):e.isElement&&M.setAttribute("part","bullet"),g.dynamicBullets&&(C>=O&&C<=T&&M.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),C===O&&u(M,"prev"),C===T&&u(M,"next"))});else{const M=k[S];if(M&&M.classList.add(...g.bulletActiveClass.split(" ")),e.isElement&&k.forEach((C,I)=>{C.setAttribute("part",I===S?"bullet-active":"bullet")}),g.dynamicBullets){const C=k[O],I=k[T];for(let z=O;z<=T;z+=1)k[z]&&k[z].classList.add(...`${g.bulletActiveClass}-main`.split(" "));u(C,"prev"),u(I,"next")}}if(g.dynamicBullets){const M=Math.min(k.length,g.dynamicMainBullets+4),C=(o*M-o)/2-A*o,I=f?"right":"left";k.forEach(z=>{z.style[e.isHorizontal()?I:"top"]=`${C}px`})}}w.forEach((k,O)=>{if(g.type==="fraction"&&(k.querySelectorAll($e(g.currentClass)).forEach(T=>{T.textContent=g.formatFractionCurrent(S+1)}),k.querySelectorAll($e(g.totalClass)).forEach(T=>{T.textContent=g.formatFractionTotal(L)})),g.type==="progressbar"){let T;g.progressbarOpposite?T=e.isHorizontal()?"vertical":"horizontal":T=e.isHorizontal()?"horizontal":"vertical";const A=(S+1)/L;let M=1,C=1;T==="horizontal"?M=A:C=A,k.querySelectorAll($e(g.progressbarFillClass)).forEach(I=>{I.style.transform=`translate3d(0,0,0) scaleX(${M}) scaleY(${C})`,I.style.transitionDuration=`${e.params.speed}ms`})}g.type==="custom"&&g.renderCustom?(k.innerHTML=g.renderCustom(e,S+1,L),O===0&&i("paginationRender",k)):(O===0&&i("paginationRender",k),i("paginationUpdate",k)),e.params.watchOverflow&&e.enabled&&k.classList[e.isLocked?"add":"remove"](g.lockClass)})}function p(){const f=e.params.pagination;if(l())return;const g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let w=e.pagination.el;w=pe(w);let S="";if(f.type==="bullets"){let E=e.params.loop?Math.ceil(g/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&E>g&&(E=g);for(let P=0;P<E;P+=1)f.renderBullet?S+=f.renderBullet.call(e,P,f.bulletClass):S+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?S=f.renderFraction.call(e,f.currentClass,f.totalClass):S=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?S=f.renderProgressbar.call(e,f.progressbarFillClass):S=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],w.forEach(E=>{f.type!=="custom"&&(E.innerHTML=S||""),f.type==="bullets"&&e.pagination.bullets.push(...E.querySelectorAll($e(f.bulletClass)))}),f.type!=="custom"&&i("paginationRender",w[0])}function b(){e.params.pagination=Iu(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let g;typeof f.el=="string"&&e.isElement&&(g=e.el.querySelector(f.el)),!g&&typeof f.el=="string"&&(g=[...document.querySelectorAll(f.el)]),g||(g=f.el),!(!g||g.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(g)&&g.length>1&&(g=[...e.el.querySelectorAll(f.el)],g.length>1&&(g=g.filter(w=>os(w,".swiper")[0]===e.el)[0])),Array.isArray(g)&&g.length===1&&(g=g[0]),Object.assign(e.pagination,{el:g}),g=pe(g),g.forEach(w=>{f.type==="bullets"&&f.clickable&&w.classList.add(...(f.clickableClass||"").split(" ")),w.classList.add(f.modifierClass+f.type),w.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(w.classList.add(`${f.modifierClass}${f.type}-dynamic`),a=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&w.classList.add(f.progressbarOppositeClass),f.clickable&&w.addEventListener("click",c),e.enabled||w.classList.add(f.lockClass)}))}function h(){const f=e.params.pagination;if(l())return;let g=e.pagination.el;g&&(g=pe(g),g.forEach(w=>{w.classList.remove(f.hiddenClass),w.classList.remove(f.modifierClass+f.type),w.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(w.classList.remove(...(f.clickableClass||"").split(" ")),w.removeEventListener("click",c))})),e.pagination.bullets&&e.pagination.bullets.forEach(w=>w.classList.remove(...f.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:g}=e.pagination;g=pe(g),g.forEach(w=>{w.classList.remove(f.horizontalClass,f.verticalClass),w.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),r("init",()=>{e.params.pagination.enabled===!1?y():(b(),p(),d())}),r("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),r("snapIndexChange",()=>{d()}),r("snapGridLengthChange",()=>{p(),d()}),r("destroy",()=>{h()}),r("enable disable",()=>{let{el:f}=e.pagination;f&&(f=pe(f),f.forEach(g=>g.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),r("lock unlock",()=>{d()}),r("click",(f,g)=>{const w=g.target,S=pe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!w.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&w===e.navigation.nextEl||e.navigation.prevEl&&w===e.navigation.prevEl))return;const E=S[0].classList.contains(e.params.pagination.hiddenClass);i(E===!0?"paginationShow":"paginationHide"),S.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const m=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=pe(f),f.forEach(g=>g.classList.remove(e.params.pagination.paginationDisabledClass))),b(),p(),d()},y=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=pe(f),f.forEach(g=>g.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:m,disable:y,render:p,update:d,init:b,destroy:h})}function $n(){return $n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$n.apply(this,arguments)}var Ru=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,$u=ai(function(t){return Ru.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function ju(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Nu(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var zu=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Nu(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=ju(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Y="-ms-",Pt="-moz-",$="-webkit-",vs="comm",ir="rule",sr="decl",Hu="@import",xs="@keyframes",Du="@layer",Bu=Math.abs,zt=String.fromCharCode,Fu=Object.assign;function Vu(t,e){return q(t,0)^45?(((e<<2^q(t,0))<<2^q(t,1))<<2^q(t,2))<<2^q(t,3):0}function ys(t){return t.trim()}function Wu(t,e){return(t=e.exec(t))?t[0]:t}function j(t,e,n){return t.replace(e,n)}function jn(t,e){return t.indexOf(e)}function q(t,e){return t.charCodeAt(e)|0}function He(t,e,n){return t.slice(e,n)}function se(t){return t.length}function or(t){return t.length}function ct(t,e){return e.push(t),t}function Gu(t,e){return t.map(e).join("")}var Ht=1,ke=1,Ss=0,K=0,V=0,Ie="";function Dt(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Ht,column:ke,length:o,return:""}}function je(t,e){return Fu(Dt("",null,null,"",null,null,0),t,{length:-t.length},e)}function Uu(){return V}function qu(){return V=K>0?q(Ie,--K):0,ke--,V===10&&(ke=1,Ht--),V}function J(){return V=K<Ss?q(Ie,K++):0,ke++,V===10&&(ke=1,Ht++),V}function de(){return q(Ie,K)}function mt(){return K}function Ze(t,e){return He(Ie,t,e)}function De(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Es(t){return Ht=ke=1,Ss=se(Ie=t),K=0,[]}function Ts(t){return Ie="",t}function gt(t){return ys(Ze(K-1,Nn(t===91?t+2:t===40?t+1:t)))}function Yu(t){for(;(V=de())&&V<33;)J();return De(t)>2||De(V)>3?"":" "}function Xu(t,e){for(;--e&&J()&&!(V<48||V>102||V>57&&V<65||V>70&&V<97););return Ze(t,mt()+(e<6&&de()==32&&J()==32))}function Nn(t){for(;J();)switch(V){case t:return K;case 34:case 39:t!==34&&t!==39&&Nn(V);break;case 40:t===41&&Nn(t);break;case 92:J();break}return K}function Ku(t,e){for(;J()&&t+V!==47+10;)if(t+V===42+42&&de()===47)break;return"/*"+Ze(e,K-1)+"*"+zt(t===47?t:J())}function Qu(t){for(;!De(de());)J();return Ze(t,K)}function Ju(t){return Ts(bt("",null,null,null,[""],t=Es(t),0,[0],t))}function bt(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,p=0,b=0,h=0,m=1,y=1,f=1,g=0,w="",S=i,E=s,P=r,L=w;y;)switch(h=g,g=J()){case 40:if(h!=108&&q(L,d-1)==58){jn(L+=j(gt(g),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:L+=gt(g);break;case 9:case 10:case 13:case 32:L+=Yu(h);break;case 92:L+=Xu(mt()-1,7);continue;case 47:switch(de()){case 42:case 47:ct(Zu(Ku(J(),mt()),e,n),l);break;default:L+="/"}break;case 123*m:a[u++]=se(L)*f;case 125*m:case 59:case 0:switch(g){case 0:case 125:y=0;case 59+c:f==-1&&(L=j(L,/\f/g,"")),b>0&&se(L)-d&&ct(b>32?Jr(L+";",r,n,d-1):Jr(j(L," ","")+";",r,n,d-2),l);break;case 59:L+=";";default:if(ct(P=Qr(L,e,n,u,c,i,a,w,S=[],E=[],d),s),g===123)if(c===0)bt(L,e,P,P,S,s,d,a,E);else switch(p===99&&q(L,3)===110?100:p){case 100:case 108:case 109:case 115:bt(t,P,P,r&&ct(Qr(t,P,P,0,0,i,a,w,i,S=[],d),E),i,E,d,a,r?S:E);break;default:bt(L,P,P,P,[""],E,0,a,E)}}u=c=b=0,m=f=1,w=L="",d=o;break;case 58:d=1+se(L),b=h;default:if(m<1){if(g==123)--m;else if(g==125&&m++==0&&qu()==125)continue}switch(L+=zt(g),g*m){case 38:f=c>0?1:(L+="\f",-1);break;case 44:a[u++]=(se(L)-1)*f,f=1;break;case 64:de()===45&&(L+=gt(J())),p=de(),c=d=se(w=L+=Qu(mt())),g++;break;case 45:h===45&&se(L)==2&&(m=0)}}return s}function Qr(t,e,n,r,i,s,o,a,l,u,c){for(var d=i-1,p=i===0?s:[""],b=or(p),h=0,m=0,y=0;h<r;++h)for(var f=0,g=He(t,d+1,d=Bu(m=o[h])),w=t;f<b;++f)(w=ys(m>0?p[f]+" "+g:j(g,/&\f/g,p[f])))&&(l[y++]=w);return Dt(t,e,n,i===0?ir:a,l,u,c)}function Zu(t,e,n){return Dt(t,e,n,vs,zt(Uu()),He(t,2,-2),0)}function Jr(t,e,n,r){return Dt(t,e,n,sr,He(t,0,r),He(t,r+1,-1),r)}function Oe(t,e){for(var n="",r=or(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function ef(t,e,n,r){switch(t.type){case Du:if(t.children.length)break;case Hu:case sr:return t.return=t.return||t.value;case vs:return"";case xs:return t.return=t.value+"{"+Oe(t.children,r)+"}";case ir:t.value=t.props.join(",")}return se(n=Oe(t.children,r))?t.return=t.value+"{"+n+"}":""}function tf(t){var e=or(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function nf(t){return function(e){e.root||(e=e.return)&&t(e)}}var rf=function(e,n,r){for(var i=0,s=0;i=s,s=de(),i===38&&s===12&&(n[r]=1),!De(s);)J();return Ze(e,K)},sf=function(e,n){var r=-1,i=44;do switch(De(i)){case 0:i===38&&de()===12&&(n[r]=1),e[r]+=rf(K-1,n,r);break;case 2:e[r]+=gt(i);break;case 4:if(i===44){e[++r]=de()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=zt(i)}while(i=J());return e},of=function(e,n){return Ts(sf(Es(e),n))},Zr=new WeakMap,af=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Zr.get(r))&&!i){Zr.set(e,!0);for(var s=[],o=of(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},lf=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function Ps(t,e){switch(Vu(t,e)){case 5103:return $+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return $+t+Pt+t+Y+t+t;case 6828:case 4268:return $+t+Y+t+t;case 6165:return $+t+Y+"flex-"+t+t;case 5187:return $+t+j(t,/(\w+).+(:[^]+)/,$+"box-$1$2"+Y+"flex-$1$2")+t;case 5443:return $+t+Y+"flex-item-"+j(t,/flex-|-self/,"")+t;case 4675:return $+t+Y+"flex-line-pack"+j(t,/align-content|flex-|-self/,"")+t;case 5548:return $+t+Y+j(t,"shrink","negative")+t;case 5292:return $+t+Y+j(t,"basis","preferred-size")+t;case 6060:return $+"box-"+j(t,"-grow","")+$+t+Y+j(t,"grow","positive")+t;case 4554:return $+j(t,/([^-])(transform)/g,"$1"+$+"$2")+t;case 6187:return j(j(j(t,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),t,"")+t;case 5495:case 3959:return j(t,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return j(j(t,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+t+t;case 4095:case 3583:case 4068:case 2532:return j(t,/(.+)-inline(.+)/,$+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(t)-1-e>6)switch(q(t,e+1)){case 109:if(q(t,e+4)!==45)break;case 102:return j(t,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Pt+(q(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~jn(t,"stretch")?Ps(j(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(q(t,e+1)!==115)break;case 6444:switch(q(t,se(t)-3-(~jn(t,"!important")&&10))){case 107:return j(t,":",":"+$)+t;case 101:return j(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(q(t,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+Y+"$2box$3")+t}break;case 5936:switch(q(t,e+11)){case 114:return $+t+Y+j(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return $+t+Y+j(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return $+t+Y+j(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return $+t+Y+t+t}return t}var cf=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case sr:e.return=Ps(e.value,e.length);break;case xs:return Oe([je(e,{value:j(e.value,"@","@"+$)})],i);case ir:if(e.length)return Gu(e.props,function(s){switch(Wu(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Oe([je(e,{props:[j(s,/:(read-\w+)/,":"+Pt+"$1")]})],i);case"::placeholder":return Oe([je(e,{props:[j(s,/:(plac\w+)/,":"+$+"input-$1")]}),je(e,{props:[j(s,/:(plac\w+)/,":"+Pt+"$1")]}),je(e,{props:[j(s,/:(plac\w+)/,Y+"input-$1")]})],i)}return""})}},df=[cf],uf=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var y=m.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=e.stylisPlugins||df,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var y=m.getAttribute("data-emotion").split(" "),f=1;f<y.length;f++)s[y[f]]=!0;a.push(m)});var l,u=[af,lf];{var c,d=[ef,nf(function(m){c.insert(m)})],p=tf(u.concat(i,d)),b=function(y){return Oe(Ju(y),p)};l=function(y,f,g,w){c=g,b(y?y+"{"+f.styles+"}":f.styles),w&&(h.inserted[f.name]=!0)}}var h={key:n,sheet:new zu({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return h.sheet.hydrate(a),h},ff=!0;function pf(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var _s=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||ff===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},hf=function(e,n,r){_s(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function mf(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var gf={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bf=/[A-Z]|^ms/g,wf=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Os=function(e){return e.charCodeAt(1)===45},ei=function(e){return e!=null&&typeof e!="boolean"},En=ai(function(t){return Os(t)?t:t.replace(bf,"-$&").toLowerCase()}),ti=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(wf,function(r,i,s){return oe={name:i,styles:s,next:oe},i})}return gf[e]!==1&&!Os(e)&&typeof n=="number"&&n!==0?n+"px":n};function Be(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return oe={name:n.name,styles:n.styles,next:oe},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)oe={name:r.name,styles:r.styles,next:oe},r=r.next;var i=n.styles+";";return i}return vf(t,e,n)}case"function":{if(t!==void 0){var s=oe,o=n(t);return oe=s,Be(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function vf(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Be(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":ei(o)&&(r+=En(s)+":"+ti(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)ei(o[a])&&(r+=En(s)+":"+ti(s,o[a])+";");else{var l=Be(t,e,o);switch(s){case"animation":case"animationName":{r+=En(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var ni=/label:\s*([^\s;\n{]+)\s*(;|$)/g,oe,xf=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";oe=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=Be(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=Be(r,n,e[a]),i&&(s+=o[a]);ni.lastIndex=0;for(var l="",u;(u=ni.exec(s))!==null;)l+="-"+u[1];var c=mf(s)+l;return{name:c,styles:s,next:oe}},yf=function(e){return e()},Sf=cr["useInsertionEffect"]?cr["useInsertionEffect"]:!1,Ef=Sf||yf,Cs=_.createContext(typeof HTMLElement<"u"?uf({key:"css"}):null);Cs.Provider;var Tf=function(e){return _.forwardRef(function(n,r){var i=_.useContext(Cs);return e(n,i,r)})},Pf=_.createContext({}),_f=$u,Of=function(e){return e!=="theme"},ri=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?_f:Of},ii=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},Cf=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return _s(n,r,i),Ef(function(){return hf(n,r,i)}),null},kf=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=ii(e,n,r),l=a||ri(i),u=!l("as");return function(){var c=arguments,d=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&d.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var p=c.length,b=1;b<p;b++)d.push(c[b],c[0][b])}var h=Tf(function(m,y,f){var g=u&&m.as||i,w="",S=[],E=m;if(m.theme==null){E={};for(var P in m)E[P]=m[P];E.theme=_.useContext(Pf)}typeof m.className=="string"?w=pf(y.registered,S,m.className):m.className!=null&&(w=m.className+" ");var L=xf(d.concat(S),y.registered,E);w+=y.key+"-"+L.name,o!==void 0&&(w+=" "+o);var k=u&&a===void 0?ri(g):l,O={};for(var T in m)u&&T==="as"||k(T)&&(O[T]=m[T]);return O.className=w,O.ref=f,_.createElement(_.Fragment,null,_.createElement(Cf,{cache:y,serialized:L,isStringTag:typeof g=="string"}),_.createElement(g,O))});return h.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",h.defaultProps=e.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=a,Object.defineProperty(h,"toString",{value:function(){return"."+o}}),h.withComponent=function(m,y){return t(m,$n({},n,y,{shouldForwardProp:ii(h,y,!0)})).apply(void 0,d)},h}},Mf=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Z=kf.bind();Mf.forEach(function(t){Z[t]=Z(t)});const Lf=Z.section`
  width: 100%;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    margin-bottom: 78px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 150px;
  }
`,ar=Z(qn)`
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
`,Af=Z(ar)`
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
`,If=()=>v.jsxs(Af,{children:[v.jsx("p",{className:"about-project",children:"Про проєкт"}),v.jsxs("h2",{className:"about-title",children:[v.jsx("span",{className:"accent",children:"МІСТОХАБ"})," це"]}),v.jsxs(Nt,{wrapperTag:"ul",wrapperClass:"about-list",className:"swiper",resizeObserver:!0,onResize:t=>{t.slideTo(0),t.update()},breakpoints:{1440:{slidesPerView:3,initialSlide:0,slideTo:0,enabled:!0,spaceBetween:0,grid:{row:1}},768:{slidesPerView:2,initialSlide:0,slideTo:0,enabled:!0,spaceBetween:"16px",allowTouchMove:!0,grid:{row:1},pagination:{enabled:!0,clickable:!0}}},slidesPerView:1,allowTouchMove:!1,grid:{rows:3},initialSlide:0,enabled:!0,pagination:{enabled:!1,clickable:!0},modules:[ws],children:[v.jsxs(ae,{tag:"li",className:"about-list-item",children:[v.jsx("div",{className:"about-list-item-number",children:"1"}),v.jsx("h3",{className:"about-list-item-title",children:"Кафе"}),v.jsx("p",{className:"about-list-item-text",children:"Стане місцем якісного відпочинку, знайомств та генерування ідей."})]}),v.jsxs(ae,{tag:"li",className:"about-list-item",children:[v.jsx("div",{className:"about-list-item-number",children:"2"}),v.jsx("h3",{className:"about-list-item-title",children:"Івент-простір"}),v.jsx("p",{className:"about-list-item-text",children:"Розвиватиме культурне життя Полтави та стане місцем для самореалізації."})]}),v.jsxs(ae,{tag:"li",className:"about-list-item",children:[v.jsx("div",{className:"about-list-item-number",children:"3"}),v.jsx("h3",{className:"about-list-item-title",children:"Крамниця МІСТОШОП"}),v.jsx("p",{className:"about-list-item-text",children:"Продаватиме унікальні сучасні сувеніри, що відображають дух міста та його культурну спадщину."})]})]}),v.jsxs("p",{className:"about-info",children:["80% прибутку ",v.jsx("span",{className:"accent",children:"МІСТОХАБ"})," буде спрямовано на фінансування соціальних проєктів містян"]})]}),Rf="/MistoHub/assets/howItWorkBg-220ae44c.svg",$f="/MistoHub/assets/howItWorkBg-tablet-6f286e72.svg",jf="/MistoHub/assets/howItWorkBg-desktop-c7cada1c.svg",Nf=Z.div`
  width: 100%;

  background-image: url(${Rf});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 60% center;

  @media (min-width: 768px) {
    background-image: url(${$f});
    background-position: 60% center;
  }

  @media (min-width: 1440px) {
    background-image: url(${jf});
    background-position: 67% center;
  }
`,zf=Z(ar)`
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
`,Hf=()=>{const t=_.useRef(null),{openModal:e}=zi();return _.useEffect(()=>{const n=()=>{const r=window.innerWidth;let i=0;r>=1440?i=(r-1440)/2-335:r>=768&&r<1440?i=(r-768)/2-393:i=(r-375)/2-194,t.current.style.backgroundPosition=`left ${i}px center`};return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)}),v.jsx(Nf,{ref:t,children:v.jsx(zf,{children:v.jsxs("div",{className:"container-inner",children:[v.jsx("h2",{className:"how-it-work-title",children:"Як це працює?"}),v.jsxs(Nt,{wrapperTag:"ul",wrapperClass:"how-it-work-list",className:"swiper",resizeObserver:!0,onResize:n=>{n.slideTo(0),n.update()},breakpoints:{768:{slidesPerView:5,enabled:!0,initialSlide:0,slideTo:0,pagination:{enabled:!1},spaceBetween:0}},slidesPerView:1,grid:{row:1},enabled:!0,initialSlide:0,pagination:{enabled:!0,clickable:!0},spaceBetween:16,modules:[ws],children:[v.jsxs(ae,{tag:"li",className:"how-it-work-item",children:[v.jsx("div",{className:"how-it-work-number",children:"1"}),v.jsxs("p",{className:"how-it-work-text",children:["Люди і компанії вкладають кошти у відновлення історичної будівлі"," ",v.jsx("span",{className:"accent",children:"МІСТОХАБ"})]})]}),v.jsxs(ae,{tag:"li",className:"how-it-work-item",children:[v.jsx("div",{className:"how-it-work-number",children:"2"}),v.jsxs("p",{className:"how-it-work-text",children:["У відновленій будівлі відкривається МІСТОХАБ, в якому функціонують:"," ",v.jsx("span",{className:"accent",children:"Кафе, Крамниця локальних виробників Містошоп, Івент-простір"})," ","та генерують прибуток"]})]}),v.jsxs(ae,{tag:"li",className:"how-it-work-item",children:[v.jsx("div",{className:"how-it-work-number",children:"3"}),v.jsxs("p",{className:"how-it-work-text",children:["80% прибутку передається у Фонд міських ініціатив"," ",v.jsx("span",{className:"accent",children:"МІСТОХАБ"})]})]}),v.jsxs(ae,{tag:"li",className:"how-it-work-item",children:[v.jsx("div",{className:"how-it-work-number",children:"4"}),v.jsxs("p",{className:"how-it-work-text",children:[v.jsx("span",{className:"accent",children:"Фонд міських ініціатив"})," оголошує конкурс проєктів містян, a імпакт-інвестори обирають найкращі ідеї"]})]}),v.jsxs(ae,{tag:"li",className:"how-it-work-item",children:[v.jsx("div",{className:"how-it-work-number",children:"5"}),v.jsxs("p",{className:"how-it-work-text",children:[v.jsx("span",{className:"accent",children:"Фонд міських ініціатив"})," фінансує проєкти переможців"]})]})]}),v.jsx("button",{className:"how-it-work-btn",type:"button",onClick:()=>e("join_modal"),children:"Приєднатися"})]})})})},Df="/MistoHub/assets/building1-7921ea51.svg",Bf="/MistoHub/assets/building2-f1c01339.svg",Ff="/MistoHub/assets/building3-5c8bd933.svg",Vf="/MistoHub/assets/building4-204b02df.svg",Wf=Z(ar)`
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
`,Gf=Z(Bt)`
  background-image: url(${Df});
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
`,Uf=Z(Bt)`
  background-image: url(${Bf});
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
`,qf=Z(Bt)`
  background-image: url(${Ff});
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
`,Yf=Z(Bt)`
  background-image: url(${Vf});
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
`,si="/MistoHub/assets/building-0fd1d2de.jpg",Xf="/MistoHub/assets/building@2x-6f4bbcf0.jpg",Kf="/MistoHub/assets/building-tablet-fcd0323f.jpg",Qf="/MistoHub/assets/building-tablet@2x-4bed8edc.jpg",Jf="/MistoHub/assets/building-mobile-f96d3050.jpg",Zf="/MistoHub/assets/building-mobile@2x-2ecbf732.jpg",ep="/MistoHub/assets/building-546dad3d.webp",tp="/MistoHub/assets/building@2x-cdd55e18.webp",np="/MistoHub/assets/building-tablet-6b49ad77.webp",rp="/MistoHub/assets/building-tablet@2x-e385e999.webp",ip="/MistoHub/assets/building-mobile-24746013.webp",sp="/MistoHub/assets/building-mobile@2x-ac0864e6.webp",op=()=>v.jsxs(Wf,{children:[v.jsxs("h2",{className:"building-title",children:["Будівля ",v.jsx("span",{className:"accent",children:"МІСТОХАБ"})," це історична спадщина Полтави"]}),v.jsx("p",{className:"building-text",children:"В 1909 році на Спаській, 10 розташовувався перший у Полтаві пивоварний завод та пивниця «Притулок друзів»"}),v.jsxs("div",{className:"building-img-container",children:[v.jsxs("picture",{children:[v.jsx("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:`${ip} 1x, ${sp} 2x`,width:"343",height:"348"}),v.jsx("source",{media:"(max-width: 767px)",srcSet:`${Jf} 1x, ${Zf} 2x`,width:"343",height:"348"}),v.jsx("source",{type:"image/webp",media:"(max-width: 1439px)",srcSet:`${np} 1x, ${rp} 2x`,width:"704",height:"534"}),v.jsx("source",{media:"(max-width: 1439px)",srcSet:`${Kf} 1x, ${Qf} 2x`,width:"704",height:"534"}),v.jsx("source",{type:"image/webp",srcSet:`${ep} 1x, ${tp} 2x`,width:"1200",height:"753"}),v.jsx("img",{className:"building-img",srcSet:`${si} 1x, ${Xf} 2x`,src:si,alt:"Будівля МІСТОХАБ",width:"1200",height:"753"})]}),v.jsx(Gf,{}),v.jsx(Uf,{}),v.jsx(qf,{}),v.jsx(Yf,{})]})]}),ap=()=>v.jsxs(Lf,{id:"about",children:[v.jsx(If,{}),v.jsx(Hf,{}),v.jsx(op,{})]}),lp=()=>{const t=Is();_.useEffect(()=>{const{hash:e}=t;if(e){const n=e.substring(1),r=document.getElementById(n);r&&window.scrollTo({top:r.offsetTop-100,behavior:"smooth"})}},[t])},cp=({setActiveSection:t})=>{_.useEffect(()=>{const e=new URL("/MistoHub",window.location.origin),n=()=>{document.querySelectorAll("section").forEach(i=>{const o=document.getElementById("about").offsetTop;window.scrollY<o-110&&t("main");const a=i.offsetTop,l=i.offsetHeight,u=i.getAttribute("id");if(window.scrollY>=a-100&&window.scrollY<a+l-100){if(t(u),`#${u}`===window.location.hash||!u&&!window.location.hash)return;let c=new URL(window.location.pathname,e).toString();u!==null&&(c=new URL(`#${u}`,e).toString()),window.history.pushState(null,"",c)}})};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[t])};function Se(t){const e="requestIdleCallback"in window?n=>window.requestIdleCallback(n,{timeout:100}):n=>setTimeout(n,0);return _.lazy(()=>new Promise(n=>e(n)).then(t))}const dp=Se(()=>ye(()=>import("./CoFounders-30cace76.js"),["assets/CoFounders-30cace76.js","assets/index-66592a1d.js","assets/index-a6b3472e.css"])),up=Se(()=>ye(()=>import("./JoinUs-489aaff0.js"),["assets/JoinUs-489aaff0.js","assets/index-66592a1d.js","assets/index-a6b3472e.css","assets/index.browser-342e672c.js"])),fp=Se(()=>ye(()=>import("./Visualization-bc93d16d.js").then(t=>t.V),["assets/Visualization-bc93d16d.js","assets/index-66592a1d.js","assets/index-a6b3472e.css","assets/index.browser-342e672c.js"])),pp=Se(()=>ye(()=>import("./AccumulatedMoney-7d87698e.js"),["assets/AccumulatedMoney-7d87698e.js","assets/index-66592a1d.js","assets/index-a6b3472e.css","assets/hoist-non-react-statics.cjs-3f8ebaa8.js","assets/index.browser-342e672c.js"])),hp=Se(()=>ye(()=>import("./InvestorsBlock-a3eea0b3.js"),["assets/InvestorsBlock-a3eea0b3.js","assets/index-66592a1d.js","assets/index-a6b3472e.css","assets/index-bf4645ca.js","assets/InvestorsBlock.styled-ecf5027a.js"])),mp=Se(()=>ye(()=>import("./PartnersBlock-f73c88a6.js"),["assets/PartnersBlock-f73c88a6.js","assets/index-66592a1d.js","assets/index-a6b3472e.css","assets/InvestorsBlock.styled-ecf5027a.js"])),gp=Se(()=>ye(()=>import("./Footer-0baeb5ea.js"),["assets/Footer-0baeb5ea.js","assets/index-66592a1d.js","assets/index-a6b3472e.css"])),bp=Se(()=>ye(()=>import("./ModalsManager-9dccb8a2.js"),["assets/ModalsManager-9dccb8a2.js","assets/index-66592a1d.js","assets/index-a6b3472e.css","assets/index-bf4645ca.js","assets/hoist-non-react-statics.cjs-3f8ebaa8.js"])),wp=()=>{const[t,e]=_.useState(null),[n,r]=_.useState("main"),[i,s]=_.useState([]),[o,a]=_.useState([]),[l,u]=_.useState([]);return _.useEffect(()=>{async function c(){try{const[d,p,b]=await Promise.all([ea(),ta(),na()]);s(d),a(p),u(b)}catch(d){console.error("Error fetching data:",d)}}c()},[]),_.useEffect(()=>{(async()=>{try{const d=await Zo();e(d)}catch(d){console.error("Error fetching data:",d)}})()},[]),v.jsxs(v.Fragment,{children:[v.jsx(Ba,{}),v.jsxs("main",{children:[v.jsx(Au,{}),v.jsx(ap,{}),v.jsxs(_.Suspense,{fallback:null,children:[v.jsx(fp,{}),v.jsx(pp,{goalData:t}),v.jsx(hp,{people:o,companies:i}),v.jsx(mp,{companies:l}),v.jsx(up,{people:o,companies:i,goalData:t}),v.jsx(dp,{}),v.jsx(Fc,{}),v.jsx(lp,{}),v.jsx(cp,{setActiveSection:r})]})]}),v.jsxs(v.Fragment,{children:[v.jsx(_.Suspense,{fallback:null,children:v.jsx(gp,{})}),v.jsx(_.Suspense,{fallback:null,children:v.jsx(bp,{activeSection:n})})]})]})},Ep=Object.freeze(Object.defineProperty({__proto__:null,default:wp},Symbol.toStringTag,{value:"Module"}));export{qn as C,Ep as H,me as I,Sp as M,$a as S,Ni as a,Da as b,Iu as c,Nt as d,ae as e,Ge as f,pe as m,Z as n,xp as p,xf as s,zi as u};
