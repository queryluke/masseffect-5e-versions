(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1083:function(t,n,e){var content=e(1223);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("5c52846d",content,!0,{sourceMap:!1})},1221:function(t,n,e){var map={"./0.0.0.md":583,"./0.1.0.md":584,"./0.2.0.md":585,"./0.2.1.md":586,"./0.3.0.md":587,"./0.4.0.md":588,"./0.4.1.md":589,"./0.4.2.md":590,"./0.5.0.md":591,"./0.5.1.md":592,"./0.6.0.md":593,"./0.7.0.md":594,"./0.7.1.md":595,"./0.8.0.md":596,"./0.8.1.md":597,"./0.8.2.md":598,"./0.8.3.md":599,"./0.8.4.md":600,"./0.9.0.md":601,"./0.9.1.md":602,"./0.9.2.md":603,"./1.0.0.md":604,"./1.1.0.md":605,"./1.1.1.md":606,"./1.1.2.md":607,"./1.2.0.md":608,"./1.2.1.md":609};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=1221},1222:function(t,n,e){"use strict";var o=e(1083);e.n(o).a},1223:function(t,n,e){(n=e(10)(!1)).push([t.i,".news-post .markdown-content h2{border-bottom:1px solid grey;margin-top:2em}.news-post .markdown-content ul{margin-top:0}",""]),t.exports=n},1274:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{id:this.$route.params.slug}},computed:{post:function(){if(this.id)return e(1221)("./".concat(this.id,".md"))}},head:function(){return{title:"".concat(this.post.attributes.title," - Changelog | Mass Effect 5e"),meta:[{hid:"description",name:"description",content:this.post.attributes.description}]}}},r=(e(1222),e(4)),d=e(6),c=e.n(d),m=e(177),l=e(185),f=e(186),h=e(208),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-content",{staticClass:"blue-grey lighten-4"},[e("v-container",[e("div",{staticClass:"news-post"},[e("h1",{staticClass:"display-3"},[t._v(t._s(t.post.attributes.title))]),e("h2",{staticClass:"subheading"},[e("em",[t._v(t._s(t._f("formatDate")(t.post.attributes.date,"DDDD, MMMM DD, YYYY")))])]),e("div",{staticClass:"markdown-content"},[e("markdown-content",{attrs:{component:t.post.vue}})],1)]),e("v-btn",{staticClass:"primary",attrs:{to:"/changelog",nuxt:""}},[e("v-icon",[t._v("keyboard_arrow_left")]),e("span",[t._v("Back to changelog")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:m.a,VContainer:l.a,VContent:f.a,VIcon:h.a})}}]);