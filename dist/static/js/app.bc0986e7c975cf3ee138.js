webpackJsonp([1],{"+CGi":function(t,n){},B6P2:function(t,n){},H497:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),a=(e("Q0/0"),{render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]});var i=e("VU/8")({name:"App"},a,!1,function(t){e("H497")},null,null).exports,s=e("/ocq"),c=e("mtWM"),r=e.n(c),u={name:"index",data:function(){return{list:[]}},methods:{getData:function(){var t=this;r.a.get("https://zburu.com/api/posts.php").then(function(n){t.list=n.data,console.log(n.data)}).catch(function(t){console.log(t)})}},mounted:function(){this.getData()}},l={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("h1",[t._v("My blog")]),t._v(" "),e("div",{staticClass:"list"},t._l(t.list,function(n){return e("div",{key:n.cid,staticClass:"list-item"},[e("router-link",{attrs:{to:"/post?cid="+n.cid}},[e("p",[t._v(t._s(n.title))]),t._v(" "),e("span",[t._v(t._s(n.created))])])],1)}),0)])},staticRenderFns:[]};var p=e("VU/8")(u,l,!1,function(t){e("B6P2")},null,null).exports,d={name:"post",data:function(){return{post:[]}},methods:{getData:function(){var t=this,n="https://zburu.com/api/posts.php?cid="+cid;r.a.get(n).then(function(n){t.post=n.data,console.log(n.data)}).catch(function(t){console.log(t)})}},mounted:function(){this.getData()}},f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"posts"},t._l(t.post,function(n){return e("div",{key:n.cid},[e("h3",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.created))]),t._v(" "),e("p",[t._v(t._s(n.text))])])}),0)},staticRenderFns:[]};var v=e("VU/8")(d,f,!1,function(t){e("+CGi")},null,null).exports;o.default.use(s.a);var _=new s.a({mode:"history",routes:[{path:"/",name:"index",component:p},{path:"/post:cid",name:"post",component:v}]}),h=e("zL8q"),m=e.n(h);e("tvR6");o.default.use(m.a),o.default.prototype.$axios=r.a,o.default.config.productionTip=!1,new o.default({el:"#app",router:_,components:{App:i},template:"<App/>"})},"Q0/0":function(t,n){},tvR6:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.bc0986e7c975cf3ee138.js.map