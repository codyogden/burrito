import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import styled from 'styled-components';

const Container = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class Loading extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Container>
        <FontAwesomeIcon spin size="2x" icon={faSpinner} />
      </Container>
    );
  }
}
