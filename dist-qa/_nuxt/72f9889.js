(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{788:function(e,t,o){"use strict";o.r(t);var n={data:function(){return{types:{weapons:{label:"Weapons",component:"weapon"},armor:{label:"Armor",component:"armor"},gear:{label:"Gear",component:"gear"},mods:{label:"Mods",component:"mod"},vehicle:{label:"Vehicles",component:"vehicle"},powers:{label:"Powers",component:"power"},bestiary:{label:"Npcs",component:"npc"}}}},computed:{bookmarks:function(){return this.$store.getters["user/bookmarks"]}},created:function(){this.$store.commit("pageTitle","Bookmarks")},methods:{goToMark:function(e){this.$vuetify.goTo(e,{offset:-68})}},head:function(){return{title:"Bookmarks | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Keep your favorite weapons, enemies, and spells close at hand with our nifty bookmark tool."}]}}},r=o(2),l=o(7),c=o.n(l),m=o(746),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("me-page-title"),e._v(" "),e._l(e.bookmarks,(function(t,n){return o("div",{key:n,staticClass:"mt-5"},[o("p",{staticClass:"text-subtitle mb-1"},[e._v("\n      "+e._s(e.types[n].label)+"\n    ")]),e._v(" "),o("me-"+e.types[n].component+"-list",{tag:"component",attrs:{items:t}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VContainer:m.a})}}]);