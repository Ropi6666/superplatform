"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[4161],{48575:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>G,default:()=>k,frontMatter:()=>v,metadata:()=>U,toc:()=>T});var t=a(74848),l=a(28453),r=a(91366),i=a.n(r),n=(a(6050),a(57742)),d=a.n(n),c=(a(67792),a(27362)),o=a.n(c),h=a(36683),p=a.n(h),m=a(81124),j=a.n(m),u=a(60674),x=a.n(u),f=a(23397),g=a.n(f),y=(a(26651),a(51107)),b=(a(77675),a(19365));const v={id:"get-thread",title:"Get Thread",description:"Fetch information about a specific chat thread by its ID",sidebar_label:"Get Thread",hide_title:!0,hide_table_of_contents:!0,api:"eJylVt9v20YM/lcOfNoARUqTFRj0tGzrAm/FUszpU+KH84m2rj3dXY+UU8/Q/z5Qkh0lUYsVfbElHn985JEfdYAKySQb2QYPJfyBbGpl/SakRotM6XVoWWlFEY3dWKNMrVlxnVBXar1XlkktfocMQsTUmywqKGGLfNvrQAZRJ90gYyIo7w7PIg5agwsrgqi5hgy8bhBKGAItxE3CT61NWEHJqcUMyNTYaCgPwPsousTJ+i103UqUKQZPSHJ+cX4uf7OBK2RtHSlqjUGiTevcXiXkZHGHEtYEz+hZHOgYnTV9ksUHEi+HCYqYpARsh5j42RLTBN06BIfaQ5eNSb20MQk1Y3XFM0llYKtZMVt2OJOeiFXYKK5xvK4cshnzEK1ZVDTjYTxRFW6sR1IPtTW16g1o4lat0QW/JcUhv/e3w7HRXqXQbmu3V2vRlGcWPJoU6y2pTUijAxJglrGh+QQHgU5J7+W9jdVXqtQSptl03g8HPXBb0bE0oi+phR4yoWC1NKnY/wX2KAjrD2h4ViKyn+a6ceF32tlK/bm8+ftbmu556w8BXs2k73XLdUj232/r6rkAr+czYExeO7XEtMOk3qQU0vdF6jIgNG2yvO+Z41fUCdNVyzWUdysZc+kkKO/gNyGl5c7AKoMGuQ4jB/XsI+pQCG+d0c4Uw9UWhyO1dCBhBPPAT21yol+4YLSrA3H5+ueLy1cg8Y5wloJ6GNopqBcjtI+o7keVe1Cb4Fx4wJ44hVK1QaV9pTh8RK+0GQhObVJo+uaUnlUkBbUG1duwtV6hr2KwnvMjYdaoK0yPlHk13nNf58eR19H+hUOfCr/3fBM8a9NfDTbaStqkHdIvZP22dZpT8LkJzcT3u4VatjGGJKUdKlUzx7IoqI2YotMsuyPXtpAReVqOG38WEzaWUF0t1FG3r0BjTQo0JEoKTaA9MTaSpLMGPfUUd0Rx/e6t2l3m508wUFkUDw8P+da3eUjbYrSjQm+jO7vMz/OaG9cPLqaGbjZjXScpPOjtFlNuQ9GrFHCiV1hO04MMpF2GrM7zC3EaA3Gj/QTmNbI6LcEnlTg8TsX3rNzxZhk/cxGdtv1y6QtyGNv+Do5tD6e1k0F52qqrDKTDRfFwWGvC98l1nYg/tZhk6lYZ7HSyei1VkO1tSZ4rKDfaEX4lsR/+GRf2j2q65GdBH3vU76W02rXyBhl8xP30I6Bbddmx3wXMcHxlDEaeGL7gmW5KC9dvbiEDPQ7s43SIs+z4IN5nQT2frgGC/HbZF0wOh2H2uu6kPxx90eI00oO21GjVdd1/VpVT9w==",sidebar_class_name:"get api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},G=void 0,U={id:"superplatform/get-thread",title:"Get Thread",description:"Fetch information about a specific chat thread by its ID",source:"@site/docs/superplatform/get-thread.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/get-thread",permalink:"/docs/superplatform/get-thread",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-thread",title:"Get Thread",description:"Fetch information about a specific chat thread by its ID",sidebar_label:"Get Thread",hide_title:!0,hide_table_of_contents:!0,api:"eJylVt9v20YM/lcOfNoARUqTFRj0tGzrAm/FUszpU+KH84m2rj3dXY+UU8/Q/z5Qkh0lUYsVfbElHn985JEfdYAKySQb2QYPJfyBbGpl/SakRotM6XVoWWlFEY3dWKNMrVlxnVBXar1XlkktfocMQsTUmywqKGGLfNvrQAZRJ90gYyIo7w7PIg5agwsrgqi5hgy8bhBKGAItxE3CT61NWEHJqcUMyNTYaCgPwPsousTJ+i103UqUKQZPSHJ+cX4uf7OBK2RtHSlqjUGiTevcXiXkZHGHEtYEz+hZHOgYnTV9ksUHEi+HCYqYpARsh5j42RLTBN06BIfaQ5eNSb20MQk1Y3XFM0llYKtZMVt2OJOeiFXYKK5xvK4cshnzEK1ZVDTjYTxRFW6sR1IPtTW16g1o4lat0QW/JcUhv/e3w7HRXqXQbmu3V2vRlGcWPJoU6y2pTUijAxJglrGh+QQHgU5J7+W9jdVXqtQSptl03g8HPXBb0bE0oi+phR4yoWC1NKnY/wX2KAjrD2h4ViKyn+a6ceF32tlK/bm8+ftbmu556w8BXs2k73XLdUj232/r6rkAr+czYExeO7XEtMOk3qQU0vdF6jIgNG2yvO+Z41fUCdNVyzWUdysZc+kkKO/gNyGl5c7AKoMGuQ4jB/XsI+pQCG+d0c4Uw9UWhyO1dCBhBPPAT21yol+4YLSrA3H5+ueLy1cg8Y5wloJ6GNopqBcjtI+o7keVe1Cb4Fx4wJ44hVK1QaV9pTh8RK+0GQhObVJo+uaUnlUkBbUG1duwtV6hr2KwnvMjYdaoK0yPlHk13nNf58eR19H+hUOfCr/3fBM8a9NfDTbaStqkHdIvZP22dZpT8LkJzcT3u4VatjGGJKUdKlUzx7IoqI2YotMsuyPXtpAReVqOG38WEzaWUF0t1FG3r0BjTQo0JEoKTaA9MTaSpLMGPfUUd0Rx/e6t2l3m508wUFkUDw8P+da3eUjbYrSjQm+jO7vMz/OaG9cPLqaGbjZjXScpPOjtFlNuQ9GrFHCiV1hO04MMpF2GrM7zC3EaA3Gj/QTmNbI6LcEnlTg8TsX3rNzxZhk/cxGdtv1y6QtyGNv+Do5tD6e1k0F52qqrDKTDRfFwWGvC98l1nYg/tZhk6lYZ7HSyei1VkO1tSZ4rKDfaEX4lsR/+GRf2j2q65GdBH3vU76W02rXyBhl8xP30I6Bbddmx3wXMcHxlDEaeGL7gmW5KC9dvbiEDPQ7s43SIs+z4IN5nQT2frgGC/HbZF0wOh2H2uu6kPxx90eI00oO21GjVdd1/VpVT9w==",sidebar_class_name:"get api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delete a Thread",permalink:"/docs/superplatform/delete-thread"},next:{title:"Update Thread",permalink:"/docs/superplatform/update-thread"}},N={},T=[];function _(e){const s={p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Get Thread"}),"\n",(0,t.jsx)(d(),{method:"get",path:"/chat-svc/thread/{threadId}"}),"\n",(0,t.jsx)(s.p,{children:"Fetch information about a specific chat thread by its ID"}),"\n",(0,t.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(s.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(p(),{className:"paramsItem",param:{description:"Thread ID",in:"path",name:"threadId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsxs)(i(),{label:void 0,id:void 0,children:[(0,t.jsxs)(b.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Thread details successfully retrieved"})}),(0,t.jsx)("div",{children:(0,t.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(x(),{collapsible:!1,name:"exists",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,t.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsxs)("span",{className:"openapi-schema__container",children:[(0,t.jsx)("strong",{className:"openapi-schema__property",children:(0,t.jsx)(s.p,{children:"thread"})}),(0,t.jsx)("span",{className:"openapi-schema__name",children:(0,t.jsx)(s.p,{children:"object"})})]})}),(0,t.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(x(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Title of the thread.",type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"topicIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"TopicIds defines which topics the thread belongs to.\nTopics can roughly be thought of as tags for threads.",items:{type:"string"},type:"array"}}),(0,t.jsx)(x(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"userIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"UserIds the ids of the users who can see this thread.",items:{type:"string"},type:"array"}})]})]})})]})]})}),(0,t.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(j(),{responseExample:'{\n  "exists": true,\n  "thread": {\n    "createdAt": "string",\n    "id": "string",\n    "title": "string",\n    "topicIds": [\n      "string"\n    ],\n    "updatedAt": "string",\n    "userIds": [\n      "string"\n    ]\n  }\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(b.default,{label:"400",value:"400",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Invalid JSON"})}),(0,t.jsx)("div",{children:(0,t.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,t.jsx)(g(),{className:"openapi-tabs__schema",children:(0,t.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,t.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,t.jsxs)(b.default,{label:"401",value:"401",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Unauthorized"})}),(0,t.jsx)("div",{children:(0,t.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,t.jsx)(g(),{className:"openapi-tabs__schema",children:(0,t.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,t.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,t.jsxs)(b.default,{label:"500",value:"500",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Internal Server Error"})}),(0,t.jsx)("div",{children:(0,t.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,t.jsx)(g(),{className:"openapi-tabs__schema",children:(0,t.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,t.jsx)(s.p,{children:"string"})})})]})})})})})})]})]})})})]})}function k(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(_,{...e})}):_(e)}}}]);