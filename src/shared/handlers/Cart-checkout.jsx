'use strict';
import React from 'react/addons';
import CityStore from '../store/CityStore';
import CityActions from '../actions/CityActions';
/**
 * @Component
 */
import NavbarCartShip from '../components/Header/Navbar/NavbarCartShip';
import FormNguoiNhan from '../components/FormOrder/formNguoiNhan';


export default class Checkout extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      city: CityStore.getState().city
      , district: CityStore.getState().district
    }
  }

  componentDidMount() {
    CityStore.listen(this._onChangeCityStore);
  }

  componentWillUnmount() {
    CityStore.unlisten(this._onChangeCityStore);
  }

  _onChangeCityStore = (state) => {
    this.setState({
      city: CityStore.getState().city
      , district: CityStore.getState().district
    });
  }

  componentWillMount() {
    this.props.HeadParams.setTitle("Checkout | tocu.vn");
    this.props.HeadParams.setDescription("Checkout | Description");
  }

	render () {
    return (
      <div className="cart">
        <NavbarCartShip
          next={this._next}
          prev={this._prev} />

        <div className="cart-checkout">
          <div className="sidebar">
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                  <h4 className="panel-title">
                    <a role="button" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      GIỎ HÀNG <i className="fa fa-angle-down pull-right"></i>
                    </a>
                  </h4>
                </div>
                <div aria-expanded="true" id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <div className="panel-body">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <div className="list-group-body-item">
                          <div className="img">
                            <span className="imgIcon">
                              <img src="http://api.tocu.vn/image/50x50/b8fa64ef4cef5471b9c5-11-2.jpg" />
                            </span>
                          </div>
                          <div className="newsText">
                            <div className="title">CV1</div>
                            <div className="price">
                              <span className="price-list">123.000đ</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="list-group-body-item">
                          <div className="img">
                            <span className="imgIcon">
                              <img src="http://api.tocu.vn/image/50x50/b8fa64ef4cef5471b9c5-11-2.jpg" />
                            </span>
                          </div>
                          <div className="newsText">
                            <div className="title">CV2</div>
                            <div className="price">
                              <span className="price-list">123.000đ</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="panel-footer">
                      <div className="panel-table">
                        <div className="panel-key">Tổng:</div>
                        <div className="panel-val">123.000đ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                  <h4 className="panel-title">
                    <a className="" role="button" data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                      VẬN CHUYỂN <i className="fa fa-angle-down pull-right"></i>
                    </a>
                  </h4>
                </div>
                <div aria-expanded="true" id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
                  <div className="panel-body panel-vanchuyen">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <div className="panel-list">
                          <div className="panel-key">Phí:</div>
                          <div className="panel-val">50.000đ</div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="panel-list">
                          <div className="panel-key">Thời gian:</div>
                          <div className="panel-val">3 ngày</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body-checkout">
            <FormNguoiNhan
              ref="formNguoiNhan"
              city={this.state.city}
              district={this.state.district}
              product={this.state.product}
              onChangeTest={this.resetHinhthucVC}
              onChangeSelectCity={this._onChangeSelectCity}
              onChangeDisable={this._ChangeDisable} />
          </div>
        </div>
      </div>
    );
	}

  _next = (e) => {

  }

  _prev = (e) => {

  }

  resetHinhthucVC = () => {
    this.setState({
      hinhthucVC: null
    });
  }

  _onChangeSelectCity = (citySelect) => {
    CityActions.getDistrict({city: citySelect});
    this.setState({
      shippingMethod: '',
    });
  }

  _ChangeDisable = (value) => {
    this.setState({
      disabled: value,
    });
  }

};
