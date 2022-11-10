import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import BannerImg from "../../assets/img/house-banner.png";
import Footer from "../footer/Footer";
import Header from "../header/Header";
// import 'flowbite';
const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "At least 4 characters!")
    .max(50, "Tối đa 50 ký tự!")
    .required("compulsory!"),

  email: Yup.string()
    .email("Invalid email!")
    .required("compulsory!")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Email invalidate.(vd: abc@gmail.com)"
    ),
  password: Yup.string()
    .required("compulsory!")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must be at least 8 characters with at least one uppercase, one lowercase and a number."
    ),
  confirmPassword: Yup.string()
    .required("compulsory!")
    .oneOf([Yup.ref("password"), null], "password incorrect!"),
});

export default function Register() {
  const [existedEmail, setExistedEmail] = useState("");
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(form)
  const handleRegister = async (data) => {
    console.log(1)
    return await axios.post("http://localhost:8000/api/auth/register", data);
    
  };
  return (
    <>
    <Header />
      <Formik
        initialValues={form}
        validationSchema={RegisterSchema}
        onSubmit={(value) => {
          handleRegister(value)
            .then((res) => {
              console.log(res.data);
              if (res.data.success === true) {
                swal({
                  title: "Register Suscess!",
                  text: "You clicked OK!",
                  icon: "success",
                  button: "Ok!",
                });
                navigate("/login");
              }
            })
            .catch((e) => setExistedEmail("Email da ton tai"));
        }}
      >
        <Form>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-18 mx-auto flex flex-wrap items-center justify-center">
              <div className="lg:w-3/5 lg:pr-0 pr-0">
                <img src="https://a0.muscache.com/im/pictures/44695671-e125-4ad5-bf64-c79a82f0acc5.jpg?im_w=960" alt="" />
              </div>
              <div className="lg:w-2/6 xl:w-2/5 md:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0">
                <h2 className="mt-5 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Register
                </h2>
                {existedEmail ? (
                  <div
                    style={{ height: 10, fontSize: 15 }}
                    class="rounded-lg py-2 px-2 mb-3 text-base text-red-700 inline-flex items-center  "
                    role="alert"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="times-circle"
                      class="w-4 h-4 mr-2 -ml-2 fill-current"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 500"
                    >
                      <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                      ></path>
                    </svg>
                    {existedEmail}
                  </div>
                ) : null}
                <div className="relative mb-4">
                  <label
                    //   htmlFor="full-name"className="block text-sm font-semibold text-gray-800"
                    className="leading-7 text-sm text-gray-600 block text-sm font-semibold"
                  >
                    Username
                  </label>
                  <Field
                    required
                    type="text"
                    name="username"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <a className="errors text-sm text-red-700 ">
                    <ErrorMessage name="username" />
                  </a>
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="full-name"
                    className="leading-7 text-sm text-gray-600 block text-sm font-semibold"
                  >
                    Email
                  </label>
                  <Field
                    type="text"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <a className="errors text-sm text-red-700 ">
                    <ErrorMessage name="email" />
                  </a>
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600 block text-sm font-semibold"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <a className="errors text-sm text-red-700">
                    <ErrorMessage name="password" />
                  </a>
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600 block text-sm font-semibold"
                  >
                    Repeat Password
                  </label>
                  <Field
                    type="password"
                    id="email"
                    name="confirmPassword"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <a className="errors text-sm text-red-700">
                    <ErrorMessage name="confirmPassword" />
                  </a>
                </div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    {/* Heroicon name: mini/lock-closed */}
                    <svg
                      className="h-5 w-5 text-red-100 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Register
                </button>
                <p className="mt-8 text-xs font-light text-center text-gray-700">
                  {" "}
                  Do you already have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-purple-600 hover:underline"
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </section>
        </Form>
      </Formik>
      <Footer/>
    </>
  );
}
