(this["webpackJsonp@jazaa/jazaa-payment-gateway"]=this["webpackJsonp@jazaa/jazaa-payment-gateway"]||[]).push([[39],{1410:function(e,t,a){},1485:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(542),o=a(0),l=a.n(o),r=a(692),s=a.n(r),i=a(548),c=a.n(i),u=a(166),d=a(663),p=a(660),m=a(661),h=a(662),b=a(834),f=a(527),g=a(929),E=a(563),O=(a(564),a(1453)),v=a(1481),k=a(1085),C=(a(1410),function(e){var t=Object(o.useState)(!1),a=Object(n.a)(t,2),r=a[0],s=a[1],i=Object(o.useState)(!1),C=Object(n.a)(i,2),j=C[0],y=C[1],N=Object(o.useState)(1),T=Object(n.a)(N,2),_=T[0],A=T[1],w=Object(o.useState)(0),S=Object(n.a)(w,2),B=S[0],M=S[1],P=Object(o.useState)(1),F=Object(n.a)(P,2),D=F[0],z=F[1],I=Object(o.useState)(0),x=Object(n.a)(I,2),J=x[0],R=x[1],U=function(){return s(!r)},L=function(){c.a.post("".concat(u.a,"/add-penjualan"),{product_id:_,jumlah:parseInt(B),bulan:parseInt(D),tahun:parseInt(J)},{headers:{Authorization:"Bearer ".concat(u.b)}}).then((function(e){s(!r),e.data.data?E.b.success("Add Penjualan Data Success",{onClose:function(){return window.location.href="/sales"},autoClose:2e3}):E.b.error("Add Product Failed",{onClose:function(){return window.location.href="/sales"},autoClose:2e3})})).catch((function(e){return console.log(e)}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{isOpen:j,toggle:function(){return y(!j)}},l.a.createElement(v.a,{style:{backgroundColor:"white",border:"none",marginRight:30},caret:!0},l.a.createElement(k.a,{title:"Add Product"},l.a.createElement("i",{onClick:U,className:"fa fa-plus"})),(console.log(D),l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{isOpen:r,toggle:U},l.a.createElement(p.a,{toggle:U},"Add Product"),l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(f.a,null,"Nama Produk"),l.a.createElement(f.a,null,l.a.createElement(g.a,{value:_,onChange:function(e){return A(e.target.value)},type:"select"},e.data.map((function(e,t){return l.a.createElement("option",{value:e.id},e.name)}))))),l.a.createElement("div",null,l.a.createElement(f.a,null,"Jumlah"),l.a.createElement(f.a,null,l.a.createElement(g.a,{value:B,onChange:function(e){return M(e.target.value)},type:"number"}))),l.a.createElement("div",null,l.a.createElement(f.a,null,"Bulan"),l.a.createElement(f.a,null,l.a.createElement(g.a,{value:D,onChange:function(e){return z(e.target.value)},type:"select"},l.a.createElement("option",{value:"1"},"Januari"),l.a.createElement("option",{value:"2"},"Februari"),l.a.createElement("option",{value:"3"},"Maret"),l.a.createElement("option",{value:"4"},"April"),l.a.createElement("option",{value:"5"},"Mei"),l.a.createElement("option",{value:"6"},"Juni"),l.a.createElement("option",{value:"7"},"Juli"),l.a.createElement("option",{value:"8"},"Agustus"),l.a.createElement("option",{value:"9"},"September"),l.a.createElement("option",{value:"10"},"Oktober"),l.a.createElement("option",{value:"11"},"November"),l.a.createElement("option",{value:"12"},"Desember")))),l.a.createElement("div",null,l.a.createElement(f.a,null,"Tahun"),l.a.createElement(f.a,null,l.a.createElement(g.a,{value:J,onChange:function(e){return R(e.target.value)},type:"number"})))),l.a.createElement(h.a,null,l.a.createElement(b.a,{color:"primary",onClick:L},"Submit")," ",l.a.createElement(b.a,{color:"secondary",onClick:U},"Cancel"))))))),l.a.createElement(E.a,{position:E.b.POSITION.TOP_CENTER}))});function j(){var e=Object(o.useState)([]),t=Object(n.a)(e,2),a=t[0],r=t[1],i=Object(o.useState)([]),O=Object(n.a)(i,2),v=O[0],k=O[1],j=Object(o.useState)(!1),y=Object(n.a)(j,2),N=y[0],T=y[1],_=Object(o.useState)(!1),A=Object(n.a)(_,2),w=A[0],S=A[1],B=Object(o.useState)(1),M=Object(n.a)(B,2),P=M[0],F=M[1],D=Object(o.useState)(0),z=Object(n.a)(D,2),I=z[0],x=z[1],J=Object(o.useState)(1),R=Object(n.a)(J,2),U=R[0],L=R[1],K=Object(o.useState)(0),q=Object(n.a)(K,2),W=q[0],$=q[1];Object(o.useEffect)((function(){c.a.get("".concat(u.a,"/penjualan"),{headers:{Authorization:"Bearer ".concat(u.b)}}).then((function(e){console.log(e.data.data),r(e.data.data)})).catch((function(e){return console.log(e)})),c.a.get("".concat(u.a,"/products"),{headers:{Authorization:"Bearer ".concat(u.b)}}).then((function(e){k(e.data.data)})).catch((function(e){return console.log(e)}))}),[]);var G=function(){return T(!N)},H=function(){return S(!w)},Q=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{isOpen:N,toggle:G},l.a.createElement(p.a,{toggle:G},"Delete Data Penjualan"),l.a.createElement(m.a,null,"Apakah anda yakin akan menghapus data penjualan ini?"),l.a.createElement(h.a,null,l.a.createElement(b.a,{color:"primary",onClick:function(){return function(e){c.a.delete("".concat(u.a,"/delete-penjualan/").concat(e),{headers:{Authorization:"Bearer ".concat(u.b)}}).then((function(e){T(!N),e.data.data?E.b.success("Delete Data Penjualan Success",{onClose:function(){return window.location.href="/sales"},autoClose:2e3}):E.b.error("Delete Data Penjualan Failed",{onClose:function(){return window.location.href="/sales"},autoClose:2e3})})).catch((function(e){return console.log(e)}))}(e)}},"Submit")," ",l.a.createElement(b.a,{color:"secondary",onClick:G},"Cancel"))))},V=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{isOpen:w,toggle:H},l.a.createElement(p.a,{toggle:H},"Edit Data Penjualan"),l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(f.a,null,"Nama Produk"),l.a.createElement(f.a,null,l.a.createElement(g.a,{value:P,onChange:function(e){return F(e.target.value)},type:"select"},v.map((function(e,t){return l.a.createElement("option",{value:e.id},e.name)}))))),l.a.createElement("div",null,l.a.createElement(f.a,null,"Jumlah"),l.a.createElement(f.a,null,l.a.createElement(g.a,{value:I,onChange:function(e){return x(e.target.value)},type:"number"}))),l.a.createElement("div",null,l.a.createElement(f.a,null,"Bulan"),l.a.createElement(f.a,null,l.a.createElement(g.a,{value:U,onChange:function(e){return L(e.target.value)},type:"select"},l.a.createElement("option",{value:"1"},"Januari"),l.a.createElement("option",{value:"2"},"Februari"),l.a.createElement("option",{value:"3"},"Maret"),l.a.createElement("option",{value:"4"},"April"),l.a.createElement("option",{value:"5"},"Mei"),l.a.createElement("option",{value:"6"},"Juni"),l.a.createElement("option",{value:"7"},"Juli"),l.a.createElement("option",{value:"8"},"Agustus"),l.a.createElement("option",{value:"9"},"September"),l.a.createElement("option",{value:"10"},"Oktober"),l.a.createElement("option",{value:"11"},"November"),l.a.createElement("option",{value:"12"},"Desember")))),l.a.createElement("div",null,l.a.createElement(f.a,null,"Tahun"),l.a.createElement(f.a,null,l.a.createElement(g.a,{value:W,onChange:function(e){return $(e.target.value)},type:"number"})))),l.a.createElement(h.a,null,l.a.createElement(b.a,{color:"primary",onClick:function(){return function(e){c.a.put("".concat(u.a,"/update-penjualan/").concat(e),{product_id:P,jumlah:parseInt(I),bulan:parseInt(U),tahun:parseInt(W)},{headers:{Authorization:"Bearer ".concat(u.b)}}).then((function(e){S(!w),e.data.data?E.b.success("Update Data Penjualan Success",{onClose:function(){return window.location.href="/sales"},autoClose:2e3}):E.b.error("Update Data Penjualan Failed",{onClose:function(){return window.location.href="/sales"},autoClose:2e3})})).catch((function(e){return console.log(e)}))}(e)}},"Submit")," ",l.a.createElement(b.a,{color:"secondary",onClick:H},"Cancel"))))},X=function(e){var t;switch(e){case 1:t="Januari";break;case 2:t="Februari";break;case 3:t="Maret";break;case 4:t="April";break;case 5:t="Mei";break;case 6:t="Juni";break;case 7:t="Juli";break;case 8:t="Agustus";break;case 9:t="September";break;case 10:t="Oktober";break;case 11:t="November";break;case 12:t="Desember"}return t},Y={search:!1,filterType:"dropdown",print:!1,download:!1,responsive:"scroll",rowsPerPage:100,selectableRows:!1,rowsPerPageOptions:[10,25,50,100],customToolbar:function(){return l.a.createElement(C,{data:v})}};return l.a.createElement("div",{className:"animated fadeIn",style:{marginBottom:30,marginRight:20}},l.a.createElement(E.a,{position:E.b.POSITION.TOP_CENTER}),l.a.createElement(s.a,{title:"Data Penjualan",options:Y,columns:["#","Bulan","Tahun","Nama Produk","Jumlah","Actions"],data:function(){if(void 0!==a||null!==a)return a.map((function(e,t){return[t,X(e.bulan),e.tahun,e.product.name,e.jumlah,l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{onClick:H,key:t,size:"md",color:"success"},l.a.createElement("i",{className:"icon-pencil"})),V(e.id),l.a.createElement(b.a,{style:{marginLeft:2},key:t,size:"md",color:"danger",onClick:G},l.a.createElement("i",{className:"icon-trash"})),Q(e.id))]}))}()}))}},660:function(e,t,a){"use strict";var n=a(9),o=a(19),l=a(0),r=a.n(l),s=a(2),i=a.n(s),c=a(23),u=a.n(c),d=a(11),p={tag:d.o,wrapTag:d.o,toggle:i.a.func,className:i.a.string,cssModule:i.a.object,children:i.a.node,closeAriaLabel:i.a.string,charCode:i.a.oneOfType([i.a.string,i.a.number]),close:i.a.object},m=function(e){var t,a=e.className,l=e.cssModule,s=e.children,i=e.toggle,c=e.tag,p=e.wrapTag,m=e.closeAriaLabel,h=e.charCode,b=e.close,f=Object(o.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),g=Object(d.k)(u()(a,"modal-header"),l);if(!b&&i){var E="number"===typeof h?String.fromCharCode(h):h;t=r.a.createElement("button",{type:"button",onClick:i,className:Object(d.k)("close",l),"aria-label":m},r.a.createElement("span",{"aria-hidden":"true"},E))}return r.a.createElement(p,Object(n.a)({},f,{className:g}),r.a.createElement(c,{className:Object(d.k)("modal-title",l)},s),b||t)};m.propTypes=p,m.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=m},661:function(e,t,a){"use strict";var n=a(9),o=a(19),l=a(0),r=a.n(l),s=a(2),i=a.n(s),c=a(23),u=a.n(c),d=a(11),p={tag:d.o,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,a=e.cssModule,l=e.tag,s=Object(o.a)(e,["className","cssModule","tag"]),i=Object(d.k)(u()(t,"modal-body"),a);return r.a.createElement(l,Object(n.a)({},s,{className:i}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},662:function(e,t,a){"use strict";var n=a(9),o=a(19),l=a(0),r=a.n(l),s=a(2),i=a.n(s),c=a(23),u=a.n(c),d=a(11),p={tag:d.o,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,a=e.cssModule,l=e.tag,s=Object(o.a)(e,["className","cssModule","tag"]),i=Object(d.k)(u()(t,"modal-footer"),a);return r.a.createElement(l,Object(n.a)({},s,{className:i}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},663:function(e,t,a){"use strict";var n=a(64),o=a(9),l=a(539),r=a(42),s=a(0),i=a.n(s),c=a(2),u=a.n(c),d=a(23),p=a.n(d),m=a(90),h=a.n(m),b=a(11),f={children:u.a.node.isRequired,node:u.a.any},g=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.d?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(i.a.Component);g.propTypes=f;var E=g,O=a(69);function v(){}var k=u.a.shape(O.a.propTypes),C={isOpen:u.a.bool,autoFocus:u.a.bool,centered:u.a.bool,scrollable:u.a.bool,size:u.a.string,toggle:u.a.func,keyboard:u.a.bool,role:u.a.string,labelledBy:u.a.string,backdrop:u.a.oneOfType([u.a.bool,u.a.oneOf(["static"])]),onEnter:u.a.func,onExit:u.a.func,onOpened:u.a.func,onClosed:u.a.func,children:u.a.node,className:u.a.string,wrapClassName:u.a.string,modalClassName:u.a.string,backdropClassName:u.a.string,contentClassName:u.a.string,external:u.a.node,fade:u.a.bool,cssModule:u.a.object,zIndex:u.a.oneOfType([u.a.number,u.a.string]),backdropTransition:k,modalTransition:k,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func]),unmountOnClose:u.a.bool,returnFocusAfterClose:u.a.bool,container:b.p},j=Object.keys(C),y={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:v,onClosed:v,modalTransition:{timeout:b.c.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.c.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body"},N=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(l.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(l.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(l.a)(a)),a.handleEscape=a.handleEscape.bind(Object(l.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(l.a)(a)),a.handleTab=a.handleTab.bind(Object(l.a)(a)),a.onOpened=a.onOpened.bind(Object(l.a)(a)),a.onClosed=a.onClosed.bind(Object(l.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(l.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(l.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(r.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),n&&n(),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||v)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||v)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.f.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),a=t.length;if(0!==a){for(var n=this.getFocusedChild(),o=0,l=0;l<a;l+=1)if(t[l]===n){o=l;break}e.shiftKey&&0===o?(e.preventDefault(),t[a-1].focus()):e.shiftKey||o!==a-1||(e.preventDefault(),t[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===b.j.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(b.h)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(b.g)(),Object(b.e)(),0===t.openCount&&(document.body.className=p()(document.body.className,Object(b.k)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(b.k)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(b.n)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.l)(this.props,j);return i.a.createElement("div",Object(o.a)({},a,{className:Object(b.k)(p()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),i.a.createElement("div",{className:Object(b.k)(p()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,l=a.wrapClassName,r=a.modalClassName,s=a.backdropClassName,c=a.cssModule,u=a.isOpen,d=a.backdrop,m=a.role,h=a.labelledBy,f=a.external,g=a.innerRef,v={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":h,role:m,tabIndex:"-1"},k=this.props.fade,C=Object(n.a)({},O.a.defaultProps,{},this.props.modalTransition,{baseClass:k?this.props.modalTransition.baseClass:"",timeout:k?this.props.modalTransition.timeout:0}),j=Object(n.a)({},O.a.defaultProps,{},this.props.backdropTransition,{baseClass:k?this.props.backdropTransition.baseClass:"",timeout:k?this.props.backdropTransition.timeout:0}),y=d&&(k?i.a.createElement(O.a,Object(o.a)({},j,{in:u&&!!d,cssModule:c,className:Object(b.k)(p()("modal-backdrop",s),c)})):i.a.createElement("div",{className:Object(b.k)(p()("modal-backdrop","show",s),c)}));return i.a.createElement(E,{node:this._element},i.a.createElement("div",{className:Object(b.k)(l)},i.a.createElement(O.a,Object(o.a)({},v,C,{in:u,onEntered:this.onOpened,onExited:this.onClosed,cssModule:c,className:Object(b.k)(p()("modal",r,this.state.showStaticBackdropAnimation&&"modal-static"),c),innerRef:g}),f,this.renderModalDialog()),y))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(i.a.Component);N.propTypes=C,N.defaultProps=y,N.openCount=0;t.a=N}}]);