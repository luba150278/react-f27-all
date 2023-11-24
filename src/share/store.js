import { configureStore } from '@reduxjs/toolkit'
import blackjackReducer from './reducers/blackjack.reducer'
import counterReducer from './reducers/counter.reducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    black: blackjackReducer
  },
})