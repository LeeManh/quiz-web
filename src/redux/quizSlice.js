import { createSlice } from "@reduxjs/toolkit";
import quizs from "data/quizs";
import { toast } from "react-toastify";

const initialState = {
  data: quizs,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,

  reducers: {
    deleteQuiz: (state, action) => {
      state.data = state.data.filter((quiz) => quiz.id !== action.payload.id);

      toast.success("Xóa quiz thành công", {
        autoClose: 2000,
      });
    },
    updateQuiz: (state, action) => {
      const { updateQuiz } = action.payload;

      state.data = state.data.map((quiz) =>
        quiz.id === updateQuiz.id ? updateQuiz : quiz
      );

      toast.success("Cập nhật quiz thành công", {
        autoClose: 2000,
      });
    },
    updateQuestion: (state, action) => {
      const { updateQues, idQuiz } = action.payload;

      const findQuiz = state.data.find((quiz) => quiz.id === idQuiz);

      let findQuestion = findQuiz?.questions.find(
        (question) => question.id === updateQues.id
      );

      if (findQuestion) {
        findQuestion.question = updateQues.question;
        findQuestion.correctAnswer = updateQues.correctAnswer;
        findQuestion.incorrectAnswers = updateQues.incorrectAnswers;

        toast.success("Cập nhật câu hỏi thành công");
      }
    },
  },
});

export default quizSlice.reducer;

export const { deleteQuiz, updateQuiz, updateQuestion } = quizSlice.actions;

export const selectAllQuizs = (state) => state.quizs.data;
