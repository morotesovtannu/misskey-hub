import{E as H,X,Y,_ as w,f as B,g as x,r as M,o as c,c as v,h as s,b as u,p as $,a as L,t as N,w as R,L as A,M as j,d as z,i as T,v as D,Z as E,W as G,z as I,P as Q,Q as W,$ as Z,n as C,j as q,k as J,a0 as K,m as V,T as ee,O as te,a1 as se}from"./app.85884dad.js";import{r as ae,A as F,N as ne,S as oe}from"./Sidebar.f486364b.js";const re={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},le=({docsRepo:h,editLinkPattern:n})=>{if(n)return n;const o=ae(h);return o!==null?re[o]:null},ie=({docsRepo:h,docsBranch:n,docsDir:o,filePathRelative:_,editLinkPattern:p})=>{if(!_)return null;const m=le({docsRepo:h,editLinkPattern:p});return m?m.replace(/:repo/,H(h)?h:`https://github.com/${h}`).replace(/:branch/,n).replace(/:path/,X(`${Y(o)}/${_}`)):null},ce={class:"page-meta"},ue={key:0,class:"meta-item edit-link"},de={key:1,class:"meta-item last-updated"},_e={class:"meta-item-label"},pe={class:"meta-item-info"},me={key:2,class:"meta-item contributors"},ve={class:"meta-item-label"},he={class:"meta-item-info"},fe=["title"],ke=z(", "),ge=B({__name:"PageMeta",setup(h){const n=()=>{const e=x(),d=E(),l=T();return D(()=>{var P,S,U,O;if(!((S=(P=l.value.editLink)!=null?P:e.value.editLink)!=null?S:!0))return null;const{repo:t,docsRepo:i=t,docsBranch:g="main",docsDir:b="",editLinkText:a}=e.value;if(!i)return null;const y=ie({docsRepo:i,docsBranch:g,docsDir:b,filePathRelative:(U=l.value.filePath)!=null?U:d.value.filePathRelative,editLinkPattern:(O=l.value.editLinkPattern)!=null?O:e.value.editLinkPattern});return y?{text:a!=null?a:"Edit this page",link:y}:null})},o=()=>{const e=x(),d=E(),l=T();return D(()=>{var i,g,b,a;return!((g=(i=l.value.lastUpdated)!=null?i:e.value.lastUpdated)!=null?g:!0)||!((b=d.value.git)!=null&&b.updatedTime)?null:new Date((a=d.value.git)==null?void 0:a.updatedTime).toLocaleString()})},_=()=>{const e=x(),d=E(),l=T();return D(()=>{var t,i,g,b;return((i=(t=l.value.contributors)!=null?t:e.value.contributors)!=null?i:!0)&&(b=(g=d.value.git)==null?void 0:g.contributors)!=null?b:null})},p=x(),m=n(),f=o(),r=_();return(e,d)=>{const l=M("ClientOnly");return c(),v("footer",ce,[s(m)?(c(),v("div",ue,[u(F,{class:"meta-item-label",item:s(m)},null,8,["item"])])):$("",!0),s(f)?(c(),v("div",de,[L("span",_e,N(s(p).lastUpdatedText)+": ",1),u(l,null,{default:R(()=>[L("span",pe,N(s(f)),1)]),_:1})])):$("",!0),s(r)&&s(r).length?(c(),v("div",me,[L("span",ve,N(s(p).contributorsText)+": ",1),L("span",he,[(c(!0),v(A,null,j(s(r),(k,t)=>(c(),v(A,{key:t},[L("span",{class:"contributor",title:`email: ${k.email}`},N(k.name),9,fe),t!==s(r).length-1?(c(),v(A,{key:0},[ke],64)):$("",!0)],64))),128))])])):$("",!0)])}}});var be=w(ge,[["__file","PageMeta.vue"]]);const ye={key:0,class:"page-nav"},Le={class:"inner"},$e={key:0,class:"prev"},De={key:1,class:"next"},Pe=B({__name:"PageNav",setup(h){const n=e=>e===!1?null:Q(e)?W(e):Z(e)?e:!1,o=(e,d,l)=>{const k=e.findIndex(t=>t.link===d);if(k!==-1){const t=e[k+l];return t!=null&&t.link?t:null}for(const t of e)if(t.children){const i=o(t.children,d,l);if(i)return i}return null},_=T(),p=G(),m=I(),f=D(()=>{const e=n(_.value.prev);return e!==!1?e:o(p.value,m.path,-1)}),r=D(()=>{const e=n(_.value.next);return e!==!1?e:o(p.value,m.path,1)});return(e,d)=>s(f)||s(r)?(c(),v("nav",ye,[L("p",Le,[s(f)?(c(),v("span",$e,[u(F,{item:s(f)},null,8,["item"])])):$("",!0),s(r)?(c(),v("span",De,[u(F,{item:s(r)},null,8,["item"])])):$("",!0)])])):$("",!0)}});var Me=w(Pe,[["__file","PageNav.vue"]]);const Ce="_footer_1yl4i_1",xe="_headerDots_1yl4i_5",Te="_footerDots_1yl4i_15";var Se={footer:Ce,headerDots:xe,footerDots:Te};const Ne={class:"page"},Ee={class:"theme-default-content"},we=B({__name:"Page",setup(h){return(n,o)=>{const _=M("MkDots"),p=M("Content"),m=M("MkRelatedPages");return c(),v("main",Ne,[u(_,{class:C(n.$style.headerDots)},null,8,["class"]),L("div",Ee,[u(p)]),u(be),u(Me),u(m),u(_,{class:C(n.$style.footerDots)},null,8,["class"]),L("div",{class:C(n.$style.footer)},"Copyright \xA9 2022 syuilo and other contributors",2)])}}}),Be={$style:Se};var Ue=w(we,[["__cssModules",Be],["__file","Page.vue"]]);const Ae="_sidebarDots_rom89_1",Re="_koko9_rom89_9",Fe="_live2d_rom89_18";var Oe={sidebarDots:Ae,koko9:Re,live2d:Fe};const Ve=B({__name:"Layout",setup(h){const n=E(),o=T(),_=x(),p=D(()=>o.value.navbar!==!1&&_.value.navbar!==!1),m=G(),f=q(!1),r=a=>{f.value=typeof a=="boolean"?a:!f.value},e={x:0,y:0},d=a=>{e.x=a.changedTouches[0].clientX,e.y=a.changedTouches[0].clientY},l=a=>{const y=a.changedTouches[0].clientX-e.x,P=a.changedTouches[0].clientY-e.y;Math.abs(y)>Math.abs(P)&&Math.abs(y)>40&&(y>0&&e.x<=80?r(!0):r(!1))},k=D(()=>[{"no-navbar":!p.value,"no-sidebar":!m.value.length,"sidebar-open":f.value},o.value.pageClass]);let t;J(()=>{t=te().afterEach(()=>{r(!1)})}),K(()=>{t()});const i=se(),g=i.resolve,b=i.pending;return(a,y)=>{const P=M("MkDots"),S=M("MkAd");return c(),v("div",{class:C(["theme-container",s(k)]),onTouchstart:d,onTouchend:l},[s(p)?(c(),V(ne,{key:0,onToggleSidebar:r})):$("",!0),L("div",{class:"sidebar-mask",onClick:y[0]||(y[0]=U=>r(!1))}),u(oe,null,{bottom:R(()=>[u(P,{class:C(a.$style.sidebarDots),space:12},null,8,["class"]),u(S,{class:C([a.$style.koko9,"mkAd"])},null,8,["class"])]),_:1}),u(ee,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:s(g),onBeforeLeave:s(b)},{default:R(()=>[(c(),V(Ue,{key:s(n).path}))]),_:1},8,["onBeforeEnter","onBeforeLeave"])],34)}}}),Ge={$style:Oe};var Ye=w(Ve,[["__cssModules",Ge],["__file","Layout.vue"]]);export{Ye as default};
