"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[8133],{48133:($,T,t)=>{t.d(T,{E:()=>Ie,a:()=>Z});var e=t(74081),_=t(27279),R=t(96226),h=t(10701),k=t(2878),U=t(77970),W=t(25191),I=t(4540),D=t(51094),S=t(10989),m=t(32370),H=t(67472),V=t(22572),N=t(73411),p=t(8295),he=t(61121),B=t(93415),F=t(23298),b=t(74577),z=t(12881),_e=t(1782),pe=t(27875),te=t(48102),Ee=t(74758),me=t(73354),j=t(87006),L=t(40464),ne=t(51447),ae=t(59491),fe=t(36938),Me=t(34547),re=t(59082),oe=t(95066),xe=t(64820),ve=t(76827),x=t(71563),i=t(70627),C=t(61020),Pe=t(66333),ie=t(72450),O=t(47853);const ye=s=>s.reduce((n,a)=>{const r=a.split(".")[0];return n[r]||(n[r]=[]),n[r].push(a),n},{}),je=(0,ie.ZP)(R.w)`
  tbody tr:nth-child(odd) {
    background: ${({theme:s})=>s.colors.neutral100};
  }

  thead th span {
    color: ${({theme:s})=>s.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:s})=>s.spaces[3]};
    padding-block-end: ${({theme:s})=>s.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:s})=>s.spaces[2]};
  }
