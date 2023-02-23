import{_ as s,o as r,c as i,b as o,e as a,a as e,d as n,r as d}from"./app.038b27b5.js";const c={},p=a('<h1 id="webhook" tabindex="-1"><a class="header-anchor" href="#webhook" aria-hidden="true">#</a> Webhook</h1><div class="custom-container tip"><i class="fas fa-info"></i><p>Cette fonction est disponible \xE0 partir de la version 12.109.0.</p></div><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>C\u2019est une fonction exp\xE9rimentale qui peut \xEAtre instable ou \xEAtre modifi\xE9e \xE0 l\u2019avenir.</p></div><p>Misskey fournit un webhook qui vous permet de recevoir des \xE9v\xE8nements Misskey en temps r\xE9el.</p><p>Vous pouvez les g\xE9rer via la section \xE9ponyme de vos param\xE8tres.</p><p>Une fois d\xE9fini, une requ\xEAte HTTP est envoy\xE9e \xE0 l\u2019URL indiqu\xE9e chaque fois qu\u2019un \xE9v\xE8nement d\xE9fini survient. La requ\xEAte sera en POST et contiendra du JSON. De pluis, l\u2019ent\xEAte de requ\xEAte contient une cl\xE9 secr\xE8te d\xE9finie lors de la cr\xE9ation avec le nom <code>X-Misskey-Hook-Secret</code>. Celui-ci vous permet de v\xE9rifier l\u2019authenticit\xE9 de la requ\xEAte.</p><p>Les propri\xE9t\xE9s suivantes seront transmises\xA0:</p>',7),u=e("p",null,"Si le serveur de destination retourne une erreur 5xx ou ne r\xE9pond pas, la requ\xEAte est renvoy\xE9e apr\xE8s un certain d\xE9lai.",-1),l=e("p",null,"Les webhooks peuvent \xEAtre d\xE9sactiv\xE9s individuellement depuis le tableau d\u2019administration pour arr\xEAter les requ\xEAtes.",-1),h=e("h2",{id:"evenement",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#evenement","aria-hidden":"true"},"#"),n(" \xC9v\xE8nement")],-1),m=e("p",null,"Ci-dessous une description de chaque type d\u2019\xE9v\xE8nement.",-1),f=e("h3",{id:"follow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#follow","aria-hidden":"true"},"#"),n(" follow")],-1),_=e("p",null,"Lorsque vous suivez une personne.",-1),v=e("h3",{id:"followed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#followed","aria-hidden":"true"},"#"),n(" followed")],-1),y=e("p",null,"Lorsqu\u2019une personne vous suit.",-1),b=e("h3",{id:"unfollow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#unfollow","aria-hidden":"true"},"#"),n(" unfollow")],-1),k=e("p",null,"Lorsque vous arr\xEAtez de suivre une personne.",-1),w=e("h3",{id:"note",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#note","aria-hidden":"true"},"#"),n(" note")],-1),q=e("p",null,"Lorsque vous publiez une note.",-1),x=e("h3",{id:"reply",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reply","aria-hidden":"true"},"#"),n(" reply")],-1),j=e("p",null,"Lorsqu\u2019une personne r\xE9pond \xE0 votre note.",-1),L=e("h3",{id:"renote",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#renote","aria-hidden":"true"},"#"),n(" renote")],-1),N=e("p",null,"Lorsque votre note est renot\xE9e.",-1),g=e("h3",{id:"mention",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mention","aria-hidden":"true"},"#"),n(" mention")],-1),I=e("p",null,"Lorsqu\u2019une personne vous mentionne.",-1);function U(T,S){const t=d("MkSchemaViewerItemObject");return r(),i("div",null,[p,o(t,{schema:{type:"object",properties:{hookId:{type:"string",description:"Webhook ID"},userId:{type:"string",description:"User ID of webhook creator"},eventId:{type:"string",description:"Event ID"},createdAt:{type:"integer",description:"Date and time of event occurrence (UNIX time, ms)"},type:{type:"string",description:"Event type"},body:{type:"object",description:"Event payload"}}}},null,8,["schema"]),u,l,h,m,f,_,o(t,{schema:{type:"object",properties:{user:{$ref:"misskey://User",description:"User that is followed"}}}}),v,y,o(t,{schema:{type:"object",properties:{user:{$ref:"misskey://User",description:"User that is following you"}}}}),b,k,o(t,{schema:{type:"object",properties:{user:{$ref:"misskey://User",description:"The user being unfollowed"}}}}),w,q,o(t,{schema:{type:"object",properties:{note:{$ref:"misskey://Note",description:"The composed note"}}}}),x,j,o(t,{schema:{type:"object",properties:{note:{$ref:"misskey://Note",description:"The reply"}}}}),L,N,o(t,{schema:{type:"object",properties:{note:{$ref:"misskey://Note",description:"Renote"}}}}),g,I,o(t,{schema:{type:"object",properties:{note:{$ref:"misskey://Note",description:"The note that contains the mention"}}}})])}var $=s(c,[["render",U],["__file","webhook.html.vue"]]);export{$ as default};