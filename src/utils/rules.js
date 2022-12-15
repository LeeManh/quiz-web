import * as yup from "yup";

const authSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required("Cần nhập email")
    .email("Không đúng định dạng email"),
  password: yup
    .string()
    .trim()
    .required("Cần nhập mật khẩu")
    .min(6, "Tối thiểu 6 ký tự"),
});

export const quizSchema = yup.object({
  title: yup
    .string()
    .trim()
    .required("Cần nhập title")
    .max(100, "Độ dài tối đa 100 ký tự"),
  time: yup
    .number()
    .typeError("Cần nhập số")
    .required("Cần nhập time")
    .integer("Phải là số nguyên")
    .positive("Phải là số dương"),
  maxPoint: yup
    .number()
    .typeError("Cần nhập số")
    .required("Cần nhập maxPoint")
    .integer("Phải là số nguyên")
    .min(0, "Max Point tối thiểu 0 điểm"),

  ratings: yup
    .number()
    .typeError("Cần nhập số")
    .required("Cần nhập ratings")
    .integer("Phải là số nguyên")
    .positive("Phải là số dương")
    .required("Cần nhập maxPoint")
    .min(0, "Ratings thấp nhất là 0")
    .max(5, "Ratings cao nhất là 5"),
  difficulty: yup.string().required("Cần chọn difficulty"),
});

export const questionSchema = yup.object({
  question: yup
    .string()
    .trim()
    .required("Cần nhập question")
    .max(1000, "Độ dài tối 1000 ký tự")
    .min(1, "Độ dài tối thiểu 1"),
  correctAnswer: yup
    .string()
    .required("Cần nhập đáp án đúng")
    .max(1000, "Độ dài tối 1000 ký tự")
    .min(1, "Độ dài tối thiểu 1"),
  incorrectAnswers1: yup
    .string()
    .trim()
    .required("Cần nhập Incorrect Answers")
    .min(1, "Độ dài tối thiểu"),
  incorrectAnswers2: yup
    .string()
    .trim()
    .required("Cần nhập Incorrect Answers")
    .min(1, "Độ dài tối thiểu"),
  incorrectAnswers3: yup
    .string()
    .trim()
    .required("Cần nhập Incorrect Answers")
    .min(1, "Độ dài tối thiểu"),
});

export default authSchema;
