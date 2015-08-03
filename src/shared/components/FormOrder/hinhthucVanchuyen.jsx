"use strict";

import React      from 'react/addons';
import classNames from 'classnames';


export default class HinhthucVanchuyen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      codChecked: false,
      cpnChecked: false,
    };
  }

  render() {
    return this.renderCheckbox();
  }

  renderCheckbox() {
    if(this.props.disabled) {
      return (
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <span className="hihi">COD:</span>
          </div>
          <div className="col-xs-9 col-sm-9 col-md-9">
            <div className="checkbox disabled">
              <label>
                <input ref="cod" type="checkbox" checked={false} disabled={false} />&nbsp; Chuyển hàng trực tiếp
              </label>
            </div>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3">
            <p className="text-right">{0} đ</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12">
            <span className="hihi">CPN:</span>
          </div>
          <div className="col-xs-9 col-sm-9 col-md-9">
            <div className="checkbox disabled">
              <label>
                <input ref="cpn" type="checkbox" checked={false} disabled={false} />&nbsp; Chuyển phất nhanh Viettel
              </label>
            </div>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3">
            <p className="text-right">{0} đ</p>
          </div>
        </div>
      )
    } else {
      let classhinhthucCOD = classNames({
        checkbox: true,
        disabled: this.props.disabled || this.props.shippingMethod !== 'cod',
      });

      let classhinhthucCPN = classNames({
        checkbox: true,
        disabled: this.props.disabled || this.props.shippingMethod !== 'delivery',
      });
      let costCod = 0,
        costCpn = 0;

      costCod = !this.props.disabled && this.props.shippingMethod === 'cod' ? this.props.cost.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : 0;
      costCpn = !this.props.disabled && this.props.shippingMethod === 'delivery' ? this.props.cost.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : 0;

      return (
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <span className="hihi">COD:</span>
          </div>
          <div className="col-xs-9 col-sm-9 col-md-9">
            <div className={classhinhthucCOD}>
              <label>
                <input onClick={this.codOnChecked.bind(this)} ref="cod" type="checkbox" onChange={this.onChange.bind(this, 'cod')} checked={this.state.codChecked} disabled={this.props.disabled || this.props.shippingMethod === 'delivery'} />&nbsp; Chuyển hành trực tiếp
              </label>
            </div>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3">
            <p className="text-right">{costCod} đ</p>
          </div>
           <div className="col-xs-12 col-sm-12 col-md-12">
            <span className="hihi">CPN:</span>
          </div>
          <div className="col-xs-9 col-sm-9 col-md-9">
            <div className={classhinhthucCPN}>
              <label>
                <input onClick={this.cpnOnChecked.bind(this)} ref="cpn" type="checkbox" onChange={this.onChange.bind(this, 'cpn')} checked={this.state.cpnChecked} disabled={this.props.disabled || this.props.shippingMethod === 'cod'} />&nbsp; Chuyển phất nhanh Viettel
              </label>
            </div>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3">
            <p className="text-right">{costCpn} đ</p>
          </div>
        </div>
      )
    }
  }

  onChange(type, e) {
    let checked = e.target.checked;
    this.props.onChange(type, checked);
  }

  codOnChecked() {
    this.setState({
      codChecked: !this.state.codChecked,
      cpnChecked: false,
    });
  }

  cpnOnChecked() {
    this.setState({
      codChecked: false,
      cpnChecked: !this.state.cpnChecked,
    });
  }

  getCheckbox() {
    if(this.props.disabled) {
      return null;
    } else {
      if(React.findDOMNode(this.refs.cod).checked && !React.findDOMNode(this.refs.cod).disabled) {
        return "cod";
      }
      if(React.findDOMNode(this.refs.cpn).checked && !React.findDOMNode(this.refs.cpn).disabled) {
        return "cpn";
      }
    }
    return null;
  }

};

  // React.findDOMNode(this.refs.cod).checked = true;
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // "use strict";

// import React      from 'react';
// import classNames from 'classnames';


// export default class HinhthucVanchuyen extends React.Component {

//   render() {

//     let classhinhthucCOD = classNames({
//       checkbox: true,
//       disabled: this.props.disabled || this.props.shippingMethod !== 'COD',
//     });

//     let classhinhthucCPN = classNames({
//       checkbox: true,
//       disabled: this.props.disabled || this.props.shippingMethod !== 'delivery',
//     });
//     let costCod = 0,
//       costCpn = 0;

//     costCod = !this.props.disabled && this.props.shippingMethod === 'COD' ? this.props.cost.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : 0;
//     costCpn = !this.props.disabled && this.props.shippingMethod === 'delivery' ? this.props.cost.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : 0;
    
//     return (
//       <div className="row">
//         <div className="col-xs-9 col-sm-9 col-md-9">
//           <div className={classhinhthucCOD}>
//             <label>
//               <input ref="cod" onChange={this.onChange.bind(this, 'cod')} type="checkbox" disabled={this.props.disabled || this.props.shippingMethod !== 'COD'} />&nbsp; COD chuyển hành trực tiếp
//             </label>
//           </div>
//         </div>
//         <div className="col-xs-3 col-sm-3 col-md-3">
//           <p className="text-center">{costCod}đ</p>
//         </div>
//         <div className="col-xs-9 col-sm-9 col-md-9">
//           <div className={classhinhthucCPN}>
//             <label>
//               <input ref="cpn" type="checkbox" onChange={this.onChange.bind(this, 'cpn')} disabled={this.props.disabled || this.props.shippingMethod !== 'delivery'} />&nbsp; Chuyển phất nhanh Viettel
//             </label>
//           </div>
//         </div>
//         <div className="col-xs-3 col-sm-3 col-md-3">
//           <p className="text-center">{costCpn}đ</p>
//         </div>
//       </div>
//     );
//   }

//   onChange(type, e) {
//     let checked = e.target.checked;
//     this.props.onChange(type, checked);
//   }

//   getCheckbox() {
//     console.log('test', React.findDOMNode(this.refs.cod).disabled)
//     if(React.findDOMNode(this.refs.cod).checked && !React.findDOMNode(this.refs.cod).disabled) {
//       return "cod";
//     }
//     if(React.findDOMNode(this.refs.cpn).checked && !React.findDOMNode(this.refs.cpn).disabled) {
//       return "cpn";
//     }
//     return null;
//   }

// };

  // React.findDOMNode(this.refs.cod).checked = true;