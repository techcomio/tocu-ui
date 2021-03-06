'use strict';
import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';


export default React.createClass({

	render() {
		const { box } = this.props;
		let img_url = "/img/404.jpg";
		let price = box.get('price') !== null ? box.get('price').toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '0';
		let salePrice = box.get('salePrice') !== null ? box.get('salePrice').toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : null;
		let images = box.getIn(['images', 0]);
	  if(images) {
      img_url = images.replace(/image\//gi, 'image/230x/');
	  }

		return (
      <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3'>
        <div className="thumbnail thumbnail-masonry" >
          <Link to={`/product/${box.get('id')}`} >
            <img className="imgWrapper" data-holder-rendered="true" src={img_url} alt="images" />
            <div className="description">
							<span className="nameBox">{box.get('description')}</span>
            </div>
            <div className="infoProduct border-top">
              <span className="title">{box.get('code')}</span>
							{salePrice ? (
								<span className="price">
									<span className="price-list">{price} VNĐ</span>
	                <span className="price-sale">{salePrice} VNĐ</span>
	              </span>
							) : (
								<span className="price">
									<span>{price} VNĐ</span>
	              </span>
							)}
            </div>
          </Link>
        </div>
      </div>
		);
	},

});






// 'use strict';
// import React from 'react/addons';
// import { Link } from 'react-router';
// import classNames from 'classnames';
//
//
// export default React.createClass({
//
// 	render() {
// 		let img_url = "/img/404.jpg";
// 	  let price = this.props.price !== null ? this.props.price.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '0';
//
// 	  if(this.props.images) {
//       let url = this.props.images[0];
//       img_url = url.replace(/image\//gi, 'image/230x/');
// 	  }
//
// 		return (
//       <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3'>
//         <div className="thumbnail thumbnail-masonry" >
//           <Link to={`/product/${this.props.id}`} >
//             <img className="imgWrapper" data-holder-rendered="true" src={img_url} alt="images" />
//             <div className="description">
//               <span className="nameBox">{this.props.description}</span>
//             </div>
//             <div className="infoProduct">
//               <span className="title">{this.props.code}</span>
//               <span className="price">
//                 {/*<span className="price-list">153.000 VNĐ</span>*/}
//                 <span className="price-sale">{price} VNĐ</span>
//               </span>
//             </div>
//           </Link>
//         </div>
//       </div>
// 		);
// 	},
//
// });
