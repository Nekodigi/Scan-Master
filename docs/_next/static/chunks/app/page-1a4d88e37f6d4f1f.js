(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{67406:function(t,e,r){Promise.resolve().then(r.bind(r,52186))},52186:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return R}});var n=r(57437),i=r(98075),o=r(39227),a=r(96301),s=r(20791),l=r(13428),h=r(2265),u=r(57042),d=r(43381),c=r(95600),p=r(35843),g=r(87927),f=r(28702),m=r(26520),x=r(25702);function y(t){return(0,x.Z)("MuiTypography",t)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);let v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],j=t=>{let{align:e,gutterBottom:r,noWrap:n,paragraph:i,variant:o,classes:a}=t,s={root:["root",o,"inherit"!==t.align&&`align${(0,f.Z)(e)}`,r&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return(0,c.Z)(s,y,a)},b=(0,p.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,f.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>(0,l.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=t=>w[t]||t,C=h.forwardRef(function(t,e){let r=(0,g.Z)({props:t,name:"MuiTypography"}),i=S(r.color),o=(0,d.Z)((0,l.Z)({},r,{color:i})),{align:a="inherit",className:h,component:c,gutterBottom:p=!1,noWrap:f=!1,paragraph:m=!1,variant:x="body1",variantMapping:y=Z}=o,w=(0,s.Z)(o,v),C=(0,l.Z)({},o,{align:a,color:i,className:h,component:c,gutterBottom:p,noWrap:f,paragraph:m,variant:x,variantMapping:y}),k=c||(m?"p":y[x]||Z[x])||"span",W=j(C);return(0,n.jsx)(b,(0,l.Z)({as:k,ref:e,ownerState:C,className:(0,u.Z)(W.root,h)},w))});var k=r(11199),W=r(38526);function _(t){let{item:e}=t;return(0,n.jsxs)(i.Z,{sx:{p:3,borderBottom:1,borderColor:k.tv},direction:"row",justifyContent:"space-between",children:[(0,n.jsxs)(i.Z,{direction:"row",children:[(0,n.jsx)(C,{width:160,children:e.name}),(0,n.jsxs)(C,{sx:{fontWeight:700},children:["x",e.quantity]})]}),(0,n.jsxs)(C,{sx:{fontWeight:700},children:["￥ ",e.price]})]})}var B=r(49231),E=r(29027);function R(){let[t,e]=(0,h.useState)(""),[r,s]=(0,h.useState)({id:void 0,items:[]}),{products:l,users:u}=(0,h.useContext)(B.StoreVitalContext),[d,c]=(0,h.useState)(void 0),{ref:p}=(0,W.T_)({onDecodeResult(t){g(parseInt(t.getText()))}});(0,h.useEffect)(()=>{l.length>0&&u.length>0&&(m(2),f(1))},[l,u]);let g=t=>{t.toString().startsWith("4")&&m(parseInt(t.toString().slice(1))),t.toString().startsWith("9")&&f(parseInt(t.toString().slice(1)))},f=t=>{let e=u.find(e=>e.id===t);e&&c(e)},m=t=>{let e=l.find(e=>e.id===t);if(e.quantity=1,e){let n={...r},i=n.items.findIndex(e=>e.id===t);if(i>=0){let t=n.items[i];t.quantity+=1}else n.items.push({...e});s(n)}},x=r.items.reduce((t,e)=>t+e.quantity*e.price,0),y=r.items.reduce((t,e)=>t+e.quantity,0),v=.01*x,j=()=>{let t={store_id:1,user_id:null==d?void 0:d.id,total_points:v,order_items:r.items.map(t=>({product_id:t.id,quantity:t.quantity}))};fetch("".concat("https://98d6-39-110-207-84.ngrok-free.app","/orders"),{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify(t)}).then(t=>t.text()).then(t=>{console.log(t)})};return(0,n.jsx)("main",{children:(0,n.jsxs)(i.Z,{direction:"row",children:[(0,n.jsxs)(i.Z,{gap:2,width:"100%",mx:2,height:"100vh",children:[(0,n.jsx)(E.h,{selected:"/"}),(0,n.jsx)(o.Z,{children:(0,n.jsx)("video",{ref:p,style:{borderRadius:32,width:"100%"}})}),(0,n.jsx)(a.Z,{value:t,onChange:t=>{e(t.target.value)},onKeyDown:r=>{"Enter"===r.key&&(g(parseInt(t)),e(""))},label:"ID手動入力"})]}),(0,n.jsxs)(i.Z,{width:360,minWidth:360,sx:{borderLeft:4,borderColor:k.tv,height:"100vh"},direction:"column",children:[(0,n.jsx)(i.Z,{px:2,height:"100%",children:r.items.map(t=>(0,n.jsx)(_,{item:t},t.id))}),(0,n.jsxs)(i.Z,{direction:"row",justifyContent:"space-between",m:2,p:2,px:3,sx:{background:k.lr,color:"white",borderRadius:2},component:"div",onClick:()=>j(),children:[(0,n.jsxs)(C,{sx:{fontSize:32,fontWeight:700},children:["￥",x]}),(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(C,{sx:{fontSize:16,fontWeight:700,alignSelf:"flex-end"},children:[y,"点"]}),(0,n.jsxs)(C,{sx:{fontSize:16,fontWeight:700},children:[null==d?void 0:d.name," お会計へ"]})]})]})]})]})})}},49231:function(t,e,r){"use strict";r.r(e),r.d(e,{StoreVitalContext:function(){return o},StoreVitalProvider:function(){return a}});var n=r(57437),i=r(2265);let o=(0,i.createContext)({}),a=t=>{let{children:e}=t,[r,a]=(0,i.useState)([]),[s,l]=(0,i.useState)([]),h=(0,i.useRef)(!0);return(0,i.useEffect)(()=>{let t=async()=>{let t={method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}};fetch("".concat("https://98d6-39-110-207-84.ngrok-free.app","/products"),t).then(t=>t.json()).then(t=>{l(t)}),fetch("".concat("https://98d6-39-110-207-84.ngrok-free.app","/users"),t).then(t=>t.json()).then(t=>{a(t)})};h.current&&(h.current=!1,t())},[]),(0,n.jsx)(o.Provider,{value:{products:s,setProducts:l,users:r,setUsers:a},children:e})}},29027:function(t,e,r){"use strict";r.d(e,{h:function(){return h}});var n=r(57437),i=r(11199),o=r(76500),a=r(34989),s=r(98075),l=r(35551);function h(t){let{selected:e}=t;return(0,n.jsx)(o.Z,{position:"static",color:"transparent",sx:{borderBottom:4,borderColor:i.tv},elevation:0,children:(0,n.jsx)(a.Z,{children:(0,n.jsx)(s.Z,{direction:"row",gap:2,m:1.5,children:[{name:"スキャン",url:"/"},{name:"QR作成",url:"/qr_gen"}].map(t=>(0,n.jsx)(l.Z,{sx:{color:e==t.url?"black":i.X_,fontWeight:700,fontSize:24,px:3,py:.5,borderRadius:2,background:e==t.url?i.Cz:"transparent"},href:t.url,children:t.name},t.name))})})})}},11199:function(t,e,r){"use strict";r.d(e,{Cz:function(){return i},X_:function(){return o},lr:function(){return a},tv:function(){return n}});let n="#E0E0E0",i="#F2F2F2",o="#9e9e9e",a="#2962FF"}},function(t){t.O(0,[439,526,827,971,596,744],function(){return t(t.s=67406)}),_N_E=t.O()}]);