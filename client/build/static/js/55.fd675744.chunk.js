(this["webpackJsonp@jazaa/jazaa-payment-gateway"]=this["webpackJsonp@jazaa/jazaa-payment-gateway"]||[]).push([[55],{1455:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return S}));var n=t(552),r=t.n(n),l=t(553),c=t(853),s=t(52),o=t(53),i=t(55),u=t(54),m=t(0),p=t.n(m),d=t(526),h=t(527),b=t(69),E=t(522),f=t(784),k=t(523),g=t(667),v=t(525),C=t(613),N=t(689),w=t(928),O=t(929),y=t(823),j=t(834),z=t(548),x=t.n(z),I=t(166),B=t(563),S=(t(564),function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.success=function(){B.b.success("Bank berhasil ditambahkan",{onClose:function(){return window.location.href="/bank"},autoClose:2e3})},n.error=function(){B.b.error("Terdapat kesalahan pada server",{autoClose:2e3})},n.submitData=function(){var e=Object(l.a)(r.a.mark((function e(a){var t,l,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t=I.b,l=t.split(".")[1],c=JSON.parse(window.atob(l)),s="",1===c.group&&(s="bank"),3===c.group&&(s="bank-operational"),e.prev=7,e.next=10,x.a.post("".concat(I.a,"/").concat(s),{code:n.state.bankCode,name:n.state.bankName},{headers:{Authorization:"Bearer ".concat(I.b)}});case 10:"OK"===e.sent.data.status?n.success():n.error(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(a){return e.apply(this,arguments)}}(),n.state={collapse:!0,fadeIn:!0,timeout:300,bankName:"",bankCode:""},n}return Object(o.a)(t,[{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement(d.a,null,p.a.createElement(B.a,{position:B.b.POSITION.TOP_CENTER}),p.a.createElement(h.a,{xs:"9"},p.a.createElement(b.a,{timeout:this.state.timeout,in:this.state.fadeIn},p.a.createElement(E.a,null,p.a.createElement(f.a,{onSubmit:this.submitData,className:"form-horizontal"},p.a.createElement(k.a,null,p.a.createElement("i",{className:"fa fa-edit"}),"Create Bank"),p.a.createElement(g.a,{isOpen:this.state.collapse,id:"collapseExample"},p.a.createElement(v.a,null,p.a.createElement(C.a,null,p.a.createElement(N.a,{htmlFor:"appendedInput"},"Nama Bank"),p.a.createElement("div",{className:"controls"},p.a.createElement(w.a,null,p.a.createElement(O.a,{name:"bankName",onChange:this.handleChange,value:this.state.bankName,id:"appendedInput",size:"16",type:"text",required:!0})))),p.a.createElement(C.a,null,p.a.createElement(N.a,{htmlFor:"appendedInput"},"Kode Bank"),p.a.createElement("div",{className:"controls"},p.a.createElement(w.a,null,p.a.createElement(O.a,{onChange:this.handleChange,name:"bankCode",value:this.state.bankCode,id:"appendedInput",minLength:"3",maxLength:"5",size:"16",type:"number",required:!0}))))),p.a.createElement(y.a,null,p.a.createElement(j.a,{type:"submit",size:"sm",color:"success",style:{marginRight:"10px"}},p.a.createElement("i",{className:"fa fa-dot-circle-o"}),"Submit"),p.a.createElement(j.a,{onClick:function(){return window.location.reload()},type:"reset",size:"sm",color:"danger"},p.a.createElement("i",{className:"fa fa-ban"})," Reset")))))))))}}]),t}(m.Component))}}]);