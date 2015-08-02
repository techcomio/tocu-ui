'use strict';
import React      from 'react/addons';
import classNames from 'classnames';
/**
 * @Component
 */
import ImgSlideProduct from '../productDetail/ImgSlideProduct';
import NavbarProductID from '../productDetail/NavbarProductID';
import InfoSanpham     from './InfoSanpham';
import Detail          from './Detail';
import Mau             from './Mau';


export default class Products extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
  	return (
	  	<div className="productDetail">
	      <NavbarProductID
	        Next={this.props.Next}
	        auth={this.props.auth}
	        product={this.props.product}
	        listOrder={this.props.listOrder}
	        SanphamActions={this.props.SanphamActions}
	        OrderActions={this.props.OrderActions}
	        handleBoxLogin={this.props.handleBoxLogin}
	        hideNavbar={this.state.hideHeader} />
	      
	      <div className="product">
	        {/* Slide image */}
	        <ImgSlideProduct
	          dataUrlImg={this.props.product.get('images').toJS() || []} />

	        <div className="product-detail">
	          {/* Detail */}
	          <Detail
	          	product={this.props.product} />

	          <div className="row">
	            <div className="col-md-6">
	              {/* Thong tin San pham */}
	              <InfoSanpham
			          	product={this.props.product} />
	            </div>
	            <div className="col-md-6">
	              {/* Thong tin nguoi mau */}
	              <Mau
	              	model={this.props.product.get('Model')} />

	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
    );
  }

}