(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{957:function(e,t,n){"use strict";n.r(t);n(78);var r=n(25),l={fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.commit("pageTitle","Random Height & Weight"),t.next=3,e.$store.dispatch("FETCH_DATA","random-height-weight");case 3:e.stats=t.sent,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{loading:!0,stats:[],metricTable:[{key:"species",display:"Species"},{key:"baseCm",display:"Base Height (cm)"},{key:"heightModifierCm",display:"Height Modifier"},{key:"weightKg",display:"Base Weight (kg)"},{key:"weightModifierKg",display:"Weight Modifier"}],imperialTable:[{key:"species",display:"Species"},{key:"base",display:"Base Height"},{key:"heightModifier",display:"Height Modifier"},{key:"baseWeight",display:"Base Weight"},{key:"weightModifier",display:"Weight Modifier"}]}},computed:{imperial:function(){return this.$store.getters["user/imperial"]}},head:function(){return{title:"Conditions - Random Height & Weight | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Create random heights and weights for your Mass Effect 5e Operative"}]}}},o=n(2),d=n(7),c=n.n(d),h=n(873),y=n(431),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?e._e():n("v-container",[n("me-page-title"),e._v(" "),n("p",{staticClass:"mt-5"},[n("strong",[e._v("Calculating Random Height.")]),e._v(" Base Height + Height Modifier Roll\n  ")]),e._v(" "),n("p",[n("strong",[e._v("Calculating Random Weight.")]),e._v(" Base Weight + (Height Modifier Roll x Weight Modifier Roll)\n  ")]),e._v(" "),n("me-skeleton-loader",{attrs:{pending:e.$fetchState.pending,type:"table-tbody"}},[n("v-simple-table",[e.imperial?n("template",{slot:"default"},[n("thead",[n("tr",e._l(e.imperialTable,(function(t){return n("th",{key:t.key},[e._v("\n              "+e._s(t.display)+"\n            ")])})),0)]),e._v(" "),n("tbody",e._l(e.stats,(function(t){return n("tr",{key:t.id},e._l(e.imperialTable,(function(r){return n("td",{key:r.key},[e._v("\n              "+e._s(t[r.key])+"\n            ")])})),0)})),0)]):n("template",{slot:"default"},[n("thead",[n("tr",e._l(e.metricTable,(function(t){return n("th",{key:t.key},[e._v("\n              "+e._s(t.display)+"\n            ")])})),0)]),e._v(" "),n("tbody",e._l(e.stats,(function(t){return n("tr",{key:t.id},e._l(e.metricTable,(function(r){return n("td",{key:r.key},[e._v("\n              "+e._s(t[r.key])+"\n            ")])})),0)})),0)])],2)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VContainer:h.a,VSimpleTable:y.a})}}]);