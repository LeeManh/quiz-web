import { OverLay } from "GolbalStyles.styled";
import { useState } from "react";

import {
  ButtonRound,
  AnswerForm,
  Button,
  ButtonQuestion,
  ButtonsWrap,
  ContentExam,
  ExamContainer,
  HeaderExam,
  ListBtnQuesion,
  MainExam,
  QuestionParam,
  SideMenu,
  TimeExist,
  TimeLine,
  Title,
  AnswerLabel,
  ExamFinishContainer,
  FinishWrap,
  ContentFinish,
  ContentLeftFinish,
  PointText,
  ButtonBackDashBoardWrap,
  ButtonBackDashBoard,
  ButtonGotoWrap,
} from "./Exam.styled";

const Exam = () => {
  const [isFinish, setIsFinish] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      {!isFinish ? (
        <ExamContainer>
          <MainExam>
            <HeaderExam>
              <Title>Kiểm tra an toàn bảo mật thông tin lần 2</Title>
              <TimeExist>Còn lại: 14 phút 22 giây</TimeExist>
              <TimeLine></TimeLine>
            </HeaderExam>

            <ContentExam>
              <div>
                <QuestionParam>
                  Câu 3. Nhân viên chính thức của công ty Amela được nghỉ phép
                  (có hưởng lương) bao nhiêu ngày một năm?
                </QuestionParam>

                <AnswerForm>
                  <AnswerLabel>
                    <input type="radio" value="A" name="test" />
                    <span>A. 12 ngày nếu làm đủ cả năm</span>
                  </AnswerLabel>
                  <AnswerLabel>
                    <input type="radio" value="B" name="test" />
                    <span>B. 16 ngày nếu làm đủ cả năm</span>
                  </AnswerLabel>
                  <AnswerLabel>
                    <input type="radio" value="C" name="test" />
                    <span>C. Không có nghỉ phép vẫn hưởng lương</span>
                  </AnswerLabel>
                  <AnswerLabel>
                    <input type="radio" value="D" name="test" />
                    <span>D. 8 ngày nếu làm đủ cả năm</span>
                  </AnswerLabel>
                </AnswerForm>
              </div>

              <ButtonsWrap>
                <Button>Câu trước</Button>
                <Button>Câu sau</Button>
              </ButtonsWrap>
              <ButtonGotoWrap onClick={() => setIsOpenMenu(true)}>
                <ButtonRound>Chuyển tới</ButtonRound>
              </ButtonGotoWrap>
            </ContentExam>
          </MainExam>

          <SideMenu show={isOpenMenu}>
            <ListBtnQuesion>
              {Array(16)
                .fill(0)
                .map((_, index) => (
                  <ButtonQuestion isActive={index === 2} key={index}>
                    {index + 1}
                  </ButtonQuestion>
                ))}
            </ListBtnQuesion>

            <ButtonRound onClick={() => setIsFinish(true)}>Nộp bài</ButtonRound>
          </SideMenu>
          <OverLay show={isOpenMenu} onClick={() => setIsOpenMenu(false)} />
        </ExamContainer>
      ) : (
        <ExamFinishContainer>
          <FinishWrap>
            <Title>Kiểm tra an toàn bảo mật thông tin lần 2</Title>

            <ContentFinish>
              <ContentLeftFinish>
                <div>
                  <span>Số câu trả lời đúng:</span>
                  <span>12</span>
                </div>
                <div>
                  <span>Số câu trả lời sai:</span>
                  <span>3</span>
                </div>
                <div>
                  <span>Số câu chưa trả lời đúng:</span>
                  <span>1</span>
                </div>
                <div>
                  <span>Tổng số câu hỏi:</span>
                  <span>16</span>
                </div>
              </ContentLeftFinish>

              <PointText>Điểm số: 120 / 160</PointText>
            </ContentFinish>

            <ButtonBackDashBoardWrap>
              <ButtonBackDashBoard to="/dashboard">
                Dashboard
              </ButtonBackDashBoard>
            </ButtonBackDashBoardWrap>
          </FinishWrap>
        </ExamFinishContainer>
      )}
    </>
  );
};

export default Exam;
