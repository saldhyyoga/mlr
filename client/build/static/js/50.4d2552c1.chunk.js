(this["webpackJsonp@jazaa/jazaa-payment-gateway"]=this["webpackJsonp@jazaa/jazaa-payment-gateway"]||[]).push([[50],{1487:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));var n=t(542),r=t(0),l=t.n(r),c=t(833),m=t(834),i=t(527),s=t(522),u=t(525),d=t(1310),E=(t(956),t(548)),o=t.n(E),h=t(166),p=function(e){var a;switch(e){case 1:a="Januari";break;case 2:a="Februari";break;case 3:a="Maret";break;case 4:a="April";break;case 5:a="Mei";break;case 6:a="Juni";break;case 7:a="Juli";break;case 8:a="Agustus";break;case 9:a="September";break;case 10:a="Oktober";break;case 11:a="November";break;case 12:a="Desember"}return a},b=t(1411),f=t.n(b);function v(e){var a=e.match.params.id,t=Object(r.useState)([]),E=Object(n.a)(t,2),b=E[0],v=E[1],k=Object(r.useState)(0),g=Object(n.a)(k,2),w=g[0],j=g[1],y=Object(r.useState)([]),P=Object(n.a)(y,2),N=P[0],O=P[1],T=Object(r.useRef)();Object(r.useEffect)((function(){o.a.get("".concat(h.a,"/prediksi/").concat(a),{headers:{Authorization:"Bearer ".concat(h.b)}}).then((function(e){v(e.data.data),j(e.data.data.data.length),O(e.data.data.data)})).catch((function(e){return console.log(e)}))}),[a]);b.data;return console.log(N),l.a.createElement(c.a,{fluid:!0},l.a.createElement("div",{style:{marginLeft:15,marginBottom:10}},l.a.createElement(f.a,{targetRef:T,filename:"prediksi.pdf"},(function(e){var a=e.toPdf;return l.a.createElement(m.a,{color:"primary",onClick:a},"Export Pdf")}))),l.a.createElement("div",{ref:T},l.a.createElement(i.a,{xs:"12",sm:"12",md:"12"},l.a.createElement(s.a,null,l.a.createElement(u.a,{style:{color:"black"}},l.a.createElement("center",null,l.a.createElement("div",{style:{fontWeight:500,fontSize:22,marginBottom:20}},"Detail Prediksi")),l.a.createElement(i.a,{className:"wrapper"},l.a.createElement("div",{className:"paragraf"},"Nomor Prediksi"),l.a.createElement("div",null,":"),l.a.createElement("div",null,"\xa0",a)),l.a.createElement(i.a,{className:"wrapper"},l.a.createElement("div",{className:"paragraf"},"Data Tahun Penjualan"),l.a.createElement("div",null,":"),l.a.createElement("div",null,"\xa0",b.tahun-1)),l.a.createElement(i.a,{className:"wrapper"},l.a.createElement("div",{className:"paragraf"},"Tahun Prediksi"),l.a.createElement("div",null,":"),l.a.createElement("div",null,"\xa0",b.tahun)),l.a.createElement(i.a,{className:"wrapper"},l.a.createElement("div",{className:"paragraf"},"Jumlah Produk"),l.a.createElement("div",null,":"),l.a.createElement("div",null,"\xa0",w)),l.a.createElement(i.a,{className:"wrapper"},l.a.createElement("div",{className:"paragraf"},"Prediksi Perbulan Tahun ",b.tahun),l.a.createElement("div",null,":"),l.a.createElement("div",null,"\xa0",b.pred_m)),l.a.createElement(i.a,{className:"wrapper"},l.a.createElement("div",{className:"paragraf"},"Prediksi Pertahun ",b.tahun),l.a.createElement("div",null,":"),l.a.createElement("div",null,"\xa0",b.pred_y)),l.a.createElement(d.a,{style:{width:700}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{width:20}},"#"),l.a.createElement("th",{style:{width:25}},"Product"),l.a.createElement("th",{style:{width:20}},"Penjualan Tertinggi"),l.a.createElement("th",{style:{width:20}},"Penjualan Terendah"),l.a.createElement("th",{style:{width:20}},"Bulan Penjualan Tertinggi"),l.a.createElement("th",{style:{width:20}},"Bulan Penjualan Terendah"))),l.a.createElement("tbody",null,N.map((function(e,a){return l.a.createElement("tr",null,l.a.createElement("th",null,a+1),l.a.createElement("th",null,e.name),l.a.createElement("th",null,e.max),l.a.createElement("th",null,e.min),l.a.createElement("th",null,p(e.monthmax)),l.a.createElement("th",null,p(e.monthmin)))})))))))))}},956:function(e,a,t){}}]);