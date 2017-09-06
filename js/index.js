import React from "react";
import ReactDOM from "react-dom";

function formatName(user) {
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
)
// import Two from "./common.js";
// var name = ["john","jay","aiyo"];
// ReactDOM.render(
// 	<Two names={name} />,
// 	document.getElementById('demo')
// )

/*
* <div>
		{
			name.map(function (names) {
				return <div key={names}>hello,{names}</div>
            })
		}
	</div>
* */

// class Greeting extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }
// ReactDOM.render(
// 	<Greeting name="jay" />,
// 	document.body
// )