(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),c=a.n(s),o=a(7),i=a(1),m=a(15),l=a.n(m),u=a(29),p=a(10),v=a(11),E=a(13),d=a(12),f=a(30),y=a.n(f);a(55);var h=function(e){e.id;var t=e.year,a=e.title,n=e.summary,s=e.poster,c=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(o.b,{to:{pathname:"/movie-detail",state:{year:t,title:a,summary:n,poster:s,genres:c}}},r.a.createElement("img",{src:s,alt:a}),r.a.createElement("div",{className:"movie-info"},r.a.createElement("h3",{className:"title"},a),r.a.createElement("span",{className:"year"},t),r.a.createElement("p",{className:"summary"},n.slice(0,130),"..."),r.a.createElement("p",{className:"genres"},c.map((function(e,t){return r.a.createElement("span",{key:t,className:"tag"}," #",e," ")}))))))},g=(a(61),function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movie-area"},a.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(62);var N=function(e){return r.a.createElement("div",{class:"about-container"},r.a.createElement("span",null,"About this page: Movie list"))},b=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("div",{className:"movie detail"},r.a.createElement("img",{src:e.state.poster,alt:e.state.title}),r.a.createElement("div",{className:"movie-info"},r.a.createElement("h3",{className:"title"},e.state.title),r.a.createElement("span",{className:"year"},e.state.year),r.a.createElement("p",{className:"summary"},e.state.summary),r.a.createElement("p",{className:"genres"},e.state.genres.map((function(e,t){return r.a.createElement("span",{key:t,className:"tag"}," #",e," ")}))))):null}}]),a}(r.a.Component);a(63);var j=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:{pathname:"/about",state:{fromNavigation:!0}}},"About"))};a(64);var k=function(){return r.a.createElement(o.a,null,r.a.createElement(j,null),r.a.createElement(i.a,{path:"/",exact:!0,component:g})," ",r.a.createElement(i.a,{path:"/about",component:N}),r.a.createElement(i.a,{path:"/movie-detail",component:b}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.84ad8ca4.chunk.js.map