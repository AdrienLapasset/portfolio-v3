import React, { Component } from 'react';
import LogoSlider from './LogoSlider/LogoSlider';
import './LogoSliderContainer.scss';

class LogoSliderContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogoTouched: false
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			if (!this.state.isLogoTouched) {
				this.handlePositionY();
			}
			if (!this.props.isTouch && this.props.isMobile) {
				this.setState({ positionY: this.initPosition });
			}
		}
	}

	handleLogoTouched = (state) => {
		this.setState({ isLogoTouched: state });
	};

	handlePositionY() {
		if (this.props.diffY > 0 && this.props.diffY < this.initPosition && this.state.positionY !== 0) {
			this.setState({ positionY: this.initPosition - this.props.diffY });
		}

		if (this.props.diffY >= this.initPosition) {
			this.setState({ positionY: 0 });
		}

		if (
			this.props.diffY < 0 &&
			this.props.diffY > -this.initPosition &&
			this.state.positionY !== this.initPosition
		) {
			this.setState({ positionY: -this.props.diffY });
		}
	}

	render() {
		return (
			<>
				<div className="Footer">
					<h2 className="Footer__title">Ils m'ont fait confiance</h2>
					<LogoSlider
						footerPos={this.state.positionY}
						isTouched={this.handleLogoTouched}
					/>
				</div>
			</>
		);
	}
}

export default LogoSliderContainer;
