/* @jsx React.DOM */
'use strict';

import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

/* @jsx */
import ImgSlideProduct from '../components/productDetail/ImgSlideProduct';

export default class Sanpham extends React.Component {

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
    	transform: false,
    	NavbarWidth: null,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
		var offsetWidth = this.refs.navbar.getDOMNode().offsetWidth;
    var scrollTop = window.scrollY;
    var transform = scrollTop >= 33;
    this.setState({
			NavbarWidth: offsetWidth,
      transform: transform
    });
  }


  componentWillMount() {
    this.props.headParams.setTitle("Sanpham | tocu.vn");
    this.props.headParams.setDescription("set Description");
  }

	render() {
      let classesNavbar = classNames({
      	"navbar-product-detail": true,
      	sticky: this.state.transform
      });

		return (
			<div>
				<header>
		      <div className="container-fluid">

		      	<nav className="navbar navbar-default navbar-fixed-top">
				      <div className="container-fluid">
				        <div className="navbar-header">
				        	<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				            <span className="sr-only">Toggle navigation</span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				          </button>
					        <Link to="home" className="navbar-brand" href="#">
				            <img alt="Brand" src="/img/logo.png" width="40" height="40" />
				          </Link>
				          <p className="navbar-text pull-left">Tổ Cú</p>
				        </div>
				        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			          	<div className="nav navbar-nav navbar-right">
						        <button type="button" className="btn btn-sm btn-default navbar-btn">Sign in</button>
						        <button type="button" className="btn btn-sm btn-primary navbar-btn">Sign up</button>
					        </div>
				        </div>
			        </div>
				    </nav>

		      </div>
		    </header>

        <section id="productDetail">
					<div className="container">
				    <div className="row">
				      <div className="col-md-9 col-lg-9">
				        <div ref="navbar" className="productDetail" >
				        	<div className={classesNavbar} style={{width: this.state.NavbarWidth}}>
					   				<nav className="navbar navbar-defaul">
							        <div className="navbar-header">
								        <div className="btn-group">
												  <button type="button" className="btn btn-default navbar-btn"><i className="fa fa-heart gray">&nbsp;</i> Thích</button>
												  <button type="button" className="btn btn-default count-like navbar-btn"><span>12</span></button>
												</div>
								        <button type="button" className="btn btn-default navbar-btn"><i className="fa fa-facebook-square gray">&nbsp; </i>Chia sẻ</button>
							        </div>
					          	<div className="nav navbar-nav navbar-right">
								        <button type="button" className="btn btn-primary navbar-btn"><i className="fa fa-shopping-cart gray">&nbsp; </i> Mua</button>
							        </div>
								    </nav>
							    </div>
							    <div className="product">

							    	<ImgSlideProduct 
							    		dataUrlImg={[
							    			'http://images.urbanoutfitters.com/is/image/UrbanOutfitters/35405885_014_b?$medium$&defaultImage=',
							    			'http://images.urbanoutfitters.com/is/image/UrbanOutfitters/35405885_014_g?$medium$&defaultImage=',
							    			'http://images.urbanoutfitters.com/is/image/UrbanOutfitters/35405885_014_d?$medium$&defaultImage=',
							    			]}
							    		dataUrlImgTab={[
							    			'http://images.urbanoutfitters.com/is/image/UrbanOutfitters/35405885_014_b?$medium$&defaultImage=',
							    			'http://images.urbanoutfitters.com/is/image/UrbanOutfitters/35405885_014_g?$medium$&defaultImage=',
							    			'http://images.urbanoutfitters.com/is/image/UrbanOutfitters/35405885_014_d?$medium$&defaultImage=',
							    			]}
							    		/>

							    	<div className="product-detail">
							    		<div className="detail">
											  <h1>Váy trắng vintage</h1>
											  <h3 className="gia">Giá: 250.000 VNĐ</h3>
							    		</div>
										  <div className="row">
										  	<div className="col-md-6">
										  		  <ul >
													    <li>Mã số: <strong>V112</strong></li>
													    <li>Tình trạng: <strong>Còn hàng</strong></li>
													    <li>
													    	<p className="status">từ năm ngoái Cú đã phát hiện ra trong kiện sơ mi xô Nhật rất hay có áo của hãng này. Ấn tượng đầu tiên là từ cái tên :x tiếp theo bởi style đơn gian nhưng thể nào cũng sẽ có chi tiết gì đó rất nhở thôi nhưng lại rất xinh xắn đáng yêu, chiếc nào cũng vậy í! Còn đường kim mũi chỉ nữa thì cẩn thận perfect luôn.</p>
													    </li>
													  </ul>
										  	</div>
										  	<div className="col-md-6">
										  		  <ul>
													    <li className="border-bottom-2"><strong>Mẫu</strong></li>
													    <li>Cao: <strong>1m65</strong></li>
													    <li>Nặng: <strong>50 kg</strong></li>
													    <li>Vòng 1: <strong>87 cm</strong></li>
													    <li>Vòng 2: <strong>67 cm</strong></li>
													    <li>Vòng 3: <strong>90 cm</strong></li>
													  </ul>
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

}
