(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[359],{7739:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var o=r(791),a=r(3428),i=r(2265),n=r(7042),l=r(5600),s=r(9975),d=r(5843),c=r(7927),u=r(7820),p=r(6659),g=r(8519),v=r(7663),m=r(6520);let h=(0,m.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),f=(0,m.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),b=(0,m.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var y=r(5702);function x(e){return(0,y.Z)("MuiMenuItem",e)}let Z=(0,m.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var $=r(7437);let C=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],R=e=>{let{disabled:t,dense:r,divider:o,disableGutters:i,selected:n,classes:s}=e,d=(0,l.Z)({root:["root",r&&"dense",t&&"disabled",!i&&"gutters",o&&"divider",n&&"selected"]},x,s);return(0,a.Z)({},s,d)},O=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})(({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${h.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${h.inset}`]:{marginLeft:52},[`& .${b.root}`]:{marginTop:0,marginBottom:0},[`& .${b.inset}`]:{paddingLeft:36},[`& .${f.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,a.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${f.root} svg`]:{fontSize:"1.25rem"}}))),j=i.forwardRef(function(e,t){let r;let l=(0,c.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:s=!1,component:d="li",dense:p=!1,divider:m=!1,disableGutters:h=!1,focusVisibleClassName:f,role:b="menuitem",tabIndex:y,className:x}=l,Z=(0,o.Z)(l,C),j=i.useContext(u.Z),k=i.useMemo(()=>({dense:p||j.dense||!1,disableGutters:h}),[j.dense,p,h]),S=i.useRef(null);(0,g.Z)(()=>{s&&S.current&&S.current.focus()},[s]);let T=(0,a.Z)({},l,{dense:k.dense,divider:m,disableGutters:h}),w=R(l),z=(0,v.Z)(S,t);return l.disabled||(r=void 0!==y?y:-1),(0,$.jsx)(u.Z.Provider,{value:k,children:(0,$.jsx)(O,(0,a.Z)({ref:z,role:b,tabIndex:r,component:d,focusVisibleClassName:(0,n.Z)(w.focusVisible,f),className:(0,n.Z)(w.root,x)},Z,{ownerState:T,classes:w}))})});var k=j},92:function(e,t,r){Promise.resolve().then(r.bind(r,8605))},8605:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var o=r(7437),a=r(3457),i=r(6507),n=r(791),l=r(3428),s=r(2265);r(9176);var d=r(7042),c=r(5600),u=r(5843),p=r(7927),g=r(8702),v=r(6520),m=r(5702);function h(e){return(0,m.Z)("MuiToggleButtonGroup",e)}let f=(0,v.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),b=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],y=e=>{let{classes:t,orientation:r,fullWidth:o,disabled:a}=e,i={root:["root","vertical"===r&&"vertical",o&&"fullWidth"],grouped:["grouped",`grouped${(0,g.Z)(r)}`,a&&"disabled"]};return(0,c.Z)(i,h,t)},x=(0,u.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[{[`& .${f.grouped}`]:t.grouped},{[`& .${f.grouped}`]:t[`grouped${(0,g.Z)(r.orientation)}`]},t.root,"vertical"===r.orientation&&t.vertical,r.fullWidth&&t.fullWidth]}})(({ownerState:e,theme:t})=>(0,l.Z)({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},"vertical"===e.orientation&&{flexDirection:"column"},e.fullWidth&&{width:"100%"},{[`& .${f.grouped}`]:(0,l.Z)({},"horizontal"===e.orientation?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${f.selected} + .${f.grouped}.${f.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${f.selected} + .${f.grouped}.${f.selected}`]:{borderTop:0,marginTop:0}})})),Z=s.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiToggleButtonGroup"}),{children:a,className:i,color:c="standard",disabled:u=!1,exclusive:g=!1,fullWidth:v=!1,onChange:m,orientation:h="horizontal",size:f="medium",value:Z}=r,$=(0,n.Z)(r,b),C=(0,l.Z)({},r,{disabled:u,fullWidth:v,orientation:h,size:f}),R=y(C),O=(e,t)=>{let r;if(!m)return;let o=Z&&Z.indexOf(t);Z&&o>=0?(r=Z.slice()).splice(o,1):r=Z?Z.concat(t):[t],m(e,r)},j=(e,t)=>{m&&m(e,Z===t?null:t)};return(0,o.jsx)(x,(0,l.Z)({role:"group",className:(0,d.Z)(R.root,i),ref:t,ownerState:C},$,{children:s.Children.map(a,e=>{var t;return s.isValidElement(e)?s.cloneElement(e,{className:(0,d.Z)(R.grouped,e.props.className),onChange:g?j:O,selected:void 0===e.props.selected?(t=e.props.value,void 0!==Z&&void 0!==t&&(Array.isArray(Z)?Z.indexOf(t)>=0:t===Z)):e.props.selected,size:e.props.size||f,fullWidth:v,color:e.props.color||c,disabled:e.props.disabled||u}):null})}))});var $=r(9975),C=r(6659);function R(e){return(0,m.Z)("MuiToggleButton",e)}let O=(0,v.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),j=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],k=e=>{let{classes:t,fullWidth:r,selected:o,disabled:a,size:i,color:n}=e,l={root:["root",o&&"selected",a&&"disabled",r&&"fullWidth",`size${(0,g.Z)(i)}`,n]};return(0,c.Z)(l,R,t)},S=(0,u.ZP)(C.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`size${(0,g.Z)(r.size)}`]]}})(({theme:e,ownerState:t})=>{let r,o="standard"===t.color?e.palette.text.primary:e.palette[t.color].main;return e.vars&&(o="standard"===t.color?e.vars.palette.text.primary:e.vars.palette[t.color].main,r="standard"===t.color?e.vars.palette.text.primaryChannel:e.vars.palette[t.color].mainChannel),(0,l.Z)({},e.typography.button,{borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active},t.fullWidth&&{width:"100%"},{[`&.${O.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,$.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${O.selected}`]:{color:o,backgroundColor:e.vars?`rgba(${r} / ${e.vars.palette.action.selectedOpacity})`:(0,$.Fq)(o,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${r} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,$.Fq)(o,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${r} / ${e.vars.palette.action.selectedOpacity})`:(0,$.Fq)(o,e.palette.action.selectedOpacity)}}}},"small"===t.size&&{padding:7,fontSize:e.typography.pxToRem(13)},"large"===t.size&&{padding:15,fontSize:e.typography.pxToRem(15)})}),T=s.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiToggleButton"}),{children:a,className:i,color:s="standard",disabled:c=!1,disableFocusRipple:u=!1,fullWidth:g=!1,onChange:v,onClick:m,selected:h,size:f="medium",value:b}=r,y=(0,n.Z)(r,j),x=(0,l.Z)({},r,{color:s,disabled:c,disableFocusRipple:u,fullWidth:g,size:f}),Z=k(x);return(0,o.jsx)(S,(0,l.Z)({className:(0,d.Z)(Z.root,i),disabled:c,focusRipple:!u,ref:t,onClick:e=>{m&&(m(e,b),e.defaultPrevented)||!v||v(e,b)},onChange:v,value:b,ownerState:x,"aria-pressed":h},y,{children:a}))});var w=r(8486),z=r(7739),M=r(879),B=r(9231),F=r(7747),I=r(9027);function L(){let[e,t]=(0,s.useState)("user"),[r,n]=(0,s.useState)(""),{products:l,users:d}=(0,s.useContext)(B.StoreVitalContext),[c,u]=(0,s.useState)(void 0),[p,g]=(0,s.useState)(null);return(0,s.useEffect)(()=>{g(null),n("")},[e]),(0,o.jsx)(a.Z,{direction:"row",children:(0,o.jsxs)(a.Z,{gap:2,width:"100%",mx:2,height:"100vh",children:[(0,o.jsx)(I.h,{selected:"/qr_gen"}),(0,o.jsx)(i.Z,{}),(0,o.jsxs)(Z,{value:e,exclusive:!0,onChange:(e,r)=>{null!==r&&t(r)},children:[(0,o.jsx)(T,{value:"user",children:"ユーザー"}),(0,o.jsx)(T,{value:"item",children:"商品"})]}),(0,o.jsx)(w.Z,{id:"combo-box-demo",value:p,onChange:t=>{t.target.value&&n("".concat("user"===e?"9":"4").concat(t.target.value.toString())),g(t.target.value)},sx:{width:300},children:"user"==e?d.map(e=>(0,o.jsx)(z.Z,{value:e.id,children:e.name},e.id)):l.map(e=>(0,o.jsx)(z.Z,{value:e.id,children:e.name},e.id))}),(0,o.jsx)(M.Z,{value:r,onChange:e=>{n(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&n("")},label:"IDを入力"}),(0,o.jsx)(F.ZP,{value:r,size:256,style:{alignSelf:"center"}})]})})}},9231:function(e,t,r){"use strict";r.r(t),r.d(t,{StoreVitalContext:function(){return i},StoreVitalProvider:function(){return n}});var o=r(7437),a=r(2265);let i=(0,a.createContext)({}),n=e=>{let{children:t}=e,[r,n]=(0,a.useState)([]),[l,s]=(0,a.useState)([]),[d,c]=(0,a.useState)(),u=(0,a.useRef)(!0);(0,a.useEffect)(()=>{let e=async()=>{let e={method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}};fetch("".concat("https://scan-master-server.onrender.com","/products"),e).then(e=>e.json()).then(e=>{s(e)}),fetch("".concat("https://scan-master-server.onrender.com","/users"),e).then(e=>e.json()).then(e=>{n(e);let t=localStorage.getItem("user_id");if(t){let r=e.find(e=>e.id===parseInt(t));r&&p(r)}})};u.current&&(u.current=!1,e())},[]);let p=e=>{c(e),e&&localStorage.setItem("user_id",e.id.toString())};return(0,o.jsx)(i.Provider,{value:{products:l,setProducts:s,getProduct:e=>l.find(t=>t.id===e),users:r,setUsers:n,user:d,setUser:p,getUser:e=>r.find(t=>t.id===e)},children:l.length>0?t:(0,o.jsx)("p",{children:"Loading... "})})}},9027:function(e,t,r){"use strict";r.d(t,{h:function(){return d}});var o=r(7437),a=r(1199),i=r(6500),n=r(4989),l=r(3457),s=r(5551);function d(e){let{selected:t}=e;return(0,o.jsx)(i.Z,{position:"static",color:"transparent",sx:{borderBottom:4,borderColor:a.tv},elevation:0,children:(0,o.jsx)(n.Z,{sx:{p:0},children:(0,o.jsx)(l.Z,{direction:"row",gap:2,m:1.5,children:[{name:"スキャン",url:"/"},{name:"QR作成",url:"/qr_gen"}].map(e=>(0,o.jsx)(s.Z,{sx:{color:t==e.url?"black":a.X_,fontWeight:700,fontSize:24,px:3,py:.5,borderRadius:2,background:t==e.url?a.Cz:"transparent"},href:e.url,children:e.name},e.name))})})})}},1199:function(e,t,r){"use strict";r.d(t,{Cz:function(){return a},X_:function(){return i},iy:function(){return s},lr:function(){return n},tv:function(){return o},z:function(){return l}});let o="#E0E0E0",a="#F2F2F2",i="#9e9e9e",n="#2962FF",l="#72391D",s="#616161"}},function(e){e.O(0,[773,542,962,747,651,971,596,744],function(){return e(e.s=92)}),_N_E=e.O()}]);