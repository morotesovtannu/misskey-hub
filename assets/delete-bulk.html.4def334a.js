import{_ as o,o as i,c as l,b as r,w as n,a as e,d as a,r as d}from"./app.92c486f4.js";const c={},h=e("h1",{id:"admin-emoji-delete-bulk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-emoji-delete-bulk","aria-hidden":"true"},"#"),a(),e("code",null,"admin/emoji/delete-bulk")],-1),_=e("p",null,"Credential required.",-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),p=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function f(b,k){const t=d("MkSchemaViewer"),s=d("ClientOnly");return i(),l("div",null,[h,_,m,r(s,null,{default:n(()=>[r(t,{schema:{type:"object",properties:{ids:{type:"array",items:{type:"string",format:"misskey:id"}}},required:["ids"]}})]),_:1}),u,r(s,null,{default:n(()=>[r(t,{schema:{}})]),_:1}),p])}var y=o(c,[["render",f],["__file","delete-bulk.html.vue"]]);export{y as default};