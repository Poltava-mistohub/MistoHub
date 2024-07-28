import{m as ge,d as se,r as M}from"./index-4df93286.js";function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ee.apply(this,arguments)}var Oe=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Te=ge(function(e){return Oe.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Re(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function $e(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var _e=function(){function e(t){var n=this;this._insertTag=function(a){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,i),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag($e(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Re(a);try{i.insertRule(n,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),S="-ms-",Y="-moz-",f="-webkit-",ye="comm",ne="rule",ae="decl",Me="@import",be="@keyframes",Ie="@layer",Ne=Math.abs,K=String.fromCharCode,Fe=Object.assign;function Le(e,r){return w(e,0)^45?(((r<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}function ve(e){return e.trim()}function ze(e,r){return(e=r.exec(e))?e[0]:e}function u(e,r,t){return e.replace(r,t)}function re(e,r){return e.indexOf(r)}function w(e,r){return e.charCodeAt(r)|0}function H(e,r,t){return e.slice(r,t)}function R(e){return e.length}function ie(e){return e.length}function G(e,r){return r.push(e),e}function He(e,r){return e.map(r).join("")}var Z=1,F=1,xe=0,C=0,v=0,L="";function J(e,r,t,n,a,i,s){return{value:e,root:r,parent:t,type:n,props:a,children:i,line:Z,column:F,length:s,return:""}}function z(e,r){return Fe(J("",null,null,"",null,null,0),e,{length:-e.length},r)}function We(){return v}function De(){return v=C>0?w(L,--C):0,F--,v===10&&(F=1,Z--),v}function E(){return v=C<xe?w(L,C++):0,F++,v===10&&(F=1,Z++),v}function _(){return w(L,C)}function V(){return C}function U(e,r){return H(L,e,r)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function we(e){return Z=F=1,xe=R(L=e),C=0,[]}function ke(e){return L="",e}function B(e){return ve(U(C-1,te(e===91?e+2:e===40?e+1:e)))}function Ue(e){for(;(v=_())&&v<33;)E();return W(e)>2||W(v)>3?"":" "}function qe(e,r){for(;--r&&E()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return U(e,V()+(r<6&&_()==32&&E()==32))}function te(e){for(;E();)switch(v){case e:return C;case 34:case 39:e!==34&&e!==39&&te(v);break;case 40:e===41&&te(e);break;case 92:E();break}return C}function je(e,r){for(;E()&&e+v!==47+10;)if(e+v===42+42&&_()===47)break;return"/*"+U(r,C-1)+"*"+K(e===47?e:E())}function Ge(e){for(;!W(_());)E();return U(e,C)}function Ve(e){return ke(X("",null,null,null,[""],e=we(e),0,[0],e))}function X(e,r,t,n,a,i,s,o,m){for(var x=0,d=0,h=s,T=0,P=0,p=0,c=1,g=1,y=1,b=0,k="",I=a,O=i,A=n,l=k;g;)switch(p=b,b=E()){case 40:if(p!=108&&w(l,h-1)==58){re(l+=u(B(b),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:l+=B(b);break;case 9:case 10:case 13:case 32:l+=Ue(p);break;case 92:l+=qe(V()-1,7);continue;case 47:switch(_()){case 42:case 47:G(Be(je(E(),V()),r,t),m);break;default:l+="/"}break;case 123*c:o[x++]=R(l)*y;case 125*c:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+d:y==-1&&(l=u(l,/\f/g,"")),P>0&&R(l)-h&&G(P>32?ce(l+";",n,t,h-1):ce(u(l," ","")+";",n,t,h-2),m);break;case 59:l+=";";default:if(G(A=oe(l,r,t,x,d,a,o,k,I=[],O=[],h),i),b===123)if(d===0)X(l,r,A,A,I,i,h,o,O);else switch(T===99&&w(l,3)===110?100:T){case 100:case 108:case 109:case 115:X(e,A,A,n&&G(oe(e,A,A,0,0,a,o,k,a,I=[],h),O),a,O,h,o,n?I:O);break;default:X(l,A,A,A,[""],O,0,o,O)}}x=d=P=0,c=y=1,k=l="",h=s;break;case 58:h=1+R(l),P=p;default:if(c<1){if(b==123)--c;else if(b==125&&c++==0&&De()==125)continue}switch(l+=K(b),b*c){case 38:y=d>0?1:(l+="\f",-1);break;case 44:o[x++]=(R(l)-1)*y,y=1;break;case 64:_()===45&&(l+=B(E())),T=_(),d=h=R(k=l+=Ge(V())),b++;break;case 45:p===45&&R(l)==2&&(c=0)}}return i}function oe(e,r,t,n,a,i,s,o,m,x,d){for(var h=a-1,T=a===0?i:[""],P=ie(T),p=0,c=0,g=0;p<n;++p)for(var y=0,b=H(e,h+1,h=Ne(c=s[p])),k=e;y<P;++y)(k=ve(c>0?T[y]+" "+b:u(b,/&\f/g,T[y])))&&(m[g++]=k);return J(e,r,t,a===0?ne:o,m,x,d)}function Be(e,r,t){return J(e,r,t,ye,K(We()),H(e,2,-2),0)}function ce(e,r,t,n){return J(e,r,t,ae,H(e,0,n),H(e,n+1,-1),n)}function N(e,r){for(var t="",n=ie(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function Xe(e,r,t,n){switch(e.type){case Ie:if(e.children.length)break;case Me:case ae:return e.return=e.return||e.value;case ye:return"";case be:return e.return=e.value+"{"+N(e.children,n)+"}";case ne:e.value=e.props.join(",")}return R(t=N(e.children,n))?e.return=e.value+"{"+t+"}":""}function Ye(e){var r=ie(e);return function(t,n,a,i){for(var s="",o=0;o<r;o++)s+=e[o](t,n,a,i)||"";return s}}function Ke(e){return function(r){r.root||(r=r.return)&&e(r)}}var Ze=function(r,t,n){for(var a=0,i=0;a=i,i=_(),a===38&&i===12&&(t[n]=1),!W(i);)E();return U(r,C)},Je=function(r,t){var n=-1,a=44;do switch(W(a)){case 0:a===38&&_()===12&&(t[n]=1),r[n]+=Ze(C-1,t,n);break;case 2:r[n]+=B(a);break;case 4:if(a===44){r[++n]=_()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=K(a)}while(a=E());return r},Qe=function(r,t){return ke(Je(we(r),t))},fe=new WeakMap,er=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!fe.get(n))&&!a){fe.set(r,!0);for(var i=[],s=Qe(t,i),o=n.props,m=0,x=0;m<s.length;m++)for(var d=0;d<o.length;d++,x++)r.props[x]=i[m]?s[m].replace(/&\f/g,o[d]):o[d]+" "+s[m]}}},rr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Se(e,r){switch(Le(e,r)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+Y+e+S+e+e;case 6828:case 4268:return f+e+S+e+e;case 6165:return f+e+S+"flex-"+e+e;case 5187:return f+e+u(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+S+"flex-$1$2")+e;case 5443:return f+e+S+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return f+e+S+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return f+e+S+u(e,"shrink","negative")+e;case 5292:return f+e+S+u(e,"basis","preferred-size")+e;case 6060:return f+"box-"+u(e,"-grow","")+f+e+S+u(e,"grow","positive")+e;case 4554:return f+u(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-r>6)switch(w(e,r+1)){case 109:if(w(e,r+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+Y+(w(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~re(e,"stretch")?Se(u(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(w(e,r+1)!==115)break;case 6444:switch(w(e,R(e)-3-(~re(e,"!important")&&10))){case 107:return u(e,":",":"+f)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+f+(w(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+S+"$2box$3")+e}break;case 5936:switch(w(e,r+11)){case 114:return f+e+S+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+S+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+S+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return f+e+S+e+e}return e}var tr=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case ae:r.return=Se(r.value,r.length);break;case be:return N([z(r,{value:u(r.value,"@","@"+f)})],a);case ne:if(r.length)return He(r.props,function(i){switch(ze(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return N([z(r,{props:[u(i,/:(read-\w+)/,":"+Y+"$1")]})],a);case"::placeholder":return N([z(r,{props:[u(i,/:(plac\w+)/,":"+f+"input-$1")]}),z(r,{props:[u(i,/:(plac\w+)/,":"+Y+"$1")]}),z(r,{props:[u(i,/:(plac\w+)/,S+"input-$1")]})],a)}return""})}},nr=[tr],ar=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(c){var g=c.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(c),c.setAttribute("data-s",""))})}var a=r.stylisPlugins||nr,i={},s,o=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(c){for(var g=c.getAttribute("data-emotion").split(" "),y=1;y<g.length;y++)i[g[y]]=!0;o.push(c)});var m,x=[er,rr];{var d,h=[Xe,Ke(function(c){d.insert(c)})],T=Ye(x.concat(a,h)),P=function(g){return N(Ve(g),T)};m=function(g,y,b,k){d=b,P(g?g+"{"+y.styles+"}":y.styles),k&&(p.inserted[y.name]=!0)}}var p={key:t,sheet:new _e({key:t,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:i,registered:{},insert:m};return p.sheet.hydrate(o),p},ir=!0;function sr(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var Ce=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||ir===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},or=function(r,t,n){Ce(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var i=t;do r.insert(t===i?"."+a:"",i,r.sheet,!0),i=i.next;while(i!==void 0)}};function cr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var fr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ur=/[A-Z]|^ms/g,lr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Pe=function(r){return r.charCodeAt(1)===45},ue=function(r){return r!=null&&typeof r!="boolean"},Q=ge(function(e){return Pe(e)?e:e.replace(ur,"-$&").toLowerCase()}),le=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(lr,function(n,a,i){return $={name:a,styles:i,next:$},a})}return fr[r]!==1&&!Pe(r)&&typeof t=="number"&&t!==0?t+"px":t};function D(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return $={name:t.name,styles:t.styles,next:$},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)$={name:n.name,styles:n.styles,next:$},n=n.next;var a=t.styles+";";return a}return dr(e,r,t)}case"function":{if(e!==void 0){var i=$,s=t(e);return $=i,D(e,r,s)}break}}if(r==null)return t;var o=r[t];return o!==void 0?o:t}function dr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=D(e,r,t[a])+";";else for(var i in t){var s=t[i];if(typeof s!="object")r!=null&&r[s]!==void 0?n+=i+"{"+r[s]+"}":ue(s)&&(n+=Q(i)+":"+le(i,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var o=0;o<s.length;o++)ue(s[o])&&(n+=Q(i)+":"+le(i,s[o])+";");else{var m=D(e,r,s);switch(i){case"animation":case"animationName":{n+=Q(i)+":"+m+";";break}default:n+=i+"{"+m+"}"}}}return n}var de=/label:\s*([^\s;\n{]+)\s*(;|$)/g,$,hr=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,i="";$=void 0;var s=r[0];s==null||s.raw===void 0?(a=!1,i+=D(n,t,s)):i+=s[0];for(var o=1;o<r.length;o++)i+=D(n,t,r[o]),a&&(i+=s[o]);de.lastIndex=0;for(var m="",x;(x=de.exec(i))!==null;)m+="-"+x[1];var d=cr(i)+m;return{name:d,styles:i,next:$}},pr=function(r){return r()},mr=se["useInsertionEffect"]?se["useInsertionEffect"]:!1,gr=mr||pr,Ae=M.createContext(typeof HTMLElement<"u"?ar({key:"css"}):null);Ae.Provider;var yr=function(r){return M.forwardRef(function(t,n){var a=M.useContext(Ae);return r(t,a,n)})},br=M.createContext({}),vr=Te,xr=function(r){return r!=="theme"},he=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?vr:xr},pe=function(r,t,n){var a;if(t){var i=t.shouldForwardProp;a=r.__emotion_forwardProp&&i?function(s){return r.__emotion_forwardProp(s)&&i(s)}:i}return typeof a!="function"&&n&&(a=r.__emotion_forwardProp),a},wr=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return Ce(t,n,a),gr(function(){return or(t,n,a)}),null},kr=function e(r,t){var n=r.__emotion_real===r,a=n&&r.__emotion_base||r,i,s;t!==void 0&&(i=t.label,s=t.target);var o=pe(r,t,n),m=o||he(a),x=!m("as");return function(){var d=arguments,h=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(i!==void 0&&h.push("label:"+i+";"),d[0]==null||d[0].raw===void 0)h.push.apply(h,d);else{h.push(d[0][0]);for(var T=d.length,P=1;P<T;P++)h.push(d[P],d[0][P])}var p=yr(function(c,g,y){var b=x&&c.as||a,k="",I=[],O=c;if(c.theme==null){O={};for(var A in c)O[A]=c[A];O.theme=M.useContext(br)}typeof c.className=="string"?k=sr(g.registered,I,c.className):c.className!=null&&(k=c.className+" ");var l=hr(h.concat(I),g.registered,O);k+=g.key+"-"+l.name,s!==void 0&&(k+=" "+s);var Ee=x&&o===void 0?he(b):m,q={};for(var j in c)x&&j==="as"||Ee(j)&&(q[j]=c[j]);return q.className=k,q.ref=y,M.createElement(M.Fragment,null,M.createElement(wr,{cache:g,serialized:l,isStringTag:typeof b=="string"}),M.createElement(b,q))});return p.displayName=i!==void 0?i:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",p.defaultProps=r.defaultProps,p.__emotion_real=p,p.__emotion_base=a,p.__emotion_styles=h,p.__emotion_forwardProp=o,Object.defineProperty(p,"toString",{value:function(){return"."+s}}),p.withComponent=function(c,g){return e(c,ee({},t,g,{shouldForwardProp:pe(p,g,!0)})).apply(void 0,h)},p}},Sr=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],me=kr.bind();Sr.forEach(function(e){me[e]=me(e)});export{me as n,hr as s};
