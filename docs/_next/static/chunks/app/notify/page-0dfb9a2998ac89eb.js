(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[916],{8938:function(t,e,r){"use strict";r.d(e,{Z:function(){return S}});var n=r(791),i=r(3428),a=r(2265),o=r(7042),s=r(1380),u=r(5702),d=r(5600),l=r(5367),p=r(9190),h=r(4775),c=r(7437);let g=["className","component","disableGutters","fixed","maxWidth","classes"],m=(0,h.Z)(),f=(0,p.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,e[`maxWidth${(0,s.Z)(String(r.maxWidth))}`],r.fixed&&e.fixed,r.disableGutters&&e.disableGutters]}}),x=t=>(0,l.Z)({props:t,name:"MuiContainer",defaultTheme:m}),v=(t,e)=>{let{classes:r,fixed:n,disableGutters:i,maxWidth:a}=t,o={root:["root",a&&`maxWidth${(0,s.Z)(String(a))}`,n&&"fixed",i&&"disableGutters"]};return(0,d.Z)(o,t=>(0,u.Z)(e,t),r)};var b=r(8702),Z=r(5843),y=r(7927);let W=function(t={}){let{createStyledComponent:e=f,useThemeProps:r=x,componentName:s="MuiContainer"}=t,u=e(({theme:t,ownerState:e})=>(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:e})=>e.fixed&&Object.keys(t.breakpoints.values).reduce((e,r)=>{let n=t.breakpoints.values[r];return 0!==n&&(e[t.breakpoints.up(r)]={maxWidth:`${n}${t.breakpoints.unit}`}),e},{}),({theme:t,ownerState:e})=>(0,i.Z)({},"xs"===e.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},e.maxWidth&&"xs"!==e.maxWidth&&{[t.breakpoints.up(e.maxWidth)]:{maxWidth:`${t.breakpoints.values[e.maxWidth]}${t.breakpoints.unit}`}})),d=a.forwardRef(function(t,e){let a=r(t),{className:d,component:l="div",disableGutters:p=!1,fixed:h=!1,maxWidth:m="lg"}=a,f=(0,n.Z)(a,g),x=(0,i.Z)({},a,{component:l,disableGutters:p,fixed:h,maxWidth:m}),b=v(x,s);return(0,c.jsx)(u,(0,i.Z)({as:l,ownerState:x,className:(0,o.Z)(b.root,d),ref:e},f))});return d}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,e[`maxWidth${(0,b.Z)(String(r.maxWidth))}`],r.fixed&&e.fixed,r.disableGutters&&e.disableGutters]}}),useThemeProps:t=>(0,y.Z)({props:t,name:"MuiContainer"})});var S=W},3226:function(t,e,r){"use strict";r.d(e,{Z:function(){return S}});var n=r(791),i=r(3428),a=r(2265),o=r(7042),s=r(3381),u=r(5600),d=r(5843),l=r(7927),p=r(8702),h=r(6520),c=r(5702);function g(t){return(0,c.Z)("MuiTypography",t)}(0,h.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(7437);let f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],x=t=>{let{align:e,gutterBottom:r,noWrap:n,paragraph:i,variant:a,classes:o}=t,s={root:["root",a,"inherit"!==t.align&&`align${(0,p.Z)(e)}`,r&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return(0,u.Z)(s,g,o)},v=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,p.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>(0,i.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=t=>Z[t]||t,W=a.forwardRef(function(t,e){let r=(0,l.Z)({props:t,name:"MuiTypography"}),a=y(r.color),u=(0,s.Z)((0,i.Z)({},r,{color:a})),{align:d="inherit",className:p,component:h,gutterBottom:c=!1,noWrap:g=!1,paragraph:Z=!1,variant:W="body1",variantMapping:S=b}=u,k=(0,n.Z)(u,f),C=(0,i.Z)({},u,{align:d,color:a,className:p,component:h,gutterBottom:c,noWrap:g,paragraph:Z,variant:W,variantMapping:S}),w=h||(Z?"p":S[W]||b[W])||"span",R=x(C);return(0,m.jsx)(v,(0,i.Z)({as:w,ref:e,ownerState:C,className:(0,o.Z)(R.root,p)},k))});var S=W},5566:function(t,e,r){Promise.resolve().then(r.bind(r,969))},969:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var n=r(7437),i=r(8938),a=r(3457),o=r(3226),s=r(5551),u=r(2265),d=r(4033),l=r(9231);function p(){let t=(0,d.useSearchParams)(),e=t.get("title"),{products:r,users:p}=(0,u.useContext)(l.StoreVitalContext),[h,c]=(0,u.useState)(0);return(0,n.jsx)(i.Z,{maxWidth:"xs",children:(0,n.jsxs)(a.Z,{m:4,gap:8,mt:12,children:[(0,n.jsx)(o.Z,{sx:{fontSize:24,fontWeight:700},children:e}),(0,n.jsx)(s.Z,{variant:"contained",href:"/recommend",children:"アプリへ戻る"})]})})}},9231:function(t,e,r){"use strict";r.r(e),r.d(e,{StoreVitalContext:function(){return a},StoreVitalProvider:function(){return o}});var n=r(7437),i=r(2265);let a=(0,i.createContext)({}),o=t=>{let{children:e}=t,[r,o]=(0,i.useState)([]),[s,u]=(0,i.useState)([]),[d,l]=(0,i.useState)(),p=(0,i.useRef)(!0);(0,i.useEffect)(()=>{let t=async()=>{let t={method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}};fetch("".concat("https://scan-master-server.onrender.com","/products"),t).then(t=>t.json()).then(t=>{u(t)}),fetch("".concat("https://scan-master-server.onrender.com","/users"),t).then(t=>t.json()).then(t=>{o(t);let e=localStorage.getItem("user_id");if(e){let r=t.find(t=>t.id===parseInt(e));r&&h(r)}})};p.current&&(p.current=!1,t())},[]);let h=t=>{l(t),t&&localStorage.setItem("user_id",t.id.toString())};return(0,n.jsx)(a.Provider,{value:{products:s,setProducts:u,getProduct:t=>s.find(e=>e.id===t),users:r,setUsers:o,user:d,setUser:h,getUser:t=>r.find(e=>e.id===t)},children:s.length>0?e:(0,n.jsx)("p",{children:"Loading... "})})}},4033:function(t,e,r){t.exports=r(8165)}},function(t){t.O(0,[773,542,971,596,744],function(){return t(t.s=5566)}),_N_E=t.O()}]);