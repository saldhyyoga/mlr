(this["webpackJsonp@jazaa/jazaa-payment-gateway"]=this["webpackJsonp@jazaa/jazaa-payment-gateway"]||[]).push([[25],{1304:function(e,t,r){},1469:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Y}));var n=r(550),a=r.n(n),o=r(551),i=r(545),c=r(0),l=r.n(c),u=r(791),s=r.n(u),d=r(562),h=r.n(d),f=r(1472),p=r(1413),m=r(1414),v=r(896),g=r(1415),y=r(799),b=r(1444),E=r(1473),w=r(1474),O=r(851),j=r(1059),k=r(1064),x=r(795),C=r.n(x),L=r(92),T=r.n(L),_=function(e){var t=Object(c.useState)(!1),r=Object(i.a)(t,2),n=r[0],a=r[1],o=Object(c.useState)(!1),u=Object(i.a)(o,2),s=u[0],d=u[1],x=Object(c.useState)(""),L=Object(i.a)(x,2),_=L[0],A=L[1],D=T.a.get("authToken"),S=e.success,G=e.error,z=function(){return d(!s)},N=function(){h.a.post("http://localhost:5000/groups",{name:_},{headers:{Authorization:"Bearer ".concat(D)}}).then((function(e){d(!1),e.data.data?S("Data berhasil ditambahkan"):"Group already exist"===e.data.messages?G("Data sudah ada"):G("Terdapat kesalahan pada server")})).catch((function(e){return console.log(e)}))};return l.a.createElement(b.a,{isOpen:n,toggle:function(){return a(!n)}},l.a.createElement(E.a,{style:{backgroundColor:"white",border:"none"},caret:!0},l.a.createElement(k.a,{title:"Tambah Data User (Operation)"},l.a.createElement(j.a,null,l.a.createElement(C.a,null)))),l.a.createElement(w.a,{style:{marginLeft:-80}},l.a.createElement(O.a,{onClick:z},"Tambah Data Group"),l.a.createElement("div",null,l.a.createElement(f.a,{isOpen:s,toggle:z},l.a.createElement(p.a,{toggle:z},"Add User Group"),l.a.createElement(m.a,null,l.a.createElement(l.a.Fragment,null,"Add Group Data"),l.a.createElement(v.a,{onChange:function(e){return A(e.target.value)},value:_,name:"group",type:"text",required:!0})),l.a.createElement(g.a,null,l.a.createElement(y.a,{color:"primary",disabled:""===_,onClick:N},"Add Data")," ",l.a.createElement(y.a,{color:"secondary",onClick:z},"Cancel"))))))},A=r(52),D=r(53),S=r(55),G=r(54),z=r(1066),N=r(1058),I=r(534),P=r(658),F=r.n(P),M=r(659),B=r.n(M),R=function(e){Object(S.a)(r,e);var t=Object(G.a)(r);function r(e){var n;return Object(A.a)(this,r),(n=t.call(this,e)).state={page:1},n}return Object(D.a)(r,[{key:"render",value:function(){return l.a.createElement(z.a,null,l.a.createElement(N.a,{style:{textAlign:"center",height:"40px"}},l.a.createElement("div",{style:{margin:"auto",marginTop:5}},l.a.createElement("div",null,l.a.createElement("span",null,"Page \xa0",l.a.createElement("button",{onClick:this.props.substract,disabled:1===this.props.page,style:{border:"none",backgroundColor:"white"}},l.a.createElement(F.a,{style:{fontSize:13,fontWeight:"bold",cursor:"pointer"}})),l.a.createElement("input",{value:this.props.page,style:{width:20,textAlign:"center",marginLeft:5,marginRight:5}}),l.a.createElement("button",{onClick:this.props.add,style:{border:"none",backgroundColor:"white"}},l.a.createElement(B.a,{style:{fontSize:13,fontWeight:"bold",cursor:"pointer"}})))))))}}]),r}(l.a.Component),U=Object(I.a)({},{name:"CustomFooter"})(R),H=r(871),q=r(1432),J=r(572),W=(r(571),r(1304),r(167));function Y(e){var t=Object(c.useState)([]),r=Object(i.a)(t,2),n=r[0],u=r[1],d=Object(c.useState)(1),b=Object(i.a)(d,2),E=b[0],w=b[1],O=Object(c.useState)(!1),j=Object(i.a)(O,2),k=j[0],x=j[1],C=Object(c.useState)(!1),L=Object(i.a)(C,2),T=L[0],A=L[1],D=Object(c.useState)(""),S=Object(i.a)(D,2),G=S[0],z=S[1];Object(c.useEffect)((function(){var e;h.a.get("".concat(W.a,"/groups"),{headers:{Authorization:"Bearer ".concat(W.b)}}).then((function(t){console.log(t.data.values),e=t.data.values,u(e)})).catch((function(e){return console.log(e)}))}),[]),Object(c.useEffect)((function(){var e;h.a.get("".concat(W.a,"/groups?page=").concat(E),{headers:{Authorization:"Bearer ".concat(W.b)}}).then((function(t){e=t.data.values,u(e)}))}),[E]);var N=function(){return w(E+1)},I=function(){return w(E-1)},P=function(){return x(!k)},F=function(){return A(!T)},M=function(e){J.b.success("".concat(e),{onClose:function(){return window.location.href="/groups"},autoClose:1e3})},B=function(e){J.b.error("".concat(e),{autoClose:1e3})},R=function(e){return l.a.createElement("div",null,l.a.createElement(f.a,{isOpen:T,toggle:F},l.a.createElement(p.a,{toggle:F},"Edit User Group"),l.a.createElement(m.a,null,l.a.createElement(l.a.Fragment,null,"Add Group Data"),l.a.createElement(v.a,{onChange:function(e){return z(e.target.value)},value:G,name:"group",type:"text",required:!0})),l.a.createElement(g.a,null,l.a.createElement(y.a,{color:"primary",disabled:""===G,onClick:function(){return function(e){h.a.put("".concat(W.a,"/groups/").concat(e),{name:G},{headers:{Authorization:"Bearer ".concat(W.b)}}).then((function(e){A(!1),e.data.data?M("Data berhasil diubah"):B("Terdapat kesalahan pada server")})).catch((function(e){return console.log(e)}))}(e)}},"Edit Data")," ",l.a.createElement(y.a,{color:"secondary",onClick:F},"Cancel"))))},Y=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{isOpen:k,toggle:P},l.a.createElement(p.a,{toggle:P},"Delete Group"),l.a.createElement(m.a,null,"Apakah anda yakin akan menghapus data ini?"),l.a.createElement(g.a,null,l.a.createElement(y.a,{color:"primary",onClick:function(){return K(e)}},"Delete")," ",l.a.createElement(y.a,{color:"secondary",onClick:P},"Cancel"))))},K=function(){var e=Object(o.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("".concat(W.a,"/groups/").concat(t),{headers:{Authorization:"Bearer ".concat(W.b)}});case 3:r=e.sent,x(!k),"OK"===r.data.status?M("Data berhasil dihapus"):B("Terdapat kesalahan pada server"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),V={search:!1,filterType:"dropdown",print:!1,download:!1,responsive:"scroll",selectableRows:!1,customToolbar:function(){return l.a.createElement(_,{success:M,error:B})},customFooter:function(){return l.a.createElement(U,{page:E,add:N,substract:I})}};return l.a.createElement("div",{className:"animated fadeIn",style:{marginBottom:30,marginRight:20}},l.a.createElement(J.a,{position:J.b.POSITION.TOP_CENTER}),l.a.createElement(q.a,{theme:Object(H.a)({overrides:{MuiTableCell:{},MUIDataTableBodyRow:{root:{"&:nth-child(odd)":{backgroundColor:"rgba(0,0,0,.05)"}}},MUIDataTableBodyCell:{root:{}}}})},l.a.createElement(s.a,{title:"User Groups",options:V,columns:["ID","Group Name","Action"],data:n.map((function(e,t){return[e.id,e.name,l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement(y.a,{onClick:F,size:"sm",color:"primary",style:{marginRight:5}},"Edit"),R(e.id),l.a.createElement(y.a,{onClick:P,color:"danger",size:"sm"},"Delete"),Y(e.id))]}))})))}},550:function(e,t,r){e.exports=r(552)},551:function(e,t,r){"use strict";function n(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(u){return void r(u)}c.done?t(l):Promise.resolve(l).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function c(e){n(i,a,o,c,l,"next",e)}function l(e){n(i,a,o,c,l,"throw",e)}c(void 0)}))}}r.d(t,"a",(function(){return a}))},552:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r,n){var a=t&&t.prototype instanceof s?t:s,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=c;var u={};function s(){}function d(){}function h(){}var f={};f[a]=function(){return this};var p=Object.getPrototypeOf,m=p&&p(p(j([])));m&&m!==t&&r.call(m,a)&&(f=m);var v=h.prototype=s.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var u=l(e[a],e,o);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"===typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=v.constructor=h,h.constructor=d,h[i]=d.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(y.prototype),y.prototype[o]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new y(c(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(v),v[i]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;w(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},658:function(e,t,r){"use strict";var n=r(430);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),o=(0,n(r(560)).default)(a.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=o},659:function(e,t,r){"use strict";var n=r(430);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),o=(0,n(r(560)).default)(a.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.default=o},795:function(e,t,r){"use strict";var n=r(430);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),o=(0,n(r(560)).default)(a.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},851:function(e,t,r){"use strict";var n=r(9),a=r(19),o=r(541),i=r(42),c=r(0),l=r.n(c),u=r(2),s=r.n(u),d=r(23),h=r.n(d),f=r(756),p=r(11),m={children:s.a.node,active:s.a.bool,disabled:s.a.bool,divider:s.a.bool,tag:p.o,header:s.a.bool,onClick:s.a.func,className:s.a.string,cssModule:s.a.object,toggle:s.a.bool},v=function(e){function t(t){var r;return(r=e.call(this,t)||this).onClick=r.onClick.bind(Object(o.a)(r)),r.getTabIndex=r.getTabIndex.bind(Object(o.a)(r)),r}Object(i.a)(t,e);var r=t.prototype;return r.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},r.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},r.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,r=Object(p.l)(this.props,["toggle"]),o=r.className,i=r.cssModule,c=r.divider,u=r.tag,s=r.header,d=r.active,f=Object(a.a)(r,["className","cssModule","divider","tag","header","active"]),m=Object(p.k)(h()(o,{disabled:f.disabled,"dropdown-item":!c&&!s,active:d,"dropdown-header":s,"dropdown-divider":c}),i);return"button"===u&&(s?u="h6":c?u="div":f.href&&(u="a")),l.a.createElement(u,Object(n.a)({type:"button"===u&&(f.onClick||this.props.toggle)?"button":void 0},f,{tabIndex:e,role:t,className:m,onClick:this.onClick}))},t}(l.a.Component);v.propTypes=m,v.defaultProps={tag:"button",toggle:!0},v.contextType=f.a,t.a=v}}]);