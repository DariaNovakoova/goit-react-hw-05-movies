"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[79],{148:function(e,n,a){a.d(n,{Hg:function(){return i},au:function(){return u},fh:function(){return c},q5:function(){return s},z1:function(){return o}});var t=a(294).Z.create({baseURL:"https://api.themoviedb.org/3"}),r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGFjNzI1MTA4Mjc2ZDkyM2RlMjQzOTE4NzUwNjJjNSIsInN1YiI6IjY1YjUwMjhhNGYzM2FkMDE3YTBiYTM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVikyztACIvDZrPSWL56RBOBtNnjH3jDZKwNSqkZN54"}},i=function(){return t.get("/trending/movie/day?language=en-US&api_key=8a820d540ebb6da7f77b0e9a899200aa",r)},c=function(e){return t.get("/movie/".concat(e,"?language=en-US&api_key=8a820d540ebb6da7f77b0e9a899200aa"),r)},u=function(e){return t.get("/movie/".concat(e,"/credits?language=en-US&api_key=8a820d540ebb6da7f77b0e9a899200aa"),r)},s=function(e){return t.get("/movie/".concat(e,"/reviews?language=en-US&api_key=8a820d540ebb6da7f77b0e9a899200aa"),r)},o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t.get("/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=").concat(n,"&api_key=8a820d540ebb6da7f77b0e9a899200aa"),r)}},269:function(e,n,a){a.d(n,{Z:function(){return u}});var t={container:"movies_container__8AMFc",list:"movies_list__qGO0R"},r=a(689),i=a(87),c=a(184),u=function(e){var n=e.items,a=(0,r.TH)(),u=n.map((function(e){var n=e.id,r=e.title;return(0,c.jsx)("li",{className:t.item,children:(0,c.jsx)(i.rU,{className:t.link,to:"/movies/".concat(n),state:{from:a},children:r})},n)}));return(0,c.jsx)("div",{className:t.container,children:(0,c.jsx)("ul",{className:t.list,children:u})})}},79:function(e,n,a){a.r(n),a.d(n,{default:function(){return g}});var t="home-page_container__RaHax",r="home-page_title__fc3KH",i=a(861),c=a(439),u=a(757),s=a.n(u),o="home_error__E+m42",l=a(791),f=a(148),d=a(119),h=a(269),m=a(184),v=function(){var e=(0,l.useState)([]),n=(0,c.Z)(e,2),a=n[0],t=n[1],r=(0,l.useState)(!1),u=(0,c.Z)(r,2),v=u[0],g=u[1],p=(0,l.useState)(null),_=(0,c.Z)(p,2),j=_[0],b=_[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,i.Z)(s().mark((function e(){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,(0,f.Hg)();case 4:n=e.sent,a=n.data.results,t(null!==a&&void 0!==a&&a.length?a:[]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),b(e.t0.message);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,m.jsxs)(m.Fragment,{children:[j&&(0,m.jsx)("p",{className:o,children:j}),v&&(0,m.jsx)(d.Z,{}),Boolean(a.length)&&(0,m.jsx)(h.Z,{items:a})]})},g=function(){return(0,m.jsxs)("div",{className:t,children:[(0,m.jsx)("h1",{className:r,children:"Trending today"}),(0,m.jsx)(v,{})]})}}}]);
//# sourceMappingURL=79.f1bd205b.chunk.js.map