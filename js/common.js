import React from  "react";
import ReactDOM from "react-dom";

class Two extends React.Component{
    render() {
        return <div>hi,{this.props.names}</div>
    }
}
module.exports = Two;