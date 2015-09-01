import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-component';
import AddToCart from './addtocart.js';

export default class CatalogItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    var itemStyle = {
      borderBottom: '1px solid #ccc',
      paddingBottom:15
    };  

    return (
      <div className="col-sm-3" style={itemStyle}>
        <h4>{this.props.item.title}</h4>
        <img src={this.props.item.img} alt="" />
        <p>{this.props.item.summary}</p>
        <p>${this.props.item.cost} <span className="text-success">{this.props.item.inCart && '(' + this.props.item.qty + ' in cart)'}</span></p>
        <div className="btn-group btn-group-xs">
        <Link href={'/item/' + this.props.item.id} className="btn btn-default">More</Link>
        <AddToCart actions={this.props.actions} item={this.props.item} />
        </div>
      </div>
    )
  }

}
