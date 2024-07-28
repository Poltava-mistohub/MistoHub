import{j as a,r as D}from"./index-849c559b.js";import{m as f,e as G,a as E,b as V,C as X,S as W,c as v,u as Y}from"./HomePage-dcf5bae2.js";import{c as _}from"./create-element-if-not-defined-33f70835.js";import{n as b}from"./emotion-styled.browser.esm-fa558092.js";function N(x){return x===void 0&&(x=""),`.${x.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function R(x){let{swiper:t,extendParams:w,on:r,emit:h}=x;const m="swiper-pagination";w({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${m}-bullet`,bulletActiveClass:`${m}-bullet-active`,modifierClass:`${m}-`,currentClass:`${m}-current`,totalClass:`${m}-total`,hiddenClass:`${m}-hidden`,progressbarFillClass:`${m}-progressbar-fill`,progressbarOppositeClass:`${m}-progressbar-opposite`,clickableClass:`${m}-clickable`,lockClass:`${m}-lock`,horizontalClass:`${m}-horizontal`,verticalClass:`${m}-vertical`,paginationDisabledClass:`${m}-disabled`}}),t.pagination={el:null,bullets:[]};let z,k=0;function H(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function M(e,i){const{bulletActiveClass:s}=t.params.pagination;e&&(e=e[`${i==="prev"?"previous":"next"}ElementSibling`],e&&(e.classList.add(`${s}-${i}`),e=e[`${i==="prev"?"previous":"next"}ElementSibling`],e&&e.classList.add(`${s}-${i}-${i}`)))}function T(e){const i=e.target.closest(N(t.params.pagination.bulletClass));if(!i)return;e.preventDefault();const s=E(i)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===s)return;t.slideToLoop(s)}else t.slideTo(s)}function y(){const e=t.rtl,i=t.params.pagination;if(H())return;let s=t.pagination.el;s=f(s);let n,c;const j=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,P=t.params.loop?Math.ceil(j/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(c=t.previousRealIndex||0,n=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(n=t.snapIndex,c=t.previousSnapIndex):(c=t.previousIndex||0,n=t.activeIndex||0),i.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const l=t.pagination.bullets;let u,g,$;if(i.dynamicBullets&&(z=G(l[0],t.isHorizontal()?"width":"height",!0),s.forEach(o=>{o.style[t.isHorizontal()?"width":"height"]=`${z*(i.dynamicMainBullets+4)}px`}),i.dynamicMainBullets>1&&c!==void 0&&(k+=n-(c||0),k>i.dynamicMainBullets-1?k=i.dynamicMainBullets-1:k<0&&(k=0)),u=Math.max(n-k,0),g=u+(Math.min(l.length,i.dynamicMainBullets)-1),$=(g+u)/2),l.forEach(o=>{const p=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(d=>`${i.bulletActiveClass}${d}`)].map(d=>typeof d=="string"&&d.includes(" ")?d.split(" "):d).flat();o.classList.remove(...p)}),s.length>1)l.forEach(o=>{const p=E(o);p===n?o.classList.add(...i.bulletActiveClass.split(" ")):t.isElement&&o.setAttribute("part","bullet"),i.dynamicBullets&&(p>=u&&p<=g&&o.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),p===u&&M(o,"prev"),p===g&&M(o,"next"))});else{const o=l[n];if(o&&o.classList.add(...i.bulletActiveClass.split(" ")),t.isElement&&l.forEach((p,d)=>{p.setAttribute("part",d===n?"bullet-active":"bullet")}),i.dynamicBullets){const p=l[u],d=l[g];for(let C=u;C<=g;C+=1)l[C]&&l[C].classList.add(...`${i.bulletActiveClass}-main`.split(" "));M(p,"prev"),M(d,"next")}}if(i.dynamicBullets){const o=Math.min(l.length,i.dynamicMainBullets+4),p=(z*o-z)/2-$*z,d=e?"right":"left";l.forEach(C=>{C.style[t.isHorizontal()?d:"top"]=`${p}px`})}}s.forEach((l,u)=>{if(i.type==="fraction"&&(l.querySelectorAll(N(i.currentClass)).forEach(g=>{g.textContent=i.formatFractionCurrent(n+1)}),l.querySelectorAll(N(i.totalClass)).forEach(g=>{g.textContent=i.formatFractionTotal(P)})),i.type==="progressbar"){let g;i.progressbarOpposite?g=t.isHorizontal()?"vertical":"horizontal":g=t.isHorizontal()?"horizontal":"vertical";const $=(n+1)/P;let o=1,p=1;g==="horizontal"?o=$:p=$,l.querySelectorAll(N(i.progressbarFillClass)).forEach(d=>{d.style.transform=`translate3d(0,0,0) scaleX(${o}) scaleY(${p})`,d.style.transitionDuration=`${t.params.speed}ms`})}i.type==="custom"&&i.renderCustom?(l.innerHTML=i.renderCustom(t,n+1,P),u===0&&h("paginationRender",l)):(u===0&&h("paginationRender",l),h("paginationUpdate",l)),t.params.watchOverflow&&t.enabled&&l.classList[t.isLocked?"add":"remove"](i.lockClass)})}function L(){const e=t.params.pagination;if(H())return;const i=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let s=t.pagination.el;s=f(s);let n="";if(e.type==="bullets"){let c=t.params.loop?Math.ceil(i/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&c>i&&(c=i);for(let j=0;j<c;j+=1)e.renderBullet?n+=e.renderBullet.call(t,j,e.bulletClass):n+=`<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`}e.type==="fraction"&&(e.renderFraction?n=e.renderFraction.call(t,e.currentClass,e.totalClass):n=`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),e.type==="progressbar"&&(e.renderProgressbar?n=e.renderProgressbar.call(t,e.progressbarFillClass):n=`<span class="${e.progressbarFillClass}"></span>`),t.pagination.bullets=[],s.forEach(c=>{e.type!=="custom"&&(c.innerHTML=n||""),e.type==="bullets"&&t.pagination.bullets.push(...c.querySelectorAll(N(e.bulletClass)))}),e.type!=="custom"&&h("paginationRender",s[0])}function I(){t.params.pagination=_(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let i;typeof e.el=="string"&&t.isElement&&(i=t.el.querySelector(e.el)),!i&&typeof e.el=="string"&&(i=[...document.querySelectorAll(e.el)]),i||(i=e.el),!(!i||i.length===0)&&(t.params.uniqueNavElements&&typeof e.el=="string"&&Array.isArray(i)&&i.length>1&&(i=[...t.el.querySelectorAll(e.el)],i.length>1&&(i=i.filter(s=>V(s,".swiper")[0]===t.el)[0])),Array.isArray(i)&&i.length===1&&(i=i[0]),Object.assign(t.pagination,{el:i}),i=f(i),i.forEach(s=>{e.type==="bullets"&&e.clickable&&s.classList.add(...(e.clickableClass||"").split(" ")),s.classList.add(e.modifierClass+e.type),s.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.type==="bullets"&&e.dynamicBullets&&(s.classList.add(`${e.modifierClass}${e.type}-dynamic`),k=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),e.type==="progressbar"&&e.progressbarOpposite&&s.classList.add(e.progressbarOppositeClass),e.clickable&&s.addEventListener("click",T),t.enabled||s.classList.add(e.lockClass)}))}function S(){const e=t.params.pagination;if(H())return;let i=t.pagination.el;i&&(i=f(i),i.forEach(s=>{s.classList.remove(e.hiddenClass),s.classList.remove(e.modifierClass+e.type),s.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&(s.classList.remove(...(e.clickableClass||"").split(" ")),s.removeEventListener("click",T))})),t.pagination.bullets&&t.pagination.bullets.forEach(s=>s.classList.remove(...e.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const e=t.params.pagination;let{el:i}=t.pagination;i=f(i),i.forEach(s=>{s.classList.remove(e.horizontalClass,e.verticalClass),s.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?O():(I(),L(),y())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&y()}),r("snapIndexChange",()=>{y()}),r("snapGridLengthChange",()=>{L(),y()}),r("destroy",()=>{S()}),r("enable disable",()=>{let{el:e}=t.pagination;e&&(e=f(e),e.forEach(i=>i.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{y()}),r("click",(e,i)=>{const s=i.target,n=f(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&n&&n.length>0&&!s.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&s===t.navigation.nextEl||t.navigation.prevEl&&s===t.navigation.prevEl))return;const c=n[0].classList.contains(t.params.pagination.hiddenClass);h(c===!0?"paginationShow":"paginationHide"),n.forEach(j=>j.classList.toggle(t.params.pagination.hiddenClass))}});const q=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=f(e),e.forEach(i=>i.classList.remove(t.params.pagination.paginationDisabledClass))),I(),L(),y()},O=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=f(e),e.forEach(i=>i.classList.add(t.params.pagination.paginationDisabledClass))),S()};Object.assign(t.pagination,{enable:q,disable:O,render:L,update:y,init:I,destroy:S})}const U=b.section`
  width: 100%;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    margin-bottom: 78px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 150px;
  }
`,A=b(X)`
  width: 100%;
  min-width: 320px;
  max-width: 375px;
  padding: 60px 16px 0;
  margin: 0 auto;
  outline: none;

  @media (min-width: 768px) {
    width: 768px;
    min-width: unset;
    max-width: unset;
    padding: 120px 32px 0;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 150px 120px 0;
  }
`,J=b(A)`
  margin-bottom: 60px;

  .about-project {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-align: left;
    color: #0b0b0b80;
    margin-bottom: 8px;
  }

  .about-title {
    font-family: 'Oddval';
    font-weight: 600;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    margin-bottom: 32px;
  }

  .accent {
    color: #f77d07;
    text-transform: uppercase;
  }

  .swiper {
    width: 100%;
    height: 100%;
    margin-bottom: 60px;
  }

  .about-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
  }

  .about-list-item {
    background: #f8f8f8;
    padding: 38px 32px;
    border-radius: 20px;
  }
  .swiper-slide {
    height: unset;
  }

  .about-list-item-number {
    padding-top: 3px;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: #0b0b0b;
    box-shadow: 0px 1px 4px 0px #1018280f;
    margin-bottom: 24px;

    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #ffffff;
  }

  .about-list-item-title {
    font-family: 'Oddval';
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: left;
    color: #0b0b0b;
    margin-bottom: 12px;
  }

  .about-list-item-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.02em;
    text-align: left;
    color: #0b0b0bcc;
  }

  .about-info {
    font-family: 'Oddval';
    font-weight: 600;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    text-align: center;
    padding: 24px 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 120px;

    .about-project {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 30px;
    }

    .about-title {
      font-size: 45px;
      line-height: 1.11;
      margin-bottom: 60px;
    }

    .swiper {
      margin-bottom: 120px;
      padding-bottom: 48px;
    }

    .about-list {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      gap: 0;
    }

    .about-list-item {
      padding: 38px 38px;
      min-height: 100%;
      align-self: stretch;
    }

    .about-list-item-number {
      padding-top: 4px;
      width: 60px;
      height: 60px;
      margin-bottom: 32px;

      font-size: 32px;
      line-height: 1.125;
    }

    .about-list-item-title {
      font-size: 22px;
      line-height: 1.18;
      margin-bottom: 16px;
    }

    .about-list-item-text {
      font-size: 18px;
      line-height: 1.33;
    }

    .swiper-pagination {
      margin-top: 48px;
    }

    .swiper-pagination-bullet {
      background: #0b0b0b;
    }

    .swiper-pagination-bullet-active {
      background: #f77d07;
    }

    .about-info {
      font-size: 45px;
      line-height: 1.11;
      padding: 32px 44px;
    }
  }

  @media (min-width: 1440px) {
    margin-bottom: 150px;

    .about-title {
      font-size: 60px;
      line-height: 1.13;
      margin-bottom: 80px;
    }

    .swiper {
      margin-bottom: 150px;
      padding-bottom: 0px;
    }

    .about-list {
      gap: 24px;
    }
    .about-list-item {
      width: 369px !important;
      &:nth-of-type(3) {
        width: 414px !important;
      }
    }
    .about-list-item-number {
      padding-top: 5px;
      width: 72px;
      height: 72px;
      margin-bottom: 40px;

      font-size: 40px;
      line-height: 1.1;
    }

    .about-list-item-title {
      font-size: 28px;
      line-height: 1.14;
      margin-bottom: 20px;
    }

    .about-list-item-text {
      font-size: 20px;
      line-height: 1.3;
    }

    .about-info {
      font-size: 60px;
      line-height: 1.13;
      padding: 40px 84px;
    }
  }
