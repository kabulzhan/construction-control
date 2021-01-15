import UserActionTypes from "./user.types";

export const addUser = (user) => ({
  type: UserActionTypes.ADD_USER,
  payload: user,
});
