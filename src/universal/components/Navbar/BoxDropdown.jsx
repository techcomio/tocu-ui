'use strict';
import React from 'react';
import classNames from 'classnames';


export default React.createClass({

	getDefaultProps() {
    return {
      disableSwipeToOpen: false,
      docked: true,
    };
  },

  getInitialState() {
    return {
      open: false,
      swiping: null
    };
  },

	render() {
		const { className } = this.props;
		let classer = classNames({
			hide: !this.state.open,
			"bubble-dropdown": true
		});

		return (
			<div className={`${classer} ${className}`} onTouchTap={this._onOverlayTouchTap}>
				<div className="bubble-dropdown-body" onClick={this.demo} style={{zIndex: 100}}>
					{this.props.children}
					<div className="bubble-arrow-border"></div>
					<div className="bubble-arrow"></div>
				</div>
				{this.state.open && <div style={{
					height: '100%',
	        width: '100%',
	        position: 'fixed',
	        top: 0,
	        left: 0,
	        zIndex: 5,
				}} onClick={this._handleOverlayTouchTap} />}
			</div>
		)
	},

	toggle() {
		this.setState({ open: !this.state.open });
	},

	demo(e) {
		e.preventDefault();
	},

	close() {
		this.setState({ open: false });
	},

	_onOverlayTouchTap(e) {
		this.close();
	},

	_handleOverlayTouchTap() {
		this.close();
	},

});
