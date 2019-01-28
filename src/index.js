import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom';

import './styles.scss';

// import async.js
import('./async.js').then((data) => {
    console.log(data);
});

// home route component
const HomeComponent = (props) => {
    return (
        <h1>Home Component!</h1>
    );
}

// about route component
const AboutComponent = (props) => {
    return (
        <h1>About Component!</h1>
    );
}

// contact route component
const ContactComponent = (props) => {
    return (
        <h1>Contact Component!</h1>
    );
}

// create sample App component
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="menu">
                        <Link exact to="/" activeClassName="active">Home</Link>
                        <Link to="/about" activeClassName="active">About</Link>
                        <Link to="/contact" activeClassName="active">Contact</Link>
                    </div>

                    <Switch>
                        <Route exact path="/" component={HomeComponent} />
                        <Route path="/about" component={AboutComponent} />
                        <Route path="/contact" component={ContactComponent} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

// render inside `app-root` element
ReactDOM.render(<App />, document.getElementById('app-root'));