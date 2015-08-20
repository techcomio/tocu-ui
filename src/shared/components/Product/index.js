'use strict';

import React from 'react/addons';
import classNames from 'classnames';
import AuthStore from '../../store/AuthStore';
import CartStore from '../../store/CartStore';
import CartActions from '../../actions/CartActions';
import SanphamStore from '../../store/SanphamStore';
import SanphamActions from '../../actions/SanphamActions';
/**
 * @Component
 */
import NavbarProduct from '../Header/Navbar/NavbarProductDetail';
import ImgSlideProduct from './ImgSlideProduct';
import InfoSanpham from './InfoSanpham';
import Detail from './Detail';
import Mau from './Mau';


export default class Products extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	auth: AuthStore.getState().auth,
    	product: SanphamStore.getState().product,
      cartId: CartStore.getState().cartId,
    };
  }

  componentDidMount() {
    AuthStore.listen(this._onChangeAuthStore);
    SanphamStore.listen(this._onChangeSanphamStore);
    CartStore.listen(this._onChangeCartStore);
  }

  componentWillUnmount() {
    AuthStore.unlisten(this._onChangeAuthStore);
    SanphamStore.unlisten(this._onChangeSanphamStore);
    CartStore.unlisten(this._onChangeCartStore);
  }

  _onChangeAuthStore = (state) => {
  	this.setState({
  		auth: state.auth
  	});
  }

  _onChangeSanphamStore = (state) => {
  	this.setState({
  		product: state.product
  	});
  }

  _onChangeCartStore = (state) => {
    this.setState({
      cartId: state.cartId,
    });
  }

  render() {
  	return (
	  	<div className="productDetail">
	      <NavbarProduct
	        auth={this.state.auth}
	        product={this.state.product}
          cartId={this.state.cartId}
	        SanphamActions={SanphamActions}
	        CartActions={CartActions}
	        handleBoxLogin={this.props.handleBoxLogin} />
	      
	      <div className="product">
	        {/* Slide image */}
	        <ImgSlideProduct
	          dataUrlImg={this.state.product.get('images') || []} />

	        <div className="product-detail">
	          {/* Detail */}
	          <Detail
	          	product={this.state.product} />

	          <div className="row">
	            <div className="col-md-6">
	              {/* Thong tin San pham */}
	              <InfoSanpham
			          	product={this.state.product} />
	            </div>
	            <div className="col-md-6">
	              {/* Thong tin nguoi mau */}
	              <Mau
	              	model={this.state.product.get('Model')} />

	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
    );
  }

}