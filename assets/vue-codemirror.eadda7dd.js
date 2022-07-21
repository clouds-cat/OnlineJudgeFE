import{b as e}from"./codemirror.44ab372b.js";import{E as t,z as n,S as o,p as r,A as i,C as a,B as u,D as c}from"./@codemirror.f49f4e1a.js";import{m as s,e as f,v as l,k as d,j as m,f as v,D as p,h as b}from"./@vue.fdf15af0.js";
/*!
* VueCodemirror v6.0.0
* Copyright (c) Surmon. All rights reserved.
* Released under the MIT License.
* Surmon <https://github.com/surmon-china>
*/var g=Symbol("vue-codemirror-global-config"),y=function(){var e=new a;return{compartment:e,run:function(t,n){e.get(t.state)?t.dispatch({effects:e.reconfigure(n)}):t.dispatch({effects:o.appendConfig.of(e.of(n))})}}},O=function(){return y().run},h=function(e){var t=y(),n=t.compartment,o=t.run;return function(t,r){var i=n.get(t.state);o(t,(null!=r?r:i!==e)?e:[])}},j={autofocus:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},indentWithTab:{type:Boolean,default:void 0},tabSize:Number,placeholder:String,style:Object,root:Object,extensions:Array,selection:Object},w=Object.freeze({autofocus:!1,disabled:!1,indentWithTab:!0,tabSize:2,placeholder:"",extensions:[e]}),x=s({name:"VueCodemirror",props:Object.assign({modelValue:{type:String,required:!1,default:""}},j),emits:{"update:modelValue":function(e,t){return!0},change:function(e,t){return!0},update:function(e){return!0},focus:function(e){return!0},blur:function(e){return!0},ready:function(e){return!0}},setup:function(e,o){var a=f(),s={view:null,state:null},y=Object.assign(Object.assign({},w),l(g,{})),j=d((function(){return Object.keys(e).reduce((function(t,n){var o,r;return Object.assign(Object.assign({},t),((o={})[n]=null!==(r=e[n])&&void 0!==r?r:y[n],o))}),{})}));return m((function(){s.state=function(e){var o=e.config,r=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(e,["config"]),i=Array.isArray(o.extensions)?o.extensions:[o.extensions];return t.create({doc:o.doc,selection:o.selection,extensions:i.concat([n.updateListener.of((function(e){r.onUpdate(e),e.docChanged&&r.onChange(e.state.doc.toString(),e),e.focusChanged&&(e.view.hasFocus?r.onFocus(e):r.onBlur(e))}))])})}({config:{doc:e.modelValue,selection:j.value.selection,extensions:y.extensions},onFocus:function(e){return o.emit("focus",e)},onBlur:function(e){return o.emit("blur",e)},onUpdate:function(e){return o.emit("update",e)},onChange:function(t,n){t!==e.modelValue&&(o.emit("update:modelValue",t,n),o.emit("change",t,n))}}),s.view=new n({state:s.state,parent:a.value,root:j.value.root});var f=O();v((function(){return e.extensions}),(function(e){return f(s.view,e||[])}),{immediate:!0});var l=h([n.editable.of(!1),t.readOnly.of(!0)]);v((function(){return j.value.disabled}),(function(e){return l(s.view,e)}),{immediate:!0});var d=h(r.of([i]));v((function(){return j.value.indentWithTab}),(function(e){return d(s.view,e)}),{immediate:!0});var m=O();v((function(){return j.value.tabSize}),(function(e){return m(s.view,function(e){return[t.tabSize.of(e),u.of(" ".repeat(e))]}(e))}),{immediate:!0});var p=O();v((function(){return j.value.placeholder}),(function(e){return p(s.view,function(e){return c(e)}(e))}),{immediate:!0});var b=O();v((function(){return j.value.style}),(function(e){return b(s.view,function(e){return n.theme({"&":Object.assign({},e)})}(e))}),{immediate:!0}),v((function(){return e.modelValue}),(function(e){var t,n;e!==s.view.state.doc.toString()&&(t=s.view,n=e,t.dispatch({changes:{from:0,to:t.state.doc.length,insert:n}}))})),j.value.autofocus&&s.view.focus(),o.emit("ready",Object.assign(Object.assign({},s),{container:a.value}))})),p((function(){s.view.destroy()})),function(){return b("div",{class:"v-codemirror",style:{display:"contents"},ref:a})}}});export{x as F};
