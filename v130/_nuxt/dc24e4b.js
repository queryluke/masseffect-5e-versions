(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{756:function(t,e,r){var n=r(48),o=r(285);t.exports=n?o:function(t){return Set.prototype.values.call(t)}},757:function(t,e,r){"use strict";var n=r(393),o=r(394);t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},758:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(774);n({target:"Set",proto:!0,real:!0,forced:o},{addAll:function(){return c.apply(this,arguments)}})},759:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(395);n({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},760:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(86),f=r(36),l=r(71),d=r(93),h=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{difference:function(t){var e=f(this),r=new(d(e,c("Set")))(e),n=l(r.delete);return h(t,(function(t){n.call(r,t)})),r}})},761:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(36),f=r(75),l=r(756),d=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{every:function(t){var e=c(this),r=l(e),n=f(t,arguments.length>1?arguments[1]:void 0,3);return!d(r,(function(t,r){if(!n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},762:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(86),f=r(36),l=r(71),d=r(75),h=r(93),v=r(756),S=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{filter:function(t){var e=f(this),r=v(e),n=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(h(e,c("Set"))),m=l(o.add);return S(r,(function(t){n(t,t,e)&&m.call(o,t)}),{IS_ITERATOR:!0}),o}})},763:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(36),f=r(75),l=r(756),d=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{find:function(t){var e=c(this),r=l(e),n=f(t,arguments.length>1?arguments[1]:void 0,3);return d(r,(function(t,r){if(n(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},764:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(86),f=r(36),l=r(71),d=r(93),h=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{intersection:function(t){var e=f(this),r=new(d(e,c("Set"))),n=l(e.has),o=l(r.add);return h(t,(function(t){n.call(e,t)&&o.call(r,t)})),r}})},765:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(36),f=r(71),l=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function(t){var e=c(this),r=f(e.has);return!l(t,(function(t,n){if(!0===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},766:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(86),f=r(36),l=r(71),d=r(285),h=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function(t){var e=d(this),r=f(t),n=r.has;return"function"!=typeof n&&(r=new(c("Set"))(t),n=l(r.has)),!h(e,(function(t,e){if(!1===n.call(r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},767:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(36),f=r(71),l=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function(t){var e=c(this),r=f(e.has);return!l(t,(function(t,n){if(!1===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},768:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(36),f=r(756),l=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{join:function(t){var e=c(this),r=f(e),n=void 0===t?",":String(t),o=[];return l(r,o.push,{that:o,IS_ITERATOR:!0}),o.join(n)}})},769:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(86),f=r(36),l=r(71),d=r(75),h=r(93),v=r(756),S=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{map:function(t){var e=f(this),r=v(e),n=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(h(e,c("Set"))),m=l(o.add);return S(r,(function(t){m.call(o,n(t,t,e))}),{IS_ITERATOR:!0}),o}})},770:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(36),f=r(71),l=r(756),d=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{reduce:function(t){var e=c(this),r=l(e),n=arguments.length<2,o=n?void 0:arguments[1];if(f(t),d(r,(function(r){n?(n=!1,o=r):o=t(o,r,r,e)}),{IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty set with no initial value");return o}})},771:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(36),f=r(75),l=r(756),d=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{some:function(t){var e=c(this),r=l(e),n=f(t,arguments.length>1?arguments[1]:void 0,3);return d(r,(function(t,r){if(n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},772:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(86),f=r(36),l=r(71),d=r(93),h=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function(t){var e=f(this),r=new(d(e,c("Set")))(e),n=l(r.delete),o=l(r.add);return h(t,(function(t){n.call(r,t)||o.call(r,t)})),r}})},773:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(86),f=r(36),l=r(71),d=r(93),h=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{union:function(t){var e=f(this),r=new(d(e,c("Set")))(e);return h(t,l(r.add),{that:r}),r}})},774:function(t,e,r){"use strict";var n=r(36),o=r(71);t.exports=function(){for(var t=n(this),e=o(t.add),r=0,c=arguments.length;r<c;r++)e.call(t,arguments[r]);return t}},782:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(24),o=(r(28),r(72),{methods:{crToInt:function(t){var e=t.split("/"),r=Object(n.a)(e,2),o=r[0],c=r[1];return c?parseInt(o,10)/parseInt(c,10):parseInt(o,10)}}})},809:function(t,e,r){"use strict";r.r(e);var n=r(33),o=r(25),c=(r(122),r(23),r(757),r(38),r(758),r(759),r(760),r(761),r(762),r(763),r(764),r(765),r(766),r(767),r(768),r(769),r(770),r(771),r(772),r(773),r(41),r(34),r(74),{mixins:[r(782).a],layout:"list",data:function(){return{items:[],ruleLink:{to:"/manual/bestiary",name:"About ME5e Bestiary"}}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("pageTitle","Bestiary"),e.next=3,t.$store.dispatch("FETCH_DATA","bestiary");case 3:t.items=e.sent;case 4:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Bestiary | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Give your player's a unique challenge with over 100 custom made Mass Effect enemies! "}]}},computed:{headers:function(){return this.$store.getters["config/npcHeaders"]},pageTitle:function(){return this.$store.getters.pageTitle},filters:function(){var t=this;return[{name:"Faction",key:"unit",options:Object(n.a)(new Set(this.items.map((function(i){return i.unit})))).sort()},{name:"Challenge Rating",key:"cr",options:Object(n.a)(new Set(this.items.map((function(i){return i.cr})))).sort((function(a,b){return t.crToInt(a)>t.crToInt(b)?1:-1}))}]}},methods:{customSort:function(t,e,r){var n=this,desc=r?1:-1;return t.sort((function(a,b){var t="cr"===e?n.crToInt(a.cr):a[e],r="cr"===e?n.crToInt(b.cr):b[e];return t===r?a.id>b.id?desc:-1*desc:t>r?desc:-1*desc})),t}}}),f=r(2),l=r(5),d=r.n(l),h=r(729),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("me-list-page",{attrs:{pending:t.$fetchState.pending,title:t.pageTitle,"rule-link":t.ruleLink,filters:t.filters,headers:t.headers,items:t.items,"custom-sort":t.customSort,"default-sort":"name"},scopedSlots:t._u([{key:"list",fn:function(t){var e=t.displayItems;return[r("me-npc-list",{attrs:{items:e}})]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VContainer:h.a})}}]);