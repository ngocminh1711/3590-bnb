import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Header from "../header/Header.js";
import { setIdUserLogin } from "../../features/userProfile/UserProfileSlice";
import Footer from "../footer/Footer.js";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const PORT = process.env.PORT || 8000;
  const [errMessage, setErrMessage] = useState("");
  const domain = `http://localhost:${PORT}` || "https://airbnb3590.herokuapp.com"
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loginGoogle = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );

        let data = {
          _id: res.data._id,
          email: res.data.email,
          email_verified: res.data.email_verified,
          family_name: res.data.family_name,
          given_name: res.data.given_name,
          locale: res.data.locale,
          name: res.data.name,
          picture: res.data.picture,
          sub: res.data.sub,
        };

        await axios
          .post(`${domain}/api/auth/login/google`, data)

          .then((res) => {
            let token = res.data.data.token;
            let data = jwtDecode(token);
            localStorage.setItem("username", JSON.stringify(data.username));
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("_id", JSON.stringify(data._id));
            dispatch(setIdUserLogin(data._id));
            setTimeout(() => {
              navigate("/home");
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Welcome back",
                showConfirmButton: false,
                timer: 1000,
              });
            }, 1000);
          });
      } catch (err) {
        console.log(err);
      }
    },
  });
  const handleRegister =()=>{
    navigate("/register")

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      username: form.username,
      password: form.password,
    };

    axios
      .post(`${domain}/api/auth/login`, data)
      .then((res) => {
        if (res.status === 200) {
          let token = res.data.token;
          let data = jwtDecode(token);
          localStorage.setItem("token", JSON.stringify(res.data.token));
          localStorage.setItem("username", form.username);
          localStorage.setItem("_id", data.id);
          dispatch(setIdUserLogin(data.id));
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Welcome back",
            showConfirmButton: false,
            timer: 1000,
          });
          setTimeout(() => {
            navigate("/home");
          }, 1500);
        }
      })
      .catch((err) => {
        console.log(err);
        setErrMessage(err.response.data.message);
      });

  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://links.papareact.com/qd3"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          {errMessage ? (
            <div
              class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              <span class="font-medium">Error</span> {errMessage}
            </div>
          ) : null}
          <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Email address
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={form.username}
                  onChange={(e) => handleChange(e)}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={(e) => handleChange(e)}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <p className="">
                  Do not have an account ?
                  <a className="text-rose-500"
                   onClick={handleRegister}>{" "}Register</a>
                  </p>
              </div>
            </div>
            <div>
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
                Sign in
              </button>
            </div>
            <div>
              <button onClick={loginGoogle}>
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" className="svg-inline--fa fa-google w-5 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" style={{"color":"red"}}>
                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
                  <h2 className="ml-10 -mt-5">Login With Google </h2></button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
