import{r as oe,R as Xp,u as Ge,j as se}from"./index-2df94394.js";import{C as qp,u as wa,I as es,n as Yp}from"./HomePage-c73e3f6e.js";var ds=function(){return ds=Object.assign||function(e){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ds.apply(this,arguments)};function $p(i,t,e){if(e||arguments.length===2)for(var n=0,r=t.length,s;n<r;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return i.concat(s||Array.prototype.slice.call(t))}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hl="161",jp=0,Mc=1,Zp=2,Ou=1,Kp=2,Gn=3,yi=0,He=1,Wn=2,ui=0,wr=1,Sc=2,Ec=3,bc=4,Jp=5,Di=100,Qp=101,tm=102,wc=103,Tc=104,em=200,nm=201,im=202,rm=203,ll=204,cl=205,sm=206,am=207,om=208,lm=209,cm=210,hm=211,um=212,dm=213,fm=214,pm=0,mm=1,vm=2,Ua=3,gm=4,_m=5,ym=6,xm=7,Nu=0,Mm=1,Sm=2,di=0,Em=1,bm=2,wm=3,Tm=4,Am=5,Cm=6,ku=300,Rr=301,Lr=302,hl=303,ul=304,qa=306,dl=1e3,gn=1001,fl=1002,Ne=1003,Ac=1004,Xr=1005,Oe=1006,ho=1007,ci=1008,fi=1009,Rm=1010,Lm=1011,Vl=1012,zu=1013,hi=1014,Xn=1015,fs=1016,Bu=1017,Hu=1018,Oi=1020,Pm=1021,_n=1023,Im=1024,Um=1025,Ni=1026,Pr=1027,Dm=1028,Vu=1029,Fm=1030,Gu=1031,Wu=1033,uo=33776,fo=33777,po=33778,mo=33779,Cc=35840,Rc=35841,Lc=35842,Pc=35843,Xu=36196,Ic=37492,Uc=37496,Dc=37808,Fc=37809,Oc=37810,Nc=37811,kc=37812,zc=37813,Bc=37814,Hc=37815,Vc=37816,Gc=37817,Wc=37818,Xc=37819,qc=37820,Yc=37821,vo=36492,$c=36494,jc=36495,Om=36283,Zc=36284,Kc=36285,Jc=36286,qu=3e3,ki=3001,Nm=3200,km=3201,zm=0,Bm=1,on="",Se="srgb",Pn="srgb-linear",Gl="display-p3",Ya="display-p3-linear",Da="linear",ee="srgb",Fa="rec709",Oa="p3",Vi=7680,Qc=519,Hm=512,Vm=513,Gm=514,Yu=515,Wm=516,Xm=517,qm=518,Ym=519,th=35044,eh="300 es",pl=1035,qn=2e3,Na=2001;let Or=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}};const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nh=1234567;const ns=Math.PI/180,ps=180/Math.PI;function Nr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function Wl(i,t){return(i%t+t)%t}function $m(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function jm(i,t,e){return i!==t?(e-i)/(t-i):0}function is(i,t,e){return(1-e)*i+e*t}function Zm(i,t,e,n){return is(i,t,1-Math.exp(-e*n))}function Km(i,t=1){return t-Math.abs(Wl(i,t*2)-t)}function Jm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Qm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function tv(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ev(i,t){return i+Math.random()*(t-i)}function nv(i){return i*(.5-Math.random())}function iv(i){i!==void 0&&(nh=i);let t=nh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rv(i){return i*ns}function sv(i){return i*ps}function ml(i){return(i&i-1)===0&&i!==0}function av(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ka(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ov(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),d=a((t-n)/2),f=s((n-t)/2),v=a((n-t)/2);switch(r){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _r(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _e={DEG2RAD:ns,RAD2DEG:ps,generateUUID:Nr,clamp:be,euclideanModulo:Wl,mapLinear:$m,inverseLerp:jm,lerp:is,damp:Zm,pingpong:Km,smoothstep:Jm,smootherstep:Qm,randInt:tv,randFloat:ev,randFloatSpread:nv,seededRandom:iv,degToRad:rv,radToDeg:sv,isPowerOfTwo:ml,ceilPowerOfTwo:av,floorPowerOfTwo:ka,setQuaternionFromProperEuler:ov,normalize:De,denormalize:_r};let Bt=class $u{constructor(t=0,e=0){$u.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class ju{constructor(t,e,n,r,s,a,o,l,c){ju.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],v=n[8],g=r[0],p=r[3],m=r[6],x=r[1],_=r[4],b=r[7],P=r[2],C=r[5],A=r[8];return s[0]=a*g+o*x+l*P,s[3]=a*p+o*_+l*C,s[6]=a*m+o*b+l*A,s[1]=c*g+h*x+u*P,s[4]=c*p+h*_+u*C,s[7]=c*m+h*b+u*A,s[2]=d*g+f*x+v*P,s[5]=d*p+f*_+v*C,s[8]=d*m+f*b+v*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,v=e*u+n*d+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=u*g,t[1]=(r*c-h*n)*g,t[2]=(o*n-r*a)*g,t[3]=d*g,t[4]=(h*e-r*l)*g,t[5]=(r*s-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(go.makeScale(t,e)),this}rotate(t){return this.premultiply(go.makeRotation(-t)),this}translate(t,e){return this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const go=new zt;function Zu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lv(){const i=za("canvas");return i.style.display="block",i}const ih={};function Tr(i){i in ih||(ih[i]=!0,console.warn(i))}const rh=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sh=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Is={[Pn]:{transfer:Da,primaries:Fa,toReference:i=>i,fromReference:i=>i},[Se]:{transfer:ee,primaries:Fa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ya]:{transfer:Da,primaries:Oa,toReference:i=>i.applyMatrix3(sh),fromReference:i=>i.applyMatrix3(rh)},[Gl]:{transfer:ee,primaries:Oa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(sh),fromReference:i=>i.applyMatrix3(rh).convertLinearToSRGB()}},cv=new Set([Pn,Ya]),qt={enabled:!0,_workingColorSpace:Pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!cv.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Is[t].toReference,r=Is[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Is[i].primaries},getTransfer:function(i){return i===on?Da:Is[i].transfer}};function Ar(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _o(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gi,Ku=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=za("canvas")),Gi.width=t.width,Gi.height=t.height;const n=Gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=za("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ar(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ar(e[n]/255)*255):e[n]=Ar(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hv=0,Ju=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Nr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(yo(r[a].image)):s.push(yo(r[a]))}else s=yo(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ku.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uv=0,Sn=class Ta extends Or{constructor(t=Ta.DEFAULT_IMAGE,e=Ta.DEFAULT_MAPPING,n=gn,r=gn,s=Oe,a=ci,o=_n,l=fi,c=Ta.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Nr(),this.name="",this.source=new Ju(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ki?Se:on),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ku)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dl:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dl:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Se?ki:qu}set encoding(t){Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ki?Se:on}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=ku;Sn.DEFAULT_ANISOTROPY=1;let ke=class Qu{constructor(t=0,e=0,n=0,r=1){Qu.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],v=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(v+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,b=(f+1)/2,P=(m+1)/2,C=(h+d)/4,A=(u+g)/4,F=(v+p)/4;return _>b&&_>P?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=C/n,s=A/n):b>P?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=C/r,s=F/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=A/s,r=F/s),this.set(n,r,s,e),this}let x=Math.sqrt((p-v)*(p-v)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-v)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};class dv extends Or{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(Tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ki?Se:on),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ju(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends dv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class td extends Sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fv extends Sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let kr=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[a+0],f=s[a+1],v=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=v,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==v){let p=1-o;const m=l*d+c*f+h*v+u*g,x=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const P=Math.sqrt(_),C=Math.atan2(P,m*x);p=Math.sin(p*C)/P,o=Math.sin(o*C)/P}const b=o*x;if(l=l*p+d*b,c=c*p+f*b,h=h*p+v*b,u=u*p+g*b,p===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],d=s[a+1],f=s[a+2],v=s[a+3];return t[e]=o*v+h*u+l*f-c*d,t[e+1]=l*v+h*d+c*u-o*f,t[e+2]=c*v+h*f+o*d-l*u,t[e+3]=h*v-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),d=l(n/2),f=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u-d*f*v;break;case"YXZ":this._x=d*h*u+c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u+d*f*v;break;case"ZXY":this._x=d*h*u-c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u-d*f*v;break;case"ZYX":this._x=d*h*u-c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u+d*f*v;break;case"YZX":this._x=d*h*u+c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u-d*f*v;break;case"XZY":this._x=d*h*u-c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class ed{constructor(t=0,e=0,n=0){ed.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ah.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),h=2*(o*e-s*r),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xo.copy(this).projectOnVector(t),this.sub(xo)}reflect(t){return this.sub(xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const xo=new z,ah=new kr;let zr=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),Ds.subVectors(this.max,qr),Wi.subVectors(t.a,qr),Xi.subVectors(t.b,qr),qi.subVectors(t.c,qr),Kn.subVectors(Xi,Wi),Jn.subVectors(qi,Xi),wi.subVectors(Wi,qi);let e=[0,-Kn.z,Kn.y,0,-Jn.z,Jn.y,0,-wi.z,wi.y,Kn.z,0,-Kn.x,Jn.z,0,-Jn.x,wi.z,0,-wi.x,-Kn.y,Kn.x,0,-Jn.y,Jn.x,0,-wi.y,wi.x,0];return!Mo(e,Wi,Xi,qi,Ds)||(e=[1,0,0,0,1,0,0,0,1],!Mo(e,Wi,Xi,qi,Ds))?!1:(Fs.crossVectors(Kn,Jn),e=[Fs.x,Fs.y,Fs.z],Mo(e,Wi,Xi,qi,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};const Un=[new z,new z,new z,new z,new z,new z,new z,new z],ln=new z,Us=new zr,Wi=new z,Xi=new z,qi=new z,Kn=new z,Jn=new z,wi=new z,qr=new z,Ds=new z,Fs=new z,Ti=new z;function Mo(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ti.fromArray(i,s);const o=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const pv=new zr,Yr=new z,So=new z;let Xl=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pv.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);const e=Yr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Yr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(So)),this.expandByPoint(Yr.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Dn=new z,Eo=new z,Os=new z,Qn=new z,bo=new z,Ns=new z,wo=new z;let nd=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Eo.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Eo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Os),o=Qn.dot(this.direction),l=-Qn.dot(Os),c=Qn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,v;if(h>0)if(u=a*l-o,d=a*o-l,v=s*h,u>=0)if(d>=-v)if(d<=v){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Eo).addScaledVector(Os,d),f}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),r=Dn.dot(Dn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,r,s){bo.subVectors(e,t),Ns.subVectors(n,t),wo.crossVectors(bo,Ns);let a=this.direction.dot(wo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,t);const l=o*this.direction.dot(Ns.crossVectors(Qn,Ns));if(l<0)return null;const c=o*this.direction.dot(bo.cross(Qn));if(c<0||l+c>a)return null;const h=-o*Qn.dot(wo);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class vl{constructor(t,e,n,r,s,a,o,l,c,h,u,d,f,v,g,p){vl.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,h,u,d,f,v,g,p)}set(t,e,n,r,s,a,o,l,c,h,u,d,f,v,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=v,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vl().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Yi.setFromMatrixColumn(t,0).length(),s=1/Yi.setFromMatrixColumn(t,1).length(),a=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,f=a*u,v=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+v*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=v+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,v=c*h,g=c*u;e[0]=d+g*o,e[4]=v*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-v,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,v=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=v+f*o,e[1]=f+v*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,v=o*h,g=o*u;e[0]=l*h,e[4]=v*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,v=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=v*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+v,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,f=a*c,v=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=f*u-v,e[2]=v*u-f,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mv,t,vv)}lookAt(t,e,n){const r=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),ti.crossVectors(n,Xe),ti.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),ti.crossVectors(n,Xe)),ti.normalize(),ks.crossVectors(Xe,ti),r[0]=ti.x,r[4]=ks.x,r[8]=Xe.x,r[1]=ti.y,r[5]=ks.y,r[9]=Xe.y,r[2]=ti.z,r[6]=ks.z,r[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],v=n[2],g=n[6],p=n[10],m=n[14],x=n[3],_=n[7],b=n[11],P=n[15],C=r[0],A=r[4],F=r[8],$=r[12],y=r[1],T=r[5],D=r[9],I=r[13],S=r[2],L=r[6],U=r[10],O=r[14],B=r[3],G=r[7],Y=r[11],j=r[15];return s[0]=a*C+o*y+l*S+c*B,s[4]=a*A+o*T+l*L+c*G,s[8]=a*F+o*D+l*U+c*Y,s[12]=a*$+o*I+l*O+c*j,s[1]=h*C+u*y+d*S+f*B,s[5]=h*A+u*T+d*L+f*G,s[9]=h*F+u*D+d*U+f*Y,s[13]=h*$+u*I+d*O+f*j,s[2]=v*C+g*y+p*S+m*B,s[6]=v*A+g*T+p*L+m*G,s[10]=v*F+g*D+p*U+m*Y,s[14]=v*$+g*I+p*O+m*j,s[3]=x*C+_*y+b*S+P*B,s[7]=x*A+_*T+b*L+P*G,s[11]=x*F+_*D+b*U+P*Y,s[15]=x*$+_*I+b*O+P*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],v=t[3],g=t[7],p=t[11],m=t[15];return v*(+s*l*u-r*c*u-s*o*d+n*c*d+r*o*f-n*l*f)+g*(+e*l*f-e*c*d+s*a*d-r*a*f+r*c*h-s*l*h)+p*(+e*c*u-e*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+m*(-r*o*h-e*l*u+e*o*d+r*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],v=t[12],g=t[13],p=t[14],m=t[15],x=u*p*c-g*d*c+g*l*f-o*p*f-u*l*m+o*d*m,_=v*d*c-h*p*c-v*l*f+a*p*f+h*l*m-a*d*m,b=h*g*c-v*u*c+v*o*f-a*g*f-h*o*m+a*u*m,P=v*u*l-h*g*l-v*o*d+a*g*d+h*o*p-a*u*p,C=e*x+n*_+r*b+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=x*A,t[1]=(g*d*s-u*p*s-g*r*f+n*p*f+u*r*m-n*d*m)*A,t[2]=(o*p*s-g*l*s+g*r*c-n*p*c-o*r*m+n*l*m)*A,t[3]=(u*l*s-o*d*s-u*r*c+n*d*c+o*r*f-n*l*f)*A,t[4]=_*A,t[5]=(h*p*s-v*d*s+v*r*f-e*p*f-h*r*m+e*d*m)*A,t[6]=(v*l*s-a*p*s-v*r*c+e*p*c+a*r*m-e*l*m)*A,t[7]=(a*d*s-h*l*s+h*r*c-e*d*c-a*r*f+e*l*f)*A,t[8]=b*A,t[9]=(v*u*s-h*g*s-v*n*f+e*g*f+h*n*m-e*u*m)*A,t[10]=(a*g*s-v*o*s+v*n*c-e*g*c-a*n*m+e*o*m)*A,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*f-e*o*f)*A,t[12]=P*A,t[13]=(h*g*r-v*u*r+v*n*d-e*g*d-h*n*p+e*u*p)*A,t[14]=(v*o*r-a*g*r-v*n*l+e*g*l+a*n*p-e*o*p)*A,t[15]=(a*u*r-h*o*r+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,v=s*u,g=a*h,p=a*u,m=o*u,x=l*c,_=l*h,b=l*u,P=n.x,C=n.y,A=n.z;return r[0]=(1-(g+m))*P,r[1]=(f+b)*P,r[2]=(v-_)*P,r[3]=0,r[4]=(f-b)*C,r[5]=(1-(d+m))*C,r[6]=(p+x)*C,r[7]=0,r[8]=(v+_)*A,r[9]=(p-x)*A,r[10]=(1-(d+g))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Yi.set(r[0],r[1],r[2]).length();const a=Yi.set(r[4],r[5],r[6]).length(),o=Yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],cn.copy(this);const c=1/s,h=1/a,u=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,e.setFromRotationMatrix(cn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=qn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r);let f,v;if(o===qn)f=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Na)f=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=qn){const l=this.elements,c=1/(e-t),h=1/(n-r),u=1/(a-s),d=(e+t)*c,f=(n+r)*h;let v,g;if(o===qn)v=(a+s)*u,g=-2*u;else if(o===Na)v=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};const Yi=new z,cn=new Pe,mv=new z(0,0,0),vv=new z(1,1,1),ti=new z,ks=new z,Xe=new z,oh=new Pe,lh=new kr;let ql=class id{constructor(t=0,e=0,n=0,r=id.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lh.setFromEuler(this),this.setFromQuaternion(lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ql.DEFAULT_ORDER="XYZ";let Yl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gv=0;const ch=new z,$i=new kr,Fn=new Pe,zs=new z,$r=new z,_v=new z,yv=new kr,hh=new z(1,0,0),uh=new z(0,1,0),dh=new z(0,0,1),xv={type:"added"},Mv={type:"removed"};let Zn=class Aa extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Aa.DEFAULT_UP.clone();const t=new z,e=new ql,n=new kr,r=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pe},normalMatrix:{value:new zt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=Aa.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Aa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(dh,t)}translateOnAxis(t,e){return ch.copy(t).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zs.copy(t):zs.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt($r,zs,this.up):Fn.lookAt(zs,$r,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(Fn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(xv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mv)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,t,_v),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,yv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}};Zn.DEFAULT_UP=new z(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new z,On=new z,To=new z,Nn=new z,ji=new z,Zi=new z,fh=new z,Ao=new z,Co=new z,Ro=new z;let Bs=class yr{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),hn.subVectors(t,e),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){hn.subVectors(r,e),On.subVectors(n,e),To.subVectors(t,e);const a=hn.dot(hn),o=hn.dot(On),l=hn.dot(To),c=On.dot(On),h=On.dot(To),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,v=(a*h-o*l)*d;return s.set(1-f-v,v,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static isFrontFacing(t,e,n,r){return hn.subVectors(n,e),On.subVectors(t,e),hn.cross(On).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),hn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yr.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return yr.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return yr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;ji.subVectors(r,n),Zi.subVectors(s,n),Ao.subVectors(t,n);const l=ji.dot(Ao),c=Zi.dot(Ao);if(l<=0&&c<=0)return e.copy(n);Co.subVectors(t,r);const h=ji.dot(Co),u=Zi.dot(Co);if(h>=0&&u<=h)return e.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ji,a);Ro.subVectors(t,s);const f=ji.dot(Ro),v=Zi.dot(Ro);if(v>=0&&f<=v)return e.copy(s);const g=f*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Zi,o);const p=h*v-f*u;if(p<=0&&u-h>=0&&f-v>=0)return fh.subVectors(s,r),o=(u-h)/(u-h+(f-v)),e.copy(r).addScaledVector(fh,o);const m=1/(p+g+d);return a=g*m,o=d*m,e.copy(n).addScaledVector(ji,a).addScaledVector(Zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}};const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Lo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=qt.workingColorSpace){if(t=Wl(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Lo(a,s,t+1/3),this.g=Lo(a,s,t),this.b=Lo(a,s,t-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(t,e=Se){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const n=rd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return qt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(be(Ce.r*255,0,255))*65536+Math.round(be(Ce.g*255,0,255))*256+Math.round(be(Ce.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,r=Ce.g,s=Ce.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Se){qt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,r=Ce.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Hs);const n=is(ei.h,Hs.h,e),r=is(ei.s,Hs.s,e),s=is(ei.l,Hs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ce=new jt;jt.NAMES=rd;let Sv=0,$a=class extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=wr,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ll&&(n.blendSrc=this.blendSrc),this.blendDst!==cl&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},$l=class extends $a{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};const ce=new z,Vs=new Bt;let Rn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=th,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Tr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_r(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_r(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_r(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_r(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_r(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),r=De(r,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==th&&(t.usage=this.usage),t}},sd=class extends Rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}},ad=class extends Rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Ln=class extends Rn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ev=0;const en=new Pe,Po=new Zn,Ki=new z,qe=new zr,jr=new zr,me=new z;let Br=class od extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zu(t)?ad:sd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Po.lookAt(t),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ln(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];qe.setFromBufferAttribute(s),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(me.addVectors(qe.min,jr.min),qe.expandByPoint(me),me.addVectors(qe.max,jr.max),qe.expandByPoint(me)):(qe.expandByPoint(jr.min),qe.expandByPoint(jr.max))}qe.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)me.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(me));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)me.fromBufferAttribute(o,c),l&&(Ki.fromBufferAttribute(t,c),me.add(Ki)),r=Math.max(r,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let y=0;y<o;y++)c[y]=new z,h[y]=new z;const u=new z,d=new z,f=new z,v=new Bt,g=new Bt,p=new Bt,m=new z,x=new z;function _(y,T,D){u.fromArray(r,y*3),d.fromArray(r,T*3),f.fromArray(r,D*3),v.fromArray(a,y*2),g.fromArray(a,T*2),p.fromArray(a,D*2),d.sub(u),f.sub(u),g.sub(v),p.sub(v);const I=1/(g.x*p.y-p.x*g.y);isFinite(I)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-g.y).multiplyScalar(I),x.copy(f).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(I),c[y].add(m),c[T].add(m),c[D].add(m),h[y].add(x),h[T].add(x),h[D].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let y=0,T=b.length;y<T;++y){const D=b[y],I=D.start,S=D.count;for(let L=I,U=I+S;L<U;L+=3)_(n[L+0],n[L+1],n[L+2])}const P=new z,C=new z,A=new z,F=new z;function $(y){A.fromArray(s,y*3),F.copy(A);const T=c[y];P.copy(T),P.sub(A.multiplyScalar(A.dot(T))).normalize(),C.crossVectors(F,T);const I=C.dot(h[y])<0?-1:1;l[y*4]=P.x,l[y*4+1]=P.y,l[y*4+2]=P.z,l[y*4+3]=I}for(let y=0,T=b.length;y<T;++y){const D=b[y],I=D.start,S=D.count;for(let L=I,U=I+S;L<U;L+=3)$(n[L+0]),$(n[L+1]),$(n[L+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,h=new z,u=new z;if(t)for(let d=0,f=t.count;d<f;d+=3){const v=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,v=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let m=0;m<h;m++)d[v++]=c[f++]}return new Rn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new od,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const ph=new Pe,Ai=new nd,Gs=new Xl,mh=new z,Ji=new z,Qi=new z,tr=new z,Io=new z,Ws=new z,Xs=new Bt,qs=new Bt,Ys=new Bt,vh=new z,gh=new z,_h=new z,$s=new z,js=new z;let Cn=class extends Zn{constructor(t=new Br,e=new $l){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ws.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Io.fromBufferAttribute(u,t),a?Ws.addScaledVector(Io,h):Ws.addScaledVector(Io.sub(e),h))}e.add(Ws)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Ai.copy(t.ray).recast(t.near),!(Gs.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Gs,mh)===null||Ai.origin.distanceToSquared(mh)>(t.far-t.near)**2))&&(ph.copy(s).invert(),Ai.copy(t.ray).applyMatrix4(ph),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const p=d[v],m=a[p.materialIndex],x=Math.max(p.start,f.start),_=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=x,P=_;b<P;b+=3){const C=o.getX(b),A=o.getX(b+1),F=o.getX(b+2);r=Zs(this,m,t,n,c,h,u,C,A,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=v,m=g;p<m;p+=3){const x=o.getX(p),_=o.getX(p+1),b=o.getX(p+2);r=Zs(this,a,t,n,c,h,u,x,_,b),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const p=d[v],m=a[p.materialIndex],x=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=x,P=_;b<P;b+=3){const C=b,A=b+1,F=b+2;r=Zs(this,m,t,n,c,h,u,C,A,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=v,m=g;p<m;p+=3){const x=p,_=p+1,b=p+2;r=Zs(this,a,t,n,c,h,u,x,_,b),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}};function bv(i,t,e,n,r,s,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===yi,o),l===null)return null;js.copy(o),js.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(js);return c<e.near||c>e.far?null:{distance:c,point:js.clone(),object:i}}function Zs(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Ji),i.getVertexPosition(l,Qi),i.getVertexPosition(c,tr);const h=bv(i,t,e,n,Ji,Qi,tr,$s);if(h){r&&(Xs.fromBufferAttribute(r,o),qs.fromBufferAttribute(r,l),Ys.fromBufferAttribute(r,c),h.uv=Bs.getInterpolation($s,Ji,Qi,tr,Xs,qs,Ys,new Bt)),s&&(Xs.fromBufferAttribute(s,o),qs.fromBufferAttribute(s,l),Ys.fromBufferAttribute(s,c),h.uv1=Bs.getInterpolation($s,Ji,Qi,tr,Xs,qs,Ys,new Bt),h.uv2=h.uv1),a&&(vh.fromBufferAttribute(a,o),gh.fromBufferAttribute(a,l),_h.fromBufferAttribute(a,c),h.normal=Bs.getInterpolation($s,Ji,Qi,tr,vh,gh,_h,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new z,materialIndex:0};Bs.getNormal(Ji,Qi,tr,u.normal),h.face=u}return h}class _s extends Br{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;v("z","y","x",-1,-1,n,e,t,a,s,0),v("z","y","x",1,-1,n,e,-t,a,s,1),v("x","z","y",1,1,t,n,e,r,a,2),v("x","z","y",1,-1,t,n,-e,r,a,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ln(c,3)),this.setAttribute("normal",new Ln(h,3)),this.setAttribute("uv",new Ln(u,2));function v(g,p,m,x,_,b,P,C,A,F,$){const y=b/A,T=P/F,D=b/2,I=P/2,S=C/2,L=A+1,U=F+1;let O=0,B=0;const G=new z;for(let Y=0;Y<U;Y++){const j=Y*T-I;for(let st=0;st<L;st++){const pt=st*y-D;G[g]=pt*x,G[p]=j*_,G[m]=S,c.push(G.x,G.y,G.z),G[g]=0,G[p]=0,G[m]=C>0?1:-1,h.push(G.x,G.y,G.z),u.push(st/A),u.push(1-Y/F),O+=1}}for(let Y=0;Y<F;Y++)for(let j=0;j<A;j++){const st=d+j+L*Y,pt=d+j+L*(Y+1),q=d+(j+1)+L*(Y+1),K=d+(j+1)+L*Y;l.push(st,pt,K),l.push(pt,q,K),B+=6}o.addGroup(f,B,$),f+=B,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ir(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=Ir(i[e]);for(const r in n)t[r]=n[r]}return t}function wv(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ld(i){return i.getRenderTarget()===null?i.outputColorSpace:qt.workingColorSpace}const Tv={clone:Ir,merge:Fe};var Av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let Mi=class extends $a{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Av,this.fragmentShader=Cv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=wv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}};class cd extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new z,yh=new Bt,xh=new Bt;class an extends cd{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,yh,xh),e.subVectors(xh,yh)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ns*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const er=-90,nr=1;class Rv extends Zn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(er,nr,t,e);r.layers=this.layers,this.add(r);const s=new an(er,nr,t,e);s.layers=this.layers,this.add(s);const a=new an(er,nr,t,e);a.layers=this.layers,this.add(a);const o=new an(er,nr,t,e);o.layers=this.layers,this.add(o);const l=new an(er,nr,t,e);l.layers=this.layers,this.add(l);const c=new an(er,nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Na)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class hd extends Sn{constructor(t,e,n,r,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Rr,super(t,e,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lv extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(Tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ki?Se:on),this.texture=new hd(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Oe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _s(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:ui});s.uniforms.tEquirect.value=e;const a=new Cn(r,s),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=Oe),new Rv(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Uo=new z,Pv=new z,Iv=new zt;class Ii{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Uo.subVectors(n,e).cross(Pv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Uo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Iv.getNormalMatrix(t),r=this.coplanarPoint(Uo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Xl,Ks=new z;class jl{constructor(t=new Ii,e=new Ii,n=new Ii,r=new Ii,s=new Ii,a=new Ii){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],f=r[8],v=r[9],g=r[10],p=r[11],m=r[12],x=r[13],_=r[14],b=r[15];if(n[0].setComponents(l-s,d-c,p-f,b-m).normalize(),n[1].setComponents(l+s,d+c,p+f,b+m).normalize(),n[2].setComponents(l+a,d+h,p+v,b+x).normalize(),n[3].setComponents(l-a,d-h,p-v,b-x).normalize(),n[4].setComponents(l-o,d-u,p-g,b-_).normalize(),e===qn)n[5].setComponents(l+o,d+u,p+g,b+_).normalize();else if(e===Na)n[5].setComponents(o,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ks.x=r.normal.x>0?t.max.x:t.min.x,Ks.y=r.normal.y>0?t.max.y:t.min.y,Ks.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ud(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Uv(i,t){const e=t.isWebGL2,n=new WeakMap;function r(c,h){const u=c.array,d=c.usage,f=u.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:v,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,h,u){const d=h.array,f=h._updateRange,v=h.updateRanges;if(i.bindBuffer(u,c),f.count===-1&&v.length===0&&i.bufferSubData(u,0,d),v.length!==0){for(let g=0,p=v.length;g<p;g++){const m=v[g];e?i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,r(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class ja extends Br{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=t/o,d=e/l,f=[],v=[],g=[],p=[];for(let m=0;m<h;m++){const x=m*d-a;for(let _=0;_<c;_++){const b=_*u-s;v.push(b,-x,0),g.push(0,0,1),p.push(_/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const _=x+c*m,b=x+c*(m+1),P=x+1+c*(m+1),C=x+1+c*m;f.push(_,b,C),f.push(b,P,C)}this.setIndex(f),this.setAttribute("position",new Ln(v,3)),this.setAttribute("normal",new Ln(g,3)),this.setAttribute("uv",new Ln(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ja(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$v=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ig=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ug=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,dg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ag=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ig=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ug=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ng=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,B0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,H0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,J0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,u_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:Dv,alphahash_pars_fragment:Fv,alphamap_fragment:Ov,alphamap_pars_fragment:Nv,alphatest_fragment:kv,alphatest_pars_fragment:zv,aomap_fragment:Bv,aomap_pars_fragment:Hv,batching_pars_vertex:Vv,batching_vertex:Gv,begin_vertex:Wv,beginnormal_vertex:Xv,bsdfs:qv,iridescence_fragment:Yv,bumpmap_pars_fragment:$v,clipping_planes_fragment:jv,clipping_planes_pars_fragment:Zv,clipping_planes_pars_vertex:Kv,clipping_planes_vertex:Jv,color_fragment:Qv,color_pars_fragment:tg,color_pars_vertex:eg,color_vertex:ng,common:ig,cube_uv_reflection_fragment:rg,defaultnormal_vertex:sg,displacementmap_pars_vertex:ag,displacementmap_vertex:og,emissivemap_fragment:lg,emissivemap_pars_fragment:cg,colorspace_fragment:hg,colorspace_pars_fragment:ug,envmap_fragment:dg,envmap_common_pars_fragment:fg,envmap_pars_fragment:pg,envmap_pars_vertex:mg,envmap_physical_pars_fragment:Ag,envmap_vertex:vg,fog_vertex:gg,fog_pars_vertex:_g,fog_fragment:yg,fog_pars_fragment:xg,gradientmap_pars_fragment:Mg,lightmap_fragment:Sg,lightmap_pars_fragment:Eg,lights_lambert_fragment:bg,lights_lambert_pars_fragment:wg,lights_pars_begin:Tg,lights_toon_fragment:Cg,lights_toon_pars_fragment:Rg,lights_phong_fragment:Lg,lights_phong_pars_fragment:Pg,lights_physical_fragment:Ig,lights_physical_pars_fragment:Ug,lights_fragment_begin:Dg,lights_fragment_maps:Fg,lights_fragment_end:Og,logdepthbuf_fragment:Ng,logdepthbuf_pars_fragment:kg,logdepthbuf_pars_vertex:zg,logdepthbuf_vertex:Bg,map_fragment:Hg,map_pars_fragment:Vg,map_particle_fragment:Gg,map_particle_pars_fragment:Wg,metalnessmap_fragment:Xg,metalnessmap_pars_fragment:qg,morphcolor_vertex:Yg,morphnormal_vertex:$g,morphtarget_pars_vertex:jg,morphtarget_vertex:Zg,normal_fragment_begin:Kg,normal_fragment_maps:Jg,normal_pars_fragment:Qg,normal_pars_vertex:t0,normal_vertex:e0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:a0,opaque_fragment:o0,packing:l0,premultiplied_alpha_fragment:c0,project_vertex:h0,dithering_fragment:u0,dithering_pars_fragment:d0,roughnessmap_fragment:f0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:v0,shadowmap_vertex:g0,shadowmask_pars_fragment:_0,skinbase_vertex:y0,skinning_pars_vertex:x0,skinning_vertex:M0,skinnormal_vertex:S0,specularmap_fragment:E0,specularmap_pars_fragment:b0,tonemapping_fragment:w0,tonemapping_pars_fragment:T0,transmission_fragment:A0,transmission_pars_fragment:C0,uv_pars_fragment:R0,uv_pars_vertex:L0,uv_vertex:P0,worldpos_vertex:I0,background_vert:U0,background_frag:D0,backgroundCube_vert:F0,backgroundCube_frag:O0,cube_vert:N0,cube_frag:k0,depth_vert:z0,depth_frag:B0,distanceRGBA_vert:H0,distanceRGBA_frag:V0,equirect_vert:G0,equirect_frag:W0,linedashed_vert:X0,linedashed_frag:q0,meshbasic_vert:Y0,meshbasic_frag:$0,meshlambert_vert:j0,meshlambert_frag:Z0,meshmatcap_vert:K0,meshmatcap_frag:J0,meshnormal_vert:Q0,meshnormal_frag:t_,meshphong_vert:e_,meshphong_frag:n_,meshphysical_vert:i_,meshphysical_frag:r_,meshtoon_vert:s_,meshtoon_frag:a_,points_vert:o_,points_frag:l_,shadow_vert:c_,shadow_frag:h_,sprite_vert:u_,sprite_frag:d_},rt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Tn={basic:{uniforms:Fe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Fe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Fe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Fe([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Fe([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Fe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Fe([rt.points,rt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Fe([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Fe([rt.common,rt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Fe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Fe([rt.sprite,rt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Fe([rt.common,rt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Fe([rt.lights,rt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Tn.physical={uniforms:Fe([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Js={r:0,b:0,g:0};function f_(i,t,e,n,r,s,a){const o=new jt(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function v(p,m){let x=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?e:t).get(_)),_===null?g(o,l):_&&_.isColor&&(g(_,1),x=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===qa)?(h===void 0&&(h=new Cn(new _s(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Ir(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=qt.getTransfer(_.colorSpace)!==ee,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Cn(new ja(2,2),new Mi({name:"BackgroundMaterial",uniforms:Ir(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=qt.getTransfer(_.colorSpace)!==ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(Js,ld(i)),n.buffers.color.setClear(Js.r,Js.g,Js.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:v}}function p_(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function u(S,L,U,O,B){let G=!1;if(a){const Y=g(O,U,L);c!==Y&&(c=Y,f(c.object)),G=m(S,O,U,B),G&&x(S,O,U,B)}else{const Y=L.wireframe===!0;(c.geometry!==O.id||c.program!==U.id||c.wireframe!==Y)&&(c.geometry=O.id,c.program=U.id,c.wireframe=Y,G=!0)}B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,F(S,L,U,O),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(S){return n.isWebGL2?i.bindVertexArray(S):s.bindVertexArrayOES(S)}function v(S){return n.isWebGL2?i.deleteVertexArray(S):s.deleteVertexArrayOES(S)}function g(S,L,U){const O=U.wireframe===!0;let B=o[S.id];B===void 0&&(B={},o[S.id]=B);let G=B[L.id];G===void 0&&(G={},B[L.id]=G);let Y=G[O];return Y===void 0&&(Y=p(d()),G[O]=Y),Y}function p(S){const L=[],U=[],O=[];for(let B=0;B<r;B++)L[B]=0,U[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:O,object:S,attributes:{},index:null}}function m(S,L,U,O){const B=c.attributes,G=L.attributes;let Y=0;const j=U.getAttributes();for(const st in j)if(j[st].location>=0){const q=B[st];let K=G[st];if(K===void 0&&(st==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),st==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),q===void 0||q.attribute!==K||K&&q.data!==K.data)return!0;Y++}return c.attributesNum!==Y||c.index!==O}function x(S,L,U,O){const B={},G=L.attributes;let Y=0;const j=U.getAttributes();for(const st in j)if(j[st].location>=0){let q=G[st];q===void 0&&(st==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),st==="instanceColor"&&S.instanceColor&&(q=S.instanceColor));const K={};K.attribute=q,q&&q.data&&(K.data=q.data),B[st]=K,Y++}c.attributes=B,c.attributesNum=Y,c.index=O}function _(){const S=c.newAttributes;for(let L=0,U=S.length;L<U;L++)S[L]=0}function b(S){P(S,0)}function P(S,L){const U=c.newAttributes,O=c.enabledAttributes,B=c.attributeDivisors;U[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),B[S]!==L&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](S,L),B[S]=L)}function C(){const S=c.newAttributes,L=c.enabledAttributes;for(let U=0,O=L.length;U<O;U++)L[U]!==S[U]&&(i.disableVertexAttribArray(U),L[U]=0)}function A(S,L,U,O,B,G,Y){Y===!0?i.vertexAttribIPointer(S,L,U,B,G):i.vertexAttribPointer(S,L,U,O,B,G)}function F(S,L,U,O){if(n.isWebGL2===!1&&(S.isInstancedMesh||O.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const B=O.attributes,G=U.getAttributes(),Y=L.defaultAttributeValues;for(const j in G){const st=G[j];if(st.location>=0){let pt=B[j];if(pt===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor)),pt!==void 0){const q=pt.normalized,K=pt.itemSize,ot=e.get(pt);if(ot===void 0)continue;const _t=ot.buffer,ht=ot.type,lt=ot.bytesPerElement,Lt=n.isWebGL2===!0&&(ht===i.INT||ht===i.UNSIGNED_INT||pt.gpuType===zu);if(pt.isInterleavedBufferAttribute){const St=pt.data,N=St.stride,ue=pt.offset;if(St.isInstancedInterleavedBuffer){for(let yt=0;yt<st.locationSize;yt++)P(st.location+yt,St.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let yt=0;yt<st.locationSize;yt++)b(st.location+yt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let yt=0;yt<st.locationSize;yt++)A(st.location+yt,K/st.locationSize,ht,q,N*lt,(ue+K/st.locationSize*yt)*lt,Lt)}else{if(pt.isInstancedBufferAttribute){for(let St=0;St<st.locationSize;St++)P(st.location+St,pt.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let St=0;St<st.locationSize;St++)b(st.location+St);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let St=0;St<st.locationSize;St++)A(st.location+St,K/st.locationSize,ht,q,K*lt,K/st.locationSize*St*lt,Lt)}}else if(Y!==void 0){const q=Y[j];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(st.location,q);break;case 3:i.vertexAttrib3fv(st.location,q);break;case 4:i.vertexAttrib4fv(st.location,q);break;default:i.vertexAttrib1fv(st.location,q)}}}}C()}function $(){D();for(const S in o){const L=o[S];for(const U in L){const O=L[U];for(const B in O)v(O[B].object),delete O[B];delete L[U]}delete o[S]}}function y(S){if(o[S.id]===void 0)return;const L=o[S.id];for(const U in L){const O=L[U];for(const B in O)v(O[B].object),delete O[B];delete L[U]}delete o[S.id]}function T(S){for(const L in o){const U=o[L];if(U[S.id]===void 0)continue;const O=U[S.id];for(const B in O)v(O[B].object),delete O[B];delete U[S.id]}}function D(){I(),h=!0,c!==l&&(c=l,f(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:D,resetDefaultState:I,dispose:$,releaseStatesOfGeometry:y,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:b,disableUnusedAttributes:C}}function m_(i,t,e,n){const r=n.isWebGL2;let s;function a(h){s=h}function o(h,u){i.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,d){if(d===0)return;let f,v;if(r)f=i,v="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](s,h,u,d),e.update(u,s,d)}function c(h,u,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<d;v++)this.render(h[v],u[v]);else{f.multiDrawArraysWEBGL(s,h,0,u,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g];e.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function v_(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,b=a||t.has("OES_texture_float"),P=_&&b,C=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:P,maxSamples:C}}function g_(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Ii,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||r;return r=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const v=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!r||v===null||v.length===0||s&&!p)s?h(null):c();else{const x=s?0:n,_=x*4;let b=m.clippingState||null;l.value=b,b=h(v,d,_,f);for(let P=0;P!==_;++P)b[P]=e[P];m.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,v){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const m=f+g*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,b=f;_!==g;++_,b+=4)a.copy(u[_]).applyMatrix4(x,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function __(i){let t=new WeakMap;function e(a,o){return o===hl?a.mapping=Rr:o===ul&&(a.mapping=Lr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===hl||o===ul)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Lv(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class y_ extends cd{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mr=4,Mh=[.125,.215,.35,.446,.526,.582],Fi=20,Do=new y_,Sh=new jt;let Fo=null,Oo=0,No=0;const Ui=(1+Math.sqrt(5))/2,ir=1/Ui,Eh=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Ui,ir),new z(0,Ui,-ir),new z(ir,0,Ui),new z(-ir,0,Ui),new z(Ui,ir,0),new z(-Ui,ir,0)];class bh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo,Oo,No),t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rr||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:fs,format:_n,colorSpace:Pn,depthBuffer:!1},r=wh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x_(s)),this._blurMaterial=M_(s,t,e)}return r}_compileMaterial(t){const e=new Cn(this._lodPlanes[0],t);this._renderer.compile(e,Do)}_sceneToCubeUV(t,e,n,r){const o=new an(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Sh),h.toneMapping=di,h.autoClear=!1;const f=new $l({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),v=new Cn(new _s,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(Sh),g=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):x===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const _=this._cubeSize;Qs(r,x*_,m>2?_:0,_,_),h.setRenderTarget(r),g&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Rr||t.mapping===Lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Cn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Do)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Eh[(r-1)%Eh.length];this._blur(t,r-1,r,s,a)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Cn(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),g=s/v,p=isFinite(s)?1+Math.floor(h*g):Fi;p>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fi}`);const m=[];let x=0;for(let A=0;A<Fi;++A){const F=A/g,$=Math.exp(-F*F/2);m.push($),A===0?x+=$:A<p&&(x+=2*$)}for(let A=0;A<m.length;A++)m[A]=m[A]/x;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-n;const b=this._sizeLods[r],P=3*b*(r>_-Mr?r-_+Mr:0),C=4*(this._cubeSize-b);Qs(e,P,C,3*b,2*b),l.setRenderTarget(e),l.render(u,Do)}}function x_(i){const t=[],e=[],n=[];let r=i;const s=i-Mr+1+Mh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Mr?l=Mh[a-i+Mr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,v=6,g=3,p=2,m=1,x=new Float32Array(g*v*f),_=new Float32Array(p*v*f),b=new Float32Array(m*v*f);for(let C=0;C<f;C++){const A=C%3*2/3-1,F=C>2?0:-1,$=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];x.set($,g*v*C),_.set(d,p*v*C);const y=[C,C,C,C,C,C];b.set(y,m*v*C)}const P=new Br;P.setAttribute("position",new Rn(x,g)),P.setAttribute("uv",new Rn(_,p)),P.setAttribute("faceIndex",new Rn(b,m)),t.push(P),r>Mr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wh(i,t,e){const n=new xi(i,t,e);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function M_(i,t,e){const n=new Float32Array(Fi),r=new z(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Th(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ah(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function S_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===hl||l===ul,h=l===Rr||l===Lr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new bh(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&r(u)){e===null&&(e=new bh(i));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function E_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function b_(i,t,e,n){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const v in f){const g=f[v];for(let p=0,m=g.length;p<m;p++)t.update(g[p],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,v=u.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let _=0,b=x.length;_<b;_+=3){const P=x[_+0],C=x[_+1],A=x[_+2];d.push(P,C,C,A,A,P)}}else if(v!==void 0){const x=v.array;g=v.version;for(let _=0,b=x.length/3-1;_<b;_+=3){const P=_+0,C=_+1,A=_+2;d.push(P,C,C,A,A,P)}}else return;const p=new(Zu(d)?ad:sd)(d,1);p.version=g;const m=s.get(u);m&&t.remove(m),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function w_(i,t,e,n){const r=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,v){i.drawElements(s,v,o,f*l),e.update(v,s,1)}function u(f,v,g){if(g===0)return;let p,m;if(r)p=i,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,v,o,f*l,g),e.update(v,s,g)}function d(f,v,g){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<g;m++)this.render(f[m]/l,v[m]);else{p.multiDrawElementsWEBGL(s,v,0,o,f,0,g);let m=0;for(let x=0;x<g;x++)m+=v[x];e.update(m,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function T_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function A_(i,t){return i[0]-t[0]}function C_(i,t){return Math.abs(t[1])-Math.abs(i[1])}function R_(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,a=new ke,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=f!==void 0?f.length:0;let g=s.get(h);if(g===void 0||g.count!==v){let S=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",S)};g!==void 0&&g.texture.dispose();const x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let F=0;x===!0&&(F=1),_===!0&&(F=2),b===!0&&(F=3);let $=h.attributes.position.count*F,y=1;$>t.maxTextureSize&&(y=Math.ceil($/t.maxTextureSize),$=t.maxTextureSize);const T=new Float32Array($*y*4*v),D=new td(T,$,y,v);D.type=Xn,D.needsUpdate=!0;const I=F*4;for(let L=0;L<v;L++){const U=P[L],O=C[L],B=A[L],G=$*y*4*L;for(let Y=0;Y<U.count;Y++){const j=Y*I;x===!0&&(a.fromBufferAttribute(U,Y),T[G+j+0]=a.x,T[G+j+1]=a.y,T[G+j+2]=a.z,T[G+j+3]=0),_===!0&&(a.fromBufferAttribute(O,Y),T[G+j+4]=a.x,T[G+j+5]=a.y,T[G+j+6]=a.z,T[G+j+7]=0),b===!0&&(a.fromBufferAttribute(B,Y),T[G+j+8]=a.x,T[G+j+9]=a.y,T[G+j+10]=a.z,T[G+j+11]=B.itemSize===4?a.w:1)}}g={count:v,texture:D,size:new Bt($,y)},s.set(h,g),h.addEventListener("dispose",S)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];const m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",m),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const f=d===void 0?0:d.length;let v=n[h.id];if(v===void 0||v.length!==f){v=[];for(let _=0;_<f;_++)v[_]=[_,0];n[h.id]=v}for(let _=0;_<f;_++){const b=v[_];b[0]=_,b[1]=d[_]}v.sort(C_);for(let _=0;_<8;_++)_<f&&v[_][1]?(o[_][0]=v[_][0],o[_][1]=v[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(A_);const g=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let _=0;_<8;_++){const b=o[_],P=b[0],C=b[1];P!==Number.MAX_SAFE_INTEGER&&C?(g&&h.getAttribute("morphTarget"+_)!==g[P]&&h.setAttribute("morphTarget"+_,g[P]),p&&h.getAttribute("morphNormal"+_)!==p[P]&&h.setAttribute("morphNormal"+_,p[P]),r[_]=C,m+=C):(g&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),r[_]=0)}const x=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function L_(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}let dd=class extends Sn{constructor(t,e,n,r,s,a,o,l,c,h){if(h=h!==void 0?h:Ni,h!==Ni&&h!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ni&&(n=hi),n===void 0&&h===Pr&&(n=Oi),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ne,this.minFilter=l!==void 0?l:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}};const fd=new Sn,pd=new dd(1,1);pd.compareFunction=Yu;const md=new td,vd=new fv,gd=new hd,Ch=[],Rh=[],Lh=new Float32Array(16),Ph=new Float32Array(9),Ih=new Float32Array(4);function Hr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ch[r];if(s===void 0&&(s=new Float32Array(r),Ch[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function de(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Za(i,t){let e=Rh[t];e===void 0&&(e=new Int32Array(t),Rh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function P_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function I_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2fv(this.addr,t),fe(e,t)}}function U_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;i.uniform3fv(this.addr,t),fe(e,t)}}function D_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4fv(this.addr,t),fe(e,t)}}function F_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;Ih.set(n),i.uniformMatrix2fv(this.addr,!1,Ih),fe(e,n)}}function O_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;Ph.set(n),i.uniformMatrix3fv(this.addr,!1,Ph),fe(e,n)}}function N_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;Lh.set(n),i.uniformMatrix4fv(this.addr,!1,Lh),fe(e,n)}}function k_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2iv(this.addr,t),fe(e,t)}}function B_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3iv(this.addr,t),fe(e,t)}}function H_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4iv(this.addr,t),fe(e,t)}}function V_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function G_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2uiv(this.addr,t),fe(e,t)}}function W_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3uiv(this.addr,t),fe(e,t)}}function X_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4uiv(this.addr,t),fe(e,t)}}function q_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?pd:fd;e.setTexture2D(t||s,r)}function Y_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||vd,r)}function $_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||gd,r)}function j_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||md,r)}function Z_(i){switch(i){case 5126:return P_;case 35664:return I_;case 35665:return U_;case 35666:return D_;case 35674:return F_;case 35675:return O_;case 35676:return N_;case 5124:case 35670:return k_;case 35667:case 35671:return z_;case 35668:case 35672:return B_;case 35669:case 35673:return H_;case 5125:return V_;case 36294:return G_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return j_}}function K_(i,t){i.uniform1fv(this.addr,t)}function J_(i,t){const e=Hr(t,this.size,2);i.uniform2fv(this.addr,e)}function Q_(i,t){const e=Hr(t,this.size,3);i.uniform3fv(this.addr,e)}function ty(i,t){const e=Hr(t,this.size,4);i.uniform4fv(this.addr,e)}function ey(i,t){const e=Hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ny(i,t){const e=Hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function iy(i,t){const e=Hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ry(i,t){i.uniform1iv(this.addr,t)}function sy(i,t){i.uniform2iv(this.addr,t)}function ay(i,t){i.uniform3iv(this.addr,t)}function oy(i,t){i.uniform4iv(this.addr,t)}function ly(i,t){i.uniform1uiv(this.addr,t)}function cy(i,t){i.uniform2uiv(this.addr,t)}function hy(i,t){i.uniform3uiv(this.addr,t)}function uy(i,t){i.uniform4uiv(this.addr,t)}function dy(i,t,e){const n=this.cache,r=t.length,s=Za(e,r);de(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||fd,s[a])}function fy(i,t,e){const n=this.cache,r=t.length,s=Za(e,r);de(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||vd,s[a])}function py(i,t,e){const n=this.cache,r=t.length,s=Za(e,r);de(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||gd,s[a])}function my(i,t,e){const n=this.cache,r=t.length,s=Za(e,r);de(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||md,s[a])}function vy(i){switch(i){case 5126:return K_;case 35664:return J_;case 35665:return Q_;case 35666:return ty;case 35674:return ey;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return ry;case 35667:case 35671:return sy;case 35668:case 35672:return ay;case 35669:case 35673:return oy;case 5125:return ly;case 36294:return cy;case 36295:return hy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}class gy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Z_(e.type)}}class _y{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vy(e.type)}}class yy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Uh(i,t){i.seq.push(t),i.map[t.id]=t}function xy(i,t,e){const n=i.name,r=n.length;for(ko.lastIndex=0;;){const s=ko.exec(n),a=ko.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Uh(e,c===void 0?new gy(o,i,t):new _y(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new yy(o),Uh(e,u)),e=u}}}class Ca{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);xy(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Dh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const My=37297;let Sy=0;function Ey(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function by(i){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(i);let n;switch(t===e?n="":t===Oa&&e===Fa?n="LinearDisplayP3ToLinearSRGB":t===Fa&&e===Oa&&(n="LinearSRGBToLinearDisplayP3"),i){case Pn:case Ya:return[n,"LinearTransferOETF"];case Se:case Gl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Fh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Ey(i.getShaderSource(t),a)}else return r}function wy(i,t){const e=by(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ty(i,t){let e;switch(t){case Em:e="Linear";break;case bm:e="Reinhard";break;case wm:e="OptimizedCineon";break;case Tm:e="ACESFilmic";break;case Cm:e="AgX";break;case Am:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ay(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sr).join(`
`)}function Cy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function Ry(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ly(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Sr(i){return i!==""}function Oh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Py=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(i){return i.replace(Py,Uy)}const Iy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Uy(i,t){let e=Ut[t];if(e===void 0){const n=Iy.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return gl(e)}const Dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(i){return i.replace(Dy,Fy)}function Fy(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Oy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ny(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rr:case Lr:t="ENVMAP_TYPE_CUBE";break;case qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ky(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Lr:t="ENVMAP_MODE_REFRACTION";break}return t}function zy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nu:t="ENVMAP_BLENDING_MULTIPLY";break;case Mm:t="ENVMAP_BLENDING_MIX";break;case Sm:t="ENVMAP_BLENDING_ADD";break}return t}function By(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Hy(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Oy(e),c=Ny(e),h=ky(e),u=zy(e),d=By(e),f=e.isWebGL2?"":Ay(e),v=Cy(e),g=Ry(s),p=r.createProgram();let m,x,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`),x=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),x.length>0&&(x+=`
`)):(m=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),x=[f,zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Ut.tonemapping_pars_fragment:"",e.toneMapping!==di?Ty("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,wy("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),a=gl(a),a=Oh(a,e),a=Nh(a,e),o=gl(o),o=Oh(o,e),o=Nh(o,e),a=kh(a),o=kh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=_+m+a,P=_+x+o,C=Dh(r,r.VERTEX_SHADER,b),A=Dh(r,r.FRAGMENT_SHADER,P);r.attachShader(p,C),r.attachShader(p,A),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function F(D){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(p).trim(),S=r.getShaderInfoLog(C).trim(),L=r.getShaderInfoLog(A).trim();let U=!0,O=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,C,A);else{const B=Fh(r,C,"vertex"),G=Fh(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+B+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(S===""||L==="")&&(O=!1);O&&(D.diagnostics={runnable:U,programLog:I,vertexShader:{log:S,prefix:m},fragmentShader:{log:L,prefix:x}})}r.deleteShader(C),r.deleteShader(A),$=new Ca(r,p),y=Ly(r,p)}let $;this.getUniforms=function(){return $===void 0&&F(this),$};let y;this.getAttributes=function(){return y===void 0&&F(this),y};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(p,My)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sy++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=A,this}let Vy=0;class Gy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wy(t),e.set(t,n)),n}}class Wy{constructor(t){this.id=Vy++,this.code=t,this.usedTimes=0}}function Xy(i,t,e,n,r,s,a){const o=new Yl,l=new Gy,c=new Set,h=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let v=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,T,D,I,S){const L=I.fog,U=S.geometry,O=y.isMeshStandardMaterial?I.environment:null,B=(y.isMeshStandardMaterial?e:t).get(y.envMap||O),G=B&&B.mapping===qa?B.image.height:null,Y=g[y.type];y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,st=j!==void 0?j.length:0;let pt=0;U.morphAttributes.position!==void 0&&(pt=1),U.morphAttributes.normal!==void 0&&(pt=2),U.morphAttributes.color!==void 0&&(pt=3);let q,K,ot,_t;if(Y){const Jt=Tn[Y];q=Jt.vertexShader,K=Jt.fragmentShader}else q=y.vertexShader,K=y.fragmentShader,l.update(y),ot=l.getVertexShaderID(y),_t=l.getFragmentShaderID(y);const ht=i.getRenderTarget(),lt=S.isInstancedMesh===!0,Lt=S.isBatchedMesh===!0,St=!!y.map,N=!!y.matcap,ue=!!B,yt=!!y.aoMap,wt=!!y.lightMap,vt=!!y.bumpMap,ie=!!y.normalMap,Pt=!!y.displacementMap,w=!!y.emissiveMap,M=!!y.metalnessMap,H=!!y.roughnessMap,et=y.anisotropy>0,J=y.clearcoat>0,tt=y.iridescence>0,mt=y.sheen>0,at=y.transmission>0,ut=et&&!!y.anisotropyMap,bt=J&&!!y.clearcoatMap,Dt=J&&!!y.clearcoatNormalMap,Q=J&&!!y.clearcoatRoughnessMap,Yt=tt&&!!y.iridescenceMap,Nt=tt&&!!y.iridescenceThicknessMap,At=mt&&!!y.sheenColorMap,xt=mt&&!!y.sheenRoughnessMap,dt=!!y.specularMap,It=!!y.specularColorMap,Wt=!!y.specularIntensityMap,te=at&&!!y.transmissionMap,kt=at&&!!y.thicknessMap,Kt=!!y.gradientMap,R=!!y.alphaMap,nt=y.alphaTest>0,it=!!y.alphaHash,ft=!!y.extensions;let Mt=di;y.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const Xt={isWebGL2:u,shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:K,defines:y.defines,customVertexShaderID:ot,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:Lt,instancing:lt,instancingColor:lt&&S.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Pn,alphaToCoverage:!!y.alphaToCoverage,map:St,matcap:N,envMap:ue,envMapMode:ue&&B.mapping,envMapCubeUVHeight:G,aoMap:yt,lightMap:wt,bumpMap:vt,normalMap:ie,displacementMap:f&&Pt,emissiveMap:w,normalMapObjectSpace:ie&&y.normalMapType===Bm,normalMapTangentSpace:ie&&y.normalMapType===zm,metalnessMap:M,roughnessMap:H,anisotropy:et,anisotropyMap:ut,clearcoat:J,clearcoatMap:bt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Q,iridescence:tt,iridescenceMap:Yt,iridescenceThicknessMap:Nt,sheen:mt,sheenColorMap:At,sheenRoughnessMap:xt,specularMap:dt,specularColorMap:It,specularIntensityMap:Wt,transmission:at,transmissionMap:te,thicknessMap:kt,gradientMap:Kt,opaque:y.transparent===!1&&y.blending===wr&&y.alphaToCoverage===!1,alphaMap:R,alphaTest:nt,alphaHash:it,combine:y.combine,mapUv:St&&p(y.map.channel),aoMapUv:yt&&p(y.aoMap.channel),lightMapUv:wt&&p(y.lightMap.channel),bumpMapUv:vt&&p(y.bumpMap.channel),normalMapUv:ie&&p(y.normalMap.channel),displacementMapUv:Pt&&p(y.displacementMap.channel),emissiveMapUv:w&&p(y.emissiveMap.channel),metalnessMapUv:M&&p(y.metalnessMap.channel),roughnessMapUv:H&&p(y.roughnessMap.channel),anisotropyMapUv:ut&&p(y.anisotropyMap.channel),clearcoatMapUv:bt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:At&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:xt&&p(y.sheenRoughnessMap.channel),specularMapUv:dt&&p(y.specularMap.channel),specularColorMapUv:It&&p(y.specularColorMap.channel),specularIntensityMapUv:Wt&&p(y.specularIntensityMap.channel),transmissionMapUv:te&&p(y.transmissionMap.channel),thicknessMapUv:kt&&p(y.thicknessMap.channel),alphaMapUv:R&&p(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ie||et),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!U.attributes.uv&&(St||R),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:S.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:pt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:St&&y.map.isVideoTexture===!0&&qt.getTransfer(y.map.colorSpace)===ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Wn,flipSided:y.side===He,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ft&&y.extensions.derivatives===!0,extensionFragDepth:ft&&y.extensions.fragDepth===!0,extensionDrawBuffers:ft&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ft&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ft&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function x(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)T.push(D),T.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(_(T,y),b(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function _(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function b(y,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),y.push(o.mask)}function P(y){const T=g[y.type];let D;if(T){const I=Tn[T];D=Tv.clone(I.uniforms)}else D=y.uniforms;return D}function C(y,T){let D;for(let I=0,S=h.length;I<S;I++){const L=h[I];if(L.cacheKey===T){D=L,++D.usedTimes;break}}return D===void 0&&(D=new Hy(i,T,y,s),h.push(D)),D}function A(y){if(--y.usedTimes===0){const T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),y.destroy()}}function F(y){l.remove(y)}function $(){l.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:P,acquireProgram:C,releaseProgram:A,releaseShaderCache:F,programs:h,dispose:$}}function qy(){let i=new WeakMap;function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function e(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Yy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(u,d,f,v,g,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:v,renderOrder:u.renderOrder,z:g,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=v,m.renderOrder=u.renderOrder,m.z=g,m.group=p),t++,m}function o(u,d,f,v,g,p){const m=a(u,d,f,v,g,p);f.transmission>0?n.push(m):f.transparent===!0?r.push(m):e.push(m)}function l(u,d,f,v,g,p){const m=a(u,d,f,v,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?r.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Yy),n.length>1&&n.sort(d||Bh),r.length>1&&r.sort(d||Bh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function $y(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Hh,i.set(n,[a])):r>=s.length?(a=new Hh,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function jy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new jt};break;case"SpotLight":e={position:new z,direction:new z,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function Zy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ky=0;function Jy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Qy(i,t){const e=new jy,n=Zy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new z);const s=new z,a=new Pe,o=new Pe;function l(h,u){let d=0,f=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let g=0,p=0,m=0,x=0,_=0,b=0,P=0,C=0,A=0,F=0,$=0;h.sort(Jy);const y=u===!0?Math.PI:1;for(let D=0,I=h.length;D<I;D++){const S=h[D],L=S.color,U=S.intensity,O=S.distance,B=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)d+=L.r*U*y,f+=L.g*U*y,v+=L.b*U*y;else if(S.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(S.sh.coefficients[G],U);$++}else if(S.isDirectionalLight){const G=e.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity*y),S.castShadow){const Y=S.shadow,j=n.get(S);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,r.directionalShadow[g]=j,r.directionalShadowMap[g]=B,r.directionalShadowMatrix[g]=S.shadow.matrix,b++}r.directional[g]=G,g++}else if(S.isSpotLight){const G=e.get(S);G.position.setFromMatrixPosition(S.matrixWorld),G.color.copy(L).multiplyScalar(U*y),G.distance=O,G.coneCos=Math.cos(S.angle),G.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),G.decay=S.decay,r.spot[m]=G;const Y=S.shadow;if(S.map&&(r.spotLightMap[A]=S.map,A++,Y.updateMatrices(S),S.castShadow&&F++),r.spotLightMatrix[m]=Y.matrix,S.castShadow){const j=n.get(S);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,r.spotShadow[m]=j,r.spotShadowMap[m]=B,C++}m++}else if(S.isRectAreaLight){const G=e.get(S);G.color.copy(L).multiplyScalar(U),G.halfWidth.set(S.width*.5,0,0),G.halfHeight.set(0,S.height*.5,0),r.rectArea[x]=G,x++}else if(S.isPointLight){const G=e.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity*y),G.distance=S.distance,G.decay=S.decay,S.castShadow){const Y=S.shadow,j=n.get(S);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,r.pointShadow[p]=j,r.pointShadowMap[p]=B,r.pointShadowMatrix[p]=S.shadow.matrix,P++}r.point[p]=G,p++}else if(S.isHemisphereLight){const G=e.get(S);G.skyColor.copy(S.color).multiplyScalar(U*y),G.groundColor.copy(S.groundColor).multiplyScalar(U*y),r.hemi[_]=G,_++}}x>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_FLOAT_1,r.rectAreaLTC2=rt.LTC_FLOAT_2):(r.rectAreaLTC1=rt.LTC_HALF_1,r.rectAreaLTC2=rt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_FLOAT_1,r.rectAreaLTC2=rt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_HALF_1,r.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==g||T.pointLength!==p||T.spotLength!==m||T.rectAreaLength!==x||T.hemiLength!==_||T.numDirectionalShadows!==b||T.numPointShadows!==P||T.numSpotShadows!==C||T.numSpotMaps!==A||T.numLightProbes!==$)&&(r.directional.length=g,r.spot.length=m,r.rectArea.length=x,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+A-F,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=$,T.directionalLength=g,T.pointLength=p,T.spotLength=m,T.rectAreaLength=x,T.hemiLength=_,T.numDirectionalShadows=b,T.numPointShadows=P,T.numSpotShadows=C,T.numSpotMaps=A,T.numLightProbes=$,r.version=Ky++)}function c(h,u){let d=0,f=0,v=0,g=0,p=0;const m=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){const b=h[x];if(b.isDirectionalLight){const P=r.directional[d];P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(m),d++}else if(b.isSpotLight){const P=r.spot[v];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(m),P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(m),v++}else if(b.isRectAreaLight){const P=r.rectArea[g];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(m),o.identity(),a.copy(b.matrixWorld),a.premultiply(m),o.extractRotation(a),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const P=r.point[f];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:r}}function Vh(i,t){const e=new Qy(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function a(u){n.push(u)}function o(u){r.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function tx(i,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Vh(i,t),e.set(s,[l])):a>=o.length?(l=new Vh(i,t),o.push(l)):l=o[a],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class ex extends $a{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nx extends $a{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sx(i,t,e){let n=new jl;const r=new Bt,s=new Bt,a=new ke,o=new ex({depthPacking:km}),l=new nx,c={},h=e.maxTextureSize,u={[yi]:He,[He]:yi,[Wn]:Wn},d=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:ix,fragmentShader:rx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new Br;v.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Cn(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let m=this.type;this.render=function(C,A,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const $=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ui),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=m!==Gn&&this.type===Gn,S=m===Gn&&this.type!==Gn;for(let L=0,U=C.length;L<U;L++){const O=C[L],B=O.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const G=B.getFrameExtents();if(r.multiply(G),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/G.x),r.x=s.x*G.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/G.y),r.y=s.y*G.y,B.mapSize.y=s.y)),B.map===null||I===!0||S===!0){const j=this.type!==Gn?{minFilter:Ne,magFilter:Ne}:{};B.map!==null&&B.map.dispose(),B.map=new xi(r.x,r.y,j),B.map.texture.name=O.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const Y=B.getViewportCount();for(let j=0;j<Y;j++){const st=B.getViewport(j);a.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),D.viewport(a),B.updateMatrices(O,j),n=B.getFrustum(),b(A,F,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===Gn&&x(B,F),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget($,y,T)};function x(C,A){const F=t.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,F,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,F,f,g,null)}function _(C,A,F,$){let y=null;const T=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)y=T;else if(y=F.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const D=y.uuid,I=A.uuid;let S=c[D];S===void 0&&(S={},c[D]=S);let L=S[I];L===void 0&&(L=y.clone(),S[I]=L,A.addEventListener("dispose",P)),y=L}if(y.visible=A.visible,y.wireframe=A.wireframe,$===Gn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=i.properties.get(y);D.light=F}return y}function b(C,A,F,$,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Gn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const I=t.update(C),S=C.material;if(Array.isArray(S)){const L=I.groups;for(let U=0,O=L.length;U<O;U++){const B=L[U],G=S[B.materialIndex];if(G&&G.visible){const Y=_(C,G,$,y);C.onBeforeShadow(i,C,A,F,I,Y,B),i.renderBufferDirect(F,null,I,Y,C,B),C.onAfterShadow(i,C,A,F,I,Y,B)}}}else if(S.visible){const L=_(C,S,$,y);C.onBeforeShadow(i,C,A,F,I,L,null),i.renderBufferDirect(F,null,I,L,C,null),C.onAfterShadow(i,C,A,F,I,L,null)}}const D=C.children;for(let I=0,S=D.length;I<S;I++)b(D[I],A,F,$,y)}function P(C){C.target.removeEventListener("dispose",P);for(const F in c){const $=c[F],y=C.target.uuid;y in $&&($[y].dispose(),delete $[y])}}}function ax(i,t,e){const n=e.isWebGL2;function r(){let R=!1;const nt=new ke;let it=null;const ft=new ke(0,0,0,0);return{setMask:function(Mt){it!==Mt&&!R&&(i.colorMask(Mt,Mt,Mt,Mt),it=Mt)},setLocked:function(Mt){R=Mt},setClear:function(Mt,Xt,Jt,Me,Qe){Qe===!0&&(Mt*=Me,Xt*=Me,Jt*=Me),nt.set(Mt,Xt,Jt,Me),ft.equals(nt)===!1&&(i.clearColor(Mt,Xt,Jt,Me),ft.copy(nt))},reset:function(){R=!1,it=null,ft.set(-1,0,0,0)}}}function s(){let R=!1,nt=null,it=null,ft=null;return{setTest:function(Mt){Mt?lt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(Mt){nt!==Mt&&!R&&(i.depthMask(Mt),nt=Mt)},setFunc:function(Mt){if(it!==Mt){switch(Mt){case pm:i.depthFunc(i.NEVER);break;case mm:i.depthFunc(i.ALWAYS);break;case vm:i.depthFunc(i.LESS);break;case Ua:i.depthFunc(i.LEQUAL);break;case gm:i.depthFunc(i.EQUAL);break;case _m:i.depthFunc(i.GEQUAL);break;case ym:i.depthFunc(i.GREATER);break;case xm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=Mt}},setLocked:function(Mt){R=Mt},setClear:function(Mt){ft!==Mt&&(i.clearDepth(Mt),ft=Mt)},reset:function(){R=!1,nt=null,it=null,ft=null}}}function a(){let R=!1,nt=null,it=null,ft=null,Mt=null,Xt=null,Jt=null,Me=null,Qe=null;return{setTest:function(Qt){R||(Qt?lt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(Qt){nt!==Qt&&!R&&(i.stencilMask(Qt),nt=Qt)},setFunc:function(Qt,Ie,En){(it!==Qt||ft!==Ie||Mt!==En)&&(i.stencilFunc(Qt,Ie,En),it=Qt,ft=Ie,Mt=En)},setOp:function(Qt,Ie,En){(Xt!==Qt||Jt!==Ie||Me!==En)&&(i.stencilOp(Qt,Ie,En),Xt=Qt,Jt=Ie,Me=En)},setLocked:function(Qt){R=Qt},setClear:function(Qt){Qe!==Qt&&(i.clearStencil(Qt),Qe=Qt)},reset:function(){R=!1,nt=null,it=null,ft=null,Mt=null,Xt=null,Jt=null,Me=null,Qe=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let d={},f={},v=new WeakMap,g=[],p=null,m=!1,x=null,_=null,b=null,P=null,C=null,A=null,F=null,$=new jt(0,0,0),y=0,T=!1,D=null,I=null,S=null,L=null,U=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=G>=1):Y.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=G>=2);let j=null,st={};const pt=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),K=new ke().fromArray(pt),ot=new ke().fromArray(q);function _t(R,nt,it,ft){const Mt=new Uint8Array(4),Xt=i.createTexture();i.bindTexture(R,Xt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<it;Jt++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(nt,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(nt+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return Xt}const ht={};ht[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ht[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),lt(i.DEPTH_TEST),l.setFunc(Ua),Pt(!1),w(Mc),lt(i.CULL_FACE),vt(ui);function lt(R){d[R]!==!0&&(i.enable(R),d[R]=!0)}function Lt(R){d[R]!==!1&&(i.disable(R),d[R]=!1)}function St(R,nt){return f[R]!==nt?(i.bindFramebuffer(R,nt),f[R]=nt,n&&(R===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=nt),R===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=nt)),!0):!1}function N(R,nt){let it=g,ft=!1;if(R)if(it=v.get(nt),it===void 0&&(it=[],v.set(nt,it)),R.isWebGLMultipleRenderTargets){const Mt=R.texture;if(it.length!==Mt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let Xt=0,Jt=Mt.length;Xt<Jt;Xt++)it[Xt]=i.COLOR_ATTACHMENT0+Xt;it.length=Mt.length,ft=!0}}else it[0]!==i.COLOR_ATTACHMENT0&&(it[0]=i.COLOR_ATTACHMENT0,ft=!0);else it[0]!==i.BACK&&(it[0]=i.BACK,ft=!0);ft&&(e.isWebGL2?i.drawBuffers(it):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(it))}function ue(R){return p!==R?(i.useProgram(R),p=R,!0):!1}const yt={[Di]:i.FUNC_ADD,[Qp]:i.FUNC_SUBTRACT,[tm]:i.FUNC_REVERSE_SUBTRACT};if(n)yt[wc]=i.MIN,yt[Tc]=i.MAX;else{const R=t.get("EXT_blend_minmax");R!==null&&(yt[wc]=R.MIN_EXT,yt[Tc]=R.MAX_EXT)}const wt={[em]:i.ZERO,[nm]:i.ONE,[im]:i.SRC_COLOR,[ll]:i.SRC_ALPHA,[cm]:i.SRC_ALPHA_SATURATE,[om]:i.DST_COLOR,[sm]:i.DST_ALPHA,[rm]:i.ONE_MINUS_SRC_COLOR,[cl]:i.ONE_MINUS_SRC_ALPHA,[lm]:i.ONE_MINUS_DST_COLOR,[am]:i.ONE_MINUS_DST_ALPHA,[hm]:i.CONSTANT_COLOR,[um]:i.ONE_MINUS_CONSTANT_COLOR,[dm]:i.CONSTANT_ALPHA,[fm]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(R,nt,it,ft,Mt,Xt,Jt,Me,Qe,Qt){if(R===ui){m===!0&&(Lt(i.BLEND),m=!1);return}if(m===!1&&(lt(i.BLEND),m=!0),R!==Jp){if(R!==x||Qt!==T){if((_!==Di||C!==Di)&&(i.blendEquation(i.FUNC_ADD),_=Di,C=Di),Qt)switch(R){case wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFunc(i.ONE,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,P=null,A=null,F=null,$.set(0,0,0),y=0,x=R,T=Qt}return}Mt=Mt||nt,Xt=Xt||it,Jt=Jt||ft,(nt!==_||Mt!==C)&&(i.blendEquationSeparate(yt[nt],yt[Mt]),_=nt,C=Mt),(it!==b||ft!==P||Xt!==A||Jt!==F)&&(i.blendFuncSeparate(wt[it],wt[ft],wt[Xt],wt[Jt]),b=it,P=ft,A=Xt,F=Jt),(Me.equals($)===!1||Qe!==y)&&(i.blendColor(Me.r,Me.g,Me.b,Qe),$.copy(Me),y=Qe),x=R,T=!1}function ie(R,nt){R.side===Wn?Lt(i.CULL_FACE):lt(i.CULL_FACE);let it=R.side===He;nt&&(it=!it),Pt(it),R.blending===wr&&R.transparent===!1?vt(ui):vt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const ft=R.stencilWrite;c.setTest(ft),ft&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),H(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(R){D!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),D=R)}function w(R){R!==jp?(lt(i.CULL_FACE),R!==I&&(R===Mc?i.cullFace(i.BACK):R===Zp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),I=R}function M(R){R!==S&&(B&&i.lineWidth(R),S=R)}function H(R,nt,it){R?(lt(i.POLYGON_OFFSET_FILL),(L!==nt||U!==it)&&(i.polygonOffset(nt,it),L=nt,U=it)):Lt(i.POLYGON_OFFSET_FILL)}function et(R){R?lt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function J(R){R===void 0&&(R=i.TEXTURE0+O-1),j!==R&&(i.activeTexture(R),j=R)}function tt(R,nt,it){it===void 0&&(j===null?it=i.TEXTURE0+O-1:it=j);let ft=st[it];ft===void 0&&(ft={type:void 0,texture:void 0},st[it]=ft),(ft.type!==R||ft.texture!==nt)&&(j!==it&&(i.activeTexture(it),j=it),i.bindTexture(R,nt||ht[R]),ft.type=R,ft.texture=nt)}function mt(){const R=st[j];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ut(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function bt(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Nt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function At(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function dt(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function It(R){K.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),K.copy(R))}function Wt(R){ot.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ot.copy(R))}function te(R,nt){let it=u.get(nt);it===void 0&&(it=new WeakMap,u.set(nt,it));let ft=it.get(R);ft===void 0&&(ft=i.getUniformBlockIndex(nt,R.name),it.set(R,ft))}function kt(R,nt){const ft=u.get(nt).get(R);h.get(nt)!==ft&&(i.uniformBlockBinding(nt,ft,R.__bindingPointIndex),h.set(nt,ft))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},j=null,st={},f={},v=new WeakMap,g=[],p=null,m=!1,x=null,_=null,b=null,P=null,C=null,A=null,F=null,$=new jt(0,0,0),y=0,T=!1,D=null,I=null,S=null,L=null,U=null,K.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:lt,disable:Lt,bindFramebuffer:St,drawBuffers:N,useProgram:ue,setBlending:vt,setMaterial:ie,setFlipSided:Pt,setCullFace:w,setLineWidth:M,setPolygonOffset:H,setScissorTest:et,activeTexture:J,bindTexture:tt,unbindTexture:mt,compressedTexImage2D:at,compressedTexImage3D:ut,texImage2D:xt,texImage3D:dt,updateUBOMapping:te,uniformBlockBinding:kt,texStorage2D:Nt,texStorage3D:At,texSubImage2D:bt,texSubImage3D:Dt,compressedTexSubImage2D:Q,compressedTexSubImage3D:Yt,scissor:It,viewport:Wt,reset:Kt}}function ox(i,t,e,n,r,s,a){const o=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,M){return f?new OffscreenCanvas(w,M):za("canvas")}function g(w,M,H,et){let J=1;if((w.width>et||w.height>et)&&(J=et/Math.max(w.width,w.height)),J<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const tt=M?ka:Math.floor,mt=tt(J*w.width),at=tt(J*w.height);u===void 0&&(u=v(mt,at));const ut=H?v(mt,at):u;return ut.width=mt,ut.height=at,ut.getContext("2d").drawImage(w,0,0,mt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+mt+"x"+at+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return ml(w.width)&&ml(w.height)}function m(w){return o?!1:w.wrapS!==gn||w.wrapT!==gn||w.minFilter!==Ne&&w.minFilter!==Oe}function x(w,M){return w.generateMipmaps&&M&&w.minFilter!==Ne&&w.minFilter!==Oe}function _(w){i.generateMipmap(w)}function b(w,M,H,et,J=!1){if(o===!1)return M;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let tt=M;if(M===i.RED&&(H===i.FLOAT&&(tt=i.R32F),H===i.HALF_FLOAT&&(tt=i.R16F),H===i.UNSIGNED_BYTE&&(tt=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.R8UI),H===i.UNSIGNED_SHORT&&(tt=i.R16UI),H===i.UNSIGNED_INT&&(tt=i.R32UI),H===i.BYTE&&(tt=i.R8I),H===i.SHORT&&(tt=i.R16I),H===i.INT&&(tt=i.R32I)),M===i.RG&&(H===i.FLOAT&&(tt=i.RG32F),H===i.HALF_FLOAT&&(tt=i.RG16F),H===i.UNSIGNED_BYTE&&(tt=i.RG8)),M===i.RGBA){const mt=J?Da:qt.getTransfer(et);H===i.FLOAT&&(tt=i.RGBA32F),H===i.HALF_FLOAT&&(tt=i.RGBA16F),H===i.UNSIGNED_BYTE&&(tt=mt===ee?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function P(w,M,H){return x(w,H)===!0||w.isFramebufferTexture&&w.minFilter!==Ne&&w.minFilter!==Oe?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function C(w){return w===Ne||w===Ac||w===Xr?i.NEAREST:i.LINEAR}function A(w){const M=w.target;M.removeEventListener("dispose",A),$(M),M.isVideoTexture&&h.delete(M)}function F(w){const M=w.target;M.removeEventListener("dispose",F),T(M)}function $(w){const M=n.get(w);if(M.__webglInit===void 0)return;const H=w.source,et=d.get(H);if(et){const J=et[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(w),Object.keys(et).length===0&&d.delete(H)}n.remove(w)}function y(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const H=w.source,et=d.get(H);delete et[M.__cacheKey],a.memory.textures--}function T(w){const M=w.texture,H=n.get(w),et=n.get(M);if(et.__webglTexture!==void 0&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(H.__webglFramebuffer[J]))for(let tt=0;tt<H.__webglFramebuffer[J].length;tt++)i.deleteFramebuffer(H.__webglFramebuffer[J][tt]);else i.deleteFramebuffer(H.__webglFramebuffer[J]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[J])}else{if(Array.isArray(H.__webglFramebuffer))for(let J=0;J<H.__webglFramebuffer.length;J++)i.deleteFramebuffer(H.__webglFramebuffer[J]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let J=0;J<H.__webglColorRenderbuffer.length;J++)H.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[J]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let J=0,tt=M.length;J<tt;J++){const mt=n.get(M[J]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(M[J])}n.remove(M),n.remove(w)}let D=0;function I(){D=0}function S(){const w=D;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),D+=1,w}function L(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function U(w,M){const H=n.get(w);if(w.isVideoTexture&&ie(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){const et=w.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(H,w,M);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function O(w,M){const H=n.get(w);if(w.version>0&&H.__version!==w.version){K(H,w,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function B(w,M){const H=n.get(w);if(w.version>0&&H.__version!==w.version){K(H,w,M);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function G(w,M){const H=n.get(w);if(w.version>0&&H.__version!==w.version){ot(H,w,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}const Y={[dl]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[fl]:i.MIRRORED_REPEAT},j={[Ne]:i.NEAREST,[Ac]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[Oe]:i.LINEAR,[ho]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},st={[Hm]:i.NEVER,[Ym]:i.ALWAYS,[Vm]:i.LESS,[Yu]:i.LEQUAL,[Gm]:i.EQUAL,[qm]:i.GEQUAL,[Wm]:i.GREATER,[Xm]:i.NOTEQUAL};function pt(w,M,H){if(M.type===Xn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Oe||M.magFilter===ho||M.magFilter===Xr||M.magFilter===ci||M.minFilter===Oe||M.minFilter===ho||M.minFilter===Xr||M.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),H?(i.texParameteri(w,i.TEXTURE_WRAP_S,Y[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Y[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Y[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,j[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,j[M.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==gn||M.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,C(M.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,C(M.minFilter)),M.minFilter!==Ne&&M.minFilter!==Oe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,st[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ne||M.minFilter!==Xr&&M.minFilter!==ci||M.type===Xn&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===fs&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(w,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function q(w,M){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",A));const et=M.source;let J=d.get(et);J===void 0&&(J={},d.set(et,J));const tt=L(M);if(tt!==w.__cacheKey){J[tt]===void 0&&(J[tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),J[tt].usedTimes++;const mt=J[w.__cacheKey];mt!==void 0&&(J[w.__cacheKey].usedTimes--,mt.usedTimes===0&&y(M)),w.__cacheKey=tt,w.__webglTexture=J[tt].texture}return H}function K(w,M,H){let et=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=i.TEXTURE_3D);const J=q(w,M),tt=M.source;e.bindTexture(et,w.__webglTexture,i.TEXTURE0+H);const mt=n.get(tt);if(tt.version!==mt.__version||J===!0){e.activeTexture(i.TEXTURE0+H);const at=qt.getPrimaries(qt.workingColorSpace),ut=M.colorSpace===on?null:qt.getPrimaries(M.colorSpace),bt=M.colorSpace===on||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Dt=m(M)&&p(M.image)===!1;let Q=g(M.image,Dt,!1,r.maxTextureSize);Q=Pt(M,Q);const Yt=p(Q)||o,Nt=s.convert(M.format,M.colorSpace);let At=s.convert(M.type),xt=b(M.internalFormat,Nt,At,M.colorSpace,M.isVideoTexture);pt(et,M,Yt);let dt;const It=M.mipmaps,Wt=o&&M.isVideoTexture!==!0&&xt!==Xu,te=mt.__version===void 0||J===!0,kt=tt.dataReady,Kt=P(M,Q,Yt);if(M.isDepthTexture)xt=i.DEPTH_COMPONENT,o?M.type===Xn?xt=i.DEPTH_COMPONENT32F:M.type===hi?xt=i.DEPTH_COMPONENT24:M.type===Oi?xt=i.DEPTH24_STENCIL8:xt=i.DEPTH_COMPONENT16:M.type===Xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ni&&xt===i.DEPTH_COMPONENT&&M.type!==Vl&&M.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=hi,At=s.convert(M.type)),M.format===Pr&&xt===i.DEPTH_COMPONENT&&(xt=i.DEPTH_STENCIL,M.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Oi,At=s.convert(M.type))),te&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,xt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,xt,Q.width,Q.height,0,Nt,At,null));else if(M.isDataTexture)if(It.length>0&&Yt){Wt&&te&&e.texStorage2D(i.TEXTURE_2D,Kt,xt,It[0].width,It[0].height);for(let R=0,nt=It.length;R<nt;R++)dt=It[R],Wt?kt&&e.texSubImage2D(i.TEXTURE_2D,R,0,0,dt.width,dt.height,Nt,At,dt.data):e.texImage2D(i.TEXTURE_2D,R,xt,dt.width,dt.height,0,Nt,At,dt.data);M.generateMipmaps=!1}else Wt?(te&&e.texStorage2D(i.TEXTURE_2D,Kt,xt,Q.width,Q.height),kt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,Nt,At,Q.data)):e.texImage2D(i.TEXTURE_2D,0,xt,Q.width,Q.height,0,Nt,At,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Wt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,xt,It[0].width,It[0].height,Q.depth);for(let R=0,nt=It.length;R<nt;R++)dt=It[R],M.format!==_n?Nt!==null?Wt?kt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,dt.width,dt.height,Q.depth,Nt,dt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,R,xt,dt.width,dt.height,Q.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?kt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,dt.width,dt.height,Q.depth,Nt,At,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,R,xt,dt.width,dt.height,Q.depth,0,Nt,At,dt.data)}else{Wt&&te&&e.texStorage2D(i.TEXTURE_2D,Kt,xt,It[0].width,It[0].height);for(let R=0,nt=It.length;R<nt;R++)dt=It[R],M.format!==_n?Nt!==null?Wt?kt&&e.compressedTexSubImage2D(i.TEXTURE_2D,R,0,0,dt.width,dt.height,Nt,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,R,xt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?kt&&e.texSubImage2D(i.TEXTURE_2D,R,0,0,dt.width,dt.height,Nt,At,dt.data):e.texImage2D(i.TEXTURE_2D,R,xt,dt.width,dt.height,0,Nt,At,dt.data)}else if(M.isDataArrayTexture)Wt?(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,xt,Q.width,Q.height,Q.depth),kt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Nt,At,Q.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,Q.width,Q.height,Q.depth,0,Nt,At,Q.data);else if(M.isData3DTexture)Wt?(te&&e.texStorage3D(i.TEXTURE_3D,Kt,xt,Q.width,Q.height,Q.depth),kt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Nt,At,Q.data)):e.texImage3D(i.TEXTURE_3D,0,xt,Q.width,Q.height,Q.depth,0,Nt,At,Q.data);else if(M.isFramebufferTexture){if(te)if(Wt)e.texStorage2D(i.TEXTURE_2D,Kt,xt,Q.width,Q.height);else{let R=Q.width,nt=Q.height;for(let it=0;it<Kt;it++)e.texImage2D(i.TEXTURE_2D,it,xt,R,nt,0,Nt,At,null),R>>=1,nt>>=1}}else if(It.length>0&&Yt){Wt&&te&&e.texStorage2D(i.TEXTURE_2D,Kt,xt,It[0].width,It[0].height);for(let R=0,nt=It.length;R<nt;R++)dt=It[R],Wt?kt&&e.texSubImage2D(i.TEXTURE_2D,R,0,0,Nt,At,dt):e.texImage2D(i.TEXTURE_2D,R,xt,Nt,At,dt);M.generateMipmaps=!1}else Wt?(te&&e.texStorage2D(i.TEXTURE_2D,Kt,xt,Q.width,Q.height),kt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Nt,At,Q)):e.texImage2D(i.TEXTURE_2D,0,xt,Nt,At,Q);x(M,Yt)&&_(et),mt.__version=tt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ot(w,M,H){if(M.image.length!==6)return;const et=q(w,M),J=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);const tt=n.get(J);if(J.version!==tt.__version||et===!0){e.activeTexture(i.TEXTURE0+H);const mt=qt.getPrimaries(qt.workingColorSpace),at=M.colorSpace===on?null:qt.getPrimaries(M.colorSpace),ut=M.colorSpace===on||mt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const bt=M.isCompressedTexture||M.image[0].isCompressedTexture,Dt=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let R=0;R<6;R++)!bt&&!Dt?Q[R]=g(M.image[R],!1,!0,r.maxCubemapSize):Q[R]=Dt?M.image[R].image:M.image[R],Q[R]=Pt(M,Q[R]);const Yt=Q[0],Nt=p(Yt)||o,At=s.convert(M.format,M.colorSpace),xt=s.convert(M.type),dt=b(M.internalFormat,At,xt,M.colorSpace),It=o&&M.isVideoTexture!==!0,Wt=tt.__version===void 0||et===!0,te=J.dataReady;let kt=P(M,Yt,Nt);pt(i.TEXTURE_CUBE_MAP,M,Nt);let Kt;if(bt){It&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,dt,Yt.width,Yt.height);for(let R=0;R<6;R++){Kt=Q[R].mipmaps;for(let nt=0;nt<Kt.length;nt++){const it=Kt[nt];M.format!==_n?At!==null?It?te&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,nt,0,0,it.width,it.height,At,it.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,nt,dt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?te&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,nt,0,0,it.width,it.height,At,xt,it.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,nt,dt,it.width,it.height,0,At,xt,it.data)}}}else{Kt=M.mipmaps,It&&Wt&&(Kt.length>0&&kt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,dt,Q[0].width,Q[0].height));for(let R=0;R<6;R++)if(Dt){It?te&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Q[R].width,Q[R].height,At,xt,Q[R].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,dt,Q[R].width,Q[R].height,0,At,xt,Q[R].data);for(let nt=0;nt<Kt.length;nt++){const ft=Kt[nt].image[R].image;It?te&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,nt+1,0,0,ft.width,ft.height,At,xt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,nt+1,dt,ft.width,ft.height,0,At,xt,ft.data)}}else{It?te&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,At,xt,Q[R]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,dt,At,xt,Q[R]);for(let nt=0;nt<Kt.length;nt++){const it=Kt[nt];It?te&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,nt+1,0,0,At,xt,it.image[R]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,nt+1,dt,At,xt,it.image[R])}}}x(M,Nt)&&_(i.TEXTURE_CUBE_MAP),tt.__version=J.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function _t(w,M,H,et,J,tt){const mt=s.convert(H.format,H.colorSpace),at=s.convert(H.type),ut=b(H.internalFormat,mt,at,H.colorSpace);if(!n.get(M).__hasExternalTextures){const Dt=Math.max(1,M.width>>tt),Q=Math.max(1,M.height>>tt);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,tt,ut,Dt,Q,M.depth,0,mt,at,null):e.texImage2D(J,tt,ut,Dt,Q,0,mt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),vt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,J,n.get(H).__webglTexture,0,wt(M)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,J,n.get(H).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(w,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let et=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||vt(M)){const J=M.depthTexture;J&&J.isDepthTexture&&(J.type===Xn?et=i.DEPTH_COMPONENT32F:J.type===hi&&(et=i.DEPTH_COMPONENT24));const tt=wt(M);vt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,et,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,et,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,et,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const et=wt(M);H&&vt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,M.width,M.height):vt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const et=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0;J<et.length;J++){const tt=et[J],mt=s.convert(tt.format,tt.colorSpace),at=s.convert(tt.type),ut=b(tt.internalFormat,mt,at,tt.colorSpace),bt=wt(M);H&&vt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,ut,M.width,M.height):vt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,ut,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ut,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),U(M.depthTexture,0);const et=n.get(M.depthTexture).__webglTexture,J=wt(M);if(M.depthTexture.format===Ni)vt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(M.depthTexture.format===Pr)vt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Lt(w){const M=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");lt(M.__webglFramebuffer,w)}else if(H){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]=i.createRenderbuffer(),ht(M.__webglDepthbuffer[et],w,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),ht(M.__webglDepthbuffer,w,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(w,M,H){const et=n.get(w);M!==void 0&&_t(et.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Lt(w)}function N(w){const M=w.texture,H=n.get(w),et=n.get(M);w.addEventListener("dispose",F),w.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=M.version,a.memory.textures++);const J=w.isWebGLCubeRenderTarget===!0,tt=w.isWebGLMultipleRenderTargets===!0,mt=p(w)||o;if(J){H.__webglFramebuffer=[];for(let at=0;at<6;at++)if(o&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[at]=[];for(let ut=0;ut<M.mipmaps.length;ut++)H.__webglFramebuffer[at][ut]=i.createFramebuffer()}else H.__webglFramebuffer[at]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let at=0;at<M.mipmaps.length;at++)H.__webglFramebuffer[at]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(tt)if(r.drawBuffers){const at=w.texture;for(let ut=0,bt=at.length;ut<bt;ut++){const Dt=n.get(at[ut]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&vt(w)===!1){const at=tt?M:[M];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ut=0;ut<at.length;ut++){const bt=at[ut];H.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ut]);const Dt=s.convert(bt.format,bt.colorSpace),Q=s.convert(bt.type),Yt=b(bt.internalFormat,Dt,Q,bt.colorSpace,w.isXRRenderTarget===!0),Nt=wt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Yt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,H.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(H.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),pt(i.TEXTURE_CUBE_MAP,M,mt);for(let at=0;at<6;at++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let ut=0;ut<M.mipmaps.length;ut++)_t(H.__webglFramebuffer[at][ut],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else _t(H.__webglFramebuffer[at],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);x(M,mt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const at=w.texture;for(let ut=0,bt=at.length;ut<bt;ut++){const Dt=at[ut],Q=n.get(Dt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),pt(i.TEXTURE_2D,Dt,mt),_t(H.__webglFramebuffer,w,Dt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),x(Dt,mt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?at=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,et.__webglTexture),pt(at,M,mt),o&&M.mipmaps&&M.mipmaps.length>0)for(let ut=0;ut<M.mipmaps.length;ut++)_t(H.__webglFramebuffer[ut],w,M,i.COLOR_ATTACHMENT0,at,ut);else _t(H.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,at,0);x(M,mt)&&_(at),e.unbindTexture()}w.depthBuffer&&Lt(w)}function ue(w){const M=p(w)||o,H=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let et=0,J=H.length;et<J;et++){const tt=H[et];if(x(tt,M)){const mt=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,at=n.get(tt).__webglTexture;e.bindTexture(mt,at),_(mt),e.unbindTexture()}}}function yt(w){if(o&&w.samples>0&&vt(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],H=w.width,et=w.height;let J=i.COLOR_BUFFER_BIT;const tt=[],mt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(w),ut=w.isWebGLMultipleRenderTargets===!0;if(ut)for(let bt=0;bt<M.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let bt=0;bt<M.length;bt++){tt.push(i.COLOR_ATTACHMENT0+bt),w.depthBuffer&&tt.push(mt);const Dt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(Dt===!1&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ut&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[bt]),Dt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[mt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[mt])),ut){const Q=n.get(M[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,H,et,0,0,H,et,J,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let bt=0;bt<M.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,at.__webglColorRenderbuffer[bt]);const Dt=n.get(M[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function wt(w){return Math.min(r.maxSamples,w.samples)}function vt(w){const M=n.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ie(w){const M=a.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Pt(w,M){const H=w.colorSpace,et=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===pl||H!==Pn&&H!==on&&(qt.getTransfer(H)===ee?o===!1?t.has("EXT_sRGB")===!0&&et===_n?(w.format=pl,w.minFilter=Oe,w.generateMipmaps=!1):M=Ku.sRGBToLinear(M):(et!==_n||J!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=S,this.resetTextureUnits=I,this.setTexture2D=U,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=G,this.rebindTextures=St,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=vt}function lx(i,t,e){const n=e.isWebGL2;function r(s,a=on){let o;const l=qt.getTransfer(a);if(s===fi)return i.UNSIGNED_BYTE;if(s===Bu)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Hu)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Rm)return i.BYTE;if(s===Lm)return i.SHORT;if(s===Vl)return i.UNSIGNED_SHORT;if(s===zu)return i.INT;if(s===hi)return i.UNSIGNED_INT;if(s===Xn)return i.FLOAT;if(s===fs)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Pm)return i.ALPHA;if(s===_n)return i.RGBA;if(s===Im)return i.LUMINANCE;if(s===Um)return i.LUMINANCE_ALPHA;if(s===Ni)return i.DEPTH_COMPONENT;if(s===Pr)return i.DEPTH_STENCIL;if(s===pl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Dm)return i.RED;if(s===Vu)return i.RED_INTEGER;if(s===Fm)return i.RG;if(s===Gu)return i.RG_INTEGER;if(s===Wu)return i.RGBA_INTEGER;if(s===uo||s===fo||s===po||s===mo)if(l===ee)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===uo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===uo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===po)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cc||s===Rc||s===Lc||s===Pc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Cc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Lc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ic||s===Uc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ic)return l===ee?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Uc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dc||s===Fc||s===Oc||s===Nc||s===kc||s===zc||s===Bc||s===Hc||s===Vc||s===Gc||s===Wc||s===Xc||s===qc||s===Yc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Dc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Oc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vo||s===$c||s===jc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===vo)return l===ee?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$c)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Om||s===Zc||s===Kc||s===Jc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===vo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Zc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Oi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class cx extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Er extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hx={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Er;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Sn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new Mi({extensions:{fragDepth:!0},vertexShader:ux,fragmentShader:dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Cn(new ja(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class px extends Or{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,v=null;const g=new fx,p=e.getContextAttributes();let m=null,x=null;const _=[],b=[],P=new Bt;let C=null;const A=new an;A.layers.enable(1),A.viewport=new ke;const F=new an;F.layers.enable(2),F.viewport=new ke;const $=[A,F],y=new cx;y.layers.enable(1),y.layers.enable(2);let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=_[q];return K===void 0&&(K=new zo,_[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=_[q];return K===void 0&&(K=new zo,_[q]=K),K.getGripSpace()},this.getHand=function(q){let K=_[q];return K===void 0&&(K=new zo,_[q]=K),K.getHandSpace()};function I(q){const K=b.indexOf(q.inputSource);if(K===-1)return;const ot=_[K];ot!==void 0&&(ot.update(q.inputSource,q.frame,c||a),ot.dispatchEvent({type:q.type,data:q.inputSource}))}function S(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",S),r.removeEventListener("inputsourceschange",L);for(let q=0;q<_.length;q++){const K=b[q];K!==null&&(b[q]=null,_[q].disconnect(K))}T=null,D=null,g.reset(),t.setRenderTarget(m),f=null,d=null,u=null,r=null,x=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",S),r.addEventListener("inputsourceschange",L),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,K),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new xi(f.framebufferWidth,f.framebufferHeight,{format:_n,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,ot=null,_t=null;p.depth&&(_t=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=p.stencil?Pr:Ni,ot=p.stencil?Oi:hi);const ht={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(ht),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new xi(d.textureWidth,d.textureHeight,{format:_n,type:fi,depthTexture:new dd(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const lt=t.properties.get(x);lt.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),pt.setContext(r),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(q){for(let K=0;K<q.removed.length;K++){const ot=q.removed[K],_t=b.indexOf(ot);_t>=0&&(b[_t]=null,_[_t].disconnect(ot))}for(let K=0;K<q.added.length;K++){const ot=q.added[K];let _t=b.indexOf(ot);if(_t===-1){for(let lt=0;lt<_.length;lt++)if(lt>=b.length){b.push(ot),_t=lt;break}else if(b[lt]===null){b[lt]=ot,_t=lt;break}if(_t===-1)break}const ht=_[_t];ht&&ht.connect(ot)}}const U=new z,O=new z;function B(q,K,ot){U.setFromMatrixPosition(K.matrixWorld),O.setFromMatrixPosition(ot.matrixWorld);const _t=U.distanceTo(O),ht=K.projectionMatrix.elements,lt=ot.projectionMatrix.elements,Lt=ht[14]/(ht[10]-1),St=ht[14]/(ht[10]+1),N=(ht[9]+1)/ht[5],ue=(ht[9]-1)/ht[5],yt=(ht[8]-1)/ht[0],wt=(lt[8]+1)/lt[0],vt=Lt*yt,ie=Lt*wt,Pt=_t/(-yt+wt),w=Pt*-yt;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(w),q.translateZ(Pt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const M=Lt+Pt,H=St+Pt,et=vt-w,J=ie+(_t-w),tt=N*St/H*M,mt=ue*St/H*M;q.projectionMatrix.makePerspective(et,J,tt,mt,M,H),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function G(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;g.texture!==null&&(q.near=g.depthNear,q.far=g.depthFar),y.near=F.near=A.near=q.near,y.far=F.far=A.far=q.far,(T!==y.near||D!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,D=y.far,A.near=T,A.far=D,F.near=T,F.far=D,A.updateProjectionMatrix(),F.updateProjectionMatrix(),q.updateProjectionMatrix());const K=q.parent,ot=y.cameras;G(y,K);for(let _t=0;_t<ot.length;_t++)G(ot[_t],K);ot.length===2?B(y,A,F):y.projectionMatrix.copy(A.projectionMatrix),Y(q,y,K)};function Y(q,K,ot){ot===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(ot.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ps*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null};let j=null;function st(q,K){if(h=K.getViewerPose(c||a),v=K,h!==null){const ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let _t=!1;ot.length!==y.cameras.length&&(y.cameras.length=0,_t=!0);for(let lt=0;lt<ot.length;lt++){const Lt=ot[lt];let St=null;if(f!==null)St=f.getViewport(Lt);else{const ue=u.getViewSubImage(d,Lt);St=ue.viewport,lt===0&&(t.setRenderTargetTextures(x,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(x))}let N=$[lt];N===void 0&&(N=new an,N.layers.enable(lt),N.viewport=new ke,$[lt]=N),N.matrix.fromArray(Lt.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Lt.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(St.x,St.y,St.width,St.height),lt===0&&(y.matrix.copy(N.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_t===!0&&y.cameras.push(N)}const ht=r.enabledFeatures;if(ht&&ht.includes("depth-sensing")){const lt=u.getDepthInformation(ot[0]);lt&&lt.isValid&&lt.texture&&g.init(t,lt,r.renderState)}}for(let ot=0;ot<_.length;ot++){const _t=b[ot],ht=_[ot];_t!==null&&ht!==void 0&&ht.update(_t,K,c||a)}g.render(t,y),j&&j(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),v=null}const pt=new ud;pt.setAnimationLoop(st),this.setAnimationLoop=function(q){j=q},this.dispose=function(){}}}function mx(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ld(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,x,_,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),v(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,x,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===He&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===He&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=t.get(m).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*_,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===He&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function vx(i,t,e,n){let r={},s={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const b=_.program;n.uniformBlockBinding(x,b)}function c(x,_){let b=r[x.id];b===void 0&&(v(x),b=h(x),r[x.id]=b,x.addEventListener("dispose",p));const P=_.program;n.updateUBOMapping(x,P);const C=t.render.frame;s[x.id]!==C&&(d(x),s[x.id]=C)}function h(x){const _=u();x.__bindingPointIndex=_;const b=i.createBuffer(),P=x.__size,C=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=r[x.id],b=x.uniforms,P=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let C=0,A=b.length;C<A;C++){const F=Array.isArray(b[C])?b[C]:[b[C]];for(let $=0,y=F.length;$<y;$++){const T=F[$];if(f(T,C,$,P)===!0){const D=T.__offset,I=Array.isArray(T.value)?T.value:[T.value];let S=0;for(let L=0;L<I.length;L++){const U=I[L],O=g(U);typeof U=="number"||typeof U=="boolean"?(T.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,D+S,T.__data)):U.isMatrix3?(T.__data[0]=U.elements[0],T.__data[1]=U.elements[1],T.__data[2]=U.elements[2],T.__data[3]=0,T.__data[4]=U.elements[3],T.__data[5]=U.elements[4],T.__data[6]=U.elements[5],T.__data[7]=0,T.__data[8]=U.elements[6],T.__data[9]=U.elements[7],T.__data[10]=U.elements[8],T.__data[11]=0):(U.toArray(T.__data,S),S+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,_,b,P){const C=x.value,A=_+"_"+b;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const F=P[A];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return P[A]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function v(x){const _=x.uniforms;let b=0;const P=16;for(let A=0,F=_.length;A<F;A++){const $=Array.isArray(_[A])?_[A]:[_[A]];for(let y=0,T=$.length;y<T;y++){const D=$[y],I=Array.isArray(D.value)?D.value:[D.value];for(let S=0,L=I.length;S<L;S++){const U=I[S],O=g(U),B=b%P;B!==0&&P-B<O.boundary&&(b+=P-B),D.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=O.storage}}}const C=b%P;return C>0&&(b+=P-C),x.__size=b,x.__cache={},this}function g(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function p(x){const _=x.target;_.removeEventListener("dispose",p);const b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}class _d{constructor(t={}){const{canvas:e=lv(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this._useLegacyLights=!1,this.toneMapping=di,this.toneMappingExposure=1;const _=this;let b=!1,P=0,C=0,A=null,F=-1,$=null;const y=new ke,T=new ke;let D=null;const I=new jt(0);let S=0,L=e.width,U=e.height,O=1,B=null,G=null;const Y=new ke(0,0,L,U),j=new ke(0,0,L,U);let st=!1;const pt=new jl;let q=!1,K=!1,ot=null;const _t=new Pe,ht=new Bt,lt=new z,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function St(){return A===null?O:1}let N=n;function ue(E,k){for(let W=0;W<E.length;W++){const X=E[W],V=e.getContext(X,k);if(V!==null)return V}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hl}`),e.addEventListener("webglcontextlost",Kt,!1),e.addEventListener("webglcontextrestored",R,!1),e.addEventListener("webglcontextcreationerror",nt,!1),N===null){const k=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&k.shift(),N=ue(k,E),N===null)throw ue(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let yt,wt,vt,ie,Pt,w,M,H,et,J,tt,mt,at,ut,bt,Dt,Q,Yt,Nt,At,xt,dt,It,Wt;function te(){yt=new E_(N),wt=new v_(N,yt,t),yt.init(wt),dt=new lx(N,yt,wt),vt=new ax(N,yt,wt),ie=new T_(N),Pt=new qy,w=new ox(N,yt,vt,Pt,wt,dt,ie),M=new __(_),H=new S_(_),et=new Uv(N,wt),It=new p_(N,yt,et,wt),J=new b_(N,et,ie,It),tt=new L_(N,J,et,ie),Nt=new R_(N,wt,w),Dt=new g_(Pt),mt=new Xy(_,M,H,yt,wt,It,Dt),at=new mx(_,Pt),ut=new $y,bt=new tx(yt,wt),Yt=new f_(_,M,H,vt,tt,d,l),Q=new sx(_,tt,wt),Wt=new vx(N,ie,wt,vt),At=new m_(N,yt,ie,wt),xt=new w_(N,yt,ie,wt),ie.programs=mt.programs,_.capabilities=wt,_.extensions=yt,_.properties=Pt,_.renderLists=ut,_.shadowMap=Q,_.state=vt,_.info=ie}te();const kt=new px(_,N);this.xr=kt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(E){E!==void 0&&(O=E,this.setSize(L,U,!1))},this.getSize=function(E){return E.set(L,U)},this.setSize=function(E,k,W=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=E,U=k,e.width=Math.floor(E*O),e.height=Math.floor(k*O),W===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(L*O,U*O).floor()},this.setDrawingBufferSize=function(E,k,W){L=E,U=k,O=W,e.width=Math.floor(E*W),e.height=Math.floor(k*W),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,k,W,X){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,k,W,X),vt.viewport(y.copy(Y).multiplyScalar(O).floor())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,k,W,X){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,k,W,X),vt.scissor(T.copy(j).multiplyScalar(O).floor())},this.getScissorTest=function(){return st},this.setScissorTest=function(E){vt.setScissorTest(st=E)},this.setOpaqueSort=function(E){B=E},this.setTransparentSort=function(E){G=E},this.getClearColor=function(E){return E.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(E=!0,k=!0,W=!0){let X=0;if(E){let V=!1;if(A!==null){const ct=A.texture.format;V=ct===Wu||ct===Gu||ct===Vu}if(V){const ct=A.texture.type,gt=ct===fi||ct===hi||ct===Vl||ct===Oi||ct===Bu||ct===Hu,Et=Yt.getClearColor(),Tt=Yt.getClearAlpha(),Ft=Et.r,Ct=Et.g,Rt=Et.b;gt?(f[0]=Ft,f[1]=Ct,f[2]=Rt,f[3]=Tt,N.clearBufferuiv(N.COLOR,0,f)):(v[0]=Ft,v[1]=Ct,v[2]=Rt,v[3]=Tt,N.clearBufferiv(N.COLOR,0,v))}else X|=N.COLOR_BUFFER_BIT}k&&(X|=N.DEPTH_BUFFER_BIT),W&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",R,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),ut.dispose(),bt.dispose(),Pt.dispose(),M.dispose(),H.dispose(),tt.dispose(),It.dispose(),Wt.dispose(),mt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Qe),kt.removeEventListener("sessionend",Qt),ot&&(ot.dispose(),ot=null),Ie.stop()};function Kt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=ie.autoReset,k=Q.enabled,W=Q.autoUpdate,X=Q.needsUpdate,V=Q.type;te(),ie.autoReset=E,Q.enabled=k,Q.autoUpdate=W,Q.needsUpdate=X,Q.type=V}function nt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function it(E){const k=E.target;k.removeEventListener("dispose",it),ft(k)}function ft(E){Mt(E),Pt.remove(E)}function Mt(E){const k=Pt.get(E).programs;k!==void 0&&(k.forEach(function(W){mt.releaseProgram(W)}),E.isShaderMaterial&&mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,W,X,V,ct){k===null&&(k=Lt);const gt=V.isMesh&&V.matrixWorld.determinant()<0,Et=Hp(E,k,W,X,V);vt.setMaterial(X,gt);let Tt=W.index,Ft=1;if(X.wireframe===!0){if(Tt=J.getWireframeAttribute(W),Tt===void 0)return;Ft=2}const Ct=W.drawRange,Rt=W.attributes.position;let le=Ct.start*Ft,We=(Ct.start+Ct.count)*Ft;ct!==null&&(le=Math.max(le,ct.start*Ft),We=Math.min(We,(ct.start+ct.count)*Ft)),Tt!==null?(le=Math.max(le,0),We=Math.min(We,Tt.count)):Rt!=null&&(le=Math.max(le,0),We=Math.min(We,Rt.count));const pe=We-le;if(pe<0||pe===1/0)return;It.setup(V,X,Et,W,Tt);let In,re=At;if(Tt!==null&&(In=et.get(Tt),re=xt,re.setIndex(In)),V.isMesh)X.wireframe===!0?(vt.setLineWidth(X.wireframeLinewidth*St()),re.setMode(N.LINES)):re.setMode(N.TRIANGLES);else if(V.isLine){let Ot=X.linewidth;Ot===void 0&&(Ot=1),vt.setLineWidth(Ot*St()),V.isLineSegments?re.setMode(N.LINES):V.isLineLoop?re.setMode(N.LINE_LOOP):re.setMode(N.LINE_STRIP)}else V.isPoints?re.setMode(N.POINTS):V.isSprite&&re.setMode(N.TRIANGLES);if(V.isBatchedMesh)re.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)re.renderInstances(le,pe,V.count);else if(W.isInstancedBufferGeometry){const Ot=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ao=Math.min(W.instanceCount,Ot);re.renderInstances(le,pe,ao)}else re.render(le,pe)};function Xt(E,k,W){E.transparent===!0&&E.side===Wn&&E.forceSinglePass===!1?(E.side=He,E.needsUpdate=!0,Ps(E,k,W),E.side=yi,E.needsUpdate=!0,Ps(E,k,W),E.side=Wn):Ps(E,k,W)}this.compile=function(E,k,W=null){W===null&&(W=E),p=bt.get(W),p.init(),x.push(p),W.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),E!==W&&E.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(_._useLegacyLights);const X=new Set;return E.traverse(function(V){const ct=V.material;if(ct)if(Array.isArray(ct))for(let gt=0;gt<ct.length;gt++){const Et=ct[gt];Xt(Et,W,V),X.add(Et)}else Xt(ct,W,V),X.add(ct)}),x.pop(),p=null,X},this.compileAsync=function(E,k,W=null){const X=this.compile(E,k,W);return new Promise(V=>{function ct(){if(X.forEach(function(gt){Pt.get(gt).currentProgram.isReady()&&X.delete(gt)}),X.size===0){V(E);return}setTimeout(ct,10)}yt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Jt=null;function Me(E){Jt&&Jt(E)}function Qe(){Ie.stop()}function Qt(){Ie.start()}const Ie=new ud;Ie.setAnimationLoop(Me),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(E){Jt=E,kt.setAnimationLoop(E),E===null?Ie.stop():Ie.start()},kt.addEventListener("sessionstart",Qe),kt.addEventListener("sessionend",Qt),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(k),k=kt.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,k,A),p=bt.get(E,x.length),p.init(),x.push(p),_t.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),pt.setFromProjectionMatrix(_t),K=this.localClippingEnabled,q=Dt.init(this.clippingPlanes,K),g=ut.get(E,m.length),g.init(),m.push(g),En(E,k,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(B,G),this.info.render.frame++,q===!0&&Dt.beginShadows();const W=p.state.shadowsArray;if(Q.render(W,E,k),q===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1)&&Yt.render(g,E),p.setupLights(_._useLegacyLights),k.isArrayCamera){const X=k.cameras;for(let V=0,ct=X.length;V<ct;V++){const gt=X[V];mc(g,E,gt,gt.viewport)}}else mc(g,E,k);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(_,E,k),It.resetDefaultState(),F=-1,$=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function En(E,k,W,X){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||pt.intersectsSprite(E)){X&&lt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const gt=tt.update(E),Et=E.material;Et.visible&&g.push(E,gt,Et,W,lt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||pt.intersectsObject(E))){const gt=tt.update(E),Et=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),lt.copy(E.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),lt.copy(gt.boundingSphere.center)),lt.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(Et)){const Tt=gt.groups;for(let Ft=0,Ct=Tt.length;Ft<Ct;Ft++){const Rt=Tt[Ft],le=Et[Rt.materialIndex];le&&le.visible&&g.push(E,gt,le,W,lt.z,Rt)}}else Et.visible&&g.push(E,gt,Et,W,lt.z,null)}}const ct=E.children;for(let gt=0,Et=ct.length;gt<Et;gt++)En(ct[gt],k,W,X)}function mc(E,k,W,X){const V=E.opaque,ct=E.transmissive,gt=E.transparent;p.setupLightsView(W),q===!0&&Dt.setGlobalState(_.clippingPlanes,W),ct.length>0&&Bp(V,ct,k,W),X&&vt.viewport(y.copy(X)),V.length>0&&Ls(V,k,W),ct.length>0&&Ls(ct,k,W),gt.length>0&&Ls(gt,k,W),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Bp(E,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ct=wt.isWebGL2;ot===null&&(ot=new xi(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?fs:fi,minFilter:ci,samples:ct?4:0})),_.getDrawingBufferSize(ht),ct?ot.setSize(ht.x,ht.y):ot.setSize(ka(ht.x),ka(ht.y));const gt=_.getRenderTarget();_.setRenderTarget(ot),_.getClearColor(I),S=_.getClearAlpha(),S<1&&_.setClearColor(16777215,.5),_.clear();const Et=_.toneMapping;_.toneMapping=di,Ls(E,W,X),w.updateMultisampleRenderTarget(ot),w.updateRenderTargetMipmap(ot);let Tt=!1;for(let Ft=0,Ct=k.length;Ft<Ct;Ft++){const Rt=k[Ft],le=Rt.object,We=Rt.geometry,pe=Rt.material,In=Rt.group;if(pe.side===Wn&&le.layers.test(X.layers)){const re=pe.side;pe.side=He,pe.needsUpdate=!0,vc(le,W,X,We,pe,In),pe.side=re,pe.needsUpdate=!0,Tt=!0}}Tt===!0&&(w.updateMultisampleRenderTarget(ot),w.updateRenderTargetMipmap(ot)),_.setRenderTarget(gt),_.setClearColor(I,S),_.toneMapping=Et}function Ls(E,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let V=0,ct=E.length;V<ct;V++){const gt=E[V],Et=gt.object,Tt=gt.geometry,Ft=X===null?gt.material:X,Ct=gt.group;Et.layers.test(W.layers)&&vc(Et,k,W,Tt,Ft,Ct)}}function vc(E,k,W,X,V,ct){E.onBeforeRender(_,k,W,X,V,ct),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(_,k,W,X,E,ct),V.transparent===!0&&V.side===Wn&&V.forceSinglePass===!1?(V.side=He,V.needsUpdate=!0,_.renderBufferDirect(W,k,X,V,E,ct),V.side=yi,V.needsUpdate=!0,_.renderBufferDirect(W,k,X,V,E,ct),V.side=Wn):_.renderBufferDirect(W,k,X,V,E,ct),E.onAfterRender(_,k,W,X,V,ct)}function Ps(E,k,W){k.isScene!==!0&&(k=Lt);const X=Pt.get(E),V=p.state.lights,ct=p.state.shadowsArray,gt=V.state.version,Et=mt.getParameters(E,V.state,ct,k,W),Tt=mt.getProgramCacheKey(Et);let Ft=X.programs;X.environment=E.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(E.isMeshStandardMaterial?H:M).get(E.envMap||X.environment),Ft===void 0&&(E.addEventListener("dispose",it),Ft=new Map,X.programs=Ft);let Ct=Ft.get(Tt);if(Ct!==void 0){if(X.currentProgram===Ct&&X.lightsStateVersion===gt)return _c(E,Et),Ct}else Et.uniforms=mt.getUniforms(E),E.onBuild(W,Et,_),E.onBeforeCompile(Et,_),Ct=mt.acquireProgram(Et,Tt),Ft.set(Tt,Ct),X.uniforms=Et.uniforms;const Rt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Rt.clippingPlanes=Dt.uniform),_c(E,Et),X.needsLights=Gp(E),X.lightsStateVersion=gt,X.needsLights&&(Rt.ambientLightColor.value=V.state.ambient,Rt.lightProbe.value=V.state.probe,Rt.directionalLights.value=V.state.directional,Rt.directionalLightShadows.value=V.state.directionalShadow,Rt.spotLights.value=V.state.spot,Rt.spotLightShadows.value=V.state.spotShadow,Rt.rectAreaLights.value=V.state.rectArea,Rt.ltc_1.value=V.state.rectAreaLTC1,Rt.ltc_2.value=V.state.rectAreaLTC2,Rt.pointLights.value=V.state.point,Rt.pointLightShadows.value=V.state.pointShadow,Rt.hemisphereLights.value=V.state.hemi,Rt.directionalShadowMap.value=V.state.directionalShadowMap,Rt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Rt.spotShadowMap.value=V.state.spotShadowMap,Rt.spotLightMatrix.value=V.state.spotLightMatrix,Rt.spotLightMap.value=V.state.spotLightMap,Rt.pointShadowMap.value=V.state.pointShadowMap,Rt.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Ct,X.uniformsList=null,Ct}function gc(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Ca.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function _c(E,k){const W=Pt.get(E);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Hp(E,k,W,X,V){k.isScene!==!0&&(k=Lt),w.resetTextureUnits();const ct=k.fog,gt=X.isMeshStandardMaterial?k.environment:null,Et=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Pn,Tt=(X.isMeshStandardMaterial?H:M).get(X.envMap||gt),Ft=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ct=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Rt=!!W.morphAttributes.position,le=!!W.morphAttributes.normal,We=!!W.morphAttributes.color;let pe=di;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pe=_.toneMapping);const In=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=In!==void 0?In.length:0,Ot=Pt.get(X),ao=p.state.lights;if(q===!0&&(K===!0||E!==$)){const tn=E===$&&X.id===F;Dt.setState(X,E,tn)}let ae=!1;X.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==ao.state.version||Ot.outputColorSpace!==Et||V.isBatchedMesh&&Ot.batching===!1||!V.isBatchedMesh&&Ot.batching===!0||V.isInstancedMesh&&Ot.instancing===!1||!V.isInstancedMesh&&Ot.instancing===!0||V.isSkinnedMesh&&Ot.skinning===!1||!V.isSkinnedMesh&&Ot.skinning===!0||V.isInstancedMesh&&Ot.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ot.instancingColor===!1&&V.instanceColor!==null||Ot.envMap!==Tt||X.fog===!0&&Ot.fog!==ct||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Dt.numPlanes||Ot.numIntersection!==Dt.numIntersection)||Ot.vertexAlphas!==Ft||Ot.vertexTangents!==Ct||Ot.morphTargets!==Rt||Ot.morphNormals!==le||Ot.morphColors!==We||Ot.toneMapping!==pe||wt.isWebGL2===!0&&Ot.morphTargetsCount!==re)&&(ae=!0):(ae=!0,Ot.__version=X.version);let Ei=Ot.currentProgram;ae===!0&&(Ei=Ps(X,k,V));let yc=!1,Wr=!1,oo=!1;const Te=Ei.getUniforms(),bi=Ot.uniforms;if(vt.useProgram(Ei.program)&&(yc=!0,Wr=!0,oo=!0),X.id!==F&&(F=X.id,Wr=!0),yc||$!==E){Te.setValue(N,"projectionMatrix",E.projectionMatrix),Te.setValue(N,"viewMatrix",E.matrixWorldInverse);const tn=Te.map.cameraPosition;tn!==void 0&&tn.setValue(N,lt.setFromMatrixPosition(E.matrixWorld)),wt.logarithmicDepthBuffer&&Te.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Te.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),$!==E&&($=E,Wr=!0,oo=!0)}if(V.isSkinnedMesh){Te.setOptional(N,V,"bindMatrix"),Te.setOptional(N,V,"bindMatrixInverse");const tn=V.skeleton;tn&&(wt.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Te.setValue(N,"boneTexture",tn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Te.setOptional(N,V,"batchingTexture"),Te.setValue(N,"batchingTexture",V._matricesTexture,w));const lo=W.morphAttributes;if((lo.position!==void 0||lo.normal!==void 0||lo.color!==void 0&&wt.isWebGL2===!0)&&Nt.update(V,W,Ei),(Wr||Ot.receiveShadow!==V.receiveShadow)&&(Ot.receiveShadow=V.receiveShadow,Te.setValue(N,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(bi.envMap.value=Tt,bi.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),Wr&&(Te.setValue(N,"toneMappingExposure",_.toneMappingExposure),Ot.needsLights&&Vp(bi,oo),ct&&X.fog===!0&&at.refreshFogUniforms(bi,ct),at.refreshMaterialUniforms(bi,X,O,U,ot),Ca.upload(N,gc(Ot),bi,w)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ca.upload(N,gc(Ot),bi,w),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Te.setValue(N,"center",V.center),Te.setValue(N,"modelViewMatrix",V.modelViewMatrix),Te.setValue(N,"normalMatrix",V.normalMatrix),Te.setValue(N,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const tn=X.uniformsGroups;for(let co=0,Wp=tn.length;co<Wp;co++)if(wt.isWebGL2){const xc=tn[co];Wt.update(xc,Ei),Wt.bind(xc,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function Vp(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Gp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,k,W){Pt.get(E.texture).__webglTexture=k,Pt.get(E.depthTexture).__webglTexture=W;const X=Pt.get(E);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const W=Pt.get(E);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,W=0){A=E,P=k,C=W;let X=!0,V=null,ct=!1,gt=!1;if(E){const Tt=Pt.get(E);Tt.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(N.FRAMEBUFFER,null),X=!1):Tt.__webglFramebuffer===void 0?w.setupRenderTarget(E):Tt.__hasExternalTextures&&w.rebindTextures(E,Pt.get(E.texture).__webglTexture,Pt.get(E.depthTexture).__webglTexture);const Ft=E.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(gt=!0);const Ct=Pt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ct[k])?V=Ct[k][W]:V=Ct[k],ct=!0):wt.isWebGL2&&E.samples>0&&w.useMultisampledRTT(E)===!1?V=Pt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ct)?V=Ct[W]:V=Ct,y.copy(E.viewport),T.copy(E.scissor),D=E.scissorTest}else y.copy(Y).multiplyScalar(O).floor(),T.copy(j).multiplyScalar(O).floor(),D=st;if(vt.bindFramebuffer(N.FRAMEBUFFER,V)&&wt.drawBuffers&&X&&vt.drawBuffers(E,V),vt.viewport(y),vt.scissor(T),vt.setScissorTest(D),ct){const Tt=Pt.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,Tt.__webglTexture,W)}else if(gt){const Tt=Pt.get(E.texture),Ft=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.__webglTexture,W||0,Ft)}F=-1},this.readRenderTargetPixels=function(E,k,W,X,V,ct,gt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(Et=Et[gt]),Et){vt.bindFramebuffer(N.FRAMEBUFFER,Et);try{const Tt=E.texture,Ft=Tt.format,Ct=Tt.type;if(Ft!==_n&&dt.convert(Ft)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Rt=Ct===fs&&(yt.has("EXT_color_buffer_half_float")||wt.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Ct!==fi&&dt.convert(Ct)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ct===Xn&&(wt.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!Rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-X&&W>=0&&W<=E.height-V&&N.readPixels(k,W,X,V,dt.convert(Ft),dt.convert(Ct),ct)}finally{const Tt=A!==null?Pt.get(A).__webglFramebuffer:null;vt.bindFramebuffer(N.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(E,k,W=0){const X=Math.pow(2,-W),V=Math.floor(k.image.width*X),ct=Math.floor(k.image.height*X);w.setTexture2D(k,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,E.x,E.y,V,ct),vt.unbindTexture()},this.copyTextureToTexture=function(E,k,W,X=0){const V=k.image.width,ct=k.image.height,gt=dt.convert(W.format),Et=dt.convert(W.type);w.setTexture2D(W,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment),k.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,X,E.x,E.y,V,ct,gt,Et,k.image.data):k.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,X,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,gt,k.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,X,E.x,E.y,gt,Et,k.image),X===0&&W.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(E,k,W,X,V=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ct=E.max.x-E.min.x+1,gt=E.max.y-E.min.y+1,Et=E.max.z-E.min.z+1,Tt=dt.convert(X.format),Ft=dt.convert(X.type);let Ct;if(X.isData3DTexture)w.setTexture3D(X,0),Ct=N.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)w.setTexture2DArray(X,0),Ct=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const Rt=N.getParameter(N.UNPACK_ROW_LENGTH),le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),We=N.getParameter(N.UNPACK_SKIP_PIXELS),pe=N.getParameter(N.UNPACK_SKIP_ROWS),In=N.getParameter(N.UNPACK_SKIP_IMAGES),re=W.isCompressedTexture?W.mipmaps[V]:W.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,re.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,E.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,E.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,E.min.z),W.isDataTexture||W.isData3DTexture?N.texSubImage3D(Ct,V,k.x,k.y,k.z,ct,gt,Et,Tt,Ft,re.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ct,V,k.x,k.y,k.z,ct,gt,Et,Tt,re.data)):N.texSubImage3D(Ct,V,k.x,k.y,k.z,ct,gt,Et,Tt,Ft,re),N.pixelStorei(N.UNPACK_ROW_LENGTH,Rt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,We),N.pixelStorei(N.UNPACK_SKIP_ROWS,pe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,In),V===0&&X.generateMipmaps&&N.generateMipmap(Ct),vt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),vt.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,vt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Gl?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===Ya?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Se?ki:qu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ki?Se:Pn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class gx extends _d{}gx.prototype.isWebGL1Renderer=!0;class Gh extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class _x{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const h=n[r],d=n[r+1]-h,f=(a-h)/d;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new Bt:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new z,r=[],s=[],a=[],o=new z,l=new Pe;for(let f=0;f<=t;f++){const v=f/t;r[f]=this.getTangentAt(v,new z)}s[0]=new z,a[0]=new z;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(be(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,v))}a[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos(be(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let v=1;v<=t;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],f*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Wh(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}class yx extends _x{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Bt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Wh(o,l.x,c.x,h.x,u.x),Wh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Bt().fromArray(r))}return this}}class Kl extends Br{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new z,d=new z,f=[],v=[],g=[],p=[];for(let m=0;m<=n;m++){const x=[],_=m/n;let b=0;m===0&&a===0?b=.5/e:m===n&&l===Math.PI&&(b=-.5/e);for(let P=0;P<=e;P++){const C=P/e;u.x=-t*Math.cos(r+C*s)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(r+C*s)*Math.sin(a+_*o),v.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),p.push(C+b,1-_),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const _=h[m][x+1],b=h[m][x],P=h[m+1][x],C=h[m+1][x+1];(m!==0||a>0)&&f.push(_,b,C),(m!==n-1||l<Math.PI)&&f.push(b,P,C)}this.setIndex(f),this.setAttribute("position",new Ln(v,3)),this.setAttribute("normal",new Ln(g,3)),this.setAttribute("uv",new Ln(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const _l={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class xx{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],v=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null}}}const Mx=new xx;let Jl=class{constructor(t){this.manager=t!==void 0?t:Mx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Jl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Sx{constructor(t,e,n=0,r=1/0){this.ray=new nd(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Yl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return yl(t,this,n,e),n.sort(Xh),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)yl(t[r],this,n,e);return n.sort(Xh),n}}function Xh(i,t){return i.distance-t.distance}function yl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)yl(r[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);/*!
 * PhotoSphereViewer 5.7.2
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2024 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Ex=Object.defineProperty,Ql=(i,t)=>{for(var e in t)Ex(i,e,{get:t[e],enumerable:!0})},bx={};Ql(bx,{ACTIONS:()=>wd,ANIMATION_MIN_DURATION:()=>xl,CAPTURE_EVENTS_CLASS:()=>xs,CTRLZOOM_TIMEOUT:()=>bd,DBLCLICK_DELAY:()=>Md,DEFAULT_TRANSITION:()=>yd,EASINGS:()=>Ra,ICONS:()=>xn,IDS:()=>we,INERTIA_WINDOW:()=>Ml,KEY_CODES:()=>ge,LONGTOUCH_DELAY:()=>Sd,MOVE_THRESHOLD:()=>xd,SPHERE_RADIUS:()=>ys,TWOFINGERSOVERLAY_DELAY:()=>Ed,VIEWER_DATA:()=>Si});var wx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,Tx='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',Ax=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,Cx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,Rx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,Lx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,Px=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,Ix=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,Ux=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,yd=1500,xl=500,xd=4,Md=300,Sd=500,Ed=100,bd=2e3,Ml=300,ys=10,Si="photoSphereViewer",xs="psv--capture-event",wd=(i=>(i.ROTATE_UP="ROTATE_UP",i.ROTATE_DOWN="ROTATE_DOWN",i.ROTATE_RIGHT="ROTATE_RIGHT",i.ROTATE_LEFT="ROTATE_LEFT",i.ZOOM_IN="ZOOM_IN",i.ZOOM_OUT="ZOOM_OUT",i))(wd||{}),we={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},ge={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},xn={arrow:wx,close:Tx,download:Ax,fullscreenIn:Cx,fullscreenOut:Rx,info:Lx,menu:Px,zoomIn:Ix,zoomOut:Ux},Ra={linear:i=>i,inQuad:i=>i*i,outQuad:i=>i*(2-i),inOutQuad:i=>i<.5?2*i*i:-1+(4-2*i)*i,inCubic:i=>i*i*i,outCubic:i=>--i*i*i+1,inOutCubic:i=>i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1,inQuart:i=>i*i*i*i,outQuart:i=>1- --i*i*i*i,inOutQuart:i=>i<.5?8*i*i*i*i:1-8*--i*i*i*i,inQuint:i=>i*i*i*i*i,outQuint:i=>1+--i*i*i*i*i,inOutQuint:i=>i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i,inSine:i=>1-Math.cos(i*(Math.PI/2)),outSine:i=>Math.sin(i*(Math.PI/2)),inOutSine:i=>.5-.5*Math.cos(Math.PI*i),inExpo:i=>Math.pow(2,10*(i-1)),outExpo:i=>1-Math.pow(2,-10*i),inOutExpo:i=>(i=i*2-1)<0?.5*Math.pow(2,10*i):1-.5*Math.pow(2,-10*i),inCirc:i=>1-Math.sqrt(1-i*i),outCirc:i=>Math.sqrt(1-(i-1)*(i-1)),inOutCirc:i=>(i*=2)<1?.5-.5*Math.sqrt(1-i*i):.5+.5*Math.sqrt(1-(i-=2)*i)},tc={};Ql(tc,{Animation:()=>vs,Dynamic:()=>La,MultiDynamic:()=>Gd,PressHandler:()=>to,Slider:()=>Xd,SliderDirection:()=>Wd,addClasses:()=>nc,angle:()=>Td,applyEulerInverse:()=>Tl,checkStylesheet:()=>Vd,checkVersion:()=>cc,cleanCssPosition:()=>Bd,clone:()=>ms,createTexture:()=>wl,cssPositionIsOrdered:()=>lc,dasherize:()=>Nx,deepEqual:()=>Nd,deepmerge:()=>Fd,distance:()=>ec,exitFullscreen:()=>Dd,firstNonNull:()=>bn,getAbortError:()=>El,getAngle:()=>Cd,getClosest:()=>ic,getConfigParser:()=>Qa,getElement:()=>Rd,getPosition:()=>Pd,getShortestArc:()=>Ad,getStyleProperty:()=>Yn,getTouchData:()=>Sl,getXMPValue:()=>wn,greatArcDistance:()=>Fx,hasParent:()=>Ld,invertResolvableBoolean:()=>Ja,isAbortError:()=>zd,isEmpty:()=>Od,isExtendedPosition:()=>oc,isFullscreenEnabled:()=>Id,isNil:()=>yn,isPlainObject:()=>sc,logWarn:()=>ye,parseAngle:()=>li,parsePoint:()=>kx,parseSpeed:()=>Hd,removeClasses:()=>Ox,requestFullscreen:()=>Ud,resolveBoolean:()=>ac,speedToDuration:()=>bl,sum:()=>Dx,throttle:()=>rc,toggleClass:()=>Ka,wrap:()=>rs});function rs(i,t){let e=i%t;return e<0&&(e+=t),e}function Dx(i){return i.reduce((t,e)=>t+e,0)}function ec(i,t){return Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2))}function Td(i,t){return Math.atan2(t.y-i.y,t.x-i.x)}function Ad(i,t){return[0,Math.PI*2,-Math.PI*2].reduce((n,r)=>{const s=t-i+r;return Math.abs(s)<Math.abs(n)?s:n},1/0)}function Cd(i,t){return Math.acos(Math.cos(i.pitch)*Math.cos(t.pitch)*Math.cos(i.yaw-t.yaw)+Math.sin(i.pitch)*Math.sin(t.pitch))}function Fx([i,t],[e,n]){i-e>Math.PI?i-=2*Math.PI:i-e<-Math.PI&&(i+=2*Math.PI);const r=(e-i)*Math.cos((t+n)/2),s=n-t;return Math.sqrt(r*r+s*s)}function Rd(i){return typeof i=="string"?i.match(/^[a-z]/i)?document.getElementById(i):document.querySelector(i):i}function Ka(i,t,e){e===void 0?i.classList.toggle(t):e?i.classList.add(t):e||i.classList.remove(t)}function nc(i,t){i.classList.add(...t.split(" "))}function Ox(i,t){i.classList.remove(...t.split(" "))}function Ld(i,t){let e=i;do{if(e===t)return!0;e=e.parentElement}while(e);return!1}function ic(i,t){if(!(i!=null&&i.matches))return null;let e=i;do{if(e.matches(t))return e;e=e.parentElement}while(e);return null}function Pd(i){let t=0,e=0,n=i;for(;n;)t+=n.offsetLeft-n.scrollLeft+n.clientLeft,e+=n.offsetTop-n.scrollTop+n.clientTop,n=n.offsetParent;return{x:t,y:e}}function Yn(i,t){return window.getComputedStyle(i).getPropertyValue(t)}function Sl(i){if(i.touches.length<2)return null;const t={x:i.touches[0].clientX,y:i.touches[0].clientY},e={x:i.touches[1].clientX,y:i.touches[1].clientY};return{distance:ec(t,e),angle:Td(t,e),center:{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}}function Id(i){return(document.fullscreenElement||document.webkitFullscreenElement)===i}function Ud(i){(i.requestFullscreen||i.webkitRequestFullscreen).call(i)}function Dd(){(document.exitFullscreen||document.webkitExitFullscreen).call(document)}function Nx(i){return i.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(t,e)=>(e>0?"-":"")+t.toLowerCase())}function rc(i,t){let e=!1;return function(...n){e||(e=!0,setTimeout(()=>{i.apply(this,n),e=!1},t))}}function sc(i){if(typeof i!="object"||i===null||Object.prototype.toString.call(i)!=="[object Object]")return!1;if(Object.getPrototypeOf(i)===null)return!0;let t=i;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(i)===t}function Fd(i,t){const e=t;return function n(r,s){return Array.isArray(s)?(!r||!Array.isArray(r)?r=[]:r.length=0,s.forEach((a,o)=>{r[o]=n(null,a)})):typeof s=="object"?((!r||Array.isArray(r))&&(r={}),Object.keys(s).forEach(a=>{typeof s[a]!="object"||!s[a]||!sc(s[a])?r[a]=s[a]:s[a]!==e&&(r[a]?n(r[a],s[a]):r[a]=n(null,s[a]))})):r=s,r}(i,t)}function ms(i){return Fd(null,i)}function Od(i){return!i||Object.keys(i).length===0&&i.constructor===Object}function yn(i){return i==null}function bn(...i){for(const t of i)if(!yn(t))return t;return null}function Nd(i,t){if(i===t)return!0;if(qh(i)&&qh(t)){if(Object.keys(i).length!==Object.keys(t).length)return!1;for(const e of Object.keys(i))if(!Nd(i[e],t[e]))return!1;return!0}else return!1}function qh(i){return typeof i=="object"&&i!==null}var Gt=class kd extends Error{constructor(t){var e;super(t),this.name="PSVError",(e=Error.captureStackTrace)==null||e.call(Error,this,kd)}};function ac(i,t){sc(i)?(t(i.initial,!0),i.promise.then(e=>t(e,!1))):t(i,!0)}function Ja(i){return{initial:!i.initial,promise:i.promise.then(t=>!t)}}function El(){const i=new Error("Loading was aborted.");return i.name="AbortError",i}function zd(i){return(i==null?void 0:i.name)==="AbortError"}function ye(i){console.warn(`PhotoSphereViewer: ${i}`)}function oc(i){return i?[["textureX","textureY"],["yaw","pitch"]].some(([t,e])=>i[t]!==void 0&&i[e]!==void 0):!1}function wn(i,t){let e=i.match("<GPano:"+t+">(.*)</GPano:"+t+">");if(e!==null){const n=parseInt(e[1],10);return isNaN(n)?null:n}if(e=i.match("GPano:"+t+'="(.*?)"'),e!==null){const n=parseInt(e[1],10);return isNaN(n)?null:n}return null}var Yh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ba=["left","center","right"],Ha=["top","center","bottom"],$h=[...Ba,...Ha],sn="center";function kx(i){if(!i)return{x:.5,y:.5};if(typeof i=="object")return i;let t=i.toLocaleLowerCase().split(" ").slice(0,2);t.length===1&&(Yh[t[0]]?t=[t[0],sn]:t=[t[0],t[0]]);const e=t[1]!=="left"&&t[1]!=="right"&&t[0]!=="top"&&t[0]!=="bottom";t=t.map(r=>Yh[r]||r),e||t.reverse();const n=t.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return n?{x:parseFloat(n[1])/100,y:parseFloat(n[2])/100}:{x:.5,y:.5}}function Bd(i,{allowCenter:t,cssOrder:e}={allowCenter:!0,cssOrder:!0}){return i?(typeof i=="string"&&(i=i.split(" ")),i.length===1&&(i[0]===sn?i=[sn,sn]:Ba.indexOf(i[0])!==-1?i=[sn,i[0]]:Ha.indexOf(i[0])!==-1&&(i=[i[0],sn])),i.length!==2||$h.indexOf(i[0])===-1||$h.indexOf(i[1])===-1?(ye(`Unparsable position ${i}`),null):!t&&i[0]===sn&&i[1]===sn?(ye("Invalid position center center"),null):(e&&!lc(i)&&(i=[i[1],i[0]]),i[1]===sn&&Ba.indexOf(i[0])!==-1&&(i=[sn,i[0]]),i[0]===sn&&Ha.indexOf(i[1])!==-1&&(i=[i[1],sn]),i)):null}function lc(i){return Ha.indexOf(i[0])!==-1&&Ba.indexOf(i[1])!==-1}function Hd(i){let t;if(typeof i=="string"){const e=i.toString().trim();let n=parseFloat(e.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const r=e.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(r.match(/(pm|per minute)$/)&&(n/=60),r){case"dpm":case"degrees per minute":case"dps":case"degrees per second":t=_e.degToRad(n);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":t=n;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":t=n*Math.PI*2;break;default:throw new Gt(`Unknown speed unit "${r}"`)}}else t=i;return t}function bl(i,t){if(typeof i!="number"){const e=Hd(i);return t/Math.abs(e)*1e3}else return Math.abs(i)}function li(i,t=!1,e=t){let n;if(typeof i=="string"){const r=i.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!r)throw new Gt(`Unknown angle "${i}"`);const s=parseFloat(r[1]),a=r[2];if(a)switch(a){case"deg":case"degs":n=_e.degToRad(s);break;case"rad":case"rads":n=s;break;default:throw new Gt(`Unknown angle unit "${a}"`)}else n=s}else if(typeof i=="number"&&!isNaN(i))n=i;else throw new Gt(`Unknown angle "${i}"`);return n=rs(t?n+Math.PI:n,Math.PI*2),t?_e.clamp(n-Math.PI,-Math.PI/(e?2:1),Math.PI/(e?2:1)):n}function wl(i,t=!1){const e=new Sn(i);return e.needsUpdate=!0,e.minFilter=t?ci:Oe,e.generateMipmaps=t,e.anisotropy=t?2:1,e}var jh=new kr;function Tl(i,t){jh.setFromEuler(t).invert(),i.applyQuaternion(jh)}function Qa(i,t){const e=function(n){if(!n)return ms(i);const r=ms({...i,...n}),s={};for(let[a,o]of Object.entries(r)){if(t&&a in t)o=t[a](o,{rawConfig:r,defValue:i[a]});else if(!(a in i)){ye(`Unknown option ${a}`);continue}s[a]=o}return s};return e.defaults=i,e.parsers=t||{},e}function Vd(i,t){Yn(i,`--psv-${t}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${t}/index.css" is not loaded`)}function cc(i,t,e){t&&t!==e&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${i} is in version ${t} but @photo-sphere-viewer/core is in version ${e}`)}var vs=class{constructor(i){this.easing=Ra.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=i,i?(i.easing&&(this.easing=typeof i.easing=="function"?i.easing:Ra[i.easing]||Ra.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(t=>this.__run(t))},i.delay||0)):this.resolved=!0}__run(i){if(this.cancelled)return;this.start||(this.start=i);const t=(i-this.start)/this.options.duration,e={};if(t<1){for(const[n,r]of Object.entries(this.options.properties))if(r){const s=r.start+(r.end-r.start)*this.easing(t);e[n]=s}this.options.onTick(e,t),this.animationFrame=window.requestAnimationFrame(n=>this.__run(n))}else{for(const[n,r]of Object.entries(this.options.properties))r&&(e[n]=r.end);this.options.onTick(e,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(i){i?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(t=>t(i)),this.callbacks.length=0}then(i){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(i):new Promise(t=>{this.callbacks.push(t)}).then(i)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},La=class{constructor(i,t){if(this.fn=i,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=t.min,this.max=t.max,this.wrap=t.wrap,this.current=t.defaultValue,this.wrap&&this.min!==0)throw new Gt("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(i){this.__current=i}setSpeed(i){this.speed=i}goto(i,t=1){this.mode=2,this.target=this.wrap?rs(i,this.max):_e.clamp(i,this.min,this.max),this.speedMult=t}step(i,t=1){t===0?this.setValue(this.current+i):(this.mode!==2&&(this.target=this.current),this.goto(this.target+i,t))}roll(i=!1,t=1){this.mode=1,this.target=i?-1/0:1/0,this.speedMult=t}stop(){this.mode=0}setValue(i){return this.target=this.wrap?rs(i,this.max):_e.clamp(i,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(i){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const n=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=n&&(this.mode=0)}let t=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(t=-t),this.currentSpeed<t?this.currentSpeed=Math.min(t,this.currentSpeed+i/1e3*this.speed*this.speedMult*2):this.currentSpeed>t&&(this.currentSpeed=Math.max(t,this.currentSpeed-i/1e3*this.speed*this.speedMult*2));let e=null;return this.current>this.target&&this.currentSpeed?e=Math.max(this.target,this.current+this.currentSpeed*i/1e3):this.current<this.target&&this.currentSpeed&&(e=Math.min(this.target,this.current+this.currentSpeed*i/1e3)),e!==null&&(e=this.wrap?rs(e,this.max):_e.clamp(e,this.min,this.max),e!==this.current)?(this.current=e,this.fn&&this.fn(this.current),!0):!1}},Gd=class{constructor(i,t){this.fn=i,this.dynamics=t,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((i,[t,e])=>(i[t]=e.current,i),{})}setSpeed(i){for(const t of Object.values(this.dynamics))t.setSpeed(i)}goto(i,t=1){for(const[e,n]of Object.entries(i))this.dynamics[e].goto(n,t)}step(i,t=1){if(t===0)this.setValue(Object.keys(i).reduce((e,n)=>(e[n]=i[n]+this.dynamics[n].current,e),{}));else for(const[e,n]of Object.entries(i))this.dynamics[e].step(n,t)}roll(i,t=1){for(const[e,n]of Object.entries(i))this.dynamics[e].roll(n,t)}stop(){for(const i of Object.values(this.dynamics))i.stop()}setValue(i){let t=!1;for(const[e,n]of Object.entries(i))t=this.dynamics[e].setValue(n)||t;return t&&this.fn&&this.fn(this.current),t}update(i){let t=!1;for(const e of Object.values(this.dynamics))t=e.update(i)||t;return t&&this.fn&&this.fn(this.current),t}},to=class{constructor(i=200){this.delay=i,this.time=0,this.delay=i}get pending(){return this.time!==0}down(){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime()}up(i){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{i(),this.timeout=void 0,this.time=0},this.delay):(i(),this.time=0)}},Wd=(i=>(i.VERTICAL="VERTICAL",i.HORIZONTAL="HORIZONTAL",i))(Wd||{}),Xd=class{constructor(i,t,e){this.container=i,this.direction=t,this.listener=e,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(i){switch(i.type){case"click":i.stopPropagation();break;case"mousedown":this.__onMouseDown(i);break;case"mouseenter":this.__onMouseEnter(i);break;case"mouseleave":this.__onMouseLeave(i);break;case"touchstart":this.__onTouchStart(i);break;case"mousemove":this.__onMouseMove(i);break;case"touchmove":this.__onTouchMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchend":this.__onTouchEnd(i);break}}__onMouseDown(i){this.mousedown=!0,this.__update(i.clientX,i.clientY,!0)}__onMouseEnter(i){this.mouseover=!0,this.__update(i.clientX,i.clientY,!0)}__onTouchStart(i){this.mouseover=!0,this.mousedown=!0;const t=i.changedTouches[0];this.__update(t.clientX,t.clientY,!0)}__onMouseMove(i){(this.mousedown||this.mouseover)&&(i.stopPropagation(),this.__update(i.clientX,i.clientY,!0))}__onTouchMove(i){if(this.mousedown||this.mouseover){i.stopPropagation();const t=i.changedTouches[0];this.__update(t.clientX,t.clientY,!0)}}__onMouseUp(i){this.mousedown&&(this.mousedown=!1,this.__update(i.clientX,i.clientY,!1))}__onMouseLeave(i){this.mouseover&&(this.mouseover=!1,this.__update(i.clientX,i.clientY,!0))}__onTouchEnd(i){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const t=i.changedTouches[0];this.__update(t.clientX,t.clientY,!1)}}__update(i,t,e){const n=this.container.getBoundingClientRect(),r=this.isVertical?t:i,s=n[this.isVertical?"bottom":"left"],a=n[this.isVertical?"height":"width"],o=Math.abs((s-r)/a);this.listener({value:o,click:!e,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:i,clientY:t}})}},zx={};Ql(zx,{BeforeAnimateEvent:()=>hc,BeforeRenderEvent:()=>Jd,BeforeRotateEvent:()=>ef,ClickEvent:()=>sf,ConfigChangedEvent:()=>Ve,DoubleClickEvent:()=>hf,FullscreenEvent:()=>ss,HideNotificationEvent:()=>as,HideOverlayEvent:()=>gf,HidePanelEvent:()=>pi,HideTooltipEvent:()=>Sf,KeypressEvent:()=>mi,LoadProgressEvent:()=>Af,ObjectEnterEvent:()=>lp,ObjectEvent:()=>eo,ObjectHoverEvent:()=>fp,ObjectLeaveEvent:()=>Cl,PanoramaErrorEvent:()=>Ff,PanoramaLoadEvent:()=>Lf,PanoramaLoadedEvent:()=>Al,PositionUpdatedEvent:()=>os,ReadyEvent:()=>ls,RenderEvent:()=>Vf,ShowNotificationEvent:()=>cs,ShowOverlayEvent:()=>Yf,ShowPanelEvent:()=>vi,ShowTooltipEvent:()=>Jf,SizeUpdatedEvent:()=>hs,StopAllEvent:()=>ip,ViewerEvent:()=>Zt,ZoomUpdatedEvent:()=>$n});var qd=class extends Event{constructor(i,t=!1){super(i,{cancelable:t})}},Yd=class extends EventTarget{dispatchEvent(i){return super.dispatchEvent(i)}addEventListener(i,t,e){super.addEventListener(i,t,e)}removeEventListener(i,t,e){super.removeEventListener(i,t,e)}},Zt=class extends qd{},$d=class jd extends Zt{constructor(t,e){super(jd.type,!0),this.position=t,this.zoomLevel=e}};$d.type="before-animate";var hc=$d,Zd=class Kd extends Zt{constructor(t,e){super(Kd.type),this.timestamp=t,this.elapsed=e}};Zd.type="before-render";var Jd=Zd,Qd=class tf extends Zt{constructor(t){super(tf.type,!0),this.position=t}};Qd.type="before-rotate";var ef=Qd,nf=class rf extends Zt{constructor(t){super(rf.type),this.data=t}};nf.type="click";var sf=nf,af=class of extends Zt{constructor(t){super(of.type),this.options=t}containsOptions(...t){return t.some(e=>this.options.includes(e))}};af.type="config-changed";var Ve=af,lf=class cf extends Zt{constructor(t){super(cf.type),this.data=t}};lf.type="dblclick";var hf=lf,uf=class df extends Zt{constructor(t){super(df.type),this.fullscreenEnabled=t}};uf.type="fullscreen";var ss=uf,ff=class pf extends Zt{constructor(t){super(pf.type),this.notificationId=t}};ff.type="hide-notification";var as=ff,mf=class vf extends Zt{constructor(t){super(vf.type),this.overlayId=t}};mf.type="hide-overlay";var gf=mf,_f=class yf extends Zt{constructor(t){super(yf.type),this.panelId=t}};_f.type="hide-panel";var pi=_f,xf=class Mf extends Zt{constructor(t){super(Mf.type),this.tooltipData=t}};xf.type="hide-tooltip";var Sf=xf,Ef=class bf extends Zt{constructor(t){super(bf.type,!0),this.key=t}};Ef.type="key-press";var mi=Ef,wf=class Tf extends Zt{constructor(t){super(Tf.type),this.progress=t}};wf.type="load-progress";var Af=wf,Cf=class Rf extends Zt{constructor(t){super(Rf.type),this.panorama=t}};Cf.type="panorama-load";var Lf=Cf,Pf=class If extends Zt{constructor(t){super(If.type),this.data=t}};Pf.type="panorama-loaded";var Al=Pf,Uf=class Df extends Zt{constructor(t,e){super(Df.type),this.panorama=t,this.error=e}};Uf.type="panorama-error";var Ff=Uf,Of=class Nf extends Zt{constructor(t){super(Nf.type),this.position=t}};Of.type="position-updated";var os=Of,kf=class zf extends Zt{constructor(){super(zf.type)}};kf.type="ready";var ls=kf,Bf=class Hf extends Zt{constructor(){super(Hf.type)}};Bf.type="render";var Vf=Bf,Gf=class Wf extends Zt{constructor(t){super(Wf.type),this.notificationId=t}};Gf.type="show-notification";var cs=Gf,Xf=class qf extends Zt{constructor(t){super(qf.type),this.overlayId=t}};Xf.type="show-overlay";var Yf=Xf,$f=class jf extends Zt{constructor(t){super(jf.type),this.panelId=t}};$f.type="show-panel";var vi=$f,Zf=class Kf extends Zt{constructor(t,e){super(Kf.type),this.tooltip=t,this.tooltipData=e}};Zf.type="show-tooltip";var Jf=Zf,Qf=class tp extends Zt{constructor(t){super(tp.type),this.size=t}};Qf.type="size-updated";var hs=Qf,ep=class np extends Zt{constructor(){super(np.type)}};ep.type="stop-all";var ip=ep,rp=class sp extends Zt{constructor(t){super(sp.type),this.zoomLevel=t}};rp.type="zoom-updated";var $n=rp,eo=class extends Zt{constructor(i,t,e,n,r){super(i),this.originalEvent=t,this.object=e,this.viewerPoint=n,this.userDataKey=r}},ap=class op extends eo{constructor(t,e,n,r){super(op.type,t,e,n,r)}};ap.type="enter-object";var lp=ap,cp=class hp extends eo{constructor(t,e,n,r){super(hp.type,t,e,n,r)}};cp.type="leave-object";var Cl=cp,up=class dp extends eo{constructor(t,e,n,r){super(dp.type,t,e,n,r)}};up.type="hover-object";var fp=up,uc=class{constructor(i){this.viewer=i}init(){}destroy(){}supportsTransition(i){return!1}supportsPreload(i){return!1}textureCoordsToSphericalCoords(i,t){throw new Gt("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(i,t){throw new Gt("Current adapter does not support texture coordinates.")}};uc.supportsDownload=!1;function Zh(i){if(i){for(const[,t]of[["_",i],...Object.entries(i)])if(t.prototype instanceof uc)return cc(t.id,t.VERSION,"5.7.2"),t}return null}var Zr=`${Si}_touchSupport`,Ee={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,fullscreenEvent:null,__maxCanvasWidth:null,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=Vx(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const i=Bx();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=i!==null,this.maxTextureWidth=i?i.getParameter(i.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=Hx(),this.fullscreenEvent=Gx(),this.loaded=!0}if(!Ee.isWebGLSupported)throw new Gt("WebGL is not supported.");if(Ee.maxTextureWidth===0)throw new Gt("Unable to detect system capabilities")}};function Bx(){const i=document.createElement("canvas"),t=["webgl2","webgl","experimental-webgl","moz-webgl","webkit-3d"];let e=null;return i.getContext&&t.some(n=>{try{return e=i.getContext(n),e!==null}catch{return!1}})?e:null}function Hx(){let i="ontouchstart"in window||navigator.maxTouchPoints>0;Zr in localStorage&&(i=localStorage[Zr]==="true");const t=new Promise(e=>{const n=()=>{window.removeEventListener("mousedown",r),window.removeEventListener("touchstart",s),clearTimeout(o)},r=()=>{n(),localStorage[Zr]=!1,e(!1)},s=()=>{n(),localStorage[Zr]=!0,e(!0)},a=()=>{n(),localStorage[Zr]=i,e(i)};window.addEventListener("mousedown",r,!1),window.addEventListener("touchstart",s,!1);const o=setTimeout(a,1e4)});return{initial:i,promise:t}}function Vx(i){const t=document.createElement("canvas"),e=t.getContext("2d");for(t.width=i,t.height=i/2;t.width>1024;){e.fillStyle="white",e.fillRect(0,0,1,1);try{if(e.getImageData(0,0,1,1).data[0]>0)return t.width}catch{}t.width/=2,t.height/=2}throw new Gt("Unable to detect system capabilities")}function Gx(){return"exitFullscreen"in document?"fullscreenchange":"webkitExitFullscreen"in document?"webkitfullscreenchange":null}function Wx(){self.onmessage=s=>{const a=s.data.panoData,o=new OffscreenCanvas(a.fullWidth,a.fullHeight),l=o.getContext("2d"),c=new OffscreenCanvas(a.croppedWidth,a.croppedHeight);c.getContext("2d").putImageData(s.data.image,0,0),i(o,c,a),postMessage(l.getImageData(0,0,o.width,o.height))};function i(s,a,o){const l=o.fullHeight-o.croppedHeight-o.croppedY,c=o.fullWidth-o.croppedWidth-o.croppedX,h=o.croppedY+o.croppedHeight/2,u=s.width/32,d=u,f=10,v=`blur(${u}px)`,g=s.getContext("2d");if(g.drawImage(a,o.croppedX,o.croppedY,o.croppedWidth,o.croppedHeight),o.croppedY>0){if(o.croppedX>0||c>0){g.filter="none";const p=r(g,o.croppedX,o.croppedY,f,f,2),m=r(g,s.width-c-11,o.croppedY,f,f,2),x=e(p,m);o.croppedX>0&&(g.fillStyle=n(g,0,o.croppedX,x,p),g.fillRect(-d,-d,o.croppedX+d*2,h+d)),c>0&&(g.fillStyle=n(g,s.width-c,s.width,m,x),g.fillRect(s.width-c-d,-d,c+d*2,h+d))}g.filter=v,g.drawImage(a,0,0,a.width,f,o.croppedX,-d,o.croppedWidth,o.croppedY+d*2),g.fillStyle=t(r(g,0,0,s.width,f,f)),g.fillRect(-d,-d,s.width+d*2,d*2)}if(l>0){if(o.croppedX>0||c>0){g.filter="none";const p=r(g,o.croppedX,s.height-l-1-f,f,f,2),m=r(g,s.width-c-1-f,s.height-l-1-f,f,f,2),x=e(p,m);o.croppedX>0&&(g.fillStyle=n(g,0,o.croppedX,x,p),g.fillRect(-d,h,o.croppedX+d*2,s.height-h+d)),c>0&&(g.fillStyle=n(g,s.width-c,s.width,m,x),g.fillRect(s.width-c-d,h,c+d*2,s.height-h+d))}g.filter=v,g.drawImage(a,0,a.height-f,a.width,f,o.croppedX,s.height-l-d,o.croppedWidth,l+d*2),g.fillStyle=t(r(g,0,s.height-1-f,s.width,f,f)),g.fillRect(-d,s.height-d,s.width+d*2,d*2)}o.croppedX>0&&(g.filter=v,g.drawImage(a,a.width-f,0,f,a.height,-d,o.croppedY,d*2,o.croppedHeight),g.drawImage(a,0,0,f,a.height,0,o.croppedY,o.croppedX+d,o.croppedHeight)),c>0&&(g.filter=v,g.drawImage(a,0,0,f,a.height,s.width-d,o.croppedY,d*2,o.croppedHeight),g.drawImage(a,a.width-f,0,f,a.height,s.width-c-d,o.croppedY,c+d,o.croppedHeight)),g.filter="none",g.drawImage(a,o.croppedX,o.croppedY,o.croppedWidth,o.croppedHeight)}function t(s){return`rgb(${s.r}, ${s.g}, ${s.b})`}function e(s,a){return{r:Math.round(s.r/2+a.r/2),g:Math.round(s.g/2+a.g/2),b:Math.round(s.b/2+a.b/2)}}function n(s,a,o,l,c){const h=s.createLinearGradient(a,0,o,0);return h.addColorStop(0,t(l)),h.addColorStop(1,t(c)),h}function r(s,a,o,l,c,h){h=Math.round(h);let u=0,d=0,f=0,v=0;const g=s.getImageData(a,o,l,c);for(let p=0;p<c;p+=h)for(let m=0;m<l;m+=h){const x=4*(p*l+m);u+=g.data[x],d+=g.data[x+1],f+=g.data[x+2],v++}return u=Math.round(u/v),d=Math.round(d/v),f=Math.round(f/v),{r:u,g:d,b:f}}}var Xx=URL.createObjectURL(new Blob(["(",Wx.toString(),")()"],{type:"application/javascript"})),qx=Qa({backgroundColor:"#000",interpolateBackground:!1,resolution:64,useXmpData:!0,blur:!1},{resolution:i=>{if(!i||!_e.isPowerOfTwo(i))throw new Gt("EquirectangularAdapter resolution must be power of two");return i}}),no=class extends uc{constructor(i,t){super(i),this.config=qx(t),this.config.interpolateBackground&&(window.Worker?this.interpolationWorker=new Worker(Xx):(ye("Web Worker API not available"),this.config.interpolateBackground=!1)),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}destroy(){var i;(i=this.interpolationWorker)==null||i.terminate(),super.destroy()}textureCoordsToSphericalCoords(i,t){if(yn(i.textureX)||yn(i.textureY))throw new Gt("Texture position is missing 'textureX' or 'textureY'");const e=(i.textureX+t.croppedX)/t.fullWidth*Math.PI*2,n=(i.textureY+t.croppedY)/t.fullHeight*Math.PI;return{yaw:e>=Math.PI?e-Math.PI:e+Math.PI,pitch:Math.PI/2-n}}sphericalCoordsToTextureCoords(i,t){const e=i.yaw/Math.PI/2*t.fullWidth,n=i.pitch/Math.PI*t.fullHeight;return{textureX:Math.round(i.yaw<Math.PI?e+t.fullWidth/2:e-t.fullWidth/2)-t.croppedX,textureY:Math.round(t.fullHeight/2-n)-t.croppedY}}async loadTexture(i,t=!0,e,n=this.config.useXmpData){if(typeof i!="string")return Promise.reject(new Gt("Invalid panorama url, are you using the right adapter?"));const r=await this.viewer.textureLoader.loadFile(i,t?c=>this.viewer.loader.setProgress(c):null,i),s=n?await this.loadXMP(r):null,a=await this.viewer.textureLoader.blobToImage(r);typeof e=="function"&&(e=e(a,s)),!e&&!s&&(e=this.__defaultPanoData(a));const o={isEquirectangular:!0,fullWidth:bn(e==null?void 0:e.fullWidth,s==null?void 0:s.fullWidth,a.width),fullHeight:bn(e==null?void 0:e.fullHeight,s==null?void 0:s.fullHeight,a.height),croppedWidth:bn(e==null?void 0:e.croppedWidth,s==null?void 0:s.croppedWidth,a.width),croppedHeight:bn(e==null?void 0:e.croppedHeight,s==null?void 0:s.croppedHeight,a.height),croppedX:bn(e==null?void 0:e.croppedX,s==null?void 0:s.croppedX,0),croppedY:bn(e==null?void 0:e.croppedY,s==null?void 0:s.croppedY,0),poseHeading:bn(e==null?void 0:e.poseHeading,s==null?void 0:s.poseHeading,0),posePitch:bn(e==null?void 0:e.posePitch,s==null?void 0:s.posePitch,0),poseRoll:bn(e==null?void 0:e.poseRoll,s==null?void 0:s.poseRoll,0)};(o.croppedWidth!==a.width||o.croppedHeight!==a.height)&&ye(`Invalid panoData, croppedWidth/croppedHeight is not coherent with the loaded image.
            panoData: ${o.croppedWidth}x${o.croppedHeight}, image: ${a.width}x${a.height}`),Math.abs(o.fullWidth-o.fullHeight*2)>1&&(ye("Invalid panoData, fullWidth should be twice fullHeight"),o.fullWidth=o.fullHeight*2),o.croppedX+o.croppedWidth>o.fullWidth&&(ye("Invalid panoData, croppedX + croppedWidth > fullWidth"),o.croppedX=o.fullWidth-o.croppedWidth),o.croppedY+o.croppedHeight>o.fullHeight&&(ye("Invalid panoData, croppedY + croppedHeight > fullHeight"),o.croppedY=o.fullHeight-o.croppedHeight);const l=this.createEquirectangularTexture(a,o);return{panorama:i,texture:l,panoData:o,cacheKey:i}}async loadXMP(i){const t=await this.loadBlobAsString(i),e=t.indexOf("<x:xmpmeta"),n=t.indexOf("</x:xmpmeta>"),r=t.substring(e,n);return e!==-1&&n!==-1&&r.includes("GPano:")?{isEquirectangular:!0,fullWidth:wn(r,"FullPanoWidthPixels"),fullHeight:wn(r,"FullPanoHeightPixels"),croppedWidth:wn(r,"CroppedAreaImageWidthPixels"),croppedHeight:wn(r,"CroppedAreaImageHeightPixels"),croppedX:wn(r,"CroppedAreaLeftPixels"),croppedY:wn(r,"CroppedAreaTopPixels"),poseHeading:wn(r,"PoseHeadingDegrees"),posePitch:wn(r,"PosePitchDegrees"),poseRoll:wn(r,"PoseRollDegrees")}:null}loadBlobAsString(i){return new Promise((t,e)=>{const n=new FileReader;n.onload=()=>t(n.result),n.onerror=e,n.readAsText(i)})}createEquirectangularTexture(i,t){if(this.config.blur||t.fullWidth>Ee.maxTextureWidth||t.croppedWidth!==t.fullWidth||t.croppedHeight!==t.fullHeight){const e=Math.min(1,Ee.maxCanvasWidth/t.fullWidth),n={fullWidth:t.fullWidth*e,fullHeight:t.fullHeight*e,croppedWidth:t.croppedWidth*e,croppedHeight:t.croppedHeight*e,croppedX:t.croppedX*e,croppedY:t.croppedY*e},r=document.createElement("canvas");r.width=n.fullWidth,r.height=n.fullHeight;const s=r.getContext("2d");if(this.config.backgroundColor&&(s.fillStyle=this.config.backgroundColor,s.fillRect(0,0,r.width,r.height)),this.config.blur){const o=r.width/2048,l=Math.ceil(o*2);n.croppedWidth===r.width&&(s.drawImage(i,0,0,l/e,i.height,0,n.croppedY,l,n.croppedHeight),s.drawImage(i,i.width-l/e,0,l/e,i.height,r.width-l,n.croppedY,l,n.croppedHeight)),n.croppedHeight===r.height&&(s.drawImage(i,0,0,1,1,n.croppedX,0,n.croppedWidth,l),s.drawImage(i,0,i.height-1,1,1,n.croppedX,r.height-l,n.croppedWidth,l)),s.filter=`blur(${o}px)`}s.drawImage(i,n.croppedX,n.croppedY,n.croppedWidth,n.croppedHeight);const a=wl(r);return this.config.interpolateBackground&&(t.croppedWidth!==t.fullWidth||t.croppedHeight!==t.fullHeight)&&(this.interpolationWorker.postMessage({image:s.getImageData(n.croppedX,n.croppedY,n.croppedWidth,n.croppedHeight),panoData:n}),this.interpolationWorker.onmessage=o=>{s.putImageData(o.data,0,0),a.needsUpdate=!0,this.viewer.needsUpdate()}),a}return wl(i)}createMesh(i=1){const t=new Kl(ys*i,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS,-Math.PI/2).scale(-1,1,1);return new Cn(t,new $l)}setTexture(i,t){i.material.map=t.texture}setTextureOpacity(i,t){i.material.opacity=t,i.material.transparent=t<1}disposeTexture(i){var t;(t=i.texture)==null||t.dispose()}__defaultPanoData(i){const t=Math.max(i.width,i.height*2),e=Math.round(t/2),n=Math.round((t-i.width)/2),r=Math.round((e-i.height)/2);return{isEquirectangular:!0,fullWidth:t,fullHeight:e,croppedWidth:i.width,croppedHeight:i.height,croppedX:n,croppedY:r}}};no.id="equirectangular";no.VERSION="5.7.2";no.supportsDownload=!0;var Hi=class pp{constructor(t,e){this.parent=t,this.children=[],this.container=document.createElement("div"),this.state={visible:!0},this.viewer=t instanceof pp?t.viewer:t,this.container.className=e.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const t=this.parent.children.indexOf(this);t!==-1&&this.parent.children.splice(t,1),this.children.slice().forEach(e=>e.destroy()),this.children.length=0}toggle(t=!this.isVisible()){t?this.show():this.hide()}hide(t){this.container.style.display="none",this.state.visible=!1}show(t){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},Yx=Qa({id:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),je=class extends Hi{constructor(i,t){super(i,{className:`psv-button ${t.hoverScale?"psv-button--hover-scale":""} ${t.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=Yx(t),this.config.id=this.constructor.id,t.icon&&this.__setIcon(t.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),t.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",e=>{this.state.enabled&&this.onClick(),e.stopPropagation()}),this.container.addEventListener("keydown",e=>{e.key===ge.Enter&&this.state.enabled&&(this.onClick(),e.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(i=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),i&&this.viewer.navbar.autoSize())}hide(i=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",i&&this.viewer.navbar.autoSize())}checkSupported(){ac(this.isSupported(),(i,t)=>{this.state&&(this.state.supported=i,t?i||this.hide():this.toggle(i))})}autoSize(){}isSupported(){return!0}toggleActive(i=!this.state.active){i!==this.state.active&&(this.state.active=i,Ka(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(i){this.container.innerHTML=i,nc(this.container.querySelector("svg"),"psv-button-svg")}},$x=class extends je{constructor(i,t){var e,n;super(i,{className:`psv-custom-button ${t.className||""}`,hoverScale:!1,collapsable:t.collapsable!==!1,tabbable:t.tabbable!==!1,title:t.title}),this.customOnClick=t.onClick,t.id?this.config.id=t.id:this.config.id="psvButton-"+Math.random().toString(36).substring(2),t.content&&(typeof t.content=="string"?this.container.innerHTML=t.content:(this.container.classList.add("psv-custom-button--no-padding"),t.content.style.height="100%",(n=(e=t.content).attachViewer)==null||n.call(e,this.viewer),this.container.appendChild(t.content))),this.state.width=this.container.offsetWidth,t.disabled&&this.disable(),t.visible===!1&&this.hide()}onClick(){var i;(i=this.customOnClick)==null||i.call(this,this.viewer)}},gs=class extends je{constructor(i){super(i,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:xn.info}),this.mode=0,this.viewer.addEventListener(as.type,this),this.viewer.addEventListener(cs.type,this),this.viewer.addEventListener(pi.type,this),this.viewer.addEventListener(vi.type,this),this.viewer.addEventListener(Ve.type,this)}destroy(){this.viewer.removeEventListener(as.type,this),this.viewer.removeEventListener(cs.type,this),this.viewer.removeEventListener(pi.type,this),this.viewer.removeEventListener(vi.type,this),this.viewer.removeEventListener(Ve.type,this),super.destroy()}handleEvent(i){if(i instanceof Ve){i.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let t=!1;i instanceof as?t=this.mode===1:i instanceof cs?t=this.mode===1&&i.notificationId!==we.DESCRIPTION:i instanceof pi?t=this.mode===2:i instanceof vi&&(t=this.mode===2&&i.panelId!==we.DESCRIPTION),t&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(i){super.hide(i),this.mode&&this.__close()}autoSize(i=!1){if(i){const t=this.viewer.navbar.getButton("caption",!1),e=t&&!t.isVisible(),n=!!this.viewer.config.description;e||n?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(we.DESCRIPTION);break;case 2:this.viewer.panel.hide(we.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:we.DESCRIPTION,content:(this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:"")+this.viewer.config.description})):(this.mode=1,this.viewer.notification.show({id:we.DESCRIPTION,content:this.viewer.config.caption}))}};gs.id="description";var mp=class extends je{constructor(i){super(i,{className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:xn.download}),this.viewer.addEventListener(Ve.type,this)}destroy(){this.viewer.removeEventListener(Ve.type,this),super.destroy()}handleEvent(i){i instanceof Ve&&i.containsOptions("downloadUrl")&&this.checkSupported()}onClick(){const i=document.createElement("a");i.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,i.href.startsWith("data:")&&!this.viewer.config.downloadName?i.download="panorama."+i.href.substring(0,i.href.indexOf(";")).split("/").pop():i.download=this.viewer.config.downloadName||i.href.split("/").pop(),i.target="_blank",this.viewer.container.appendChild(i),i.click(),setTimeout(()=>{this.viewer.container.removeChild(i)},100)}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}};mp.id="download";var vp=class extends je{constructor(i){super(i,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:xn.fullscreenIn,iconActive:xn.fullscreenOut}),this.viewer.addEventListener(ss.type,this)}destroy(){this.viewer.removeEventListener(ss.type,this),super.destroy()}handleEvent(i){i instanceof ss&&this.toggleActive(i.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};vp.id="fullscreen";var jx="psvButton",Zx=(i,t)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${xn.menu} ${t}</h1>
  <ul class="psv-panel-menu-list">
    ${i.map(e=>`
    <li data-psv-button="${e.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${e.content}</span>
      <span class="psv-panel-menu-item-label">${e.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,Pa=class extends je{constructor(i){super(i,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:xn.menu}),this.viewer.addEventListener(vi.type,this),this.viewer.addEventListener(pi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(vi.type,this),this.viewer.removeEventListener(pi.type,this),super.destroy()}handleEvent(i){i instanceof vi?this.toggleActive(i.panelId===we.MENU):i instanceof pi&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(i){super.hide(i),this.__hideMenu()}show(i){super.show(i),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:we.MENU,content:Zx(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:i=>{const t=i?ic(i,"li"):void 0,e=t?t.dataset[jx]:void 0;e&&(this.viewer.navbar.getButton(e).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(we.MENU)}};Pa.id="menu";function Kx(i){let t=0;switch(i){case 0:t=90;break;case 1:t=-90;break;case 3:t=180;break;default:t=0;break}return xn.arrow.replace("rotate(0",`rotate(${t}`)}var Ms=class extends je{constructor(i,t){super(i,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Kx(t)}),this.direction=t,this.handler=new to,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":i.key===ge.Enter&&this.__onMouseDown();break;case"keyup":i.key===ge.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Ja(Ee.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const i={};switch(this.direction){case 0:i.pitch=!1;break;case 1:i.pitch=!0;break;case 3:i.yaw=!1;break;default:i.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(i),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Ms.groupId="move";var gp=class extends Ms{constructor(i){super(i,1)}};gp.id="moveDown";var _p=class extends Ms{constructor(i){super(i,2)}};_p.id="moveLeft";var yp=class extends Ms{constructor(i){super(i,3)}};yp.id="moveRight";var xp=class extends Ms{constructor(i){super(i,0)}};xp.id="moveUp";var dc=class extends je{constructor(i,t,e){super(i,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:t}),this.direction=e,this.handler=new to,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":i.key===ge.Enter&&this.__onMouseDown();break;case"keyup":i.key===ge.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Ja(Ee.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};dc.groupId="zoom";var Mp=class extends dc{constructor(i){super(i,xn.zoomIn,0)}};Mp.id="zoomIn";var Sp=class extends dc{constructor(i){super(i,xn.zoomOut,1)}};Sp.id="zoomOut";var fc=class extends je{constructor(i){super(i,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new Xd(this.container,"HORIZONTAL",t=>this.__onSliderUpdate(t)),this.mediaMinWidth=parseInt(Yn(this.container,"max-width"),10),this.viewer.addEventListener($n.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(ls.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener($n.type,this),this.viewer.removeEventListener(ls.type,this),super.destroy()}handleEvent(i){i instanceof $n?this.__moveZoomValue(i.zoomLevel):i instanceof ls&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return Ja(Ee.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(i){this.zoomValue.style.left=i/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(i){i.mousedown&&this.viewer.zoom(i.value*100)}};fc.id="zoomRange";fc.groupId="zoom";var Ep=class extends Yd{constructor(i){super(),this.viewer=i}init(){}destroy(){}},Jx=class extends Ep{constructor(i,t){super(i),this.config=this.constructor.configParser(t)}setOption(i,t){this.setOptions({[i]:t})}setOptions(i){const t={...this.config,...i},e=this.constructor,n=e.configParser,r=e.readonlyOptions,s=e.id;for(let[a,o]of Object.entries(i)){if(!(a in n.defaults)){ye(`${s}: Unknown option "${a}"`);continue}if(r.includes(a)){ye(`${s}: Option "${a}" cannot be updated`);continue}a in n.parsers&&(o=n.parsers[a](o,{rawConfig:t,defValue:n.defaults[a]})),this.config[a]=o}}};Jx.readonlyOptions=[];function Rl(i){if(i){for(const[,t]of[["_",i],...Object.entries(i)])if(t.prototype instanceof Ep)return cc(t.id,t.VERSION,"5.7.2"),t}return null}var Ur={panorama:null,container:null,adapter:[no,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:!0,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,rendererParameters:{alpha:!0,antialias:!0},withCredentials:!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama can't be loaded"},keyboard:"fullscreen",keyboardActions:{[ge.ArrowUp]:"ROTATE_UP",[ge.ArrowDown]:"ROTATE_DOWN",[ge.ArrowRight]:"ROTATE_RIGHT",[ge.ArrowLeft]:"ROTATE_LEFT",[ge.PageUp]:"ZOOM_IN",[ge.PageDown]:"ZOOM_OUT",[ge.Plus]:"ZOOM_IN",[ge.Minus]:"ZOOM_OUT"}},Kh={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},Ll={container:i=>{if(!i)throw new Gt("No value given for container.");return i},adapter:(i,{defValue:t})=>{if(i?Array.isArray(i)?i=[Zh(i[0]),i[1]]:i=[Zh(i),null]:i=t,!i[0])throw new Gt("An undefined value was given for adapter.");if(!i[0].id)throw new Gt("Adapter has no id.");return i},defaultYaw:i=>li(i),defaultPitch:i=>li(i,!0),defaultZoomLvl:i=>_e.clamp(i,0,100),minFov:(i,{rawConfig:t})=>(t.maxFov<i&&(ye("maxFov cannot be lower than minFov"),i=t.maxFov),_e.clamp(i,1,179)),maxFov:(i,{rawConfig:t})=>(i<t.minFov&&(i=t.minFov),_e.clamp(i,1,179)),lang:i=>({...Ur.lang,...i}),keyboard:i=>i?typeof i=="object"?(ye("Use keyboardActions to configure the keyboard actions, keyboard option must be either true, false, 'fullscreen' or 'always'"),"fullscreen"):i==="always"?"always":"fullscreen":!1,keyboardActions:(i,{rawConfig:t})=>t.keyboard&&typeof t.keyboard=="object"?t.keyboard:i,fisheye:i=>i===!0?1:i===!1?0:i,requestHeaders:i=>i&&typeof i=="object"?()=>i:typeof i=="function"?i:null,rendererParameters:(i,{defValue:t})=>({...i,...t}),plugins:i=>i.map((t,e)=>{if(Array.isArray(t)?t=[Rl(t[0]),t[1]]:t=[Rl(t),null],!t[0])throw new Gt(`An undefined value was given for plugin ${e}.`);if(!t[0].id)throw new Gt(`Plugin ${e} has no id.`);return t}),navbar:i=>i===!1?null:i===!0?ms(Ur.navbar):typeof i=="string"?i.split(/[ ,]/):i},Qx=Qa(Ur,Ll),br=class extends je{constructor(i){super(i,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(i){this.show(),this.contentElt.innerHTML=i??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){var i;(i=this.viewer.navbar.getButton(gs.id,!1))==null||i.autoSize(!0)}};br.id="caption";var Pl={},Va={};function tM(i,t){if(!i.id)throw new Gt("Button id is required");if(Pl[i.id]=i,i.groupId&&(Va[i.groupId]=Va[i.groupId]||[]).push(i),t){const e=Ur.navbar;switch(t){case"start":e.unshift(i.id);break;case"end":e.push(i.id);break;default:{const[n,r]=t.split(":"),s=e.indexOf(n);if(!n||!r||s===-1)throw new Gt(`Invalid defaultPosition ${t}`);e.splice(s+(r==="right"?1:0),0,i.id)}}}}[Sp,fc,Mp,gs,br,mp,vp,_p,yp,xp,gp].forEach(i=>tM(i));var eM=class extends Hi{constructor(i){super(i,{className:`psv-navbar ${xs}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(i){this.children.slice().forEach(t=>t.destroy()),this.children.length=0,i.indexOf(br.id)!==-1&&i.indexOf(gs.id)===-1&&i.splice(i.indexOf(br.id),0,gs.id),i.forEach(t=>{typeof t=="object"?new $x(this,t):Pl[t]?new Pl[t](this):Va[t]?Va[t].forEach(e=>{new e(this)}):ye(`Unknown button ${t}`)}),new Pa(this),this.children.forEach(t=>{t instanceof je&&t.checkSupported()}),this.autoSize()}setCaption(i){this.children.some(t=>t instanceof br?(t.setCaption(i),!0):!1)}getButton(i,t=!0){const e=this.children.find(n=>n instanceof je&&n.id===i);return!e&&t&&ye(`button "${i}" not found in the navbar`),e}autoSize(){var n;this.children.forEach(r=>{r instanceof je&&r.autoSize()});const i=this.container.offsetWidth;let t=0;const e=[];this.children.forEach(r=>{r.isVisible()&&r instanceof je&&(t+=r.width,r.collapsable&&e.push(r))}),t!==0&&(i<t&&e.length>0?(e.forEach(r=>r.collapse()),this.collapsed=e,this.getButton(Pa.id).show(!1)):i>=t&&this.collapsed.length>0&&(this.collapsed.forEach(r=>r.uncollapse()),this.collapsed=[],this.getButton(Pa.id).hide(!1)),(n=this.getButton(br.id,!1))==null||n.autoSize())}};_l.enabled=!1;var xr={enabled:!0,maxItems:10,ttl:10*60,items:{},purgeInterval:null,init(){_l.enabled&&(ye("ThreeJS cache should be disabled"),_l.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(i,t,e){this.enabled&&t&&(this.items[t]=this.items[t]??{files:{},lastAccess:null},this.items[t].files[i]=e,this.items[t].lastAccess=Date.now())},get(i,t){if(this.enabled&&t&&this.items[t])return this.items[t].lastAccess=Date.now(),this.items[t].files[i]},remove(i,t){this.enabled&&t&&this.items[t]&&(delete this.items[t].files[i],Object.keys(this.items[t].files).length===0&&delete this.items[t])},purge(){Object.entries(this.items).sort(([,i],[,t])=>t.lastAccess-i.lastAccess).forEach(([i,{lastAccess:t}],e)=>{e>0&&(Date.now()-t>=this.ttl*1e3||e>=this.maxItems)&&delete this.items[i]})}},nM=class extends Hi{constructor(i){super(i,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=Yn(this.loader,"color"),this.color=Yn(this.canvas,"color"),this.border=parseInt(Yn(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(Yn(this.loader,"--psv-loader-tickness"),10),this.viewer.addEventListener(Ve.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(Ve.type,this),super.destroy()}handleEvent(i){i instanceof Ve&&i.containsOptions("loadingImg","loadingTxt")&&this.__updateContent()}setProgress(i){const t=Math.min(i,99.999)/100*Math.PI*2,e=this.size/2,n=e,r=this.thickness/2+this.border,s=(this.size-this.thickness)/2-this.border,a=Math.sin(t)*s+e,o=-Math.cos(t)*s+e,l=i>50?"1":"0";this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="M ${n} ${r} A ${s} ${s} 0 ${l} 1 ${a} ${o}" 
                  fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.dispatchEvent(new Af(Math.round(i)))}__updateContent(){const i=this.loader.querySelector(".psv-loader-image, .psv-loader-text");i&&this.loader.removeChild(i);let t;if(this.viewer.config.loadingImg?(t=document.createElement("img"),t.className="psv-loader-image",t.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(t=document.createElement("div"),t.className="psv-loader-text",t.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),t){const e=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));t.style.maxWidth=e+"px",t.style.maxHeight=e+"px",this.loader.appendChild(t)}}},iM=class extends Hi{constructor(i){super(i,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new Gt("Notification cannot be toggled")}show(i){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof i=="string"&&(i={content:i}),this.state.contentId=i.id||null,this.content.innerHTML=i.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new cs(i.id)),i.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),i.timeout))}hide(i){if(this.isVisible(i)){const t=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new as(t))}}},rM=class extends Hi{constructor(i){super(i,{className:`psv-overlay ${xs}`}),this.state={visible:!1,contentId:null,dissmisable:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(mi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(mi.type,this),super.destroy()}handleEvent(i){i.type==="click"?this.isVisible()&&this.state.dissmisable&&(this.hide(),i.stopPropagation()):i instanceof mi&&this.isVisible()&&this.state.dissmisable&&i.key===ge.Escape&&(this.hide(),i.preventDefault())}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new Gt("Overlay cannot be toggled")}show(i){typeof i=="string"&&(i={title:i}),this.state.contentId=i.id||null,this.state.dissmisable=i.dissmisable!==!1,this.image.innerHTML=i.image||"",this.title.innerHTML=i.title||"",this.text.innerHTML=i.text||"",super.show(),this.viewer.dispatchEvent(new Yf(i.id))}hide(i){if(this.isVisible(i)){const t=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new gf(t))}}},sM=200,Bo="psv-panel-content--no-interaction",aM=class extends Hi{constructor(i){super(i,{className:`psv-panel ${xs}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const t=document.createElement("div");t.className="psv-panel-resizer",this.container.appendChild(t);const e=document.createElement("div");e.className="psv-panel-close-button",e.innerHTML=xn.close,e.title=i.config.lang.close,this.container.appendChild(e),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),this.container.addEventListener("wheel",n=>n.stopPropagation()),e.addEventListener("click",()=>this.hide()),t.addEventListener("mousedown",this),t.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(mi.type,this)}destroy(){this.viewer.removeEventListener(mi.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown(i);break;case"touchstart":this.__onTouchStart(i);break;case"mousemove":this.__onMouseMove(i);break;case"touchmove":this.__onTouchMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchend":this.__onTouchEnd(i);break;case mi.type:this.__onKeyPress(i);break}}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new Gt("Panel cannot be toggled")}show(i){typeof i=="string"&&(i={content:i});const t=this.isVisible(i.id);this.state.contentId=i.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),i.id&&this.state.width[i.id]?this.container.style.width=this.state.width[i.id]:i.width?this.container.style.width=i.width:this.container.style.width=null,this.content.innerHTML=i.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Ka(this.content,"psv-panel-content--no-margin",i.noMargin===!0),i.clickHandler&&(this.state.clickHandler=e=>{i.clickHandler(e.target)},this.state.keyHandler=e=>{e.key===ge.Enter&&i.clickHandler(e.target)},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),t||setTimeout(()=>{var e;(e=this.content.querySelector("a,button,[tabindex]"))==null||e.focus()},300)),this.viewer.dispatchEvent(new vi(i.id))}hide(i){if(this.isVisible(i)){const t=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.state.clickHandler=null),this.viewer.dispatchEvent(new pi(t))}}__onMouseDown(i){i.stopPropagation(),this.__startResize(i.clientX,i.clientY)}__onTouchStart(i){if(i.stopPropagation(),i.touches.length===1){const t=i.touches[0];this.__startResize(t.clientX,t.clientY)}}__onMouseUp(i){this.state.mousedown&&(i.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(Bo))}__onTouchEnd(i){this.state.mousedown&&(i.stopPropagation(),i.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(Bo)))}__onMouseMove(i){this.state.mousedown&&(i.stopPropagation(),this.__resize(i.clientX,i.clientY))}__onTouchMove(i){if(this.state.mousedown){const t=i.touches[0];this.__resize(t.clientX,t.clientY)}}__onKeyPress(i){this.isVisible()&&i.key===ge.Escape&&(this.hide(),i.preventDefault())}__startResize(i,t){this.state.mouseX=i,this.state.mouseY=t,this.state.mousedown=!0,this.content.classList.add(Bo)}__resize(i,t){const e=i,n=t,r=Math.max(sM,this.container.offsetWidth-(e-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=r),this.container.style.width=r,this.state.mouseX=e,this.state.mouseY=n}},oM=class extends Hi{constructor(i,t){super(i,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",e=>e.stopPropagation()),this.container.addEventListener("mousedown",e=>e.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(t)}handleEvent(i){i.type==="transitionend"&&this.__onTransitionEnd(i)}destroy(){delete this.state.data,super.destroy()}toggle(){throw new Gt("Tooltip cannot be toggled")}show(i){if(this.state.state!==0)throw new Gt("Initialized tooltip cannot be re-initialized");i.className&&nc(this.container,i.className),i.style&&Object.assign(this.container.style,i.style),this.state.state=3,this.update(i.content,i),this.state.data=i.data,this.state.state=1,this.viewer.dispatchEvent(new Jf(this,this.state.data)),this.__waitImages()}update(i,t){this.content.innerHTML=i;const e=this.container.getBoundingClientRect();this.state.width=e.right-e.left,this.state.height=e.bottom-e.top,this.state.arrow=parseInt(Yn(this.arrow,"border-top-width"),10),this.state.border=parseInt(Yn(this.container,"border-top-left-radius"),10),this.move(t??this.state.config),this.__waitImages()}move(i){var o;if(this.state.state!==1&&this.state.state!==3)throw new Gt("Uninitialized tooltip cannot be moved");i.box=i.box??((o=this.state.config)==null?void 0:o.box)??{width:0,height:0},this.state.config=i;const t=this.container,e=this.arrow,n={posClass:Bd(i.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(n,i);let r=null,s=null;if(n.top<0?r="bottom":n.top+n.height>this.viewer.state.size.height&&(r="top"),n.left<0?s="right":n.left+n.width>this.viewer.state.size.width&&(s="left"),s||r){const l=lc(n.posClass);r&&(n.posClass[l?0:1]=r),s&&(n.posClass[l?1:0]=s),this.__computeTooltipPosition(n,i)}t.style.top=n.top+"px",t.style.left=n.left+"px",e.style.top=n.arrowTop+"px",e.style.left=n.arrowLeft+"px";const a=n.posClass.join("-");a!==this.state.pos&&(t.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=a,t.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new Sf(this.state.data))}__onTransitionEnd(i){if(i.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(i,t){const e=this.state.arrow,n=t.top,r=i.height,s=t.left,a=i.width,o=e+this.state.border,l=t.box.width/2+e*2,c=t.box.height/2+e*2;switch(i.posClass.join("-")){case"top-left":i.top=n-c-r,i.left=s+o-a,i.arrowTop=r,i.arrowLeft=a-o-e;break;case"top-center":i.top=n-c-r,i.left=s-a/2,i.arrowTop=r,i.arrowLeft=a/2-e;break;case"top-right":i.top=n-c-r,i.left=s-o,i.arrowTop=r,i.arrowLeft=e;break;case"bottom-left":i.top=n+c,i.left=s+o-a,i.arrowTop=-e*2,i.arrowLeft=a-o-e;break;case"bottom-center":i.top=n+c,i.left=s-a/2,i.arrowTop=-e*2,i.arrowLeft=a/2-e;break;case"bottom-right":i.top=n+c,i.left=s-o,i.arrowTop=-e*2,i.arrowLeft=e;break;case"left-top":i.top=n+o-r,i.left=s-l-a,i.arrowTop=r-o-e,i.arrowLeft=a;break;case"center-left":i.top=n-r/2,i.left=s-l-a,i.arrowTop=r/2-e,i.arrowLeft=a;break;case"left-bottom":i.top=n-o,i.left=s-l-a,i.arrowTop=e,i.arrowLeft=a;break;case"right-top":i.top=n+o-r,i.left=s+l,i.arrowTop=r-o-e,i.arrowLeft=-e*2;break;case"center-right":i.top=n-r/2,i.left=s+l,i.arrowTop=r/2-e,i.arrowLeft=-e*2;break;case"right-bottom":i.top=n-o,i.left=s+l,i.arrowTop=e,i.arrowLeft=-e*2;break}}__waitImages(){const i=this.content.querySelectorAll("img");if(i.length>0){const t=[];i.forEach(e=>{e.complete||t.push(new Promise(n=>{e.onload=n,e.onerror=n}))}),t.length&&Promise.all(t).then(()=>{if(this.state.state===1||this.state.state===3){const e=this.container.getBoundingClientRect();this.state.width=e.right-e.left,this.state.height=e.bottom-e.top,this.move(this.state.config)}})}}},lM=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Ss=class{constructor(i){this.viewer=i,this.config=i.config,this.state=i.state}destroy(){}},un=new z,ta=new ql(0,0,0,"ZXY"),cM=class extends Ss{constructor(i){super(i)}fovToZoomLevel(i){const t=Math.round((i-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return t-2*(t-50)}zoomLevelToFov(i){return this.config.maxFov+i/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(i){return _e.radToDeg(2*Math.atan(Math.tan(_e.degToRad(i)/2)*this.state.aspect))}getAnimationProperties(i,t,e){const n=!yn(t),r=!yn(e),s={};let a=null;if(n){const o=this.viewer.getPosition(),l=Ad(o.yaw,t.yaw);s.yaw={start:o.yaw,end:o.yaw+l},s.pitch={start:o.pitch,end:t.pitch},a=bl(i,Cd(o,t))}if(r){const o=this.viewer.getZoomLevel(),l=Math.abs(e-o);s.zoom={start:o,end:e},a===null&&(a=bl(i,Math.PI/4*l/100))}return a===null?typeof i=="number"?a=i:a=xl:a=Math.max(xl,a),{duration:a,properties:s}}textureCoordsToSphericalCoords(i){var e;if(!((e=this.state.textureData)!=null&&e.panoData))throw new Gt("Current adapter does not support texture coordinates or no texture has been loaded");const t=this.viewer.adapter.textureCoordsToSphericalCoords(i,this.state.textureData.panoData);return!ta.equals(this.viewer.renderer.panoramaPose)||!ta.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(t,un),un.applyEuler(this.viewer.renderer.panoramaPose),un.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(un)):t}sphericalCoordsToTextureCoords(i){var t;if(!((t=this.state.textureData)!=null&&t.panoData))throw new Gt("Current adapter does not support texture coordinates or no texture has been loaded");return(!ta.equals(this.viewer.renderer.panoramaPose)||!ta.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(i,un),Tl(un,this.viewer.renderer.sphereCorrection),Tl(un,this.viewer.renderer.panoramaPose),i=this.vector3ToSphericalCoords(un)),this.viewer.adapter.sphericalCoordsToTextureCoords(i,this.state.textureData.panoData)}sphericalCoordsToVector3(i,t,e=ys){return t||(t=new z),t.x=e*-Math.cos(i.pitch)*Math.sin(i.yaw),t.y=e*Math.sin(i.pitch),t.z=e*Math.cos(i.pitch)*Math.cos(i.yaw),t}vector3ToSphericalCoords(i){const t=Math.acos(i.y/Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z)),e=Math.atan2(i.x,i.z);return{yaw:e<0?-e:Math.PI*2-e,pitch:Math.PI/2-t}}viewerCoordsToVector3(i){const t=this.viewer.renderer.getIntersections(i).filter(e=>e.object.userData[Si]);return t.length?t[0].point:null}viewerCoordsToSphericalCoords(i){const t=this.viewerCoordsToVector3(i);return t?this.vector3ToSphericalCoords(t):null}vector3ToViewerCoords(i){const t=i.clone();return t.project(this.viewer.renderer.camera),{x:Math.round((t.x+1)/2*this.state.size.width),y:Math.round((1-t.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(i){return this.sphericalCoordsToVector3(i,un),this.vector3ToViewerCoords(un)}isPointVisible(i){let t,e;if(i instanceof z)t=i,e=this.vector3ToViewerCoords(i);else if(oc(i))t=this.sphericalCoordsToVector3(i,un),e=this.vector3ToViewerCoords(t);else return!1;return t.dot(this.viewer.state.direction)>0&&e.x>=0&&e.x<=this.viewer.state.size.width&&e.y>=0&&e.y<=this.viewer.state.size.height}cleanPosition(i){if("yaw"in i||"pitch"in i){if(!("yaw"in i)||!("pitch"in i))throw new Gt("Position is missing 'yaw' or 'pitch'");return{yaw:li(i.yaw),pitch:li(i.pitch,!this.state.littlePlanet)}}else return this.textureCoordsToSphericalCoords(i)}cleanSphereCorrection(i){return{pan:li((i==null?void 0:i.pan)||0),tilt:li((i==null?void 0:i.tilt)||0,!0),roll:li((i==null?void 0:i.roll)||0,!0,!1)}}cleanPanoramaPose(i){return{pan:_e.degToRad((i==null?void 0:i.poseHeading)||0),tilt:_e.degToRad((i==null?void 0:i.posePitch)||0),roll:_e.degToRad((i==null?void 0:i.poseRoll)||0)}}},hM=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,uM=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,Es=class bp{constructor(){this.$=bp.IDLE}is(...t){return t.some(e=>this.$&e)}set(t){this.$=t}add(t){this.$|=t}remove(t){this.$&=~t}};Es.IDLE=0;Es.CLICK=1;Es.MOVING=2;Es.INERTIA=4;var ne=Es,dM=class extends Ss{constructor(i){super(i),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,mouseHistory:[],pinchDist:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new ne,this.keyHandler=new to,this.resizeObserver=new ResizeObserver(rc(()=>this.viewer.autoSize(),50)),this.moveThreshold=xd*Ee.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener(Ee.fullscreenEvent,this),this.resizeObserver.observe(this.viewer.container)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener(Ee.fullscreenEvent,this),this.resizeObserver.disconnect(),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(i){switch(i.type){case"keydown":this.__onKeyDown(i);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchmove":this.__onTouchMove(i);break;case"touchend":this.__onTouchEnd(i);break;case Ee.fullscreenEvent:this.__onFullscreenChange();break}if(!ic(i.target,"."+xs))switch(i.type){case"mousedown":this.__onMouseDown(i);break;case"touchstart":this.__onTouchStart(i);break;case"wheel":this.__onMouseWheel(i);break}}__onKeyDown(i){var e;if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=i.key===ge.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(we.CTRL_ZOOM))),!this.viewer.dispatchEvent(new mi(i.key))||!this.state.keyboardEnabled)return;const t=(e=this.config.keyboardActions)==null?void 0:e[i.key];if(typeof t=="function")t(this.viewer),i.preventDefault();else if(t&&!this.keyHandler.pending){switch(t!=="ZOOM_IN"&&t!=="ZOOM_OUT"&&this.viewer.stopAll(),t){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(),i.preventDefault()}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.dynamics.zoom.stop(),this.viewer.resetIdleTimer()})}__onMouseDown(i){this.step.add(ne.CLICK),this.data.startMouseX=i.clientX,this.data.startMouseY=i.clientY}__onMouseUp(i){this.step.is(ne.CLICK,ne.MOVING)&&this.__stopMove(i.clientX,i.clientY,i.target,i.button===2)}__onMouseMove(i){this.config.mousemove&&this.step.is(ne.CLICK,ne.MOVING)&&(i.preventDefault(),this.__doMove(i.clientX,i.clientY)),this.__handleObjectsEvents(i)}__onTouchStart(i){i.touches.length===1?(this.step.add(ne.CLICK),this.data.startMouseX=i.touches[0].clientX,this.data.startMouseY=i.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const t=i.touches[0];this.__stopMove(t.clientX,t.clientY,t.target,!0),this.data.longtouchTimeout=null},Sd))):i.touches.length===2&&(this.step.set(ne.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(i),i.preventDefault()))}__onTouchEnd(i){if(this.__cancelLongTouch(),this.step.is(ne.CLICK,ne.MOVING)){if(i.preventDefault(),this.__cancelTwoFingersOverlay(),i.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(i.touches.length===0){const t=i.changedTouches[0];this.__stopMove(t.clientX,t.clientY,t.target)}}}__onTouchMove(i){if(this.__cancelLongTouch(),!!this.config.mousemove)if(i.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(ne.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:we.TWO_FINGERS,image:hM,title:this.config.lang.twoFingers})},Ed));else if(this.step.is(ne.CLICK,ne.MOVING)){i.preventDefault();const t=i.touches[0];this.__doMove(t.clientX,t.clientY)}}else this.__doMoveZoom(i),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(we.TWO_FINGERS))}__onMouseWheel(i){if(!this.config.mousewheel||!i.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:we.CTRL_ZOOM,image:uM,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(we.CTRL_ZOOM),bd);return}i.preventDefault(),i.stopPropagation();const t=i.deltaY/Math.abs(i.deltaY)*5*this.config.zoomSpeed;t!==0&&this.viewer.dynamics.zoom.step(-t,5)}__onFullscreenChange(){const i=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(i?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new ss(i))}__resetMove(){this.step.set(ne.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0,this.data.mouseHistory.length=0}__startMoveZoom(i){this.viewer.stopAll(),this.__resetMove();const t=Sl(i);this.step.set(ne.MOVING),{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=t,this.__logMouseMove(this.data.mouseX,this.data.mouseY)}__stopMove(i,t,e,n=!1){this.step.is(ne.MOVING)?this.config.moveInertia?(this.__logMouseMove(i,t),this.__stopMoveInertia(i,t)):(this.__resetMove(),this.viewer.resetIdleTimer()):(this.step.is(ne.CLICK)&&!this.__moveThresholdReached(i,t)&&this.__doClick(i,t,e,n),this.step.remove(ne.CLICK),this.step.is(ne.INERTIA)||(this.__resetMove(),this.viewer.resetIdleTimer()))}__stopMoveInertia(i,t){const n=new yx(this.data.mouseHistory.map(([,o,l])=>new Bt(o,l))).getTangent(1),r=this.data.mouseHistory.reduce(({total:o,prev:l},c)=>({total:l?o+ec({x:l[1],y:l[2]},{x:c[1],y:c[2]})/(c[0]-l[0]):0,prev:c}),{total:0,prev:null}).total/this.data.mouseHistory.length;if(!r){this.__resetMove(),this.viewer.resetIdleTimer();return}this.step.set(ne.INERTIA);let s=i,a=t;this.state.animation=new vs({properties:{speed:{start:r,end:0}},duration:1e3,easing:"outQuad",onTick:o=>{s+=o.speed*n.x*3*Ee.pixelRatio,a+=o.speed*n.y*3*Ee.pixelRatio,this.__applyMove(s,a)}}),this.state.animation.then(o=>{this.state.animation=null,o&&(this.__resetMove(),this.viewer.resetIdleTimer())})}__doClick(i,t,e,n=!1){const r=this.viewer.container.getBoundingClientRect(),s=i-r.left,a=t-r.top,o=this.viewer.renderer.getIntersections({x:s,y:a}),l=o.find(c=>c.object.userData[Si]);if(l){const c=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),h={rightclick:n,target:e,clientX:i,clientY:t,viewerX:s,viewerY:a,yaw:c.yaw,pitch:c.pitch,objects:o.map(u=>u.object).filter(u=>!u.userData[Si])};try{const u=this.viewer.dataHelper.sphericalCoordsToTextureCoords(h);Object.assign(h,u)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-h.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-h.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new hf(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new sf(h)),this.data.dblclickData=ms(h),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},Md))}}__handleObjectsEvents(i){if(!Od(this.state.objectsObservers)&&Ld(i.target,this.viewer.container)){const t=Pd(this.viewer.container),e={x:i.clientX-t.x,y:i.clientY-t.y},n=this.viewer.renderer.getIntersections(e),r=(s,a,o)=>{this.viewer.dispatchEvent(new o(i,s,e,a))};for(const[s,a]of Object.entries(this.state.objectsObservers)){const o=n.find(l=>l.object.userData[s]);o?(a&&o.object!==a&&(r(a,s,Cl),this.state.objectsObservers[s]=null),a?r(o.object,s,fp):(this.state.objectsObservers[s]=o.object,r(o.object,s,lp))):a&&(r(a,s,Cl),this.state.objectsObservers[s]=null)}}}__doMove(i,t){this.step.is(ne.CLICK)&&this.__moveThresholdReached(i,t)?(this.viewer.stopAll(),this.__resetMove(),this.step.set(ne.MOVING),this.data.mouseX=i,this.data.mouseY=t,this.__logMouseMove(i,t)):this.step.is(ne.MOVING)&&(this.__applyMove(i,t),this.__logMouseMove(i,t))}__moveThresholdReached(i,t){return Math.abs(i-this.data.startMouseX)>=this.moveThreshold||Math.abs(t-this.data.startMouseY)>=this.moveThreshold}__applyMove(i,t){const e={yaw:this.config.moveSpeed*((i-this.data.mouseX)/this.state.size.width)*_e.degToRad(this.state.littlePlanet?90:this.state.hFov),pitch:this.config.moveSpeed*((t-this.data.mouseY)/this.state.size.height)*_e.degToRad(this.state.littlePlanet?90:this.state.vFov)},n=this.viewer.getPosition();this.viewer.rotate({yaw:n.yaw-e.yaw,pitch:n.pitch+e.pitch}),this.data.mouseX=i,this.data.mouseY=t}__doMoveZoom(i){if(this.step.is(ne.MOVING)){i.preventDefault();const t=Sl(i),e=(t.distance-this.data.pinchDist)/Ee.pixelRatio*this.config.zoomSpeed;this.viewer.zoom(this.viewer.getZoomLevel()+e),this.__doMove(t.center.x,t.center.y),this.data.pinchDist=t.distance}}__logMouseMove(i,t){const e=Date.now(),n=this.data.mouseHistory.length?this.data.mouseHistory[this.data.mouseHistory.length-1]:[0,-1,-1];n[1]===i&&n[2]===t?n[0]=e:e===n[0]?(n[1]=i,n[2]=t):this.data.mouseHistory.push([e,i,t]);let r=null;for(let s=0;s<this.data.mouseHistory.length;)this.data.mouseHistory[s][0]<e-Ml?this.data.mouseHistory.splice(s,1):r&&this.data.mouseHistory[s][0]-r>Ml/10?(this.data.mouseHistory.splice(0,s),s=0,r=this.data.mouseHistory[s][0]):(r=this.data.mouseHistory[s][0],s++)}};qt.enabled=!1;var ea=new Bt,Jh=new Pe,Qh=new zr,fM=class extends Ss{constructor(i){super(i),this.frustumNeedsUpdate=!0,this.renderer=new _d(this.config.rendererParameters),this.renderer.setPixelRatio(Ee.pixelRatio),this.renderer.outputColorSpace=Pn,this.renderer.domElement.className="psv-canvas",this.scene=new Gh,this.camera=new an(50,16/9,.1,2*ys),this.camera.matrixWorldAutoUpdate=!1,this.mesh=this.viewer.adapter.createMesh(),this.mesh.userData={[Si]:!0},this.meshContainer=new Er,this.meshContainer.add(this.mesh),this.scene.add(this.meshContainer),this.raycaster=new Sx,this.frustum=new jl,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.viewer.addEventListener(hs.type,this),this.viewer.addEventListener($n.type,this),this.viewer.addEventListener(os.type,this),this.viewer.addEventListener(Ve.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(i=>this.__renderLoop(i))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(hs.type,this),this.viewer.removeEventListener($n.type,this),this.viewer.removeEventListener(os.type,this),this.viewer.removeEventListener(Ve.type,this),super.destroy()}handleEvent(i){switch(i.type){case hs.type:this.__onSizeUpdated();break;case $n.type:this.__onZoomUpdated();break;case os.type:this.__onPositionUpdated();break;case Ve.type:i.containsOptions("fisheye")&&this.__onPositionUpdated();break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(i){i?this.customRenderer=i(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(i){const t=this.timestamp?i-this.timestamp:0;this.timestamp=i,this.viewer.dispatchEvent(new Jd(i,t)),this.viewer.dynamics.update(t),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new Vf))}setTexture(i){this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.state.textureData=i,this.viewer.adapter.setTexture(this.mesh,i),this.viewer.needsUpdate()}setPanoramaPose(i,t=this.mesh){const e=this.viewer.dataHelper.cleanPanoramaPose(i);t.rotation.set(-e.tilt,-e.pan,-e.roll,"ZXY")}setSphereCorrection(i,t=this.meshContainer){const e=this.viewer.dataHelper.cleanSphereCorrection(i);t.rotation.set(e.tilt,e.pan,e.roll,"ZXY")}transition(i,t){const e=!yn(t.position),n=!yn(t.zoom),r=new hc(e?this.viewer.dataHelper.cleanPosition(t.position):void 0,t.zoom);this.viewer.dispatchEvent(r);const s=new Er,a=this.viewer.adapter.createMesh(.5);if(this.viewer.adapter.setTexture(a,i,!0),this.viewer.adapter.setTextureOpacity(a,0),this.setPanoramaPose(i.panoData,a),this.setSphereCorrection(t.sphereCorrection,s),e&&t.transition==="fade-only"){const h=this.viewer.getPosition(),u=new z(0,1,0);s.rotateOnWorldAxis(u,r.position.yaw-h.yaw);const d=new z(0,1,0).cross(this.camera.getWorldDirection(new z)).normalize();s.rotateOnWorldAxis(d,r.position.pitch-h.pitch)}s.add(a),this.scene.add(s),this.renderer.setRenderTarget(new xi),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:o,properties:l}=this.viewer.dataHelper.getAnimationProperties(t.speed,t.transition===!0?r.position:null,r.zoomLevel),c=new vs({properties:{...l,opacity:{start:0,end:1}},duration:o,easing:"inOutCubic",onTick:h=>{this.viewer.adapter.setTextureOpacity(a,h.opacity),e&&t.transition===!0&&this.viewer.dynamics.position.setValue({yaw:h.yaw,pitch:h.pitch}),n&&this.viewer.dynamics.zoom.setValue(h.zoom),this.viewer.needsUpdate()}});return c.then(h=>{h?(this.setTexture(i),this.viewer.adapter.setTextureOpacity(this.mesh,1),this.setPanoramaPose(i.panoData),this.setSphereCorrection(t.sphereCorrection),e&&t.transition==="fade-only"&&this.viewer.rotate(t.position)):this.viewer.adapter.disposeTexture(i),this.scene.remove(s),a.geometry.dispose(),a.geometry=null}),c}getIntersections(i){var e;ea.x=2*i.x/this.state.size.width-1,ea.y=-2*i.y/this.state.size.height+1,this.raycaster.setFromCamera(ea,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0).filter(n=>n.object.visible).filter(n=>n.object.isMesh&&!!n.object.userData);return(e=this.customRenderer)!=null&&e.getIntersections&&t.push(...this.customRenderer.getIntersections(this.raycaster,ea)),t}isObjectVisible(i){if(!i)return!1;if(this.frustumNeedsUpdate&&(Jh.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(Jh),this.frustumNeedsUpdate=!1),i.isVector3)return this.frustum.containsPoint(i);if(i.isMesh&&i.geometry){const t=i;return t.geometry.boundingBox||t.geometry.computeBoundingBox(),Qh.copy(t.geometry.boundingBox).applyMatrix4(t.matrixWorld),this.frustum.intersectsBox(Qh)}else return i.isObject3D?this.frustum.intersectsObject(i):!1}addObject(i){this.scene.add(i)}removeObject(i){this.scene.remove(i)}cleanScene(i){const t=e=>{var n;(n=e.map)==null||n.dispose(),e.uniforms&&Object.values(e.uniforms).forEach(r=>{var s,a;(a=(s=r.value)==null?void 0:s.dispose)==null||a.call(s)}),e.dispose()};i.traverse(e=>{var n,r;(n=e.geometry)==null||n.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(s=>{t(s)}):t(e.material)),e instanceof Gh||(r=e.dispose)==null||r.call(e),e!==i&&this.cleanScene(e)})}},pM=class extends Jl{load(i,t,e,n,r){const s=new Request(i,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(s,{signal:r}).then(a=>{if(a.status===200||a.status===0){const o=a.body.getReader(),l=a.headers.get("Content-Length")||a.headers.get("X-File-Size"),c=l?parseInt(l):0,h=c!==0;let u=0;const d=new ReadableStream({start(f){v();function v(){o.read().then(({done:g,value:p})=>{if(g)f.close();else{u+=p.byteLength;const m=new ProgressEvent("progress",{lengthComputable:h,loaded:u,total:c});e(m),f.enqueue(p),v()}}).catch(g=>{n(g)})}}});return new Response(d)}else throw new Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)}).then(a=>a.blob()).then(a=>{t(a)}).catch(a=>{n(a)})}},mM=class extends Jl{load(i,t,e,n){const r=document.createElement("img");function s(){l(),t(this)}function a(c){if(l(),n!=null&&n.aborted){const h=new Error;h.name="AbortError",h.message="The operation was aborted.",e(h)}else e(c)}function o(){r.src=""}function l(){r.removeEventListener("load",s,!1),r.removeEventListener("error",a,!1),n==null||n.removeEventListener("abort",o,!1)}return r.addEventListener("load",s,!1),r.addEventListener("error",a,!1),n==null||n.addEventListener("abort",o,!1),!i.startsWith("data:")&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),r.src=i,r}},vM=class extends Ss{constructor(i){super(i),this.abortCtrl={},this.fileLoader=new pM,this.imageLoader=new mM,this.config.withCredentials&&(this.fileLoader.setWithCredentials(!0),this.imageLoader.setCrossOrigin("use-credentials"))}destroy(){this.abortLoading(),super.destroy()}abortLoading(){Object.values(this.abortCtrl).forEach(i=>i.abort()),this.abortCtrl={}}loadFile(i,t,e){const n=xr.get(i,e);if(n){if(n instanceof Blob)return t==null||t(100),Promise.resolve(n);xr.remove(i,e)}return this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(i)),new Promise((r,s)=>{let a=0;t==null||t(a),this.fileLoader.load(i,o=>{a=100,t==null||t(a),xr.add(i,e,o),r(o)},o=>{if(o.lengthComputable){const l=o.loaded/o.total*100;l>a&&(a=l,t==null||t(a))}},o=>{s(o)},this.__getAbortSignal(e))})}loadImage(i,t,e){const n=xr.get(i,e);return n?(t==null||t(100),n instanceof Blob?this.blobToImage(n):Promise.resolve(n)):!t&&!this.config.requestHeaders?new Promise((r,s)=>{this.imageLoader.load(i,a=>{xr.add(i,e,a),r(a)},a=>{s(a)},this.__getAbortSignal(e))}):this.loadFile(i,t,e).then(r=>this.blobToImage(r))}blobToImage(i){return new Promise((t,e)=>{const n=document.createElement("img");n.onload=()=>{URL.revokeObjectURL(n.src),t(n)},n.onerror=e,n.src=URL.createObjectURL(i)})}preloadPanorama(i){return this.viewer.adapter.supportsPreload(i)?this.viewer.adapter.loadTexture(i,!1):Promise.reject(new Gt("Current adapter does not support preload"))}__getAbortSignal(i){var t;return i?((t=this.abortCtrl[i])!=null&&t.signal.aborted&&delete this.abortCtrl[i],this.abortCtrl[i]||(this.abortCtrl[i]=new AbortController),this.abortCtrl[i].signal):null}},gM=class extends Ss{constructor(i){super(i),this.zoom=new La(t=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(t),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new $n(t))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new Gd(t=>{this.viewer.dataHelper.sphericalCoordsToVector3(t,this.viewer.state.direction),this.viewer.dispatchEvent(new os(t))},{yaw:new La(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new La(null,{defaultValue:this.config.defaultPitch,min:this.viewer.state.littlePlanet?0:-Math.PI/2,max:this.viewer.state.littlePlanet?Math.PI*2:Math.PI/2,wrap:this.viewer.state.littlePlanet})}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(_e.degToRad(this.config.moveSpeed*50))}update(i){this.zoom.update(i),this.position.update(i)}},_M=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new z(0,0,ys),this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.littlePlanet=!1,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},yM=class extends Yd{constructor(i){var t,e,n;super(),this.plugins={},this.children=[],this.onResize=rc(()=>this.navbar.autoSize(),500),xr.init(),Ee.load(),this.state=new _M,this.config=Qx(i),this.parent=Rd(i.container),this.parent[Si]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),Vd(this.container,"core"),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new fM(this),this.textureLoader=new vM(this),this.eventsHandler=new dM(this),this.dataHelper=new cM(this),this.dynamics=new gM(this),(e=(t=this.adapter).init)==null||e.call(t),this.loader=new nM(this),this.navbar=new eM(this),this.panel=new aM(this),this.notification=new iM(this),this.overlay=new rM(this),this.resize(this.config.size),this.setCursor(null),ac(Ee.isTouchEnabled,r=>{Ka(this.container,"psv--is-touch",r)}),this.config.plugins.forEach(([r,s])=>{this.plugins[r.id]=new r(this,s)});for(const r of Object.values(this.plugins))(n=r.init)==null||n.call(r);this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama):this.loader.show())}destroy(){this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[i,t]of Object.entries(this.plugins))t.destroy(),delete this.plugins[i];this.children.slice().forEach(i=>i.destroy()),this.children.length=0,this.eventsHandler.destroy(),this.renderer.destroy(),this.textureLoader.destroy(),this.dataHelper.destroy(),this.adapter.destroy(),this.dynamics.destroy(),this.parent.removeChild(this.container),delete this.parent[Si]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new ls)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(i){if(typeof i=="string")return this.plugins[i];{const t=Rl(i);return t?this.plugins[t.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return Id(this.parent)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(i){i?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new hs(this.getSize())),this.onResize())}setPanorama(i,t={}){var a;this.textureLoader.abortLoading(),(a=this.state.transitionAnimation)==null||a.cancel(),this.state.ready||["sphereCorrection","panoData"].forEach(o=>{o in t||(t[o]=this.config[o])}),t.transition===void 0&&(t.transition=!0),t.speed===void 0&&(t.speed=yd),t.showLoader===void 0&&(t.showLoader=!0),t.caption===void 0&&(t.caption=this.config.caption),t.description===void 0&&(t.description=this.config.description),!t.panoData&&typeof this.config.panoData=="function"&&(t.panoData=this.config.panoData);const e=!yn(t.position),n=!yn(t.zoom);(e||n)&&this.stopAll(),this.hideError(),this.resetIdleTimer(),this.config.panorama=i,this.config.caption=t.caption,this.config.description=t.description;const r=o=>{if(zd(o))return!1;if(this.loader.hide(),this.state.loadingPromise=null,o)throw this.navbar.setCaption(""),this.showError(this.config.lang.loadError),console.error(o),this.dispatchEvent(new Ff(i,o)),o;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(t.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new Lf(i));const s=this.adapter.loadTexture(this.config.panorama,!0,t.panoData).then(o=>{if(o.panorama!==this.config.panorama)throw this.adapter.disposeTexture(o),El();return o});return!t.transition||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(o=>{this.renderer.show(),this.renderer.setTexture(o),this.renderer.setPanoramaPose(o.panoData),this.renderer.setSphereCorrection(t.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new Al(o)),n&&this.zoom(t.zoom),e&&this.rotate(t.position)}).then(()=>r(),o=>r(o)):this.state.loadingPromise=s.then(o=>(this.loader.hide(),this.dispatchEvent(new Al(o)),this.state.transitionAnimation=this.renderer.transition(o,t),this.state.transitionAnimation)).then(o=>{if(this.state.transitionAnimation=null,!o)throw El()}).then(()=>r(),o=>r(o)),this.state.loadingPromise}setOptions(i){const t={...this.config,...i};for(let[e,n]of Object.entries(i)){if(!(e in Ur)){ye(`Unknown option ${e}`);continue}if(e in Kh){ye(Kh[e]);continue}switch(e in Ll&&(n=Ll[e](n,{rawConfig:t,defValue:Ur[e]})),this.config[e]=n,e){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new $n(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new Ve(Object.keys(i)))}setOption(i,t){this.setOptions({[i]:t})}showError(i){this.overlay.show({id:we.ERROR,image:lM,title:i,dissmisable:!1})}hideError(){this.overlay.hide(we.ERROR)}rotate(i){const t=new ef(this.dataHelper.cleanPosition(i));this.dispatchEvent(t),!t.defaultPrevented&&this.dynamics.position.setValue(t.position)}zoom(i){this.dynamics.zoom.setValue(i)}zoomIn(i=1){this.dynamics.zoom.step(i)}zoomOut(i=1){this.dynamics.zoom.step(-i)}animate(i){const t=oc(i),e=!yn(i.zoom),n=new hc(t?this.dataHelper.cleanPosition(i):void 0,i.zoom);if(this.dispatchEvent(n),n.defaultPrevented)return;this.stopAll();const{duration:r,properties:s}=this.dataHelper.getAnimationProperties(i.speed,n.position,n.zoomLevel);return r?(this.state.animation=new vs({properties:s,duration:r,easing:i.easing||"inOutSine",onTick:a=>{t&&this.dynamics.position.setValue({yaw:a.yaw,pitch:a.pitch}),e&&this.dynamics.zoom.setValue(a.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(t&&this.rotate(n.position),e&&this.zoom(n.zoomLevel),new vs(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(i){const t=i;["width","height"].forEach(e=>{i&&t[e]&&(/^[0-9.]+$/.test(t[e])&&(t[e]+="px"),this.parent.style[e]=t[e])}),this.autoSize()}enterFullscreen(){this.isFullscreenEnabled()||Ud(this.parent)}exitFullscreen(){this.isFullscreenEnabled()&&Dd()}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(i){return new oM(this,i)}setCursor(i){this.state.cursorOverride=i,i?this.container.style.cursor=i:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(i){this.state.objectsObservers[i]||(this.state.objectsObservers[i]=null)}unobserveObjects(i){delete this.state.objectsObservers[i]}stopAll(){return this.dispatchEvent(new ip),this.disableIdleTimer(),this.stopAnimation()}};function xM(i,t){t===void 0&&(t={});var e=t.insertAt;if(!(!i||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=i:r.appendChild(document.createTextNode(i))}}var MM=`/* add css styles here (optional) */
.view-container {
    position: relative;
    overflow: hidden;
}

.showNavbarButton {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1000;

    background: rgba(0, 0, 0, 0.09);
    bottom: 10px;
    height: 30px;
    width: 30px;
    right: 10px;

    transition: background 0.2s ease, color 0.2s ease;
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
}

.hideNavbarButton svg {
    width: 100%;
    transform: scale(1);
    transition: transform .2s ease;
    vertical-align: initial;
    margin-top: -2;

    &:hover {
        transform: scale(1.2);
    }
}`;xM(MM);var rr;function jn(){return typeof Reflect<"u"&&Reflect.get?jn=Reflect.get.bind():jn=function(t,e,n){var r=SM(t,e);if(r){var s=Object.getOwnPropertyDescriptor(r,e);return s.get?s.get.call(arguments.length<3?t:n):s.value}},jn.apply(this,arguments)}function SM(i,t){for(;!Object.prototype.hasOwnProperty.call(i,t)&&(i=Mn(i),i!==null););return i}function EM(i){return AM(i)||TM(i)||wM(i)||bM()}function bM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wM(i,t){if(i){if(typeof i=="string")return Il(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Il(i,t)}}function TM(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function AM(i){if(Array.isArray(i))return Il(i)}function Il(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}function Ke(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),t&&Ul(i,t)}function Ul(i,t){return Ul=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Ul(i,t)}function Je(i){var t=RM();return function(){var n=Mn(i),r;if(t){var s=Mn(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return CM(this,r)}}function CM(i,t){if(t&&(Bi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Dr(i)}function Dr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function RM(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Mn(i){return Mn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Mn(i)}function na(i,t,e){return t=wp(t),t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function Ze(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Ze=function(){return i};var i={},t=Object.prototype,e=t.hasOwnProperty,n=Object.defineProperty||function(D,I,S){D[I]=S.value},r=typeof Symbol=="function"?Symbol:{},s=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function l(D,I,S){return Object.defineProperty(D,I,{value:S,enumerable:!0,configurable:!0,writable:!0}),D[I]}try{l({},"")}catch{l=function(S,L,U){return S[L]=U}}function c(D,I,S,L){var U=I&&I.prototype instanceof d?I:d,O=Object.create(U.prototype),B=new $(L||[]);return n(O,"_invoke",{value:P(D,S,B)}),O}function h(D,I,S){try{return{type:"normal",arg:D.call(I,S)}}catch(L){return{type:"throw",arg:L}}}i.wrap=c;var u={};function d(){}function f(){}function v(){}var g={};l(g,s,function(){return this});var p=Object.getPrototypeOf,m=p&&p(p(y([])));m&&m!==t&&e.call(m,s)&&(g=m);var x=v.prototype=d.prototype=Object.create(g);function _(D){["next","throw","return"].forEach(function(I){l(D,I,function(S){return this._invoke(I,S)})})}function b(D,I){function S(U,O,B,G){var Y=h(D[U],D,O);if(Y.type!=="throw"){var j=Y.arg,st=j.value;return st&&Bi(st)=="object"&&e.call(st,"__await")?I.resolve(st.__await).then(function(pt){S("next",pt,B,G)},function(pt){S("throw",pt,B,G)}):I.resolve(st).then(function(pt){j.value=pt,B(j)},function(pt){return S("throw",pt,B,G)})}G(Y.arg)}var L;n(this,"_invoke",{value:function(O,B){function G(){return new I(function(Y,j){S(O,B,Y,j)})}return L=L?L.then(G,G):G()}})}function P(D,I,S){var L="suspendedStart";return function(U,O){if(L==="executing")throw new Error("Generator is already running");if(L==="completed"){if(U==="throw")throw O;return T()}for(S.method=U,S.arg=O;;){var B=S.delegate;if(B){var G=C(B,S);if(G){if(G===u)continue;return G}}if(S.method==="next")S.sent=S._sent=S.arg;else if(S.method==="throw"){if(L==="suspendedStart")throw L="completed",S.arg;S.dispatchException(S.arg)}else S.method==="return"&&S.abrupt("return",S.arg);L="executing";var Y=h(D,I,S);if(Y.type==="normal"){if(L=S.done?"completed":"suspendedYield",Y.arg===u)continue;return{value:Y.arg,done:S.done}}Y.type==="throw"&&(L="completed",S.method="throw",S.arg=Y.arg)}}}function C(D,I){var S=I.method,L=D.iterator[S];if(L===void 0)return I.delegate=null,S==="throw"&&D.iterator.return&&(I.method="return",I.arg=void 0,C(D,I),I.method==="throw")||S!=="return"&&(I.method="throw",I.arg=new TypeError("The iterator does not provide a '"+S+"' method")),u;var U=h(L,D.iterator,I.arg);if(U.type==="throw")return I.method="throw",I.arg=U.arg,I.delegate=null,u;var O=U.arg;return O?O.done?(I[D.resultName]=O.value,I.next=D.nextLoc,I.method!=="return"&&(I.method="next",I.arg=void 0),I.delegate=null,u):O:(I.method="throw",I.arg=new TypeError("iterator result is not an object"),I.delegate=null,u)}function A(D){var I={tryLoc:D[0]};1 in D&&(I.catchLoc=D[1]),2 in D&&(I.finallyLoc=D[2],I.afterLoc=D[3]),this.tryEntries.push(I)}function F(D){var I=D.completion||{};I.type="normal",delete I.arg,D.completion=I}function $(D){this.tryEntries=[{tryLoc:"root"}],D.forEach(A,this),this.reset(!0)}function y(D){if(D){var I=D[s];if(I)return I.call(D);if(typeof D.next=="function")return D;if(!isNaN(D.length)){var S=-1,L=function U(){for(;++S<D.length;)if(e.call(D,S))return U.value=D[S],U.done=!1,U;return U.value=void 0,U.done=!0,U};return L.next=L}}return{next:T}}function T(){return{value:void 0,done:!0}}return f.prototype=v,n(x,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:f,configurable:!0}),f.displayName=l(v,o,"GeneratorFunction"),i.isGeneratorFunction=function(D){var I=typeof D=="function"&&D.constructor;return!!I&&(I===f||(I.displayName||I.name)==="GeneratorFunction")},i.mark=function(D){return Object.setPrototypeOf?Object.setPrototypeOf(D,v):(D.__proto__=v,l(D,o,"GeneratorFunction")),D.prototype=Object.create(x),D},i.awrap=function(D){return{__await:D}},_(b.prototype),l(b.prototype,a,function(){return this}),i.AsyncIterator=b,i.async=function(D,I,S,L,U){U===void 0&&(U=Promise);var O=new b(c(D,I,S,L),U);return i.isGeneratorFunction(I)?O:O.next().then(function(B){return B.done?B.value:O.next()})},_(x),l(x,o,"Generator"),l(x,s,function(){return this}),l(x,"toString",function(){return"[object Generator]"}),i.keys=function(D){var I=Object(D),S=[];for(var L in I)S.push(L);return S.reverse(),function U(){for(;S.length;){var O=S.pop();if(O in I)return U.value=O,U.done=!1,U}return U.done=!0,U}},i.values=y,$.prototype={constructor:$,reset:function(I){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(F),!I)for(var S in this)S.charAt(0)==="t"&&e.call(this,S)&&!isNaN(+S.slice(1))&&(this[S]=void 0)},stop:function(){this.done=!0;var I=this.tryEntries[0].completion;if(I.type==="throw")throw I.arg;return this.rval},dispatchException:function(I){if(this.done)throw I;var S=this;function L(j,st){return B.type="throw",B.arg=I,S.next=j,st&&(S.method="next",S.arg=void 0),!!st}for(var U=this.tryEntries.length-1;U>=0;--U){var O=this.tryEntries[U],B=O.completion;if(O.tryLoc==="root")return L("end");if(O.tryLoc<=this.prev){var G=e.call(O,"catchLoc"),Y=e.call(O,"finallyLoc");if(G&&Y){if(this.prev<O.catchLoc)return L(O.catchLoc,!0);if(this.prev<O.finallyLoc)return L(O.finallyLoc)}else if(G){if(this.prev<O.catchLoc)return L(O.catchLoc,!0)}else{if(!Y)throw new Error("try statement without catch or finally");if(this.prev<O.finallyLoc)return L(O.finallyLoc)}}}},abrupt:function(I,S){for(var L=this.tryEntries.length-1;L>=0;--L){var U=this.tryEntries[L];if(U.tryLoc<=this.prev&&e.call(U,"finallyLoc")&&this.prev<U.finallyLoc){var O=U;break}}O&&(I==="break"||I==="continue")&&O.tryLoc<=S&&S<=O.finallyLoc&&(O=null);var B=O?O.completion:{};return B.type=I,B.arg=S,O?(this.method="next",this.next=O.finallyLoc,u):this.complete(B)},complete:function(I,S){if(I.type==="throw")throw I.arg;return I.type==="break"||I.type==="continue"?this.next=I.arg:I.type==="return"?(this.rval=this.arg=I.arg,this.method="return",this.next="end"):I.type==="normal"&&S&&(this.next=S),u},finish:function(I){for(var S=this.tryEntries.length-1;S>=0;--S){var L=this.tryEntries[S];if(L.finallyLoc===I)return this.complete(L.completion,L.afterLoc),F(L),u}},catch:function(I){for(var S=this.tryEntries.length-1;S>=0;--S){var L=this.tryEntries[S];if(L.tryLoc===I){var U=L.completion;if(U.type==="throw"){var O=U.arg;F(L)}return O}}throw new Error("illegal catch attempt")},delegateYield:function(I,S,L){return this.delegate={iterator:y(I),resultName:S,nextLoc:L},this.method==="next"&&(this.arg=void 0),u}},i}function Bi(i){"@babel/helpers - typeof";return Bi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bi(i)}function Ht(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function tu(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,wp(n.key),n)}}function Vt(i,t,e){return t&&tu(i.prototype,t),e&&tu(i,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function wp(i){var t=LM(i,"string");return Bi(t)==="symbol"?t:String(t)}function LM(i,t){if(Bi(i)!=="object"||i===null)return i;var e=i[Symbol.toPrimitive];if(e!==void 0){var n=e.call(i,t||"default");if(Bi(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(i)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Tp="161",Dl=0,PM=1,eu=1,IM=2,nu=100,iu=204,ru=205,su=3,UM=0,Ap=300,au=1e3,ia=1001,ou=1002,Ga=1003,DM=1006,FM=1008,OM=1009,NM=1014,kM=1015,zM=1020,Fl=1023,Ho=1026,lu=1027,BM=3e3,Vo=3001,Ia="",vn="srgb",pc="srgb-linear",HM="display-p3",Cp="display-p3-linear",Ol="linear",cu="srgb",hu="rec709",uu="p3",sr=7680,du=519,VM=515,Nl=35044,ra=2e3,fu=2001,io=function(){function i(){Ht(this,i)}return Vt(i,[{key:"addEventListener",value:function(e,n){this._listeners===void 0&&(this._listeners={});var r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}},{key:"hasEventListener",value:function(e,n){if(this._listeners===void 0)return!1;var r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}},{key:"removeEventListener",value:function(e,n){if(this._listeners!==void 0){var r=this._listeners,s=r[e];if(s!==void 0){var a=s.indexOf(n);a!==-1&&s.splice(a,1)}}}},{key:"dispatchEvent",value:function(e){if(this._listeners!==void 0){var n=this._listeners,r=n[e.type];if(r!==void 0){e.target=this;for(var s=r.slice(0),a=0,o=s.length;a<o;a++)s[a].call(this,e);e.target=null}}}}]),i}(),Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function gi(){var i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255];return r.toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function GM(i,t){return(i%t+t)%t}function Go(i,t,e){return(1-e)*i+e*t}function An(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xe=function(i){function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;Ht(this,t),t.prototype.isVector2=!0,this.x=e,this.y=n}return Vt(t,[{key:"width",get:function(){return this.x},set:function(n){this.x=n}},{key:"height",get:function(){return this.y},set:function(n){this.y=n}},{key:"set",value:function(n,r){return this.x=n,this.y=r,this}},{key:"setScalar",value:function(n){return this.x=n,this.y=n,this}},{key:"setX",value:function(n){return this.x=n,this}},{key:"setY",value:function(n){return this.y=n,this}},{key:"setComponent",value:function(n,r){switch(n){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+n)}return this}},{key:"getComponent",value:function(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}},{key:"clone",value:function(){return new this.constructor(this.x,this.y)}},{key:"copy",value:function(n){return this.x=n.x,this.y=n.y,this}},{key:"add",value:function(n){return this.x+=n.x,this.y+=n.y,this}},{key:"addScalar",value:function(n){return this.x+=n,this.y+=n,this}},{key:"addVectors",value:function(n,r){return this.x=n.x+r.x,this.y=n.y+r.y,this}},{key:"addScaledVector",value:function(n,r){return this.x+=n.x*r,this.y+=n.y*r,this}},{key:"sub",value:function(n){return this.x-=n.x,this.y-=n.y,this}},{key:"subScalar",value:function(n){return this.x-=n,this.y-=n,this}},{key:"subVectors",value:function(n,r){return this.x=n.x-r.x,this.y=n.y-r.y,this}},{key:"multiply",value:function(n){return this.x*=n.x,this.y*=n.y,this}},{key:"multiplyScalar",value:function(n){return this.x*=n,this.y*=n,this}},{key:"divide",value:function(n){return this.x/=n.x,this.y/=n.y,this}},{key:"divideScalar",value:function(n){return this.multiplyScalar(1/n)}},{key:"applyMatrix3",value:function(n){var r=this.x,s=this.y,a=n.elements;return this.x=a[0]*r+a[3]*s+a[6],this.y=a[1]*r+a[4]*s+a[7],this}},{key:"min",value:function(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}},{key:"max",value:function(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}},{key:"clamp",value:function(n,r){return this.x=Math.max(n.x,Math.min(r.x,this.x)),this.y=Math.max(n.y,Math.min(r.y,this.y)),this}},{key:"clampScalar",value:function(n,r){return this.x=Math.max(n,Math.min(r,this.x)),this.y=Math.max(n,Math.min(r,this.y)),this}},{key:"clampLength",value:function(n,r){var s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(n,Math.min(r,s)))}},{key:"floor",value:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}},{key:"ceil",value:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}},{key:"round",value:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},{key:"roundToZero",value:function(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}},{key:"negate",value:function(){return this.x=-this.x,this.y=-this.y,this}},{key:"dot",value:function(n){return this.x*n.x+this.y*n.y}},{key:"cross",value:function(n){return this.x*n.y-this.y*n.x}},{key:"lengthSq",value:function(){return this.x*this.x+this.y*this.y}},{key:"length",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"manhattanLength",value:function(){return Math.abs(this.x)+Math.abs(this.y)}},{key:"normalize",value:function(){return this.divideScalar(this.length()||1)}},{key:"angle",value:function(){var n=Math.atan2(-this.y,-this.x)+Math.PI;return n}},{key:"angleTo",value:function(n){var r=Math.sqrt(this.lengthSq()*n.lengthSq());if(r===0)return Math.PI/2;var s=this.dot(n)/r;return Math.acos(Be(s,-1,1))}},{key:"distanceTo",value:function(n){return Math.sqrt(this.distanceToSquared(n))}},{key:"distanceToSquared",value:function(n){var r=this.x-n.x,s=this.y-n.y;return r*r+s*s}},{key:"manhattanDistanceTo",value:function(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}},{key:"setLength",value:function(n){return this.normalize().multiplyScalar(n)}},{key:"lerp",value:function(n,r){return this.x+=(n.x-this.x)*r,this.y+=(n.y-this.y)*r,this}},{key:"lerpVectors",value:function(n,r,s){return this.x=n.x+(r.x-n.x)*s,this.y=n.y+(r.y-n.y)*s,this}},{key:"equals",value:function(n){return n.x===this.x&&n.y===this.y}},{key:"fromArray",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this.x=n[r],this.y=n[r+1],this}},{key:"toArray",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n[r]=this.x,n[r+1]=this.y,n}},{key:"fromBufferAttribute",value:function(n,r){return this.x=n.getX(r),this.y=n.getY(r),this}},{key:"rotateAround",value:function(n,r){var s=Math.cos(r),a=Math.sin(r),o=this.x-n.x,l=this.y-n.y;return this.x=o*s-l*a+n.x,this.y=o*a+l*s+n.y,this}},{key:"random",value:function(){return this.x=Math.random(),this.y=Math.random(),this}},{key:i,value:Ze().mark(function e(){return Ze().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.x;case 2:return r.next=4,this.y;case 4:case"end":return r.stop()}},e,this)})}]),t}(Symbol.iterator),Vr=function(){function i(t,e,n,r,s,a,o,l,c){Ht(this,i),i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}return Vt(i,[{key:"set",value:function(e,n,r,s,a,o,l,c,h){var u=this.elements;return u[0]=e,u[1]=s,u[2]=l,u[3]=n,u[4]=a,u[5]=c,u[6]=r,u[7]=o,u[8]=h,this}},{key:"identity",value:function(){return this.set(1,0,0,0,1,0,0,0,1),this}},{key:"copy",value:function(e){var n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}},{key:"extractBasis",value:function(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}},{key:"setFromMatrix4",value:function(e){var n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}},{key:"multiply",value:function(e){return this.multiplyMatrices(this,e)}},{key:"premultiply",value:function(e){return this.multiplyMatrices(e,this)}},{key:"multiplyMatrices",value:function(e,n){var r=e.elements,s=n.elements,a=this.elements,o=r[0],l=r[3],c=r[6],h=r[1],u=r[4],d=r[7],f=r[2],v=r[5],g=r[8],p=s[0],m=s[3],x=s[6],_=s[1],b=s[4],P=s[7],C=s[2],A=s[5],F=s[8];return a[0]=o*p+l*_+c*C,a[3]=o*m+l*b+c*A,a[6]=o*x+l*P+c*F,a[1]=h*p+u*_+d*C,a[4]=h*m+u*b+d*A,a[7]=h*x+u*P+d*F,a[2]=f*p+v*_+g*C,a[5]=f*m+v*b+g*A,a[8]=f*x+v*P+g*F,this}},{key:"multiplyScalar",value:function(e){var n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}},{key:"determinant",value:function(){var e=this.elements,n=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],u=e[8];return n*o*u-n*l*h-r*a*u+r*l*c+s*a*h-s*o*c}},{key:"invert",value:function(){var e=this.elements,n=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],u=e[8],d=u*o-l*h,f=l*c-u*a,v=h*a-o*c,g=n*d+r*f+s*v;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);var p=1/g;return e[0]=d*p,e[1]=(s*h-u*r)*p,e[2]=(l*r-s*o)*p,e[3]=f*p,e[4]=(u*n-s*c)*p,e[5]=(s*a-l*n)*p,e[6]=v*p,e[7]=(r*c-h*n)*p,e[8]=(o*n-r*a)*p,this}},{key:"transpose",value:function(){var e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}},{key:"getNormalMatrix",value:function(e){return this.setFromMatrix4(e).invert().transpose()}},{key:"transposeIntoArray",value:function(e){var n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}},{key:"setUvTransform",value:function(e,n,r,s,a,o,l){var c=Math.cos(a),h=Math.sin(a);return this.set(r*c,r*h,-r*(c*o+h*l)+o+e,-s*h,s*c,-s*(-h*o+c*l)+l+n,0,0,1),this}},{key:"scale",value:function(e,n){return this.premultiply(Wo.makeScale(e,n)),this}},{key:"rotate",value:function(e){return this.premultiply(Wo.makeRotation(-e)),this}},{key:"translate",value:function(e,n){return this.premultiply(Wo.makeTranslation(e,n)),this}},{key:"makeTranslation",value:function(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}},{key:"makeRotation",value:function(e){var n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}},{key:"makeScale",value:function(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}},{key:"equals",value:function(e){for(var n=this.elements,r=e.elements,s=0;s<9;s++)if(n[s]!==r[s])return!1;return!0}},{key:"fromArray",value:function(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=0;r<9;r++)this.elements[r]=e[r+n];return this}},{key:"toArray",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}},{key:"clone",value:function(){return new this.constructor().fromArray(this.elements)}}]),i}(),Wo=new Vr;function WM(i){for(var t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pu(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}var mu={};function us(i){i in mu||(mu[i]=!0,console.warn(i))}var vu=new Vr().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gu=new Vr().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sa=(rr={},na(rr,pc,{transfer:Ol,primaries:hu,toReference:function(t){return t},fromReference:function(t){return t}}),na(rr,vn,{transfer:cu,primaries:hu,toReference:function(t){return t.convertSRGBToLinear()},fromReference:function(t){return t.convertLinearToSRGB()}}),na(rr,Cp,{transfer:Ol,primaries:uu,toReference:function(t){return t.applyMatrix3(gu)},fromReference:function(t){return t.applyMatrix3(vu)}}),na(rr,HM,{transfer:cu,primaries:uu,toReference:function(t){return t.convertSRGBToLinear().applyMatrix3(gu)},fromReference:function(t){return t.applyMatrix3(vu).convertLinearToSRGB()}}),rr),XM=new Set([pc,Cp]),dn={enabled:!0,_workingColorSpace:pc,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!XM.has(i))throw new Error('Unsupported working color space, "'.concat(i,'".'));this._workingColorSpace=i},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;var r=sa[e].toReference,s=sa[n].fromReference;return s(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return sa[t].primaries},getTransfer:function(t){return t===Ia?Ol:sa[t].transfer}};function Cr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ar,qM=function(){function i(){Ht(this,i)}return Vt(i,null,[{key:"getDataURL",value:function(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;var n;if(e instanceof HTMLCanvasElement)n=e;else{ar===void 0&&(ar=pu("canvas")),ar.width=e.width,ar.height=e.height;var r=ar.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ar}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}},{key:"sRGBToLinear",value:function(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){var n=pu("canvas");n.width=e.width,n.height=e.height;var r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);for(var s=r.getImageData(0,0,e.width,e.height),a=s.data,o=0;o<a.length;o++)a[o]=Cr(a[o]/255)*255;return r.putImageData(s,0,0),n}else if(e.data){for(var l=e.data.slice(0),c=0;c<l.length;c++)l instanceof Uint8Array||l instanceof Uint8ClampedArray?l[c]=Math.floor(Cr(l[c]/255)*255):l[c]=Cr(l[c]);return{data:l,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}]),i}(),YM=0,$M=function(){function i(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;Ht(this,i),this.isSource=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}return Vt(i,[{key:"needsUpdate",set:function(e){e===!0&&this.version++}},{key:"toJSON",value:function(e){var n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];var r={uuid:this.uuid,url:""},s=this.data;if(s!==null){var a;if(Array.isArray(s)){a=[];for(var o=0,l=s.length;o<l;o++)s[o].isDataTexture?a.push(qo(s[o].image)):a.push(qo(s[o]))}else a=qo(s);r.url=a}return n||(e.images[this.uuid]=r),r}}]),i}();function qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qM.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jM=0,bs=function(i){Ke(e,i);var t=Je(e);function e(){var n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.DEFAULT_IMAGE,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.DEFAULT_MAPPING,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ia,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ia,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:DM,c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:FM,h=arguments.length>6&&arguments[6]!==void 0?arguments[6]:Fl,u=arguments.length>7&&arguments[7]!==void 0?arguments[7]:OM,d=arguments.length>8&&arguments[8]!==void 0?arguments[8]:e.DEFAULT_ANISOTROPY,f=arguments.length>9&&arguments[9]!==void 0?arguments[9]:Ia;return Ht(this,e),n=t.call(this),n.isTexture=!0,Object.defineProperty(Dr(n),"id",{value:jM++}),n.uuid=gi(),n.name="",n.source=new $M(r),n.mipmaps=[],n.mapping=s,n.channel=0,n.wrapS=a,n.wrapT=o,n.magFilter=l,n.minFilter=c,n.anisotropy=d,n.format=h,n.internalFormat=null,n.type=u,n.offset=new xe(0,0),n.repeat=new xe(1,1),n.center=new xe(0,0),n.rotation=0,n.matrixAutoUpdate=!0,n.matrix=new Vr,n.generateMipmaps=!0,n.premultiplyAlpha=!1,n.flipY=!0,n.unpackAlignment=4,typeof f=="string"?n.colorSpace=f:(us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),n.colorSpace=f===Vo?vn:Ia),n.userData={},n.version=0,n.onUpdate=null,n.isRenderTargetTexture=!1,n.needsPMREMUpdate=!1,n}return Vt(e,[{key:"image",get:function(){return this.source.data},set:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;this.source.data=r}},{key:"updateMatrix",value:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}},{key:"clone",value:function(){return new this.constructor().copy(this)}},{key:"copy",value:function(r){return this.name=r.name,this.source=r.source,this.mipmaps=r.mipmaps.slice(0),this.mapping=r.mapping,this.channel=r.channel,this.wrapS=r.wrapS,this.wrapT=r.wrapT,this.magFilter=r.magFilter,this.minFilter=r.minFilter,this.anisotropy=r.anisotropy,this.format=r.format,this.internalFormat=r.internalFormat,this.type=r.type,this.offset.copy(r.offset),this.repeat.copy(r.repeat),this.center.copy(r.center),this.rotation=r.rotation,this.matrixAutoUpdate=r.matrixAutoUpdate,this.matrix.copy(r.matrix),this.generateMipmaps=r.generateMipmaps,this.premultiplyAlpha=r.premultiplyAlpha,this.flipY=r.flipY,this.unpackAlignment=r.unpackAlignment,this.colorSpace=r.colorSpace,this.userData=JSON.parse(JSON.stringify(r.userData)),this.needsUpdate=!0,this}},{key:"toJSON",value:function(r){var s=r===void 0||typeof r=="string";if(!s&&r.textures[this.uuid]!==void 0)return r.textures[this.uuid];var a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(r).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),s||(r.textures[this.uuid]=a),a}},{key:"dispose",value:function(){this.dispatchEvent({type:"dispose"})}},{key:"transformUv",value:function(r){if(this.mapping!==Ap)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case au:r.x=r.x-Math.floor(r.x);break;case ia:r.x=r.x<0?0:1;break;case ou:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x=r.x-Math.floor(r.x);break}if(r.y<0||r.y>1)switch(this.wrapT){case au:r.y=r.y-Math.floor(r.y);break;case ia:r.y=r.y<0?0:1;break;case ou:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y=r.y-Math.floor(r.y);break}return this.flipY&&(r.y=1-r.y),r}},{key:"needsUpdate",set:function(r){r===!0&&(this.version++,this.source.needsUpdate=!0)}},{key:"encoding",get:function(){return us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vn?Vo:BM},set:function(r){us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=r===Vo?vn:Ia}}]),e}(io);bs.DEFAULT_IMAGE=null;bs.DEFAULT_MAPPING=Ap;bs.DEFAULT_ANISOTROPY=1;var ZM=function(i){function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;Ht(this,t),t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=s}return Vt(t,[{key:"width",get:function(){return this.z},set:function(n){this.z=n}},{key:"height",get:function(){return this.w},set:function(n){this.w=n}},{key:"set",value:function(n,r,s,a){return this.x=n,this.y=r,this.z=s,this.w=a,this}},{key:"setScalar",value:function(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}},{key:"setX",value:function(n){return this.x=n,this}},{key:"setY",value:function(n){return this.y=n,this}},{key:"setZ",value:function(n){return this.z=n,this}},{key:"setW",value:function(n){return this.w=n,this}},{key:"setComponent",value:function(n,r){switch(n){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+n)}return this}},{key:"getComponent",value:function(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}},{key:"clone",value:function(){return new this.constructor(this.x,this.y,this.z,this.w)}},{key:"copy",value:function(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}},{key:"add",value:function(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}},{key:"addScalar",value:function(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}},{key:"addVectors",value:function(n,r){return this.x=n.x+r.x,this.y=n.y+r.y,this.z=n.z+r.z,this.w=n.w+r.w,this}},{key:"addScaledVector",value:function(n,r){return this.x+=n.x*r,this.y+=n.y*r,this.z+=n.z*r,this.w+=n.w*r,this}},{key:"sub",value:function(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}},{key:"subScalar",value:function(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}},{key:"subVectors",value:function(n,r){return this.x=n.x-r.x,this.y=n.y-r.y,this.z=n.z-r.z,this.w=n.w-r.w,this}},{key:"multiply",value:function(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}},{key:"multiplyScalar",value:function(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}},{key:"applyMatrix4",value:function(n){var r=this.x,s=this.y,a=this.z,o=this.w,l=n.elements;return this.x=l[0]*r+l[4]*s+l[8]*a+l[12]*o,this.y=l[1]*r+l[5]*s+l[9]*a+l[13]*o,this.z=l[2]*r+l[6]*s+l[10]*a+l[14]*o,this.w=l[3]*r+l[7]*s+l[11]*a+l[15]*o,this}},{key:"divideScalar",value:function(n){return this.multiplyScalar(1/n)}},{key:"setAxisAngleFromQuaternion",value:function(n){this.w=2*Math.acos(n.w);var r=Math.sqrt(1-n.w*n.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/r,this.y=n.y/r,this.z=n.z/r),this}},{key:"setAxisAngleFromRotationMatrix",value:function(n){var r,s,a,o,l=.01,c=.1,h=n.elements,u=h[0],d=h[4],f=h[8],v=h[1],g=h[5],p=h[9],m=h[2],x=h[6],_=h[10];if(Math.abs(d-v)<l&&Math.abs(f-m)<l&&Math.abs(p-x)<l){if(Math.abs(d+v)<c&&Math.abs(f+m)<c&&Math.abs(p+x)<c&&Math.abs(u+g+_-3)<c)return this.set(1,0,0,0),this;r=Math.PI;var b=(u+1)/2,P=(g+1)/2,C=(_+1)/2,A=(d+v)/4,F=(f+m)/4,$=(p+x)/4;return b>P&&b>C?b<l?(s=0,a=.707106781,o=.707106781):(s=Math.sqrt(b),a=A/s,o=F/s):P>C?P<l?(s=.707106781,a=0,o=.707106781):(a=Math.sqrt(P),s=A/a,o=$/a):C<l?(s=.707106781,a=.707106781,o=0):(o=Math.sqrt(C),s=F/o,a=$/o),this.set(s,a,o,r),this}var y=Math.sqrt((x-p)*(x-p)+(f-m)*(f-m)+(v-d)*(v-d));return Math.abs(y)<.001&&(y=1),this.x=(x-p)/y,this.y=(f-m)/y,this.z=(v-d)/y,this.w=Math.acos((u+g+_-1)/2),this}},{key:"min",value:function(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}},{key:"max",value:function(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}},{key:"clamp",value:function(n,r){return this.x=Math.max(n.x,Math.min(r.x,this.x)),this.y=Math.max(n.y,Math.min(r.y,this.y)),this.z=Math.max(n.z,Math.min(r.z,this.z)),this.w=Math.max(n.w,Math.min(r.w,this.w)),this}},{key:"clampScalar",value:function(n,r){return this.x=Math.max(n,Math.min(r,this.x)),this.y=Math.max(n,Math.min(r,this.y)),this.z=Math.max(n,Math.min(r,this.z)),this.w=Math.max(n,Math.min(r,this.w)),this}},{key:"clampLength",value:function(n,r){var s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(n,Math.min(r,s)))}},{key:"floor",value:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}},{key:"ceil",value:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}},{key:"round",value:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}},{key:"roundToZero",value:function(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}},{key:"negate",value:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}},{key:"dot",value:function(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}},{key:"lengthSq",value:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}},{key:"length",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}},{key:"manhattanLength",value:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}},{key:"normalize",value:function(){return this.divideScalar(this.length()||1)}},{key:"setLength",value:function(n){return this.normalize().multiplyScalar(n)}},{key:"lerp",value:function(n,r){return this.x+=(n.x-this.x)*r,this.y+=(n.y-this.y)*r,this.z+=(n.z-this.z)*r,this.w+=(n.w-this.w)*r,this}},{key:"lerpVectors",value:function(n,r,s){return this.x=n.x+(r.x-n.x)*s,this.y=n.y+(r.y-n.y)*s,this.z=n.z+(r.z-n.z)*s,this.w=n.w+(r.w-n.w)*s,this}},{key:"equals",value:function(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}},{key:"fromArray",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this.x=n[r],this.y=n[r+1],this.z=n[r+2],this.w=n[r+3],this}},{key:"toArray",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n[r]=this.x,n[r+1]=this.y,n[r+2]=this.z,n[r+3]=this.w,n}},{key:"fromBufferAttribute",value:function(n,r){return this.x=n.getX(r),this.y=n.getY(r),this.z=n.getZ(r),this.w=n.getW(r),this}},{key:"random",value:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}},{key:i,value:Ze().mark(function e(){return Ze().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.x;case 2:return r.next=4,this.y;case 4:return r.next=6,this.z;case 6:return r.next=8,this.w;case 8:case"end":return r.stop()}},e,this)})}]),t}(Symbol.iterator),ws=function(i){function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;Ht(this,t),this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=s}return Vt(t,[{key:"x",get:function(){return this._x},set:function(n){this._x=n,this._onChangeCallback()}},{key:"y",get:function(){return this._y},set:function(n){this._y=n,this._onChangeCallback()}},{key:"z",get:function(){return this._z},set:function(n){this._z=n,this._onChangeCallback()}},{key:"w",get:function(){return this._w},set:function(n){this._w=n,this._onChangeCallback()}},{key:"set",value:function(n,r,s,a){return this._x=n,this._y=r,this._z=s,this._w=a,this._onChangeCallback(),this}},{key:"clone",value:function(){return new this.constructor(this._x,this._y,this._z,this._w)}},{key:"copy",value:function(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}},{key:"setFromEuler",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,s=n._x,a=n._y,o=n._z,l=n._order,c=Math.cos,h=Math.sin,u=c(s/2),d=c(a/2),f=c(o/2),v=h(s/2),g=h(a/2),p=h(o/2);switch(l){case"XYZ":this._x=v*d*f+u*g*p,this._y=u*g*f-v*d*p,this._z=u*d*p+v*g*f,this._w=u*d*f-v*g*p;break;case"YXZ":this._x=v*d*f+u*g*p,this._y=u*g*f-v*d*p,this._z=u*d*p-v*g*f,this._w=u*d*f+v*g*p;break;case"ZXY":this._x=v*d*f-u*g*p,this._y=u*g*f+v*d*p,this._z=u*d*p+v*g*f,this._w=u*d*f-v*g*p;break;case"ZYX":this._x=v*d*f-u*g*p,this._y=u*g*f+v*d*p,this._z=u*d*p-v*g*f,this._w=u*d*f+v*g*p;break;case"YZX":this._x=v*d*f+u*g*p,this._y=u*g*f+v*d*p,this._z=u*d*p-v*g*f,this._w=u*d*f-v*g*p;break;case"XZY":this._x=v*d*f-u*g*p,this._y=u*g*f-v*d*p,this._z=u*d*p+v*g*f,this._w=u*d*f+v*g*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return r===!0&&this._onChangeCallback(),this}},{key:"setFromAxisAngle",value:function(n,r){var s=r/2,a=Math.sin(s);return this._x=n.x*a,this._y=n.y*a,this._z=n.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}},{key:"setFromRotationMatrix",value:function(n){var r=n.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10],v=s+c+f;if(v>0){var g=.5/Math.sqrt(v+1);this._w=.25/g,this._x=(d-h)*g,this._y=(o-u)*g,this._z=(l-a)*g}else if(s>c&&s>f){var p=2*Math.sqrt(1+s-c-f);this._w=(d-h)/p,this._x=.25*p,this._y=(a+l)/p,this._z=(o+u)/p}else if(c>f){var m=2*Math.sqrt(1+c-s-f);this._w=(o-u)/m,this._x=(a+l)/m,this._y=.25*m,this._z=(h+d)/m}else{var x=2*Math.sqrt(1+f-s-c);this._w=(l-a)/x,this._x=(o+u)/x,this._y=(h+d)/x,this._z=.25*x}return this._onChangeCallback(),this}},{key:"setFromUnitVectors",value:function(n,r){var s=n.dot(r)+1;return s<Number.EPSILON?(s=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=s):(this._x=0,this._y=-n.z,this._z=n.y,this._w=s)):(this._x=n.y*r.z-n.z*r.y,this._y=n.z*r.x-n.x*r.z,this._z=n.x*r.y-n.y*r.x,this._w=s),this.normalize()}},{key:"angleTo",value:function(n){return 2*Math.acos(Math.abs(Be(this.dot(n),-1,1)))}},{key:"rotateTowards",value:function(n,r){var s=this.angleTo(n);if(s===0)return this;var a=Math.min(1,r/s);return this.slerp(n,a),this}},{key:"identity",value:function(){return this.set(0,0,0,1)}},{key:"invert",value:function(){return this.conjugate()}},{key:"conjugate",value:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}},{key:"dot",value:function(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}},{key:"lengthSq",value:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}},{key:"length",value:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}},{key:"normalize",value:function(){var n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}},{key:"multiply",value:function(n){return this.multiplyQuaternions(this,n)}},{key:"premultiply",value:function(n){return this.multiplyQuaternions(n,this)}},{key:"multiplyQuaternions",value:function(n,r){var s=n._x,a=n._y,o=n._z,l=n._w,c=r._x,h=r._y,u=r._z,d=r._w;return this._x=s*d+l*c+a*u-o*h,this._y=a*d+l*h+o*c-s*u,this._z=o*d+l*u+s*h-a*c,this._w=l*d-s*c-a*h-o*u,this._onChangeCallback(),this}},{key:"slerp",value:function(n,r){if(r===0)return this;if(r===1)return this.copy(n);var s=this._x,a=this._y,o=this._z,l=this._w,c=l*n._w+s*n._x+a*n._y+o*n._z;if(c<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,c=-c):this.copy(n),c>=1)return this._w=l,this._x=s,this._y=a,this._z=o,this;var h=1-c*c;if(h<=Number.EPSILON){var u=1-r;return this._w=u*l+r*this._w,this._x=u*s+r*this._x,this._y=u*a+r*this._y,this._z=u*o+r*this._z,this.normalize(),this}var d=Math.sqrt(h),f=Math.atan2(d,c),v=Math.sin((1-r)*f)/d,g=Math.sin(r*f)/d;return this._w=l*v+this._w*g,this._x=s*v+this._x*g,this._y=a*v+this._y*g,this._z=o*v+this._z*g,this._onChangeCallback(),this}},{key:"slerpQuaternions",value:function(n,r,s){return this.copy(n).slerp(r,s)}},{key:"random",value:function(){var n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n),a=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(r*Math.cos(a),s*Math.sin(o),s*Math.cos(o),r*Math.sin(a))}},{key:"equals",value:function(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}},{key:"fromArray",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this._x=n[r],this._y=n[r+1],this._z=n[r+2],this._w=n[r+3],this._onChangeCallback(),this}},{key:"toArray",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n[r]=this._x,n[r+1]=this._y,n[r+2]=this._z,n[r+3]=this._w,n}},{key:"fromBufferAttribute",value:function(n,r){return this._x=n.getX(r),this._y=n.getY(r),this._z=n.getZ(r),this._w=n.getW(r),this._onChangeCallback(),this}},{key:"toJSON",value:function(){return this.toArray()}},{key:"_onChange",value:function(n){return this._onChangeCallback=n,this}},{key:"_onChangeCallback",value:function(){}},{key:i,value:Ze().mark(function e(){return Ze().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this._x;case 2:return r.next=4,this._y;case 4:return r.next=6,this._z;case 6:return r.next=8,this._w;case 8:case"end":return r.stop()}},e,this)})}],[{key:"slerpFlat",value:function(n,r,s,a,o,l,c){var h=s[a+0],u=s[a+1],d=s[a+2],f=s[a+3],v=o[l+0],g=o[l+1],p=o[l+2],m=o[l+3];if(c===0){n[r+0]=h,n[r+1]=u,n[r+2]=d,n[r+3]=f;return}if(c===1){n[r+0]=v,n[r+1]=g,n[r+2]=p,n[r+3]=m;return}if(f!==m||h!==v||u!==g||d!==p){var x=1-c,_=h*v+u*g+d*p+f*m,b=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){var C=Math.sqrt(P),A=Math.atan2(C,_*b);x=Math.sin(x*A)/C,c=Math.sin(c*A)/C}var F=c*b;if(h=h*x+v*F,u=u*x+g*F,d=d*x+p*F,f=f*x+m*F,x===1-c){var $=1/Math.sqrt(h*h+u*u+d*d+f*f);h*=$,u*=$,d*=$,f*=$}}n[r]=h,n[r+1]=u,n[r+2]=d,n[r+3]=f}},{key:"multiplyQuaternionsFlat",value:function(n,r,s,a,o,l){var c=s[a],h=s[a+1],u=s[a+2],d=s[a+3],f=o[l],v=o[l+1],g=o[l+2],p=o[l+3];return n[r]=c*p+d*f+h*g-u*v,n[r+1]=h*p+d*v+u*f-c*g,n[r+2]=u*p+d*g+c*v-h*f,n[r+3]=d*p-c*f-h*v-u*g,n}}]),t}(Symbol.iterator),Z=function(i){function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;Ht(this,t),t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}return Vt(t,[{key:"set",value:function(n,r,s){return s===void 0&&(s=this.z),this.x=n,this.y=r,this.z=s,this}},{key:"setScalar",value:function(n){return this.x=n,this.y=n,this.z=n,this}},{key:"setX",value:function(n){return this.x=n,this}},{key:"setY",value:function(n){return this.y=n,this}},{key:"setZ",value:function(n){return this.z=n,this}},{key:"setComponent",value:function(n,r){switch(n){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+n)}return this}},{key:"getComponent",value:function(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}},{key:"clone",value:function(){return new this.constructor(this.x,this.y,this.z)}},{key:"copy",value:function(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}},{key:"add",value:function(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}},{key:"addScalar",value:function(n){return this.x+=n,this.y+=n,this.z+=n,this}},{key:"addVectors",value:function(n,r){return this.x=n.x+r.x,this.y=n.y+r.y,this.z=n.z+r.z,this}},{key:"addScaledVector",value:function(n,r){return this.x+=n.x*r,this.y+=n.y*r,this.z+=n.z*r,this}},{key:"sub",value:function(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}},{key:"subScalar",value:function(n){return this.x-=n,this.y-=n,this.z-=n,this}},{key:"subVectors",value:function(n,r){return this.x=n.x-r.x,this.y=n.y-r.y,this.z=n.z-r.z,this}},{key:"multiply",value:function(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}},{key:"multiplyScalar",value:function(n){return this.x*=n,this.y*=n,this.z*=n,this}},{key:"multiplyVectors",value:function(n,r){return this.x=n.x*r.x,this.y=n.y*r.y,this.z=n.z*r.z,this}},{key:"applyEuler",value:function(n){return this.applyQuaternion(_u.setFromEuler(n))}},{key:"applyAxisAngle",value:function(n,r){return this.applyQuaternion(_u.setFromAxisAngle(n,r))}},{key:"applyMatrix3",value:function(n){var r=this.x,s=this.y,a=this.z,o=n.elements;return this.x=o[0]*r+o[3]*s+o[6]*a,this.y=o[1]*r+o[4]*s+o[7]*a,this.z=o[2]*r+o[5]*s+o[8]*a,this}},{key:"applyNormalMatrix",value:function(n){return this.applyMatrix3(n).normalize()}},{key:"applyMatrix4",value:function(n){var r=this.x,s=this.y,a=this.z,o=n.elements,l=1/(o[3]*r+o[7]*s+o[11]*a+o[15]);return this.x=(o[0]*r+o[4]*s+o[8]*a+o[12])*l,this.y=(o[1]*r+o[5]*s+o[9]*a+o[13])*l,this.z=(o[2]*r+o[6]*s+o[10]*a+o[14])*l,this}},{key:"applyQuaternion",value:function(n){var r=this.x,s=this.y,a=this.z,o=n.x,l=n.y,c=n.z,h=n.w,u=2*(l*a-c*s),d=2*(c*r-o*a),f=2*(o*s-l*r);return this.x=r+h*u+l*f-c*d,this.y=s+h*d+c*u-o*f,this.z=a+h*f+o*d-l*u,this}},{key:"project",value:function(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}},{key:"unproject",value:function(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}},{key:"transformDirection",value:function(n){var r=this.x,s=this.y,a=this.z,o=n.elements;return this.x=o[0]*r+o[4]*s+o[8]*a,this.y=o[1]*r+o[5]*s+o[9]*a,this.z=o[2]*r+o[6]*s+o[10]*a,this.normalize()}},{key:"divide",value:function(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}},{key:"divideScalar",value:function(n){return this.multiplyScalar(1/n)}},{key:"min",value:function(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}},{key:"max",value:function(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}},{key:"clamp",value:function(n,r){return this.x=Math.max(n.x,Math.min(r.x,this.x)),this.y=Math.max(n.y,Math.min(r.y,this.y)),this.z=Math.max(n.z,Math.min(r.z,this.z)),this}},{key:"clampScalar",value:function(n,r){return this.x=Math.max(n,Math.min(r,this.x)),this.y=Math.max(n,Math.min(r,this.y)),this.z=Math.max(n,Math.min(r,this.z)),this}},{key:"clampLength",value:function(n,r){var s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(n,Math.min(r,s)))}},{key:"floor",value:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}},{key:"ceil",value:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}},{key:"round",value:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}},{key:"roundToZero",value:function(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}},{key:"negate",value:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}},{key:"dot",value:function(n){return this.x*n.x+this.y*n.y+this.z*n.z}},{key:"lengthSq",value:function(){return this.x*this.x+this.y*this.y+this.z*this.z}},{key:"length",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}},{key:"manhattanLength",value:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}},{key:"normalize",value:function(){return this.divideScalar(this.length()||1)}},{key:"setLength",value:function(n){return this.normalize().multiplyScalar(n)}},{key:"lerp",value:function(n,r){return this.x+=(n.x-this.x)*r,this.y+=(n.y-this.y)*r,this.z+=(n.z-this.z)*r,this}},{key:"lerpVectors",value:function(n,r,s){return this.x=n.x+(r.x-n.x)*s,this.y=n.y+(r.y-n.y)*s,this.z=n.z+(r.z-n.z)*s,this}},{key:"cross",value:function(n){return this.crossVectors(this,n)}},{key:"crossVectors",value:function(n,r){var s=n.x,a=n.y,o=n.z,l=r.x,c=r.y,h=r.z;return this.x=a*h-o*c,this.y=o*l-s*h,this.z=s*c-a*l,this}},{key:"projectOnVector",value:function(n){var r=n.lengthSq();if(r===0)return this.set(0,0,0);var s=n.dot(this)/r;return this.copy(n).multiplyScalar(s)}},{key:"projectOnPlane",value:function(n){return Yo.copy(this).projectOnVector(n),this.sub(Yo)}},{key:"reflect",value:function(n){return this.sub(Yo.copy(n).multiplyScalar(2*this.dot(n)))}},{key:"angleTo",value:function(n){var r=Math.sqrt(this.lengthSq()*n.lengthSq());if(r===0)return Math.PI/2;var s=this.dot(n)/r;return Math.acos(Be(s,-1,1))}},{key:"distanceTo",value:function(n){return Math.sqrt(this.distanceToSquared(n))}},{key:"distanceToSquared",value:function(n){var r=this.x-n.x,s=this.y-n.y,a=this.z-n.z;return r*r+s*s+a*a}},{key:"manhattanDistanceTo",value:function(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}},{key:"setFromSpherical",value:function(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}},{key:"setFromSphericalCoords",value:function(n,r,s){var a=Math.sin(r)*n;return this.x=a*Math.sin(s),this.y=Math.cos(r)*n,this.z=a*Math.cos(s),this}},{key:"setFromCylindrical",value:function(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}},{key:"setFromCylindricalCoords",value:function(n,r,s){return this.x=n*Math.sin(r),this.y=s,this.z=n*Math.cos(r),this}},{key:"setFromMatrixPosition",value:function(n){var r=n.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}},{key:"setFromMatrixScale",value:function(n){var r=this.setFromMatrixColumn(n,0).length(),s=this.setFromMatrixColumn(n,1).length(),a=this.setFromMatrixColumn(n,2).length();return this.x=r,this.y=s,this.z=a,this}},{key:"setFromMatrixColumn",value:function(n,r){return this.fromArray(n.elements,r*4)}},{key:"setFromMatrix3Column",value:function(n,r){return this.fromArray(n.elements,r*3)}},{key:"setFromEuler",value:function(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}},{key:"setFromColor",value:function(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}},{key:"equals",value:function(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}},{key:"fromArray",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this.x=n[r],this.y=n[r+1],this.z=n[r+2],this}},{key:"toArray",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n[r]=this.x,n[r+1]=this.y,n[r+2]=this.z,n}},{key:"fromBufferAttribute",value:function(n,r){return this.x=n.getX(r),this.y=n.getY(r),this.z=n.getZ(r),this}},{key:"random",value:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}},{key:"randomDirection",value:function(){var n=(Math.random()-.5)*2,r=Math.random()*Math.PI*2,s=Math.sqrt(1-Math.pow(n,2));return this.x=s*Math.cos(r),this.y=s*Math.sin(r),this.z=n,this}},{key:i,value:Ze().mark(function e(){return Ze().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.x;case 2:return r.next=4,this.y;case 4:return r.next=6,this.z;case 6:case"end":return r.stop()}},e,this)})}]),t}(Symbol.iterator),Yo=new Z,_u=new ws,Ts=function(){function i(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Z(1/0,1/0,1/0),e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Z(-1/0,-1/0,-1/0);Ht(this,i),this.isBox3=!0,this.min=t,this.max=e}return Vt(i,[{key:"set",value:function(e,n){return this.min.copy(e),this.max.copy(n),this}},{key:"setFromArray",value:function(e){this.makeEmpty();for(var n=0,r=e.length;n<r;n+=3)this.expandByPoint(fn.fromArray(e,n));return this}},{key:"setFromBufferAttribute",value:function(e){this.makeEmpty();for(var n=0,r=e.count;n<r;n++)this.expandByPoint(fn.fromBufferAttribute(e,n));return this}},{key:"setFromPoints",value:function(e){this.makeEmpty();for(var n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}},{key:"setFromCenterAndSize",value:function(e,n){var r=fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}},{key:"setFromObject",value:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this.makeEmpty(),this.expandByObject(e,n)}},{key:"clone",value:function(){return new this.constructor().copy(this)}},{key:"copy",value:function(e){return this.min.copy(e.min),this.max.copy(e.max),this}},{key:"makeEmpty",value:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}},{key:"isEmpty",value:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}},{key:"getCenter",value:function(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}},{key:"getSize",value:function(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}},{key:"expandByPoint",value:function(e){return this.min.min(e),this.max.max(e),this}},{key:"expandByVector",value:function(e){return this.min.sub(e),this.max.add(e),this}},{key:"expandByScalar",value:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this}},{key:"expandByObject",value:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;e.updateWorldMatrix(!1,!1);var r=e.geometry;if(r!==void 0){var s=r.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(var a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(s,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),aa.copy(r.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}for(var l=e.children,c=0,h=l.length;c<h;c++)this.expandByObject(l[c],n);return this}},{key:"containsPoint",value:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}},{key:"containsBox",value:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}},{key:"getParameter",value:function(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}},{key:"intersectsBox",value:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}},{key:"intersectsSphere",value:function(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}},{key:"intersectsPlane",value:function(e){var n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}},{key:"intersectsTriangle",value:function(e){if(this.isEmpty())return!1;this.getCenter(Kr),oa.subVectors(this.max,Kr),or.subVectors(e.a,Kr),lr.subVectors(e.b,Kr),cr.subVectors(e.c,Kr),ii.subVectors(lr,or),ri.subVectors(cr,lr),Ri.subVectors(or,cr);var n=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-Ri.z,Ri.y,ii.z,0,-ii.x,ri.z,0,-ri.x,Ri.z,0,-Ri.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-Ri.y,Ri.x,0];return!$o(n,or,lr,cr,oa)||(n=[1,0,0,0,1,0,0,0,1],!$o(n,or,lr,cr,oa))?!1:(la.crossVectors(ii,ri),n=[la.x,la.y,la.z],$o(n,or,lr,cr,oa))}},{key:"clampPoint",value:function(e,n){return n.copy(e).clamp(this.min,this.max)}},{key:"distanceToPoint",value:function(e){return this.clampPoint(e,fn).distanceTo(e)}},{key:"getBoundingSphere",value:function(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}},{key:"intersect",value:function(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}},{key:"union",value:function(e){return this.min.min(e.min),this.max.max(e.max),this}},{key:"applyMatrix4",value:function(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}},{key:"translate",value:function(e){return this.min.add(e),this.max.add(e),this}},{key:"equals",value:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}]),i}(),kn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],fn=new Z,aa=new Ts,or=new Z,lr=new Z,cr=new Z,ii=new Z,ri=new Z,Ri=new Z,Kr=new Z,oa=new Z,la=new Z,Li=new Z;function $o(i,t,e,n,r){for(var s=0,a=i.length-3;s<=a;s+=3){Li.fromArray(i,s);var o=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var KM=new Ts,Jr=new Z,jo=new Z,Rp=function(){function i(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Z,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1;Ht(this,i),this.isSphere=!0,this.center=t,this.radius=e}return Vt(i,[{key:"set",value:function(e,n){return this.center.copy(e),this.radius=n,this}},{key:"setFromPoints",value:function(e,n){var r=this.center;n!==void 0?r.copy(n):KM.setFromPoints(e).getCenter(r);for(var s=0,a=0,o=e.length;a<o;a++)s=Math.max(s,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}},{key:"copy",value:function(e){return this.center.copy(e.center),this.radius=e.radius,this}},{key:"isEmpty",value:function(){return this.radius<0}},{key:"makeEmpty",value:function(){return this.center.set(0,0,0),this.radius=-1,this}},{key:"containsPoint",value:function(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}},{key:"distanceToPoint",value:function(e){return e.distanceTo(this.center)-this.radius}},{key:"intersectsSphere",value:function(e){var n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}},{key:"intersectsBox",value:function(e){return e.intersectsSphere(this)}},{key:"intersectsPlane",value:function(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}},{key:"clampPoint",value:function(e,n){var r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}},{key:"getBoundingBox",value:function(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}},{key:"applyMatrix4",value:function(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}},{key:"translate",value:function(e){return this.center.add(e),this}},{key:"expandByPoint",value:function(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);var n=Jr.lengthSq();if(n>this.radius*this.radius){var r=Math.sqrt(n),s=(r-this.radius)*.5;this.center.addScaledVector(Jr,s/r),this.radius+=s}return this}},{key:"union",value:function(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(jo)),this.expandByPoint(Jr.copy(e.center).sub(jo))),this)}},{key:"equals",value:function(e){return e.center.equals(this.center)&&e.radius===this.radius}},{key:"clone",value:function(){return new this.constructor().copy(this)}}]),i}(),zn=new Z,Zo=new Z,ca=new Z,si=new Z,Ko=new Z,ha=new Z,Jo=new Z,JM=function(){function i(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Z,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Z(0,0,-1);Ht(this,i),this.origin=t,this.direction=e}return Vt(i,[{key:"set",value:function(e,n){return this.origin.copy(e),this.direction.copy(n),this}},{key:"copy",value:function(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}},{key:"at",value:function(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}},{key:"lookAt",value:function(e){return this.direction.copy(e).sub(this.origin).normalize(),this}},{key:"recast",value:function(e){return this.origin.copy(this.at(e,zn)),this}},{key:"closestPointToPoint",value:function(e,n){n.subVectors(e,this.origin);var r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}},{key:"distanceToPoint",value:function(e){return Math.sqrt(this.distanceSqToPoint(e))}},{key:"distanceSqToPoint",value:function(e){var n=zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,n),zn.distanceToSquared(e))}},{key:"distanceSqToSegment",value:function(e,n,r,s){Zo.copy(e).add(n).multiplyScalar(.5),ca.copy(n).sub(e).normalize(),si.copy(this.origin).sub(Zo);var a=e.distanceTo(n)*.5,o=-this.direction.dot(ca),l=si.dot(this.direction),c=-si.dot(ca),h=si.lengthSq(),u=Math.abs(1-o*o),d,f,v,g;if(u>0)if(d=o*c-l,f=o*l-c,g=a*u,d>=0)if(f>=-g)if(f<=g){var p=1/u;d*=p,f*=p,v=d*(d+o*f+2*l)+f*(o*d+f+2*c)+h}else f=a,d=Math.max(0,-(o*f+l)),v=-d*d+f*(f+2*c)+h;else f=-a,d=Math.max(0,-(o*f+l)),v=-d*d+f*(f+2*c)+h;else f<=-g?(d=Math.max(0,-(-o*a+l)),f=d>0?-a:Math.min(Math.max(-a,-c),a),v=-d*d+f*(f+2*c)+h):f<=g?(d=0,f=Math.min(Math.max(-a,-c),a),v=f*(f+2*c)+h):(d=Math.max(0,-(o*a+l)),f=d>0?a:Math.min(Math.max(-a,-c),a),v=-d*d+f*(f+2*c)+h);else f=o>0?-a:a,d=Math.max(0,-(o*f+l)),v=-d*d+f*(f+2*c)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Zo).addScaledVector(ca,f),v}},{key:"intersectSphere",value:function(e,n){zn.subVectors(e.center,this.origin);var r=zn.dot(this.direction),s=zn.dot(zn)-r*r,a=e.radius*e.radius;if(s>a)return null;var o=Math.sqrt(a-s),l=r-o,c=r+o;return c<0?null:l<0?this.at(c,n):this.at(l,n)}},{key:"intersectsSphere",value:function(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}},{key:"distanceToPlane",value:function(e){var n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;var r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}},{key:"intersectPlane",value:function(e,n){var r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}},{key:"intersectsPlane",value:function(e){var n=e.distanceToPoint(this.origin);if(n===0)return!0;var r=e.normal.dot(this.direction);return r*n<0}},{key:"intersectBox",value:function(e,n){var r,s,a,o,l,c,h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(r=(e.min.x-f.x)*h,s=(e.max.x-f.x)*h):(r=(e.max.x-f.x)*h,s=(e.min.x-f.x)*h),u>=0?(a=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),r>o||a>s||((a>r||isNaN(r))&&(r=a),(o<s||isNaN(s))&&(s=o),d>=0?(l=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(l=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),r>c||l>s)||((l>r||r!==r)&&(r=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(r>=0?r:s,n)}},{key:"intersectsBox",value:function(e){return this.intersectBox(e,zn)!==null}},{key:"intersectTriangle",value:function(e,n,r,s,a){Ko.subVectors(n,e),ha.subVectors(r,e),Jo.crossVectors(Ko,ha);var o=this.direction.dot(Jo),l;if(o>0){if(s)return null;l=1}else if(o<0)l=-1,o=-o;else return null;si.subVectors(this.origin,e);var c=l*this.direction.dot(ha.crossVectors(si,ha));if(c<0)return null;var h=l*this.direction.dot(Ko.cross(si));if(h<0||c+h>o)return null;var u=-l*si.dot(Jo);return u<0?null:this.at(u/o,a)}},{key:"applyMatrix4",value:function(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}},{key:"equals",value:function(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}},{key:"clone",value:function(){return new this.constructor().copy(this)}}]),i}(),_i=function(){function i(t,e,n,r,s,a,o,l,c,h,u,d,f,v,g,p){Ht(this,i),i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,h,u,d,f,v,g,p)}return Vt(i,[{key:"set",value:function(e,n,r,s,a,o,l,c,h,u,d,f,v,g,p,m){var x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=s,x[1]=a,x[5]=o,x[9]=l,x[13]=c,x[2]=h,x[6]=u,x[10]=d,x[14]=f,x[3]=v,x[7]=g,x[11]=p,x[15]=m,this}},{key:"identity",value:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}},{key:"clone",value:function(){return new i().fromArray(this.elements)}},{key:"copy",value:function(e){var n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}},{key:"copyPosition",value:function(e){var n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}},{key:"setFromMatrix3",value:function(e){var n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}},{key:"extractBasis",value:function(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}},{key:"makeBasis",value:function(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}},{key:"extractRotation",value:function(e){var n=this.elements,r=e.elements,s=1/hr.setFromMatrixColumn(e,0).length(),a=1/hr.setFromMatrixColumn(e,1).length(),o=1/hr.setFromMatrixColumn(e,2).length();return n[0]=r[0]*s,n[1]=r[1]*s,n[2]=r[2]*s,n[3]=0,n[4]=r[4]*a,n[5]=r[5]*a,n[6]=r[6]*a,n[7]=0,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}},{key:"makeRotationFromEuler",value:function(e){var n=this.elements,r=e.x,s=e.y,a=e.z,o=Math.cos(r),l=Math.sin(r),c=Math.cos(s),h=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){var f=o*u,v=o*d,g=l*u,p=l*d;n[0]=c*u,n[4]=-c*d,n[8]=h,n[1]=v+g*h,n[5]=f-p*h,n[9]=-l*c,n[2]=p-f*h,n[6]=g+v*h,n[10]=o*c}else if(e.order==="YXZ"){var m=c*u,x=c*d,_=h*u,b=h*d;n[0]=m+b*l,n[4]=_*l-x,n[8]=o*h,n[1]=o*d,n[5]=o*u,n[9]=-l,n[2]=x*l-_,n[6]=b+m*l,n[10]=o*c}else if(e.order==="ZXY"){var P=c*u,C=c*d,A=h*u,F=h*d;n[0]=P-F*l,n[4]=-o*d,n[8]=A+C*l,n[1]=C+A*l,n[5]=o*u,n[9]=F-P*l,n[2]=-o*h,n[6]=l,n[10]=o*c}else if(e.order==="ZYX"){var $=o*u,y=o*d,T=l*u,D=l*d;n[0]=c*u,n[4]=T*h-y,n[8]=$*h+D,n[1]=c*d,n[5]=D*h+$,n[9]=y*h-T,n[2]=-h,n[6]=l*c,n[10]=o*c}else if(e.order==="YZX"){var I=o*c,S=o*h,L=l*c,U=l*h;n[0]=c*u,n[4]=U-I*d,n[8]=L*d+S,n[1]=d,n[5]=o*u,n[9]=-l*u,n[2]=-h*u,n[6]=S*d+L,n[10]=I-U*d}else if(e.order==="XZY"){var O=o*c,B=o*h,G=l*c,Y=l*h;n[0]=c*u,n[4]=-d,n[8]=h*u,n[1]=O*d+Y,n[5]=o*u,n[9]=B*d-G,n[2]=G*d-B,n[6]=l*u,n[10]=Y*d+O}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}},{key:"makeRotationFromQuaternion",value:function(e){return this.compose(QM,e,tS)}},{key:"lookAt",value:function(e,n,r){var s=this.elements;return Ye.subVectors(e,n),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),ai.crossVectors(r,Ye),ai.lengthSq()===0&&(Math.abs(r.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),ai.crossVectors(r,Ye)),ai.normalize(),ua.crossVectors(Ye,ai),s[0]=ai.x,s[4]=ua.x,s[8]=Ye.x,s[1]=ai.y,s[5]=ua.y,s[9]=Ye.y,s[2]=ai.z,s[6]=ua.z,s[10]=Ye.z,this}},{key:"multiply",value:function(e){return this.multiplyMatrices(this,e)}},{key:"premultiply",value:function(e){return this.multiplyMatrices(e,this)}},{key:"multiplyMatrices",value:function(e,n){var r=e.elements,s=n.elements,a=this.elements,o=r[0],l=r[4],c=r[8],h=r[12],u=r[1],d=r[5],f=r[9],v=r[13],g=r[2],p=r[6],m=r[10],x=r[14],_=r[3],b=r[7],P=r[11],C=r[15],A=s[0],F=s[4],$=s[8],y=s[12],T=s[1],D=s[5],I=s[9],S=s[13],L=s[2],U=s[6],O=s[10],B=s[14],G=s[3],Y=s[7],j=s[11],st=s[15];return a[0]=o*A+l*T+c*L+h*G,a[4]=o*F+l*D+c*U+h*Y,a[8]=o*$+l*I+c*O+h*j,a[12]=o*y+l*S+c*B+h*st,a[1]=u*A+d*T+f*L+v*G,a[5]=u*F+d*D+f*U+v*Y,a[9]=u*$+d*I+f*O+v*j,a[13]=u*y+d*S+f*B+v*st,a[2]=g*A+p*T+m*L+x*G,a[6]=g*F+p*D+m*U+x*Y,a[10]=g*$+p*I+m*O+x*j,a[14]=g*y+p*S+m*B+x*st,a[3]=_*A+b*T+P*L+C*G,a[7]=_*F+b*D+P*U+C*Y,a[11]=_*$+b*I+P*O+C*j,a[15]=_*y+b*S+P*B+C*st,this}},{key:"multiplyScalar",value:function(e){var n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}},{key:"determinant",value:function(){var e=this.elements,n=e[0],r=e[4],s=e[8],a=e[12],o=e[1],l=e[5],c=e[9],h=e[13],u=e[2],d=e[6],f=e[10],v=e[14],g=e[3],p=e[7],m=e[11],x=e[15];return g*(+a*c*d-s*h*d-a*l*f+r*h*f+s*l*v-r*c*v)+p*(+n*c*v-n*h*f+a*o*f-s*o*v+s*h*u-a*c*u)+m*(+n*h*d-n*l*v-a*o*d+r*o*v+a*l*u-r*h*u)+x*(-s*l*u-n*c*d+n*l*f+s*o*d-r*o*f+r*c*u)}},{key:"transpose",value:function(){var e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}},{key:"setPosition",value:function(e,n,r){var s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=r),this}},{key:"invert",value:function(){var e=this.elements,n=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],u=e[8],d=e[9],f=e[10],v=e[11],g=e[12],p=e[13],m=e[14],x=e[15],_=d*m*h-p*f*h+p*c*v-l*m*v-d*c*x+l*f*x,b=g*f*h-u*m*h-g*c*v+o*m*v+u*c*x-o*f*x,P=u*p*h-g*d*h+g*l*v-o*p*v-u*l*x+o*d*x,C=g*d*c-u*p*c-g*l*f+o*p*f+u*l*m-o*d*m,A=n*_+r*b+s*P+a*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);var F=1/A;return e[0]=_*F,e[1]=(p*f*a-d*m*a-p*s*v+r*m*v+d*s*x-r*f*x)*F,e[2]=(l*m*a-p*c*a+p*s*h-r*m*h-l*s*x+r*c*x)*F,e[3]=(d*c*a-l*f*a-d*s*h+r*f*h+l*s*v-r*c*v)*F,e[4]=b*F,e[5]=(u*m*a-g*f*a+g*s*v-n*m*v-u*s*x+n*f*x)*F,e[6]=(g*c*a-o*m*a-g*s*h+n*m*h+o*s*x-n*c*x)*F,e[7]=(o*f*a-u*c*a+u*s*h-n*f*h-o*s*v+n*c*v)*F,e[8]=P*F,e[9]=(g*d*a-u*p*a-g*r*v+n*p*v+u*r*x-n*d*x)*F,e[10]=(o*p*a-g*l*a+g*r*h-n*p*h-o*r*x+n*l*x)*F,e[11]=(u*l*a-o*d*a-u*r*h+n*d*h+o*r*v-n*l*v)*F,e[12]=C*F,e[13]=(u*p*s-g*d*s+g*r*f-n*p*f-u*r*m+n*d*m)*F,e[14]=(g*l*s-o*p*s-g*r*c+n*p*c+o*r*m-n*l*m)*F,e[15]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*f+n*l*f)*F,this}},{key:"scale",value:function(e){var n=this.elements,r=e.x,s=e.y,a=e.z;return n[0]*=r,n[4]*=s,n[8]*=a,n[1]*=r,n[5]*=s,n[9]*=a,n[2]*=r,n[6]*=s,n[10]*=a,n[3]*=r,n[7]*=s,n[11]*=a,this}},{key:"getMaxScaleOnAxis",value:function(){var e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,s))}},{key:"makeTranslation",value:function(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}},{key:"makeRotationX",value:function(e){var n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}},{key:"makeRotationY",value:function(e){var n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}},{key:"makeRotationZ",value:function(e){var n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}},{key:"makeRotationAxis",value:function(e,n){var r=Math.cos(n),s=Math.sin(n),a=1-r,o=e.x,l=e.y,c=e.z,h=a*o,u=a*l;return this.set(h*o+r,h*l-s*c,h*c+s*l,0,h*l+s*c,u*l+r,u*c-s*o,0,h*c-s*l,u*c+s*o,a*c*c+r,0,0,0,0,1),this}},{key:"makeScale",value:function(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}},{key:"makeShear",value:function(e,n,r,s,a,o){return this.set(1,r,a,0,e,1,o,0,n,s,1,0,0,0,0,1),this}},{key:"compose",value:function(e,n,r){var s=this.elements,a=n._x,o=n._y,l=n._z,c=n._w,h=a+a,u=o+o,d=l+l,f=a*h,v=a*u,g=a*d,p=o*u,m=o*d,x=l*d,_=c*h,b=c*u,P=c*d,C=r.x,A=r.y,F=r.z;return s[0]=(1-(p+x))*C,s[1]=(v+P)*C,s[2]=(g-b)*C,s[3]=0,s[4]=(v-P)*A,s[5]=(1-(f+x))*A,s[6]=(m+_)*A,s[7]=0,s[8]=(g+b)*F,s[9]=(m-_)*F,s[10]=(1-(f+p))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}},{key:"decompose",value:function(e,n,r){var s=this.elements,a=hr.set(s[0],s[1],s[2]).length(),o=hr.set(s[4],s[5],s[6]).length(),l=hr.set(s[8],s[9],s[10]).length(),c=this.determinant();c<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],pn.copy(this);var h=1/a,u=1/o,d=1/l;return pn.elements[0]*=h,pn.elements[1]*=h,pn.elements[2]*=h,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,n.setFromRotationMatrix(pn),r.x=a,r.y=o,r.z=l,this}},{key:"makePerspective",value:function(e,n,r,s,a,o){var l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:ra,c=this.elements,h=2*a/(n-e),u=2*a/(r-s),d=(n+e)/(n-e),f=(r+s)/(r-s),v,g;if(l===ra)v=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(l===fu)v=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}},{key:"makeOrthographic",value:function(e,n,r,s,a,o){var l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:ra,c=this.elements,h=1/(n-e),u=1/(r-s),d=1/(o-a),f=(n+e)*h,v=(r+s)*u,g,p;if(l===ra)g=(o+a)*d,p=-2*d;else if(l===fu)g=a*d,p=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=p,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}},{key:"equals",value:function(e){for(var n=this.elements,r=e.elements,s=0;s<16;s++)if(n[s]!==r[s])return!1;return!0}},{key:"fromArray",value:function(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=0;r<16;r++)this.elements[r]=e[r+n];return this}},{key:"toArray",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}]),i}(),hr=new Z,pn=new _i,QM=new Z(0,0,0),tS=new Z(1,1,1),ai=new Z,ua=new Z,Ye=new Z,yu=new _i,xu=new ws,Lp=function(i){function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:t.DEFAULT_ORDER;Ht(this,t),this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=s}return Vt(t,[{key:"x",get:function(){return this._x},set:function(n){this._x=n,this._onChangeCallback()}},{key:"y",get:function(){return this._y},set:function(n){this._y=n,this._onChangeCallback()}},{key:"z",get:function(){return this._z},set:function(n){this._z=n,this._onChangeCallback()}},{key:"order",get:function(){return this._order},set:function(n){this._order=n,this._onChangeCallback()}},{key:"set",value:function(n,r,s){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:this._order;return this._x=n,this._y=r,this._z=s,this._order=a,this._onChangeCallback(),this}},{key:"clone",value:function(){return new this.constructor(this._x,this._y,this._z,this._order)}},{key:"copy",value:function(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}},{key:"setFromRotationMatrix",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._order,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,a=n.elements,o=a[0],l=a[4],c=a[8],h=a[1],u=a[5],d=a[9],f=a[2],v=a[6],g=a[10];switch(r){case"XYZ":this._y=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(v,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,g),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(Be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,s===!0&&this._onChangeCallback(),this}},{key:"setFromQuaternion",value:function(n,r,s){return yu.makeRotationFromQuaternion(n),this.setFromRotationMatrix(yu,r,s)}},{key:"setFromVector3",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._order;return this.set(n.x,n.y,n.z,r)}},{key:"reorder",value:function(n){return xu.setFromEuler(this),this.setFromQuaternion(xu,n)}},{key:"equals",value:function(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}},{key:"fromArray",value:function(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}},{key:"toArray",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n[r]=this._x,n[r+1]=this._y,n[r+2]=this._z,n[r+3]=this._order,n}},{key:"_onChange",value:function(n){return this._onChangeCallback=n,this}},{key:"_onChangeCallback",value:function(){}},{key:i,value:Ze().mark(function e(){return Ze().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this._x;case 2:return r.next=4,this._y;case 4:return r.next=6,this._z;case 6:return r.next=8,this._order;case 8:case"end":return r.stop()}},e,this)})}]),t}(Symbol.iterator);Lp.DEFAULT_ORDER="XYZ";var eS=function(){function i(){Ht(this,i),this.mask=1}return Vt(i,[{key:"set",value:function(e){this.mask=(1<<e|0)>>>0}},{key:"enable",value:function(e){this.mask|=1<<e|0}},{key:"enableAll",value:function(){this.mask=-1}},{key:"toggle",value:function(e){this.mask^=1<<e|0}},{key:"disable",value:function(e){this.mask&=~(1<<e|0)}},{key:"disableAll",value:function(){this.mask=0}},{key:"test",value:function(e){return(this.mask&e.mask)!==0}},{key:"isEnabled",value:function(e){return(this.mask&(1<<e|0))!==0}}]),i}(),nS=0,Mu=new Z,ur=new ws,Bn=new _i,da=new Z,Qr=new Z,iS=new Z,rS=new ws,Su=new Z(1,0,0),Eu=new Z(0,1,0),bu=new Z(0,0,1),sS={type:"added"},aS={type:"removed"},As=function(i){Ke(e,i);var t=Je(e);function e(){var n;Ht(this,e),n=t.call(this),n.isObject3D=!0,Object.defineProperty(Dr(n),"id",{value:nS++}),n.uuid=gi(),n.name="",n.type="Object3D",n.parent=null,n.children=[],n.up=e.DEFAULT_UP.clone();var r=new Z,s=new Lp,a=new ws,o=new Z(1,1,1);function l(){a.setFromEuler(s,!1)}function c(){s.setFromQuaternion(a,void 0,!1)}return s._onChange(l),a._onChange(c),Object.defineProperties(Dr(n),{position:{configurable:!0,enumerable:!0,value:r},rotation:{configurable:!0,enumerable:!0,value:s},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new _i},normalMatrix:{value:new Vr}}),n.matrix=new _i,n.matrixWorld=new _i,n.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,n.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,n.matrixWorldNeedsUpdate=!1,n.layers=new eS,n.visible=!0,n.castShadow=!1,n.receiveShadow=!1,n.frustumCulled=!0,n.renderOrder=0,n.animations=[],n.userData={},n}return Vt(e,[{key:"onBeforeShadow",value:function(){}},{key:"onAfterShadow",value:function(){}},{key:"onBeforeRender",value:function(){}},{key:"onAfterRender",value:function(){}},{key:"applyMatrix4",value:function(r){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(r),this.matrix.decompose(this.position,this.quaternion,this.scale)}},{key:"applyQuaternion",value:function(r){return this.quaternion.premultiply(r),this}},{key:"setRotationFromAxisAngle",value:function(r,s){this.quaternion.setFromAxisAngle(r,s)}},{key:"setRotationFromEuler",value:function(r){this.quaternion.setFromEuler(r,!0)}},{key:"setRotationFromMatrix",value:function(r){this.quaternion.setFromRotationMatrix(r)}},{key:"setRotationFromQuaternion",value:function(r){this.quaternion.copy(r)}},{key:"rotateOnAxis",value:function(r,s){return ur.setFromAxisAngle(r,s),this.quaternion.multiply(ur),this}},{key:"rotateOnWorldAxis",value:function(r,s){return ur.setFromAxisAngle(r,s),this.quaternion.premultiply(ur),this}},{key:"rotateX",value:function(r){return this.rotateOnAxis(Su,r)}},{key:"rotateY",value:function(r){return this.rotateOnAxis(Eu,r)}},{key:"rotateZ",value:function(r){return this.rotateOnAxis(bu,r)}},{key:"translateOnAxis",value:function(r,s){return Mu.copy(r).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(s)),this}},{key:"translateX",value:function(r){return this.translateOnAxis(Su,r)}},{key:"translateY",value:function(r){return this.translateOnAxis(Eu,r)}},{key:"translateZ",value:function(r){return this.translateOnAxis(bu,r)}},{key:"localToWorld",value:function(r){return this.updateWorldMatrix(!0,!1),r.applyMatrix4(this.matrixWorld)}},{key:"worldToLocal",value:function(r){return this.updateWorldMatrix(!0,!1),r.applyMatrix4(Bn.copy(this.matrixWorld).invert())}},{key:"lookAt",value:function(r,s,a){r.isVector3?da.copy(r):da.set(r,s,a);var o=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Qr,da,this.up):Bn.lookAt(da,Qr,this.up),this.quaternion.setFromRotationMatrix(Bn),o&&(Bn.extractRotation(o.matrixWorld),ur.setFromRotationMatrix(Bn),this.quaternion.premultiply(ur.invert()))}},{key:"add",value:function(r){if(arguments.length>1){for(var s=0;s<arguments.length;s++)this.add(arguments[s]);return this}return r===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",r),this):(r&&r.isObject3D?(r.parent!==null&&r.parent.remove(r),r.parent=this,this.children.push(r),r.dispatchEvent(sS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",r),this)}},{key:"remove",value:function(r){if(arguments.length>1){for(var s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}var a=this.children.indexOf(r);return a!==-1&&(r.parent=null,this.children.splice(a,1),r.dispatchEvent(aS)),this}},{key:"removeFromParent",value:function(){var r=this.parent;return r!==null&&r.remove(this),this}},{key:"clear",value:function(){return this.remove.apply(this,EM(this.children))}},{key:"attach",value:function(r){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),r.parent!==null&&(r.parent.updateWorldMatrix(!0,!1),Bn.multiply(r.parent.matrixWorld)),r.applyMatrix4(Bn),this.add(r),r.updateWorldMatrix(!1,!0),this}},{key:"getObjectById",value:function(r){return this.getObjectByProperty("id",r)}},{key:"getObjectByName",value:function(r){return this.getObjectByProperty("name",r)}},{key:"getObjectByProperty",value:function(r,s){if(this[r]===s)return this;for(var a=0,o=this.children.length;a<o;a++){var l=this.children[a],c=l.getObjectByProperty(r,s);if(c!==void 0)return c}}},{key:"getObjectsByProperty",value:function(r,s){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];this[r]===s&&a.push(this);for(var o=this.children,l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(r,s,a);return a}},{key:"getWorldPosition",value:function(r){return this.updateWorldMatrix(!0,!1),r.setFromMatrixPosition(this.matrixWorld)}},{key:"getWorldQuaternion",value:function(r){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,r,iS),r}},{key:"getWorldScale",value:function(r){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,rS,r),r}},{key:"getWorldDirection",value:function(r){this.updateWorldMatrix(!0,!1);var s=this.matrixWorld.elements;return r.set(s[8],s[9],s[10]).normalize()}},{key:"raycast",value:function(){}},{key:"traverse",value:function(r){r(this);for(var s=this.children,a=0,o=s.length;a<o;a++)s[a].traverse(r)}},{key:"traverseVisible",value:function(r){if(this.visible!==!1){r(this);for(var s=this.children,a=0,o=s.length;a<o;a++)s[a].traverseVisible(r)}}},{key:"traverseAncestors",value:function(r){var s=this.parent;s!==null&&(r(s),s.traverseAncestors(r))}},{key:"updateMatrix",value:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}},{key:"updateMatrixWorld",value:function(r){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,r=!0);for(var s=this.children,a=0,o=s.length;a<o;a++){var l=s[a];(l.matrixWorldAutoUpdate===!0||r===!0)&&l.updateMatrixWorld(r)}}},{key:"updateWorldMatrix",value:function(r,s){var a=this.parent;if(r===!0&&a!==null&&a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),s===!0)for(var o=this.children,l=0,c=o.length;l<c;l++){var h=o[l];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}},{key:"toJSON",value:function(r){var s=r===void 0||typeof r=="string",a={};s&&(r={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});var o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(function(I){return{boxInitialized:I.boxInitialized,boxMin:I.box.min.toArray(),boxMax:I.box.max.toArray(),sphereInitialized:I.sphereInitialized,sphereRadius:I.sphere.radius,sphereCenter:I.sphere.center.toArray()}}),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(r),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(I,S){return I[S.uuid]===void 0&&(I[S.uuid]=S.toJSON(r)),S.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(r).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(r).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(r.geometries,this.geometry);var c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){var h=c.shapes;if(Array.isArray(h))for(var u=0,d=h.length;u<d;u++){var f=h[u];l(r.shapes,f)}else l(r.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(r.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){for(var v=[],g=0,p=this.material.length;g<p;g++)v.push(l(r.materials,this.material[g]));o.material=v}else o.material=l(r.materials,this.material);if(this.children.length>0){o.children=[];for(var m=0;m<this.children.length;m++)o.children.push(this.children[m].toJSON(r).object)}if(this.animations.length>0){o.animations=[];for(var x=0;x<this.animations.length;x++){var _=this.animations[x];o.animations.push(l(r.animations,_))}}if(s){var b=D(r.geometries),P=D(r.materials),C=D(r.textures),A=D(r.images),F=D(r.shapes),$=D(r.skeletons),y=D(r.animations),T=D(r.nodes);b.length>0&&(a.geometries=b),P.length>0&&(a.materials=P),C.length>0&&(a.textures=C),A.length>0&&(a.images=A),F.length>0&&(a.shapes=F),$.length>0&&(a.skeletons=$),y.length>0&&(a.animations=y),T.length>0&&(a.nodes=T)}return a.object=o,a;function D(I){var S=[];for(var L in I){var U=I[L];delete U.metadata,S.push(U)}return S}}},{key:"clone",value:function(r){return new this.constructor().copy(this,r)}},{key:"copy",value:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(this.name=r.name,this.up.copy(r.up),this.position.copy(r.position),this.rotation.order=r.rotation.order,this.quaternion.copy(r.quaternion),this.scale.copy(r.scale),this.matrix.copy(r.matrix),this.matrixWorld.copy(r.matrixWorld),this.matrixAutoUpdate=r.matrixAutoUpdate,this.matrixWorldAutoUpdate=r.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=r.matrixWorldNeedsUpdate,this.layers.mask=r.layers.mask,this.visible=r.visible,this.castShadow=r.castShadow,this.receiveShadow=r.receiveShadow,this.frustumCulled=r.frustumCulled,this.renderOrder=r.renderOrder,this.animations=r.animations.slice(),this.userData=JSON.parse(JSON.stringify(r.userData)),s===!0)for(var a=0;a<r.children.length;a++){var o=r.children[a];this.add(o.clone())}return this}}]),e}(io);As.DEFAULT_UP=new Z(0,1,0);As.DEFAULT_MATRIX_AUTO_UPDATE=!0;As.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new Z,Hn=new Z,Qo=new Z,Vn=new Z,dr=new Z,fr=new Z,wu=new Z,tl=new Z,el=new Z,nl=new Z,fa=function(){function i(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Z,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Z,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:new Z;Ht(this,i),this.a=t,this.b=e,this.c=n}return Vt(i,[{key:"set",value:function(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}},{key:"setFromPointsAndIndices",value:function(e,n,r,s){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[s]),this}},{key:"setFromAttributeAndIndices",value:function(e,n,r,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,s),this}},{key:"clone",value:function(){return new this.constructor().copy(this)}},{key:"copy",value:function(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}},{key:"getArea",value:function(){return mn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),mn.cross(Hn).length()*.5}},{key:"getMidpoint",value:function(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}},{key:"getNormal",value:function(e){return i.getNormal(this.a,this.b,this.c,e)}},{key:"getPlane",value:function(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}},{key:"getBarycoord",value:function(e,n){return i.getBarycoord(e,this.a,this.b,this.c,n)}},{key:"getInterpolation",value:function(e,n,r,s,a){return i.getInterpolation(e,this.a,this.b,this.c,n,r,s,a)}},{key:"containsPoint",value:function(e){return i.containsPoint(e,this.a,this.b,this.c)}},{key:"isFrontFacing",value:function(e){return i.isFrontFacing(this.a,this.b,this.c,e)}},{key:"intersectsBox",value:function(e){return e.intersectsTriangle(this)}},{key:"closestPointToPoint",value:function(e,n){var r=this.a,s=this.b,a=this.c,o,l;dr.subVectors(s,r),fr.subVectors(a,r),tl.subVectors(e,r);var c=dr.dot(tl),h=fr.dot(tl);if(c<=0&&h<=0)return n.copy(r);el.subVectors(e,s);var u=dr.dot(el),d=fr.dot(el);if(u>=0&&d<=u)return n.copy(s);var f=c*d-u*h;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(r).addScaledVector(dr,o);nl.subVectors(e,a);var v=dr.dot(nl),g=fr.dot(nl);if(g>=0&&v<=g)return n.copy(a);var p=v*h-c*g;if(p<=0&&h>=0&&g<=0)return l=h/(h-g),n.copy(r).addScaledVector(fr,l);var m=u*g-v*d;if(m<=0&&d-u>=0&&v-g>=0)return wu.subVectors(a,s),l=(d-u)/(d-u+(v-g)),n.copy(s).addScaledVector(wu,l);var x=1/(m+p+f);return o=p*x,l=f*x,n.copy(r).addScaledVector(dr,o).addScaledVector(fr,l)}},{key:"equals",value:function(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}],[{key:"getNormal",value:function(e,n,r,s){s.subVectors(r,n),mn.subVectors(e,n),s.cross(mn);var a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}},{key:"getBarycoord",value:function(e,n,r,s,a){mn.subVectors(s,n),Hn.subVectors(r,n),Qo.subVectors(e,n);var o=mn.dot(mn),l=mn.dot(Hn),c=mn.dot(Qo),h=Hn.dot(Hn),u=Hn.dot(Qo),d=o*h-l*l;if(d===0)return a.set(0,0,0),null;var f=1/d,v=(h*c-l*u)*f,g=(o*u-l*c)*f;return a.set(1-v-g,g,v)}},{key:"containsPoint",value:function(e,n,r,s){return this.getBarycoord(e,n,r,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}},{key:"getInterpolation",value:function(e,n,r,s,a,o,l,c){return this.getBarycoord(e,n,r,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(l,Vn.z),c)}},{key:"isFrontFacing",value:function(e,n,r,s){return mn.subVectors(r,n),Hn.subVectors(e,n),mn.cross(Hn).dot(s)<0}}]),i}(),Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function il(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gr=function(i){function t(e,n,r){return Ht(this,t),this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}return Vt(t,[{key:"set",value:function(n,r,s){if(r===void 0&&s===void 0){var a=n;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(n,r,s);return this}},{key:"setScalar",value:function(n){return this.r=n,this.g=n,this.b=n,this}},{key:"setHex",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vn;return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,dn.toWorkingColorSpace(this,r),this}},{key:"setRGB",value:function(n,r,s){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:dn.workingColorSpace;return this.r=n,this.g=r,this.b=s,dn.toWorkingColorSpace(this,a),this}},{key:"setHSL",value:function(n,r,s){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:dn.workingColorSpace;if(n=GM(n,1),r=Be(r,0,1),s=Be(s,0,1),r===0)this.r=this.g=this.b=s;else{var o=s<=.5?s*(1+r):s+r-s*r,l=2*s-o;this.r=il(l,o,n+1/3),this.g=il(l,o,n),this.b=il(l,o,n-1/3)}return dn.toWorkingColorSpace(this,a),this}},{key:"setStyle",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vn;function s(d){d!==void 0&&parseFloat(d)<1&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")}var a;if(a=/^(\w+)\(([^\)]*)\)/.exec(n)){var o,l=a[1],c=a[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,r);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,r);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+n)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(n)){var h=a[1],u=h.length;if(u===3)return this.setRGB(parseInt(h.charAt(0),16)/15,parseInt(h.charAt(1),16)/15,parseInt(h.charAt(2),16)/15,r);if(u===6)return this.setHex(parseInt(h,16),r);console.warn("THREE.Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,r);return this}},{key:"setColorName",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vn,s=Pp[n.toLowerCase()];return s!==void 0?this.setHex(s,r):console.warn("THREE.Color: Unknown color "+n),this}},{key:"clone",value:function(){return new this.constructor(this.r,this.g,this.b)}},{key:"copy",value:function(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}},{key:"copySRGBToLinear",value:function(n){return this.r=Cr(n.r),this.g=Cr(n.g),this.b=Cr(n.b),this}},{key:"copyLinearToSRGB",value:function(n){return this.r=Xo(n.r),this.g=Xo(n.g),this.b=Xo(n.b),this}},{key:"convertSRGBToLinear",value:function(){return this.copySRGBToLinear(this),this}},{key:"convertLinearToSRGB",value:function(){return this.copyLinearToSRGB(this),this}},{key:"getHex",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:vn;return dn.fromWorkingColorSpace(Le.copy(this),n),Math.round(Be(Le.r*255,0,255))*65536+Math.round(Be(Le.g*255,0,255))*256+Math.round(Be(Le.b*255,0,255))}},{key:"getHexString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:vn;return("000000"+this.getHex(n).toString(16)).slice(-6)}},{key:"getHSL",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:dn.workingColorSpace;dn.fromWorkingColorSpace(Le.copy(this),r);var s=Le.r,a=Le.g,o=Le.b,l=Math.max(s,a,o),c=Math.min(s,a,o),h,u,d=(c+l)/2;if(c===l)h=0,u=0;else{var f=l-c;switch(u=d<=.5?f/(l+c):f/(2-l-c),l){case s:h=(a-o)/f+(a<o?6:0);break;case a:h=(o-s)/f+2;break;case o:h=(s-a)/f+4;break}h/=6}return n.h=h,n.s=u,n.l=d,n}},{key:"getRGB",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:dn.workingColorSpace;return dn.fromWorkingColorSpace(Le.copy(this),r),n.r=Le.r,n.g=Le.g,n.b=Le.b,n}},{key:"getStyle",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:vn;dn.fromWorkingColorSpace(Le.copy(this),n);var r=Le.r,s=Le.g,a=Le.b;return n!==vn?"color(".concat(n," ").concat(r.toFixed(3)," ").concat(s.toFixed(3)," ").concat(a.toFixed(3),")"):"rgb(".concat(Math.round(r*255),",").concat(Math.round(s*255),",").concat(Math.round(a*255),")")}},{key:"offsetHSL",value:function(n,r,s){return this.getHSL(oi),this.setHSL(oi.h+n,oi.s+r,oi.l+s)}},{key:"add",value:function(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}},{key:"addColors",value:function(n,r){return this.r=n.r+r.r,this.g=n.g+r.g,this.b=n.b+r.b,this}},{key:"addScalar",value:function(n){return this.r+=n,this.g+=n,this.b+=n,this}},{key:"sub",value:function(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}},{key:"multiply",value:function(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}},{key:"multiplyScalar",value:function(n){return this.r*=n,this.g*=n,this.b*=n,this}},{key:"lerp",value:function(n,r){return this.r+=(n.r-this.r)*r,this.g+=(n.g-this.g)*r,this.b+=(n.b-this.b)*r,this}},{key:"lerpColors",value:function(n,r,s){return this.r=n.r+(r.r-n.r)*s,this.g=n.g+(r.g-n.g)*s,this.b=n.b+(r.b-n.b)*s,this}},{key:"lerpHSL",value:function(n,r){this.getHSL(oi),n.getHSL(pa);var s=Go(oi.h,pa.h,r),a=Go(oi.s,pa.s,r),o=Go(oi.l,pa.l,r);return this.setHSL(s,a,o),this}},{key:"setFromVector3",value:function(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}},{key:"applyMatrix3",value:function(n){var r=this.r,s=this.g,a=this.b,o=n.elements;return this.r=o[0]*r+o[3]*s+o[6]*a,this.g=o[1]*r+o[4]*s+o[7]*a,this.b=o[2]*r+o[5]*s+o[8]*a,this}},{key:"equals",value:function(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}},{key:"fromArray",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this.r=n[r],this.g=n[r+1],this.b=n[r+2],this}},{key:"toArray",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n[r]=this.r,n[r+1]=this.g,n[r+2]=this.b,n}},{key:"fromBufferAttribute",value:function(n,r){return this.r=n.getX(r),this.g=n.getY(r),this.b=n.getZ(r),this}},{key:"toJSON",value:function(){return this.getHex()}},{key:i,value:Ze().mark(function e(){return Ze().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.r;case 2:return r.next=4,this.g;case 4:return r.next=6,this.b;case 6:case"end":return r.stop()}},e,this)})}]),t}(Symbol.iterator),Le=new Gr;Gr.NAMES=Pp;var oS=0,Ip=function(i){Ke(e,i);var t=Je(e);function e(){var n;return Ht(this,e),n=t.call(this),n.isMaterial=!0,Object.defineProperty(Dr(n),"id",{value:oS++}),n.uuid=gi(),n.name="",n.type="Material",n.blending=eu,n.side=Dl,n.vertexColors=!1,n.opacity=1,n.transparent=!1,n.alphaHash=!1,n.blendSrc=iu,n.blendDst=ru,n.blendEquation=nu,n.blendSrcAlpha=null,n.blendDstAlpha=null,n.blendEquationAlpha=null,n.blendColor=new Gr(0,0,0),n.blendAlpha=0,n.depthFunc=su,n.depthTest=!0,n.depthWrite=!0,n.stencilWriteMask=255,n.stencilFunc=du,n.stencilRef=0,n.stencilFuncMask=255,n.stencilFail=sr,n.stencilZFail=sr,n.stencilZPass=sr,n.stencilWrite=!1,n.clippingPlanes=null,n.clipIntersection=!1,n.clipShadows=!1,n.shadowSide=null,n.colorWrite=!0,n.precision=null,n.polygonOffset=!1,n.polygonOffsetFactor=0,n.polygonOffsetUnits=0,n.dithering=!1,n.alphaToCoverage=!1,n.premultipliedAlpha=!1,n.forceSinglePass=!1,n.visible=!0,n.toneMapped=!0,n.userData={},n.version=0,n._alphaTest=0,n}return Vt(e,[{key:"alphaTest",get:function(){return this._alphaTest},set:function(r){this._alphaTest>0!=r>0&&this.version++,this._alphaTest=r}},{key:"onBuild",value:function(){}},{key:"onBeforeRender",value:function(){}},{key:"onBeforeCompile",value:function(){}},{key:"customProgramCacheKey",value:function(){return this.onBeforeCompile.toString()}},{key:"setValues",value:function(r){if(r!==void 0)for(var s in r){var a=r[s];if(a===void 0){console.warn("THREE.Material: parameter '".concat(s,"' has value of undefined."));continue}var o=this[s];if(o===void 0){console.warn("THREE.Material: '".concat(s,"' is not a property of THREE.").concat(this.type,"."));continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[s]=a}}},{key:"toJSON",value:function(r){var s=r===void 0||typeof r=="string";s&&(r={textures:{},images:{}});var a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(r).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(r).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(r).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(r).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(r).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(r).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(r).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(r).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(r).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(r).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(r).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(r).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(r).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(r).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(r).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(r).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(r).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(r).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(r).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(r).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(r).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(r).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(r).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(r).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==eu&&(a.blending=this.blending),this.side!==Dl&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==iu&&(a.blendSrc=this.blendSrc),this.blendDst!==ru&&(a.blendDst=this.blendDst),this.blendEquation!==nu&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==su&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==du&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(h){var u=[];for(var d in h){var f=h[d];delete f.metadata,u.push(f)}return u}if(s){var l=o(r.textures),c=o(r.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}},{key:"clone",value:function(){return new this.constructor().copy(this)}},{key:"copy",value:function(r){this.name=r.name,this.blending=r.blending,this.side=r.side,this.vertexColors=r.vertexColors,this.opacity=r.opacity,this.transparent=r.transparent,this.blendSrc=r.blendSrc,this.blendDst=r.blendDst,this.blendEquation=r.blendEquation,this.blendSrcAlpha=r.blendSrcAlpha,this.blendDstAlpha=r.blendDstAlpha,this.blendEquationAlpha=r.blendEquationAlpha,this.blendColor.copy(r.blendColor),this.blendAlpha=r.blendAlpha,this.depthFunc=r.depthFunc,this.depthTest=r.depthTest,this.depthWrite=r.depthWrite,this.stencilWriteMask=r.stencilWriteMask,this.stencilFunc=r.stencilFunc,this.stencilRef=r.stencilRef,this.stencilFuncMask=r.stencilFuncMask,this.stencilFail=r.stencilFail,this.stencilZFail=r.stencilZFail,this.stencilZPass=r.stencilZPass,this.stencilWrite=r.stencilWrite;var s=r.clippingPlanes,a=null;if(s!==null){var o=s.length;a=new Array(o);for(var l=0;l!==o;++l)a[l]=s[l].clone()}return this.clippingPlanes=a,this.clipIntersection=r.clipIntersection,this.clipShadows=r.clipShadows,this.shadowSide=r.shadowSide,this.colorWrite=r.colorWrite,this.precision=r.precision,this.polygonOffset=r.polygonOffset,this.polygonOffsetFactor=r.polygonOffsetFactor,this.polygonOffsetUnits=r.polygonOffsetUnits,this.dithering=r.dithering,this.alphaTest=r.alphaTest,this.alphaHash=r.alphaHash,this.alphaToCoverage=r.alphaToCoverage,this.premultipliedAlpha=r.premultipliedAlpha,this.forceSinglePass=r.forceSinglePass,this.visible=r.visible,this.toneMapped=r.toneMapped,this.userData=JSON.parse(JSON.stringify(r.userData)),this}},{key:"dispose",value:function(){this.dispatchEvent({type:"dispose"})}},{key:"needsUpdate",set:function(r){r===!0&&this.version++}}]),e}(io),Up=function(i){Ke(e,i);var t=Je(e);function e(n){var r;return Ht(this,e),r=t.call(this),r.isMeshBasicMaterial=!0,r.type="MeshBasicMaterial",r.color=new Gr(16777215),r.map=null,r.lightMap=null,r.lightMapIntensity=1,r.aoMap=null,r.aoMapIntensity=1,r.specularMap=null,r.alphaMap=null,r.envMap=null,r.combine=UM,r.reflectivity=1,r.refractionRatio=.98,r.wireframe=!1,r.wireframeLinewidth=1,r.wireframeLinecap="round",r.wireframeLinejoin="round",r.fog=!0,r.setValues(n),r}return Vt(e,[{key:"copy",value:function(r){return jn(Mn(e.prototype),"copy",this).call(this,r),this.color.copy(r.color),this.map=r.map,this.lightMap=r.lightMap,this.lightMapIntensity=r.lightMapIntensity,this.aoMap=r.aoMap,this.aoMapIntensity=r.aoMapIntensity,this.specularMap=r.specularMap,this.alphaMap=r.alphaMap,this.envMap=r.envMap,this.combine=r.combine,this.reflectivity=r.reflectivity,this.refractionRatio=r.refractionRatio,this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this.wireframeLinecap=r.wireframeLinecap,this.wireframeLinejoin=r.wireframeLinejoin,this.fog=r.fog,this}}]),e}(Ip),he=new Z,ma=new xe,zi=function(){function i(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(Ht(this,i),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kM,this.version=0}return Vt(i,[{key:"onUploadCallback",value:function(){}},{key:"needsUpdate",set:function(e){e===!0&&this.version++}},{key:"updateRange",get:function(){return us("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}},{key:"setUsage",value:function(e){return this.usage=e,this}},{key:"addUpdateRange",value:function(e,n){this.updateRanges.push({start:e,count:n})}},{key:"clearUpdateRanges",value:function(){this.updateRanges.length=0}},{key:"copy",value:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}},{key:"copyAt",value:function(e,n,r){e*=this.itemSize,r*=n.itemSize;for(var s=0,a=this.itemSize;s<a;s++)this.array[e+s]=n.array[r+s];return this}},{key:"copyArray",value:function(e){return this.array.set(e),this}},{key:"applyMatrix3",value:function(e){if(this.itemSize===2)for(var n=0,r=this.count;n<r;n++)ma.fromBufferAttribute(this,n),ma.applyMatrix3(e),this.setXY(n,ma.x,ma.y);else if(this.itemSize===3)for(var s=0,a=this.count;s<a;s++)he.fromBufferAttribute(this,s),he.applyMatrix3(e),this.setXYZ(s,he.x,he.y,he.z);return this}},{key:"applyMatrix4",value:function(e){for(var n=0,r=this.count;n<r;n++)he.fromBufferAttribute(this,n),he.applyMatrix4(e),this.setXYZ(n,he.x,he.y,he.z);return this}},{key:"applyNormalMatrix",value:function(e){for(var n=0,r=this.count;n<r;n++)he.fromBufferAttribute(this,n),he.applyNormalMatrix(e),this.setXYZ(n,he.x,he.y,he.z);return this}},{key:"transformDirection",value:function(e){for(var n=0,r=this.count;n<r;n++)he.fromBufferAttribute(this,n),he.transformDirection(e),this.setXYZ(n,he.x,he.y,he.z);return this}},{key:"set",value:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this.array.set(e,n),this}},{key:"getComponent",value:function(e,n){var r=this.array[e*this.itemSize+n];return this.normalized&&(r=An(r,this.array)),r}},{key:"setComponent",value:function(e,n,r){return this.normalized&&(r=$t(r,this.array)),this.array[e*this.itemSize+n]=r,this}},{key:"getX",value:function(e){var n=this.array[e*this.itemSize];return this.normalized&&(n=An(n,this.array)),n}},{key:"setX",value:function(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}},{key:"getY",value:function(e){var n=this.array[e*this.itemSize+1];return this.normalized&&(n=An(n,this.array)),n}},{key:"setY",value:function(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}},{key:"getZ",value:function(e){var n=this.array[e*this.itemSize+2];return this.normalized&&(n=An(n,this.array)),n}},{key:"setZ",value:function(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}},{key:"getW",value:function(e){var n=this.array[e*this.itemSize+3];return this.normalized&&(n=An(n,this.array)),n}},{key:"setW",value:function(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}},{key:"setXY",value:function(e,n,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}},{key:"setXYZ",value:function(e,n,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=s,this}},{key:"setXYZW",value:function(e,n,r,s,a){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),r=$t(r,this.array),s=$t(s,this.array),a=$t(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=s,this.array[e+3]=a,this}},{key:"onUpload",value:function(e){return this.onUploadCallback=e,this}},{key:"clone",value:function(){return new this.constructor(this.array,this.itemSize).copy(this)}},{key:"toJSON",value:function(){var e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}}]),i}(),lS=function(i){Ke(e,i);var t=Je(e);function e(n,r,s){return Ht(this,e),t.call(this,new Uint16Array(n),r,s)}return Vt(e)}(zi),cS=function(i){Ke(e,i);var t=Je(e);function e(n,r,s){return Ht(this,e),t.call(this,new Uint32Array(n),r,s)}return Vt(e)}(zi),hS=function(i){Ke(e,i);var t=Je(e);function e(n,r,s){return Ht(this,e),t.call(this,new Float32Array(n),r,s)}return Vt(e)}(zi),uS=0,nn=new _i,rl=new As,pr=new Z,$e=new Ts,ts=new Ts,ve=new Z,Dp=function(i){Ke(e,i);var t=Je(e);function e(){var n;return Ht(this,e),n=t.call(this),n.isBufferGeometry=!0,Object.defineProperty(Dr(n),"id",{value:uS++}),n.uuid=gi(),n.name="",n.type="BufferGeometry",n.index=null,n.attributes={},n.morphAttributes={},n.morphTargetsRelative=!1,n.groups=[],n.boundingBox=null,n.boundingSphere=null,n.drawRange={start:0,count:1/0},n.userData={},n}return Vt(e,[{key:"getIndex",value:function(){return this.index}},{key:"setIndex",value:function(r){return Array.isArray(r)?this.index=new(WM(r)?cS:lS)(r,1):this.index=r,this}},{key:"getAttribute",value:function(r){return this.attributes[r]}},{key:"setAttribute",value:function(r,s){return this.attributes[r]=s,this}},{key:"deleteAttribute",value:function(r){return delete this.attributes[r],this}},{key:"hasAttribute",value:function(r){return this.attributes[r]!==void 0}},{key:"addGroup",value:function(r,s){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;this.groups.push({start:r,count:s,materialIndex:a})}},{key:"clearGroups",value:function(){this.groups=[]}},{key:"setDrawRange",value:function(r,s){this.drawRange.start=r,this.drawRange.count=s}},{key:"applyMatrix4",value:function(r){var s=this.attributes.position;s!==void 0&&(s.applyMatrix4(r),s.needsUpdate=!0);var a=this.attributes.normal;if(a!==void 0){var o=new Vr().getNormalMatrix(r);a.applyNormalMatrix(o),a.needsUpdate=!0}var l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(r),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}},{key:"applyQuaternion",value:function(r){return nn.makeRotationFromQuaternion(r),this.applyMatrix4(nn),this}},{key:"rotateX",value:function(r){return nn.makeRotationX(r),this.applyMatrix4(nn),this}},{key:"rotateY",value:function(r){return nn.makeRotationY(r),this.applyMatrix4(nn),this}},{key:"rotateZ",value:function(r){return nn.makeRotationZ(r),this.applyMatrix4(nn),this}},{key:"translate",value:function(r,s,a){return nn.makeTranslation(r,s,a),this.applyMatrix4(nn),this}},{key:"scale",value:function(r,s,a){return nn.makeScale(r,s,a),this.applyMatrix4(nn),this}},{key:"lookAt",value:function(r){return rl.lookAt(r),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}},{key:"center",value:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}},{key:"setFromPoints",value:function(r){for(var s=[],a=0,o=r.length;a<o;a++){var l=r[a];s.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new hS(s,3)),this}},{key:"computeBoundingBox",value:function(){this.boundingBox===null&&(this.boundingBox=new Ts);var r=this.attributes.position,s=this.morphAttributes.position;if(r&&r.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(r!==void 0){if(this.boundingBox.setFromBufferAttribute(r),s)for(var a=0,o=s.length;a<o;a++){var l=s[a];$e.setFromBufferAttribute(l),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}},{key:"computeBoundingSphere",value:function(){this.boundingSphere===null&&(this.boundingSphere=new Rp);var r=this.attributes.position,s=this.morphAttributes.position;if(r&&r.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(r){var a=this.boundingSphere.center;if($e.setFromBufferAttribute(r),s)for(var o=0,l=s.length;o<l;o++){var c=s[o];ts.setFromBufferAttribute(c),this.morphTargetsRelative?(ve.addVectors($e.min,ts.min),$e.expandByPoint(ve),ve.addVectors($e.max,ts.max),$e.expandByPoint(ve)):($e.expandByPoint(ts.min),$e.expandByPoint(ts.max))}$e.getCenter(a);for(var h=0,u=0,d=r.count;u<d;u++)ve.fromBufferAttribute(r,u),h=Math.max(h,a.distanceToSquared(ve));if(s)for(var f=0,v=s.length;f<v;f++)for(var g=s[f],p=this.morphTargetsRelative,m=0,x=g.count;m<x;m++)ve.fromBufferAttribute(g,m),p&&(pr.fromBufferAttribute(r,m),ve.add(pr)),h=Math.max(h,a.distanceToSquared(ve));this.boundingSphere.radius=Math.sqrt(h),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}},{key:"computeTangents",value:function(){var r=this.index,s=this.attributes;if(r===null||s.position===void 0||s.normal===void 0||s.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}var a=r.array,o=s.position.array,l=s.normal.array,c=s.uv.array,h=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*h),4));for(var u=this.getAttribute("tangent").array,d=[],f=[],v=0;v<h;v++)d[v]=new Z,f[v]=new Z;var g=new Z,p=new Z,m=new Z,x=new xe,_=new xe,b=new xe,P=new Z,C=new Z;function A(ht,lt,Lt){g.fromArray(o,ht*3),p.fromArray(o,lt*3),m.fromArray(o,Lt*3),x.fromArray(c,ht*2),_.fromArray(c,lt*2),b.fromArray(c,Lt*2),p.sub(g),m.sub(g),_.sub(x),b.sub(x);var St=1/(_.x*b.y-b.x*_.y);isFinite(St)&&(P.copy(p).multiplyScalar(b.y).addScaledVector(m,-_.y).multiplyScalar(St),C.copy(m).multiplyScalar(_.x).addScaledVector(p,-b.x).multiplyScalar(St),d[ht].add(P),d[lt].add(P),d[Lt].add(P),f[ht].add(C),f[lt].add(C),f[Lt].add(C))}var F=this.groups;F.length===0&&(F=[{start:0,count:a.length}]);for(var $=0,y=F.length;$<y;++$)for(var T=F[$],D=T.start,I=T.count,S=D,L=D+I;S<L;S+=3)A(a[S+0],a[S+1],a[S+2]);var U=new Z,O=new Z,B=new Z,G=new Z;function Y(ht){B.fromArray(l,ht*3),G.copy(B);var lt=d[ht];U.copy(lt),U.sub(B.multiplyScalar(B.dot(lt))).normalize(),O.crossVectors(G,lt);var Lt=O.dot(f[ht]),St=Lt<0?-1:1;u[ht*4]=U.x,u[ht*4+1]=U.y,u[ht*4+2]=U.z,u[ht*4+3]=St}for(var j=0,st=F.length;j<st;++j)for(var pt=F[j],q=pt.start,K=pt.count,ot=q,_t=q+K;ot<_t;ot+=3)Y(a[ot+0]),Y(a[ot+1]),Y(a[ot+2])}},{key:"computeVertexNormals",value:function(){var r=this.index,s=this.getAttribute("position");if(s!==void 0){var a=this.getAttribute("normal");if(a===void 0)a=new zi(new Float32Array(s.count*3),3),this.setAttribute("normal",a);else for(var o=0,l=a.count;o<l;o++)a.setXYZ(o,0,0,0);var c=new Z,h=new Z,u=new Z,d=new Z,f=new Z,v=new Z,g=new Z,p=new Z;if(r)for(var m=0,x=r.count;m<x;m+=3){var _=r.getX(m+0),b=r.getX(m+1),P=r.getX(m+2);c.fromBufferAttribute(s,_),h.fromBufferAttribute(s,b),u.fromBufferAttribute(s,P),g.subVectors(u,h),p.subVectors(c,h),g.cross(p),d.fromBufferAttribute(a,_),f.fromBufferAttribute(a,b),v.fromBufferAttribute(a,P),d.add(g),f.add(g),v.add(g),a.setXYZ(_,d.x,d.y,d.z),a.setXYZ(b,f.x,f.y,f.z),a.setXYZ(P,v.x,v.y,v.z)}else for(var C=0,A=s.count;C<A;C+=3)c.fromBufferAttribute(s,C+0),h.fromBufferAttribute(s,C+1),u.fromBufferAttribute(s,C+2),g.subVectors(u,h),p.subVectors(c,h),g.cross(p),a.setXYZ(C+0,g.x,g.y,g.z),a.setXYZ(C+1,g.x,g.y,g.z),a.setXYZ(C+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}},{key:"normalizeNormals",value:function(){for(var r=this.attributes.normal,s=0,a=r.count;s<a;s++)ve.fromBufferAttribute(r,s),ve.normalize(),r.setXYZ(s,ve.x,ve.y,ve.z)}},{key:"toNonIndexed",value:function(){function r(A,F){for(var $=A.array,y=A.itemSize,T=A.normalized,D=new $.constructor(F.length*y),I=0,S=0,L=0,U=F.length;L<U;L++){A.isInterleavedBufferAttribute?I=F[L]*A.data.stride+A.offset:I=F[L]*y;for(var O=0;O<y;O++)D[S++]=$[I++]}return new zi(D,y,T)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;var s=new e,a=this.index.array,o=this.attributes;for(var l in o){var c=o[l],h=r(c,a);s.setAttribute(l,h)}var u=this.morphAttributes;for(var d in u){for(var f=[],v=u[d],g=0,p=v.length;g<p;g++){var m=v[g],x=r(m,a);f.push(x)}s.morphAttributes[d]=f}s.morphTargetsRelative=this.morphTargetsRelative;for(var _=this.groups,b=0,P=_.length;b<P;b++){var C=_[b];s.addGroup(C.start,C.count,C.materialIndex)}return s}},{key:"toJSON",value:function(){var r={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),Object.keys(this.userData).length>0&&(r.userData=this.userData),this.parameters!==void 0){var s=this.parameters;for(var a in s)s[a]!==void 0&&(r[a]=s[a]);return r}r.data={attributes:{}};var o=this.index;o!==null&&(r.data.index={type:o.array.constructor.name,array:Array.prototype.slice.call(o.array)});var l=this.attributes;for(var c in l){var h=l[c];r.data.attributes[c]=h.toJSON(r.data)}var u={},d=!1;for(var f in this.morphAttributes){for(var v=this.morphAttributes[f],g=[],p=0,m=v.length;p<m;p++){var x=v[p];g.push(x.toJSON(r.data))}g.length>0&&(u[f]=g,d=!0)}d&&(r.data.morphAttributes=u,r.data.morphTargetsRelative=this.morphTargetsRelative);var _=this.groups;_.length>0&&(r.data.groups=JSON.parse(JSON.stringify(_)));var b=this.boundingSphere;return b!==null&&(r.data.boundingSphere={center:b.center.toArray(),radius:b.radius}),r}},{key:"clone",value:function(){return new this.constructor().copy(this)}},{key:"copy",value:function(r){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;var s={};this.name=r.name;var a=r.index;a!==null&&this.setIndex(a.clone(s));var o=r.attributes;for(var l in o){var c=o[l];this.setAttribute(l,c.clone(s))}var h=r.morphAttributes;for(var u in h){for(var d=[],f=h[u],v=0,g=f.length;v<g;v++)d.push(f[v].clone(s));this.morphAttributes[u]=d}this.morphTargetsRelative=r.morphTargetsRelative;for(var p=r.groups,m=0,x=p.length;m<x;m++){var _=p[m];this.addGroup(_.start,_.count,_.materialIndex)}var b=r.boundingBox;b!==null&&(this.boundingBox=b.clone());var P=r.boundingSphere;return P!==null&&(this.boundingSphere=P.clone()),this.drawRange.start=r.drawRange.start,this.drawRange.count=r.drawRange.count,this.userData=r.userData,this}},{key:"dispose",value:function(){this.dispatchEvent({type:"dispose"})}}]),e}(io),Tu=new _i,Pi=new JM,va=new Rp,Au=new Z,mr=new Z,vr=new Z,gr=new Z,sl=new Z,ga=new Z,_a=new xe,ya=new xe,xa=new xe,Cu=new Z,Ru=new Z,Lu=new Z,Ma=new Z,Sa=new Z,al=function(i){Ke(e,i);var t=Je(e);function e(){var n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Dp,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Up;return Ht(this,e),n=t.call(this),n.isMesh=!0,n.type="Mesh",n.geometry=r,n.material=s,n.updateMorphTargets(),n}return Vt(e,[{key:"copy",value:function(r,s){return jn(Mn(e.prototype),"copy",this).call(this,r,s),r.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=r.morphTargetInfluences.slice()),r.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},r.morphTargetDictionary)),this.material=Array.isArray(r.material)?r.material.slice():r.material,this.geometry=r.geometry,this}},{key:"updateMorphTargets",value:function(){var r=this.geometry,s=r.morphAttributes,a=Object.keys(s);if(a.length>0){var o=s[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var l=0,c=o.length;l<c;l++){var h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}},{key:"getVertexPosition",value:function(r,s){var a=this.geometry,o=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;s.fromBufferAttribute(o,r);var h=this.morphTargetInfluences;if(l&&h){ga.set(0,0,0);for(var u=0,d=l.length;u<d;u++){var f=h[u],v=l[u];f!==0&&(sl.fromBufferAttribute(v,r),c?ga.addScaledVector(sl,f):ga.addScaledVector(sl.sub(s),f))}s.add(ga)}return s}},{key:"raycast",value:function(r,s){var a=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),va.copy(a.boundingSphere),va.applyMatrix4(l),Pi.copy(r.ray).recast(r.near),!(va.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(va,Au)===null||Pi.origin.distanceToSquared(Au)>Math.pow(r.far-r.near,2)))&&(Tu.copy(l).invert(),Pi.copy(r.ray).applyMatrix4(Tu),!(a.boundingBox!==null&&Pi.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(r,s,Pi)))}},{key:"_computeIntersections",value:function(r,s,a){var o,l=this.geometry,c=this.material,h=l.index,u=l.attributes.position,d=l.attributes.uv,f=l.attributes.uv1,v=l.attributes.normal,g=l.groups,p=l.drawRange;if(h!==null)if(Array.isArray(c))for(var m=0,x=g.length;m<x;m++)for(var _=g[m],b=c[_.materialIndex],P=Math.max(_.start,p.start),C=Math.min(h.count,Math.min(_.start+_.count,p.start+p.count)),A=P,F=C;A<F;A+=3){var $=h.getX(A),y=h.getX(A+1),T=h.getX(A+2);o=Ea(this,b,r,a,d,f,v,$,y,T),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=_.materialIndex,s.push(o))}else for(var D=Math.max(0,p.start),I=Math.min(h.count,p.start+p.count),S=D,L=I;S<L;S+=3){var U=h.getX(S),O=h.getX(S+1),B=h.getX(S+2);o=Ea(this,c,r,a,d,f,v,U,O,B),o&&(o.faceIndex=Math.floor(S/3),s.push(o))}else if(u!==void 0)if(Array.isArray(c))for(var G=0,Y=g.length;G<Y;G++)for(var j=g[G],st=c[j.materialIndex],pt=Math.max(j.start,p.start),q=Math.min(u.count,Math.min(j.start+j.count,p.start+p.count)),K=pt,ot=q;K<ot;K+=3){var _t=K,ht=K+1,lt=K+2;o=Ea(this,st,r,a,d,f,v,_t,ht,lt),o&&(o.faceIndex=Math.floor(K/3),o.face.materialIndex=j.materialIndex,s.push(o))}else for(var Lt=Math.max(0,p.start),St=Math.min(u.count,p.start+p.count),N=Lt,ue=St;N<ue;N+=3){var yt=N,wt=N+1,vt=N+2;o=Ea(this,c,r,a,d,f,v,yt,wt,vt),o&&(o.faceIndex=Math.floor(N/3),s.push(o))}}}]),e}(As);function dS(i,t,e,n,r,s,a,o){var l;if(t.side===PM?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Dl,o),l===null)return null;Sa.copy(o),Sa.applyMatrix4(i.matrixWorld);var c=e.ray.origin.distanceTo(Sa);return c<e.near||c>e.far?null:{distance:c,point:Sa.clone(),object:i}}function Ea(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,mr),i.getVertexPosition(l,vr),i.getVertexPosition(c,gr);var h=dS(i,t,e,n,mr,vr,gr,Ma);if(h){r&&(_a.fromBufferAttribute(r,o),ya.fromBufferAttribute(r,l),xa.fromBufferAttribute(r,c),h.uv=fa.getInterpolation(Ma,mr,vr,gr,_a,ya,xa,new xe)),s&&(_a.fromBufferAttribute(s,o),ya.fromBufferAttribute(s,l),xa.fromBufferAttribute(s,c),h.uv1=fa.getInterpolation(Ma,mr,vr,gr,_a,ya,xa,new xe),h.uv2=h.uv1),a&&(Cu.fromBufferAttribute(a,o),Ru.fromBufferAttribute(a,l),Lu.fromBufferAttribute(a,c),h.normal=fa.getInterpolation(Ma,mr,vr,gr,Cu,Ru,Lu,new Z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));var u={a:o,b:l,c,normal:new Z,materialIndex:0};fa.getNormal(mr,vr,gr,u.normal),h.face=u}return h}function fS(i){var t={};for(var e in i){t[e]={};for(var n in i[e]){var r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function pS(i){for(var t=[],e=0;e<i.length;e++)t.push(i[e].clone());return t}var mS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gS=function(i){Ke(e,i);var t=Je(e);function e(n){var r;return Ht(this,e),r=t.call(this),r.isShaderMaterial=!0,r.type="ShaderMaterial",r.defines={},r.uniforms={},r.uniformsGroups=[],r.vertexShader=mS,r.fragmentShader=vS,r.linewidth=1,r.wireframe=!1,r.wireframeLinewidth=1,r.fog=!1,r.lights=!1,r.clipping=!1,r.forceSinglePass=!0,r.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},r.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},r.index0AttributeName=void 0,r.uniformsNeedUpdate=!1,r.glslVersion=null,n!==void 0&&r.setValues(n),r}return Vt(e,[{key:"copy",value:function(r){return jn(Mn(e.prototype),"copy",this).call(this,r),this.fragmentShader=r.fragmentShader,this.vertexShader=r.vertexShader,this.uniforms=fS(r.uniforms),this.uniformsGroups=pS(r.uniformsGroups),this.defines=Object.assign({},r.defines),this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this.fog=r.fog,this.lights=r.lights,this.clipping=r.clipping,this.extensions=Object.assign({},r.extensions),this.glslVersion=r.glslVersion,this}},{key:"toJSON",value:function(r){var s=jn(Mn(e.prototype),"toJSON",this).call(this,r);s.glslVersion=this.glslVersion,s.uniforms={};for(var a in this.uniforms){var o=this.uniforms[a],l=o.value;l&&l.isTexture?s.uniforms[a]={type:"t",value:l.toJSON(r).uuid}:l&&l.isColor?s.uniforms[a]={type:"c",value:l.getHex()}:l&&l.isVector2?s.uniforms[a]={type:"v2",value:l.toArray()}:l&&l.isVector3?s.uniforms[a]={type:"v3",value:l.toArray()}:l&&l.isVector4?s.uniforms[a]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?s.uniforms[a]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?s.uniforms[a]={type:"m4",value:l.toArray()}:s.uniforms[a]={value:l}}Object.keys(this.defines).length>0&&(s.defines=this.defines),s.vertexShader=this.vertexShader,s.fragmentShader=this.fragmentShader,s.lights=this.lights,s.clipping=this.clipping;var c={};for(var h in this.extensions)this.extensions[h]===!0&&(c[h]=!0);return Object.keys(c).length>0&&(s.extensions=c),s}}]),e}(Ip),_S=function(i){Ke(e,i);var t=Je(e);function e(n,r,s,a,o,l,c,h,u,d){var f;if(Ht(this,e),d=d!==void 0?d:Ho,d!==Ho&&d!==lu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");return s===void 0&&d===Ho&&(s=NM),s===void 0&&d===lu&&(s=zM),f=t.call(this,null,a,o,l,c,h,d,s,u),f.isDepthTexture=!0,f.image={width:n,height:r},f.magFilter=c!==void 0?c:Ga,f.minFilter=h!==void 0?h:Ga,f.flipY=!1,f.generateMipmaps=!1,f.compareFunction=null,f}return Vt(e,[{key:"copy",value:function(r){return jn(Mn(e.prototype),"copy",this).call(this,r),this.compareFunction=r.compareFunction,this}},{key:"toJSON",value:function(r){var s=jn(Mn(e.prototype),"toJSON",this).call(this,r);return this.compareFunction!==null&&(s.compareFunction=this.compareFunction),s}}]),e}(bs),yS=new _S(1,1);yS.compareFunction=VM;var xS=function(){function i(t,e){Ht(this,i),this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gi()}return Vt(i,[{key:"onUploadCallback",value:function(){}},{key:"needsUpdate",set:function(e){e===!0&&this.version++}},{key:"updateRange",get:function(){return us("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}},{key:"setUsage",value:function(e){return this.usage=e,this}},{key:"addUpdateRange",value:function(e,n){this.updateRanges.push({start:e,count:n})}},{key:"clearUpdateRanges",value:function(){this.updateRanges.length=0}},{key:"copy",value:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}},{key:"copyAt",value:function(e,n,r){e*=this.stride,r*=n.stride;for(var s=0,a=this.stride;s<a;s++)this.array[e+s]=n.array[r+s];return this}},{key:"set",value:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this.array.set(e,n),this}},{key:"clone",value:function(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);var n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}},{key:"onUpload",value:function(e){return this.onUploadCallback=e,this}},{key:"toJSON",value:function(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}]),i}(),Ue=new Z,Pu=function(){function i(t,e,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;Ht(this,i),this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}return Vt(i,[{key:"count",get:function(){return this.data.count}},{key:"array",get:function(){return this.data.array}},{key:"needsUpdate",set:function(e){this.data.needsUpdate=e}},{key:"applyMatrix4",value:function(e){for(var n=0,r=this.data.count;n<r;n++)Ue.fromBufferAttribute(this,n),Ue.applyMatrix4(e),this.setXYZ(n,Ue.x,Ue.y,Ue.z);return this}},{key:"applyNormalMatrix",value:function(e){for(var n=0,r=this.count;n<r;n++)Ue.fromBufferAttribute(this,n),Ue.applyNormalMatrix(e),this.setXYZ(n,Ue.x,Ue.y,Ue.z);return this}},{key:"transformDirection",value:function(e){for(var n=0,r=this.count;n<r;n++)Ue.fromBufferAttribute(this,n),Ue.transformDirection(e),this.setXYZ(n,Ue.x,Ue.y,Ue.z);return this}},{key:"getComponent",value:function(e,n){var r=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(r=An(r,this.array)),r}},{key:"setComponent",value:function(e,n,r){return this.normalized&&(r=$t(r,this.array)),this.data.array[e*this.data.stride+this.offset+n]=r,this}},{key:"setX",value:function(e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}},{key:"setY",value:function(e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}},{key:"setZ",value:function(e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}},{key:"setW",value:function(e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}},{key:"getX",value:function(e){var n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=An(n,this.array)),n}},{key:"getY",value:function(e){var n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=An(n,this.array)),n}},{key:"getZ",value:function(e){var n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=An(n,this.array)),n}},{key:"getW",value:function(e){var n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=An(n,this.array)),n}},{key:"setXY",value:function(e,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=$t(n,this.array),r=$t(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this}},{key:"setXYZ",value:function(e,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=$t(n,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=s,this}},{key:"setXYZW",value:function(e,n,r,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=$t(n,this.array),r=$t(r,this.array),s=$t(s,this.array),a=$t(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=s,this.data.array[e+3]=a,this}},{key:"clone",value:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");for(var n=[],r=0;r<this.count;r++)for(var s=r*this.data.stride+this.offset,a=0;a<this.itemSize;a++)n.push(this.data.array[s+a]);return new zi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}},{key:"toJSON",value:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");for(var n=[],r=0;r<this.count;r++)for(var s=r*this.data.stride+this.offset,a=0;a<this.itemSize;a++)n.push(this.data.array[s+a]);return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}]),i}(),Iu=function(i){Ke(e,i);var t=Je(e);function e(n,r){var s;return Ht(this,e),s=t.call(this,{width:n,height:r}),s.isFramebufferTexture=!0,s.magFilter=Ga,s.minFilter=Ga,s.generateMipmaps=!1,s.needsUpdate=!0,s}return Vt(e)}(bs),ol=function(i){Ke(e,i);var t=Je(e);function e(n){var r;return Ht(this,e),r=t.call(this,n),r.isRawShaderMaterial=!0,r.type="RawShaderMaterial",r}return Vt(e)}(gS),Uu=new xe,MS=function(){function i(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new xe(1/0,1/0),e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new xe(-1/0,-1/0);Ht(this,i),this.isBox2=!0,this.min=t,this.max=e}return Vt(i,[{key:"set",value:function(e,n){return this.min.copy(e),this.max.copy(n),this}},{key:"setFromPoints",value:function(e){this.makeEmpty();for(var n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}},{key:"setFromCenterAndSize",value:function(e,n){var r=Uu.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}},{key:"clone",value:function(){return new this.constructor().copy(this)}},{key:"copy",value:function(e){return this.min.copy(e.min),this.max.copy(e.max),this}},{key:"makeEmpty",value:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}},{key:"isEmpty",value:function(){return this.max.x<this.min.x||this.max.y<this.min.y}},{key:"getCenter",value:function(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}},{key:"getSize",value:function(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}},{key:"expandByPoint",value:function(e){return this.min.min(e),this.max.max(e),this}},{key:"expandByVector",value:function(e){return this.min.sub(e),this.max.add(e),this}},{key:"expandByScalar",value:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this}},{key:"containsPoint",value:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}},{key:"containsBox",value:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}},{key:"getParameter",value:function(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}},{key:"intersectsBox",value:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}},{key:"clampPoint",value:function(e,n){return n.copy(e).clamp(this.min,this.max)}},{key:"distanceToPoint",value:function(e){return this.clampPoint(e,Uu).distanceTo(e)}},{key:"intersect",value:function(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}},{key:"union",value:function(e){return this.min.min(e.min),this.max.max(e.max),this}},{key:"translate",value:function(e){return this.min.add(e),this.max.add(e),this}},{key:"equals",value:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}]),i}();typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tp);function Fr(i){"@babel/helpers - typeof";return Fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fr(i)}function Du(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,SS(n.key),n)}}function Cs(i,t,e){return t&&Du(i.prototype,t),e&&Du(i,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function SS(i){var t=ES(i,"string");return Fr(t)==="symbol"?t:String(t)}function ES(i,t){if(Fr(i)!=="object"||i===null)return i;var e=i[Symbol.toPrimitive];if(e!==void 0){var n=e.call(i,t||"default");if(Fr(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(i)}function Rs(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function ro(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),t&&kl(i,t)}function kl(i,t){return kl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},kl(i,t)}function so(i){var t=TS();return function(){var n=Wa(i),r;if(t){var s=Wa(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return bS(this,r)}}function bS(i,t){if(t&&(Fr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wS(i)}function wS(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function TS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Wa(i){return Wa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Wa(i)}var AS=function(i){ro(e,i);var t=so(e);function e(){var n;Rs(this,e),n=t.call(this,e.Geometry,new Up({opacity:0,transparent:!0})),n.isLensflare=!0,n.type="Lensflare",n.frustumCulled=!1,n.renderOrder=1/0;var r=new Z,s=new Z,a=new Iu(16,16,Fl),o=new Iu(16,16,Fl),l=e.Geometry,c=new ol({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),h=new ol({uniforms:{map:{value:a},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),u=new al(l,c),d=[],f=Fp.Shader,v=new ol({uniforms:{map:{value:null},occlusionMap:{value:o},color:{value:new Gr(16777215)},scale:{value:new xe},screenPosition:{value:new Z}},vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:IM,transparent:!0,depthWrite:!1}),g=new al(l,v);n.addElement=function(b){d.push(b)};var p=new xe,m=new xe,x=new MS,_=new ZM;return n.onBeforeRender=function(b,P,C){b.getCurrentViewport(_);var A=_.w/_.z,F=_.z/2,$=_.w/2,y=16/_.w;if(p.set(y*A,y),x.min.set(_.x,_.y),x.max.set(_.x+(_.z-16),_.y+(_.w-16)),s.setFromMatrixPosition(this.matrixWorld),s.applyMatrix4(C.matrixWorldInverse),!(s.z>0)&&(r.copy(s).applyMatrix4(C.projectionMatrix),m.x=_.x+r.x*F+F-8,m.y=_.y+r.y*$+$-8,x.containsPoint(m))){b.copyFramebufferToTexture(m,a);var T=c.uniforms;T.scale.value=p,T.screenPosition.value=r,b.renderBufferDirect(C,null,l,c,u,null),b.copyFramebufferToTexture(m,o),T=h.uniforms,T.scale.value=p,T.screenPosition.value=r,b.renderBufferDirect(C,null,l,h,u,null);for(var D=-r.x*2,I=-r.y*2,S=0,L=d.length;S<L;S++){var U=d[S],O=v.uniforms;O.color.value.copy(U.color),O.map.value=U.texture,O.screenPosition.value.x=r.x+D*U.distance,O.screenPosition.value.y=r.y+I*U.distance,y=U.size/_.w;var B=_.w/_.z;O.scale.value.set(y*B,y),v.uniformsNeedUpdate=!0,b.renderBufferDirect(C,null,l,v,g,null)}}},n.dispose=function(){c.dispose(),h.dispose(),v.dispose(),a.dispose(),o.dispose();for(var b=0,P=d.length;b<P;b++)d[b].texture.dispose()},n}return Cs(e)}(al),Fp=Cs(function i(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:new Gr(16777215);Rs(this,i),this.texture=t,this.size=e,this.distance=n,this.color=r});Fp.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};AS.Geometry=function(){var i=new Dp,t=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),e=new xS(t,5);return i.setIndex([0,1,2,0,2,3]),i.setAttribute("position",new Pu(e,3,0,!1)),i.setAttribute("uv",new Pu(e,2,3,!1)),i}();var CS="psvLensflare";tc.dasherize(CS);var Op=function(i){ro(e,i);var t=so(e);function e(){return Rs(this,e),t.apply(this,arguments)}return Cs(e)}(qd),RS=function(i){ro(e,i);var t=so(e);function e(n,r){var s;return Rs(this,e),s=t.call(this,e.type),s.lensflare=n,s.visible=r,s}return Cs(e)}(Op);RS.type="lensflare-visibility";var LS=function(i){ro(e,i);var t=so(e);function e(n){var r;return Rs(this,e),r=t.call(this,e.type),r.lensflares=n,r}return Cs(e)}(Op);LS.type="set-lensflares";tc.getConfigParser({lensflares:null});function PS(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Np={exports:{}};(function(i){var t=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function r(l,c,h){this.fn=l,this.context=c,this.once=h||!1}function s(l,c,h,u,d){if(typeof h!="function")throw new TypeError("The listener must be a function");var f=new r(h,u||l,d),v=e?e+c:c;return l._events[v]?l._events[v].fn?l._events[v]=[l._events[v],f]:l._events[v].push(f):(l._events[v]=f,l._eventsCount++),l}function a(l,c){--l._eventsCount===0?l._events=new n:delete l._events[c]}function o(){this._events=new n,this._eventsCount=0}o.prototype.eventNames=function(){var c=[],h,u;if(this._eventsCount===0)return c;for(u in h=this._events)t.call(h,u)&&c.push(e?u.slice(1):u);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(h)):c},o.prototype.listeners=function(c){var h=e?e+c:c,u=this._events[h];if(!u)return[];if(u.fn)return[u.fn];for(var d=0,f=u.length,v=new Array(f);d<f;d++)v[d]=u[d].fn;return v},o.prototype.listenerCount=function(c){var h=e?e+c:c,u=this._events[h];return u?u.fn?1:u.length:0},o.prototype.emit=function(c,h,u,d,f,v){var g=e?e+c:c;if(!this._events[g])return!1;var p=this._events[g],m=arguments.length,x,_;if(p.fn){switch(p.once&&this.removeListener(c,p.fn,void 0,!0),m){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,h),!0;case 3:return p.fn.call(p.context,h,u),!0;case 4:return p.fn.call(p.context,h,u,d),!0;case 5:return p.fn.call(p.context,h,u,d,f),!0;case 6:return p.fn.call(p.context,h,u,d,f,v),!0}for(_=1,x=new Array(m-1);_<m;_++)x[_-1]=arguments[_];p.fn.apply(p.context,x)}else{var b=p.length,P;for(_=0;_<b;_++)switch(p[_].once&&this.removeListener(c,p[_].fn,void 0,!0),m){case 1:p[_].fn.call(p[_].context);break;case 2:p[_].fn.call(p[_].context,h);break;case 3:p[_].fn.call(p[_].context,h,u);break;case 4:p[_].fn.call(p[_].context,h,u,d);break;default:if(!x)for(P=1,x=new Array(m-1);P<m;P++)x[P-1]=arguments[P];p[_].fn.apply(p[_].context,x)}}return!0},o.prototype.on=function(c,h,u){return s(this,c,h,u,!1)},o.prototype.once=function(c,h,u){return s(this,c,h,u,!0)},o.prototype.removeListener=function(c,h,u,d){var f=e?e+c:c;if(!this._events[f])return this;if(!h)return a(this,f),this;var v=this._events[f];if(v.fn)v.fn===h&&(!d||v.once)&&(!u||v.context===u)&&a(this,f);else{for(var g=0,p=[],m=v.length;g<m;g++)(v[g].fn!==h||d&&!v[g].once||u&&v[g].context!==u)&&p.push(v[g]);p.length?this._events[f]=p.length===1?p[0]:p:a(this,f)}return this},o.prototype.removeAllListeners=function(c){var h;return c?(h=e?e+c:c,this._events[h]&&a(this,h)):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=e,o.EventEmitter=o,i.exports=o})(Np);var IS=Np.exports,US=PS(IS);function Xa(i){"@babel/helpers - typeof";return Xa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xa(i)}var ba=new US,ze={on:function(t,e){return ba.on(t,e)},once:function(t,e){return ba.once(t,e)},off:function(t,e){return ba.off(t,e)},emit:function(t,e){return ba.emit(t,e)}};Object.freeze(ze);var DS=["src","height","width","hideNavbarButton","containerClass","littlePlanet","onPositionChange","onZoomChange","onClick","onDblclick","onReady"],zl=["zoom","fullscreen"];function FS(i){var t=ds({},i);for(var e in t)DS.includes(e)&&delete t[e];return t}function OS(i,t,e,n,r){return(i-t)*(r-n)/(e-t)+n}function Fu(i){return i==null?zl:Array.isArray(i)?i:typeof i=="string"?i===""?!1:[i]:i?zl:!1}function NS(){var i=oe.useState(),t=i[0],e=i[1],n=oe.useCallback(function(r){r&&r!==t&&e(r)},[t]);return[t,n]}var kS=oe.forwardRef(function(i,t){var e=NS(),n=e[0],r=e[1],s=oe.useMemo(function(){return i},[i.src,i.navbar,i.height,i.width,i.containerClass,i.hideNavbarButton||!0,i.littlePlanet,i.fishEye,i.lang,i.onPositionChange,i.onZoomChange,i.onClick,i.onDblclick,i.onReady,i.moveSpeed,i.zoomSpeed,i.moveInertia,i.mousewheel,i.mousemove,i.mousewheelCtrlKey,i.touchmoveTwoFingers,i.panoData,i.requestHeaders,i.withCredentials,i.keyboard,i.plugins,i.sphereCorrection,i.minFov,i.maxFov,i.defaultZoomLvl,i.defaultYaw,i.defaultPitch]),a=oe.useRef(null),o=130,l=oe.useState(-90)[0],c=oe.useState(2)[0],h=oe.useState(0)[0],u=oe.useState(zl),d=u[0],f=u[1];oe.useEffect(function(){function g(){var p=window.innerWidth/window.innerHeight;o=Math.floor(OS(p,.5,1.8,140,115))}return window.addEventListener("resize",g),g(),function(){return window.removeEventListener("resize",g)}},[]),oe.useEffect(function(){var g,p,m,x,_,b,P,C,A,F,$=!0;if(n&&!a.current){var y=new yM(ds(ds({},FS(s)),{container:n,panorama:s.src,size:{height:s.height,width:s.width||"100px"},fisheye:s.littlePlanet?c:s.fisheye||!1,minFov:(g=s.minFov)!==null&&g!==void 0?g:30,maxFov:s.littlePlanet?o:(p=s.maxFov)!==null&&p!==void 0?p:90,defaultZoomLvl:s.littlePlanet?h:(m=s.defaultZoomLvl)!==null&&m!==void 0?m:50,defaultYaw:(x=s.defaultYaw)!==null&&x!==void 0?x:0,defaultPitch:s.littlePlanet?l:(_=s.defaultPitch)!==null&&_!==void 0?_:0,sphereCorrection:s.sphereCorrection||{pan:0,tilt:0,roll:0},moveSpeed:s.moveSpeed||1,zoomSpeed:s.zoomSpeed||1,moveInertia:(b=s.moveInertia)!==null&&b!==void 0?b:!0,mousewheel:s.littlePlanet?!1:(P=s.mousewheel)!==null&&P!==void 0?P:!0,mousemove:(C=s.mousemove)!==null&&C!==void 0?C:!0,mousewheelCtrlKey:s.mousewheelCtrlKey||!1,touchmoveTwoFingers:s.touchmoveTwoFingers||!1,panoData:s.panoData||{},requestHeaders:s.requestHeaders||{},withCredentials:s.withCredentials||!1,navbar:Fu(s.navbar),lang:s.lang||{},keyboard:s.keyboard||"fullscreen",plugins:$p([],s.plugins?s.plugins:[],!0)}));y.addEventListener("ready",function(){s.onReady&&s.onReady(y)},{once:!0}),y.addEventListener("click",function(L){s.onClick&&s.onClick(L,y),s.littlePlanet&&$&&($=!1,y.animate({yaw:0,pitch:l,zoom:75,speed:"3rpm"}).then(function(){y.animate({yaw:0,pitch:0,zoom:90,speed:"10rpm"}).then(function(){var U;y.setOption("maxFov",s.maxFov||70),y.setOption("mousewheel",(U=s.mousewheel)!==null&&U!==void 0?U:!0)})}))}),y.addEventListener("dblclick",function(L){s.onDblclick&&s.onDblclick(L,y)}),y.addEventListener("zoom-updated",function(L){s.onZoomChange&&s.onZoomChange(L,y)}),y.addEventListener("position-updated",function(L){s.onPositionChange&&s.onPositionChange(L.position.pitch,L.position.yaw,y)});var T=Fu(s.navbar);if(s.littlePlanet){var D=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 11.8805 19.9974 11.7615 19.9922 11.6433C20.2479 11.4141 20.4882 11.1864 20.7118 10.9611C21.0037 10.6672 21.002 10.1923 20.708 9.90049C20.4336 9.628 20.0014 9.61143 19.7077 9.84972C19.4023 8.75248 18.8688 7.75024 18.1616 6.89725C18.4607 6.84611 18.7436 6.8084 19.0087 6.784C19.4212 6.74604 19.7247 6.38089 19.6868 5.96842C19.6488 5.55595 19.2837 5.25235 18.8712 5.29032C18.4474 5.32932 17.9972 5.39638 17.5262 5.48921C17.3267 5.52851 17.1614 5.64353 17.0543 5.79852C15.6765 4.67424 13.917 4 12 4C7.58172 4 4 7.58172 4 12C4 12.2776 4.01414 12.552 4.04175 12.8223C3.78987 12.7532 3.50899 12.8177 3.31137 13.0159C2.97651 13.3517 2.67596 13.6846 2.415 14.0113C2.15647 14.3349 2.20924 14.8069 2.53287 15.0654C2.8565 15.3239 3.32843 15.2711 3.58696 14.9475C3.78866 14.695 4.02466 14.4302 4.2938 14.1557C4.60754 15.2796 5.16056 16.3037 5.8945 17.1697C5.66824 17.3368 5.54578 17.6248 5.60398 17.919C5.68437 18.3253 6.07894 18.5896 6.48528 18.5092C6.7024 18.4662 6.92455 18.4177 7.15125 18.3637C8.49656 19.3903 10.1771 20 12 20ZM7.15125 18.3637C6.69042 18.012 6.26891 17.6114 5.8945 17.1697C5.98073 17.106 6.08204 17.0599 6.19417 17.0377C7.19089 16.8405 8.33112 16.5084 9.55581 16.0486C9.94359 15.903 10.376 16.0994 10.5216 16.4872C10.6671 16.8749 10.4708 17.3073 10.083 17.4529C9.05325 17.8395 8.0653 18.1459 7.15125 18.3637ZM19.7077 9.84972C19.6869 9.86663 19.6667 9.88483 19.6474 9.90431C18.9609 10.5957 18.0797 11.3337 17.0388 12.0753C16.7014 12.3157 16.6228 12.784 16.8631 13.1213C17.1035 13.4587 17.5718 13.5373 17.9091 13.297C18.6809 12.7471 19.3806 12.1912 19.9922 11.6433C19.965 11.0246 19.8676 10.4241 19.7077 9.84972ZM20.9366 5.37924C20.5336 5.28378 20.1294 5.53313 20.034 5.93619C19.9385 6.33925 20.1879 6.74339 20.5909 6.83886C20.985 6.93219 21.1368 7.07125 21.1932 7.16142C21.2565 7.26269 21.3262 7.52732 21.0363 8.10938C20.8516 8.48014 21.0025 8.93042 21.3732 9.1151C21.744 9.29979 22.1943 9.14894 22.379 8.77818C22.7566 8.02003 22.9422 7.12886 22.4648 6.36582C22.1206 5.81574 21.5416 5.52252 20.9366 5.37924ZM2.81481 16.2501C2.94057 15.8555 2.72259 15.4336 2.32793 15.3078C1.93327 15.1821 1.51138 15.4 1.38562 15.7947C1.19392 16.3963 1.17354 17.0573 1.53488 17.6349C1.98775 18.3587 2.84153 18.6413 3.68907 18.7224C4.1014 18.7619 4.46765 18.4596 4.50712 18.0473C4.54658 17.635 4.24432 17.2687 3.83199 17.2293C3.13763 17.1628 2.88355 16.9624 2.80651 16.8393C2.75679 16.7598 2.70479 16.5954 2.81481 16.2501ZM15.7504 14.704C16.106 14.4915 16.2218 14.0309 16.0093 13.6754C15.7967 13.3199 15.3362 13.204 14.9807 13.4166C14.4991 13.7045 13.9974 13.9881 13.4781 14.2648C12.9445 14.5491 12.4132 14.8149 11.8883 15.0615C11.5134 15.2376 11.3522 15.6843 11.5283 16.0592C11.7044 16.4341 12.1511 16.5953 12.526 16.4192C13.0739 16.1618 13.6277 15.8847 14.1834 15.5887C14.7242 15.3005 15.2474 15.0048 15.7504 14.704Z" fill="rgba(255,255,255,.7)"/>
                </svg>`,I={id:"resetLittlePlanetButton",content:((A=i.lang)===null||A===void 0?void 0:A.littlePlanetIcon)||D,title:((F=i.lang)===null||F===void 0?void 0:F.littlePlanetButton)||"Reset Little Planet",className:"resetLittlePlanetButton",onClick:function(){$=!0,y.setOption("maxFov",o),y.setOption("mousewheel",!1),y.animate({yaw:0,pitch:l,zoom:h,speed:"10rpm"})}};T!==!1&&!T.find(function(L){return Xa(L)==="object"&&(L==null?void 0:L.id)==="resetLittlePlanetButton"})&&T.splice(1,0,I)}if(s.hideNavbarButton){var S={id:"hideNavbarButton",content:`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_429_11083)">
                            <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="rgba(255,255,255,.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_429_11083">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>`,title:"Hide Navbar",className:"hideNavbarButton",onClick:function(){y.navbar.hide();var U=document.createElement("a");U.className="showNavbarButton",U.innerHTML=`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve" class="icon icon-back-to-top">
                                        <g>
                                        <path d="M13.8,1.3L21.6,9c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.1,0.3,0.1,0.4s0,0.3-0.1,0.4c-0.1,0.1-0.1,0.3-0.3,0.4
                                            c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.1-0.3-0.2-0.4-0.3L14.2,5l0,19.1
                                            c0,0.2-0.1,0.3-0.1,0.5c0,0.1-0.1,0.3-0.3,0.4c-0.1,0.1-0.2,0.2-0.4,0.3c-0.1,0.1-0.3,0.1-0.5,0.1c-0.1,0-0.3,0-0.4-0.1
                                            c-0.1-0.1-0.3-0.1-0.4-0.3c-0.1-0.1-0.2-0.2-0.3-0.4c-0.1-0.1-0.1-0.3-0.1-0.5l0-19.1l-5.7,5.7C6,10.8,5.8,10.9,5.7,11
                                            c-0.1,0.1-0.3,0.1-0.4,0.1c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.1-0.2-0.2-0.4C4.1,10.2,4,10.1,4.1,9.9
                                            c0-0.1,0-0.3,0.1-0.4c0-0.1,0.1-0.3,0.3-0.4l7.7-7.8c0.1,0,0.2-0.1,0.2-0.1c0,0,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.2-0.1
                                            c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1C13.7,1.2,13.8,1.2,13.8,1.3z"></path>
                                        </g>
                                        </svg>`,U.title="Show Navbar",U.onclick=function(O){O.preventDefault(),y.navbar.show(),U.remove()},document.body.appendChild(U)}};T!==!1&&!T.find(function(L){return Xa(L)==="object"&&(L==null?void 0:L.id)==="hideNavbarButton"})&&T.push(S)}T!==!1?(y.setOption("navbar",T),f(T)):y.navbar.hide(),ze.on("animate",function(L){y.animate(L)}).on("stop-animation",function(){y.stopAnimation()}).on("destroy",function(){y.destroy()}).on("rotate",function(L){y.rotate(L)}).on("setOption",function(L){var U=L.option,O=L.value;y.setOption(U,O)}).on("zoom",function(L){y.zoom(L)}).on("zoomIn",function(L){y.zoomIn(L)}).on("zoomOut",function(L){y.zoomOut(L)}).on("needsContinuousUpdate",function(L){y.needsContinuousUpdate(L)}).on("observeObjects",function(L){y.observeObjects(L)}).on("unobserveObjects",function(L){y.unobserveObjects(L)}).on("setCursor",function(L){y.setCursor(L)}),a.current=y}},[n,s]),oe.useEffect(function(){a.current&&a.current.setPanorama(s.src,s)},[s.src]);var v=function(){return{animate:function(m){ze.emit("animate",m)},destroy:function(){ze.emit("destroy",{})},createTooltip:function(m){var x;return(x=a.current)===null||x===void 0?void 0:x.createTooltip(m)},needsContinuousUpdate:function(m){ze.emit("needsContinuousUpdate",m)},observeObjects:function(m){ze.emit("observeObjects",m)},unobserveObjects:function(m){ze.emit("unobserveObjects",m)},setCursor:function(m){ze.emit("setCursor",m)},stopAnimation:function(){ze.emit("stop-animation",{})},rotate:function(m){ze.emit("rotate",m)},setOption:function(m,x){ze.emit("setOption",{option:m,value:x})},setOptions:function(m){var x;return(x=a.current)===null||x===void 0?void 0:x.setOptions(m)},getCurrentNavbar:function(){return d},zoom:function(m){ze.emit("zoom",m)},zoomIn:function(m){ze.emit("zoomIn",{step:m})},zoomOut:function(m){ze.emit("zoomOut",{step:m})},resize:function(m){var x;return(x=a.current)===null||x===void 0?void 0:x.resize(m)},enterFullscreen:function(){var m;return(m=a.current)===null||m===void 0?void 0:m.enterFullscreen()},exitFullscreen:function(){var m;return(m=a.current)===null||m===void 0?void 0:m.exitFullscreen()},toggleFullscreen:function(){var m;return(m=a.current)===null||m===void 0?void 0:m.toggleFullscreen()},isFullscreenEnabled:function(){var m;return(m=a.current)===null||m===void 0?void 0:m.isFullscreenEnabled()},getPlugin:function(m){var x;return(x=a.current)===null||x===void 0?void 0:x.getPlugin(m)},getPosition:function(){var m;return(m=a.current)===null||m===void 0?void 0:m.getPosition()},getZoomLevel:function(){var m;return(m=a.current)===null||m===void 0?void 0:m.getZoomLevel()},getSize:function(){var m;return(m=a.current)===null||m===void 0?void 0:m.getSize()},needsUpdate:function(){var m;return(m=a.current)===null||m===void 0?void 0:m.needsUpdate()},autoSize:function(){var m;return(m=a.current)===null||m===void 0?void 0:m.autoSize()},setPanorama:function(m,x){var _;return(_=a.current)===null||_===void 0?void 0:_.setPanorama(m,x)},showError:function(m){var x;return(x=a.current)===null||x===void 0?void 0:x.showError(m)},hideError:function(){var m;return(m=a.current)===null||m===void 0?void 0:m.hideError()},startKeyboardControl:function(){var m;return(m=a.current)===null||m===void 0?void 0:m.startKeyboardControl()},stopKeyboardControl:function(){var m;return(m=a.current)===null||m===void 0?void 0:m.stopKeyboardControl()}}};return oe.useImperativeHandle(t,v,[a.current,n,s,t]),Xp.createElement("div",{className:s.containerClass||"view-container",ref:r})});const Bl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA7CAYAAADfGRI9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAomSURBVHgB7VpLbBTZFb1V3W23P+22PcbG3xiHX4xiTUSISBQkSLKKQLMJSXYIKckiiViwRgKUzyIsEFIiRkJCyiSbCAmJZJFxhAST2VkgdiAkEB8b8Qdj/uCuN+e+frf6VnVXu/F092gkrnT1qurVq7rn3c+770P0nt5TTWSM8ahJ1Ogf2e8DEHmeF94XH4XPDDWIfKozsdBUBBECEWD79++3D1B67pl+12umVt+JBJQTkNkHCO68kLdu3ZreuXNnCtcpqYu9I+19arxV1USe0pYWOCXMoDZu3JjBdVgy83P9ngBVHaQtoDnkwAhpIURQK7gTPqO4dXJysgVli7uXMu045TQrHfSlAKbp3Sn0pYSfWz8+e/asp973xsfH6fr163Tx4kVftWcKXBu+N/fv3zcAqL9vr1mbjQxAoT+pXhVfsdoCZ1gzAJLFdXZkZKQNJXM7uIN5YGDAloODg+3ueRu/t3r16lZcM2ttJmmyoSTAUsr8WpxwETDgTnCut7e3C2Ue3KU45+o7BCg4677FLN+2fhjzxfoQ+5gEDdWDoi0BlnUCdgogB4a5G9wD7u3q6url63w+3+Oe5xVQ0WgbKS1K4BEtUo3DRk0+J2OSG3gNlcZH8Scf/uSvWLHCh8/EA0HEnIIg4NI8efLE3gIsOxPfG2jXe/v2rfU99332R+/p06dc0okTJ0I/PHDggIiX6IO1qjcSHPgCId0/f/583O/C8apCKWza29s5OATPnz83DoDJ5XIGIOS+IM/RcQE6zgKGBgN0oAFI7uiAO91ZlFFJwbLIU+NXJVNk82JT+6Czs7Mf5UBHR8dKlEPgEfAoeEzxaFtb2wiADuKa3xsAr+D27jtd7rvtLkDJMJJRHamzG1oWsX0LMLZ7iWwuGrIAXc6X+gCIhWSBh3ft2rXh3Llzvzp9+vQvcL+qtbV1AuWEK1eBv+GAjrhO4HbcMR/w93p6evICkJQfig+yTLFAs3xgKtOwwFxY5x7uccCspqCR0SNHjvzgzZs3s8bR69ev5/bt2/cjAFsLXoP3mL/JYBXQUQeSO6gP3Esq2DBAp0U7VEiA+bI5qed6q5I5djtBuMeHnYDj8J9pEyMEjRnUTba0tHwL5XqAXOdArnZAx6moSQa4UgHsdgBDExVwEr0rmWU1xDJdYWflpNe/d++eD214CASp27dvi92n4GPpZ8+e8X0mm81yT6ZevXp1Jf7BQqHwNJ1O/xDgDL4TBhPcE+5tEEF7Lgv4Z+Hly5eLVAou9jmGigCdwkHGtpVvUClqLul8kcTVqV9ywawzx1w3aGFh4WMI/WRxcfHmzMzMr/Fj1sBak0Co+04mk/nwwoULf0GbBeYbN258gucbAHI9FbW4ymlwmE0dkZQ1KEHGmqfTXkZnMLWaZ3ycipsjm4gFFhf+2LFjH6FufRVwG8+cOXMg/vzy5ct/A7gNqBdTFYDaB3v6+vqs/7lgZrMYNbhXJ50/qtBvc0YVRPIczVhbcSFv3rz59x07dmxOArdt27YfP378+Hz8OWsQ351iDXLnsAZhogxw1A0XNopSccix6ZqL2nraFNFcGVo9GB48eDDU4osXL/y5uTn/7t27tpegNT+VSo3G2/f39/8EP+2mBJqYmMgjmg7Gn+NbOSWkZfhtCgDT+Lf9J3zbJgnIZFJaZKeMMl+LgDPFHNLwMoBqSBDWQyj3oTV5JhotIwSMHHww0USgIQ/vdCZU+/DHMFBxCYA2j4X2fAQtC+TRo0e2vHLlig/Z7L8wlVoyqY5PPGWyyepnXwvHNPDKJNM7dOjQL5Pqdu/e/bOkOnxz061bt/7N17CMme3bt3+PigFmnIoDPfeumCZ3kPU7NaOvbpYKpAZrxxJkDB4ilzUN7smEtgSzSTTLsbGxJK3R8ePHvzs0NLSDr/GfTUePHv09/wsRWKdbOn+1rCbGWvZycKY0GEYAsp0jEHCGbn/APkgJNDU1tSapbvPmzWuT6hC0InUA+hFFZyDhPxE1w/eQNYUyK/kj4GwFphKV7JbtXH7gOa0lgkMkHU6qWwlKqkPwyOl73/fZDdjf4wtG3oMHD8JrzE5KghanZFFwGrFbwygzSYquLyY6LsAnmh7G/URwlaYtGPviwKy4sCRCtsJTIqKEQJJWH9YLMlbVSH84Ctl7Nkn4gTVLPI+YSJyQVQwl1UHYXFIdZudl7TjdE7kwhBj379CSHDhNds5IMQEjyFnVDAy94126dOnbmCH/Z35+/gJM5OThw4fLxjdNVUI9g0usM0vMyRywCCHHtM8QMcver7rMwOPbyZMnx9atW/dfaDbvhBvds2fPp/jR9qR2lQZpIQSCD5PqoLkyk3VJNfsjYcyLVxuKJs0MNJBKP/ZipAEGSTM8PDwlwMJGcPS9e/d+TAlUTXPvSm72QBXkDO9VtIy4VjxDsQ0RUDzXiHO+eapAGHsmqc4EjVcKNgb/siUzUrDwmi9gXdaFeG2FYsAj4GTBBeONfYkbIeX6DAA/pyYQTK+iOcPPA5gkLywZpGAhACTy4TUvGlEsbpT5nArHxkVMXuL+EwLLp/QVEE9MGRzLg8TBlhhOWJsBEvlQESIzKe1VGqv0mBFuLyFa/g++tIWaTOhsnt/xjPwN+K275lLP0AMqzciJKgwFQpLE2mv2O764c+fOn+krINYQOQDwtzDY8QBOUUBCVTUnz+Oz8RS0N91M7WF1egHzPB46RFuLiitpLdDtk7IMVl5czUGztYfOnKOS8JqNCyYS3ak0ayrRUusOsoxtyy1btpxtVuRkwiob534BomSA1C9AIAlXuhBMQtk4qMQOFFhKBCdRk6fvmC/ZD/GaPXK6P1KT6Nq1a9MAtogoWeDNEKR/EQ1yNIdsgZK5bMu3Guk5XVMjJ5YqZvGP71MpMsoaZrhJQuW+ljyIVyHjElNuXGiG9h4+fPgvckBgjjpwCBdgVUEsNtROJnqmxK6pyF4BfO8z0yDiJUO3U9TnNintYqxsLzsZ9D7BUhZYFaRe8bKLRrOzs2sQqq+bBhB2hbZRcSFI9gg61SJs/YA5iox3AhD7BZvwg8emjoRF3d+57bA8lXZ3ZPNDgNVldyckU9oHCw/QsHlgIru2HhrEN+YR3n9LRW2FG4/qpIOccIisftUNICVokAFi3vWJWSah7eenTp2aUqBks8OebFDHqhoGTAeYyPkT5+AtDBLBoGaQGFL+f/Xq1Z+ibY43ONRJBn1cI64xAVd3iq9++XJQjUqr0y3T09P9COU/x3TpD5iu/IMZ1//kEvOyv6LuN1hwHeZNFbexYkGx+TkT1GdQtMZkq0pkaQhVnBapAzchUCoGAsuxk0VZuSd15kQOvulDb2r3tGGAkiiiSVLmWuFwmwWgTiXoQ20RMOqoYtiRTQVnKi+9x89QRo4mUgwIuRMSlQIG1bAAXI0a0ROldQoTHrVb6j+R9MmUjgiX1S1LkAZRrd+XJbllA3lP7+lrQl8AIVHIM+TGrWAAAAAASUVORK5CYII=",zS=Ge.section`
  width: 100%;
`,BS=Ge(qp)`
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 768px;
    padding-bottom: 120px;
    position: relative;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding-bottom: 150px;
  }
`,HS=Ge.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(11, 11, 11, 0.5);
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 30px;
  }
`,VS=Ge.div`
  font-family: 'Oddval', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #0b0b0b;
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;

  @media (min-width: 320px) and (max-width: 374px) {
    font-size: 20px;
    line-height: 1.5;
  }

  @media (min-width: 768px) {
    font-size: 45px;
    line-height: 1.11;
    letter-spacing: -0.02em;
    margin-bottom: 54px;
  }

  @media (min-width: 1440px) {
    font-size: 60px;
    line-height: 1.13;
    margin-bottom: 80px;
  }
`,GS=Ge.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (min-width: 320px) and (max-width: 374px) {
    margin: 0 auto;
    width: 288px;
    height: 288px;
  }

  @media (min-width: 375px) {
    width: 343px;
    height: 343px;
  }

  @media (min-width: 768px) {
    width: 704px;
    height: 580px;
  }

  @media (min-width: 1440px) {
    width: calc((100% - 30px) / 2);
  }
`,WS=Ge.h2`
  text-align: center;
  margin-bottom: 15px;
  font-family: 'Oddval', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 38px;
    line-height: 1.16;
  }

  @media (min-width: 1440px) {
    font-size: 48px;
    line-height: 1.08;
  }
`,XS=Ge.button`
  font-family: 'MacPaw Fixel Display', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #0b0b0b;
  border-radius: 30px;
  padding: 15px 20px;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  background: #ffffff;
  border: none;
  transition: all 300ms ease-in-out;

  &:hover,
  &:focus {
    background: #f77d07;
    color: #ffffff;
  }

  &:active {
    background: #e3e3e3;
    color: #898b90;
  }

  @media (min-width: 768px) {
    padding: 15px 26px;
    font-size: 16px;
    line-height: 1.5;
    display: block;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
  }
`,qS=Ge.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 60px;
  }

  @media (min-width: 1440px) {
    position: absolute;
    right: 120px;
    top: 0;
  }
`,kp=Ge.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #f77d07;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;
  padding: 8px;

  & svg {
    fill: #f77d07;
  }

  &.enabled {
    background: #f77d07;

    & svg {
      fill: #ffffff;
    }
  }

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;

    .icon-arrow {
      width: 24px;
      height: 24px;
    }
  }

  @media (min-width: 1440px) {
    &:hover {
      background: #f77d07;

      & svg {
        fill: #ffffff;
      }
    }

    &.enabled:hover {
      background: #ffffff;

      & svg {
        fill: #f77d07;
      }
    }
  }
`,YS=Ge(kp)`
  margin-left: 20px;
`,$S=Ge.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`,jS=Ge.div`
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  & .psv-navbar {
    background-color: transparent;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    cursor: url(${Bl}), default;

    @media (min-width: 768px) {
      margin-bottom: 40px;
    }
  }

  & .psv-canvas {
    cursor: url(${Bl}), default;
  }

  & .psv-button {
    width: 44px;
    height: 44px;
    color: #ffffff;
    background: transparent;
    transition: all 300ms ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      width: 52px;
      height: 52px;
    }
    @media (min-width: 1440px) {
      &:hover {
        transform: scale(1.3);
      }
    }
  }

  & .psv-button-svg {
    width: 20px;
    height: 20px;
    transform: scale(1.3);
    transition: all 300ms ease-in-out;

    @media (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }

  & .psv-zoom-range.psv-button {
    display: none;
  }

  .psv-zoom-button {
    display: flex !important;
  }

  .psv-move-button {
    display: flex !important;
  }
`,ZS=Ge.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 60px;
  height: 60px;
  stroke: #ffffff;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  transition: all 300ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    display: block;
    width: 20px;
    height: 20px;
  }

  @media (min-width: 768px) {
    & svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (min-width: 1440px) {
    &:hover {
      transform: scale(1.3);
    }
  }
`,KS=Ge.div`
  cursor: url(${Bl}), default;
  position: absolute;
  left: 20px;
  bottom: 20px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    left: 40px;
    bottom: 40px;

    gap: 16px;

    .icon-performance {
      width: 60px;
      height: 60px;
    }
  }
`,zp=oe.forwardRef(({image:i,onClose:t},e)=>{const n=oe.useRef(),[r,s]=oe.useState(!0),a=oe.useCallback(c=>{n.current&&!n.current.contains(c.target)&&t()},[t]);oe.useEffect(()=>(document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}),[a]);const o=wa({minWidth:1440}),l=c=>{c.stopPropagation(),s(!1)};return se.jsxs(jS,{ref:n,onClick:l,onTouchStart:l,children:[se.jsx(kS,{ref:e,src:i,hideNavbarButton:!o,height:"100%",width:"100%",defaultZoomLvl:10,navbar:o?["zoom","fullscreen"]:!1,loading:"lazy"}),!o&&r&&se.jsxs(KS,{onTouchStart:c=>{c.stopPropagation(),s(!1)},children:[se.jsx(es,{width:"40",height:"40",styles:"icon-performance",iconName:"arrows-top"}),se.jsx(es,{width:"40",height:"40",styles:"icon-performance",iconName:"arrows-bottom"})]}),se.jsx(ZS,{onClick:t,type:"button",children:se.jsx(es,{iconName:"icon-closeX"})})]})});zp.displayName="TourModal";const JS="/MistoHub/assets/event-space-mob-41a55e64.jpg",QS="/MistoHub/assets/cafe-mobile-b6cdf133.jpg",t1="/MistoHub/assets/city​-shop-mobile-2e474f43.jpg",e1="/MistoHub/assets/event-space-mob-2x-1e6f36d7.jpg",n1="/MistoHub/assets/cafe-mobile-2x-06dd787c.jpg",i1="/MistoHub/assets/city​-shop-mobile-2x-75ef80f6.jpg",r1="/MistoHub/assets/event-space-tablet-8a609974.jpg",s1="/MistoHub/assets/cafe-tablet-6ba268ec.jpg",a1="/MistoHub/assets/city​-shop-tablet-4a59570f.jpg",o1="/MistoHub/assets/event-space-tablet-2x-1582cc36.jpg",l1="/MistoHub/assets/cafe-tablet-2x-6ed044d4.jpg",c1="/MistoHub/assets/city-shop-tablet-2x-b48a8405.jpg",h1="/MistoHub/assets/event-space-desktop-af54e035.jpg",u1="/MistoHub/assets/cafe-desktop-9bcea93a.jpg",d1="/MistoHub/assets/city​-shop-desktop-51794ed1.jpg",f1="/MistoHub/assets/event-space-desktop-2x-4005c5bb.jpg",p1="/MistoHub/assets/cafe-desktop-2x-acc87eea.jpg",m1="/MistoHub/assets/city​-shop-desktop-2x-fc4e252b.jpg",v1="/MistoHub/assets/event-space-Viz-1035dfae.webp",g1="/MistoHub/assets/cafe-Viz-a4b239c2.webp",_1="/MistoHub/assets/city​-shop-Viz-d21c2e55.webp",rn=[{src:{mobile:JS,tablet:r1,desktop:h1},srcSet:{mobile:e1,tablet:o1,desktop:f1},title:"Івент-простір",tourImage:v1},{src:{mobile:QS,tablet:s1,desktop:u1},srcSet:{mobile:n1,tablet:l1,desktop:p1},title:"Кафе",tourImage:g1},{src:{mobile:t1,tablet:a1,desktop:d1},srcSet:{mobile:i1,tablet:c1,desktop:m1},title:"Містошоп",tourImage:_1}],B1=()=>{const i=wa({minWidth:1440}),t=wa({minWidth:768,maxWidth:1439}),e=wa({maxWidth:767}),[n,r]=oe.useState(0),[s,a]=oe.useState([!1,!1]),o=oe.useRef(),l=f=>{if(i)return rn[f].src.desktop;if(t)return rn[f].src.tablet;if(e)return rn[f].src.mobile},c=f=>{if(i)return rn[f].srcSet.desktop;if(t)return rn[f].srcSet.tablet;if(e)return rn[f].srcSet.mobile};oe.useEffect(()=>{const f=()=>{r(n)};return window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[n]);const h=()=>{!s.some(f=>f)&&n<rn.length-(i?2:1)&&r(n+1)},u=()=>{!s.some(f=>f)&&n>0&&r(n-1)},d=f=>{a(s.map((v,g)=>g===f?!v:!1))};return se.jsx(zS,{id:"design",children:se.jsxs(BS,{children:[se.jsx(HS,{children:"Візуалізація"}),se.jsx(VS,{children:"Як виглядатиме простір?"}),se.jsx($S,{children:rn.slice(n,n+(i?2:1)).map((f,v)=>se.jsxs(GS,{style:{backgroundImage:`url('${l((n+v)%rn.length)}')`,backgroundSize:"cover"},children:[se.jsx("img",{src:l((n+v)%rn.length),srcSet:c((n+v)%rn.length),alt:f.title,style:{display:"none"}}),s[v]?se.jsx(zp,{ref:o,image:f.tourImage,onClose:()=>d(v)}):se.jsxs("div",{children:[se.jsx(WS,{children:f.title}),se.jsx(XS,{onClick:()=>d(v),type:"button",children:"Віртуальний тур"})]})]},Yp()))}),se.jsxs(qS,{children:[se.jsx(kp,{type:"button",className:`${n>0?"enabled":""}`,onClick:u,title:"Попередній слайд",children:se.jsx(es,{width:"18",height:"14",styles:"icon-arrow",iconName:"icon-arrow-back"})}),se.jsx(YS,{type:"button",className:`${n<rn.length-(i?2:1)?"enabled":""}`,onClick:h,title:"Наступний слайд",children:se.jsx(es,{width:"18",height:"14",styles:"icon-arrow",iconName:"icon-arrow-next"})})]})]})})};export{B1 as default};
