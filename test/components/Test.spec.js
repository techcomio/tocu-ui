import React from 'react';
import { Link } from 'react-router';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { fromJS, Map, List } from 'immutable';
import { createRenderer } from 'react-addons-test-utils';

expect.extend(expectJSX);

const renderer = createRenderer();
import Test from 'components/Box/test';


describe.only('components/test.jsx', () => {

	it.only('works not salePrice', () => {
		let dataBox = fromJS({
			id: 1,
			description: 'test',
			code: 'DH1',
			price: 100000,
			salePrice: null,
			images: ['http://tocu.vn/image/aolen.jpg', 'http://tocu.vn/image/aolen2.jpg']
		});
		let location = { pathname : {} };
    renderer.render(<Test data={dataBox} location={location} />);
    let actualElement = renderer.getRenderOutput();

		expect(actualElement).toEqualJSX(
			<div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3'>
        <div className="thumbnail thumbnail-masonry" >
					<Link to="/product/1" state={{ modal: true, returnTo: location.pathname }}>
						<img className="imgWrapper" data-holder-rendered="true" src="http://tocu.vn/image/230x/aolen.jpg" alt="images" />
						<div className="description">
							<span className="nameBox">test</span>
		        </div>
						<div className="infoProduct border-top">
              <span className="title">DH1</span>
		        </div>
						<span className="price">
							<span>100.000 VNĐ</span>
						</span>
	        </Link>
        </div>
      </div>
		)
	});

	it('works have salePrice', () => {
		let dataBox = fromJS({
			id: 1,
			description: 'test',
			code: 'DH1',
			price: 100000,
			salePrice: 80000,
			images: ['http://tocu.vn/image/aolen.jpg', 'http://tocu.vn/image/aolen2.jpg']
		});
		let location = { pathname : {} };
    renderer.render(<Test data={dataBox} location={location} />);
    let actualElement = renderer.getRenderOutput();

		expect(actualElement).toEqualJSX(
			<div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3'>
        <div className="thumbnail thumbnail-masonry" >
					<Link to="/product/1" state={{ modal: true, returnTo: location.pathname }}>
						<img className="imgWrapper" data-holder-rendered="true" src="http://tocu.vn/image/230x/aolen.jpg" alt="images" />
						<div className="description">
							<span className="nameBox">test</span>
		        </div>
						<div className="infoProduct border-top">
              <span className="title">DH1</span>
		        </div>
						<span className="price">
							<span className="price-list">100.000 VNĐ</span>
							<span className="price-sale">80.000 VNĐ</span>
						</span>
	        </Link>
        </div>
      </div>
		)
	});

	it('works not images', () => {
		let dataBox = fromJS({
			id: 1,
			description: 'test',
			code: 'DH1',
			price: 100000,
			images: []
		});
		let location = { pathname : {} };
    renderer.render(<Test data={dataBox} location={location} />);
    let actualElement = renderer.getRenderOutput();

		expect(actualElement).toEqualJSX(
			<div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3'>
        <div className="thumbnail thumbnail-masonry" >
					<Link to="/product/1" state={{ modal: true, returnTo: location.pathname }}>
						<img className="imgWrapper" data-holder-rendered="true" src="/img/404.jpg" alt="images" />
						<div className="description">
							<span className="nameBox">test</span>
		        </div>
						<div className="infoProduct border-top">
              <span className="title">DH1</span>
		        </div>
						<span className="price">
							<span>100.000 VNĐ</span>
						</span>
	        </Link>
        </div>
      </div>
		)
	});

});
