(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/drinks.d5055ab8.png"},29:function(e,t,a){e.exports=a.p+"static/media/main_dish.ad7538d1.png"},30:function(e,t,a){e.exports=a.p+"static/media/cake.12d7c29c.png"},31:function(e,t,a){e.exports=a.p+"static/media/special.f5125271.png"},33:function(e,t,a){e.exports=a(64)},62:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),i=a.n(c),o=a(3),l=a(7),s=a(15),u=a(11),m=a(14),d=a.n(m),v=a(27),h=a(4),p=a(5),f=a(8),b=a(6),g=a(9),E=function(e){var t=e.nav.map(function(t,a){return r.a.createElement("li",{key:t,className:a===e.active?"active":null,onClick:function(){return e.changeActive(a)}},t)});return r.a.createElement("header",null,r.a.createElement("h2",null,"Menu"),r.a.createElement("nav",null,r.a.createElement("h1",null,"Home ",r.a.createElement("span",null,"Grill")),r.a.createElement("ul",null,t)))},k=function(e){var t=0,a=e.orders.filter(function(a,n){if(a.table===e.index)return t+=a.price*a.count,a}).map(function(t,a){return r.a.createElement("li",{className:"item",key:a},t.count,"x ",t.name,r.a.createElement("span",{onClick:function(){return e.removeOrder(t)},className:"delete"},"X"),r.a.createElement("span",{className:"price"},t.price))});return r.a.createElement("div",{className:e.active===e.index?"table active-table":"table",onClick:function(){return e.changeTable(e.index)}},r.a.createElement("h4",null,e.title),r.a.createElement("ul",null,a),r.a.createElement("nav",null,r.a.createElement("div",{onClick:function(){return e.checkout(t,e.index)},className:"btn"},"Check out"),r.a.createElement("h5",null,t.toFixed(2),"\u20ac")))},y=function(e){var t=e.tables.map(function(t,a){return r.a.createElement(k,{key:a,title:t,index:a,active:e.activeTable,changeTable:e.changeTable,orders:e.orders,removeOrder:e.removeOrder,checkout:e.checkout})});return r.a.createElement("div",{className:"orders"},t)},O=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",price:""},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){return e.props.addSpecial(t,e.state)}},r.a.createElement("input",{type:"text"}),r.a.createElement("input",{type:"number"}),r.a.createElement("button",null,"add")),this.props.workers.map(function(e){return r.a.createElement("li",{key:e},e)}))}}]),t}(r.a.Component),C=Object(l.b)(function(e){return{workers:e.workers}})(O),T=function(){return r.a.createElement("div",null,"Statistics")},w=a(28),j=a.n(w),S=a(29),x=a.n(S),N=a(30),A=a.n(N),B=a(31),D=a.n(B),F=[j.a,x.a,A.a,D.a],J=function(e){var t=e.menu&&e.menu.map(function(t,a){return r.a.createElement("li",{key:a,onClick:function(){return e.addOrder(t)}},t.name,r.a.createElement("span",null,t.price,"\u20ac"))}),a=e.categories.map(function(t,a){return r.a.createElement("div",{key:t,onClick:function(){return e.onCateroryChange(a)},className:e.activeCategory===a?"category active-cat":"category"},r.a.createElement("img",{src:F[a],alt:""}),r.a.createElement("h3",null,t))});return r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"categories"},a),r.a.createElement("ul",{className:"menu-items"},t))},M=a(32),W=a.n(M),G="https://enigmatic-cliffs-25405.herokuapp.com/menu",H=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={navigation:["Orders","Statistics","Settings"],activeTab:0,categories:["drinks","dishes","deserts","special"],tables:["Two person table","Family table","Progers Table","Coffee Table"],activeTable:0,activeCategory:0,orders:[],menu:null,total:0},a.componentDidMount=Object(v.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get(G);case 2:t=e.sent,n=t.data,console.log(n),a.setState({menu:n.menu});case 6:case"end":return e.stop()}},e,this)})),a.addOrder=function(e){var t=!1,n=a.state.orders.map(function(n){return n.name===e.name&&n.table===a.state.activeTable?(t=!0,Object(u.a)({},n,{count:n.count+1})):n});if(t)a.setState({orders:n});else{var r=Object(s.a)(a.state.orders).concat([Object(u.a)({},e,{table:a.state.activeTable,count:1})]);a.setState({orders:r})}},a.addSpecial=function(e,t){e.preventDefault(),console.log(t)},a.checkout=function(e,t){console.log(e);var n=Object(s.a)(a.state.completed);a.setState({orders:a.state.orders.filter(function(t){if(t.table!==e)return t;n.push(t)})}),a.setState({total:a.state.total+t,completed:n})},a.removeOrder=function(e){if(e.count>1){var t=a.state.orders.map(function(t){return t.name===e.name&&t.table===a.state.activeTable?Object(u.a)({},t,{count:t.count-1}):t});a.setState({orders:t})}else{var n=a.state.orders.filter(function(t){if(t.name!==e.name&&t.table===a.state.activeTable)return t});a.setState({orders:n})}},a.activeTabChange=function(e){return a.setState({activeTab:e})},a.activeTableChange=function(e){return a.setState({activeTable:e})},a.onCateroryChange=function(e){return a.setState({activeCategory:e})},a.checkout=function(e,t){a.setState({total:a.state.total+e})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=[r.a.createElement(y,{key:"1",tables:this.state.tables,activeTable:this.state.activeTable,changeTable:this.activeTableChange,orders:this.state.orders,removeOrder:this.removeOrder,checkout:this.checkout}),r.a.createElement(T,{key:"2"}),r.a.createElement(C,{key:"3",addSpecial:this.addSpecial})],t=this.state,a=t.menu,n=t.categories,c=t.activeCategory;return r.a.createElement("div",{className:"App"},r.a.createElement(E,{nav:this.state.navigation,active:this.state.activeTab,changeActive:this.activeTabChange}),r.a.createElement(J,{categories:this.state.categories,activeCategory:this.state.activeCategory,onCateroryChange:this.onCateroryChange,menu:a&&a[n[c]],addOrder:this.addOrder}),e[this.state.activeTab])}}]),t}(n.Component);a(62),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=Object(o.b)({workers:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:["ann","john"]}}),P=Object(o.c)(I);i.a.render(r.a.createElement(l.a,{store:P},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.c5032a9c.chunk.js.map