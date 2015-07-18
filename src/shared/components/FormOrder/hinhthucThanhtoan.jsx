"use strict";

import React      from 'react';
import classNames from 'classnames';


export default class HinhthucThanhtoan extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="checkbox disabled">
            <label>
              <input type="checkbox" value="" disabled/>&nbsp; COD nhận hàng và thanh toán trực tiếp cho nhân viên giao hàng
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="checkbox disabled">
            <label>
              <input type="checkbox" value="" disabled/>&nbsp; Chuyển khoản qua tài khoản ngân hàng, thẻ, ATM trong vòng 12h
            </label>
          </div>
        </div>
      </div>
    );
  }
  
};
