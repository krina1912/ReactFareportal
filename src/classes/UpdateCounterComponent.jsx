import React from 'react';

export default class UpdateCounterComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 1
        }
    }
    
    updateCounter = () => {
        this.state.counter = this.state.counter + 1;
    }

    render() {
        return (
            <div>
                <h1>The Counter Value is: {this.state.counter}</h1>
                <input type="button" value="Update Counter" onClick={this.updateCounter} />
            </div>
        )
    }
}