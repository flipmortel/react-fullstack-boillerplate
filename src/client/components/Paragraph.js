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

const StyledParagraph = styled.p`
  color: ${white};
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  padding: 20px;  
`;

export default class Paragraph extends Component {

  componentDidMount() {
  }

  render() {
    const {
      text,
      className,
    } = this.props;
    return (
      <StyledParagraph className={className}>
        {text}
      </StyledParagraph>
    );
  }
}
Paragraph.defaultProps = {


};

Paragraph.PropTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};
