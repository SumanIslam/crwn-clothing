import { userActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: action.payload,
      };

    case userActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
