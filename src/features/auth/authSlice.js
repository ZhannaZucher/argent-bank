import { createSlice } from "@reduxjs/toolkit"
import { fetchAPI } from "../../app/api/api"
import { getTokenFromStorage } from "../../utils/tokenStorage"
import secureLocalStorage from "react-secure-storage"

//check if access token is already stored in local or session storage or null for initial state
const initialAccessToken = getTokenFromStorage()

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "void",
    error: null,
    accessToken: initialAccessToken,
    rememberMe: false,
  },
  reducers: {
    fetching: (state) => {
      state.status = "fetching"
    },
    resolved: (state, action) => {
      state.status = "resolved"
      state.accessToken = action.payload
      state.error = null
    },
    rejected: (state, action) => {
      state.status = "rejected"
      state.error = {
        errorCode: action.payload.status,
        errorMessage: action.payload.message,
      }
    },
    onSignOut: (state) => {
      state.status = "void"
      state.error = null
      state.accessToken = false
      state.rememberMe = false
    },
    togglePersist: (state, action) => {
      state.rememberMe = action.payload
    },
  },
})

//thunk creator for token fetching
export function authLogin(payload) {
  //return a thunk
  return async (dispatch, getState) => {
    const fetchingStatus = getState().auth.status
    if (fetchingStatus === "fetching") {
      return
    }
    dispatch(fetching())
    try {
      //fetching to get a token
      const data = await fetchAPI("user/login", "POST", null, payload)
      const authToken = data.body.token
      const rememberMe = getState().auth.rememberMe
      dispatch(resolved(authToken))
      //handling token storage
      rememberMe
        ? secureLocalStorage.setItem("token", authToken)
        : sessionStorage.setItem("token", JSON.stringify(authToken))
    } catch (err) {
      dispatch(rejected({ status: err.status, message: err.message }))
    }
  }
}

export const { fetching, resolved, rejected, onSignOut, togglePersist } =
  authSlice.actions
export default authSlice.reducer
