// A Stateful Component
// whenever state changes, the render function is called again
import React from 'react';

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: 0
        };
    }
    tick(){
        // in setState, a function can be passed with state as a parameter -> state.seconds
        // or we can directly access the state -> this.state.seconds
        this.setState(state=> ({
            seconds: state.seconds+1
        }));
    }
    // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
    componentDidMount(){
        // The setInterval() method calls a function at specified intervals (in milliseconds).
        // The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
        this.interval = setInterval(() => this.tick(), 1000);
    }
    // componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return(
            <div>
                Seconds: {this.state.seconds}
            </div>
        );
    }
}

ReactDom.render(
    <Timer />,
    document.getElementById('timer-example')
);