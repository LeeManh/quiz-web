import * as yup from "yup";

const schema = yup
  .object({
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
  })
  .required();

export default schema;
