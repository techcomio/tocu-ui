'use strict';

import React          from 'react';
import {Link}         from 'react-router';
import classNames     from 'classnames';
import {prepareRoute} from '../decorators';
import SanphamStore   from '../store/SanphamStore';
import SanphamActions from '../actions/SanphamActions';
/**
 * @component
 */
import AltContainer    from 'alt/AltContainer';
import Header          from '../components/productDetail/Header';
import ImgSlideProduct from '../components/productDetail/ImgSlideProduct';
import NavbarProductID from '../components/productDetail/NavbarProductID';
import InfoSanpham     from '../components/SanphamID/InfoSanpham';
import Detail          from '../components/SanphamID/Detail';
import Mau             from '../components/SanphamID/Mau';


@prepareRoute(async function ({ params }) {
  return await * [
    SanphamActions.getSanphamID(params),
  ];
})

export default class SanphamID extends React.Component {

  constructor (props) {
    super(props)

    this._bind('onChangeSanphamStore');

    this.state = {
      hideHeader: false,
      ...SanphamStore.getState().product.toJS(),
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
    return (
      <div>
        <Header hideHeader={this.state.hideHeader} />
				
        <section id="productDetail">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-9">
                <div className="productDetail" >
                  {/* Navbar Product */}
                  <NavbarProductID
                    countLike={this.state.likesCount}
                    hideNavbar={this.state.hideHeader} />

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
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="row">
                  <div className="col-xs-6 col-sm-4 col-md-12 col-lg-12">
                    <div className="thumbnail">
                      <h4 className="thumbnail-title">Chăn đơn</h4>
                      <div className="imgWrapper">
                        <img className="img-rounded" data-holder-rendered="true" src="/img/404.jpg" data-src="holder.js/100%x200" alt="100%x200" />
                        <span className="boardPinCount">15 SP</span>
                      </div>
                      <div>
                        <div className="thumbnail-list-news">
                          <a href="#" className="newsItem newCreditItem">
                            <div className="newsImg"><span className="imgIcon imgIcon-bg-red imgIcon-shopping"></span></div>
                            <div className="newsText newsInfo">
                              <p className="creditTitle">Chăn đơn CD01</p>
                              <p><strong className="creditCost">150.000d</strong></p>
                            </div>
                          </a>
                          <a href="#" className="newsItem newCreditItem">
                            <div className="newsImg"><span className="imgIcon"></span></div>
                            <div className="newsText newsInfo">
                              <p className="creditTitle">Chăn đơn CD02</p>
                              <p><strong className="creditCost">150.000d</strong></p>
                            </div>
                          </a>
                        </div>
                        <p><div className="btn btn-default btn-block btn-follow">Follow</div></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-12 col-lg-12">
                    <div className="thumbnail">
                      <h4 className="thumbnail-title">Chăn đơn</h4>
                      <div className="imgWrapper">
                        <img className="img-rounded" data-holder-rendered="true" src="/img/404.jpg" data-src="holder.js/100%x200" alt="100%x200" />
                        <span className="boardPinCount">15 SP</span>
                      </div>
                      <div>
                        <div className="thumbnail-list-news">
                          <a href="#" className="newsItem newCreditItem">
                            <div className="newsImg"><span className="imgIcon imgIcon-bg-red imgIcon-shopping"></span></div>
                            <div className="newsText newsInfo">
                              <p className="creditTitle">Chăn đơn CD01</p>
                              <p><strong className="creditCost">150.000d</strong></p>
                            </div>
                          </a>
                          <a href="#" className="newsItem newCreditItem">
                            <div className="newsImg"><span className="imgIcon"></span></div>
                            <div className="newsText newsInfo">
                              <p className="creditTitle">Chăn đơn CD02</p>
                              <p><strong className="creditCost">150.000d</strong></p>
                            </div>
                          </a>
                        </div>
                        <p><div className="btn btn-default btn-block btn-follow">Follow</div></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
			</div>
    );
	}

};
