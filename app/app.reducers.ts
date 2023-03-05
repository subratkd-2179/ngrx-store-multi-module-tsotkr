export const GET_X = "GET_X";
export const GET_X_SUCCESS = "GET_X_SUCCESS";

interface Action {
  type: string;
  payload?: any;
}

export function appReducers(state, action: Action) {
  switch( action.type ) {
    case GET_X:
      return Object.assign({}, state);
    case GET_X_SUCCESS:
      return Object.assign({}, state, action.payload);
  }
  return state;
}