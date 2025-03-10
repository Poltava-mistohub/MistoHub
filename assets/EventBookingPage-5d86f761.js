import{u as a,S as d,r as h,a as p,j as e,H as x,b as m,c as _,I as i,C as g,d as t,e as c,_ as b}from"./index-eafb5543.js";import{e as s,a as n,b as l}from"./event_place-77c31121.js";import u from"./Footer-ce7c9f4a.js";const o="/MistoHub/assets/event_place@2-5fc10cae.webp",j="/MistoHub/assets/checkmark-aa981d70.svg",f="/MistoHub/assets/prohibited-2ec73ea7.svg",k="/MistoHub/assets/red-dot-5075d595.svg",v="/MistoHub/assets/sparcle-745fa7c8.svg",w="/MistoHub/assets/tear-8aaaef19.svg",N=a.section`
  min-width: 320px;
  width: 100%;
  height: 700px;

  @media only screen and (min-width: 768px) {
    height: 1024px;
  }

  @media only screen and (min-width: 1440px) {
    height: 880px;
  }

  .title {
    position: absolute;
    margin: 0 auto;
    top: 162px;
    padding: 0 32px;
  }
`,y=a(d)`
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-width: 320px;
  max-width: 100%;
  height: 700px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    min-width: 100%;
    height: 1024px;
  }

  @media only screen and (min-width: 1440px) {
    min-width: 100%;
    height: 880px;
  }

  .hero_img_wrapper {
    width: 100%;
    height: 100%;
  }

  .hero_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,H=a.section`
  width: 100%;
  overflow: hidden;

  .container {
    position: relative;
  }

  .title_2 {
    margin-bottom: 15px;
  }

  .unordered_list {
    list-style: none;
    list-style-position: inside;
    
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.02em;
    text-align: left;
    color: #0b0b0b;
  }

  .unordered_list[data-list-image="hyphen"] {
    list-style-type: "- ";
  }

  .unordered_list[data-list-image="disc"] {
    list-style-type: "• ";
  }

  .custom_list_markers li {
    vertical-align: baseline;
  }

  .custom_list_markers li::before {
    height: 20px;
    width: 20px;
    margin-right: 4px;
    display: inline-block;
    vertical-align: sub;
  }

  .list_item_checkmark::before {
    content: url(${j});
  }

  .list_item_sparcle::before {
    content: url(${v});
  }

  .list_item_tear::before {
    content: url(${w});
  }

  .list_item_redDot::before {
    content: url(${k});
  }

  .list_item_prohibited::before {
    content: url(${f});
  }

  .list_item_exclamation::before {
    content: "‼️";
    vertical-align: baseline !important;
    text-align: center;
  }

  .content_block {
    margin-bottom: 80px;
  }

  .icon_price {
    fill: none;
    margin-right: 15px;
  }

  .m_vertical_align {
    display: inline-block;
    vertical-align: middle;
  }

  .book_event_button {
    font-family: 'FixelDisplay', sans-serif;
    height: 48px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.02em;
    background-color: #f77d07;
    border-radius: 35px;
    border: none;
    color: #ffffff;
    padding: 15px 20px;
    display: block;
    margin: 0 auto;
    transition: all 0.25s ease-in-out;
    text-align: center;
    min-width: 170px;
  }

  .book_event_button:hover {
    background-color: #e97200;
  }

  .book_event_button:active {
    background-color: #e3e3e3;
    color: #898b90;
  }

  .icon_octagon {
    position: absolute;
    bottom: -65px;
    left: -90px;
    width: 181px;
    height: 181px;
    transform: rotate(39deg);
    z-index: -1;
  }

  .icon_circle {
    position: absolute;
    top: 40px;
    right: -105px;
    width: 214px;
    height: 214px;
    z-index: -1;
  }

  @media only screen and (min-width: 768px) {
    .unordered_list {
      font-size: 24px;
      line-height: 1.33;
    }

    .icon_octagon {
      width: 241px;
      height: 241px;
    }

    .icon_circle {
      top: 70px;
      right: -145px;
      width: 314px;
      height: 314px;
    }

    .title_2 {
      margin-bottom: 30px;
    }

    .book_event_button {
      height: 64px;
      padding: 20px 40px;
      text-align: center;
      font-size: 16px;
      align-items: center;
      line-height: 1.5;
    }

    .custom_list_markers li::before {
      height: 25px;
      width: 25px;
      margin-right: 8px;
    }

    .content_block {
      margin-bottom: 100px;
    }
  }

  @media (min-width: 1440px) {
    .unordered_list {
      font-size: 28px;
      line-height: 1.21;
    }

    .icon_octagon {
      width: 281px;
      height: 281px;
      left: 50%;
      transform: translateX(calc(-50% - 720px)) rotate(39deg);
    }

    .icon_circle {
      width: 414px;
      height: 414px;
      left: 50%;
      transform: translateX(calc(-50% + 760px));
    }

    .book_event_button {
      height: 70px;
      padding: 23px 46px;
      font-size: 18px;
    }

    .custom_list_markers li::before {
      height: 30px;
      width: 30px;
    }
  }
