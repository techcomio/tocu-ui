'use strict';

import React          from 'react/addons';
import {Link}         from 'react-router';
import classNames     from 'classnames';
import {prepareRoute} from '../decorators';
import SanphamStore   from '../store/SanphamStore';
import SanphamActions from '../actions/SanphamActions';
import AuthStore      from '../store/AuthStore';
import AuthActions    from '../actions/AuthActions';
import CityStore      from '../store/CityStore';
import CityActions    from '../actions/CityActions';
import OrderStore     from '../store/OrderStore';
import OrderActions   from '../actions/OrderActions';
import ShipStore      from '../store/ShipStore';
import ShipActions    from '../actions/ShipActions';
import VerifyStore    from '../store/VerifyStore';
import VerifyActions  from '../actions/VerifyActions';
import SaleStore      from '../store/SaleStore';
import SaleActions    from '../actions/SaleActions';
/**
 * @Component
 */
import AltContainer  from 'alt/AltContainer';
import FormSignIn    from '../components/Form/SignIn';
import Verify        from '../components/Form/Verify';
import FormOrder     from '../components/FormOrder';
import ProductDetail from '../components/Product';
import PushListOrder from '../components/Product/PushListOrder';
import StatusOrder   from '../components/Product/StatusOrder';
import Header        from '../components/productDetail/Header';
import Sidebar       from '../components/productDetail/Sidebar';
import Sale          from '../components/Sale';


@prepareRoute(async function ({ params }) {
  return await * [
    SanphamActions.getSanphamID(params),
    SaleActions.getProductSale(),
    CityActions.getCity(),
  ];
})

export default class SanphamID extends React.Component {

