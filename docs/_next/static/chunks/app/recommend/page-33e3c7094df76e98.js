(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[531],{1222:function(e,t,n){Promise.resolve().then(n.bind(n,1571))},1571:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(7437),o=n(6507),i=n(8938),s=n(8874),c=n(3457),l=n(3226),a=n(2265),d=n(4033),u=n(9231),h=n(1199),x=n(6901);function f(){let e=(0,d.useSearchParams)();e.get("title");let{products:t,users:n,user:f}=(0,a.useContext)(u.StoreVitalContext),[m,p]=(0,a.useState)(0),[j,g]=(0,a.useState)([]);return(0,a.useEffect)(()=>{let e=async()=>{fetch("".concat("https://scan-master-server.onrender.com","/recommends/").concat(null==f?void 0:f.id),{method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}}).then(e=>e.json()).then(e=>{g(e)})};e()},[]),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(x.Z,{selected:"/recommend"}),(0,r.jsx)(i.Z,{maxWidth:"xs",children:(0,r.jsx)(s.ZP,{container:!0,direction:"row",mt:1,spacing:2,children:j.map(e=>(0,r.jsx)(s.ZP,{item:!0,xs:6,children:(0,r.jsxs)(c.Z,{sx:{borderBottom:1,borderColor:h.tv,borderRadius:1,overflow:"hidden"},children:[(0,r.jsx)("img",{width:"100%",style:{objectFit:"cover",aspectRatio:1,borderRadius:4},src:e.image_url}),(0,r.jsxs)(c.Z,{alignItems:"center",width:"100%",p:1,children:[(0,r.jsx)(l.Z,{sx:{fontSize:14,fontWeight:700,height:40,textAlign:"center"},children:e.name}),(0,r.jsxs)(l.Z,{sx:{fontSize:14,color:h.iy},children:["￥ ",e.price]})]})]})},e.id))})})]})}},9231:function(e,t,n){"use strict";n.r(t),n.d(t,{StoreVitalContext:function(){return i},StoreVitalProvider:function(){return s}});var r=n(7437),o=n(2265);let i=(0,o.createContext)({}),s=e=>{let{children:t}=e,[n,s]=(0,o.useState)([]),[c,l]=(0,o.useState)([]),[a,d]=(0,o.useState)(),u=(0,o.useRef)(!0),[h,x]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=async()=>{let e={method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}};fetch("".concat("https://scan-master-server.onrender.com","/products"),e).then(e=>e.json()).then(e=>{l(e)}),fetch("".concat("https://scan-master-server.onrender.com","/users"),e).then(e=>e.json()).then(e=>{s(e);let t=localStorage.getItem("user_id");if(t){let n=e.find(e=>e.id===parseInt(t));n&&f(n)}})};u.current&&(u.current=!1,e())},[]);let f=e=>{d(e),e&&localStorage.setItem("user_id",e.id.toString())};return(0,r.jsx)(i.Provider,{value:{products:c,setProducts:l,getProduct:e=>c.find(t=>t.id===e),users:n,setUsers:s,user:a,setUser:f,getUser:e=>n.find(t=>t.id===e),open:h,setOpen:x},children:c.length>0?t:(0,r.jsx)("p",{children:"Loading... "})})}},6901:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(7437),o=n(1199),i=n(9599),s=n(6500),c=n(4989),l=n(3457),a=n(8938),d=n(2653),u=n(3226),h=n(6507),x=n(5551),f=n(4982),m=n(8486),p=n(7739),j=n(879),g=n(1396),b=n.n(g),Z=n(2265),v=n(9231);function S(e){let{selected:t}=e,{user:n,setUser:g,users:S,open:w,setOpen:y}=(0,Z.useContext)(v.StoreVitalContext),[z,k]=(0,Z.useState)("select"),[F,E]=(0,Z.useState)(""),_=()=>{let e={method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({name:F})};fetch("".concat("https://scan-master-server.onrender.com","/users"),e).then(e=>e.json()).then(e=>{g(e),y(!1),k("select")})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Z,{position:"fixed",color:"transparent",sx:{borderBottom:1,borderColor:o.tv,boxSizing:"border-box",background:o.zQ},elevation:0,children:[(0,r.jsx)(c.Z,{sx:{p:0,justifyContent:"center"},children:(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(a.Z,{sx:{p:2,display:"flex",justifyContent:"center",alignContent:"center",position:"relative"},maxWidth:"xs",children:[(0,r.jsxs)(d.Z,{sx:{position:"absolute",left:16,top:6,flexDirection:"column"},size:"large",onClick:()=>y(!0),children:[(0,r.jsx)(i.Z,{fontSize:"inherit"}),(0,r.jsx)(u.Z,{sx:{fontSize:12},children:null==n?void 0:n.name})]}),(0,r.jsx)(u.Z,{sx:{fontSize:24,color:o.z,fontWeight:700,fontFamily:"Cinzel"},children:"S COFFEE"})]}),(0,r.jsx)(h.Z,{overflow:"scroll",width:"100vw",sx:{width:"100vw"},children:(0,r.jsx)(l.Z,{direction:"row",width:"max-content",mx:"auto",children:[{name:"ポイント",url:"/point_card"},{name:"購入履歴",url:"/history"},{name:"おすすめ",url:"/recommend"},{name:"お知らせ",url:"/notification"}].map(e=>(0,r.jsx)(x.Z,{sx:{color:t==e.url?"black":o.X_,fontWeight:700,fontSize:16,px:3,py:.5,borderRadius:0,borderBottom:t==e.url?2:0,borderColor:o.z},component:b(),href:e.url,children:e.name},e.name))})})]})}),(0,r.jsx)(f.Z,{open:w,onClose:()=>{y(!1),k("select")},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:"select"===z?(0,r.jsxs)(l.Z,{sx:C,gap:2,children:[(0,r.jsx)(u.Z,{sx:{fontSize:24,fontWeight:700},children:"ユーザー選択"}),(0,r.jsx)(m.Z,{id:"combo-box-demo",value:null==n?void 0:n.id,onChange:e=>{g(S.find(t=>t.id==e.target.value))},children:S.map(e=>(0,r.jsx)(p.Z,{value:e.id,children:e.name},e.id))}),(0,r.jsx)(x.Z,{variant:"contained",sx:{color:"white",alignSelf:"flex-end"},onClick:()=>k("create"),children:"新規作成"})]}):(0,r.jsxs)(l.Z,{sx:C,gap:2,children:[(0,r.jsx)(u.Z,{sx:{fontSize:24,fontWeight:700},children:"ユーザー作成"}),(0,r.jsx)(j.Z,{label:"名前を入力",value:F,onChange:e=>E(e.target.value)}),(0,r.jsx)(x.Z,{variant:"contained",sx:{color:"white",alignSelf:"flex-end"},onClick:()=>_(),children:"ユーザー作成"})]})})]}),(0,r.jsx)(c.Z,{style:{height:107}})]})}let C={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4}},1199:function(e,t,n){"use strict";n.d(t,{Cz:function(){return i},X_:function(){return s},iy:function(){return a},lr:function(){return c},tv:function(){return r},z:function(){return l},zQ:function(){return o}});let r="#E0E0E0",o="#FFFFFF",i="#F2F2F2",s="#9e9e9e",c="#2962FF",l="#72391D",a="#616161"}},function(e){e.O(0,[773,551,93,651,561,874,971,596,744],function(){return e(e.s=1222)}),_N_E=e.O()}]);