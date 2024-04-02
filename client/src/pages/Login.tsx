import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Grid, Input, Typography, theme } from "antd";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { setUserLoginStart } from "../redux/user/userSlice";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { login } from "../api/userApi";
import { setLogin } from "../redux/auth/authSlice";
import { isAxiosError } from "../utils/axiosError";

type FieldType = {
  email: string;
  password: string;
  remember: boolean;
};

export default function Login() {
  // type FieldType = Omit<InitialUserState, 'isAuthenticated' | "isLoading">
  const { useToken } = theme;
  const { useBreakpoint } = Grid;
  const { Text, Title } = Typography;
  const { token } = useToken();
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (body: FieldType) => {
      return login(body);
    },
    onSuccess: (response) => {
      const { accessToken, mess, userData, remember, success } = response.data;
      if (success) {
        dispatch(setLogin({ userData, accessToken, remember }));
        toast.success(mess);
        navigate("/");
      }
    },
    onError: (error) => {
      if (
        isAxiosError<{ mes: string }>(error) &&
        error.response &&
        error.response.data &&
        error.response.data.mes
      ) {
        toast.error(error.response.data?.mes); // Corrected this line
      } else {
        toast.error("An error occurred");
      }
    },
  });

  // const errorForm: FormError = useMemo(() => {
  //   if (
  //     isAxiosError<{ error: FormError }>(error) &&
  //     error.response?.status === 500
  //   ) {
  //     return error.response.data.error;
  //   }
  //   return null;
  // }, [error]);

  const onFinish = async (values: FieldType) => {
    mutate(values);
  };

  // const onFinish = async (event: React.FormEvent<HTMLFormElement>, values:FieldType) => {
  //   console.log(values);
  //
  //   // dispatch(
  //   //   setUserLoginStart({
  //   //     ...values,
  //   //     onSuccess: () => {
  //   //       toast.success("Login successfully!");
  //   //       setTimeout(() => {
  //   //         navigate("/");
  //   //       }, 2000);
  //   //     },
  //   //     onError: (error: string) => {
  //   //       toast.error(error);
  //   //     },
  //   //   })
  //   // );
  // };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleForgotPasswordClick = () => {
    navigate("/forgotpassword");
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px",
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    forgotPassword: {
      float: "right",
    },
    header: {
      marginBottom: token.marginXL,
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.464294" width="24" height="24" rx="4.8" fill="#1890FF" />
            <path
              d="M14.8643 3.6001H20.8643V9.6001H14.8643V3.6001Z"
              fill="white"
            />
            <path
              d="M10.0643 9.6001H14.8643V14.4001H10.0643V9.6001Z"
              fill="white"
            />
            <path
              d="M4.06427 13.2001H11.2643V20.4001H4.06427V13.2001Z"
              fill="white"
            />
          </svg>

          <Title style={styles.title}>Sign in</Title>
          <Text style={styles.text}>Welcome back to my website!</Text>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    !value ||
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      value
                    )
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Please input a valid email address!")
                  );
                },
              }),
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                validator(_, value) {
                  if (!value) {
                    return Promise.reject(
                      new Error("Please input your Password!")
                    );
                  }
                  if (value.length < 8) {
                    return Promise.reject(
                      new Error("Password must be at least 8 characters long!")
                    );
                  }
                  if (!/^(?=.*[A-Z])+(?=.*\d)/.test(value)) {
                    return Promise.reject(
                      new Error(
                        "Password must contain at least 1 uppercase letter and 1 number character!"
                      )
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-between items-center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Link className="login-form-forgot" to="/forgotPassword">
                Forgot password
              </Link>
            </div>
          </Form.Item>

          <Form.Item>
            <div className="flex flex-col gap-2 items-center">
              <Button
                htmlType="submit"
                className="w-full flex justify-center items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-5 text-center "
              >
                Log in
              </Button>
              <span>Or</span>
              <Link to="/register">register now!</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
