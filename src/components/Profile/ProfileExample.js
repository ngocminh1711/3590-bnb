// import DownArrow from "./icons/DownArrow";
// import Phone from "./icons/Phone";
// import Friend from "./icons/Friends";
// import More from "./icons/More";
import Header from "../header/Header";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";

export default function Profile() {
  const navigate = useNavigate();

  let token = localStorage.getItem("token");
  let user;
  if (token) {
    user = jwtDecode(token);
    console.log(user);
  }

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Header />
      <div className="px-44 shadow">
        <div className="relative h-96 rounded-b flex justify-center">
          <img
            src={user.backdrop_Image}
            className="object-cover w-full h-full rounded-b"
            alt="cover"
          />
          <div className="absolute -bottom-6">
            <img
              src={user.image}
              className="object-cover border-4 border-white w-40 h-40 rounded-full"
              alt="cover"
            />
          </div>
        </div>
        <div className="text-center mt-6 text-3xl font-bold text-fBlack">
          {user.name}
        </div>
        <div className="grid">

        </div>
        <div className="border border-fGrey mt-6 border-opacity-10" />
      </div>
    </>
  );
}
