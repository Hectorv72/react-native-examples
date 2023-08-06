import { configureStore } from '@reduxjs/toolkit'
import exampleSlice from '../redux/exampleSlice.js'

export const store = configureStore({
  reducer: {
    example: exampleSlice,
  },
})