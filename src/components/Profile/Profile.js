import Header from "../header/Header";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Profile() {
  const PORT = process.env.PORT || 8000;
  const navigate = useNavigate();
  const [profile, setProfile] = useState();
  const { id } = useParams();
  const userLogin = useSelector((state) => state.profileUser);
  let token = localStorage.getItem("token");
  let user;

  const getApiUser = async () => {
    return await axios.get(
      `http://localhost:${PORT}/api/user/${userLogin.idUserLogin}`
    );
  };

  if (token) {
    user = jwtDecode(token);
  }

  const handleEditProfile = (e) => {
    navigate(`/profile/edit/${userLogin.idUserLogin}`);
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    getApiUser().then((res) => {
      setProfile(res.data.data);
    });
  }, []);

  return (
    <>
      <Header />
      {profile && profile ? (
        <div
          className="p-16 px-0 pb-0 w-auto bg-[url('/src/public/background_sea.jpg')]"
          style={{ paddingBotton: 0, paddingLeft: 150, paddingRight: 150 }}
        >
          <div
            className=" bg-white shadow p-8 mt-44"
            style={{ marginBotton: -20 }}
          >
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {" "}
              <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                {" "}
                <div>
                  {" "}
                  <p className="font-bold text-gray-700 text-xl">22</p>{" "}
                  <p className="text-gray-400">Friends</p>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <p className="font-bold text-gray-700 text-xl">10</p>{" "}
                  <p className="text-gray-400">Photos</p>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <p className="font-bold text-gray-700 text-xl">89</p>{" "}
                  <p className="text-gray-400">Comments</p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="relative ">
                {" "}
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-20 flex items-center justify-center text-indigo-500">
                  <img
                    src={profile.image}
                    className="h-full w-full "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <button
                  className="text-white py-2 px-4 uppercase rounded bg-rose-400 hover:bg-white-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                  type="button"
                  onClick={(e) => handleEditProfile(e)}
                >
                  {" "}
                  Edit
                </button>{" "}
                <button className="text-white py-2 px-4 uppercase rounded bg-rose-400 hover:bg-white-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  {" "}
                  Change Password
                </button>{" "}
              </div>
            </div>{" "}
            <div className="mt-28 text-center border-b pb-12">
              {" "}
              <h1 className="text-4xl font-medium text-gray-700">
                {profile.name}{" "}
              </h1>{" "}
              <p className="font-light text-gray-600 mt-3">{profile.address}</p>{" "}
              <p className="font-light text-gray-600 mt-3">{profile.email}</p>{" "}
              <p className="font-light text-gray-600 mt-3">{profile.phone}</p>{" "}
            </div>{" "}
          </div>
        </div>
      ) : (
        ""
      )}

      <Footer />
    </>
  );
}
