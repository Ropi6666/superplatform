"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[7730],{916799:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>k,contentTitle:()=>_,default:()=>E,frontMatter:()=>v,metadata:()=>z,toc:()=>w});var l=s(474848),n=s(28453),i=s(891366),r=s.n(i),d=(s(206050),s(157742)),t=s.n(d),o=(s(567792),s(427362)),c=s.n(o),m=s(336683),p=s.n(m),h=s(781124),u=s.n(h),x=s(760674),j=s.n(x),g=s(323397),f=s.n(g),y=(s(626651),s(751107)),b=(s(377675),s(119365));const v={id:"add-user-to-organization",title:"Add a User to an Organization",description:"Allows an authorized user to add another user to a specific organization. The user will be assigned a specific role within the organization.",sidebar_label:"Add a User to an Organization",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVsGO2zYQ/RWCpxbQSk42QQudumnTwm1QL9a7p40PY3IsMaFIhqTsOIL+vRhK3pXXTpBcFr1YEj2cee+R88iOSwzCKxeVNbzkV1rbXWBgGLSxtl59QcnagJ5Fy0BKBsbGGv3jGAsOhdoowayvwKgvQKlydlvjELRTWrM1MghBVQbldIq3GtlOxVoZFms8TsEzbh369DGXvOQg5V1Af2sXkzCecQceGozoAy/vuyeMprFs/gfPuKJhB7HmGTfQIC/5tO5c8ox7/NQqj5KX0beY8SBqbICXHY97RzNC9MpUvO9XQzCG+MbKPUUIayKaSK/gnFYipS0+BMLTTVI5T/yiwkBfJBbRPC2RHUbs+gOKyHsaerJuUrK7cUmOGN8M2E4o9TQQnDVhqP5yNqPHcdaUEaREyUIrBIawabXe8+z7OZ4g7zP+6lytudmCVpL9vVz8+yMFjkVE763/Tg0TkhdnWJvHvf+MSC5Pkfxp/VpJieYZYbw6hTHdUEXaE8ZGtrGteT59Xp/fMxG9Ac2W6Lfo2duU83kg9RkPKFqv4j65zhsEj/6qjTUv71dkCxEqMqShi5ZbwVcZbzDWlrzM2dSUyYZKXlDzX4StKKZOVHTHvtSnME6Fie7gdq3XlKDQVoCubYjl619fXr7ghOAAcEmEB45TmE/lvN07ZO/HkPecbSydBijZep9MGwQyMJJF+xENAzH4Cdt42yT3TkQDrYUSyN7ZShmGRjqrTMwPxlsjyERitN6rsdcOZj4qDU79g/ukPS3bzaPFvv0MjdM4tcyHlaIaG3swYRBpC2ADijQKoDH8FpSpWg3RW5ML20yAXM/ZsnXOelqYQdY6RlcWhXVorBd1bn1V8BPzXZgL57FRAdnVnDkNcWN9k6RqlPA2DIoEhsKGfYjYkBpaCTQh8Tgg+Ov6Hdte5rOj+qEsit1ul1emTfXHeaGAyumLy3yW17HRhCqib8JiMy7AI/ywg6pCnytbpJCCZFaRNOQLh2bhBZ2FtKUGQrP8Mp9deJH/QmlpqzZgpkDpIvBw3oBhTw7kI3kmB+L/7Xox7rWIn2PhNChDdJPy3diZ9/zQmXQbOWZZntwaUnuuMk5tSHO7bg0B77zuexr+1KIns1hlfAtewZpWgC4sKtC75OUGdMBv6PfTzXiI/8xO7zVn2RzaydCpvQXd0hfP+Efcn957+lWfHRqUgA1Bvw/lL8geJklOnLXPDjOuhEAXvxk79cLrxfKWZ3w93p8aK2mOhx3dWmA3ALZJjuRhaazjGkzVQkWxQ04yCxid7dFGCFJ2eCFWZyV5akMDEfolWmendN1gUn3/ED/89dUZD943RNMKrfq+/w+mKwIQ",sidebar_class_name:"post api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},_=void 0,z={id:"superplatform/add-user-to-organization",title:"Add a User to an Organization",description:"Allows an authorized user to add another user to a specific organization. The user will be assigned a specific role within the organization.",source:"@site/docs/superplatform/add-user-to-organization.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/add-user-to-organization",permalink:"/docs/superplatform/add-user-to-organization",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-user-to-organization",title:"Add a User to an Organization",description:"Allows an authorized user to add another user to a specific organization. The user will be assigned a specific role within the organization.",sidebar_label:"Add a User to an Organization",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVsGO2zYQ/RWCpxbQSk42QQudumnTwm1QL9a7p40PY3IsMaFIhqTsOIL+vRhK3pXXTpBcFr1YEj2cee+R88iOSwzCKxeVNbzkV1rbXWBgGLSxtl59QcnagJ5Fy0BKBsbGGv3jGAsOhdoowayvwKgvQKlydlvjELRTWrM1MghBVQbldIq3GtlOxVoZFms8TsEzbh369DGXvOQg5V1Af2sXkzCecQceGozoAy/vuyeMprFs/gfPuKJhB7HmGTfQIC/5tO5c8ox7/NQqj5KX0beY8SBqbICXHY97RzNC9MpUvO9XQzCG+MbKPUUIayKaSK/gnFYipS0+BMLTTVI5T/yiwkBfJBbRPC2RHUbs+gOKyHsaerJuUrK7cUmOGN8M2E4o9TQQnDVhqP5yNqPHcdaUEaREyUIrBIawabXe8+z7OZ4g7zP+6lytudmCVpL9vVz8+yMFjkVE763/Tg0TkhdnWJvHvf+MSC5Pkfxp/VpJieYZYbw6hTHdUEXaE8ZGtrGteT59Xp/fMxG9Ac2W6Lfo2duU83kg9RkPKFqv4j65zhsEj/6qjTUv71dkCxEqMqShi5ZbwVcZbzDWlrzM2dSUyYZKXlDzX4StKKZOVHTHvtSnME6Fie7gdq3XlKDQVoCubYjl619fXr7ghOAAcEmEB45TmE/lvN07ZO/HkPecbSydBijZep9MGwQyMJJF+xENAzH4Cdt42yT3TkQDrYUSyN7ZShmGRjqrTMwPxlsjyERitN6rsdcOZj4qDU79g/ukPS3bzaPFvv0MjdM4tcyHlaIaG3swYRBpC2ADijQKoDH8FpSpWg3RW5ML20yAXM/ZsnXOelqYQdY6RlcWhXVorBd1bn1V8BPzXZgL57FRAdnVnDkNcWN9k6RqlPA2DIoEhsKGfYjYkBpaCTQh8Tgg+Ov6Hdte5rOj+qEsit1ul1emTfXHeaGAyumLy3yW17HRhCqib8JiMy7AI/ywg6pCnytbpJCCZFaRNOQLh2bhBZ2FtKUGQrP8Mp9deJH/QmlpqzZgpkDpIvBw3oBhTw7kI3kmB+L/7Xox7rWIn2PhNChDdJPy3diZ9/zQmXQbOWZZntwaUnuuMk5tSHO7bg0B77zuexr+1KIns1hlfAtewZpWgC4sKtC75OUGdMBv6PfTzXiI/8xO7zVn2RzaydCpvQXd0hfP+Efcn957+lWfHRqUgA1Bvw/lL8geJklOnLXPDjOuhEAXvxk79cLrxfKWZ3w93p8aK2mOhx3dWmA3ALZJjuRhaazjGkzVQkWxQ04yCxid7dFGCFJ2eCFWZyV5akMDEfolWmendN1gUn3/ED/89dUZD943RNMKrfq+/w+mKwIQ",sidebar_class_name:"post api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Add Thread",permalink:"/docs/superplatform/add-thread"},next:{title:"Build an Image",permalink:"/docs/superplatform/build-image"}},k={},w=[];function N(e){const a={p:"p",...(0,n.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Add a User to an Organization"}),"\n",(0,l.jsx)(t(),{method:"post",path:"/user-svc/organization/{organizationId}/user"}),"\n",(0,l.jsx)(a.p,{children:"Allows an authorized user to add another user to a specific organization. The user will be assigned a specific role within the organization."}),"\n",(0,l.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(a.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(p(),{className:"paramsItem",param:{description:"Organization ID",in:"path",name:"organizationId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,l.jsx)(c(),{className:"openapi-tabs__mime",children:(0,l.jsx)(b.default,{label:"application/json",value:"application/json-schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,l.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,l.jsx)(a.p,{children:"Body"})}),(0,l.jsx)("strong",{className:"openapi-schema__required",children:(0,l.jsx)(a.p,{children:"required"})})]}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,l.jsx)(a.p,{children:"Add User to Organization Request"})})}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"userId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})})}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(r(),{label:void 0,id:void 0,children:[(0,l.jsxs)(b.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"User added successfully"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(a.p,{children:"object"})})})]})}),(0,l.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,l.jsxs)(b.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Invalid JSON"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(b.default,{label:"401",value:"401",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Unauthorized"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(b.default,{label:"403",value:"403",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Forbidden"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(b.default,{label:"404",value:"404",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Organization/User not found"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(b.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function E(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(N,{...e})}):N(e)}}}]);