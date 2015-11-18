'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Transitions from './styles/transitions';


export default React.createClass({
	_originalBodyOverflow: '',

	getDefaultProps() {
    return {
      autoLockScrolling: true,
      transitionEnabled: true,
    };
  },

	componentDidMount() {
		this._originalBodyOverflow = document.getElementsByTagName('body')[0].style.overflow;
	},

	componentDidUpdate() {
    if (this.props.autoLockScrolling) {
      if (this.props.show) {
        this._preventScrolling();
      } else {
        this._allowScrolling();
      }
    }
  },

  componentWillUnmount() {
    this._allowScrolling();
  },

	setOpacity(opacity) {
		let overlay = ReactDOM.findDOMNode(this);
		overlay.style.opacity = opacity;
	},

  getStyles() {
    let styles = {
      root: {
        position: 'fixed',
        height: '100%',
        width: '100%',
        zIndex: 10000,
        top: 0,
        left: '-100%',
        opacity: 0,
        backgroundColor: 'rgba(37, 43, 51, 0.6)',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        // Two ways to promote overlay to its own render layer
        willChange: 'opacity',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        transition:
          this.props.transitionEnabled &&
          Transitions.easeOut('0ms', 'left', '400ms') + ',' +
          Transitions.easeOut('400ms', 'opacity'),
        WebkitTransition:
          this.props.transitionEnabled &&
          Transitions.easeOut('0ms', 'left', '400ms') + ',' +
          Transitions.easeOut('400ms', 'opacity'),
      },
      rootWhenShown: {
        left: '0',
        opacity: 1,
        transition:
          this.props.transitionEnabled &&
          Transitions.easeOut('0ms', 'left') + ',' +
          Transitions.easeOut('400ms', 'opacity'),
        WebkitTransition:
          this.props.transitionEnabled &&
          Transitions.easeOut('0ms', 'left') + ',' +
          Transitions.easeOut('400ms', 'opacity'),
      },
    };
    return styles;
  },

	render() {
		let { show, style, ...other } = this.props;
		let styles = Object.assign(this.getStyles().root, style, show && this.getStyles().rootWhenShown);
		return (
			<div {...other} style={styles} />
		)
	},

	_preventScrolling() {
		let body = document.getElementsByTagName('body')[0];
		body.style.overflow = 'hidden';
	},

	_allowScrolling() {
    let body = document.getElementsByTagName('body')[0];
    body.style.overflow = this._originalBodyOverflow || '';
  },

});
