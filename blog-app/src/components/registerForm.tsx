/* eslint-disable @typescript-eslint/no-explicit-any */
"use cliet";
import axios from "axios";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import Link from "next/link";
import { toast } from "react-toastify";
import * as yup from "yup";


const RegisterSchema = yup.object().shape({
  email: yup.string().required("email is required"),
  name: yup.string().required("name is required"),
  password: yup.string().required("password is required"),
  //bisa ditambah
});

interface IRegisterForm {
  email: string;
  name: string;
  password: string;
}

export default function RegForm() {
  const initialValus: IRegisterForm = { email: "", name: "", password: "" };
  const addLogin = async (
    values: IRegisterForm,
    action: FormikHelpers<IRegisterForm>
  ) => {
    try {
      await axios.post(
        "https://prizedgirl-us.backendless.app/api/users/register",
        values
      );
      action.resetForm();
      toast.success("Register Succsess !")
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Register Failed!"
      );
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValus}
        validationSchema={RegisterSchema}
        onSubmit={addLogin}
      >
        {(props: FormikProps<IRegisterForm>) => {
          const { errors, touched } = props;
          return (
            <Form>
              <div className="flex flex-col bg-white dark:bg-gray-300 rounded-lg">
                <div className="flex flex-col h-[300px] w-[500px] p-4 text-sm bg-white dark:bg-gray-300 gap-4 rounded-lg">
                <p className="font-bold text-[23px]">Sign Up Now</p>
                <div className="h-[50px] w-[full]">
                  <p className="text-[15px]">Email</p>
                  <Field
                    name="email"
                    placeholder="Add a new email"
                    className="w-[220px] text-[12px]"
                    />
                  <div className="bg-white">
                  {touched.email && errors.email ? (
                    <div className="text-red-500 text-xs">
                      {errors.email}
                    </div>
                  ) : null}
                  </div>
                  </div>
                  <div className="h-[50px] w-[full]">
                    <p>Name</p>
                  <Field 
                    name="name" 
                    placeholder="Add a new email" 
                    />
                  <div className="bg-white">
                  {touched.name && errors.name ? (
                    <div className="text-red-500 text-xs">{errors.name}</div>
                  ) : null}
                  </div>
                  </div>
                  <div className="h-[50px] w-[full] bg-white">
                    <p>Password</p>
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
                    sign up
                    </div>
                  </button>
                    <div className="text-[9px] p-4">  
                    Already have an account ?  
                     <Link href={"/login"}> Sign In</Link>
                    </div>
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