(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{1473:function(e,t,n){Promise.resolve().then(n.bind(n,571))},571:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(7437),o=n(6507),i=n(8938),s=n(3457),c=n(3226),d=n(5551),a=n(2265),u=n(4033),l=n(9231),h=n(1199),f=n(6901);function x(){let e=(0,u.useSearchParams)();e.get("title");let{products:t,getProduct:n,users:x}=(0,a.useContext)(l.StoreVitalContext),[p,j]=(0,a.useState)(0),[m,g]=(0,a.useState)([]);return(0,a.useEffect)(()=>{let e=async()=>{fetch("".concat("https://scan-master-server.onrender.com","/histories/").concat(1),{method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}}).then(e=>e.json()).then(e=>{g(e.orders),console.log(e.orders)})};e()},[]),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(f.Z,{selected:"/history"}),(0,r.jsx)(i.Z,{maxWidth:"xs",children:(0,r.jsx)(s.Z,{mt:0,children:m.map(e=>e.order_items.map(t=>{var o,i;return(0,r.jsxs)(s.Z,{direction:"row",m:3,gap:1.5,children:[(0,r.jsx)("img",{width:128,height:128,style:{objectFit:"cover",borderRadius:4},src:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/323594_2200-1200x628.jpg"}),(0,r.jsxs)(s.Z,{justifyContent:"space-between",width:"100%",children:[(0,r.jsx)(c.Z,{sx:{fontSize:18,fontWeight:700},children:null===(o=n(t.product_id))||void 0===o?void 0:o.name}),(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",children:[(0,r.jsx)(c.Z,{sx:{fontSize:16,color:h.X_},children:new Date(t.created_at).toLocaleDateString()}),(0,r.jsxs)(c.Z,{sx:{fontSize:16},children:["￥",null===(i=n(t.product_id))||void 0===i?void 0:i.price]})]}),(0,r.jsxs)(c.Z,{sx:{fontSize:16},children:[t.quantity,"個"]}),(0,r.jsx)(d.Z,{variant:"contained",sx:{color:"white",fontWeight:700,fontSize:16,mt:1,p:0,width:80,alignSelf:"flex-end"},children:"再購入"})]})]})]},"".concat(e.id).concat(t.product_id))}))})})]})}},9231:function(e,t,n){"use strict";n.r(t),n.d(t,{StoreVitalContext:function(){return i},StoreVitalProvider:function(){return s}});var r=n(7437),o=n(2265);let i=(0,o.createContext)({}),s=e=>{let{children:t}=e,[n,s]=(0,o.useState)([]),[c,d]=(0,o.useState)([]),a=(0,o.useRef)(!0);return(0,o.useEffect)(()=>{let e=async()=>{let e={method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}};fetch("".concat("https://scan-master-server.onrender.com","/products"),e).then(e=>e.json()).then(e=>{d(e)}),fetch("".concat("https://scan-master-server.onrender.com","/users"),e).then(e=>e.json()).then(e=>{s(e)})};a.current&&(a.current=!1,e())},[]),(0,r.jsx)(i.Provider,{value:{products:c,setProducts:d,getProduct:e=>c.find(t=>t.id===e),users:n,setUsers:s,getUser:e=>n.find(t=>t.id===e)},children:c.length>0?t:(0,r.jsx)("p",{children:"Loading... "})})}},6901:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(7437),o=n(1199),i=n(6500),s=n(4989),c=n(3457),d=n(6507),a=n(3226),u=n(5551),l=n(1396),h=n.n(l);function f(e){let{selected:t}=e;return(0,r.jsx)(i.Z,{position:"static",color:"transparent",sx:{borderBottom:1,borderColor:o.tv,boxSizing:"border-box"},elevation:0,children:(0,r.jsx)(s.Z,{sx:{p:0,justifyContent:"center"},children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(d.Z,{p:2,display:"flex",justifyContent:"center",alignContent:"center",children:(0,r.jsx)(a.Z,{sx:{fontSize:24,color:o.z,fontWeight:700,fontFamily:"Cinzel"},children:"S COFFEE"})}),(0,r.jsx)(c.Z,{direction:"row",children:[{name:"購入履歴",url:"/history"},{name:"おすすめ",url:"/recommend"},{name:"お知らせ",url:"/notification"}].map(e=>(0,r.jsx)(u.Z,{sx:{color:t==e.url?"black":o.X_,fontWeight:700,fontSize:16,px:3,py:.5,borderRadius:0,borderBottom:t==e.url?2:0,borderColor:o.z},component:h(),href:e.url,children:e.name},e.name))})]})})})}},1199:function(e,t,n){"use strict";n.d(t,{Cz:function(){return o},X_:function(){return i},iy:function(){return d},lr:function(){return s},tv:function(){return r},z:function(){return c}});let r="#E0E0E0",o="#F2F2F2",i="#9e9e9e",s="#2962FF",c="#72391D",d="#616161"}},function(e){e.O(0,[773,542,436,84,971,596,744],function(){return e(e.s=1473)}),_N_E=e.O()}]);