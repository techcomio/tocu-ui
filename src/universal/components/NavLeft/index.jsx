'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Overlay from './Overlay';


export default React.createClass({

	getDefaultProps() {
    return {
      disableSwipeToOpen: false,
      docked: true,
    };
  },

  getInitialState() {
    this._maybeSwiping = false;
    this._touchStartX = null;
    this._touchStartY = null;
    this._swipeStartX = null;

    return {
      open: this.props.docked,
      swiping: null
    };
  },

	getStyles() {
		let width = 260;
		let x = this._getTranslateMultiplier() * (this.state.open ? 0 : width);

		let styles = {
			root: {
				height: '100%',
        width: width,
        position: 'fixed',
        zIndex: 10000,
        left: 0,
        top: 0,
        transform: 'translate3d(' + x + 'px, 0, 0)',
        WebkitTransform: 'translate3d(' + x + 'px, 0, 0)',
        transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        WebkitTransition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        backgroundColor: '#fff',
        overflow: 'hidden',
			},
			rootWhenOpenRight: {
        left: 'auto',
        right: 0,
      }
		}
		return styles;
	},

	render() {
		return (
			<div className={this.props.className}>
				<Overlay
					ref="overlay"
					show={this.state.open || !!this.state.swiping}
          transitionEnabled={!this.state.swiping}
          onClick={this._onOverlayTouchTap} />
				<div style={Object.assign(
						this.getStyles().root,
						this.props.openRight && this.getStyles().rootWhenOpenRight,
						this.props.style
					)}>
					{this.props.children}
				</div>
			</div>
		)
	},

	toggle() {
		this.setState({ open: !this.state.open });
	},

	close() {
		this.setState({ open: false });
		if (this.props.onNavClose) this.props.onNavClose();
	},

	_getTranslateMultiplier() {
		return this.props.openRight ? 1 : -1;
	},

	_onOverlayTouchTap(e) {
		this.close();
	}

});
