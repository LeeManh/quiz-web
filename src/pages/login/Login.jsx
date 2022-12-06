import { BiUser } from "react-icons/bi";
import { AiFillUnlock } from "react-icons/ai";

import { Container } from "../../GolbalStyles.styled";
import {
  ButtonForm,
  CameraIcon,
  CameraWrap,
  CheckBoxWrap,
  Form,
  FormItem,
  IconWrap,
  Input,
  InputContainer,
  LoginContainer,
  Wrapper,
} from "./Login.styled";
import CameraImg from "assets/images/camera-icon.png";

const Login = () => {
  return (
    <LoginContainer>
      <Container>
        <Wrapper>
          <Form>
            <CameraWrap>
              <CameraIcon src={CameraImg} alt="" />
            </CameraWrap>

            <FormItem>
              <InputContainer>
                <IconWrap>
                  <BiUser />
                </IconWrap>
                <Input type="text" placeholder="user name" />
              </InputContainer>
            </FormItem>

            <FormItem>
              <InputContainer>
                <IconWrap>
                  <AiFillUnlock />
                </IconWrap>
                <Input type="password" placeholder="password" />
              </InputContainer>
            </FormItem>

            <FormItem>
              <CheckBoxWrap>
                <input type="checkbox" />
                <span>Remember me</span>
              </CheckBoxWrap>
            </FormItem>

            <FormItem>
              <ButtonForm>Login</ButtonForm>
            </FormItem>
          </Form>
        </Wrapper>
      </Container>
    </LoginContainer>
  );
};

export default Login;
