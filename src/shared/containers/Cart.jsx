'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { prepareRoute } from '../decorators';
import Navbar from '../components/Navbar';
import BoxRequireAuth from '../components/BoxRequireAuth';
import CartContent from '../components/Cart';


const meta = {
  title: 'Cart'
};

export default class Cart extends React.Component {

	constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <DocumentMeta {...meta} />
        <header>
          <Navbar />
        </header>

          <div id="cart-content" className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <CartContent />
              </div>
            </div>
          </div>

        <BoxRequireAuth />
      </div>
    );
  }

}
