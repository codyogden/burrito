import React, { Component } from 'react';
import styled from 'styled-components';

const EmptyCardList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  padding-top: 50px;
`;

const EmptyCardImg = styled.img`
  height: 200px;
  width: 200px;
  margin: 0 auto;
`;

const PunContainer = styled.div`
  font-size: 0.9em;
  margin-top: 10px;
`;

const noCardItems = [
  {
    key: 'nachos',
    url: 'assets/nachos.svg',
    pun: <div>To Do List? Nacho problem! <small style={{ display: 'block', 'padding-top': '5px' }}>No cards here.</small></div>,
  },
  {
    key: 'guac',
    url: 'assets/guacamole.svg',
    pun: <div>A wild guac appeared! <small style={{ display: 'block', 'padding-top': '5px' }}>No cards here.</small></div>,
  },
  {
    key: 'taco',
    url: 'assets/taco.svg',
    pun: <div>Taco-bout productivity! <small style={{ display: 'block', 'padding-top': '5px' }}>No cards here.</small></div>,
  },
  {
    key: 'burrito',
    url: 'assets/burrito.svg',
    pun: <div>Bonus burrito! <small style={{ display: 'block', 'padding-top': '5px' }}>No cards here.</small></div>,
  }
];

export default class EmptyList extends Component {
  constructor() {
    super();
    this.state = {
      key: null,
      url: null,
      pun: null
    };
  }
  componentWillMount() {
    this.setState(noCardItems[Math.floor(Math.random() * noCardItems.length)]);
  }
  render() {
    return(
      <EmptyCardList id={this.state.key} className="empty-card-list">
        <EmptyCardImg src={this.state.url} alt={this.state.pun} />
        <PunContainer>{this.state.pun}</PunContainer>
      </EmptyCardList>
    );
  }
}
