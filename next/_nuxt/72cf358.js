(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1047:function(t,e,n){"use strict";n.r(e);var r=n(24),c=(n(7),n(54),{fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.dispatch("SET_META",{title:t.$tc("vehicle_title",2),description:t.$t("meta.vehicles")}),e.next=3,t.$store.dispatch("FETCH_DATA","vehicles");case 3:case"end":return e.stop()}}),e)})))()},computed:{items:function(){return this.$store.getters.getData("vehicles")},transports:function(){return this.items.filter((function(t){return"transport"===t.type}))},starships:function(){return this.items.filter((function(t){return"starship"===t.type}))}}}),o=n(0),l=n(3),h=n.n(l),v=n(199),m=n(972),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("me-page-title"),t._v(" "),n("div",{staticClass:"text-md-right"},[n("v-btn",{attrs:{to:"/manual/vehicles",nuxt:"",outlined:"",color:"primary"}},[t._v("\n      Vehicle Rules\n    ")])],1),t._v(" "),n("p",{staticClass:"text-subtitle-1"},[t._v("\n    Transports\n  ")]),t._v(" "),n("me-skeleton-loader",{attrs:{pending:t.$fetchState.pending,type:"expansionList"}},[n("me-vehicle-list",{attrs:{items:t.transports}})],1),t._v(" "),n("p",{staticClass:"text-subtitle-1"},[t._v("\n    Starships\n  ")]),t._v(" "),n("me-skeleton-loader",{attrs:{pending:t.$fetchState.pending,type:"expansionList"}},[n("me-vehicle-list",{attrs:{items:t.starships}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:v.a,VContainer:m.a})}}]);