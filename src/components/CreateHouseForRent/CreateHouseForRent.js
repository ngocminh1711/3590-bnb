import "./CreateHouseForRent.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CreateImageView from "../CreateImageView/CreateImageView";
import CreateBackdrop from "../CreateBackdrop/CreateBackdrop";
import { useSelector } from "react-redux";
import { Alert } from "@material-tailwind/react";
import Header from "../header/Header";
import { useNavigate } from "react-router";
import Footer from "../footer/Footer";


function CreateHouseForRent() {
  const userLogin = useSelector(state => state.profileUser)
  const [typeRooms, setTypeRooms] = useState([]);
  const [houseStatus, setHouseStatus] = useState([]);
  const numberOfBedrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numberOfBathrooms = [1, 2, 3];
  const [newHouseForRent, setNewHouseForRent] = useState({
    name: "",
    address: "",
    typeRoom: "",
    numberOfBathrooms: "",
    numberOfBedrooms: "",
    roomRates: "",
    description: "",
    status:"",
    userId: userLogin.idUserLogin
  });

  const [statusCreate, setStatusCreate] = useState(false);

  const backdropURL = useSelector((state) => state.createBackdrop.backdropURl);
  const viewURL = useSelector((state) => state.createImageView.urls);
  const navigate = useNavigate();

  const getTypeRooms = async () => {
    return await axios.get("http://localhost:8000/api/products/type-room");
  };

  const getHouseStatus = async () => {
    return await axios.get("http://localhost:8000/api/products/house-status");
  };

  const handleChange = (e) => {
    setNewHouseForRent({ ...newHouseForRent, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: newHouseForRent.name,
      address: newHouseForRent.address,
      typeRoom: newHouseForRent.typeRoom,
      numberOfBathrooms: newHouseForRent.numberOfBathrooms,
      numberOfBedrooms: newHouseForRent.numberOfBedrooms,
      roomRates: newHouseForRent.roomRates,
      image_backdrop: backdropURL,
      image_view: viewURL,
      description: newHouseForRent.description,
      status: newHouseForRent.status,
      userId: userLogin.idUserLogin
    };
    console.log(data)
    // if (!isValid)  return
    await axios
      .post("http://localhost:8000/api/products", data)
      .then((res) => {
        setStatusCreate(true);
        navigate("/home");
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    getTypeRooms()
      .then((res) => setTypeRooms(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getHouseStatus()
      .then((res) => setHouseStatus(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header/>
      <div className="mx-auto max-w-10xl py-2  sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-2 gap-4 py-5 px-24 mx-2 pl-2 pr-2 ">
          <img
            className="h-full"
            src="https://vr360.com.vn/uploads/images/anh%20chup%20khach%20san.jpg"
          />
          <div className=" z-20 flex items-center h-auto justify-center mb-12 overflow-hidden">
            <div className="z-20 mt-2 h-auto mt-0">
              <form onSubmit={handleSubmit}>
                <div className="flex bg-100 h-auto">
                  <div className="m-auto">
                    <div>
                      <button
                        type="button"
                        className="relative w-full flex justify-center items-center px-2 py-2.5 font-medium tracking-wide text-white capitalize  bg-rose-500 rounded-md hover:bg-rose-400  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="30px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#FFFFFF"
                        ></svg>
                        <span className="text-center">
                          Create new House For Rent
                        </span>
                      </button>
                      {statusCreate ? (
                        <div className="flex w-full flex-col gap-2 z-30">
                          <Alert color="green">
                            A success alert for showing message.
                          </Alert>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="mt-5 bg-white rounded-lg shadow">
                        <div className="px-5 pb-5">
                          <input
                            onChange={handleChange}
                            name="name"
                            placeholder="Name House For Rent"
                            className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />

                          <input
                            onChange={handleChange}
                            name="address"
                            placeholder="Address"
                            className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                          <div className="flex">
                            <div className="flex-grow w-1/4 pr-2">
                              <select
                                name="typeRoom"
                                onChange={(e) => {
                                  setNewHouseForRent({
                                    ...newHouseForRent,
                                    [e.target.name]: e.target.value,
                                  });
                                }}
                                defaultValue={'Choose somethings ...'}
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                              >
                                <option value='' selected disabled hidden >Choose type ...</option>
                                {typeRooms.map((typeRoom) => (
                                  <option
                                    key={typeRoom._id}
                                    value={typeRoom._id}
                                  >
                                    {typeRoom.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="flex-grow">
                              <input
                                type="number"
                                onChange={handleChange}
                                name="roomRates"
                                placeholder="Room Rates"
                                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                              />
                            </div>
                          </div>
                          <div className="flex-grow w-full pr-2">
                              <select
                                name="status"
                                onChange={(e) => {
                                  setNewHouseForRent({
                                    ...newHouseForRent,
                                    [e.target.name]: e.target.value,
                                  });
                                }}
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                              >
                                <option value='' selected disabled hidden >Choose status ...</option>
                                {houseStatus.map((houseStatus) => (
                                  <option
                                    key={houseStatus._id}
                                    value={houseStatus._id}
                                  >
                                    {houseStatus.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          <div className="flex">
                            <div className="flex-grow w-1/4 pr-2">
                              <select
                                name="numberOfBedrooms"
                                onChange={(e) => {
                                  setNewHouseForRent({
                                    ...newHouseForRent,
                                    [e.target.name]: e.target.value,
                                  });
                                }}
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                              >
                                <option value="">Number Of Bedrooms</option>
                                {numberOfBedrooms.map((item, index) => (
                                  <option key={index} value={item}>
                                    {item}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="flex-grow w-1/4 pr-2">
                              <select
                                name="numberOfBathrooms"
                                onChange={(e) => {
                                  setNewHouseForRent({
                                    ...newHouseForRent,
                                    [e.target.name]: e.target.value,
                                  });
                                }}
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                              >
                                <option value="">Number Of Bathrooms</option>
                                {numberOfBathrooms.map((item, index) => (
                                  <option key={index} value={item}>
                                    {item}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="flex">
                            <CreateBackdrop />
                            <CreateImageView />
                          </div>
                          <textarea
                            onChange={handleChange}
                            name="description"
                            placeholder="Description"
                            className="form-textarea block  text-black placeholder-gray-600 w-full max-h-20  px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            id="my-textarea"
                            rows="8"
                          ></textarea>

                          <div className="flex flex-row-reverse p-3">
                            <div className="flex-initial pl-3">
                              <button
                                type="submit"
                                className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-rose-500 rounded-md hover:bg-rose-400  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  width="24px"
                                  fill="#18181b"
                                >
                                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                                  <path
                                    d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                                    opacity=".3"
                                  ></path>
                                  <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                                </svg>
                                <span className="pl-2 mx-1">Save</span>
                              </button>
                            </div>
                            <div className="flex-initial">
                              <button
                                type="reset"
                                className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  width="24px"
                                >
                                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                                  <path d="M8 9h8v10H8z" opacity=".3"></path>
                                  <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                                </svg>
                                <span className="pl-2 mx-1">Reset</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateHouseForRent;
