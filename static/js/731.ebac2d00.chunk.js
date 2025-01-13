"use strict";(self.webpackChunkassignment=self.webpackChunkassignment||[]).push([[731],{731:(n,e,i)=>{i.r(e),i.d(e,{default:()=>je});var t,a,o,r,s,d,p,l=i(43),m=i(528),x=i(191);const c=x.A.section(t||(t=(0,m.A)(["\n  width: 100%;\n  height: 370px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #f7f7f7;\n  position: relative;\n  padding: 0 30px;\n  position: relative;\n\n  @media (max-width: 768px) {\n    height: 300px;\n    flex-direction: column;\n    padding: 20px 15px;\n    margin-bottom: 20px;\n    opacity: ",";\n  }\n"])),(n=>n.isNavOpen?"1":"0")),u=x.A.div(a||(a=(0,m.A)(["\n  width: 40%;\n  z-index: 10;\n  margin: 0 auto;\n  padding-left: 46px;\n\n  h4 {\n    font-size: 1.5rem;\n    margin-bottom: 10px;\n    color: #333;\n  }\n  .text {\n    font-size: 14px;\n    line-height: 1.6;\n    margin-bottom: 20px;\n    color: #666;\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-top: 20px;\n    padding: 40px;\n    text-align: -webkit-center; \n    position: absolute;\n    bottom: 30%;\n    left: -6px;\n    width: 100%;\n    margin-top: 20px;\n    padding: 40px;\n\n\n    h4 {\n      font-size: 1.2rem; \n    }\n    .text {\n      font-size: 12px; \n    }\n  }\n"]))),h=x.A.button(o||(o=(0,m.A)(["\n  width: 30%;\n  background: #0f406e;\n  color: #fff;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n  &:hover {\n    background: #fff;\n    color: #0f406e;\n  }\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n    width: 15%;\n    height: 50px;\n    border-radius: 50%;\n  }\n"]))),g=x.A.div(r||(r=(0,m.A)(["\n  width: 50%;\n  height: 400px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    height: auto;\n    margin: 20px 0;\n  }\n"]))),f=x.A.img(s||(s=(0,m.A)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: all 0.5s ease-in-out;\n  opacity: ",";\n\n    @media (max-width: 768px) {\n    width: 100%;\n    height: 100%;\n  }\n\n"])),(n=>n.isActive?"1":"0")),w=x.A.div(d||(d=(0,m.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  flex-direction: column;\n  position: absolute;\n  right: 15px;\n  top: 50%;\n\n  @media (max-width: 768px) {\n    top: auto;\n    bottom: 10px;\n    right: 50%;\n    transform: rotate(-90deg);\n  }\n"]))),b=x.A.button(p||(p=(0,m.A)(["\n  margin-bottom: 8px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: none;\n  transition: background-color 0.5s ease-in;\n  background-color: ",";\n\n  @media (max-width: 768px) {\n    width: 8px;\n    height: 8px;\n  }\n"])),(n=>n.isActive?"#00a2d4":"#f7f7f7"));var A=i(593),v=i(3),j=i(341),y=i(263);var L=i(984),z=i(579);const k=l.memo((n=>{var e,i,t,a;let{isNavOpen:o,toggleMobileNav:r}=n;const s=(0,v.wA)(),{dataReducer:d,loading:p}=(0,v.d4)((n=>n)),[m,x]=(0,l.useState)(window.innerWidth);(0,l.useEffect)((()=>{s((async n=>{n({type:y.A4});try{await j.A.get("https://fakestoreapiserver.reactbd.com/amazonproducts"),n({type:y.mS,payload:y.Bz})}catch(e){n({type:y.tw,error:"message"})}}))}),[s]),(0,l.useEffect)((()=>{const n=()=>{x(window.innerWidth)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),[]);const[k,I]=(0,l.useState)(0),N=(0,l.useCallback)((n=>{I(n)}),[]),Y=(0,l.useCallback)((()=>{var n,e;null!==d&&void 0!==d&&null!==(n=d.data)&&void 0!==n&&null!==(e=n.banners)&&void 0!==e&&e.length&&I((n=>{var e;return n===(null===d||void 0===d||null===(e=d.data)||void 0===e?void 0:e.banners.length)-1?0:n+1}))}),[null===d||void 0===d||null===(e=d.data)||void 0===e||null===(i=e.banners)||void 0===i?void 0:i.length]);return(0,l.useEffect)((()=>{const n=setInterval((()=>{Y()}),3e3);return()=>clearInterval(n)}),[Y]),(0,z.jsxs)(c,{isNavOpen:o,children:[(0,z.jsxs)(u,{children:[m<768?null:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("h4",{children:"Lorem ipsum"}),(0,z.jsx)("p",{className:"text",children:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"})]}),(0,z.jsx)(h,{children:m<768?(0,z.jsx)(A.A,{className:"know-more"}):(0,z.jsxs)(z.Fragment,{children:["Know More ",(0,z.jsx)(A.A,{})," "]})})]}),(0,z.jsx)(g,{children:p?(0,z.jsx)(L.a,{}):(null===d||void 0===d||null===(t=d.data)||void 0===t?void 0:t.banners)&&d.data.banners.length>0&&d.data.banners.map(((n,e)=>(0,z.jsx)(f,{isActive:e===k,src:n.banner_img,alt:"Banner ".concat(e)},e)))}),(0,z.jsx)(w,{children:(null===d||void 0===d||null===(a=d.data)||void 0===a?void 0:a.banners)&&d.data.banners.length>0&&d.data.banners.map(((n,e)=>(0,z.jsx)(b,{isActive:e===k,onClick:()=>N(e)},e)))})]})}));var I,N,Y,C,q,S,E,M,O,F,U=i(290);const W=x.A.section(I||(I=(0,m.A)(["\n  background-color: #f8f9fa;\n  padding: 48px 0;\n\n  @media (max-width: 768px) {\n    padding: 24px 0;\n  }\n"]))),D=x.A.section(N||(N=(0,m.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 40px;\n  margin: 0px 60px;\n\n  @media (max-width: 768px) {\n    flex-direction: column; \n    margin: 0 20px;\n    padding: 20px; \n"]))),B=x.A.div(Y||(Y=(0,m.A)(["\n  width: 40%;\n  margin-right: 32px;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-right: 0;\n  }\n\n  .form-container {\n    display: flex;\n    gap: 15px;\n  }\n"]))),H=x.A.h3(C||(C=(0,m.A)(["\n  margin-bottom: 30px;\n  color: #343a40;\n\n  @media (max-width: 768px) {\n    text-align: center;\n  }\n"]))),K=x.A.p(q||(q=(0,m.A)(["\n  color: #6c757d;\n  margin-bottom: 30px;\n  font-size: 14px;\n  line-height: 20px;\n\n  @media (max-width: 768px) {\n    text-align: center;\n"]))),X=x.A.input(S||(S=(0,m.A)(["\n  width: 100%;\n  height: auto;\n  background: #fff;\n  border-radius: 60px;\n  border: 0;\n  outline: none !important;\n  padding-left: 24px;\n  font-size: 16px;\n  box-shadow: 0 3px 6px rgb(0 0 0 /20%);\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n    padding-left: 16px;\n  }\n"]))),_=x.A.button(E||(E=(0,m.A)(["\n  width: 30%;\n  background: #0f406e;\n  color: #fff;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n  &:hover {\n    background: #fff;\n    color: #0f406e;\n  }\n\n  @media (max-width: 768px) {\n    width: 80%;\n    font-size: 14px;\n  }\n"]))),G=(0,U.i7)(M||(M=(0,m.A)(["\n  0% {\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n"]))),Q=x.A.div(O||(O=(0,m.A)(["\n  width: 46%;\n  overflow: hidden;\n\n animation: "," 3s ease-in-out;\n\n  @media (max-width: 768px) {\n    width: 80%; \n    margin-top: 20px; \n"])),G),R=x.A.img(F||(F=(0,m.A)(["\n  width: 80%;\n  height: 40%;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    height: 40%;\n  }\n"])));var T,J,P,V,Z;const $=x.A.div(T||(T=(0,m.A)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n"]))),nn=x.A.div(J||(J=(0,m.A)(["\n  background-color: white;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  max-width: 400px;\n  width: 100%;\n"]))),en=x.A.h2(P||(P=(0,m.A)(["\n  margin-bottom: 10px;\n"]))),tn=x.A.p(V||(V=(0,m.A)(["\n  margin-bottom: 20px;\n"]))),an=x.A.button(Z||(Z=(0,m.A)(["\n  width: 30%;\n  margin: auto;\n  background: #0f406e;\n  color: #fff;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n  &:hover {\n    background: #fff;\n    color: #0f406e;\n  }\n\n  @media (max-width: 768px) {\n    width: 80%;\n    font-size: 14px;\n  }\n"]))),on=n=>{let{handleClose:e,isModalOpen:i}=n;return i?(0,z.jsx)($,{children:(0,z.jsxs)(nn,{children:[(0,z.jsx)(en,{children:"Success!"}),(0,z.jsx)(tn,{children:"Thank you for subscribing to our newsletter!"}),(0,z.jsx)(an,{onClick:e,children:"Close"})]})}):null},rn=()=>{const[n,e]=(0,l.useState)(""),[i,t]=(0,l.useState)(!1);return(0,z.jsxs)(W,{children:[(0,z.jsxs)(D,{children:[(0,z.jsxs)(B,{children:[(0,z.jsx)(H,{children:"Subscribe"}),(0,z.jsx)(K,{children:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"}),(0,z.jsxs)("form",{onSubmit:n=>{n.preventDefault(),e(""),t(!0)},className:"form-container",children:[(0,z.jsx)(X,{type:"email",placeholder:"Your email address",value:n,onChange:n=>e(n.target.value),required:!0}),(0,z.jsxs)(_,{type:"submit",children:["Subscribe ",(0,z.jsx)(A.A,{})]})]})]}),(0,z.jsx)(Q,{children:(0,z.jsx)(R,{src:"https://cdn.prod.website-files.com/5c6d6c45eaa55f57c6367749/623104e9b3e071663f5059df_mobile%20folio.png",alt:"Subscribe"})})]}),i&&(0,z.jsx)(on,{isModalOpen:i,handleClose:()=>{t(!i)}})]})};var sn,dn,pn,ln,mn,xn,cn,un,hn;const gn=x.A.section(sn||(sn=(0,m.A)(["\n  position: relative;\n  width: 80%;\n  overflow: hidden;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  padding: 48px 0;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    padding: 24px;\n    overflow-x: scroll;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n"]))),fn=x.A.div(dn||(dn=(0,m.A)(["\n  display: flex;\n  transition: all 0.5s ease-in-out;\n  height: 250px;\n  gap: 20px;\n\n  @media (max-width: 768px) {\n    flex-direction: row;\n    height: auto;\n    gap: 5px;\n  }\n"]))),wn=x.A.div(ln||(ln=(0,m.A)(["\n  background-color: #0d4b7f;\n  color: white;\n  text-align: center;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  opacity: 1;\n  width: 335px;\n  height: 200px;\n  font-size: 14px;\n  text-align: left;\n\n  animation: "," 0.5s ease-in-out;\n\n  p {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n    font-size: 13px;\n    line-height: 18px;\n\n    .icon {\n      background: #fff;\n      border-radius: 10px;\n      color: #101217;\n    }\n  }\n\n  @media (max-width: 768px) {\n    width: 250px;\n    height: auto;\n    font-size: 12px;\n  }\n"])),(n=>{let{currentIndex:e}=n;return(n=>(0,U.i7)(pn||(pn=(0,m.A)(["\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(","%);\n  }\n"])),100*n))(e)})),bn=x.A.h2(mn||(mn=(0,m.A)(["\n  margin-bottom: 30px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 20px;\n    font-size: 1.2rem;\n  }\n"]))),An=x.A.p(xn||(xn=(0,m.A)(["\n  margin-bottom: 20px;\n  line-height: 10px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 15px;\n    font-size: 12px;\n  }\n"]))),vn=(x.A.button(cn||(cn=(0,m.A)(["\n  background-color: white;\n  color: #0d4b7f;\n  padding: 10px 15px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #0b3b64;\n    color: white;\n  }\n\n  @media (max-width: 768px) {\n    padding: 8px 12px;\n    font-size: 12px;\n  }\n"]))),x.A.button(un||(un=(0,m.A)(["\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  border: none;\n  padding: 10px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n\n  @media (max-width: 768px) {\n    padding: 8px;\n    opacity: 0;\n  }\n"])))),jn=x.A.button(hn||(hn=(0,m.A)(["\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  border: none;\n  padding: 10px;\n  cursor: pointer;\n  transition: all 0.5s ease-in;\n\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n\n  @media (max-width: 768px) {\n    padding: 8px;\n    opacity: 0;\n  }\n"])));var yn=i(772);const Ln=l.memo((()=>{const[n,e]=(0,l.useState)(0),[i,t]=(0,l.useState)(window.innerWidth),a=(0,l.useMemo)((()=>[{title:"Lorem Ipsum 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{title:"Lorem Ipsum 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{title:"Lorem Ipsum 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{title:"Lorem Ipsum 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{title:"Lorem Ipsum 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}]),[]),o=(0,l.useCallback)((()=>{e((n=>0===n?a.length-1:n-1))}),[a.length]),r=(0,l.useCallback)((()=>{e((n=>n===a.length-1?0:n+1))}),[a.length]);return(0,l.useEffect)((()=>{const n=()=>t(window.innerWidth);return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),[]),(0,l.useEffect)((()=>{if(i>768){const n=setInterval((()=>{r()}),3e3);return()=>clearInterval(n)}}),[r,i]),(0,z.jsxs)(gn,{children:[(0,z.jsx)(vn,{onClick:o,children:"\u2190"}),(0,z.jsx)(fn,{children:a.map(((e,i)=>(0,z.jsxs)(wn,{currentIndex:n,children:[(0,z.jsx)(bn,{children:e.title}),(0,z.jsx)(An,{children:e.description}),(0,z.jsxs)("p",{children:["Know More ",(0,z.jsx)(yn.A,{className:"icon"})]})]},i)))}),(0,z.jsx)(jn,{onClick:r,children:"\u2192"})]})}));var zn,kn,In,Nn,Yn,Cn;const qn=x.A.section(zn||(zn=(0,m.A)(["\n  width: 80%;\n  margin: 0 auto;\n  padding: 24px;\n\n  h2 {\n    text-align: center;\n    font-size: 1.5rem;\n\n    @media (max-width: 768px) {\n      font-size: 1.2rem;\n    }\n  }\n\n  @media (max-width: 768px) {\n    width: 90%;\n    padding: 16px;\n  }\n"]))),Sn=(0,U.i7)(kn||(kn=(0,m.A)(["\n  0% {\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n"]))),En=x.A.div(In||(In=(0,m.A)(["\n  border-bottom: 1px solid #ddd;\n  padding: 10px 0;\n  cursor: pointer;\n  width: 100%;\n\n  @keyframes bounceIn {\n    0% {\n      transform: translateY(-50px);\n      opacity: 0;\n    }\n    50% {\n      transform: translateY(10px);\n      opacity: 1;\n    }\n    100% {\n      transform: translateY(0);\n    }\n  }\n  animation: "," 3s ease-in-out;\n\n  @media (max-width: 768px) {\n    padding: 12px 0;\n  }\n"])),Sn),Mn=x.A.div(Nn||(Nn=(0,m.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 500;\n  padding: 10px;\n  font-size: 12px;\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n"]))),On=x.A.div(Yn||(Yn=(0,m.A)(["\n  max-height: ",";\n  overflow: hidden;\n  font-size: 12px;\n  transition: font-size 0.5s ease-in-out;\n  padding: ",";\n\n  @media (max-width: 768px) {\n    font-size: 13px;\n  }\n"])),(n=>n.isOpen?"500px":"0"),(n=>n.isOpen?"10px":"0 10px")),Fn=x.A.span(Cn||(Cn=(0,m.A)(["\n  font-size: 1.2em;\n  transition: all 0.5s ease-in-out;\n  &.open {\n    background: #0f406e;\n    color: #fff;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  @media (max-width: 768px) {\n    font-size: 1.4em;\n  }\n"])));var Un=i(920),Wn=i(535);const Dn=[{question:"How does an investor gain access to MF Utility?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."},{question:"Will investors be able to have multiple Common Account Numbers?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."},{question:"How does an investor gain access to MF Utility?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}],Bn=()=>{const[n,e]=(0,l.useState)(null),i=(0,l.useMemo)((()=>Dn),[]),t=(0,l.useCallback)((n=>{e((e=>e===n?null:n))}),[]);return(0,z.jsxs)(qn,{children:[(0,z.jsx)("h2",{children:"FAQ"}),i.map(((e,i)=>(0,z.jsxs)(En,{onClick:()=>t(i),children:[(0,z.jsxs)(Mn,{children:[e.question,(0,z.jsx)(Fn,{className:n===i?"open":"",children:n===i?(0,z.jsx)(Un.A,{}):(0,z.jsx)(Wn.A,{})})]}),(0,z.jsx)(On,{isOpen:n===i,children:e.answer})]},i)))]})};var Hn,Kn,Xn,_n,Gn,Qn;const Rn=(0,U.i7)(Hn||(Hn=(0,m.A)(["\n  0% {\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n"]))),Tn=x.A.section(Kn||(Kn=(0,m.A)(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  padding: 20px;\n  width: 80%;\n  margin: 0 auto;\n  background: #f6f6f6;\n  animation: "," 3s ease-in-out;\n\n  @media (max-width: 768px) {\n    width: 90%;\n    padding: 15px;\n  }\n"])),Rn),Jn=x.A.div(Xn||(Xn=(0,m.A)(["\n  text-align: center;\n  padding: 20px;\n  flex: 1 1 200px;\n  margin: 10px;\n  border-radius: 8px;\n  min-width: 250px;\n  text-align: left;\n\n  @media (max-width: 768px) {\n    min-width: 180px;\n    padding: 15px;\n  }\n"]))),Pn=x.A.h3(_n||(_n=(0,m.A)(["\n  font-size: 1.2rem;\n  margin-bottom: 20px;\n  color: #333;\n\n  @media (max-width: 768px) {\n    font-size: 1rem;\n    margin-bottom: 15px;\n  }\n"]))),Vn=x.A.span(Gn||(Gn=(0,m.A)(["\n  font-size: 2rem;\n  font-weight: bold;\n  color: #0056b3;\n  margin-bottom: 10px;\n\n  @media (max-width: 768px) {\n    font-size: 1.8rem; \n"]))),Zn=x.A.p(Qn||(Qn=(0,m.A)(["\n  font-size: 12px;\n  color: #666;\n  line-height: 18px;\n\n  @media (max-width: 768px) {\n    font-size: 11px;\n    line-height: 16px;\n  }\n"]))),$n=()=>{const[n,e]=(0,l.useState)(0),i=()=>{e((n=>(n+1)%200))};return(0,l.useEffect)((()=>{const n=setInterval(i,1e3);return()=>clearInterval(n)}),[]),(0,z.jsx)(z.Fragment,{children:"".concat(n,"+")})},ne=()=>(0,z.jsx)(Tn,{children:[{title:"Lorem ipsum",count:"123+",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat."},{title:"Lorem ipsum",count:"12+",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},{title:"Lorem ipsum",count:"12+",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},{title:"Lorem ipsum",count:"123",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"}].map(((n,e)=>(0,z.jsxs)(Jn,{children:[(0,z.jsx)(Pn,{children:n.title}),(0,z.jsx)(Vn,{children:(0,z.jsx)($n,{})}),(0,z.jsx)(Zn,{children:n.description})]},e)))});var ee,ie,te,ae,oe,re,se,de,pe,le;const me=x.A.section(ee||(ee=(0,m.A)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 48px 0;\n  gap: 40px;\n  flex-wrap: wrap;\n  width: 80%;\n  margin: 0 auto;\n\n  .exam-data-wrapper {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n  }\n\n  .exam-list {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n    flex-wrap: wrap;\n    flex: 1;\n    margin-bottom: 20px;\n  }\n\n  @media (max-width: 1024px) {\n    width: 90%;\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n    padding: 24px;\n    gap: 20px;\n  }\n"]))),xe=x.A.div(ie||(ie=(0,m.A)(["\n  flex: 0 0 auto;\n  padding-right: 20px;\n  border-right: 1px solid #ddd;\n  text-align: left;\n  width: 25%;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    border-right: none;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n"]))),ce=(0,U.i7)(te||(te=(0,m.A)(["\n  0% {\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n"]))),ue=x.A.li(ae||(ae=(0,m.A)(["\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  margin-bottom: 10px;\n\n  animation: "," 2s ease-in-out;\n\n  .month {\n    width: 40px;\n    height: 40px;\n  }\n\n  .info-item {\n    margin-bottom: 6px;\n\n    @media (max-width: 768px) {\n      color: #7b7c7e;\n    }\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"])),ce),he=x.A.div(oe||(oe=(0,m.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),ge=(x.A.li(re||(re=(0,m.A)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-right: 10px;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]))),x.A.ul(se||(se=(0,m.A)(["\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"])))),fe=x.A.li(de||(de=(0,m.A)(["\n  font-size: 0.9rem;\n  color: #666;\n"]))),we=x.A.h2(pe||(pe=(0,m.A)(["\n  margin-bottom: 10px;\n\n  @media (max-width: 768px) {\n    font-size: 1.2rem;\n  }\n"]))),be=x.A.p(le||(le=(0,m.A)(["\n  font-size: 0.9rem;\n  color: #666;\n  @media (max-width: 768px) {\n    font-size: 0.8rem;\n  }\n"])));var Ae=i(488);const ve=()=>{const[n,e]=(0,l.useState)((new Date).getFullYear());(0,l.useEffect)((()=>{const n=setInterval((()=>{e((new Date).getFullYear())}),6e4);return()=>clearInterval(n)}),[]);const i=(0,l.useMemo)((()=>[{date:"02th October 2014",level:"Level 1 exam"},{date:"Nov-Dec 2016",level:"Level 2",description:["Lorem Ipsum","Lorem Ipsum"]},{date:"Ongoing this year (".concat(n,")"),level:"Level 3 (Grad)"}]),[n]);return(0,z.jsxs)(me,{children:[(0,z.jsxs)(xe,{children:[(0,z.jsx)(we,{children:"Upcoming Examinations"}),(0,z.jsx)(be,{children:"Enquire about the examination & register for the exams"})]}),(0,z.jsx)("div",{className:"exam-data-wrapper",children:i.map(((n,e)=>(0,z.jsx)("ul",{className:"exam-list",children:(0,z.jsxs)(ue,{className:"exam-item",children:[(0,z.jsx)(Ae.A,{className:"month"}),(0,z.jsxs)(he,{children:[(0,z.jsx)("span",{className:"info-item",children:n.date}),(0,z.jsx)("span",{className:"info-item",children:n.level}),n.description&&n.description.length>0&&(0,z.jsx)(ge,{children:n.description.map(((n,e)=>(0,z.jsx)(fe,{children:n},e)))})]})]})},e)))})]})},je=n=>{let{isNavOpen:e,toggleMobileNav:i}=n;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(k,{isNavOpen:e,toggleMobileNav:i}),(0,z.jsx)(ve,{}),(0,z.jsx)(Ln,{}),(0,z.jsx)(ne,{}),(0,z.jsx)(Bn,{}),(0,z.jsx)(rn,{})]})}}}]);
//# sourceMappingURL=731.ebac2d00.chunk.js.map