import React from 'react';
import './App.css';
import Home from './pages/home';
import Header from './components/Header';
import Footer from './components/Footer';
import Notify from './components/Notify';
import Wallet from './pages/wallet';
import About from './pages/about';
import Successfullyverified from './pages/successfullyverified';
import {
  BrowserRouter as
  Router,
  Route,
  Switch
} from 'react-router-dom';
import Termofuse from './pages/termofuse';
import Privacy from './pages/privacy&policy';
import ScrollToTop from './utils/ScrollToTop';
import Failedverified from './pages/failedverified';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop/>
        <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/wallet' exact component={Wallet} />
            <Route path='/about' exact component={About} />
            <Route path='/termofuse' exact component={Termofuse} />
            <Route path='/privacy' exact component={Privacy} />
            <Route path='/successfullyverified' exact component={Successfullyverified} />
            <Route path='/failedverified' exact component={Failedverified} />
          </Switch>
        <Notify />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
