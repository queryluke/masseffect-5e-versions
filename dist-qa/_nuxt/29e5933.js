(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{818:function(t,e,n){"use strict";n.r(e);n(69);var r=n(32),o={fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("pageTitle",t.pageTitle),e.next=3,t.$store.dispatch("FETCH_DATA","gmg");case 3:t.items=t.$store.getters.getData("gmg").filter((function(e){return e.section===t.$route.params.id})).sort((function(a,b){return a.order>b.order?1:-1}));case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{titles:{"armor-creation":"Creating Armor","vehicle-creation":"Creating New Vehicles","encounter-creation":"Creating Encounters"},items:[]}},computed:{pageTitle:function(){return this.titles[this.$route.params.id]}},head:function(){return{title:"".concat(this.pageTitle," | Mass Effect 5e"),meta:[{hid:"description",name:"description",content:"The Galaxy Masters section has handy tools and guides for expanding your campaign"}]}}},c=n(2),l=n(7),h=n.n(l),d=n(746),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return this.fetchState.pending?this._e():e("v-container",[e("me-page-title",{attrs:{title:this.pageTitle}}),this._v(" "),this._l(this.items,(function(t){return e("me-rule-card",{key:t.id,attrs:{item:t}})}))],2)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VContainer:d.a})}}]);