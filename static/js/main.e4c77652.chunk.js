(this.webpackJsonpmyweb=this.webpackJsonpmyweb||[]).push([[0],{37:function(e,t,n){e.exports=n(52)},46:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),l=n(8),i=n(9),u=n(12),s=n(10),m=n(13),p=n(19),b=(n(46),n(20)),h=n(14),f=n(3),g=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).showUser=function(){var e=n.props.user;return e.fullName?r.a.createElement("div",{key:e.fullName},r.a.createElement("h2",null,"Wellcome ",e.fullName),r.a.createElement("p",null,"Email: "),r.a.createElement("img",{src:e.img})):""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Trang ch\u1ee7"),this.showUser(),r.a.createElement(b.b,{to:"/product"},"Prodcut"))}}]),t}(a.Component),d=Object(p.b)((function(e){return{user:e.loginPageReducer.loginReducer.user}}),(function(e){return Object(f.a)({},e)}))(g),O=n(24),j=n(35),v="GET_USER",y=function(e){return{type:v,payload:e}},E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).responseGoogle=function(e){n.props.getUser(e.profileObj)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j.GoogleLogin,{clientId:"542888842456-42cgb7rjm61ptik5lmso138co2hoaem2.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"})}}]),t}(a.Component),w=Object(p.b)((function(e){return{aut:e.loginPageReducer}}),(function(e){return Object(f.a)({getUser:y},e)}))(E),N=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).componentDidMount=function(){},n._handelSubmit=function(e){e.preventDefault(),n.props.getUser()},n._handelChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,r=t.name;n.setState(Object(O.a)({},r,a))},n.state={isLoading:!1,u_name:"",u_pass:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.isLoading,t=this.props.isAut;return console.log(this.props),1==t?r.a.createElement(h.a,{to:{pathname:"/home",state:{userName:""}}}):r.a.createElement("div",{className:"row d-flex justify-content-center mt-5"},r.a.createElement("div",{className:"col-4"},r.a.createElement("form",{onSubmit:this._handelSubmit},r.a.createElement("h3",null,"Form Login"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:this._handelChange,name:"u_name",value:this.state.u_name,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:this._handelChange,name:"u_pass",value:this.state.u_pass,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Login"}),r.a.createElement(w,null)),r.a.createElement("p",null,"NgocDinh"),e?r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):null)))}}]),t}(a.Component),k=Object(p.b)((function(e){return{isAut:e.loginPageReducer.loginReducer.isAut}}),(function(e){return Object(f.a)({getUser:y},e)}))(N);function P(){var e=Object(h.g)(),t=e.state&&e.state.background;return r.a.createElement(h.d,{location:t||e},r.a.createElement(h.b,{exact:!0,path:"/",children:r.a.createElement(k,null)}),r.a.createElement(h.b,{path:"/home",children:r.a.createElement(d,null)}))}var _=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{basename:"/"},r.a.createElement(P,null))}}]),t}(a.Component);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var A={isAut:!1,user:{fullName:null,email:null,firstName:null,lastName:null,img:null}};var D=Object(f.b)({loginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:console.log(t);var n=t.payload;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{isAut:!0,user:{fullName:n.name,email:n.email,firstName:n.familyName,lastName:n.givenName,img:n.imageUrl}});default:return e}}}),R=Object(f.b)({loginPageReducer:D}),S=Object(f.c)((function(e,t){return R(e,t)})),G=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:S},r.a.createElement(_,null))}}]),t}(a.Component);n(48),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(30),U=n.n(L);n(49),n(54),n(53);U.a.initializeApp({apiKey:"AIzaSyBk5dvWkTPNsVYX7P-Jdiix1Jn3wOLGGDA",authDomain:"github-4fe6d.firebaseapp.com",databaseURL:"https://github-4fe6d.firebaseio.com",projectId:"github-4fe6d",storageBucket:"github-4fe6d.appspot.com",messagingSenderId:"1040095152319",appId:"1:1040095152319:web:36983efe3836536b8a5e0a",measurementId:"G-EGQCR9DMB3"}),U.a.analytics(),o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.e4c77652.chunk.js.map