import React, { Component } from 'react';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components'

import './Home.scss';
import Illustration from '../Illustration/Illustration';
import SwipeIcon from './SwipeIcon/SwipeIcon';
import CopyIcon from '../../assets/icons/copyIcon';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opacity: 1,
			isEmailCopied: false
		};

		this.onClickEmail = this.onClickEmail.bind(this);
	}

	onClickEmail() {
		this.copyEmailToClipboard();
		this.setState({ isEmailCopied: true });
		setTimeout(() => {
			this.setState({ isEmailCopied: false });
		}, 2000);
	}

	copyEmailToClipboard() {
		let el = document.createElement('textarea');
		el.value = 'aflapasset@gmail.com';
		el.setAttribute('readonly', '');
		el.style = { position: 'absolute', left: '-9999px' };
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	}

	render() {
		return (
			<div className="Home">
				<Illustration opacity={this.state.opacity} />
				{this.props.isFontLoaded ? (
					<StyledText className="Home__text" style={{ opacity: this.state.opacity }}>
						<p className="Home__text__hello">Bonjour,</p>
						<p>
							Je suis un développeur créatif (et occasionnellement designer) qui aime les sites
							responsive, le design minimaliste et les transitions en douceur.
						</p>
						<div className="Home__contact">
							<a className="Home__contact-btn" href="mailto:aflapasset@gmail.com" target="_blank" rel="noopener noreferrer">
								Me contacter
							</a>
						</div>
					</StyledText>
				) : null}
				{this.props.isMobile ? <SwipeIcon /> : null}
			</div>
		);
	}
}

const StyledText = styled.section`
${breakpoint('sm')`
    max-width: ${props => props.theme.breakpoints.sm}px;
  `}
  ${breakpoint('md')`
    max-width: ${props => props.theme.breakpoints.md}px;
  `}
  ${breakpoint('lg')`
    max-width: ${props => props.theme.breakpoints.lg}px;
  `}
  ${breakpoint('xl')`
    max-width: ${props => props.theme.breakpoints.xl}px;
  `}
`

export default Home;
