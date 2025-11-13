import React from 'react';
import ReactDOM from 'react-dom';

class Student extends React.component {
    render() {
        return <h2> Hi I am a codingal student</h2>
    }
}

ReactDOM.render(<Student />, document.getElementById ('root'));