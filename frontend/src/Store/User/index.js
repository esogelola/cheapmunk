import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'user',
  initialState: { user: null },
  reducers: {
    setUser: (state, { payload: { user } }) => {
      if (typeof user !== 'undefined') {
        state.user = null
      }
    },
    forceSignIn: state => {
      state.user = { username: 'admin' }
    },
  },
})

export const { setUser, forceSignIn } = slice.actions

export default slice.reducer
