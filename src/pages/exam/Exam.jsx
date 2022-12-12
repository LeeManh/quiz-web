import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  ButtonRound,
  AnswerForm,
  Button,
  ButtonsWrap,
  ContentExam,
  ExamContainer,
  HeaderExam,
  MainExam,
  QuestionParam,
  Title,
  AnswerLabel,
  ButtonGotoWrap,
  Checkmark,
} from "./Exam.styled";
import quizs from "data/quizs";

import ExamFinish from "components/exam/ExamFinish/ExamFinish";
import { updateUserPoint } from "redux/authSlice";
import SideMenuButton from "components/exam/SideMenuButton/SideMenuButton";
import CountDownTime from "components/common/CountDownTime/CountDownTime";

const Exam = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [isFinish, setIsFinish] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [indexQuestion, setIndexQuesion] = useState(0);

  //call api to search exam theo id
  const findQuiz = quizs.find((quiz) => {
    return quiz.id === +id;
  });

  const allQuestion = findQuiz?.questions;
  const currentQuesion = findQuiz?.questions[indexQuestion];
  const currentAnswers = [
    currentQuesion.correctAnswer,
    ...currentQuesion.incorrectAnswers,
  ];

  // userAnswer : [{idQuestion : 'idQuestion', answer : '1312312'}, ...]
  const [userAnswers, setUserAnswers] = useState([]);
  const [resultSubmit, setResultSubmit] = useState({
    numberCorrectAnswer: 0,
    numberWrongAnswer: 0,
    numberUnAnswered: 0,
    totalNumberQuestions: allQuestion.length,
  });

  const maxPoint = allQuestion.length * 50;
  const point = resultSubmit.numberCorrectAnswer * 50;

  const timeNowInMs = useMemo(() => {
    return new Date().getTime();
  }, []);

  const targetTimeInMs = timeNowInMs + findQuiz.time * 1000;

  const handleNextQuesion = () => {
    setIndexQuesion((pre) => pre + 1);
  };
  const handlePreQuesion = () => {
    setIndexQuesion((pre) => pre - 1);
  };
  const handleClickChangeQuestion = (indexQuestion) => {
    setIndexQuesion(indexQuestion);
  };

  const handleCheckedAnswer = (ans) => {
    let _userAnswers = [...userAnswers];

    // userAnswer : {idQuestion : 'idQuestion', answer : '1312312'}
    const findAnswer = _userAnswers.find((userAnswer) => {
      return userAnswer.idQuestion === currentQuesion.id;
    });

    if (findAnswer) {
      findAnswer.answer = ans;
    } else {
      _userAnswers = [
        ..._userAnswers,
        { idQuestion: currentQuesion.id, answer: ans },
      ];
    }

    setUserAnswers(_userAnswers);
  };
  // kiểm tra xem câu hỏi đã được checked hay chưa -> nếu rồi hiển checked
  const isChecked = (ans) => {
    const findAnswer = userAnswers.find((userAnswer) => {
      return (
        userAnswer.idQuestion === currentQuesion.id && userAnswer.answer === ans
      );
    });

    if (findAnswer) return true;

    return false;
  };
  // kiểm tra xem câu hỏi đã được trả lời hay chưa -> nếu rồi tô màu xám
  const isAnswered = (index) => {
    const idQuestion = allQuestion[index].id;

    //tim xem idQuestion có trong mảng userAnswers không
    return userAnswers.some(
      (userAnswer) => userAnswer.idQuestion === idQuestion
    );
  };
  // Kiểm tra xem câu trả lời có đúng ko -> trả về boolean
  const checkcorrectAnswer = (userAnswer) => {
    return allQuestion.some(
      (question) =>
        question.id === userAnswer.idQuestion &&
        userAnswer.answer === question.correctAnswer
    );
  };

  const handleSubmit = () => {
    setIsFinish(true);

    const numberCorrectAnswer = userAnswers.reduce((sum, userAnswer) => {
      if (checkcorrectAnswer(userAnswer)) {
        return (sum += 1);
      }

      return sum;
    }, 0);

    const numberWrongAnswer = userAnswers.length - numberCorrectAnswer;
    const numberUnAnswered =
      allQuestion.length - numberWrongAnswer - numberCorrectAnswer;

    setResultSubmit((pre) => ({
      ...pre,
      numberCorrectAnswer,
      numberWrongAnswer,
      numberUnAnswered,
    }));
  };
  // Trả về A,B,C,D của câu trả lời tương ứng với index
  const positionAnswer = (index) =>
    index === 0 ? "A" : index === 1 ? "B" : index === 2 ? "C" : "D";

  const handleExpiredTime = () => {
    setIsFinish(true);
  };

  // useEffect chạy mỗi lần nạp bài
  useEffect(() => {
    if (!isFinish) return;

    dispatch(updateUserPoint({ idQuiz: id, userMaxPoint: point }));
  }, [isFinish, dispatch, id, point]);

  if (!findQuiz) return <div>Không tìm thấy quiz ...</div>;

  return (
    <>
      {!isFinish ? (
        <ExamContainer>
          <MainExam>
            <HeaderExam>
              <Title>{findQuiz.title}</Title>

              <CountDownTime
                totalTime={findQuiz.time * 1000}
                targetDate={targetTimeInMs}
                onExpiredTime={handleExpiredTime}
              />
            </HeaderExam>

            <ContentExam>
              <div>
                <QuestionParam>
                  Câu {indexQuestion + 1}. {currentQuesion.question}
                </QuestionParam>

                <AnswerForm>
                  {currentAnswers.map((answer, index) => (
                    <AnswerLabel key={index}>
                      <input
                        type="radio"
                        name={"answer"}
                        checked={isChecked(answer)}
                        onChange={() => handleCheckedAnswer(answer)}
                      />
                      <Checkmark />
                      <span>
                        {positionAnswer(index)}. {answer}
                      </span>
                    </AnswerLabel>
                  ))}
                </AnswerForm>
              </div>

              <ButtonsWrap>
                <Button
                  onClick={handlePreQuesion}
                  disabled={indexQuestion === 0}
                >
                  Câu trước
                </Button>
                <Button
                  onClick={handleNextQuesion}
                  disabled={indexQuestion === allQuestion.length - 1}
                >
                  Câu sau
                </Button>
              </ButtonsWrap>
              <ButtonGotoWrap onClick={() => setIsOpenMenu(true)}>
                <ButtonRound>Chuyển tới</ButtonRound>
              </ButtonGotoWrap>
            </ContentExam>
          </MainExam>

          <SideMenuButton
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
            allQuestion={allQuestion}
            indexQuestion={indexQuestion}
            isAnswered={isAnswered}
            handleClickChangeQuestion={handleClickChangeQuestion}
            handleSubmit={handleSubmit}
          />
        </ExamContainer>
      ) : (
        <ExamFinish
          maxPoint={maxPoint}
          point={point}
          quiz={findQuiz}
          resultSubmit={resultSubmit}
        />
      )}
    </>
  );
};

export default Exam;
