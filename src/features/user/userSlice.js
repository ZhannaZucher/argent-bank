import { createSlice } from "@reduxjs/toolkit"
import { fetchAPI } from "../../app/api/api"
import secureLocalStorage from "react-secure-storage"
import { onSignOut } from "../auth/authSlice"

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "void",
    error: null,
    id: null,
    email: null,
    firstName: null,
    lastName: null,
  },
  reducers: {
    fetching: (state) => {
      state.status = "fetching"
    },
    rejected: (state, action) => {
      state.status = "rejected"
      state.error = {
        errorCode: action.payload.status,
        errorMessage: action.payload.message,
      }
    },
    resolved: (state, action) => {
      state.status = "resolved"
      state.id = action.payload.id
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },
    signOut: (state) => {
      state.status = "void"
      state.error = null
      state.id = null
      state.email = null
      state.firstName = null
      state.lastName = null
    },
  },
})

//getting user data from API
export function getUserData(token) {
  //return a thunk
  return async (dispatch, getState) => {
    const fetchingStatus = getState().user.status
    if (fetchingStatus === "fetching") {
      return
    }
    dispatch(fetching())
    try {
      //fetching to get data for user profile
      const data = await fetchAPI("user/profile", "POST", token, null)
      console.log(data)
      dispatch(resolved(data.body))
    } catch (err) {
      // if error is due to the expired token (response with error 401)
      if (err.status === 401) {
        logOut(dispatch)
      } else {
        //stock error data in userSlice
        dispatch(rejected({ status: err.status, message: err.message }))
      }
    }
  }
}

//log out user
export function logOut(dispatch) {
  sessionStorage.clear()
  secureLocalStorage.clear()
  //return to initial state in userSlice
  dispatch(signOut())
  //return to initial state in authSlice
  dispatch(onSignOut())
}

export const { fetching, rejected, resolved, signOut } = userSlice.actions
export default userSlice.reducer
