import{u as g,j as n,e as c,h as W,r as b}from"./index-412694d2.js";import{M}from"./index-c013afc1.js";import{I as j,a as y,C as I}from"./HomePage-ab33723d.js";import{g as k}from"./semantic-fc1421d8.js";const L=g.div`
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
`,R=g(M)`
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
`,T="/MistoHub/assets/noname-a8edc818.jpg",G=({data:e,onClose:t,isOpen:i})=>{const{firstName:a,secondName:s,type:d,imageURL:o,facebook:r,instagram:l,question:u,answer:x}=e;return n.jsx(R,{onRequestClose:t,isOpen:i,style:{overlay:{zIndex:"2"}},onClose:t,shouldCloseOnOverlayClick:!0,contentLabel:"Image Modal",children:n.jsx(L,{children:n.jsxs("div",{className:"contentWrapper",children:[n.jsxs("div",{className:"top-wrapper",children:[n.jsxs("div",{className:"title-wrapper",children:[n.jsx("img",{className:"main-image",src:o||T,alt:`${a} ${s}`,loading:"lazy"}),n.jsx("div",{className:"svgWrapper",children:n.jsx("a",{href:r||l,target:"_blank",rel:"noopener noreferrer",children:r?n.jsx(j,{width:"28",height:"28",iconName:"icon-faceb",styles:"instaIcon"}):n.jsx(j,{width:"28",height:"28",iconName:"icon-instagram",styles:"instaIcon"})})})]}),n.jsxs("div",{className:"main-heading-wrapper",children:[n.jsx("h2",{className:"companyName",children:`${a} ${s}`}),n.jsx("p",{className:"text",children:d})]}),n.jsxs("div",{className:"closeWrapper",children:[n.jsx("button",{className:"closeWord",onClick:t,children:"Закрити"}),n.jsx("button",{className:"closeButton",onClick:t,children:n.jsx(j,{width:"12",height:"12",iconName:"close",styles:"close-icon"})})]})]}),n.jsx("p",{className:"textQuestion",children:u}),n.jsx("p",{className:"textAnswer",children:x})]})})})},v=({startTranslate:e,endTranslate:t})=>W`
  0% {
    transform: translateX(${e}%);
  }
  100% {
    transform: translateX(${t}%);
  }
`,Y=g.div`
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
`,B=g.div`
  max-width: 375px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,D=g.div`
  ${e=>{const t={startTranslate:0,endTranslate:e.$length===20?-(e.$length*e.$length-.3*e.$length):-(e.$length*e.$length+.3*e.$length)},i={startTranslate:e.$length===20?-(e.$length*e.$length-.3*e.$length):-(e.$length*e.$length+.3*e.$length),endTranslate:0},a=v(t),s=v(i),d={startTranslate:0,endTranslate:e.$length===20?-(e.$length*e.$length+2.2*e.$length):-(e.$length*e.$length+.2*e.$length)},o={startTranslate:e.$length===20?-(e.$length*e.$length+2.2*e.$length):-(e.$length*e.$length+.2*e.$length),endTranslate:0},r=v(d),l=v(o),u={startTranslate:0,endTranslate:e.$length===20?-(e.$length*e.$length-10.5*e.$length):-(e.$length*e.$length+1.2*e.$length)},x={startTranslate:e.$length===20?-(e.$length*e.$length-10.5*e.$length):-(e.$length*e.$length-8*e.$length),endTranslate:0},m=v(u),f=v(x);return c`
      &.group-0 {
        overflow: visible;
        animation: ${c`
          ${a} 50s linear infinite
        `};
      }
      &.group-1 {
        overflow: visible;
        animation: ${c`
          ${s} 50s linear infinite
        `};
      }
      &.group-2 {
        overflow: visible;
        animation: ${c`
          ${a} 50s linear infinite
        `};
      }
      &.group-3 {
        overflow: visible;
        animation: ${c`
          ${s} 50s linear infinite
        `};
      }
      &.group-4 {
        overflow: visible;
        animation: ${c`
          ${a} 50s linear infinite
        `};
      }
      &.group-5 {
        overflow: visible;
        animation: ${c`
          ${s} 50s linear infinite
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
          animation: ${c`
            ${r} 50s linear infinite
          `};
        }
        &.group-1 {
          overflow: visible;
          animation: ${c`
            ${l} 50s linear infinite
          `};
        }
        &.group-2 {
          overflow: visible;
          animation: ${c`
            ${r} 50s linear infinite
          `};
        }
        &.group-3 {
          overflow: visible;
          animation: ${c`
            ${l} 50s linear infinite
          `};
        }
        &.group-4 {
          overflow: visible;
          animation: ${c`
            ${r} 50s linear infinite
          `};
        }
        &.group-5 {
          overflow: visible;
          animation: ${c`
            ${l} 50s linear infinite
          `};
        }
      }
      @media screen and (min-width: 1440px) {
        &.group-0 {
          overflow: visible;
          animation: ${c`
            ${m} 80s linear infinite
          `};
        }
        &.group-1 {
          overflow: visible;
          animation: ${c`
            ${f} 80s linear infinite
          `};
        }
        &.group-2 {
          overflow: visible;
          animation: ${c`
            ${m} 80s linear infinite
          `};
        }
        &.group-3 {
          overflow: visible;
          animation: ${c`
            ${f} 80s linear infinite
          `};
        }
        &.group-4 {
          overflow: visible;
          animation: ${c`
            ${m} 80s linear infinite
          `};
        }
        &.group-5 {
          overflow: visible;
          animation: ${c`
            ${f} 80s linear infinite
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
`,U=(e,t,i,a,s,d)=>{const o=e%2===0,r=e===(d==null?void 0:d.length)-1;let l=!1;return o?l=e===0||r?t.left<=i.left+(a?40:s?80:200)||t.left>=i.right-(a?80:s?180:400):t.left<=i.left+(a?-30:s?-40:10)||t.left>=i.right-(a?50:s?90:170):l=r?t.right<=i.left+(a?80:s?180:400)||t.right>=i.right-(a?40:s?80:200):t.right<=i.left+(a?50:s?90:170)||t.right>=i.right-(a?-30:s?-40:10),l},X=e=>{const t=[];for(let i=0;i<e.length;i+=20){let a=e.slice(i,i+20);if(a.length<20&&i+20>=e.length){const s=20-a.length;a=[...a,...Array.from({length:s},(d,o)=>a[o%a.length])]}t.push(a)}return t},q=e=>[(e.firstName||"").trim(),(e.secondName||"").trim()].join(" "),P=(e,t)=>{const i=new URLSearchParams;return i.set("w","360"),i.set("h","280"),i.set("fit","crop"),i.set("auto","format"),t?(i.set("crop","focalpoint"),i.set("fp-x",String(t.x)),i.set("fp-y",String(t.y))):i.set("crop","center"),`${e}?${i.toString()}`},Q=({people:e})=>{const[t,i]=b.useState(null),[a,s]=b.useState(null),[d,o]=b.useState(!1),r=y({maxWidth:767}),l=y({maxWidth:1440}),u={background:`rgb(212,213,209) center / contain no-repeat url(${T})`};b.useEffect(()=>{(async()=>{try{const h=X(e);i(h)}catch(h){console.error("Error fetching people data:",h)}})()},[e]);const x=b.useMemo(()=>p=>{const h=document.getElementById("investors-anim"),N=document.getElementById(`container-${p}`).getElementsByClassName("item-list");for(const $ of N){const O=$.getBoundingClientRect(),C=h.getBoundingClientRect();U(p,O,C,r,l,t)?($.classList.add("on-blur"),$.disabled=!0):($.classList.remove("on-blur"),$.disabled=!1)}},[r,l,t]);b.useEffect(()=>{if(!t)return;const p=setInterval(()=>{for(let h=0;h<t.length;h++)x(h)},50);return()=>clearInterval(p)},[t,x]);const m=p=>{s(p),o(!0)},f=()=>{s(null),o(!1)};return n.jsxs(Y,{children:[n.jsx(B,{id:"investors-anim",children:t==null?void 0:t.map((p,h)=>n.jsx(D,{id:`container-${h}`,$length:p.length,className:`group-${h} ${h%2===0?"odd-group":"even-group"}`,children:n.jsx("ul",{children:p.map((w,N)=>n.jsx("li",{children:n.jsx("button",{"data-group_id":h,className:"item-list",type:"button",onClick:()=>m(w),children:n.jsx("img",{alt:"",loading:"lazy",fetchpriority:"low",title:q(w),src:w.imageURL?P(w.imageURL,w.imageFocalPoint):null,style:u})})},N))})},`group-${h}`))}),a&&n.jsx(G,{data:a,onClose:f,isOpen:d})]})},S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAACkCAAAAAA7nASIAAACrklEQVR42u3cu26kMBSA4bz/S6GVCwoKiikopnBB4YLCBQWFC5axxzeGTBJlR3sY/acJHIHCp+O7onys7xsf2LBhw4YNGzZs2LBhw4YNGzZs2LBhw4YNGzZsb2378yRe/nm/+t3YsGETZ5M1AGLDhg0bNmzYsGHDhg0bNmzYsGF7ke28gQ0bNmzYsGHDhg2bYJsdtR7n47R9SM9Ga22dLJttttD7rNOq8dHqw7TSFcO0Id0Mi3jbfCfcosufO7dFOpfU9TmtJuG2krZ9rnuedl2ZbibRNucN7Wjt1V/193So2qDNtS3Sq6+aulo7+rRaJNsunlDUxPhr7cW+Kbohp41voaGIPn0RbLNlUWYPStVUsZd1CdGWtfKVm+XahqrXXOLdWD043e5S2YY0YFZ38my+PuvD1/pulUf+Xhub7Gm+c6nMIm1z2STXdfHdabuIP3ehYgFzW20WqTazSzTh4+dPhokduS6jNJveJbrQFo/XL/XAE98ez2LrQyWK53QM+4lNn9eWliD6LWzuRzaxbXJ6Mpb0D7ZzjSW7OcCVc0CYuewt4mu7OaAXPQfs5u4pzt31zOXia7tCNdXLwtdcw/GaK82C51pz2bIL5bXyUm7awn5Hp4XJUqYFr5VDnxmK7ajJFQybGXdJY0kYGe/pbjdqSrDl6BNo25tOQ1N87OLTajDmqvI4ee+It71pSEvbm9a20GvyyYgrO1N6sI22+qjhH0wAL7WtRh3QKlznxtSUyyMiNa/Cbesy3O9bUx0SxROtq7vNAvqLoz2pZ6/Oboth81CFZdrSk/vukaxM2/8NbNiwYcOGDRs2bNhea+PvzLFhw4YNGzZs2LBhw4YNGzZs2LBhO4GN/xuKDRu2X9rOG9iwYcOGDRs2bNiwYcOGDRs2bNiwYcOGDRu2EH8B4ajrnFKix8YAAAAASUVORK5CYII=",Z=({isOpen:e,data:t,onClose:i})=>{const{name:a,logoURL:s,link:d,question:o,answer:r}=t;return e?n.jsx(R,{onRequestClose:i,isOpen:e,style:{overlay:{zIndex:"2"}},onClose:i,shouldCloseOnOverlayClick:!0,contentLabel:"Image Modal",children:n.jsx(L,{children:n.jsxs("div",{className:"contentWrapper",children:[n.jsxs("div",{className:"top-wrapper",children:[n.jsxs("div",{className:"title-wrapper",children:[n.jsx("img",{className:"main-image",src:s||S,alt:a,loading:"lazy"}),d&&n.jsx("div",{className:"svgWrapper",children:n.jsx("a",{href:d,target:"_blank",rel:"noopener noreferrer",children:n.jsx(j,{iconName:"icon-instagram",styles:"instaIcon"})})})]}),n.jsxs("div",{className:"main-heading-wrapper",children:[n.jsx("h2",{className:"companyName",children:a}),n.jsx("p",{className:"text",children:"компанія"})]}),n.jsxs("div",{className:"closeWrapper",children:[n.jsx("button",{className:"closeWord",onClick:i,children:"Закрити"}),n.jsx("button",{className:"closeButton",onClick:i,children:n.jsx(j,{iconName:"close",styles:"close-icon",width:12,height:12})})]})]}),n.jsx("p",{className:"textQuestion",children:o}),n.jsx("p",{className:"textAnswer",children:r})]})})}):null},H=({start:e,end:t})=>W`
  0% {
    transform: translateX(${e});
  }
  100% {
    transform: translateX(${t}px);
  }
`,K=g.div`
  margin-bottom: 60px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-bottom: 120px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 150px;
  }
`,J=g.ul`
  ${e=>{if(!e.$anim)return;const t=H(e.$anim);return c`
      animation: ${t} ${e.$anim.time}s linear infinite;
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
`,_=(e,t,i)=>{if(!e)return;const a=e*(t||i?212:92),s=t?1440:i?768:375,d=a*2-s,o=t?34.2:i?68.2:29.6;return{start:0,end:-d,time:d/o}};function E(e,t,i){const a=t/e;return a<=i?{width:t,height:a}:{width:e*i,height:i}}function F(e,t,i,a){const s=new URLSearchParams;s.set("w",String(t.width)),s.set("h",String(t.height)),s.set("auto","format");const d=t.width/t.height,o=e.match(/-(\d+)x(\d+)\./);if(!o)return e;const r=parseInt(o[1],10),l=parseInt(o[2],10);let u=r,x=l;if(i&&(s.set("rect",[~~(i.left*r),~~(i.top*l),~~((1-i.right-i.left)*r),~~((1-i.bottom-i.top)*l)].join(",")),u=~~((1-i.right-i.left)*r),x=~~((1-i.bottom-i.top)*l)),a){const m=~~(a.width*r),f=~~(a.height*l),p=E(d,u,x);p.width<m||p.height<f?(s.set("fit","fill"),s.set("bg","00ffffff"),s.set("rect",[~~(a.x*r-m/2),~~(a.y*l-f/2),m,f].join(","))):(s.set("fit","crop"),s.set("crop","focalpoint"),s.set("fp-x",String(a.x)),s.set("fp-y",String(a.y)))}return`${e}?${s.toString()}`}const V=({companies:e})=>{const[t,i]=b.useState(null),a=y({minWidth:1440}),s=y({minWidth:768}),d=r=>{i(r)},o=()=>{i(null)};if(e)return n.jsx(K,{children:Array.isArray(e)&&n.jsxs(J,{$anim:_(e.length,a,s),children:[Array.from([...e,...e]).map((r,l)=>n.jsx("li",{children:n.jsx("img",{loading:"lazy",fetchpriority:"low",src:r.logoURL?F(r.logoURL,{width:360,height:280},r.logoCrop,r.logoFocalScope):S,alt:`Company ${r.id}`,title:r.name,onClick:()=>d(r)})},l)),t&&n.jsx(Z,{isOpen:t!==null,data:t,onClose:o})]})})},z=g(I)`
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
`,ee=g(I)`
  padding: 0;
`,te=g.p`
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
`,ie=g.h2`
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
`,A=g.p`
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
`,le=({people:e,companies:t})=>{const[i,a]=b.useState(null),s=()=>{a(null)};return n.jsxs("section",{id:"investors",children:[n.jsxs(z,{children:[n.jsx(te,{children:"Імпакт-інвестори МІСТОХАБ"}),n.jsx(ie,{children:"З нами вже"}),(e==null?void 0:e.length)>0&&n.jsxs(A,{children:[e.length," ",k(e.length,"p")]})]}),n.jsxs(ee,{children:[e&&n.jsx(Q,{people:e}),n.jsx(z,{children:(t==null?void 0:t.length)>0&&n.jsxs(A,{children:[t.length," ",k(t.length,"k")]})}),t&&n.jsx(V,{companies:t})]}),i&&n.jsx(G,{data:i,onClose:s})]})};export{le as default};
