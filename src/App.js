import React from 'react';
import {
  BrowserRouter as
  Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/home';
import Nav from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
