import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import '../app.scss';
import data from '../db.json';
import ReactImage from '../img/react.png';
import colors from '../style-component/colors';
import Nav from './Nav';

const StyledHeader = styled.header`
  display: flex;
  .main-header-logo {
      max-width: 400px;
      height: auto;
      width: 100%;
  }
`;


export default class Header extends Component {// eslint-disable-line react/prefer-stateless-function

  render() {
    console.log(data.aside[1].items);
    return (
      <StyledHeader className="main-header">
        <a href="index.html" title="Retour vers l'accueil">
          <img src={ReactImage} alt="Logo E-school" className="main-header-logo" />
        </a>
        <Nav />
      </StyledHeader>
    );
  }
}