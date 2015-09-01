import React, { Component, PropTypes } from 'react';
import AppActions from '../../actions/shopactions.js';


export default class IncreaseItem extends Component{
	static propTypes = {
		index: PropTypes.number.isRequired,
   	 	actions: PropTypes.object.isRequired
  	}
	render(){
		return <button onClick={() => this.props.actions.increaseItem(this.props.index)}>+</button>
	}
};
