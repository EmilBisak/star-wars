(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(48)},20:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(14),r=n.n(o),c=(n(20),n(2)),i=n(3),p=n(5),u=n(4),s=n(6),h=(n(22),n(24),function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Star Wars App"))}),m=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={people:[],counter:0},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(console.log("NextProps",e.people.length),console.log("Props",this.props.people.length),e.people.length!==this.props.people.length){var t=e.people;this.setState({people:t}),console.log(t)}}},{key:"render",value:function(){var e=this.state.people;console.log("State MAIN",this.state);var t=e.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("h2",null,"name: ",e.name," "),l.a.createElement("p",null,"eye color: ",e.eye_color," "),l.a.createElement("p",null,"height: ",e.height," "),l.a.createElement("p",null,"hair color: ",e.hair_color," "),l.a.createElement("p",null,"mass: ",e.mass," "))});return l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Search",style:{width:"50%",margin:"0 auto",display:"table"}}),l.a.createElement("ul",null,t))}}]),t}(a.Component),f=(n(26),function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.people.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("h2",null,"eye color: ",e.eye_color," "))});return l.a.createElement("footer",null,l.a.createElement("small",null,"copyright \xa9 Emil 2018"),l.a.createElement("ul",null,e))}}]),t}(a.Component)),E=n(28),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={people:[]},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.get("https://swapi.co/api/people/").then(function(e){return e}).then(function(t){e.setState({people:t.data.results})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(m,{people:this.state.people}),l.a.createElement(f,{people:this.state.people}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.a438be54.chunk.js.map