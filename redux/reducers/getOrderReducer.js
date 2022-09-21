import { USER_IS_SET_ORDER } from '../action/actions';

const initialState = {
  getOrder: false,
};

function getOrderReducer(state = initialState, action) {

  switch (action.type) {
    
    case USER_IS_SET_ORDER:
      const order_status = action.payload;
      console.log("getOrderReducergetOrderReducergetOrderReducergetOrderReducer",order_status);
      return {
        ...state,
        getOrder: state.getOrder = order_status
      };
    default:
      return state;
  }
}

export default getOrderReducer;