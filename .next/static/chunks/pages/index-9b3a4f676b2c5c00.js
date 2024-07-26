(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7138:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var a=r(7294),s=r(29),o=r(4687),n=r.n(o),i=r(1664),l=r.n(i),c=r(5675),u=r.n(c),d=r(7066),p=r(1163),f=r(5893);function m(e){var t,r=e.user,o=(0,p.useRouter)(),i=(t=(0,s.Z)(n().mark(function e(){var t,a;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.post("/api/auth/signout",{},{headers:{Authorization:"Bearer ".concat(null==r?void 0:r.token)}});case 3:null!=(a=e.sent)&&null!==(t=a.data)&&void 0!==t&&t._id&&o.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error signout=========>",e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),function(){return t.apply(this,arguments)}),c=(0,a.useState)(!1),m=c[0],h=c[1];return(0,f.jsxs)("nav",{className:"bg-white p-4 border-b border-[#d6cffe]",children:[(0,f.jsxs)("div",{className:"flex justify-between items-center",children:[(0,f.jsx)(l(),{href:"/",children:(0,f.jsx)(u(),{src:"../public/jhinthicha.svg",width:100,height:100,alt:"logo"})}),(0,f.jsx)("div",{className:"md:hidden",children:(0,f.jsx)("button",{id:"menu",className:"text-[#6e59e7]",onClick:function(){h(!m)},children:(0,f.jsx)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",className:"w-6 h-6",children:(0,f.jsx)("path",{d:"M4 6h16M4 12h16M4 18h16"})})})}),(0,f.jsx)("ul",{className:"hidden md:flex items-center space-x-4",children:null!=r&&r._id?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("li",{className:"relative group",children:[(0,f.jsx)(l(),{href:"/",className:"text-[#6e59e7] text-lg font-normal my-2",children:"Request Form"}),(0,f.jsx)("span",{className:"absolute -bottom-1 left-1/2 w-0 transition-all h-[2px] bg-[#816def] group-hover:w-1/2"}),(0,f.jsx)("span",{className:"absolute -bottom-1 right-1/2 w-0 transition-all h-[2px] bg-[#816def] group-hover:w-1/2"})]}),(0,f.jsxs)("li",{className:"relative group",children:[(0,f.jsx)(l(),{href:"/requestmanagement",className:"text-[#6e59e7] text-lg font-normal my-2",children:"Request Management"}),(0,f.jsx)("span",{className:"absolute -bottom-1 left-1/2 w-0 transition-all h-[2px] bg-[#816def] group-hover:w-1/2"}),(0,f.jsx)("span",{className:"absolute -bottom-1 right-1/2 w-0 transition-all h-[2px] bg-[#816def] group-hover:w-1/2"})]}),(0,f.jsxs)("li",{className:"relative group",children:[(0,f.jsx)(l(),{href:"/usermanagement",className:"text-[#6e59e7] text-lg font-normal my-2",children:"User Management"}),(0,f.jsx)("span",{className:"absolute -bottom-1 left-1/2 w-0 transition-all h-[2px] bg-[#816def] group-hover:w-1/2"}),(0,f.jsx)("span",{className:"absolute -bottom-1 right-1/2 w-0 transition-all h-[2px] bg-[#816def] group-hover:w-1/2"})]}),(0,f.jsx)("li",{className:"w-5"}),(0,f.jsx)("li",{className:"relative",children:(0,f.jsx)("button",{className:"relative flex h-[40px] w-[80px] items-center justify-center overflow-hidden bg-[#816def] font-medium text-white transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-[#6e59e7] hover:before:border-[25px]",onClick:i,children:(0,f.jsx)("span",{className:"relative z-10",children:"Logout"})})})]}):null})]}),m?(0,f.jsx)("ul",{className:"flex-col md:hidden",children:null!=r&&r._id?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("li",{className:"py-3 ",children:(0,f.jsx)(l(),{href:"/",className:"text-[#6e59e7] text-lg font-normal my-2 active:text-[#5d47da]",children:"Request Form"})}),(0,f.jsx)("li",{className:"py-3",children:(0,f.jsx)(l(),{href:"/requestmanagement",className:"text-[#6e59e7] text-lg font-normal my-2 active:text-[#5d47da]",children:"Request Management"})}),(0,f.jsx)("li",{className:"py-3",children:(0,f.jsx)(l(),{href:"/usermanagement",className:"text-[#6e59e7] text-lg font-normal my-2 active:text-[#5d47da]",children:"User Management"})}),(0,f.jsx)("li",{className:"w-5"}),(0,f.jsx)("li",{className:"py-3",children:(0,f.jsx)("button",{className:"relative flex h-[40px] w-[80px] items-center justify-center overflow-hidden bg-[#816def] font-medium text-white transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-[#6e59e7] hover:before:border-[25px]",onClick:i,children:(0,f.jsx)("span",{className:"relative z-10",children:"Logout"})})})]}):null}):null]})}var h=function(e){var t=e.children,r=e.user;return(0,f.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,f.jsx)(m,{user:r}),t]})}},9026:function(e,t,r){"use strict";r.d(t,{i:function(){return o}});var a=r(7294),s=r(6501),o=function(){var e=(0,a.useState)(!1),t=e[0],r=e[1];return{showToast:(0,a.useCallback)(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";"success"===a?t||(s.ZP.success(e),r(!0)):"error"===a?s.ZP.error(e):(0,s.ZP)(e)},[t]),resetSuccessToast:(0,a.useCallback)(function(){r(!1)},[])}}},1791:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return g},default:function(){return x}});var a=r(8307),s=r(29),o=r(4687),n=r.n(o),i=r(7294),l=r(7138),c=r(9332),u=r(6501),d=r(9026),p=r(7066),f=r(5893);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g=!0;function x(e){var t,r,o,m=(0,c.useRouter)(),g=(0,i.useState)({query:"",skip:0,limit:10}),x=g[0];g[1];var b=(0,i.useState)([]),v=(b[0],b[1]),y=(0,c.useSearchParams)(),w=(0,d.i)(),j=w.showToast,N=w.resetSuccessToast,k=(0,i.useState)({title:"",type:"",detail:""}),O=k[0],E=k[1],C=(0,i.useState)([]),P=C[0],S=C[1];(0,i.useEffect)(function(){var t,r=y.get("auth");console.log("authStatus:",r),console.log("Current token:",null==e||null===(t=e.user)||void 0===t?void 0:t.token),r||console.log("No authStatus in URL"),"login"===r&&(j("Login success!"),m.replace("/",void 0,{shallow:!0})),_(),$()},[y,m,j,N]);var _=(t=(0,s.Z)(n().mark(function t(){var r,a,s;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.Z.get("/api/user",{headers:{Authorization:"Bearer ".concat(null==e||null===(r=e.user)||void 0===r?void 0:r.token)},params:x});case 3:(null==(s=t.sent)||null===(a=s.data)||void 0===a?void 0:a.total)>0?v(null==s?void 0:s.data):v([]),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error query data user=========>",t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])})),function(){return t.apply(this,arguments)}),$=(r=(0,s.Z)(n().mark(function t(){var r,a;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.Z.get("/api/type-form",{headers:{Authorization:"Bearer ".concat(null==e||null===(r=e.user)||void 0===r?void 0:r.token)}});case 3:(a=t.sent).data.results&&S(a.data.results),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching request types:",t.t0),j("ไม่สามารถดึงข้อมูลประเภทคำขอได้","error");case 11:case"end":return t.stop()}},t,null,[[0,7]])})),function(){return r.apply(this,arguments)}),Z=function(e){var t=e.target,r=t.id,s=t.value;E(function(e){return h(h({},e),{},(0,a.Z)({},r,s))})},z=function(){E({title:"",type:"",detail:""})},T=(o=(0,s.Z)(n().mark(function t(r){var a,s,o,i,l,c;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),a=O.title,s=O.type,o=O.detail,!(!O.title||!O.type||!O.detail)){t.next=5;break}return j("กรุณากรอกข้อมูลให้ครบทุกช่อง","error"),t.abrupt("return");case 5:if(!(a&&s&&o)){t.next=17;break}return t.prev=6,t.next=9,(0,p.Z)({method:"POST",url:"/api/form/create",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(null==e||null===(i=e.user)||void 0===i?void 0:i.token)},data:JSON.stringify(O)});case 9:null!=(c=t.sent)&&null!==(l=c.data)&&void 0!==l&&l._id?(j("ส่งคำขอสำเร็จ","success"),z(),N()):j("ส่งคำขอไม่สำเร็จ กรุณาตรวจสอบข้อมูลและลองอีกครั้ง","error"),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(6),console.error("Send request error",t.t0),t.t0.response?401===t.t0.response.status?j("Token ไม่ถูกต้องหรือหมดอายุ กรุณาเข้าสู่ระบบใหม่","error"):j("เกิดข้อผิดพลาดจากเซิร์ฟเวอร์: ".concat(t.t0.response.data.message||t.t0.response.statusText),"error"):t.t0.request?j("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้","error"):(console.error("Error message:",t.t0.message),j("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง","error"));case 17:case"end":return t.stop()}},t,null,[[6,13]])})),function(e){return o.apply(this,arguments)});return(0,f.jsxs)(l.Z,{user:null==e?void 0:e.user,children:[(0,f.jsx)(u.x7,{position:"top-right",toastOptions:{duration:3e3}}),(0,f.jsx)("section",{className:"bg-white",children:(0,f.jsxs)("div",{className:"py-8 lg:py-16 px-4 mx-auto max-w-screen-md",children:[(0,f.jsx)("h2",{className:"mb-6 text-4xl tracking-tight font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent",children:"Request Form"}),(0,f.jsx)("p",{className:"mb-8 lg:mb-16 font-light text-center text-black sm:text-xl",children:"ยินดีต้อนรับสู่ระบบยื่นคำขอ กรุณากรอกรายละเอียดให้ครบถ้วน"}),(0,f.jsxs)("form",{onSubmit:T,className:"space-y-8",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{htmlFor:"title",className:"block mb-2 text-sm font-medium text-gray-900",children:"ชื่อเรื่อง"}),(0,f.jsx)("input",{type:"text",id:"title",value:O.title,onChange:Z,className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-[#6e59e7] focus:ring-[#806aff] focus:ring-1 block w-full p-2.5",placeholder:"ระบุชื่อเรื่องที่ต้องการยื่นตำขอ",required:!0})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{htmlFor:"type",className:"block mb-2 text-sm font-medium text-gray-900",children:"ประเภท"}),(0,f.jsxs)("select",{id:"type",value:O.type,onChange:Z,className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-[#6e59e7] focus:ring-[#806aff] focus:ring-1 block w-full p-2.5",children:[(0,f.jsx)("option",{value:"",children:"เลือกประเภทคำขอ"}),P.map(function(e){return(0,f.jsx)("option",{value:e.name,children:e.name},e._id)})]})]}),(0,f.jsxs)("div",{className:"sm:col-span-2",children:[(0,f.jsx)("label",{htmlFor:"detail",className:"block mb-2 text-sm font-medium text-gray-900",children:"รายละเอียด"}),(0,f.jsx)("textarea",{id:"detail",rows:"6",value:O.detail,onChange:Z,className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-[#6e59e7] focus:ring-[#806aff] focus:ring-1 block w-full p-2.5",placeholder:"อธิบายรายละเอียดเพิ่มเติม"})]}),(0,f.jsxs)("div",{className:"flex space-x-4",children:[(0,f.jsx)("button",{type:"submit",className:"py-3 px-6 text-sm font-medium text-center text-white rounded-lg bg-[#806aff] sm:w-fit hover:bg-[#6e59e7] focus:ring-4 focus:outline-none focus:ring-[#9f90f7]",children:"ส่งคำขอ"}),(0,f.jsx)("button",{type:"button",onClick:z,className:"py-3 px-6 text-sm font-medium text-center text-white rounded-lg bg-gray-400 sm:w-fit hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300",children:"รีเซ็ต"})]})]})]})})]})}},5728:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1791)}])},6501:function(e,t,r){"use strict";let a,s;r.d(t,{x7:function(){return ed},ZP:function(){return ep}});var o,n=r(7294);let i={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,p=(e,t)=>{let r="",a="",s="";for(let o in e){let n=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+n+";":a+="f"==o[1]?p(n,o):o+"{"+p(n,"k"==o[1]?"":t)+"}":"object"==typeof n?a+=p(n,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=n&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(o,n):o+":"+n+";")}return r+(t&&s?t+"{"+s+"}":s)+a},f={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},h=(e,t,r,a,s)=>{var o;let n=m(e),i=f[n]||(f[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!f[i]){let t=n!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(u,""));)t[4]?a.shift():t[3]?(r=t[3].replace(d," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(d," ").trim();return a[0]})(e);f[i]=p(s?{["@keyframes "+i]:t}:t,r?"":"."+i)}let l=r&&f.g?f.g:null;return r&&(f.g=f[i]),o=f[i],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),i},g=(e,t,r)=>e.reduce((e,a,s)=>{let o=t[s];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function x(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}x.bind({g:1});let b,v,y,w=x.bind({k:1});function j(e,t){let r=this||{};return function(){let a=arguments;function s(o,n){let i=Object.assign({},o),l=i.className||s.className;r.p=Object.assign({theme:v&&v()},i),r.o=/ *go\d+/.test(l),i.className=x.apply(r,a)+(l?" "+l:""),t&&(i.ref=n);let c=e;return e[0]&&(c=i.as||e,delete i.as),y&&c[0]&&y(i),b(c,i)}return t?t(s):s}}var N=e=>"function"==typeof e,k=(e,t)=>N(e)?e(t):e,O=(a=0,()=>(++a).toString()),E=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},C=new Map,P=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),z({type:4,toastId:e})},1e3);C.set(e,t)},S=e=>{let t=C.get(e);t&&clearTimeout(t)},_=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&S(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?_(e,{type:1,toast:r}):_(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?P(a):e.toasts.forEach(e=>{P(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},$=[],Z={toasts:[],pausedAt:void 0},z=e=>{Z=_(Z,e),$.forEach(e=>{e(Z)})},T={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},q=(e={})=>{let[t,r]=(0,n.useState)(Z);(0,n.useEffect)(()=>($.push(r),()=>{let e=$.indexOf(r);e>-1&&$.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||T[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},D=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||O()}),A=e=>(t,r)=>{let a=D(t,e,r);return z({type:2,toast:a}),a.id},F=(e,t)=>A("blank")(e,t);F.error=A("error"),F.success=A("success"),F.loading=A("loading"),F.custom=A("custom"),F.dismiss=e=>{z({type:3,toastId:e})},F.remove=e=>z({type:4,toastId:e}),F.promise=(e,t,r)=>{let a=F.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(F.success(k(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{F.error(k(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var M=(e,t)=>{z({type:1,toast:{id:e,height:t}})},R=()=>{z({type:5,time:Date.now()})},I=e=>{let{toasts:t,pausedAt:r}=q(e);(0,n.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&F.dismiss(t.id);return}return setTimeout(()=>F.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,n.useCallback)(()=>{r&&z({type:6,time:Date.now()})},[r]),s=(0,n.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:o}=r||{},n=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),i=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<i&&e.visible).length;return n.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:R,endPause:a,calculateOffset:s}}},L=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,B=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,H=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,U=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${H} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,X=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,J=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${X} 1s linear infinite;
`,Y=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,G=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,K=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Y} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${G} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Q=j("div")`
  position: absolute;
`,V=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,W=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ee=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${W} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?n.createElement(ee,null,t):t:"blank"===r?null:n.createElement(V,null,n.createElement(J,{...a}),"loading"!==r&&n.createElement(Q,null,"error"===r?n.createElement(U,{...a}):n.createElement(K,{...a})))},er=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ea=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,es=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,eo=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[er(r),ea(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ei=n.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},o=n.createElement(et,{toast:e}),i=n.createElement(eo,{...e.ariaProps},k(e.message,e));return n.createElement(es,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:o,message:i}):n.createElement(n.Fragment,null,o,i))});o=n.createElement,p.p=void 0,b=o,v=void 0,y=void 0;var el=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let o=n.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return n.createElement("div",{ref:o,className:t,style:r},s)},ec=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},eu=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ed=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,containerStyle:o,containerClassName:i})=>{let{toasts:l,handlers:c}=I(r);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:i,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let o=r.position||t,i=ec(o,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return n.createElement(el,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eu:"",style:i},"custom"===r.type?k(r.message,r):s?s(r):n.createElement(ei,{toast:r,position:o}))}))},ep=F}},function(e){e.O(0,[483,664,873,332,888,774,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);