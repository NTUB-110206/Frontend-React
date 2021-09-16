import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import './scss/style.scss';
// import './css/bootstrap.min.css';
// // import './css/owl.carousel.min.css';
// import './css/slick.css';
// import './css/magnific-popup.css';
// import './css/animate.css';
// import './css/style.css';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));


class App extends Component {

  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
