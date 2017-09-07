import React from "react";
import ReactDOM from "react-dom";
import Remarkable from "remarkable"
import {BrowserRouter, HashRouter, Route,Link, Redirect, hashHistory} from 'react-router-dom';

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div>"I am App"</div>
    }
}

class Login extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div>"I am Login"</div>
    }
}

ReactDOM.render(
    <HashRouter history={hashHistory}>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Link to="/login">login</Link>
        </div>
    </HashRouter>,
    document.getElementById('demo')
)
console.log(BrowserRouter)
/*class MarkdownEditor extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {value: "Type some *markdown* here!"}
	}
	
	handleChange(e) {
		this.setState({value:e.target.value});
	}
	
	getRawMarkup() {
		var md = new Remarkable();
		return {
			__html:md.render(this.state.value)
		}
	}
	
	render() {
		return (
			<div>
				<h3>Input</h3>
				<textarea
					onChange = {this.handleChange}
					defaultValue = {this.state.value} />
				<h3>Ouput</h3>
				<div
					className="content"
					dangerouslySetInnerHTML={this.getRawMarkup()}
				/>
			</div>
		)
	}
}

ReactDOM.render(
	<MarkdownEditor />,
	document.getElementById("demo")
)*/
/*class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			items:[],
			text: ""
		}
	}
	
	render() {
		return (
			<div>
				<h3>todo</h3>
				<TodoList items = {this.state.items} />
				<form onSubmit = {this.handleSubmit}>
					<input onChange = {this.handleChange} value = {this.state.text} />
					<button>{"Add #" + (this.state.items.length + 1)}</button>
				</form>
			</div>
		)
	}
					
	handleChange(e) {
		this.setState({text: e.target.value});
	}
	
	handleSubmit(e) {
		e.preventDefault();
		var newItem = {
			text:this.state.text,
			id:Date.now()
		};
		console.log(this.state)
		this.setState((prevState) => ({
			items: prevState.items.concat(newItem),
			text:''
		}));
		console.log(this.state)
	}
}

class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.items.map(item => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		)
	}
}

ReactDOM.render(
	<TodoApp />,
	document.getElementById('demo')
)*/

/*class Timer extends React.Component {
	constructor(props) {
		console.log(1)
		super(props);
		this.state = {secondsElapsed: 0};
	}
	
	tick() {
		console.log(2)
		this.setState((prevState) => ({
			secondsElapsed:prevState.secondsElapsed + 1
		}));
	}
	
	componentDidMount() {//组件渲染之后调用的方法
		console.log(3)
		this.interval = setInterval(() => this.tick(), 1000);
	}
	
	componentWillUnmount() {
		console.log(4)
		clearInterval(this.interval);
	}
	
	
	render() {
		console.log(5)
		return (
			<div>Seconds Elapsed: {this.state.secondsElapsed}</div>
		);
	}
}

ReactDOM.render(
	<Timer />,
	document.getElementById("demo")
)*/

/*class HelloMessage extends React.Component {
	render() {
		return <div>hello {this.props.name}</div>
	}
}
ReactDOM.render(
	<HelloMessage name="aiyov"/>,
	document.getElementById("demo")
)*/

/*function formatName(user) {
	return user.firstName +' '+user.lastName
}
const user = {
	"firstName":"aiyo",
	"lastName":"bucuo"
}
const ele = (
	<h1>{formatName(user)}</h1>
)
ReactDOM.render(
	ele,
    document.getElementById('demo')
)*/

   /*import Two from "./common.js";
   var name = ["john","jay","aiyo"];
   ReactDOM.render(
   	<Two names={name} />,
   	document.getElementById('demo')
   )


    <div>
		{
			name.map(function (names) {
				return <div key={names}>hello,{names}</div>
            })
		}
	</div>
 

   class Greeting extends React.Component {
       render() {
           return <h1>Hello, {this.props.name}</h1>;
       }
   }
   ReactDOM.render(
   	<Greeting name="jay" />,
   	document.body
   )*/