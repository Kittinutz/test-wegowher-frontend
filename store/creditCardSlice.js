import { createSlice } from '@reduxjs/toolkit'

export const creditCardSlice = createSlice({
  name: 'creditCard',
  initialState: {
    creditCardList: []
  },
  reducers: {
    addCreditCard: (state, action) => {
      console.log(action)
      state.creditCardList.push(action.payload)
    },
    removeCard: (state, action) => {
      state.filter((_, index) => index != action.removeCardIndex)
    }

  }
})
export const { addCreditCard, removeCard } = creditCardSlice.actions

export default creditCardSlice.reducer