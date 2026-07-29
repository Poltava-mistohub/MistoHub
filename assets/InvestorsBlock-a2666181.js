import{u as v,j as i,I as R,i as f,k as S,e as u,g as b}from"./index-3d1a5cfb.js";import{d as I,C as U,a as z,m as W,g as G,T as k,I as B,M as O,S as _,P}from"./InvestorsBlock.styled-3f23e512.js";import{M as q,C as A}from"./index-4beb9f32.js";const L="/MistoHub/assets/noname-a8edc818.jpg",D="/MistoHub/assets/illustration_modal-48542975.svg",F=v(q)`
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
`,E=v.div`
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
`,N=({isOpen:e,data:t,onClose:n,variant:s})=>{const{question:a,answer:c}=t;let d="КОМПАНІЯ",l=t.logoURL,o=t.name,x=I,h=t.link,m="icon-instagram";return s==="person"&&(l=t.imageURL,o=`${t.firstName} ${t.secondName}`,d=t.type,x=L,t.facebook?(h=t.facebook,m="icon-faceb"):(h=t.instagram,m="icon-instagram")),e?i.jsx(F,{onRequestClose:n,isOpen:e,style:{overlay:{zIndex:"2"}},onClose:n,shouldCloseOnOverlayClick:!0,contentLabel:"Image Modal",children:i.jsxs(E,{children:[i.jsx("header",{className:"modal_header",children:i.jsx(A,{onClose:n})}),i.jsxs("article",{className:"modal_content",children:[i.jsxs("div",{className:"investor_info_block",children:[i.jsxs("div",{className:"picture_wrapper",children:[i.jsx("img",{className:"investor_picture",src:l||x,alt:o,loading:"lazy"}),h&&i.jsx("a",{className:"investor_link",href:h,target:"_blank",rel:"noopener noreferrer",children:i.jsx(R,{iconName:m,styles:"investor_link_icon"})})]}),i.jsxs("div",{className:"details_wrapper",children:[i.jsx("p",{className:"details_name",children:o}),i.jsx("p",{className:"details_description",children:d})]})]}),i.jsx("p",{className:"question_header",children:a}),i.jsx("p",{className:"question_answer",children:c})]})]})}):null},$=({startTranslate:e,endTranslate:t})=>S`
  0% {
    transform: translateX(${e}%);
  }
  100% {
    transform: translateX(${t}%);
  }
`,H=v.div`
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
`,X=v.div`
  max-width: 375px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,K=v.div`
  ${e=>{const t={startTranslate:0,endTranslate:e.$length===20?-(e.$length*e.$length-.3*e.$length):-(e.$length*e.$length+.3*e.$length)},n={startTranslate:e.$length===20?-(e.$length*e.$length-.3*e.$length):-(e.$length*e.$length+.3*e.$length),endTranslate:0},s=$(t),a=$(n),c={startTranslate:0,endTranslate:e.$length===20?-(e.$length*e.$length+2.2*e.$length):-(e.$length*e.$length+.2*e.$length)},d={startTranslate:e.$length===20?-(e.$length*e.$length+2.2*e.$length):-(e.$length*e.$length+.2*e.$length),endTranslate:0},l=$(c),o=$(d),x={startTranslate:0,endTranslate:e.$length===20?-(e.$length*e.$length-10.5*e.$length):-(e.$length*e.$length+1.2*e.$length)},h={startTranslate:e.$length===20?-(e.$length*e.$length-10.5*e.$length):-(e.$length*e.$length-8*e.$length),endTranslate:0},m=$(x),y=$(h);return f`
      &.odd-group {
        overflow: visible;
        animation: ${f`
          ${s} 50s linear infinite
        `};
      }
      &.even-group {
        overflow: visible;
        animation: ${f`
          ${a} 50s linear infinite
        `};
      }
      &:hover {
        animation-play-state: paused;
      }
      @media screen and (min-width: 768px) {
        &.odd-group {
          animation: ${f`
            ${l} 50s linear infinite
          `};
        }
        &.even-group {
          animation: ${f`
            ${o} 50s linear infinite
          `};
        }
      }
      @media screen and (min-width: 1440px) {
        &.odd-group {
          animation: ${f`
            ${m} 80s linear infinite
          `};
        }
        &.even-group {
          animation: ${f`
            ${y} 80s linear infinite
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
`,Q=(e,t,n,s,a,c)=>{const d=e%2===0,l=e===(c==null?void 0:c.length)-1;let o=!1;return d?o=e===0||l?t.left<=n.left+(s?40:a?80:200)||t.left>=n.right-(s?80:a?180:400):t.left<=n.left+(s?-30:a?-40:10)||t.left>=n.right-(s?50:a?90:170):o=l?t.right<=n.left+(s?80:a?180:400)||t.right>=n.right-(s?40:a?80:200):t.right<=n.left+(s?50:a?90:170)||t.right>=n.right-(s?-30:a?-40:10),o},Z=e=>{const t=[];for(let n=0;n<e.length;n+=20){let s=e.slice(n,n+20);if(s.length<20&&n+20>=e.length){const a=20-s.length;s=[...s,...Array.from({length:a},(c,d)=>s[d%s.length])]}t.push(s)}return t},J=e=>[(e.firstName||"").trim(),(e.secondName||"").trim()].join(" "),V=(e,t)=>{const n=new URLSearchParams;return n.set("w","360"),n.set("h","280"),n.set("fit","crop"),n.set("auto","format"),t?(n.set("crop","focalpoint"),n.set("fp-x",String(t.x)),n.set("fp-y",String(t.y))):n.set("crop","center"),`${e}?${n.toString()}`},Y=({people:e})=>{const[t,n]=u.useState(null),[s,a]=u.useState(null),[c,d]=u.useState(!1),l=b({maxWidth:767}),o=b({maxWidth:1440}),x={background:`rgb(212,213,209) center / contain no-repeat url(${L})`};u.useEffect(()=>{(async()=>{try{const r=Z(e);n(r)}catch(r){console.error("Error fetching people data:",r)}})()},[e]);const h=u.useMemo(()=>g=>{const r=document.getElementById("investors-anim"),j=document.getElementById(`container-${g}`).getElementsByClassName("item-list");for(const w of j){const C=w.getBoundingClientRect(),M=r.getBoundingClientRect();Q(g,C,M,l,o,t)?(w.classList.add("on-blur"),w.disabled=!0):(w.classList.remove("on-blur"),w.disabled=!1)}},[l,o,t]);u.useEffect(()=>{if(!t)return;const g=setInterval(()=>{for(let r=0;r<t.length;r++)h(r)},50);return()=>clearInterval(g)},[t,h]);const m=g=>{a(g),d(!0)},y=()=>{a(null),d(!1)};return i.jsxs(H,{children:[i.jsx(X,{id:"investors-anim",children:t==null?void 0:t.map((g,r)=>i.jsx(K,{id:`container-${r}`,$length:g.length,className:`group-${r} ${r%2===0?"odd-group":"even-group"}`,children:i.jsx("ul",{children:g.map((p,j)=>i.jsx("li",{children:i.jsx("button",{"data-group_id":r,className:"item-list",type:"button",onClick:()=>m(p),children:i.jsx("img",{alt:"",loading:"lazy",fetchpriority:"low",title:J(p),src:p.imageURL?V(p.imageURL,p.imageFocalPoint):null,style:x})})},j))})},`group-${r}`))}),s&&i.jsx(N,{data:s,onClose:y,isOpen:c,variant:"person"})]})},ee=({companies:e})=>{const[t,n]=u.useState(null),s=b({minWidth:1440}),a=b({minWidth:768}),c=l=>{n(l)},d=()=>{n(null)};if(e)return i.jsx(U,{children:Array.isArray(e)&&i.jsxs(z,{$anim:W(e.length,s,a),children:[Array.from([...e,...e]).map((l,o)=>i.jsx("li",{children:i.jsx("img",{loading:"lazy",fetchpriority:"low",src:l.logoURL?G(l.logoURL,{width:360,height:280},l.logoCrop,l.logoFocalScope):I,alt:`Company ${l.id}`,title:l.name,onClick:()=>c(l)})},o)),t&&i.jsx(N,{isOpen:t!==null,data:t,onClose:d,variant:"company"})]})})},T=(e,t="p")=>{const n={p:["людина","людини","людей"],i:["імпакт-інвестор","імпакт-інвестори","імпакт-інвесторів"],k:["компанія","компанії","компаній"]};return e%10===1&&e%100!==11?n[t][0]:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?n[t][1]:n[t][2]},le=({people:e,companies:t})=>i.jsxs("section",{id:"investors",children:[i.jsxs(k,{children:[i.jsx(B,{children:"Імпакт-інвестори МІСТОХАБ"}),i.jsx(O,{children:"З нами"}),(e==null?void 0:e.length)>0&&i.jsxs(_,{children:[e.length," ",T(e.length,"p")]})]}),i.jsxs(P,{children:[e&&i.jsx(Y,{people:e}),i.jsx(k,{children:(t==null?void 0:t.length)>0&&i.jsxs(_,{children:[t.length," ",T(t.length,"k")]})}),t&&i.jsx(ee,{companies:t})]})]});export{le as default};
