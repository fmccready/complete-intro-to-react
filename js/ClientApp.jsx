import React from '../node_modules/react';
import { render } from '../node_modules/react-dom';
import { HashRouter, Route } from '../node_modules/react-router-dom';
import Landing from './Landing';

const App = () => (
  <HashRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
    </div>
  </HashRouter>
);

render(<App />, document.getElementById('app'));
