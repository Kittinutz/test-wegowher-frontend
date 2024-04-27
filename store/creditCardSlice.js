import { createSlice } from '@reduxjs/toolkit'

export const creditCardSlice = createSlice({
  name: 'counter',
  initialState: {
    creditCardList: []
  },
  reducers: {
    addCreditCard: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.creditCardList.push(action.cardInformation)
    },
    removeCard: (state, action) => {
      state.filter((_, index) => index != action.removeCardIndex)
    }

  }
})
export const { addCreditCard, removeCard } = creditCardSlice.actions

export default creditCardSlice.reducer