(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1034:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{types:{weapons:{label:this.$tc("weapon_title",2),component:"MeWeaponList"},armor:{label:this.$tc("armor_title",2),component:"MeArmorList"},gear:{label:this.$tc("gear_title",2),component:"MeGearList"},mods:{label:this.$tc("mod_title",2),component:"MeModList"},vehicle:{label:this.$tc("vehicle_title",2),component:"MeVehicleList"},powers:{label:this.$tc("power_title",2),component:"MePowerList"},bestiary:{label:this.$tc("npc_title",2),component:"MeNpcList"}}}},computed:{bookmarks:function(){return this.$store.getters["user/bookmarks"]}},created:function(){this.$store.dispatch("SET_META",{title:this.$t("bookmarks_title"),description:this.$t("meta.bookmarks")})}},l=o(0),r=o(3),c=o.n(r),m=o(971),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("me-page-title"),t._v(" "),t._l(t.bookmarks,(function(e,n){return[e.length>0?o("div",{key:n,staticClass:"mt-5"},[o("p",{staticClass:"text-subtitle mb-1"},[t._v("\n        "+t._s(t.types[n].label)+"\n      ")]),t._v(" "),o(t.types[n].component,{tag:"component",attrs:{items:e}})],1):t._e()]}))],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:m.a})}}]);