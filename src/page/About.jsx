import React, { Component } from 'react';
import styled from 'styled-components';

import LoginButton from '../components/LoginButton';

import './About.css';

const Container = styled.div``;
const Row = styled.div`
  display: flex;
  width: 800px;
  max-width: 90%;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  & > div {
    flex: 0 0 50%;
  }
  .centercenter {
    display: flex;
    flex: 0 0 300px;
    justify-content: center;
    align-items: center;
    padding-right: 80px;
    box-sizing: border-box;
  }
  .button-container {
    margin-top: 10px;
  }
  @media screen and (max-width: 900px) {
    flex-flow: column nowrap;
    & > div {
      flex: 0 0 auto;
    }
    .centercenter {
      flex: 0 0 auto;
      padding-right: 0;
      padding: 20px 0;
    }
  }
`;

const Image = styled.img`
  height: 250px;
  width: 250px;
  @media screen and (max-width: 900px) {
    width: 175px;
    height: 175px;
  }
`;

export default class AboutPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row>
          <div className="centercenter">
            <Image src="/assets/burrito.svg" alt="Burrito" />
          </div>
          <div>
            <h1>Burrito</h1>
            <p>
              Burrito brings together your cards from Trello and serves them wrapped up in a warm {`"get things done"`}{' '}
              shell. Guac is extra, of course.
            </p>
            <div className="button-container">
              <LoginButton>Login with Trello</LoginButton>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}
