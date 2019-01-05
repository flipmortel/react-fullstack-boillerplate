import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../app.scss';
import data from '../db.json';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #fff;
  color: ${props => props.primary ? "white" : "blue"};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  
`;

const Button = ({
  primary,
}) => {
  return (
    <StyledButton>Normal Button</StyledButton>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
};

export default Button;
