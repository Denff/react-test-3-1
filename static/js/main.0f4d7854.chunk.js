(this["webpackJsonpgpb-react"]=this["webpackJsonpgpb-react"]||[]).push([[0],{11:function(e,t,n){e.exports={item:"Item_item__3YxsA",item__header:"Item_item__header__1wxr0",item__option:"Item_item__option__1TjW-"}},21:function(e,t,n){e.exports={fetching:"Main_fetching__3W0DU","fetching-load":"Main_fetching-load__34Kvd",item__inner:"Main_item__inner__aWvJt"}},37:function(e,t,n){},39:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);n(37);var i=n(0),c=n(33),a=n(2),r=(n(39),n(10)),s=n(20),o=n.n(s),u=n(31),m=n(32),_=n.n(m),d=n(14),j="SET_ITEMS",h="SET_IS_FETCHING",l={items:[],isFetching:!0};var p=function(e){return{type:j,payload:e}},b=n(11),f=n.n(b),O=n(3),x=function(e){var t=e.item;return Object(O.jsxs)("div",{className:f.a.item,children:[Object(O.jsx)("div",{className:f.a.item__header,children:t.header}),Object(O.jsx)("ul",{className:f.a.item__options,children:t.options.map((function(e,t){return Object(O.jsx)("li",{className:f.a.item__option,children:e},t)}))}),Object(O.jsx)("div",{className:f.a.item__text,children:t.text})]})},v=n(21),g=n.n(v),y=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.items.items})),n=Object(r.c)((function(e){return e.items.isFetching}));return Object(i.useEffect)((function(){e(function(e){return e||console.log("the server is not connected or it simply does not exist"),function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:h,payload:!0}),e.next=3,_.a.get("https://denff.github.io/react-test-3-1/api").then((function(e){var n=e.data;t(p({items:n}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(t))}),[]),Object(O.jsx)("div",{className:g.a.item__inner,children:!1===n?t.map((function(e,t){return Object(O.jsx)(x,{item:e},t)})):Object(O.jsx)("div",{className:g.a.fetching,children:"Loading"})})},N=function(){return Object(O.jsx)(c.a,{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(a.a,{path:"/",component:y})})})},w=n(13),I=n(35),E=n(36),T=Object(w.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(d.a)(Object(d.a)({},e),{},{items:t.payload.items,isFetching:!1});case h:return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.payload});default:return e}}}),F=Object(w.createStore)(T,Object(I.composeWithDevTools)(Object(w.applyMiddleware)(E.a))),M=n(16);n.n(M).a.render(Object(O.jsx)(r.a,{store:F,children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.0f4d7854.chunk.js.map