(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{788:function(t,s,e){"use strict";e.d(s,"a",(function(){return a}));e(46);var a={methods:{averageFromDie:function(t){if(t){var s=t.split("d");return Math.floor(parseInt(s[0],10)*((parseInt(s[1],10)+1)/2))}return 0}}}},798:function(t,s,e){"use strict";e.d(s,"a",(function(){return a}));var a={methods:{abilityScoreBonus:function(t){return Math.floor((parseInt(t,10)-10)/2)}}}},803:function(t,s,e){var a=e(12),n=e(34),i=e(32),r=e(52).f;t.exports=function(t){return function(s){for(var e,o=i(s),l=n(o),c=l.length,u=0,p=[];c>u;)e=l[u++],a&&!r.call(o,e)||p.push(t?[e,o[e]]:o[e]);return p}}},805:function(t,s,e){var a=e(830),n=e(831),i=e(774),r=e(832);t.exports=function(t,s){return a(t)||n(t,s)||i(t,s)||r()},t.exports.default=t.exports,t.exports.__esModule=!0},806:function(t,s,e){var a=e(835);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(30).default)("ff3661f2",a,!0,{})},813:function(t,s,e){"use strict";e(38),e(47),e(291),e(21);var a=e(798),n={methods:{dieFromAverage:function(t){return 2*parseFloat(t)-1}}},i=e(788),r={props:{feature:{type:Object,default:function(){return{}}}}},o=e(0),l=Object(o.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("p",[e("strong",[e("em",[t._v(t._s(t.feature.name)),t.feature.recharge?e("span",{staticClass:"ml-1"},[t._v("("+t._s(t.feature.recharge)+")")]):t._e()]),e("span",[t._v(".")])]),e("span",{staticClass:"ml-1"},[t._v(t._s(t.feature.description))])])])}),[],!1,null,null,null).exports,c={props:{attack:{type:Object,default:function(){return{}}}},computed:{range:function(){return"melee"===this.attack.type?"reach ".concat(this.attack.range,"m"):"ranged"===this.attack.type?"range ".concat(this.attack.range,"/").concat(3*this.attack.range,"m"):""}}},u=Object(o.a)(c,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("p",{staticClass:"mb-0"},[e("strong",[e("em",[t._v(t._s(t.attack.name)+".")])]),e("em",{staticClass:"ml-1"},[t._v(t._s(t._f("capitalize")(t.attack.type))+" Weapon Attack:")]),e("span",{staticClass:"ml-1"},[t._v("+"+t._s(t.attack.attackMod)+" to hit,")]),e("span",{staticClass:"ml-1"},[t._v(t._s(t.range)+",")]),e("span",{staticClass:"ml-1"},[t._v(t._s(t.attack.target)+".")])]),e("p",{class:[t.attack.miss?"my-0":"mt-0"]},[e("em",[t._v("Hit")]),t._v(": "+t._s(t.attack.hit))]),t.attack.miss?e("p",{staticClass:"mt-0"},[e("em",[t._v("Miss")]),t._v(": "+t._s(t.attack.miss))]):t._e(),e("p")])}),[],!1,null,null,null).exports,p=(e(236),{props:{id:{type:String,default:""},profBonus:{type:Number,default:2}},computed:{grenade:function(){return e(833)("./".concat(this.id,".md"))}}}),_=(e(834),Object(o.a)(p,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"markdown-content npc-grenade"},[s("p",[s("strong",[s("em",{staticClass:"mr-1"},[this._v(this._s(this.grenade.attributes.name)+" ("+this._s(this.profBonus)+"/day).")])]),s("markdown-content",{attrs:{component:this.grenade.vue}})],1)])}),[],!1,null,null,null).exports),d=(e(71),e(11),e(46),e(67),e(68),e(800)),m={mixins:[a.a,i.a],props:{id:{type:String,default:""},abilityScores:{type:Object,default:function(){return{}}},profBonus:{type:Number,default:2}},computed:{attackMod:function(){var t=this.tags,s=this.abilityScoreBonus(this.abilityScores.str),e=this.abilityScoreBonus(this.abilityScores.dex);return t.includes("finesse")||t.includes("recoil")?s>e?s:e:"Melee"===this.weapon.type?s:e},attackType:function(){return"Melee"===this.weapon.type?"melee":"ranged"},rangeType:function(){return"Melee"===this.weapon.type?"reach":"range"},tags:function(){return this.weapon.tags.split(",").map((function(t){return t.toLowerCase().trim()}))},notableTags:function(){var t=["two-handed","double tap","hip fire","burst fire"];return this.tags.filter((function(s){return t.includes(s)}))},damage:function(){return this.averageFromDie(this.weapon.damage)+this.attackMod},damageText:function(){var t=this.weapon.npcHit?" and ".concat(this.weapon.npcHit):"",s=this.attackMod>0?" + ".concat(this.attackMod):"";return"".concat(this.damage," (").concat(this.weapon.damage).concat(s,") ").concat(this.weapon.dmgType," damage").concat(t)},weapon:function(){var t=this,s=d.find((function(s){return s.id===t.id}));return void 0===s&&(console.log("could not find ".concat(this.id)),s={name:"NOT FOUND",tags:"",type:"",damage:"1d4",range:2}),s}}},f=Object(o.a)(m,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("p",{staticClass:"mb-0"},[e("strong",[e("em",[t._v(t._s(t.weapon.name)),t.notableTags.length>0?e("span",{staticClass:"ml-1"},[t._v("("+t._s(t.notableTags.join(", "))+")")]):t._e()]),e("span",[t._v(".")])]),e("em",{staticClass:"ml-1"},[t._v(t._s(t._f("capitalize")(t.attackType))+" Weapon Attack:")]),e("span",{staticClass:"ml-1"},[t._v("+"+t._s(t.attackMod+t.profBonus)+" to hit,")]),e("span",{staticClass:"ml-1"},[t._v(t._s(t.rangeType)+" "+t._s(t._f("weaponRange")(t.weapon))+",")]),e("span",{staticClass:"ml-1"},[t._v("one target.")])]),e("p",{class:[t.weapon.npcMiss?"my-0":"mt-0"]},[e("em",[t._v("Hit")]),t._v(": "+t._s(t.damageText))]),t.weapon.npcMiss?e("p",{staticClass:"mt-0"},[e("em",[t._v("Miss")]),t._v(": "+t._s(t.weapon.npcMiss))]):t._e(),e("p")])}),[],!1,null,null,null).exports,h=e(805),v=e.n(h),g=(e(13),e(8),e(836),e(789)),y=e(98),b={props:{spellcasting:{type:Object,default:function(){return{}}}},computed:{spellList:function(){var t=this,s=[];return Object.entries(this.spellSlots).forEach((function(e){var a=v()(e,2),n=a[0],i=a[1];if(i){var r=t.castable.filter((function(t){return parseInt(t.level,10)===parseInt(n,10)}));s.push({level:n,slots:i,spells:r})}})),s},cantrips:function(){return this.castable.filter((function(t){return 0===parseInt(t.level,10)}))},spellSlots:function(){var t=this;return y.progression.find((function(s){return parseInt(s.level,10)===parseInt(t.spellcasting.level,10)})).spellSlots},castable:function(){var t=this;return g.filter((function(s){return t.spellcasting.spellList.includes(s.id)}))}}},k=Object(o.a)(b,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mb-3"},[e("p",{staticClass:"my-0"},[t._v("Cantrips (at will): "),e("em",[t._v(t._s(t.cantrips.map((function(t){return t.name.toLowerCase()})).join(", ")))])]),t._l(t.spellList,(function(s){return e("p",{key:s.level,staticClass:"my-0"},[t._v(t._s(t._f("ordinal")(s.level))+" level ("+t._s(s.slots)+" "+t._s(t._f("pluralize")(s.slots,"slot"))+")"),s.spells.length>0?e("span",[t._v(": "),e("em",[t._v(t._s(s.spells.map((function(t){return t.name.toLowerCase()})).join(", ")))])]):t._e()])}))],2)}),[],!1,null,null,null).exports,C={props:{spellcasting:{type:Object,default:function(){return{}}}}},w=Object(o.a)(C,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mb-3"},t._l(t.spellcasting.spellList,(function(s,a){return e("p",{key:a,staticClass:"my-0"},[t._v(t._s(s.perDay)+":"),t._l(s.spells,(function(a,n){return e("span",{key:a.id,staticClass:"ml-1"},[e("span",[e("em",[t._v(t._s(a.id))])]),a.higherLevel?e("span",{staticClass:"ml-1"},[t._v("(as a "+t._s(t._f("ordinal")(a.higherLevel))+"-level spell)")]):t._e(),n+1<s.spells.length?e("span",[t._v(",")]):t._e()])}))],2)})),0)}),[],!1,null,null,null).exports,x={props:{action:{type:Object,default:function(){return{}}}}},S={components:{NpcAttack:u,NpcSpellcasting:k,NpcInnateSpellcasting:w,NpcFeature:l,NpcGrenade:_,NpcWeaponAttack:f,NpcLegendaryAction:Object(o.a)(x,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("p",[e("strong",[e("em",[t._v(t._s(t.action.name))])]),t.action.cost>1?e("span",{staticClass:"ml-1"},[t._v("(Costs "+t._s(t.action.cost)+" "+t._s(t._f("pluralize")(t.action.cost,"Action"))+")")]):t._e(),e("span",[t._v(".")]),e("span",{staticClass:"ml-1"},[t._v(t._s(t.action.description))])])])}),[],!1,null,null,null).exports},mixins:[a.a,i.a,n,{data:function(){return{xpTable:{0:10,"1/8":25,"1/4":50,"1/2":100,1:200,2:450,3:700,4:1100,5:1800,6:2300,7:2900,8:3900,9:5e3,10:5900,11:7200,12:8400,13:1e4,14:11500,15:13e3,16:15e3,17:18e3,18:2e4,19:22e3,20:25e3,21:33e3,22:41e3,23:5e4,24:62e3,25:75e3,26:9e4,27:105e3,28:12e4,29:135e3,30:155e3}}},methods:{xp:function(t){return this.xpTable[t]}}}],props:{stats:{type:Object,default:function(){return{}}}},data:function(){return{imageDialog:!1,skillsMap:{acrobatics:"dex",athletics:"str",deception:"cha",electronics:"int",engineering:"int",history:"int",insight:"wis",intimidation:"cha",investigation:"int",medicine:"wis",perception:"wis",performance:"cha",persuasion:"cha",science:"int","sleight of hand":"dex",stealth:"dex",survival:"wis","vehicle handling":"dex"},abilityMap:{str:"Strength",dex:"Dexterity",con:"Constitution",int:"Intelligence",wis:"Wisdom",cha:"Charisma"}}},computed:{hitPoints:function(){var t=this.abilityScoreBonus(this.stats.abilityScores.con)*this.stats.hp.numDice,s=this.averageFromDie("".concat(this.stats.hp.numDice,"d").concat(this.stats.hp.die))+t;return t=t>0?" + ".concat(t):t<0?" - ".concat(-1*t):"","".concat(s," (").concat(this.stats.hp.numDice,"d").concat(this.stats.hp.die).concat(t,")")},legendaryActions:function(){return this.stats.legendaryActions?this.stats.legendaryActions.sort((function(t,s){return t.cost===s.cost?t.name>s.name?1:-1:t.cost>s.cost?1:-1})):[]},passivePerception:function(){var t=this.skills,s=t&&t.match(/perception/)?this.stats.profBonus:0;return"Passive Perception ".concat(10+this.abilityScoreBonus(this.stats.abilityScores.wis)+s)},savingThrows:function(){var t=this;return this.stats.savingThrows.map((function(s){var e=t.abilityMap[s],a=t.abilityScoreBonus(t.stats.abilityScores[s])+parseInt(t.stats.profBonus,10);return a=a>0?a:0,"".concat(e," +").concat(a)})).join(", ")},senses:function(){var t="";return this.stats.senses&&this.stats.senses.length>0&&(t=this.stats.senses.map((function(t){return"".concat(t.sense," ").concat(t.range,"m")})).join(", ")),""===t?this.passivePerception:"".concat(t,", ").concat(this.passivePerception)},skills:function(){var t=this;return 0!==this.stats.skills.length&&this.stats.skills.map((function(s){var e=s,a=t.stats.profBonus;e.match(/\*/)&&(a*=2,e=e.replace("*",""));var n=t.skillsMap[e];if(!n)return console.log("could not find ".concat(e," from ").concat(t.stats.name)),!1;var i=t.stats.abilityScores[n];return a+=t.abilityScoreBonus(i),"".concat(t.$options.filters.titlecase(e)," +").concat(a)})).join(", ")},speed:function(){return this.stats.speed.map((function(t){return"walk"===t.type?"".concat(t.range,"m"):"".concat(t.type," ").concat(t.range,"m")})).join(", ")},spellSaveDc:function(){return 8+this.spellHit},spellHit:function(){return this.stats.spellcasting?this.stats.profBonus+this.abilityScoreBonus(this.stats.abilityScores[this.stats.spellcasting.mod]):0}},methods:{hasFeature:function(t){return this.stats[t]&&this.stats[t].length>0},abilityBonus:function(t){var s=this.abilityScoreBonus(t);return s>=0?"+".concat(s):s}}},j=Object(o.a)(S,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"pb-0 mt-3"},[e("p",{staticClass:"red--text text--darken-4 headline small-caps mb-0"},[e("strong",[t._v(t._s(t.stats.name))]),t.stats.unit?e("span",{staticClass:"body-2 grey--text text--darken-4 pl-2",staticStyle:{"text-transform":"uppercase"}},[t._v("("+t._s(t.stats.unit)+")")]):t._e()]),t.stats.author?e("p",{staticClass:"subheading my-2"},[t._v("created by "+t._s(t.stats.author))]):t._e(),e("p",[e("em",[t._v(t._s(t.stats.size)+" "+t._s(t.stats.type)+", "+t._s(t.stats.alignment))])])]),e("div",{staticClass:"pt-0",staticStyle:{position:"relative"}},[t.stats.image?e("v-btn",{attrs:{color:"secondary",dark:"",small:"",fab:"",absolute:"",right:"",top:""},on:{click:function(s){t.imageDialog=!0}}},[e("v-icon",[t._v("photo")])],1):t._e(),e("div",{staticClass:"hr"}),e("ul",{staticClass:"list-unstyled pl-0"},[e("li",[e("strong",[t._v("Armor Class")]),t._v(" "+t._s(t.stats.ac))]),e("li",[e("strong",[t._v("Hit Points")]),t._v(" "+t._s(t.hitPoints))]),t.stats.sp?e("li",[e("strong",[t._v("Shield Points")]),t._v(" "+t._s(t.stats.sp.shields)+" ("+t._s(t.stats.sp.regen)+" regen)")]):t._e(),t.stats.barrier?e("li",[e("strong",[t._v("Barrier")]),t._v(" "+t._s(t.stats.barrier)+" "+t._s(t._f("pluralize")(t.stats.barrier,"tick")))]):t._e(),e("li",[e("strong",[t._v("Speed")]),t._v(" "+t._s(t.speed))])]),e("div",{staticClass:"hr"}),e("v-container",{staticClass:"py-0"},[e("v-layout",t._l(t.stats.abilityScores,(function(s,a){return e("v-flex",{key:a,staticClass:"text-xs-center",attrs:{xs2:""}},[e("p",{staticClass:"ma-0"},[e("strong",[t._v(t._s(a.toUpperCase()))])]),e("p",{staticClass:"ma-0"},[t._v(t._s(s)+" ("+t._s(t.abilityBonus(s))+")")])])})),1)],1),e("div",{staticClass:"hr"}),e("ul",{staticClass:"list-unstyled pl-0"},[t.hasFeature("savingThrows")?e("li",[e("strong",[t._v("Saving Throws")]),t._v(" "+t._s(t.savingThrows))]):t._e(),t.skills?e("li",[e("strong",[t._v("Skills")]),t._v(" "+t._s(t.skills))]):t._e(),t.hasFeature("damageVulnerabilities")?e("li",[e("strong",[t._v("Damage Vulnerabilities")]),t._v(" "+t._s(t.stats.damageVulnerabilities.join(", ")))]):t._e(),t.hasFeature("damageResistances")?e("li",[e("strong",[t._v("Damage Resistances")]),t._v(" "+t._s(t.stats.damageResistances.join(", ")))]):t._e(),t.hasFeature("damageImmunities")?e("li",[e("strong",[t._v("Damage Immunities")]),t._v(" "+t._s(t.stats.damageImmunities.join(", ")))]):t._e(),t.hasFeature("conditionImmunities")?e("li",[e("strong",[t._v("Condition Immunities")]),t._v(" "+t._s(t.stats.conditionImmunities.join(", ")))]):t._e(),e("li",[e("strong",[t._v("Senses")]),t._v(" "+t._s(t.senses))]),e("li",[e("strong",[t._v("Challenge")]),t._v(" "+t._s(t.stats.cr)+" ("+t._s(t.xp(t.stats.cr))+" XP)")])]),e("div",{staticClass:"hr"}),t._l(t.stats.features,(function(t){return e("p",{key:t.id},[e("npc-feature",{attrs:{feature:t}})],1)})),t.stats.spellcasting?e("div",["innate"===t.stats.spellcasting.level?e("div",[e("p",{staticClass:"mb-0"},[t._m(0),t._v(". The "+t._s(t.stats.name.toLowerCase())+"'s innate spellcasting ability is "+t._s(t.abilityMap[t.stats.spellcasting.mod])+" (spell save DC\n"+t._s(t.spellSaveDc)+", +"+t._s(t.spellHit)+" to hit with spell attacks). It can innately cast the following:")]),e("npc-innate-spellcasting",{attrs:{spellcasting:t.stats.spellcasting}})],1):e("div",[e("p",{staticClass:"mb-0"},[t._m(1),t._v(" The "+t._s(t.stats.name.toLowerCase())+" is "+t._s(t._f("article")(t.stats.spellcasting.level))+" "+t._s(t._f("ordinal")(t.stats.spellcasting.level))+"-level\nspellcaster. Its spellcasting ability is "+t._s(t.abilityMap[t.stats.spellcasting.mod])+" (spell save DC "+t._s(t.spellSaveDc)+", +"+t._s(t.spellHit)+" to hit with spell attacks).\nThe "+t._s(t.stats.name.toLowerCase())+" has the following biotic spells:")]),e("npc-spellcasting",{attrs:{spellcasting:t.stats.spellcasting}})],1)]):t._e(),t.hasFeature("actions")?e("p",{staticClass:"title underline-heading small-caps"},[t._v("Actions")]):t._e(),t._l(t.stats.actions,(function(s){return e("div",{key:s.name},["standard"===s.type?e("npc-feature",{attrs:{feature:s}}):"weapon"===s.type?e("npc-weapon-attack",{attrs:{id:s.id,abilityScores:t.stats.abilityScores,profBonus:t.stats.profBonus}}):"grenade"===s.type?e("npc-grenade",{attrs:{id:s.id,profBonus:t.stats.profBonus}}):e("npc-attack",{attrs:{attack:s,abilityScores:t.stats.abilityScores,profBonus:t.stats.profBonus}})],1)})),t.hasFeature("legendaryActions")?e("div",[e("p",{staticClass:"title underline-heading small-caps"},[t._v("Legendary Actions")]),e("p",[t._v("The "+t._s(t.stats.name.toLowerCase())+" can take 3 legendary actions, choosing from the options below. Only one legendary action can\nbe used at a time and only at the end of another creature's turn. The "+t._s(t.stats.name)+" regains spent legendary\nactions at the start of his turn.")]),t._l(t.legendaryActions,(function(t){return e("p",{key:t.name},[e("npc-legendary-action",{attrs:{action:t}})],1)}))],2):t._e(),t.hasFeature("lairActions")?e("div",[e("p",{staticClass:"title underline-heading small-caps"},[t._v("Lair Actions")]),e("p",[t._v("On initiative count 20 (losing initiative ties), the "+t._s(t.stats.name.toLowerCase())+" takes a lair action to cause one of the\nfollowing effects; it can't use the same effect two rounds in a row:")]),e("ul",t._l(t.stats.lairActions,(function(s,a){return e("li",{key:a},[t._v(t._s(s.description))])})),0)]):t._e(),t.hasFeature("reactions")?e("div",[e("p",{staticClass:"title underline-heading small-caps"},[t._v("Reactions")]),t._l(t.stats.reactions,(function(t){return e("p",{key:t.id},[e("npc-feature",{attrs:{feature:t}})],1)}))],2):t._e()],2),t.stats.image?e("v-dialog",{attrs:{width:"500"},model:{value:t.imageDialog,callback:function(s){t.imageDialog=s},expression:"imageDialog"}},[e("v-card",[e("v-card-title",{staticClass:"headline"},[t._v(t._s(t.stats.name)+" Images")]),e("v-card-text",{staticClass:"text-xs-center"},[e("img",{attrs:{src:t.stats.image,width:"450"}})]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(s){t.imageDialog=!1}}})],1)],1)],1):t._e()],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("strong",[s("em",[this._v("Innate Spellcasting")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("strong",[s("em",[this._v("Spellcasting")]),this._v(".")])}],!1,null,null,null);s.a=j.exports},830:function(t,s){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},831:function(t,s){t.exports=function(t,s){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],a=!0,n=!1,i=void 0;try{for(var r,o=t[Symbol.iterator]();!(a=(r=o.next()).done)&&(e.push(r.value),!s||e.length!==s);a=!0);}catch(t){n=!0,i=t}finally{try{a||null==o.return||o.return()}finally{if(n)throw i}}return e}},t.exports.default=t.exports,t.exports.__esModule=!0},832:function(t,s){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},833:function(t,s,e){var a={"./arc_grenade.md":462,"./cain_trip_mine.md":463,"./cluster_grenade.md":464,"./flashbang_grenade.md":465,"./frag_grenade.md":466,"./homing_grenade.md":467,"./inferno_grenade.md":468,"./lift_grenade.md":469,"./multi-frag_grenade.md":470,"./proximity_mine.md":471,"./recon_mine.md":472,"./smoke_grenade.md":473,"./sticky_grenade.md":474};function n(t){var s=i(t);return e(s)}function i(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id=833},834:function(t,s,e){"use strict";e(806)},835:function(t,s,e){(t.exports=e(29)(!1)).push([t.i,".npc-grenade>p div.frontmatter-markdown,.npc-grenade>p p{display:inline}",""])},836:function(t,s,e){var a=e(2),n=e(803)(!0);a(a.S,"Object",{entries:function(t){return n(t)}})}}]);