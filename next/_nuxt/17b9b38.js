(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1047:function(e,t,n){"use strict";n.r(t);var r=n(23),o=(n(98),n(39),n(60),n(54),{mixins:[n(255).a],layout:"list",fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.dispatch("SET_META",{title:e.$tc("weapon_title",2),subTitle:e.$tc("equipment_title",2),description:e.$t("meta.weapons")}),t.next=3,e.$store.dispatch("FETCH_LOTS",["weapons","weapon-properties"]);case 3:case"end":return t.stop()}}),t)})))()},methods:{customSort:function(e,t,n){var r=this,desc=n?1:-1;return e.sort((function(a,b){var e=a[t],n=b[t];switch(t){case"type":case"name":break;case"damage":e=r.averageFromDie(a.damage.dieType,a.damage.dieCount),n=r.averageFromDie(b.damage.dieType,b.damage.dieCount);break;default:e=a[t]?"number"==typeof a[t]?a[t]:parseInt(a[t].replace(/\D/,""),10):0,n=b[t]?"number"==typeof b[t]?b[t]:parseInt(b[t].replace(/\D/,""),10):0}return e===n?a.id>b.id?desc:-1*desc:e>n?desc:-1*desc})),e}}}),c=n(0),m=n(3),d=n.n(m),l=n(971),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("me-list-page",{attrs:{pending:e.$fetchState.pending,"rule-link":"/manual/equipment#weapons",model:"weapons",component:"MeWeaponList","default-sort":"name","custom-sort":e.customSort}})],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VContainer:l.a})}}]);