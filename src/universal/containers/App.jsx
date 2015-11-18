'use strict';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Modal = React.createClass({
  styles: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0%',
    left: '0%',
    overflow: 'auto',
    zIndex: '10000',
    background: '#F5F8FA'
  },

  componentDidMount() {
    let body = document.querySelector('body');
		body.style.overflow = 'hidden';
  },

  componentWillUnmount() {
    let body = document.querySelector('body');
		body.style.overflow = '';
  },

  render() {
    return (
      <div style={this.styles}>
        {this.props.children}
      </div>
    )
  }
})

export default class App extends React.Component {

  static contextTypes = {
  	history: PropTypes.object.isRequired
  }

  componentWillReceiveProps(nextProps) {
    // if we changed routes...
    if((
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    )) {
      // save the old children (just like animation)
      this.previousChildren = this.props.children
    }
  }

  render() {
    const { location } = this.props
    const isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )

    return (
      <div>
        {isModal ?
          this.previousChildren :
          this.props.children
        }

        {isModal && (
          <Modal isOpen={true} returnTo={location.state.returnTo}>
            {this.props.children}
          </Modal>
        )}
      </div>
    )
  }

}
