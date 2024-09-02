import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./loginStore"

export const store = configureStore({
  reducer: {
    login: loginReducer //muj login reducer, muzu jich pridavat vic
  },
})

 