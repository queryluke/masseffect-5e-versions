(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{761:function(e,t,n){"use strict";var strong=n(366),r=n(159);e.exports=n(277)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return strong.def(r(this,"Set"),e=0===e?0:e,e)}},strong)},785:function(e,t,n){"use strict";n.r(t);n(32),n(11),n(8),n(42),n(761);var r=n(33),o=(n(72),n(29)),c={fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.commit("pageTitle","Gear"),t.next=3,e.$store.dispatch("FETCH_DATA","gear");case 3:e.items=t.sent;case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{items:[],ruleLink:{to:"/manual/equipment",name:"Gear Rules"}}},computed:{filters:function(){var e=this.$store.getters["config/rarityOptions"];return[{name:"Type",key:"type",options:Object(r.a)(new Set(this.items.map((function(i){return i.type})))).sort()},e]},pageTitle:function(){return this.$store.getters.pageTitle},headers:function(){return this.$store.getters["config/gearHeaders"]}},head:function(){return{title:"Gear - Equipment | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Mass Effect 5e gear comprises a number of items, like tools and kits, and special weapons, like grenades, heavy weapons."}]}},layout:"list"},l=n(2),f=n(7),m=n.n(f),d=n(738),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("me-list-page",{attrs:{pending:e.$fetchState.pending,title:e.pageTitle,"rule-link":e.ruleLink,filters:e.filters,headers:e.headers,items:e.items,"default-sort":"name"},scopedSlots:e._u([{key:"list",fn:function(e){var t=e.displayItems;return[n("me-gear-list",{attrs:{items:t}})]}}])})],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VContainer:d.a})}}]);