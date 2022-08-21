import{_ as o,o as i,c as l,b as a,w as s,a as e,d as t,e as c,r as d}from"./app.92c486f4.js";const h={},p=e("h1",{id:"notes-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-create","aria-hidden":"true"},"#"),t(),e("code",null,"notes/create")],-1),u=e("p",null,"Credential required.",-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),b=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),f=c('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-renote-target" tabindex="-1"><a class="header-anchor" href="#no-such-renote-target" aria-hidden="true">#</a> NO_SUCH_RENOTE_TARGET</h3><p>ID: <code>b5c90186-4ab0-49c8-9bba-a1f76c282ba4</code></p><h3 id="cannot-renote-to-a-pure-renote" tabindex="-1"><a class="header-anchor" href="#cannot-renote-to-a-pure-renote" aria-hidden="true">#</a> CANNOT_RENOTE_TO_A_PURE_RENOTE</h3><p>ID: <code>fd4cc33e-2a37-48dd-99cc-9b806eb2031a</code></p><h3 id="no-such-reply-target" tabindex="-1"><a class="header-anchor" href="#no-such-reply-target" aria-hidden="true">#</a> NO_SUCH_REPLY_TARGET</h3><p>ID: <code>749ee0f6-d3da-459a-bf02-282e2da4292c</code></p><h3 id="cannot-reply-to-a-pure-renote" tabindex="-1"><a class="header-anchor" href="#cannot-reply-to-a-pure-renote" aria-hidden="true">#</a> CANNOT_REPLY_TO_A_PURE_RENOTE</h3><p>ID: <code>3ac74a84-8fd5-4bb0-870f-01804f82ce15</code></p><h3 id="cannot-create-already-expired-poll" tabindex="-1"><a class="header-anchor" href="#cannot-create-already-expired-poll" aria-hidden="true">#</a> CANNOT_CREATE_ALREADY_EXPIRED_POLL</h3><p>ID: <code>04da457d-b083-4055-9082-955525eda5a5</code></p><h3 id="no-such-channel" tabindex="-1"><a class="header-anchor" href="#no-such-channel" aria-hidden="true">#</a> NO_SUCH_CHANNEL</h3><p>ID: <code>b1653923-5453-4edc-b786-7c4f39bb0bbb</code></p><h3 id="you-have-been-blocked" tabindex="-1"><a class="header-anchor" href="#you-have-been-blocked" aria-hidden="true">#</a> YOU_HAVE_BEEN_BLOCKED</h3><p>ID: <code>b390d7e1-8a5e-46ed-b625-06271cafd3d3</code></p>',15);function y(_,x){const r=d("MkSchemaViewer"),n=d("ClientOnly");return i(),l("div",null,[p,u,m,a(n,null,{default:s(()=>[a(r,{schema:{type:"object",properties:{visibility:{type:"string",enum:["public","home","followers","specified"],default:"public"},visibleUserIds:{type:"array",uniqueItems:!0,items:{type:"string",format:"misskey:id"}},text:{type:"string",maxLength:3e3,nullable:!0},cw:{type:"string",nullable:!0,maxLength:100},localOnly:{type:"boolean",default:!1},noExtractMentions:{type:"boolean",default:!1},noExtractHashtags:{type:"boolean",default:!1},noExtractEmojis:{type:"boolean",default:!1},fileIds:{type:"array",uniqueItems:!0,minItems:1,maxItems:16,items:{type:"string",format:"misskey:id"}},mediaIds:{deprecated:!0,description:"Use `fileIds` instead. If both are specified, this property is discarded.",type:"array",uniqueItems:!0,minItems:1,maxItems:16,items:{type:"string",format:"misskey:id"}},replyId:{type:"string",format:"misskey:id",nullable:!0},renoteId:{type:"string",format:"misskey:id",nullable:!0},channelId:{type:"string",format:"misskey:id",nullable:!0},poll:{type:"object",nullable:!0,properties:{choices:{type:"array",uniqueItems:!0,minItems:2,maxItems:10,items:{type:"string",minLength:1,maxLength:50}},multiple:{type:"boolean",default:!1},expiresAt:{type:"integer",nullable:!0},expiredAfter:{type:"integer",nullable:!0,minimum:1}},required:["choices"]}},anyOf:[{properties:{text:{type:"string",minLength:1,maxLength:3e3,nullable:!1}},required:["text"]},{required:["fileIds"]},{required:["mediaIds"]},{properties:{poll:{type:"object",nullable:!1}},required:["poll"]},{required:["renoteId"]}]}},null,8,["schema"])]),_:1}),b,a(n,null,{default:s(()=>[a(r,{schema:{type:"object",optional:!1,nullable:!1,properties:{createdNote:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}},required:["createdNote"]}})]),_:1}),f])}var I=o(h,[["render",y],["__file","create.html.vue"]]);export{I as default};