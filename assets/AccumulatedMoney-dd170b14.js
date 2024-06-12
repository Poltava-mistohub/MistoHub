import{j as e,r as l}from"./index-14b42926.js";import{s as D,a as d,u as k,I as g,n as c,b as $,f as F}from"./HomePage-a9062aba.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";function v(){for(var i=arguments.length,r=new Array(i),t=0;t<i;t++)r[t]=arguments[t];return D(r)}var z=function(){var r=v.apply(void 0,arguments),t="animation-"+r.name;return{name:t,styles:"@keyframes "+t+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const I="/MistoHub/assets/back-for-mobile-f7a3ca0e.png",M="/MistoHub/assets/back-for-tablet-d2d31660.png",A="/MistoHub/assets/back-for-desktop-d36331b9.png",E=i=>z`
  from {
    width: 0;
  }
  to {
    width: ${i.progress}%;
  }
`,S=z`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`,_=d.section`
  ${i=>i.isDesktop&&"display:flex"};
  background-image: url('${I}');
  background-size: cover;
  background-position: center;
  padding: 60px 0;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding: 80px 0;
    background-image: url('${M}');
  }

  @media screen and (min-width: 1440px) {
    padding: 120px 60px 100px;
    background-image: url('${A}');

    > div {
      width: 100%;
      margin-left: 113px;
      margin-right: 83px;
    }

    > ul {
      color: #ffffff;
      display: flex;
      flex-direction: column;
      gap: 24px;
      animation: ${({goAnimation:i})=>i?v`
              ${S} 3s ease-in-out
            `:"none"};

      backdrop-filter: blur(5px);
    }

    button:hover {
      background-color: #e97200;
    }
  }

  h4 {
    font-family: 'Oddval', sans-serif;
    font-weight: 600;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 2px;

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.3;
    }
  }

  button {
    font-family: 'FixelDisplay', sans-serif;
    height: 48px;
    min-width: 171px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.02em;
    background-color: #f77d07;
    border-radius: 30px;
    border: none;
    color: #ffffff;
    padding: 15px 20px;
    display: flex;
    margin: 0 auto;
    transition: all 0.25s ease-in-out;

    @media screen and (min-width: 768px) {
      height: 64px;
      width: 230px;
      padding: 20px 40px;
      font-size: 16px;
      align-items: center;
      line-height: 1.5;
      min-width: 230px;
    }

    @media screen and (min-width: 1440px) {
      width: 260px;
      height: 70px;
      padding: 23px 46px;
      font-size: 18px;
    }
  }

  button:active {
    background-color: #e3e3e3;
    color: #898b90;
  }
`,u=d.div`
  padding: 0 65px;
  margin-bottom: 103px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    margin-bottom: 173px;
    gap: 30px;
    padding: 0 204px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 203px;
    padding: 0;
  }

  > h2 {
    font-family: 'Oddval', sans-serif;
    font-size: 18px;
    line-height: 1.2;
    min-width: 245px;
    @media screen and (min-width: 768px) {
      font-size: 22px;
      line-height: 1.2;
    }

    @media screen and (min-width: 1440px) {
      font-size: 28px;
      line-height: 1.15;
    }
  }

  > p {
    font-size: 50px;
    font-family: 'FixelDisplay', sans-serif;

    @media screen and (min-width: 768px) {
      font-size: 85px;
      line-height: 0.88;
    }

    @media screen and (min-width: 1440px) {
      font-size: 120px;
      line-height: 1;
    }
  }
`,C=d.div`
  display: flex;
  margin: 0 auto 55px;
  padding: 0 30px;
  @media screen and (min-width: 768px) {
    margin-bottom: 116px;
    padding: 0 117px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 102px;
    padding: 0;
  }

  > div {
    width: 100%;
    height: 10px;
    background-color: #7e7e7e;
    border-radius: 100px;
    position: relative;

    @media screen and (min-width: 768px) {
      height: 20px;
    }
  }
`,B=d.div`
  position: relative;
  width: ${i=>i.progress}%;
  height: 10px;
  background-color: #ffffff;
  z-index: 15;
  border-radius: 100px;
  animation: ${i=>E(i)} 3s ease-in-out forwards;

  @media screen and (min-width: 768px) {
    height: 20px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(50%) translateY(-30%);
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    z-index: 2;
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);

    @media screen and (min-width: 768px) {
      width: 48px;
      height: 48px;
      box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
    }
  }
`,V=d.div`
  font-family: 'FixelDisplay', sans-serif;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: -0.02em;
  top: -62px;
  right: -41px;
  width: 84px;
  height: 42px;
  border-radius: 45px;
  background-color: #fff;
  opacity: ${i=>i.progress>0?1:0};
  transition: opacity 0.5s ease;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    width: 162px;
    height: 82px;
    transform: translateX(50%) translateY(-145%);
    top: 0;
    right: 0;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -9px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 14px 14px 0;
    border-style: solid;
    border-color: #fff transparent transparent;

    @media screen and (min-width: 768px) {
      border-width: 18px 18px 0;
      bottom: -13px;
    }
  }

  &::after {
    font-family: 'FixelDisplay', sans-serif;
    content: 'Зібрано';
    position: absolute;
    bottom: -65px;
    font-size: 12px;
    color: #ffffff;
    font-weight: 500;
    line-height: 1.3;

    @media screen and (min-width: 768px) {
      font-size: 20px;
      bottom: -112px;
    }
  }
`,G=d.ul`
  display: flex;
  color: #fff;
  gap: 8px;
  overflow-x: auto;
  padding: 14px 16px 28px;

  margin-bottom: 32px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 8px;
    margin: 80px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(253, 253, 253, 0.4);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`,b=d.li`
  ${i=>i.isDesktop&&"display: flex;"};
  position: relative;
  background: #ffffff1a;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid #ffffff14;
  padding: 10px;

  min-width: 140px;

  @media screen and (min-width: 768px) {
    padding: 20px;
    min-width: 243px;
  }

  ul {
    padding-left: 16px;
    list-style-type: disc;
    display: flex;
    flex-direction: column;
    gap: 2px;

    @media screen and (min-width: 1440px) {
    }

    li {
      font-family: 'FixelDisplay', sans-serif;
      font-size: 8px;
      line-height: 1.2;
      letter-spacing: -0.02em;

      @media screen and (min-width: 768px) {
        font-size: 10px;
      }

      @media screen and (min-width: 1440px) {
      }
    }
  }
`,O=d.li`
  background: #ffffff1a;
  border-radius: 10px;
  border: 1px solid #ffffff14;
  height: 66px;
  min-width: 134px;
  position: relative;
  backdrop-filter: blur(5px);
  padding: 10px;

  @media screen and (min-width: 768px) {
    min-width: 215px;
    min-height: 100px;
    padding: 20px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 273px;
    display: flex;
  }

  p {
    font-family: 'FixelDisplay', sans-serif;
    font-weight: 500;
    font-size: 8px;
    line-height: 1.2;
    letter-spacing: -0.02em;

    @media screen and (min-width: 768px) {
      font-size: 10px;
    }
  }
`,f=d.div`
  ${i=>!i.isDesktop&&"position: absolute; left: 50%; top: -14px; margin-right: 5px;"};

  width: 100%;
  max-width: 20px;
  height: 20px;

  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  background-color: #8ccc3a;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    max-width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 20px;
    height: 20px;
    margin-right: 10px;
    transform: none;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }

  > svg {
    width: 10px;
    height: 10px;
  }
`,T=d(f)`
  background-color: #f77d07;
  padding-top: 3px;

  @media screen and (min-width: 1440px) {
    padding-top: 2px;
  }
`,h=({needToDoTasks:i,madedTasks:r})=>{const t=k({minWidth:1440}),a=o=>{if(o)return o.reduce((s,n)=>n.is_done?t?[n,...s]:[...s,n]:t?[...s,n]:[n,...s],[])};return e.jsxs(e.Fragment,{children:[i&&a(i).map(({tasks:o,title:s,is_done:n})=>n?e.jsxs(b,{isDesktop:t,children:[e.jsx(f,{isDesktop:t,children:e.jsx(g,{width:"12px",height:"12px",iconName:"icon-Vector-1"})}),e.jsxs("div",{children:[e.jsx("h4",{children:s}),e.jsx("ul",{children:o.map(p=>e.jsx("li",{children:p},c()))})]})]},c()):e.jsxs(O,{children:[e.jsx(T,{isDesktop:t,children:"$"}),e.jsxs("div",{children:[e.jsx("h4",{children:s}),e.jsx("p",{children:o})]})]},c())),r&&r.map(({title:o,listTasks:s})=>e.jsxs(b,{isDesktop:t,children:[e.jsx(f,{isDesktop:t,children:e.jsx(g,{width:"12px",height:"12px",iconName:"icon-Vector-1"})}),e.jsxs("div",{children:[e.jsx("h4",{children:o}),e.jsx("ul",{children:s.map(n=>e.jsx("li",{children:n},c()))})]})]},c()))]})},N=({totalAmount:i})=>{const[r,t]=l.useState(0);return l.useEffect(()=>{const s=i/100;let n=0;const p=setInterval(()=>{n+=s,n>=i&&(n=i,clearInterval(p)),t(n)},30);return()=>clearInterval(p)},[i]),e.jsxs(V,{progress:r,children:["$",r.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g," ")]})},w=({totalAmount:i,targetAmount:r,goAnimation:t})=>{const a=Math.min(i/r*100,100);return e.jsx(C,{children:e.jsx("div",{children:e.jsx(B,{progress:t?a:0,children:e.jsx(N,{totalAmount:t?i:0})})})})},j=[{title:"Залишилось зробити",tasks:"Закупівля й встановлення меблів, обладнання для кухні та сантехніки для вбиралень",is_done:!1},{title:"Залишилось зробити",tasks:"Встановлення системи кондиціонування",is_done:!1},{title:"Ганок",tasks:["Реконструйований та готовий до встановлення пандусу"],is_done:!0},{title:"Залишилось зробити",tasks:"Завершення ґанку, встановлення пандусу та накриття",is_done:!1},{title:"Залишилось зробити",tasks:"Система відеонагляду",is_done:!1}],y=[{title:"Кафе",listTasks:["Фіналізовані стіни та підлога","Прокладена система вентиляції та мережі під освітлення","Встановлені каркаси під натяжну стелю","Збережена оригінальна мозаїчна плитка","Встановлені двері до вбиралень та івент-простору","Освітлення простору","Натяжна стеля"]},{title:"Івент-простір",listTasks:["Фіналізовані стіни та підлога","Зроблено посилення перекриття","Прокладені мережі під освітлення ","Встановлені каркаси під натяжну стелю","Готова система опалення","Освітлення простору","Натяжна стеля"]},{title:"Кухня",listTasks:["Фіналізовані стіни, стеля та підлога","Повна система вентиляції","Холодне та гаряче водопостачання ","Збільшена потужність електропостачання для всього приміщення"]}],Y=()=>{const[i,r]=l.useState(null),t=k({minWidth:1440}),a=l.useRef(null),{openModal:o}=$(),[s,n]=l.useState(!1);return l.useEffect(()=>{const p=new IntersectionObserver(x=>{x.forEach(m=>{m.isIntersecting&&(n(!0),p.unobserve(m.target))})});return a.current&&p.observe(a.current),()=>{a.current&&p.unobserve(a.current)}},[]),l.useEffect(()=>{(async()=>{try{const x=await F();r(x)}catch(x){console.error("Error fetching data:",x)}})()},[]),e.jsx(_,{ref:a,isDesktop:t,goAnimation:s,id:"funds",children:i&&e.jsx(e.Fragment,{children:t?e.jsxs(e.Fragment,{children:[e.jsx("ul",{children:e.jsx(h,{madedTasks:y})}),e.jsxs("div",{children:[e.jsxs(u,{children:[e.jsx("h2",{children:"До відкриття залишилось "}),e.jsx("p",{children:`$ ${i.goal-i.raised}`.replace(/\B(?=(\d{3})+(?!\d))/g," ")})]}),e.jsx(w,{goAnimation:s,totalAmount:i.raised,targetAmount:i.goal}),e.jsx("button",{onClick:()=>o("join_modal"),type:"button",children:"Підтримати проєкт"})]}),e.jsx("ul",{children:e.jsx(h,{needToDoTasks:j})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsx("h2",{children:"До відкриття залишилось "}),e.jsx("p",{children:`$ ${i.goal-i.raised}`})]}),e.jsx(w,{goAnimation:s,totalAmount:i.raised,targetAmount:i.goal}),e.jsxs(G,{children:[e.jsx(h,{needToDoTasks:j}),e.jsx(h,{madedTasks:y})]}),e.jsx("button",{onClick:()=>o("join_modal"),type:"button",children:"Підтримати проєкт"})]})})})};export{Y as default};
