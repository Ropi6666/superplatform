"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[3726],{96018:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>w,contentTitle:()=>y,default:()=>k,frontMatter:()=>b,metadata:()=>v,toc:()=>_});var r=a(74848),l=a(28453),n=a(91366),i=a.n(n),t=(a(6050),a(57742)),d=a.n(t),o=(a(67792),a(27362)),c=a.n(o),p=(a(36683),a(81124)),m=a.n(p),h=a(60674),u=a.n(h),x=a(23397),j=a.n(x),g=(a(26651),a(51107)),f=(a(77675),a(19365));const b={id:"change-password",title:"Change User Password",description:"Allows an authenticated user to change their own password.",sidebar_label:"Change User Password",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VU2P2zYQ/SvEnLWWs9sAhU51gqDYNugu4uzJ8WFMjSUmFMmQlBVX0H8vRh9e2esGKQrksiuT8/HmzbxhCzkF6ZWLyhrIYKW1bYJAI7COJZmoJEbKRR3Ii2iFLNEUJGJJygvbGOEwhMb6fAEJWEceOdB9DhkMpo/jPSTg6WtNIb6x+RGyFqQ1kUzkT3ROcyJlTfo5MJAWgiypQv5yngNHRaF3q70nE09xsxbi0RFkEKJXpoAuAUPNd++DrosrF10yndjdZ5IROj46J+jtQMAUXnwYihrLU55yyKKvqeOD4KwJA+zb5ZL/nQc7RRm4ykWopaQQ9rXWR0h+nKIXsLsEfrmW8d4cUKtc/LF++Ou/JDjvAXlv/Q8S2CN59RLJk+EJs179TflPQ/L6OieRvEEt1uQP5MW7PubPgcTDSLL2Kh4h27TwhtCTX9WxhGyz7bYJRCwCZBt4YgWuDxK2CVQUS8sac7YfPYdsDymr9CYcZDrM0417Fl/oawt9ktprtk61lahLG2L2+tfbu1fA6SY0a65uKGiO6ZK7j0dH4tNo8gnE3vICoVzsjgJFcChJoMlFtF/ICJSDRMTe24qXiOirCky8kiTe20IZQSZ3VpnIK0VxkpIwJ+6IwYr5W42D0/cDTrSiU3/SsSeae/Thed28+4aV03R1fUz9udgaz8fDsphtD2X2dlpgKPv5oAoVcxpQU/gtKFPUGqO3ZiFtNQP+eC/WtXPWc9eGNpQxuixNQ+3IO41xb321QJXCi9WzuhcVGiyoIhN7VnM6kLau/33yhQS0kmRCX++U+ffH9+Jwt1ie5Q1ZmjZNsyhMvbC+SEe/kGLh9M3dYrkoY6UZSSRfhYf92KgZ7AaLgvxC2bQ3SbkdKjLXsJ6XBAnw/A2VLBe3HJSnt0Izgzlu134qZi/HGQ+zl+P/PVfj2ET6FlOnURnG1JPTjorawKQoXgcXmtomwNphq7bdYaAnr7uOj7/W5FnO2wQO6BXumI7NtkumSWYRfqEjFzyUcsM6YopQ18MoX+ybLpk8VlKSi9+1nW+Ix4f1R0hgNz66lc3Zx2PDLxY2kEH/cLN3L/b+rAWNpqixYNshJqsKxxXwrDeGlEwfXNV0ZY4zhJd6HQrhv1zWVZe2HdTcdSf74epfPU5LYrDmbm67rvsHYOEVlA==",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},y=void 0,v={id:"superplatform/change-password",title:"Change User Password",description:"Allows an authenticated user to change their own password.",source:"@site/docs/superplatform/change-password.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/change-password",permalink:"/docs/superplatform/change-password",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"change-password",title:"Change User Password",description:"Allows an authenticated user to change their own password.",sidebar_label:"Change User Password",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VU2P2zYQ/SvEnLWWs9sAhU51gqDYNugu4uzJ8WFMjSUmFMmQlBVX0H8vRh9e2esGKQrksiuT8/HmzbxhCzkF6ZWLyhrIYKW1bYJAI7COJZmoJEbKRR3Ii2iFLNEUJGJJygvbGOEwhMb6fAEJWEceOdB9DhkMpo/jPSTg6WtNIb6x+RGyFqQ1kUzkT3ROcyJlTfo5MJAWgiypQv5yngNHRaF3q70nE09xsxbi0RFkEKJXpoAuAUPNd++DrosrF10yndjdZ5IROj46J+jtQMAUXnwYihrLU55yyKKvqeOD4KwJA+zb5ZL/nQc7RRm4ykWopaQQ9rXWR0h+nKIXsLsEfrmW8d4cUKtc/LF++Ou/JDjvAXlv/Q8S2CN59RLJk+EJs179TflPQ/L6OieRvEEt1uQP5MW7PubPgcTDSLL2Kh4h27TwhtCTX9WxhGyz7bYJRCwCZBt4YgWuDxK2CVQUS8sac7YfPYdsDymr9CYcZDrM0417Fl/oawt9ktprtk61lahLG2L2+tfbu1fA6SY0a65uKGiO6ZK7j0dH4tNo8gnE3vICoVzsjgJFcChJoMlFtF/ICJSDRMTe24qXiOirCky8kiTe20IZQSZ3VpnIK0VxkpIwJ+6IwYr5W42D0/cDTrSiU3/SsSeae/Thed28+4aV03R1fUz9udgaz8fDsphtD2X2dlpgKPv5oAoVcxpQU/gtKFPUGqO3ZiFtNQP+eC/WtXPWc9eGNpQxuixNQ+3IO41xb321QJXCi9WzuhcVGiyoIhN7VnM6kLau/33yhQS0kmRCX++U+ffH9+Jwt1ie5Q1ZmjZNsyhMvbC+SEe/kGLh9M3dYrkoY6UZSSRfhYf92KgZ7AaLgvxC2bQ3SbkdKjLXsJ6XBAnw/A2VLBe3HJSnt0Izgzlu134qZi/HGQ+zl+P/PVfj2ET6FlOnURnG1JPTjorawKQoXgcXmtomwNphq7bdYaAnr7uOj7/W5FnO2wQO6BXumI7NtkumSWYRfqEjFzyUcsM6YopQ18MoX+ybLpk8VlKSi9+1nW+Ix4f1R0hgNz66lc3Zx2PDLxY2kEH/cLN3L/b+rAWNpqixYNshJqsKxxXwrDeGlEwfXNV0ZY4zhJd6HQrhv1zWVZe2HdTcdSf74epfPU5LYrDmbm67rvsHYOEVlA==",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Query Service Instances",permalink:"/docs/superplatform/query-service-instances"},next:{title:"Change User Password (Admin)",permalink:"/docs/superplatform/change-password-admin"}},w={},_=[];function N(e){const s={p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Change User Password"}),"\n",(0,r.jsx)(d(),{method:"post",path:"/user-svc/change-password"}),"\n",(0,r.jsx)(s.p,{children:"Allows an authenticated user to change their own password."}),"\n",(0,r.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(c(),{className:"openapi-tabs__mime",children:(0,r.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,r.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,r.jsx)(s.p,{children:"Body"})}),(0,r.jsx)("strong",{className:"openapi-schema__required",children:(0,r.jsx)(s.p,{children:"required"})})]}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,r.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,r.jsx)(s.p,{children:"Change Password Request"})})}),(0,r.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,r.jsx)(u(),{collapsible:!1,name:"currentPassword",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(u(),{collapsible:!1,name:"newPassword",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(u(),{collapsible:!1,name:"slug",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsxs)(i(),{label:void 0,id:void 0,children:[(0,r.jsxs)(f.default,{label:"200",value:"200",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"Password changed successfully"})}),(0,r.jsx)("div",{children:(0,r.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,r.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,r.jsx)(s.p,{children:"object"})})})]})}),(0,r.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(m(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,r.jsxs)(f.default,{label:"400",value:"400",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"Invalid JSON"})}),(0,r.jsx)("div",{children:(0,r.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,r.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,r.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(m(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,r.jsxs)(f.default,{label:"401",value:"401",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"Unauthorized"})}),(0,r.jsx)("div",{children:(0,r.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,r.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,r.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(m(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,r.jsxs)(f.default,{label:"500",value:"500",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"Internal Server Error"})}),(0,r.jsx)("div",{children:(0,r.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,r.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,r.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(m(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function k(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(N,{...e})}):N(e)}}}]);