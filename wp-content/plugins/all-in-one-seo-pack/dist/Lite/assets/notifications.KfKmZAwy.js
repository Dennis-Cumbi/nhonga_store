import{c as s,t as a,E as r,b as c,o as l,V as u}from"./js/runtime-dom.esm-bundler.tPRhSV4q.js";import{l as p,z as f}from"./js/links.Ce9S4kjc.js";import{_ as m}from"./js/_plugin-vue_export-helper.BN1snXvA.js";import"./js/default-i18n.DXRQgkn2.js";import"./js/helpers.CXsRrhc8.js";const d={data(){return{interval:null,display:!1,strings:{newNotifications:this.$t.__("You have new notifications!",this.$td)}}},methods:{showNotificationsPopup(){if(this.interval&&window.aioseoNotifications&&parseInt(window.aioseoNotifications.newNotifications)){this.display=!0;const o=document.querySelector("#wp-admin-bar-aioseo-main");o&&o.classList.add("new-notifications")}},hideNotificationsPopup(){this.interval=null,setTimeout(()=>{this.display=!1;const o=document.querySelector("#wp-admin-bar-aioseo-main");o&&o.classList.remove("new-notifications")},500)}},created(){this.interval=setInterval(this.showNotificationsPopup,500),this.showNotificationsPopup(),setTimeout(()=>{this.interval=null,this.display=!1},5e3)}};function w(o,i,y,N,e,t){return e.display?(l(),s("div",{key:0,onClick:i[0]||(i[0]=r((...n)=>t.hideNotificationsPopup&&t.hideNotificationsPopup(...n),["stop"])),onMouseover:i[1]||(i[1]=(...n)=>t.hideNotificationsPopup&&t.hideNotificationsPopup(...n)),class:"aioseo-menu-new-notifications"},a(e.strings.newNotifications),33)):c("",!0)}const h=m(d,[["render",w]]),_=document.querySelector("#aioseo-menu-new-notifications");if(_){const o=u({...h,name:"Standalone/Notifications"});p(o),o.config.globalProperties.$t=f,o.config.globalProperties.$td="all-in-one-seo-pack",o.config.globalProperties.$tdPro="aioseo-pro",o.mount("#aioseo-menu-new-notifications")}
