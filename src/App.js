import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={""}>
          <Switch>
            <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default App;
