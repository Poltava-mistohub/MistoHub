import{u as h,j as t,f as r,h as A,r as x}from"./index-802f1575.js";import{M,I as $,u as j,n as y,C as W,g as N}from"./HomePage-0324bf2b.js";const I=h.div`
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
`,C=h(M)`
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
`,T="/MistoHub/assets/noname-a8edc818.jpg",G=({data:e,onClose:n,isOpen:i})=>{const{firstName:a,secondName:s,type:l,imageURL:d,facebook:o,instagram:p,question:u,answer:b}=e;return t.jsx(C,{onRequestClose:n,isOpen:i,style:{overlay:{zIndex:"2"}},onClose:n,shouldCloseOnOverlayClick:!0,contentLabel:"Image Modal",children:t.jsx(I,{children:t.jsxs("div",{className:"contentWrapper",children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsxs("div",{className:"title-wrapper",children:[t.jsx("img",{className:"main-image",src:d||T,alt:`${a} ${s}`,loading:"lazy"}),t.jsx("div",{className:"svgWrapper",children:t.jsx("a",{href:o||p,target:"_blank",rel:"noopener noreferrer",children:o?t.jsx($,{width:"28",height:"28",iconName:"icon-faceb",styles:"instaIcon"}):t.jsx($,{width:"28",height:"28",iconName:"icon-instagram",styles:"instaIcon"})})})]}),t.jsxs("div",{className:"main-heading-wrapper",children:[t.jsx("h2",{className:"companyName",children:`${a} ${s}`}),t.jsx("p",{className:"text",children:l})]}),t.jsxs("div",{className:"closeWrapper",children:[t.jsx("button",{className:"closeWord",onClick:n,children:"Закрити"}),t.jsx("button",{className:"closeButton",onClick:n,children:t.jsx($,{width:"12",height:"12",iconName:"close",styles:"close-icon"})})]})]}),t.jsx("p",{className:"textQuestion",children:u}),t.jsx("p",{className:"textAnswer",children:b})]})})})},f=({startTranslate:e,endTranslate:n})=>A`
  0% {
    transform: translateX(${e}%);
  }
  100% {
    transform: translateX(${n}%);
  }
`,Y=h.div`
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
`,B=h.div`
  max-width: 375px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,D=h.div`
  ${e=>{const n={startTranslate:0,endTranslate:e.$length===20?-(e.$length*e.$length-.3*e.$length):-(e.$length*e.$length+.3*e.$length)},i={startTranslate:e.$length===20?-(e.$length*e.$length-.3*e.$length):-(e.$length*e.$length+.3*e.$length),endTranslate:0},a=f(n),s=f(i),l={startTranslate:0,endTranslate:e.$length===20?-(e.$length*e.$length+2.2*e.$length):-(e.$length*e.$length+.2*e.$length)},d={startTranslate:e.$length===20?-(e.$length*e.$length+2.2*e.$length):-(e.$length*e.$length+.2*e.$length),endTranslate:0},o=f(l),p=f(d),u={startTranslate:0,endTranslate:e.$length===20?-(e.$length*e.$length-10.5*e.$length):-(e.$length*e.$length+1.2*e.$length)},b={startTranslate:e.$length===20?-(e.$length*e.$length-10.5*e.$length):-(e.$length*e.$length-8*e.$length),endTranslate:0},w=f(u),c=f(b);return r`
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
            ${o} 50s linear infinite
          `};
        }
        &.group-1 {
          overflow: visible;
          animation: ${r`
            ${p} 50s linear infinite
          `};
        }
        &.group-2 {
          overflow: visible;
          animation: ${r`
            ${o} 50s linear infinite
          `};
        }
        &.group-3 {
          overflow: visible;
          animation: ${r`
            ${p} 50s linear infinite
          `};
        }
        &.group-4 {
          overflow: visible;
          animation: ${r`
            ${o} 50s linear infinite
          `};
        }
        &.group-5 {
          overflow: visible;
          animation: ${r`
            ${p} 50s linear infinite
          `};
        }
      }
      @media screen and (min-width: 1440px) {
        &.group-0 {
          overflow: visible;
          animation: ${r`
            ${w} 80s linear infinite
          `};
        }
        &.group-1 {
          overflow: visible;
          animation: ${r`
            ${c} 80s linear infinite
          `};
        }
        &.group-2 {
          overflow: visible;
          animation: ${r`
            ${w} 80s linear infinite
          `};
        }
        &.group-3 {
          overflow: visible;
          animation: ${r`
            ${c} 80s linear infinite
          `};
        }
        &.group-4 {
          overflow: visible;
          animation: ${r`
            ${w} 80s linear infinite
          `};
        }
        &.group-5 {
          overflow: visible;
          animation: ${r`
            ${c} 80s linear infinite
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
`,X=(e,n,i,a,s,l)=>{const d=e%2===0,o=e===(l==null?void 0:l.length)-1;let p=!1;return d?p=e===0||o?n.left<=i.left+(a?40:s?80:200)||n.left>=i.right-(a?80:s?180:400):n.left<=i.left+(a?-30:s?-40:10)||n.left>=i.right-(a?50:s?90:170):p=o?n.right<=i.left+(a?80:s?180:400)||n.right>=i.right-(a?40:s?80:200):n.right<=i.left+(a?50:s?90:170)||n.right>=i.right-(a?-30:s?-40:10),p},U=e=>{const n=[];for(let i=0;i<e.length;i+=20){let a=e.slice(i,i+20);if(a.length<20&&i+20>=e.length){const s=20-a.length;a=[...a,...Array.from({length:s},(l,d)=>a[d%a.length])]}n.push(a)}return n},q=({people:e})=>{const[n,i]=x.useState(null),[a,s]=x.useState(null),[l,d]=x.useState(!1),o=j({maxWidth:767}),p=j({maxWidth:1440});x.useEffect(()=>{(async()=>{try{const g=U(e);i(g)}catch(g){console.error("Error fetching people data:",g)}})()},[e]);const u=x.useMemo(()=>c=>{const g=document.getElementById("investors-anim"),O=document.getElementById(`container-${c}`).getElementsByClassName("item-list");for(const v of O){const R=v.getBoundingClientRect(),S=g.getBoundingClientRect();X(c,R,S,o,p,n)?(v.classList.add("on-blur"),v.disabled=!0):(v.classList.remove("on-blur"),v.disabled=!1)}},[o,p,n]);x.useEffect(()=>{if(!n)return;const c=setInterval(()=>{n.forEach((g,m)=>{u(m)})},10);return()=>clearInterval(c)},[n,u]);const b=c=>{s(c),d(!0)},w=()=>{s(null),d(!1)};return t.jsxs(Y,{children:[t.jsx(B,{id:"investors-anim",children:n==null?void 0:n.map((c,g)=>t.jsx(D,{id:`container-${g}`,$length:c.length,className:`group-${g} ${g%2===0?"odd-group":"even-group"}`,children:t.jsx("ul",{children:c.map(m=>t.jsx("li",{children:t.jsx("button",{"data-group_id":g,className:"item-list",type:"button",onClick:()=>b(m),children:t.jsx("img",{src:m.imageURL?m.imageURL:T,alt:`Investor ${m.id}`,loading:"lazy"})})},y()))})},y()))}),a&&t.jsx(G,{data:a,onClose:w,isOpen:l})]})},L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAACkCAAAAAA7nASIAAACrklEQVR42u3cu26kMBSA4bz/S6GVCwoKiikopnBB4YLCBQWFC5axxzeGTBJlR3sY/acJHIHCp+O7onys7xsf2LBhw4YNGzZs2LBhw4YNGzZs2LBhw4YNGzZsb2378yRe/nm/+t3YsGETZ5M1AGLDhg0bNmzYsGHDhg0bNmzYsGF7ke28gQ0bNmzYsGHDhg2bYJsdtR7n47R9SM9Ga22dLJttttD7rNOq8dHqw7TSFcO0Id0Mi3jbfCfcosufO7dFOpfU9TmtJuG2krZ9rnuedl2ZbibRNucN7Wjt1V/193So2qDNtS3Sq6+aulo7+rRaJNsunlDUxPhr7cW+Kbohp41voaGIPn0RbLNlUWYPStVUsZd1CdGWtfKVm+XahqrXXOLdWD043e5S2YY0YFZ38my+PuvD1/pulUf+Xhub7Gm+c6nMIm1z2STXdfHdabuIP3ehYgFzW20WqTazSzTh4+dPhokduS6jNJveJbrQFo/XL/XAE98ez2LrQyWK53QM+4lNn9eWliD6LWzuRzaxbXJ6Mpb0D7ZzjSW7OcCVc0CYuewt4mu7OaAXPQfs5u4pzt31zOXia7tCNdXLwtdcw/GaK82C51pz2bIL5bXyUm7awn5Hp4XJUqYFr5VDnxmK7ajJFQybGXdJY0kYGe/pbjdqSrDl6BNo25tOQ1N87OLTajDmqvI4ee+It71pSEvbm9a20GvyyYgrO1N6sI22+qjhH0wAL7WtRh3QKlznxtSUyyMiNa/Cbesy3O9bUx0SxROtq7vNAvqLoz2pZ6/Oboth81CFZdrSk/vukaxM2/8NbNiwYcOGDRs2bNhea+PvzLFhw4YNGzZs2LBhw4YNGzZs2LBhO4GN/xuKDRu2X9rOG9iwYcOGDRs2bNiwYcOGDRs2bNiwYcOGDRu2EH8B4ajrnFKix8YAAAAASUVORK5CYII=",Q=({isOpen:e,data:n,onClose:i})=>{const{name:a,logoURL:s,link:l,question:d,answer:o}=n;return e?t.jsx(C,{onRequestClose:i,isOpen:e,style:{overlay:{zIndex:"2"}},onClose:i,shouldCloseOnOverlayClick:!0,contentLabel:"Image Modal",children:t.jsx(I,{children:t.jsxs("div",{className:"contentWrapper",children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsxs("div",{className:"title-wrapper",children:[t.jsx("img",{className:"main-image",src:s||L,alt:a,loading:"lazy"}),l&&t.jsx("div",{className:"svgWrapper",children:t.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer",children:t.jsx($,{iconName:"icon-instagram",styles:"instaIcon"})})})]}),t.jsxs("div",{className:"main-heading-wrapper",children:[t.jsx("h2",{className:"companyName",children:a}),t.jsx("p",{className:"text",children:"компанія"})]}),t.jsxs("div",{className:"closeWrapper",children:[t.jsx("button",{className:"closeWord",onClick:i,children:"Закрити"}),t.jsx("button",{className:"closeButton",onClick:i,children:t.jsx($,{iconName:"close",styles:"close-icon",width:12,height:12})})]})]}),t.jsx("p",{className:"textQuestion",children:d}),t.jsx("p",{className:"textAnswer",children:o})]})})}):null},Z=({start:e,end:n})=>A`
  0% {
    transform: translateX(${e});
  }
  100% {
    transform: translateX(${n}px);
  }
`,F=h.div`
  margin-bottom: 60px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-bottom: 120px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 150px;
  }
`,K=h.ul`
  ${e=>{if(!e.$anim)return;const n=Z(e.$anim);return r`
      animation: ${n} ${e.$anim.time}s linear infinite;
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
`,P=(e,n,i)=>{if(!e)return;const a=e*(n||i?212:92),s=n?1440:i?768:375,l=a*2-s,d=n?34.2:i?68.2:29.6;return{start:0,end:-l,time:l/d}},H=({companies:e})=>{const[n,i]=x.useState(null),a=j({minWidth:1440}),s=j({minWidth:768}),l=o=>{i(o)},d=()=>{i(null)};if(e)return t.jsx(F,{children:Array.isArray(e)&&t.jsxs(K,{$anim:P(e.length,a,s),children:[Array.from([...e,...e]).map(o=>t.jsx("li",{children:t.jsx("img",{src:o.logoURL||L,alt:`Company ${o.id}`,onClick:()=>l(o),loading:"lazy"})},y())),n&&t.jsx(Q,{isOpen:n!==null,data:n,onClose:d})]})})},k=h(W)`
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
`,J=h(W)`
  padding: 0;
`,E=h.p`
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
`,_=h.h2`
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
`,z=h.p`
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
`,ne=({people:e,companies:n})=>{const[i,a]=x.useState(null),s=()=>{a(null)};return t.jsxs("section",{id:"investors",children:[t.jsxs(k,{children:[t.jsx(E,{children:"Імпакт-інвестори МІСТОХАБ"}),t.jsx(_,{children:"З нами вже"}),(e==null?void 0:e.length)>0&&t.jsxs(z,{children:[e.length," ",N(e.length,"p")]})]}),t.jsxs(J,{children:[e&&t.jsx(q,{people:e}),t.jsx(k,{children:(n==null?void 0:n.length)>0&&t.jsxs(z,{children:[n.length," ",N(n.length,"k")]})}),n&&t.jsx(H,{companies:n})]}),i&&t.jsx(G,{data:i,onClose:s})]})};export{ne as default};
