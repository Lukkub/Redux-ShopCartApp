import React, { Component, PropTypes } from 'react';
import AppActions from '../../actions/shopactions.js';


export default class DecreaseItem extends Component{
	static propTypes = {
		index: PropTypes.number.isRequired,
   	 	actions: PropTypes.object.isRequired
  	}
	render(){
		return <button onClick={() => this.props.actions.decreaseItem(this.props.index)}>-</button>
	}
};