`,K=()=>a.jsxs(J,{children:[a.jsx("p",{className:"about-project",children:"Про проєкт"}),a.jsxs("h2",{className:"about-title",children:[a.jsx("span",{className:"accent",children:"МІСТОХАБ"})," це"]}),a.jsxs(W,{wrapperTag:"ul",wrapperClass:"about-list",className:"swiper",resizeObserver:!0,onResize:x=>{x.slideTo(0),x.update()},breakpoints:{1440:{slidesPerView:3,initialSlide:0,slideTo:0,enabled:!0,spaceBetween:0,grid:{row:1}},768:{slidesPerView:2,initialSlide:0,slideTo:0,enabled:!0,spaceBetween:"16px",allowTouchMove:!0,grid:{row:1},pagination:{enabled:!0,clickable:!0}}},slidesPerView:1,allowTouchMove:!1,grid:{rows:3},initialSlide:0,enabled:!0,pagination:{enabled:!1,clickable:!0},modules:[R],children:[a.jsxs(v,{tag:"li",className:"about-list-item",children:[a.jsx("div",{className:"about-list-item-number",children:"1"}),a.jsx("h3",{className:"about-list-item-title",children:"Кафе"}),a.jsx("p",{className:"about-list-item-text",children:"Стане місцем якісного відпочинку, знайомств та генерування ідей."})]}),a.jsxs(v,{tag:"li",className:"about-list-item",children:[a.jsx("div",{className:"about-list-item-number",children:"2"}),a.jsx("h3",{className:"about-list-item-title",children:"Івент-простір"}),a.jsx("p",{className:"about-list-item-text",children:"Розвиватиме культурне життя Полтави та стане місцем для самореалізації."})]}),a.jsxs(v,{tag:"li",className:"about-list-item",children:[a.jsx("div",{className:"about-list-item-number",children:"3"}),a.jsx("h3",{className:"about-list-item-title",children:"Крамниця МІСТОШОП"}),a.jsx("p",{className:"about-list-item-text",children:"Продаватиме унікальні сучасні сувеніри, що відображають дух міста та його культурну спадщину."})]})]}),a.jsxs("p",{className:"about-info",children:["80% прибутку ",a.jsx("span",{className:"accent",children:"МІСТОХАБ"})," буде спрямовано на фінансування соціальних проєктів містян"]})]}),Q="/MistoHub/assets/howItWorkBg-220ae44c.svg",Z="/MistoHub/assets/howItWorkBg-tablet-6f286e72.svg",tt="/MistoHub/assets/howItWorkBg-desktop-c7cada1c.svg",et=b.div`
  width: 100%;

  background-image: url(${Q});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 60% center;

  @media (min-width: 768px) {
    background-image: url(${Z});
    background-position: 60% center;
  }

  @media (min-width: 1440px) {
    background-image: url(${tt});
    background-position: 67% center;
  }
