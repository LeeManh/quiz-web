import colors from "constants/colors";
import styled from "styled-components";
import { ReactDOM } from "react";
import { OverLay } from "GolbalStyles.styled";

const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 40rem;
  background-color: white;
  border-radius: 1rem;
  padding: 3rem;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid gray;
`;
const Message = styled.div`
  font-size: 1.6rem;
`;
const ButtonWrap = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: end;
  gap: 1rem;
`;
const Button = styled.button`
  border: none;
  outline: none;
  padding: 1rem 3rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;
const ButtonConfirm = styled(Button)`
  background-color: ${colors.green};
`;
const ButtonNo = styled(Button)`
  background-color: red;
`;
const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalConfirm = (props) => {
  const { title, message, isShow, onClickBtn, children } = props;

  return (
    <>
      {isShow && (
        <ModalContainer>
          <ModalStyled>
            {children ? (
              children
            ) : (
              <>
                <Title>{title}</Title>
                <Message>{message}</Message>
              </>
            )}

            <ButtonWrap>
              <ButtonConfirm onClick={() => onClickBtn(true)}>
                Yes
              </ButtonConfirm>
              <ButtonNo onClick={() => onClickBtn(false)}>No</ButtonNo>
            </ButtonWrap>
          </ModalStyled>
          <OverLay />
        </ModalContainer>
      )}
    </>
  );
};

export default ModalConfirm;
