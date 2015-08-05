'use strict';

import React        from 'react/addons';
import OrderStore   from '../../store/OrderStore';
import OrderActions from '../../actions/OrderActions';
/**
 * @Component
 */
 import BoxOrder from './BoxOrder';


export default class BoxYeuThich extends React.Component {

  constructor (props) {
    super(props);
    this._onChangeOrderStore = this._onChangeOrderStore.bind(this);

    this.state = {
      listOrder: OrderStore.getState().listOrder,
    };
  }

  componentDidMount() {
    OrderStore.listen(this._onChangeOrderStore);
  }

  componentWillUnmount() {
    OrderStore.unlisten(this._onChangeOrderStore);
  }

  _onChangeOrderStore(state) {
    this.setState({
      listOrder: state.listOrder,
    });
  }

	render () {
    return (<span></span>);
    if(this.state.listOrder.size < 1) {
    }
    return (
      <div>
        <div className="row">
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
            <div className="thumbnail">
              <a className="" href="/box/1" >
                <div className="img-Wrapper">
                  <img className="img-max-height" src="https://s-media-cache-ak0.pinimg.com/236x/90/22/fe/9022fe3e8e2c085f75ed73e60bbb20aa.jpg" alt="images" />
                  <div className="divshowdow"></div>
                </div>
                <div className="thumbnail-list-news">
                  <div className="list-news">
                    <div className="list-item">
                      <div className="item">
                        <div className="newsItem newCreditItem">
                          <div className="newsImg">
                            <span className="imgIcon imgIcon-list imgIcon-bg-red imgIcon-bg-heart"></span>
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
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
            <BoxOrder listOrder={this.state.listOrder} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="block-related">
              <span>
                <span className="img">img</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
	}

};
