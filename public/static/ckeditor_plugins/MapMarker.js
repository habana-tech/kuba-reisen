!function(e){var r={};function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,r,n){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,r){if(1&r&&(e=a(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)a.d(n,t,function(r){return e[r]}.bind(null,t));return n},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="/static/ckeditor_plugins/",a(a.s="RuH5")}({RuH5:function(e,r){console.log("hello"),CKEDITOR.plugins.add("MapMarker",{icons:"MapMarker",init:function(e){e.addCommand("MapMarker",new CKEDITOR.dialogCommand("MapMarkerDialog",{allowedContent:"span[!data-map,!class]"})),e.ui.addButton("MapMarker",{label:"Insert MapMarker",command:"MapMarker",icon:this.path+"../ckeditor_icons/MapMarker.png",toolbar:"insert"}),e.contextMenu&&(e.addMenuGroup("MapMarkerGroup"),e.addMenuItem("MapMarkerItem",{label:"Edit MapMarker",icon:this.path+"../ckeditor_icons/MapMarker.png",command:"MapMarker",group:"MapMarkerGroup"}),e.contextMenu.addListener((function(e){if("MapMarker"===e.$.className)return{MapMarkerItem:CKEDITOR.TRISTATE_OFF}}))),CKEDITOR.dialog.add("MapMarkerDialog",this.path+"MapMarkerDialog.js"),CKEDITOR.addCss(".MapMarker{background: #f2f8ff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAjCAYAAAAaLGNkAAADZUlEQVRYhe2Xv0vzXBTHn3/N3F+NHbSEbIKDDg6hkx0cXPzRDgoZOjUJ4iAiurlZcBAERQvSgFlEazfbRUWklQrfd3i490nMTX+87+v7Pi+8Bw73cm/OOZ9zcpKb/MBvID/+bQDgvwjR7/cRBAEsy4JpmhBCQAiB6elp2LaNnZ0d9Pv974EIwxC5XC5ThRBqlPMwDP8+iHw+n3Duui7a7Xbqunq9noASQsA0zb8G0e12lTMhBJrNZqaTRqOBTqcDAHh5eYHv+4kKdbvdySG63S4456lsoihCs9nE2toaNjY24Ps+giBAo9EA5xxvb28AoPpibm5OJTEMRAshATjnYIzBNE21Ftd6vQ4AaLfbODo6UvYnJydqvrq6CsYYcrnc+BCy60ulEm5ubhSMHKVeX18D+NULS0tLmUFs2wbnPLNHEhBhGKqAUlZWVhLB47q8vKyqks/nhz6e0kb31CQgZLbn5+dqrVwuZ0JIvbq6AgC8vr5mQhwfH6cSTEH0ej3lVIpsOEqpGuNzIQQ+Pj4yA2dV46uNgqjVauCcY3t7W20Wi0Vt5oyxBOy4Uq1WwTmH7/t6CMuywBjDw8OD2nx+foYQQmUvg+tKOo7c39+DMQbbtvUQjDEwxlKGruumMn96evpTEFlxRkLIvZmZGQDA+/s77u7uEEURBoPBPwcxGAwwPz8PxhgODg4mDvwV4ms/jQURF9d1Afy8JYeHh0PPFJ3IJ0wLUSgUwBhDq9UayxnnHIQQOI6DUqmEKIpG2rRaLTDGUCgU9BCe54FSikqlMtLZ5+enqhxjDJTSoWeDlK2tLVBK4XmeHqLX64FSOtYtOT09VWXVaRAEWjsJnfmyAn7dr7Ozs5EgsgI6LZfLqesvLi60/ZCCaDabIISMrMbt7S0qlQoopTAMIzHqgsShdY2cOsoZYyCEYHFxcSgIAOzv74NSCkJIYvwqjuMMBdR+1EiD+Dmik06nMxJgfX1d7WeJFkI6J4RgYWFhKEi8F6rVamLPcRzlZ+LPOwkSzzCrWWWQYrGo1i4vL9X6KIChEFIopZiamgIhBIZhYHNzE4+Pj2p/b28PhBCEYYjd3d1E8KwemBgC+PnZF3duGIYa5VyCSp3kdT7xb2CtVsPs7GwiICEElmXB87zv+w38bvkfQspvAfEHUnWJIMFgiBYAAAAASUVORK5CYII=) no-repeat scroll center center; border: 4px dashed #2c903e; display: block; width:35px; height: 35px;}")},afterInit:function(e){var r=e.dataProcessor,a=r&&r.dataFilter;a&&a.addRules({elements:{span:function(r){if("MapMarker"===r.attributes.class)return e.createFakeParserElement(r,"MapMarker","div",!0)}}},10)}})}});