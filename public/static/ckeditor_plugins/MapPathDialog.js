!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/static/ckeditor_plugins/",e(e.s="8Tuw")}({"/b8u":function(t,n,e){var r=e("STAE");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"07d7":function(t,n,e){var r=e("AO7/"),o=e("busE"),i=e("sEFX");r||o(Object.prototype,"toString",i,{unsafe:!0})},"0BK2":function(t,n){t.exports={}},"0Dky":function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"2oRo":function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e("yLpj"))},"8Tuw":function(t,n,e){e("DQNa"),e("sMBO"),e("07d7"),e("JfAA"),CKEDITOR.dialog.add("MapPathDialog",(function(t){return{title:"MapPath Properties",minHeight:20,contents:[{id:"tab-MapPath",label:"geoJSon",elements:[{type:"text",id:"name",label:"Name of this Path",setup:function(t){var n="";try{n=JSON.parse(t.getAttribute("data-path-map"))}catch(t){}this.setValue(n.name)}},{type:"textarea",id:"geojson",label:"GeoJson Content",validate:CKEDITOR.dialog.validate.notEmpty("geoJson cannot be empty"),setup:function(t){var n="";try{n=JSON.parse(t.getAttribute("data-path-map")),n=JSON.stringify(n.geojson,void 0,4)}catch(t){}this.setValue(n)}}]}],onChange:function(){console.log("i change the content")},onOk:function(){var n=t.document.createElement("span"),e='"name":';""===this.getValueOf("tab-MapPath","name")?e+='""':e+='"'+this.getValueOf("tab-MapPath","name")+'"';var r='"geojson":';""===this.getValueOf("tab-MapPath","geojson")?r+='"empty"':r+=this.getValueOf("tab-MapPath","geojson");var o=[e,r];o="{"+o.toString()+"}",n.setAttribute("data-path-map",o),console.info("test ",o),n.setAttribute("class","MapPath"),n.setText("[MP]"),t.insertElement(n)},onShow:function(){var n=t.getSelection().getStartElement();if((n=t.restoreRealElement(n))&&"span"==n.getName())this.insertMode=!1;else{n=t.document.createElement("span");var e=['"name":','"geojson":'];e="{"+e.toString()+"}",n.setAttribute("data-path-map",e),this.insertMode=!0}this.element=n,this.setupContent(this.element.$)}}}))},"93I0":function(t,n,e){var r=e("VpIT"),o=e("kOOl"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},"9d/t":function(t,n,e){var r=e("AO7/"),o=e("xrYK"),i=e("tiKp")("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:u?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},"AO7/":function(t,n,e){var r={};r[e("tiKp")("toStringTag")]="z",t.exports="[object z]"===String(r)},DPsx:function(t,n,e){var r=e("g6v/"),o=e("0Dky"),i=e("zBJ4");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},DQNa:function(t,n,e){var r=e("busE"),o=Date.prototype,i=o.toString,u=o.getTime;new Date(NaN)+""!="Invalid Date"&&r(o,"toString",(function(){var t=u.call(this);return t==t?i.call(this):"Invalid Date"}))},JfAA:function(t,n,e){"use strict";var r=e("busE"),o=e("glrk"),i=e("0Dky"),u=e("rW0t"),a=RegExp.prototype,c=a.toString,f=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),s="toString"!=c.name;(f||s)&&r(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in a)?u.call(t):e)}),{unsafe:!0})},STAE:function(t,n,e){var r=e("0Dky");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},UTVS:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},VpIT:function(t,n,e){var r=e("xDBR"),o=e("xs3f");(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},XGwC:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},afO8:function(t,n,e){var r,o,i,u=e("f5p1"),a=e("2oRo"),c=e("hh1v"),f=e("kRJp"),s=e("UTVS"),p=e("93I0"),l=e("0BK2"),g=a.WeakMap;if(u){var v=new g,h=v.get,y=v.has,b=v.set;r=function(t,n){return b.call(v,t,n),n},o=function(t){return h.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var d=p("state");l[d]=!0,r=function(t,n){return f(t,d,n),n},o=function(t){return s(t,d)?t[d]:{}},i=function(t){return s(t,d)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!c(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},busE:function(t,n,e){var r=e("2oRo"),o=e("kRJp"),i=e("UTVS"),u=e("zk60"),a=e("iSVu"),c=e("afO8"),f=c.get,s=c.enforce,p=String(String).split("String");(t.exports=function(t,n,e,a){var c=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,l=!!a&&!!a.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=p.join("string"==typeof n?n:"")),t!==r?(c?!l&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a(this)}))},f5p1:function(t,n,e){var r=e("2oRo"),o=e("iSVu"),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},"g6v/":function(t,n,e){var r=e("0Dky");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},glrk:function(t,n,e){var r=e("hh1v");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},hh1v:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},iSVu:function(t,n,e){var r=e("xs3f"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},kOOl:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},kRJp:function(t,n,e){var r=e("g6v/"),o=e("m/L8"),i=e("XGwC");t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},"m/L8":function(t,n,e){var r=e("g6v/"),o=e("DPsx"),i=e("glrk"),u=e("wE6v"),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},rW0t:function(t,n,e){"use strict";var r=e("glrk");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},sEFX:function(t,n,e){"use strict";var r=e("AO7/"),o=e("9d/t");t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},sMBO:function(t,n,e){var r=e("g6v/"),o=e("m/L8").f,i=Function.prototype,u=i.toString,a=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return u.call(this).match(a)[1]}catch(t){return""}}})},tiKp:function(t,n,e){var r=e("2oRo"),o=e("VpIT"),i=e("UTVS"),u=e("kOOl"),a=e("STAE"),c=e("/b8u"),f=o("wks"),s=r.Symbol,p=c?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)||(a&&i(s,t)?f[t]=s[t]:f[t]=p("Symbol."+t)),f[t]}},wE6v:function(t,n,e){var r=e("hh1v");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},xDBR:function(t,n){t.exports=!1},xrYK:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},xs3f:function(t,n,e){var r=e("2oRo"),o=e("zk60"),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},yLpj:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},zBJ4:function(t,n,e){var r=e("2oRo"),o=e("hh1v"),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},zk60:function(t,n,e){var r=e("2oRo"),o=e("kRJp");t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}}});