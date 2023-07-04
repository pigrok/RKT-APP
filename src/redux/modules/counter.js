// 휴먼 에러 방지

// import { createSlice } from "@reduxjs/toolkit";

// Action Value
// const ADD_NUMBER = "ADD_NUMBER";
// const MINUS_NUMBER = "MINUS_NUMBER";

// // Action Creator
// export const addNumber = (payload) => {
//   return {
//     type: ADD_NUMBER,
//     payload,
//   };
// };

// export const minusNumber = (payload) => {
//   return {
//     type: MINUS_NUMBER,
//     payload,
//   };
// };

// Initial State
// const initialState = {
//   number: 0,
// };

// Reducer
// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_NUMBER:
//       return {
//         number: state.number + action.payload,
//       };
//     // [퀴즈 답]
//     case MINUS_NUMBER:
//       return {
//         number: state.number - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer

import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  number: 0,
};

// action creator와 reducer를 한 번에
const counterSlice = createSlice({
  name: "counter", // 모듈의 이름
  initialState, // 모듈의 초기상태 값
  reducers: {
    // 모듈의 Reducer 로직
    addNumber: (state, action) => {
      // state 변경 로직
      state.number = state.number + action.payload;
    },
    minusNumber: (state, action) => {
      // state 변경 로직
      state.number = state.number - action.payload;
    },
  },
});

// 액션 크리에이터는 컴포넌트에서 사용하기 위해 export
export const { addNumber, minusNumber } = counterSlice.actions;

// reducer는 configureStore에 등록하기 위해 export default
export default counterSlice.reducer;
