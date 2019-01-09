import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import '../app.scss';
import data from '../db.json';
import ReactImage from '../img/react.png';
import colors from '../style-component/colors';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  align-content: center;
  .main-nav-link {
    background-color: ${colors.lightblue};
    color: #fff;
    padding: 15px;
    align-self: center;
  }
`;


export default class Nav extends Component {// eslint-disable-line react/prefer-stateless-function

  render() {
    console.log(data.aside[1].items);
    return (
      <StyledNav className="main-nav">
        <a href="" title="Retour vers l'accueil" className="main-nav-link">Link 1</a>
        <a href="" title="Retour vers l'accueil" className="main-nav-link">Link 2</a>
        <a href="" title="Retour vers l'accueil" className="main-nav-link">Link 3</a>
        <a href="" title="Retour vers l'accueil" className="main-nav-link">Link 4</a>
        <a href="" title="Retour vers l'accueil" className="main-nav-link">Link 5</a>
      </StyledNav>
    );
  }
}