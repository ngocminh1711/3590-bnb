import { Link, useNavigate } from "react-router-dom";
import { GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon, SearchIcon } from '@heroicons/react/solid'
import { useState } from "react";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };


  const search = (e) => {

  }

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
            onClick = {(e)=> search(e)}
          />
        </div>
        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to="/login">
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to="/register"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
