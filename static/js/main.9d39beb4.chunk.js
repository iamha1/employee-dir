(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),s=a.n(l);a(22),a(23);var o=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"This is the Company's Directory"))},c=a(12),u=a(13),i=a(15),m=a(16),h=(a(24),a(14)),d=a.n(h),E="https://randomuser.me/api/?results=50",f=function(){return console.log(E),d.a.get(E)};a(42);var p=function(e){return r.a.createElement("div",{className:"Search row"},r.a.createElement("input",{type:"text",name:"search",placeholder:"Search",id:"inputBox",value:e.search,onChange:e.handleInputChange}))},v=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={sortOrder:"",results:[],search:""},e.handleInputChange=function(t){if("search"===t.target.name){var a=t.target.value.toLowerCase();e.setState({search:a})}},e.sortByFName=function(){var t=e.state.results.sort((function(e,t){return t.name.first>e.name.first?-1:e.name.first>t.name.first?1:0}));"DESC"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ASC"})):e.setState({sortOrder:"DESC"}),e.setState({results:t})},e.sortByLName=function(){var t=e.state.results.sort((function(e,t){return t.name.last>e.name.last?-1:e.name.last>t.name.last?1:0}));"DESC"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ASC"})):e.setState({sortOrder:"DESC"}),e.setState({results:t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({results:t.data.results}),console.log(e.state.results)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p,{handleInputChange:this.handleInputChange,search:this.state.search}),r.a.createElement("div",{className:"row tableHeadDiv"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Image"),r.a.createElement("th",null,"F-Name ",r.a.createElement("span",{className:"downArrow",onClick:this.sortByFName})),r.a.createElement("th",null,"L-Name ",r.a.createElement("span",{className:"downArrow",onClick:this.sortByLName})),r.a.createElement("th",null,"Phone"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"DOB "))),this.state.results&&this.state.results.map((function(t){return t.name.first.toLowerCase().includes(e.state.search)||t.name.last.toLowerCase().includes(e.state.search)?r.a.createElement("tbody",{key:t.login.uuid},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:t.picture.thumbnail,alt:"thumbnail"})),r.a.createElement("td",null," ",t.name.first," "),r.a.createElement("td",null," ",t.name.last," "),r.a.createElement("td",null,t.phone," "),r.a.createElement("td",null,t.email),r.a.createElement("td",null,t.dob.date.split("T")[0]))):null})))))}}]),a}(r.a.Component);var y=function(){return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.9d39beb4.chunk.js.map