import{_ as i,o as d,c as l,b as a,w as n,a as e,d as r,r as o}from"./app.92c486f4.js";const c={},m=e("h1",{id:"users-recommendation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#users-recommendation","aria-hidden":"true"},"#"),r(),e("code",null,"users/recommendation")],-1),h=e("p",null,"Credential required.",-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function p(x,b){const t=o("MkSchemaViewer"),s=o("ClientOnly");return d(),l("div",null,[m,h,_,a(s,null,{default:n(()=>[a(t,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},offset:{type:"integer",default:0}},required:[]}})]),_:1}),u,a(s,null,{default:n(()=>[a(t,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"UserDetailed",$ref:"misskey://UserDetailed"}}})]),_:1}),f])}var k=i(c,[["render",p],["__file","recommendation.html.vue"]]);export{k as default};