"use strict";(self.webpackChunkassignment=self.webpackChunkassignment||[]).push([[731],{731:(n,e,t)=>{t.r(e),t.d(e,{default:()=>Le});var i,o,a,r,s,d,p,l=t(43),x=t(528),m=t(191);const c=m.A.section(i||(i=(0,x.A)(["\n  width: 100%;\n  height: 370px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #f7f7f7;\n  position: relative;\n  padding: 0 30px;\n  position: relative;\n\n  @media (max-width: 768px) {\n    height: 300px;\n    flex-direction: column;\n    padding: 20px 15px;\n    margin-bottom: 20px;\n    opacity: ",";\n  }\n"])),(n=>n.isNavOpen?"1":"0")),u=m.A.div(o||(o=(0,x.A)(["\n  width: 40%;\n  z-index: 10;\n  margin: 0 auto;\n  padding-left: 46px;\n\n  h4 {\n    font-size: 24px;\n    margin-bottom: 10px;\n    color: #333;\n  }\n  .text {\n    font-size: 14px;\n    line-height: 1.6;\n    margin-bottom: 20px;\n    color: #666;\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-top: 20px;\n    padding: 40px;\n    text-align: -webkit-center; \n    position: absolute;\n    bottom: 30%;\n    left: -6px;\n    width: 100%;\n    margin-top: 20px;\n    padding: 40px;\n\n\n    h4 {\n      font-size: 20px; \n    }\n    .text {\n      font-size: 12px; \n    }\n  }\n"]))),h=m.A.button(a||(a=(0,x.A)(["\n  width: 30%;\n  background: #0f406e;\n  color: #fff;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n  &:hover {\n    background: #fff;\n    color: #0f406e;\n  }\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n    width: 15%;\n    height: 50px;\n    border-radius: 50%;\n  }\n"]))),g=m.A.div(r||(r=(0,x.A)(["\n  width: 50%;\n  height: 400px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    height: auto;\n    margin: 20px 0;\n  }\n"]))),f=m.A.img(s||(s=(0,x.A)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: all 0.5s ease-in-out;\n  opacity: ",";\n\n    @media (max-width: 768px) {\n    width: 100%;\n    height: 100%;\n  }\n\n"])),(n=>n.isActive?"1":"0")),w=m.A.div(d||(d=(0,x.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  flex-direction: column;\n  position: absolute;\n  right: 15px;\n  top: 50%;\n\n  @media (max-width: 768px) {\n    top: auto;\n    bottom: 10px;\n    right: 50%;\n    transform: rotate(-90deg);\n  }\n"]))),b=m.A.button(p||(p=(0,x.A)(["\n  margin-bottom: 8px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: none;\n  transition: background-color 0.5s ease-in;\n  background-color: ",";\n\n  @media (max-width: 768px) {\n    width: 8px;\n    height: 8px;\n  }\n"])),(n=>n.isActive?"#00a2d4":"#f7f7f7"));var A=t(593),v=t(3),j=t(341),y=t(263);var L=t(984),z=t(579);const k=l.memo((n=>{var e,t,i,o;let{isNavOpen:a,toggleMobileNav:r}=n;const s=(0,v.wA)(),{dataReducer:d,loading:p}=(0,v.d4)((n=>n)),[x,m]=(0,l.useState)(window.innerWidth);(0,l.useEffect)((()=>{s((async n=>{n({type:y.A4});try{await j.A.get("https://fakestoreapiserver.reactbd.com/amazonproducts"),n({type:y.mS,payload:y.Bz})}catch(e){n({type:y.tw,error:"message"})}}))}),[s]),(0,l.useEffect)((()=>{const n=()=>{m(window.innerWidth)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),[]);const[k,I]=(0,l.useState)(0),N=(0,l.useCallback)((n=>{I(n)}),[]),Y=(0,l.useCallback)((()=>{var n,e;null!==d&&void 0!==d&&null!==(n=d.data)&&void 0!==n&&null!==(e=n.banners)&&void 0!==e&&e.length&&I((n=>{var e;return n===(null===d||void 0===d||null===(e=d.data)||void 0===e?void 0:e.banners.length)-1?0:n+1}))}),[null===d||void 0===d||null===(e=d.data)||void 0===e||null===(t=e.banners)||void 0===t?void 0:t.length]);return(0,l.useEffect)((()=>{const n=setInterval((()=>{Y()}),3e3);return()=>clearInterval(n)}),[Y]),(0,z.jsxs)(c,{isNavOpen:a,children:[(0,z.jsxs)(u,{children:[x<768?null:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("h4",{children:"Lorem ipsum"}),(0,z.jsx)("p",{className:"text",children:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"})]}),(0,z.jsx)(h,{children:x<768?(0,z.jsx)(A.A,{className:"know-more"}):(0,z.jsxs)(z.Fragment,{children:["Know More ",(0,z.jsx)(A.A,{})," "]})})]}),(0,z.jsx)(g,{children:p?(0,z.jsx)(L.a,{}):(null===d||void 0===d||null===(i=d.data)||void 0===i?void 0:i.banners)&&d.data.banners.length>0&&d.data.banners.map(((n,e)=>(0,z.jsx)(f,{isActive:e===k,src:n.banner_img,alt:"Banner ".concat(e)},e)))}),(0,z.jsx)(w,{children:(null===d||void 0===d||null===(o=d.data)||void 0===o?void 0:o.banners)&&d.data.banners.length>0&&d.data.banners.map(((n,e)=>(0,z.jsx)(b,{isActive:e===k,onClick:()=>N(e)},e)))})]})}));var I,N,Y,C,q,S,E,M,O,F,U=t(290);const W=m.A.section(I||(I=(0,x.A)(["\n  background-color: #f8f9fa;\n  padding: 48px 0;\n\n  @media (max-width: 768px) {\n    padding: 24px 0;\n  }\n"]))),D=m.A.div(N||(N=(0,x.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 40px;\n  margin: 0px 60px;\n\n  @media (max-width: 768px) {\n    flex-direction: column; \n    margin: 0 20px;\n    padding: 20px; \n"]))),B=m.A.div(Y||(Y=(0,x.A)(["\n  width: 40%;\n  margin-right: 32px;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-right: 0;\n  }\n\n  .form-container {\n    display: flex;\n    gap: 15px;\n  }\n"]))),H=m.A.h3(C||(C=(0,x.A)(["\n  margin-bottom: 30px;\n  color: #343a40;\n\n  @media (max-width: 768px) {\n    text-align: center;\n  }\n"]))),K=m.A.p(q||(q=(0,x.A)(["\n  color: #6c757d;\n  margin-bottom: 30px;\n  font-size: 14px;\n  line-height: 20px;\n\n  @media (max-width: 768px) {\n    text-align: center;\n"]))),X=m.A.input(S||(S=(0,x.A)(["\n  width: 100%;\n  height: auto;\n  background: #fff;\n  border-radius: 60px;\n  border: 0;\n  outline: none !important;\n  padding-left: 24px;\n  font-size: 16px;\n  box-shadow: 0 3px 6px rgb(0 0 0 /20%);\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n    padding-left: 16px;\n  }\n"]))),_=m.A.button(E||(E=(0,x.A)(["\n  width: 30%;\n  background: #0f406e;\n  color: #fff;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n  &:hover {\n    background: #fff;\n    color: #0f406e;\n  }\n\n  @media (max-width: 768px) {\n    width: 80%;\n    font-size: 14px;\n  }\n"]))),G=(0,U.i7)(M||(M=(0,x.A)(["\n  0% {\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n"]))),Q=m.A.div(O||(O=(0,x.A)(["\n  width: 46%;\n  overflow: hidden;\n\n animation: "," 3s ease-in-out;\n\n  @media (max-width: 768px) {\n    width: 80%; \n    margin-top: 20px; \n"])),G),R=m.A.img(F||(F=(0,x.A)(["\n  width: 80%;\n  height: 40%;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    height: 40%;\n  }\n"])));var T,J,P,V,Z;const $=m.A.div(T||(T=(0,x.A)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n"]))),nn=m.A.div(J||(J=(0,x.A)(["\n  background-color: white;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  max-width: 400px;\n  width: 100%;\n"]))),en=m.A.h2(P||(P=(0,x.A)(["\n  margin-bottom: 10px;\n"]))),tn=m.A.p(V||(V=(0,x.A)(["\n  margin-bottom: 20px;\n"]))),on=m.A.button(Z||(Z=(0,x.A)(["\n  width: 30%;\n  margin: auto;\n  background: #0f406e;\n  color: #fff;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n  &:hover {\n    background: #fff;\n    color: #0f406e;\n  }\n\n  @media (max-width: 768px) {\n    width: 80%;\n    font-size: 14px;\n  }\n"]))),an=n=>{let{handleClose:e,isModalOpen:t}=n;return t?(0,z.jsx)($,{children:(0,z.jsxs)(nn,{children:[(0,z.jsx)(en,{children:"Success!"}),(0,z.jsx)(tn,{children:"Thank you for subscribing to our newsletter!"}),(0,z.jsx)(on,{onClick:e,children:"Close"})]})}):null},rn=()=>{const[n,e]=(0,l.useState)(""),[t,i]=(0,l.useState)(!1);return(0,z.jsxs)(W,{children:[(0,z.jsxs)(D,{children:[(0,z.jsxs)(B,{children:[(0,z.jsx)(H,{children:"Subscribe"}),(0,z.jsx)(K,{children:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"}),(0,z.jsxs)("form",{onSubmit:n=>{n.preventDefault(),e(""),i(!0)},className:"form-container",children:[(0,z.jsx)(X,{type:"email",placeholder:"Your email address",value:n,onChange:n=>e(n.target.value),required:!0}),(0,z.jsxs)(_,{type:"submit",children:["Subscribe ",(0,z.jsx)(A.A,{})]})]})]}),(0,z.jsx)(Q,{children:(0,z.jsx)(R,{src:"https://cdn.prod.website-files.com/5c6d6c45eaa55f57c6367749/623104e9b3e071663f5059df_mobile%20folio.png",alt:"Subscribe"})})]}),t&&(0,z.jsx)(an,{isModalOpen:t,handleClose:()=>{i(!t)}})]})};var sn,dn,pn,ln,xn,mn,cn,un,hn;const gn=m.A.section(sn||(sn=(0,x.A)(["\n  position: relative;\n  width: 80%;\n  overflow: hidden;\n  margin: auto;\n  display: flex;\n  padding: 48px 0;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    padding: 24px;\n    overflow-x: scroll;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n"]))),fn=m.A.div(dn||(dn=(0,x.A)(["\n  display: flex;\n  transition: all 0.5s ease-in-out;\n  height: 200px;\n  gap: 20px;\n\n  @media (max-width: 768px) {\n    height: auto;\n    gap: 5px;\n  }\n"]))),wn=m.A.div(ln||(ln=(0,x.A)(["\n  background-color: #0d4b7f;\n  color: white;\n  text-align: center;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  width: 335px;\n  height: auto;\n  font-size: 14px;\n  text-align: left;\n\n  animation: "," 0.5s ease-in-out;\n\n  p {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n    font-size: 13px;\n    line-height: 18px;\n\n    .icon {\n      background: #fff;\n      border-radius: 10px;\n      color: #101217;\n    }\n  }\n\n  @media (max-width: 768px) {\n    width: 250px;\n    height: auto;\n    font-size: 12px;\n  }\n"])),(n=>{let{currentIndex:e}=n;return(n=>(0,U.i7)(pn||(pn=(0,x.A)(["\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(","%);\n  }\n"])),100*n))(e)})),bn=m.A.h2(xn||(xn=(0,x.A)(["\n  margin-bottom: 30px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 20px;\n    font-size: 20px;\n  }\n"]))),An=m.A.p(mn||(mn=(0,x.A)(["\n  margin-bottom: 20px;\n  line-height: 10px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 15px;\n    font-size: 12px;\n  }\n"]))),vn=(m.A.button(cn||(cn=(0,x.A)(["\n  background-color: white;\n  color: #0d4b7f;\n  padding: 10px 15px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #0b3b64;\n    color: white;\n  }\n\n  @media (max-width: 768px) {\n    padding: 8px 12px;\n    font-size: 12px;\n  }\n"]))),m.A.button(un||(un=(0,x.A)(["\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  border: none;\n  padding: 10px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n\n  @media (max-width: 768px) {\n    padding: 8px;\n    opacity: 0;\n  }\n"])))),jn=m.A.button(hn||(hn=(0,x.A)(["\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  border: none;\n  padding: 10px;\n  cursor: pointer;\n  transition: all 0.5s ease-in;\n\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n\n  @media (max-width: 768px) {\n    padding: 8px;\n    opacity: 0;\n  }\n"])));var yn=t(772);const Ln=()=>{const[n,e]=(0,l.useState)(0),[t,i]=(0,l.useState)(window.innerWidth),o=(0,l.useMemo)((()=>[{title:"Lorem Ipsum 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{title:"Lorem Ipsum 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{title:"Lorem Ipsum 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{title:"Lorem Ipsum 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{title:"Lorem Ipsum 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}]),[]),a=(0,l.useCallback)((()=>{e((n=>0===n?o.length-1:n-1))}),[o.length]),r=(0,l.useCallback)((()=>{e((n=>n===o.length-1?0:n+1))}),[o.length]);return(0,l.useEffect)((()=>{const n=()=>i(window.innerWidth);return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),[]),(0,l.useEffect)((()=>{if(t>768){const n=setInterval((()=>{r()}),3e3);return()=>clearInterval(n)}}),[r,t]),(0,z.jsxs)(gn,{children:[(0,z.jsx)(vn,{onClick:a,children:"\u2190"}),(0,z.jsx)(fn,{children:o.map(((e,t)=>(0,z.jsxs)(wn,{currentIndex:n,children:[(0,z.jsx)(bn,{children:e.title}),(0,z.jsx)(An,{children:e.description}),(0,z.jsxs)("p",{children:["Know More ",(0,z.jsx)(yn.A,{className:"icon"})]})]},t)))}),(0,z.jsx)(jn,{onClick:r,children:"\u2192"})]})};var zn,kn,In,Nn,Yn,Cn;const qn=m.A.section(zn||(zn=(0,x.A)(["\n  width: 80%;\n  margin: 0 auto;\n  padding: 24px;\n\n  h2 {\n    text-align: center;\n    font-size: 24px;\n\n    @media (max-width: 768px) {\n      font-size: 20px;\n    }\n  }\n\n  @media (max-width: 768px) {\n    width: 90%;\n    padding: 16px;\n  }\n"]))),Sn=(0,U.i7)(kn||(kn=(0,x.A)(["\n  0% {\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n"]))),En=m.A.div(In||(In=(0,x.A)(["\n  border-bottom: 1px solid #ddd;\n  padding: 10px 0;\n  cursor: pointer;\n  width: 100%;\n\n  @keyframes bounceIn {\n    0% {\n      transform: translateY(-50px);\n      opacity: 0;\n    }\n    50% {\n      transform: translateY(10px);\n      opacity: 1;\n    }\n    100% {\n      transform: translateY(0);\n    }\n  }\n  animation: "," 3s ease-in-out;\n\n  @media (max-width: 768px) {\n    padding: 12px 0;\n  }\n"])),Sn),Mn=m.A.div(Nn||(Nn=(0,x.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 500;\n  padding: 10px;\n  font-size: 12px;\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n"]))),On=m.A.div(Yn||(Yn=(0,x.A)(["\n  max-height: ",";\n  overflow: hidden;\n  font-size: 12px;\n  transition: font-size 0.5s ease-in-out;\n  padding: ",";\n  max-width: 1032px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  @media (max-width: 768px) {\n    font-size: 13px;\n    max-width: 300px;\n    text-overflow: ellipsis;\n    max-height: ",";\n    white-space: normal;\n    overflow: hidden;\n  }\n"])),(n=>n.isOpen?"500px":"0"),(n=>n.isOpen?"10px":"0 10px"),(n=>{let{isOpen:e}=n;return e?"75px":"0px"})),Fn=m.A.span(Cn||(Cn=(0,x.A)(["\n  font-size: 19.2px;\n  transition: all 0.5s ease-in-out;\n  &.open {\n    background: #0f406e;\n    color: #fff;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  @media (max-width: 768px) {\n    font-size: 22px;\n  }\n"])));var Un=t(920),Wn=t(535);const Dn=[{question:"How does an investor gain access to MF Utility?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."},{question:"Will investors be able to have multiple Common Account Numbers?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."},{question:"How does an investor gain access to MF Utility?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}],Bn=()=>{const[n,e]=(0,l.useState)(null),t=(0,l.useMemo)((()=>Dn),[]),i=(0,l.useCallback)((n=>{e((e=>e===n?null:n))}),[]);return(0,z.jsxs)(qn,{children:[(0,z.jsx)("h2",{children:"FAQ"}),t.map(((e,t)=>(0,z.jsxs)(En,{onClick:()=>i(t),children:[(0,z.jsxs)(Mn,{children:[e.question,(0,z.jsx)(Fn,{className:n===t?"open":"",children:n===t?(0,z.jsx)(Un.A,{}):(0,z.jsx)(Wn.A,{})})]}),(0,z.jsx)(On,{isOpen:n===t,children:e.answer})]},t)))]})};var Hn,Kn,Xn,_n,Gn,Qn;const Rn=(0,U.i7)(Hn||(Hn=(0,x.A)(["\n  0% {\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n"]))),Tn=m.A.section(Kn||(Kn=(0,x.A)(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  padding: 20px;\n  width: 80%;\n  margin: 0 auto;\n  background: #f6f6f6;\n  animation: "," 3s ease-in-out;\n\n  @media (max-width: 768px) {\n    width: 90%;\n    padding: 15px;\n  }\n"])),Rn),Jn=m.A.div(Xn||(Xn=(0,x.A)(["\n  text-align: center;\n  padding: 20px;\n  flex: 1 1 200px;\n  margin: 10px;\n  border-radius: 8px;\n  min-width: 250px;\n  text-align: left;\n\n  @media (max-width: 768px) {\n    min-width: 180px;\n    padding: 15px;\n  }\n"]))),Pn=m.A.h3(_n||(_n=(0,x.A)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #333;\n\n  @media (max-width: 768px) {\n    font-size: 16px;\n    margin-bottom: 15px;\n  }\n"]))),Vn=m.A.span(Gn||(Gn=(0,x.A)(["\n  font-size: 32px;\n  font-weight: bold;\n  color: #0056b3;\n  margin-bottom: 10px;\n\n  @media (max-width: 768px) {\n    font-size: 26px; \n"]))),Zn=m.A.p(Qn||(Qn=(0,x.A)(["\n  font-size: 12px;\n  color: #666;\n  line-height: 18px;\n\n  @media (max-width: 768px) {\n    font-size: 11px;\n    line-height: 16px;\n  }\n"]))),$n=()=>{const[n,e]=(0,l.useState)(0),t=()=>{e((n=>(n+1)%200))};return(0,l.useEffect)((()=>{const n=setInterval(t,1e3);return()=>clearInterval(n)}),[]),(0,z.jsx)(z.Fragment,{children:"".concat(n,"+")})},ne=()=>{const n=(0,l.useMemo)((()=>[{title:"Lorem ipsum",count:"123+",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat."},{title:"Lorem ipsum",count:"12+",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},{title:"Lorem ipsum",count:"12+",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"},{title:"Lorem ipsum",count:"123",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"}]),[]);return(0,z.jsx)(Tn,{children:n.map(((n,e)=>(0,z.jsxs)(Jn,{children:[(0,z.jsx)(Pn,{children:n.title}),(0,z.jsx)(Vn,{children:(0,z.jsx)($n,{})}),(0,z.jsx)(Zn,{children:n.description})]},e)))})};var ee,te,ie,oe,ae,re,se,de,pe,le,xe;const me=m.A.section(ee||(ee=(0,x.A)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 48px 0;\n  gap: 40px;\n  width: 80%;\n  margin: 0 auto;\n\n  @media (max-width: 1024px) {\n    width: 90%;\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n    padding: 24px;\n    gap: 20px;\n    flex-wrap: wrap;\n  }\n"]))),ce=m.A.div(te||(te=(0,x.A)(["\n  display: flex;\n  flex-grow: 1;\n\n  .exam-list {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n"]))),ue=m.A.div(ie||(ie=(0,x.A)(["\n  padding-right: 20px;\n  border-right: 1px solid #ddd;\n  text-align: left;\n  width: 25%;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    border-right: none;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n"]))),he=(0,U.i7)(oe||(oe=(0,x.A)(["\n  0% {\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n"]))),ge=m.A.li(ae||(ae=(0,x.A)(["\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  margin-bottom: 10px;\n\n  animation: "," 2s ease-in-out;\n\n  .month {\n    width: 40px;\n    height: 40px;\n  }\n\n  .info-item {\n    margin-bottom: 6px;\n\n    @media (max-width: 768px) {\n      color: #7b7c7e;\n    }\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"])),he),fe=m.A.div(re||(re=(0,x.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),we=(m.A.li(se||(se=(0,x.A)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-right: 10px;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]))),m.A.ul(de||(de=(0,x.A)(["\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"])))),be=m.A.li(pe||(pe=(0,x.A)(["\n  font-size: 14px;\n  color: #666;\n"]))),Ae=m.A.h2(le||(le=(0,x.A)(["\n  margin-bottom: 10px;\n\n  @media (max-width: 768px) {\n    font-size: 20px;\n  }\n"]))),ve=m.A.p(xe||(xe=(0,x.A)(["\n  font-size: 14px;\n  color: #666;\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"])));var je=t(488);const ye=()=>{const[n,e]=(0,l.useState)((new Date).getFullYear());(0,l.useEffect)((()=>{const n=setInterval((()=>{e((new Date).getFullYear())}),6e4);return()=>clearInterval(n)}),[]);const t=(0,l.useMemo)((()=>[{date:"02th October 2014",level:"Level 1 exam"},{date:"Nov-Dec 2016",level:"Level 2",description:["Lorem Ipsum","Lorem Ipsum"]},{date:"Ongoing this year (".concat(n,")"),level:"Level 3 (Grad)"}]),[n]);return(0,z.jsxs)(me,{children:[(0,z.jsxs)(ue,{children:[(0,z.jsx)(Ae,{children:"Upcoming Examinations"}),(0,z.jsx)(ve,{children:"Enquire about the examination & register for the exams"})]}),(0,z.jsx)(ce,{children:t.map(((n,e)=>(0,z.jsx)("ul",{className:"exam-list",children:(0,z.jsxs)(ge,{className:"exam-item",children:[(0,z.jsx)(je.A,{className:"month"}),(0,z.jsxs)(fe,{children:[(0,z.jsx)("span",{className:"info-item",children:n.date}),(0,z.jsx)("span",{className:"info-item",children:n.level}),n.description&&n.description.length>0&&(0,z.jsx)(we,{children:n.description.map(((n,e)=>(0,z.jsx)(be,{children:n},e)))})]})]})},e)))})]})},Le=n=>{let{isNavOpen:e,toggleMobileNav:t}=n;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(k,{isNavOpen:e,toggleMobileNav:t}),(0,z.jsx)(ye,{}),(0,z.jsx)(Ln,{}),(0,z.jsx)(ne,{}),(0,z.jsx)(Bn,{}),(0,z.jsx)(rn,{})]})}}}]);
//# sourceMappingURL=731.c7ae5928.chunk.js.map