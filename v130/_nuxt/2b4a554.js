(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{832:function(t,e,n){"use strict";n.r(e);var r=n(25),c=(n(30),n(74),{fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("FETCH_ITEM",{endpoint:"backgrounds",id:t.$route.params.id});case 2:t.item=e.sent,t.$store.commit("pageTitle","Backgrounds");case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{item:{}}},head:function(){return{title:"".concat(this.item.name," - Backgrounds | Mass Effect 5e"),meta:[{hid:"description",name:"description",content:"Information about the ".concat(this.item.name," background")}]}}}),o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("me-item-page",{attrs:{pending:t.$fetchState.pending,item:t.item,type:"background"}})}),[],!1,null,null,null);e.default=component.exports}}]);