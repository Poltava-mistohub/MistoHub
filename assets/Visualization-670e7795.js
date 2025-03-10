import{u as e,f as l,g as m,e as s,j as i,h as d,b as c,I as r}from"./index-f2da1e2a.js";const f=e.section`
  width: 100%;
`,g=e(l)`
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
`,w=e.p`
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
`,b=e.div`
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
`,u=e.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`,v=e.div`
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
`,h=e.button`
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
`,j=e(h)`
  margin-left: 20px;
`,y=e.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`,C=()=>{const o=m({minWidth:1440}),[t,a]=s.useState(0);s.useEffect(()=>{const n=()=>{a(t)};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[t]);const p=()=>{t<d.length-(o?2:1)&&a(t+1)},x=()=>{t>0&&a(t-1)};return i.jsx(f,{id:"design",children:i.jsxs(g,{children:[i.jsx(w,{children:"Візуалізація"}),i.jsx(b,{children:"Як всередині?"}),i.jsx(y,{children:d.slice(t,t+(o?2:1)).map(n=>i.jsx(u,{children:i.jsx(c,{item:n,priority:!1})},n.alt))}),i.jsxs(v,{children:[i.jsx(h,{type:"button",className:`${t>0?"enabled":""}`,onClick:x,title:"Попередній слайд",children:i.jsx(r,{width:"18",height:"14",styles:"icon-arrow",iconName:"icon-arrow-back"})}),i.jsx(j,{type:"button",className:`${t<d.length-(o?2:1)?"enabled":""}`,onClick:p,title:"Наступний слайд",children:i.jsx(r,{width:"18",height:"14",styles:"icon-arrow",iconName:"icon-arrow-next"})})]})]})})};export{C as default};
