(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{808:function(e,t,n){"use strict";n.r(t);n(31),n(72);var r=n(29),c={fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("FETCH_ITEM",{endpoint:"feats",id:e.$route.params.id});case 2:e.item=t.sent,e.$store.commit("pageTitle",e.item.name);case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{item:{}}},head:function(){return{title:"".concat(this.item.name," - Feats | Mass Effect 5e"),meta:[{hid:"description",name:"description",content:"Information about the ".concat(this.item.name," feat")}]}}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("me-item-page",{attrs:{pending:e.$fetchState.pending,item:e.item,type:"feat"}})}),[],!1,null,null,null);t.default=component.exports}}]);