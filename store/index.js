import { configureStore } from '@reduxjs/toolkit'
import creditCardReducer from './creditCardSlice'

export default configureStore({
  reducer: {
    creditCard: creditCardReducer
  }
})