  constructor (props) {
    super(props)

    this._bind('onChangeSanphamStore', 'handleBoxLogin', 'Next', 'Prev', 'hideBoxLogin', 'renderBoxLogin', 'renderProductDetail', 'renderFormOrder', 'renderStatusOrder', 'hideBoxVerify');

    this.state = {
      hideHeader: false,
      boxLogin: false,
      boxVerify: false,
      current: 1,
      ...SanphamStore.getState().product.toJS(),
    };
  }

  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }

  componentWillMount () {
    this.props.HeadParams.setTitle(`${this.state.code} | tocu.vn`);
    this.props.HeadParams.setDescription(`${this.state.boxName}`);
  }

  componentDidMount() {
    // let { id } = this.props.params;
    // OrderActions.checkOrder({id});
    OrderActions.getListOrder();
    SanphamStore.listen(this.onChangeSanphamStore);
    // OrderStore.listen(this.onChangeOrderStore);
  }

  componentWillUnmount() {
    SanphamStore.unlisten(this.onChangeSanphamStore);
    // OrderStore.unlisten(this.onChangeOrderStore);
  }

  onChangeSanphamStore(state) {
    this.setState({
      ...state.product.toJS(),
    });
  }

  onChangeOrderStore(state) {
    // console.log('onChangeOrderStore', state);
  }

	render () {
    return (
      <div>
        <Header
          hideHeader={this.state.hideHeader} />
				
        <section id="productDetail">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-9">
                {this.renderProductDetail()}

                {this.renderPushListOrder()}

                {this.renderFormOrder()}

                {this.renderStatusOrder()}

                {/* 6 box auto */}
                <div className="row row-bottom-detail">
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                      <a className="" href="/box/1" >
                        <div className="img-Wrapper">
                          <img className="img-max-height" src="http://api.tocu.vn/image/220x220/be9645becb337e08394a-1-1.jpg" alt="images" />
                          <div className="divshowdow"></div>
                        </div>
                        <div className="thumbnail-list-news">
                          <div className="list-news">
                            <div className="list-item">
                              <div className="item">
                                <div className="newsItem newCreditItem">
                                  <div className="newsImg">
                                    <span className="imgIcon imgIcon-list imgIcon-bg-red imgIcon-bg-store"></span>
                                  </div>
                                  <div className="newsText newsInfo">
                                    <p className="creditTitle">Cardigan</p>
                                    <p>
                                      <strong className="creditCost">150.000 đ</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="list-item" style={{backgroundImage: "url(http://api.tocu.vn/image/220x53/b8fa64ef4cef5471b9c5-11-2.jpg)"}} >
                              <div className="item">
                                <div className="newsItem newCreditItem">
                                  <div className="newsImg">
                                    <span className="imgIcon imgIcon-list">
                                      <img src="http://api.tocu.vn/image/50x50/b8fa64ef4cef5471b9c5-11-2.jpg" />
                                    </span>
                                  </div>
                                  <div className="newsText newsInfo">
                                    <p className="creditTitle">Cardigan dày</p>
                                    <p>
                                      <strong className="creditCost">130.000 đ</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="thumbnail-info">
                          <div className="infoItem">
                            <span className="titleItem">Sơ mi xô Nhật Hàn</span>
                            <span className="countItem">122 sản phẩm</span>
                          </div>
                          <div className="socialItem">
                            <span className="SmallIcon likeSmallIcon"></span>
                            <span className="socialMetaCount">132k</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                      <a className="" href="/box/1" >
                        <div className="img-Wrapper">
                          <img className="img-max-height" src="http://api.tocu.vn/image/220x220/be9645becb337e08394a-1-1.jpg" alt="images" />
                          <div className="divshowdow"></div>
                        </div>
                        <div className="thumbnail-list-news">
                          <div className="list-news">
                            <div className="list-item">
                              <div className="item">
                                <div className="newsItem newCreditItem">
                                  <div className="newsImg">
                                    <span className="imgIcon imgIcon-list imgIcon-bg-red imgIcon-bg-store"></span>
                                  </div>
                                  <div className="newsText newsInfo">
                                    <p className="creditTitle">Cardigan</p>
                                    <p>
                                      <strong className="creditCost">150.000 đ</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="list-item" style={{backgroundImage: "url(http://api.tocu.vn/image/220x53/b8fa64ef4cef5471b9c5-11-2.jpg)"}} >
                              <div className="item">
                                <div className="newsItem newCreditItem">
                                  <div className="newsImg">
                                    <span className="imgIcon imgIcon-list">
                                      <img src="http://api.tocu.vn/image/50x50/b8fa64ef4cef5471b9c5-11-2.jpg" />
                                    </span>
                                  </div>
                                  <div className="newsText newsInfo">
                                    <p className="creditTitle">Cardigan dày</p>
                                    <p>
                                      <strong className="creditCost">130.000 đ</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="thumbnail-info">
                          <div className="infoItem">
                            <span className="titleItem">Sơ mi xô Nhật Hàn</span>
                            <span className="countItem">122 sản phẩm</span>
                          </div>
                          <div className="socialItem">
                            <span className="SmallIcon likeSmallIcon"></span>
                            <span className="socialMetaCount">132k</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                      <a className="" href="/box/1" >
                        <div className="img-Wrapper">
                          <img className="img-max-height" src="http://api.tocu.vn/image/220x220/be9645becb337e08394a-1-1.jpg" alt="images" />
                          <div className="divshowdow"></div>
                        </div>
                        <div className="thumbnail-list-news">
                          <div className="list-news">
                            <div className="list-item">
                              <div className="item">
                                <div className="newsItem newCreditItem">
                                  <div className="newsImg">
                                    <span className="imgIcon imgIcon-list imgIcon-bg-red imgIcon-bg-store"></span>
                                  </div>
                                  <div className="newsText newsInfo">
                                    <p className="creditTitle">Cardigan</p>
                                    <p>
                                      <strong className="creditCost">150.000 đ</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="list-item" style={{backgroundImage: "url(http://api.tocu.vn/image/220x53/b8fa64ef4cef5471b9c5-11-2.jpg)"}} >
                              <div className="item">
                                <div className="newsItem newCreditItem">
                                  <div className="newsImg">
                                    <span className="imgIcon imgIcon-list">
                                      <img src="http://api.tocu.vn/image/50x50/b8fa64ef4cef5471b9c5-11-2.jpg" />
                                    </span>
                                  </div>
                                  <div className="newsText newsInfo">
                                    <p className="creditTitle">Cardigan dày</p>
                                    <p>
                                      <strong className="creditCost">130.000 đ</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="thumbnail-info">
                          <div className="infoItem">
                            <span className="titleItem">Sơ mi xô Nhật Hàn</span>
                            <span className="countItem">122 sản phẩm</span>
                          </div>
                          <div className="socialItem">
                            <span className="SmallIcon likeSmallIcon"></span>
                            <span className="socialMetaCount">132k</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                      <a className="" href="/box/1" >
                        <div className="img-Wrapper">
                          <img className="img-max-height" src="http://api.tocu.vn/image/220x220/be9645becb337e08394a-1-1.jpg" alt="images" />
                          <div className="divshowdow"></div>
                        </div>
                        <div className="thumbnail-list-news">
                          <div className="list-news">
                            <div className="list-item">
                              <div className="item">
                                <div className="newsItem newCreditItem">
                                  <div className="newsImg">
                                    <span className="imgIcon imgIcon-list imgIcon-bg-red imgIcon-bg-store"></span>
                                  </div>
                                  <div className="newsText newsInfo">
                                    <p className="creditTitle">Cardigan</p>
                                    <p>
                                      <strong className="creditCost">150.000 đ</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="list-item" style={{backgroundImage: "url(http://api.tocu.vn/image/220x53/b8fa64ef4cef5471b9c5-11-2.jpg)"}} >
                              <div className="item">
                                <div className="newsItem newCreditItem">
                                  <div className="newsImg">
                                    <span className="imgIcon imgIcon-list">
                                      <img src="http://api.tocu.vn/image/50x50/b8fa64ef4cef5471b9c5-11-2.jpg" />
                                    </span>
                                  </div>
                                  <div className="newsText newsInfo">
                                    <p className="creditTitle">Cardigan dày</p>
                                    <p>
                                      <strong className="creditCost">130.000 đ</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="thumbnail-info">
                          <div className="infoItem">
                            <span className="titleItem">Sơ mi xô Nhật Hàn</span>
                            <span className="countItem">122 sản phẩm</span>
                          </div>
                          <div className="socialItem">
                            <span className="SmallIcon likeSmallIcon"></span>
                            <span className="socialMetaCount">132k</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                      <a className="" href="/box/1" >
                        <div className="img-Wrapper">
                          <img className="img-max-height" src="http://api.tocu.vn/image/220x220/be9645becb337e08394a-1-1.jpg" alt="images" />
                          <div className="divshowdow"></div>
                        </div>
                        <div className="thumbnail-list-news">
                          <div className="list-news">
                            <div className="list-item">
                              <div className="item">
                                <div className="newsItem newCreditItem">
                                  <div className="newsImg">
                                    <span className="imgIcon imgIcon-list imgIcon-bg-red imgIcon-bg-store"></span>
                                  </div>
                                  <div className="newsText newsInfo">
                                    <p className="creditTitle">Cardigan</p>
                                    <p>
                                      <strong className="creditCost">150.000 đ</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="list-item" style={{backgroundImage: "url(http://api.tocu.vn/image/220x53/b8fa64ef4cef5471b9c5-11-2.jpg)"}} >
                              <div className="item">
                                <div className="newsItem newCreditItem">
                                  <div className="newsImg">
                                    <span className="imgIcon imgIcon-list">
                                      <img src="http://api.tocu.vn/image/50x50/b8fa64ef4cef5471b9c5-11-2.jpg" />
                                    </span>
                                  </div>
                                  <div className="newsText newsInfo">
                                    <p className="creditTitle">Cardigan dày</p>
                                    <p>
                                      <strong className="creditCost">130.000 đ</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="thumbnail-info">
                          <div className="infoItem">
                            <span className="titleItem">Sơ mi xô Nhật Hàn</span>
                            <span className="countItem">122 sản phẩm</span>
                          </div>
                          <div className="socialItem">
                            <span className="SmallIcon likeSmallIcon"></span>
                            <span className="socialMetaCount">132k</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                      <a className="" href="/box/1" >
                        <div className="img-Wrapper">
                          <img className="img-max-height" src="http://api.tocu.vn/image/220x220/be9645becb337e08394a-1-1.jpg" alt="images" />
                          <div className="divshowdow"></div>
                        </div>
                        <div className="thumbnail-list-news">
                          <div className="list-news">
                            <div className="list-item">
                              <div className="item">
                                <div className="newsItem newCreditItem">
                                  <div className="newsImg">
                                    <span className="imgIcon imgIcon-list imgIcon-bg-red imgIcon-bg-store"></span>
                                  </div>
                                  <div className="newsText newsInfo">
                                    <p className="creditTitle">Cardigan</p>
                                    <p>
                                      <strong className="creditCost">150.000 đ</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="list-item" style={{backgroundImage: "url(http://api.tocu.vn/image/220x53/b8fa64ef4cef5471b9c5-11-2.jpg)"}} >
                              <div className="item">
                                <div className="newsItem newCreditItem">
                                  <div className="newsImg">
                                    <span className="imgIcon imgIcon-list">
                                      <img src="http://api.tocu.vn/image/50x50/b8fa64ef4cef5471b9c5-11-2.jpg" />
                                    </span>
                                  </div>
                                  <div className="newsText newsInfo">
                                    <p className="creditTitle">Cardigan dày</p>
                                    <p>
                                      <strong className="creditCost">130.000 đ</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="thumbnail-info">
                          <div className="infoItem">
                            <span className="titleItem">Sơ mi xô Nhật Hàn</span>
                            <span className="countItem">122 sản phẩm</span>
                          </div>
                          <div className="socialItem">
                            <span className="SmallIcon likeSmallIcon"></span>
                            <span className="socialMetaCount">132k</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-3 col-lg-3">
                <div className='row row-sidebar'>
                  <AltContainer
                    actions={{SanphamActions}} >

                    <Sidebar
                      boxId={this.state.BoxId}
                      {...this.state.Box} />
                  </AltContainer>

                  <div className="col-md-12 col-lg-12">
                    <AltContainer
                      stores={[SaleStore]}
                      actions={{SanphamActions}}
                      inject={{
                        listSale: () => {
                          return SaleStore.getState().listSale
                        }
                      }} >

                      <Sale />
                    </AltContainer>
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

  renderProductDetail() {
    if(this.state.current === 1) {
      return (
        <AltContainer 
          stores={[AuthStore, SanphamStore, OrderStore]}
          actions={{SanphamActions, OrderActions}}
          inject={{
            auth: () => {
              return AuthStore.getState().auth
            },
            product: () => {
              return SanphamStore.getState().product
            },
            listOrder: () => {
              return OrderStore.getState().listOrder
            },
          }} >

          <ProductDetail
            Next={this.Next}
            handleBoxLogin={this.handleBoxLogin}
            hideNavbar={this.state.hideHeader} />
        </AltContainer>
      );
    }
  }

  renderPushListOrder() {
    if (this.state.current === 2) {
      return (
        <AltContainer
          stores={[OrderStore, SanphamStore]}
          actions={{OrderActions}}
          inject={{
            product: () => {
              return SanphamStore.getState().product
            },
            listOrder: () => {
              return OrderStore.getState().listOrder
            },
            itemPushOrder: () => {
              return OrderStore.getState().itemPushOrder
            }
          }} >

          <PushListOrder 
            Prev={this.Prev}
            Next={this.Next} />
        </AltContainer>
      )
    }
  }

  renderFormOrder() {
    if(this.state.current === 3) {
      return (
        <AltContainer
          stores={[CityStore, SanphamStore, ShipStore]}
          actions={{CityActions, OrderActions, ShipActions}}
          inject={{
            city: () => {
              return CityStore.getState().city
            },
            district: () => {
              return CityStore.getState().district
            },
            product: () => {
              return SanphamStore.getState().product
            },
            phiship: () => {
              return ShipStore.getState().phiship
            }
          }} >

          <FormOrder
            listOrder={[{id: 1}]}
            Prev={this.Prev}
            Next={this.Next} />
        </AltContainer>
      );
    }
  }

  renderStatusOrder() {
    if(this.state.current === 4) {
      return (
        <AltContainer
          stores={[OrderStore]}
          inject={{
            status: () => {
              return OrderStore.getState().createStatus;
            },
            order: () => {
              return OrderStore.getState().order;
            },
          }} >

          <StatusOrder
            Prev={this.Prev} />
        </AltContainer>
      );
    }
  }

  renderBoxLogin() {
    if(this.state.boxLogin) {
      return (
        <div id="boxLogin">
          <div className="row">
            <div className="col-xs-12 col-sm-7 col-md-5 col-centered" >
              <div className="centrix">
                <AltContainer
                  stores={[AuthStore]}
                  actions={{AuthActions}}
                  inject={{
                    loginState: function(props) {
                      return AuthStore.getState().loginState
                    }
                  }} >

                  <FormSignIn replaceWith={this.hideBoxLogin} nextPath={this.props.location.pathname} />
                </AltContainer>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if(this.state.boxVerify) {
      VerifyActions.getCode();
      return (
        <div id="boxLogin">
          <div className="row">
            <div className="col-xs-12 col-sm-7 col-md-5 col-centered" >
              <div className="centrix">
                <AltContainer
                  params={this.props.params}
                  stores={[VerifyStore, AuthStore]}
                  actions={{VerifyActions}}
                  inject={{
                    auth: () => {
                      return AuthStore.getState().auth
                    },
                    verify: () => {
                      return VerifyStore.getState().verify
                    },
                    verifyFaild: () => {
                      return VerifyStore.getState().verifyFaild
                    },
                    verifyState: () => {
                      return VerifyStore.getState().verifyState
                    }
                  }} >

                  <Verify hideBoxVerify={this.hideBoxVerify} />
                </AltContainer>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  handleBoxLogin(val) {
    if(val === 'token') {
      this.setState({
        boxLogin: true,
      });
    }
    if(val === 'verify') {
      this.setState({
        boxVerify: true,
      });
    }
  }
  
  hideBoxLogin() {
    this.setState({
      boxLogin: false,
    });
  }

  hideBoxVerify() {
    this.setState({
      boxVerify: false,
    });
  }

  Next(i) {
    if(i) {
      this.setState({
        current: this.state.current + i,
      });
    } else {
      this.setState({
        current: this.state.current + 1,
      });
    }
  }

  Prev(i) {
    if(i) {
      this.setState({
        current: this.state.current - i,
      });
    } else {
      this.setState({
        current: this.state.current - 1,
      });
    }
  }

};
