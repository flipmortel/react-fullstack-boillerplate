import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../assets/styled/colors';
import '../app.scss';

const {
  pink,
  yellow,
  blue,
} = colors;

const StyledButton = styled.button`
    min-height: 48px;
    padding: 0 20px;
    border-radius: 5px;
    &.read-more {
        background-color: ${pink};
    }
`;

export default class Button extends Component {

  componentDidMount() {
  }

  render() {
    const {
      text,
      className,
    } = this.props;
    return (
      <StyledButton className={className}>
        {text}
      </StyledButton>
    );
  }
}
Button.defaultProps = {


};

Button.PropTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};
