import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faListAlt from '@fortawesome/fontawesome-free-regular/faListAlt';
import faComment from '@fortawesome/fontawesome-free-regular/faComment';
import faBell from '@fortawesome/fontawesome-free-regular/faBell';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

import LoginButton from '../components/LoginButton';
import LoginCTA from '../components/LoginCTA';
import styles from './HomePage.scss';

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <main className={styles.HomePage}>
        <section className={styles.hero}>
          <div>
            <h2>Burrito</h2>
            <p>
              Burrito brings your cards from Trello together, sprinkles in your favorite ingredients, and serves them
              wrapped up in a warm {`"get things done"`} shell. Guac is extra, of course.
            </p>
            <div className={styles.heroActions}>
              <LoginButton />
            </div>
          </div>
          <div>
            <img className={styles.GraphicMain} src="/assets/burrito.png" alt="Drawing of Burrito" />
          </div>
        </section>
        <section className={styles.featuresBannerContainer}>
          <ul className={styles.featuresBanner}>
            <li>
              <FontAwesomeIcon icon={faListAlt} color="#FAFAFA" size="4x" />
              <p>
                See your assigned cards<br /> organized in one place.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} color="#FAFAFA" size="4x" />
              <p>
                Collaborate with others through<br /> comments and assignments.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faBell} color="#FAFAFA" size="4x" />
              <p>
                Focus on {`what's`} important<br /> with filtered notifications.<br />
              </p>
            </li>
          </ul>
        </section>
        <LoginCTA />
        <section className={styles.openSourceBanner}>
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
        <footer className={styles.footerHome}>
          <a href="https://github.com/codyogden/burrito" title="Burrito on Github">
            Github
          </a>{' '}
          -{' '}
          <a href="https://github.com/codyogden/burrito/wiki" title="Wiki">
            Wiki
          </a>{' '}
          -{' '}
          <a href="https://github.com/codyogden/burrito/wiki/Privacy" title="Privacy Document">
            Privacy
          </a>{' '}
          -{' '}
          <a href="https://github.com/codyogden/burrito/blob/master/LICENSE" title="Burrito Software License">
            License
          </a>
        </footer>
      </main>
    );
  }
}
