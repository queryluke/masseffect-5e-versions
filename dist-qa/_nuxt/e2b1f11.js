(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{790:function(e,t,r){"use strict";r.r(t);r(11),r(8),r(39),r(69);var n=r(32),c={fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.commit("pageTitle","Character Builder (BETA)"),t.next=3,Promise.all([e.$store.dispatch("FETCH_DATA","search-index"),e.$store.dispatch("FETCH_DATA","weapons"),e.$store.dispatch("FETCH_DATA","armor"),e.$store.dispatch("FETCH_DATA","powers"),e.$store.dispatch("FETCH_DATA","feats"),e.$store.dispatch("FETCH_DATA","backgrounds"),e.$store.dispatch("FETCH_DATA","classes"),e.$store.dispatch("FETCH_DATA","class-features")]);case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{loading:!0}}},o=r(2),component=Object(o.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return this.loading?this._e():t("character-sheet")}),[],!1,null,null,null);t.default=component.exports}}]);