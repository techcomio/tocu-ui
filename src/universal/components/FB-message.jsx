'use strict';
import React, { PropTypes } from 'react';
import classNames from 'classnames';


export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			boxShow: false
		}
	}

  render() {
		const classIcon = classNames({
			"hide": this.state.boxShow
		});
		const classBody = classNames({
			"hide": !this.state.boxShow
		});

    return (
      <div id="fb-box-messages">
        <div id="fb-box-messages-icon" onClick={::this.showBox} className={classIcon} >
					<i className="fa fa-comment-o"></i>
				</div>
        <div id="fb-box-messages-body"
					className={classBody}
					style={{
						position: 'absolute',
				    right: 0,
				    bottom: 0,
						width: '270px',
						height: '360px',
					}} >
					<div className="close-box" onClick={::this.hideBox}>
						<i className="fa fa-times"></i>
					</div>
          <div className="fb-page"
            data-tabs="messages"
            data-href="https://www.facebook.com/tocu.vn"
            data-height="360"
            data-width="270"
            data-hide-cover="false"></div>
        </div>
      </div>
    )
  }

	showBox() {
		this.setState({
			boxShow: true
		})
	}

	hideBox() {
		this.setState({
			boxShow: false
		})
	}

}
