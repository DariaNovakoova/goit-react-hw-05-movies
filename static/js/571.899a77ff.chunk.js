"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[571],{148:function(e,n,a){a.d(n,{Hg:function(){return i},au:function(){return u},fh:function(){return c},q5:function(){return s},z1:function(){return o}});var t=a(294).Z.create({baseURL:"https://api.themoviedb.org/3"}),r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGFjNzI1MTA4Mjc2ZDkyM2RlMjQzOTE4NzUwNjJjNSIsInN1YiI6IjY1YjUwMjhhNGYzM2FkMDE3YTBiYTM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVikyztACIvDZrPSWL56RBOBtNnjH3jDZKwNSqkZN54"}},i=function(){return t.get("/trending/movie/day?language=en-US&api_key=8a820d540ebb6da7f77b0e9a899200aa",r)},c=function(e){return t.get("/movie/".concat(e,"?language=en-US&api_key=8a820d540ebb6da7f77b0e9a899200aa"),r)},u=function(e){return t.get("/movie/".concat(e,"/credits?language=en-US&api_key=8a820d540ebb6da7f77b0e9a899200aa"),r)},s=function(e){return t.get("/movie/".concat(e,"/reviews?language=en-US&api_key=8a820d540ebb6da7f77b0e9a899200aa"),r)},o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t.get("/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=").concat(n,"&api_key=8a820d540ebb6da7f77b0e9a899200aa"),r)}},571:function(e,n,a){a.r(n),a.d(n,{default:function(){return p}});var t=a(861),r=a(439),i=a(757),c=a.n(i),u="reviews_list__BCK8P",s="reviews_title__nRRiP",o="reviews_info__CwnPe",l=a(148),d=a(689),f=a(791),h=a(184),p=function(){var e=(0,f.useState)([]),n=(0,r.Z)(e,2),a=n[0],i=n[1],p=(0,f.useState)(!1),g=(0,r.Z)(p,2),v=g[0],b=g[1],j=(0,f.useState)(null),m=(0,r.Z)(j,2),_=m[0],k=m[1],w=(0,d.UO)().id;(0,f.useEffect)((function(){function e(){return(e=(0,t.Z)(c().mark((function e(){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,(0,l.q5)(w);case 4:n=e.sent,a=n.data,i(a.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),k(e.t0.message);case 12:return e.prev=12,b(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[w]);var y=a.map((function(e){var n=e.id,a=e.author,t=e.content;return(0,h.jsxs)("li",{children:[(0,h.jsx)("h4",{className:s,children:a}),(0,h.jsx)("p",{children:t})]},n)})),N=Boolean(a.length);return(0,h.jsxs)(h.Fragment,{children:[v&&(0,h.jsx)("p",{children:"...Loading"}),_&&(0,h.jsx)("p",{children:_}),N&&(0,h.jsx)("ul",{className:u,children:y})||(0,h.jsx)("p",{className:o,children:"There are no reviews"})]})}}}]);
//# sourceMappingURL=571.899a77ff.chunk.js.map