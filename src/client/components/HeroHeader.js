import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import '../app.scss';
import data from '../data.json';
import Button from './Button';
import Paragraph from './Paragraph';
import Title from './Title';

const StyledHeroHeader = styled.header`
 background: url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80') no-repeat center;
 background-size: 100%;
 min-height: 600px;
`;

export default class HeroHeader extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <StyledHeroHeader>
        <Title type="h1" text="DJ While()" />      
        <Paragraph text={data.heroHeader.text} />
        <Button className="read-more" text="Read more" />
      </StyledHeroHeader>
    );
  }
}
