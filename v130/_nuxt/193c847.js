(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{770:function(t,e,n){"use strict";var strong=n(363),r=n(143);t.exports=n(265)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(r(this,"Set"),t=0===t?0:t,t)}},strong)},796:function(t,e,n){"use strict";n.r(e);n(11),n(8),n(39),n(770);var r=n(34),o=(n(69),n(32)),c={fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("pageTitle","Armor & Weapon Mods"),e.next=3,t.$store.dispatch("FETCH_DATA","mods");case 3:t.items=e.sent;case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{items:[],ruleLink:{to:"/manual/equipment#mods",name:"Mod Rules"}}},computed:{filters:function(){return[{name:"Type",key:"type",options:["Armor","Weapon"]},this.$store.getters["config/rarityOptions"],{name:"Placement",key:"placement",options:Object(r.a)(new Set(this.items.map((function(i){return i.placement})))).sort()},{name:"Availability",key:"availability",options:Object(r.a)(new Set(this.items.map((function(i){return i.availability})).flat())).sort()},{name:"Benefits",key:"notes",options:Object(r.a)(new Set(this.items.map((function(i){return i.notes})).flat())).sort()}]},pageTitle:function(){return this.$store.getters.pageTitle},headers:function(){return this.$store.getters["config/modHeaders"]}},head:function(){return{title:"Gear - Equipment | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Mass Effect 5e comes with a full set of armor and weapon mods that let you customize your gear to your needs."}]}},layout:"list"},l=n(2),m=n(7),f=n.n(m),d=n(747),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("me-list-page",{attrs:{pending:this.$fetchState.pending,title:this.pageTitle,"rule-link":this.ruleLink,filters:this.filters,headers:this.headers,items:this.items,"default-sort":"name"},scopedSlots:this._u([{key:"list",fn:function(t){var n=t.displayItems;return[e("me-mod-list",{attrs:{items:n}})]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VContainer:d.a})}}]);