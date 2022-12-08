/**
 * useReducer, merupakan hooks yang menyerupai redux
 * Ciri khas dari reducer:
 * 1. Reducer ini merupakan sebuah function, lebih tepatnya pure function, yang mengembalikan state.
 * 2. Reducer ini menerima 2 parameter, yaitu state dan action
 * 3. State merupakan data.
 * 4. Action, sebuah object yang terdiri dari property type dan payload.
 *    Action type, merupakan sebuah fungsi yang mewakili fungsionalitas dari suatu state.
 *    Action payload, merupakan reprentasi perubahan state-nya, berupa data.
 * 5. Perubahan state yang terjadi di dalam reducer, tidak menggunakan setState, melainkan menggunakan dispatch.
 * 6. Dispatch, sebuah function yang menerima object Action.
 *
 * useReducer, akan mengembalikan 2 elemen, yaitu state dan dispatch
 */

export const initialState = {
  count: 0,
};

//reducer function
export function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload }; //referensi object state
    case "decrement":
      let batas = state.count - action.payload;
      batas = batas < 0 ? 0 : batas;
      return { ...state, count: batas };
    case "multiply":
      return { ...state, count: state.count * action.payload };
    case "division":
      return { ...state, count: state.count / action.payload };
    case "reset":
      return initialState;
    default:
      return { ...state };
  }
}