`,it=b(A)`
  margin-bottom: 60px;

  .container-inner {
    padding: 104px 0 82px;
  }

  .how-it-work-title {
    font-family: Oddval;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.33;
    letter-spacing: -0.02em;
    text-align: left;
    color: #ffffff;
    margin-bottom: 32px;
  }

  .accent {
    color: #f77d07;
  }

  .how-it-work-btn {
    display: block;
    padding: 15px 20px;
    border-radius: 30px;
    background: #ffffff;
    border: none;
    outline: none;
    margin: 0 auto;

    font-size: 14px;
    font-weight: 600;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-align: center;
    color: #0b0b0b;

    &:active {
      color: #f77d07;
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 60px;
  }

  .how-it-work-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
  }

  .how-it-work-item {
    background: #ffffff;
    padding: 32px;
    border-radius: 20px;
  }
  .swiper-slide {
    height: unset;
  }

  .how-it-work-number {
    padding-top: 3px;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    opacity: 0px;
    background: #f77d07;
    box-shadow: 0px 1px 4px 0px #1018280f;
    margin-bottom: 16px;

    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #ffffff;
  }

  .how-it-work-text {
    font-family: Oddval;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.11;
    letter-spacing: -0.02em;
    text-align: left;
    color: #0b0b0b;
  }

  .swiper-pagination {
    bottom: 40px;
  }

  .swiper-pagination-bullet {
    background: #ffffffa6;
  }

  .swiper-pagination-bullet-active {
    background: #ffffff;
  }

  @media (min-width: 768px) {
    margin-bottom: 120px;

    .container-inner {
      padding: 200px 0 161px;
    }

    .how-it-work-title {
      font-size: 45px;
      line-height: 1.11;
      margin-bottom: 60px;
    }

    .how-it-work-btn {
      padding: 20px 40px;
      border-radius: 30px;

      font-size: 16px;
      line-height: 1.5;
    }

    .how-it-work-list {
      flex-flow: row wrap;
      gap: 16px;
      row-gap: 16px;
      margin-bottom: 60px;
    }

    .swiper-slide,
    .how-it-work-item {
      padding: 32px;
      border-radius: 20px;

      &:first-of-type {
        width: 274px !important;
      }
      &:nth-of-type(2) {
        width: 414px !important;
      }
      &:nth-of-type(3) {
        width: 203px !important;
      }
      &:nth-of-type(4) {
        width: 266px !important;
      }
      &:nth-of-type(5) {
        width: 203px !important;
      }
    }

    .how-it-work-number {
      padding-top: 4px;
      width: 60px;
      height: 60px;
      margin-bottom: 16px;

      font-size: 32px;
      line-height: 1.125;
    }

    .how-it-work-text {
      font-size: 16px;
      line-height: 1.25;
    }

    .swiper {
      padding-bottom: 0;
    }
  }

  @media (min-width: 1440px) {
    margin-bottom: 150px;

    .container-inner {
      padding: 258px 0 207px;
    }

    .how-it-work-title {
      font-size: 60px;
      line-height: 1.13;
      margin-bottom: 80px;
    }

    .how-it-work-btn {
      padding: 23px 46px;
      border-radius: 60px;

      font-size: 18px;
      line-height: 1.33;

      &:hover {
        color: #f77d07;
      }
    }

    .how-it-work-list {
      gap: 24px;
      margin-bottom: 80px;
    }

    .swiper-slide,
    .how-it-work-item {
      padding: 40px;
      &:first-of-type {
        width: 540px !important;
      }
      &:nth-of-type(2) {
        width: 636px !important;
      }
      &:nth-of-type(3) {
        width: 384px !important;
      }
      &:nth-of-type(4) {
        width: 384px !important;
      }
      &:nth-of-type(5) {
        width: 384px !important;
      }
    }

    .how-it-work-number {
      padding-top: 5px;
      width: 72px;
      height: 72px;
      margin-bottom: 30px;

      font-size: 40px;
      line-height: 1.1;
    }

    .how-it-work-text {
      font-size: 22px;
      line-height: 1.18;
    }
  }
