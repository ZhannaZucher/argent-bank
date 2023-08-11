import { createSlice } from "@reduxjs/toolkit"

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

export const { fetching, rejected, resolved, signOut } = userSlice.actions
export default userSlice.reducer
