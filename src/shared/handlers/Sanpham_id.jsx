'use strict';

import React          from 'react';
import {Link}         from 'react-router';
import classNames     from 'classnames';
import {prepareRoute} from '../decorators';
import SanphamStore   from '../store/SanphamStore';
import SanphamActions from '../actions/SanphamActions';
import AuthStore      from '../store/AuthStore';
import AuthActions    from '../actions/AuthActions';
import CityStore      from '../store/CityStore';
import CityActions    from '../actions/CityActions';
/**
 * @Component
 */
import AltContainer    from 'alt/AltContainer';
import FormSignIn      from '../components/Form/SignIn';
import FormOrder       from '../components/FormOrder/test';
import Header          from '../components/productDetail/Header';
import ImgSlideProduct from '../components/productDetail/ImgSlideProduct';
import NavbarProductID from '../components/productDetail/NavbarProductID';
import InfoSanpham     from '../components/SanphamID/InfoSanpham';
import Detail          from '../components/SanphamID/Detail';
import Mau             from '../components/SanphamID/Mau';
import Sidebar         from './test';


@prepareRoute(async function ({ params }) {
  return await * [
    SanphamActions.getSanphamID(params),
    CityActions.getCity(),
  ];
})

export default class SanphamID extends React.Component {

  constructor (props) {
    super(props)

    this._bind('onChangeSanphamStore', 'handleBoxLogin', 'Next', 'Prev');

    this.state = {
      hideHeader: false,
      boxLogin: false,
      current: 1,
      ...SanphamStore.getState().product.toJS(),
      // ...AuthStore.getState().auth.toJS(),
    };
  }

  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }

  componentWillMount () {
    this.props.HeadParams.setTitle("SanphamID | tocu.vn");
    this.props.HeadParams.setDescription("SanphamID | Description");
  }

  componentDidMount() {
    SanphamStore.listen(this.onChangeSanphamStore);
  }

  componentWillUnmount() {
    SanphamStore.unlisten(this.onChangeSanphamStore);
  }

  onChangeSanphamStore(state) {
    this.setState({
      ...state.product.toJS(),
    });
  }

	render () {
    let classProductDetail = classNames({
      productDetail: true,
      show: this.state.current === 1,
    });

    let classProductOrder = classNames({
      productOrder: true,
      show: this.state.current === 2,
    });

    let classStatusOrder = classNames({
      statusOrder: true,
      show: this.state.current === 3,
    });

    return (
      <div>
        <Header 
          hideHeader={this.state.hideHeader} />
				
        <section id="productDetail">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-9">
                <div className={classProductDetail} >
                  {/* Navbar Product */}
                  <AltContainer 
                    stores={[AuthStore, SanphamStore]}
                    actions={{SanphamActions}}
                    inject={{
                      auth: function(props) {
                        return AuthStore.getState().auth.toJS();
                      },
                      product: function() {
                        return SanphamStore.getState().product.toJS();
                      }
                    }} >

                    <NavbarProductID
                      Next={this.Next}
                      handleBoxLogin={this.handleBoxLogin}
                      hideNavbar={this.state.hideHeader} />

                  </AltContainer>
                  

                  <div className="product">
                    {/* Slide image */}
                    <ImgSlideProduct 
                      dataUrlImg={this.state.images || []}
                      dataUrlImgTab={this.state.images || []}
                      />

                    <div className="product-detail">
                      {/* Detail */}
                      <Detail 
                        name={this.state.name}
                        price={this.state.price || 0}
                        salePrice={this.state.salePrice} />

                      <div className="row">
                        <div className="col-md-6">
                          {/* Thong tin San pham */}
                          <InfoSanpham 
                            code={this.state.code}
                            description={this.state.description} />
                        </div>
                        <div className="col-md-6">
                          {/* Thong tin nguoi mau */}
                          <Mau {...this.state.Model} />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <AltContainer
                  stores={[CityStore]}
                  actions={{CityActions}}
                  inject={{
                    city: function (props) {
                      return CityStore.getState().city
                    },
                    district: function(props) {
                      return CityStore.getState().district
                    }
                  }} >

                  <FormOrder 
                    Prev={this.Prev}
                    Next={this.Next}
                    current={this.state.current}
                    {...SanphamStore.getState().product.toJS()} />

                </AltContainer>


                <div className={classStatusOrder}>
                  <nav className="navbar navbar-defaul">
                    <h3 className="text-center">Đặt hàng thành công</h3>
                  </nav>
                  <div className="product">
                    <div className="text-center status-check"><i className="fa fa-check-circle-o"></i></div>
                    <p className="text-center">Đơn hàng đã được tạo!</p>
                    <p className="text-center">số đơn hàng: #2233</p>
                    <p className="text-center">dưới đây là thông tin tài khoản của Cú</p>
                    <p className="text-center">Bạn nhớ nghi tên đơn hàng trong thông tin chuyển khoản nhé!</p>
                  </div>
                </div>

              </div>
              <div className="col-md-3 col-lg-3">
                <Sidebar {...this.state.Box} />
              </div>
            </div>
          </div>
        </section>

        {this.state.boxLogin && (
          <div id="boxLogin">
            <div className="row">
              <div className="col-xs-12 col-sm-7 col-md-5 col-centered" >
                <div className="centrix">
                  <AltContainer
                    component={FormSignIn}
                    stores={[AuthStore]}
                    actions={{AuthActions}}
                    inject={{
                      loginState: function(props) {
                        return AuthStore.getState().loginState
                      }
                    }}
                   />
                </div>
              </div>
            </div>
          </div>
        )}
			</div>
    );
	}

  handleBoxLogin() {
    this.setState({
      boxLogin: true,
    });
  }

  Next() {
    console.log('Next');
    this.setState({
      current: this.state.current + 1,
    });
  }

  Prev() {
    this.setState({
      current: this.state.current - 1,
    })
  }

};
