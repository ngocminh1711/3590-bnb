import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import SearchHouses from "../searchHouses/searchHouses";
function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
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

  const handleLogin = (e) => {
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  const handleShowInfo = () => {
    setShowDropDown(!showDropDown);
  };

  const handleClose = () => {
    setShowProfile(false);
  };

  const handleShowProfile = () => {
    setShowProfile(true);
    setShowDropDown(false);
  };

  const handleEditProfile = () => {};

  const handleSignup = (e) => {
    setTimeout(() => {
      navigate("/register");
    }, 500);
  };

  const search = (e) => {};

  return (
    <>
      <header className="py-6 mb-0 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <img
              className="w-28 h-9 cursor-pointer"
              src={"https://links.papareact.com/qd3"}
              alt=""
            />
          </Link>
          <div className="flex w-96 items-center md:border-2 rounded-full py-2 md:shadow-sm">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
              type="text"
            />
            <SearchIcon
              className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
              onClick={(e) => search(e)}
            />
          </div>

          {userLogin ? (
            <>
              <>
                <div class="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={() => handleShowInfo()}
                    >
                      Options
                      <svg
                        class="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    {!showDropDown ? (
                      ""
                    ) : (
                      <>
                        <div class="py-1" role="none">
                          <button
                            href="#"
                            class="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-0"
                            onClick={(e) => handleShowProfile(e)}
                          >
                            {userLogin}
                          </button>
                          <button
                            href="#"
                            class="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabindex="-1"
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
                className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
                to="/"
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      </header>
      {showProfile ? (
        <div>
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-2 rounded max-w-6xl">
              <div class="h-full">
                <div className="border-b-2 block md:flex">
                  <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                    <div className="flex justify-between">
                      <span className="text-xl font-semibold block">
                        Admin Profile
                      </span>
                      <button
                        className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
                        onClick={(e) => handleEditProfile(e)}
                      >
                        Edit
                      </button>
                    </div>
                    <span className="text-gray-600">
                      This information is secret so be careful
                    </span>
                    <div className="w-full p-8 mx-2 flex justify-center">
                      <img
                        id="showImage"
                        className="max-w-xs w-32 items-center border"
                        src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                    <div className="rounded  shadow p-6">
                      <div className="pb-6">
                        <label
                          htmlFor="name"
                          className="font-semibold text-gray-700 block pb-1"
                        >
                          Name
                        </label>
                        <div className="flex">
                          <input
                            disabled
                            id="username"
                            className="border-1  rounded-r px-4 py-2 w-full"
                            type="text"
                            defaultValue="Jane Name"
                          />
                        </div>
                      </div>
                      <div className="pb-4">
                        <label
                          htmlFor="about"
                          className="font-semibold text-gray-700 block pb-1"
                        >
                          Email
                        </label>
                        <input
                          disabled
                          id="email"
                          className="border-1  rounded-r px-4 py-2 w-full"
                          type="email"
                          defaultValue="example@example.com"
                        />
                        <span className="text-gray-600 pt-4 block opacity-70">
                          Personal login information of your account
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header className="py-6 mb-0 border-b">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/">
                <img
                  className="w-28 h-9 cursor-pointer"
                  src={"https://links.papareact.com/qd3"}
                  alt=""
                />
              </Link>
              <SearchHouses />
              {userLogin ? (
                <>
                  <div>
                    <p>
                      WelCome <strong>{userLogin}</strong>
                    </p>
                    <button onClick={(e) => handleLogout(e)}>Logout</button>
                  </div>
                  <button
                    
                    onClick={(e) => handleSignup(e)}
                    className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
                  >
                    cancel
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </header>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default Header;
