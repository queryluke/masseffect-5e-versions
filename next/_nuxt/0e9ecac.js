(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1058:function(t,e,r){"use strict";r.r(e);var n=r(23),o=(r(21),r(54),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("FETCH_DATA","armor");case 3:case"end":return e.stop()}}),e)})))()},computed:{item:function(){return this.$store.getters.getItem("armor",this.$route.params.id)}},created:function(){this.$store.dispatch("SET_META",{title:this.item.name,subTitle:this.$tc("armor_title",2),description:this.$t("meta.info",{name:this.item.name})})}}),m=r(0),component=Object(m.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("me-item-page",{attrs:{item:t.item,type:t.$tc("armor_title",1)},scopedSlots:t._u([{key:"header",fn:function(){return[r("me-armor-title",{attrs:{item:t.item}})]},proxy:!0}])},[t._v(" "),r("me-armor-info",{attrs:{item:t.item}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);