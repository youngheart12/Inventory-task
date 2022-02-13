import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
  name: "user",
  initialState: {
    role:"",
    isLogged:false
  },
  reducers: {
    updatedLoginState: (state,action) => {
    const {role,isLogged}=action.payload;
      state.role = role;
      state.isLogged=isLogged;
    }
  }
})

export const {
 updatedLoginState
} = loginSlice.actions

export default loginSlice.reducer
