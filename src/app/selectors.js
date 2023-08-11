export const selectCurrentToken = (state) => state.auth.accessToken
export const selectAuthStatus = (state) => state.auth.status
export const selectAuthError = (state) => state.auth.error
export const selectRememberMe = (state) => state.auth.rememberMe
