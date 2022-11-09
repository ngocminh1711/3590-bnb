// import React, { useState } from "react";
// import * as Yup from "yup";
// import { Formik, Form,ErrorMessage } from "formik";
// import {  Navigate } from "react-router-dom";
// import axios from "axios";
// const ChangePasswordSchesma = Yup.object().shape({
//   password: Yup.string()
//     .required("Bắt buộc")
//     .matches(
//       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
//       "Mật khẩu phải ít nhất 8 ký tự ít nhất một viết hoa, một viết thường và một số."
//     ),
//   confirmPassword: Yup.string()
//     .required("Bắt buộc!")
//     .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp!"),
// });

// function ChangePassword() {

//   const onChangePassword= (e)=>{
//       setForm({...form,[e.target.name]:e.target.value});
//   }
//   return (
//     <>
//       <Formik
//         initialValues={form}
//         validationSchema={ChangePasswordSchesma}
//         onSubmit={(value) => {
//           handleChangePassword(value)
//             .then(res => {
//               // console.log(res);
//               }
//             )
//             .catch((e) =>
//             //  console.log(e.message));
//             e.message)
//         }}
//         >
//         <Form>
//           <div className="mb-6">
//             <label
//               htmlFor="Curent password"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//               Current Password
//             </label>
//             <input
//               type="password"
//               id="currentPassword"
//               name="currentPassword"

//               autoFocus
//               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//               placeholder=" Input Curent Password"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="New password2"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               New Password
//             </label>
//             <input
//               type="password"
//               id="newPassword"
//               name="newPassword"
//               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//               placeholder="Input Password"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="New password2"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Repeat Password
//             </label>
//             <input
//               type="password"
//               id="newPassword2"
//               name="newPassword2"

//               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//               placeholder="Input Repeat Password"
//               required
//             />
//           </div>
//           <div className="flex items-start mb-6">
//             <div className="flex items-center h-5">
//               <input
//                 id="terms"
//                 type="checkbox"
//                 defaultValue
//                 className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
//                 required
//               />
//             </div>
//             <label
//               htmlFor="terms"
//               className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               I agree with the{" "}
//               <a
//                 href="#"
//                 className="text-blue-600 hover:underline dark:text-blue-500"
//               >
//                 terms and conditions
//               </a>
//             </label>
//           </div>
//           <button
//             type="submit"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Register new account
//           </button>
//         </Form>
//       </Formik>
//     </>
//   );
// }
import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Footer from "../footer/Footer";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";

const RegisterSchema = Yup.object().shape({
  password: Yup.string()
    .required("Bắt buộc")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Mật khẩu phải ít nhất 8 ký tự ít nhất một viết hoa, một viết thường và một số."
    ),
  confirmPassword: Yup.string()
    .required("Bắt buộc!")
    .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp!"),
});

function ChangePassword() {
  const dispatch = useDispatch();
  const [existedEmail, setExistedEmail] = useState("");
  const navigate = useNavigate();
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    // newPassword2: "",
  });

  let token = localStorage.getItem("token");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleChangePassword = async (data, id) => {
    const a = await axios.put(
      `http://localhost:8000/api/user/change-password/${id}`,
      data
    );
    return a
  };

  return (
    <>
      <Formik
        initialValues={form}
        // validationSchema={RegisterSchema}
        onSubmit={async (e) => {
          console.log(e);
          let user;
          if (token) {
            user = jwtDecode(token);
          }
          const id = user.id;

          let data = {
            currentPassword: form.currentPassword,
            newPassword: form.newPassword,
          };
          handleChangePassword(data, id)
            .then((res) => {
              console.log(res);

              if (res.data.success === true) {
                swal({
                  title: "ChangePass Suscess!",
                  text: "You clicked OK!",
                  icon: "success",
                  button: "Ok!",  
                }); 
                navigate("//home");
              }
            })
            .catch((e) => console.log(e.message));
        }}
      >
        {() => (
          <Form>
            <section className="text-gray-600 body-font">
              <div
                className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center"
                style={{
                  background:
                    'url("https://cdn.pixabay.com/photo/2017/08/19/19/43/nature-2659682_1280.jpg")',
                }}
              >
                <div className="lg:w-3/5 lg:pr-0 pr-0">
                  <h1 className="title-font font-medium font-bold text-5xl text-white">
                    Slow-carb next level shoindcgoitch ethical authentic, poko
                    scenester
                  </h1>
                  <p className="leading-relaxed mt-4 text-white">
                    Poke slow-carb mixtape knausgaard, typewriter street art
                    gentrify hammock starladder roathse. Craies vegan tousled
                    etsy austin.
                  </p>
                </div>
                <div className="lg:w-2/6 xl:w-2/5 md:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0">
                  <h2 className="text-gray-900 text-lg font-medium title-font mb-5 block text-sm font-semibold">
                    Change Password
                  </h2>
                  <div className="relative mb-4">
                    <label
                      htmlFor="Password-old"
                      className="leading-7  text-gray-600 block text-sm font-semibold"
                    >
                      Password old
                    </label>
                    <Field
                      type="password"
                      name="currentPassword"
                      required
                      value={form.currentPassword}
                      onChange={handleChange}
                      id="currentPassword"
                      autocomplete="off"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="New password"
                      className="leading-7  text-gray-600 block text-sm font-semibold"
                    >
                      New Password
                    </label>
                    <Field
                      type="password"
                      name="newPassword"
                      id="newPassword"
                      required
                      value={form.newPassword}
                      onChange={handleChange}
                      autocomplete="off"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <a className="errors text-sm text-red-700">
                      <ErrorMessage name="password" />
                    </a>
                  </div>
                  <button type="submit                                                          ">
                    register
                  </button>
                  <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Do you have Accout?{" "}
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
        )}
      </Formik>
      <Footer />
    </>
  );
}
export default ChangePassword;
