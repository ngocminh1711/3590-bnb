import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import SearchHouses from "../searchHouses/searchHouses";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import swal from "sweetalert";
import jwtDecode from "jwt-decode";
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const UpdateSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Mật khẩu không được để trống !"),
  password: Yup.string().required("Mật khẩu không được để trống !"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Mật khẩu không khớp !")
    .required("Mật khẩu không được để trống !"),
});

function HeaderDashBoard({ lightMode, setLightMode }) {
  let token = localStorage.getItem("token");
  const userLoginProfile = useSelector((state) => state.profileUser);
  console.log("id--------" + userLoginProfile.idUserLogin);

  let user;
  if (token) {
    user = jwtDecode(token);
  }
  const [showDropDown, setShowDropDown] = useState(false);
  const [blockInput, setBlockInput] = useState(true);
  const navigate = useNavigate();
  const userLogin = localStorage.getItem("username");

  const handleLogout = async (e) => {
    Swal.fire({
      title: "Are you sure to logout?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome back",
          showConfirmButton: false,
          timer: 1000,
        });
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    });
  };
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleChangePassword = async (data, id) => {
    const a = await axios.put(
      `http://localhost:8000/api/user/change-password/${id}`,
      data
    );
    setForm({ currentPassword: "", newPassword: "" });
    return a;
  };

  const handleLogin = (e) => {
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  const handleShowInfo = () => {
    setShowDropDown(!showDropDown);
  };

  const handleShowProfile = () => {
    setShowDropDown(false);

    if (token) {
      navigate(`/profile/${userLoginProfile.idUserLogin}`);
    } else {
      navigate("/login");
    }
  };
  const handleCreate = (e) => {
    navigate("/admin/host-create");
  };

  const handleMyNotifications = () => {
    navigate(`/check-booking/${userLoginProfile.idUserLogin}`);
  };
  const id = userLoginProfile.userLogin;
  console.log(id);
  const handleDashBoard = (e) => {
    navigate(`/dashboard/${userLoginProfile.idUserLogin}`);
  };
  const handleSignup = (e) => {
    setTimeout(() => {
      navigate("/register");
    }, 500);
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <header className="py-6 mb-0">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/home">
            <img
              className="w-28 h-9 cursor-pointer"
              src={"https://links.papareact.com/qd3"}
              alt=""
            />
          </Link>
          <SearchHouses />
          <div className="dropdown relative">
            <a
              className="inline-flex w-25 ml-80 justify-start rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-rose-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
              <i className="material-icons-round text-base">expand_more</i>
            </a>

            <ul
              className="
    dropdown-menu
    min-w-max
    absolute
    hidden
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  "
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <button
                  className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                  onClick={(e) => handleCreate(e)}
                >
                  Create House
                </button>
              </li>
              <li>
                <button
                  className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                  onClick={(e) => handleCreate(e)}
                >
                  Create House
                </button>
              </li>

              <li>
                <button
                  className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                  onClick={(e) => handleMyNotifications(e)}
                >
                  My Notifications
                </button>
              </li>
              <li>
                <button
                  className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                  onClick={(e) => handleCreate(e)}
                >
                  Create House
                </button>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <a
              className="
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          hidden-arrow
          flex items-right
          ml-58
        "
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bell"
                className="float-left w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                ></path>
              </svg>
              <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                1
              </span>
            </a>
          </div>
          {userLogin ? (
            <>
              <>
                <div className="text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50 hover:shadow-md "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={() => handleShowInfo()}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="w-5 h-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                            />
                          </svg>
                        </div>
                        <div className="w-5 h-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div
                    className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    {!showDropDown ? (
                      ""
                    ) : (
                      <>
                        <div className="py-1" role="none">
                          <button
                            href="#"
                            className="inline-flex w-40 justify-start rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                            onClick={(e) => handleShowProfile(e)}
                          >
                            {userLogin}
                          </button>
                          <br></br>
                          <button
                            href="#"
                            className="inline-flex w-40 justify-start rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                            onClick={(e) => handleCreate(e)}
                          >
                            Create House
                          </button>
                          <br></br>

                          <div>
                            {/* Button trigger modal */}
                            <button
                              onClick={() => {
                                setShowModal(true);
                              }}
                              type="button"
                              className="inline-flex w-40 justify-start rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              ChangePassword
                            </button>
                            {/* Modal */}
                            {showModal ? (
                              <>
                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed visible inset-0 z-50  ">
                                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                      {/*header*/}
                                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                          Change Password
                                        </h3>

                                        <button
                                          className="text-2xl hover:bg-rose-400"
                                          onClick={() => {
                                            setShowModal(false);
                                          }}
                                        >
                                          X
                                        </button>
                                      </div>
                                      {/*body*/}
                                      <div
                                        className="relative p-6 flex-auto"
                                        style={{ width: "600px" }}
                                      >
                                        <Formik
                                          initialValues={form}
                                          validationSchema={UpdateSchema}
                                          onSubmit={async (e) => {
                                            console.log(e);
                                            let user;
                                            if (token) {
                                              user = jwtDecode(token);
                                            }
                                            const id = user.id;

                                            let data = {
                                              currentPassword:
                                                form.currentPassword,
                                              newPassword: form.newPassword,
                                            };
                                            handleChangePassword(data, id)
                                              .then((res) => {
                                                console.log(res);

                                                if (res.data.success === true) {
                                                  setShowModal(false);
                                                  swal({
                                                    title:
                                                      "ChangePass Suscess!",
                                                    text: "You clicked OK!",
                                                    icon: "success",
                                                    button: "Ok!",
                                                  });
                                                }
                                              })
                                              .catch((e) =>
                                                console.log(e.message)
                                              );
                                          }}
                                        >
                                          {({ errors, touched }) => (
                                            <Form>
                                              <section className="text-gray-600 body-font">
                                                <div>
                                                  <div className=" w-full bg-gray-100 rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0">
                                                    <div className="relative mb-4">
                                                      <label
                                                        htmlFor="Password-old"
                                                        className="leading-7  text-gray-600 block text-sm font-semibold"
                                                      >
                                                        Password Current
                                                      </label>
                                                      <Field
                                                        type="password"
                                                        name="currentPassword"
                                                        required
                                                        value={
                                                          form.currentPassword
                                                        }
                                                        onChange={handleChange}
                                                        placeholder="Current Password"
                                                        id="currentPassword"
                                                        autocomplete="off"
                                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                      />
                                                      {errors.oldPassword &&
                                                      touched.oldPassword ? (
                                                        <div
                                                          style={{
                                                            color: "red",
                                                          }}
                                                        >
                                                          {errors.oldPassword}
                                                        </div>
                                                      ) : null}
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
                                                        placeholder="New Password"
                                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                      />
                                                      {errors.password &&
                                                      touched.password ? (
                                                        <div
                                                          style={{
                                                            color: "red",
                                                          }}
                                                        >
                                                          {errors.password}
                                                        </div>
                                                      ) : null}
                                                    </div>
                                                    <button
                                                      type="submit"
                                                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                      Save
                                                    </button>
                                                  </div>
                                                </div>
                                              </section>
                                            </Form>
                                          )}
                                        </Formik>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                              </>
                            ) : null}
                          </div>

                          <hr></hr>
                         
                          <br></br>
                          <button
                            href="#"
                            className="inline-flex w-40 justify-start rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                            onClick={(e) => handleLogout(e)}
                          >
                            Logout
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            </>
          ) : (
            <div className="flex items-center gap-6">
              <button
                className="hover:text-violet-900 transition"
                onClick={(e) => handleLogin(e)}
              >
                Log in
              </button>
              <button
                onClick={(e) => handleSignup(e)}
                className="bg-rose-500 hover:bg-rose-400 text-white px-4 py-3 rounded-lg transition"
                to="/"
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
export default HeaderDashBoard;
