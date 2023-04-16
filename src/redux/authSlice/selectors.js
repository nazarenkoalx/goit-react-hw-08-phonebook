export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectUser = state => state.user.user;
export const selectIsFetchingCurrentUser = state =>
  state.user.isFetchingCurrentUser;
