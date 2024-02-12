import { Component } from "react";

export default class UpdateClockComponent extends Component {
    returnCurrentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }
    userName = "Mayank Gupta";
    
    constructor(props) {
        debugger;
        super(props);
        this.state = {
            currentTime: this.returnCurrentTime(),
            counter: 0
        }
        
        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)
        
        setInterval(() => {
            this.setState({
                currentTime: this.returnCurrentTime()
            })
        }, 3000)
    }
     
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    
    incrementCounter() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    
      
    render() {
        return (
            <div>
                <h1>The Current Time for {this.userName} is {this.state.currentTime}</h1>
                <h2>Props Value: {this.props.userName} {this.state.counter}</h2>
                <input type="button" value="Click to Update Counter" onClick={this.incrementCounter} />
            </div>
        )
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentTime: this.returnCurrentTime()
            })
        }, 1000);
    }
}