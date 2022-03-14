// A Simple Component
import React from 'react';

class HelloMessage extends React.Component {
    // render method takes input data and returns what to display
    render(){
        return (
            <div>
                {/* input data passed into the component can be accessed by render via this.props */}
                Hello {this.props.name}
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name="Harsh" />, // calling the component and passing the prop
    document.getElementById('hello-example')
);