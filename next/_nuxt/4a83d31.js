(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1050:function(t,e,n){"use strict";n.r(e);var l=n(23),r=(n(54),{fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.dispatch("SET_META",{title:t.$t("skills_title"),subtitle:t.$t("appendix_title"),description:t.$t("meta.skills")}),e.next=3,t.$store.dispatch("FETCH_DATA","skills");case 3:case"end":return e.stop()}}),e)})))()},computed:{items:function(){return this.$store.getters.getData("skills")}}}),c=n(0),o=n(3),m=n.n(o),v=n(971),d=n(309),h=n(201),_=n(4),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("me-page-title"),t._v(" "),n("me-skeleton-loader",{attrs:{pending:t.$fetchState.pending,type:"articleList"}},[n("v-list",t._l(t.items,(function(e){return n("v-list-item",{key:e.name},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n            "+t._s(e.name)),n("me-rule-chip",{attrs:{item:e,"x-small":""}})],1),t._v(" "),n("v-list-item-subtitle",[t._v("\n            "+t._s(t.$t("abilities."+e.link+".title"))+"\n          ")]),t._v(" "),n("div",{staticClass:"text-body-2 font-weight-light"},[n("me-html",{attrs:{content:e.html}})],1)],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VContainer:v.a,VList:d.a,VListItem:h.a,VListItemContent:_.b,VListItemSubtitle:_.c,VListItemTitle:_.d})}}]);