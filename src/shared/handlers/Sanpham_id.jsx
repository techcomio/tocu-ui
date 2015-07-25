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
import Sidebar         from '../components/productDetail/Sidebar';


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
                <div className='row row-sidebar'>
                  <Sidebar {...this.state.Box} />

                  <div className="col-md-12 col-lg-12">
                    <div className="panel panel-default">
                      <div className="panel-heading">Giảm giá</div>
                      <div className="list-group">
                        <a href="#" className="list-group-item">
                          <div className="list-group-body-item">
                            <div className="img">
                              <span className="imgIcon">
                                <img src="http://api.tocu.vn/image/50x50/be9645becb337e08394a-1-1.jpg" />
                              </span>
                            </div>
                            <div className="newsText">
                              <div className="title">Sơ mi denim Hàn</div>
                              <div className="price">250.000 d</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="list-group-item">
                          <div className="list-group-body-item">
                            <div className="img">
                              <span className="imgIcon">
                                <img src="http://api.tocu.vn/image/50x50/b8fa64ef4cef5471b9c5-11-2.jpg" />
                              </span>
                            </div>
                            <div className="newsText">
                              <div className="title">Sơ mi denim Hàn</div>
                              <div className="price">250.000 d</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="list-group-item">
                          <div className="list-group-body-item">
                            <div className="img">
                              <span className="imgIcon">
                                <img src="http://api.tocu.vn/image/50x50/1e4bdb15fe3ed751a276-3-3.jpg" />
                              </span>
                            </div>
                            <div className="newsText">
                              <div className="title">Áo ren, len móc Nhật</div>
                              <div className="price">250.000 d</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="list-group-item">
                          <div className="list-group-body-item">
                            <div className="img">
                              <span className="imgIcon">
                                <img src="http://api.tocu.vn/image/50x50/3c0827fac42221665e95-8-2.jpg" />
                              </span>
                            </div>
                            <div className="newsText">
                              <div className="title">Shorts Hàn Quốc</div>
                              <div className="price">250.000 d</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="list-group-item">
                          <div className="list-group-body-item">
                            <div className="img">
                              <span className="imgIcon">
                                <img src="http://api.tocu.vn/image/50x50/dc615fb338e70722455f-7-2.jpg" />
                              </span>
                            </div>
                            <div className="newsText">
                              <div className="title">Shorts Hàn Quốc</div>
                              <div className="price">250.000 d</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6 box auto */}
            <div className="row">
              <div className="col-md-9 col-lg-9">
                <div className="row row-bottom-detail">
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                      <a className="" href="/box/1" >
                        <h4 className="thumbnail-title">Sơ mi xô Nhật Hàn</h4>
                        <div className="imgWrapper">
                          <img className="img-max-height img-rounded" src="http://api.tocu.vn/image/192x130/93a197c1e33eeb10ad5d-2-7.jpg" alt="images" />
                          <span className="boardPinCount">4 SP</span>
                        </div>
                        <div>
                          <div className="thumbnail-list-news">
                            <div className="newsItem newCreditItem">
                              <div className="newsImg">
                                <span className="imgIcon imgIcon-list imgIcon-bg-red"></span>
                              </div>
                              <div className="newsText newsInfo">
                                <p className="creditTitle">SM2</p>
                                <p>
                                  <strong className="creditCost">150.000 đ</strong>
                                </p>
                              </div>
                            </div>
                            <div className="newsItem newCreditItem">
                              <div className="newsImg">
                                <span className="imgIcon imgIcon-list imgIcon-bg-red">
                                  <img src="http://api.tocu.vn/image/50x50/0cf60858dd9553a692d3-1-1.jpg" />
                                </span>
                              </div>
                              <div className="newsText newsInfo">
                                <p className="creditTitle">SM1</p>
                                <p>
                                  <strong className="creditCost">130.000 đ</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="btn btn-default btn-block btn-follow">
                            <span>1 likes</span>
                          </div>
                          <p></p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                      <a className="" href="/box/1" >
                        <h4 className="thumbnail-title">Sơ mi xô Nhật Hàn</h4>
                        <div className="imgWrapper">
                          <img className="img-max-height img-rounded" src="http://api.tocu.vn/image/192x130/93a197c1e33eeb10ad5d-2-7.jpg" alt="images" />
                          <span className="boardPinCount">4 SP</span>
                        </div>
                        <div>
                          <div className="thumbnail-list-news">
                            <div className="newsItem newCreditItem">
                              <div className="newsImg">
                                <span className="imgIcon imgIcon-list imgIcon-bg-red"></span>
                              </div>
                              <div className="newsText newsInfo">
                                <p className="creditTitle">SM2</p>
                                <p>
                                  <strong className="creditCost">150.000 đ</strong>
                                </p>
                              </div>
                            </div>
                            <div className="newsItem newCreditItem">
                              <div className="newsImg">
                                <span className="imgIcon imgIcon-list imgIcon-bg-red">
                                  <img src="http://api.tocu.vn/image/50x50/0cf60858dd9553a692d3-1-1.jpg" />
                                </span>
                              </div>
                              <div className="newsText newsInfo">
                                <p className="creditTitle">SM1</p>
                                <p>
                                  <strong className="creditCost">130.000 đ</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="btn btn-default btn-block btn-follow">
                            <span>1 likes</span>
                          </div>
                          <p></p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                      <a className="" href="/box/1" >
                        <h4 className="thumbnail-title">Sơ mi xô Nhật Hàn</h4>
                        <div className="imgWrapper">
                          <img className="img-max-height img-rounded" src="http://api.tocu.vn/image/192x130/93a197c1e33eeb10ad5d-2-7.jpg" alt="images" />
                          <span className="boardPinCount">4 SP</span>
                        </div>
                        <div>
                          <div className="thumbnail-list-news">
                            <div className="newsItem newCreditItem">
                              <div className="newsImg">
                                <span className="imgIcon imgIcon-list imgIcon-bg-red"></span>
                              </div>
                              <div className="newsText newsInfo">
                                <p className="creditTitle">SM2</p>
                                <p>
                                  <strong className="creditCost">150.000 đ</strong>
                                </p>
                              </div>
                            </div>
                            <div className="newsItem newCreditItem">
                              <div className="newsImg">
                                <span className="imgIcon imgIcon-list imgIcon-bg-red">
                                  <img src="http://api.tocu.vn/image/50x50/0cf60858dd9553a692d3-1-1.jpg" />
                                </span>
                              </div>
                              <div className="newsText newsInfo">
                                <p className="creditTitle">SM1</p>
                                <p>
                                  <strong className="creditCost">130.000 đ</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="btn btn-default btn-block btn-follow">
                            <span>1 likes</span>
                          </div>
                          <p></p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                      <a className="" href="/box/1" >
                        <h4 className="thumbnail-title">Sơ mi xô Nhật Hàn</h4>
                        <div className="imgWrapper">
                          <img className="img-max-height img-rounded" src="http://api.tocu.vn/image/192x130/93a197c1e33eeb10ad5d-2-7.jpg" alt="images" />
                          <span className="boardPinCount">4 SP</span>
                        </div>
                        <div>
                          <div className="thumbnail-list-news">
                            <div className="newsItem newCreditItem">
                              <div className="newsImg">
                                <span className="imgIcon imgIcon-list imgIcon-bg-red"></span>
                              </div>
                              <div className="newsText newsInfo">
                                <p className="creditTitle">SM2</p>
                                <p>
                                  <strong className="creditCost">150.000 đ</strong>
                                </p>
                              </div>
                            </div>
                            <div className="newsItem newCreditItem">
                              <div className="newsImg">
                                <span className="imgIcon imgIcon-list imgIcon-bg-red">
                                  <img src="http://api.tocu.vn/image/50x50/0cf60858dd9553a692d3-1-1.jpg" />
                                </span>
                              </div>
                              <div className="newsText newsInfo">
                                <p className="creditTitle">SM1</p>
                                <p>
                                  <strong className="creditCost">130.000 đ</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="btn btn-default btn-block btn-follow">
                            <span>1 likes</span>
                          </div>
                          <p></p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                      <a className="" href="/box/1" >
                        <h4 className="thumbnail-title">Sơ mi xô Nhật Hàn</h4>
                        <div className="imgWrapper">
                          <img className="img-max-height img-rounded" src="http://api.tocu.vn/image/192x130/93a197c1e33eeb10ad5d-2-7.jpg" alt="images" />
                          <span className="boardPinCount">4 SP</span>
                        </div>
                        <div>
                          <div className="thumbnail-list-news">
                            <div className="newsItem newCreditItem">
                              <div className="newsImg">
                                <span className="imgIcon imgIcon-list imgIcon-bg-red"></span>
                              </div>
                              <div className="newsText newsInfo">
                                <p className="creditTitle">SM2</p>
                                <p>
                                  <strong className="creditCost">150.000 đ</strong>
                                </p>
                              </div>
                            </div>
                            <div className="newsItem newCreditItem">
                              <div className="newsImg">
                                <span className="imgIcon imgIcon-list imgIcon-bg-red">
                                  <img src="http://api.tocu.vn/image/50x50/0cf60858dd9553a692d3-1-1.jpg" />
                                </span>
                              </div>
                              <div className="newsText newsInfo">
                                <p className="creditTitle">SM1</p>
                                <p>
                                  <strong className="creditCost">130.000 đ</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="btn btn-default btn-block btn-follow">
                            <span>1 likes</span>
                          </div>
                          <p></p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                      <a className="" href="/box/1" >
                        <h4 className="thumbnail-title">Sơ mi xô Nhật Hàn</h4>
                        <div className="imgWrapper">
                          <img className="img-max-height img-rounded" src="http://api.tocu.vn/image/192x130/93a197c1e33eeb10ad5d-2-7.jpg" alt="images" />
                          <span className="boardPinCount">4 SP</span>
                        </div>
                        <div>
                          <div className="thumbnail-list-news">
                            <div className="newsItem newCreditItem">
                              <div className="newsImg">
                                <span className="imgIcon imgIcon-list imgIcon-bg-red"></span>
                              </div>
                              <div className="newsText newsInfo">
                                <p className="creditTitle">SM2</p>
                                <p>
                                  <strong className="creditCost">150.000 đ</strong>
                                </p>
                              </div>
                            </div>
                            <div className="newsItem newCreditItem">
                              <div className="newsImg">
                                <span className="imgIcon imgIcon-list imgIcon-bg-red">
                                  <img src="http://api.tocu.vn/image/50x50/0cf60858dd9553a692d3-1-1.jpg" />
                                </span>
                              </div>
                              <div className="newsText newsInfo">
                                <p className="creditTitle">SM1</p>
                                <p>
                                  <strong className="creditCost">130.000 đ</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="btn btn-default btn-block btn-follow">
                            <span>1 likes</span>
                          </div>
                          <p></p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
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
/*
<div className="col-md-12 col-lg-12">
  <div className="panel panel-default">
    <div className="panel-heading">Panel heading</div>
    <ul className="list-group">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>
</div>*/
/*
<div className="col-md-12 col-lg-12">
  <div className="thumbnail sidebar">
    <nav className="navbar navbar-default navbar-static-top">
      <div className="nav navbar-nav navbar-text">
        <div className="titleBox-giamgia">
          <span>Giam gia</span>
        </div>
      </div>
    </nav>
    <div className="sidebar-body">
      <ul className="list-group">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  </div>
</div>
*/