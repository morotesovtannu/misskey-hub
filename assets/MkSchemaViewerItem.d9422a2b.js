import{y as v,r as m,o as s,c as t,g,w as j,d,t as a,q as c,F as r,h as b,a as l,b as y,s as w,x}from"./app.41b2c3dd.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";const S=n=>n[0].toLowerCase()+n.slice(1,n.length).replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`),V={props:{schema:{type:Object,required:!0}},setup(n){const o=v(),e=n.schema.$ref?n.schema.$ref.replace("misskey://",""):null;return{refName:e,refPath:n.schema.$ref?`${o.value}docs/api/entity/${S(e)}.html`:null}}},i=n=>(w("data-v-464983b6"),n=n(),x(),n),L={class:"mk-schema-viewer-item"},N={key:0},C={key:1,class:"nullable"},B={key:2,class:"description"},M={key:1,class:"string"},O=i(()=>l("code",null,"string",-1)),R={key:0,class:"nullable"},q={key:1,class:"enum"},A=d("enum: "),F={key:2,class:"nullable"},P=d("default: "),T={key:3,class:"description"},D={key:2,class:"number"},E=i(()=>l("code",null,"number",-1)),K={key:0,class:"nullable"},W={key:1,class:"nullable"},Z=d("default: "),z={key:2,class:"description"},G={key:3,class:"integer"},H=i(()=>l("code",null,"integer",-1)),J={key:0,class:"nullable"},Q={key:1,class:"nullable"},U=d("default: "),X={key:2,class:"description"},Y={key:4,class:"boolean"},p=i(()=>l("code",null,"boolean",-1)),$={key:0,class:"nullable"},ee={key:1,class:"nullable"},se=d("default: "),te={key:2,class:"description"},ce={key:5,class:"array"},ae=i(()=>l("div",{class:"label"},"Array of:",-1)),le={key:0,class:"description"},ne={key:1,class:"nullable"},de={key:2,class:"nullable"},ie=d("default: "),oe={key:6,class:"object"},ue=i(()=>l("code",null,"object",-1)),_e={key:0,class:"nullable"},he={key:1,class:"nullable"},me=d("default: "),re={key:2,class:"description"},be={key:7,class:"object"},ye=i(()=>l("div",{class:"label"},"Object:",-1)),ke={key:0,class:"description"},fe={class:"kv"},ve={class:"k"},ge={class:"v"},je={key:1,class:"nullable"},we={key:2,class:"nullable"},xe=d("default: ");function Ie(n,o,e,_,Se,Ve){const k=m("RouterLink"),h=m("MkSchemaViewerItem",!0);return s(),t("div",L,[e.schema.$ref?(s(),t("div",N,[e.schema.$ref.startsWith("misskey://")?(s(),g(k,{key:0,to:_.refPath},{default:j(()=>[d(a(_.refName),1)]),_:1},8,["to"])):c("",!0),e.schema.nullable?(s(),t("span",C,"(nullable)")):c("",!0),e.schema.description?(s(),t("div",B,a(e.schema.description),1)):c("",!0)])):e.schema.type==="string"?(s(),t("div",M,[O,e.schema.nullable?(s(),t("span",R,"(nullable)")):c("",!0),e.schema.enum?(s(),t("div",q,[A,(s(!0),t(r,null,b(e.schema.enum,u=>(s(),t("code",null,a(u),1))),256))])):c("",!0),e.schema.default!==void 0?(s(),t("div",F,[P,l("code",null,a(e.schema.default),1)])):c("",!0),e.schema.description?(s(),t("div",T,a(e.schema.description),1)):c("",!0)])):e.schema.type==="number"?(s(),t("div",D,[E,e.schema.nullable?(s(),t("span",K,"(nullable)")):c("",!0),e.schema.default!==void 0?(s(),t("div",W,[Z,l("code",null,a(e.schema.default),1)])):c("",!0),e.schema.description?(s(),t("div",z,a(e.schema.description),1)):c("",!0)])):e.schema.type==="integer"?(s(),t("div",G,[H,e.schema.nullable?(s(),t("span",J,"(nullable)")):c("",!0),e.schema.default!==void 0?(s(),t("div",Q,[U,l("code",null,a(e.schema.default),1)])):c("",!0),e.schema.description?(s(),t("div",X,a(e.schema.description),1)):c("",!0)])):e.schema.type==="boolean"?(s(),t("div",Y,[p,e.schema.nullable?(s(),t("span",$,"(nullable)")):c("",!0),e.schema.default!==void 0?(s(),t("div",ee,[se,l("code",null,a(e.schema.default),1)])):c("",!0),e.schema.description?(s(),t("div",te,a(e.schema.description),1)):c("",!0)])):e.schema.type==="array"?(s(),t("div",ce,[ae,e.schema.description?(s(),t("div",le,a(e.schema.description),1)):c("",!0),y(h,{schema:e.schema.items},null,8,["schema"]),e.schema.nullable?(s(),t("span",ne,"(nullable)")):c("",!0),e.schema.default!==void 0?(s(),t("div",de,[ie,l("code",null,a(e.schema.default),1)])):c("",!0)])):e.schema.type==="object"&&e.schema.properties==null?(s(),t("div",oe,[ue,e.schema.nullable?(s(),t("span",_e,"(nullable)")):c("",!0),e.schema.default!==void 0?(s(),t("div",he,[me,l("code",null,a(e.schema.default),1)])):c("",!0),e.schema.description?(s(),t("div",re,a(e.schema.description),1)):c("",!0)])):e.schema.type==="object"?(s(),t("div",be,[ye,e.schema.description?(s(),t("div",ke,a(e.schema.description),1)):c("",!0),(s(!0),t(r,null,b(Object.entries(e.schema.properties),([u,f])=>(s(),t("div",fe,[l("div",ve,a(u),1),l("div",ge,[y(h,{schema:f},null,8,["schema"])])]))),256)),e.schema.nullable?(s(),t("span",je,"(nullable)")):c("",!0),e.schema.default!==void 0?(s(),t("div",we,[xe,l("code",null,a(e.schema.default),1)])):c("",!0)])):c("",!0)])}var Ce=I(V,[["render",Ie],["__scopeId","data-v-464983b6"]]);export{Ce as default};