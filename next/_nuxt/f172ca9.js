(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1010:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var o={methods:{randomValue:function(t){return t[Math.floor(Math.random()*t.length)]}}}},1060:function(t,e,r){"use strict";r.r(e);r(12),r(10),r(15),r(13),r(16),r(32),r(22),r(42),r(36),r(44),r(47),r(35);var o=r(2),n=r(24);r(17),r(7),r(28),r(29),r(87),r(62),r(21),r(33),r(77),r(53);function l(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,n=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw n}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={mixins:[r(1010).a],fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("FETCH_LOTS",["gear","weapons","armor","mods"]);case 2:t.$store.commit("pageTitle","Loot Generator");case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{lootTableDialog:!1,loots:[],workingLoot:{},cache:{},options:{hoard:!1,individuals:1,cr:0},crOptions:[{text:"0-4",value:0},{text:"5-10",value:1},{text:"11-17",value:2},{text:"17+",value:3}],individualRewards:[[10,20,30,40,50,75,100,125,150,175,200,225,275,300,325,350,375,400,450,500],[500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,950,1e3,1050],[1e3,1100,1200,1300,1400,1500,1600,1700,1800,1900,2e3,2100,2200,2300,2400,2500,2750,3e3,3250,3500],[3e3,3250,3500,3750,4e3,4250,4500,4750,5e3,5250,5500,5750,6e3,6250,6500,6750,7e3,8e3,9e3,1e4]],hoardRewards:[{credits:3e3,additionalCredits:[0,1e3,1e3,1500,1500,2e3,2e3,2500,2500,3e3,3e3,3500,3500,4e3,4e3,4500,4500,5e3,6e3,7e3],itemRolls:[{min:1,max:25,roll:null},{min:26,max:50,roll:6,table:"a"},{min:51,max:75,roll:4,table:"b"},{min:76,max:90,roll:2,table:"e"},{min:91,max:97,roll:2,table:"d"},{min:98,max:100,roll:1,table:"f"}]},{credits:1e4,additionalCredits:[0,1e3,3e3,6e3,9e3,12e3,14e3,16e3,18e3,2e4,22e3,24e3,26e3,28e3,3e4,32e3,34e3,36e3,38e3,4e4],itemRolls:[{min:1,max:25,roll:null},{min:26,max:35,roll:6,table:"a"},{min:36,max:45,roll:6,table:"b"},{min:46,max:60,roll:4,table:"c"},{min:61,max:75,roll:4,table:"d"},{min:76,max:90,roll:4,table:"e"},{min:91,max:100,roll:2,table:"f"}]},{credits:5e4,additionalCredits:[0,1e3,5e3,1e4,15e3,2e4,25e3,3e4,35e3,4e4,5e4,55e3,6e4,65e3,75e3,8e4,85e3,9e4,95e3,1e5],itemRolls:[{min:1,max:15,roll:null},{min:16,max:30,roll:6,table:"b"},{min:31,max:45,roll:6,table:"c"},{min:46,max:60,roll:4,table:"d"},{min:61,max:70,roll:4,table:"e"},{min:71,max:85,roll:4,table:"f"},{min:71,max:90,roll:4,table:"g"},{min:91,max:100,roll:1,table:"h"}]},{credits:15e4,additionalCredits:[0,5e3,1e3,15e3,2e4,25e3,3e4,4e4,45e3,5e4,55e3,6e4,65e3,7e4,75e3,8e4,85e3,9e4,95e3,1e5],itemRolls:[{min:1,max:5,roll:null},{min:6,max:15,roll:8,table:"c"},{min:16,max:25,roll:8,table:"d"},{min:26,max:30,roll:8,table:"f"},{min:31,max:50,roll:4,table:"g"},{min:51,max:65,roll:6,table:"g"},{min:66,max:80,roll:8,table:"g"},{min:66,max:95,roll:4,table:"h"},{min:96,max:100,roll:6,table:"h"}]}],rewardTables:{a:[m({min:1,max:15},this.addConReward(0,1,4,"omni-gel")),m({min:16,max:35},this.addConReward(0,1,4,"medi-gel","standard")),m({min:35,max:50},this.addGear("common")),m({min:51,max:60},this.addMod("common")),m({min:61,max:80},this.addWeapon("common")),m({min:81,max:95},this.addMod("uncommon")),m({min:96,max:100},this.addArmor("uncommon"))],b:[m({min:1,max:15},this.addConReward(2,1,6,"medi-gel","standard")),m({min:16,max:25},this.addConReward(2,2,4,"omni-gel")),m({min:26,max:44},this.addGear("uncommon")),m({min:55,max:64},this.addWeapon("common")),m({min:65,max:74},this.addMod("common")),m({min:75,max:84},this.addArmor("uncommon")),m({min:75,max:94},this.addConReward(0,1,4,"heavy weapon charges")),m({min:95,max:100},this.addWeapon("uncommon"))],c:[m({min:1,max:15},this.addConReward(0,1,4,"medi-gel","enhanced")),m({min:16,max:25},this.addConReward(2,1,8,"omni-gel")),m({min:26,max:35},this.addMod("uncommon")),m({min:36,max:45},this.addGear("uncommon")),m({min:46,max:60},this.addWeapon("uncommon")),m({min:61,max:73},this.addArmor("uncommon")),m({min:74,max:85},this.addConReward(0,1,8,"heavy weapon charges")),m({min:86,max:90},this.addMod("rare")),m({min:91,max:100},this.addConReward(0,1,4,"medi-gel","superior"))],d:[m({min:1,max:20},this.addConReward(1,2,6,"omni-gel")),m({min:21,max:40},this.addMod("rare")),m({min:41,max:60},this.addGear("rare")),m({min:61,max:70},this.addConReward(1,1,6,"medi-gel","enhanced")),m({min:71,max:80},this.addConReward(2,2,4,"heavy weapon charges")),m({min:81,max:90},this.addConReward(0,1,6,"medi-gel","superior")),m({min:91,max:95},this.addConReward(0,1,4,"medi-gel","ultimate")),m({min:96,max:100},this.addConReward(0,1,6,"medi-gel","ultimate"))],e:[m({min:1,max:10},this.addWeapon("common")),m({min:11,max:40},this.addWeapon("uncommon")),m({min:41,max:60},this.addMod("rare")),m({min:61,max:80},this.addGear("very rare")),m({min:81,max:90},this.addArmor("uncommon")),m({min:91,max:100},this.addArmor("rare"))],f:[m({min:1,max:10},this.addWeapon("uncommon")),m({min:11,max:30},this.addWeapon("rare")),m({min:31,max:70},this.addMod("rare")),m({min:71,max:100},this.addArmor("rare"))],g:[m({min:1,max:30},this.addWeapon("rare")),m({min:31,max:60},this.addWeapon("spectre")),m({min:61,max:70},this.addMod("rare")),m({min:71,max:80},this.addGear("very rare")),m({min:81,max:90},this.addArmor("rare")),m({min:91,max:100},this.addArmor("spectre"))],h:[m({min:1,max:10},this.addWeapon("spectre")),m({min:11,max:40},this.addGear("spectre")),m({min:41,max:70},this.addMod("spectre")),m({min:71,max:100},this.addArmor("spectre"))]}}},computed:{mods:function(){return this.$store.getters.getData("mods")},weapons:function(){return this.$store.getters.getData("weapons")},armor:function(){return this.$store.getters.getData("armor")},gear:function(){var t,e=this.$store.getters.getData("gear"),r=[],o=[{level:"I",rarity:"Common"},{level:"II",rarity:"Common"},{level:"III",rarity:"Uncommon"},{level:"IV",rarity:"Uncommon"},{level:"V",rarity:"Rare"},{level:"VI",rarity:"Rare"},{level:"VII",rarity:"Very Rare"},{level:"VII",rarity:"Very Rare"},{level:"IX",rarity:"Very Rare"},{level:"X",rarity:"Spectre"}],n=l(e.filter((function(i){return"Grenade"===i.type})));try{for(n.s();!(t=n.n()).done;){var d,c=t.value,m=l(o);try{for(m.s();!(d=m.n()).done;){var h=d.value;r.push(this.createRarityItem(c,h))}}catch(t){m.e(t)}finally{m.f()}}}catch(t){n.e(t)}finally{n.f()}var f,v=[],x=[{level:"I",rarity:"Uncommon"},{level:"II",rarity:"Rare"},{level:"III",rarity:"Very Rare"},{level:"VI",rarity:"Very Rare"},{level:"V",rarity:"Spectre"}],w=l(e.filter((function(i){return"Varies"===i.rarity})));try{for(w.s();!(f=w.n()).done;){var y,R=f.value,C=l(x);try{for(C.s();!(y=C.n()).done;){var L=y.value;v.push(this.createRarityItem(R,L))}}catch(t){C.e(t)}finally{C.f()}}}catch(t){w.e(t)}finally{w.f()}var _=["Grenade","Tool","Omni-gel","Medi-gel","Ammo"];return e.filter((function(i){return!_.includes(i.type)})).concat(r).concat(v)},individualRewardsData:function(){var t=this;return this.crOptions.map((function(i){return[i.text,t.creditRangeText(t.individualRewards[i.value])]}))}},methods:{addArmor:function(t){var e=this;return{reward:function(){return e.addItem("armor",t)},text:"1 ".concat(t," armor")}},addWeapon:function(t){var e=this;return{reward:function(){return e.addItem("weapons",t)},text:"1 ".concat(t," weapon")}},addGear:function(t){var e=this;return{reward:function(){return e.addItem("gear",t)},text:"1 ".concat(t," gear")}},addMod:function(t){var e=this;return{reward:function(){return e.addItem("mods",t)},text:"1 ".concat(t," mod")}},addConReward:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3?arguments[3]:void 0,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{reward:function(){return e.addConsumable(t,r,o,n,l)},text:"".concat(r,"d").concat(o).concat(t>0?" + ".concat(t):"").concat(l?" ".concat(l," "):""," ").concat(n)}},addConsumable:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3?arguments[3]:void 0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,text="Rolling for ".concat(e,"d").concat(r).concat(t>0?" + ".concat(t):""),l="Adding ",d=-1;n&&(d=this.workingLoot[o].findIndex((function(t){return t.type===n})));for(var c=0,m=[],i=1;i<=e;i++){var h=this.randomRoll(r);c+=h,m.push(h)}n?d>-1&&(this.workingLoot[o][d]+=c):this.workingLoot[o]+=c,l+="".concat(m.join(" + ")).concat(t>0?" + ".concat(t):"").concat(n?" ".concat(n," "):""," ").concat(o),this.rewardLog({text:text,result:l})},addItem:function(t,e){var r=this[t].filter((function(i){return i.rarity.toLowerCase()===e.toLowerCase()})),o=this.randomValue(r);this.workingLoot[t].push(o),this.rewardLog({text:"Rolling for 1 random ".concat(e," ").concat(t),result:o.name})},createRarityItem:function(t,e){var r=JSON.parse(JSON.stringify(t));return r.rarity=e.rarity,r.name="".concat(t.name," ").concat(e.level),r.id="".concat(t.id,"-").concat(e.level.toLowerCase()),r},rollText:function(t){if(!t.roll)return"Nothing extra";var e=1===t.roll?1:"1d".concat(t.roll),r=1===t.roll?"":"s";return"Roll ".concat(e," time").concat(r," on Equipment Table ").concat(t.table.toUpperCase())},clearLoot:function(){this.loots=[]},initLoot:function(){return{credits:0,"thermal clips":0,"heavy weapon charges":0,"omni-gel":0,"medi-gel":[],gear:[],weapons:[],armor:[],mods:[],log:[]}},getLoot:function(){if(this.workingLoot=this.initLoot(),this.options.hoard)this.getHoardLoot();else for(var i=1;i<=this.options.individuals;i++)this.getIndividualLoot();this.loots.push(JSON.parse(JSON.stringify(this.workingLoot)))},getHoardLoot:function(){var t=this,e=this.hoardRewards[this.options.cr];this.workingLoot.credits+=e.credits,this.rewardLog({text:"Base credits",result:"".concat(this.$options.filters.groupDigits(e.credits,","))});var r=this.randomValue(e.additionalCredits);this.workingLoot.credits+=r,this.rewardLog({text:"Rolling for random credits between ".concat(this.creditRangeText(e.additionalCredits)),result:"".concat(this.$options.filters.groupDigits(r,",")," credits")});var o=this.randomRoll(100),n=e.itemRolls.find((function(t){return t.min<=o&&t.max>=o}));n?n.roll&&function(){var e="".concat(n.roll>2?"1d".concat(n.roll):2===n.roll?"twice":"once");t.rewardLog({text:"Rolling 1d100 for loot",result:"".concat(o," ... Roll ").concat(e," on Table ").concat(n.table.toUpperCase())});var r=n.roll;n.roll>2&&(r=t.randomRoll(n.roll),t.rewardLog({text:"Rolling ".concat(e," for # of rolls"),result:r}));for(var l=null,d=1,i=1;i<=r;i++){d=t.randomRoll(100),l=t.rewardTables[n.table].find((function(t){return t.min<=d&&t.max>=d}));var c={text:"Roll #".concat(i,": Rolling 1d100 on Table ").concat(n.table.toUpperCase()),result:"".concat(d," ... ")};l?(c.result+=l.text,t.rewardLog(c),l.reward()):(c.result+="could not find reward!",t.rewardLog(c))}}():this.rewardLog({text:"Something went terribly wrong!",result:""})},getIndividualLoot:function(){var t=this.randomValue(this.individualRewards[this.options.cr]);this.rewardLog({text:"Rolling for random credits between ".concat(this.creditRangeText(this.individualRewards[this.options.cr])),result:"".concat(this.$options.filters.groupDigits(t,",")," credits")}),this.workingLoot.credits+=t},rewardLog:function(t){this.workingLoot.log.push(t)},creditRangeText:function(t){var e=t[0],r=this.$options.filters.groupDigits(e,","),o=t[t.length-1],n=this.$options.filters.groupDigits(o,",");return"".concat(r," - ").concat(n)},randomRoll:function(t){return Math.floor(Math.random()*t)+1},removeLoot:function(t){this.loots.splice(t,1)}},head:function(){return{title:"Loot Generator - Generators | Mass Effect 5e",meta:[{id:"description",name:"description",content:"A random loot generator."}]}}},f=r(0),v=r(3),x=r.n(v),w=r(199),y=r(305),R=r(5),C=r(998),L=r(979),_=r(977),I=r(980),O=r(173),T=r(982),k=r(81),V=r(990),D=r(102),S=r(38),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$fetchState.pending?t._e():r("v-container",[r("me-page-title"),t._v(" "),r("p",[t._v("\n    The Loot Generator uses random rolls on a set of loot tables to decide loot rewards. Our loot tables aren't as diverse as the ones\n    found in the DMG. For example, individual loot tables currently supply only credits. Weapons, armor, and mods, can be acquired from the hoard\n    loot tables.\n  ")]),t._v(" "),r("div",{staticClass:"text-center"},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){e.stopPropagation(),t.lootTableDialog=!0}}},[t._v("\n      Raw Tables\n    ")])],1),t._v(" "),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.lootTableDialog,callback:function(e){t.lootTableDialog=e},expression:"lootTableDialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[t._v("\n          Raw loot Tables\n        ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.lootTableDialog=!1}}},[r("v-icon",[t._v("\n            mdi-close\n          ")])],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",lg:"6"}},[r("me-loot-group",{attrs:{title:"Individual Rewards"}},[r("me-loot-table",{attrs:{"table-headers":["CR","Reward"],"table-data":t.individualRewardsData}})],1),t._v(" "),r("me-loot-group",{attrs:{title:"Hoard Rewards"}},t._l(t.crOptions,(function(e){return r("me-loot-table",{key:e.value,attrs:{"table-headers":["1d100","Equipment Table Roll"],"table-data":t.hoardRewards[e.value].itemRolls.map((function(i){return[i.min+"-"+i.max,t.rollText(i)]}))},scopedSlots:t._u([{key:"tableTitle",fn:function(){return[t._v("\n                CR: "+t._s(e.text)+"\n              ")]},proxy:!0},{key:"tableInfo",fn:function(){return[r("me-stat-list",[r("me-stat-list-item",{attrs:{label:"Credits"}},[t._v("\n                    "+t._s(t.hoardRewards[e.value].credits)+"\n                  ")]),t._v(" "),r("me-stat-list-item",{attrs:{label:"Additional Credits"}},[t._v("\n                    "+t._s(t._f("groupDigits")(t.hoardRewards[e.value].additionalCredits[0],","))+" - "+t._s(t._f("groupDigits")(t.hoardRewards[e.value].additionalCredits[t.hoardRewards[e.value].additionalCredits.length-1],","))+"\n                  ")])],1)]},proxy:!0}],null,!0)})})),1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",lg:"6"}},[r("me-loot-group",{attrs:{title:"Equipment Tables"}},t._l(t.rewardTables,(function(table,e){return r("me-loot-table",{key:e,attrs:{"table-headers":["1d100","Result"],"table-data":table.map((function(i){return[i.min+"-"+i.max,i.text]}))},scopedSlots:t._u([{key:"tableTitle",fn:function(){return[t._v("\n                Equipment Table "+t._s(e.toUpperCase())+"\n              ")]},proxy:!0}],null,!0)})})),1)],1)],1)],1)],1),t._v(" "),r("v-card",{staticClass:"ma-10"},[r("v-card-text",[r("p",{staticClass:"text-h6"},[t._v("\n        Options\n      ")]),t._v(" "),r("v-select",{attrs:{items:t.crOptions,label:"Challenge Rating","single-line":"","menu-props":"bottom",hint:"Challenge Rating","persistent-hint":""},model:{value:t.options.cr,callback:function(e){t.$set(t.options,"cr",e)},expression:"options.cr"}}),t._v(" "),r("v-checkbox",{attrs:{label:"Hoard?",color:"primary"},model:{value:t.options.hoard,callback:function(e){t.$set(t.options,"hoard",e)},expression:"options.hoard"}}),t._v(" "),r("v-btn",{attrs:{block:"",color:"primary"},on:{click:function(e){return t.getLoot()}}},[t._v("\n        Generate Loot\n      ")])],1)],1),t._v(" "),r("v-row",t._l(t.loots,(function(e,o){return r("v-col",{key:o,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[r("me-reward-card",{attrs:{index:o,loot:e},on:{"remove-loot":t.removeLoot}})],1)})),1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"8",sm:"6","offset-sm":"3",md:"4","offset-md":"4"}},[r("v-btn",{attrs:{block:""},on:{click:t.clearLoot}},[t._v("\n        Clear all loot\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VBtn:w.a,VCard:y.a,VCardText:R.c,VCheckbox:C.a,VCol:L.a,VContainer:_.a,VDialog:I.a,VIcon:O.a,VRow:T.a,VSelect:k.a,VSpacer:V.a,VToolbar:D.a,VToolbarTitle:S.b})}}]);