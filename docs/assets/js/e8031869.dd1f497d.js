"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[8523],{413390:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>N,contentTitle:()=>v,default:()=>q,frontMatter:()=>b,metadata:()=>y,toc:()=>_});var i=s(474848),l=s(28453),n=s(891366),r=s.n(n),t=(s(206050),s(157742)),o=s.n(t),d=(s(567792),s(427362)),c=s.n(d),m=(s(336683),s(781124)),p=s.n(m),h=s(760674),j=s.n(h),u=s(323397),x=s.n(u),g=(s(626651),s(751107)),f=(s(377675),s(119365));const b={id:"build-image",title:"Build an Image",description:"Builds a Docker image with the specified parameters.",sidebar_label:"Build an Image",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vl1v2zYU/SsEn2XJbVZs0NOStRi8FnWQNE+OgV5T1xIbimRIyo5n6L8Pl5Jiy3aH7SUvAUPdj3M/zqH3vEAvnLRBGs1zftNIVXgG7KMRT+iYrKFEtpWhYqFC5i0KuZZYMAsOagzofPqoH/UdPjfSoY9W34voPPEbkccA+YrCfmcWXS29l0anPOHGogPKOyt4zqPJjKx5wh0+N+jDjSl2PN9zYXRAHegI1iopolv2wxPmPfeiwhroZB0FDRL9q9tLuIVQ0b/jSv84fGSyw62MAMUs3QQTbyIo1sfhCccXqK1CnnMqIOwsHX1wUpe8TXhX91oqvJzz4+j7z9Me7EY5R9dnyTXUeJ7yK9Q4JCILZtbx3A02mK7EURpdSv2SKwjow3mitpuOdFjwfDHqcY9h+epjVj9QBN6S04U9Y3Hc7K4bNj8OHFyDMZO3RvtunO+n0/P65p958t/34wxXm/BfLoWd6Q0oWbC/7udf/0+C8QKic8Yd5T3q4WUk786RPGhoQmWc/BuLN0Py4XJPAjoNit2j26Bjn2LMt4HUJtyjaJwMO54v9vwGwaG7bohli2VLKwelp4Xshet+I2gRawyVIXmxDS2YjbTk2UGgMtlLjo9F+Ri9cYqsssjMyviQf/jt/dU7TnkGGPdUVlfJMZjTpn3bWWSPvckjZ2ujlNliwVY7BsxbEMhAFyyYJ9QMREcAtnamjjx98OiYp45LgeyLKaVmqAtrpA6kQZKSVAgFuoF/Ob/uNyYO4kBhsPIz7mKHaTh3B5H9NJD/RDSjzJ2q2liH+pQj0WgJ19oM4UDE5cAaJPXVg0L/u5e6bBQEZ3QqTH0E/nbG7htrjaOJdaOoQrB5lhmL2jhRpcaVGT8TlbmeWIe19MiuZ8wqCGvj6tjeWgpnfNdFz1AYv/MBaypPSYHax9oHBH/efmGbq3Q6yu/zLNtut2mpm5i/9/MZlFZNrtJpWoVaEaqArvbzdT+0A3y/hbJEl0qTRZOMRiNDFN25RT13gkSU1rAraJpepdOJE+mvFNYaH2rQR0A7FQXNhndz1I+jd/NN3/V+22iLMqtAagIf+7jvCbjgh0i0wxH9MuFENfq636/A44NTbUvXzw06ov0y4RtwElbUscWyTYbFJ84+4W541XWYEO2olaCabvNPdKlNBo9rIdCGf7U91pHbh2884av+h0ltCnJxsKXXC7Y85/GHDTlHaYh3e65Alw0VmfMuJHEQesE4sJMQJcOBiho+6d0RwFN2d3XQX6rqost+33G/bV/tu08/9XiVlM6ahrhs2/YfZqaGCA==",sidebar_class_name:"put api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},v=void 0,y={id:"openorch/build-image",title:"Build an Image",description:"Builds a Docker image with the specified parameters.",source:"@site/docs/openorch/build-image.api.mdx",sourceDirName:"openorch",slug:"/openorch/build-image",permalink:"/docs/openorch/build-image",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"build-image",title:"Build an Image",description:"Builds a Docker image with the specified parameters.",sidebar_label:"Build an Image",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vl1v2zYU/SsEn2XJbVZs0NOStRi8FnWQNE+OgV5T1xIbimRIyo5n6L8Pl5Jiy3aH7SUvAUPdj3M/zqH3vEAvnLRBGs1zftNIVXgG7KMRT+iYrKFEtpWhYqFC5i0KuZZYMAsOagzofPqoH/UdPjfSoY9W34voPPEbkccA+YrCfmcWXS29l0anPOHGogPKOyt4zqPJjKx5wh0+N+jDjSl2PN9zYXRAHegI1iopolv2wxPmPfeiwhroZB0FDRL9q9tLuIVQ0b/jSv84fGSyw62MAMUs3QQTbyIo1sfhCccXqK1CnnMqIOwsHX1wUpe8TXhX91oqvJzz4+j7z9Me7EY5R9dnyTXUeJ7yK9Q4JCILZtbx3A02mK7EURpdSv2SKwjow3mitpuOdFjwfDHqcY9h+epjVj9QBN6S04U9Y3Hc7K4bNj8OHFyDMZO3RvtunO+n0/P65p958t/34wxXm/BfLoWd6Q0oWbC/7udf/0+C8QKic8Yd5T3q4WUk786RPGhoQmWc/BuLN0Py4XJPAjoNit2j26Bjn2LMt4HUJtyjaJwMO54v9vwGwaG7bohli2VLKwelp4Xshet+I2gRawyVIXmxDS2YjbTk2UGgMtlLjo9F+Ri9cYqsssjMyviQf/jt/dU7TnkGGPdUVlfJMZjTpn3bWWSPvckjZ2ujlNliwVY7BsxbEMhAFyyYJ9QMREcAtnamjjx98OiYp45LgeyLKaVmqAtrpA6kQZKSVAgFuoF/Ob/uNyYO4kBhsPIz7mKHaTh3B5H9NJD/RDSjzJ2q2liH+pQj0WgJ19oM4UDE5cAaJPXVg0L/u5e6bBQEZ3QqTH0E/nbG7htrjaOJdaOoQrB5lhmL2jhRpcaVGT8TlbmeWIe19MiuZ8wqCGvj6tjeWgpnfNdFz1AYv/MBaypPSYHax9oHBH/efmGbq3Q6yu/zLNtut2mpm5i/9/MZlFZNrtJpWoVaEaqArvbzdT+0A3y/hbJEl0qTRZOMRiNDFN25RT13gkSU1rAraJpepdOJE+mvFNYaH2rQR0A7FQXNhndz1I+jd/NN3/V+22iLMqtAagIf+7jvCbjgh0i0wxH9MuFENfq636/A44NTbUvXzw06ov0y4RtwElbUscWyTYbFJ84+4W541XWYEO2olaCabvNPdKlNBo9rIdCGf7U91pHbh2884av+h0ltCnJxsKXXC7Y85/GHDTlHaYh3e65Alw0VmfMuJHEQesE4sJMQJcOBiho+6d0RwFN2d3XQX6rqost+33G/bV/tu08/9XiVlM6ahrhs2/YfZqaGCA==",sidebar_class_name:"put api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Docker Host",permalink:"/docs/openorch/get-host"},next:{title:"Get Docker Service Information",permalink:"/docs/openorch/get-info"}},N={},_=[];function w(e){const a={code:"code",p:"p",...(0,l.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Build an Image"}),"\n",(0,i.jsx)(o(),{method:"put",path:"/docker-svc/image"}),"\n",(0,i.jsx)(a.p,{children:"Builds a Docker image with the specified parameters."}),"\n",(0,i.jsxs)(a.p,{children:["Requires the ",(0,i.jsx)(a.code,{children:"docker-svc:image:build"})," permission."]}),"\n",(0,i.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(c(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(a.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(a.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(a.p,{children:"Build Image Request"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"contextPath",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"ContextPath is the local path to the build context",example:".",type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"dockerfilePath",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"DockerfilePath is the local path to the Dockerfile",example:"Dockerfile",type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name is the name of the image to build",example:"nginx:latest",type:"string"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(r(),{label:void 0,id:void 0,children:[(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(a.p,{children:"object"})})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Invalid JSON"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function q(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}}}]);