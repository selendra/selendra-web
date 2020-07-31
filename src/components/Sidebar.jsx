import React, {Component} from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="bg-white">
        <ul className="px-4">
          <li className="btn flex justify-end py-2">
            <button className="font-bold">Home</button> 
          </li>
          <li className="btn flex justify-end py-2">
            <button className="font-bold">About</button>
          </li>
          <li className="btn flex justify-end py-2">
            <button className="font-bold">Privacy & Policy</button>
          </li>
          <li className="btn flex justify-end py-2">
            <button className="font-bold">Term Of Use</button>
          </li>
          <li className="btn flex justify-end py-2">
            <button className="font-bold">Blog</button>
          </li>
          <li className="btn text-orange-500 flex justify-end py-2">
            <button className="font-bold">LogIn</button>
          </li>
          <li className="btn text-orange-500 rounded  flex justify-end py-2">
            <button className="font-bold">Sign Up</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;