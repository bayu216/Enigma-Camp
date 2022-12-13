import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice, dibuat dengan function createSlice, yang menerima parameter object berikut:
 * 1. nama slice-nya (name)
 * 2. initial state-nya (initialState)
 * 3. reducers(reducers)
 * 4. extra reducers (extraReducers)
 *
 * Output createSlice, menghasilkan object Slice, yang memiliki property:
 * 1. name
 * 2. actions
 * 3. reducer
 * 4. caseReducers
 *
 * 5. getInitialState (method)
 */

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    cards: [0],
    title: "Redux Toolkit Card",
  },
  reducers: {
    addCard: (state) => {
      state.cards.push(state.count);
    },
    delCard: (state, action) => {
      state.cards = state.cards.filter(
        (card, index) => index !== action.payload
      );
    },
    increment: (state, action) => {
      const {
        payload: { incrementValue = 1, index },
      } = action;
      state.cards[index] += incrementValue;
    },
    decrement: (state, action) => {
      const {
        payload: { decrementValue = 1, index },
      } = action;
      state.cards[index] -= decrementValue;
    },
  },
});
const { addCard, delCard, increment, decrement } = counterSlice.actions;

export default counterSlice;
export { addCard, delCard, increment, decrement };
