import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  form: { name: '', age: 0 },
  list: []
}

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setForm: (state, action) => {
      state.form = action.payload
    },
    addList: (state, action) => {
      state.list.push(action.payload)
    },
  },
})

export const { setForm, addList } = exampleSlice.actions

export default exampleSlice.reducer