import{_ as i,o as l,c as d,b as a,w as o,a as e,d as r,r as n}from"./app.92c486f4.js";const c={},h=e("h1",{id:"i-gallery-posts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#i-gallery-posts","aria-hidden":"true"},"#"),r(),e("code",null,"i/gallery/posts")],-1),m=e("p",null,"Credential required.",-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),_=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function f(y,x){const s=n("MkSchemaViewer"),t=n("ClientOnly");return l(),d("div",null,[h,m,p,a(t,null,{default:o(()=>[a(s,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]}})]),_:1}),_,a(t,null,{default:o(()=>[a(s,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"GalleryPost",$ref:"misskey://GalleryPost"}}})]),_:1}),u])}var k=i(c,[["render",f],["__file","posts.html.vue"]]);export{k as default};