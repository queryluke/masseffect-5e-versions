(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1058:function(t,e,n){"use strict";n.r(e);var r=n(24),o=(n(53),{fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.dispatch("SET_META",{title:t.$t("weapon_props_title"),subtitle:t.$t("appendix_title"),description:t.$t("meta.weapon_props")}),e.next=3,t.$store.dispatch("FETCH_DATA","weapon-properties");case 3:case"end":return e.stop()}}),e)})))()},computed:{items:function(){return this.$store.getters.getData("weapon-properties")}}}),l=n(0),c=n(3),m=n.n(c),d=n(977),h=n(309),f=n(201),v=n(4),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("me-page-title"),t._v(" "),n("me-skeleton-loader",{attrs:{pending:t.$fetchState.pending,type:"articleList"}},[n("v-list",{staticClass:"mt-5"},t._l(t.items,(function(e){return n("v-list-item",{key:e.name},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n            "+t._s(e.name)),n("me-rule-chip",{attrs:{item:e,"x-small":""}})],1),t._v(" "),n("div",{staticClass:"text-body-2 font-weight-light"},[n("me-html",{attrs:{content:e.html}})],1)],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VContainer:d.a,VList:h.a,VListItem:f.a,VListItemContent:v.b,VListItemTitle:v.d})}}]);