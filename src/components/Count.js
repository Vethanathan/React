import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }

    incerement(){
        this.setState({count :this.state.count +1})
    }
    reset(){
        this.setState({count : 0})
    }
  render() {
    return (
        <div>
            <div>Count - {this.state.count}</div>
            <button onClick={() => this.incerement()}> Count </button>
            <button onClick={() => this.reset()}> Reset </button>
            <p1> hello </p1>

        </div>
    )
  }
}

export default Count