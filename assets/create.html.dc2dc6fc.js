import{_ as i,o as c,c as l,b as a,w as s,a as e,d as r,r as o}from"./app.92c486f4.js";const d={},h=e("h1",{id:"clips-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#clips-create","aria-hidden":"true"},"#"),r(),e("code",null,"clips/create")],-1),_=e("p",null,"Credential required.",-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function f(b,x){const t=o("MkSchemaViewer"),n=o("ClientOnly");return c(),l("div",null,[h,_,p,a(n,null,{default:s(()=>[a(t,{schema:{type:"object",properties:{name:{type:"string",minLength:1,maxLength:100},isPublic:{type:"boolean",default:!1},description:{type:"string",nullable:!0,minLength:1,maxLength:2048}},required:["name"]}})]),_:1}),m,a(n,null,{default:s(()=>[a(t,{schema:{type:"object",optional:!1,nullable:!1,ref:"Clip",$ref:"misskey://Clip"}})]),_:1}),u])}var C=i(d,[["render",f],["__file","create.html.vue"]]);export{C as default};