import{v as y,o as a,c as l,a as r,F as U,J as z,k as B,G as C,q as N,C as T,t as m,B as P,b as S,V as ie}from"./js/runtime-dom.esm-bundler.tPRhSV4q.js";import{l as re}from"./js/index.CkBeLh4y.js";import{l as ne}from"./js/index.B6JTtDta.js";import{l as ae}from"./js/index.3BJ3ZnWB.js";import{a as ce,b as le,e as de,d as F,F as ue,l as G,u as pe}from"./js/links.Ce9S4kjc.js";import{a as he}from"./js/allowed.CMMScaL-.js";import{t as me}from"./js/postSlug.gaB5T-wi.js";import{a as _e}from"./js/Image.Bxp-IcnQ.js";import{T as ge}from"./js/Tags.BawQBqR0.js";import{C as fe}from"./js/GoogleSearchPreview.xL31DpGm.js";import{c as ve,e as Se,f as be}from"./js/Caret.BthVBOwE.js";import{S as Pe}from"./js/Exclamation.DGJubTNT.js";import{S as ye}from"./js/External.BnlDuPIp.js";import{_ as b}from"./js/_plugin-vue_export-helper.BN1snXvA.js";import{S as we}from"./js/Twitter.B1Gw9Cwq.js";import{s as xe}from"./js/metabox.CnmedXkm.js";import{l as Ee}from"./js/loadTruSeo.BpCUogiH.js";import{e as $e}from"./js/elemLoaded.COgXIo-H.js";import{t as W}from"./js/toString.zLSwYOtv.js";import{u as ke}from"./js/upperFirst.yVnsg4QL.js";import{d as Ae}from"./js/cleanForSlug.BVGRQ_59.js";import"./js/default-i18n.DXRQgkn2.js";import"./js/constants.CPpKID74.js";import"./js/helpers.CXsRrhc8.js";import"./js/_baseSet.rYV3oc6X.js";import"./js/_stringToArray.DnK4tKcY.js";import"./js/_baseTrim.BYZhh0MR.js";function Ce(e){return ke(W(e).toLowerCase())}function Te(e,t,s,o){for(var i=-1,d=e==null?0:e.length;++i<d;)s=t(s,e[i],i,e);return s}var Re=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Oe(e){return e.match(Re)||[]}var Ie=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Me(e){return Ie.test(e)}var Z="\\ud800-\\udfff",Le="\\u0300-\\u036f",Ve="\\ufe20-\\ufe2f",De="\\u20d0-\\u20ff",Ue=Le+Ve+De,K="\\u2700-\\u27bf",j="a-z\\xdf-\\xf6\\xf8-\\xff",ze="\\xac\\xb1\\xd7\\xf7",Be="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ne="\\u2000-\\u206f",Fe=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",H="A-Z\\xc0-\\xd6\\xd8-\\xde",Ge="\\ufe0e\\ufe0f",q=ze+Be+Ne+Fe,J="['’]",R="["+q+"]",We="["+Ue+"]",Y="\\d+",Ze="["+K+"]",Q="["+j+"]",X="[^"+Z+q+Y+K+j+H+"]",Ke="\\ud83c[\\udffb-\\udfff]",je="(?:"+We+"|"+Ke+")",He="[^"+Z+"]",ee="(?:\\ud83c[\\udde6-\\uddff]){2}",te="[\\ud800-\\udbff][\\udc00-\\udfff]",g="["+H+"]",qe="\\u200d",O="(?:"+Q+"|"+X+")",Je="(?:"+g+"|"+X+")",I="(?:"+J+"(?:d|ll|m|re|s|t|ve))?",M="(?:"+J+"(?:D|LL|M|RE|S|T|VE))?",se=je+"?",oe="["+Ge+"]?",Ye="(?:"+qe+"(?:"+[He,ee,te].join("|")+")"+oe+se+")*",Qe="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Xe="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",et=oe+se+Ye,tt="(?:"+[Ze,ee,te].join("|")+")"+et,st=RegExp([g+"?"+Q+"+"+I+"(?="+[R,g,"$"].join("|")+")",Je+"+"+M+"(?="+[R,g+O,"$"].join("|")+")",g+"?"+O+"+"+I,g+"+"+M,Xe,Qe,Y,tt].join("|"),"g");function ot(e){return e.match(st)||[]}function it(e,t,s){return e=W(e),t=t,t===void 0?Me(e)?ot(e):Oe(e):e.match(t)||[]}var rt="['’]",nt=RegExp(rt,"g");function at(e){return function(t){return Te(it(Ae(t).replace(nt,"")),e,"")}}var L=at(function(e,t,s){return t=t.toLowerCase(),e+(s?Ce(t):t)});const ct={setup(){return{optionsStore:ce(),postEditorStore:le(),settingsStore:de(),tagsStore:F()}},mixins:[ge,_e],components:{CoreGoogleSearchPreview:fe,SvgCircleCheck:ve,SvgCircleClose:Se,SvgCircleExclamation:Pe,SvgExternal:ye,SvgPencil:be},data(){return{allowed:he,separator:void 0,socialImage:null,socialImageKey:0,strings:{serpPreview:this.$t.__("SERP Preview",this.$td),canonicalUrl:this.$t.__("Canonical URL",this.$td)}}},computed:{tips(){let e=[{label:this.$t.__("Visibility",this.$td),name:"visibility",access:"aioseo_page_advanced_settings"},{label:this.$t.__("SEO Analysis",this.$td),name:"seoAnalysis",access:"aioseo_page_analysis"},{label:this.$t.__("Readability",this.$td),name:"readabilityAnalysis",access:"aioseo_page_analysis"},{label:this.$t.__("Focus Keyphrase",this.$td),name:"focusKeyphrase",access:"aioseo_page_analysis"},{label:this.$t.__("Social",this.$td),name:"social",access:"aioseo_page_social_settings"}].filter(t=>this.allowed(t.access)&&(t.access!=="aioseo_page_analysis"||me()));return!this.optionsStore.options.social.facebook.general.enable&&!this.optionsStore.options.social.twitter.general.enable&&(e=e.filter(t=>t.name!=="social")),e.forEach((t,s)=>{e[s]={...t,...this.getData(t.name)}}),e},canImprove(){return this.tips.some(e=>e.type==="error")}},methods:{getIcon(e){switch(e){case"error":return"svg-circle-close";case"warning":return"svg-circle-exclamation";case"success":default:return"svg-circle-check"}},getData(e){const t={};if(e==="visibility"&&(t.value=this.$t.__("Good!",this.$td),t.type="success",(this.postEditorStore.currentPost.default?this.optionsStore.dynamicOptions.searchAppearance.postTypes[this.postEditorStore.currentPost.postType]&&!this.optionsStore.dynamicOptions.searchAppearance.postTypes[this.postEditorStore.currentPost.postType].advanced.robotsMeta.default&&this.optionsStore.dynamicOptions.searchAppearance.postTypes[this.postEditorStore.currentPost.postType].advanced.robotsMeta.noindex:this.postEditorStore.currentPost.noindex)&&(t.value=this.$t.__("Blocked!",this.$td),t.type="error")),e==="seoAnalysis"){t.value=this.$t.__("N/A",this.$td),t.type="error";const s=this.postEditorStore.currentPost.seo_score;Number.isInteger(s)&&(t.value=s+"/100",t.type=80<s?"success":50<s?"warning":"error")}if(e==="readabilityAnalysis"){t.value=this.$t.__("Good!",this.$td),t.type="success";const s=this.postEditorStore.currentPost.page_analysis.analysis.readability.errors;s&&0<s&&(t.value=this.$t.sprintf(this.$t._n("%1$s error found!","%1$s errors found!",s,this.$td),s),t.type="error")}if(e==="focusKeyphrase"){t.value=this.$t.__("No focus keyphrase!",this.$td),t.type="error";const s=this.postEditorStore.currentPost.keyphrases.focus;s&&s.keyphrase&&(t.value=s.score+"/100",t.type=80<s.score?"success":50<s.score?"warning":"error")}if(e==="social"){t.value=this.$t.__("Good!",this.$td),t.type="success",this.socialImageKey;const s=this.parseTags(this.postEditorStore.currentPost.og_title||this.postEditorStore.currentPost.title||this.postEditorStore.currentPost.tags.title).trim(),o=this.parseTags(this.postEditorStore.currentPost.og_description||this.postEditorStore.currentPost.description||this.postEditorStore.currentPost.tags.description).trim(),i=this.socialImage;(!s||!o||!i)&&(t.value=this.$t.__("Missing social markup!",this.$td),t.type="error")}return{...t,icon:this.getIcon(t.type)}},openSidebar(e){var i,d,c,u,p,n,h,_,f,v;const t=(i=window.wp)!=null&&i.editor?(c=(d=window.wp)==null?void 0:d.editor)==null?void 0:c.openGeneralSidebar:(p=(u=window.wp)==null?void 0:u.editPost)==null?void 0:p.openGeneralSidebar;((n=window.wp)!=null&&n.editor?(_=(h=window.wp)==null?void 0:h.editor)==null?void 0:_.closePublishSidebar:(v=(f=window.wp)==null?void 0:f.editPost)==null?void 0:v.closePublishSidebar)(),t("aioseo-post-settings-sidebar/aioseo-post-settings-sidebar");const o={};switch(e){case"canonical":case"visibility":o.tab="advanced";break;case"seoAnalysis":o.tab="general",o.card="basicseo";break;case"readabilityAnalysis":o.tab="general",o.card="readability";break;case"focusKeyphrase":o.tab="general",o.card="focus";break;case"social":o.tab="social";break}this.settingsStore.changeTabSettings({setting:"mainSidebar",value:o})}},async mounted(){await this.setImageUrl().then(()=>{this.socialImage=this.imageUrl}),window.aioseoBus.$on("updateSocialImagePreview",e=>{this.socialImage=e.image,this.socialImageKey++}),this.$nextTick(()=>{const e=document.querySelector(".aioseo-pre-publish .editor-post-publish-panel__link");e&&(e.innerHTML=this.canImprove?this.$t.__("Your post needs improvement!",this.$td):this.$t.__("You're good to go!",this.$td))})}},lt={key:0,class:"seo-overview"},dt={class:"pre-publish-checklist"},ut={class:"icon"},pt=["onClick"],ht={key:0,class:"snippet-preview"},mt={class:"title"},_t={key:1,class:"canonical-url"},gt={class:"title"},ft=["href"];function vt(e,t,s,o,i,d){const c=y("svg-pencil"),u=y("core-google-search-preview"),p=y("svg-external");return o.postEditorStore.currentPost.id?(a(),l("div",lt,[r("ul",dt,[(a(!0),l(U,null,z(d.tips,(n,h)=>(a(),l("li",{key:h},[r("span",ut,[(a(),B(N(n.icon),{class:C(n.type)},null,8,["class"]))]),r("span",null,[T(m(n.label)+": ",1),r("span",{class:C(["result",n.value.endsWith("/100")?n.type:null])},m(n.value),3)]),o.optionsStore.dynamicOptions.searchAppearance.postTypes[o.postEditorStore.currentPost.postType]&&o.optionsStore.dynamicOptions.searchAppearance.postTypes[o.postEditorStore.currentPost.postType].advanced.showMetaBox?(a(),l("span",{key:0,class:"edit",onClick:_=>d.openSidebar(n.name)},[P(c)],8,pt)):S("",!0)]))),128))]),i.allowed("aioseo_page_analysis")?(a(),l("div",ht,[r("p",mt,m(i.strings.serpPreview)+":",1),P(u,{url:o.tagsStore.liveTags.permalink,title:e.parseTags(o.postEditorStore.currentPost.title||o.postEditorStore.currentPost.tags.title||"#post_title #separator_sa #site_title"),description:e.parseTags(o.postEditorStore.currentPost.description||o.postEditorStore.currentPost.tags.description||"#post_content")},null,8,["url","title","description"])])):S("",!0),i.allowed("aioseo_page_analysis")&&o.postEditorStore.currentPost.canonicalUrl?(a(),l("div",_t,[r("p",gt,[T(m(i.strings.canonicalUrl)+": ",1),r("span",{class:"edit",onClick:t[0]||(t[0]=n=>d.openSidebar("canonical"))},[P(c)])]),r("a",{href:o.postEditorStore.currentPost.canonicalUrl,target:"_blank",rel:"noopener noreferrer"},[r("span",null,m(o.postEditorStore.currentPost.canonicalUrl),1),P(p)],8,ft)])):S("",!0)])):S("",!0)}const V=b(ct,[["render",vt]]),St={},bt={width:"32",height:"32",fill:"none",class:"aioseo-facebook-rounded",xmlns:"http://www.w3.org/2000/svg"},Pt=r("circle",{cx:"16",cy:"16",r:"16",fill:"currentColor"},null,-1),yt=r("path",{d:"M24 16c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4 2.9 7.3 6.7 7.9v-5.6h-2V16h2v-1.8c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V16h2.2l-.4 2.3h-1.9V24c4-.6 6.9-4 6.9-8z",fill:"#fff"},null,-1),wt=[Pt,yt];function xt(e,t){return a(),l("svg",bt,wt)}const Et=b(St,[["render",xt]]),$t={},kt={width:"32",height:"32",fill:"none",class:"aioseo-linkedin-rounded",xmlns:"http://www.w3.org/2000/svg"},At=r("circle",{cx:"16",cy:"16",r:"16",fill:"currentColor"},null,-1),Ct=r("path",{d:"M11.6 24H8.2V13.3h3.4V24zM9.9 11.8C8.8 11.8 8 11 8 9.9 8 8.8 8.9 8 9.9 8c1.1 0 1.9.8 1.9 1.9 0 1.1-.8 1.9-1.9 1.9zM24 24h-3.4v-5.8c0-1.7-.7-2.2-1.7-2.2s-2 .8-2 2.3V24h-3.4V13.3h3.2v1.5c.3-.7 1.5-1.8 3.2-1.8 1.9 0 3.9 1.1 3.9 4.4V24h.2z",fill:"#fff"},null,-1),Tt=[At,Ct];function Rt(e,t){return a(),l("svg",kt,Tt)}const Ot=b($t,[["render",Rt]]),It={},Mt={width:"32",height:"32",fill:"none",class:"aioseo-pinterest-rounded",xmlns:"http://www.w3.org/2000/svg"},Lt=r("circle",{cx:"16",cy:"16",r:"16",fill:"currentColor"},null,-1),Vt=r("path",{d:"M16.056 6.583c-5.312 0-9.658 4.346-9.658 9.658a9.581 9.581 0 005.795 8.813c0-.724 0-1.448.12-2.173.242-.845 1.207-5.312 1.207-5.312s-.362-.604-.362-1.57c0-1.448.846-2.535 1.811-2.535.845 0 1.328.604 1.328 1.45 0 .844-.603 2.172-.845 3.38-.241.965.483 1.81 1.57 1.81 1.81 0 3.018-2.293 3.018-5.19 0-2.174-1.449-3.743-3.984-3.743-2.898 0-4.709 2.173-4.709 4.587 0 .845.242 1.449.604 1.932.12.241.242.241.12.483 0 .12-.12.603-.24.724-.121.242-.242.362-.483.242-1.329-.604-1.932-2.053-1.932-3.743 0-2.777 2.294-6.036 6.881-6.036 3.743 0 6.157 2.656 6.157 5.553 0 3.743-2.052 6.64-5.19 6.64-1.087 0-2.053-.603-2.415-1.207 0 0-.604 2.173-.725 2.656a10.702 10.702 0 01-.966 2.052c.846.242 1.811.363 2.777.363 5.312 0 9.658-4.347 9.658-9.659.121-4.829-4.225-9.175-9.537-9.175z",fill:"#fff"},null,-1),Dt=[Lt,Vt];function Ut(e,t){return a(),l("svg",Mt,Dt)}const zt=b(It,[["render",Ut]]),Bt={setup(){return{tagsStore:F()}},components:{SvgFacebookRounded:Et,SvgLinkedinRounded:Ot,SvgPinterestRounded:zt,SvgIconTwitter:we},data(){return{strings:{title:this.$t.__("Get out the word!",this.$td),description:this.$t.__("Share your content on your favorite social media platforms to drive engagement and increase your SEO.",this.$td)}}},computed:{socialNetworks(){return[{icon:"svg-icon-twitter",link:"https://x.com/share?url="},{icon:"svg-facebook-rounded",link:"https://www.facebook.com/sharer/sharer.php?u="},{icon:"svg-pinterest-rounded",link:"https://pinterest.com/pin/create/button/?url="},{icon:"svg-linkedin-rounded",link:"https://www.linkedin.com/shareArticle?url="}].map(e=>({...e,link:e.link+this.tagsStore.liveTags.permalink}))}}},Nt={key:0,class:"aioseo-post-publish"},Ft={class:"title"},Gt={class:"description"},Wt={class:"links"},Zt=["href"];function Kt(e,t,s,o,i,d){return o.tagsStore.liveTags.permalink?(a(),l("div",Nt,[r("h2",Ft,m(i.strings.title),1),r("p",Gt,m(i.strings.description),1),r("div",Wt,[(a(!0),l(U,null,z(d.socialNetworks,(c,u)=>(a(),l("a",{class:"link",target:"_blank",key:u,href:c.link},[(a(),B(N(c.icon)))],8,Zt))),128))])])):S("",!0)}const jt=b(Bt,[["render",Kt]]);(function(e){var u,p,n,h,_,f,v,w,x,E,$,k,A;if(!ue()||!xe()||!((p=(u=window.wp)==null?void 0:u.editor)!=null&&p.PluginDocumentSettingPanel)&&!((h=(n=window.wp)==null?void 0:n.editPost)!=null&&h.PluginDocumentSettingPanel))return;const t=((_=window==null?void 0:window.editor)==null?void 0:_.PluginDocumentSettingPanel)||((v=(f=window.wp)==null?void 0:f.editPost)==null?void 0:v.PluginDocumentSettingPanel),s=((w=window==null?void 0:window.editor)==null?void 0:w.PluginPrePublishPanel)||((E=(x=window.wp)==null?void 0:x.editPost)==null?void 0:E.PluginPrePublishPanel),o=(($=window==null?void 0:window.editor)==null?void 0:$.PluginPostPublishPanel)||((A=(k=window.wp)==null?void 0:k.editPost)==null?void 0:A.PluginPostPublishPanel),i=e.plugins.registerPlugin;G();const c=pe().aioseo.user;!c.capabilities.aioseo_page_analysis&&!c.capabilities.aioseo_page_general_settings&&!c.capabilities.aioseo_page_advanced_settings||i("aioseo-publish-panel",{render:()=>e.element.createElement(e.element.Fragment,{},e.element.createElement(t,{title:"AIOSEO",className:"aioseo-document-setting aioseo-seo-overview",icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-document-setting"}))),e.element.createElement(s,{title:["AIOSEO",":",e.element.createElement("span",{key:"scoreDescription",className:"editor-post-publish-panel__link"})],className:"aioseo-pre-publish aioseo-seo-overview",initialOpen:!0,icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-pre-publish"}))),e.element.createElement(o,{title:"AIOSEO",initialOpen:!0,icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-post-publish"}))))})})(window.wp);const D=e=>{let t=ie({...e.component,name:"Standalone/PublishPanel"});return t=re(t),t=ne(t),t=ae(t),G(t),t.mount("#"+e.id),window.addEventListener("load",()=>{Ee(t,!1)}),t};window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&[{id:"aioseo-pre-publish",component:V},{id:"aioseo-document-setting",component:V},{id:"aioseo-post-publish",component:jt}].forEach(t=>{document.getElementById(t.id)?D(t):($e("#"+t.id,L(t.id)),document.addEventListener("animationstart",function(s){L(t.id)===s.animationName&&D(t)},{passive:!0}))});
