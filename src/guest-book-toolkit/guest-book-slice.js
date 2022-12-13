import { createSlice } from "@reduxjs/toolkit";

const guestBookSlice = createSlice({
  name: "guestBookSlice",
  initialState: {
    guests: [],
  },
  reducers: {
    addGuest: (state, action) => {
      const {
        payload: { form, idxSelected },
      } = action;
      if (idxSelected !== undefined) {
        state.guests[idxSelected] = form;
      } else {
        state.guests.push(form);
      }
    },
  },
});

const { addGuest } = guestBookSlice.actions;

export default guestBookSlice;
export { addGuest };
