import React, { Component, PropTypes } from 'react';
import ClearCart from './clearcart.js';

export default class Footer extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  render () {
    return (
		<div className="row">
			<div className="col-sm-7 col-sm-push-9">
				<ClearCart actions={this.props.actions} />
			</div>
		</div>
	)
  }
}