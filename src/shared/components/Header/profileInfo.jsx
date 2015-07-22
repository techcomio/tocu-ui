'use strict';

import React from 'react';

export default class ProfileInfo extends React.Component {

  render() {
    return (
    	<div className="container-fluid profileInfo">
        <div className="aboutBar">
          <div className="about">
            <h1 className="name">Tổ Cú</h1>
            <div className="iconsLinksEtc">
              <ul>
                <li className="websiteWrapper">
                  <a href="#" target="_blank" >
                    <i className="fa fa-map-marker gray">&nbsp; Hà Nội</i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/thanhchamly" target="_blank" >
                    <i className="fa fa-facebook-square gray">&nbsp; facebook</i>
                  </a>
                </li>
                <li>
                  <a href="tel:+84904905903" target="_blank" >
                    <i className="fa fa-phone gray">&nbsp; 0904905903</i>
                  </a>
                </li>
              </ul>
            </div>

            <p className="aboutText" >
              Nơi chúng ta thỏa sức với niềm đam mê đồ cũ & handmade :x
            </p>
          </div>
        </div>
      </div>
    );
  }

};
