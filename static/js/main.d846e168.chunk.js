(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(62)},42:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(25),c=n.n(r),l=n(15),i=n(4),d=n(5),s=n(7),u=n(6),p=n(8),m=n(10),h=n(9),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).getStyle=function(){return{background:"#eee",padding:"10px",borderBottom:"1px dotted #ccc",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",checked:this.props.todo.completed?"checked":"",onChange:this.props.markComplete.bind(this,t)})," ",n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:f},"x")),a.a.createElement("span",null,t))}}]),t}(o.Component),f={background:"red",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},y=b,E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return a.a.createElement(y,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})})}}]),t}(o.Component);var g={background:"#333",color:"white",textAlign:"center",padding:"10px"},j={color:"white",textDecoration:"none"},v=function(){return a.a.createElement("header",{style:g},a.a.createElement("h1",null,"\u30bf\u30b9\u30af\u30ea\u30b9\u30c8"),a.a.createElement(m.b,{style:j,to:"/"},"Home"),"|",a.a.createElement(m.b,{style:j,to:"/about"},"About"))},O=n(28),k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={title:""},n.onChange=function(e){n.setState(Object(O.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{style:{display:"flex"},onSubmit:this.onSubmit},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo ...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"\u8ffd\u52a0",className:"btn",style:{flex:"1"}}))}}]),t}(o.Component);var x=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"\u30bf\u30b9\u30af\u30ea\u30b9\u30c8 ver.1.0.0"))},C=(n(42),n(11)),w=n.n(C),S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[]},n.markComplete=function(e){console.log("id :",e),n.setState({todos:n.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},n.delTodo=function(e){w.a.delete("https://jsonplaceholder.typicode.com/todos".concat(e)).then(function(t){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(t){return t.id!==e}))})})},n.addTodo=function(e){w.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then(function(e){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[e.data])})})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(t){return e.setState({todos:t.data})})}},{key:"render",value:function(){var e=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(v,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{addTodo:e.addTodo}),a.a.createElement(E,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),a.a.createElement(h.a,{path:"/about",component:x}))))}}]),t}(o.Component);c.a.render(a.a.createElement(S,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d846e168.chunk.js.map