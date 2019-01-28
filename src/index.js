import React from 'react';
import ReactDOM from 'react-dom';

// create sample App component
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>Hello React!</h1>
        );
    }
}

// render inside `app-root` element
ReactDOM.render(<App />, document.getElementById('app-root'));