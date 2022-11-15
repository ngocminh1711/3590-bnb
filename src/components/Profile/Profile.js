import Header from "../header/Header";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import { Formik, Form, Field,ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const UpdateSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("compulsory!")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must be at least 8 characters with at least one uppercase, one lowercase and a number."
    ),
});
export default function Profile() {
  const PORT = process.env.PORT || 8000;
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.profileUser);
  const [profile, setProfile] = useState();
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [checkChangeProfile, setCheckChangeProfile] = useState(0);
  const [error, setError] = useState("");
  const [infoProfile, setInfoProfile] = useState({
    username: "",
    address: "",
    phone: "",
  });
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
  });

  let user;
  let token = localStorage.getItem("token");
  if (token) {
    user = jwtDecode(token);
  }

  const getApiUser = async () => {
    return await axios.get(
      `http://localhost:${PORT}/api/user/${userLogin.idUserLogin}`
    );
  };

  const handleChange = (e) => {
    setInfoProfile({ ...infoProfile, [e.target.name]: e.target.value });
  };

  const handlePasswod = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangePassword = async (data, id) => {
    console.log(data);
    const a = await axios.put(
      `http://localhost:8000/api/user/change-password/${id}`,
      data
    );
    setForm({ currentPassword: "", newPassword: "" });
    return a;
  };

  const getApiProfile = async () => {
    return await axios.get(
      `http://localhost:${PORT}/api/user/${userLogin.idUserLogin}`
    );
  };

  const handleBack = () => {
    setShowModalEdit(false);
  };
  const handleSaveChange = async () => {
    let data = {
      name: infoProfile.username,
      address: infoProfile.address,
      phone: infoProfile.phone,
    };

    return await axios
      .patch(
        `http://localhost:${PORT}/api/user/edit/${userLogin.idUserLogin}`,
        data
      )
      .then((res) => {
        setCheckChangeProfile(checkChangeProfile + 1);
        setShowModalEdit(false);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    getApiUser().then((res) => {
      setProfile(res.data.data);
    });
  }, []);

  useEffect(() => {
    getApiProfile()
      .then((res) => {
        setInfoProfile({
          ...infoProfile,
          name: res.data.data.username,
          address: res.data.data.address,
          phone: res.data.data.phone,
        });
      })
      .catch((err) => console.log(err.message));
  }, [checkChangeProfile]);
  return (
    <>
      <Header />
      <div>
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
                  <div>
                    <button
                      onClick={() => {
                        setShowModalEdit(true);
                      }}
                      type="button"
                      className="text-white py-2 px-4 uppercase rounded bg-rose-400 hover:bg-white-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Edit
                    </button>
                    {/* Modal */}
                    {showModalEdit ? (
                      <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed visible inset-0 z-50  ">
                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header*/}
                              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                  Edit Your Profile
                                </h3>
                                <button
                                  className="text-2xl hover:bg-rose-400"
                                  onClick={() => {
                                    setShowModalEdit(false);
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
                                <form onSubmit={handleSaveChange}>
                                  <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:px-6 sm:pt-0 sm:pb-6">
                                      <div className="">
                                        <div className="col-span-6 sm:col-span-3">
                                          <label className="relative block">
                                            <b>Name</b>
                                            <input
                                              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                              placeholder="Enter your name ..."
                                              type="text"
                                              name="name"
                                              value={
                                                infoProfile && infoProfile.name
                                              }
                                              onChange={(e) => handleChange(e)}
                                            />
                                          </label>
                                        </div>
                                        <br />
                                        <div className="col-span-6 sm:col-span-3">
                                          <label className="relative block">
                                            <b>Address</b>
                                            <input
                                              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                              placeholder="Enter your address ..."
                                              type="text"
                                              name="address"
                                              value={
                                                infoProfile &&
                                                infoProfile.address
                                              }
                                              onChange={(e) => handleChange(e)}
                                            />
                                          </label>
                                        </div>
                                        <br />
                                        <div className="col-span-6 sm:col-span-4">
                                          <label className="relative block">
                                            <b>Phone number</b>
                                            <input
                                              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                              placeholder="Enter your phone ..."
                                              type="number"
                                              name="phone"
                                              value={
                                                infoProfile && infoProfile.phone
                                              }
                                              onChange={(e) => handleChange(e)}
                                            />
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50  sm:px-6">
                                      <div className="space-between">
                                        <button
                                          type="submit"
                                          className="text-right inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                          Save
                                        </button>
                                        <button
                                          type="button"
                                          className="text-left inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                          onClick={(e) => handleBack(e)}
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </>
                    ) : null}
                  </div>

                  <div>
                    <button
                      onClick={() => {
                        setShowModal(true);
                      }}
                      type="button"
                      className="text-white py-2 px-4 uppercase rounded bg-rose-400 hover:bg-white-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      ChangePassword
                    </button>
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
                                  // validationSchema={UpdateSchema}
                                  onSubmit={async (e) => {
                                    // console.log(e);
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
                                          setShowModal(false);
                                          Swal.fire({
                                            title: "Change Password Sucsess",
                                            showClass: {
                                              popup:
                                                "animate__animated animate__fadeInDown",
                                            },
                                            hideClass: {
                                              popup:
                                                "animate__animated animate__fadeOutUp",
                                            },
                                          });
                                        }
                                      })
                                      .catch((e) =>
                                        setError("Old password is incorrect")
                                      );
                                  }}
                                >
                                  <Form>
                                    <section className="text-gray-600 body-font">
                                      <div>
                                        <div className=" w-full bg-gray-100 rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0">
                                          {error ? (
                                            <div
                                              style={{
                                                height: 10,
                                                fontSize: 15,
                                              }}
                                              class="rounded-lg py-2 px-2 mb-3 text-base text-red-700 inline-flex items-center  "
                                              role="alert"
                                            >
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="times-circle"
                                                class="w-4 h-4 mr-2 -ml-2 fill-current"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 500 500"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                                                ></path>
                                              </svg>
                                              {error}
                                            </div>
                                          ) : null}
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
                                              value={form.currentPassword}
                                              onChange={handlePasswod}
                                              placeholder="Current Password"
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
                                              onChange={handlePasswod}
                                              autocomplete="off"
                                              placeholder="New Password"
                                              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                            <a className="errors text-sm text-red-700">
                                              <ErrorMessage name="newPassword" />
                                            </a>
                                          </div>
                                        </div>
                                        <button
                                          type="submit"
                                          className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                          Save
                                        </button>
                                      </div>
                                    </section>
                                  </Form>
                                </Formik>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>{" "}
              <div className="mt-28 text-center border-b pb-12">
                {" "}
                <h1 className="text-4xl font-medium text-gray-700">
                  {profile.name}{" "}
                </h1>{" "}
                <p className="font-light text-gray-600 mt-3">
                  Address : {profile.address}
                </p>{" "}
                <p className="font-light text-gray-600 mt-3">
                  Email : {profile.email}
                </p>{" "}
                <p className="font-light text-gray-600 mt-3">
                  Phone : {profile.phone}
                </p>{" "}
              </div>{" "}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
}
