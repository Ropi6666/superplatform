"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[4762],{386399:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>q,contentTitle:()=>N,default:()=>C,frontMatter:()=>v,metadata:()=>_,toc:()=>S});var i=a(474848),t=a(28453),r=a(891366),n=a.n(r),l=(a(206050),a(157742)),d=a.n(l),c=(a(567792),a(427362)),o=a.n(c),m=a(336683),p=a.n(m),h=a(781124),j=a.n(h),g=a(760674),x=a.n(g),u=a(323397),f=a.n(u),y=(a(626651),a(751107)),b=(a(377675),a(119365));const v={id:"get-messages",title:"List Messages",description:"Fetch messages (and associated assets) for a specific chat thread.",sidebar_label:"List Messages",hide_title:!0,hide_table_of_contents:!0,api:"eJytVktz2zYQ/isYXJrM0KQTJ21Hl9ZNm1aNW3tq+2TrAINLEQkIILugVFXD/95ZPiTaou3xtBcJBBb7fbvY11bmQBpNiMY7OZMfIepSVECklkDilXK5UEReGxWhXUKk16LwKJSgANoURgtdqihiiaDyVCbSB0DFCue5nMklxD96fTKRQaGqIAKSnN1sH6BftSrE/GeZSMMbQcVSJtKpCuRMdgjzXCYS4WttEHI5i1hDIkmXUCk528q4CSxLEY1byqZZsDAF7wiIz98eH/PffeCBoOjthUiCaq2BqKit3QiEiAZWwNjauwgushYVgjW6tTX7TKxqO6ISkD0RTQfcqeWViVDRocBI7312H7oDYUjEEsSdIvj2nQCnfQ65uDNO4UYUxoLIDYK2GwHVHeR8aFx7pcUWJhLYQiYPfZRIjcDvexonPJjcZzNxbvLJ7W5j4qAO+RNoNdpDF1yjFb4Y2bIuAeHQlB2s9HefQcc9D6kQ1Ya/h+h+4ilajHlOh0RO+xORQ2EcdC+iYlS6rMDF7rtHEKUizocdyCMu2lN7NgR6HwwAsEzFrfzNJGJdqvgNiTr8cCtf/sKPveCQcAd8rvqTB4TSKehnnpsApxCu2/0h5s0OieXFuvRijT7CPfBb99GjOJ3v61csDYnCgG0VQRXiZoLi80FzKNHw3rupWjJ3K2VNLn6/PP/zJdXiIakO4M2EZ5yqY+nR/POycjQF8H7aggjolBWXgCtA8Quix/+G1CSSQNdo4qat+z+BQsDTOpZydrPgIh3VkluC/MC95HKl5YIzNZaee0jwFNvmwfIy435zRCuddQGabYdAbbJq32qoZd/1mbaoyCyzXitbeoqz99+/PXkjGXkgdsn8u/wf0zsI/U0AcduL3EpReGv9mgvxpu2JSkPbRqL/Ak4o3TUqUaCv2mjlwBbErjUaxJlfGifA5cEbF9Oh8ZWgcsB96zvtX7z1+D6CVTCfoItP4wo/dBGl20eCShk2m5QF+pGMW9ZWRfQu1b4a6b6Yi8s6BI/s485TZYxhlmU+gPOoy9TjMjtoBfLcHQWEyhBw1gWrYuGxaq2vjEZPnZEkQHvaUISKDbRGg6O2NQwMfr04E6uT9PgePs2ybL1ep0tXt/j9PcrUMtijk/Q4LWNl22QFrOi86H26p09rtVwCpsZnrUjGnjPRssh5AHeOmscLjpLOoOP0JD0+Qp1+x2o56irlRkTPDEUxmmYedMZdgvw/c1T/yBH+jlmwyrhRe+xS4UYOqSCHai0TORsNSrt8WCSS457vbLc8QlyjbRre/loDclYuErlSaNQd+4dnM0O8zuWsUJbgCWtf/dWPY6/FeISb5D9Ertuw55Wt+Usm8gtsxiNes2iSIQuYTHd8qjWEOLp4UIeacdm4OL+8kolUfR7vk4a1JcOC1U+yeph0HQf+bZJHrmy3XUo2zU6+O3r0xi7TO2l20qJpmn8BVqn82g==",sidebar_class_name:"post api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},N=void 0,_={id:"superplatform/get-messages",title:"List Messages",description:"Fetch messages (and associated assets) for a specific chat thread.",source:"@site/docs/superplatform/get-messages.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/get-messages",permalink:"/docs/superplatform/get-messages",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-messages",title:"List Messages",description:"Fetch messages (and associated assets) for a specific chat thread.",sidebar_label:"List Messages",hide_title:!0,hide_table_of_contents:!0,api:"eJytVktz2zYQ/isYXJrM0KQTJ21Hl9ZNm1aNW3tq+2TrAINLEQkIILugVFXD/95ZPiTaou3xtBcJBBb7fbvY11bmQBpNiMY7OZMfIepSVECklkDilXK5UEReGxWhXUKk16LwKJSgANoURgtdqihiiaDyVCbSB0DFCue5nMklxD96fTKRQaGqIAKSnN1sH6BftSrE/GeZSMMbQcVSJtKpCuRMdgjzXCYS4WttEHI5i1hDIkmXUCk528q4CSxLEY1byqZZsDAF7wiIz98eH/PffeCBoOjthUiCaq2BqKit3QiEiAZWwNjauwgushYVgjW6tTX7TKxqO6ISkD0RTQfcqeWViVDRocBI7312H7oDYUjEEsSdIvj2nQCnfQ65uDNO4UYUxoLIDYK2GwHVHeR8aFx7pcUWJhLYQiYPfZRIjcDvexonPJjcZzNxbvLJ7W5j4qAO+RNoNdpDF1yjFb4Y2bIuAeHQlB2s9HefQcc9D6kQ1Ya/h+h+4ilajHlOh0RO+xORQ2EcdC+iYlS6rMDF7rtHEKUizocdyCMu2lN7NgR6HwwAsEzFrfzNJGJdqvgNiTr8cCtf/sKPveCQcAd8rvqTB4TSKehnnpsApxCu2/0h5s0OieXFuvRijT7CPfBb99GjOJ3v61csDYnCgG0VQRXiZoLi80FzKNHw3rupWjJ3K2VNLn6/PP/zJdXiIakO4M2EZ5yqY+nR/POycjQF8H7aggjolBWXgCtA8Quix/+G1CSSQNdo4qat+z+BQsDTOpZydrPgIh3VkluC/MC95HKl5YIzNZaee0jwFNvmwfIy435zRCuddQGabYdAbbJq32qoZd/1mbaoyCyzXitbeoqz99+/PXkjGXkgdsn8u/wf0zsI/U0AcduL3EpReGv9mgvxpu2JSkPbRqL/Ak4o3TUqUaCv2mjlwBbErjUaxJlfGifA5cEbF9Oh8ZWgcsB96zvtX7z1+D6CVTCfoItP4wo/dBGl20eCShk2m5QF+pGMW9ZWRfQu1b4a6b6Yi8s6BI/s485TZYxhlmU+gPOoy9TjMjtoBfLcHQWEyhBw1gWrYuGxaq2vjEZPnZEkQHvaUISKDbRGg6O2NQwMfr04E6uT9PgePs2ybL1ep0tXt/j9PcrUMtijk/Q4LWNl22QFrOi86H26p09rtVwCpsZnrUjGnjPRssh5AHeOmscLjpLOoOP0JD0+Qp1+x2o56irlRkTPDEUxmmYedMZdgvw/c1T/yBH+jlmwyrhRe+xS4UYOqSCHai0TORsNSrt8WCSS457vbLc8QlyjbRre/loDclYuErlSaNQd+4dnM0O8zuWsUJbgCWtf/dWPY6/FeISb5D9Ertuw55Wt+Usm8gtsxiNes2iSIQuYTHd8qjWEOLp4UIeacdm4OL+8kolUfR7vk4a1JcOC1U+yeph0HQf+bZJHrmy3XUo2zU6+O3r0xi7TO2l20qJpmn8BVqn82g==",sidebar_class_name:"post api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Get Docker Service Information",permalink:"/docs/superplatform/get-info"},next:{title:"Get Model Status",permalink:"/docs/superplatform/get-model-status"}},q={},S=[];function I(e){const s={p:"p",...(0,t.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"List Messages"}),"\n",(0,i.jsx)(d(),{method:"post",path:"/chat-svc/thread/{threadId}/messages"}),"\n",(0,i.jsx)(s.p,{children:"Fetch messages (and associated assets) for a specific chat thread."}),"\n",(0,i.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{description:"Thread ID",in:"path",name:"threadId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(b.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Messages and assets successfully retrieved"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"assets"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(x(),{collapsible:!1,name:"content",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Content is the base64 encoded binary file direcly embedded in the asset itself",type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Url of the asset where",type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"messages"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(x(),{collapsible:!1,name:"assetIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"AssetIds defines the attachments the message has.",items:{type:"string"},type:"array"}}),(0,i.jsx)(x(),{collapsible:!1,name:"content",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:'Content of the message eg. "Hi, what\'s up?"',type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"threadId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"ThreadId of the message.",type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"userId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"UserId is the id of the user who wrote the message.\nFor AI messages this field is empty.",type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(j(),{responseExample:'{\n  "assets": [\n    {\n      "content": "string",\n      "createdAt": "string",\n      "description": "string",\n      "id": "string",\n      "type": "string",\n      "updatedAt": "string",\n      "url": "string"\n    }\n  ],\n  "messages": [\n    {\n      "assetIds": [\n        "string"\n      ],\n      "content": "string",\n      "createdAt": "string",\n      "id": "string",\n      "threadId": "string",\n      "updatedAt": "string",\n      "userId": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Invalid JSON"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(b.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(b.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]})]})})})]})}function C(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(I,{...e})}):I(e)}}}]);