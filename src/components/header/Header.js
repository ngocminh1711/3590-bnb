import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import styled from "styled-components";
import {SearchIcon} from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SearchHouses from "../searchHouses/searchHouses";
import {FaEdit, FaSlash} from "react-icons/fa";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

import {DarkModeToggle} from "@anatoliygatt/dark-mode-toggle";
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from "formik";
import axios from "axios";
import swal from "sweetalert";

import jwtDecode from "jwt-decode";
import IconNotification from "./IconNotification/IconNotification";

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  &:hover {
    background-color: ${({theme}) => theme.soft};
  }
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme}) => theme.soft};
`;
function Header() {
  let token = localStorage.getItem("token");
  const PORT = process.env.PORT || 8000;
  const userLoginProfile = useSelector((state) => state.profileUser);
  const dispatch = useDispatch();
  const [nameUser, setNameUser] = useState("");
  let user;
  if (token) {
    user = jwtDecode(token);
  }

    const [showDropDown, setShowDropDown] = useState(false);
    const navigate = useNavigate();
    const userLogin = localStorage.getItem("username");

  const getApiUserLogin = async () => {
    return axios.get(
      `http://localhost:${PORT}/api/user/${userLoginProfile.idUserLogin}`
    );
  };

  useEffect(() => {
    getApiUserLogin()
      .then((res) => {
        setNameUser(res.data.data.name);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

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
          title: "Good Bye",
          showConfirmButton: false,
          timer: 1000,
        });
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        localStorage.removeItem("_id");
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
    const handleCreateHouse = () => {
        if (token) {
            navigate("/admin/host-create");
        } else {
            navigate("/login");
        }
    }
    const handleCreate = (e) => {
        navigate("/admin/host-create");
    };

    const handleMyNotifications = () => {
        navigate(`/check-booking/${userLoginProfile.idUserLogin}`);
    };
    const handleShowHistoryBooking = () => {
        navigate(`/history-booking/${userLoginProfile.idUserLogin}`);
    };

    const handleDashBoard = (e) => {
        navigate(`/dashboard/${userLoginProfile.idUserLogin}`);
    };
    const handleSignup = (e) => {
        setTimeout(() => {
            navigate("/register");
        }, 500);
    };
    return (
    <>
      <header
        className="py-3 mb-0 z-50 bg-white w-full border-b-2"
        style={{ position: "fixed", top: 0 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/home">
            <img
              className="w-28 h-9 cursor-pointer"
              src={"https://links.papareact.com/qd3"}
              alt=""
            />
          </Link>

                    <div className="mb-0 ml-64">
                        <SearchHouses/>
                    </div>
                    <div className=" bg-rose-400 rounded-2xl py-2 hover:bg-rose-500 ml-32 px-2 text-white">
                        <button onClick={handleCreateHouse}>Become a host</button>
                    </div>
                    <div>
                        <IconNotification/>
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
                                                        className="inline-flex w-40 justify-start rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                                                        role="menuitem"
                                                        tabIndex="-1"
                                                        id="menu-item-0"
                                                        onClick={(e) => handleDashBoard(e)}
                                                    >
                                                        Dash Board
                                                    </button>
                                                    <br></br>
                                                    <button
                                                        href="#"
                                                        className="inline-flex w-40 justify-start rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
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
                        <div className="border px-3 py-2 rounded-2xl">
                            <div className="flex items-center gap-6 ">
                                <button
                                    className="hover:text-violet-900 transition"
                                    onClick={(e) => handleLogin(e)}
                                >
                                    Log in
                                </button>
                                <button
                                    onClick={(e) => handleSignup(e)}
                                    className="bg-rose-500 hover:bg-rose-400 text-white px-3 py-2 rounded-2xl transition"
                                    to="/"
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}
export default Header;