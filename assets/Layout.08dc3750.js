import{E as J,R as W,S as Z,_ as P,f as w,g as I,r as x,o as n,c as _,h as t,b as f,n as y,a as L,t as M,w as U,K as N,L as V,d as z,i as B,s as S,U as R,V as H,z as F,N as Q,O as ee,W as te,v as D,A as se,M as G,X as ae,Y as ne,P as oe,m as T,Z as re,l as le,J as ie,k as X,I as ce,D as K,j as ue,$ as de,T as _e,a0 as pe}from"./app.92c486f4.js";import{r as me,A,D as he,a as ve,N as fe}from"./Navbar.954540e7.js";const j=o=>decodeURI(o).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),be=(o,a)=>{if(a.hash===o)return!0;const s=j(a.path),c=j(o);return s===c},Y=(o,a)=>o.link&&be(o.link,a)?!0:o.children?o.children.some(s=>Y(s,a)):!1,ge={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},ke=({docsRepo:o,editLinkPattern:a})=>{if(a)return a;const s=me(o);return s!==null?ge[s]:null},ye=({docsRepo:o,docsBranch:a,docsDir:s,filePathRelative:c,editLinkPattern:p})=>{if(!c)return null;const r=ke({docsRepo:o,editLinkPattern:p});return r?r.replace(/:repo/,J(o)?o:`https://github.com/${o}`).replace(/:branch/,a).replace(/:path/,W(`${Z(s)}/${c}`)):null},$e={class:"page-meta"},Le={key:0,class:"meta-item edit-link"},Se={key:1,class:"meta-item last-updated"},De={class:"meta-item-label"},xe={class:"meta-item-info"},Pe={key:2,class:"meta-item contributors"},we={class:"meta-item-label"},Ce={class:"meta-item-info"},Te=["title"],Ie=z(", "),Me=w({__name:"PageMeta",setup(o){const a=()=>{const e=I(),d=R(),v=B();return S(()=>{var C,E,O,q;if(!((E=(C=v.value.editLink)!=null?C:e.value.editLink)!=null?E:!0))return null;const{repo:l,docsRepo:m=l,docsBranch:$="main",docsDir:k="",editLinkText:i}=e.value;if(!m)return null;const g=ye({docsRepo:m,docsBranch:$,docsDir:k,filePathRelative:(O=v.value.filePath)!=null?O:d.value.filePathRelative,editLinkPattern:(q=v.value.editLinkPattern)!=null?q:e.value.editLinkPattern});return g?{text:i!=null?i:"Edit this page",link:g}:null})},s=()=>{const e=I(),d=R(),v=B();return S(()=>{var m,$,k,i;return!(($=(m=v.value.lastUpdated)!=null?m:e.value.lastUpdated)!=null?$:!0)||!((k=d.value.git)!=null&&k.updatedTime)?null:new Date((i=d.value.git)==null?void 0:i.updatedTime).toLocaleString()})},c=()=>{const e=I(),d=R(),v=B();return S(()=>{var l,m,$,k;return((m=(l=v.value.contributors)!=null?l:e.value.contributors)!=null?m:!0)&&(k=($=d.value.git)==null?void 0:$.contributors)!=null?k:null})},p=I(),r=a(),h=s(),u=c();return(e,d)=>{const v=x("ClientOnly");return n(),_("footer",$e,[t(r)?(n(),_("div",Le,[f(A,{class:"meta-item-label",item:t(r)},null,8,["item"])])):y("",!0),t(h)?(n(),_("div",Se,[L("span",De,M(t(p).lastUpdatedText)+": ",1),f(v,null,{default:U(()=>[L("span",xe,M(t(h)),1)]),_:1})])):y("",!0),t(u)&&t(u).length?(n(),_("div",Pe,[L("span",we,M(t(p).contributorsText)+": ",1),L("span",Ce,[(n(!0),_(N,null,V(t(u),(b,l)=>(n(),_(N,{key:l},[L("span",{class:"contributor",title:`email: ${b.email}`},M(b.name),9,Te),l!==t(u).length-1?(n(),_(N,{key:0},[Ie],64)):y("",!0)],64))),128))])])):y("",!0)])}}});var Ne=P(Me,[["__file","PageMeta.vue"]]);const Be={key:0,class:"page-nav"},Ee={class:"inner"},Re={key:0,class:"prev"},Ue={key:1,class:"next"},Ae=w({__name:"PageNav",setup(o){const a=e=>e===!1?null:Q(e)?ee(e):te(e)?e:!1,s=(e,d,v)=>{const b=e.findIndex(l=>l.link===d);if(b!==-1){const l=e[b+v];return l!=null&&l.link?l:null}for(const l of e)if(l.children){const m=s(l.children,d,v);if(m)return m}return null},c=B(),p=H(),r=F(),h=S(()=>{const e=a(c.value.prev);return e!==!1?e:s(p.value,r.path,-1)}),u=S(()=>{const e=a(c.value.next);return e!==!1?e:s(p.value,r.path,1)});return(e,d)=>t(h)||t(u)?(n(),_("nav",Be,[L("p",Ee,[t(h)?(n(),_("span",Re,[f(A,{item:t(h)},null,8,["item"])])):y("",!0),t(u)?(n(),_("span",Ue,[f(A,{item:t(u)},null,8,["item"])])):y("",!0)])])):y("",!0)}});var Oe=P(Ae,[["__file","PageNav.vue"]]);const Ve="_footer_1yl4i_1",He="_headerDots_1yl4i_5",Fe="_footerDots_1yl4i_15";var qe={footer:Ve,headerDots:He,footerDots:Fe};const Ke={class:"page"},je={class:"theme-default-content"},ze=w({__name:"Page",setup(o){return(a,s)=>{const c=x("MkDots"),p=x("Content"),r=x("MkRelatedPages");return n(),_("main",Ke,[f(c,{class:D(a.$style.headerDots)},null,8,["class"]),L("div",je,[f(p)]),f(Ne),f(Oe),f(r),f(c,{class:D(a.$style.footerDots)},null,8,["class"]),L("div",{class:D(a.$style.footer)},"Copyright \xA9 2022 syuilo and other contributors",2)])}}}),Ge={$style:qe};var Xe=P(ze,[["__cssModules",Ge],["__file","Page.vue"]]);const Ye=["onKeydown"],Je={class:"sidebar-item-children"},We=w({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(o){const a=o,{item:s,depth:c}=se(a),p=F(),r=G(),h=S(()=>Y(s.value,p)),u=S(()=>({"sidebar-item":!0,"sidebar-heading":c.value===0,active:h.value,collapsible:s.value.collapsible})),e=S(()=>s.value.collapsible?h.value:!0),[d,v]=ae(e.value),b=m=>{s.value.collapsible&&(m.preventDefault(),v())},l=r.afterEach(m=>{ne(()=>{d.value=e.value})});return oe(()=>{l()}),(m,$)=>{var i;const k=x("SidebarItem",!0);return n(),_("li",null,[t(s).link?(n(),T(A,{key:0,class:D(t(u)),item:t(s)},null,8,["class","item"])):(n(),_("p",{key:1,tabindex:"0",class:D(t(u)),onClick:b,onKeydown:re(b,["enter"])},[z(M(t(s).text)+" ",1),t(s).collapsible?(n(),_("span",{key:0,class:D(["arrow",t(d)?"down":"right"])},null,2)):y("",!0)],42,Ye)),(i=t(s).children)!=null&&i.length?(n(),T(he,{key:2},{default:U(()=>[le(L("ul",Je,[(n(!0),_(N,null,V(t(s).children,g=>(n(),T(k,{key:`${t(c)}${g.text}${g.link}`,item:g,depth:t(c)+1},null,8,["item","depth"]))),128))],512),[[ie,t(d)]])]),_:1})):y("",!0)])}}});var Ze=P(We,[["__file","SidebarItem.vue"]]);const Qe={key:0,class:"sidebar-items"},et=w({__name:"SidebarItems",setup(o){const a=F(),s=H();return X(()=>{ce(()=>a.hash,c=>{const p=document.querySelector(".sidebar");if(!p)return;const r=document.querySelector(`.sidebar a.sidebar-item[href="${a.path}${c}"]`);if(!r)return;const{top:h,height:u}=p.getBoundingClientRect(),{top:e,height:d}=r.getBoundingClientRect();e<h?r.scrollIntoView(!0):e+d>h+u&&r.scrollIntoView(!1)})}),(c,p)=>t(s).length?(n(),_("ul",Qe,[(n(!0),_(N,null,V(t(s),r=>(n(),T(Ze,{key:`${r.text}${r.link}`,item:r},null,8,["item"]))),128))])):y("",!0)}});var tt=P(et,[["__file","SidebarItems.vue"]]);const st={class:"sidebar"},at=w({__name:"Sidebar",setup(o){return(a,s)=>(n(),_("aside",st,[f(ve),K(a.$slots,"top"),f(tt),K(a.$slots,"bottom")]))}});var nt=P(at,[["__file","Sidebar.vue"]]);const ot="_sidebarDots_rom89_1",rt="_koko9_rom89_9",lt="_live2d_rom89_18";var it={sidebarDots:ot,koko9:rt,live2d:lt};const ct=w({__name:"Layout",setup(o){const a=R(),s=B(),c=I(),p=S(()=>s.value.navbar!==!1&&c.value.navbar!==!1),r=H(),h=ue(!1),u=i=>{h.value=typeof i=="boolean"?i:!h.value},e={x:0,y:0},d=i=>{e.x=i.changedTouches[0].clientX,e.y=i.changedTouches[0].clientY},v=i=>{const g=i.changedTouches[0].clientX-e.x,C=i.changedTouches[0].clientY-e.y;Math.abs(g)>Math.abs(C)&&Math.abs(g)>40&&(g>0&&e.x<=80?u(!0):u(!1))},b=S(()=>[{"no-navbar":!p.value,"no-sidebar":!r.value.length,"sidebar-open":h.value},s.value.pageClass]);let l;X(()=>{l=G().afterEach(()=>{u(!1)})}),de(()=>{l()});const m=pe(),$=m.resolve,k=m.pending;return(i,g)=>{const C=x("MkDots"),E=x("MkAd");return n(),_("div",{class:D(["theme-container",t(b)]),onTouchstart:d,onTouchend:v},[t(p)?(n(),T(fe,{key:0,onToggleSidebar:u})):y("",!0),L("div",{class:"sidebar-mask",onClick:g[0]||(g[0]=O=>u(!1))}),f(nt,null,{bottom:U(()=>[f(C,{class:D(i.$style.sidebarDots),space:12},null,8,["class"]),f(E,{class:D([i.$style.koko9,"mkAd"])},null,8,["class"])]),_:1}),f(_e,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:t($),onBeforeLeave:t(k)},{default:U(()=>[(n(),T(Xe,{key:t(a).path}))]),_:1},8,["onBeforeEnter","onBeforeLeave"])],34)}}}),ut={$style:it};var pt=P(ct,[["__cssModules",ut],["__file","Layout.vue"]]);export{pt as default};