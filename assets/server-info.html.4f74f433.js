import{_ as n,o as i,c as p,b as a,w as s,a as e,d as l,r as o}from"./app.92c486f4.js";const f={},d=e("h1",{id:"admin-server-info",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-server-info","aria-hidden":"true"},"#"),l(),e("code",null,"admin/server-info")],-1),c=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),l(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),l(" Response")],-1),m=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),l(" Errors")],-1);function b(_,y){const t=o("MkSchemaViewer"),r=o("ClientOnly");return i(),p("div",null,[d,c,u,a(r,null,{default:s(()=>[a(t,{schema:{type:"object",properties:{},required:[]}})]),_:1}),h,a(r,null,{default:s(()=>[a(t,{schema:{type:"object",optional:!1,nullable:!1,properties:{machine:{type:"string",optional:!1,nullable:!1},os:{type:"string",optional:!1,nullable:!1,example:"linux"},node:{type:"string",optional:!1,nullable:!1},psql:{type:"string",optional:!1,nullable:!1},cpu:{type:"object",optional:!1,nullable:!1,properties:{model:{type:"string",optional:!1,nullable:!1},cores:{type:"number",optional:!1,nullable:!1}},required:["model","cores"]},mem:{type:"object",optional:!1,nullable:!1,properties:{total:{type:"number",optional:!1,nullable:!1,format:"bytes"}},required:["total"]},fs:{type:"object",optional:!1,nullable:!1,properties:{total:{type:"number",optional:!1,nullable:!1,format:"bytes"},used:{type:"number",optional:!1,nullable:!1,format:"bytes"}},required:["total","used"]},net:{type:"object",optional:!1,nullable:!1,properties:{interface:{type:"string",optional:!1,nullable:!1,example:"eth0"}},required:["interface"]}},required:["machine","os","node","psql","cpu","mem","fs","net"]}})]),_:1}),m])}var q=n(f,[["render",b],["__file","server-info.html.vue"]]);export{q as default};