(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3226:function(t,e,r){"use strict";r.d(e,{Z:function(){return _}});var n=r(791),i=r(3428),o=r(2265),a=r(7042),s=r(3381),d=r(5600),l=r(5843),u=r(7927),c=r(8702),h=r(6520),p=r(5702);function g(t){return(0,p.Z)("MuiTypography",t)}(0,h.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=r(7437);let m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],x=t=>{let{align:e,gutterBottom:r,noWrap:n,paragraph:i,variant:o,classes:a}=t,s={root:["root",o,"inherit"!==t.align&&`align${(0,c.Z)(e)}`,r&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return(0,d.Z)(s,g,a)},v=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,c.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>(0,i.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=t=>Z[t]||t,b=o.forwardRef(function(t,e){let r=(0,u.Z)({props:t,name:"MuiTypography"}),o=j(r.color),d=(0,s.Z)((0,i.Z)({},r,{color:o})),{align:l="inherit",className:c,component:h,gutterBottom:p=!1,noWrap:g=!1,paragraph:Z=!1,variant:b="body1",variantMapping:_=y}=d,w=(0,n.Z)(d,m),S=(0,i.Z)({},d,{align:l,color:o,className:c,component:h,gutterBottom:p,noWrap:g,paragraph:Z,variant:b,variantMapping:_}),C=h||(Z?"p":_[b]||y[b])||"span",W=x(S);return(0,f.jsx)(v,(0,i.Z)({as:C,ref:e,ownerState:S,className:(0,a.Z)(W.root,c)},w))});var _=b},7406:function(t,e,r){Promise.resolve().then(r.bind(r,7405))},7405:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return g}});var n=r(7437),i=r(3457),o=r(6507),a=r(4135),s=r(3226),d=r(1199),l=r(8526),u=r(2265),c=r(9231);function h(t){let{item:e}=t,{products:r}=(0,u.useContext)(c.StoreVitalContext);return(0,n.jsxs)(i.Z,{sx:{p:3,borderBottom:1,borderColor:d.tv},direction:"row",justifyContent:"space-between",children:[(0,n.jsxs)(i.Z,{direction:"row",children:[(0,n.jsx)(s.Z,{width:160,children:r[e.id].name}),(0,n.jsxs)(s.Z,{sx:{fontWeight:700},children:["x",e.quantity]})]}),(0,n.jsxs)(s.Z,{sx:{fontWeight:700},children:["￥ ",r[e.id].price]})]})}var p=r(9027);function g(){let[t,e]=(0,u.useState)(""),[r,g]=(0,u.useState)({id:void 0,total_points:0,user_id:void 0,order_items:[]}),{products:f,users:m}=(0,u.useContext)(c.StoreVitalContext),[x,v]=(0,u.useState)(void 0),{ref:y}=(0,l.T_)({onDecodeResult(t){Z(parseInt(t.getText()))}});(0,u.useEffect)(()=>{f.length>0&&m.length>0&&b(2)},[f,m]);let Z=t=>{t.toString().startsWith("4")&&b(parseInt(t.toString().slice(1))),t.toString().startsWith("9")&&j(parseInt(t.toString().slice(1)))},j=t=>{let e=m.find(e=>e.id===t);e&&v(e)},b=t=>{let e=f.find(e=>e.id===t);if(e){let n={...r},i=n.order_items.findIndex(e=>e.id===t);if(i>=0){let t=n.order_items[i];t.quantity+=1}else{let t={};t.id=e.id,t.quantity=1,n.order_items.push({...t})}g(n)}},_=r.order_items.reduce((t,e)=>t+e.quantity*f[e.id].price,0),w=r.order_items.reduce((t,e)=>t+e.quantity,0),S=.01*_,C=()=>{let t={store_id:1,user_id:null==x?void 0:x.id,total_points:S,order_items:r.order_items.map(t=>({product_id:t.id,quantity:t.quantity}))};fetch("".concat("https://scan-master-server.onrender.com","/orders"),{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify(t)}).then(t=>t.text()).then(t=>{console.log(t)}),g({id:void 0,total_points:0,user_id:void 0,order_items:[]}),v(void 0)};return(0,n.jsx)("main",{children:(0,n.jsxs)(i.Z,{direction:"row",children:[(0,n.jsxs)(i.Z,{gap:2,width:"100%",mx:2,height:"100vh",children:[(0,n.jsx)(p.h,{selected:"/"}),(0,n.jsx)(o.Z,{children:(0,n.jsx)("video",{ref:y,style:{borderRadius:32,width:"100%"}})}),(0,n.jsx)(a.Z,{value:t,onChange:t=>{e(t.target.value)},onKeyDown:r=>{"Enter"===r.key&&(Z(parseInt(t)),e(""))},label:"ID手動入力"})]}),(0,n.jsxs)(i.Z,{width:360,minWidth:360,sx:{borderLeft:4,borderColor:d.tv,height:"100vh"},direction:"column",children:[(0,n.jsx)(i.Z,{px:2,height:"100%",children:r.order_items.map(t=>(0,n.jsx)(h,{item:t},t.id))}),(0,n.jsxs)(i.Z,{direction:"row",justifyContent:"space-between",m:2,p:2,px:3,sx:{background:d.lr,color:"white",borderRadius:2},component:"div",onClick:()=>C(),children:[(0,n.jsxs)(s.Z,{sx:{fontSize:32,fontWeight:700},children:["￥",_]}),(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{sx:{fontSize:16,fontWeight:700,alignSelf:"flex-end"},children:[w,"点"]}),(0,n.jsxs)(s.Z,{sx:{fontSize:16,fontWeight:700},children:[null==x?void 0:x.name," お会計へ"]})]})]})]})]})})}},9231:function(t,e,r){"use strict";r.r(e),r.d(e,{StoreVitalContext:function(){return o},StoreVitalProvider:function(){return a}});var n=r(7437),i=r(2265);let o=(0,i.createContext)({}),a=t=>{let{children:e}=t,[r,a]=(0,i.useState)([]),[s,d]=(0,i.useState)([]),l=(0,i.useRef)(!0);return(0,i.useEffect)(()=>{let t=async()=>{let t={method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}};fetch("".concat("https://scan-master-server.onrender.com","/products"),t).then(t=>t.json()).then(t=>{d(t)}),fetch("".concat("https://scan-master-server.onrender.com","/users"),t).then(t=>t.json()).then(t=>{a(t)})};l.current&&(l.current=!1,t())},[]),(0,n.jsx)(o.Provider,{value:{products:s,setProducts:d,users:r,setUsers:a},children:s.length>0?e:(0,n.jsx)("p",{children:"Loading... "})})}},9027:function(t,e,r){"use strict";r.d(e,{h:function(){return l}});var n=r(7437),i=r(1199),o=r(6500),a=r(4989),s=r(3457),d=r(5551);function l(t){let{selected:e}=t;return(0,n.jsx)(o.Z,{position:"static",color:"transparent",sx:{borderBottom:4,borderColor:i.tv},elevation:0,children:(0,n.jsx)(a.Z,{sx:{p:0},children:(0,n.jsx)(s.Z,{direction:"row",gap:2,m:1.5,children:[{name:"スキャン",url:"/"},{name:"QR作成",url:"/qr_gen"}].map(t=>(0,n.jsx)(d.Z,{sx:{color:e==t.url?"black":i.X_,fontWeight:700,fontSize:24,px:3,py:.5,borderRadius:2,background:e==t.url?i.Cz:"transparent"},href:t.url,children:t.name},t.name))})})})}},1199:function(t,e,r){"use strict";r.d(e,{Cz:function(){return i},X_:function(){return o},iy:function(){return d},lr:function(){return a},tv:function(){return n},z:function(){return s}});let n="#E0E0E0",i="#F2F2F2",o="#9e9e9e",a="#2962FF",s="#72391D",d="#616161"}},function(t){t.O(0,[370,722,405,205,526,355,971,596,744],function(){return t(t.s=7406)}),_N_E=t.O()}]);