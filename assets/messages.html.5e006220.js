import{_ as n,o,c,b as a,w as d,a as e,d as s,e as h,r as i}from"./app.92c486f4.js";const l={},u=e("h1",{id:"messaging-messages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#messaging-messages","aria-hidden":"true"},"#"),s(),e("code",null,"messaging/messages")],-1),m=e("p",null,"Credential required.",-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),s(" Parameters")],-1),_=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),s(" Response")],-1),f=h('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-user" tabindex="-1"><a class="header-anchor" href="#no-such-user" aria-hidden="true">#</a> NO_SUCH_USER</h3><p>ID: <code>11795c64-40ea-4198-b06e-3c873ed9039d</code></p><h3 id="no-such-group" tabindex="-1"><a class="header-anchor" href="#no-such-group" aria-hidden="true">#</a> NO_SUCH_GROUP</h3><p>ID: <code>c4d9f88c-9270-4632-b032-6ed8cee36f7f</code></p><h3 id="group-access-denied" tabindex="-1"><a class="header-anchor" href="#group-access-denied" aria-hidden="true">#</a> GROUP_ACCESS_DENIED</h3><p>ID: <code>a053a8dd-a491-4718-8f87-50775aad9284</code></p>',7);function g(y,b){const r=i("MkSchemaViewer"),t=i("ClientOnly");return o(),c("div",null,[u,m,p,a(t,null,{default:d(()=>[a(r,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},markAsRead:{type:"boolean",default:!0}},anyOf:[{properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]},{properties:{groupId:{type:"string",format:"misskey:id"}},required:["groupId"]}]}})]),_:1}),_,a(t,null,{default:d(()=>[a(r,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"MessagingMessage",$ref:"misskey://MessagingMessage"}}})]),_:1}),f])}var k=n(l,[["render",g],["__file","messages.html.vue"]]);export{k as default};