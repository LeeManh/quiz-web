import { OverLay } from "GolbalStyles.styled";
import React from "react";
import {
  ButtonQuestion,
  ButtonRound,
  ListBtnQuesion,
  SideMenuButtonCotainer,
} from "./SideMenu.styled";

const SideMenuButton = (props) => {
  const {
    isOpenMenu,
    allQuestion,
    indexQuestion,
    isAnswered,
    handleClickChangeQuestion,
    handleSubmit,
    setIsOpenMenu,
  } = props;

  return (
    <>
      <SideMenuButtonCotainer show={isOpenMenu}>
        <ListBtnQuesion>
          {Array(allQuestion.length)
            .fill(0)
            .map((_, index) => (
              <ButtonQuestion
                isActive={index === indexQuestion}
                isAnswered={isAnswered(index)}
                key={index}
                onClick={() => handleClickChangeQuestion(index)}
              >
                {index + 1}
              </ButtonQuestion>
            ))}
        </ListBtnQuesion>

        <ButtonRound onClick={handleSubmit}>Nộp bài</ButtonRound>
      </SideMenuButtonCotainer>
      <OverLay show={isOpenMenu} onClick={() => setIsOpenMenu(false)} />
    </>
  );
};

export default SideMenuButton;
