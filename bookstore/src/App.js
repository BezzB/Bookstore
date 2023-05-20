import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
  </BrowserRouter>
);

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const Categories = () => (
  <div>
    <h1>Categories</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App
