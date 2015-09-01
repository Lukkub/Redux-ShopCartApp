import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-component';

export default class CartSummary extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  render () {
  	var qty = 0;
  	var total = 0;
  	var items = this.props.items.map(function(item){
  		if(item.inCart){
      		qty+=item.qty;
      		total+=item.qty*item.cost;
      	}
    })

    return (
		<div>
			<Link href="/cart" className="btn btn-success">
				Cart Items: {qty} / ${total}
			</Link>
		</div>
	)
  }
}