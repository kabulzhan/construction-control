import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  usersList: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.ADD_USER:
      return { ...state, usersList: [...state.usersList, action.payload] };
    default:
      return state;
  }
};

export default userReducer;
