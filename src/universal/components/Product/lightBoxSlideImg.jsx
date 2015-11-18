"use strict";
import React from 'react';
import classNames from 'classnames';


export default class lightBoxSlideImg extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      current: this.props.current
    }
  }

  render() {
    var length = this.props.dataUrlImg.size || this.props.dataUrlImg.length;
    var phantram = 100 / length;
    var translateX = phantram * this.state.current;
    var PanesStyle = {
      width: `${length * 100}%`,
      WebkitTransform: `translate3d(-${translateX}%, 0px, 0px)`,
      MsTransform: `translate3d(-${translateX}%, 0px, 0px)`,
      OTransform: `translate3d(-${translateX}%, 0px, 0px)`,
      transform: `translate3d(-${translateX}%, 0px, 0px)`,
    };

    var PaneStyle = {
      width: `${phantram}%`,
    }

    let classes = classNames({
      lightBoxSlideImg: true,
    });

    let classesPrev = classNames({
      "next-prev": true,
      "prev": true,
      "hide": this.state.current === 0
    });

    let classesNext = classNames({
      "next-prev": true,
      "next": true,
      "hide": this.state.current === (length - 1),
    });

    return (
      <div className="lightBoxSlideImg">
        <div className="panes" style={PanesStyle} >
          {this.props.dataUrlImg.map(function(url, i) {
            return (
              <div key={i} className="pane" style={PaneStyle}>
                <figure>
                  <img src={url} />
                </figure>
              </div>
            )
          })}
        </div>
        <div className="paneNextPrev">
          <div className={classesPrev} onClick={::this.Prev}><i className="fa fa-angle-left"></i></div>
          <div className={classesNext} onClick={::this.Next}><i className="fa fa-angle-right"></i></div>
        </div>
        <div className="closeBox" onClick={::this.HideLightBox}>
          <i className="fa fa-times"></i>
        </div>
      </div>
    );
  }

  HideLightBox() {
    this.props.HideLightBox();
  }

  Prev() {
    let current = this.state.current - 1;
    this.setState({
      current: current
    });
  }

  Next() {
    let current = this.state.current + 1;
    this.setState({
      current: current
    });
  }

};
