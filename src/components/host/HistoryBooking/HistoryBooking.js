import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import HeaderDashBoard from "../../header/HeaderDashBoard";

function HistoryBooking() {
  const PORT = process.env.PORT || 8000;
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.profileUser);
  const [historyBooking, setHistoryBooking] = useState([]);

  const id = userLogin.idUserLogin;

  const getHistoryBooking = async () => {
    return await axios.get(
      `http://localhost:8000/api/resever/history-booking/${id}`
    );
  };

  useEffect(() => {
    getHistoryBooking().then((res) => {
      console.log(res.data.historyBooking);
      setHistoryBooking(res.data.historyBooking);
    });
  }, []);

  return (
    <>
      <div>
        <HeaderDashBoard/>
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
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center">
                      Actions
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300" />
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
                            className="w-30 h-20 border-gray-200 border -m-1 transform hover:scale-150"
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
                            {item.totalMoney}
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5 text-center">
                        
                      <button 
                      >
                        <a className="text-red-400 hover:text-orange-300  mx-2">
                          <i className="material-icons-round text-base">
                            delete_outline
                          </i>
                        </a>
                      </button>
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

export default HistoryBooking;
