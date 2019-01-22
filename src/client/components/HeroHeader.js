import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import '../app.scss';
import data from '../data.json';
import Button from './Button';
import Paragraph from './Paragraph';
import Title from './Title';

import { BREAKPOINTS as bp, mediaQueries } from '../assets/styled/breakpoints';

const { mediaMin, mediaMinMax, mediaMax } = mediaQueries;

const StyledHeroHeader = styled.header`
  background: url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80') no-repeat bottom center;
  min-height: 600px;
  position: relative;
  ${mediaMax(bp.XS.max, `
    align-items: flex-end;
    display:flex; 
    justify-content: center;  
  `)}
  ${mediaMin(bp.SM.max, `
      background-size: 100%;
  `)}

  .header-text-container {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    padding: 30px;
    ${mediaMax(bp.XS.max, `
      margin: 20px;
    `)}
    ${mediaMin(bp.SM.min, `
      position: absolute;
      bottom: 10%;
      right: 10%;
    `)}
    p {
      margin-bottom: 40px;
    }
    .read-more {
      align-self: flex-end;
      max-width: 150px;
    }
  }
`;

export default class HeroHeader extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <StyledHeroHeader>
        <div className="header-text-container">
          <Title type="h1" title="DJ While()" />
          <Paragraph text={data.heroHeader.text} />
          <Button className="read-more" text="Read more" />
        </div>
      </StyledHeroHeader>
    );
  }
}