`,S=h(()=>b(()=>import("./ModalsManager-1fd9c51d.js"),["assets/ModalsManager-1fd9c51d.js","assets/index-eafb5543.js","assets/index-fc121315.css","assets/index-20119065.js","assets/event_place-77c31121.js"])),P=()=>{const{openModal:r}=p();return e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsxs("main",{id:"event_booking",className:"event-page",children:[e.jsx(N,{children:e.jsxs(y,{children:[e.jsx(m,{item:{mobile:{png:s,png_2x:n,webp:l,webp_2x:o},tablet:{png:s,png_2x:n,webp:l,webp_2x:o},desktop:{png:s,png_2x:n,webp:l,webp_2x:o},alt:"Kitchen 1"},priority:!0,hidden:!1,className:"hero_img_wrapper",imgClassName:"hero_img"}),e.jsx(_,{className:"title",children:"Забронюй свій івент у МІСТОХАБ"})]})}),e.jsx(H,{children:e.jsxs("div",{className:"container",children:[e.jsx(i,{width:"414",height:"414",iconName:"iconCircle",styles:"icon_circle"}),e.jsxs(g,{className:"section_content",children:[e.jsxs("div",{className:"content_block",children:[e.jsx(t,{className:"title_2",children:"Простір:"}),e.jsxs("ul",{className:"unordered_list","data-list-image":"hyphen",children:[e.jsx("li",{children:"інклюзивний простір доступний для кожного"}),e.jsx("li",{children:"власне бомбосховище у радіусі 400 метрів"}),e.jsx("li",{children:"зручний паркінг"}),e.jsx("li",{children:"власне меню кейтерингу"})]})]}),e.jsx("div",{className:"content_block",children:e.jsx(t,{children:"Графік: 09:00–21:00"})}),e.jsxs("div",{className:"content_block",children:[e.jsxs(t,{className:"title_2",children:[e.jsx(i,{width:"89",height:"45",iconName:"icon-price",styles:"icon_price m_vertical_align"}),e.jsx("span",{className:"m_vertical_align",children:"Вартість:"})]}),e.jsxs("ul",{className:"unordered_list","data-list-image":"disc",children:[e.jsx("li",{children:"1500 грн/год – половина зали (до 42 місць)"}),e.jsx("li",{children:"2500 грн/год – вся зала (до 80 місць)"}),e.jsx("li",{children:"Мінімальне бронювання – 2 години"})]})]}),e.jsxs("div",{className:"content_block",children:[e.jsx(t,{className:"title_2",children:"Як забронювати?"}),e.jsxs("ul",{className:"unordered_list custom_list_markers",children:[e.jsx("li",{className:"list_item_checkmark",children:'Оплата – 100% передплата на рахунок ГО "МІСТО ХАБ"'}),e.jsx("li",{className:"list_item_checkmark",children:"Якщо плани зміняться – можемо перенести дату за погодженням з адміністратором"})]})]}),e.jsxs("div",{className:"content_block",children:[e.jsx(t,{className:"title_2",children:"Головне про використання простору"}),e.jsxs("ul",{className:"unordered_list custom_list_markers",children:[e.jsx("li",{className:"list_item_sparcle",children:"Дбайте про порядок і майно – це спільний простір."}),e.jsx("li",{className:"list_item_tear",children:"Використовуйте залу в межах заброньованого часу."}),e.jsx("li",{className:"list_item_redDot",children:"Замовляти свою їжу на подію не можливо!"}),e.jsx("li",{className:"list_item_prohibited",children:"Червоні лінії: без російськомовних матеріалів, політичного піару чи маніпуляцій."}),e.jsx("li",{className:"list_item_exclamation",children:"Якщо є пошкодження майна – організатор відшкодовує ремонт або заміну."})]})]}),e.jsx("button",{className:"book_event_button",type:"button",onClick:()=>r("event_booking_modal"),children:"Провести подію"}),e.jsx(i,{width:"89",height:"45",iconName:"octagonIcon",styles:"icon_octagon"})]})]})})]}),e.jsx(c.Suspense,{fallback:null,children:e.jsx(u,{})}),e.jsx(c.Suspense,{fallback:null,children:e.jsx(S,{activeSection:"event_booking"})})]})};export{P as default};
