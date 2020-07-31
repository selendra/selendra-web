import React from 'react';
import './App.css';
import './styles/app.css';
import 'antd/dist/antd.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Index from './components/Index.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Index />
      <Footer />
    </div>
  );
}

export default App;
