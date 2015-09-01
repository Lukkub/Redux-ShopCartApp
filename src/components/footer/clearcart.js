import React, { Component, PropTypes } from 'react';

export default class ClearCart extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  render () {
    return (
		<div>
			<button className="btn btn-default" onClick={() => this.props.actions.deleteItems()}>Clear Cart!</button>
		</div>
	);
  }
}