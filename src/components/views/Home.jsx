import React from 'react';
// import { Link } from 'react-router-dom';
import { trelloAPIKey } from '../../../config.json';
import './Home.scss';

const Home = () => (
  <div className="page-home">
    <div>
      <img src="assets/burrito.png" alt="Burrito" />
    </div>
    <div className="login-wrapper">
      <a
        href={`https://trello.com/1/authorize?expiration=never&name=Burrito&key=${trelloAPIKey}&return_url=${
          window.location.href
        }`}
      >
        Login with Trello
      </a>
    </div>
  </div>
);

export default Home;
