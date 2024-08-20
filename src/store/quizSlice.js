import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchQuestions = createAsyncThunk(
  "quiz/fetchQuestions",
  async () => {
    const response = await fetch("http://localhost:3000/api/quiz");
    const data = await response.json();
    console.log(data);
    return data;
  }
);

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  answer: [],
  score: 0,
  status: "idle",
  error: null,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    ansQuestion: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.answer[questionIndex] = answer;
      if (answer === state.questions[questionIndex].answer) {
        state.score += 1;
      }
    },
    nextQue: (state) => {
      state.currentQuestionIndex += 1;
    },
    resQuiz: (state, action) => {
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.answer = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.status = "succeded";
      state.questions = action.payload;
    });
    builder.addCase(fetchQuestions.rejected, (state) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { nextQue, ansQuestion, resQuiz } = quizSlice.actions;
export default quizSlice.reducer;
