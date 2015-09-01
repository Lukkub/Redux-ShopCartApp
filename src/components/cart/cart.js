import React, { Component, PropTypes } from 'react';
import AppActions from '../../actions/shopactions.js';
import {Link} from 'react-router-component';
import RemoveFromCart from './removefromcart.js';
import Increase from './increaseitem.js';
import Decrease from './decreaseitem.js';


export default class Cart extends Component{
	static propTypes = {
		items: PropTypes.array.isRequired,
   	 	actions: PropTypes.object.isRequired
  	}
	render(){
		var props = this.props;
		var total = 0;
		var items = this.props.items.map(function(item, i){
			if(item.inCart) {

			var subtotal = item.cost * item.qty;
			total += subtotal;
			return (
				<tr key={i}>
					<td><RemoveFromCart index={i} actions={props.actions}/></td>
					<td>{item.title}</td>
					<td>{item.qty}</td>
					<td>
						<Increase index={i} actions={props.actions}/>
						<Decrease index={i} actions={props.actions}/>
					</td>
					<td>${subtotal}</td>
				</tr>
			);
			}	
		})
		return (
			<div>
			<table className="table table-hover">
				<thead>
					<tr>
						<th></th>
						<th>Item</th>
						<th>Qty</th>
						<th></th>
						<th>Subtotal</th>
					</tr>
				</thead>
				<tbody>
					{items}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan="4" className="text-right"> Total</td>
						<td>${total}</td>
					</tr>
				</tfoot>
			</table>
			<Link href="/" className="btn btn-default">Continue Shoping</Link>
			</div>
		)	
	}
};
