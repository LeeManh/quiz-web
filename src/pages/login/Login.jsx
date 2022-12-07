import { BiUser } from "react-icons/bi";
import { AiFillUnlock } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const schema = yup
  .object({
    userName: yup.string().trim().required("Cần nhập tên người dùng"),
    password: yup
      .string()
      .trim()
      .required("Cần nhập mật khẩu")
      .min(6, "Tối thiểu 6 ký tự"),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {};

  return (
    <LoginContainer>
      <Container>
        <Wrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <CameraWrap>
              <CameraIcon src={CameraImg} alt="" />
            </CameraWrap>

            <FormItem>
              <InputContainer>
                <IconWrap>
                  <BiUser />
                </IconWrap>
                <Input
                  type="text"
                  placeholder="user name"
                  {...register("userName")}
                />
              </InputContainer>
              <ErrorText>{errors.userName?.message}</ErrorText>
            </FormItem>

            <FormItem>
              <InputContainer>
                <IconWrap>
                  <AiFillUnlock />
                </IconWrap>
                <Input
                  type="password"
                  placeholder="password"
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
