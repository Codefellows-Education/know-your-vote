(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/flag.24a46296.jpg"},25:function(e,t,n){e.exports=n(53)},30:function(e,t,n){},31:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),l=n(1),i=n(2),u=n(4),p=n(3),s=n(5),m=(n(30),n(21)),h=n.n(m),E=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Every Vote Matters"),r.a.createElement("img",{src:h.a,alt:"flag"}),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Home")))))}}]),t}(r.a.Component),d=(n(31),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("ul",null,r.a.createElement("li",null,"\xa9 2019 ",r.a.createElement("a",{href:"http://lenaeivy.com"},"Lena Eivy"))))}}]),t}(r.a.Component)),v=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("main",null,this.props.children),r.a.createElement(d,null))}}]),t}(r.a.Component),b=n(9),f=n.n(b),w=n(13),y=n(14),g=n.n(y),O=n(6),R=function(e){return console.log("in the actions with ",e),{type:"SHOWREPS",payload:{showReps:e}}},j=function(e){return console.log("payload fromm actions -showing Rep",e),{type:"SHOWREP",payload:{showRep:e}}},S=function(e){return console.log("the rep in actions is ,",e),{type:"CHOSENREP",payload:{rep:e}}},C=(n(47),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleRepClick=function(){var e=Object(w.a)(f.a.mark(function e(t,a){var r,o,c,l;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("my rep id is ",t),"https://know-your-vote-backend.herokuapp.com/",e.next=4,g.a.get("".concat("https://know-your-vote-backend.herokuapp.com/","/loadrep/:id")).query({name:a.name});case 4:r=e.sent,o=r.body.value,c=o.contributors,l=o.voting,console.log("contributors",c,"voting",l),n.props.updateContributors(c),n.props.updateVoting(l),n.props.showRepFunction(!0),n.props.showRepsFunction(!1),n.props.repFunction(a);case 14:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Your representatives are:"),r.a.createElement("ul",{id:"repsList"},this.props.reps.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("h3",{className:"name"},e.name),r.a.createElement("img",{src:e.image_url,alt:e.name}),r.a.createElement("p",{className:"phone"},e.phone),r.a.createElement("p",{className:"political-affilation"},e.party),r.a.createElement("p",{className:"office"},e.office),r.a.createElement("p",null,r.a.createElement("a",{href:e.website_url},"Website")))})))}}]),t}(r.a.Component)),N=Object(O.b)(function(e){return{showRep:e.data.showRep,showReps:e.data.showReps,rep:e.data.rep}},function(e,t){return{showRepFunction:function(t){return e(j(t))},showRepsFunction:function(t){return e(R(t))},repFunction:function(t){return e(S(t))}}})(C),k=(n(48),n(49)),A=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).renderMoneyChart=function(){var e=[],t=[];if(n.props.contributors){for(var a=0;a<n.props.contributors.length;a++)e.push(n.props.contributors[a].name);for(var r=0;r<n.props.contributors.length;r++)t.push(n.props.contributors[r].total);var o=document.getElementById("my-chart-funding");new k(o,{type:"pie",data:{labels:e,datasets:[{label:"# of Likes",data:t,backgroundColor:["rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)","rgba(255, 206, 86, 0.7)","rgba(255, 100, 132, 0.7)","rgba(54, 172, 235, 0.7)","rgba(255, 246, 86, 0.7)","rgba(255, 199, 132, 0.7)","rgba(54, 172, 235, 0.7)","rgba(255, 236, 86, 0.7)","rgba(255, 299, 132, 0.7)","rgba(54, 132, 235, 0.7)","rgba(255, 106, 86, 0.7)","rgba(255, 399, 132, 0.7)","rgba(54, 152, 235, 0.7)","rgba(255, 306, 86, 0.7)"]}]}})}},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e={yes:[],no:[],other:[]};return this.props.voting.map(function(t,n){"yes"===t.position.toLowerCase()?e.yes.push(t.description):"no"===t.position.toLowerCase()?e.no.push(t.description):e.other.push(t.description)}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"myRep"},r.a.createElement("img",{src:this.props.rep.img_url,alt:this.props.rep.name}),r.a.createElement("h3",null,this.props.rep.name),r.a.createElement("button",{onClick:this.renderMoneyChart},"Who Funds My Representative?")),r.a.createElement("canvas",{id:"my-chart-funding"}),r.a.createElement("h2",null,"How Did My Representative Vote?"),r.a.createElement("div",{id:"voting"},r.a.createElement("div",{id:"yes"},r.a.createElement("h3",null,"YES"),e.yes.map(function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement("div",{id:"no"},r.a.createElement("h3",null,"NO"),e.no.map(function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement("div",{id:"other"},r.a.createElement("h3",null,"PRESENT"),e.other.map(function(e,t){return r.a.createElement("p",{key:t},e)}))))}}]),t}(r.a.Component),M=Object(O.b)(function(e){return{showRep:e.data.showRep,showReps:e.data.showReps,rep:e.data.rep}},function(e,t){return{showRepFunction:function(t){return e(j(t))},showRepsFunction:function(t){return e(R(t))},repFunction:function(t){return e(S(t))}}})(A),I=function(e){return e.condition?e.children:null},F=(n(52),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(){var e=Object(w.a)(f.a.mark(function e(t){var a,r,o,c,l;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("in the handle submit"),a=t.target.street.value,r=t.target.city.value,o=t.target.state.value,c="".concat(a," ").concat(r," ").concat(o),"https://know-your-vote-backend.herokuapp.com/",e.next=9,g.a.get("".concat("https://know-your-vote-backend.herokuapp.com/","/representatives")).query({address:c});case 9:l=e.sent,console.log("in handle submit getting this data",l.body),n.props.showRepsFunction(!0),n.props.showSearchFunction(!1),n.setState({reps:l.body}),console.log("the showReps is ",n.props.showReps);case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.handleUpdateVoting=function(e){n.setState({voting:e})},n.handleUpdateContributors=function(e){n.setState({contributors:e})},n.state={reps:[],contributors:[],voting:[]},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{condition:this.props.showSearch},r.a.createElement("section",{className:"deck"},r.a.createElement("form",{id:"form",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Who Are My Representives?"),r.a.createElement("div",{id:"address",className:"card"},r.a.createElement("input",{type:"text",name:"street",id:"street-address",placeholder:"address",required:!0}),r.a.createElement("input",{type:"text",name:"city",id:"city-state-address",placeholder:"city",required:!0}),r.a.createElement("select",{name:"state"},r.a.createElement("option",{value:"AK"},"AK"),r.a.createElement("option",{value:"AL"},"AL"),r.a.createElement("option",{value:"AR"},"AR"),r.a.createElement("option",{value:"AS"},"AS"),r.a.createElement("option",{value:"AZ"},"AZ"),r.a.createElement("option",{value:"CA"},"CA"),r.a.createElement("option",{value:"CO"},"CO"),r.a.createElement("option",{value:"CT"},"CT"),r.a.createElement("option",{value:"DC"},"DC"),r.a.createElement("option",{value:"DE"},"DE"),r.a.createElement("option",{value:"FL"},"FL"),r.a.createElement("option",{value:"GA"},"GA"),r.a.createElement("option",{value:"GU"},"GU"),r.a.createElement("option",{value:"HI"},"HI"),r.a.createElement("option",{value:"IA"},"IA"),r.a.createElement("option",{value:"ID"},"ID"),r.a.createElement("option",{value:"IL"},"IL"),r.a.createElement("option",{value:"IN"},"IN"),r.a.createElement("option",{value:"KS"},"KS"),r.a.createElement("option",{value:"KY"},"KY"),r.a.createElement("option",{value:"LA"},"LA"),r.a.createElement("option",{value:"MA"},"MA"),r.a.createElement("option",{value:"MD"},"MD"),r.a.createElement("option",{value:"ME"},"ME"),r.a.createElement("option",{value:"MI"},"MI"),r.a.createElement("option",{value:"MN"},"MN"),r.a.createElement("option",{value:"MO"},"MO"),r.a.createElement("option",{value:"MS"},"MS"),r.a.createElement("option",{value:"MT"},"MT"),r.a.createElement("option",{value:"NC"},"NC"),r.a.createElement("option",{value:"ND"},"ND"),r.a.createElement("option",{value:"NE"},"NE"),r.a.createElement("option",{value:"NH"},"NH"),r.a.createElement("option",{value:"NJ"},"NJ"),r.a.createElement("option",{value:"NM"},"NM"),r.a.createElement("option",{value:"NV"},"NV"),r.a.createElement("option",{value:"NY"},"NY"),r.a.createElement("option",{value:"OH"},"OH"),r.a.createElement("option",{value:"OK"},"OK"),r.a.createElement("option",{value:"OR"},"OR"),r.a.createElement("option",{value:"PA"},"PA"),r.a.createElement("option",{value:"PR"},"PR"),r.a.createElement("option",{value:"RI"},"RI"),r.a.createElement("option",{value:"SC"},"SC"),r.a.createElement("option",{value:"SD"},"SD"),r.a.createElement("option",{value:"TN"},"TN"),r.a.createElement("option",{value:"TX"},"TX"),r.a.createElement("option",{value:"UT"},"UT"),r.a.createElement("option",{value:"VA"},"VA"),r.a.createElement("option",{value:"VI"},"VI"),r.a.createElement("option",{value:"VT"},"VT"),r.a.createElement("option",{value:"WA"},"WA"),r.a.createElement("option",{value:"WI"},"WI"),r.a.createElement("option",{value:"WV"},"WV"),r.a.createElement("option",{value:"WY"},"WY")),r.a.createElement("button",null,"Find My Reps")))))),r.a.createElement(I,{condition:this.props.showReps},r.a.createElement(N,{updateContributors:this.handleUpdateContributors,updateVoting:this.handleUpdateVoting,reps:this.state.reps})),r.a.createElement(I,{condition:this.props.showRep},r.a.createElement(M,{repID:this.props.repID,contributors:this.state.contributors,voting:this.state.voting})))}}]),t}(r.a.Component)),D=Object(O.b)(function(e){return{showRep:e.data.showRep,showReps:e.data.showReps,repID:e.data.repID,showSearch:e.data.showSearch}},function(e,t){return{showRepFunction:function(t){return e(j(t))},showRepsFunction:function(t){return e(R(t))},showSearchFunction:function(t){return e({type:"SHOWSEARCH",payload:{showSearch:t}})}}})(F),H=n(7),W=n(23),V=n(24),T=n(10),L={showReps:!1,showRep:!1,rep:{},showSearch:!0},P=Object(H.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SHOWREPS":return console.log("in the reduceers with ,",Object(T.a)({},e,{showReps:a.showReps})),Object(T.a)({},e,{showReps:a.showReps});case"SHOWREP":return Object(T.a)({},e,{showRep:a.showRep});case"CHOSENREP":return Object(T.a)({},e,{rep:a.rep});case"SHOWSEARCH":return Object(T.a)({},e,{showSearch:a.showSearch});default:return e}}}),x=function(){return Object(H.createStore)(P,Object(W.composeWithDevTools)(Object(H.applyMiddleware)(V.a)))}(),K=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{store:x},r.a.createElement("div",{className:"App"},r.a.createElement(v,null,r.a.createElement(D,null))))}}]),t}(a.Component);c.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.0da36d8b.chunk.js.map