(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{756:function(t,e,n){var r=n(48),o=n(285);t.exports=r?o:function(t){return Set.prototype.values.call(t)}},757:function(t,e,n){"use strict";var r=n(393),o=n(394);t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},758:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(774);r({target:"Set",proto:!0,real:!0,forced:o},{addAll:function(){return c.apply(this,arguments)}})},759:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(395);r({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},760:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(86),l=n(36),h=n(71),d=n(93),f=n(78);r({target:"Set",proto:!0,real:!0,forced:o},{difference:function(t){var e=l(this),n=new(d(e,c("Set")))(e),r=h(n.delete);return f(t,(function(t){r.call(n,t)})),n}})},761:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(36),l=n(75),h=n(756),d=n(78);r({target:"Set",proto:!0,real:!0,forced:o},{every:function(t){var e=c(this),n=h(e),r=l(t,arguments.length>1?arguments[1]:void 0,3);return!d(n,(function(t,n){if(!r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},762:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(86),l=n(36),h=n(71),d=n(75),f=n(93),m=n(756),v=n(78);r({target:"Set",proto:!0,real:!0,forced:o},{filter:function(t){var e=l(this),n=m(e),r=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(f(e,c("Set"))),y=h(o.add);return v(n,(function(t){r(t,t,e)&&y.call(o,t)}),{IS_ITERATOR:!0}),o}})},763:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(36),l=n(75),h=n(756),d=n(78);r({target:"Set",proto:!0,real:!0,forced:o},{find:function(t){var e=c(this),n=h(e),r=l(t,arguments.length>1?arguments[1]:void 0,3);return d(n,(function(t,n){if(r(t,t,e))return n(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},764:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(86),l=n(36),h=n(71),d=n(93),f=n(78);r({target:"Set",proto:!0,real:!0,forced:o},{intersection:function(t){var e=l(this),n=new(d(e,c("Set"))),r=h(e.has),o=h(n.add);return f(t,(function(t){r.call(e,t)&&o.call(n,t)})),n}})},765:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(36),l=n(71),h=n(78);r({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function(t){var e=c(this),n=l(e.has);return!h(t,(function(t,r){if(!0===n.call(e,t))return r()}),{INTERRUPTED:!0}).stopped}})},766:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(86),l=n(36),h=n(71),d=n(285),f=n(78);r({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function(t){var e=d(this),n=l(t),r=n.has;return"function"!=typeof r&&(n=new(c("Set"))(t),r=h(n.has)),!f(e,(function(t,e){if(!1===r.call(n,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},767:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(36),l=n(71),h=n(78);r({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function(t){var e=c(this),n=l(e.has);return!h(t,(function(t,r){if(!1===n.call(e,t))return r()}),{INTERRUPTED:!0}).stopped}})},768:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(36),l=n(756),h=n(78);r({target:"Set",proto:!0,real:!0,forced:o},{join:function(t){var e=c(this),n=l(e),r=void 0===t?",":String(t),o=[];return h(n,o.push,{that:o,IS_ITERATOR:!0}),o.join(r)}})},769:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(86),l=n(36),h=n(71),d=n(75),f=n(93),m=n(756),v=n(78);r({target:"Set",proto:!0,real:!0,forced:o},{map:function(t){var e=l(this),n=m(e),r=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(f(e,c("Set"))),y=h(o.add);return v(n,(function(t){y.call(o,r(t,t,e))}),{IS_ITERATOR:!0}),o}})},770:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(36),l=n(71),h=n(756),d=n(78);r({target:"Set",proto:!0,real:!0,forced:o},{reduce:function(t){var e=c(this),n=h(e),r=arguments.length<2,o=r?void 0:arguments[1];if(l(t),d(n,(function(n){r?(r=!1,o=n):o=t(o,n,n,e)}),{IS_ITERATOR:!0}),r)throw TypeError("Reduce of empty set with no initial value");return o}})},771:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(36),l=n(75),h=n(756),d=n(78);r({target:"Set",proto:!0,real:!0,forced:o},{some:function(t){var e=c(this),n=h(e),r=l(t,arguments.length>1?arguments[1]:void 0,3);return d(n,(function(t,n){if(r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},772:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(86),l=n(36),h=n(71),d=n(93),f=n(78);r({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function(t){var e=l(this),n=new(d(e,c("Set")))(e),r=h(n.delete),o=h(n.add);return f(t,(function(t){r.call(n,t)||o.call(n,t)})),n}})},773:function(t,e,n){"use strict";var r=n(15),o=n(48),c=n(86),l=n(36),h=n(71),d=n(93),f=n(78);r({target:"Set",proto:!0,real:!0,forced:o},{union:function(t){var e=l(this),n=new(d(e,c("Set")))(e);return f(t,h(n.add),{that:n}),n}})},774:function(t,e,n){"use strict";var r=n(36),o=n(71);t.exports=function(){for(var t=r(this),e=o(t.add),n=0,c=arguments.length;n<c;n++)e.call(t,arguments[n]);return t}},775:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={methods:{randomValue:function(t){return t[Math.floor(Math.random()*t.length)]}}}},782:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(24),o=(n(28),n(72),{methods:{crToInt:function(t){var e=t.split("/"),n=Object(r.a)(e,2),o=n[0],c=n[1];return c?parseInt(o,10)/parseInt(c,10):parseInt(o,10)}}})},802:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(7),n(61),n(74),n(775)),c=n(205),l=n(204),h=n(782);n(35),n(11),n(37),n(99),n(23),n(30),n(49),n(38),n(8),n(52),n(59),n(41);function d(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m={methods:{setGruntAbilityScores:function(){this.grunt.abilityScores={str:1,dex:1,con:1,int:1,wis:1,cha:1};var t={adept:{wis:5,dex:4,cha:1},engineer:{int:5,dex:4,con:1},infiltrator:{dex:5,int:4,str:3},sentinel:{wis:5,int:4,dex:2},soldier:{dex:5,str:4,con:3},vanguard:{str:5,wis:4,con:2},none:{dex:5,str:3,con:2}};"asari"===this.options.species.id&&(t.adept={cha:5,dex:4,wis:1},t.sentinel={cha:5,int:4,dex:2},t.vanguard={str:5,cha:4,con:2});var e=[15,14,13,12,10,8],n=t[this.options.klass.id],r={increase:Object.keys(this.grunt.abilityScores),reduction:Object.keys(this.grunt.abilityScores)},o=Object.keys(this.grunt.abilityScores);for(var c in n)if(Object.prototype.hasOwnProperty.call(n,c)){var l=e.slice(0,e.length-n[c]),h=this.randomValue(l);this.grunt.abilityScores[c]=h,e.splice(e.indexOf(h),1),o.splice(o.indexOf(c),1);for(var i=0;i<n[c];)r.increase.push(c),i++}for(var f=0,m=o;f<m.length;f++){var v=m[f],y=this.randomValue(e);this.grunt.abilityScores[v]=y,e.splice(e.indexOf(y),1),r.reduction.push(v),r.reduction.push(v)}if(this.options.cr.abIncrease)for(var w=this.randomValue(this.options.cr.abIncrease),k=0;k<w;k++){var S=this.randomValue(r.increase);this.grunt.abilityScores[S]++}if(this.options.cr.abReduction)for(var A=this.randomValue(this.options.cr.abReduction),C=0;C<A;C++){var T=this.randomValue(r.reduction);1!==this.grunt.abilityScores[T]&&this.grunt.abilityScores[T]--}switch(this.options.species.id){case"human":var R=this.randomValue(r.increase);this.grunt.abilityScores[R]+=2,R=this.randomValue(r.increase),this.grunt.abilityScores[R]++;break;default:var I,M=d(this.options.species.abilityScoreIncrease);try{for(M.s();!(I=M.n()).done;){var O=I.value,j=O.ability.toLowerCase().slice(0,3),x=parseInt(O.amount,10);this.grunt.abilityScores[j]+=x}}catch(t){M.e(t)}finally{M.f()}}}}};n(20),n(34),n(122);function v(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var w={data:function(){return{gruntWeaponRarity:{0:["Common"],1:["Common","Uncommon"],2:["Common","Uncommon","Rare","Very Rare"],3:["Common","Uncommon","Rare","Very Rare","Spectre"]}}},methods:{setGruntActions:function(){var t=this;this.grunt.actions=[],this.grunt.legendaryActions=[];var e=this.getAttackOptions(),n=e.filter((function(e){return e.dpr>=t.options.cr.dmgMin&&e.dpr<=t.options.cr.dmgMax})),r=n.length>0?this.randomValue(n):e.pop();this.dpr.weapon=r.dpr,r.numAttacks>1&&this.grunt.actions.push({type:"standard",name:"Multiattack",description:this.generateMultiattackDescription(r)});var o,c=v(r.weapons);try{for(c.s();!(o=c.n()).done;){var l=o.value;this.grunt.actions.push(this.generateWeaponAction(l)),l.attack.bonus>this.adjustments.hit&&(this.adjustments.hit=l.attack.bonus)}}catch(t){c.e(t)}finally{c.f()}if("legendary"===r.type){var text=" ".concat(r.weapons[0].name);r.weapons.length>1&&(text+=" or its ".concat(r.weapons[1].name)),this.grunt.legendaryActions.push({name:"Attack",cost:1,description:"The ".concat(this.options.klass.id," makes one weapon attack with its").concat(text,".")}),this.grunt.spellcasting&&this.grunt.legendaryActions.push({name:"Cast a power",cost:3,description:"The ".concat(this.options.klass.id," casts a power.")}),this.grunt.legendaryActions.length<3&&this.grunt.legendaryActions.unshift({name:"Move",cost:1,description:"The ".concat(this.options.klass.id," moves up to its speed.")}),this.grunt.legendaryActions.length<3&&this.grunt.legendaryActions.unshift({name:"Search",cost:1,description:"The ".concat(this.options.klass.id," takes the Search action.")})}},generateWeaponAction:function(t){var e={type:"weapon",id:t.id};switch(t.id){case"m-37-falcon":e={type:"standard",name:t.name,description:"Target a creature within ".concat(t.range,". It makes a DC ").concat(8+t.attack.bonus+this.options.cr.profBonus," Dexterity saving throw, taking ").concat(this.averageFromDie(t.damage)," (").concat(t.damage,") thunder damage on a failed save, or have as much damage on a successful one.")};break;case"venom-shotgun":e={type:"standard",name:t.name,description:"Target a creature within  ".concat(t.range,". It makes a DC 13 Dexterity saving throw, taking ").concat(this.averageFromDie(t.damage)," (").concat(t.damage,") thunder damage on a failed save, or have as much damage on a successful one.")}}return e},getAttackOptions:function(){var t,e=this,n=this.weapons.map((function(t){return e.setWeaponDamage(t)})),r=[],o=v(n);try{for(o.s();!(t=o.n()).done;)for(var c=t.value,i=1;i<=3;i++)if(r.push({dpr:(c.attack.damage+c.attack.bonus)*i,numAttacks:i,weapons:[c],type:"weapon"}),this.crMetaLevel>2){var l=3*(c.attack.damage+c.attack.bonus);r.push({dpr:(c.attack.damage+c.attack.bonus)*i+l,numAttacks:i,weapons:[c],type:"legendary",legendaryBonus:l})}}catch(t){o.e(t)}finally{o.f()}var h,d=n.filter((function(t){return("Heavy Pistol"===t.type||"SMG"===t.type||"Melee"===t.type)&&!/two/gi.test(t.properties)})),f=[],m=v(d);try{for(m.s();!(h=m.n()).done;){var y,main=h.value,w=main.attack.damage+main.attack.bonus,k=v(d);try{for(k.s();!(y=k.n()).done;){var S=y.value;if(("Melee"!==main.type||"Melee"===S.type||/hip/gi.test(S.properties))&&("Melee"!==S.type||"Melee"===main.type||/hip/gi.test(S.properties))&&(!f.includes("".concat(main.id,"-").concat(S.id))&&!f.includes("".concat(S.id,"-").concat(main.id)))){var A=S.attack.damage+S.attack.bonus;r.push({dpr:w+A,numAttacks:2,weapons:[main,S],type:"dw"}),r.push({dpr:2*w+2*A,numAttacks:4,weapons:[main,S],type:"dw"}),f.push("".concat(main.id,"-").concat(S.id))}}}catch(t){k.e(t)}finally{k.f()}}}catch(t){m.e(t)}finally{m.f()}return r.sort((function(a,b){return a.dpr-b.dpr})),r},setWeaponDamage:function(t){var e=this.abilityScoreBonus(this.grunt.abilityScores.str),n=this.abilityScoreBonus(this.grunt.abilityScores.dex);if(t.attack={damage:this.averageFromDie(t.damage)},"Melee"===t.type){var r=0;r=/(finesse|recoil)/gi.test(t.properties)?e>=n?e:n:e,t.attack.bonus=r}else t.attack.bonus=n;return t},generateMultiattackDescription:function(t){var e=this.options.klass.id,n=["","one","two","three","four"],r=t.numAttacks>1?"s":"",text="The ".concat(e," makes");if(t.weapons.length>1)if("Melee"===t.weapons[0].type&&"Melee"===t.weapons[1].type)text+=" ".concat(n[t.numAttacks]," melee attack").concat(r);else if(t.weapons[0].id===t.weapons[1].id)text+=" ".concat(n[t.numAttacks]," ").concat(t.weapons[0].name," attack").concat(r,", one in each hand.");else{var o=n[t.numAttacks/2];text+=" ".concat(n[t.numAttacks]," attacks: ").concat(o," with its ").concat(t.weapons[0].name," and ").concat(o," with its ").concat(t.weapons[1].name)}else text+=" ".concat(n[t.numAttacks]," ").concat(t.weapons[0].name," attack").concat(r);return text}}},k=(n(60),{computed:{vanguard:function(){return this.$store.getters.getItem("classes","vanguard")},aggressive:function(){return this.adjustments.dpr+=2,{name:"Aggressive",recharge:null,description:"As a bonus action, the ".concat(this.options.klass.id," can move up to its speed toward a hostile creature that it can see.")}},ambusher:function(){return this.adjustments.hit+=1,{name:"Ambusher",recharge:null,description:"The ".concat(this.options.klass.id," has advantage on attack rolls against any creature it has surprised.")}},amphibious:function(){return{name:"Amphibious",recharge:null,description:"Can breathe both air and water."}},darkvision:function(){return{name:"darkvision",range:20}},barrier:function(){var t=this.options.cr.powercastingLevel?"vanguard"===this.options.klass.id?parseInt(this.options.cr.powercastingLevel,10):Math.ceil(parseInt(this.options.cr.powercastingLevel,10)/2)-1:0,e=this.vanguard.progressionColumns.find((function(p){return"barrierTicks"===p.key})).values[t],n=this.vanguard.progressionColumns.find((function(p){return"barrierUses"===p.key}));this.grunt.barrier=e;var r={name:"Barrier",recharge:"".concat(n.values[t],"/Day"),description:"As an action or bonus action, the ".concat(this.options.klass.id," gains ").concat(e," barrier ticks.")};return this.adjustments.hp+=4*e,r},tacticalCloak:function(){return this.adjustments.ac+=1,{name:"Tactical Cloak",recharge:"".concat(this.crMetaLevel+1,"/Day"),description:"As a bonus action, the infiltrator may cast Tactical Cloak, becoming invisible. When it makes a melee, ranged, or tech attack, tactical cloak ends."}},sneakAttack:function(){var t="".concat(1+this.crMetaLevel+Math.floor(this.crMetaLevel/2),"d6"),e=this.averageFromDie(t);return this.adjustments.dpr+=e,{name:"Sneak Attack",recharge:"1/Turn",description:"The infiltrator deals an extra ".concat(e," (").concat(t,") damage when it hits a target with a weapon attack and has advantage on the attack roll, ")+"or when the target is within 5 feet of an ally of the infiltrator that isn't incapacitated and the infiltrator doesn't have disadvantage on the attack roll."}}},methods:{setGruntFeatures:function(){this.grunt.features=[],this.grunt.reactions=[],this.grunt.senses=[],this.grunt.barrier=null,"infiltrator"===this.options.klass.id&&(this.addFeature("tacticalCloak","features"),this.addFeature("sneakAttack","features")),["vanguard","adept","sentinel"].includes(this.options.klass.id)&&!1!==this.options.cr.spellcastingLevel&&this.addFeature("barrier","features"),"drell"===this.options.species.id&&this.addFeature("darkvision","senses")},addFeature:function(t,e){this.grunt[e].push(this[t])}},data:function(){return{numFeatureWeights:{0:[0,0,0,1,1],1:[0,1,1,1,2],2:[1,1,1,2,2],3:[1,2,2,3,3]}}}}),S=n(33),A=(n(178),{data:function(){return{baseShields:{0:{shields:[0,0,5,5,10],regen:[0,0,0,5,5]},1:{shields:[5,5,5,10,10],regen:[0,0,5,5,10]},2:{shields:[5,10,15,20,20],regen:[5,5,10,10,10]},3:{shields:[10,15,20,25,30],regen:[10,10,15,15,15]}}}},computed:{stats:function(){return this.$store.getters.getData("stats-by-cr")}},methods:{setGruntHp:function(){this.grunt.sp=null,this.grunt.hp={numDie:1,die:4};var t=this.baseShields[this.crMetaLevel],e=this.randomValue(t.shields);if(e){var n=this.randomValue(t.regen.filter((function(t){return t<=e})));this.grunt.sp={shields:e,regen:n},this.adjustments.hp+=e+n}var r=Math.max.apply(Math,Object(S.a)(Object.values(this.dpr)))+this.adjustments.dpr,o={};o=r>81?this.createNewCrFromDamage(r):this.stats.find((function(s){return s.dmgMin<=r&&s.dmgMax>=r}));var c=(this.adjustments.hit+this.options.cr.profBonus-o.attackBonus)/2;c=c>=0?Math.floor(c):Math.ceil(c);var l=o.normalized+c,h=this.options.cr.normalized;l!==h&&(h=2*this.options.cr.normalized-l);var d=this.getCrByNormalized(h),f=(this.grunt.ac+this.adjustments.ac-d.acDc)/2,m=h-(f=f>=0?Math.floor(f):Math.ceil(f)),v=this.getCrByNormalized(m),y=1;if(this.grunt.damageResistances.length>3||this.grunt.damageImmunities.length>1){var w=this.crToInt(this.options.cr.cr);y=w<5?2:w<11?1.5:1.25}var k="volus"===this.options.species.id?6:8,A=(k+1)/2,C=this.abilityScoreBonus(this.grunt.abilityScores.con);"turian"===this.options.species.id&&(C+=1);for(var T=0,R=0,I=v.hpMin-this.adjustments.hp,M=I<0?v.hpMin:I;R<M;)R=(++T*A+T*C)*y;this.grunt.hp={numDice:T,die:k}},getCrByNormalized:function(t){return t>15?this.createNewCr(t-15):t<1?this.stats.find((function(t){return 1===t.normalized})):this.stats.find((function(e){return e.normalized===t}))},createNewCrFromDamage:function(t){var e=Math.ceil((t-81)/5);return this.createNewCr(e)},createNewCr:function(t){return{id:"".concat(15+t,"000"),normalized:15+t,cr:12+t,profBonus:6+Math.floor(t/4),acDc:18+Math.floor(t/3),hpMin:237+8*t,hpMax:251+8*t,attackBonus:8+t/2,generated:!0}}}}),C=(n(28),n(50),{methods:{setGruntId:function(){this.grunt.id="".concat(this.grunt.name.replace(" ","_").toLowerCase(),"_").concat(Date.now())}}}),T=(n(757),n(758),n(759),n(760),n(761),n(762),n(763),n(764),n(765),n(766),n(767),n(768),n(769),n(770),n(771),n(772),n(773),{data:function(){return{resistances:{0:[0,0,0,0,0,0,0,0],1:[0,0,0,0,0,1,1,1],2:[0,0,0,1,1,1,2,2],3:[0,1,1,2,2,2,3,3]},immunities:{0:[0,0,0,0,0,0,0,0],1:[0,0,0,0,0,0,0,0],2:[0,0,0,0,0,1,1,1],3:[0,0,0,1,1,1,1,2]},vulnerabilities:[0,0,0,0,0,0,0,1,1,1,2]}},methods:{setGruntRivs:function(){var t=["acid","bludgeoning","cold","fire","force","lightning","necrotic","piercing","poison","psychic","radiant","slashing","thunder"];switch(this.grunt.conditionImmunities=this.applyRandomRiv(this.immunities[this.crMetaLevel],["blinded","charmed","deafened","frightened","grappled","lifted","paralyzed","poisoned","primed","prone","restrained","stunned"]),this.grunt.damageImmunities=this.applyRandomRiv(this.immunities[this.crMetaLevel],t),this.grunt.damageResistances=this.applyRandomRiv(this.resistances[this.crMetaLevel],t),this.grunt.damageVulnerabilities=this.applyRandomRiv(this.vulnerabilities,t),this.options.species.id){case"geth":this.grunt.damageImmunities.push("poison","psychic"),this.grunt.conditionImmunities.push("poisoned"),this.grunt.damageImmunities=Object(S.a)(new Set(this.grunt.damageImmunities)),this.grunt.conditionImmunities=Object(S.a)(new Set(this.grunt.conditionImmunities));break;case"angara":this.grunt.damageResistances.push("lightning"),this.grunt.damageResistances=Object(S.a)(new Set(this.grunt.damageResistances))}},applyRandomRiv:function(t,e){for(var n=[],r=this.randomValue(t),i=1;i<=r;i++)n.push(this.randomValue(e));return Object(S.a)(new Set(n))}}});n(79);function R(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var M={methods:{setGruntSavingThrows:function(){this.grunt.savingThrows=[];var t,e=this.randomValue(this.savingThrowWeights[this.crMetaLevel]),n=this.savingThrows.slice(),r=R(this.options.klass.savingThrows.mandatory.map((function(t){return t.toLowerCase().trim().slice(0,3)})));try{for(r.s();!(t=r.n()).done;){var o=t.value;e>0&&(n.splice(n.indexOf(o),1),this.grunt.savingThrows.push(o),e--)}}catch(t){r.e(t)}finally{r.f()}for(var i=1;i<=e;i++){var c=this.randomValue(n);n.splice(n.indexOf(c),1),this.grunt.savingThrows.push(c)}}},data:function(){return{savingThrowWeights:{0:[0,0,0,1],1:[0,1,1,2],2:[1,1,2,2],3:[2,2,2,3]},savingThrows:["str","dex","con","int","wis","cha"]}}},O=(n(53),{computed:{skills:function(){return this.$store.getters.getData("skills")}},methods:{setGruntSkills:function(){this.grunt.skills=[];for(var t=this.options.klass.skillProfs.options.items.map((function(t){return t.toLowerCase().trim().replace("-","_")})),e=this.skills.filter((function(e){return t.includes(e.id)})),n=this.randomValue(this.proficientWeights[this.crMetaLevel]),i=1;i<=n;i++){var r=this.randomValue(e);this.grunt.skills.push(r.id)}["drell","geth"].includes(this.options.species.id)&&this.grunt.skills.push("perception"),this.grunt.skills=Object(S.a)(new Set(this.grunt.skills))}},data:function(){return{proficientWeights:{0:[0,0,1,1],1:[1,1,1,2],2:[1,2,2,2],3:[2,2,3,3]}}}});function j(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var D={data:function(){return{spellDpr:{0:7,1:15,2:32,3:49,4:64}}},computed:{adept:function(){return this.$store.getters.getItem("classes","adept")}},methods:{setGruntSpellcasting:function(){var t=this;if("soldier"!==this.options.klass.id&&!1!==this.options.cr.powercastingLevel){var e,n=this.options.cr.powercastingLevel,r=["engineer","adept"].includes(this.options.klass.id)?n:Math.ceil(n/2),o=r-1,c={},l=j(this.adept.progressionColumns.filter((function(i){return i.ps})));try{for(l.s();!(e=l.n()).done;){var col=e.value;col.values[o]>0&&(c[col.name[0]]=col.values[o])}}catch(t){l.e(t)}finally{l.f()}var h=1;c[4]?h=4:c[3]?h=3:c[2]&&(h=2);for(var d=this.spells.filter((function(s){return s.availableClasses.includes(t.options.klass.id)&&s.level<=h&&s.level>0})),f=[],m=this.adept.progressionColumns.find((function(i){return"powersKnown"===i.key})).values[o],i=0;i<=m/2;i++){var v=this.randomValue(d);f.push(v.id),d.splice(d.indexOf(v),1)}if(["sentinel","vanguard","adept"].includes(this.options.klass.id))for(var y=this.spells.filter((function(s){return s.availableClasses.includes(t.options.klass.id)&&0===s.level})),w=this.adept.progressionColumns.find((function(i){return"cantrips"===i.key})).values[o],k=0;k<=w;k++){var A=this.randomValue(y);f.push(A.id)}var C="asari"===this.options.species.id?"cha":["engineer","infiltrator"].includes(this.options.klass.id)?"int":["adept","vanguard"].includes(this.options.klass.id)?"wis":"cha";this.grunt.powercasting={level:r,mod:C,powerList:Object(S.a)(new Set(f))},this.dpr.spell=this.spellDpr[h]}else this.grunt.powercasting=!1}}},V={data:function(){return{grunt:{},crMetaLevel:0,dpr:{weapon:0,spell:0,grenade:0,heavyWeapon:0},adjustments:{dpr:0,hit:0,hp:0,ac:0},generated:!1}},mixins:[c.a,{methods:{setGruntAc:function(){this.grunt.ac=10;var t=[-2,-1,-1,0,1,1,2];if("geth"!==this.options.species.id){["adept","infiltrator"].includes(this.options.klass.id)?(t.push(-2),t.push(-2)):["soldier","sentinel"].includes(this.options.klass.id)?(t.push(2),t.push(2)):(t.push(0),t.push(0));var e=this.randomValue(t);"krogan"===this.options.species.id&&e++,this.grunt.ac=this.options.cr.acDc+e}else this.grunt.ac=13+this.abilityScoreBonus(this.grunt.abilityScores.dex)+this.options.cr.profBonus}}},m,w,{data:function(){return{trans:["lawful","neutral","chaotic"],morality:["good","neutral","evil"]}},methods:{setGruntAlignment:function(){var t=this.randomValue(this.morality),e=this.randomValue(this.trans);this.grunt.alignment="neutral"===t&&"neutral"===e?"unaligned":"".concat(e," ").concat(t)}}},l.a,k,A,C,{methods:{setGruntImage:function(){this.grunt.image=""}}},{computed:{cantripOptions:function(){return this.spells.filter((function(s){return"biotic"===s.type&&0===s.level}))},spellOptions:function(){return this.spells.filter((function(s){return"biotic"===s.type&&1===s.level}))},asariSpells:function(){return[this.randomValue(this.spellOptions)].map((function(s){return{id:s.id}}))},asariCantrips:function(){[this.randomValue(this.cantripOptions),this.randomValue(this.cantripOptions)].map((function(s){return{id:s.id}}))}},methods:{setGruntInnateSpellcasting:function(){switch(this.options.species.id){case"angara":this.grunt.innateSpellcasting={level:"innate",mod:"cha",spellList:[{perDay:"At will",spells:[{id:"shocking_grasp"}]}]};break;case"asari":this.grunt.innateSpellcasting={level:"innate",mod:"cha",spellList:[{perDay:"At will",spells:this.asariCantrips},{perDay:"1/Day",spells:this.asariSpells}]};break;default:this.grunt.innateSpellcasting=!1}}}},{methods:{setGruntName:function(){this.grunt.name="".concat(this.options.species.name," ").concat(this.options.klass.name)}}},T,M,O,D,{methods:{setGruntSpeed:function(){var t=25;switch(this.options.species.id){case"volus":t=20;break;case"quarian":t=3===this.randomValue([1,2,3])?30:25;break;case"drell":t=30;break;case"vorcha":t=35;break;default:t=25}this.grunt.speed=[{type:"walk",range:t}]}}},{methods:{setGruntType:function(){this.grunt.type="geth"===this.options.species.id||"unshackled-ai"===this.options.species.id?"Synthetic":"Organic"}}},o.a,h.a],methods:{generateGrunt:function(){this.setGruntAbilityScores(),this.setGruntName(),this.setGruntId(),this.setGruntImage(),this.setGruntAlignment(),this.setGruntRivs(),this.setGruntSavingThrows(),this.setGruntType(),this.setGruntInnateSpellcasting(),this.setGruntSpellcasting(),this.setGruntActions(),this.setGruntSpeed(),this.setGruntSkills(),this.setGruntFeatures(),this.setGruntAc(),this.setGruntHp(),this.grunt.lairActions=[],this.grunt.profBonus=this.options.cr.profBonus,this.grunt.size="volus"===this.options.species.id?"Small":"Medium",this.grunt.cr=this.options.cr.cr,this.grunt.unit="",this.generated=!0},reset:function(){this.grunt={},this.crMetaLevel=0,this.options.cr&&(this.crMetaLevel=parseFloat(this.options.cr.cr)<=1?0:Math.ceil(parseFloat(this.options.cr.cr)/4)),this.dpr={weapon:0,spell:0,grenade:0,heavyWeapon:0},this.adjustments={dpr:0,hit:0,hp:0,ac:0}}}},G={mixins:[o.a,V],data:function(){return{selectedCr:null,selectedSp:null,selectedCl:null,options:{cr:null,klass:null,species:null}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("pageTitle","NPC Generator"),e.next=3,t.$store.dispatch("FETCH_LOTS",["classes","species","stats-by-cr","powers","weapons","gear","skills"]);case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"NPC Generator | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Generate random monster and NPC stats for easier encounter building"}]}},computed:{crs:function(){return this.$store.getters.getData("stats-by-cr")},classes:function(){return this.$store.getters.getData("classes")},species:function(){return this.$store.getters.getData("species")},spells:function(){return this.$store.getters.getData("powers")},weapons:function(){return this.$store.getters.getData("weapons")},grenades:function(){return this.$store.getters.getData("gear").filter((function(g){return"Grenade"===g.type}))}},methods:{generate:function(){var t=this;this.options={cr:null===this.selectedCr?this.randomValue(this.crs):this.selectedCr,klass:null===this.selectedCl?this.randomValue(this.classes):this.selectedCl,species:null===this.selectedSp?this.randomValue(this.species):this.selectedSp},this.generated=!1,this.grunt={},setTimeout((function(){return t.generateGrunt()}),300)}}},E=n(2),_=n(5),L=n.n(_),N=n(171),B=n(261),F=n(10),$=n(733),P=n(729),U=n(735),W=n(214),component=Object(E.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$fetchState.pending?t._e():n("v-container",[n("me-page-title"),t._v(" "),n("p",[t._v("\n    This generator creates disposable NPCs based on the Mass Effect archetypes. The Monster Manual outlines adjusting\n    the provided NPC Archetypes with various races, weapons, and abilities, but this can be rather time consuming.\n  ")]),t._v(" "),n("p",[t._v("\n    This generator enables you to quickly create random NPCs with a given Challenge Rating (CR). CRs only go up to 12\n    because higher CRs represent much more powerful monsters. As a point of reference, a Banshee has a CR of 13, so\n    a grunt with a CR of 12 would represent a   very experienced and deadly NPC.\n  ")]),t._v(" "),n("v-card",{staticClass:"mt-8"},[n("v-card-text",[n("v-row",[n("v-col",{attrs:{sm:"4"}},[n("v-select",{attrs:{items:t.crs,label:"Select a Challenge Rating","item-text":"cr","item-value":"cr","return-object":"","single-line":"","menu-props":"bottom",hint:"Challenge Rating","persistent-hint":""},model:{value:t.selectedCr,callback:function(e){t.selectedCr=e},expression:"selectedCr"}})],1),t._v(" "),n("v-col",{attrs:{sm:"4"}},[n("v-select",{attrs:{items:t.classes,label:"Select a Class","item-text":"name","item-value":"id","return-object":"","single-line":"","menu-props":"bottom",hint:"Class","persistent-hint":""},model:{value:t.selectedCl,callback:function(e){t.selectedCl=e},expression:"selectedCl"}})],1),t._v(" "),n("v-col",{attrs:{sm:"4"}},[n("v-select",{attrs:{items:t.species,label:"Select a Species","item-text":"name","item-value":"id","return-object":"","single-line":"","menu-props":"bottom",hint:"Race","persistent-hint":""},model:{value:t.selectedSp,callback:function(e){t.selectedSp=e},expression:"selectedSp"}})],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{block:""},on:{click:function(e){return t.generate()}}},[t._v("\n        Generate\n      ")])],1)],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"mt-8",attrs:{sm:"10",lg:"8","offset-sm":"1","offset-lg":"2"}},[t.generated?n("v-card",[n("v-card-text",[n("me-stat-block",{attrs:{stats:t.grunt,title:!0}})],1),t._v(" "),n("v-card-actions",[n("me-bookmark",{attrs:{item:t.grunt,type:"bestiary"}})],1)],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;L()(component,{VBtn:N.a,VCard:B.a,VCardActions:F.a,VCardText:F.b,VCol:$.a,VContainer:P.a,VRow:U.a,VSelect:W.a})}}]);