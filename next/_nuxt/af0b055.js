(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1025:function(t,e,r){t.exports=r.p+"img/me5e_logo_1200w.0db5507.png"},1026:function(t,e,r){t.exports=r.p+"img/datapad.a77449e.png"},1027:function(t,e,r){t.exports=r.p+"img/grunts.63be65c.png"},1028:function(t,e,r){t.exports=r.p+"img/reaper_avatar.a0bee13.jpg"},1029:function(t,e,r){t.exports=r.p+"img/sys_alliance.80564df.png"},1030:function(t,e,r){t.exports=r.p+"img/tt_assets.3f83f2b.png"},1033:function(t,e,r){var map={"./Reddit_Lockup_OnDark.svg":482,"./assault_rifle.svg":479,"./datapad.png":1026,"./discord.svg":483,"./grunts.png":1027,"./reaper_avatar.jpg":1028,"./sys_alliance.png":1029,"./tt_assets.png":1030};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=1033},1049:function(t,e,r){"use strict";r.r(e);var n=r(24),o=(r(52),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.i18n,r.dispatch("SET_META",{title:n.tc("about_title",2),description:n.t("meta.about")}),e.next=4,r.dispatch("FETCH_LOTS",["about","attributions"]);case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{communities:[{name:"Discord",image:"discord.svg",alt:"Discord Logo",link:"https://discord.gg/c2UnqkH"},{name:"Reddit",image:"Reddit_Lockup_OnDark.svg",alt:"Reddit Logo",link:"https://www.reddit.com/r/masseffect5e/"}]}},computed:{shoutouts:function(){return this.$store.getters.getData("about").shoutouts},current:function(){return this.$store.getters.getData("about").current},former:function(){return this.$store.getters.getData("about").former},attributions:function(){return this.$store.getters.getData("attributions")}}}),c=r(0),l=r(3),v=r.n(l),_=r(998),m=r(310),f=r(200),d=r(307),h=r(5),x=r(992),w=r(990),C=r(174),y=r(265),k=r(995),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"max-width":"1200px"}},[n("section",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"text-center mt-10 black--text",attrs:{cols:"12",sm:"10",md:"8",lg:"6",xl:"4"}},[n("v-img",{staticClass:"mt-10",attrs:{src:r(1025),alt:"Mass Effect 5e logo"}},[n("h1",{staticClass:"sr-only"},[t._v("\n            "+t._s(t.$t("title"))+"\n          ")])])],1)],1)],1),t._v(" "),n("section",[n("v-container",[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"my-3",attrs:{cols:"12",sm:"10",md:"8"}},[n("div",{staticClass:"text-center"},[n("h2",{staticClass:"text-h4"},[t._v("\n              "+t._s(t.$t("buttons.join_community"))+"\n            ")])])])],1),t._v(" "),n("v-row",{staticClass:"mt-5",attrs:{justify:"space-around"}},t._l(t.communities,(function(t){return n("v-col",{key:t.name,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[n("v-card",{staticClass:"text-center",attrs:{href:t.link,target:"_blank",dark:""}},[n("v-card-text",[n("v-img",{attrs:{src:r(1033)("./"+t.image),alt:t.alt,height:"80",contain:""}})],1)],1)],1)})),1),t._v(" "),n("v-row",{staticClass:"mt-5",attrs:{justify:"space-around"}},[n("v-col",{attrs:{cols:"12",md:"8",lg:"6"}},[n("v-alert",{attrs:{type:"info",prominent:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"grow"},[t._v("\n                "+t._s(t.$t("aboutpage.bug_text"))+"\n              ")]),t._v(" "),n("v-col",{staticClass:"shrink"},[n("v-btn",{attrs:{href:"https://forms.gle/JtGQqS9KxVFQGtAq7",target:"_blank"}},[t._v("\n                  "+t._s(t.$t("buttons.bug"))+"\n                ")])],1)],1)],1)],1)],1),t._v(" "),n("v-row",{staticClass:"mt-15",attrs:{justify:"center"}},[n("v-col",{staticClass:"my-3",attrs:{cols:"12",sm:"10",md:"8"}},[n("div",{staticClass:"text-center"},[n("h2",{staticClass:"text-h4"},[t._v("\n              "+t._s(t.$t("aboutpage.about_me5e_title"))+"\n            ")]),t._v(" "),n("p",[t._v("\n              "+t._s(t.$t("aboutpage.about_text"))+"\n            ")])])])],1),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"text-h5"},[t._v("\n            "+t._s(t.$t("aboutpage.contributors_title"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("aboutpage.contributors_text"))+"\n          ")])])],1),t._v(" "),n("v-row",{attrs:{justify:"center"}},t._l(t.current,(function(e){return n("v-col",{key:e.name,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[n("v-card",{staticClass:"text-center",attrs:{elevation:"0",color:"transparent"}},[n("v-card-text",[n("v-avatar",{attrs:{size:"92"}},[n("v-image",{attrs:{src:e.image,alt:e.name}})],1),t._v(" "),n("p",{staticClass:"text-center text-h6 mb-1"},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),n("p",{staticClass:"text-subtitle-1"},[t._v("\n                "+t._s(t.$t("aboutpage.roles."+e.roles))+"\n              ")])],1)],1)],1)})),1),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"text-h5"},[t._v("\n            "+t._s(t.$t("aboutpage.former_contributors_title"))+"\n          ")])])],1),t._v(" "),n("v-row",{attrs:{justify:"center"}},t._l(t.former,(function(e){return n("v-col",{key:e.name,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[n("v-card",{staticClass:"text-center",attrs:{elevation:"0",color:"transparent"}},[n("v-card-text",[n("v-avatar",{attrs:{size:"92"}},[n("v-image",{attrs:{src:e.image,alt:e.name}})],1),t._v(" "),n("p",{staticClass:"text-center text-h6 mb-1"},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),n("p",{staticClass:"text-subtitle-1"},[t._v("\n                "+t._s(t.$t("aboutpage.roles."+e.roles))+"\n              ")])],1)],1)],1)})),1),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"text-h5"},[t._v("\n            "+t._s(t.$t("aboutpage.shoutouts_title"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("aboutpage.shoutouts_text"))+"\n          ")]),t._v(" "),n("v-row",[n("v-col",[n("v-alert",{attrs:{type:"info"}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"grow"},[t._v("\n                    Special shout-out to StrayChowChow for letting us use the descriptions and traits from "),n("em",[t._v("Races of the Relay")]),t._v("!\n                    If you can't convince your group to play in a sci-fi setting and want to bring a little Mass Effect to\n                    your D&D 5e game, you should definitely check it out!\n                  ")]),t._v(" "),n("v-col",{staticClass:"shrink"},[n("v-btn",{attrs:{href:"https://www.gmbinder.com/share/-L7HA1pIhxcx3bVb8vqf",target:"_blank"}},[t._v("\n                      Races of the Relay\n                    ")])],1)],1)],1)],1)],1),t._v(" "),n("p",[t._v("\n            "+t._s(t.shoutouts.join(", "))+", "+t._s(t.$t("aboutpage.all_others"))+"\n          ")])],1)],1)],1)],1),t._v(" "),n("section",[n("v-container",[n("v-row",{staticClass:"mt-15",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"text-h4"},[t._v("\n            "+t._s(t.$t("aboutpage.image_attributions_title"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("aboutpage.image_attributions_text"))+"\n            "),n("a",{attrs:{href:"http://masseffect.wikia.com/wiki/Mass_Effect_Wiki",target:"_blank"}},[n("v-icon",{attrs:{size:"18"}},[t._v("mdi-open-in-new")])],1)])])],1),t._v(" "),n("v-row",t._l(t.attributions,(function(e){return n("v-col",{key:e.attribution,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[n("v-card",{attrs:{href:e.source,alt:e.title,target:"_blank",hover:""}},[n("v-img",{staticClass:"blue-grey ligthen-5",attrs:{src:e.path,height:"200px",contain:""}}),t._v(" "),n("v-card-title",{attrs:{color:"grey darken-3"}},[t._v("\n              "+t._s(e.attribution)+"\n            ")])],1)],1)})),1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAlert:_.a,VAvatar:m.a,VBtn:f.a,VCard:d.a,VCardText:h.c,VCardTitle:h.d,VCol:x.a,VContainer:w.a,VIcon:C.a,VImg:y.a,VRow:k.a})}}]);