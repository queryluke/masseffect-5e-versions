(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{762:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var n={methods:{randomValue:function(t){return t[Math.floor(Math.random()*t.length)]}}}},774:function(t,r,e){"use strict";e.r(r);e(54),e(42),e(46),e(31),e(35),e(36),e(40),e(15),e(13),e(14),e(11),e(8),e(32),e(12),e(19),e(278),e(68);var n=e(1),o=e(101),l=e(762);function c(t,r){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return f(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==e.return||e.return()}finally{if(c)throw o}}}}function f(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,e=new Array(r);i<r;i++)e[i]=t[i];return e}function d(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(r){Object(n.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var m=Object(o.a)("diceRoller").mapActions,v={mixins:[{mixins:[{methods:{createNumberRange:function(t,r){for(var e=[],i=t;i<=r;i++)e.push(i);return e}}},l.a],methods:h(h({},m(["addRoll"])),{},{rollFromString:function(t){var r=t.split("d");if(!r[0]||!r[1])return null;var e=Number.parseInt(r[0].trim(),10),n=r[1].split("+"),o=Number.parseInt(n[0].trim(),10),l=0;"string"==typeof n[1]&&(l=Number.parseInt(n[1].trim(),10));var c=this.roll(e,o,l);return c.text=t,c},rollMany:function(t){var r=[];if(Array.isArray(t)){var e,n=c(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;r.push(this.rollFromString(o))}}catch(t){n.e(t)}finally{n.f()}}return r},setRoll:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Array.isArray(t)||(t=[t]),(t=t.filter((function(t){return null!==t})))[0]&&this.addRoll({from:r||"Dice Roller",rolls:t,total:t.map((function(t){return t.values.reduce((function(a,b){return a+b}),0)+t.bonus})).reduce((function(a,b){return a+b}),0)})},roll:function(t,r,e){for(var n={values:[],bonus:e},o=this.createNumberRange(1,r),i=1;i<=t;i++){var l=this.randomValue(o);n.values.push(l)}return n}})}],data:function(){return{formula:""}},created:function(){this.$store.commit("pageTitle","Dice Roller")},methods:{rollDice:function(){var t=this.rollFromString(this.formula);this.setRoll(t)}},head:function(){return{title:"Dice Roller | Mass Effect 5e",meta:[{hid:"description",name:"description",content:"Simple Dice Roller"}]}}},y=e(2),O=e(7),w=e.n(O),j=e(105),_=e(124),V=e(10),P=e(362),D=e(738),B=(e(55),e(178),e(34),e(37),e(6)),R=e(115),S=e(63);function E(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(r){Object(n.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var A=Object(B.a)(R.a,Object(S.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var r=Object.values(t).includes(!0);this.$emit("input",!r)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,r=function(input){return input.$watch("hasError",(function(r){t.$set(t.errorBag,input._uid,r)}),{immediate:!0})},e={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?e.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(e.valid=r(input)))})):e.valid=r(input),e},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var r=this.watchers.find((function(i){return i._uid===t._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var r=this;return t("form",{staticClass:"v-form",attrs:x({novalidate:!0},this.attrs$),on:{submit:function(t){return r.$emit("submit",t)}}},this.$slots.default)}}),$=e(363),I=e(81),component=Object(y.a)(v,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-container",[e("me-page-title"),t._v(" "),e("v-row",[e("v-col",[e("v-card",[e("v-card-text",[e("v-form",{on:{submit:function(r){return r.preventDefault(),t.rollDice(r)}}},[e("v-text-field",{attrs:{label:"formula",outlined:"",clearable:"",hint:"e.g. 5d12 + 6"},model:{value:t.formula,callback:function(r){t.formula=r},expression:"formula"}})],1),t._v(" "),e("v-btn",{on:{click:t.rollDice}},[t._v("\n            Roll\n          ")])],1)],1)],1)],1),t._v(" "),e("v-row",[e("v-col",[e("p",{staticClass:"text-h4"},[t._v("\n        Roll Log\n      ")]),t._v(" "),e("roll-log")],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports;w()(component,{VBtn:j.a,VCard:_.a,VCardText:V.b,VCol:P.a,VContainer:D.a,VForm:A,VRow:$.a,VTextField:I.a})}}]);