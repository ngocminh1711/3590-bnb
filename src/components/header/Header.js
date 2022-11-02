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

function Header() {
  const [searchInput, setSearchInput] = useState("");
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
  }

  const handleSignup = (e) => {
   
  }

  const search = (e) => {};

  return (
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
            <div>
              <p>
                WelCome <strong>{userLogin}</strong>
              </p>
              <button onClick={(e) => handleLogout(e)}>Logout</button>
            </div>
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
  );
}

export default Header;
