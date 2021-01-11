import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: this.props.counter
        }
    }
    

    clickHandler(){
        this.setState ({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={() => this.clickHandler()}>Click</button>
            </div>
        )
    }
}

export default Counter
