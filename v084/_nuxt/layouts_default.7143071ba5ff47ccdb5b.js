webpackJsonp([35],{"8llg":function(t,e,a){"use strict";var n=a("M8wV"),r=a("9dHi"),s=a("VU/8")(n.a,r.a,!1,null,null,null);s.options.__file="components/MeVersionSnackbar.vue",e.a=s.exports},"9dHi":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",{attrs:{timeout:0,bottom:"",dark:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("v-btn",{staticClass:"ml-0",attrs:{color:"white",flat:""},on:{click:t.closeSnackbar}},[a("v-icon",[t._v("close")])],1),t._v("\n  You are viewing an older version of Mass Effect 5e\n  "),a("v-btn",{attrs:{color:"light-blue",flat:"",href:"https://n7.world/"}},[t._v("\n    Latest release\n  ")])],1)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},Eleq:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{toolbar:""}},[e("main-toolbar",{attrs:{navBrand:"",primaryNavigation:""}}),e("nuxt"),e("main-footer"),e("me-version-snackbar")],1)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},M8wV:function(t,e,a){"use strict";e.a={computed:{snackbar:function(){return this.$store.getters.versionSnackbar}},methods:{closeSnackbar:function(){this.$store.commit("closeVersionSnackbar")}}}},Ma2J:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ipsp"),r=a("Eleq"),s=a("VU/8")(n.a,r.a,!1,null,null,null);s.options.__file="layouts/default.vue",e.default=s.exports},ipsp:function(t,e,a){"use strict";var n=a("OWgV"),r=a("SK/F"),s=a("8llg");e.a={components:{MeVersionSnackbar:s.a,MainFooter:r.a,MainToolbar:n.a}}}});