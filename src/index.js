import React from 'react';
import App from './containers/App';

import { combineReducers } from 'redux';  
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from './utils/devTools';

import * as reducers from './reducers';

const reducer = combineReducers(reducers);  
const store = createStore(reducer);  

React.render(
	<div>
		<Provider store={store}>
			{() => <App /> }
		</Provider>
		{renderDevTools(store)}
	</div>, document.getElementById('root'));
