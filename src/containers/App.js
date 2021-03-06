import React, { Component, PropTypes } from 'react';

import { Locations, Location } from 'react-router-component';

import Template from './ShopApp'; 
import Catalog from '../components/catalog/catalog';
import CatalogDetail from '../components/detail/catalogdetail';
import Cart from '../components/cart/cart';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ShopActions from '../actions/shopactions';

@connect(state => ({
  shop: state.shop
}))
export default class App extends Component {  

  static propTypes = {
    catalog: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { shop: { catalog }, dispatch } = this.props;
    const actions = bindActionCreators(ShopActions, dispatch);
    
    return (
      <Template items={catalog} actions={actions}>
        <Locations>
          <Location path="/" handler={Catalog} items={catalog} actions={actions}/>
          <Location path="/cart" handler={Cart} items={catalog} actions={actions}/>
          <Location path="/item/:item" handler={CatalogDetail} items={catalog} actions={actions}/>
        </Locations>
      </Template>
    );
  }
}

          // <Location path="/cart" handler={Catalog} />
          // <Location path="/item/:item" handler={Catalog} />
