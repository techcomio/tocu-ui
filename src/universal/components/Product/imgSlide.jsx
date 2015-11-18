"use strict";
import React from 'react';
import LightBoxSlideImg from './lightBoxSlideImg';


export default class ImgSlide extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      showLightBox: false,
    };
  }

  render() {
    const { images } = this.props;
    const { current } = this.state;
    return (
      <div className="imgProduct">
        <div className="imageContainer">
          <div className="gallerySlide">
            <ul>
              {images.map((url, i) => {
                var classSes = "";
                if(current === i) {
                  classSes = "active";
                }
                let img_url = url.replace(/image\//gi, 'image/x468/');
                return (
                  <li key={i} className={classSes}><figure><img onClick={this.ShowLightBox.bind(this, i)} src={img_url} /></figure></li>
                )
              })}
            </ul>
          </div>
          <div className="slide-tabs">
            <ul>
              {this.props.images.map((url, i) => {
                var classSes = "";
                if(current === i) {
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
            {this.props.images.map((url, i) => {
              var classSes = "";
              if(current === i) {
                classSes = "active";
              }
              let img_url = url.replace(/image\//gi, 'image/90x60/');
              return (
                <li key={i} className={classSes}><figure><img src={img_url} onClick={this.handleClickSlideTab.bind(this, i)}/></figure></li>
              )
            })}
          </ul>
        </div>

        {this.renderLightBox()}
      </div>
    );
  }

  renderLightBox = () => {
    if(this.state.showLightBox) {
      return (
        <LightBoxSlideImg
          dataUrlImg={this.props.images}
          current={this.state.current}
          showLightBox={this.state.showLightBox}
          HideLightBox={this.HideLightBox}
        />
      )
    }
  }

  ShowLightBox(i, e) {
    console.log('ShowLightBox', i, e)
    this.setState({
      showLightBox: true,
      current: i
    });
  }

  HideLightBox = () => {
    this.setState({
      showLightBox: false,
    });
  }

  handleClickSlideTab(i, e) {
    this.setState({
      current: i
    });
  }

}
