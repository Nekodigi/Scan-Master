(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{84933:function(e,t,r){Promise.resolve().then(r.bind(r,49231)),Promise.resolve().then(r.t.bind(r,94531,23)),Promise.resolve().then(r.t.bind(r,33177,23))},49231:function(e,t,r){"use strict";r.r(t),r.d(t,{StoreVitalContext:function(){return s},StoreVitalProvider:function(){return c}});var n=r(57437),o=r(2265);let s=(0,o.createContext)({}),c=e=>{let{children:t}=e,[r,c]=(0,o.useState)([]),[f,u]=(0,o.useState)([]),a=(0,o.useRef)(!0);return(0,o.useEffect)(()=>{let e=async()=>{let e={method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}};fetch("".concat("https://98d6-39-110-207-84.ngrok-free.app","/products"),e).then(e=>e.json()).then(e=>{u(e)}),fetch("".concat("https://98d6-39-110-207-84.ngrok-free.app","/users"),e).then(e=>e.json()).then(e=>{c(e)})};a.current&&(a.current=!1,e())},[]),(0,n.jsx)(s.Provider,{value:{products:f,setProducts:u,users:r,setUsers:c},children:t})}},33177:function(){},94531:function(e){e.exports={style:{fontFamily:"'__Inter_20951f', '__Inter_Fallback_20951f'",fontStyle:"normal"},className:"__className_20951f"}},30622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,f=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,s={},a=null,i=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(i=t.ref),t)c.call(t,n)&&!u.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:i,props:s,_owner:f.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},57437:function(e,t,r){"use strict";e.exports=r(30622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=84933)}),_N_E=e.O()}]);