`,at=()=>{const x=D.useRef(null),{openModal:t}=Y();return D.useEffect(()=>{const w=()=>{const r=window.innerWidth;let h=0;r>=1440?h=(r-1440)/2-335:r>=768&&r<1440?h=(r-768)/2-393:h=(r-375)/2-194,x.current.style.backgroundPosition=`left ${h}px center`};return window.addEventListener("resize",w),w(),()=>window.removeEventListener("resize",w)}),a.jsx(et,{ref:x,children:a.jsx(it,{children:a.jsxs("div",{className:"container-inner",children:[a.jsx("h2",{className:"how-it-work-title",children:"Як це працює?"}),a.jsxs(W,{wrapperTag:"ul",wrapperClass:"how-it-work-list",className:"swiper",resizeObserver:!0,onResize:w=>{w.slideTo(0),w.update()},breakpoints:{768:{slidesPerView:5,enabled:!0,initialSlide:0,slideTo:0,pagination:{enabled:!1},spaceBetween:0}},slidesPerView:1,grid:{row:1},enabled:!0,initialSlide:0,pagination:{enabled:!0,clickable:!0},spaceBetween:16,modules:[R],children:[a.jsxs(v,{tag:"li",className:"how-it-work-item",children:[a.jsx("div",{className:"how-it-work-number",children:"1"}),a.jsxs("p",{className:"how-it-work-text",children:["Люди і компанії вкладають кошти у відновлення історичної будівлі"," ",a.jsx("span",{className:"accent",children:"МІСТОХАБ"})]})]}),a.jsxs(v,{tag:"li",className:"how-it-work-item",children:[a.jsx("div",{className:"how-it-work-number",children:"2"}),a.jsxs("p",{className:"how-it-work-text",children:["У відновленій будівлі відкривається МІСТОХАБ, в якому функціонують:"," ",a.jsx("span",{className:"accent",children:"Кафе, Крамниця локальних виробників Містошоп, Івент-простір"})," ","та генерують прибуток"]})]}),a.jsxs(v,{tag:"li",className:"how-it-work-item",children:[a.jsx("div",{className:"how-it-work-number",children:"3"}),a.jsxs("p",{className:"how-it-work-text",children:["80% прибутку передається у Фонд міських ініціатив"," ",a.jsx("span",{className:"accent",children:"МІСТОХАБ"})]})]}),a.jsxs(v,{tag:"li",className:"how-it-work-item",children:[a.jsx("div",{className:"how-it-work-number",children:"4"}),a.jsxs("p",{className:"how-it-work-text",children:[a.jsx("span",{className:"accent",children:"Фонд міських ініціатив"})," оголошує конкурс проєктів містян, a імпакт-інвестори обирають найкращі ідеї"]})]}),a.jsxs(v,{tag:"li",className:"how-it-work-item",children:[a.jsx("div",{className:"how-it-work-number",children:"5"}),a.jsxs("p",{className:"how-it-work-text",children:[a.jsx("span",{className:"accent",children:"Фонд міських ініціатив"})," фінансує проєкти переможців"]})]})]}),a.jsx("button",{className:"how-it-work-btn",type:"button",onClick:()=>t("join_modal"),children:"Приєднатися"})]})})})},st="/MistoHub/assets/building1-7921ea51.svg",nt="/MistoHub/assets/building2-f1c01339.svg",lt="/MistoHub/assets/building3-5c8bd933.svg",ot="/MistoHub/assets/building4-204b02df.svg",rt=b(A)`
  margin-bottom: 60px;
  padding-bottom: 21px;
  width: 100%;
  overflow: hidden;

  .building-title {
    font-family: 'Oddval';
    font-weight: 600;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    margin-bottom: 14px;
  }

  .accent {
    color: #f77d07;
    text-transform: uppercase;
  }

  .building-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.02em;
    text-align: left;
    color: #0b0b0bcc;
    margin-bottom: 40px;
  }
  .building-img-container {
    position: relative;
  }
  .building-img {
    max-width: 100%;
    object-fit: contain;
    border-radius: 20px;
  }

  @media (min-width: 768px) {
    margin-bottom: 78px;
    padding-bottom: 21px;

    .building-title {
      font-size: 45px;
      line-height: 1.11;
      margin-bottom: 30px;
    }
    .building-text {
      font-size: 24px;
      line-height: 1.33;
    }
  }

  @media (min-width: 1440px) {
    margin-bottom: 181px;
    padding-bottom: 31px;

    .building-title {
      font-size: 60px;
      line-height: 1.13;
      margin-bottom: 30px;
    }
    .building-text {
      font-size: 28px;
      line-height: 1.21;
      padding-right: 120px;
      margin-bottom: 40px;
    }
  }
