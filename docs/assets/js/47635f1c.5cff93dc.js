"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[8416],{335125:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>k,contentTitle:()=>_,default:()=>E,frontMatter:()=>v,metadata:()=>z,toc:()=>w});var n=s(474848),l=s(28453),i=s(891366),r=s.n(i),d=(s(206050),s(157742)),t=s.n(d),o=(s(567792),s(427362)),c=s.n(o),m=s(336683),p=s.n(m),h=s(781124),x=s.n(h),j=s(760674),u=s.n(j),g=s(323397),f=s.n(g),y=(s(626651),s(751107)),b=(s(377675),s(119365));const v={id:"add-user-to-organization",title:"Add a User to an Organization",description:"Allows an authorized user to add another user to a specific organization. The user will be assigned a specific role within the organization.",sidebar_label:"Add a User to an Organization",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVsGO2zYQ/RWCpxbQSk42QQudumnTwm1QL9a7p40PY3IsMaFIhqTsOIL+vRhK3pXXTpBcFr1YEj2cee+R88iOSwzCKxeVNbzkV1rbXWBgGLSxtl59QcnagJ5Fy0BKBsbGGv3jGAsOhdoowayvwKgvQKlydlvjELRTWrM1MghBVQbldIq3GtlOxVoZFms8TsEzbh369DGXvOQg5V1Af2sXkzCecQceGozoAy/vuyeMprFs/gfPuKJhB7HmGTfQIC/5tO5c8ox7/NQqj5KX0beY8SBqbICXHY97RzNC9MpUvO9XQzCG+MbKPUUIayKaSK/gnFYipS0+BMLTTVI5T/yiwkBfJBbRPC2RHUbs+gOKyHsaerJuUrK7cUmOGN8M2E4o9TQQnDVhqP5yNqPHcdaUEaREyUIrBIawabXe8+z7OZ4g7zP+6lytudmCVpL9vVz8+yMFjkVE763/Tg0TkhdnWJvHvf+MSC5Pkfxp/VpJieYZYbw6hTHdUEXaE8ZGtrGteT59Xp/fMxG9Ac2W6Lfo2duU83kg9RkPKFqv4j65zhsEj/6qjTUv71dkCxEqMqShi5ZbwVcZbzDWlrzM2dSUyYZKXlDzX4StKKZOVHTHvtSnME6Fie7gdq3XlKDQVoCubYjl619fXr7ghOAAcEmEB45TmE/lvN07ZO/HkPecbSydBijZep9MGwQyMJJF+xENAzH4Cdt42yT3TkQDrYUSyN7ZShmGRjqrTMwPxlsjyERitN6rsdcOZj4qDU79g/ukPS3bzaPFvv0MjdM4tcyHlaIaG3swYRBpC2ADijQKoDH8FpSpWg3RW5ML20yAXM/ZsnXOelqYQdY6RlcWhXVorBd1bn1V8BPzXZgL57FRAdnVnDkNcWN9k6RqlPA2DIoEhsKGfYjYkBpaCTQh8Tgg+Ov6Hdte5rOj+qEsit1ul1emTfXHeaGAyumLy3yW17HRhCqib8JiMy7AI/ywg6pCnytbpJCCZFaRNOQLh2bhBZ2FtKUGQrP8Mp9deJH/QmlpqzZgpkDpIvBw3oBhTw7kI3kmB+L/7Xox7rWIn2PhNChDdJPy3diZ9/zQmXQbOWZZntwaUnuuMk5tSHO7bg0B77zuexr+1KIns1hlfAtewZpWgC4sKtC75OUGdMBv6PfTzXiI/8xO7zVn2RzaydCpvQXd0hfP+Efcn957+lWfHRqUgA1Bvw/lL8geJklOnLXPDjOuhEAXvxk79cLrxfKWZ3w93p8aK2mOhx3dWmA3ALZJjuRhaazjGkzVQkWxQ04yCxid7dFGCFJ2eCFWZyV5akMDEfolWmendN1gUn3/ED/89dUZD943RNMKrfq+/w+mKwIQ",sidebar_class_name:"post api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},_=void 0,z={id:"openorch/add-user-to-organization",title:"Add a User to an Organization",description:"Allows an authorized user to add another user to a specific organization. The user will be assigned a specific role within the organization.",source:"@site/docs/openorch/add-user-to-organization.api.mdx",sourceDirName:"openorch",slug:"/openorch/add-user-to-organization",permalink:"/docs/openorch/add-user-to-organization",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-user-to-organization",title:"Add a User to an Organization",description:"Allows an authorized user to add another user to a specific organization. The user will be assigned a specific role within the organization.",sidebar_label:"Add a User to an Organization",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVsGO2zYQ/RWCpxbQSk42QQudumnTwm1QL9a7p40PY3IsMaFIhqTsOIL+vRhK3pXXTpBcFr1YEj2cee+R88iOSwzCKxeVNbzkV1rbXWBgGLSxtl59QcnagJ5Fy0BKBsbGGv3jGAsOhdoowayvwKgvQKlydlvjELRTWrM1MghBVQbldIq3GtlOxVoZFms8TsEzbh369DGXvOQg5V1Af2sXkzCecQceGozoAy/vuyeMprFs/gfPuKJhB7HmGTfQIC/5tO5c8ox7/NQqj5KX0beY8SBqbICXHY97RzNC9MpUvO9XQzCG+MbKPUUIayKaSK/gnFYipS0+BMLTTVI5T/yiwkBfJBbRPC2RHUbs+gOKyHsaerJuUrK7cUmOGN8M2E4o9TQQnDVhqP5yNqPHcdaUEaREyUIrBIawabXe8+z7OZ4g7zP+6lytudmCVpL9vVz8+yMFjkVE763/Tg0TkhdnWJvHvf+MSC5Pkfxp/VpJieYZYbw6hTHdUEXaE8ZGtrGteT59Xp/fMxG9Ac2W6Lfo2duU83kg9RkPKFqv4j65zhsEj/6qjTUv71dkCxEqMqShi5ZbwVcZbzDWlrzM2dSUyYZKXlDzX4StKKZOVHTHvtSnME6Fie7gdq3XlKDQVoCubYjl619fXr7ghOAAcEmEB45TmE/lvN07ZO/HkPecbSydBijZep9MGwQyMJJF+xENAzH4Cdt42yT3TkQDrYUSyN7ZShmGRjqrTMwPxlsjyERitN6rsdcOZj4qDU79g/ukPS3bzaPFvv0MjdM4tcyHlaIaG3swYRBpC2ADijQKoDH8FpSpWg3RW5ML20yAXM/ZsnXOelqYQdY6RlcWhXVorBd1bn1V8BPzXZgL57FRAdnVnDkNcWN9k6RqlPA2DIoEhsKGfYjYkBpaCTQh8Tgg+Ov6Hdte5rOj+qEsit1ul1emTfXHeaGAyumLy3yW17HRhCqib8JiMy7AI/ywg6pCnytbpJCCZFaRNOQLh2bhBZ2FtKUGQrP8Mp9deJH/QmlpqzZgpkDpIvBw3oBhTw7kI3kmB+L/7Xox7rWIn2PhNChDdJPy3diZ9/zQmXQbOWZZntwaUnuuMk5tSHO7bg0B77zuexr+1KIns1hlfAtewZpWgC4sKtC75OUGdMBv6PfTzXiI/8xO7zVn2RzaydCpvQXd0hfP+Efcn957+lWfHRqUgA1Bvw/lL8geJklOnLXPDjOuhEAXvxk79cLrxfKWZ3w93p8aK2mOhx3dWmA3ALZJjuRhaazjGkzVQkWxQ04yCxid7dFGCFJ2eCFWZyV5akMDEfolWmendN1gUn3/ED/89dUZD943RNMKrfq+/w+mKwIQ",sidebar_class_name:"post api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Create an Organization",permalink:"/docs/openorch/create-organization"},next:{title:"Remove a User from an Organization",permalink:"/docs/openorch/remove-user-from-organization"}},k={},w=[];function N(e){const a={p:"p",...(0,l.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Add a User to an Organization"}),"\n",(0,n.jsx)(t(),{method:"post",path:"/user-svc/organization/{organizationId}/user"}),"\n",(0,n.jsx)(a.p,{children:"Allows an authorized user to add another user to a specific organization. The user will be assigned a specific role within the organization."}),"\n",(0,n.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(a.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(p(),{className:"paramsItem",param:{description:"Organization ID",in:"path",name:"organizationId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,n.jsx)(c(),{className:"openapi-tabs__mime",children:(0,n.jsx)(b.default,{label:"application/json",value:"application/json-schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,n.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,n.jsx)(a.p,{children:"Body"})}),(0,n.jsx)("strong",{className:"openapi-schema__required",children:(0,n.jsx)(a.p,{children:"required"})})]}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,n.jsx)(a.p,{children:"Add User to Organization Request"})})}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(u(),{collapsible:!1,name:"userId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})})}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(r(),{label:void 0,id:void 0,children:[(0,n.jsxs)(b.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"User added successfully"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(a.p,{children:"object"})})})]})}),(0,n.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(x(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,n.jsxs)(b.default,{label:"400",value:"400",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Invalid JSON"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(x(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(b.default,{label:"401",value:"401",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Unauthorized"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(x(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(b.default,{label:"403",value:"403",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Forbidden"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(x(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(b.default,{label:"404",value:"404",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Organization/User not found"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(x(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(b.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(x(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function E(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(N,{...e})}):N(e)}}}]);