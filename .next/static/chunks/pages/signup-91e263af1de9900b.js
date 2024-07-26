(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{9026:function(e,t,r){"use strict";r.d(t,{i:function(){return s}});var a=r(7294),o=r(6501),s=function(){var e=(0,a.useState)(!1),t=e[0],r=e[1];return{showToast:(0,a.useCallback)(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";"success"===a?t||(o.ZP.success(e),r(!0)):"error"===a?o.ZP.error(e):(0,o.ZP)(e)},[t]),resetSuccessToast:(0,a.useCallback)(function(){r(!1)},[])}}},6629:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var a=r(29),o=r(8307),s=r(4687),n=r.n(s),i=r(7294),l=r(9332),c=r(1664),d=r.n(c),u=r(7066),p=r(9026),f=r(6501),m=r(5893);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function b(){var e,t=(0,i.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",phone:""}),r=t[0],s=t[1],c=(0,l.useRouter)(),g=(0,i.useState)(""),b=g[0],y=g[1],x=(0,p.i)().showToast,v=function(e){var t=e.target.name,r=e.target.value;s(function(e){return h(h({},e),{},(0,o.Z)({},t,r))})},w=(e=(0,a.Z)(n().mark(function e(t){var a,o,s;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(r.password!==r.confirmPassword)){e.next=4;break}return y("Passwords don't match"),e.abrupt("return");case 4:if(!(!r.firstName||!r.lastName||!r.email||!r.password||!r.phone)){e.next=7;break}return y("Please fill out all required fields!"),e.abrupt("return");case 7:return console.log("formData========>",r),e.prev=8,e.next=11,(0,u.Z)({method:"POST",url:"/api/user/create",headers:{"Content-Type":"application/json"},data:JSON.stringify(r)});case 11:console.log("response=========>",o=e.sent),null!=o&&null!==(a=o.data)&&void 0!==a&&a._id&&(x("Sign up success!"),c.push("/signup-success/".concat(null===(s=o.data)||void 0===s?void 0:s._id))),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(8),console.error("Signup error",e.t0),y((null===e.t0||void 0===e.t0?void 0:e.t0.message)||"An error occurred during signup");case 20:return e.abrupt("return");case 21:case"end":return e.stop()}},e,null,[[8,16]])})),function(t){return e.apply(this,arguments)});return(0,m.jsxs)("div",{children:[(0,m.jsx)(f.x7,{position:"top-right",toastOptions:{duration:4e3}}),(0,m.jsx)("section",{className:"bg-gray-50 min-h-screen flex items-center justify-center",children:(0,m.jsx)("div",{className:"bg-gray-100 px-5 py-12 md:w-96 rounded-2xl shadow-lg",children:(0,m.jsxs)("div",{className:"px-8",children:[(0,m.jsx)("h2",{className:"font-bold text-2xl text-[#000000]",children:"Sign Up"}),(0,m.jsxs)("form",{onSubmit:w,className:"text-sm flex flex-col gap-4 mt-4 ",children:[b&&(0,m.jsx)("p",{className:"text-red-500 bg-red-100 rounded-md p-2 border-solid border-2 border-red-400",children:b}),(0,m.jsx)("input",{type:"text",name:"firstName",onChange:v,value:r.firstName,className:"p-2 rounded-md border focus:outline-none focus:border-[#6e59e7] focus:ring-[#806aff] block w-full focus:ring-1",placeholder:"First name"}),(0,m.jsx)("input",{type:"text",name:"lastName",onChange:v,value:r.lastName,className:"p-2 rounded-md border focus:outline-none focus:border-[#6e59e7] focus:ring-[#806aff] block w-full focus:ring-1",placeholder:"Last name"}),(0,m.jsx)("input",{type:"email",name:"email",onChange:v,value:r.email,className:"p-2 rounded-md border focus:outline-none focus:border-[#6e59e7] focus:ring-[#806aff] block w-full focus:ring-1",placeholder:"Email"}),(0,m.jsx)("input",{type:"password",name:"password",onChange:v,value:r.password,className:"p-2 rounded-md border focus:outline-none focus:border-[#6e59e7] focus:ring-[#806aff] block w-full focus:ring-1",placeholder:"Password"}),(0,m.jsx)("input",{type:"password",name:"confirmPassword",onChange:v,value:r.confirmPassword,className:"p-2 rounded-md border focus:outline-none focus:border-[#6e59e7] focus:ring-[#806aff] block w-full focus:ring-1",placeholder:"Confirm password"}),(0,m.jsx)("input",{type:"tel",name:"phone",onChange:v,value:r.phone,className:"p-2 rounded-md border focus:outline-none focus:border-[#6e59e7] focus:ring-[#806aff] block w-full focus:ring-1",placeholder:"Phone number"}),(0,m.jsx)("button",{type:"submit",className:"bg-[#6e59e7] text-white rounded-md py-2 active:bg-[#806aff]",children:"Sign up"})]}),(0,m.jsxs)("div",{className:"mt-5 text-sm flex justify-center items-center ",children:[(0,m.jsx)("a",{className:"text-gray-700 ",children:"Already have an account?"}),(0,m.jsx)(d(),{href:"/login",className:"text-[#6e59e7] font-bold ml-2 hover:underline",children:"Log in"})]})]})})})]})}},8894:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return r(6629)}])},6501:function(e,t,r){"use strict";let a,o;r.d(t,{x7:function(){return eu},ZP:function(){return ep}});var s,n=r(7294);let i={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",o="";for(let s in e){let n=e[s];"@"==s[0]?"i"==s[1]?r=s+" "+n+";":a+="f"==s[1]?p(n,s):s+"{"+p(n,"k"==s[1]?"":t)+"}":"object"==typeof n?a+=p(n,t?t.replace(/([^,])+/g,e=>s.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=n&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(s,n):s+":"+n+";")}return r+(t&&o?t+"{"+o+"}":o)+a},f={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},g=(e,t,r,a,o)=>{var s;let n=m(e),i=f[n]||(f[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!f[i]){let t=n!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);f[i]=p(o?{["@keyframes "+i]:t}:t,r?"":"."+i)}let l=r&&f.g?f.g:null;return r&&(f.g=f[i]),s=f[i],l?t.data=t.data.replace(l,s):-1===t.data.indexOf(s)&&(t.data=a?s+t.data:t.data+s),i},h=(e,t,r)=>e.reduce((e,a,o)=>{let s=t[o];if(s&&s.call){let e=s(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==s?"":s)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let y,x,v,w=b.bind({k:1});function j(e,t){let r=this||{};return function(){let a=arguments;function o(s,n){let i=Object.assign({},s),l=i.className||o.className;r.p=Object.assign({theme:x&&x()},i),r.o=/ *go\d+/.test(l),i.className=b.apply(r,a)+(l?" "+l:""),t&&(i.ref=n);let c=e;return e[0]&&(c=i.as||e,delete i.as),v&&c[0]&&v(i),y(c,i)}return t?t(o):o}}var N=e=>"function"==typeof e,O=(e,t)=>N(e)?e(t):e,k=(a=0,()=>(++a).toString()),E=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},P=new Map,C=e=>{if(P.has(e))return;let t=setTimeout(()=>{P.delete(e),T({type:4,toastId:e})},1e3);P.set(e,t)},$=e=>{let t=P.get(e);t&&clearTimeout(t)},S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&$(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?S(e,{type:1,toast:r}):S(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?C(a):e.toasts.forEach(e=>{C(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},_=[],D={toasts:[],pausedAt:void 0},T=e=>{D=S(D,e),_.forEach(e=>{e(D)})},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},z=(e={})=>{let[t,r]=(0,n.useState)(D);(0,n.useEffect)(()=>(_.push(r),()=>{let e=_.indexOf(r);e>-1&&_.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},Z=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||k()}),I=e=>(t,r)=>{let a=Z(t,e,r);return T({type:2,toast:a}),a.id},F=(e,t)=>I("blank")(e,t);F.error=I("error"),F.success=I("success"),F.loading=I("loading"),F.custom=I("custom"),F.dismiss=e=>{T({type:3,toastId:e})},F.remove=e=>T({type:4,toastId:e}),F.promise=(e,t,r)=>{let a=F.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(F.success(O(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{F.error(O(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var L=(e,t)=>{T({type:1,toast:{id:e,height:t}})},M=()=>{T({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:r}=z(e);(0,n.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&F.dismiss(t.id);return}return setTimeout(()=>F.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,n.useCallback)(()=>{r&&T({type:6,time:Date.now()})},[r]),o=(0,n.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:s}=r||{},n=t.filter(t=>(t.position||s)===(e.position||s)&&t.height),i=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<i&&e.visible).length;return n.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:L,startPause:M,endPause:a,calculateOffset:o}}},U=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,q=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,R=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,X=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${q} 0.15s ease-out forwards;
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
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=w`
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
  animation: ${B} 1s linear infinite;
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
`,et=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?n.createElement(ee,null,t):t:"blank"===r?null:n.createElement(V,null,n.createElement(J,{...a}),"loading"!==r&&n.createElement(Q,null,"error"===r?n.createElement(X,{...a}):n.createElement(K,{...a})))},er=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ea=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,eo=j("div")`
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
`,es=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[er(r),ea(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ei=n.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},s=n.createElement(et,{toast:e}),i=n.createElement(es,{...e.ariaProps},O(e.message,e));return n.createElement(eo,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:s,message:i}):n.createElement(n.Fragment,null,s,i))});s=n.createElement,p.p=void 0,y=s,x=void 0,v=void 0;var el=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let s=n.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return n.createElement("div",{ref:s,className:t,style:r},o)},ec=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ed=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eu=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,containerStyle:s,containerClassName:i})=>{let{toasts:l,handlers:c}=H(r);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:i,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let s=r.position||t,i=ec(s,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return n.createElement(el,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ed:"",style:i},"custom"===r.type?O(r.message,r):o?o(r):n.createElement(ei,{toast:r,position:s}))}))},ep=F}},function(e){e.O(0,[483,664,332,888,774,179],function(){return e(e.s=8894)}),_N_E=e.O()}]);