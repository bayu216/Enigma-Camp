import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-redux-toolkit/counter-slice";
import guestSlice from "./guest-book-toolkit-2/guest-slice";
import guestBookSlice from "./guest-book-toolkit/guest-book-slice";

const MainStore = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [guestBookSlice.name]: guestBookSlice.reducer,
    [guestSlice.name]: guestSlice.reducer,
  },
});

export default MainStore;
