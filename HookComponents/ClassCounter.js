// Handling state update using Class - increment and decrement 
import React, { Component } from 'react'

class SimpleClass1 extends Component {

    constructor() {
        super()
        this.state = {
            counter: 4
        }
    }
    incrementClassStateCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        }, () => { console.log("inside setstate", this.state.counter) }
        )
        console.log("outside setstate", this.state.counter)
    }
    decrementClassStateCounter = () => {
        this.setState(
            {
                counter: this.state.counter - 1
            }
        )

    }



    directdecrementClassStateCounter = () => {
        // Directly Changing state.. but not rendered
        this.state.counter = this.state.counter - 1
    }
    render() {
        return (
            <div>


                <button onClick={this.incrementClassStateCounter} >+ C </button>

..............
                <button onClick={this.decrementClassStateCounter} >- C </button>
........
                <button onClick={this.directdecrementClassStateCounter} >- C .. </button>

                Class state counter value {this.state.counter}  ...

                {console.log("withinrender", this.state.counter)}


            </div>
        )
    }
}
export default SimpleClass1 