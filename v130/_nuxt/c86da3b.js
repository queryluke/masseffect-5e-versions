(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{756:function(t,e,r){var n=r(48),o=r(285);t.exports=n?o:function(t){return Set.prototype.values.call(t)}},757:function(t,e,r){"use strict";var n=r(393),o=r(394);t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},758:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(774);n({target:"Set",proto:!0,real:!0,forced:o},{addAll:function(){return c.apply(this,arguments)}})},759:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(395);n({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},760:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(86),f=r(36),l=r(71),d=r(93),h=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{difference:function(t){var e=f(this),r=new(d(e,c("Set")))(e),n=l(r.delete);return h(t,(function(t){n.call(r,t)})),r}})},761:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(36),f=r(75),l=r(756),d=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{every:function(t){var e=c(this),r=l(e),n=f(t,arguments.length>1?arguments[1]:void 0,3);return!d(r,(function(t,r){if(!n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},762:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(86),f=r(36),l=r(71),d=r(75),h=r(93),v=r(756),m=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{filter:function(t){var e=f(this),r=v(e),n=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(h(e,c("Set"))),S=l(o.add);return m(r,(function(t){n(t,t,e)&&S.call(o,t)}),{IS_ITERATOR:!0}),o}})},763:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(36),f=r(75),l=r(756),d=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{find:function(t){var e=c(this),r=l(e),n=f(t,arguments.length>1?arguments[1]:void 0,3);return d(r,(function(t,r){if(n(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},764:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(86),f=r(36),l=r(71),d=r(93),h=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{intersection:function(t){var e=f(this),r=new(d(e,c("Set"))),n=l(e.has),o=l(r.add);return h(t,(function(t){n.call(e,t)&&o.call(r,t)})),r}})},765:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(36),f=r(71),l=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function(t){var e=c(this),r=f(e.has);return!l(t,(function(t,n){if(!0===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},766:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(86),f=r(36),l=r(71),d=r(285),h=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function(t){var e=d(this),r=f(t),n=r.has;return"function"!=typeof n&&(r=new(c("Set"))(t),n=l(r.has)),!h(e,(function(t,e){if(!1===n.call(r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},767:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(36),f=r(71),l=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function(t){var e=c(this),r=f(e.has);return!l(t,(function(t,n){if(!1===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},768:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(36),f=r(756),l=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{join:function(t){var e=c(this),r=f(e),n=void 0===t?",":String(t),o=[];return l(r,o.push,{that:o,IS_ITERATOR:!0}),o.join(n)}})},769:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(86),f=r(36),l=r(71),d=r(75),h=r(93),v=r(756),m=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{map:function(t){var e=f(this),r=v(e),n=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(h(e,c("Set"))),S=l(o.add);return m(r,(function(t){S.call(o,n(t,t,e))}),{IS_ITERATOR:!0}),o}})},770:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(36),f=r(71),l=r(756),d=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{reduce:function(t){var e=c(this),r=l(e),n=arguments.length<2,o=n?void 0:arguments[1];if(f(t),d(r,(function(r){n?(n=!1,o=r):o=t(o,r,r,e)}),{IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty set with no initial value");return o}})},771:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(36),f=r(75),l=r(756),d=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{some:function(t){var e=c(this),r=l(e),n=f(t,arguments.length>1?arguments[1]:void 0,3);return d(r,(function(t,r){if(n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},772:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(86),f=r(36),l=r(71),d=r(93),h=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function(t){var e=f(this),r=new(d(e,c("Set")))(e),n=l(r.delete),o=l(r.add);return h(t,(function(t){n.call(r,t)||o.call(r,t)})),r}})},773:function(t,e,r){"use strict";var n=r(15),o=r(48),c=r(86),f=r(36),l=r(71),d=r(93),h=r(78);n({target:"Set",proto:!0,real:!0,forced:o},{union:function(t){var e=f(this),r=new(d(e,c("Set")))(e);return h(t,l(r.add),{that:r}),r}})},774:function(t,e,r){"use strict";var n=r(36),o=r(71);t.exports=function(){for(var t=n(this),e=o(t.add),r=0,c=arguments.length;r<c;r++)e.call(t,arguments[r]);return t}},816:function(t,e,r){"use strict";r.r(e);var n=r(33),o=r(25),c=(r(122),r(23),r(757),r(38),r(758),r(759),r(760),r(761),r(762),r(763),r(764),r(765),r(766),r(767),r(768),r(769),r(770),r(771),r(772),r(773),r(41),r(34),r(136),r(74),{fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("pageTitle","Armor & Weapon Mods"),e.next=3,t.$store.dispatch("FETCH_DATA","mods");case 3:t.items=e.sent;case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{items:[],ruleLink:{to:"/manual/equipment#mods",name:"Mod Rules"}}},computed:{filters:function(){return[{name:"Type",key:"type",options:["Armor","Weapon"]},this.$store.getters["config/rarityOptions"],{name:"Placement",key:"placement",options:Object(n.a)(new Set(this.items.map((function(i){return i.placement})))).sort()},{name:"Availability",key:"availability",options:Object(n.a)(new Set(this.items.map((function(i){return i.availability})).flat())).sort()},{name:"Benefits",key:"notes",options:Object(n.a)(new Set(this.items.map((function(i){return i.notes})).flat())).sort()}]},pageTitle:function(){return this.$store.getters.pageTitle},headers:function(){return this.$store.getters["config/modHeaders"]}},head:function(){return{title:"Gear - Equipment | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Mass Effect 5e comes with a full set of armor and weapon mods that let you customize your gear to your needs."}]}},layout:"list"}),f=r(2),l=r(5),d=r.n(l),h=r(729),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("me-list-page",{attrs:{pending:t.$fetchState.pending,title:t.pageTitle,"rule-link":t.ruleLink,filters:t.filters,headers:t.headers,items:t.items,"default-sort":"name"},scopedSlots:t._u([{key:"list",fn:function(t){var e=t.displayItems;return[r("me-mod-list",{attrs:{items:e}})]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VContainer:h.a})}}]);