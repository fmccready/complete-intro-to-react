// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const ShowCard = (props: {
  poster: string,
  title: string,
  year: string,
  description: string
}) => (
  <Wrapper>
    <Image alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
    <h3>{props.title}</h3>
    <h3>({props.year})</h3>
    <p>{props.description}</p>
  </Wrapper>
);

const Image = styled.img`
  width:46%;
  float:left;
  margin-right:10px;
`;

export default ShowCard;
