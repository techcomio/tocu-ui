'use strict';

import React      from 'react/addons';
import classNames from 'classnames';


export default class FormOrder extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hideHeader: false,
    }
  }

  render() {
    let classNavbarOrder = classNames({
      "navbar-product-detail": true,
      sticky: this.state.hideHeader,
    });

    return (
      <div className="productOrder">
        <div className={classNavbarOrder}>
          <nav className="navbar navbar-defaul">
            <div className="navbar-header">
              <button onClick={this.handleClickHuy} type="button" className="btn btn-default navbar-btn">Hủy</button>
            </div>
            <div className="nav navbar-nav navbar-right">
              <button onClick={this.handleClickDatMua} type="button" className="btn btn-primary navbar-btn">Hoàn tất</button>
            </div>
          </nav>
        </div>
        <div className="product">
          <div className="infoOrder">
            <div className="infoOrder-body">
              <div className="infoOrder-img">
                <img src="" alt="img" className="img-rounded" />
              </div>
              <div className="infoOrder-text">
                <h3></h3>
                <span></span>
              </div>
            </div>
          </div>
          <div className="infoNguoiNhan">
            <div className="title-border">
              <p>Thông tin người nhận</p>
            </div>
            <p className="text-center">Điền đầy đủ thông tin người nhận hàng</p>

            <div className="title-border">
              <p>Hình thức vận chuyển</p>
            </div>
            <div className="form-inline">
            </div>

            <div className="title-border">
              <p>Hình thức thanh toán</p>
            </div>
            <div className="form-inline">
            </div>

          </div>
        </div>
      </div>
    )
  }

  handleClickHuy(e) {
    console.log('handleClickHuy');
  }

  handleClickDatMua(e) {
    console.log('handleClickDatMua');
  }

}
