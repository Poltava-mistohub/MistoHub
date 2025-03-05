import{g as Yn,r as j,u as R,j as o,f as $i,L as Kn}from"./index-23659ed8.js";import{M as Ge,C as Rt}from"./index-1274aa25.js";import{m as _,c as er,I as G,a as He,u as qn,p as tr,M as nr,b as ir,d as rr,e as ar}from"./HomePage-602f3375.js";function sr(e){let{swiper:t,extendParams:n,on:i,emit:r}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function a(d){let g;return d&&typeof d=="string"&&t.isElement&&(g=t.el.querySelector(d),g)?g:(d&&(typeof d=="string"&&(g=[...document.querySelectorAll(d)]),t.params.uniqueNavElements&&typeof d=="string"&&g&&g.length>1&&t.el.querySelectorAll(d).length===1?g=t.el.querySelector(d):g&&g.length===1&&(g=g[0])),d&&!g?d:g)}function s(d,g){const v=t.params.navigation;d=_(d),d.forEach(E=>{E&&(E.classList[g?"add":"remove"](...v.disabledClass.split(" ")),E.tagName==="BUTTON"&&(E.disabled=g),t.params.watchOverflow&&t.enabled&&E.classList[t.isLocked?"add":"remove"](v.lockClass))})}function u(){const{nextEl:d,prevEl:g}=t.navigation;if(t.params.loop){s(g,!1),s(d,!1);return}s(g,t.isBeginning&&!t.params.rewind),s(d,t.isEnd&&!t.params.rewind)}function c(d){d.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),r("navigationPrev"))}function p(d){d.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),r("navigationNext"))}function y(){const d=t.params.navigation;if(t.params.navigation=er(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(d.nextEl||d.prevEl))return;let g=a(d.nextEl),v=a(d.prevEl);Object.assign(t.navigation,{nextEl:g,prevEl:v}),g=_(g),v=_(v);const E=(A,J)=>{A&&A.addEventListener("click",J==="next"?p:c),!t.enabled&&A&&A.classList.add(...d.lockClass.split(" "))};g.forEach(A=>E(A,"next")),v.forEach(A=>E(A,"prev"))}function b(){let{nextEl:d,prevEl:g}=t.navigation;d=_(d),g=_(g);const v=(E,A)=>{E.removeEventListener("click",A==="next"?p:c),E.classList.remove(...t.params.navigation.disabledClass.split(" "))};d.forEach(E=>v(E,"next")),g.forEach(E=>v(E,"prev"))}i("init",()=>{t.params.navigation.enabled===!1?f():(y(),u())}),i("toEdge fromEdge lock unlock",()=>{u()}),i("destroy",()=>{b()}),i("enable disable",()=>{let{nextEl:d,prevEl:g}=t.navigation;if(d=_(d),g=_(g),t.enabled){u();return}[...d,...g].filter(v=>!!v).forEach(v=>v.classList.add(t.params.navigation.lockClass))}),i("click",(d,g)=>{let{nextEl:v,prevEl:E}=t.navigation;v=_(v),E=_(E);const A=g.target;if(t.params.navigation.hideOnClick&&!E.includes(A)&&!v.includes(A)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===A||t.pagination.el.contains(A)))return;let J;v.length?J=v[0].classList.contains(t.params.navigation.hiddenClass):E.length&&(J=E[0].classList.contains(t.params.navigation.hiddenClass)),r(J===!0?"navigationShow":"navigationHide"),[...v,...E].filter(K=>!!K).forEach(K=>K.classList.toggle(t.params.navigation.hiddenClass))}});const h=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),y(),u()},f=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),b()};Object.assign(t.navigation,{enable:h,disable:f,update:u,init:y,destroy:b})}var Xn={exports:{}},O={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=typeof Symbol=="function"&&Symbol.for,Pt=P?Symbol.for("react.element"):60103,Lt=P?Symbol.for("react.portal"):60106,Ze=P?Symbol.for("react.fragment"):60107,Ye=P?Symbol.for("react.strict_mode"):60108,Ke=P?Symbol.for("react.profiler"):60114,qe=P?Symbol.for("react.provider"):60109,Xe=P?Symbol.for("react.context"):60110,zt=P?Symbol.for("react.async_mode"):60111,_e=P?Symbol.for("react.concurrent_mode"):60111,$e=P?Symbol.for("react.forward_ref"):60112,et=P?Symbol.for("react.suspense"):60113,or=P?Symbol.for("react.suspense_list"):60120,tt=P?Symbol.for("react.memo"):60115,nt=P?Symbol.for("react.lazy"):60116,lr=P?Symbol.for("react.block"):60121,ur=P?Symbol.for("react.fundamental"):60117,cr=P?Symbol.for("react.responder"):60118,dr=P?Symbol.for("react.scope"):60119;function V(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Pt:switch(e=e.type,e){case zt:case _e:case Ze:case Ke:case Ye:case et:return e;default:switch(e=e&&e.$$typeof,e){case Xe:case $e:case nt:case tt:case qe:return e;default:return t}}case Lt:return t}}}function _n(e){return V(e)===_e}O.AsyncMode=zt;O.ConcurrentMode=_e;O.ContextConsumer=Xe;O.ContextProvider=qe;O.Element=Pt;O.ForwardRef=$e;O.Fragment=Ze;O.Lazy=nt;O.Memo=tt;O.Portal=Lt;O.Profiler=Ke;O.StrictMode=Ye;O.Suspense=et;O.isAsyncMode=function(e){return _n(e)||V(e)===zt};O.isConcurrentMode=_n;O.isContextConsumer=function(e){return V(e)===Xe};O.isContextProvider=function(e){return V(e)===qe};O.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pt};O.isForwardRef=function(e){return V(e)===$e};O.isFragment=function(e){return V(e)===Ze};O.isLazy=function(e){return V(e)===nt};O.isMemo=function(e){return V(e)===tt};O.isPortal=function(e){return V(e)===Lt};O.isProfiler=function(e){return V(e)===Ke};O.isStrictMode=function(e){return V(e)===Ye};O.isSuspense=function(e){return V(e)===et};O.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ze||e===_e||e===Ke||e===Ye||e===et||e===or||typeof e=="object"&&e!==null&&(e.$$typeof===nt||e.$$typeof===tt||e.$$typeof===qe||e.$$typeof===Xe||e.$$typeof===$e||e.$$typeof===ur||e.$$typeof===cr||e.$$typeof===dr||e.$$typeof===lr)};O.typeOf=V;Xn.exports=O;var fr=Xn.exports,$n=fr,pr={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ei={};ei[$n.ForwardRef]=pr;ei[$n.Memo]=hr;var mr=function(t){return gr(t)&&!br(t)};function gr(e){return!!e&&typeof e=="object"}function br(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||vr(e)}var xr=typeof Symbol=="function"&&Symbol.for,yr=xr?Symbol.for("react.element"):60103;function vr(e){return e.$$typeof===yr}function wr(e){return Array.isArray(e)?[]:{}}function We(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Fe(wr(e),e,t):e}function jr(e,t,n){return e.concat(t).map(function(i){return We(i,n)})}function Er(e,t,n){var i={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(r){i[r]=We(e[r],n)}),Object.keys(t).forEach(function(r){!n.isMergeableObject(t[r])||!e[r]?i[r]=We(t[r],n):i[r]=Fe(e[r],t[r],n)}),i}function Fe(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||jr,n.isMergeableObject=n.isMergeableObject||mr;var i=Array.isArray(t),r=Array.isArray(e),a=i===r;return a?i?n.arrayMerge(e,t,n):Er(e,t,n):We(t,n)}Fe.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(i,r){return Fe(i,r,n)},{})};var St=Fe,Sr=typeof global=="object"&&global&&global.Object===Object&&global;const ti=Sr;var Ar=typeof self=="object"&&self&&self.Object===Object&&self,Mr=ti||Ar||Function("return this")();const Y=Mr;var Tr=Y.Symbol;const ae=Tr;var ni=Object.prototype,kr=ni.hasOwnProperty,Or=ni.toString,ke=ae?ae.toStringTag:void 0;function Cr(e){var t=kr.call(e,ke),n=e[ke];try{e[ke]=void 0;var i=!0}catch{}var r=Or.call(e);return i&&(t?e[ke]=n:delete e[ke]),r}var Fr=Object.prototype,Ir=Fr.toString;function Nr(e){return Ir.call(e)}var Dr="[object Null]",Rr="[object Undefined]",fn=ae?ae.toStringTag:void 0;function he(e){return e==null?e===void 0?Rr:Dr:fn&&fn in Object(e)?Cr(e):Nr(e)}function ii(e,t){return function(n){return e(t(n))}}var Pr=ii(Object.getPrototypeOf,Object);const Ut=Pr;function me(e){return e!=null&&typeof e=="object"}var Lr="[object Object]",zr=Function.prototype,Ur=Object.prototype,ri=zr.toString,Br=Ur.hasOwnProperty,Vr=ri.call(Object);function pn(e){if(!me(e)||he(e)!=Lr)return!1;var t=Ut(e);if(t===null)return!0;var n=Br.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&ri.call(n)==Vr}function Hr(){this.__data__=[],this.size=0}function ai(e,t){return e===t||e!==e&&t!==t}function it(e,t){for(var n=e.length;n--;)if(ai(e[n][0],t))return n;return-1}var Wr=Array.prototype,Jr=Wr.splice;function Qr(e){var t=this.__data__,n=it(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():Jr.call(t,n,1),--this.size,!0}function Gr(e){var t=this.__data__,n=it(t,e);return n<0?void 0:t[n][1]}function Zr(e){return it(this.__data__,e)>-1}function Yr(e,t){var n=this.__data__,i=it(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}function ee(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ee.prototype.clear=Hr;ee.prototype.delete=Qr;ee.prototype.get=Gr;ee.prototype.has=Zr;ee.prototype.set=Yr;function Kr(){this.__data__=new ee,this.size=0}function qr(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Xr(e){return this.__data__.get(e)}function _r(e){return this.__data__.has(e)}function De(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var $r="[object AsyncFunction]",ea="[object Function]",ta="[object GeneratorFunction]",na="[object Proxy]";function si(e){if(!De(e))return!1;var t=he(e);return t==ea||t==ta||t==$r||t==na}var ia=Y["__core-js_shared__"];const xt=ia;var hn=function(){var e=/[^.]+$/.exec(xt&&xt.keys&&xt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function ra(e){return!!hn&&hn in e}var aa=Function.prototype,sa=aa.toString;function ge(e){if(e!=null){try{return sa.call(e)}catch{}try{return e+""}catch{}}return""}var oa=/[\\^$.*+?()[\]{}|]/g,la=/^\[object .+?Constructor\]$/,ua=Function.prototype,ca=Object.prototype,da=ua.toString,fa=ca.hasOwnProperty,pa=RegExp("^"+da.call(fa).replace(oa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ha(e){if(!De(e)||ra(e))return!1;var t=si(e)?pa:la;return t.test(ge(e))}function ma(e,t){return e==null?void 0:e[t]}function be(e,t){var n=ma(e,t);return ha(n)?n:void 0}var ga=be(Y,"Map");const Ie=ga;var ba=be(Object,"create");const Ne=ba;function xa(){this.__data__=Ne?Ne(null):{},this.size=0}function ya(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var va="__lodash_hash_undefined__",wa=Object.prototype,ja=wa.hasOwnProperty;function Ea(e){var t=this.__data__;if(Ne){var n=t[e];return n===va?void 0:n}return ja.call(t,e)?t[e]:void 0}var Sa=Object.prototype,Aa=Sa.hasOwnProperty;function Ma(e){var t=this.__data__;return Ne?t[e]!==void 0:Aa.call(t,e)}var Ta="__lodash_hash_undefined__";function ka(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ne&&t===void 0?Ta:t,this}function pe(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}pe.prototype.clear=xa;pe.prototype.delete=ya;pe.prototype.get=Ea;pe.prototype.has=Ma;pe.prototype.set=ka;function Oa(){this.size=0,this.__data__={hash:new pe,map:new(Ie||ee),string:new pe}}function Ca(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function rt(e,t){var n=e.__data__;return Ca(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Fa(e){var t=rt(this,e).delete(e);return this.size-=t?1:0,t}function Ia(e){return rt(this,e).get(e)}function Na(e){return rt(this,e).has(e)}function Da(e,t){var n=rt(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}function se(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}se.prototype.clear=Oa;se.prototype.delete=Fa;se.prototype.get=Ia;se.prototype.has=Na;se.prototype.set=Da;var Ra=200;function Pa(e,t){var n=this.__data__;if(n instanceof ee){var i=n.__data__;if(!Ie||i.length<Ra-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new se(i)}return n.set(e,t),this.size=n.size,this}function Me(e){var t=this.__data__=new ee(e);this.size=t.size}Me.prototype.clear=Kr;Me.prototype.delete=qr;Me.prototype.get=Xr;Me.prototype.has=_r;Me.prototype.set=Pa;function La(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var za=function(){try{var e=be(Object,"defineProperty");return e({},"",{}),e}catch{}}();const mn=za;function oi(e,t,n){t=="__proto__"&&mn?mn(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Ua=Object.prototype,Ba=Ua.hasOwnProperty;function li(e,t,n){var i=e[t];(!(Ba.call(e,t)&&ai(i,n))||n===void 0&&!(t in e))&&oi(e,t,n)}function at(e,t,n,i){var r=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var u=t[a],c=i?i(n[u],e[u],u,n,e):void 0;c===void 0&&(c=e[u]),r?oi(n,u,c):li(n,u,c)}return n}function Va(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var Ha="[object Arguments]";function gn(e){return me(e)&&he(e)==Ha}var ui=Object.prototype,Wa=ui.hasOwnProperty,Ja=ui.propertyIsEnumerable,Qa=gn(function(){return arguments}())?gn:function(e){return me(e)&&Wa.call(e,"callee")&&!Ja.call(e,"callee")};const Ga=Qa;var Za=Array.isArray;const Re=Za;function Ya(){return!1}var ci=typeof exports=="object"&&exports&&!exports.nodeType&&exports,bn=ci&&typeof module=="object"&&module&&!module.nodeType&&module,Ka=bn&&bn.exports===ci,xn=Ka?Y.Buffer:void 0,qa=xn?xn.isBuffer:void 0,Xa=qa||Ya;const di=Xa;var _a=9007199254740991,$a=/^(?:0|[1-9]\d*)$/;function es(e,t){var n=typeof e;return t=t??_a,!!t&&(n=="number"||n!="symbol"&&$a.test(e))&&e>-1&&e%1==0&&e<t}var ts=9007199254740991;function fi(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ts}var ns="[object Arguments]",is="[object Array]",rs="[object Boolean]",as="[object Date]",ss="[object Error]",os="[object Function]",ls="[object Map]",us="[object Number]",cs="[object Object]",ds="[object RegExp]",fs="[object Set]",ps="[object String]",hs="[object WeakMap]",ms="[object ArrayBuffer]",gs="[object DataView]",bs="[object Float32Array]",xs="[object Float64Array]",ys="[object Int8Array]",vs="[object Int16Array]",ws="[object Int32Array]",js="[object Uint8Array]",Es="[object Uint8ClampedArray]",Ss="[object Uint16Array]",As="[object Uint32Array]",F={};F[bs]=F[xs]=F[ys]=F[vs]=F[ws]=F[js]=F[Es]=F[Ss]=F[As]=!0;F[ns]=F[is]=F[ms]=F[rs]=F[gs]=F[as]=F[ss]=F[os]=F[ls]=F[us]=F[cs]=F[ds]=F[fs]=F[ps]=F[hs]=!1;function Ms(e){return me(e)&&fi(e.length)&&!!F[he(e)]}function Bt(e){return function(t){return e(t)}}var pi=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Oe=pi&&typeof module=="object"&&module&&!module.nodeType&&module,Ts=Oe&&Oe.exports===pi,yt=Ts&&ti.process,ks=function(){try{var e=Oe&&Oe.require&&Oe.require("util").types;return e||yt&&yt.binding&&yt.binding("util")}catch{}}();const Ae=ks;var yn=Ae&&Ae.isTypedArray,Os=yn?Bt(yn):Ms;const Cs=Os;var Fs=Object.prototype,Is=Fs.hasOwnProperty;function hi(e,t){var n=Re(e),i=!n&&Ga(e),r=!n&&!i&&di(e),a=!n&&!i&&!r&&Cs(e),s=n||i||r||a,u=s?Va(e.length,String):[],c=u.length;for(var p in e)(t||Is.call(e,p))&&!(s&&(p=="length"||r&&(p=="offset"||p=="parent")||a&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||es(p,c)))&&u.push(p);return u}var Ns=Object.prototype;function Vt(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||Ns;return e===n}var Ds=ii(Object.keys,Object);const Rs=Ds;var Ps=Object.prototype,Ls=Ps.hasOwnProperty;function zs(e){if(!Vt(e))return Rs(e);var t=[];for(var n in Object(e))Ls.call(e,n)&&n!="constructor"&&t.push(n);return t}function mi(e){return e!=null&&fi(e.length)&&!si(e)}function Ht(e){return mi(e)?hi(e):zs(e)}function Us(e,t){return e&&at(t,Ht(t),e)}function Bs(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var Vs=Object.prototype,Hs=Vs.hasOwnProperty;function Ws(e){if(!De(e))return Bs(e);var t=Vt(e),n=[];for(var i in e)i=="constructor"&&(t||!Hs.call(e,i))||n.push(i);return n}function Wt(e){return mi(e)?hi(e,!0):Ws(e)}function Js(e,t){return e&&at(t,Wt(t),e)}var gi=typeof exports=="object"&&exports&&!exports.nodeType&&exports,vn=gi&&typeof module=="object"&&module&&!module.nodeType&&module,Qs=vn&&vn.exports===gi,wn=Qs?Y.Buffer:void 0,jn=wn?wn.allocUnsafe:void 0;function Gs(e,t){if(t)return e.slice();var n=e.length,i=jn?jn(n):new e.constructor(n);return e.copy(i),i}function bi(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}function Zs(e,t){for(var n=-1,i=e==null?0:e.length,r=0,a=[];++n<i;){var s=e[n];t(s,n,e)&&(a[r++]=s)}return a}function xi(){return[]}var Ys=Object.prototype,Ks=Ys.propertyIsEnumerable,En=Object.getOwnPropertySymbols,qs=En?function(e){return e==null?[]:(e=Object(e),Zs(En(e),function(t){return Ks.call(e,t)}))}:xi;const Jt=qs;function Xs(e,t){return at(e,Jt(e),t)}function yi(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e}var _s=Object.getOwnPropertySymbols,$s=_s?function(e){for(var t=[];e;)yi(t,Jt(e)),e=Ut(e);return t}:xi;const vi=$s;function eo(e,t){return at(e,vi(e),t)}function wi(e,t,n){var i=t(e);return Re(e)?i:yi(i,n(e))}function to(e){return wi(e,Ht,Jt)}function no(e){return wi(e,Wt,vi)}var io=be(Y,"DataView");const At=io;var ro=be(Y,"Promise");const Mt=ro;var ao=be(Y,"Set");const Tt=ao;var so=be(Y,"WeakMap");const kt=so;var Sn="[object Map]",oo="[object Object]",An="[object Promise]",Mn="[object Set]",Tn="[object WeakMap]",kn="[object DataView]",lo=ge(At),uo=ge(Ie),co=ge(Mt),fo=ge(Tt),po=ge(kt),le=he;(At&&le(new At(new ArrayBuffer(1)))!=kn||Ie&&le(new Ie)!=Sn||Mt&&le(Mt.resolve())!=An||Tt&&le(new Tt)!=Mn||kt&&le(new kt)!=Tn)&&(le=function(e){var t=he(e),n=t==oo?e.constructor:void 0,i=n?ge(n):"";if(i)switch(i){case lo:return kn;case uo:return Sn;case co:return An;case fo:return Mn;case po:return Tn}return t});const Qt=le;var ho=Object.prototype,mo=ho.hasOwnProperty;function go(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&mo.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var bo=Y.Uint8Array;const On=bo;function Gt(e){var t=new e.constructor(e.byteLength);return new On(t).set(new On(e)),t}function xo(e,t){var n=t?Gt(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var yo=/\w*$/;function vo(e){var t=new e.constructor(e.source,yo.exec(e));return t.lastIndex=e.lastIndex,t}var Cn=ae?ae.prototype:void 0,Fn=Cn?Cn.valueOf:void 0;function wo(e){return Fn?Object(Fn.call(e)):{}}function jo(e,t){var n=t?Gt(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Eo="[object Boolean]",So="[object Date]",Ao="[object Map]",Mo="[object Number]",To="[object RegExp]",ko="[object Set]",Oo="[object String]",Co="[object Symbol]",Fo="[object ArrayBuffer]",Io="[object DataView]",No="[object Float32Array]",Do="[object Float64Array]",Ro="[object Int8Array]",Po="[object Int16Array]",Lo="[object Int32Array]",zo="[object Uint8Array]",Uo="[object Uint8ClampedArray]",Bo="[object Uint16Array]",Vo="[object Uint32Array]";function Ho(e,t,n){var i=e.constructor;switch(t){case Fo:return Gt(e);case Eo:case So:return new i(+e);case Io:return xo(e,n);case No:case Do:case Ro:case Po:case Lo:case zo:case Uo:case Bo:case Vo:return jo(e,n);case Ao:return new i;case Mo:case Oo:return new i(e);case To:return vo(e);case ko:return new i;case Co:return wo(e)}}var In=Object.create,Wo=function(){function e(){}return function(t){if(!De(t))return{};if(In)return In(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const Jo=Wo;function Qo(e){return typeof e.constructor=="function"&&!Vt(e)?Jo(Ut(e)):{}}var Go="[object Map]";function Zo(e){return me(e)&&Qt(e)==Go}var Nn=Ae&&Ae.isMap,Yo=Nn?Bt(Nn):Zo;const Ko=Yo;var qo="[object Set]";function Xo(e){return me(e)&&Qt(e)==qo}var Dn=Ae&&Ae.isSet,_o=Dn?Bt(Dn):Xo;const $o=_o;var el=1,tl=2,nl=4,ji="[object Arguments]",il="[object Array]",rl="[object Boolean]",al="[object Date]",sl="[object Error]",Ei="[object Function]",ol="[object GeneratorFunction]",ll="[object Map]",ul="[object Number]",Si="[object Object]",cl="[object RegExp]",dl="[object Set]",fl="[object String]",pl="[object Symbol]",hl="[object WeakMap]",ml="[object ArrayBuffer]",gl="[object DataView]",bl="[object Float32Array]",xl="[object Float64Array]",yl="[object Int8Array]",vl="[object Int16Array]",wl="[object Int32Array]",jl="[object Uint8Array]",El="[object Uint8ClampedArray]",Sl="[object Uint16Array]",Al="[object Uint32Array]",C={};C[ji]=C[il]=C[ml]=C[gl]=C[rl]=C[al]=C[bl]=C[xl]=C[yl]=C[vl]=C[wl]=C[ll]=C[ul]=C[Si]=C[cl]=C[dl]=C[fl]=C[pl]=C[jl]=C[El]=C[Sl]=C[Al]=!0;C[sl]=C[Ei]=C[hl]=!1;function Ce(e,t,n,i,r,a){var s,u=t&el,c=t&tl,p=t&nl;if(n&&(s=r?n(e,i,r,a):n(e)),s!==void 0)return s;if(!De(e))return e;var y=Re(e);if(y){if(s=go(e),!u)return bi(e,s)}else{var b=Qt(e),h=b==Ei||b==ol;if(di(e))return Gs(e,u);if(b==Si||b==ji||h&&!r){if(s=c||h?{}:Qo(e),!u)return c?eo(e,Js(s,e)):Xs(e,Us(s,e))}else{if(!C[b])return r?e:{};s=Ho(e,b,u)}}a||(a=new Me);var f=a.get(e);if(f)return f;a.set(e,s),$o(e)?e.forEach(function(v){s.add(Ce(v,t,n,v,e,a))}):Ko(e)&&e.forEach(function(v,E){s.set(E,Ce(v,t,n,E,e,a))});var d=p?c?no:to:c?Wt:Ht,g=y?void 0:d(e);return La(g||e,function(v,E){g&&(E=v,v=e[E]),li(s,E,Ce(v,t,n,E,e,a))}),s}var Ml=1,Tl=4;function Le(e){return Ce(e,Ml|Tl)}var Rn=Array.isArray,Pn=Object.keys,kl=Object.prototype.hasOwnProperty,Ol=typeof Element<"u";function Ot(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Rn(e),i=Rn(t),r,a,s;if(n&&i){if(a=e.length,a!=t.length)return!1;for(r=a;r--!==0;)if(!Ot(e[r],t[r]))return!1;return!0}if(n!=i)return!1;var u=e instanceof Date,c=t instanceof Date;if(u!=c)return!1;if(u&&c)return e.getTime()==t.getTime();var p=e instanceof RegExp,y=t instanceof RegExp;if(p!=y)return!1;if(p&&y)return e.toString()==t.toString();var b=Pn(e);if(a=b.length,a!==Pn(t).length)return!1;for(r=a;r--!==0;)if(!kl.call(t,b[r]))return!1;if(Ol&&e instanceof Element&&t instanceof Element)return e===t;for(r=a;r--!==0;)if(s=b[r],!(s==="_owner"&&e.$$typeof)&&!Ot(e[s],t[s]))return!1;return!0}return e!==e&&t!==t}var Cl=function(t,n){try{return Ot(t,n)}catch(i){if(i.message&&i.message.match(/stack|recursion/i)||i.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",i.name,i.message),!1;throw i}};const ue=Yn(Cl);var Fl=!0;function Il(e,t){if(!Fl){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}var Nl=4;function Ln(e){return Ce(e,Nl)}function Ai(e,t){for(var n=-1,i=e==null?0:e.length,r=Array(i);++n<i;)r[n]=t(e[n],n,e);return r}var Dl="[object Symbol]";function Zt(e){return typeof e=="symbol"||me(e)&&he(e)==Dl}var Rl="Expected a function";function Yt(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Rl);var n=function(){var i=arguments,r=t?t.apply(this,i):i[0],a=n.cache;if(a.has(r))return a.get(r);var s=e.apply(this,i);return n.cache=a.set(r,s)||a,s};return n.cache=new(Yt.Cache||se),n}Yt.Cache=se;var Pl=500;function Ll(e){var t=Yt(e,function(i){return n.size===Pl&&n.clear(),i}),n=t.cache;return t}var zl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ul=/\\(\\)?/g,Bl=Ll(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(zl,function(n,i,r,a){t.push(r?a.replace(Ul,"$1"):i||n)}),t});const Vl=Bl;var Hl=1/0;function Wl(e){if(typeof e=="string"||Zt(e))return e;var t=e+"";return t=="0"&&1/e==-Hl?"-0":t}var Jl=1/0,zn=ae?ae.prototype:void 0,Un=zn?zn.toString:void 0;function Mi(e){if(typeof e=="string")return e;if(Re(e))return Ai(e,Mi)+"";if(Zt(e))return Un?Un.call(e):"";var t=e+"";return t=="0"&&1/e==-Jl?"-0":t}function Ql(e){return e==null?"":Mi(e)}function Ti(e){return Re(e)?Ai(e,Wl):Zt(e)?[e]:bi(Vl(Ql(e)))}function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},D.apply(this,arguments)}function ki(e,t){if(e==null)return{};var n={},i=Object.keys(e),r,a;for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}var st=j.createContext(void 0);st.displayName="FormikContext";st.Provider;st.Consumer;function Gl(){var e=j.useContext(st);return e||Il(!1),e}var W=function(t){return typeof t=="function"},ot=function(t){return t!==null&&typeof t=="object"},Zl=function(t){return String(Math.floor(Number(t)))===t},vt=function(t){return Object.prototype.toString.call(t)==="[object String]"},wt=function(t){return ot(t)&&W(t.then)};function B(e,t,n,i){i===void 0&&(i=0);for(var r=Ti(t);e&&i<r.length;)e=e[r[i++]];return i!==r.length&&!e||e===void 0?n:e}function de(e,t,n){for(var i=Ln(e),r=i,a=0,s=Ti(t);a<s.length-1;a++){var u=s[a],c=B(e,s.slice(0,a+1));if(c&&(ot(c)||Array.isArray(c)))r=r[u]=Ln(c);else{var p=s[a+1];r=r[u]=Zl(p)&&Number(p)>=0?[]:{}}}return(a===0?e:r)[s[a]]===n?e:(n===void 0?delete r[s[a]]:r[s[a]]=n,a===0&&n===void 0&&delete i[s[a]],i)}function Oi(e,t,n,i){n===void 0&&(n=new WeakMap),i===void 0&&(i={});for(var r=0,a=Object.keys(e);r<a.length;r++){var s=a[r],u=e[s];ot(u)?n.get(u)||(n.set(u,!0),i[s]=Array.isArray(u)?[]:{},Oi(u,t,n,i[s])):i[s]=t}return i}function Yl(e,t){switch(t.type){case"SET_VALUES":return D({},e,{values:t.payload});case"SET_TOUCHED":return D({},e,{touched:t.payload});case"SET_ERRORS":return ue(e.errors,t.payload)?e:D({},e,{errors:t.payload});case"SET_STATUS":return D({},e,{status:t.payload});case"SET_ISSUBMITTING":return D({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return D({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return D({},e,{values:de(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return D({},e,{touched:de(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return D({},e,{errors:de(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return D({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return D({},e,{touched:Oi(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return D({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return D({},e,{isSubmitting:!1});default:return e}}var oe={},ze={};function Kl(e){var t=e.validateOnChange,n=t===void 0?!0:t,i=e.validateOnBlur,r=i===void 0?!0:i,a=e.validateOnMount,s=a===void 0?!1:a,u=e.isInitialValid,c=e.enableReinitialize,p=c===void 0?!1:c,y=e.onSubmit,b=ki(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),h=D({validateOnChange:n,validateOnBlur:r,validateOnMount:s,onSubmit:y},b),f=j.useRef(h.initialValues),d=j.useRef(h.initialErrors||oe),g=j.useRef(h.initialTouched||ze),v=j.useRef(h.initialStatus),E=j.useRef(!1),A=j.useRef({});j.useEffect(function(){return E.current=!0,function(){E.current=!1}},[]);var J=j.useState(0),K=J[1],te=j.useRef({values:Le(h.initialValues),errors:Le(h.initialErrors)||oe,touched:Le(h.initialTouched)||ze,status:Le(h.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),M=te.current,T=j.useCallback(function(l){var m=te.current;te.current=Yl(m,l),m!==te.current&&K(function(x){return x+1})},[]),dt=j.useCallback(function(l,m){return new Promise(function(x,w){var S=h.validate(l,m);S==null?x(oe):wt(S)?S.then(function(k){x(k||oe)},function(k){w(k)}):x(S)})},[h.validate]),ne=j.useCallback(function(l,m){var x=h.validationSchema,w=W(x)?x(m):x,S=m&&w.validateAt?w.validateAt(m,l):Xl(l,w);return new Promise(function(k,N){S.then(function(){k(oe)},function(X){X.name==="ValidationError"?k(ql(X)):N(X)})})},[h.validationSchema]),Te=j.useCallback(function(l,m){return new Promise(function(x){return x(A.current[l].validate(m))})},[]),I=j.useCallback(function(l){var m=Object.keys(A.current).filter(function(w){return W(A.current[w].validate)}),x=m.length>0?m.map(function(w){return Te(w,B(l,w))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(x).then(function(w){return w.reduce(function(S,k,N){return k==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||k&&(S=de(S,m[N],k)),S},{})})},[Te]),q=j.useCallback(function(l){return Promise.all([I(l),h.validationSchema?ne(l):{},h.validate?dt(l):{}]).then(function(m){var x=m[0],w=m[1],S=m[2],k=St.all([x,w,S],{arrayMerge:_l});return k})},[h.validate,h.validationSchema,I,dt,ne]),L=H(function(l){return l===void 0&&(l=M.values),T({type:"SET_ISVALIDATING",payload:!0}),q(l).then(function(m){return E.current&&(T({type:"SET_ISVALIDATING",payload:!1}),T({type:"SET_ERRORS",payload:m})),m})});j.useEffect(function(){s&&E.current===!0&&ue(f.current,h.initialValues)&&L(f.current)},[s,L]);var ie=j.useCallback(function(l){var m=l&&l.values?l.values:f.current,x=l&&l.errors?l.errors:d.current?d.current:h.initialErrors||{},w=l&&l.touched?l.touched:g.current?g.current:h.initialTouched||{},S=l&&l.status?l.status:v.current?v.current:h.initialStatus;f.current=m,d.current=x,g.current=w,v.current=S;var k=function(){T({type:"RESET_FORM",payload:{isSubmitting:!!l&&!!l.isSubmitting,errors:x,touched:w,status:S,values:m,isValidating:!!l&&!!l.isValidating,submitCount:l&&l.submitCount&&typeof l.submitCount=="number"?l.submitCount:0}})};if(h.onReset){var N=h.onReset(M.values,cn);wt(N)?N.then(k):k()}else k()},[h.initialErrors,h.initialStatus,h.initialTouched,h.onReset]);j.useEffect(function(){E.current===!0&&!ue(f.current,h.initialValues)&&p&&(f.current=h.initialValues,ie(),s&&L(f.current))},[p,h.initialValues,ie,s,L]),j.useEffect(function(){p&&E.current===!0&&!ue(d.current,h.initialErrors)&&(d.current=h.initialErrors||oe,T({type:"SET_ERRORS",payload:h.initialErrors||oe}))},[p,h.initialErrors]),j.useEffect(function(){p&&E.current===!0&&!ue(g.current,h.initialTouched)&&(g.current=h.initialTouched||ze,T({type:"SET_TOUCHED",payload:h.initialTouched||ze}))},[p,h.initialTouched]),j.useEffect(function(){p&&E.current===!0&&!ue(v.current,h.initialStatus)&&(v.current=h.initialStatus,T({type:"SET_STATUS",payload:h.initialStatus}))},[p,h.initialStatus,h.initialTouched]);var en=H(function(l){if(A.current[l]&&W(A.current[l].validate)){var m=B(M.values,l),x=A.current[l].validate(m);return wt(x)?(T({type:"SET_ISVALIDATING",payload:!0}),x.then(function(w){return w}).then(function(w){T({type:"SET_FIELD_ERROR",payload:{field:l,value:w}}),T({type:"SET_ISVALIDATING",payload:!1})})):(T({type:"SET_FIELD_ERROR",payload:{field:l,value:x}}),Promise.resolve(x))}else if(h.validationSchema)return T({type:"SET_ISVALIDATING",payload:!0}),ne(M.values,l).then(function(w){return w}).then(function(w){T({type:"SET_FIELD_ERROR",payload:{field:l,value:B(w,l)}}),T({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Vi=j.useCallback(function(l,m){var x=m.validate;A.current[l]={validate:x}},[]),Hi=j.useCallback(function(l){delete A.current[l]},[]),tn=H(function(l,m){T({type:"SET_TOUCHED",payload:l});var x=m===void 0?r:m;return x?L(M.values):Promise.resolve()}),nn=j.useCallback(function(l){T({type:"SET_ERRORS",payload:l})},[]),rn=H(function(l,m){var x=W(l)?l(M.values):l;T({type:"SET_VALUES",payload:x});var w=m===void 0?n:m;return w?L(x):Promise.resolve()}),Pe=j.useCallback(function(l,m){T({type:"SET_FIELD_ERROR",payload:{field:l,value:m}})},[]),ve=H(function(l,m,x){T({type:"SET_FIELD_VALUE",payload:{field:l,value:m}});var w=x===void 0?n:x;return w?L(de(M.values,l,m)):Promise.resolve()}),an=j.useCallback(function(l,m){var x=m,w=l,S;if(!vt(l)){l.persist&&l.persist();var k=l.target?l.target:l.currentTarget,N=k.type,X=k.name,gt=k.id,bt=k.value,Xi=k.checked,mf=k.outerHTML,dn=k.options,_i=k.multiple;x=m||X||gt,w=/number|range/.test(N)?(S=parseFloat(bt),isNaN(S)?"":S):/checkbox/.test(N)?eu(B(M.values,x),Xi,bt):dn&&_i?$l(dn):bt}x&&ve(x,w)},[ve,M.values]),ft=H(function(l){if(vt(l))return function(m){return an(m,l)};an(l)}),we=H(function(l,m,x){m===void 0&&(m=!0),T({type:"SET_FIELD_TOUCHED",payload:{field:l,value:m}});var w=x===void 0?r:x;return w?L(M.values):Promise.resolve()}),sn=j.useCallback(function(l,m){l.persist&&l.persist();var x=l.target,w=x.name,S=x.id,k=x.outerHTML,N=m||w||S;we(N,!0)},[we]),pt=H(function(l){if(vt(l))return function(m){return sn(m,l)};sn(l)}),on=j.useCallback(function(l){W(l)?T({type:"SET_FORMIK_STATE",payload:l}):T({type:"SET_FORMIK_STATE",payload:function(){return l}})},[]),ln=j.useCallback(function(l){T({type:"SET_STATUS",payload:l})},[]),un=j.useCallback(function(l){T({type:"SET_ISSUBMITTING",payload:l})},[]),ht=H(function(){return T({type:"SUBMIT_ATTEMPT"}),L().then(function(l){var m=l instanceof Error,x=!m&&Object.keys(l).length===0;if(x){var w;try{if(w=Ji(),w===void 0)return}catch(S){throw S}return Promise.resolve(w).then(function(S){return E.current&&T({type:"SUBMIT_SUCCESS"}),S}).catch(function(S){if(E.current)throw T({type:"SUBMIT_FAILURE"}),S})}else if(E.current&&(T({type:"SUBMIT_FAILURE"}),m))throw l})}),Wi=H(function(l){l&&l.preventDefault&&W(l.preventDefault)&&l.preventDefault(),l&&l.stopPropagation&&W(l.stopPropagation)&&l.stopPropagation(),ht().catch(function(m){console.warn("Warning: An unhandled error was caught from submitForm()",m)})}),cn={resetForm:ie,validateForm:L,validateField:en,setErrors:nn,setFieldError:Pe,setFieldTouched:we,setFieldValue:ve,setStatus:ln,setSubmitting:un,setTouched:tn,setValues:rn,setFormikState:on,submitForm:ht},Ji=H(function(){return y(M.values,cn)}),Qi=H(function(l){l&&l.preventDefault&&W(l.preventDefault)&&l.preventDefault(),l&&l.stopPropagation&&W(l.stopPropagation)&&l.stopPropagation(),ie()}),Gi=j.useCallback(function(l){return{value:B(M.values,l),error:B(M.errors,l),touched:!!B(M.touched,l),initialValue:B(f.current,l),initialTouched:!!B(g.current,l),initialError:B(d.current,l)}},[M.errors,M.touched,M.values]),Zi=j.useCallback(function(l){return{setValue:function(x,w){return ve(l,x,w)},setTouched:function(x,w){return we(l,x,w)},setError:function(x){return Pe(l,x)}}},[ve,we,Pe]),Yi=j.useCallback(function(l){var m=ot(l),x=m?l.name:l,w=B(M.values,x),S={name:x,value:w,onChange:ft,onBlur:pt};if(m){var k=l.type,N=l.value,X=l.as,gt=l.multiple;k==="checkbox"?N===void 0?S.checked=!!w:(S.checked=!!(Array.isArray(w)&&~w.indexOf(N)),S.value=N):k==="radio"?(S.checked=w===N,S.value=N):X==="select"&&gt&&(S.value=S.value||[],S.multiple=!0)}return S},[pt,ft,M.values]),mt=j.useMemo(function(){return!ue(f.current,M.values)},[f.current,M.values]),Ki=j.useMemo(function(){return typeof u<"u"?mt?M.errors&&Object.keys(M.errors).length===0:u!==!1&&W(u)?u(h):u:M.errors&&Object.keys(M.errors).length===0},[u,mt,M.errors,h]),qi=D({},M,{initialValues:f.current,initialErrors:d.current,initialTouched:g.current,initialStatus:v.current,handleBlur:pt,handleChange:ft,handleReset:Qi,handleSubmit:Wi,resetForm:ie,setErrors:nn,setFormikState:on,setFieldTouched:we,setFieldValue:ve,setFieldError:Pe,setStatus:ln,setSubmitting:un,setTouched:tn,setValues:rn,submitForm:ht,validateForm:L,validateField:en,isValid:Ki,dirty:mt,unregisterField:Hi,registerField:Vi,getFieldProps:Yi,getFieldMeta:Gi,getFieldHelpers:Zi,validateOnBlur:r,validateOnChange:n,validateOnMount:s});return qi}function ql(e){var t={};if(e.inner){if(e.inner.length===0)return de(t,e.path,e.message);for(var r=e.inner,n=Array.isArray(r),i=0,r=n?r:r[Symbol.iterator]();;){var a;if(n){if(i>=r.length)break;a=r[i++]}else{if(i=r.next(),i.done)break;a=i.value}var s=a;B(t,s.path)||(t=de(t,s.path,s.message))}}return t}function Xl(e,t,n,i){n===void 0&&(n=!1);var r=Ct(e);return t[n?"validateSync":"validate"](r,{abortEarly:!1,context:i||r})}function Ct(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=String(n);Array.isArray(e[i])===!0?t[i]=e[i].map(function(r){return Array.isArray(r)===!0||pn(r)?Ct(r):r!==""?r:void 0}):pn(e[i])?t[i]=Ct(e[i]):t[i]=e[i]!==""?e[i]:void 0}return t}function _l(e,t,n){var i=e.slice();return t.forEach(function(a,s){if(typeof i[s]>"u"){var u=n.clone!==!1,c=u&&n.isMergeableObject(a);i[s]=c?St(Array.isArray(a)?[]:{},a,n):a}else n.isMergeableObject(a)?i[s]=St(e[s],a,n):e.indexOf(a)===-1&&i.push(a)}),i}function $l(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function eu(e,t,n){if(typeof e=="boolean")return!!t;var i=[],r=!1,a=-1;if(Array.isArray(e))i=e,a=e.indexOf(n),r=a>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!r?i.concat(n):r?i.slice(0,a).concat(i.slice(a+1)):i}var tu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?j.useLayoutEffect:j.useEffect;function H(e){var t=j.useRef(e);return tu(function(){t.current=e}),j.useCallback(function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return t.current.apply(void 0,i)},[])}var nu=j.forwardRef(function(e,t){var n=e.action,i=ki(e,["action"]),r=n??"#",a=Gl(),s=a.handleReset,u=a.handleSubmit;return j.createElement("form",D({onSubmit:u,ref:t,onReset:s,action:r},i))});nu.displayName="Form";function xe(e){this._maxSize=e,this.clear()}xe.prototype.clear=function(){this._size=0,this._values=Object.create(null)};xe.prototype.get=function(e){return this._values[e]};xe.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var iu=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Ci=/^\d+$/,ru=/^\d/,au=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,su=/^\s*(['"]?)(.*?)(\1)\s*$/,Kt=512,Bn=new xe(Kt),Vn=new xe(Kt),Hn=new xe(Kt),fe={Cache:xe,split:Ft,normalizePath:jt,setter:function(e){var t=jt(e);return Vn.get(e)||Vn.set(e,function(i,r){for(var a=0,s=t.length,u=i;a<s-1;){var c=t[a];if(c==="__proto__"||c==="constructor"||c==="prototype")return i;u=u[t[a++]]}u[t[a]]=r})},getter:function(e,t){var n=jt(e);return Hn.get(e)||Hn.set(e,function(r){for(var a=0,s=n.length;a<s;)if(r!=null||!t)r=r[n[a++]];else return;return r})},join:function(e){return e.reduce(function(t,n){return t+(qt(n)||Ci.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){ou(Array.isArray(e)?e:Ft(e),t,n)}};function jt(e){return Bn.get(e)||Bn.set(e,Ft(e).map(function(t){return t.replace(su,"$2")}))}function Ft(e){return e.match(iu)||[""]}function ou(e,t,n){var i=e.length,r,a,s,u;for(a=0;a<i;a++)r=e[a],r&&(cu(r)&&(r='"'+r+'"'),u=qt(r),s=!u&&/^\d+$/.test(r),t.call(n,r,u,s,a,e))}function qt(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function lu(e){return e.match(ru)&&!e.match(Ci)}function uu(e){return au.test(e)}function cu(e){return!qt(e)&&(lu(e)||uu(e))}const du=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,lt=e=>e.match(du)||[],ut=e=>e[0].toUpperCase()+e.slice(1),Xt=(e,t)=>lt(e).join(t).toLowerCase(),Fi=e=>lt(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),fu=e=>ut(Fi(e)),pu=e=>Xt(e,"_"),hu=e=>Xt(e,"-"),mu=e=>ut(Xt(e," ")),gu=e=>lt(e).map(ut).join(" ");var Et={words:lt,upperFirst:ut,camelCase:Fi,pascalCase:fu,snakeCase:pu,kebabCase:hu,sentenceCase:mu,titleCase:gu},_t={exports:{}};_t.exports=function(e){return Ii(bu(e),e)};_t.exports.array=Ii;function Ii(e,t){var n=e.length,i=new Array(n),r={},a=n,s=xu(t),u=yu(e);for(t.forEach(function(p){if(!u.has(p[0])||!u.has(p[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});a--;)r[a]||c(e[a],a,new Set);return i;function c(p,y,b){if(b.has(p)){var h;try{h=", node was:"+JSON.stringify(p)}catch{h=""}throw new Error("Cyclic dependency"+h)}if(!u.has(p))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(p));if(!r[y]){r[y]=!0;var f=s.get(p)||new Set;if(f=Array.from(f),y=f.length){b.add(p);do{var d=f[--y];c(d,u.get(d),b)}while(y);b.delete(p)}i[--n]=p}}}function bu(e){for(var t=new Set,n=0,i=e.length;n<i;n++){var r=e[n];t.add(r[0]),t.add(r[1])}return Array.from(t)}function xu(e){for(var t=new Map,n=0,i=e.length;n<i;n++){var r=e[n];t.has(r[0])||t.set(r[0],new Set),t.has(r[1])||t.set(r[1],new Set),t.get(r[0]).add(r[1])}return t}function yu(e){for(var t=new Map,n=0,i=e.length;n<i;n++)t.set(e[n],n);return t}var vu=_t.exports;const wu=Yn(vu),ju=Object.prototype.toString,Eu=Error.prototype.toString,Su=RegExp.prototype.toString,Au=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",Mu=/^Symbol\((.*)\)(.*)$/;function Tu(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Wn(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return Tu(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return Au.call(e).replace(Mu,"Symbol($1)");const i=ju.call(e).slice(8,-1);return i==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):i==="Error"||e instanceof Error?"["+Eu.call(e)+"]":i==="RegExp"?Su.call(e):null}function re(e,t){let n=Wn(e,t);return n!==null?n:JSON.stringify(e,function(i,r){let a=Wn(this[i],t);return a!==null?a:r},2)}function Ni(e){return e==null?[]:[].concat(e)}let Di,Ri,Pi,ku=/\$\{\s*(\w+)\s*\}/g;Di=Symbol.toStringTag;class Jn{constructor(t,n,i,r){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[Di]="Error",this.name="ValidationError",this.value=n,this.path=i,this.type=r,this.errors=[],this.inner=[],Ni(t).forEach(a=>{if(U.isError(a)){this.errors.push(...a.errors);const s=a.inner.length?a.inner:[a];this.inner.push(...s)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}Ri=Symbol.hasInstance;Pi=Symbol.toStringTag;class U extends Error{static formatError(t,n){const i=n.label||n.path||"this";return i!==n.path&&(n=Object.assign({},n,{path:i})),typeof t=="string"?t.replace(ku,(r,a)=>re(n[a])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,i,r,a){const s=new Jn(t,n,i,r);if(a)return s;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[Pi]="Error",this.name=s.name,this.message=s.message,this.type=s.type,this.value=s.value,this.path=s.path,this.errors=s.errors,this.inner=s.inner,Error.captureStackTrace&&Error.captureStackTrace(this,U)}static[Ri](t){return Jn[Symbol.hasInstance](t)||super[Symbol.hasInstance](t)}}let Q={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:i})=>{const r=i!=null&&i!==n?` (cast from the value \`${re(i,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${re(n,!0)}\``+r:`${e} must match the configured type. The validated value was: \`${re(n,!0)}\``+r}},z={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Ou={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},It={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},Cu={isValue:"${path} field must be ${value}"},Nt={noUnknown:"${path} field has unspecified keys: ${unknown}"},Fu={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},Iu={notType:e=>{const{path:t,value:n,spec:i}=e,r=i.types.length;if(Array.isArray(n)){if(n.length<r)return`${t} tuple value has too few items, expected a length of ${r} but got ${n.length} for value: \`${re(n,!0)}\``;if(n.length>r)return`${t} tuple value has too many items, expected a length of ${r} but got ${n.length} for value: \`${re(n,!0)}\``}return U.formatError(Q.notType,e)}};Object.assign(Object.create(null),{mixed:Q,string:z,number:Ou,date:It,object:Nt,array:Fu,boolean:Cu,tuple:Iu});const $t=e=>e&&e.__isYupSchema__;class Je{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:i,then:r,otherwise:a}=n,s=typeof i=="function"?i:(...u)=>u.every(c=>c===i);return new Je(t,(u,c)=>{var p;let y=s(...u)?r:a;return(p=y==null?void 0:y(c))!=null?p:c})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let i=this.refs.map(a=>a.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),r=this.fn(i,t,n);if(r===void 0||r===t)return t;if(!$t(r))throw new TypeError("conditions must return a schema object");return r.resolve(n)}}const Ue={context:"$",value:"."};class ye{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Ue.context,this.isValue=this.key[0]===Ue.value,this.isSibling=!this.isContext&&!this.isValue;let i=this.isContext?Ue.context:this.isValue?Ue.value:"";this.path=this.key.slice(i.length),this.getter=this.path&&fe.getter(this.path,!0),this.map=n.map}getValue(t,n,i){let r=this.isContext?i:this.isValue?t:n;return this.getter&&(r=this.getter(r||{})),this.map&&(r=this.map(r)),r}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}ye.prototype.__isYupRef=!0;const ce=e=>e==null;function je(e){function t({value:n,path:i="",options:r,originalValue:a,schema:s},u,c){const{name:p,test:y,params:b,message:h,skipAbsent:f}=e;let{parent:d,context:g,abortEarly:v=s.spec.abortEarly,disableStackTrace:E=s.spec.disableStackTrace}=r;function A(I){return ye.isRef(I)?I.getValue(n,d,g):I}function J(I={}){const q=Object.assign({value:n,originalValue:a,label:s.spec.label,path:I.path||i,spec:s.spec,disableStackTrace:I.disableStackTrace||E},b,I.params);for(const ie of Object.keys(q))q[ie]=A(q[ie]);const L=new U(U.formatError(I.message||h,q),n,q.path,I.type||p,q.disableStackTrace);return L.params=q,L}const K=v?u:c;let te={path:i,parent:d,type:p,from:r.from,createError:J,resolve:A,options:r,originalValue:a,schema:s};const M=I=>{U.isError(I)?K(I):I?c(null):K(J())},T=I=>{U.isError(I)?K(I):u(I)};if(f&&ce(n))return M(!0);let ne;try{var Te;if(ne=y.call(te,n,te),typeof((Te=ne)==null?void 0:Te.then)=="function"){if(r.sync)throw new Error(`Validation test of type: "${te.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(ne).then(M,T)}}catch(I){T(I);return}M(ne)}return t.OPTIONS=e,t}function Nu(e,t,n,i=n){let r,a,s;return t?(fe.forEach(t,(u,c,p)=>{let y=c?u.slice(1,u.length-1):u;e=e.resolve({context:i,parent:r,value:n});let b=e.type==="tuple",h=p?parseInt(y,10):0;if(e.innerType||b){if(b&&!p)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);if(n&&h>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${t}. because there is no value at that index. `);r=n,n=n&&n[h],e=b?e.spec.types[h]:e.innerType}if(!p){if(!e.fields||!e.fields[y])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);r=n,n=n&&n[y],e=e.fields[y]}a=y,s=c?"["+u+"]":"."+u}),{schema:e,parent:r,parentPath:a}):{parent:r,parentPath:t,schema:e}}class Qe extends Set{describe(){const t=[];for(const n of this.values())t.push(ye.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const i of this.values())n.push(t(i));return n}clone(){return new Qe(this.values())}merge(t,n){const i=this.clone();return t.forEach(r=>i.add(r)),n.forEach(r=>i.delete(r)),i}}function Se(e,t=new Map){if($t(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let i=0;i<e.length;i++)n[i]=Se(e[i],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[i,r]of e.entries())n.set(i,Se(r,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const i of e)n.add(Se(i,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[i,r]of Object.entries(e))n[i]=Se(r,t)}else throw Error(`Unable to clone ${e}`);return n}class Z{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Qe,this._blacklist=new Qe,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Q.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Se(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let i=t(this);return this._mutate=n,i}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,i=t.clone();const r=Object.assign({},n.spec,i.spec);return i.spec=r,i.internalTests=Object.assign({},n.internalTests,i.internalTests),i._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),i._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),i.tests=n.tests,i.exclusiveTests=n.exclusiveTests,i.withMutation(a=>{t.tests.forEach(s=>{a.test(s.OPTIONS)})}),i.transforms=[...n.transforms,...i.transforms],i}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let i=n.conditions;n=n.clone(),n.conditions=[],n=i.reduce((r,a)=>a.resolve(r,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,i,r,a;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(i=t.abortEarly)!=null?i:this.spec.abortEarly,recursive:(r=t.recursive)!=null?r:this.spec.recursive,disableStackTrace:(a=t.disableStackTrace)!=null?a:this.spec.disableStackTrace})}cast(t,n={}){let i=this.resolve(Object.assign({value:t},n)),r=n.assert==="ignore-optionality",a=i._cast(t,n);if(n.assert!==!1&&!i.isType(a)){if(r&&ce(a))return a;let s=re(t),u=re(a);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${i.type}". 

attempted value: ${s} 
`+(u!==s?`result of cast: ${u}`:""))}return a}_cast(t,n){let i=t===void 0?t:this.transforms.reduce((r,a)=>a.call(this,r,t,this),t);return i===void 0&&(i=this.getDefault(n)),i}_validate(t,n={},i,r){let{path:a,originalValue:s=t,strict:u=this.spec.strict}=n,c=t;u||(c=this._cast(c,Object.assign({assert:!1},n)));let p=[];for(let y of Object.values(this.internalTests))y&&p.push(y);this.runTests({path:a,value:c,originalValue:s,options:n,tests:p},i,y=>{if(y.length)return r(y,c);this.runTests({path:a,value:c,originalValue:s,options:n,tests:this.tests},i,r)})}runTests(t,n,i){let r=!1,{tests:a,value:s,originalValue:u,path:c,options:p}=t,y=g=>{r||(r=!0,n(g,s))},b=g=>{r||(r=!0,i(g,s))},h=a.length,f=[];if(!h)return b([]);let d={value:s,originalValue:u,path:c,options:p,schema:this};for(let g=0;g<a.length;g++){const v=a[g];v(d,y,function(A){A&&(Array.isArray(A)?f.push(...A):f.push(A)),--h<=0&&b(f)})}}asNestedTest({key:t,index:n,parent:i,parentPath:r,originalParent:a,options:s}){const u=t??n;if(u==null)throw TypeError("Must include `key` or `index` for nested validations");const c=typeof u=="number";let p=i[u];const y=Object.assign({},s,{strict:!0,parent:i,value:p,originalValue:a[u],key:void 0,[c?"index":"key"]:u,path:c||u.includes(".")?`${r||""}[${c?u:`"${u}"`}]`:(r?`${r}.`:"")+t});return(b,h,f)=>this.resolve(y)._validate(p,y,h,f)}validate(t,n){var i;let r=this.resolve(Object.assign({},n,{value:t})),a=(i=n==null?void 0:n.disableStackTrace)!=null?i:r.spec.disableStackTrace;return new Promise((s,u)=>r._validate(t,n,(c,p)=>{U.isError(c)&&(c.value=p),u(c)},(c,p)=>{c.length?u(new U(c,p,void 0,void 0,a)):s(p)}))}validateSync(t,n){var i;let r=this.resolve(Object.assign({},n,{value:t})),a,s=(i=n==null?void 0:n.disableStackTrace)!=null?i:r.spec.disableStackTrace;return r._validate(t,Object.assign({},n,{sync:!0}),(u,c)=>{throw U.isError(u)&&(u.value=c),u},(u,c)=>{if(u.length)throw new U(u,t,void 0,void 0,s);a=c}),a}isValid(t,n){return this.validate(t,n).then(()=>!0,i=>{if(U.isError(i))return!1;throw i})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(i){if(U.isError(i))return!1;throw i}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):Se(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const i=this.clone({nullable:t});return i.internalTests.nullable=je({message:n,name:"nullable",test(r){return r===null?this.schema.spec.nullable:!0}}),i}optionality(t,n){const i=this.clone({optional:t});return i.internalTests.optionality=je({message:n,name:"optionality",test(r){return r===void 0?this.schema.spec.optional:!0}}),i}optional(){return this.optionality(!0)}defined(t=Q.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=Q.notNull){return this.nullability(!1,t)}required(t=Q.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=Q.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let i=this.clone(),r=je(n),a=n.exclusive||n.name&&i.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(i.exclusiveTests[n.name]=!!n.exclusive),i.tests=i.tests.filter(s=>!(s.OPTIONS.name===n.name&&(a||s.OPTIONS.test===r.OPTIONS.test))),i.tests.push(r),i}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let i=this.clone(),r=Ni(t).map(a=>new ye(a));return r.forEach(a=>{a.isSibling&&i.deps.push(a.key)}),i.conditions.push(typeof n=="function"?new Je(r,n):Je.fromOptions(r,n)),i}typeError(t){let n=this.clone();return n.internalTests.typeError=je({message:t,name:"typeError",skipAbsent:!0,test(i){return this.schema._typeCheck(i)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=Q.oneOf){let i=this.clone();return t.forEach(r=>{i._whitelist.add(r),i._blacklist.delete(r)}),i.internalTests.whiteList=je({message:n,name:"oneOf",skipAbsent:!0,test(r){let a=this.schema._whitelist,s=a.resolveAll(this.resolve);return s.includes(r)?!0:this.createError({params:{values:Array.from(a).join(", "),resolved:s}})}}),i}notOneOf(t,n=Q.notOneOf){let i=this.clone();return t.forEach(r=>{i._blacklist.add(r),i._whitelist.delete(r)}),i.internalTests.blacklist=je({message:n,name:"notOneOf",test(r){let a=this.schema._blacklist,s=a.resolveAll(this.resolve);return s.includes(r)?this.createError({params:{values:Array.from(a).join(", "),resolved:s}}):!0}}),i}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:i,meta:r,optional:a,nullable:s}=n.spec;return{meta:r,label:i,optional:a,nullable:s,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(c=>({name:c.OPTIONS.name,params:c.OPTIONS.params})).filter((c,p,y)=>y.findIndex(b=>b.name===c.name)===p)}}}Z.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Z.prototype[`${e}At`]=function(t,n,i={}){const{parent:r,parentPath:a,schema:s}=Nu(this,t,n,i.context);return s[e](r&&r[a],Object.assign({},i,{parent:r,path:t}))};for(const e of["equals","is"])Z.prototype[e]=Z.prototype.oneOf;for(const e of["not","nope"])Z.prototype[e]=Z.prototype.notOneOf;const Du=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function Ru(e){const t=Dt(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;if(t.z===void 0&&t.plusMinus===void 0)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let n=0;return t.z!=="Z"&&t.plusMinus!==void 0&&(n=t.hourOffset*60+t.minuteOffset,t.plusMinus==="+"&&(n=0-n)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+n,t.second,t.millisecond)}function Dt(e){var t,n;const i=Du.exec(e);return i?{year:$(i[1]),month:$(i[2],1)-1,day:$(i[3],1),hour:$(i[4]),minute:$(i[5]),second:$(i[6]),millisecond:i[7]?$(i[7].substring(0,3)):0,precision:(t=(n=i[7])==null?void 0:n.length)!=null?t:void 0,z:i[8]||void 0,plusMinus:i[9]||void 0,hourOffset:$(i[10]),minuteOffset:$(i[11])}:null}function $(e,t=0){return Number(e)||t}let Pu=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Lu=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,zu=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Uu="^\\d{4}-\\d{2}-\\d{2}",Bu="\\d{2}:\\d{2}:\\d{2}",Vu="(([+-]\\d{2}(:?\\d{2})?)|Z)",Hu=new RegExp(`${Uu}T${Bu}(\\.\\d+)?${Vu}$`),Wu=e=>ce(e)||e===e.trim(),Ju={}.toString();function Ee(){return new Li}class Li extends Z{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,i)=>{if(!i.spec.coerce||i.isType(t)||Array.isArray(t))return t;const r=t!=null&&t.toString?t.toString():t;return r===Ju?t:r})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||Q.required,name:"required",skipAbsent:!0,test:i=>!!i.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=z.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(i){return i.length===this.resolve(t)}})}min(t,n=z.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i.length>=this.resolve(t)}})}max(t,n=z.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(i){return i.length<=this.resolve(t)}})}matches(t,n){let i=!1,r,a;return n&&(typeof n=="object"?{excludeEmptyString:i=!1,message:r,name:a}=n:r=n),this.test({name:a||"matches",message:r||z.matches,params:{regex:t},skipAbsent:!0,test:s=>s===""&&i||s.search(t)!==-1})}email(t=z.email){return this.matches(Pu,{name:"email",message:t,excludeEmptyString:!0})}url(t=z.url){return this.matches(Lu,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=z.uuid){return this.matches(zu,{name:"uuid",message:t,excludeEmptyString:!1})}datetime(t){let n="",i,r;return t&&(typeof t=="object"?{message:n="",allowOffset:i=!1,precision:r=void 0}=t:n=t),this.matches(Hu,{name:"datetime",message:n||z.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||z.datetime_offset,params:{allowOffset:i},skipAbsent:!0,test:a=>{if(!a||i)return!0;const s=Dt(a);return s?!!s.z:!1}}).test({name:"datetime_precision",message:n||z.datetime_precision,params:{precision:r},skipAbsent:!0,test:a=>{if(!a||r==null)return!0;const s=Dt(a);return s?s.precision===r:!1}})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=z.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:Wu})}lowercase(t=z.lowercase){return this.transform(n=>ce(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ce(n)||n===n.toLowerCase()})}uppercase(t=z.uppercase){return this.transform(n=>ce(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ce(n)||n===n.toUpperCase()})}}Ee.prototype=Li.prototype;let Qu=new Date(""),Gu=e=>Object.prototype.toString.call(e)==="[object Date]";class ct extends Z{constructor(){super({type:"date",check(t){return Gu(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,i)=>!i.spec.coerce||i.isType(t)||t===null?t:(t=Ru(t),isNaN(t)?ct.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let i;if(ye.isRef(t))i=t;else{let r=this.cast(t);if(!this._typeCheck(r))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);i=r}return i}min(t,n=It.min){let i=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r>=this.resolve(i)}})}max(t,n=It.max){let i=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(r){return r<=this.resolve(i)}})}}ct.INVALID_DATE=Qu;ct.prototype;function Zu(e,t=[]){let n=[],i=new Set,r=new Set(t.map(([s,u])=>`${s}-${u}`));function a(s,u){let c=fe.split(s)[0];i.add(c),r.has(`${u}-${c}`)||n.push([u,c])}for(const s of Object.keys(e)){let u=e[s];i.add(s),ye.isRef(u)&&u.isSibling?a(u.path,s):$t(u)&&"deps"in u&&u.deps.forEach(c=>a(c,s))}return wu.array(Array.from(i),n).reverse()}function Qn(e,t){let n=1/0;return e.some((i,r)=>{var a;if((a=t.path)!=null&&a.includes(i))return n=r,!0}),n}function zi(e){return(t,n)=>Qn(e,t)-Qn(e,n)}const Yu=(e,t,n)=>{if(typeof e!="string")return e;let i=e;try{i=JSON.parse(e)}catch{}return n.isType(i)?i:e};function Ve(e){if("fields"in e){const t={};for(const[n,i]of Object.entries(e.fields))t[n]=Ve(i);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Ve(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Ve)}):"optional"in e?e.optional():e}const Ku=(e,t)=>{const n=[...fe.normalizePath(t)];if(n.length===1)return n[0]in e;let i=n.pop(),r=fe.getter(fe.join(n),!0)(e);return!!(r&&i in r)};let Gn=e=>Object.prototype.toString.call(e)==="[object Object]";function qu(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(i=>n.indexOf(i)===-1)}const Xu=zi([]);function Ui(e){return new Bi(e)}class Bi extends Z{constructor(t){super({type:"object",check(n){return Gn(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=Xu,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var i;let r=super._cast(t,n);if(r===void 0)return this.getDefault(n);if(!this._typeCheck(r))return r;let a=this.fields,s=(i=n.stripUnknown)!=null?i:this.spec.noUnknown,u=[].concat(this._nodes,Object.keys(r).filter(b=>!this._nodes.includes(b))),c={},p=Object.assign({},n,{parent:c,__validating:n.__validating||!1}),y=!1;for(const b of u){let h=a[b],f=b in r;if(h){let d,g=r[b];p.path=(n.path?`${n.path}.`:"")+b,h=h.resolve({value:g,context:n.context,parent:c});let v=h instanceof Z?h.spec:void 0,E=v==null?void 0:v.strict;if(v!=null&&v.strip){y=y||b in r;continue}d=!n.__validating||!E?h.cast(r[b],p):r[b],d!==void 0&&(c[b]=d)}else f&&!s&&(c[b]=r[b]);(f!==b in c||c[b]!==r[b])&&(y=!0)}return y?c:r}_validate(t,n={},i,r){let{from:a=[],originalValue:s=t,recursive:u=this.spec.recursive}=n;n.from=[{schema:this,value:s},...a],n.__validating=!0,n.originalValue=s,super._validate(t,n,i,(c,p)=>{if(!u||!Gn(p)){r(c,p);return}s=s||p;let y=[];for(let b of this._nodes){let h=this.fields[b];!h||ye.isRef(h)||y.push(h.asNestedTest({options:n,key:b,parent:p,parentPath:n.path,originalParent:s}))}this.runTests({tests:y,value:p,originalValue:s,options:n},i,b=>{r(b.sort(this._sortErrors).concat(c),p)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),i=n.fields;for(let[r,a]of Object.entries(this.fields)){const s=i[r];i[r]=s===void 0?a:s}return n.withMutation(r=>r.setFields(i,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(i=>{var r;const a=this.fields[i];let s=t;(r=s)!=null&&r.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[i]})),n[i]=a&&"getDefault"in a?a.getDefault(s):void 0}),n}setFields(t,n){let i=this.clone();return i.fields=t,i._nodes=Zu(t,n),i._sortErrors=zi(Object.keys(t)),n&&(i._excludedEdges=n),i}shape(t,n=[]){return this.clone().withMutation(i=>{let r=i._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),r=[...i._excludedEdges,...n]),i.setFields(Object.assign(i.fields,t),r)})}partial(){const t={};for(const[n,i]of Object.entries(this.fields))t[n]="optional"in i&&i.optional instanceof Function?i.optional():i;return this.setFields(t)}deepPartial(){return Ve(this)}pick(t){const n={};for(const i of t)this.fields[i]&&(n[i]=this.fields[i]);return this.setFields(n,this._excludedEdges.filter(([i,r])=>t.includes(i)&&t.includes(r)))}omit(t){const n=[];for(const i of Object.keys(this.fields))t.includes(i)||n.push(i);return this.pick(n)}from(t,n,i){let r=fe.getter(t,!0);return this.transform(a=>{if(!a)return a;let s=a;return Ku(a,t)&&(s=Object.assign({},a),i||delete s[t],s[n]=r(a)),s})}json(){return this.transform(Yu)}noUnknown(t=!0,n=Nt.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let i=this.test({name:"noUnknown",exclusive:!0,message:n,test(r){if(r==null)return!0;const a=qu(this.schema,r);return!t||a.length===0||this.createError({params:{unknown:a.join(", ")}})}});return i.spec.noUnknown=t,i}unknown(t=!0,n=Nt.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const i={};for(const r of Object.keys(n))i[t(r)]=n[r];return i})}camelCase(){return this.transformKeys(Et.camelCase)}snakeCase(){return this.transformKeys(Et.snakeCase)}constantCase(){return this.transformKeys(t=>Et.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),i=super.describe(t);i.fields={};for(const[a,s]of Object.entries(n.fields)){var r;let u=t;(r=u)!=null&&r.value&&(u=Object.assign({},u,{parent:u.value,value:u.value[a]})),i.fields[a]=s.describe(u)}return i}}Ui.prototype=Bi.prototype;const _u=R(Ge)`
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
`,$u=R.div`
  margin-top: 56px;
  width: 548px;
  height: 600px;

  .joinImg {
    width: 548px;
    height: 600px;
  }
`,ec=R.div`
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
`,tc=R.div`
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
`,nc=R.div`
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
`,ic=({handleCloseModal:e})=>{const t=j.useRef(null);return j.useEffect(()=>{t.current.focus()},[]),o.jsx("div",{ref:t,tabIndex:-1,onKeyDown:n=>{n.key==="Escape"&&e()},children:o.jsxs(tc,{children:[o.jsxs("h2",{className:"joinTitle",children:["На жаль, зараз сервіс ",o.jsx("br",{}),o.jsx("span",{className:"joinTitleAccent ",children:"не відповідає :("})]}),o.jsxs("p",{className:"joinText",children:["Будь ласка, скористайтеся поштою або зателефонуйте"," ",o.jsx(G,{iconName:"heart"})]}),o.jsxs("ul",{className:"joinContacts",children:[o.jsxs("li",{children:[o.jsx("p",{children:"Телефон:"}),o.jsx("a",{className:"joinItemContact",href:"tel:+380981340622",children:"+38 (098) 134-06-22"})]}),o.jsxs("li",{children:[o.jsx("p",{children:"Email:"}),o.jsx("a",{className:"joinItemContact",href:"mailto:mistohub@gmail.com",children:"mistohub@gmail.com"})]})]})]})})},rc=({handleCloseModal:e})=>{const t=j.useRef(null);j.useEffect(()=>{t.current.focus()},[]);const n=He({minWidth:1440}),i=He({maxWidth:375});return o.jsx("div",{ref:t,tabIndex:-1,onKeyDown:r=>{r.key==="Escape"&&e()},children:o.jsxs(nc,{children:[o.jsxs("h2",{className:"joinTitle",children:[o.jsx("span",{className:"joinTitleAccent",children:"Дякуємо "}),"за перший крок",!i&&o.jsx("br",{})," до змін Полтави! Ваші дані",!i&&o.jsx("br",{})," успішно",o.jsx("span",{className:"joinTitleAccent",children:" відправлені!"})]}),o.jsxs("p",{className:"joinText",children:["Протягом доби звʼяжемось з вами для ",!n&&o.jsx("br",{}),"обговорення подальших етапів."]}),o.jsx("button",{className:"joinSuccessBtn",type:"button",title:"На сторінку",onClick:e,children:"На сторінку"})]})})},Zn="/MistoHub/assets/maska-4bddf763.png",ac="/MistoHub/assets/maska@2x-52e2d73a.png",sc="/MistoHub/assets/maska-910d1107.webp",oc="/MistoHub/assets/maska@2x-ba53fd99.webp",lc=()=>o.jsx($u,{children:o.jsxs("picture",{children:[o.jsx("source",{className:"joinImg",srcSet:`${sc} 1x, ${oc} 2x`,type:"image/png"}),o.jsx("source",{className:"joinImg",srcSet:`${Zn} 1x, ${ac} 2x`,type:"image/webp"}),o.jsx("img",{className:"joinImg",src:Zn,alt:"Maska"})]})}),uc=()=>{const{openModal:e}=qn(),t=He({maxWidth:767});return o.jsx(o.Fragment,{children:o.jsxs(ec,{children:[o.jsxs("div",{className:"joinProtectionBlock",children:[o.jsx("p",{children:"© ГО «МІСТО ХАБ»"}),t&&o.jsx("p",{className:"joinProtection",children:"Всі права захищені"}),!t&&o.jsxs("div",{className:"joinProtectionBig",children:[o.jsx("p",{className:"joinProtection",children:"Всі права захищені"}),o.jsxs("button",{type:"button",title:"Розроблено студентами",className:"developers",onClick:()=>e("team_modal"),children:["Розроблено студентами",o.jsx(G,{iconName:"logoGoIT"})]})]})]}),t&&o.jsxs("button",{type:"button",title:"Розроблено студентами",className:"developers",onClick:()=>e("team_modal"),children:["Розроблено студентами",o.jsx(G,{iconName:"logoGoIT"})]})]})})},cc=Ui().shape({name:Ee().required("Ім'я обов'язкове для заповнення!").min(2,"Ім'я має бути мінімум 2 символи!").max(50,"Ім'я занадто довге!"),lastname:Ee().required("Прізвище обов'язкове для заповнення!").min(2,"Прізвище має бути мінімум 2 символи!").max(50,"Прізвище занадто довге!"),phone:Ee().required("Номер телефону обов'язковий!").matches(/^\+380\d{9}$/,"Невірний формат"),link:Ee().matches(/(https?:\/\/)?(www\.)?(facebook|instagram)\.com\/.+/,"Посилання на Facebook або Instagram").url("Невірна адреса"),about:Ee().max(500,"Про себе може містити до 500 символів.")}),dc=({controlsModal:{isModalOpen:e,closeModal:t}})=>{const n={name:"",lastname:"",phone:"",link:"",about:""},[i,r]=j.useState(!1),[a,s]=j.useState(!1),[u,c]=j.useState(!1),p=He({minWidth:1440}),y=()=>{c(!1),s(!1),r(!1),t("join_modal")},b=d=>{f.handleChange(d);const{name:g,value:v}=d.target;f.setValues(E=>({...E,[g]:v})),sessionStorage.setItem("formData",JSON.stringify({...f.values,[g]:v}))},h=async d=>{const g=`<b>Ім’я: ${d.name}</b>
<b>Прізвище: ${d.lastname}</b>
Телефон: <b>${d.phone}</b>
Інстаграм/Фейсбук: <b>${d.link}</b>
Про себе:${d.about}`;try{s(!0),(await tr(g)).result.text!==""&&(r(!0),f.resetForm(),sessionStorage.removeItem("formData"))}catch{c(!0)}finally{s(!1)}},f=Kl({initialValues:sessionStorage.getItem("formData")?JSON.parse(sessionStorage.getItem("formData")):n,validateOnBlur:!0,validateOnChange:!0,validationSchema:cc,onSubmit:h});return o.jsxs(_u,{isOpen:e.join_modal,onRequestClose:y,style:{overlay:{zIndex:"101"}},bodyOpenClassName:"modal-open",children:[a&&o.jsx($i,{style:{display:"block",overlay:{zIndex:"999"},width:"100vw",height:"100vh"}}),o.jsxs("div",{className:"headerContainer",children:[o.jsx("p",{children:"Підтримати проєкт"}),o.jsx(Rt,{onClose:y})]}),o.jsxs("div",{className:"joinMainContainer",children:[o.jsxs("div",{children:[!i&&!u&&o.jsxs("form",{className:"joinForm",onSubmit:f.handleSubmit,children:[o.jsxs("h2",{className:"joinTitle",children:["Приєднуйся до спільноти ",o.jsx("br",{}),o.jsx("span",{className:"joinTitleAccent",children:"супергероїв"})," міста!"]}),o.jsxs("ul",{className:"joinList",children:[o.jsxs("li",{className:"joinFields",children:[o.jsx("label",{className:"joinLabel",htmlFor:"name",children:"Ім’я*"}),o.jsx("input",{className:`joinInput ${f.errors.name&&f.touched.name?"errorInput":""}`,id:"name",name:"name",type:"text",onBlur:f.handleBlur,onChange:d=>{f.handleChange(d),b(d)},value:f.values.name}),f.errors.name&&f.touched.name&&o.jsx("div",{className:"error",children:f.errors.name})]}),o.jsxs("li",{className:"joinFields",children:[o.jsx("label",{className:"joinLabel",htmlFor:"lastname",children:"Прізвище*"}),o.jsx("input",{className:`joinInput ${f.errors.lastname&&f.touched.lastname?"errorInput":""}`,id:"lastname",name:"lastname",type:"text",onBlur:f.handleBlur,onChange:d=>{f.handleChange(d),b(d)},value:f.values.lastname}),f.errors.lastname&&f.touched.lastname&&o.jsx("div",{className:"error",children:f.errors.lastname})]}),o.jsxs("li",{className:"joinFields",children:[o.jsx("label",{className:"joinLabel",htmlFor:"phone",children:"Телефон*"}),o.jsx("input",{className:`joinInput ${f.errors.phone&&f.touched.phone?"errorInput":""}`,id:"phone",name:"phone",type:"text",placeholder:"+380",onBlur:f.handleBlur,onChange:d=>{f.handleChange(d),b(d)},value:f.values.phone}),f.errors.phone&&f.touched.phone&&o.jsx("div",{className:"error",children:f.errors.phone})]}),o.jsxs("li",{className:"joinFields",children:[o.jsx("label",{className:"joinLabel",htmlFor:"link",children:"Інстаграм/Фейсбук"}),o.jsx("input",{className:`joinInput ${f.errors.link&&f.touched.link?"errorInput":""}`,id:"link",name:"link",type:"text",placeholder:"Вставити посилання",onBlur:f.handleBlur,onChange:d=>{f.handleChange(d),b(d)},value:f.values.link}),f.errors.link&&f.touched.link&&o.jsx("div",{className:"error",children:f.errors.link})]}),o.jsxs("li",{className:"joinFields",children:[o.jsx("label",{className:"joinLabel",htmlFor:"about",children:"Коротко про себе"}),o.jsx("textarea",{className:`joinInput ${f.errors.about&&f.touched.about?"errorInput":""} area`,id:"about",name:"about",type:"text",onBlur:f.handleBlur,onChange:d=>{f.handleChange(d),b(d)},value:f.values.about}),f.errors.about&&f.touched.about&&o.jsx("div",{className:"error",children:f.errors.about})]})]}),o.jsx("button",{className:"joinSubmitBtn",type:"submit",title:"Відправити дані","aria-label":"Відправити",children:"Відправити"})]}),i&&o.jsx(rc,{handleCloseModal:y}),u&&o.jsx(ic,{handleCloseModal:y})]}),p&&o.jsx(lc,{})]}),o.jsx(uc,{})]})},fc=R.nav`
  width: 100%;
  
  @media screen and (min-width: 768px) {
    max-width: 470px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 470px;
    flex-grow: 1;
  }

  .navigation_list {
    list-style: none;
  }

  .navigation_list_item {
    margin-bottom: 10px;

    &::last-child {
      margin-bottom: 0px;
    }
  }
  
  .navigation_link {
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
    transition: color .3s;

    &:hover,
    &:active,
    &[data-active="true"] {
      color: #f77d07;
    }

    @media screen and (min-width: 768px) {
      font-size: 44px;
    }
  }

  .navigation_link:hover .navigation_link_icon {
    opacity: 1;
    visibility: visible;
    transform: scale(1.6);
  }

  .navigation_link_icon {
    width: 25px;
    height: 25px;
    visibility: hidden;
    opacity: 0;
    transform: scale(0.1);
    transition: opacity .2s, visibility .2s, transform .2s;

    @media screen and (min-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }

  .navigation_link_text {
    max-width: calc(100% - 25px * 1.6);

    @media screen and (min-width: 768px) {
      max-width: calc(100% - 50px * 1.6);
    }
  }
`,pc=[{value:"Головна",id:"main",to:{pathname:"/",hash:""}},{value:"Меню",to:"https://expz.menu/09ec2271-fec7-432a-8e9a-7fcb24247c3f"},{value:"Про проєкт",id:"about",to:{pathname:"/",hash:"about"}},{value:"Дизайн-проєкт",id:"design",to:{pathname:"/",hash:"design"}},{value:"Зібрані кошти",id:"funds",to:{pathname:"/",hash:"funds"}},{value:"Інвестори",id:"investors",to:{pathname:"/",hash:"investors"}},{value:"Як інвестувати",id:"how",to:{pathname:"/",hash:"how"}},{value:"Співзасновники",id:"founders",to:{pathname:"/",hash:"founders"}}],hc=({activeSection:e,closeModal:t})=>{const n=(r,a)=>{if(t("menu_modal"),a)return;const s=document.getElementById(r.id);s&&window.scrollTo({top:s.offsetTop-100,behavior:"smooth"})},i=r=>{const a=typeof r.to=="string",s=e===r.id;return o.jsx("li",{className:"navigation_list_item",children:o.jsxs(Kn,{onClick:a?void 0:()=>n(r,s),to:r.to,className:"navigation_link","data-active":s,children:[o.jsx("span",{className:"navigation_link_text",children:r.value}),o.jsx(G,{styles:"navigation_link_icon",iconName:"hoverarrow"})]})},r.value)};return o.jsx(fc,{children:o.jsx("ul",{className:"navigation_list",children:pc.map(i)})})},mc="/MistoHub/assets/menu-cloud-x1-c51ff675.png",gc="/MistoHub/assets/menu-cloud-x2-d293537b.png",bc="/MistoHub/assets/menu-cloud-x1-f27528c5.webp",xc="/MistoHub/assets/menu-cloud-x2-8f9e24d1.webp",yc="/MistoHub/assets/support-3fb75e7d.svg",vc=R(Ge)`
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
`,Be=R.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(11, 11, 11, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,wc=R.button`
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
  background-image: url(${yc});
  background-color: transparent;

  @media screen and (min-width: 768px) {
    display: none;
  }
`,jc=R.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,Ec=R.div`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 283px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    max-width: 100%;
  }
`,Sc=R.div`
  width: 1053px;
  height: 563px;
  background-image: url(${mc});
  background-image: -webkit-image-set(url(${bc}) 1x);
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
    background-image: url(${gc});
    background-image: -webkit-image-set(url(${xc}) 2x);
  }
`,Ac=R.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 0;
  max-width: 2160px;
  overflow: visible;
`,Mc=R.div`
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
`,Tc=R.button`
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
`,kc=({controlsMenuModal:e})=>{const{activeSection:t,isModalOpen:n,openModal:i,closeModal:r}=e,a={top:"0",left:"0",overlay:{zIndex:"100"}};return o.jsxs(vc,{style:a,isOpen:n.menu_modal,onRequestClose:()=>r("menu_modal"),shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!1,children:[o.jsxs(jc,{children:[o.jsx(Be,{children:"Меню"}),o.jsxs(Ec,{children:[o.jsx(wc,{type:"button",onClick:()=>i("join_modal"),children:"Підтримати проєкт"}),o.jsx(Rt,{onClose:()=>r("menu_modal")})]})]}),o.jsxs(Ac,{children:[o.jsx(hc,{closeModal:r,activeSection:t}),o.jsx(Sc,{children:o.jsx(G,{iconName:"misto-hub-logo",width:"357",height:"121"})})]}),o.jsxs("div",{children:[o.jsxs(Mc,{children:[o.jsx("span",{children:o.jsx(Be,{children:"© ГО «МІСТО ХАБ»"})}),o.jsx(Be,{children:"Всі права захищені"}),o.jsx(Be,{children:"|"}),o.jsxs(Tc,{type:"button",onClick:()=>i("team_modal"),children:[o.jsx("span",{children:"Poзроблено студентами"}),o.jsx(G,{iconName:"logoGoIT",width:"100",height:"30"})]})]}),o.jsx(nr,{maxWidth:767,children:o.jsx(ir,{sectionName:"menu"})})]})]})},Oc=R.div`
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
`,Cc=({name:e,role:t,link:n,jpg:i,jpgx2:r,webp:a,webpx2:s})=>o.jsxs(Oc,{children:[o.jsxs("div",{className:"photo-container",children:[o.jsxs("picture",{children:[o.jsx("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:`${a} 1x, ${s} 2x`,width:"120",height:"120"}),o.jsx("source",{media:"(max-width: 767px)",srcSet:`${i} 1x, ${r} 2x`,width:"120",height:"120"}),o.jsx("source",{type:"image/webp",srcSet:`${a} 1x, ${s} 2x`,width:"180",height:"180"}),o.jsx("img",{className:"photo-img",srcSet:`${i} 1x, ${r} 2x`,src:i,alt:`${e}, ${t}`,width:"180",height:"180",loading:"lazy"})]}),o.jsx(Kn,{className:"dev-link",to:n,target:"blank",rel:"noopener noreferrer",children:o.jsx(G,{iconName:"icon-linkedin",styles:"icon-linkedin"})})]}),o.jsx("h3",{className:"dev-name",children:e}),o.jsx("p",{className:"dev-role",children:t})]}),Fc="/MistoHub/assets/id-1-3f5dd827.jpg",Ic="/MistoHub/assets/id-1-1e529217.webp",Nc="/MistoHub/assets/id-1x2-9e886be7.jpg",Dc="/MistoHub/assets/id-1x2-2a6d72fe.webp",Rc="/MistoHub/assets/id-2-ff3558b5.jpg",Pc="/MistoHub/assets/id-2-27e25a06.webp",Lc="/MistoHub/assets/id-2x2-0edbae59.jpg",zc="/MistoHub/assets/id-2x2-3bd042a6.webp",Uc="/MistoHub/assets/id-3-30d2fd23.jpg",Bc="data:image/webp;base64,UklGRhYPAABXRUJQVlA4IAoPAADwPwCdASrBALQAPpFEnEqlo6KhpZTK6LASCWVu3V7vFEuMXPfP1K8/drJLO++P9D+175+Jlb47T/3vjS34fqEsv+Q6oniDpA8JygV/OP8L6z/+x5S/2X/e+wr5bXsH/d/2Q/1r//5bH3AIhu2DSsXDuGAzSop7sE1IO+l/R8NWJI9NVZpCxvSFLJWOzAV6cLp+UmtI+dTfW75rx15xam5We6A0JBpYfYHK67njHqmz+fkVazZqiuopHmmdlR1WEV6lc+PL4ZbmJE7ADPGVBpwaL3GYqNVZ1Dp6BBNhfRdiKEOzvi5HZE+y37X37xLFQBNCIcpxF4FK8nDVWaDo7RxO1IcBPb0PlIjK5lPTuW0zkbxZKP5GacZGAGhHoASrdfmLVc0zZgZKKBGFJ2+S9nhsOsLIzcuKVai/DzhKpsXkblAmnsHiR1Vp1nQGNf0du20mtNySE8GwIlW9rblSF7LV6Z6WzaVinheNnmsXO5VDmKKB0r1zXi1H+B1lNkosSpxgKUkfDC89QKsztiEZRwKjWVQ1WZ8GS5zBwRFPfLAZ3qY7zdVatGBJl0rE7WI4mp4PWJxRqlAwe7nE0qEHsIey1VTfmmdYpuQ+hDoZ3TARML7xIasqeoOyc6for6omZV+/c+TFM0URshCp8Hdt4n/QJbpcdjVc1NdqBxdVWWxJnrdAw2F4ZG8AAP75xgPEB2v45A3AMiK5dWn0mQOxIVg3GlqNnqYEQU3jHVRR8A7WPCFyZHewQaybPLtY9+pnx0EpM7xOJ09jCol35kjspaalVfHXRuv+S6VDs19KjddqbqXk2iJxqejD4bGsW3fY92uMvjjVgmgwQlCXOus2IMYVPBSVGKE9ViTKECja9DfWm7Of3ueoSYCcZjGjkLemj2AO5BwNq8K57u/Lh4A7PqN+RByfTLxtICRPbUgD0wdzM59HyPyA9zxzSYtrIAgAR5UVTbo3suNxJE+A9iu2w+GxcdWg1TKMC64odR0cuF6DY5ADofinAfxQC7AtTaIOFlTdvt7T5XTMQnVsqO9T9SLCkHX4vGAHNAxDKGZbZ3OZeckeD1+2ftn9WIQA+OXFhgWZK4dTLCIbmqvluPh4QnlvVsADLc8htC9S/oDXgjwcdPi7WJGh2xqhaGMSjYx5vKf+vZQCyQhJL02CMVu9LKRPmG671eM+xzTvx21zLVOVx2VGpeYaLK3KyIPEh7nidFesbXjliOLyZQAqZe67NxedwiGoO4KoAc6J7bC34ufwZ6o/r5Myl4AHCX539i3eKsufbQawTbsaqCtEI5/zg/yA+RJyhupCpPEZusOH6Gu1rg/r3+Gh62IOu8YBkmgwGk/ATDH0erGG/hU1qx1cw85R0b0l+hFmP1bTofyzbljNU/pVoD4+QsZ8BNA46oKBNsVz5MPmgByvgEwX2GTXrE1v+EA2W4eSYV3hckwR5cksxf7C0ElKYfOqUO1P/UGMOoxjNvLN9BAysg0cTeT/uo4tJqS2gjQS/AtGhG4WflRRJiJqGeb3aJ7Y4cTrLnwsEeX027L4hVPfjST2v7XHQFhnoziLVoDBoI5vaVPUiCZ/5hvpCZlsTq6Qi8XmaMWmSJ8HanDeY2SBemkz9DpMEWAAYJicM7DLpFA5JbtgtpPqH5BrC5ooM75h7WfMl0D6t2C7X8nM7RUXIASd284QVEQktwJkKIwa3C6ISyE+43excpJeg2QRh6UHDHHV2c92Y2xHU80oDtoLcfZ8N+VXaN7Y6Hx5WFcJiEh6B37ut1ttED0SLwrGyyHqn4kj/TS9HWrZICzoQWCDaIvPFvyMF11ISru0OqcxB/jka9+wiRVikfuKVkzpRLX64KHK+IWQEDjOK6zjKG3D8y9N/fYPS5SLESqQWQ2L+HLI+dO9gmPX2/2nEXTdHIAr674iDGnttiQkpzsHFWgxNOlamKc6+WmhtQx/4IWUdLEo/JY551Xx0zP63f/Sf8MNcZ47c4msQE8tTf+sE6jrxROR0MD7ROJav+UvBqTPWpfSZ13Oj9Rrskh8BPomMxCANgcwsykmp6aeq9MpnOrnrKBeoeE9XnRVYAZO8XZ8TO/ez4hUDnqA9U4Ljn6xvjllpmtD7mVnZ8li6RzxesS7AvY1NuWQGqMkleVCPzwKB59JH/qvtw0KkeY31kui6qGvQ+V7yJg9jqkxBnzHNyIBPiTpQl4onJ6u4cHXJoirq6qz2prz8g1SGbdnkK+RQsayyU/9DRmMiVl4/FRbC/d4fIrg6+6YG+z7tG0V4wRfjS3WAUmpngM8XdM5PMMdjxjPKXFuvY5/Q74Anf2eejOko9T36S9hVYCVZPaPxObJDH0kcUHygs0Ami/ubaeRRi1Eazn6znl5nybjuBGo7Sii01akMZa8iafaa1DXJRDc0uag46uPIocgDayJyhXcBow9mnvCcslDT5OTqOsNZXzgdLs8taNpf0L6fIrKyoFB9MMjTXYJrtR899kWWg0MiuZ5PVMie3/C3NlBRrr0Yyncel16P++2iFekl1jLafXvnqnMnqXqnQgIdpK0ekOQz3pq2mI/D4bJFtpX4ng+mFaM4vqC6KF3Sddaw4GMeBCXO38oFWqR68nsd30qR1gxAGUV6MIB3uZpOJ0ebFn3MQK6DiKr2f2WBuNOsYqeY5M6ZgTVwNHmObAbhcOuzcE0rSc9hwzBnxpT3Bgbq5nqH1w0qH+UPHmYmhre6FXX3ZV0OzV+PR+6h6hiYhQovfA/OrUvkhisjF9W/p0iuXd/ec5Dl6nehIIrF0rMCYmMl0qVQJwIebcyQeFPXJqAxBsVVd0mfLRMXkQr36KAAmocgNSyNPEIt214l+wIwNLeEG9HCM1kC2MvBKgS5F8/GCnIxPFaHgAISLuP5E9FyHvmAM129deVF9GDOSkrKdPFEpZlmm/pmQwNqmkPr8fWM+v3kd6HmkMBGRrDB//Z+PlaNj6U9fX5+F+twHNUxRvUkQZrX5ertyEHFnjTKwGZO5Am0SP730Xd3GEIt/xee4/CUMITWATrYb/iQNfug3qNh8K/CX/IdxzL9c9egrJeCQFWUcc6Wo+8weMRJP0KLL/tLzD1RUhLL5UtdbXdSaAf7/fSE8nEOKFScttF/VHuc8SY1t66x61yZfq7/YVD1CzZ3XdNR79IJWXCJoMx8nM4G/LfrILCm7kGyw7tAAWsUvHcjNlkFBnFAthniSF+mouykNj7gd5UfnZfV/3LK1CIKVHDYU72mmRUgwc69VYiTZo7otrIEf8fjf5WWNLHElXV7omWsHXwHK0PHXB9nxUtg81CEJ2gKalQvG+5MSjM1S9tfq9Ltt79snuOSt5iD4riaZ+tYkHKvbo0e7+//rZYA+MQ24y35cLiECmRB3TiEJz9jDhUKEe0abs9ChS0ukovYB4H4sOxj+M1o/mJianyJB7nDSjhr2p3NdY/V3OHpkw1LBSo1CNI+bivtAyJ4yK8UJ5fcxsuIwvviezB5D6IEr10GBFeeY6IVCJuFKEShfUG0ecUGRrbCzGoHRYgetcAJBStmQKr8pYSHaI3FivDzaDsvFOrtC+TgqFmMhi+BraRKwzr3tzxBz8RqU5p7/+WbrZ/EV1ro+Nc8NEXQvpYM6CypjFqDBp5yBuBHmiYtjM3UuG32ty8vCaKrhOrYuebcx63AWWBbC270wSNLAEx6Rif4MssIQ5ZLs/HIuYuUf74KxxRREsVaJntY1ywy1zSMRZkc8AU25DPl0ktsJ3k6/9KbgR+AnwHdWOEHm1gDYKUtb1baazheEJUbDxV1YZyssI3khpVP+HP4gPtzOXIhJ+Zgl+nS1FWBui76t/QAjx76T4JTD/iXiajAjMfiuIsBJR5NrNqkW+i4i8qBZ04VkPKos/W9SbI8Cm6dT2XR8T/AB8yZjbkI/QaUXpnApQsEghDQ6GQ7jYvyUUXXq9RZYwAcpsEoMXuwXmG8+PVhIGUggWiEa5o5lutdqwirvRc3w9MZNf0qRqsDTfcH6rQ+eS2kZn2EcQeeGNoq9t0oD0jhZZT4NE5GOkmH59W92jMi8NJYKBSrWgoo8OOf/hwUTbk+CIVHJGcG6xv6dRmRxrCJ5bHpH3Vro8UK9Ryr+TOMvhAD0w3h/JMqxpprbxfHFACvDe3guFKDH2SdK5FHz25rVLt3lnXtEhli7m2V9Z3xbvTvU56bTNjOe/tF0MubezmsDUALoNIUFrLtTFTtP6y1xvshl6O7a+KgNgv9qL90DaQoERWMD/CoLQ/DAI+197qki0ltk54Nqd+8elAO3QhGvUgo9C7+XeYYHtzovhPHEdiBR5jqvhwjrZvHP3dt+F48cTFQLeZPy+0KssUaaAyWPSwEhflZi48WLioE9qilh3CocqvyC41kZooaQQrQs7bb2vPuh6Kao+/vxKqdK8bvZJUIlEVR/RUibYoWXOXjvnuvf2EKBfj92LjEAVcAwmUiC+gzurT8wr7xAzfchrO66TYYNefJ+LQGgjnB9eme2YY+L+m5U4IECBArLdODta1eg6aCBLNAAAfXkt1SQyYHba5u4ElNwu7O3EdUybJeA39qCA/PljhzQDadGLtMaWfUYiFluHstbMsiKyOxEOlrzlBxXzS3myqLRGdp93HYKV2nIVW2ZJlPvU3PnYD5dwoDy9UYk9rsN+guiMxd0QWIOvRnjWC/WHwThcVtqvu11nc2ApGDnMPsfYWw+xCIrikuMW1rR71nCTNfLMP0iDCoqNNZvefmhTCMj5bf/+s0WiUsMhkEyO9ZeFA8/PUHD/MVgs8/IAwGc17ZGiQJXy9SvOcj5soB9BTgJc0AFxzYBzmBaNpkD/BUT6kmjDnawx4tpgpAr1LhiNMTIRMTTNlApt2N2jT/5ZqKugz08wsps++vJd4sBI0uN2Wu+PzBdsA8pL+YNIyOEifmGqhzHWrQ/kcxDV8uHStofaj3CHm+tp40MgffuC/lxG5/jBAzITeDFfsDSRHvJ/Lc4wSkyhiv7wjJQpLVKipI7KEz0Kmbxsvg55mKixXlJFiq/hNSl1xb8XVkF1A853fQf3dRM1XpTggTIADzCo/AMMQ+Q8KEE78ID+9FOzZrMD6cSexvwZi+GZVl4brUc62GnSYF9X0Z261buLHNcQfUcyvZDKXdWSAAAAA",Vc="/MistoHub/assets/id-3x2-1aeea65b.jpg",Hc="/MistoHub/assets/id-3x2-414702be.webp",Wc="/MistoHub/assets/id-4-427701db.jpg",Jc="data:image/webp;base64,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",Qc="/MistoHub/assets/id-4x2-b3ad46d5.jpg",Gc="/MistoHub/assets/id-4x2-174fa447.webp",Zc="/MistoHub/assets/id-5-16e6e875.jpg",Yc="data:image/webp;base64,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",Kc="/MistoHub/assets/id-5x2-9e831bba.jpg",qc="/MistoHub/assets/id-5x2-a84c65f5.webp",Xc="/MistoHub/assets/id-6-a4200287.jpg",_c="data:image/webp;base64,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",$c="/MistoHub/assets/id-6x2-ca1f7d1d.jpg",ed="/MistoHub/assets/id-6x2-eabd2071.webp",td="/MistoHub/assets/id-7-62aaf854.jpg",nd="/MistoHub/assets/id-7-41523edb.webp",id="/MistoHub/assets/id-7x2-66e049d5.jpg",rd="/MistoHub/assets/id-7x2-c105f5b1.webp",ad="/MistoHub/assets/id-8-f5d906ad.png",sd="/MistoHub/assets/id-8-5831cda8.webp",od="/MistoHub/assets/id-8x2-79d2ed74.png",ld="/MistoHub/assets/id-8x2-da629058.webp",ud="/MistoHub/assets/id-9-a94a20f3.jpg",cd="/MistoHub/assets/id-9-6d861f8a.webp",dd="/MistoHub/assets/id-9x2-ad21c2f5.jpg",fd="/MistoHub/assets/id-9x2-07d8f176.webp",pd="/MistoHub/assets/id-10-7d72914f.jpg",hd="/MistoHub/assets/id-10-636e9f84.webp",md="/MistoHub/assets/id-10x2-bff93bcb.jpg",gd="/MistoHub/assets/id-10x2-043ee1b9.webp",bd="/MistoHub/assets/id-11-9aada8a1.jpg",xd="/MistoHub/assets/id-11-16d25ee5.webp",yd="/MistoHub/assets/id-11x2-93c1acd4.jpg",vd="/MistoHub/assets/id-11x2-ac6fdefd.webp",wd="/MistoHub/assets/id-12-f6bf2339.jpg",jd="/MistoHub/assets/id-12-eaa76717.webp",Ed="/MistoHub/assets/id-12x2-649360b7.jpg",Sd="/MistoHub/assets/id-12x2-a4885d20.webp",Ad="/MistoHub/assets/id-13-cb04f7e3.jpg",Md="/MistoHub/assets/id-13-225f6c3d.webp",Td="/MistoHub/assets/id-13x2-3aff6a40.jpg",kd="/MistoHub/assets/id-13x2-4bf90c2c.webp",Od="/MistoHub/assets/id-14-3a05f85c.jpg",Cd="/MistoHub/assets/id-14-de701467.webp",Fd="/MistoHub/assets/id-14x2-4b561cc0.jpg",Id="/MistoHub/assets/id-14x2-72b686c1.webp",Nd="/MistoHub/assets/id-15-e36375b8.jpg",Dd="/MistoHub/assets/id-15-6df778ab.webp",Rd="/MistoHub/assets/id-15x2-fc61b543.jpg",Pd="/MistoHub/assets/id-15x2-e2abc974.webp",Ld="/MistoHub/assets/id-16-9ca273c9.jpg",zd="/MistoHub/assets/id-16-e9b9d155.webp",Ud="/MistoHub/assets/id-16x2-52f530f7.jpg",Bd="/MistoHub/assets/id-16x2-9ef4d9e8.webp",Vd="/MistoHub/assets/id-17-be9a2225.jpg",Hd="/MistoHub/assets/id-17-4673a0f4.webp",Wd="/MistoHub/assets/id-17x2-10e738a7.jpg",Jd="/MistoHub/assets/id-17x2-ba3300b8.webp",Qd="/MistoHub/assets/id-18-229b3d54.jpg",Gd="/MistoHub/assets/id-18-714a85ac.webp",Zd="/MistoHub/assets/id-18x2-be6f9082.jpg",Yd="/MistoHub/assets/id-18x2-61687c09.webp",Kd="/MistoHub/assets/id-19-bbd562fe.jpg",qd="/MistoHub/assets/id-19-ea64f76b.webp",Xd="/MistoHub/assets/id-19x2-720bbaae.jpg",_d="/MistoHub/assets/id-19x2-56efcfed.webp",$d="/MistoHub/assets/id-20-f9862b64.jpg",ef="/MistoHub/assets/id-20-1640a3d3.webp",tf="/MistoHub/assets/id-20x2-4c6f5d3e.jpg",nf="/MistoHub/assets/id-20x2-e66e774b.webp",rf=[{id:"id-1",name:"Єгор Шевцов",role:"Project Manager",link:"https://www.linkedin.com/in/yehor-shevtsov/",jpg:Fc,jpgx2:Ic,webp:Nc,webpx2:Dc},{id:"id-2",name:"Юрій Шукан",role:"Front-end розробник",link:"https://www.linkedin.com/in/yuriy-shukan/",jpg:Rc,jpgx2:Pc,webp:Lc,webpx2:zc},{id:"id-3",name:"Анна Дуднік",role:"Front-end розробник",link:"http://www.linkedin.com/in/anna-dudnik-dev/",jpg:Uc,jpgx2:Bc,webp:Vc,webpx2:Hc},{id:"id-4",name:"Ілона Ратушняк",role:"UI/UX Designer ",link:"http://linkedin.com/in/ilona-ratushniak-3a678624b/",jpg:Wc,jpgx2:Jc,webp:Qc,webpx2:Gc},{id:"id-5",name:"Анна Ричкова",role:"Front-end розробник",link:"https://www.linkedin.com/in/annarychkova1/",jpg:Zc,jpgx2:Yc,webp:Kc,webpx2:qc},{id:"id-6",name:"Анастасія Дудка",role:"Front-end розробник",link:"https://www.linkedin.com/in/anastasiia-dudka-/",jpg:Xc,jpgx2:_c,webp:$c,webpx2:ed},{id:"id-7",name:"Володимир Демчук",role:"Front-end розробник",link:"https://www.linkedin.com/in/demchuk-volodymyr/",jpg:td,jpgx2:nd,webp:id,webpx2:rd},{id:"id-8",name:"Сергій Савченко",role:"Front-end розробник",link:"https://www.linkedin.com/in/serhiy-savchenko/",jpg:ad,jpgx2:sd,webp:od,webpx2:ld},{id:"id-9",name:"Микита Кудлай",role:"Front-end розробник",link:"https://www.linkedin.com/in/mykytakudlai/",jpg:ud,jpgx2:cd,webp:dd,webpx2:fd},{id:"id-10",name:"Кароліна Таран",role:"Front-end розробник",link:"http://www.linkedin.com/in/karolina-taran-developer/",jpg:pd,jpgx2:hd,webp:md,webpx2:gd},{id:"id-11",name:"Сергій Монжелесов",role:"Team Lead",link:"http://www.linkedin.com/in/serhii-monzhelesov/",jpg:bd,jpgx2:xd,webp:yd,webpx2:vd},{id:"id-12",name:"Людмила Пасєка",role:"QA-тестувальник",link:"https://www.linkedin.com/in/liudmyla-pasieka-112a6429b/",jpg:wd,jpgx2:jd,webp:Ed,webpx2:Sd},{id:"id-13",name:"Олена Салобай",role:"QA-тестувальник",link:"http://www.linkedin.com/in/olena-salobai/",jpg:Ad,jpgx2:Md,webp:Td,webpx2:kd},{id:"id-14",name:"Любомир Сенчишин",role:"QA-тестувальник",link:"https://www.linkedin.com/in/liubomyr-senchyshyn-691596298/",jpg:Od,jpgx2:Cd,webp:Fd,webpx2:Id},{id:"id-15",name:"Анна Олійник",role:"QA-тестувальник",link:"https://www.linkedin.com/in/hanna-oliinyk-66835715a/",jpg:Nd,jpgx2:Dd,webp:Rd,webpx2:Pd},{id:"id-16",name:"Нікіта Яцухно",role:"QA-тестувальник",link:"http://www.linkedin.com/in/nikita-yatsukhno/",jpg:Ld,jpgx2:zd,webp:Ud,webpx2:Bd},{id:"id-17",name:"Іветта Дашкова",role:"Tech Lead",link:"https://www.linkedin.com/in/ivettadashkova/",jpg:Vd,jpgx2:Hd,webp:Wd,webpx2:Jd},{id:"id-18",name:"Ігор Піляєв",role:"Front-end розробник",link:"https://www.linkedin.com/in/igor-piliaiev/",jpg:Qd,jpgx2:Gd,webp:Zd,webpx2:Yd},{id:"id-19",name:"Вікторія Бєлінська",role:"QA-тестувальник",link:"http://www.linkedin.com/in/viktoriia-bielinska-95892429b/",jpg:Kd,jpgx2:qd,webp:Xd,webpx2:_d},{id:"id-20",name:"Катерина Драцька",role:"QA-тестувальник",link:"https://www.linkedin.com/in/kateryna-dratska/",jpg:$d,jpgx2:ef,webp:tf,webpx2:nf}],af=()=>{const t=(n=>n.sort(function(){return Math.random()-.5}))(rf);return o.jsx(rr,{wrapperTag:"ul",wrapperClass:"list",className:"swiper",resizeObserver:!0,breakpoints:{1440:{slidesPerView:5,spaceBetween:40,initialSlide:0},768:{slidesPerView:3,spaceBetween:30,initialSlide:0},320:{slidesPerView:2,spaceBetween:20,initialSlide:0}},slidesPerView:4,initialSlide:0,spaceBetween:10,enabled:!0,navigation:{nextEl:".next-btn",prevEl:".prev-btn"},modules:[sr],children:t.map(n=>o.jsx(ar,{tag:"li",className:"item",children:o.jsx(Cc,{name:n.name,role:n.role,link:n.link,jpg:n.jpg,jpgx2:n.jpgx2,webp:n.webp,webpx2:n.webpx2})},n.id))})},sf="/MistoHub/assets/bg-modal-mob-f5fa1178.png",of="/MistoHub/assets/bg-modal-tabl-35cc034e.png",lf="/MistoHub/assets/bg-modal-desk-02f0110a.png",uf="data:image/webp;base64,UklGRswJAABXRUJQVlA4TMAJAAAvyIFUEG+hqG0jyXsvf6j7npmlgbZt2zBp+/+7nWxGbRsJcu740zwM95oyZCRJUJ3BoJzqGz5CG1zAy/cQ+kBMBzEUaA34dZCBB4sjfA6LojitohJsXAOtFdBaqOd276N9G5sQ28efbxccBW3bMAl/2u0Og4iYAF4dJgqgotLt4JjGMGibumVE3ba1um31bVBvdnFiaSRS6cXYOol0AL//A0a1ZQRf+f5F9H8CaNu2FbeO9gF8q7smHnEkJKUzqh74/x9MJ8Hh+DCqHiL6HyTBo+3bo5Ge4GajsCg7rlW4UXDCpHC72PgWdwtNaLGizLwryJD/gnUF5l1BhkKL1aXFf4EQeQ0h8hpC5DWEyGsIUdCQoidI0QQp8hAjLUYTpMhDjFox8hCjVow8xKgVo6DEyEKMjBgFiNFPOXo7jj8PY6ZhfIzjMo7zON7G8TqOr/9BmnGkcXz9P+t1HKdxDOP4xzimcYQZRz+Oyzju44jXcQzjGMcRfhzfjyPMOIZxzG4YsY0j/Dju44gwjriMY3LDiN0MI3YzjNjdMCK5YUSehhFYzTAiuWEENjeMSNMwAuk2jED0wwhEP4xAnIYRSNMwAsk2UgSi84sYEXn7SYqIyL9qKoy2b49mv1cA1H5njnN/GgMXKCgpnOajwtq74+A4MCkFBTvv8XBlhrFsTgPauQ4Gyep5LFZ4AipHGAwS1zYWySlUDmewyc6VZ8ayVsKksFlty5K+oGq4VmHT2hZkt6gZzmD7duvlpKAYZ5BHu3fxhpu1cTHI573wf0O9CDOyahfub6gWYVLIrS2sT6gWTiPHfzO+qFrhDTL9Urh6jUrxrpBtu/EMGnXCG2T9H5Yz6sS7QuZt4feOKuEN8m93bl5ViTeFIi7MNCpEmFHKv1lNqBBeo5zvGHlUiJNCSV8ym2OFmFBYW5hY1IcZxbWFh64OwaDAtnCYUBu8RpFtae91bfAahbaleYvK4DWKbUtjj8rgNQpuS9u2MniNotvS0uu64DUK/5IbWlSF8AXF9w11XXgCA981s6gKE1j4dytTFd7BxKWNR03wigu0N3mtCUGDjba00DVhBiNtru9QESxY+a5+WxG85gUt1a0iZnAzVn6QHjzYaUvdt4rY8YN8XasHC47+U3MnPWiWUKy46MGCpzbXu+pBM4V8tUxqsGDrUuuhB8MXUyrNavBg7EulqxpazlCokkkNmjW013iowYG3LzUWNbTMoVDhpgbNHdrPWy1cwF5/OpMWBv7QcvahBsMgU04ualAMIn/ypoULWBzPXZ9YuC6Ozl1S+Mkjm08ZCa/LbvFkl/vFuV02i7v9osLdNoWeRxTOZOo22uWhX2yXj2Zxv4xcNpTiM5NMOfHo94yC2iQMk8ifWPqlQzmeKMnvXKJ4fO7Yq2LENMBme/zWMfWl6CjJwCdaDl97Dk0ZmpiGZ5TJR03PdC5DT2leGEXhKHVNTyVoKFHHKSrHUudeFcD+i/hjj84R+Df0L0Lx0Pve4djHZJKs/tDSfeTe0b8JxSOhe0zM47+KPzL1nw3rnhIWluKBW/9YOTcxJSOsPXAVAJ6xpZRfhaVNpMi3oaRv0tofv0qAme2ftCZpaRMpG6Ydpb2Ia39IImBlGhN7Ly5tIsGz7CjxJK+VaefYxNRgxKXt+0kKzAx7St7L62XKjl1D6c/yUhQJH9jZDUSBvUzwzD7TBrPAFL/3ECQZXnEL8AJ7mRBYdbTJIDBFmbLjFLcRJb7LhMiop40agSnLBM+mCVuZJA5CJcPF0lajxCbLhMCkoc1mIzAtQsHx+LMdTBL/8k2SJrLoaMNRYopC4Q2HuCUYib1U2bTvaNNBYipCYW3exG1lkYNUuLQeaONeYpO/QKDYuKGtR4lpkQpzW7s5OIm9WNm0PND2F4kpfvnOEKwtYwaykXgWC75dRzkMEptMRF9ZEtvFLGQjMC1EZFiCuVVPeQwSeyJ64Uk2bZqQiWwEpgtbsLWxlMsgcU/UMwW+RUPZzEZgRTRwJbU45wNBYJzpP64g1O8oo9kJ3NFPtmRXPeYEm8AqXNiCWLujvHp5MXi+wNdtYmaiwAdiTDJVLeV2khfhO18QajaU3WzkHb4yJruKNj9Y5T28MAax3oFy7MUFa/CmWszSLu831iRTqaM8B3ET7RahUsxUdqrEpUpPuY66jDUayvesSkwVbMbyRZXZnG4o57vRJNbT56xhVSX8yY4y71UZT8bcJaNJzKdeKftRldmcaGL+MGsS6wlL91+v19F9vF6vmYDXJPxqDf01jHaYj7u9wr1qb45tb924qeQ0ua9miSi44bhHgsq0w2ncBqIm6XWlQ3DzDombbnAhOfpRk0KzjlbY6O44jGnRiyLp1zrbVqZ3IZ1wUSQdsrNoZpcIJadIr7L00QxjCtiNHqnPFgDdncLD8FGRocnYR2PjgxD0SOfMAdj140Mw6ZEO2QOg5/EBuOjx/xIA0PO4WnZKDAbl3A1xHSSnwotGWY0NayAZBZ4Uytu5FbAb9b2jzHqOd+Gj9iaU29h78FF3E4quu3gbVs1NKL6x30XQ2xs4aLfyHQStXcDFe/kWQWdes4Houn2DoDINVtrtawQ9hKuz9uRSmMBN+0/5gvDsr+PJ9u1xr7CsOveoEzh6LwAQnnK4OjvM7W6PVbv4EK9ZQnQvAMITvY4n27fHvcKDdXxEC7beC/Dx2YWrs/183O2Rro7rOXD2+sBH85Su42noW7NX2OLnsJpmDdF1382TCcNxj43Pa1mw9x7dMwmzQgb/rOM1f4j8E7loZFHFVSZU6fVOCpk8rOF1VfMK2RxWmFDVNDJ6vivoqmaRUx3usahqOit4ukdXNYvMDrc5VDWTGxVvaqvaBdnV4QaPqtbmB/MNtqp55PjP30xVa7Ok4pJHTfM6Szgs2apmkelp4bmq6Vzh/EHVNIts60B0QU0z+cIT0VDTHHI+0HNNa7OmLl8rmkfeNSpam7m6fY9XYmQhRlqMLMRIi5GDGLVi5CFGrRh5iNEPOdJiZCFGWowcxOhZjDzEqBUjDzGa5EiLkYUYaTH6CTEyYuQhRq0YeYjR/3KkxchCjLQYOYjxIEfPcmTk6FmOXuRokKMgR3SQo3OpvELptUw+G4WGT0WK+KBQ8qpADsAbhdKPAm0AslMopu4a+niuUdn1NixQX6EQe4tLdKhQWPvq6K+hqVDwXcW/0UUpNJmOOrr1t0IROzrfREGhmLtp6M5Zobj0Yu+BV2gyfTR0d77oE2sf9j4kp09MPai4ApLTZ3YddLRqcurE3kFcB8mpEyv7jtZOTp3w3M+rITl1Jsf7QA9MTpuIvO0jkC7axMy5ocdmrzs=",cf="data:image/webp;base64,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",df="data:image/webp;base64,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",ff=R(Ge)`
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
    background-image: url(${sf});
    background-image: -webkit-image-set(url(${uf}));
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
      background-image: url(${of});
      background-image: -webkit-image-set(url(${cf}));
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
      background-image: url(${lf});
      background-image: -webkit-image-set(url(${df}));
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
`,pf=R.div`
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
`,hf=({controlsModal:{isModalOpen:e,closeModal:t}})=>o.jsx(ff,{onRequestClose:()=>t("team_modal"),isOpen:e.team_modal,onClose:()=>t("team_modal"),shouldCloseOnOverlayClick:!0,style:{overlay:{zIndex:"200"}},bodyOpenClassName:"modal-open",children:o.jsx("div",{className:"bg-container",children:o.jsxs("div",{className:"content-container",children:[o.jsxs("div",{className:"dev-modal-up",children:[o.jsx("span",{children:"Команда"}),o.jsx(Rt,{onClose:()=>t("team_modal")})]}),o.jsxs("h2",{children:[o.jsx("span",{className:"orange-el",children:"Команда"}),", що створила сайт"]}),o.jsx(af,{}),o.jsxs("div",{className:"nav-control",children:[o.jsx("button",{type:"button",className:"prev-btn",children:o.jsx(G,{width:"17",height:"13",iconName:"icon-arrow-back",styles:"icon-arrow"})}),o.jsx("button",{type:"button",className:"next-btn",children:o.jsx(G,{width:"17",height:"13",iconName:"icon-arrow-next",styles:"icon-arrow"})})]}),o.jsxs(pf,{children:[o.jsx("span",{children:"© ГО «МІСТО ХАБ»"}),o.jsx("span",{className:"after-el",children:"Всі права захищені"}),o.jsxs("div",{children:[o.jsx("span",{children:"Розроблено студентами"}),o.jsx(G,{width:"59",height:"18",iconName:"icon-logo-goit",styles:"icon-logo-goit"})]})]})]})})});Ge.setAppElement("#root");const yf=e=>{const t=qn();return o.jsxs(o.Fragment,{children:[o.jsx(dc,{controlsModal:t}),o.jsx(kc,{controlsMenuModal:{...t,...e}}),o.jsx(hf,{controlsModal:t})]})};export{yf as default};
