import React, { Component, PropTypes } from 'react';

import Header from '../components/header/header';

import Footer from '../components/footer/footer';
//var Cart = require('./cart/app-cart.js');
import {Locations, Location} from 'react-router-component';
//var CatalogDetail = require('./product/app-catalogdetail.js');

export default class Template extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
  	return (
       <div>
        <Header items={this.props.items} actions={this.props.actions}/>
         {this.props.children} 
        <Footer actions={this.props.actions}/>
       </div>
    );
  }
}