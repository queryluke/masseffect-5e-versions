(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1064:function(t,e,n){"use strict";n.r(e);var r=n(23),c=(n(21),n(54),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("FETCH_DATA","feats");case 3:case"end":return e.stop()}}),e)})))()},computed:{item:function(){return this.$store.getters.getItem("feats",this.$route.params.id)}},created:function(){this.$store.dispatch("SET_META",{title:this.item.name,subTitle:this.$tc("feat_title",2),description:this.$t("meta.info",{name:this.item.name})})}}),o=n(0),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("me-item-page",{attrs:{item:t.item,label:t.$tc("feat_title")}})}),[],!1,null,null,null);e.default=component.exports}}]);