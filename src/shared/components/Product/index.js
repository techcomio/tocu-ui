'use strict';
import React          from 'react/addons';
import classNames     from 'classnames';
import SanphamStore   from '../../store/SanphamStore';
import AuthStore      from '../../store/AuthStore';
import OrderStore     from '../../store/OrderStore';
import SanphamActions from '../../actions/SanphamActions';
import OrderActions   from '../../actions/OrderActions';
/**
 * @Component
 */
import NavbarProduct   from '../Header/Navbar/NavbarProductDetail';
import ImgSlideProduct from './ImgSlideProduct';
import InfoSanpham     from './InfoSanpham';
import Detail          from './Detail';
import Mau             from './Mau';


export default class Products extends React.Component {

  constructor(props) {
    super(props);
    this._onChangeAuthStore = this._onChangeAuthStore.bind(this);
    this._onChangeOrderStore = this._onChangeOrderStore.bind(this);
    this._onChangeSanphamStore = this._onChangeSanphamStore.bind(this);

    this.state = {
    	auth: AuthStore.getState().auth,
    	product: SanphamStore.getState().product,
    	listOrder: OrderStore.getState().listOrder,
    };
  }

  componentDidMount() {
    AuthStore.listen(this._onChangeAuthStore);
    OrderStore.listen(this._onChangeOrderStore);
    SanphamStore.listen(this._onChangeSanphamStore);
  }

  componentWillUnmount() {
    AuthStore.unlisten(this._onChangeAuthStore);
    OrderStore.unlisten(this._onChangeOrderStore);
    SanphamStore.unlisten(this._onChangeSanphamStore);
  }

  _onChangeAuthStore(state) {
  	this.setState({
  		auth: state.auth
  	});
  }

  _onChangeOrderStore(state) {
  	this.setState({
  		listOrder: state.listOrder
  	});
  }

  _onChangeSanphamStore(state) {
  	this.setState({
  		product: state.product
  	});
  }

  render() {
  	return (
	  	<div className="productDetail">
	      <NavbarProduct
	        auth={this.state.auth}
	        product={this.state.product}
	        listOrder={this.state.listOrder}
	        SanphamActions={SanphamActions}
	        OrderActions={OrderActions}
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