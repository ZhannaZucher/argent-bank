//selectors for authSlice
export const selectCurrentToken = (state) => state.auth.accessToken
export const selectAuthStatus = (state) => state.auth.status
export const selectAuthError = (state) => state.auth.error
export const selectRememberMe = (state) => state.auth.rememberMe

//selectors for userSlice
export const selectUserData = (state) => state.user
export const selectUserStatus = (state) => state.user.status
export const selectUserError = (state) => state.user.error
