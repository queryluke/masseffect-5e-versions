webpackJsonp([33],{Ybuk:function(e,t,a){"use strict";var s=function(){var e=this.$createElement,t=this._self._c||e;return t("v-card",{staticClass:"mb-3",attrs:{id:this.id}},[t("v-card-title",{staticClass:"headline primary white--text"},[this._t("header")],2),t("v-card-text",[this._t("text")],2),t("v-card-actions",[this._t("actions")],2)],1)};s._withStripped=!0;var o={render:s,staticRenderFns:[]};t.a=o},fbuj:function(e,t,a){"use strict";var s=a("Dd8w"),o=a.n(s),n=a("lxYm"),i=a("NYxO");t.a={components:{RuleCard:n.a},computed:o()({},Object(i.mapGetters)(["getData"])),created:function(){this.mechanics=this.getData("armorMechanics")},data:function(){return{mechanics:[]}},head:function(){return{title:"Mass Effect 5e | For GMs - Customizing Armor",meta:[{hid:"description",name:"description",content:"Learn how to create new armor sets and mods"}]}},layout:"phb",methods:o()({},Object(i.mapActions)(["showGlobalDialog"]))}},fr3Z:function(e,t,a){"use strict";t.a={props:["id"]}},iRbo:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("h2",{staticClass:"display-1 hidden-sm-and-down"},[e._v("Creating Armor")]),a("p",[e._v("Though we provide a list of armor mods and sets, we encourage you to create your own!")]),a("rule-card",[a("span",{attrs:{slot:"header"},slot:"header"},[e._v("Nomenclature")]),a("template",{slot:"text"},[a("dl",[a("dt",[e._v("Mechanic")]),a("dd",[e._v("The aspect that affects the gameplay. A mod or armor set can have one or more mechanics.")]),a("dt",[e._v("Mod")]),a("dd",[e._v("An item, containing one or more mechanics, that can be installed when creating custom armor.")]),a("dt",[e._v("Set")]),a("dd",[e._v("One or more pieces of armor that must be worn together and provide mechanics when worn. Mechanics contained within sets\nare meant to be integrated, and not salvageable from the armor. In addition, armor sets are not intended to be upgraded\nwith other mods.")])])])],2),a("rule-card",[a("span",{attrs:{slot:"header"},slot:"header"},[e._v("Creating a Mechanic")]),a("template",{slot:"text"},[a("p",[e._v("A 'mechanic' is a combination of a rule exception/addition, a potency, and a cost per potency level. Below you'll find a list of\nmechanics used in this system.")]),a("p",{staticClass:"title"},[e._v("Rule exception/addition")]),a("p",[e._v("The first step is deciding what you want your mechanic to do, e.g. add health, shields, or damage; provide advantage on saving throws, etc.")]),a("v-alert",{staticClass:"mb-4",attrs:{type:"info",value:"true"}},[e._v("We strongly recommend that you do not make new mechanics that increase the combat effectiveness of ranged weapons.\nThese mechanics should be reserved for "),a("em",[e._v("weapon")]),e._v(" mods.")]),a("p",{staticClass:"title"},[e._v("Potency")]),a("p",[e._v("Next, decide how the mechanic's potency will stack. For example, increased shield points have 5 points per potency. So, an Armor\nMod with +10 shield points would have a potency of 2. Armor Mods should never have a potency higher than 3. Keep this in mind\nwhen figuring out the lowest potency amount.")]),a("p",{staticClass:"title"},[e._v("Cost")]),a("p",[e._v("Figuring out the cost is mostly guesswork. Low cost mechanics have minor combat applications, such as\nadditional carrying capacity or minor speed boosts. These range from 1,000 to 5,000 credits.\nMods that increase survivability (shields, AC, resistances) or damage should range between 5,000 and 20,000 credits")]),a("p",{staticClass:"title"},[e._v("Current Mechanic List")]),a("table",{staticClass:"table"},[a("thead",[a("tr",{staticClass:"text-xs-left"},[a("th",[e._v("Rule addition/exception")]),a("th",[e._v("Potency")]),a("th",[e._v("Cost per Potency")])])]),a("tbody",e._l(e.mechanics,function(t,s){return a("tr",[a("td",{attrs:{"data-table-key":"Rule"}},[e._v(e._s(t.description))]),a("td",{attrs:{"data-table-key":"Potency"}},[e._v(e._s(t.amount))]),a("td",{attrs:{"data-table-key":"Cost"}},[e._v(e._s(t.cost))])])}))])],1)],2),a("rule-card",[a("span",{attrs:{slot:"header"},slot:"header"},[e._v("Creating an Armor Mod")]),a("template",{slot:"text"},[a("p",[e._v("Creating a custom armor mod simply requires combining a slot (head, chest, arms, or legs), one or more mechanics, and a potency for\neach mechanic. Determine the cost of the mod by adding each mechanic cost (cost * potentcy)")]),a("div",{staticClass:"mx-3 pa-2 grey lighten-2"},[a("p",{staticClass:"subheading"},[e._v("Example: +10 shields, +1 AC")]),a("ol",{staticClass:"pl-3"},[a("li",[e._v("Slot = Chest")]),a("li",[e._v("Mechanic 1 = +10 sheilds (2 potency * 10,000 credits) = 20,000 credtis")]),a("li",[e._v("Mechanic 2 = +1 AC (1 potency * 8,000 credits) = 8,000 credits")]),a("li",[e._v("Mod Cost = 28,000 credits")])])]),a("v-alert",{staticClass:"mt-4",attrs:{type:"info",value:"true"}},[e._v("When creating new mods, be mindful that their benefits can stack. You wouldn't want to create a +3 AC armor mod for the head, chest, arms, and legs — this would result in a player being able to attain +12 AC.")])],1)],2),a("rule-card",[a("span",{attrs:{slot:"header"},slot:"header"},[e._v("Creating Armor Sets")]),a("template",{slot:"text"},[a("p",[e._v("An armor set can be one or many pieces of armor. Armor sets are cheaper than creating custom armor, even though they may\nbe more powerful. The justification is that an armor set is mass manufactured, so you get more benefits at the expense\nof not being able to customize the armor with additional mods.")]),a("p",[e._v("First, decide the type of armor (light, medium, or heavy) and which pieces it will contain.\nThen find the base cost by using the costs defined in the "),a("a",{on:{click:function(t){e.showGlobalDialog("armor-customization")}}},[e._v("creating armor table")]),e._v(".\nNext, decide what mechanics (and their potency) you want to add to the armor. Calculate the total cost of all your mechanics, add it to the base cost of your armor, then reduce the amount by 15%.")]),a("div",{staticClass:"mx-3 pa-2 grey lighten-2"},[a("p",{staticClass:"subheading"},[e._v("Example:")]),a("ol",{staticClass:"pl-3"},[a("li",[e._v("Medium Body Armor = 16,000 (Chest = 10,000, Arms = 3,000, Legs = 3,000)")]),a("li",[e._v("Mechanics = Resistance to Slashing, Bludgeoning, & Piercing (15,000 for slashing, 15,000 for bludgeoning, 30,000 for piercing)")]),a("li",[e._v("Subtotal = 76,000")]),a("li",[e._v("Total = 64,600 credits = 76,000 -  (76,000 * .15)")])])]),a("v-alert",{staticClass:"mt-4",attrs:{type:"info",value:!0}},[e._v("When creating armor sets, the cost is just a rule of thumb. If an armor set seems too expensive or cheap, raise or lower the cost to your needs.")])],1)],2)],1)};s._withStripped=!0;var o={render:s,staticRenderFns:[]};t.a=o},kMKk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("fbuj"),o=a("iRbo"),n=a("VU/8")(s.a,o.a,!1,null,null,null);n.options.__file="pages/for-gms/armor-creation.vue",t.default=n.exports},lxYm:function(e,t,a){"use strict";var s=a("fr3Z"),o=a("Ybuk"),n=a("VU/8")(s.a,o.a,!1,null,null,null);n.options.__file="components/cards/RuleCard.vue",t.a=n.exports}});