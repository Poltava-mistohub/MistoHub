import{u as b,j as i,I as R,i as a,k as S,e as u,g as y}from"./index-eafb5543.js";import{d as I,C as U,a as z,m as W,g as G,T as k,I as B,M as O,S as _,P}from"./InvestorsBlock.styled-16536ea2.js";import{M as q,C as A}from"./index-20119065.js";const L="/MistoHub/assets/noname-a8edc818.jpg",D="/MistoHub/assets/illustration_modal-48542975.svg",F=b(q)`
  &.ReactModal__Content {
    height: fit-content;
    margin: auto;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    box-shadow:
      4px 17px 102.1px 0px rgba(0, 0, 0, 0.19),
      0px 25px 30.4px 0px rgba(0, 0, 0, 0.09);
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 60px);
    max-width: 350px;

    @media screen and (min-width: 768px) {
      max-width: 570px;
    }
  }
`,E=b.div`
  background-image: url(${D});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: bottom right;

  .modal_header {
    display: flex;
    justify-content: end;
    padding: 10px;
  }

  .modal_content {
    padding: 0 30px 30px;
  }

  .investor_info_block {
    margin-bottom: 35px;
    display: flex;
    gap: 15px;
  }

  .picture_wrapper {
    position: relative;
  }

  .investor_link {
    background: #f77d07;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .investor_link_icon {
    width: 50%;
    height: 50%;
    fill: white;
  }

  .investor_picture {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  .details_wrapper {
    width: calc(100 - 115px);
  }

  .details_name {
    font-family: Oddval;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    font-size: 20px;
    line-height: 130%;
  }

  .details_description {
    font-family: FixelDisplay;
    font-weight: 500;
    letter-spacing: -0.02em;
    color: rgba(11, 11, 11, 0.5);
    font-size: 14px;
  }

  .question_header {
    color: #0b0b0b;
    font-family: Oddval;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: rgb(11, 11, 11);
    font-size: 20px;
    line-height: 130%;
  }

  .question_answer {
    color: #0b0b0b;
    font-size: 16px;
    line-height: 18px;
    padding-right: 30px;
  }

  @media only screen and (min-width: 768px) {
    .investor_link {
      width: 40px;
      height: 40px;
    }

    .investor_picture {
      width: 200px;
      height: 200px;
    }

    .details_wrapper {
      width: calc(100 - 215px);
    }
  }
`,N=({isOpen:e,data:t,onClose:n,variant:l})=>{const{question:r,answer:d}=t;let c="КОМПАНІЯ",s=t.logoURL,o=t.name,x=I,m=t.link,f="icon-instagram";return l==="person"&&(s=t.imageURL,o=`${t.firstName} ${t.secondName}`,c=t.type,x=L,t.facebook?(m=t.facebook,f="icon-faceb"):(m=t.instagram,f="icon-instagram")),e?i.jsx(F,{onRequestClose:n,isOpen:e,style:{overlay:{zIndex:"2"}},onClose:n,shouldCloseOnOverlayClick:!0,contentLabel:"Image Modal",children:i.jsxs(E,{children:[i.jsx("header",{className:"modal_header",children:i.jsx(A,{onClose:n})}),i.jsxs("article",{className:"modal_content",children:[i.jsxs("div",{className:"investor_info_block",children:[i.jsxs("div",{className:"picture_wrapper",children:[i.jsx("img",{className:"investor_picture",src:s||x,alt:o,loading:"lazy"}),m&&i.jsx("a",{className:"investor_link",href:m,target:"_blank",rel:"noopener noreferrer",children:i.jsx(R,{iconName:f,styles:"investor_link_icon"})})]}),i.jsxs("div",{className:"details_wrapper",children:[i.jsx("p",{className:"details_name",children:o}),i.jsx("p",{className:"details_description",children:c})]})]}),i.jsx("p",{className:"question_header",children:r}),i.jsx("p",{className:"question_answer",children:d})]})]})}):null},$=({startTranslate:e,endTranslate:t})=>S`
  0% {
    transform: translateX(${e}%);
  }
  100% {
    transform: translateX(${t}%);
  }
`,H=b.div`
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
`,X=b.div`
  max-width: 375px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,K=b.div`
  ${e=>{const t={startTranslate:0,endTranslate:e.$length===20?-(e.$length*e.$length-.3*e.$length):-(e.$length*e.$length+.3*e.$length)},n={startTranslate:e.$length===20?-(e.$length*e.$length-.3*e.$length):-(e.$length*e.$length+.3*e.$length),endTranslate:0},l=$(t),r=$(n),d={startTranslate:0,endTranslate:e.$length===20?-(e.$length*e.$length+2.2*e.$length):-(e.$length*e.$length+.2*e.$length)},c={startTranslate:e.$length===20?-(e.$length*e.$length+2.2*e.$length):-(e.$length*e.$length+.2*e.$length),endTranslate:0},s=$(d),o=$(c),x={startTranslate:0,endTranslate:e.$length===20?-(e.$length*e.$length-10.5*e.$length):-(e.$length*e.$length+1.2*e.$length)},m={startTranslate:e.$length===20?-(e.$length*e.$length-10.5*e.$length):-(e.$length*e.$length-8*e.$length),endTranslate:0},f=$(x),v=$(m);return a`
      &.group-0 {
        overflow: visible;
        animation: ${a`
          ${l} 50s linear infinite
        `};
      }
      &.group-1 {
        overflow: visible;
        animation: ${a`
          ${r} 50s linear infinite
        `};
      }
      &.group-2 {
        overflow: visible;
        animation: ${a`
          ${l} 50s linear infinite
        `};
      }
      &.group-3 {
        overflow: visible;
        animation: ${a`
          ${r} 50s linear infinite
        `};
      }
      &.group-4 {
        overflow: visible;
        animation: ${a`
          ${l} 50s linear infinite
        `};
      }
      &.group-5 {
        overflow: visible;
        animation: ${a`
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
          animation: ${a`
            ${s} 50s linear infinite
          `};
        }
        &.group-1 {
          overflow: visible;
          animation: ${a`
            ${o} 50s linear infinite
          `};
        }
        &.group-2 {
          overflow: visible;
          animation: ${a`
            ${s} 50s linear infinite
          `};
        }
        &.group-3 {
          overflow: visible;
          animation: ${a`
            ${o} 50s linear infinite
          `};
        }
        &.group-4 {
          overflow: visible;
          animation: ${a`
            ${s} 50s linear infinite
          `};
        }
        &.group-5 {
          overflow: visible;
          animation: ${a`
            ${o} 50s linear infinite
          `};
        }
      }
      @media screen and (min-width: 1440px) {
        &.group-0 {
          overflow: visible;
          animation: ${a`
            ${f} 80s linear infinite
          `};
        }
        &.group-1 {
          overflow: visible;
          animation: ${a`
            ${v} 80s linear infinite
          `};
        }
        &.group-2 {
          overflow: visible;
          animation: ${a`
            ${f} 80s linear infinite
          `};
        }
        &.group-3 {
          overflow: visible;
          animation: ${a`
            ${v} 80s linear infinite
          `};
        }
        &.group-4 {
          overflow: visible;
          animation: ${a`
            ${f} 80s linear infinite
          `};
        }
        &.group-5 {
          overflow: visible;
          animation: ${a`
            ${v} 80s linear infinite
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
`,Q=(e,t,n,l,r,d)=>{const c=e%2===0,s=e===(d==null?void 0:d.length)-1;let o=!1;return c?o=e===0||s?t.left<=n.left+(l?40:r?80:200)||t.left>=n.right-(l?80:r?180:400):t.left<=n.left+(l?-30:r?-40:10)||t.left>=n.right-(l?50:r?90:170):o=s?t.right<=n.left+(l?80:r?180:400)||t.right>=n.right-(l?40:r?80:200):t.right<=n.left+(l?50:r?90:170)||t.right>=n.right-(l?-30:r?-40:10),o},Z=e=>{const t=[];for(let n=0;n<e.length;n+=20){let l=e.slice(n,n+20);if(l.length<20&&n+20>=e.length){const r=20-l.length;l=[...l,...Array.from({length:r},(d,c)=>l[c%l.length])]}t.push(l)}return t},J=e=>[(e.firstName||"").trim(),(e.secondName||"").trim()].join(" "),V=(e,t)=>{const n=new URLSearchParams;return n.set("w","360"),n.set("h","280"),n.set("fit","crop"),n.set("auto","format"),t?(n.set("crop","focalpoint"),n.set("fp-x",String(t.x)),n.set("fp-y",String(t.y))):n.set("crop","center"),`${e}?${n.toString()}`},Y=({people:e})=>{const[t,n]=u.useState(null),[l,r]=u.useState(null),[d,c]=u.useState(!1),s=y({maxWidth:767}),o=y({maxWidth:1440}),x={background:`rgb(212,213,209) center / contain no-repeat url(${L})`};u.useEffect(()=>{(async()=>{try{const g=Z(e);n(g)}catch(g){console.error("Error fetching people data:",g)}})()},[e]);const m=u.useMemo(()=>h=>{const g=document.getElementById("investors-anim"),j=document.getElementById(`container-${h}`).getElementsByClassName("item-list");for(const w of j){const C=w.getBoundingClientRect(),M=g.getBoundingClientRect();Q(h,C,M,s,o,t)?(w.classList.add("on-blur"),w.disabled=!0):(w.classList.remove("on-blur"),w.disabled=!1)}},[s,o,t]);u.useEffect(()=>{if(!t)return;const h=setInterval(()=>{for(let g=0;g<t.length;g++)m(g)},50);return()=>clearInterval(h)},[t,m]);const f=h=>{r(h),c(!0)},v=()=>{r(null),c(!1)};return i.jsxs(H,{children:[i.jsx(X,{id:"investors-anim",children:t==null?void 0:t.map((h,g)=>i.jsx(K,{id:`container-${g}`,$length:h.length,className:`group-${g} ${g%2===0?"odd-group":"even-group"}`,children:i.jsx("ul",{children:h.map((p,j)=>i.jsx("li",{children:i.jsx("button",{"data-group_id":g,className:"item-list",type:"button",onClick:()=>f(p),children:i.jsx("img",{alt:"",loading:"lazy",fetchpriority:"low",title:J(p),src:p.imageURL?V(p.imageURL,p.imageFocalPoint):null,style:x})})},j))})},`group-${g}`))}),l&&i.jsx(N,{data:l,onClose:v,isOpen:d,variant:"person"})]})},ee=({companies:e})=>{const[t,n]=u.useState(null),l=y({minWidth:1440}),r=y({minWidth:768}),d=s=>{n(s)},c=()=>{n(null)};if(e)return i.jsx(U,{children:Array.isArray(e)&&i.jsxs(z,{$anim:W(e.length,l,r),children:[Array.from([...e,...e]).map((s,o)=>i.jsx("li",{children:i.jsx("img",{loading:"lazy",fetchpriority:"low",src:s.logoURL?G(s.logoURL,{width:360,height:280},s.logoCrop,s.logoFocalScope):I,alt:`Company ${s.id}`,title:s.name,onClick:()=>d(s)})},o)),t&&i.jsx(N,{isOpen:t!==null,data:t,onClose:c,variant:"company"})]})})},T=(e,t="p")=>{const n={p:["людина","людини","людей"],i:["імпакт-інвестор","імпакт-інвестори","імпакт-інвесторів"],k:["компанія","компанії","компаній"]};return e%10===1&&e%100!==11?n[t][0]:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?n[t][1]:n[t][2]},se=({people:e,companies:t})=>i.jsxs("section",{id:"investors",children:[i.jsxs(k,{children:[i.jsx(B,{children:"Імпакт-інвестори МІСТОХАБ"}),i.jsx(O,{children:"З нами"}),(e==null?void 0:e.length)>0&&i.jsxs(_,{children:[e.length," ",T(e.length,"p")]})]}),i.jsxs(P,{children:[e&&i.jsx(Y,{people:e}),i.jsx(k,{children:(t==null?void 0:t.length)>0&&i.jsxs(_,{children:[t.length," ",T(t.length,"k")]})}),t&&i.jsx(ee,{companies:t})]})]});export{se as default};
