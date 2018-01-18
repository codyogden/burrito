import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faThLarge from '@fortawesome/fontawesome-pro-light/faThLarge';
import faComment from '@fortawesome/fontawesome-pro-light/faComment';
import faBell from '@fortawesome/fontawesome-pro-light/faBell';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

import LoginCTA from '../components/LoginCTA';
import './HomePage.scss';

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <main className="page-about">
        <section className="slide-1">
          <div>
            <h2>Burrito</h2>
            <p>
              Burrito brings together your cards from Trello, sprinkles in your favorite ingredients, and serves them
              wrapped up in a warm {`"get things done"`} shell. Guac is extra, of course.
            </p>
          </div>
          <div>
            <img className="graphic-main" src="/assets/burrito.png" alt="Drawing of Burrito" />
          </div>
        </section>
        <section className="slide-2">
          <ul className="feature-banner">
            <li>
              <FontAwesomeIcon icon={faThLarge} color="#FAFAFA" size="4x" />
              <p>
                Access all the cards assigned<br /> to you in one place.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} color="#FAFAFA" size="4x" />
              <p>
                Leave comments and assign<br /> others right in Burrito.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faBell} color="#FAFAFA" size="4x" />
              <p>
                Only see important notifications<br /> that involve your cards.
              </p>
            </li>
          </ul>
        </section>
        <LoginCTA />
        <section className="slide-3">
          <div>
            <FontAwesomeIcon icon={faGithub} size="4x" />
            <h3>Free and Open Source</h3>
            <p>
              Burrito is a free and open source software project by{' '}
              <a href="https://codyogden.com" title="Cody Ogden - Software Engineer">
                Cody Ogden
              </a>. You can find and contribute to the repository on{' '}
              <a href="https://github.com/codyogden/burrito" title="Burrito on GitHub">
                Github
              </a>.
            </p>
          </div>
        </section>
      </main>
    );
  }
}
