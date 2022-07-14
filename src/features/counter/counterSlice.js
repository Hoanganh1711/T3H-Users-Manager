import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState : {
    firstName: "",
    lastName: "",
    email: "",
    avatar: ""
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setFirstName, setLastName, setEmail, setAvatar } = counterSlice.actions

export const selectFirstName = (state) => state.counter.firstName
export const selectLastName = (state) => state.counter.lastName
export const selectEmail = (state) => state.counter.email
export const selectAvatar = (state) => state.counter.avatar

export default counterSlice.reducer