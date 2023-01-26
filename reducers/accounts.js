import { createSlice } from "@reduxjs/toolkit"
import { loadUser, login, register } from "../actions/accounts"

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    updateUser: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload
    },
  },
  extraReducers: (buidler) => {
    buidler.addCase(login.pending, (state, action) => {
      state.loading = true
    })
    buidler.addCase(login.fulfilled, (state, action) => {
      console.log(action)
      state.loading = false
      state.user = action.payload.res.data.user
      state.isAuthenticated = true
      localStorage.setItem("token", action.payload.res.data.token)
      state.token = localStorage.getItem("token")
    })
    buidler.addCase(loadUser.rejected, (state, action) => {
      state.loading = false
      state.isAuthenticated = false
      state.user = null
    })
    buidler.addCase(loadUser.pending, (state, action) => {
      state.loading = true
    })
    buidler.addCase(loadUser.fulfilled, (state, action) => {
      console.log(action)
      state.loading = false
      state.user = action.payload.res.data.user
      state.isAuthenticated = true
      localStorage.setItem("token", action.payload.res.data.token)
      state.token = localStorage.getItem("token")
    })
    buidler.addCase(register.pending, (state, action) => {
      state.loading = true
    })
    buidler.addCase(register.fulfilled, (state, action) => {
      console.log(action)
      state.loading = false
      state.user = action.payload.res.data.user
      state.isAuthenticated = true
      localStorage.setItem("token", action.payload.res.data.token)
      state.token = localStorage.getItem("token")
    })
    buidler.addCase(register.rejected, (state, action) => {
      state.loading = false
      state.isAuthenticated = false
      state.user = null
      state.registerError = "Email already exists"
    })
  },
})
