import React, {Component} from 'react';
import '../styles/header.css';
import { ReactComponent as Menu } from '../assets/menu.svg';
import { ReactComponent as Down } from '../assets/arrowdown.svg';
import Sidebar from '../components/Sidebar.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };  
    this.handleNav = this.handleNav.bind(this);
  }
  handleNav = () => {
    this.setState((prevState) => 
    {
      return { active: !prevState.active }
    });
  }
  render () {
    let sidebar;
    if(this.state.active) {
      sidebar = <Sidebar />
    }
    return (
      <div className="header bg-white lg:px-20">
        <div className="hidden md:block">
          <div className="grid grid-cols-3 pt-4"> 
            <div>
              <img src={require('../assets/Selendra.png')} alt="logo" className="w-12"/>
            </div>
            <div className="flex items-center">
              <span className="font-semibold flex items-center cursor-pointer">
                Company <Down/>
              </span>
              <span className="font-semibold flex items-center cursor-pointer ml-2">
                Digital Asset <Down/>
              </span>
              <span className="font-semibold flex items-center cursor-pointer ml-2">
                Product <Down/>
              </span>
            </div>
            <div className="flex">
              <button className="btn text-orange-600 w-32 block">Login</button>
              <button className="btn text-orange-600 lg:ml-2 w-32 border-orange-600 rounded-full md:border-2 hover:bg-orange-600 hover:text-white transition ease-in-out duration-500">Sign Up</button>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="md:hidden">
          <div className="flex">
            <button onClick={this.handleNav}>
              <Menu />
            </button>
            <div className="flex justify-center w-full pt-4">
              <img src={require('../assets/Selendra.png')} alt="selendra" className="w-12 mr-8"/>
            </div>
          </div>
          { sidebar }
        </div>
      </div>
    )
  }
}

export default Header;