import{j as i,L as e,u as t}from"./index-7698ae50.js";import{a as r,S as a,u as p,I as n,b as s}from"./HomePage-d4d663b9.js";const d=()=>{const o=r({query:"(max-width: 768px)"});return i.jsx("address",{children:i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("span",{children:"Телефон: "}),i.jsx(e,{to:o?"tel:+380981340622":"https://t.me/MISTOHUB_admin",target:"blank",rel:"noopener noreferrer",children:"+38 (098) 134-06-22"})]}),i.jsxs("li",{children:[i.jsx("span",{children:"Email:"}),i.jsx(e,{to:"mailto:mistohub@gmail.com",target:"blank",rel:"noopener noreferrer",children:"mistohub@gmail.com"})]})]})})},x=d,l=t.footer`
  width: 100%;
  background-color: #0b0b0b;
  color: #ffffff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  @media (min-width: 375px) {
    font-size: 16px;
  }
`,m=t(a)`
  min-width: 320px;
  max-width: 375px;
  padding: 32px 16px 20px;

  .map-wrapper {
    width: 343px;
    height: 370px;
    border-radius: 20px;
    margin-bottom: 32px;
  }
  @media (max-width: 374px) {
    .map-wrapper {
      width: 288px;
    }
  }
  .icon-logo {
    width: 81px;
    height: 27px;
    fill: #ffffff;
    margin-bottom: 24px;
  }
  address {
    font-style: normal;
  }
  .address-mistohub {
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: left;

    margin-bottom: 24px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 244px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 40px;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  a {
    color: inherit;
    outline: none;
    font-size: 20px;
    transition: color 0.25s ease-in-out;
    &:active {
      color: #f77d07;
    }
  }
  .btn-supp {
    font-size: 16px;
    font-weight: 600;
    color: inherit;
    padding: 14px 24px;
    gap: 8px;
    border: none;
    border-radius: 30px;
    background-color: #f77d07;
    margin-bottom: 64px;
    outline: none;
    transition: background 0.25s ease-in-out;
    transition: color 0.25s ease-in-out;
    &:active {
      color: #898b90;
      background: #e3e3e3;
    }
  }
  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 768px) {
    width: 768px;
    min-width: unset;
    max-width: unset;
    padding: 64px 32px 32px;

    .map-wrapper {
      width: 704px;
      height: 486px;
      margin-bottom: 64px;
    }
    .icon-logo {
      width: 118px;
      height: 40px;
      margin-bottom: 30px;
    }
    .address-mistohub {
      line-height: 1.5;
      margin-bottom: 30px;
    }
    ul {
      gap: 24px;
      width: 293px;
      padding: 24px;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin-bottom: 30px;
    }
    a {
      font-size: 24px;
    }
    .btn-supp {
      font-size: 18px;
      padding: 23px 43px;
      border-radius: 60px;
      margin-bottom: 80px;
    }
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 120px 120px 38px;
    .footer-up {
      display: flex;
      gap: 120px;
      flex-direction: row-reverse;
    }
    .map-wrapper {
      width: 787px;
      height: 516px;
      margin-bottom: 80px;
    }

    ul {
      margin-bottom: 60px;
    }
    a:hover {
      color: #f77d07;
    }
    .btn-supp {
      margin-bottom: 0px;
      &:hover {
        background: #e97200;
      }
    }
  }
`,h=t.div`
  color: rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 20px;
  width: 100%;

  div:first-child {
    display: flex;
    margin-bottom: 8px;
    gap: 8px;
  }

  p {
    padding-right: 8px;
    position: relative;
  }

  p::after {
    content: '';
    position: absolute;
    top: 55%;
    height: 80%;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.5);
    right: 0;
    transform: translateY(-50%);
  }

  .btn-goit {
    display: flex;
    align-items: center;
    gap: 8px;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: none;
    margin-bottom: 20px;
    transition: color 0.25s ease-in-out;

    &:active {
      color: #ffffff;
      .icon-goit-white {
        fill: #ffffff;
      }
    }
  }

  .icon-goit-white {
    width: 59px;
    height: 18px;
    fill: #f77d07;
    transition: fill 0.25s ease-in-out;
  }

  @media (min-width: 768px) {
    padding-top: 38px;
    display: flex;
    column-gap: 10px;
    align-items: baseline;
    flex-wrap: wrap;
    row-gap: 24px;

    p {
      padding-right: 10px;
    }

    .btn-goit {
      gap: 10px;
      margin-bottom: 0px;
    }

    .icon-goit-white {
      width: 100px;
      height: 30px;
    }
  }

  @media (min-width: 1440px) {
    align-items: center;

    div:first-child {
      margin-bottom: 0;
    }
    .btn-goit:hover {
      color: #ffffff;
      .icon-goit-white {
        fill: #ffffff;
      }
    }
  }
`;function f(){const{openModal:o}=p();return i.jsx(l,{id:"footer",children:i.jsxs(m,{children:[i.jsxs("div",{className:"footer-up",children:[i.jsx("iframe",{className:"map-wrapper",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.710898082731!2d34.5648984!3d49.5843421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d825941b73909d%3A0xc6c99d30efb9fc4a!2z0JzQhtCh0KLQntCl0JDQkQ!5e0!3m2!1sru!2sua!4v1715196007146!5m2!1sua!2sua",loading:"lazy"}),i.jsxs("div",{children:[i.jsx(n,{width:"81",height:"27",iconName:"main-logo",styles:"icon-logo"}),i.jsx("p",{className:"address-mistohub",children:"м.Полтава, вул. Спаська, 10"}),i.jsx(x,{}),i.jsx("button",{className:"btn-supp",type:"button",onClick:()=>o("join_modal"),children:i.jsx("span",{children:"Підтримати проєкт"})})]})]}),i.jsxs(h,{children:[i.jsxs("div",{children:[i.jsx("p",{children:"© ГО «МІСТО ХАБ»"}),i.jsx("p",{children:"Всі права захищені"})]}),i.jsxs("button",{type:"button",className:"btn-goit",onClick:()=>o("team_modal"),children:["Розроблено студентами"," ",i.jsx(n,{width:"59",height:"18",iconName:"icon-goit-white",styles:"icon-goit-white"})]}),i.jsx(s,{sectionName:"footer"})]})]})})}export{f as default};
