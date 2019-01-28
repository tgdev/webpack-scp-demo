import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  NavLink as Link,
  Route
} from 'react-router-dom';

import LoadingComponent from './components/LoadingComponent';

import './styles.scss';

// lazy load page components
const AsyncHomeComponent = lazy(() => import('./components/HomeComponent'));
const AsyncAboutComponent = lazy(() => import('./components/AboutComponent'));
const AsyncContactComponent = lazy(() =>
  import('./components/ContactComponent')
);

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
            <Link exact to="/" activeClassName="active">
              Home
            </Link>
            <Link to="/about" activeClassName="active">
              About
            </Link>
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
          </div>

          <Suspense fallback={LoadingComponent}>
            <Switch>
              <Route exact path="/" component={AsyncHomeComponent} />
              <Route path="/about" component={AsyncAboutComponent} />
              <Route path="/contact" component={AsyncContactComponent} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

// render inside `app-root` element
ReactDOM.render(<App />, document.getElementById('app-root'));
