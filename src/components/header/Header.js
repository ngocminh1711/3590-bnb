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
        <SearchHouses />
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
