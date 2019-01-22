import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../assets/styled/colors';
import '../app.scss';

const {
  blue,
  black,
  grey,
  pink,
  yellow,
  white,
} = colors;

const StyledTitle = styled.div`
  color: ${white};
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
`;

export default class Title extends Component {

  componentDidMount() {
  }

  render() {
    const {
      className,
      type,
      title,
    } = this.props;
    if (type === 4) {
      return (
        <StyledTitle className={className}>
          <h4>{title}</h4>
        </StyledTitle>
      );
    }
    if (type === 3) {
      return (
        <StyledTitle className={className}>
          <h3>{title}</h3>
        </StyledTitle>
      );
    }
    if (type === 2) {
      return (
        <StyledTitle className={className}>
          <h2>{title}</h2>
        </StyledTitle>
      );
    }
    return (
      <StyledTitle className={className}>
        <h1>{title}</h1>
      </StyledTitle>
    );
  }
}

Title.PropTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
};
