// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled((Link: any))`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

class ShowCard extends Component {
  shouldComponentUpdate(){
    return false;
  }

  props: Show;

  render() {
    return (
      <Wrapper to={`/details/${this.props.imdbID}`}>
        <Image alt={`${this.props.title} Show Poster`} src={`/public/img/posters/${this.props.poster}`} />
        <h3>{this.props.title}</h3>
        <h3>({this.props.year})</h3>
        <p>{this.props.description}</p>
      </Wrapper>
    );
  }
}

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

export default ShowCard;
