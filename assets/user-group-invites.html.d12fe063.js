import{_ as n,o as l,c as d,b as r,w as i,a as e,d as a,r as o}from"./app.92c486f4.js";const c={},u=e("h1",{id:"i-user-group-invites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#i-user-group-invites","aria-hidden":"true"},"#"),a(),e("code",null,"i/user-group-invites")],-1),p=e("p",null,"Credential required.",-1),h=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function f(y,b){const s=o("MkSchemaViewer"),t=o("ClientOnly");return l(),d("div",null,[u,p,h,r(t,null,{default:i(()=>[r(s,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]}})]),_:1}),m,r(t,null,{default:i(()=>[r(s,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,properties:{id:{type:"string",optional:!1,nullable:!1,format:"id"},group:{type:"object",optional:!1,nullable:!1,ref:"UserGroup",$ref:"misskey://UserGroup"}},required:["id","group"]}}})]),_:1}),_])}var x=n(c,[["render",f],["__file","user-group-invites.html.vue"]]);export{x as default};