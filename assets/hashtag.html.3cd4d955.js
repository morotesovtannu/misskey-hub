import{_ as h,o as i,c,b as a,w as n,a as e,d as r,r as o}from"./app.92c486f4.js";const d={},l=e("h1",{id:"charts-hashtag",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#charts-hashtag","aria-hidden":"true"},"#"),r(),e("code",null,"charts/hashtag")],-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),p=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function _(f,y){const t=o("MkSchemaViewer"),s=o("ClientOnly");return i(),c("div",null,[l,u,a(s,null,{default:n(()=>[a(t,{schema:{type:"object",properties:{span:{type:"string",enum:["day","hour"]},limit:{type:"integer",minimum:1,maximum:500,default:30},offset:{type:"integer",nullable:!0,default:null},tag:{type:"string"}},required:["span","tag"]}})]),_:1}),m,a(s,null,{default:n(()=>[a(t,{schema:{type:"object",properties:{"local.users":{type:"array",items:{type:"number"}},"remote.users":{type:"array",items:{type:"number"}}},required:["local.users","remote.users"]}},null,8,["schema"])]),_:1}),p])}var b=h(d,[["render",_],["__file","hashtag.html.vue"]]);export{b as default};