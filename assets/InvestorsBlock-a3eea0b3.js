import{u as j,j as t,e as r,h as A,r as p}from"./index-66592a1d.js";import{M as B}from"./index-bf4645ca.js";import{I as w,a as y}from"./HomePage-ac5aa16a.js";import{d as W,C as _,a as O,m as U,g as G,T as N,I as P,M as D,S as T,P as Q}from"./InvestorsBlock.styled-ecf5027a.js";const C=j.div`
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
`,L=j(B)`
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
`,M="/MistoHub/assets/noname-a8edc818.jpg",R=({data:e,onClose:i,isOpen:n})=>{const{firstName:a,secondName:s,type:o,imageURL:d,facebook:l,instagram:g,question:u,answer:x}=e;return t.jsx(L,{onRequestClose:i,isOpen:n,style:{overlay:{zIndex:"2"}},onClose:i,shouldCloseOnOverlayClick:!0,contentLabel:"Image Modal",children:t.jsx(C,{children:t.jsxs("div",{className:"contentWrapper",children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsxs("div",{className:"title-wrapper",children:[t.jsx("img",{className:"main-image",src:d||M,alt:`${a} ${s}`,loading:"lazy"}),t.jsx("div",{className:"svgWrapper",children:t.jsx("a",{href:l||g,target:"_blank",rel:"noopener noreferrer",children:l?t.jsx(w,{width:"28",height:"28",iconName:"icon-faceb",styles:"instaIcon"}):t.jsx(w,{width:"28",height:"28",iconName:"icon-instagram",styles:"instaIcon"})})})]}),t.jsxs("div",{className:"main-heading-wrapper",children:[t.jsx("h2",{className:"companyName",children:`${a} ${s}`}),t.jsx("p",{className:"text",children:o})]}),t.jsxs("div",{className:"closeWrapper",children:[t.jsx("button",{className:"closeWord",onClick:i,children:"Закрити"}),t.jsx("button",{className:"closeButton",onClick:i,children:t.jsx(w,{width:"12",height:"12",iconName:"close",styles:"close-icon"})})]})]}),t.jsx("p",{className:"textQuestion",children:u}),t.jsx("p",{className:"textAnswer",children:x})]})})})},f=({startTranslate:e,endTranslate:i})=>A`
  0% {
    transform: translateX(${e}%);
  }
  100% {
    transform: translateX(${i}%);
  }
`,q=j.div`
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
`,E=j.div`
  max-width: 375px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,F=j.div`
  ${e=>{const i={startTranslate:0,endTranslate:e.$length===20?-(e.$length*e.$length-.3*e.$length):-(e.$length*e.$length+.3*e.$length)},n={startTranslate:e.$length===20?-(e.$length*e.$length-.3*e.$length):-(e.$length*e.$length+.3*e.$length),endTranslate:0},a=f(i),s=f(n),o={startTranslate:0,endTranslate:e.$length===20?-(e.$length*e.$length+2.2*e.$length):-(e.$length*e.$length+.2*e.$length)},d={startTranslate:e.$length===20?-(e.$length*e.$length+2.2*e.$length):-(e.$length*e.$length+.2*e.$length),endTranslate:0},l=f(o),g=f(d),u={startTranslate:0,endTranslate:e.$length===20?-(e.$length*e.$length-10.5*e.$length):-(e.$length*e.$length+1.2*e.$length)},x={startTranslate:e.$length===20?-(e.$length*e.$length-10.5*e.$length):-(e.$length*e.$length-8*e.$length),endTranslate:0},v=f(u),b=f(x);return r`
      &.group-0 {
        overflow: visible;
        animation: ${r`
          ${a} 50s linear infinite
        `};
      }
      &.group-1 {
        overflow: visible;
        animation: ${r`
          ${s} 50s linear infinite
        `};
      }
      &.group-2 {
        overflow: visible;
        animation: ${r`
          ${a} 50s linear infinite
        `};
      }
      &.group-3 {
        overflow: visible;
        animation: ${r`
          ${s} 50s linear infinite
        `};
      }
      &.group-4 {
        overflow: visible;
        animation: ${r`
          ${a} 50s linear infinite
        `};
      }
      &.group-5 {
        overflow: visible;
        animation: ${r`
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
          animation: ${r`
            ${l} 50s linear infinite
          `};
        }
        &.group-1 {
          overflow: visible;
          animation: ${r`
            ${g} 50s linear infinite
          `};
        }
        &.group-2 {
          overflow: visible;
          animation: ${r`
            ${l} 50s linear infinite
          `};
        }
        &.group-3 {
          overflow: visible;
          animation: ${r`
            ${g} 50s linear infinite
          `};
        }
        &.group-4 {
          overflow: visible;
          animation: ${r`
            ${l} 50s linear infinite
          `};
        }
        &.group-5 {
          overflow: visible;
          animation: ${r`
            ${g} 50s linear infinite
          `};
        }
      }
      @media screen and (min-width: 1440px) {
        &.group-0 {
          overflow: visible;
          animation: ${r`
            ${v} 80s linear infinite
          `};
        }
        &.group-1 {
          overflow: visible;
          animation: ${r`
            ${b} 80s linear infinite
          `};
        }
        &.group-2 {
          overflow: visible;
          animation: ${r`
            ${v} 80s linear infinite
          `};
        }
        &.group-3 {
          overflow: visible;
          animation: ${r`
            ${b} 80s linear infinite
          `};
        }
        &.group-4 {
          overflow: visible;
          animation: ${r`
            ${v} 80s linear infinite
          `};
        }
        &.group-5 {
          overflow: visible;
          animation: ${r`
            ${b} 80s linear infinite
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
`,H=(e,i,n,a,s,o)=>{const d=e%2===0,l=e===(o==null?void 0:o.length)-1;let g=!1;return d?g=e===0||l?i.left<=n.left+(a?40:s?80:200)||i.left>=n.right-(a?80:s?180:400):i.left<=n.left+(a?-30:s?-40:10)||i.left>=n.right-(a?50:s?90:170):g=l?i.right<=n.left+(a?80:s?180:400)||i.right>=n.right-(a?40:s?80:200):i.right<=n.left+(a?50:s?90:170)||i.right>=n.right-(a?-30:s?-40:10),g},X=e=>{const i=[];for(let n=0;n<e.length;n+=20){let a=e.slice(n,n+20);if(a.length<20&&n+20>=e.length){const s=20-a.length;a=[...a,...Array.from({length:s},(o,d)=>a[d%a.length])]}i.push(a)}return i},K=e=>[(e.firstName||"").trim(),(e.secondName||"").trim()].join(" "),Z=(e,i)=>{const n=new URLSearchParams;return n.set("w","360"),n.set("h","280"),n.set("fit","crop"),n.set("auto","format"),i?(n.set("crop","focalpoint"),n.set("fp-x",String(i.x)),n.set("fp-y",String(i.y))):n.set("crop","center"),`${e}?${n.toString()}`},J=({people:e})=>{const[i,n]=p.useState(null),[a,s]=p.useState(null),[o,d]=p.useState(!1),l=y({maxWidth:767}),g=y({maxWidth:1440}),u={background:`rgb(212,213,209) center / contain no-repeat url(${M})`};p.useEffect(()=>{(async()=>{try{const c=X(e);n(c)}catch(c){console.error("Error fetching people data:",c)}})()},[e]);const x=p.useMemo(()=>h=>{const c=document.getElementById("investors-anim"),k=document.getElementById(`container-${h}`).getElementsByClassName("item-list");for(const $ of k){const z=$.getBoundingClientRect(),S=c.getBoundingClientRect();H(h,z,S,l,g,i)?($.classList.add("on-blur"),$.disabled=!0):($.classList.remove("on-blur"),$.disabled=!1)}},[l,g,i]);p.useEffect(()=>{if(!i)return;const h=setInterval(()=>{for(let c=0;c<i.length;c++)x(c)},50);return()=>clearInterval(h)},[i,x]);const v=h=>{s(h),d(!0)},b=()=>{s(null),d(!1)};return t.jsxs(q,{children:[t.jsx(E,{id:"investors-anim",children:i==null?void 0:i.map((h,c)=>t.jsx(F,{id:`container-${c}`,$length:h.length,className:`group-${c} ${c%2===0?"odd-group":"even-group"}`,children:t.jsx("ul",{children:h.map((m,k)=>t.jsx("li",{children:t.jsx("button",{"data-group_id":c,className:"item-list",type:"button",onClick:()=>v(m),children:t.jsx("img",{alt:"",loading:"lazy",fetchpriority:"low",title:K(m),src:m.imageURL?Z(m.imageURL,m.imageFocalPoint):null,style:u})})},k))})},`group-${c}`))}),a&&t.jsx(R,{data:a,onClose:b,isOpen:o})]})},V=({isOpen:e,data:i,onClose:n})=>{const{name:a,logoURL:s,link:o,question:d,answer:l}=i;return e?t.jsx(L,{onRequestClose:n,isOpen:e,style:{overlay:{zIndex:"2"}},onClose:n,shouldCloseOnOverlayClick:!0,contentLabel:"Image Modal",children:t.jsx(C,{children:t.jsxs("div",{className:"contentWrapper",children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsxs("div",{className:"title-wrapper",children:[t.jsx("img",{className:"main-image",src:s||W,alt:a,loading:"lazy"}),o&&t.jsx("div",{className:"svgWrapper",children:t.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:t.jsx(w,{iconName:"icon-instagram",styles:"instaIcon"})})})]}),t.jsxs("div",{className:"main-heading-wrapper",children:[t.jsx("h2",{className:"companyName",children:a}),t.jsx("p",{className:"text",children:"компанія"})]}),t.jsxs("div",{className:"closeWrapper",children:[t.jsx("button",{className:"closeWord",onClick:n,children:"Закрити"}),t.jsx("button",{className:"closeButton",onClick:n,children:t.jsx(w,{iconName:"close",styles:"close-icon",width:12,height:12})})]})]}),t.jsx("p",{className:"textQuestion",children:d}),t.jsx("p",{className:"textAnswer",children:l})]})})}):null},Y=({companies:e})=>{const[i,n]=p.useState(null),a=y({minWidth:1440}),s=y({minWidth:768}),o=l=>{n(l)},d=()=>{n(null)};if(e)return t.jsx(_,{children:Array.isArray(e)&&t.jsxs(O,{$anim:U(e.length,a,s),children:[Array.from([...e,...e]).map((l,g)=>t.jsx("li",{children:t.jsx("img",{loading:"lazy",fetchpriority:"low",src:l.logoURL?G(l.logoURL,{width:360,height:280},l.logoCrop,l.logoFocalScope):W,alt:`Company ${l.id}`,title:l.name,onClick:()=>o(l)})},g)),i&&t.jsx(V,{isOpen:i!==null,data:i,onClose:d})]})})},I=(e,i="p")=>{const n={p:["людина","людини","людей"],i:["імпакт-інвестор","імпакт-інвестори","імпакт-інвесторів"],k:["компанія","компанії","компаній"]};return e%10===1&&e%100!==11?n[i][0]:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?n[i][1]:n[i][2]},se=({people:e,companies:i})=>{const[n,a]=p.useState(null),s=()=>{a(null)};return t.jsxs("section",{id:"investors",children:[t.jsxs(N,{children:[t.jsx(P,{children:"Імпакт-інвестори МІСТОХАБ"}),t.jsx(D,{children:"З нами вже"}),(e==null?void 0:e.length)>0&&t.jsxs(T,{children:[e.length," ",I(e.length,"p")]})]}),t.jsxs(Q,{children:[e&&t.jsx(J,{people:e}),t.jsx(N,{children:(i==null?void 0:i.length)>0&&t.jsxs(T,{children:[i.length," ",I(i.length,"k")]})}),i&&t.jsx(Y,{companies:i})]}),n&&t.jsx(R,{data:n,onClose:s})]})};export{se as default};
