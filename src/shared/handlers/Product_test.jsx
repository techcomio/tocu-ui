'use strict';

import React          from 'react/addons';
import {Link}         from 'react-router';
import classNames     from 'classnames';
import {prepareRoute} from '../decorators';
import SanphamStore   from '../store/SanphamStore';
import SanphamActions from '../actions/SanphamActions';
import CityActions    from '../actions/CityActions';
import OrderActions   from '../actions/OrderActions';
import VerifyActions  from '../actions/VerifyActions';
import SaleActions    from '../actions/SaleActions';
/**
 * @Component
 */
import FormSignIn    from '../components/Form/SignIn';
import Verify        from '../components/Form/Verify';
import FormOrder     from '../components/FormOrder';
import Product       from '../components/Product';
import PushListOrder from '../components/Product/PushListOrder';
import StatusOrder   from '../components/Product/StatusOrder';
import Header        from '../components/Header/ProductID';
import Sidebar       from '../components/productDetail/Sidebar';
import Sale          from '../components/Sale';


@prepareRoute(async function ({ params }) {
  return await * [
    SanphamActions.getSanphamID(params),
    SaleActions.getProductSale(),
    CityActions.getCity(),
  ];
})

export default class ProductID extends React.Component {

  constructor (props) {
    super(props)

    this._bind('onChangeSanphamStore', 'handleBoxLogin', 'Next', 'Prev', 'hideBoxLogin', 'renderBoxLogin', 'renderProductDetail', 'renderFormOrder', 'renderStatusOrder', 'hideBoxVerify');

    this.state = {
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
    /*OrderActions.getListOrder();*/
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
        <Header />
				
        <section id="productDetail">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-9">
                {this.renderProductDetail()}

                {/*
                {this.renderPushListOrder()}
                
                {this.renderFormOrder()}

                {this.renderStatusOrder()}
                */}

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

        {/*this.renderBoxLogin()*/}
			</div>
    );
	}

  renderProductDetail() {
    return (
      <Product
        Next={this.Next}
        handleBoxLogin={this.handleBoxLogin} />
    );
  }

  renderPushListOrder() {
    if (this.state.current === 2) {
      return (
        <PushListOrder 
          Prev={this.Prev}
          Next={this.Next} />
      )
    }
  }

  renderFormOrder() {
    if(this.state.current === 3) {
      return (
        <FormOrder
          Prev={this.Prev}
          Next={this.Next} />
      );
    }
  }

  renderStatusOrder() {
    if(this.state.current === 4) {
      return (
        <StatusOrder
          Prev={this.Prev} />
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
                <FormSignIn replaceWith={this.hideBoxLogin} nextPath={this.props.location.pathname} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if(this.state.boxVerify) {
      return (
        <div id="boxLogin">
          <div className="row">
            <div className="col-xs-12 col-sm-7 col-md-5 col-centered" >
              <div className="centrix">
                <Verify hideBoxVerify={this.hideBoxVerify} />
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
      VerifyActions.getCode();
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
