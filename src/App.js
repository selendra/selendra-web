import React from 'react';
import './App.css';
import './styles/app.css';
import 'antd/dist/antd.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="text-center"> 
            <img src={require('./assets/Selendra.png')} alt="logo" className="w-12 ml-4 logo" />
            <span className="block">Coming Soon!!</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
