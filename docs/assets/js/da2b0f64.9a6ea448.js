"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[9886],{65831:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>V,contentTitle:()=>N,default:()=>J,frontMatter:()=>v,metadata:()=>k,toc:()=>_});var a=i(74848),l=i(28453),n=i(91366),r=i.n(n),d=(i(6050),i(57742)),o=i.n(d),t=(i(67792),i(27362)),m=i.n(t),c=i(36683),p=i.n(c),x=i(81124),h=i.n(x),j=i(60674),u=i.n(j),f=i(23397),g=i.n(f),b=(i(26651),i(51107)),y=(i(77675),i(19365));const v={id:"add-permission-to-role",title:"Add Permission to Role",description:"Adds a specific permission to a role identified by roleId.",sidebar_label:"Add Permission to Role",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVVGP2zYM/isCnzZAtdO7FRj8tBs2DEELNGjunu4ClGcztlpZUiU5WWbovxe0kzjJpQPah+0lsSSK/PjxI9VDRaH0ykVlDRRwV1VBoAiOSrVWpXDkWxWCskZEK1B4q0moikxUa0WVeN4NW/MqezJP5gN96ZSnIGJD4mMXyL8Km7KYnBQYgqrNxxO/GUiwjjwygnkFBWBVLY7H9/aD1QQSHHpsKZIPUDz2F7DZRsz/AAmKlw5jAxIMtgQFjABBgh/hVVBE35GEUDbUIhQ9xJ1jyxC9MjWkJC8DTIC+GWZK6TuDrdg4OGsCBT6/mc347xzA+7cgobQmkol8is5pVQ6k5Z8Cm/QvQ9jnT1RGSCklCb/MXr90+2Cwi4316h+qvieA81yzqEbE5L31V3m8iuTNtQTnJpI3qMWS/Ia8+HPw+d9AShIClZ1XcTeI63dCT/6uiw0UjysuUMSadQcPgbxYbkpYSWgpNpYF67o4CJTNIT/IPmfd5f2ovpRP8sj7U6kk4OCc8ijszmv2kmtbom5siMWbX29uXwOjOIBcctJjnqdQLym93zkST3uTJxBrq7Xdjl3LPY4lCTSViPYzGYHlKFix9rYdOnhINnA9VEnina2VEWQqZ5WJ2aEJGsKK/NQGd3s9DWWCI9vo1FvaDfwrs7YMliuL5VBZalFx2gE1hd+CMnWnMXprstK2J74Xc7HsnLOeCR+ZamJ0RZ6HzpF3GuPa+jZDlUOSl7NtLlo0WFNLJg6JV7Qhbd2wPt4FCVqVZAIxskPkvxbvxOY2m53FDUWeb7fbrDZdZn2d7++FHGunX91ms6yJrWYkkXwb3q/3XJ7A3mJdk8+UzQeTnBlTUbPJcqIBJLBAxjxm2Q27dDbEFs0pyKoSi7OBvZ+dZzz0U0v9T+N+L4lIf8fcaVSG0xlY7fdd9AgHbzxJxySK4xyfvPH22dxdSeCeYQ99/4yBHrxOibe/dOS5u1cSNugVPjPH/JCowN8VFGvUgf6FrJ/2+VY/i+m9uZrLQfNmx4VD3fEKJHym3fQeDY/MjwS/fIt+AMIZZ2mV5KGNmZHR5K4sycWTyy+mbzqdgYuHe5CA+zk0NT07k4cP9n4V2OXQGCHwL7N09UrfjyMlpaP9ePTNG8dJNVozT6uU0lffpRvx",sidebar_class_name:"put api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},N=void 0,k={id:"singulatron/add-permission-to-role",title:"Add Permission to Role",description:"Adds a specific permission to a role identified by roleId.",source:"@site/docs/singulatron/add-permission-to-role.api.mdx",sourceDirName:"singulatron",slug:"/singulatron/add-permission-to-role",permalink:"/docs/singulatron/add-permission-to-role",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-permission-to-role",title:"Add Permission to Role",description:"Adds a specific permission to a role identified by roleId.",sidebar_label:"Add Permission to Role",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVVGP2zYM/isCnzZAtdO7FRj8tBs2DEELNGjunu4ClGcztlpZUiU5WWbovxe0kzjJpQPah+0lsSSK/PjxI9VDRaH0ykVlDRRwV1VBoAiOSrVWpXDkWxWCskZEK1B4q0moikxUa0WVeN4NW/MqezJP5gN96ZSnIGJD4mMXyL8Km7KYnBQYgqrNxxO/GUiwjjwygnkFBWBVLY7H9/aD1QQSHHpsKZIPUDz2F7DZRsz/AAmKlw5jAxIMtgQFjABBgh/hVVBE35GEUDbUIhQ9xJ1jyxC9MjWkJC8DTIC+GWZK6TuDrdg4OGsCBT6/mc347xzA+7cgobQmkol8is5pVQ6k5Z8Cm/QvQ9jnT1RGSCklCb/MXr90+2Cwi4316h+qvieA81yzqEbE5L31V3m8iuTNtQTnJpI3qMWS/Ia8+HPw+d9AShIClZ1XcTeI63dCT/6uiw0UjysuUMSadQcPgbxYbkpYSWgpNpYF67o4CJTNIT/IPmfd5f2ovpRP8sj7U6kk4OCc8ijszmv2kmtbom5siMWbX29uXwOjOIBcctJjnqdQLym93zkST3uTJxBrq7Xdjl3LPY4lCTSViPYzGYHlKFix9rYdOnhINnA9VEnina2VEWQqZ5WJ2aEJGsKK/NQGd3s9DWWCI9vo1FvaDfwrs7YMliuL5VBZalFx2gE1hd+CMnWnMXprstK2J74Xc7HsnLOeCR+ZamJ0RZ6HzpF3GuPa+jZDlUOSl7NtLlo0WFNLJg6JV7Qhbd2wPt4FCVqVZAIxskPkvxbvxOY2m53FDUWeb7fbrDZdZn2d7++FHGunX91ms6yJrWYkkXwb3q/3XJ7A3mJdk8+UzQeTnBlTUbPJcqIBJLBAxjxm2Q27dDbEFs0pyKoSi7OBvZ+dZzz0U0v9T+N+L4lIf8fcaVSG0xlY7fdd9AgHbzxJxySK4xyfvPH22dxdSeCeYQ99/4yBHrxOibe/dOS5u1cSNugVPjPH/JCowN8VFGvUgf6FrJ/2+VY/i+m9uZrLQfNmx4VD3fEKJHym3fQeDY/MjwS/fIt+AMIZZ2mV5KGNmZHR5K4sycWTyy+mbzqdgYuHe5CA+zk0NT07k4cP9n4V2OXQGCHwL7N09UrfjyMlpaP9ePTNG8dJNVozT6uU0lffpRvx",sidebar_class_name:"put api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delete a Role",permalink:"/docs/singulatron/delete-role"},next:{title:"Get Permissions by Role",permalink:"/docs/singulatron/get-permissions-by-role"}},V={},_=[];function I(e){const s={code:"code",p:"p",...(0,l.R)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Add Permission to Role"}),"\n",(0,a.jsx)(o(),{method:"put",path:"/user-svc/role/{roleId}/permission/{permissionId}"}),"\n",(0,a.jsx)(s.p,{children:"Adds a specific permission to a role identified by roleId."}),"\n",(0,a.jsxs)(s.p,{children:["Requires the ",(0,a.jsx)(s.code,{children:"user-svc:permission:assign"})," permission."]}),"\n",(0,a.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)(p(),{className:"paramsItem",param:{description:"Role ID",in:"path",name:"roleId",required:!0,schema:{type:"string"}}}),(0,a.jsx)(p(),{className:"paramsItem",param:{description:"Permission ID",in:"path",name:"permissionId",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsxs)(r(),{label:void 0,id:void 0,children:[(0,a.jsxs)(y.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,a.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"object"})})})]})}),(0,a.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(h(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,a.jsxs)(y.default,{label:"401",value:"401",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"Unauthorized"})}),(0,a.jsx)("div",{children:(0,a.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,a.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,a.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(h(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,a.jsxs)(y.default,{label:"500",value:"500",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"Internal Server Error"})}),(0,a.jsx)("div",{children:(0,a.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,a.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,a.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(h(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function J(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(I,{...e})}):I(e)}}}]);