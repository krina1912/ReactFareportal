import { Component } from "react";

export default class ArrowFunctionComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "TechnoFunnel"
        }
        this.alertData = this.alertData.bind(this)
    }
    
    alertData(inputValue) {
        alert(this.state.userName + " " + inputValue);
    }
    
    render() {
        return (
            <div>
                <input type="button" onClick={this.alertData} value="Click for Alert" />
            </div>
        )
    }
}