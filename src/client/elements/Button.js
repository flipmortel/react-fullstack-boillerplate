import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../app.scss';
import data from '../db.json';
import colors from '../style-component/colors';

const StyledButton = styled.button`
  background: ${props => props.primary ? colors.lightblue : colors.orange};
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  margin: 0.5em 1em;
  padding: 0 1.3em;
  min-height: 48px;
`;

const Button = ({
  primary,
}) => {
  return (
    <StyledButton primary={primary}>Button</StyledButton>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
};

export default Button;
