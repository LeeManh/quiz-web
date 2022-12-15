import { Button } from "pages/exam/Exam.styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectAllQuizs, updateQuestion, updateQuiz } from "redux/quizSlice";
import InputText from "components/common/InputText/InputText";
import styled from "styled-components";
import breakPoints from "constants/breakPoints";
import colors from "constants/colors";
import SelectOpt from "components/common/SelectOpt/SelectOpt";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { questionSchema, quizSchema } from "utils/rules";
import { useCallback, useEffect, useMemo, useState } from "react";
import TextArea from "components/common/TextArea/TextArea";

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;
const Title = styled.div`
  text-align: ${(props) => props.textAl && props.textAl};
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: ${(props) => props.mb && props.mb};
`;
const Content = styled.div`
  margin-top: 3rem;
`;
const From = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${colors.gray};
  padding: 2rem;
  border-radius: 1rem;
  row-gap: 2rem;
  column-gap: 2rem;
  place-items: center;
  overflow: hidden;

  @media screen and (max-width: ${breakPoints.md}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const FromItem = styled.div`
  width: 100%;
  max-width: 50rem;
`;
const ButtonWrap = styled.div`
  grid-column: 1 / -1;
  margin-top: 3rem;
`;
const ButtonSubmit = styled.button`
  border: none;
  outline: none;
  padding: 1rem 4rem;
  background-color: ${colors.yellow};
  color: black;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
const SectionQuestion = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${colors.gray};
  margin-top: 3rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const ButtonQuestion = styled.button`
  border: none;
  outline: none;
  width: 4rem;
  height: 4rem;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: ${(props) => props.active && colors.green};
  font-weight: ${(props) => props.active && "bold"};
`;
const QuestionForm = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EditQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      time: 0,
      maxPoint: 0,
      ratings: 0,
      difficulty: "",
    },
    resolver: yupResolver(quizSchema),
  });

  const {
    register: registerEditQuestion,
    handleSubmit: handleSubmitEditQuestion,
    setValue: setValueEditQuestion,
    formState: { errors: errorsEditQuestion },
  } = useForm({
    defaultValues: {
      question: "",
      correctAnswer: "",
      incorrectAnswers1: "",
      incorrectAnswers2: "",
      incorrectAnswers3: "",
    },
    resolver: yupResolver(questionSchema),
  });

  const quizs = useSelector(selectAllQuizs);

  const findQuiz = useMemo(
    () => quizs.find((quiz) => quiz.id === +id),
    [id, quizs]
  );

  const [indexCurrentQuestion, setIndexCurrentQuestion] = useState(0);
  const currentQuestion = findQuiz.questions[indexCurrentQuestion];

  const handleClickBtnQuesntion = (index) => setIndexCurrentQuestion(index);

  const goBack = useCallback(() => navigate(-1), [navigate]);

  const onSubmit = (data) => {
    dispatch(updateQuiz({ updateQuiz: { ...findQuiz, ...data } }));
  };
  const onSubmitEditQuestion = (data) => {
    const updateQues = {
      ...currentQuestion,
      question: data.question,
      incorrectAnswers: [
        data.incorrectAnswers1,
        data.incorrectAnswers2,
        data.incorrectAnswers3,
      ],
      correctAnswer: data.correctAnswer,
    };

    dispatch(
      updateQuestion({
        updateQues,
        idQuiz: findQuiz.id,
      })
    );
  };

  useEffect(() => {
    setValue("title", findQuiz.title);
    setValue("time", findQuiz.time);
    setValue("maxPoint", findQuiz.maxPoint);
    setValue("ratings", findQuiz.ratings);
    setValue("difficulty", findQuiz.difficulty);
  }, [findQuiz, setValue]);

  useEffect(() => {
    setValueEditQuestion("question", currentQuestion.question);
    setValueEditQuestion("correctAnswer", currentQuestion.correctAnswer);
    setValueEditQuestion(
      "incorrectAnswers1",
      currentQuestion.incorrectAnswers[0]
    );
    setValueEditQuestion(
      "incorrectAnswers2",
      currentQuestion.incorrectAnswers[1]
    );
    setValueEditQuestion(
      "incorrectAnswers3",
      currentQuestion.incorrectAnswers[2]
    );
  }, [currentQuestion, setValueEditQuestion]);

  if (!findQuiz) return <div>Không tồn tại quiz với id : {id}</div>;

  return (
    <div>
      <Header>
        <Button onClick={goBack}>Go back</Button>
        <Title textAl="center">Edit Quiz</Title>
      </Header>
      <Content>
        <From onSubmit={handleSubmit(onSubmit)}>
          <FromItem>
            <InputText
              placeholder="Title"
              label="Title"
              register={register}
              name="title"
              errorsMessage={errors.title?.message}
            />
          </FromItem>
          <FromItem>
            <InputText
              placeholder="Time"
              label="Time"
              register={register}
              name="time"
              errorsMessage={errors.time?.message}
            />
          </FromItem>
          <FromItem>
            <InputText
              placeholder="Max Point"
              label="Max Point"
              register={register}
              name="maxPoint"
              errorsMessage={errors.maxPoint?.message}
            />
          </FromItem>
          <FromItem>
            <InputText
              placeholder="Ratings"
              label="Ratings"
              register={register}
              name="ratings"
              errorsMessage={errors.ratings?.message}
            />
          </FromItem>
          <FromItem>
            <SelectOpt
              options={[
                { value: "hard", title: "Hard" },
                { value: "medium", title: "Medium" },
                { value: "easy", title: "Easy" },
              ]}
              label="Difficulty"
              register={register}
              name="difficulty"
              errorsMessage={errors.difficulty?.message}
            />
          </FromItem>

          <ButtonWrap>
            <ButtonSubmit type="submit">Lưu</ButtonSubmit>
          </ButtonWrap>
        </From>

        {/* Edit Question */}
        <SectionQuestion>
          <Title mb="3rem">Edit Question</Title>
          <ButtonContainer>
            {findQuiz.questions.map((question, index) => (
              <ButtonQuestion
                key={index}
                active={index === indexCurrentQuestion}
                onClick={() => handleClickBtnQuesntion(index)}
              >
                {index + 1}
              </ButtonQuestion>
            ))}
          </ButtonContainer>

          <QuestionForm
            onSubmit={handleSubmitEditQuestion(onSubmitEditQuestion)}
          >
            <TextArea
              register={registerEditQuestion}
              name="question"
              errorsMessage={errorsEditQuestion.question?.message}
              label="Question"
            />
            <TextArea
              register={registerEditQuestion}
              name="correctAnswer"
              errorsMessage={errorsEditQuestion.correctAnswer?.message}
              label="CorrectAnswer"
            />
            <TextArea
              register={registerEditQuestion}
              name="incorrectAnswers1"
              errorsMessage={errorsEditQuestion.incorrectAnswers1?.message}
              label="Incorrect Answers"
            />
            <TextArea
              register={registerEditQuestion}
              name="incorrectAnswers2"
              errorsMessage={errorsEditQuestion.incorrectAnswers2?.message}
            />
            <TextArea
              register={registerEditQuestion}
              name="incorrectAnswers3"
              errorsMessage={errorsEditQuestion.incorrectAnswers3?.message}
            />

            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <ButtonSubmit type="submit">Lưu</ButtonSubmit>
            </div>
          </QuestionForm>
        </SectionQuestion>
      </Content>
    </div>
  );
};

export default EditQuiz;
