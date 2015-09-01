import * as types from '../constants/ActionTypes';

export function addItem(item){
    return {
      actionType: types.ADD_ITEM,
      item: item
    };
}

export function removeItem(index){
    return {
      actionType: types.REMOVE_ITEM,
      index: index
    };
}

export function increaseItem(index){
    return {
      actionType: types.INCREASE_ITEM,
      index: index
    };
}

export function decreaseItem(index){
    return {
      actionType: types.DECREASE_ITEM,
      index: index
    };
}

export function deleteItems(){
    return {
      actionType: types.DELETE_ITEMS
    };
}