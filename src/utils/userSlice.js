import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload; // Updates state with user info
    },
    removeUser: (state) => {
      return null; // Clears user on logout
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;