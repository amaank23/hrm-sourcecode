import { createSlice } from '@reduxjs/toolkit'
export const authSlice = createSlice({
  name: 'authSlice', 
  initialState: {
    isAuth: false
  },
  reducers: {
    authSuccess: (state) => {
      state.isAuth = true 
    },
    authFailure: (state) => {
        state.isAuth = false
    },
  },
})

export const {
  auth,
  authSuccess,
  authFailure,
} = authSlice.actions

export default authSlice.reducer
