(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{797:function(t,e,r){"use strict";r.r(e);r(11),r(51),r(12),r(39),r(43),r(31),r(29),r(30),r(8),r(50),r(118),r(33),r(36),r(69);var n=r(32),c=r(774),o=r.n(c),l=r(775);function f(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){l=!0,c=t},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw c}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var d={fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("pageTitle","Search"),e.next=3,t.$store.dispatch("FETCH_DATA","search-index");case 3:return t.docs=e.sent,e.next=6,t.createIndex(t.docs.slice());case 6:t.index=e.sent;case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{index:null,searching:!1,docs:[],filters:[],results:[]}},computed:{search:{get:function(){return this.$store.getters["user/search"]},set:function(t){this.$store.commit("user/SET_SEARCH",t)}},searchFilters:function(){return this.$store.getters["config/searchFilters"]},filteredResults:function(){var t=this;return this.filters.length>0?this.results.filter((function(e){return t.filters.includes(e.doc.type)})):this.results},darkMode:function(){return this.$store.getters["user/darkMode"]}},watch:{search:function(){this.results=[],this.debouncedGetResults(),this.searching=!0}},created:function(){this.debouncedGetResults=Object(l.debounce)(this.getResults,500),""!==this.search&&(this.debouncedGetResults(),this.searching=!0)},methods:{searchFilterColor:function(t){return this.$store.getters["config/searchFilterColor"](t)},createIndex:function(t){return o()((function(){this.ref("id"),this.field("title",{boost:3}),this.field("type"),this.field("subType"),this.field("qualifiers"),this.field("body"),this.metadataWhitelist=["position"],t.forEach((function(t){this.add(t)}),this)}))},setFilter:function(t){this.filters.includes(t)?this.filters.splice(this.filters.indexOf(t),1):this.filters.push(t)},getResults:function(){if(""===this.search||null===this.search||void 0===this.search||null===this.index)this.results=[];else{var t=this.index.search(this.search);if(t.length>0){var e,r=f(t);try{for(r.s();!(e=r.n()).done;){var n=e.value;n.doc=this.getDoc(n.ref)}}catch(t){r.e(t)}finally{r.f()}this.results=t}}this.searching=!1},getDoc:function(t){return this.docs.find((function(e){return e.id===t}))}},head:function(){return{title:"Search | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Search Mass Effect 5e rules, spells, class features, etc."}]}},layout:"phb"},v=r(2),m=r(7),y=r.n(m),x=r(98),w=r(117),C=r(9),k=r(359),S=r(746),_=r(89),R=r(158),$=r(360),F=r(75),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",lg:"8","offset-lg":"2",xl:"6","offset-xl":"3"}},[r("v-card",[r("v-card-text",[r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search",clearable:"",autofocus:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("v-row",{attrs:{justify:"space-around"}},t._l(t.searchFilters,(function(e){return r("v-col",{key:e.id,staticClass:"text-center",attrs:{cols:"2"}},[r("v-btn",{attrs:{fab:"",small:t.$vuetify.breakpoint.xs,outlined:!t.filters.includes(e.id),color:t.searchFilterColor(e.id),dark:!t.darkMode,light:t.darkMode,title:e.id},on:{click:function(r){return t.setFilter(e.id)}}},[r("v-icon",[t._v("\n                  "+t._s(e.icon)+"\n                ")])],1)],1)})),1)],1)],1)],1)],1),t._v(" "),t.$fetchState.pending?t._e():r("div",[t.filteredResults.length>0?r("div",[t._l(t.filteredResults,(function(t){return[r("me-search-result",{key:t.ref,attrs:{result:t}})]}))],2):r("div",{staticClass:"text-center mt-8"},[t.searching?r("v-progress-circular",{attrs:{size:"70",width:"7",color:"primary",indeterminate:""}}):""===t.search||null===t.search?r("div",[r("p",{staticClass:"text-h5"},[t._v("\n          Enter a search term\n        ")])]):r("div",[r("p",{staticClass:"text-h5"},[t._v("\n          No results found\n        ")])])],1)])],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VBtn:x.a,VCard:w.a,VCardText:C.b,VCol:k.a,VContainer:S.a,VIcon:_.a,VProgressCircular:R.a,VRow:$.a,VTextField:F.a})}}]);