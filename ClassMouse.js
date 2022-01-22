import react, { Component } from 'react'

// run effect only once  using class
// Component Didmount & Component will unmount 
class ClassMouse extends Component {
    constructor(props) {
        super(props)
        this.state ={
            X:0,Y:0
        }

    }
    logMousePosition=e=>
    {
        this.setState({X:e.clientX, Y:e.clientY})
    }
    componentDidMount() {
        window.addEventListener('mousemove',this.logMousePosition)
     }

     componentWillUnmount(){
window.removeEventListener('mousemove',this.logMousePosition)
     }
    render() {
        return (
            <div>
                X-{this.state.X}   Y{this.state.Y}
            </div>
            
        )
    }

}

export default ClassMouse