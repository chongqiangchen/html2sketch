(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[59],{iodu:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return S}));n("EpIQ");var r=n("bx4M"),a=(n("Jmwx"),n("BMrR")),c=(n("Y2jk"),n("zeV3")),l=(n("rO+z"),n("kPKH")),s=(n("L/Qf"),n("2/Rp")),o=(n("qNb/"),n("PArb")),u=n("tJVT"),i=n("q1tI"),m=n.n(i),f=n("ovOe"),p=n.n(f),b=n("WmNS"),x=n.n(b),E=(n("8/o9"),n("tsqr")),d=n("9og8"),h=n("+QRC"),v=n.n(h),O=n("/7QA");"undefined"!==typeof window&&(window.DUMI_HTML2SKETCH={nodeToSketchSymbol:O["nodeToSketchSymbol"],nodeToGroup:O["nodeToGroup"]});var w=()=>{var e=Object(i["useState"])(),t=Object(u["a"])(e,2),n=t[0],r=t[1],a=function(){var e=Object(d["a"])(x.a.mark((function e(t,n){var a,c,l,s,o;return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,console.groupCollapsed("[html2sketch]\u5f00\u59cb\u8f6c\u6362..."),!(t instanceof Array)){e.next=17;break}c=[],l=0;case 5:if(!(l<t.length)){e.next=14;break}return s=t[l],e.next=9,n(s);case 9:o=e.sent,c.push(o);case 11:l+=1,e.next=5;break;case 14:a=c,e.next=20;break;case 17:return e.next=19,n(t);case 19:a=e.sent;case 20:return console.groupEnd(),console.log("\u89e3\u6790\u7ed3\u679c:",a),v()(JSON.stringify(a)),r(a),e.next=26,E["b"].success("\u8f6c\u6362\u6210\u529f\ud83c\udf89 \u5df2\u590d\u5236\u5230\u526a\u5207\u677f");case 26:return e.abrupt("return",a);case 29:return e.prev=29,e.t0=e["catch"](0),e.next=33,E["b"].error("\u89e3\u6790\u5931\u8d25,\u8bf7\u68c0\u67e5 Console \u8f93\u51fa \ud83d\ude36");case 33:console.groupEnd(),console.groupEnd(),console.error("\u62a5\u9519\u5982\u4e0b:"),console.error(e.t0);case 37:case"end":return e.stop()}}),e,null,[[0,29]])})));return function(t,n){return e.apply(this,arguments)}}();return{sketchJSON:n,generateSymbol:function(){var e=Object(d["a"])(x.a.mark((function e(t){return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a(t,function(){var e=Object(d["a"])(x.a.mark((function e(t){return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(O["nodeToSketchSymbol"])(t);case 2:return e.abrupt("return",e.sent.toSketchJSON());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),generateGroup:function(){var e=Object(d["a"])(x.a.mark((function e(t){return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a(t,function(){var e=Object(d["a"])(x.a.mark((function e(t){return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(O["nodeToGroup"])(t);case 2:return e.abrupt("return",e.sent.toSketchJSON());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},y=w,k=e=>{var t=e.elements,n=e.children,f=e.buttons,b=y(),x=b.sketchJSON,E=b.generateGroup,d=b.generateSymbol,h=Object(i["useState"])(!1),v=Object(u["a"])(h,2),O=v[0],w=v[1];return m.a.createElement("div",null,n,m.a.createElement(o["a"],{dashed:!0}),m.a.createElement(a["a"],{style:{zIndex:99999}},m.a.createElement(l["a"],{span:24},m.a.createElement(a["a"],{justify:"space-between"},m.a.createElement(l["a"],null,m.a.createElement(s["a"],{disabled:!x,onClick:()=>{w(!O)}},O?"\u9690\u85cf":"\u663e\u793a"," JSON")),m.a.createElement(l["a"],null,m.a.createElement(c["b"],null,null===f||void 0===f?void 0:f.map((e=>m.a.createElement(s["a"],{key:e.name,onClick:e.onClick},e.name))),m.a.createElement(s["a"],{onClick:()=>{E(t)}},"\u8f6c\u6362\u4e3a Group"),m.a.createElement(s["a"],{type:"primary",onClick:()=>{d(t)}},"\u8f6c\u6362\u4e3a Symbol"))))),O?m.a.createElement(l["a"],{span:24},m.a.createElement(r["a"],null,m.a.createElement(p.a,{name:"Sketch JSON",src:x||{}}))):null))},g=k,S=()=>{var e=Object(i["useRef"])(null),t=Object(i["useState"])([]),n=Object(u["a"])(t,2),r=n[0],a=n[1];return Object(i["useEffect"])((()=>{0===r.length&&e.current&&a(e.current)})),{ref:e,elements:r,setElements:a}}},"o8M/":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),c=n("iodu");function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=o(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function o(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var u=a.a.createElement("defs",null,a.a.createElement("style",null,"\n     .text{font-size:8px;fill:#aeaeae;font-family:PingFangSC-Light-GBpc-EUC-H,\n      PingFang SC;}\n    ")),i=a.a.createElement("text",{className:"text",transform:"translate(0 30)"},"03"),m=a.a.createElement("text",{className:"text",transform:"translate(20 30)"},"05"),f=a.a.createElement("text",{className:"text",transform:"translate(40 30)"},"07"),p=a.a.createElement("text",{className:"text",transform:"translate(60 30)"},"09"),b=a.a.createElement("text",{className:"text",transform:"translate(80 30)"},"11"),x=a.a.createElement("text",{className:"text",transform:"translate(100 30)"},"13"),E=a.a.createElement("text",{className:"text",transform:"translate(120 30)"},"15"),d=a.a.createElement("text",{className:"text",transform:"translate(140 30)"},"17"),h=a.a.createElement("text",{className:"text",transform:"translate(160 30)"},"19"),v=a.a.createElement("text",{className:"text",transform:"translate(180 30)"},"21"),O=function(e){var t=e.svgRef,n=e.title,r=s(e,["svgRef","title"]);return a.a.createElement("svg",l({viewBox:"0 0 200 50",ref:t},r),n?a.a.createElement("title",null,n):null,u,i,m,f,p,b,x,E,d,h,v)},w=a.a.forwardRef((function(e,t){return a.a.createElement(O,l({svgRef:t},e))})),y=(n.p,()=>{var e=Object(c["b"])(),t=e.elements,n=e.ref;return a.a.createElement(c["a"],{elements:t},a.a.createElement("div",{ref:n},a.a.createElement(w,null)))});t["default"]=y}}]);