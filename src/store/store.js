import { configureStore } from "@reduxjs/toolkit";
import { quizSlice } from "../store/quizSlice";

const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
  },
});

export default store;
