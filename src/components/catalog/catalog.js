import React, { Component, PropTypes } from 'react';

import CatalogItem from './catalogitem.js';

export default class Catalog extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    var props = this.props;
    var items = this.props.items.map(function(item){
      return <CatalogItem key={item.id} item={item} actions={props.actions}/>
    })

    return (
      <div className="row">
        {items}
      </div>
    )
  }
}