import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = { //zakladni hodnoty
  email: "",
  isLogged: false,
  role: ""
}

export const loginSlice = createSlice({
  name: 'login',//jenom jmeno, nijak potrebne
  initialState,

  reducers: {
    logIn: (state, action) => {
      state.email = action.payload.email, //payload je hodnota, muzu tam jakoukoliv vlozit num int, string ...
      state.isLogged = true,
      state.role = action.payload.role
      console.log("loggedIN")
       
    },
    logOut: (state) => {
      state.email = "",
      state.isLogged = false,
      state.role = ""
      console.log("loggedOUT")
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut } = loginSlice.actions

export default loginSlice.reducer