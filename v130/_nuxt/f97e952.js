(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{812:function(e,t,n){"use strict";n.r(t);var r=n(25),c=n(33),o=(n(74),n(23),n(41),{data:function(){return{items:Object(c.a)(Array(6).keys())}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.commit("pageTitle","Classes"),t.next=3,e.$store.dispatch("FETCH_DATA","classes");case 3:e.items=t.sent;case 4:case"end":return t.stop()}}),t)})))()},head:function(){return{title:"Classes | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Choose your favorite Mass Effect class, each with 3 subclasses to provide variety to the game."}]}}}),l=n(2),f=n(5),d=n.n(f),m=n(733),h=n(729),v=n(735),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("me-page-title"),e._v(" "),n("v-row",e._l(e.items,(function(t,r){return n("v-col",{key:r,staticClass:"d-flex flex-column",attrs:{cols:"12",md:"6",xl:"4"}},[n("me-skeleton-loader",{attrs:{pending:e.$fetchState.pending,type:"card"}},[n("me-class-card",{attrs:{item:t}})],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VCol:m.a,VContainer:h.a,VRow:v.a})}}]);