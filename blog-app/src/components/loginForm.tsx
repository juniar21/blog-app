"use cliet";
import { login } from "@/redux/userSlice";
import axios, { AxiosError } from "axios";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";

const LoginSchema = yup.object().shape({
  login: yup.string().required("login is required"),
  password: yup.string().required("password is required"),
  //bisa ditambah
});

interface ILoginForm {
  login: string;
  password: string;
}

export default function LogForm() {
  const initialValus: ILoginForm = { login: "", password: "" };
  const dispatch = useDispatch()
  const router = useRouter()
  const onLogin = async (
    values: ILoginForm,
    action: FormikHelpers<ILoginForm>
  ) => { 
    try {
    const {data} = await axios.post("/api/auth/login",values)
    dispatch(login(data));
    console.log(data);
    console.log(data["user-token"]);
    toast.success("Login Sucsess")
    action.resetForm()
    router.push("/home")
    
  } catch (err) {
    if (err instanceof AxiosError){
      toast.error(err.response?.data?.error.message || "login Failed")
    }
    console.log(err);
    //belajar cara dapat error di console log error
  }

  };

  return (
    <div>
      <Formik
        initialValues={initialValus}
        validationSchema={LoginSchema}
        onSubmit={onLogin}
      >
        {(props: FormikProps<ILoginForm>) => {
          const { errors, touched } = props;
          return (
            <Form>
              <div className="flex dark:bg-gray-300 rounded-lg">
                <div className="flex flex-col h-[250px] p-4 text-sm bg-white dark:bg-gray-300 gap-4">
                  <p className="font-bold text-[23px]">Sign In Now</p>
                  <div className="h-[50px] w-[full]">
                    <p className="text-[15px]">Email</p>
                    <Field
                      name="login"
                      placeholder="Add a new email"
                      className="w-[220px] text-[12px]"
                    />
                    <div className="bg-white">
                      {touched.login && errors.login ? (
                        <div className="text-red-500 text-xs">
                          {errors.login}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="h-[50px] w-[full] bg-white">
                    <p className="text-[15px]">Password</p>
                    <Field name="password" placeholder="Add a new password" />
                    <div className="bg-white">
                      {touched.password && errors.password ? (
                        <div className="text-red-500 text-xs">
                          {errors.password}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex">
                    <button type="submit" className="p-2 text-sm text-center">
                      <div className="bg-black text-white w-[55px] h-7 rounded-md">
                        Login
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
