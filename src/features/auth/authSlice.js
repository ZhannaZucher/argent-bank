import { createSlice } from "@reduxjs/toolkit"
import { fetchToken } from "../../app/api/api"

/* status:
“void” : the query has not yet been launched ;
“fetching” : the query is in progress ;
“resolved” : the query returned a result ;
“rejected” : the query failed;
“updating” : the query returned a result but a new query is in progress to update the data. 
*/

export function authLogin(payload) {
  //return a thunk
  return async (dispatch, getState) => {
    const fetchingStatus = getState().status
    if (fetchingStatus === "fetching") {
      return
    }
    dispatch(fetching())
    try {
      const data = await fetchToken(payload)
      console.log(data)
      const authToken = data.body.token
      dispatch(resolved(authToken))
    } catch (err) {
      dispatch(rejected({ status: err.status, message: err.message }))
    }
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "void",
    error: null,
    accessToken: null,
  },
  reducers: {
    fetching: (state) => {
      state.status = "fetching"
    },
    resolved: (state, action) => {
      state.status = "resolved"
      state.accessToken = action.payload
    },
    rejected: (state, action) => {
      state.status = "rejected"
      state.error = {
        errorCode: action.payload.status,
        errorMessage: action.payload.message,
      }
    },
  },
})

export const { fetching, resolved, rejected } = authSlice.actions
export default authSlice.reducer
