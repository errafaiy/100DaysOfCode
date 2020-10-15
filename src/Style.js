import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const SubTitel = styled.p ({
    fontSize : '13px',
    color : 'red',
    textAlign : 'center'
});  

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Div = styled.div ({
    textAlign : 'center'
});
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor : pointer;
`;

function Style () {
  return (
    <Div>
      <Wrapper>
          <Title>Hello World, this is my first styled component!</Title>
          <SubTitel>Hello World, this is my first styled component!</SubTitel>
      </Wrapper>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <input type='text'></input>
    </Div>
  )
}

export default Style

