(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[299],{5299:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return ge}});var r=o(9439),n=o(4942),a=o(2791),i=o(3366),c=o(7462),s=o(8182),l=o(4419),d=o(3794),u=o(1046),p=o(4036),v=o(5527),f=o(5878),m=o(1217);function h(e){return(0,m.Z)("MuiAppBar",e)}(0,f.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var g=o(3329),b=["className","color","enableColorOnDark","position"],Z=function(e,t){return e?"".concat(null==e?void 0:e.replace(")",""),", ").concat(t,")"):t},x=(0,d.ZP)(v.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["position".concat((0,p.Z)(o.position))],t["color".concat((0,p.Z)(o.color))]]}})((function(e){var t=e.theme,o=e.ownerState,r="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900];return(0,c.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===o.position&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===o.position&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===o.position&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"static"===o.position&&{position:"static"},"relative"===o.position&&{position:"relative"},!t.vars&&(0,c.Z)({},"default"===o.color&&{backgroundColor:r,color:t.palette.getContrastText(r)},o.color&&"default"!==o.color&&"inherit"!==o.color&&"transparent"!==o.color&&{backgroundColor:t.palette[o.color].main,color:t.palette[o.color].contrastText},"inherit"===o.color&&{color:"inherit"},"dark"===t.palette.mode&&!o.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===o.color&&(0,c.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===t.palette.mode&&{backgroundImage:"none"})),t.vars&&(0,c.Z)({},"default"===o.color&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette.AppBar.defaultBg:Z(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":o.enableColorOnDark?t.vars.palette.text.primary:Z(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},o.color&&!o.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette[o.color].main:Z(t.vars.palette.AppBar.darkBg,t.vars.palette[o.color].main),"--AppBar-color":o.enableColorOnDark?t.vars.palette[o.color].contrastText:Z(t.vars.palette.AppBar.darkColor,t.vars.palette[o.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===o.color?"inherit":"var(--AppBar-color)"},"transparent"===o.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),y=a.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiAppBar"}),r=o.className,n=o.color,a=void 0===n?"primary":n,d=o.enableColorOnDark,v=void 0!==d&&d,f=o.position,m=void 0===f?"fixed":f,Z=(0,i.Z)(o,b),y=(0,c.Z)({},o,{color:a,position:m,enableColorOnDark:v}),C=function(e){var t=e.color,o=e.position,r=e.classes,n={root:["root","color".concat((0,p.Z)(t)),"position".concat((0,p.Z)(o))]};return(0,l.Z)(n,h,r)}(y);return(0,g.jsx)(x,(0,c.Z)({square:!0,component:"header",ownerState:y,elevation:4,className:(0,s.Z)(C.root,r,"fixed"===m&&"mui-fixed"),ref:t},Z))}));function C(e){return(0,m.Z)("MuiToolbar",e)}(0,f.Z)("MuiToolbar",["root","gutters","regular","dense"]);var k=["className","component","disableGutters","variant"],j=(0,d.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,!o.disableGutters&&t.gutters,t[o.variant]]}})((function(e){var t=e.theme,o=e.ownerState;return(0,c.Z)({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&(0,n.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===o.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),w=a.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiToolbar"}),r=o.className,n=o.component,a=void 0===n?"div":n,d=o.disableGutters,p=void 0!==d&&d,v=o.variant,f=void 0===v?"regular":v,m=(0,i.Z)(o,k),h=(0,c.Z)({},o,{component:a,disableGutters:p,variant:f}),b=function(e){var t=e.classes,o={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,l.Z)(o,C,t)}(h);return(0,g.jsx)(j,(0,c.Z)({as:a,className:(0,s.Z)(b.root,r),ref:t,ownerState:h},m))})),z=o(2065),S=o(3701);function I(e){return(0,m.Z)("MuiIconButton",e)}var M=(0,f.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),B=["edge","children","className","color","disabled","disableFocusRipple","size"],R=(0,d.ZP)(S.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,"default"!==o.color&&t["color".concat((0,p.Z)(o.color))],o.edge&&t["edge".concat((0,p.Z)(o.edge))],t["size".concat((0,p.Z)(o.size))]]}})((function(e){var t=e.theme,o=e.ownerState;return(0,c.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,z.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})}),(function(e){var t,o=e.theme,r=e.ownerState,a=null==(t=(o.vars||o).palette)?void 0:t[r.color];return(0,c.Z)({},"inherit"===r.color&&{color:"inherit"},"inherit"!==r.color&&"default"!==r.color&&(0,c.Z)({color:null==a?void 0:a.main},!r.disableRipple&&{"&:hover":(0,c.Z)({},a&&{backgroundColor:o.vars?"rgba(".concat(a.mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,z.Fq)(a.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===r.size&&{padding:5,fontSize:o.typography.pxToRem(18)},"large"===r.size&&{padding:12,fontSize:o.typography.pxToRem(28)},(0,n.Z)({},"&.".concat(M.disabled),{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}))})),O=a.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiIconButton"}),r=o.edge,n=void 0!==r&&r,a=o.children,d=o.className,v=o.color,f=void 0===v?"default":v,m=o.disabled,h=void 0!==m&&m,b=o.disableFocusRipple,Z=void 0!==b&&b,x=o.size,y=void 0===x?"medium":x,C=(0,i.Z)(o,B),k=(0,c.Z)({},o,{edge:n,color:f,disabled:h,disableFocusRipple:Z,size:y}),j=function(e){var t=e.classes,o=e.disabled,r=e.color,n=e.edge,a=e.size,i={root:["root",o&&"disabled","default"!==r&&"color".concat((0,p.Z)(r)),n&&"edge".concat((0,p.Z)(n)),"size".concat((0,p.Z)(a))]};return(0,l.Z)(i,I,t)}(k);return(0,g.jsx)(R,(0,c.Z)({className:(0,s.Z)(j.root,d),centerRipple:!0,focusRipple:!Z,disabled:h,ref:t,ownerState:k},C,{children:a}))})),F=o(9952),A=o(9480),L=o(162),P=o(2071);var T=(0,f.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var N=(0,f.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var D=(0,f.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function G(e){return(0,m.Z)("MuiMenuItem",e)}var V,_,q,H=(0,f.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),E=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],W=(0,d.ZP)(S.Z,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.dense&&t.dense,o.divider&&t.divider,!o.disableGutters&&t.gutters]}})((function(e){var t,o=e.theme,r=e.ownerState;return(0,c.Z)({},o.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:"1px solid ".concat((o.vars||o).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,n.Z)(t,"&.".concat(H.selected),(0,n.Z)({backgroundColor:o.vars?"rgba(".concat(o.vars.palette.primary.mainChannel," / ").concat(o.vars.palette.action.selectedOpacity,")"):(0,z.Fq)(o.palette.primary.main,o.palette.action.selectedOpacity)},"&.".concat(H.focusVisible),{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.primary.mainChannel," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.focusOpacity,"))"):(0,z.Fq)(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)})),(0,n.Z)(t,"&.".concat(H.selected,":hover"),{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.primary.mainChannel," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.hoverOpacity,"))"):(0,z.Fq)(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.primary.mainChannel," / ").concat(o.vars.palette.action.selectedOpacity,")"):(0,z.Fq)(o.palette.primary.main,o.palette.action.selectedOpacity)}}),(0,n.Z)(t,"&.".concat(H.focusVisible),{backgroundColor:(o.vars||o).palette.action.focus}),(0,n.Z)(t,"&.".concat(H.disabled),{opacity:(o.vars||o).palette.action.disabledOpacity}),(0,n.Z)(t,"& + .".concat(T.root),{marginTop:o.spacing(1),marginBottom:o.spacing(1)}),(0,n.Z)(t,"& + .".concat(T.inset),{marginLeft:52}),(0,n.Z)(t,"& .".concat(D.root),{marginTop:0,marginBottom:0}),(0,n.Z)(t,"& .".concat(D.inset),{paddingLeft:36}),(0,n.Z)(t,"& .".concat(N.root),{minWidth:36}),t),!r.dense&&(0,n.Z)({},o.breakpoints.up("sm"),{minHeight:"auto"}),r.dense&&(0,c.Z)({minHeight:32,paddingTop:4,paddingBottom:4},o.typography.body2,(0,n.Z)({},"& .".concat(N.root," svg"),{fontSize:"1.25rem"})))})),Q=a.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiMenuItem"}),r=o.autoFocus,n=void 0!==r&&r,d=o.component,p=void 0===d?"li":d,v=o.dense,f=void 0!==v&&v,m=o.divider,h=void 0!==m&&m,b=o.disableGutters,Z=void 0!==b&&b,x=o.focusVisibleClassName,y=o.role,C=void 0===y?"menuitem":y,k=o.tabIndex,j=o.className,w=(0,i.Z)(o,E),z=a.useContext(A.Z),S=a.useMemo((function(){return{dense:f||z.dense||!1,disableGutters:Z}}),[z.dense,f,Z]),I=a.useRef(null);(0,L.Z)((function(){n&&I.current&&I.current.focus()}),[n]);var M,B=(0,c.Z)({},o,{dense:S.dense,divider:h,disableGutters:Z}),R=function(e){var t=e.disabled,o=e.dense,r=e.divider,n=e.disableGutters,a=e.selected,i=e.classes,s={root:["root",o&&"dense",t&&"disabled",!n&&"gutters",r&&"divider",a&&"selected"]},d=(0,l.Z)(s,G,i);return(0,c.Z)({},i,d)}(o),O=(0,P.Z)(I,t);return o.disabled||(M=void 0!==k?k:-1),(0,g.jsx)(A.Z.Provider,{value:S,children:(0,g.jsx)(W,(0,c.Z)({ref:O,role:C,tabIndex:M,component:p,focusVisibleClassName:(0,s.Z)(R.focusVisible,x),className:(0,s.Z)(R.root,j)},w,{ownerState:B,classes:R}))})})),$=o(7873),J=o(4834),K=o(5403),U=o(168),X=o(1087),Y=o(6088),ee=(0,Y.Z)(X.OL)(V||(V=(0,U.Z)(["\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  :hover {\n    border: 1px solid #fff;\n    border-radius: 4px;\n  }\n"]))),te=Y.Z.div(_||(_=(0,U.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]))),oe=Y.Z.div(q||(q=(0,U.Z)(["\n  margin-left: 10px;\n  display: flex;\n  justify-content: center;\n"]))),re=o(521),ne=o(2797),ae=o(7541),ie=o(9434),ce=o(9066),se=o(3817),le=(0,d.ZP)("div")((function(e){var t=e.theme;return(0,n.Z)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:(0,z.Fq)(t.palette.common.white,.15),"&:hover":{backgroundColor:(0,z.Fq)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),de=(0,d.ZP)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),ue=(0,d.ZP)(J.ZP)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":(0,n.Z)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function pe(){var e=(0,ie.I0)(),t=(0,ie.v9)(ce.Qb),o=(0,ie.v9)(ce.dy).name,n=a.useState(null),i=(0,r.Z)(n,2),c=i[0],s=i[1],l=function(){s(null)};return(0,g.jsx)(y,{position:"static",children:(0,g.jsxs)(w,{children:[(0,g.jsxs)(te,{children:[(0,g.jsxs)(ee,{to:"/",children:[(0,g.jsx)(ae.Z,{sx:{mr:.5}})," home"]}),t?null:(0,g.jsxs)(oe,{children:[(0,g.jsxs)(ee,{to:"register",children:[(0,g.jsx)(ne.Z,{sx:{mr:.5}}),"register"]}),(0,g.jsxs)(ee,{to:"login",children:[(0,g.jsx)(re.Z,{sx:{mr:.5}}),"login"]})]})]}),t&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(le,{children:[(0,g.jsx)(de,{children:(0,g.jsx)(K.Z,{})}),(0,g.jsx)(ue,{placeholder:"Search contacts",inputProps:{"aria-label":"search contacts"}})]}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("p",{children:[" hello pidor ",o," "]}),(0,g.jsx)(O,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:(0,g.jsx)(F.Z,{})}),(0,g.jsxs)($.Z,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(c),onClose:l,children:[(0,g.jsx)(Q,{onClick:l,children:"Profile"}),(0,g.jsx)(Q,{onClick:l,children:"My account"}),(0,g.jsx)(Q,{onClick:function(){e((0,se.ni)())},children:"Log out"})]})]})]})]})})}var ve=o(1149),fe=function(){return(0,g.jsx)("footer",{children:"hello there"})},me=o(7689),he=o(5206),ge=(o(5462),function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(pe,{}),(0,g.jsxs)(ve.W,{children:[(0,g.jsx)(me.j3,{}),(0,g.jsx)(fe,{}),(0,g.jsx)(he.Ix,{})]})]})})},9952:function(e,t,o){"use strict";var r=o(4836);t.Z=void 0;var n=r(o(5649)),a=o(3329),i=(0,n.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");t.Z=i},2797:function(e,t,o){"use strict";var r=o(4836);t.Z=void 0;var n=r(o(5649)),a=o(3329),i=(0,n.default)((0,a.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Assignment");t.Z=i},7541:function(e,t,o){"use strict";var r=o(4836);t.Z=void 0;var n=r(o(5649)),a=o(3329),i=(0,n.default)((0,a.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.Z=i},521:function(e,t,o){"use strict";var r=o(4836);t.Z=void 0;var n=r(o(5649)),a=o(3329),i=(0,n.default)((0,a.jsx)("path",{d:"M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"}),"Login");t.Z=i},5403:function(e,t,o){"use strict";var r=o(4836);t.Z=void 0;var n=r(o(5649)),a=o(3329),i=(0,n.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=i},5649:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=o(4454)},4454:function(e,t,o){"use strict";o.r(t),o.d(t,{capitalize:function(){return n.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return l.Z},ownerDocument:function(){return d.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return p},setRef:function(){return v},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return m},unsupportedProp:function(){return h},useControlled:function(){return g.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return Z.Z},useIsFocusVisible:function(){return x.Z}});var r=o(5902),n=o(4036),a=o(8949).Z,i=o(9201),c=o(3199);var s=function(e,t){return function(){return null}},l=o(9103),d=o(8301),u=o(7602);o(7462);var p=function(e,t){return function(){return null}},v=o(2971).Z,f=o(162),m=o(6248).Z;var h=function(e,t,o,r,n){return null},g=o(8744),b=o(9683),Z=o(2071),x=o(3031),y={configure:function(e){r.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=299.31bb7f40.chunk.js.map