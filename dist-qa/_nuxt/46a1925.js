(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{941:function(e,t,n){"use strict";n.r(t);n(78);var r=n(25),o={fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("FETCH_DATA","backgrounds");case 2:e.items=t.sent,e.$store.commit("pageTitle","Backgrounds");case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{items:[]}},head:function(){return{title:"Backgrounds | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Backgrounds provide additional flavor and benefits to your character."}]}}},c=n(2),d=n(7),l=n.n(d),f=n(873),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("me-page-title",{attrs:{title:"Backgrounds"}}),e._v(" "),n("p",[e._v("\n    The sample backgrounds presented here provide both concrete benefits (features, proficiencies, and languages) and\n    roleplaying suggestions.\n  ")]),e._v(" "),n("me-skeleton-loader",{attrs:{pending:e.$fetchState.pending,type:"expansionList"}},[n("me-expansion-list",{attrs:{items:e.items,headers:[{label:"Name",key:"name"}],bookmarkable:!1,type:"backgrounds"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VContainer:f.a})}}]);