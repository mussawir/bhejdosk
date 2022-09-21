import {USER_IS_lOGGED,USER_IS_lOGOUT} from '../action/actions';

const initialState = {
  isLogged: false,
  user: [],
};

function userReducer(state = initialState, action) {

  switch (action.type) {
    case USER_IS_lOGGED:
      const users = action.payload;
      console.log("USER_IS_lOGGEDUSER_IS_lOGGEDUSER_IS_lOGGEDUSER_IS_lOGGED",users);
      return {
        ...state,
        isLogged: !state.isLogged,
        user: state.user = users
      };

      case USER_IS_lOGOUT:
        return {
          ...state,
          user: state.user = {},
          isLogged: state.isLogged
        };

    default:
      return state;
  }
};

export default userReducer;