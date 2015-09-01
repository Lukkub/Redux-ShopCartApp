import * as types from '../constants/ActionTypes';
import assign from 'lodash/object/assign';

var _catalog = [];

for(var i=1; i<9; i++){
  _catalog.push(
    (i, {
    'id': 'Widget' + i,
    'title': 'Widget #' + i,
    'summary': 'Widget!',
    'description': 'adasdjal asjdjamcs adnasjfoasj asnodas dmsanodfjadf',
    'cost': i,
    'img': '/src/assets/product.png'
  }));
}

const initialState = {  
  catalog: _catalog,
  cartItems: []
};


export default function shop(state = initialState, action) {  

  switch (action.actionType) {

    case types.ADD_ITEM:
        var iterCatalog = null;
        var iterCart = null;
        state.catalog.forEach((catalogItem, i) => {
            if(catalogItem.id === action.item.id) 
              iterCatalog = i;
        });

        if(!state.catalog[iterCatalog].inCart) {

          var newObject = assign({}, action.item, {qty: 1, inCart: true});

          var newCatalog = assign([], state.catalog);
          newCatalog[iterCatalog] = newObject;

          return {...state,
                  catalog: newCatalog,
                  cartItems: [
                    ...state.cartItems,
                    newObject
                  ]}
        } else {

          state.cartItems.forEach((cartItem, i) => {
            if(cartItem.id === action.item.id) 
               iterCart = i;
          });

          var newObject = assign({}, state.cartItems[iterCart]);
          newObject.qty++;

          var newCatalog = assign([], state.catalog);
          newCatalog[iterCatalog] = newObject;

          var newCartItems = assign([], state.cartItems);
          newCartItems[iterCart] = newObject;

          return {...state,
                  catalog: newCatalog,
                  cartItems: newCartItems
                 }
        }

    case types.REMOVE_ITEM:

      var newCatalog = assign([], state.catalog);
      newCatalog[action.index].inCart = false;

      return {...state,
                catalog: newCatalog
              }

    case types.INCREASE_ITEM:

      var newCatalog = assign([], state.catalog);
      newCatalog[action.index].qty++;

      return {...state,
                catalog: newCatalog
              }

    case types.DECREASE_ITEM:
      var newCatalog = assign([], state.catalog);
      newCatalog[action.index].qty--;

      if(newCatalog[action.index].qty <=0)
        newCatalog[action.index].inCart = false

      return {...state,
                catalog: newCatalog
              }

    case types.DELETE_ITEMS:

      var newCartItems = assign([], state.cartItems);

      for(var i=newCartItems.length-1; i>=0; i--){
        newCartItems.splice(i,1)
      }

      var newCatalog = assign([], state.catalog);

      for(var i=newCatalog.length-1; i>=0; i--){
        newCatalog[i].inCart = false;
      }

      return {...state,
              catalog: newCatalog,
              cartItems: newCartItems
             }

    default:
      return state;
  }
}

