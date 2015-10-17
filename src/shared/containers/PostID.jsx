'use strict';
import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { prepareRoute } from '../decorators';
import Navbar from '../components/Navbar';


export default class PostID extends React.Component {

	constructor(props) {
    super(props);
  }

  render() {
    const { params: { id } } = this.props;
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <section id="product-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">

                <div className="card card-baiviet">
                  <div className="card-wallpaper">
                    <img className="card-img-top" src="/img/berlin-fashion.jpg" alt="Card image cap" />
                    <div className="card-title">
                      <div className="title-content">
                        <h2>Nơi chúng ta thỏa sức với niềm đam mê đồ cũ & handmade</h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-block">
                    <p className="card-text">VIM là một editor nổi tiếng và được rất nhiều người ghét =))</p>
                    <p className="card-text">Nói vậy không có nghĩa là không ai thích VIM, rất nhiều người thích sử dụng VIM và hầu như chẳng bao giờ thèm đụng tới những công cụ như <a href="http://www.sublimetext.com">Sublime</a> hay <a href="https://atom.io">Atom</a> nữa.</p>
                      <h2>Khởi động Vim</h2>
                    <p className="card-text">Ưu điểm của VIM là mọi thao tác đều có thể thực hiện thông qua các phím tắt, vì vậy bạn không cần dùng tới con chuột khi dùng VIM nữa. Cũng chính vì vậy nên VIM có một lượng phím tắt đồ sộ đủ để làm nản lòng bất cứ ai có ý định học sử dụng nó.</p>
                    <p className="card-text">Trong bài viết sau, mình giới thiệu một số phím tắt cơ bản đủ để bạn có thể thao tác trên VIM một cách bình thường, thực hiện các tác vụ di chuyển con trỏ, chỉnh sửa tài liệu. Dần dần, sau khi đã quen với cách sử dụng VIM rồi, chúng ta sẽ đi tiếp sang bài giới thiệu nâng cao hơn về các chức năng khác của VIM.</p>
                    <p className="card-text">Trong bài viết sau, mình giới thiệu một số phím tắt cơ bản đủ để bạn có thể thao tác trên VIM một cách bình thường, thực hiện các tác vụ di chuyển con trỏ, chỉnh sửa tài liệu. Dần dần, sau khi đã quen với cách sử dụng VIM rồi, chúng ta sẽ đi tiếp sang bài giới thiệu nâng cao hơn về các chức năng khác của VIM.</p>
                    <img src="https://s3-ap-southeast-1.amazonaws.com/kipalog.com/VIM_Navigation.png_qilqdiwyty" alt="image vim" />
                    <h2>Khởi động Vim</h2>
                    <p className="card-text">Để sử dụng VIM, các bạn chỉ việc mở <code>Terminal</code> ra và gõ:</p>
                    <p className="card-text">Để sử dụng VIM, các bạn chỉ việc mở <code>Terminal</code> ra và gõ:</p>
                    <img src="https://s3-ap-southeast-1.amazonaws.com/kipalog.com/VIM_Movement.gif_tke9qhlf8y" alt="image vim" />
                    <p className="card-text">Để dịch chuyển nhanh về đầu hoặc cuối dòng, ta có các phím <code>$</code> và <code>0</code>:</p>
                    <img src="https://s3-ap-southeast-1.amazonaws.com/kipalog.com/VIM_Navigation%20Copy.png_x8st7cdq6s" alt="image vim" />
                    <img src="https://s3-ap-southeast-1.amazonaws.com/kipalog.com/VIM_Movement_LineJump.gif_zn5nxmxes0" alt="image vim" />
                    <p className="card-text">Ngoài ra, để dịch chuyển nhanh về đầu hoặc cuối file, ta có các phím <code>G</code> và <code>gg</code>:</p>
                    <img src="https://s3-ap-southeast-1.amazonaws.com/kipalog.com/VIM_Navigation%20Copy%202.png_8vf1hpswj6" alt="image vim" />
                    <p className="card-text">Việc sử dụng Terminal và các ứng dụng command line giúp tiết kiệm rất nhiều thời gian và loại bỏ được khá nhiều động tác thừa trong quá trình sử dụng máy tính, nhất là các máy tính chạy Linux hoặc Mac OS (các hệ điều hành Unix nói chung). Sử dụng nhuần nhuyễn nó, bạn sẽ không cần phải đụng tới con chuột nữa :)) và góp phần làm tăng hiệu suất công việc lên rất nhiều lần.</p>
                    <p className="card-text">Hy vọng bài viết ngắn này sẽ giúp ích cho bạn trong quá trình tìm hiểu và sử dụng VIM. Ở bài sau, chúng ta sẽ đi vào các chức năng phức tạp hơn nhưng cũng vô cùng hữu ích cho các developer.</p>
                    <p className="card-text">Happy Vimming!</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="row row-related">
              <div className="col-lg-4">
                <div className="card card-related">
                  <a href="#">
                    <div className="card-wallpaper">
                      <img className="card-img-top" src="http://podyumguzeli.com/wp-content/uploads/street-style-10-620x413.jpg" alt="Card image cap" />
                    </div>
                    <div className="card-block">
                      <div className="card-text">Nơi chúng ta thỏa sức với niềm đam mê đồ cũ</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card-related">
                  <a href="#">
                    <div className="card-wallpaper">
                      <img className="card-img-top" src="http://podyumguzeli.com/wp-content/uploads/street-style-16-620x413.jpg" alt="Card image cap" />
                    </div>
                    <div className="card-block">
                      <div className="card-text">Berlin Moda Haftası Sokak Stilleri</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card-related">
                  <a href="#">
                    <div className="card-wallpaper">
                      <img className="card-img-top" src="http://podyumguzeli.com/wp-content/uploads/street-style-14-620x413.jpg" alt="Card image cap" />
                    </div>
                    <div className="card-block">
                      <div className="card-text">Berlin Moda Haftası Sokak Stilleri</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card card-related">
                  <a href="#">
                    <div className="card-wallpaper">
                      <img className="card-img-top" src="http://podyumguzeli.com/wp-content/uploads/street-style-15-620x413.jpg" alt="Card image cap" />
                    </div>
                    <div className="card-block">
                      <div className="card-text">Berlin Moda Haftası Sokak Stilleri</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card-related">
                  <a href="#">
                    <div className="card-wallpaper">
                      <img className="card-img-top" src="http://podyumguzeli.com/wp-content/uploads/street-style-18-620x413.jpg" />
                    </div>
                    <div className="card-block">
                      <div className="card-text">Berlin Moda Haftası Sokak Stilleri</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card-related">
                  <a href="#">
                    <div className="card-wallpaper">
                      <img className="card-img-top" src="http://podyumguzeli.com/wp-content/uploads/street-style-9-620x413.jpg" alt="Card image cap" />
                    </div>
                    <div className="card-block">
                      <div className="card-text">Berlin Moda Haftası Sokak Stilleri</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    );
  }

}
