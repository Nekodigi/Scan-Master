(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{1473:function(e,t,n){Promise.resolve().then(n.bind(n,571))},571:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(7437),o=n(6507),i=n(8938),s=n(3457),l=n(3226),c=n(5551),d=n(2265),a=n(4033),u=n(9231),h=n(1199),x=n(6901);function f(){let e=(0,a.useSearchParams)();e.get("title");let{products:t,getProduct:n,users:f,user:m}=(0,d.useContext)(u.StoreVitalContext),[p,j]=(0,d.useState)([]);return(0,d.useEffect)(()=>{let e=async()=>{fetch("".concat("https://scan-master-server.onrender.com","/histories/").concat(null==m?void 0:m.id),{method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}}).then(e=>e.json()).then(e=>{j(e.orders),console.log(e.orders)})};e()},[m]),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(x.Z,{selected:"/history"}),(0,r.jsx)(i.Z,{maxWidth:"xs",children:(0,r.jsx)(s.Z,{mt:0,children:p.map(e=>e.order_items.map(t=>{var o,i,d;return(0,r.jsxs)(s.Z,{direction:"row",m:3,gap:1.5,children:[(0,r.jsx)("img",{width:128,height:128,style:{objectFit:"cover",borderRadius:4},src:null===(o=n(t.product_id))||void 0===o?void 0:o.image_url}),(0,r.jsxs)(s.Z,{justifyContent:"space-between",width:"100%",children:[(0,r.jsx)(l.Z,{sx:{fontSize:18,fontWeight:700},children:null===(i=n(t.product_id))||void 0===i?void 0:i.name}),(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",children:[(0,r.jsx)(l.Z,{sx:{fontSize:16,color:h.X_},children:new Date(t.created_at).toLocaleDateString()}),(0,r.jsxs)(l.Z,{sx:{fontSize:16},children:["￥",null===(d=n(t.product_id))||void 0===d?void 0:d.price]})]}),(0,r.jsxs)(l.Z,{sx:{fontSize:16},children:[t.quantity,"個"]}),(0,r.jsx)(c.Z,{variant:"contained",sx:{color:"white",fontWeight:700,fontSize:16,mt:1,p:0,width:80,alignSelf:"flex-end"},children:"再購入"})]})]})]},"".concat(e.id).concat(t.product_id))}))})})]})}},9231:function(e,t,n){"use strict";n.r(t),n.d(t,{StoreVitalContext:function(){return i},StoreVitalProvider:function(){return s}});var r=n(7437),o=n(2265);let i=(0,o.createContext)({}),s=e=>{let{children:t}=e,[n,s]=(0,o.useState)([]),[l,c]=(0,o.useState)([]),[d,a]=(0,o.useState)(),u=(0,o.useRef)(!0);(0,o.useEffect)(()=>{let e=async()=>{let e={method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}};fetch("".concat("https://scan-master-server.onrender.com","/products"),e).then(e=>e.json()).then(e=>{c(e)}),fetch("".concat("https://scan-master-server.onrender.com","/users"),e).then(e=>e.json()).then(e=>{s(e);let t=localStorage.getItem("user_id");if(t){let n=e.find(e=>e.id===parseInt(t));n&&h(n)}})};u.current&&(u.current=!1,e())},[]);let h=e=>{a(e),e&&localStorage.setItem("user_id",e.id.toString())};return(0,r.jsx)(i.Provider,{value:{products:l,setProducts:c,getProduct:e=>l.find(t=>t.id===e),users:n,setUsers:s,user:d,setUser:h,getUser:e=>n.find(t=>t.id===e)},children:l.length>0?t:(0,r.jsx)("p",{children:"Loading... "})})}},6901:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(7437),o=n(1199),i=n(9599),s=n(6500),l=n(4989),c=n(3457),d=n(8938),a=n(2653),u=n(3226),h=n(6507),x=n(5551),f=n(4982),m=n(8486),p=n(7739),j=n(1396),g=n.n(j),v=n(2265),Z=n(9231);function b(e){let{selected:t}=e,{user:n,setUser:j,users:b}=(0,v.useContext)(Z.StoreVitalContext),[w,C]=(0,v.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Z,{position:"fixed",color:"transparent",sx:{borderBottom:1,borderColor:o.tv,boxSizing:"border-box"},elevation:0,children:[(0,r.jsx)(l.Z,{sx:{p:0,justifyContent:"center"},children:(0,r.jsxs)(c.Z,{children:[(0,r.jsxs)(d.Z,{sx:{p:2,display:"flex",justifyContent:"center",alignContent:"center",position:"relative"},maxWidth:"xs",children:[(0,r.jsxs)(a.Z,{sx:{position:"absolute",left:16,top:6,flexDirection:"column"},size:"large",onClick:()=>C(!0),children:[(0,r.jsx)(i.Z,{fontSize:"inherit"}),(0,r.jsx)(u.Z,{sx:{fontSize:12},children:null==n?void 0:n.name})]}),(0,r.jsx)(u.Z,{sx:{fontSize:24,color:o.z,fontWeight:700,fontFamily:"Cinzel"},children:"S COFFEE"})]}),(0,r.jsx)(h.Z,{overflow:"scroll",width:"100vw",sx:{width:"100vw"},children:(0,r.jsx)(c.Z,{direction:"row",width:"max-content",mx:"auto",children:[{name:"ポイント",url:"/point_card"},{name:"購入履歴",url:"/history"},{name:"おすすめ",url:"/recommend"},{name:"お知らせ",url:"/notification"}].map(e=>(0,r.jsx)(x.Z,{sx:{color:t==e.url?"black":o.X_,fontWeight:700,fontSize:16,px:3,py:.5,borderRadius:0,borderBottom:t==e.url?2:0,borderColor:o.z},component:g(),href:e.url,children:e.name},e.name))})})]})}),(0,r.jsx)(f.Z,{open:w,onClose:()=>C(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsxs)(h.Z,{sx:S,children:[(0,r.jsx)(u.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"ユーザー選択"}),(0,r.jsx)(m.Z,{id:"combo-box-demo",value:null==n?void 0:n.id,onChange:e=>{j(b.find(t=>t.id==e.target.value))},sx:{width:300},children:b.map(e=>(0,r.jsx)(p.Z,{value:e.id,children:e.name},e.id))})]})})]}),(0,r.jsx)(l.Z,{style:{height:107}})]})}let S={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4}},1199:function(e,t,n){"use strict";n.d(t,{Cz:function(){return o},X_:function(){return i},iy:function(){return c},lr:function(){return s},tv:function(){return r},z:function(){return l}});let r="#E0E0E0",o="#F2F2F2",i="#9e9e9e",s="#2962FF",l="#72391D",c="#616161"}},function(e){e.O(0,[773,542,962,593,971,596,744],function(){return e(e.s=1473)}),_N_E=e.O()}]);