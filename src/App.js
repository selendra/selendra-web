import './App.css';
import { 
  Home, 
  Wallet, 
  About, 
  MkPlace, 
  Privacy, 
  TermOfUse, 
  Success,
  Failedverified
} from './pages';
import { 
  Header, 
  Notify, 
  Footer, 
  Navigation
} from './components';
import {
  BrowserRouter as
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';

export default function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navigation />
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/wallet' exact component={Wallet} />
          <Route path='/about' exact component={About} />
          <Route path='/mkplace' exact component={MkPlace} />
          <Route path='/privacy' exact component={Privacy} />
          <Route path='/termofuse' exact component={TermOfUse} />
          <Route path='/successfullyverified' exact component={Success} />
          <Route path='/failedverified' exact component={Failedverified} /> 
        </Switch>
        <Notify />
        <Footer />
      </Router>
    </div>
  );
}