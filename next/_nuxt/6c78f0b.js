(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1042:function(e,t,r){"use strict";r.r(t);r(10),r(7),r(15),r(13),r(16);var n=r(2),c=r(24);r(12),r(21),r(53);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var o={asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,t.next=3,r.dispatch("FETCH_LOTS",["species","classes","subclasses"]);case 3:r.dispatch("SET_META",{title:"Character Builder",description:"Build your own ME5e Character"});case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{characterStartState:{name:null,id:"",image:null,experiencePoints:0,species:null,classes:[],abilityScores:{genMethod:{text:"Standard Array",value:"standard"},standard:{str:null,con:null,dex:null,wis:null,int:null,cha:null},buy:{str:null,con:null,dex:null,wis:null,int:null,cha:null},manual:{str:null,con:null,dex:null,wis:null,int:null,cha:null},other:{str:null,con:null,dex:null,wis:null,int:null,cha:null},override:{str:null,con:null,dex:null,wis:null,int:null,cha:null}},background:null,characteristics:{alignment:"",personality_traits:"",ideal:"",bond:"",flaw:"",gender:"",place_of_birth:"",age:"",height:"",weight:"",hair:"",eyes:"",skin:"",appearance:"",backstory:""},credits:0,equipment:[],powers:[],selections:[],currentStats:{hitPointsLost:0,tempHp:{max:0,value:0},shields:{value:0,max:0},barrier:{used:0,ticksUsed:0},hitDiceUsed:{},deathSaves:{successes:0,failures:0},tpUsed:0,psUsed:[0,0,0,0,0],hasInspiration:!1,featuresTimesUsed:{},conditions:[],exhaustion:0,indoctrination:0},settings:{acOverride:null,acBonus:0,shields:5,regen:5,speedBonus:0,senses:{darkvision:!1,tremorsense:!1,blindsight:!1,infrared_vision:!1,truesight:!1},attackMod:0,attackMeleeMod:0,attackRangedMod:0,attackSpellMod:0,damageMod:0,damageMeleeMod:0,damageRangedMod:0,damageSpellMod:0,damageRes:[],damageImm:[],damageVul:[],conditionImm:[],powerModAbility:null,skills:[],expertise:[]},notes:"",builder:{currentStep:1,showCharacterSheet:!1},createdAt:1615572574654,changedAt:1615572574654}}},computed:{characters:{get:function(){return Object.keys(this.$store.getters["cb/characters"])},set:function(e){return this.$store.commit("cb/UPDATE_CHARACTERS",e)}}},methods:{createNewCharacter:function(){var e=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.characterStartState);e.createdAt=(new Date).getTime(),e.changedAt=(new Date).getTime(),e.id=e.createdAt,this.characters=e,this.$router.push({path:"/characters/builder?id=".concat(e.id)})},characterImage:function(e){return e.image||r(180)},characterName:function(e){return e.name||"Unnamed Character"}}},d=r(0),h=r(3),m=r.n(h),v=r(199),w=r(979),f=r(977),y=r(982),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[0===e.characters.length?r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("div",{staticClass:"text-h4"},[e._v("\n        Welcome to the ME5e Character Builder!\n      ")]),e._v(" "),r("p",[e._v("Click the button below to get started")])])],1):r("v-row",{staticClass:"d-flex justify-center"},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("div",{staticClass:"text-h5"},[e._v("\n        My Characters\n      ")])]),e._v(" "),e._l(e.characters,(function(e){return r("v-col",{key:e,attrs:{sm:"8",lg:"6"}},[r("me-character-builder-index-card",{attrs:{"character-id":e}})],1)}))],2),e._v(" "),r("v-row",[r("v-col",{staticClass:"text-center"},[r("v-btn",{on:{click:e.createNewCharacter}},[e._v("\n        Create a New Character\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:v.a,VCol:w.a,VContainer:f.a,VRow:y.a})}}]);