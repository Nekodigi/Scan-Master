(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{6507:function(e,t,a){"use strict";a.d(t,{Z:function(){return x}});var r=a(3428),n=a(791),o=a(2265),i=a(7042),s=a(9613),l=a(7947),d=a(3381),c=a(5270),p=a(7437);let u=["className","component"];var h=a(5097),v=a(3362),m=a(3469);let g=(0,v.Z)(),f=function(e={}){let{themeId:t,defaultTheme:a,defaultClassName:h="MuiBox-root",generateClassName:v}=e,m=(0,s.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.Z),g=o.forwardRef(function(e,o){let s=(0,c.Z)(a),l=(0,d.Z)(e),{className:g,component:f="div"}=l,x=(0,n.Z)(l,u);return(0,p.jsx)(m,(0,r.Z)({as:f,ref:o,className:(0,i.Z)(g,v?v(h):h),theme:t&&s[t]||s},x))});return g}({themeId:m.Z,defaultTheme:g,defaultClassName:"MuiBox-root",generateClassName:h.Z.generate});var x=f},8938:function(e,t,a){"use strict";a.d(t,{Z:function(){return C}});var r=a(791),n=a(3428),o=a(2265),i=a(7042),s=a(1380),l=a(5702),d=a(5600),c=a(5367),p=a(9190),u=a(4775),h=a(7437);let v=["className","component","disableGutters","fixed","maxWidth","classes"],m=(0,u.Z)(),g=(0,p.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),f=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:m}),x=(e,t)=>{let{classes:a,fixed:r,disableGutters:n,maxWidth:o}=e,i={root:["root",o&&`maxWidth${(0,s.Z)(String(o))}`,r&&"fixed",n&&"disableGutters"]};return(0,d.Z)(i,e=>(0,l.Z)(t,e),a)};var b=a(8702),Z=a(5843),y=a(7927);let k=function(e={}){let{createStyledComponent:t=g,useThemeProps:a=f,componentName:s="MuiContainer"}=e,l=t(({theme:e,ownerState:t})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,a)=>{let r=e.breakpoints.values[a];return 0!==r&&(t[e.breakpoints.up(a)]={maxWidth:`${r}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,n.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),d=o.forwardRef(function(e,t){let o=a(e),{className:d,component:c="div",disableGutters:p=!1,fixed:u=!1,maxWidth:m="lg"}=o,g=(0,r.Z)(o,v),f=(0,n.Z)({},o,{component:c,disableGutters:p,fixed:u,maxWidth:m}),b=x(f,s);return(0,h.jsx)(l,(0,n.Z)({as:c,ownerState:f,className:(0,i.Z)(b.root,d),ref:t},g))});return d}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[`maxWidth${(0,b.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,y.Z)({props:e,name:"MuiContainer"})});var C=k},7739:function(e,t,a){"use strict";a.d(t,{Z:function(){return S}});var r=a(791),n=a(3428),o=a(2265),i=a(7042),s=a(5600),l=a(9975),d=a(5843),c=a(7927),p=a(7820),u=a(6509),h=a(8519),v=a(7663),m=a(6520);let g=(0,m.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),f=(0,m.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),x=(0,m.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var b=a(5702);function Z(e){return(0,b.Z)("MuiMenuItem",e)}let y=(0,m.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var k=a(7437);let C=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],j=e=>{let{disabled:t,dense:a,divider:r,disableGutters:o,selected:i,classes:l}=e,d=(0,s.Z)({root:["root",a&&"dense",t&&"disabled",!o&&"gutters",r&&"divider",i&&"selected"]},Z,l);return(0,n.Z)({},l,d)},w=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})(({theme:e,ownerState:t})=>(0,n.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${y.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${y.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${y.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${y.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${g.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${g.inset}`]:{marginLeft:52},[`& .${x.root}`]:{marginTop:0,marginBottom:0},[`& .${x.inset}`]:{paddingLeft:36},[`& .${f.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,n.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${f.root} svg`]:{fontSize:"1.25rem"}}))),$=o.forwardRef(function(e,t){let a;let s=(0,c.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:d="li",dense:u=!1,divider:m=!1,disableGutters:g=!1,focusVisibleClassName:f,role:x="menuitem",tabIndex:b,className:Z}=s,y=(0,r.Z)(s,C),$=o.useContext(p.Z),S=o.useMemo(()=>({dense:u||$.dense||!1,disableGutters:g}),[$.dense,u,g]),M=o.useRef(null);(0,h.Z)(()=>{l&&M.current&&M.current.focus()},[l]);let W=(0,n.Z)({},s,{dense:S.dense,divider:m,disableGutters:g}),R=j(s),P=(0,v.Z)(M,t);return s.disabled||(a=void 0!==b?b:-1),(0,k.jsx)(p.Z.Provider,{value:S,children:(0,k.jsx)(w,(0,n.Z)({ref:P,role:x,tabIndex:a,component:d,focusVisibleClassName:(0,i.Z)(R.focusVisible,f),className:(0,i.Z)(R.root,Z)},y,{ownerState:W,classes:R}))})});var S=$},9872:function(e,t,a){"use strict";a.d(t,{Z:function(){return Z}});var r=a(791),n=a(3428),o=a(2265),i=a(7042),s=a(5600),l=a(9975),d=a(5843),c=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2),p=a(7927),u=a(6520),h=a(5702);function v(e){return(0,h.Z)("MuiPaper",e)}(0,u.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var m=a(7437);let g=["className","component","elevation","square","variant"],f=e=>{let{square:t,elevation:a,variant:r,classes:n}=e,o={root:["root",r,!t&&"rounded","elevation"===r&&`elevation${a}`]};return(0,s.Z)(o,v,n)},x=(0,d.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant],!a.square&&t.rounded,"elevation"===a.variant&&t[`elevation${a.elevation}`]]}})(({theme:e,ownerState:t})=>{var a;return(0,n.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,n.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,l.Fq)("#fff",c(t.elevation))}, ${(0,l.Fq)("#fff",c(t.elevation))})`},e.vars&&{backgroundImage:null==(a=e.vars.overlays)?void 0:a[t.elevation]}))}),b=o.forwardRef(function(e,t){let a=(0,p.Z)({props:e,name:"MuiPaper"}),{className:o,component:s="div",elevation:l=1,square:d=!1,variant:c="elevation"}=a,u=(0,r.Z)(a,g),h=(0,n.Z)({},a,{component:s,elevation:l,square:d,variant:c}),v=f(h);return(0,m.jsx)(x,(0,n.Z)({as:s,ownerState:h,className:(0,i.Z)(v.root,o),ref:t},u))});var Z=b},3226:function(e,t,a){"use strict";a.d(t,{Z:function(){return C}});var r=a(791),n=a(3428),o=a(2265),i=a(7042),s=a(3381),l=a(5600),d=a(5843),c=a(7927),p=a(8702),u=a(6520),h=a(5702);function v(e){return(0,h.Z)("MuiTypography",e)}(0,u.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=a(7437);let g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=e=>{let{align:t,gutterBottom:a,noWrap:r,paragraph:n,variant:o,classes:i}=e,s={root:["root",o,"inherit"!==e.align&&`align${(0,p.Z)(t)}`,a&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,l.Z)(s,v,i)},x=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,p.Z)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,n.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=e=>Z[e]||e,k=o.forwardRef(function(e,t){let a=(0,c.Z)({props:e,name:"MuiTypography"}),o=y(a.color),l=(0,s.Z)((0,n.Z)({},a,{color:o})),{align:d="inherit",className:p,component:u,gutterBottom:h=!1,noWrap:v=!1,paragraph:Z=!1,variant:k="body1",variantMapping:C=b}=l,j=(0,r.Z)(l,g),w=(0,n.Z)({},l,{align:d,color:o,className:p,component:u,gutterBottom:h,noWrap:v,paragraph:Z,variant:k,variantMapping:C}),$=u||(Z?"p":C[k]||b[k])||"span",S=f(w);return(0,m.jsx)(x,(0,n.Z)({as:$,ref:t,ownerState:w,className:(0,i.Z)(S.root,p)},j))});var C=k},8282:function(e,t,a){Promise.resolve().then(a.bind(a,638))},638:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var r=a(7437),n=a(3226),o=a(8938),i=a(3457),s=a(5551),l=a(5205),d=a(7739),c=a(6507),p=a(2265),u=a(4033),h=a(9231);function v(){let[e,t]=(0,p.useState)(),a=(0,u.useSearchParams)(),v=a.get("orderId"),{products:m,users:g}=(0,p.useContext)(h.StoreVitalContext),[f,x]=(0,p.useState)(0);(0,p.useEffect)(()=>{let e=async()=>{fetch("".concat("https://scan-master-server.onrender.com","/orders/").concat(v),{method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}}).then(e=>e.json()).then(e=>{t(e)})};e()},[]);let b=async()=>{fetch("".concat("https://scan-master-server.onrender.com","/link?order_id=").concat(v,"&user_id=").concat(f),{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}}).then(e=>e.text()).then(e=>{console.log(e)}),window.location.href="/notify/?title=ポイントが付きました"},Z=(0,p.useMemo)(()=>(null==e?void 0:e.user_id)?(0,r.jsx)(n.Z,{sx:{fontSize:24,fontWeight:700},children:"既にポイントが使われています"}):(0,r.jsxs)(n.Z,{sx:{fontSize:24,fontWeight:700},children:["今からでも",(0,r.jsx)("br",{}),"".concat(null==e?void 0:e.total_points,"ポイント付きます！")]}),[e]);return e?(0,r.jsx)(o.Z,{maxWidth:"xs",children:(0,r.jsxs)(i.Z,{m:4,gap:8,children:[Z,(null==e?void 0:e.user_id)?(0,r.jsx)(s.Z,{variant:"contained",href:"/recommend",children:"ホームに戻る"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(n.Z,{sx:{fontSize:24,fontWeight:700},children:"Step1 アプリインストール"}),(0,r.jsx)(n.Z,{children:"お使いのスマートフォンにアプリをインストールしてください。"}),(0,r.jsxs)(i.Z,{direction:"row",gap:2,children:[(0,r.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.saltahiko",children:(0,r.jsx)("img",{height:64,alt:"Google Play で手に入れよう",src:"https://play.google.com/intl/en_us/badges/static/images/badges/ja_badge_web_generic.png"})}),(0,r.jsx)("a",{href:"https://apps.apple.com/jp/app/%E3%82%B5%E3%83%AB%E3%82%BF%E3%83%92%E3%82%B3/id1540286707",children:(0,r.jsx)("img",{height:64,style:{paddingTop:8,paddingBottom:8},alt:"App Store で手に入れよう",src:"https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"})})]})]}),(0,r.jsx)(n.Z,{sx:{fontSize:24,fontWeight:700},children:"Step2 ポイントを付ける"}),(0,r.jsx)(l.Z,{id:"combo-box-demo",value:f,onChange:e=>{x(e.target.value)},children:g.map(e=>(0,r.jsx)(d.Z,{value:e.id,children:e.name},e.id))}),(0,r.jsx)(s.Z,{variant:"contained",onClick:()=>b(),children:"ポイントを付ける"})]})]})}):(0,r.jsx)(c.Z,{children:"loading..."})}},9231:function(e,t,a){"use strict";a.r(t),a.d(t,{StoreVitalContext:function(){return o},StoreVitalProvider:function(){return i}});var r=a(7437),n=a(2265);let o=(0,n.createContext)({}),i=e=>{let{children:t}=e,[a,i]=(0,n.useState)([]),[s,l]=(0,n.useState)([]),d=(0,n.useRef)(!0);return(0,n.useEffect)(()=>{let e=async()=>{let e={method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}};fetch("".concat("https://scan-master-server.onrender.com","/products"),e).then(e=>e.json()).then(e=>{l(e)}),fetch("".concat("https://scan-master-server.onrender.com","/users"),e).then(e=>e.json()).then(e=>{i(e)})};d.current&&(d.current=!1,e())},[]),(0,r.jsx)(o.Provider,{value:{products:s,setProducts:l,getProduct:e=>s.find(t=>t.id===e),users:a,setUsers:i,getUser:e=>a.find(t=>t.id===e)},children:s.length>0?t:(0,r.jsx)("p",{children:"Loading... "})})}},4033:function(e,t,a){e.exports=a(8165)}},function(e){e.O(0,[773,542,205,971,596,744],function(){return e(e.s=8282)}),_N_E=e.O()}]);