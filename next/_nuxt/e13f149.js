(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1045:function(e,t,n){"use strict";n.r(t);var r=n(20),c=n(23),o=(n(24),n(35),n(54),{fetch:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.dispatch("SET_META",{title:e.$tc("species_title",2),description:e.$t("meta.species")}),t.next=3,e.$store.dispatch("FETCH_LOTS",["species","traits"]);case 3:case"end":return t.stop()}}),t)})))()},computed:{items:function(){return this.$fetchState.pending?Object(r.a)(Array(9).keys()):this.$store.getters.getData("species")}}}),l=n(0),d=n(3),f=n.n(d),m=n(973),h=n(971),w=n(976),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("me-page-title"),e._v(" "),n("v-row",e._l(e.items,(function(t){return n("v-col",{key:t.id,staticClass:"d-flex flex-column",attrs:{sm:"6",md:"4"}},[n("me-skeleton-loader",{attrs:{pending:e.$fetchState.pending,type:"card"}},[n("me-species-card",{attrs:{item:t}})],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCol:m.a,VContainer:h.a,VRow:w.a})}}]);