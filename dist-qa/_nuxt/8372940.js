(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{805:function(t,e,n){"use strict";n.r(e);n(69);var r=n(32),o={fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("pageTitle","Weapon Properties"),e.next=3,t.$store.dispatch("FETCH_DATA","weapon-properties");case 3:t.items=e.sent;case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{items:[]}},head:function(){return{title:"Weapon Properties - Appendix | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Mass Effect 5e comes with some new and fun weapon properties!"}]}}},c=n(2),l=n(7),m=n.n(l),f=n(746),d=n(240),h=n(159),v=n(25),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("me-page-title"),t._v(" "),n("me-skeleton-loader",{attrs:{pending:t.$fetchState.pending,type:"articleList"}},[n("v-list",{staticClass:"mt-5"},t._l(t.items,(function(e){return n("v-list-item",{key:e.name},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"text-body-2 font-weight-light"},[n("me-html",{attrs:{content:e.description}})],1)],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VContainer:f.a,VList:d.a,VListItem:h.a,VListItemContent:v.a,VListItemTitle:v.c})}}]);