(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[916],{5566:function(e,t,n){Promise.resolve().then(n.bind(n,969))},969:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(7437),o=n(8938),i=n(3457),s=n(3226),l=n(5551),a=n(2265),c=n(4033),d=n(9231),u=n(6901),h=n(1396),x=n.n(h);function f(){let e=(0,c.useSearchParams)(),t=e.get("title"),{products:n,users:h}=(0,a.useContext)(d.StoreVitalContext),[f,m]=(0,a.useState)(0);return(0,r.jsxs)(o.Z,{maxWidth:"xs",children:[(0,r.jsx)(u.Z,{selected:"/notify"}),(0,r.jsxs)(i.Z,{m:4,gap:8,mt:12,children:[(0,r.jsx)(s.Z,{sx:{fontSize:24,fontWeight:700},children:t}),(0,r.jsx)(l.Z,{variant:"contained",href:"/recommend",component:x(),children:"アプリへ戻る"})]})]})}},9231:function(e,t,n){"use strict";n.r(t),n.d(t,{StoreVitalContext:function(){return i},StoreVitalProvider:function(){return s}});var r=n(7437),o=n(2265);let i=(0,o.createContext)({}),s=e=>{let{children:t}=e,[n,s]=(0,o.useState)([]),[l,a]=(0,o.useState)([]),[c,d]=(0,o.useState)(),u=(0,o.useRef)(!0),[h,x]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=async()=>{let e={method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}};fetch("".concat("https://scan-master-server.onrender.com","/products"),e).then(e=>e.json()).then(e=>{a(e)}),fetch("".concat("https://scan-master-server.onrender.com","/users"),e).then(e=>e.json()).then(e=>{s(e);let t=localStorage.getItem("user_id");if(t){let n=e.find(e=>e.id===parseInt(t));n&&f(n)}})};u.current&&(u.current=!1,e())},[]);let f=e=>{d(e),e&&localStorage.setItem("user_id",e.id.toString())};return(0,r.jsx)(i.Provider,{value:{products:l,setProducts:a,getProduct:e=>l.find(t=>t.id===e),users:n,setUsers:s,user:c,setUser:f,getUser:e=>n.find(t=>t.id===e),open:h,setOpen:x},children:l.length>0?t:(0,r.jsx)("p",{children:"Loading... "})})}},6901:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7437),o=n(1199),i=n(9599),s=n(6500),l=n(4989),a=n(3457),c=n(8938),d=n(2653),u=n(3226),h=n(6507),x=n(5551),f=n(4982),m=n(8486),p=n(7739),j=n(879),g=n(1396),S=n.n(g),b=n(2265),Z=n(9231);function v(e){let{selected:t}=e,{user:n,setUser:g,users:v,open:w,setOpen:y}=(0,b.useContext)(Z.StoreVitalContext),[z,F]=(0,b.useState)("select"),[k,_]=(0,b.useState)(""),E=()=>{let e={method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({name:k})};fetch("".concat("https://scan-master-server.onrender.com","/users"),e).then(e=>e.json()).then(e=>{g(e),y(!1),F("select")})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Z,{position:"fixed",color:"transparent",sx:{borderBottom:1,borderColor:o.tv,boxSizing:"border-box",background:o.zQ},elevation:0,children:[(0,r.jsx)(l.Z,{sx:{p:0,justifyContent:"center"},children:(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(c.Z,{sx:{p:2,display:"flex",justifyContent:"center",alignContent:"center",position:"relative"},maxWidth:"xs",children:[(0,r.jsxs)(d.Z,{sx:{position:"absolute",left:16,top:6,flexDirection:"column"},size:"large",onClick:()=>y(!0),children:[(0,r.jsx)(i.Z,{fontSize:"inherit"}),(0,r.jsx)(u.Z,{sx:{fontSize:12},children:null==n?void 0:n.name})]}),(0,r.jsx)(u.Z,{sx:{fontSize:24,color:o.z,fontWeight:700,fontFamily:"Cinzel"},children:"S COFFEE"})]}),(0,r.jsx)(h.Z,{overflow:"scroll",width:"100vw",sx:{width:"100vw"},children:(0,r.jsx)(a.Z,{direction:"row",width:"max-content",mx:"auto",children:[{name:"ポイント",url:"/point_card"},{name:"購入履歴",url:"/history"},{name:"おすすめ",url:"/recommend"},{name:"お知らせ",url:"/notification"}].map(e=>(0,r.jsx)(x.Z,{sx:{color:t==e.url?"black":o.X_,fontWeight:700,fontSize:16,px:3,py:.5,borderRadius:0,borderBottom:t==e.url?2:0,borderColor:o.z},component:S(),href:e.url,children:e.name},e.name))})})]})}),(0,r.jsx)(f.Z,{open:w,onClose:()=>{y(!1),F("select")},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:"select"===z?(0,r.jsxs)(a.Z,{sx:C,gap:2,children:[(0,r.jsx)(u.Z,{sx:{fontSize:24,fontWeight:700},children:"ユーザー選択"}),(0,r.jsx)(m.Z,{id:"combo-box-demo",value:null==n?void 0:n.id,onChange:e=>{g(v.find(t=>t.id==e.target.value))},children:v.map(e=>(0,r.jsx)(p.Z,{value:e.id,children:e.name},e.id))}),(0,r.jsx)(x.Z,{variant:"contained",sx:{color:"white",alignSelf:"flex-end"},onClick:()=>F("create"),children:"新規作成"})]}):(0,r.jsxs)(a.Z,{sx:C,gap:2,children:[(0,r.jsx)(u.Z,{sx:{fontSize:24,fontWeight:700},children:"ユーザー作成"}),(0,r.jsx)(j.Z,{label:"名前を入力",value:k,onChange:e=>_(e.target.value)}),(0,r.jsx)(x.Z,{variant:"contained",sx:{color:"white",alignSelf:"flex-end"},onClick:()=>E(),children:"ユーザー作成"})]})})]}),(0,r.jsx)(l.Z,{style:{height:107}})]})}let C={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4}},1199:function(e,t,n){"use strict";n.d(t,{Cz:function(){return i},X_:function(){return s},iy:function(){return c},lr:function(){return l},tv:function(){return r},z:function(){return a},zQ:function(){return o}});let r="#E0E0E0",o="#FFFFFF",i="#F2F2F2",s="#9e9e9e",l="#2962FF",a="#72391D",c="#616161"}},function(e){e.O(0,[773,551,93,651,561,971,596,744],function(){return e(e.s=5566)}),_N_E=e.O()}]);