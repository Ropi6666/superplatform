"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[5280],{490029:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>_,contentTitle:()=>v,default:()=>T,frontMatter:()=>g,metadata:()=>b,toc:()=>E});var l=a(474848),n=a(28453),i=a(891366),r=a.n(i),t=(a(206050),a(157742)),d=a.n(t),o=(a(567792),a(427362)),c=a.n(o),m=(a(336683),a(781124)),p=a.n(m),h=a(760674),x=a.n(h),j=a(323397),u=a.n(j),f=(a(626651),a(751107)),y=(a(377675),a(119365));const g={id:"delete-deployment",title:"Delete Deployment",description:"Delete a deployment.",sidebar_label:"Delete Deployment",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VU2P2zYQ/SvEnGXJyTZooVM3XaPYZlEHcfa08YGmxhITimRIyo4q6L8HQ1r+2HWK9pKLIUszfG/ezBsOUKEXTtogjYYS7lBhQMZZhVaZvkUdcsjAWHScQu4rKKGKQXfHCMjA4dcOfXhrqh7KAYTRgT6UA3BrlRQxufjsCWQALxpsOT1ZR0cHiZ7+nUAJZ4DQW4QSfHBS1zCOCUc6rKB8uoxeZ1O02XxGEWCk8KvFJeKefUicIR7rrdE+sXg9nycy57nLd5D997JeUBkz+OXasfd6x5Ws2F+r5d//B+BSN3TOuOuCXWfy6iWTR8270Bgn/8HqpzF5c12TgE5zxVbodujYIp75cyiNGXgUnZOhh/JpgLfIHbrbLjRQPq1HmjJee5q+NEVstRM0ey2Gxpy8ARlYTjlQpCmd+Z0oqnPH+FicjyidUxRaKCO4aowP5ZvfXt+8AsKb6KyovFTROann4n3sLbJPh5BPwLZGKbPHim16xpm3XCDjumLBfEHNuEh2YltnWhYaZI8eHfOkvBTIHkwtNUNdWSPTJpAE0iCvkFqieUsC3h4mJzYEjrpyK99hH5WmJn047YjFN95ahS89f+wOIW3NtEu4iG3HlktSynOF/ncvdd0pHpzRuTDtGZ3392zVWWscCZ3EbUKwZVEYi9o40eTG1QW82BBLPbMOW+mR3d4zq3jYGtdGwVopnPFJF89QGN/7gC1poqRA7WM1E4M/3z+w3U0+v8D3ZVHs9/u81l3EP+T5gtdWzW7yed6EVhGrgK71y+2hDSf6fs/rGl0uTRFDChJbBlISlhb10okGMqDBSgXN85t8PnMi/5WOtcaHluszohcr8TCZF5Kc7fIfXQ6Hbgf8FgqruNQEFaseDi6YdjW5IAIc0dYZ0LxTyDBsuMdHp8aRXn/t0JEH1xnsuJN8Q0U+rcdsmj4yzhfsoYQ/EsMZzT5Vz1WXxu/ZkhizKeNWCLThX2PPTX23eFh8XEAGm8P91pqKshzf093H91BCvCUpP1o0vhtAcV13vKbYdCp5gR+Me3IJkcqmB6pr+qT7M47PXZZKoV8q7GrKMCQPjuMxPn36YcbR2imamrkex/E73z/P6w==",sidebar_class_name:"delete api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},v=void 0,b={id:"openorch/delete-deployment",title:"Delete Deployment",description:"Delete a deployment.",source:"@site/docs/openorch/delete-deployment.api.mdx",sourceDirName:"openorch",slug:"/openorch/delete-deployment",permalink:"/docs/openorch/delete-deployment",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-deployment",title:"Delete Deployment",description:"Delete a deployment.",sidebar_label:"Delete Deployment",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VU2P2zYQ/SvEnGXJyTZooVM3XaPYZlEHcfa08YGmxhITimRIyo4q6L8HQ1r+2HWK9pKLIUszfG/ezBsOUKEXTtogjYYS7lBhQMZZhVaZvkUdcsjAWHScQu4rKKGKQXfHCMjA4dcOfXhrqh7KAYTRgT6UA3BrlRQxufjsCWQALxpsOT1ZR0cHiZ7+nUAJZ4DQW4QSfHBS1zCOCUc6rKB8uoxeZ1O02XxGEWCk8KvFJeKefUicIR7rrdE+sXg9nycy57nLd5D997JeUBkz+OXasfd6x5Ws2F+r5d//B+BSN3TOuOuCXWfy6iWTR8270Bgn/8HqpzF5c12TgE5zxVbodujYIp75cyiNGXgUnZOhh/JpgLfIHbrbLjRQPq1HmjJee5q+NEVstRM0ey2Gxpy8ARlYTjlQpCmd+Z0oqnPH+FicjyidUxRaKCO4aowP5ZvfXt+8AsKb6KyovFTROann4n3sLbJPh5BPwLZGKbPHim16xpm3XCDjumLBfEHNuEh2YltnWhYaZI8eHfOkvBTIHkwtNUNdWSPTJpAE0iCvkFqieUsC3h4mJzYEjrpyK99hH5WmJn047YjFN95ahS89f+wOIW3NtEu4iG3HlktSynOF/ncvdd0pHpzRuTDtGZ3392zVWWscCZ3EbUKwZVEYi9o40eTG1QW82BBLPbMOW+mR3d4zq3jYGtdGwVopnPFJF89QGN/7gC1poqRA7WM1E4M/3z+w3U0+v8D3ZVHs9/u81l3EP+T5gtdWzW7yed6EVhGrgK71y+2hDSf6fs/rGl0uTRFDChJbBlISlhb10okGMqDBSgXN85t8PnMi/5WOtcaHluszohcr8TCZF5Kc7fIfXQ6Hbgf8FgqruNQEFaseDi6YdjW5IAIc0dYZ0LxTyDBsuMdHp8aRXn/t0JEH1xnsuJN8Q0U+rcdsmj4yzhfsoYQ/EsMZzT5Vz1WXxu/ZkhizKeNWCLThX2PPTX23eFh8XEAGm8P91pqKshzf093H91BCvCUpP1o0vhtAcV13vKbYdCp5gR+Me3IJkcqmB6pr+qT7M47PXZZKoV8q7GrKMCQPjuMxPn36YcbR2imamrkex/E73z/P6w==",sidebar_class_name:"delete api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Save Config",permalink:"/docs/openorch/save-config"},next:{title:"Save Deployment",permalink:"/docs/openorch/save-deployment"}},_={},E=[];function N(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Delete Deployment"}),"\n",(0,l.jsx)(d(),{method:"delete",path:"/deploy-svc/deployment"}),"\n",(0,l.jsx)(s.p,{children:"Delete a deployment."}),"\n",(0,l.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsx)(c(),{className:"openapi-tabs__mime",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json-schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,l.jsx)(s.p,{children:"Body"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,l.jsx)(s.p,{children:"Delete Deploys Request"})})}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(x(),{collapsible:!1,name:"deploymentId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})})}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(r(),{label:void 0,id:void 0,children:[(0,l.jsxs)(y.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"OK"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"object"})})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(p(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Invalid JSON"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"401",value:"401",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Unauthorized"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function T(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(N,{...e})}):N(e)}}}]);