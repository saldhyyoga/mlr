(this["webpackJsonp@jazaa/jazaa-payment-gateway"]=this["webpackJsonp@jazaa/jazaa-payment-gateway"]||[]).push([[50],{1447:function(e,a,t){"use strict";t.r(a);var n=t(550),c=t.n(n),r=t(551),l=t(545),o=t(0),u=t.n(o),i=t(526),s=t(527),m=t(88),p=t(522),d=t(754),E=t(523),b=t(651),v=t(525),f=t(603),h=t(660),k=t(895),g=t(896),O=t(758),x=t(799),j=t(22),w=t(562),N=t.n(w),y=t(572),C=(t(571),t(167));a.default=function(e){var a=Object(o.useState)(""),t=Object(l.a)(a,2),n=t[0],w=t[1],S=Object(o.useState)(""),z=Object(l.a)(S,2),A=z[0],B=z[1],R=Object(o.useState)(""),D=Object(l.a)(R,2),T=D[0],F=D[1],J=e.match.params.id,q=C.b.split(".")[1],I=JSON.parse(window.atob(q)),P="";1===I.group&&(P="bank"),3===I.group&&(P="bank-operational"),Object(o.useEffect)((function(){N.a.get("".concat(C.a,"/").concat(P,"/").concat(J),{headers:{Authorization:"Bearer ".concat(C.b)}}).then((function(e){"ERROR"===e.data.status&&(window.location.href="/404"),w(e.data.data.code),B(e.data.data.name),F(e.data.data.active)})).catch((function(e){return console.log(e)}))}),[P,J]);var K=function(e){y.b.error("".concat(e),{autoClose:3e3})},U=function(){var a=Object(r.a)(c.a.mark((function a(t){var r,l;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.match.params.id,t.preventDefault(),a.prev=2,a.next=5,N.a.put("".concat(C.a,"/").concat(P,"/").concat(r),{code:n,name:A,active:T},{headers:{Authorization:"Bearer ".concat(C.b)}});case 5:if(200!==(l=a.sent).status){a.next=10;break}c="Data berhasil diedit",y.b.success("".concat(c),{onClose:function(){return window.location.href="/bank"},autoClose:3e3}),a.next=15;break;case 10:if(400!==l.status){a.next=14;break}return a.abrupt("return",u.a.createElement(j.c,{to:"/404"}));case 14:K("Terdapat kesalahan pada server");case 15:a.next=20;break;case 17:a.prev=17,a.t0=a.catch(2),console.log(a.t0);case 20:case"end":return a.stop()}var c}),a,null,[[2,17]])})));return function(e){return a.apply(this,arguments)}}();return u.a.createElement("div",null,u.a.createElement(i.a,null,u.a.createElement(y.a,{position:y.b.POSITION.TOP_CENTER}),u.a.createElement(s.a,{xs:"9"},u.a.createElement(m.a,{timeout:300,in:!0},u.a.createElement(p.a,null,u.a.createElement(d.a,{onSubmit:U,className:"form-horizontal"},u.a.createElement(E.a,null,u.a.createElement("i",{className:"fa fa-edit"}),"Edit Data Bank"),u.a.createElement(b.a,{isOpen:!0,id:"collapseExample"},u.a.createElement(v.a,null,u.a.createElement(f.a,null,u.a.createElement(h.a,{htmlFor:"bankCode"},"Kode Bank"),u.a.createElement("div",{className:"controls"},u.a.createElement(k.a,null,u.a.createElement(g.a,{onChange:function(e){return w(e.target.value)},value:n,name:"bankCOde",id:"bankCode",size:"16",type:"text",required:!0})))),u.a.createElement(f.a,null,u.a.createElement(h.a,{htmlFor:"bankName"},"Nama Bank"),u.a.createElement("div",{className:"controls"},u.a.createElement(k.a,null,u.a.createElement(g.a,{onChange:function(e){return B(e.target.value)},value:A,name:"phonenumber",id:"bankName",type:"text",required:!0})))),u.a.createElement(f.a,null,u.a.createElement(h.a,{for:"exampleSelect"},"Status saat ini: ",!1===T?"Non Active":"Active"," "),u.a.createElement(g.a,{onChange:function(e){return F(e.target.value)},type:"select",name:"status",id:"exampleSelect"},u.a.createElement("option",{disabled:!0,selected:!0},"Ubah Status"),!1===T&&u.a.createElement("option",{value:"1"},"Active"),T&&u.a.createElement(u.a.Fragment,null,u.a.createElement("option",{value:"1"},"Active"),u.a.createElement("option",{value:"0"},"Non Active"))))),u.a.createElement(O.a,null,u.a.createElement(x.a,{type:"submit",size:"sm",color:"success",style:{marginRight:"10px"}},"Edit Data")))))))))}}}]);