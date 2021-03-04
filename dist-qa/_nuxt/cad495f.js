(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{775:function(t,e,r){"use strict";r.r(e);r(11),r(8),r(42),r(72);var o=r(29),n={fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("pageTitle","About"),e.next=3,Promise.all([t.$store.dispatch("FETCH_DATA","about"),t.$store.dispatch("FETCH_DATA","attributions")]);case 3:data=e.sent,t.shoutouts=data[0].shoutouts,t.people=data[0].people,t.attributions=data[1];case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{attributions:[],people:[],shoutouts:[],communities:[{name:"Discord",image:"/images/misc/discord.svg",alt:"Discord Logo",link:"https://discord.gg/c2UnqkH"},{name:"Reddit",image:"/images/misc/Reddit_Lockup_OnDark.svg",alt:"Reddit Logo",link:"https://www.reddit.com/r/masseffect5e/"}]}},head:function(){return{title:"About | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Learn more about the Mass Effect 5e creators and contributors."}]}}},c=r(2),l=r(7),m=r.n(l),d=r(743),v=r(249),h=r(105),f=r(124),w=r(10),_=r(362),x=r(738),y=r(175),C=r(363),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"black--text text-center mt-10",attrs:{cols:"12",sm:"10",md:"8",lg:"6",xl:"4"}},[r("v-img",{staticClass:"mt-10",attrs:{srcset:"/images/me5e_logo_450w.png 450w, /images/me5e_logo_600w.png 600w, /images/me5e_logo_720w.png 720w, /images/me5e_logo_900w.png 900w, /images/me5e_logo_1200w.png 1200w",sizes:"(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 600px) 600px, (max-width: 720px) 600px, (max-width: 900px) 720px, (max-width: 1200px) 900px, 1200px",src:"/images/me5e_logo_1200w.png",alt:"Mass Effect 5e logo"}}),r("h1",{staticClass:"sr-only"},[t._v("Mass Effect 5e")])],1)],1)],1),r("section",[r("v-container",[r("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[r("v-col",{staticClass:"my-3",attrs:{cols:"12",sm:"10",md:"8"}},[r("div",{staticClass:"text-center"},[r("h2",{staticClass:"text-h4"},[t._v("Join the Community")])])])],1),r("v-row",{staticClass:"mt-5",attrs:{justify:"space-around"}},t._l(t.communities,(function(t){return r("v-col",{key:t.name,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[r("v-card",{staticClass:"text-center",attrs:{to:"community.link",target:"_blank",dark:""}},[r("v-card-text",[r("v-img",{attrs:{src:t.image,alt:t.alt,height:"80",contain:""}})],1)],1)],1)})),1),r("v-row",{staticClass:"mt-5",attrs:{justify:"space-around"}},[r("v-col",{attrs:{cols:"12",md:"8",lg:"6",xl:"4"}},[r("v-alert",{attrs:{type:"info",prominent:""}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{staticClass:"grow"},[t._v("Found a bug or error on the website, please report it!")]),r("v-col",{staticClass:"shrink"},[r("v-btn",{attrs:{href:"https://forms.gle/JtGQqS9KxVFQGtAq7",target:"_blank"}},[t._v("Report bug")])],1)],1)],1)],1)],1),r("v-row",{staticClass:"mt-15",attrs:{justify:"center"}},[r("v-col",{staticClass:"my-3",attrs:{cols:"12",sm:"10",md:"8"}},[r("div",{staticClass:"text-center"},[r("h2",{staticClass:"text-h4"},[t._v("About Mass Effect 5e")]),r("p",[t._v("Mass Effect 5e is a fan-made, D&D 5th Edition, homebrew project that started in early 2016. The core\nruleset and website were created by Luke A with guidance from Hugh T. Luke continues to maintain the\nwebsite, actively develops new features and changes, and filters community-made content.")])])])],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("p",{staticClass:"text-h5"},[t._v("Contributors")]),r("p",[t._v("Mass Effect 5e has had dozens of people who've contributed in a variety of ways, both large and small.\nThe following list represents the people who've contributed to the project in a major way, be it helping\nmoderate the discord server or subreddit, site and character sheet design, or being actively involved in the\ndevelopment of the game. Not everyone on this list is still actively involved and these people are presented in\nno particular order.")])])],1),r("v-row",{attrs:{justify:"center"}},t._l(t.people,(function(e){return r("v-col",{key:e.name,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[r("v-card",{staticClass:"elevation-0 transparent text-center"},[r("v-card-text",[r("v-avatar",{attrs:{size:"92"}},[r("v-img",{attrs:{src:e.image,alt:e.name}})],1),r("p",{staticClass:"text-center text-h6 mb-1"},[t._v(t._s(e.name))]),r("p",{staticClass:"text-subtitle-1"},[t._v(t._s(e.roles))])],1)],1)],1)})),1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("p",{staticClass:"text-h5"},[t._v("Shout Outs")]),r("p",[t._v("In addition to the above, the system has had many contributors who've added invaluable feedback, shared ideas,\ncreated assets, playtested, and much more. If we've missed anyone, it was not on purpose!")]),r("p",[t._v(t._s(t.shoutouts.join(", ")))])])],1)],1)],1),r("section",[r("v-container",[r("v-row",{staticClass:"mt-15",attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("p",{staticClass:"text-h4"},[t._v("Image Attributions")]),r("p",[t._v("Any images not listed were either created by Mass Effect 5e contributors or come from the the\n"),r("a",{attrs:{href:"http://masseffect.wikia.com/wiki/Mass_Effect_Wiki",target:"_blank"}},[t._v("Mass Effect Wiki")]),t._v(".")])])],1),r("v-row",t._l(t.attributions,(function(e){return r("v-col",{key:e.attribution,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[r("v-card",{attrs:{href:e.source,alt:e.title,target:"_blank",hover:""}},[r("v-img",{staticClass:"blue-grey lighten-5",attrs:{src:e.path,height:"200px",contain:""}}),r("v-card-title",{attrs:{color:"grey darken-3"},domProps:{innerHTML:t._s(e.attribution)}})],1)],1)})),1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;m()(component,{VAlert:d.a,VAvatar:v.a,VBtn:h.a,VCard:f.a,VCardText:w.b,VCardTitle:w.c,VCol:_.a,VContainer:x.a,VImg:y.a,VRow:C.a})}}]);