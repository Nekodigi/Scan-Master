(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{8282:function(e,t,n){Promise.resolve().then(n.bind(n,638))},638:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(7437),o=n(3226),i=n(8938),s=n(3457),a=n(5551),l=n(6507),c=n(2265),d=n(4033),h=n(9231),u=n(6901);function p(){let[e,t]=(0,c.useState)(),n=(0,d.useSearchParams)(),p=n.get("orderId"),{products:x,users:f,user:g,setOpen:m}=(0,c.useContext)(h.StoreVitalContext),j=(0,d.useRouter)();(0,c.useEffect)(()=>{let e=async()=>{fetch("".concat("https://scan-master-server.onrender.com","/orders/").concat(p),{method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}}).then(e=>e.json()).then(e=>{t(e)})};e()},[]);let v=async()=>{fetch("".concat("https://scan-master-server.onrender.com","/link?order_id=").concat(p,"&user_id=").concat(null==g?void 0:g.id),{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}}).then(e=>e.text()).then(e=>{console.log(e)}),j.push("/notify?title=ポイントが付きました")},Z=(0,c.useMemo)(()=>(null==e?void 0:e.user_id)?(0,r.jsx)(o.Z,{sx:{fontSize:24,fontWeight:700},children:"既にポイントが使われています"}):(0,r.jsxs)(o.Z,{sx:{fontSize:24,fontWeight:700},children:["今からでも",(0,r.jsx)("br",{}),"".concat(null==e?void 0:e.total_points,"ポイント付きます！")]}),[e]);return e?(0,r.jsxs)(i.Z,{maxWidth:"xs",children:[(0,r.jsx)(u.Z,{selected:"/add_point"}),(0,r.jsxs)(s.Z,{m:4,gap:8,children:[Z,(null==e?void 0:e.user_id)?(0,r.jsx)(a.Z,{variant:"contained",href:"/recommend",children:"ホームに戻る"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z,{sx:{fontSize:24,fontWeight:700},children:"Step1 アプリインストール"}),(0,r.jsx)(o.Z,{children:"お使いのスマートフォンにアプリをインストールしてください。"}),(0,r.jsxs)(s.Z,{direction:"row",gap:2,children:[(0,r.jsx)("a",{href:"https://play.google.com/store/apps/details?id=co.sarutahiko.app",children:(0,r.jsx)("img",{height:64,alt:"Google Play で手に入れよう",src:"https://play.google.com/intl/en_us/badges/static/images/badges/ja_badge_web_generic.png"})}),(0,r.jsx)("a",{href:"https://apps.apple.com/jp/app/%E3%82%B5%E3%83%AB%E3%82%BF%E3%83%92%E3%82%B3/id1540286707",children:(0,r.jsx)("img",{height:64,style:{paddingTop:8,paddingBottom:8},alt:"App Store で手に入れよう",src:"https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"})})]})]}),(0,r.jsx)(o.Z,{sx:{fontSize:24,fontWeight:700},children:"Step2 ポイントを付ける"}),g?(0,r.jsx)(a.Z,{variant:"contained",onClick:()=>v(),children:"ポイントを付ける"}):(0,r.jsx)(a.Z,{variant:"contained",onClick:()=>m(!0),children:"ログインしてください"})]})]})]}):(0,r.jsx)(l.Z,{children:"loading..."})}},9231:function(e,t,n){"use strict";n.r(t),n.d(t,{StoreVitalContext:function(){return i},StoreVitalProvider:function(){return s}});var r=n(7437),o=n(2265);let i=(0,o.createContext)({}),s=e=>{let{children:t}=e,[n,s]=(0,o.useState)([]),[a,l]=(0,o.useState)([]),[c,d]=(0,o.useState)(),h=(0,o.useRef)(!0),[u,p]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=async()=>{let e={method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}};fetch("".concat("https://scan-master-server.onrender.com","/products"),e).then(e=>e.json()).then(e=>{l(e)}),fetch("".concat("https://scan-master-server.onrender.com","/users"),e).then(e=>e.json()).then(e=>{s(e);let t=localStorage.getItem("user_id");if(t){let n=e.find(e=>e.id===parseInt(t));n&&x(n)}})};h.current&&(h.current=!1,e())},[]);let x=e=>{d(e),e&&localStorage.setItem("user_id",e.id.toString())};return(0,r.jsx)(i.Provider,{value:{products:a,setProducts:l,getProduct:e=>a.find(t=>t.id===e),users:n,setUsers:s,user:c,setUser:x,getUser:e=>n.find(t=>t.id===e),open:u,setOpen:p},children:a.length>0?t:(0,r.jsx)("p",{children:"Loading... "})})}},6901:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(7437),o=n(1199),i=n(9599),s=n(6500),a=n(4989),l=n(3457),c=n(8938),d=n(2653),h=n(3226),u=n(6507),p=n(5551),x=n(4982),f=n(8486),g=n(7739),m=n(879),j=n(1396),v=n.n(j),Z=n(2265),b=n(9231);function S(e){let{selected:t}=e,{user:n,setUser:j,users:S,open:w,setOpen:y}=(0,Z.useContext)(b.StoreVitalContext),[k,_]=(0,Z.useState)("select"),[z,E]=(0,Z.useState)(""),F=()=>{let e={method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({name:z})};fetch("".concat("https://scan-master-server.onrender.com","/users"),e).then(e=>e.json()).then(e=>{j(e),y(!1),_("select")})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Z,{position:"fixed",color:"transparent",sx:{borderBottom:1,borderColor:o.tv,boxSizing:"border-box",background:o.zQ},elevation:0,children:[(0,r.jsx)(a.Z,{sx:{p:0,justifyContent:"center"},children:(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(c.Z,{sx:{p:2,display:"flex",justifyContent:"center",alignContent:"center",position:"relative"},maxWidth:"xs",children:[(0,r.jsxs)(d.Z,{sx:{position:"absolute",left:16,top:6,flexDirection:"column"},size:"large",onClick:()=>y(!0),children:[(0,r.jsx)(i.Z,{fontSize:"inherit"}),(0,r.jsx)(h.Z,{sx:{fontSize:12},children:null==n?void 0:n.name})]}),(0,r.jsx)(h.Z,{sx:{fontSize:24,color:o.z,fontWeight:700,fontFamily:"Cinzel"},children:"S COFFEE"})]}),(0,r.jsx)(u.Z,{overflow:"scroll",width:"100vw",sx:{width:"100vw"},children:(0,r.jsx)(l.Z,{direction:"row",width:"max-content",mx:"auto",children:[{name:"ポイント",url:"/point_card"},{name:"購入履歴",url:"/history"},{name:"おすすめ",url:"/recommend"},{name:"お知らせ",url:"/notification"}].map(e=>(0,r.jsx)(p.Z,{sx:{color:t==e.url?"black":o.X_,fontWeight:700,fontSize:16,px:3,py:.5,borderRadius:0,borderBottom:t==e.url?2:0,borderColor:o.z},component:v(),href:e.url,children:e.name},e.name))})})]})}),(0,r.jsx)(x.Z,{open:w,onClose:()=>{y(!1),_("select")},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:"select"===k?(0,r.jsxs)(l.Z,{sx:C,gap:2,children:[(0,r.jsx)(h.Z,{sx:{fontSize:24,fontWeight:700},children:"ユーザー選択"}),(0,r.jsx)(f.Z,{id:"combo-box-demo",value:null==n?void 0:n.id,onChange:e=>{j(S.find(t=>t.id==e.target.value))},children:S.map(e=>(0,r.jsx)(g.Z,{value:e.id,children:e.name},e.id))}),(0,r.jsx)(p.Z,{variant:"contained",sx:{color:"white",alignSelf:"flex-end"},onClick:()=>_("create"),children:"新規作成"})]}):(0,r.jsxs)(l.Z,{sx:C,gap:2,children:[(0,r.jsx)(h.Z,{sx:{fontSize:24,fontWeight:700},children:"ユーザー作成"}),(0,r.jsx)(m.Z,{label:"名前を入力",value:z,onChange:e=>E(e.target.value)}),(0,r.jsx)(p.Z,{variant:"contained",sx:{color:"white",alignSelf:"flex-end"},onClick:()=>F(),children:"ユーザー作成"})]})})]}),(0,r.jsx)(a.Z,{style:{height:107}})]})}let C={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4}},1199:function(e,t,n){"use strict";n.d(t,{Cz:function(){return i},X_:function(){return s},iy:function(){return c},lr:function(){return a},tv:function(){return r},z:function(){return l},zQ:function(){return o}});let r="#E0E0E0",o="#FFFFFF",i="#F2F2F2",s="#9e9e9e",a="#2962FF",l="#72391D",c="#616161"}},function(e){e.O(0,[773,551,93,651,561,971,596,744],function(){return e(e.s=8282)}),_N_E=e.O()}]);