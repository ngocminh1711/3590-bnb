import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import HeaderDashBoard from "../../header/HeaderDashBoard";
import {getBookingId} from "../../../features/notificationSlice/notificationSlice";

function HistoryBooking() {
  const PORT = process.env.PORT || 8000;
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.profileUser);
  const [historyBooking, setHistoryBooking] = useState([]);
  const [flag, setFlag] = useState(0);
  const id = userLogin.idUserLogin;
  const dispatch = useDispatch();

  const getHistoryBooking = async () => {
    return await axios.get(
      `http://localhost:${PORT}/api/resever/history-booking/${id}`
    );
  };

  const getApiDeleteBooking = async (id) => {
    return await axios.delete(
      `http://localhost:${PORT}/api/resever/history-booking/delete/${id}`
    );
  };

  const createApiNotifications = async (id) => {
    return await axios.post(
        `http://localhost:${PORT}/api/notification/${id}`
    )
  }

  const handleCancelOrder = (item) => {
    let id = item._id
    let idTenant = item.tenantId;
    dispatch(getBookingId(idTenant))
    let currentDay = Date.now();
    let startDay = new Date(item.checkInDay).getTime();
    let oneDay = 86400000;
    if (currentDay + oneDay <= startDay) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        position: "center",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          getApiDeleteBooking(item._id)
            .then((res) => {
              setFlag(flag + 1);
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              createApiNotifications(id).then((res => console.log(res)))
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your request was denied ...",
        footer: "You only cancel your order 1 day before it's start",
      });
    }
  };

  useEffect(() => {
    getHistoryBooking().then((res) => {
      setHistoryBooking(res.data.historyBooking);
    });
  }, [flag]);
  return (
    <>

      <div>
        <HeaderDashBoard />
        <>
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 mb-64">
            <link
              href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
              rel="stylesheet"
            ></link>
            <div className="mr-32 ml-32">
            <div className=" align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg ">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-rose-500 tracking-wider">
                      STT
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center">
                      Image
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center">
                      Name
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center">
                      Check in day
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center">
                      Check out day
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center">
                      Total Money
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center">
                      Status
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center"></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {historyBooking &&
                    historyBooking.map((item, index) => (
                      <tr key={item._id}>
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
                            src={item.image}
                            style={{width:"900px", height:"90px"}}
                            className="w-30 h-20 -m-1 transform ml-5 hover:scale-150"
                            alt="null"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                          <div className="text-sm leading-5 text-blue-900 text-center ">
                            {item.houseName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                          <div className="text-sm leading-5 text-blue-900 text-center ">
                            {item.checkInDay}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                          <div className="text-sm leading-5 text-blue-900 text-center ">
                            {item.checkOutDay}
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
                          <div className="text-sm leading-5 text-blue-900 text-center ">
                            <button onClick={() => handleCancelOrder(item)}>
                              Cancel Order
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </>
        <Footer />
      </div>
    </>
  );
}

export default HistoryBooking;