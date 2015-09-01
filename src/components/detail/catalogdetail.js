import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-component';
import AddToCart from '../catalog/addtocart.js';

export default class CatalogDetail extends Component {
	constructor() {
		super();
	}

  static propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  static contextTypes = {
	router: React.PropTypes.func.isRequired
  }

  render () {
    var itemStyle = {
      borderBottom: '1px solid #ccc',
      paddingBottom:15
    };  
    var path = this.context.router.getPath();
    path = path.replace("/item/", "");
    var thatItem = null;
    this.props.items.map(function(item){
      if(item.id == path) thatItem = item;
    })

    return (
		<div >
			<h4>{thatItem.title}</h4>
			<img src={thatItem.img} alt="" />
			<p>{thatItem.description}</p>
			<p>${thatItem.cost} <span className="text-success">{thatItem.inCart && '(' + thatItem.qty + ' in cart)'}</span></p>
			<div className="btn-group btn-group-sm">
			<AddToCart  actions={this.props.actions} item={thatItem} />
			<Link href='/' className="btn btn-default">Continue Shopping</Link>
			</div>
		</div>
	)
  }

}
