(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1051:function(t,e,n){"use strict";n.r(e);var o=n(23),r=(n(54),{data:function(){return{headers:[{label:"Name",key:"name"}]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.dispatch("SET_META",{title:t.$t("tool_profs_title"),subtitle:t.$t("appendix_title"),description:t.$t("meta.tool_profs")}),e.next=3,t.$store.dispatch("FETCH_DATA","tool-profs");case 3:case"end":return e.stop()}}),e)})))()},computed:{items:function(){return this.$store.getters.getData("tool-profs")}}}),l=n(0),c=n(3),d=n.n(c),_=n(199),m=n(973),f=n(971),v=n(976),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{"align-content":"space-around"}},[n("v-col",[n("me-page-title")],1),t._v(" "),n("v-col",{staticClass:"text-right"},[n("v-btn",{attrs:{to:"/manual/equipment#tools-kits",nuxt:"",outlined:"",color:"primary"}},[t._v("\n        "+t._s(t.$t("rules_title"))+"\n      ")])],1)],1),t._v(" "),n("me-skeleton-loader",{attrs:{pending:t.$fetchState.pending,type:"expansionList"}},[n("me-expansion-list",{attrs:{items:t.items,headers:t.headers,type:"appendix/tool-profs",bookmarkable:!1},scopedSlots:t._u([{key:"header.name",fn:function(e){var o=e.item;return[n("div",[t._v("\n          "+t._s(o.name)+"\n        ")]),t._v(" "),o.type?n("div",{staticClass:"text-caption"},[t._v("\n          "+t._s(t.$t("tool_prof_types."+o.type))+"\n        ")]):t._e()]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:_.a,VCol:m.a,VContainer:f.a,VRow:v.a})}}]);