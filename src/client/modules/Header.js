import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import '../app.scss';
import data from '../data.json';

import { BREAKPOINTS as bp, mediaQueries } from '../assets/styled/breakpoints';
import colors from '../assets/styled/colors';

const { mediaMin, mediaMinMax, mediaMax } = mediaQueries;

const StyledHeader = styled.header`
  background-color: ${colors.black}
	display: flex;
	.logo-container {
		max-width: 300px;
  }
	.logo {
		height: auto;
		width: 100%;
	}
`;

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	font-size: 25px;
	justify-content: flex-end;
	margin-right: 20%;
	width: 100%;
	a {
		color: ${colors.blue};
		font-weight: bold;
		padding: 20px 30px;
		text-decoration: none;
		text-transform: uppercase;
	}
`;

export default class Header extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <StyledHeader>
				<a href="index.html">
					<div className="logo-container">
							<img className="logo" src="https://www.broadcastingcable.com/.image/t_share/MTU0MjAzNTYyNDA2MDYxNDIy/disney-channel-logo-16x9jpg.jpg" alt="DJ While" />
						</div>
				</a>
				<StyledNav>
					<a href="#about">About</a>
					<a href="#song">Song</a>
					<a href="#media">Media</a>
					<a href="#contact">Contact</a>
				</StyledNav>
      </StyledHeader>
    );
  }
}
