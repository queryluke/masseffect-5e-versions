(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{780:function(t,e,a){var s=a(793);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(30).default)("166a7360",s,!0,{})},790:function(t,e,a){var s=a(812);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(30).default)("bbb95e80",s,!0,{})},791:function(t,e,a){"use strict";var s={props:{type:{type:String,default:""},name:{type:String,default:""}}},i=(a(792),a(0)),n=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("v-img",{staticClass:"me-icon",attrs:{src:"/v091/images/"+this.type+"/"+this.name+".svg",title:""+this.name}})],1)}),[],!1,null,null,null);e.a=n.exports},792:function(t,e,a){"use strict";a(780)},793:function(t,e,a){(t.exports=a(29)(!1)).push([t.i,".me-icon{width:100%}",""])},797:function(t,e,a){"use strict";a(47);var s={props:{data:{type:Array,default:function(){return[]}}},computed:{text:function(){var t=this;return this.data.map((function(e){return t.increase(e)})).join(", ")}},methods:{increase:function(t){return"+".concat(t.amount," ").concat(t.ability)}}},i=a(0),n=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.text))])}),[],!1,null,null,null);e.a=n.exports},810:function(t,e,a){var s={"./all-eyes-on-you.md":237,"./all-seeing-eyes.md":238,"./amphibious.md":239,"./avatar-optional.md":240,"./bio-electric-focus.md":241,"./bio-electric-ward.md":242,"./biotic-initiate.md":243,"./bite.md":244,"./bloodlust.md":245,"./careful.md":246,"./cybernetic-augmentation.md":247,"./darkvision.md":248,"./eidetic-memory.md":249,"./fragility.md":250,"./fury-of-the-small.md":251,"./hallucinogen.md":252,"./hermetic-suit.md":253,"./high-speed-metabolism.md":254,"./hungry-jaws.md":255,"./hunter-mode.md":256,"./innate-biotics.md":257,"./integrated-protection.md":258,"./keen-senses.md":259,"./last-resort.md":260,"./limited-regeneration.md":261,"./living-construct.md":262,"./lucky.md":263,"./martial-training.md":264,"./menacing.md":265,"./mind-meld.md":266,"./multi-casting.md":267,"./natural-armor.md":268,"./no-feats.md":269,"./non-differentiated-cells.md":270,"./photographic-memory.md":271,"./powerful-build.md":272,"./psychometry.md":273,"./quad-strand-dna.md":274,"./quadrupedal.md":275,"./rage.md":276,"./relentless.md":277,"./repair-matrix.md":278,"./saving-face.md":279,"./savvy-dealings.md":280,"./shrewd-negotiator.md":281,"./skill-versatility.md":282,"./solar-dependency.md":283,"./soul-gazing.md":284,"./stability.md":285,"./survivalist.md":286,"./thick-hide.md":287,"./thulium-skin.md":288,"./turian-toughness.md":289,"./unstealthy.md":290};function i(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id=810},811:function(t,e,a){"use strict";a(790)},812:function(t,e,a){(t.exports=a(29)(!1)).push([t.i,".feat .v-dialog__container{display:inline!important}",""])},814:function(t,e,a){"use strict";var s=a(791),i=a(797),n={},r=a(0),l=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my-3 mx-2"},[e("div",{staticClass:"title mb-1"},[this._t("header")],2),e("div",[this._t("text")],2)])}),[],!1,null,null,null).exports,o=(a(21),{components:{Trait:l},props:{id:{type:String,default:""}},computed:{name:function(){return this.item.attributes.name},item:function(){if(this.id)return a(810)("./".concat(this.id,".md"))}}}),c=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("trait",[e("span",{attrs:{slot:"header"},slot:"header"},[this._v(this._s(this.name))]),e("template",{slot:"text"},[e("div",{staticClass:"markdown-content"},[e("markdown-content",{attrs:{component:this.item.vue}})],1)])],2)}),[],!1,null,null,null).exports,d=(a(38),{props:{id:{type:String,default:""}},data:function(){return{dialog:!1}},computed:{name:function(){return this.id.replace(/-/g," ")}}}),m=(a(811),Object(r.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"feat"},[a("a",{on:{click:function(e){t.dialog=!0}}},[t._v(t._s(t._f("titlecase")(t.name)))]),a("v-dialog",{attrs:{fullscreen:this.$vuetify.breakpoint.xsOnly,transition:"dialog-bottom-transition",width:"70vw",scrollable:"","hide-overlay":""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{tile:""}},[a("v-toolbar",{attrs:{card:"",dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("close")])],1),a("v-toolbar-title",[t._v(t._s(t._f("titlecase")(t.name)))])],1),a("v-card-text",[a("v-container",{attrs:{"grid-list-lg":"",fluid:""}},[a("markdown-file",{attrs:{id:t.id,itemType:"feats"}})],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports),u={components:{MeIcon:s.a,Increases:i.a,Trait:l,RacialTrait:c,Feat:m},props:{race:{type:Object,default:function(){return{}}}}},p=Object(r.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mt-3 hidden-print"},[a("v-card-text",[a("p",{staticClass:"headline"},[t._v("Background Information")]),a("p",[t._v(t._s(t.race.snippet))]),a("v-btn",{attrs:{href:"http://masseffect.wikia.com/wiki/"+("unshackled_ai"==t.race.id?"Artificial_Intelligence":t.race.name),target:"_blank",color:"primary"}},[t._v("Read more "),a("v-icon",[t._v("keyboard_arrow_right")])],1)],1)],1),a("v-card",{staticClass:"mt-3 hidden-print"},[a("v-card-text",[a("p",{staticClass:"headline"},[t._v("Available Classes")]),a("v-layout",{staticClass:"mt-3",attrs:{row:"",wrap:"","justify-space-around":""}},t._l(t.race.availableClasses,(function(e){return a("v-flex",{key:e,staticClass:"xs4 sm2 lg1 text-xs-center"},[a("me-icon",{attrs:{name:e,type:"classes"}}),a("p",[t._v(t._s(e))])],1)})),1)],1)],1),a("v-card",{staticClass:"mt-3"},[a("v-card-text",[a("p",{staticClass:"hidden-screen"},[t._v(t._s(t.race.snippet))]),a("p",{staticClass:"subheading hidden-screen"},[t._v("Available Classes: "),a("small",[t._v(t._s(t.race.availableClasses.join(", ")))])]),a("p",{staticClass:"headline"},[t._v(t._s(t.race.name)+" Traits")]),a("trait",[a("span",{attrs:{slot:"header"},slot:"header"},[t._v("Speed")]),a("span",{attrs:{slot:"text"},slot:"text"},[t._v(t._s(t.race.speed))])]),a("trait",[a("span",{attrs:{slot:"header"},slot:"header"},[t._v("Size")]),a("span",{attrs:{slot:"text"},slot:"text"},[t._v(t._s(t.race.size))])]),a("trait",[a("span",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Sexy Level")]),a("a",{staticClass:"black--text ml-1",attrs:{href:"http://www.polygon.com/2017/3/20/14980436/mass-effect-sexiest-character-aliens-ranked",target:"_blank"}},[a("v-tooltip",{attrs:{bottom:""}},[a("v-icon",{attrs:{slot:"activator"},slot:"activator"},[t._v("help")]),a("span",[t._v("What is sexy level? ... A joke. But please read this very scientific article linked here")])],1)],1)]),a("span",{attrs:{slot:"text"},slot:"text"},[t._v(t._s(t.race.sexyLevel))])]),a("trait",[a("span",{attrs:{slot:"header"},slot:"header"},[t._v("Alignment")]),a("span",{attrs:{slot:"text"},slot:"text"},[t._v(t._s(t.race.alignment))])]),a("trait",[a("span",{attrs:{slot:"header"},slot:"header"},[t._v("Ability Score Increase")]),a("template",{slot:"text"},[a("increases",{attrs:{data:t.race.abilityScoreIncrease}})],1)],2),t._l(t.race.traits,(function(t){return a("racial-trait",{key:t,attrs:{id:t}})})),t.race.startingFeats?a("trait",[a("span",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t._f("pluralize")(t.race.startingFeats.count,"Feat")))]),a("template",{slot:"text"},[a("span",[t._v(t._s(1===t.race.startingFeats.count?"Choose one feat:":"Choose two feats:"))]),a("span",{staticClass:"comma-list"},t._l(t.race.startingFeats.options,(function(e,s){return a("span",{key:e},[a("feat",{staticClass:"ml-1",attrs:{id:e}}),s+1<t.race.startingFeats.options.length?a("span",[t._v(",")]):t._e()],1)})),0)])],2):t._e(),a("trait",[a("span",{attrs:{slot:"header"},slot:"header"},[t._v("Optional Starting Credits")]),a("span",{attrs:{slot:"text"},slot:"text"},[t._v(t._s(t.race.startingCredits))])])],2)],1)],1)}),[],!1,null,null,null);e.a=p.exports},878:function(t,e,a){var s={"./angara.md":497,"./asari.md":498,"./batarian.md":499,"./drell.md":500,"./geth.md":501,"./human.md":502,"./krogan.md":503,"./prothean.md":504,"./quarian.md":505,"./salarian.md":506,"./turian.md":507,"./unshackled-ai.md":508,"./volus.md":509,"./vorcha.md":510};function i(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id=878},923:function(t,e,a){"use strict";a.r(e);a(21);var s={components:{RaceInfo:a(814).a},data:function(){return{race:a(878)("./".concat(this.$route.params.id,".md")).attributes,id:this.$route.params.id}},head:function(){return{title:"".concat(this.race.name," - Races | Mass Effect 5e"),meta:[{hid:"description",name:"description",content:"Learn more about the ".concat(this.race.name," race, including alignment, available classes, and racial traits")}]}},layout:"phb"},i=a(0),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"xs12 md9"},[a("h2",{staticClass:"display-3"},[t._v(t._s(t.race.name))]),a("race-info",{attrs:{race:t.race}})],1),a("v-flex",{staticClass:"hidden-sm-and-down md3"},[a("v-img",{attrs:{src:t.race.bodyImg,height:"80vh"}}),"prothean"==t.id?a("p",{staticClass:"text-xs-center"},[a("small",[a("em",[t._v("image courtesy of JTickner")])])]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);