(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1066:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(23);r(54),r(32),r(29),r(13),r(8),r(7),r(15),r(12),r(16);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={layout:"manual",asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,c,data,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,n=e.store,c=e.i18n,t.next=3,n.dispatch("FETCH_LOTS",["guide","guides-index"]);case 3:return data=t.sent,o=data[1].find((function(i){return i.id===r.id})),l=o.sections.map((function(section){var e=data[0].find((function(i){return i.id===section.id}));return f(f({},section),e)})),n.commit("setCurrentRules",l),n.dispatch("SET_META",{title:c.t(o.title),description:c.t("meta.guide")}),t.abrupt("return",{page:o,sections:l});case 9:case"end":return t.stop()}}),t)})))()}},d=r(0),O=r(3),m=r.n(O),j=r(971),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("me-page-title"),e._v(" "),e._l(e.sections,(function(e){return r("me-rule-card",{key:e.id,attrs:{item:e}})}))],2)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VContainer:j.a})}}]);