'use strict';

import React          from 'react/addons';
import {Link}         from 'react-router';
import classNames     from 'classnames';
import {prepareRoute} from '../decorators';
import SanphamStore   from '../store/SanphamStore';
import SanphamActions from '../actions/SanphamActions';
import VerifyActions  from '../actions/VerifyActions';
import SaleActions    from '../actions/SaleActions';
/**
 * @Component
 */
import BoxSignIn from '../components/Form/BoxSignIn';
import BoxVerify from '../components/Form/BoxVerify';
import Product from '../components/Product';
import Header from '../components/Header';
import Sidebar from '../components/Product/Sidebar';
import BoxAuto from '../components/Product/BoxAuto';
import Sale from '../components/Sale';


@prepareRoute(async function ({ params }) {
  return await * [
    SanphamActions.getSanphamID(params),
    SaleActions.getProductSale(),
  ];
})

export default class ProductID extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      boxLogin: false,
      current: 1,
      ...SanphamStore.getState().product.toJS(),
    };
  }

  componentWillMount () {
    this.props.HeadParams.setTitle(`${this.state.code} | tocu.vn`);
    this.props.HeadParams.setDescription(`${this.state.boxName}`);
  }

  componentDidMount() {
    SanphamStore.listen(this.onChangeSanphamStore);
  }

  componentWillUnmount() {
    SanphamStore.unlisten(this.onChangeSanphamStore);
  }

  onChangeSanphamStore = (state) => {
    this.setState({
      ...state.product.toJS(),
    });
  }

	render () {
    return (
      <div>
        {/* Header */}
        <Header />

        <section id="productDetail">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-9">
                {this.renderProductDetail()}

                {/* 6 box auto */}
                <BoxAuto />
              </div>

              <div className="col-md-3 col-lg-3">
                <div className='row row-sidebar'>
                  {/* Sidebar */}
                  <Sidebar
                    boxId={this.state.BoxId}
                    {...this.state.Box} />

                  <div className="col-md-12 col-lg-12">
                    {/* Sale */}
                    <Sale />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {this.renderBoxLogin()}
			</div>
    );
	}

  renderProductDetail = () => {
    return (
      <Product
        handleBoxLogin={this.handleBoxLogin} />
    );
  }

  renderBoxLogin = () => {
    if(this.state.boxLogin) {
      return (
        <BoxSignIn hideBoxLogin={this.hideBoxLogin} location={this.props.location} />
      );
    }
  }

  handleBoxLogin = (val) => {
    this.setState({
      boxLogin: true,
    });
  }

  hideBoxLogin = () => {
    this.setState({
      boxLogin: false,
    });
  }

};