`,le=s=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return s&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},Ce=s=>{const n=["entry.create","entry.update","entry.delete"];return s&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},Q=_.createContext(),de=({children:s})=>{const{formatMessage:n}=(0,C.Z)(),{collectionTypes:a,isLoading:r}=(0,ae.u)(),l=_.useMemo(()=>a.some(o=>o.options.draftAndPublish===!0),[a]),u=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,e.jsx)(Q.Provider,{value:{isDraftAndPublish:l},children:(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(k.Q,{"aria-hidden":!0,children:u}),r&&(0,e.jsx)(U.a,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,e.jsx)(je,{"aria-label":u,children:s})]})})};de.propTypes={children:i.oneOfType([i.arrayOf(i.node),i.node]).isRequired};const X=({getHeaders:s=le})=>{const{isDraftAndPublish:n}=_.useContext(Q),{formatMessage:a}=(0,C.Z)(),r=s(n);return(0,e.jsx)(W.S,{children:(0,e.jsxs)(I.Z,{children:[(0,e.jsx)(D.g,{children:(0,e.jsx)(S.T,{children:a({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),r.map(l=>["app.utils.publish","app.utils.unpublish"].includes(l.id)?(0,e.jsx)(D.g,{title:a({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,e.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",children:a(l)})},l.id):(0,e.jsx)(D.g,{children:(0,e.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",children:a(l)})},l.id))]})})};X.defaultProps={getHeaders:le},X.propTypes={getHeaders:i.func};const G=({providedEvents:s})=>{const{isDraftAndPublish:n}=_.useContext(Q),a=s||Ce(n),{values:r,handleChange:l}=(0,x.u6)(),u="events",o=r.events,f=[],v=ye(o),g=({target:{name:c,value:d}})=>{let E=new Set(o);d?E.add(c):E.delete(c),l({target:{name:u,value:Array.from(E)}})},M=({target:{name:c,value:d}})=>{let E=new Set(o);d?a[c].forEach(P=>{f.includes(P)||E.add(P)}):a[c].forEach(P=>E.delete(P)),l({target:{name:u,value:Array.from(E)}})};return(0,e.jsx)(H.X,{children:Object.entries(a).map(([c,d])=>(0,e.jsx)(K,{disabledEvents:f,name:c,events:d,inputValue:v[c],handleSelect:g,handleSelectAll:M},c))})};G.defaultProps={providedEvents:null},G.propTypes={providedEvents:i.object};const Oe=s=>s.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),K=({disabledEvents:s,name:n,events:a,inputValue:r,handleSelect:l,handleSelectAll:u})=>{const{formatMessage:o}=(0,C.Z)(),f=a.filter(d=>!s.includes(d)),v=r.length>0,g=r.length===f.length,M=({target:{name:d}})=>{u({target:{name:d,value:!g}})},c=5;return(0,e.jsxs)(I.Z,{children:[(0,e.jsx)(D.f,{children:(0,e.jsx)(V.X,{indeterminate:v&&!g,"aria-label":o({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:M,value:g,children:Oe(n)})}),a.map(d=>(0,e.jsx)(D.f,{children:(0,e.jsx)(N.C,{disabled:s.includes(d),"aria-label":d,name:d,value:r.includes(d),onValueChange:E=>l({target:{name:d,value:E}})})},d)),a.length<c&&(0,e.jsx)(D.f,{colSpan:c-a.length})]})};K.defaultProps={disabledEvents:[],events:[],inputValue:[],handleSelect(){},handleSelectAll(){}},K.propTypes={disabledEvents:i.array,events:i.array,inputValue:i.array,handleSelect:i.func,handleSelectAll:i.func,name:i.string.isRequired};const Z={Root:de,Headers:X,Body:G,EventRow:K};function De(){return(0,e.jsxs)(Z.Root,{children:[(0,e.jsx)(Z.Headers,{}),(0,e.jsx)(Z.Body,{})]})}const ce=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],Y=({name:s,onChange:n,value:a,...r})=>{const{values:{headers:l}}=(0,x.u6)(),[u,o]=(0,_.useState)(ce);(0,_.useEffect)(()=>{o(ce.filter(g=>!l?.some(M=>M.key!==a&&M.key===g)))},[l,a]);const f=g=>{n({target:{name:s,value:g}})},v=g=>{o(M=>[...M,g]),f(g)};return(0,e.jsx)(p.XU,{...r,onClear:()=>f(""),onChange:f,onCreateOption:v,placeholder:"",value:a,children:u.map(g=>(0,e.jsx)(he.O,{value:g,children:g},g))})};Y.defaultProps={value:void 0},Y.propTypes={name:i.string.isRequired,onChange:i.func.isRequired,value:i.string};const be=()=>{const{formatMessage:s}=(0,C.Z)(),{values:n,errors:a}=(0,x.u6)();return(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(k.Q,{children:s({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,e.jsx)(B.x,{padding:8,background:"neutral100",hasRadius:!0,children:(0,e.jsx)(x.F2,{validateOnChange:!1,name:"headers",render:({push:r,remove:l})=>(0,e.jsxs)(F.r,{gap:4,children:[n.headers.map((u,o)=>(0,e.jsxs)(_.Fragment,{children:[(0,e.jsx)(b.P,{col:6,children:(0,e.jsx)(x.gN,{as:Y,name:`headers.${o}.key`,"aria-label":`row ${o+1} key`,label:s({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:a.headers?.[o]?.key&&a.headers[o].key})}),(0,e.jsx)(b.P,{col:6,children:(0,e.jsxs)(h.k,{alignItems:"flex-end",children:[(0,e.jsx)(B.x,{style:{flex:1},children:(0,e.jsx)(x.gN,{as:z.o,name:`headers.${o}.value`,"aria-label":`row ${o+1} value`,label:s({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:a.headers?.[o]?.value&&a.headers[o].value})}),(0,e.jsx)(h.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:a.headers?.[o]?.value?0:5,children:(0,e.jsx)(j.fG,{disabled:n.headers.length===1,onClick:()=>l(o),label:s({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:o+1})})})]})})]},`${o}.${u.key}`)),(0,e.jsx)(b.P,{col:12,children:(0,e.jsx)(_e.A,{type:"button",onClick:()=>{r({key:"",value:""})},startIcon:(0,e.jsx)(fe.Z,{}),children:s({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},w=ie.ZP.svg(({theme:s,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${s.colors[n]};
  }
`),J=({isPending:s,statusCode:n})=>{const{formatMessage:a}=(0,C.Z)();return s?(0,e.jsxs)(h.k,{gap:2,alignItems:"center",children:[(0,e.jsx)(w,{as:Me.Z}),(0,e.jsx)(m.Z,{children:a({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,e.jsxs)(h.k,{gap:2,alignItems:"center",children:[(0,e.jsx)(w,{as:re.Z,color:"success700"}),(0,e.jsx)(m.Z,{children:a({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,e.jsxs)(h.k,{gap:2,alignItems:"center",children:[(0,e.jsx)(w,{as:oe.Z,color:"danger700"}),(0,e.jsxs)(m.Z,{children:[a({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null};J.propTypes={isPending:i.bool.isRequired,statusCode:i.number},J.defaultProps={statusCode:void 0};const q=({statusCode:s,message:n})=>{const{formatMessage:a}=(0,C.Z)();return s>=200&&s<300?(0,e.jsx)(h.k,{justifyContent:"flex-end",children:(0,e.jsx)(m.Z,{textColor:"neutral600",ellipsis:!0,children:a({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):s>=300?(0,e.jsx)(h.k,{justifyContent:"flex-end",children:(0,e.jsx)(h.k,{maxWidth:(0,j.Q1)(250),justifyContent:"flex-end",title:n,children:(0,e.jsx)(m.Z,{ellipsis:!0,textColor:"neutral600",children:n})})}):null};q.propTypes={statusCode:i.number,message:i.string},q.defaultProps={statusCode:void 0,message:void 0};const ge=({onCancel:s})=>{const{formatMessage:n}=(0,C.Z)();return(0,e.jsx)(h.k,{justifyContent:"flex-end",children:(0,e.jsx)("button",{onClick:s,type:"button",children:(0,e.jsxs)(h.k,{gap:2,alignItems:"center",children:[(0,e.jsx)(m.Z,{textColor:"neutral400",children:n({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,e.jsx)(w,{as:oe.Z,color:"neutral400"})]})})})};ge.propTypes={onCancel:i.func.isRequired};const ee=({isPending:s,onCancel:n,response:a})=>{const{statusCode:r,message:l}=a,{formatMessage:u}=(0,C.Z)();return(0,e.jsx)(B.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(F.r,{gap:4,style:{alignItems:"center"},children:[(0,e.jsx)(b.P,{col:3,children:(0,e.jsx)(m.Z,{children:u({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,e.jsx)(b.P,{col:3,children:(0,e.jsx)(J,{isPending:s,statusCode:r})}),(0,e.jsx)(b.P,{col:6,children:s?(0,e.jsx)(ge,{onCancel:n}):(0,e.jsx)(q,{statusCode:r,message:l})})]})})};ee.defaultProps={isPending:!1,onCancel(){},response:{}},ee.propTypes={isPending:i.bool,onCancel:i.func,response:i.object};const Te=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Ae=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Re=({formatMessage:s})=>O.Ry().shape({name:O.Z_().required(s({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Te,s({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:O.Z_().required(s({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Ae,s({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:O.Vo(n=>{let a=O.IX();if(n.length===1){const{key:r,value:l}=n[0];if(!r&&!l)return a}return a.of(O.Ry().shape({key:O.Z_().required(s({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:O.Z_().required(s({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:O.IX()}),se=({handleSubmit:s,triggerWebhook:n,isCreating:a,isTriggering:r,triggerResponse:l,data:u})=>{const{formatMessage:o}=(0,C.Z)(),[f,v]=(0,_.useState)(!1),g=(0,Pe.p)(De,async()=>(await t.e(3841).then(t.bind(t,43841))).EventTableEE),M=d=>Object.keys(d).length?Object.entries(d).map(([E,P])=>({key:E,value:P})):[{key:"",value:""}],c=(0,x.TA)({initialValues:{name:u?.name||"",url:u?.url||"",headers:M(u?.headers||{}),events:u?.events||[]},onSubmit(d,{resetForm:E,setSubmitting:P}){s(d),E({values:d}),P(!1)},validationSchema:Re({formatMessage:o}),validateOnChange:!1,validateOnBlur:!1});return g?(0,e.jsx)(x.Hy,{value:c,children:(0,e.jsxs)(j.l0,{onSubmit:c.handleSubmit,children:[(0,e.jsx)(pe.T,{primaryAction:(0,e.jsxs)(h.k,{gap:2,children:[(0,e.jsx)(te.z,{onClick:()=>{n(),v(!0)},variant:"tertiary",startIcon:(0,e.jsx)(xe.Z,{}),disabled:a||r,size:"L",children:o({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,e.jsx)(te.z,{startIcon:(0,e.jsx)(re.Z,{}),type:"submit",size:"L",disabled:!c.dirty,loading:c.isSubmitting,children:o({id:"global.save",defaultMessage:"Save"})})]}),title:a?o({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):u?.name,navigationAction:(0,e.jsx)(j.rU,{startIcon:(0,e.jsx)(ve.Z,{}),to:"/settings/webhooks",children:o({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(Ee.D,{children:(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:4,children:[f&&(0,e.jsx)(ee,{isPending:r,response:l,onCancel:()=>v(!1)}),(0,e.jsx)(B.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsxs)(F.r,{gap:6,children:[(0,e.jsx)(b.P,{col:6,children:(0,e.jsx)(x.gN,{as:z.o,name:"name",error:c?.errors?.name&&c.errors.name,label:o({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,e.jsx)(b.P,{col:12,children:(0,e.jsx)(x.gN,{as:z.o,name:"url",error:c?.errors?.url&&c.errors.url,label:o({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,e.jsx)(be,{}),(0,e.jsx)(g,{})]})})]})})]})}):null};se.propTypes={data:i.object,handleSubmit:i.func.isRequired,triggerWebhook:i.func.isRequired,isCreating:i.bool.isRequired,isTriggering:i.bool.isRequired,triggerResponse:i.object},se.defaultProps={data:void 0,triggerResponse:void 0};const ue=s=>({...s,headers:s.headers.reduce((n,{key:a,value:r})=>(a!==""&&(n[a]=r),n),{})}),Ie=()=>{const{params:{id:s}}=(0,ne.$B)("/settings/webhooks/:id"),n=s==="create",{replace:a}=(0,ne.k6)(),r=(0,j.lm)(),{formatAPIError:l}=(0,j.So)(),u=(0,L.useQueryClient)(),{isLoading:o}=(0,ae.u)(),{put:f,get:v,post:g}=(0,j.kY)(),{isLoading:M,data:c,error:d}=(0,L.useQuery)(["webhooks",s],async()=>{const{data:{data:y}}=await v(`/admin/webhooks/${s}`);return y},{enabled:!n});_.useEffect(()=>{d&&r({type:"warning",message:l(d)})},[d,r,l]);const{isLoading:E,data:P,isIdle:Se,mutate:Le}=(0,L.useMutation)(()=>g(`/admin/webhooks/${s}/trigger`)),ke=()=>Le(null,{onError(y){r({type:"warning",message:l(y)})}}),Ue=(0,L.useMutation)(y=>g("/admin/webhooks",y)),We=(0,L.useMutation)(({id:y,body:A})=>f(`/admin/webhooks/${y}`,A)),Be=async y=>{if(n){Ue.mutate(ue(y),{onSuccess({data:A}){r({type:"success",message:{id:"Settings.webhooks.created"}}),a(`/settings/webhooks/${A.data.id}`)},onError(A){r({type:"warning",message:l(A)})}});return}We.mutate({id:s,body:ue(y)},{onSuccess(){u.invalidateQueries(["webhooks",s]),r({type:"success",message:{id:"notification.form.success.fields"}})},onError(A){r({type:"warning",message:l(A)})}})};return M||o?(0,e.jsx)(j.dO,{}):(0,e.jsxs)(me.o,{children:[(0,e.jsx)(j.SL,{name:"Webhooks"}),(0,e.jsx)(se,{data:c,handleSubmit:Be,triggerWebhook:ke,isCreating:n,isTriggering:E,isTriggerIdle:Se,triggerResponse:P?.data.data})]})}},59491:($,T,t)=>{t.d(T,{u:()=>k});var e=t(27279),_=t(87006),R=t(53532),h=t(40464);function k(){const{get:U}=(0,_.kY)(),{formatAPIError:W}=(0,_.So)(),I=(0,_.lm)(),D=(0,h.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:p}}=await U("/content-manager/components");return p},onError(p){p instanceof R.d7&&I({type:"warning",message:W(p)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:p}}=await U("/content-manager/content-types");return p},onError(p){p instanceof R.d7&&I({type:"warning",message:W(p)})}}]),[S,m]=D,H=S.isLoading||m.isLoading,V=e.useMemo(()=>(m?.data??[]).filter(p=>p.kind==="collectionType"&&p.isDisplayed),[m?.data]),N=e.useMemo(()=>(m?.data??[]).filter(p=>p.kind!=="collectionType"&&p.isDisplayed),[m?.data]);return{isLoading:H,components:e.useMemo(()=>S?.data??[],[S?.data]),collectionTypes:V,singleTypes:N}}},61121:($,T,t)=>{t.d(T,{O:()=>_});var e=t(8295);const _=e.Wx},76827:($,T,t)=>{t.d(T,{Z:()=>R});var e=t(74081);const _=h=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...h,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),R=_}}]);
