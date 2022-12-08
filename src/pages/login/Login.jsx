import { BiUser } from "react-icons/bi";
import { AiFillUnlock } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { Container } from "../../GolbalStyles.styled";
import {
  ButtonForm,
  CameraIcon,
  CameraWrap,
  CheckBoxWrap,
  ErrorText,
  Form,
  FormItem,
  IconWrap,
  Input,
  InputContainer,
  LoginContainer,
  Wrapper,
} from "./Login.styled";
import CameraImg from "assets/images/camera-icon.png";
import users from "data/users";
import schema from "utils/rules";
import { loginSuccess } from "redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState(null);

  const onSubmit = (data) => {
    const { email, password } = data;
    handleResetError();

    const findUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!findUser) {
      setError("Sai user name hoặc mật khẩu");
      return;
    }

    dispatch(
      loginSuccess({
        user: {
          email: findUser.email,
          password: findUser.password,
          roles: findUser.roles,
          point: findUser.point,
        },
      })
    );

    reset();
  };

  const handleResetError = () => {
    setError(null);
  };

  return (
    <LoginContainer>
      <Container>
        <Wrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <ErrorText>{error}</ErrorText>
            <CameraWrap>
              <CameraIcon src={CameraImg} alt="" />
            </CameraWrap>

            <FormItem>
              <InputContainer>
                <IconWrap>
                  <BiUser />
                </IconWrap>
                <Input type="text" placeholder="Email" {...register("email")} />
              </InputContainer>
              <ErrorText>{errors.email?.message}</ErrorText>
            </FormItem>

            <FormItem>
              <InputContainer>
                <IconWrap>
                  <AiFillUnlock />
                </IconWrap>
                <Input
                  type="password"
                  placeholder="Mật khẩu"
                  {...register("password")}
                />
              </InputContainer>
              <ErrorText>{errors.password?.message}</ErrorText>
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