`,B=b.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
`,pt=b(B)`
  background-image: url(${st});
  top: 106px;
  left: -21px;
  width: 61px;
  height: 84px;

  @media (min-width: 768px) {
    top: 141px;
    left: -44px;
    width: 114px;
    height: 139px;
  }
  @media (min-width: 1440px) {
    top: 174px;
    left: -103px;
    width: 136px;
    height: 168px;
  }
`,dt=b(B)`
  background-image: url(${nt});
  top: 221px;
  left: -22px;
  width: 40px;
  height: 40px;

  @media (min-width: 768px) {
    top: 332px;
    left: -39px;
    width: 65px;
    height: 65px;
  }
  @media (min-width: 1440px) {
    left: -87px;
    top: 423px;
    width: 65px;
    height: 65px;
  }
`,ct=b(B)`
  background-image: url(${lt});
  top: 49%;
  left: 94%;
  width: 40px;
  height: 55px;

  @media (min-width: 768px) {
    top: 168px;
    left: 678px;
    width: 79px;
    height: 111px;
  }
  @media (min-width: 1440px) {
    top: 349px;
    left: 1222px;
    width: 81px;
    height: 112px;
  }
`,gt=b(B)`
  background-image: url(${ot});
  top: 77%;
  left: 85%;
  width: 73px;
  height: 101px;

  @media (min-width: 768px) {
    top: 352px;
    left: 614px;
    width: 143px;
    height: 201px;
  }
  @media (min-width: 1440px) {
    top: 527px;
    left: 1128px;
    width: 186px;
    height: 257px;
  }
`,F="/MistoHub/assets/building-0fd1d2de.jpg",mt="/MistoHub/assets/building@2x-6f4bbcf0.jpg",xt="/MistoHub/assets/building-tablet-fcd0323f.jpg",ht="/MistoHub/assets/building-tablet@2x-4bed8edc.jpg",bt="/MistoHub/assets/building-mobile-f96d3050.jpg",ut="/MistoHub/assets/building-mobile@2x-2ecbf732.jpg",ft="/MistoHub/assets/building-546dad3d.webp",wt="/MistoHub/assets/building@2x-cdd55e18.webp",vt="/MistoHub/assets/building-tablet-6b49ad77.webp",kt="/MistoHub/assets/building-tablet@2x-e385e999.webp",yt="/MistoHub/assets/building-mobile-24746013.webp",jt="/MistoHub/assets/building-mobile@2x-ac0864e6.webp",Ct=()=>a.jsxs(rt,{children:[a.jsxs("h2",{className:"building-title",children:["Будівля ",a.jsx("span",{className:"accent",children:"МІСТОХАБ"})," це історична спадщина Полтави"]}),a.jsx("p",{className:"building-text",children:"В 1909 році на Спаській, 10 розташовувався перший у Полтаві пивоварний завод та пивниця «Притулок друзів»"}),a.jsxs("div",{className:"building-img-container",children:[a.jsxs("picture",{children:[a.jsx("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:`${yt} 1x, ${jt} 2x`,width:"343",height:"348"}),a.jsx("source",{media:"(max-width: 767px)",srcSet:`${bt} 1x, ${ut} 2x`,width:"343",height:"348"}),a.jsx("source",{type:"image/webp",media:"(max-width: 1439px)",srcSet:`${vt} 1x, ${kt} 2x`,width:"704",height:"534"}),a.jsx("source",{media:"(max-width: 1439px)",srcSet:`${xt} 1x, ${ht} 2x`,width:"704",height:"534"}),a.jsx("source",{type:"image/webp",srcSet:`${ft} 1x, ${wt} 2x`,width:"1200",height:"753"}),a.jsx("img",{className:"building-img",srcSet:`${F} 1x, ${mt} 2x`,src:F,alt:"Будівля МІСТОХАБ",width:"1200",height:"753"})]}),a.jsx(pt,{}),a.jsx(dt,{}),a.jsx(ct,{}),a.jsx(gt,{})]})]}),Lt=()=>a.jsxs(U,{id:"about",children:[a.jsx(K,{}),a.jsx(at,{}),a.jsx(Ct,{})]});export{Lt as default};
