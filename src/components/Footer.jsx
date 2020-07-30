import React, { Component } from 'react';

import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Medium } from '../assets/medium.svg';
import { ReactComponent as Telegram } from '../assets/telegram.svg';

class Footer extends Component {
  render() {
    return (
      <div className="h-64 bg-white hidden md:block">
        <div className="grid grid-cols-4 px-20 py-4">
          <div>
            <p className="font-bold text-2xl mb-4">Company</p>
            <ul>
              <li className="py-3 hover:text-gray-700">
                <button>About Selendra</button>
              </li>
              <li className="py-3 hover:text-gray-700">
                <button>Privacy & Policy</button>
              </li>
              <li className="py-3 hover:text-gray-700">
                <button>Term Of Use</button>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-2xl mb-4">Solution</p>
            <ul>
              <li className="py-3 hover:text-gray-700">
                <button>Customer Loyalty</button>
              </li>
              <li className="py-3 hover:text-gray-700">
                <button>Crowdfunding And Vested</button>
              </li>
              <li className="py-3 hover:text-gray-700">
                <button>API For Payment Solution</button>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-2xl mb-4">Developers</p>
            <ul>
              <li className="py-3 hover:text-gray-700">
                <button>Documentation</button>
              </li>
              <li className="py-3 hover:text-gray-700">
                <button>Github</button>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-2xl mb-4">Connect With Us</p>
            <div className="grid grid-rows-2 py-3">
              <div className="flex justify-center">
                <button>
                  <Facebook />
                </button>
                <button>
                  <Telegram />
                </button>
              </div>
              <div className="flex justify-center mt-6">
                <button>
                  <Medium />
                </button>
                <button>
                  <Linkedin />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;