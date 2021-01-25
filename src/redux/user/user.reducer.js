import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")),
  isFetching: false,
  error: null,
  usersList: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_START:
    case UserActionTypes.ADD_USER_START:
    case UserActionTypes.GET_USERS_START:
      return { ...state, isFetching: true, error: null };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isFetching: false,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS: {
      return { ...state, currentUser: null, usersList: [] };
    }
    case UserActionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
      };
    case UserActionTypes.GET_USERS_SUCCESS: {
      return {
        ...state,
        usersList: action.payload,
        error: null,
        isFetching: false,
      };
    }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.ADD_USER_FAILURE:
    case UserActionTypes.GET_USERS_FAILURE:
      return { ...state, isFetching: false, error: action.payload };

    case UserActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default userReducer;
