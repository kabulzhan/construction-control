import UserActionTypes from "./user.types";

export const signInStart = (emailAndPassword) => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      id: user.user,
      organization: user.organization,
      token: user.token,
    })
  );
  return {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signOut = () => {
  localStorage.removeItem("user");
  return {
    type: UserActionTypes.SIGN_OUT_SUCCESS,
  };
};

export const getUsersStart = (admin) => ({
  type: UserActionTypes.GET_USERS_START,
  payload: admin,
});

export const getUsersSuccess = (usersArray) => ({
  type: UserActionTypes.GET_USERS_SUCCESS,
  payload: usersArray,
});

export const getUsersFailure = (error) => ({
  type: UserActionTypes.GET_USERS_FAILURE,
  payload: error,
});

export const addUserStart = (token, newUser, callback) => ({
  type: UserActionTypes.ADD_USER_START,
  payload: { token, newUser },
  callback,
});

export const addUserSuccess = () => ({
  type: UserActionTypes.ADD_USER_SUCCESS,
});

export const addUserFailure = (error) => ({
  type: UserActionTypes.ADD_USER_FAILURE,
  payload: error,
});

export const clearErrors = () => ({
  type: UserActionTypes.CLEAR_ERRORS,
});
