(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1052:function(e,t,n){"use strict";n.r(t);var r=n(24),o=(n(52),{data:function(){return{headers:[{label:"Name",key:"name"}]}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.dispatch("SET_META",{title:e.$tc("background_title",2),description:e.$t("meta.backgrounds")}),t.next=3,e.$store.dispatch("FETCH_DATA","backgrounds");case 3:case"end":return t.stop()}}),t)})))()},computed:{items:function(){return this.$store.getters.getData("backgrounds")}}}),c=n(0),d=n(3),l=n.n(d),m=n(990),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("me-page-title"),e._v(" "),e._l(e.$t("background_intro"),(function(t,r){return n("p",{key:r},[e._v("\n    "+e._s(t)+"\n  ")])})),e._v(" "),n("me-skeleton-loader",{attrs:{pending:e.$fetchState.pending,type:"expansionList"}},[n("me-expansion-list",{attrs:{items:e.items,bookmarkable:!1,headers:e.headers,type:"backgrounds"}})],1)],2)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VContainer:m.a})}}]);