(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{796:function(e,t,n){"use strict";n.r(t);n(72);var o=n(29),r={fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.commit("pageTitle","Tool Proficiencies"),t.next=3,e.$store.dispatch("FETCH_DATA","tool-profs");case 3:e.items=t.sent;case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{items:[],headers:[{label:"Name",key:"name"}]}},head:function(){return{title:"Tools Proficiencies - Appendix | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Tools Proficiences provide additional benefits when combined with certain skills."}]}}},c=n(2),l=n(7),d=n.n(l),m=n(105),f=n(362),v=n(738),h=n(363),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{"align-content":"space-around"}},[n("v-col",[n("me-page-title",{attrs:{title:"Tool Proficiencies"}})],1),e._v(" "),n("v-col",{staticClass:"text-right"},[n("v-btn",{attrs:{to:"/manual/equipment#tools-kits",nuxt:"",outlined:"",color:"primary"}},[e._v("\n        Tools Proficiency Rules\n      ")])],1)],1),e._v(" "),n("me-skeleton-loader",{attrs:{pending:e.$fetchState.pending,type:"expansionList"}},[n("me-expansion-list",{attrs:{items:e.items,headers:e.headers,type:"appendix/tool-profs",bookmarkable:!1},scopedSlots:e._u([{key:"header.name",fn:function(t){var o=t.item;return[n("div",[e._v("\n          "+e._s(o.name)+"\n        ")]),e._v(" "),n("div",{staticClass:"text-caption"},[e._v("\n          "+e._s(o.type)+"\n        ")])]}}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VCol:f.a,VContainer:v.a,VRow:h.a})}}]);