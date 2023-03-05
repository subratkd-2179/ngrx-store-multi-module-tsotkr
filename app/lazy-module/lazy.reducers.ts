interface Action {
  type: string;
  payload?: any;
}

export const GET_LAZY = 'GET_LAZY';
export const GET_LAZY_SUCCESS = 'GET_LAZY_SUCCESS';

export function reducers(state, action: Action) {
  console.log('state', state, 'action', action);
  
  switch( action.type ) {
    case GET_LAZY:
      return Object.assign({}, state);
    case GET_LAZY_SUCCESS:
      return Object.assign({}, state, action.payload);
  }
  return state;
}
