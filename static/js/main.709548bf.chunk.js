(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){e.exports={dialogMask:"dialog_dialogMask__1JHQA",open:"dialog_open__35INs",show:"dialog_show__irXr_",dialog:"dialog_dialog__1eIdL",dialogTitle:"dialog_dialogTitle__-0JsC",dialogContent:"dialog_dialogContent__2TD8E",closeBtn:"dialog_closeBtn__1p-rl"}},15:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(2),s=n.n(i),l=(n(15),n(3)),c=n(4),r=n(6),d=n(5),u=n(7),h=(n(17),n(1)),m=n.n(h),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={open:!1,show:!1,title:"",content:""},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"show",value:function(e,t){var n=this;this.setState({open:!0,title:e,content:t}),setTimeout(function(){n.setState({show:!0})},10)}},{key:"close",value:function(){var e=this;this.setState({show:!1}),setTimeout(function(){e.setState({open:!1})},210)}},{key:"render",value:function(){return o.a.createElement("div",{className:m.a.dialogMask+" "+(this.state.open?m.a.open:"")+" "+(this.state.show?m.a.show:"")},o.a.createElement("div",{className:m.a.dialog},o.a.createElement("div",{className:m.a.dialogTitle},this.state.title,o.a.createElement("div",{className:m.a.closeBtn,onClick:this.close.bind(this)},"X")),o.a.createElement("div",{className:m.a.dialogContent},this.state.content)))}}]),t}(o.a.Component),p=document.createElement("div");document.body.appendChild(p);var w=s.a.render(o.a.createElement(g,null),p),_=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("button",{onClick:function(){return w.show("Current Time",(new Date).toLocaleString())}},"Open Dialog"))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.709548bf.chunk.js.map