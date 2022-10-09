import React, { Component } from "react";
class message extends Component{
    constructor(){
        super()
        this.state={
            message : "this is the First text"
        }
    }
    changeVal(){
        this.setState({message : "this is the modified text"}
        )
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeVal()}> Click this to change</button>
            </div>
            
        )
    }
}
export default message;