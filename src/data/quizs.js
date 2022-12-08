import { nanoid } from "@reduxjs/toolkit";

const quizs = [
  {
    id: 1,
    title: "Kiểm tra an toàn bảo mật thông tin 1",
    time: 400,
    maxPoint: 250,
    ratings: 4,
    questions: [
      {
        id: nanoid(),
        index: 1,
        questionTitle:
          "Một hệ quản trị CSDL không có chức năng nào trong các chức năng dưới đây?",
        answers: [
          { A: "Cung cấp môi trường tạo lập CSDL" },
          { B: "Cung cấp môi trường cập nhật và khai thác dữ liệu" },
          { C: "Cung cấp công cụ quản lí bộ nhớ" },
          { D: "Cung cấp công cụ kiểm soát, điều khiển truy cập vào CSDL." },
        ],
        correctAnswer: "A",
      },
    ],
  },
  {
    id: 2,
    title: "Kiểm tra an toàn bảo mật thông tin 2",
    time: 420,
    maxPoint: 250,
    ratings: 5,
  },
  {
    id: 3,
    title: "Kiểm tra an toàn bảo mật thông tin 3",
    time: 420,
    maxPoint: 250,
    ratings: 3,
  },
  {
    id: 4,
    title: "Kiểm tra an toàn bảo mật thông tin 4",
    time: 420,
    maxPoint: 250,
    ratings: 3,
  },
  {
    id: 5,
    title: "Kiểm tra an toàn bảo mật thông tin 5",
    time: 300,
    maxPoint: 250,
    ratings: 3,
  },
  {
    id: 6,
    title: "Kiểm tra an toàn bảo mật thông tin 6",
    time: 440,
    maxPoint: 250,
    ratings: 3,
  },
];

export default quizs;
