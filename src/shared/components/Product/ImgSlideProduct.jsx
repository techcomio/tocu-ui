"use strict";

import React from 'react/addons';
/**
 * @Component
 */
import LightBoxSlideImg from './lightBoxSlideImg';


export default class ImgSlideProduct extends React.Component {

  constructor(props) {
    super(props);
    this.ShowLightBox = this.ShowLightBox.bind(this);
    this.HideLightBox = this.HideLightBox.bind(this);
    this.renderLightBox = this.renderLightBox.bind(this);
    this.handleClickSlideTab = this.handleClickSlideTab.bind(this);

    this.state = {
      current: 0,
      showLightBox: false,
    };
  }

  render() {
    return (
      <div className="imgProduct">
        <div className="imageContainer">
          <div ref="test" className="gallerySlide">
            <ul>
              {this.props.dataUrlImg.map((url, i) => {
                var classSes = "";
                if(this.state.current === i) {
                  classSes = "active";
                }
                let img_url = url.replace(/image\//gi, 'image/x468/');
                return (
                  <li key={i} className={classSes}><figure><img onClick={this.ShowLightBox.bind(this, i)} src={img_url} alt="" /></figure></li>
                )
              })}
            </ul>
          </div>
          <div className="slide-tabs">
            <ul>
              {this.props.dataUrlImg.map((url, i) => {
                var classSes = "";
                if(this.state.current === i) {
                  classSes = "active";
                }
                return (
                  <li key={i} className={classSes} onClick={this.handleClickSlideTab.bind(this, i)}></li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="imageSlide-tabs">
          <ul>
            {this.props.dataUrlImg.map((url, i) => {
              var classSes = "";
              if(this.state.current === i) {
                classSes = "active";
              }
              let img_url = url.replace(/image\//gi, 'image/90x60/');
              return (
                <li key={i} className={classSes}><figure><img src={img_url} onClick={this.handleClickSlideTab.bind(this, i)} alt="" /></figure></li>
              )
            })}
          </ul>
        </div>

        {this.renderLightBox()}
      </div>
    );
  }

  renderLightBox() {
    if(this.state.showLightBox) {
      return (
        <LightBoxSlideImg 
          dataUrlImg={this.props.dataUrlImg}
          current={this.state.current}
          showLightBox={this.state.showLightBox}
          HideLightBox={this.HideLightBox}
        />
      )
    }
  }

  ShowLightBox(i, e) {
    this.setState({
      showLightBox: true,
      current: i
    });
  }

  HideLightBox() {
    this.setState({
      showLightBox: false,
    });
  }

  handleClickSlideTab(i, e) {
    this.setState({
      current: i
    });
  }
};
