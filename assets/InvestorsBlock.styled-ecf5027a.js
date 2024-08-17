import{u as s,e as f,h as w}from"./index-66592a1d.js";import{C as l}from"./HomePage-ac5aa16a.js";const y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAACkCAAAAAA7nASIAAACrklEQVR42u3cu26kMBSA4bz/S6GVCwoKiikopnBB4YLCBQWFC5axxzeGTBJlR3sY/acJHIHCp+O7onys7xsf2LBhw4YNGzZs2LBhw4YNGzZs2LBhw4YNGzZsb2378yRe/nm/+t3YsGETZ5M1AGLDhg0bNmzYsGHDhg0bNmzYsGF7ke28gQ0bNmzYsGHDhg2bYJsdtR7n47R9SM9Ga22dLJttttD7rNOq8dHqw7TSFcO0Id0Mi3jbfCfcosufO7dFOpfU9TmtJuG2krZ9rnuedl2ZbibRNucN7Wjt1V/193So2qDNtS3Sq6+aulo7+rRaJNsunlDUxPhr7cW+Kbohp41voaGIPn0RbLNlUWYPStVUsZd1CdGWtfKVm+XahqrXXOLdWD043e5S2YY0YFZ38my+PuvD1/pulUf+Xhub7Gm+c6nMIm1z2STXdfHdabuIP3ehYgFzW20WqTazSzTh4+dPhokduS6jNJveJbrQFo/XL/XAE98ez2LrQyWK53QM+4lNn9eWliD6LWzuRzaxbXJ6Mpb0D7ZzjSW7OcCVc0CYuewt4mu7OaAXPQfs5u4pzt31zOXia7tCNdXLwtdcw/GaK82C51pz2bIL5bXyUm7awn5Hp4XJUqYFr5VDnxmK7ajJFQybGXdJY0kYGe/pbjdqSrDl6BNo25tOQ1N87OLTajDmqvI4ee+It71pSEvbm9a20GvyyYgrO1N6sI22+qjhH0wAL7WtRh3QKlznxtSUyyMiNa/Cbesy3O9bUx0SxROtq7vNAvqLoz2pZ6/Oboth81CFZdrSk/vukaxM2/8NbNiwYcOGDRs2bNhea+PvzLFhw4YNGzZs2LBhw4YNGzZs2LBhO4GN/xuKDRu2X9rOG9iwYcOGDRs2bNiwYcOGDRs2bNiwYcOGDRu2EH8B4ajrnFKix8YAAAAASUVORK5CYII=",b=({start:t,end:n})=>w`
  0% {
    transform: translateX(${t});
  }
  100% {
    transform: translateX(${n}px);
  }
`,G=s.div`
  margin-bottom: 60px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-bottom: 120px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 150px;
  }
`,Y=s.ul`
  ${t=>{if(!t.$anim)return;const n=b(t.$anim);return f`
      animation: ${n} ${t.$anim.time}s linear infinite;
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
`,L=s.ul`
  ${t=>{if(!t.$anim)return;const n=b(t.$anim);return f`
      animation: ${n} ${t.$anim.time}s linear infinite;
    `}}

  display: flex;
  column-gap: 12px;

  &:active {
    animation-play-state: paused;
  }

  img {
    border: 1px solid black;
    border-radius: 10px;
    width: 140px;
    height: 70px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 32px;

    img {
      width: 290px;
      height: 145px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:hover {
      animation-play-state: paused;
    }
  }
`,v=(t,n,i)=>{if(!t)return;const a=t*(n||i?212:92),e=n?1440:i?768:375,m=a*2-e,r=n?34.2:i?68.2:29.6;return{start:0,end:-m,time:m/r}};function u(t,n,i){const a=n/t;return a<=i?{width:n,height:a}:{width:t*i,height:i}}function O(t,n,i,a){const e=new URLSearchParams;e.set("w",String(n.width)),e.set("h",String(n.height)),e.set("auto","format");const m=n.width/n.height,r=t.match(/-(\d+)x(\d+)\./);if(!r)return t;const p=parseInt(r[1],10),d=parseInt(r[2],10);let o=p,c=d;if(i&&(e.set("rect",[~~(i.left*p),~~(i.top*d),~~((1-i.right-i.left)*p),~~((1-i.bottom-i.top)*d)].join(",")),o=~~((1-i.right-i.left)*p),c=~~((1-i.bottom-i.top)*d)),a){const x=~~(a.width*p),h=~~(a.height*d),g=u(m,o,c);g.width<x||g.height<h?(e.set("fit","fill"),e.set("bg","00ffffff"),e.set("rect",[~~(a.x*p-x/2),~~(a.y*d-h/2),x,h].join(","))):(e.set("fit","crop"),e.set("crop","focalpoint"),e.set("fp-x",String(a.x)),e.set("fp-y",String(a.y)))}return`${t}?${e.toString()}`}const A=s(l)`
  padding-top: 60px;
  margin-bottom: 32px;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    padding-top: 120px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 150px;
    margin-bottom: 80px;
  }
`,R=s(A)`
  padding-top: 30px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    padding-top: 30px;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 30px;
    margin-bottom: 115px;
  }
`,S=s("img")`
  display: none;
  position: absolute;
  right: 16px;
  bottom: 0;
  width: 245px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    display: block;
    right: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    right: 120px;
  }
`,W=s(l)`
  padding: 0;
`,D=s.p`
  color: rgba(11, 11, 11, 0.5);
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.32px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.32px;
    margin-bottom: 30px;
  }
`,I=s.h2`
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
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 60px;
    font-weight: 600;
    line-height: 68px;
    letter-spacing: -1.2px;
    margin-bottom: 30px;
  }
`,X=s.p`
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
`;export{G as C,D as I,I as M,W as P,X as S,A as T,Y as a,L as b,R as c,y as d,S as e,O as g,v as m};
