import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
import Switch from "react-switch";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBookingId } from "../../features/notificationSlice/notificationSlice";

function CheckBooking() {
  const PORT = process.env.PORT || 8000;
  const userLogin = useSelector((state) => state.profileUser);
  const navigate = useNavigate();
  const [booking, setBooking] = useState([]);
  const [button, setButton] = useState(true);
  const [flag, setFlag] = useState(0);
  const dispatch = useDispatch();
  let bookingProduct;

  const getApiResever = async () => {
    return await axios.get(
      `http://localhost:${PORT}/api/resever/${userLogin.idUserLogin}`
    );
  };

  const getApiChangeStatus = async (id, status) => {
    return await axios.patch(
      `http://localhost:${PORT}/api/resever/change-status/${id}`,
      status
    );
  };

  const getApiChangeProductStatus = async (houseId, data) => {
    return await axios.patch(
      `http://localhost:${PORT}/api/products/chang-status-product/${houseId}`,
      data
    );
  };

  const createApiNotification = async (bookingId) => {
    return await axios.post(
      `http://localhost:${PORT}/api/notification/${bookingId}`
    );
  };

  const DetailPage = (e) => {
    let id = e;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/detail-house", { state: { houseId: id } });
  };

  const handleClickYes = (item) => {
    console.log(item);
    let id = item._id;
    let idTenant = item.tenantId;
    let status = {
      bookingStatus: "Success",
    };
    let data = {
      status: {
        _id: "6369dfc072b4563b2fc6ab3b",
        name: "Occupied",
      },
    };
    dispatch(getBookingId(idTenant));
    
    getApiChangeProductStatus(item.houseId, data);
    getApiChangeStatus(id, status)
      .then((res) => {
        setFlag(flag + 1);
        console.log("Change success");
      })
      .catch((err) => {
        console.log(err.message);
      });
      createApiNotification(id).then((res) => console.log("success"));
  };

  const handleClickNo = (item) => {
    let id = item._id;

    let status = {
      bookingStatus: "Failed",
    };

    getApiChangeStatus(id, status)
      .then((res) => {
        setFlag(flag + 1);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getApiResever().then((res) => {
      console.log(res);
      setBooking(res.data.listBooking.reverse());
    });
  }, [flag]);

  return (
    <>
      <div>
        <Header />
        <>
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
            <link
              href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
              rel="stylesheet"
            ></link>
            <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-base border-b-2 border-gray-300 text-left leading-4 text-rose-500 tracking-wider">
                      STT
                    </th>
                    <th className="px-6 py-3 text-base border-b-2 border-gray-300 text-left leading-4 text-rose-500 tracking-wider text-center">
                      Image
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-base leading-4 text-rose-500 tracking-wider text-center">
                      Name
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-base leading-4 text-rose-500 tracking-wider text-center">
                      Check in day
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-base leading-4 text-rose-500 tracking-wider text-center">
                      Check out day
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-base leading-4 text-rose-500 tracking-wider text-center">
                      Total Money
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-base leading-4 text-rose-500 tracking-wider text-center">
                      Status
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-base leading-4 text-rose-500 tracking-wider text-center">
                      Actions
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300" />
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {booking &&
                    booking.map((item, index) => (
                      <tr
                        key={item._id}
                        // onClick={()=>{handleClick(item._id)}}
                      >
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm leading-5 text-gray-800">
                                {index + 1}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                          <img
                            className="w-30 h-20 border-gray-200 border -m-1 transform hover:scale-150"
                            src={item.image}
                            alt="null"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                          <div
                            className="text-sm leading-5 cursor-pointer hover:text-red-500 text-blue-900 text-center"
                            onClick={() => DetailPage(item.houseId)}
                          >
                            {item.houseName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                          <div className="text-sm leading-5 text-blue-900 text-center ">
                            {new Date(item.checkInDay).toLocaleDateString() +
                              " " +
                              "(" +
                              new Date(item.checkInDay).toLocaleTimeString() +
                              ")"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                          <div className="text-sm leading-5 text-blue-900 text-center ">
                            {new Date(item.checkOutDay).toLocaleDateString() +
                              " " +
                              "(" +
                              new Date(item.checkOutDay).toLocaleTimeString() +
                              ")"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                          <div className="text-sm leading-5 text-blue-900 text-center ">
                            {item.totalMoney}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                          <div className="text-sm leading-5 text-blue-900 text-center ">
                            {item.bookingStatus}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                          {item.bookingStatus === "Processing ..." ? (
                            <div className=" text-sm leading-5 text-blue-900 text-center">
                              <svg
                                onClick={() => handleClickYes(item)}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 cursor-pointer"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>

                              <svg
                                disable={button}
                                onClick={() => handleClickNo(item)}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 cursor-pointer"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                          ) : (
                            <div className="text-rose-600 text-sm rounded-lg border">
                              processed
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
        <Footer />
      </div>
    </>
  );
}

export default CheckBooking;