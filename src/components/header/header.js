import React, { Component, PropTypes } from 'react';
import CartSummary from './cartsummary.js';

export default class Header extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    return (
		<div className="row">
			<div className="col-sm-6"><h1>Shop</h1></div>
			<div className="col-sm-2 col-sm-push-3">
			<br />
				<CartSummary items={this.props.items} />
				</div>
		</div>
		)
  }
}