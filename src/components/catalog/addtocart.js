import React, { Component, PropTypes } from 'react';

export default class AddToCart extends Component{
	static propTypes = {
		item: PropTypes.object.isRequired,
   	 	actions: PropTypes.object.isRequired
  	}
	render(){
		return <button className="btn btn-default" onClick={() => this.props.actions.addItem(this.props.item)}>Add to Cart</button>
	}
};
