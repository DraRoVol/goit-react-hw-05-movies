"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{983:function(e,n,t){t.r(n);var r=t(439),i=t(791),c=t(689),o=t(87),a=t(184);n.default=function(){var e=(0,i.useState)([]),n=(0,r.Z)(e,2),t=n[0],u=n[1],h=(0,c.TH)();return(0,i.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODNhZWU2YjYwMWRjNTY1NmY0ODQ1ODgzZmYyMDVlMyIsInN1YiI6IjY0NmY4YzY5YzVhZGE1MDBhODJkODAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcK5msQXw_EpiSZxf4jlq1LUT05Y42famLe5sWKl8SY"}}).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return e.map((function(e){return[e.id,e.title||e.name]}))})).then((function(e){return u(e)})).catch((function(e){return console.error(e)}))})),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Trending today"}),(0,a.jsx)("ul",{children:t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(o.rU,{to:"movie/".concat(e[0]),state:{from:h},children:e[1]})},e[0])}))})]})}}}]);
//# sourceMappingURL=983.21febd0a.chunk.js.map