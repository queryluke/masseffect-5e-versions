(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1253:function(t,e,n){"use strict";n.r(e);var r=n(1045),l={data:function(){return{items:r}},head:function(){return{title:"Classes | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Choose your favorite Mass Effect class, each with 3 subclasses to provide variety to the game."}]}},layout:"phb",methods:{savingThrows:function(t){var e=this;return t.savingThrows.map((function(t){return e.$options.filters.capitalize(t)})).join(" & ")}}},o=n(4),c=n(6),v=n.n(c),d=n(190),h=n(185),m=n(187),f=n(273),_=n(188),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("h2",{staticClass:"display-1 hidden-sm-and-down"},[t._v("Classes")]),n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.items,(function(e){return n("v-flex",{key:e.id,staticClass:"xs12 sm6 md4",attrs:{"d-flex":""}},[n("v-card",{staticClass:"ma-2",attrs:{to:{name:"phb-classes-id",params:{id:e.id}},hover:""}},[n("v-container",{attrs:{fluid:"","grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"xs8"},[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.name))]),n("p",[t._v(t._s(e.snippet))])]),n("v-flex",{staticClass:"xs4"},[n("v-img",{attrs:{src:"/images/classes/"+e.id+".svg",height:"100px",contain:""}})],1),n("v-flex",{staticClass:"xs12"},[n("p",{staticClass:"ma-0"},[n("strong",[t._v("Hit Die:")]),t._v(" 1d"+t._s(e.hitDie))]),n("p",{staticClass:"ma-0"},[n("strong",[t._v("Primary Ability:")]),t._v(" "+t._s(e.primaryAbility))]),n("p",[n("strong",[t._v("Saves:")]),t._v(" "+t._s(t.savingThrows(e)))])])],1)],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:d.a,VContainer:h.a,VFlex:m.a,VImg:f.a,VLayout:_.a})}}]);