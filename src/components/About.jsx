import React from 'react';
import { Link } from 'react-router-dom';

import './About.scss';

const aboutPage = () => (
  <div className="page-about">
    <article>
      <img src="assets/burrito.png" alt="Burrito" />
      <h2>About Burrito</h2>
      <p>
        {"Trello's"} mascot, Taco, sure is{' '}
        <span style={{ 'border-bottom': 'dotted 1px #333' }} title="...said no one, ever.">
          helpful.
        </span>{' '}
        This app takes some of {"Taco's"} most useful ingredients and wraps them up in a {'"get things done"'} shell to
        make bring sanity to your insane trello workflow.
      </p>
      <p className="credit">
        Created by{' '}
        <Link to="https://codyogden.com" href="https://codyogden.com" target="_blank">
          Cody Ogden
        </Link>
      </p>
    </article>
  </div>
);

export default aboutPage;
