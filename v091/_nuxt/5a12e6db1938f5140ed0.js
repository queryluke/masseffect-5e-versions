(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{773:function(e,t,s){"use strict";s(19),s(11),s(14),s(13),s(8),s(18),s(67),s(68);var l=s(6),r=s.n(l),a=s(3);function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,l)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){r()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var o={props:{headers:{type:Array,default:function(){return[]}},defaultSort:{type:String,default:""}},computed:i(i({},Object(a.d)("itemList",{getOrder:"order",getSortBy:"sortBy"})),{},{order:{get:function(){return this.getOrder},set:function(e){this.updateList({key:"order",value:e})}},sortBy:{get:function(){return this.getSortBy},set:function(e){this.updateList({key:"sortBy",value:e})}}}),created:function(){this.headers.includes(this.sortBy)||(this.sortBy=this.headers[this.defaultSort])},methods:i(i({},Object(a.c)("itemList",["updateList"])),{},{sort:function(e){this.sortBy===e?this.order=-1*this.order:this.sortBy=e}})},c=s(0),p=Object(c.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"text-xs-right mb-2 hidden-lg-and-up"},[s("v-menu",{attrs:{bottom:"",left:""}},[s("span",{staticClass:"subheading",attrs:{slot:"activator"},slot:"activator"},[e._v("Sort by: "+e._s(e.sortBy.label))]),s("v-list",e._l(e.headers,(function(t){return t.sortable?s("v-list-tile",{key:t.key,on:{click:function(s){e.sortBy=t}}},[s("v-list-tile-title",[e._v(e._s(t.label)+" "),t.key===e.sortBy.key?s("v-icon",[e._v("check")]):e._e()],1)],1):e._e()})),1)],1),s("v-btn",{attrs:{icon:"",small:""},on:{click:function(t){e.order=-1*e.order}}},[s("v-icon",[e._v(e._s(e.order>0?"arrow_downward":"arrow_upward"))])],1)],1),s("v-layout",{staticClass:"pl-4 pr-5 my-2 hidden-md-and-down",attrs:{row:""}},e._l(e.headers,(function(t){return s("v-flex",{key:t.key,class:t.classes},[t.sortable?s("button",{staticClass:"body-2",on:{click:function(s){return e.sort(t)}}},[e._v(e._s(t.label)),e.sortBy.key===t.key?s("v-icon",{staticClass:"ml-2",attrs:{size:"16"}},[e._v(e._s(e.order>0?"arrow_downward":"arrow_upward"))]):e._e()],1):s("span",{staticClass:"body-1"},[e._v(e._s(t.label))])])})),1)],1)}),[],!1,null,null,null);t.a=p.exports},781:function(e,t,s){"use strict";var l={props:{spell:{type:Object,default:function(){return{}}}},data:function(){return{level:""}},created:function(){switch(this.spell.level){case 0:this.level="cantrip";break;case 1:this.level="1st-level";break;case 2:this.level="2nd-level";break;case 3:this.level="3rd-level";break;default:this.level="".concat(this.spell.level,"th-level")}}},r=s(0),a=Object(r.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("v-avatar",{attrs:{size:"25"}},[t("img",{attrs:{src:"/v091/images/spells/"+this.spell.type+".svg"}})]),t("span",[this._v(" "+this._s(this.level))])],1)}),[],!1,null,null,null);t.a=a.exports},782:function(e,t,s){"use strict";var l={props:{spell:{type:Object,default:function(){return{}}},verbose:{type:Boolean,default:function(){return!0}}}},r=s(0),a=Object(r.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.spell.concentration?s("span",[e.verbose?s("span",[e._v("Concentration, up to "+e._s(e.spell.duration))]):s("span",[s("v-avatar",{attrs:{color:"black",size:"18",alt:"concentration"}},[s("span",{staticClass:"white--text"},[e._v("C")])])],1)]):s("span",[e._v(e._s(e.spell.duration))])])}),[],!1,null,null,null);t.a=a.exports},783:function(e,t,s){"use strict";var l={props:{spell:{type:Object,default:function(){return{}}}}},r=s(0),a=Object(r.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("span",[e._v(e._s(e.spell.distance.range))]),e.spell.distance.aoeDistance?s("span",{staticClass:"ml-1"},[s("span",[e._v("("+e._s(e.spell.distance.aoeDistance))]),s("v-avatar",{attrs:{size:"18",tile:""}},[s("v-img",{attrs:{src:"/v091/images/aoe/"+e.spell.distance.aoeType+".svg",alt:e.spell.distance.aoeType}})],1),s("span",[e._v(")")])],1):e._e()])}),[],!1,null,null,null);t.a=a.exports},784:function(e,t,s){"use strict";var l={props:{spell:{type:Object,default:function(){return{}}}}},r=s(0),a=Object(r.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.spell.effect.includes("damage")?s("span",[e._v(e._s(e.spell.damageType[0])),e.spell.damageType.length>1||e.spell.effect.length>1?s("span",[e._v("(...)")]):e._e()]):s("span",[e._v(e._s(e.spell.effect[0])),e.spell.effect.length>1?s("span",[e._v("(...)")]):e._e()])}),[],!1,null,null,null);t.a=a.exports},787:function(e,t,s){"use strict";var l={props:{option:{type:Object,default:function(){return{}}}}},r=s(0),a=Object(r.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-card",{staticClass:"ma-1"},[t("v-card-title",[this._v(this._s(this.option.name))]),t("v-card-text",[this._v(this._s(this.option.description))])],1)}),[],!1,null,null,null);t.a=a.exports},794:function(e,t,s){"use strict";var l=s(781),r=s(782),a=s(783),n=s(784),i=s(787),o={props:{availableClasses:{type:Array,default:function(){return[]}}}},c=s(0),p={components:{SpellClassList:Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",{attrs:{"justify-end":""}},this._l(this.availableClasses,(function(e){return t("div",{key:e},[t("v-avatar",{attrs:{size:"50",tile:""}},[t("img",{attrs:{src:"/v091/images/classes/"+e+".svg",alt:e}})])],1)})),0)}),[],!1,null,null,null).exports,AdvancedOption:i.a,SpellType:l.a,SpellDuration:r.a,SpellRangeArea:a.a,SpellDamageEffect:n.a},props:{spell:{type:Object,default:function(){return{}}}},data:function(){return{primeTypeCss:{force:"purple--text text--darken-1",necrotic:"blue-grey--text text--darken-2",fire:"deep-orange--text text--darken-1",cold:"cyan--text text--darken-1",lightning:"blue--text text--darken-1"}}}},u=Object(c.a)(p,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-layout",[s("v-flex",{staticClass:"xs12 sm6"},[s("p",{staticClass:"title"},[e._v(e._s(e.spell.name))]),s("p",[e.spell.primes?s("span",{class:e.primeTypeCss[e.spell.primes]},[s("strong",[e._v("Primes ("+e._s(e.spell.primes)+")")])]):e._e(),e.spell.primes&&e.spell.detonates?s("span",{staticClass:"mx-2"},[e._v("|")]):e._e(),e.spell.detonates?s("span",{staticClass:"primary--text"},[s("strong",[e._v("Detonates")])]):e._e()])]),s("v-flex",{staticClass:"xs12 sm6"},[s("spell-class-list",{attrs:{availableClasses:e.spell.availableClasses}})],1)],1),s("v-layout",{attrs:{row:"",wrap:"","flex-start":""}},[s("v-flex",{staticClass:"xs12 sm4 md3 attribute mb-2"},[s("label",[e._v("Type")]),s("div",[s("spell-type",{attrs:{spell:e.spell}})],1)]),s("v-flex",{staticClass:"xs12 sm4 md3 attribute mb-2"},[s("label",[e._v("Casting Time")]),s("div",[e._v(e._s(e.spell.castingTime))])]),s("v-flex",{staticClass:"xs12 sm4 md3 attribute mb-2"},[s("label",[e._v("Duration")]),s("div",[s("spell-duration",{attrs:{spell:e.spell}})],1)]),s("v-flex",{staticClass:"xs12 sm4 md3 attribute mb-2"},[s("label",[e._v("Range/Area")]),s("div",[s("spell-range-area",{attrs:{spell:e.spell}})],1)]),s("v-flex",{staticClass:"xs12 sm4 md3 attribute mb-2"},[s("label",[e._v("Attack Type")]),s("ul",{staticClass:"list-unstyled"},e._l(e.spell.attackType,(function(t){return s("li",{key:t},[e._v(e._s(t))])})),0)]),s("v-flex",{staticClass:"xs12 sm4 md3 attribute mb-2"},[s("label",[e._v("Damage Type")]),s("ul",{staticClass:"list-unstyled"},e._l(e.spell.damageType,(function(t){return s("li",{key:t},[e._v(e._s(t))])})),0)]),s("v-flex",{staticClass:"xs12 sm4 md3 attribute mb-2"},[s("label",[e._v("Effect")]),s("ul",e._l(e.spell.effect,(function(t){return s("li",{key:t},[e._v(e._s(t))])})),0)])],1),s("div",{staticClass:"hr"}),s("div",{staticClass:"mt-3"},[s("markdown-file",{attrs:{id:e.spell.id,itemType:"spells"}}),s("p",{staticClass:"title"},[e._v("Advancement Options")]),s("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},e._l(e.spell.advancementOptions,(function(e,t){return s("v-flex",{key:t,staticClass:"xs12 md6"},[s("advanced-option",{attrs:{option:e}})],1)})),1)],1)],1)}),[],!1,null,null,null);t.a=u.exports},795:function(e,t,s){"use strict";s(19),s(11),s(14),s(13),s(8),s(18);var l=s(6),r=s.n(l),a=s(3);function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,l)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){r()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var o=Object(a.a)("phb"),c=o.mapActions,p={computed:i({},(0,o.mapGetters)(["mobileFilterDialog"])),methods:i({},c(["toggleMobileFilterDialog"]))},u=s(0),f=Object(u.a)(p,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.mobileFilterDialog,callback:function(t){e.mobileFilterDialog=t},expression:"mobileFilterDialog"}},[s("v-card",[s("v-toolbar",{attrs:{dark:"",color:"primary"}},[s("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(t){return e.toggleMobileFilterDialog(t)}}},[s("v-icon",[e._v("close")])],1),s("v-toolbar-title",[e._v("Filter Spells")])],1),s("v-card-text",[e._t("filters")],2)],1)],1)}),[],!1,null,null,null);t.a=f.exports},819:function(e,t,s){"use strict";var l=s(781),r=s(782),a=s(783),n=s(784),i=s(794),o=s(49),c=s(773),p={components:{SpellType:l.a,SpellDuration:r.a,SpellRangeArea:a.a,SpellDamageEffect:n.a,SpellInfo:i.a,BookmarkButton:o.a,SortOptions:c.a},props:{items:{type:Array,default:function(){return[]}}},data:function(){return{headers:[{label:"Type/Level",key:"type",classes:"xs4 sm3 lg2",sortable:!0},{label:"Name",key:"name",classes:"xs8 sm9 lg2",sortable:!0},{label:"Duration",key:"duration",classes:"hidden-md-and-down lg2"},{label:"Range (Area)",key:"range",classes:"hidden-md-and-down lg2"},{label:"Attack",key:"attack",classes:"hidden-md-and-down lg2"},{label:"Damage/Effect",key:"damage",classes:"hidden-md-and-down lg2"}]}}},u=s(0),f=Object(u.a)(p,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("sort-options",{attrs:{headers:e.headers,defaultSort:"1"}}),s("v-expansion-panel",{staticClass:"mb-2"},e._l(e.items,(function(t){return s("v-expansion-panel-content",{key:t.id},[s("div",{attrs:{slot:"header"},slot:"header"},[s("v-layout",[s("v-flex",{class:e.headers[0].classes},[s("spell-type",{attrs:{spell:t}})],1),s("v-flex",{class:e.headers[1].classes},[s("strong",[e._v(e._s(t.name))])]),s("v-flex",{class:e.headers[2].classes},[s("spell-duration",{attrs:{spell:t}})],1),s("v-flex",{class:e.headers[3].classes},[s("spell-range-area",{attrs:{spell:t}})],1),s("v-flex",{class:e.headers[4].classes},[s("span",[e._v(e._s(t.attackType[0]))]),t.attackType.length>1?s("span",[e._v("(...)")]):e._e()]),s("v-flex",{class:e.headers[5].classes},[s("spell-damage-effect",{attrs:{spell:t}})],1)],1)],1),s("v-card",{staticClass:"grey lighten-3"},[s("v-card-text",[s("spell-info",{staticClass:"mt-2",attrs:{spell:t}})],1),s("v-card-actions",[s("bookmark-button",{attrs:{card:t,type:"spell",props:{flat:!0}}})],1)],1)],1)})),1)],1)}),[],!1,null,null,null);t.a=f.exports},891:function(e,t,s){"use strict";s.r(t);s(69),s(48),s(70),s(35),s(36),s(37),s(19),s(14),s(13),s(8),s(18),s(67),s(68),s(11),s(72),s(21);var l=s(6),r=s.n(l),a=s(819),n=s(3);function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,l)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){r()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var c=Object(n.a)("itemList"),p=c.mapActions,u=c.mapGetters,f={props:{itemKey:{type:String,default:""}},data:function(){return{typeOptions:[{value:"biotic",text:"Biotic"},{value:"tech",text:"Tech"},{value:"combat",text:"Combat"}],classOptions:[{value:"adept",text:"Adept"},{value:"engineer",text:"Engineer"},{value:"infiltrator",text:"Infiltrator"},{value:"sentinel",text:"Sentinel"},{value:"soldier",text:"Soldier"},{value:"vanguard",text:"Vanguard"}]}},computed:o(o({},u(["filters"])),{},{typeFilter:{get:function(){return this.filters[this.itemKey].type},set:function(e){this.updateFilter({key:this.itemKey,filterKey:"type",value:e})}},classFilter:{get:function(){return this.filters[this.itemKey].availableClasses},set:function(e){this.updateFilter({key:this.itemKey,filterKey:"availableClasses",value:e})}}}),methods:o(o({},p(["updateFilter"])),{},{reset:function(){this.classFilter=[],this.typeFilter=[]}})},d=s(0),v=Object(d.a)(f,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"pa-0",attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{row:"","justify-center":"",wrap:""}},[s("v-flex",{attrs:{xs12:"",md6:""}},[s("v-select",{attrs:{items:e.typeOptions,label:"Spell Type",multiple:"","menu-props":"{maxHeight:'400'}"},model:{value:e.typeFilter,callback:function(t){e.typeFilter=t},expression:"typeFilter"}})],1),s("v-flex",{attrs:{xs12:"",md6:""}},[s("v-select",{attrs:{items:e.classOptions,label:"Classes",multiple:"","menu-props":"{maxHeight:'400'}"},model:{value:e.classFilter,callback:function(t){e.classFilter=t},expression:"classFilter"}})],1),s("v-flex",{staticClass:"text-xs-center hidden-md-and-up",attrs:{xs12:""}},[s("v-btn",{on:{click:function(t){return e.reset()}}},[e._v("Reset")])],1)],1)],1)}),[],!1,null,null,null).exports,y=s(795),m=s(789);function b(e,t){var s;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(s=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){s&&(e=s);var l=0,r=function(){};return{s:r,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,n=!0,i=!1;return{s:function(){s=e[Symbol.iterator]()},n:function(){var e=s.next();return n=e.done,e},e:function(e){i=!0,a=e},f:function(){try{n||null==s.return||s.return()}finally{if(i)throw a}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,l=new Array(t);s<t;s++)l[s]=e[s];return l}function g(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,l)}return s}function _(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?g(Object(s),!0).forEach((function(t){r()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var O=Object(n.a)("itemList"),x=O.mapActions,j=O.mapGetters,w={components:{MobileFilterContainer:y.a,SpellList:a.a,SpellFilters:v},data:function(){return{items:m,itemKey:"spells"}},computed:_(_({},j(["order","sortBy","filters","searchString"])),{},{search:{get:function(){return this.searchString},set:function(e){this.updateSearchString(e)}},filtered:function(){var e=this,t=this.items,s=this.sortBy.key,l=this.order;return t.sort((function(e,t){switch(s){case"type":return e[s]===t[s]?e.level===t.level?(e.name>t.name?1:-1)*l:(e.level>t.level?1:-1)*l:(e[s]>t[s]?1:-1)*l;default:return(e[s]===t[s]?0:e[s]>t[s]?1:-1)*l}})),this.search&&(t=t.filter((function(t){return t.name.toLowerCase().indexOf(e.searchString.toLowerCase())>=0}))),this.filters.spells.type.length>0&&(t=t.filter((function(t){return e.filters.spells.type.includes(t.type)}))),this.filters.spells.availableClasses.length>0&&(t=t.filter((function(t){var s,l=b(e.filters.spells.availableClasses);try{for(l.s();!(s=l.n()).done;){var r=s.value;if(t.availableClasses.includes(r))return t}}catch(e){l.e(e)}finally{l.f()}}))),t}}),head:function(){return{title:"Powers: Biotics, Tech and Combat | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Dozens of unique and re-skinned D&D spells are available as Biotic, Tech, and Combat powers"}]}},layout:"phb",methods:_({},x(["updateSearchString"]))},k=Object(d.a)(w,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{class:{"px-0":e.$vuetify.breakpoint.xsOnly}},[s("div",{staticClass:"hidden-sm-and-down"},[s("h2",{staticClass:"display-1"},[e._v("Spells")]),s("p",[s("nuxt-link",{attrs:{to:"/phb/rules/spellcasting"}},[e._v("Spellcasting Rules")])],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"px-1",attrs:{md4:""}},[s("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),s("v-flex",{staticClass:"px-1",attrs:{md8:""}},[s("spell-filters",{attrs:{itemKey:e.itemKey}})],1)],1)],1),s("spell-list",{attrs:{items:e.filtered}}),s("mobile-filter-container",{attrs:{title:"Filter Spells"}},[s("template",{slot:"filters"},[s("spell-filters",{attrs:{itemKey:e.itemKey}})],1)],2)],1)}),[],!1,null,null,null);t.default=k.exports}}]);