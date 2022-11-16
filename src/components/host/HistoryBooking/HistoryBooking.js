import Footer from "../../footer/Footer";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import HeaderDashBoard from "../../header/HeaderDashBoard";

function HistoryBooking() {
    const PORT = process.env.PORT || 8000;
    const domain = "https://airbnb3590.herokuapp.com"
    const navigate = useNavigate();
    const userLogin = useSelector((state) => state.profileUser);
    const [historyBooking, setHistoryBooking] = useState([]);
    const [flag, setFlag] = useState(0);
    const id = userLogin.idUserLogin;
    const dispatch = useDispatch();

    const getHistoryBooking = async () => {
        return await axios.get(
            `${domain}/api/resever/history-booking/${id}`
        );
    };

    const getApiChangeStatus = async (id, status) => {
        return await axios.patch(
            `${domain}/api/resever/change-status/${id}`, status);
    };

    const createApiNotifications = async (id, hostId) => {
        return await axios.post(`${domain}/api/notification/create?bookingId=${id}&hostId=${hostId}`);
    };

    const getHouseForRent = async (id) => {
        return await axios.get(`${domain}/api/products/get-house-for-rent-by-id/${id}`)
    }


    const handleCancelOrder = async (item) => {
        let id = item._id;
        let houseId = item.houseId;
        let currentDay = Date.now();
        let date = new Date(item.checkInDay).getDate()
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
                    let status = {
                        bookingStatus: "Cancelled",
                    };
                    getApiChangeStatus(id, status)
                        .then((res) => {
                            setFlag(flag + 1);
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Cancel booking success",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        })
                        .catch((err) => {
                            console.log(err.message);
                        });
                    getHouseForRent(houseId).then((res => {
                        console.log(res)
                    }))
                    createApiNotifications(id).then((res => console.log(res)))
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

    const DetailPage = (e) => {
        let id = e;
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        navigate("/detail-house", {state: {houseId: id}});
    };

    useEffect(() => {
        getHistoryBooking().then((res) => {
            setHistoryBooking(res.data.historyBooking.reverse());
        });
    }, [flag]);

    return (
        <>
            <div>
                <HeaderDashBoard className="py-3 mb-0 mt-20 z-50 bg-white w-full border-b-2"
                                 style={{position: "fixed", top: 0}}/>
                <>
                    <div className="-my-2 py-2 overflow-x-auto mt-20 sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
                        <link
                            href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
                            rel="stylesheet"
                        ></link>
                        <div className="mr-32 ml-32">
                            <div
                                className=" align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg ">
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
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider ml-5 text-center">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300"/>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                    {historyBooking &&
                                        historyBooking.map((item, index) => (
                                            <tr
                                                key={item._id}
                                                // onClick={()=>{handleClick(item._id)}}
                                            >
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <div className="ml-5 text-sm leading-5 text-gray-800">
                                                                {index + 1}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wraptext-center border-b border-gray-500 w-auto">
                                                    <img
                                                        className="w-30 h-20 m-1 transform ml-5 hover:scale-150 "
                                                        src={item.image}
                                                        style={{width: 150, height: 90}}
                                                        alt="null"
                                                    />
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                                                    <div
                                                        onClick={() => DetailPage(item.houseId)}
                                                        className="text-sm leading-5 text-blue-900 text-center cursor-pointer hover:text-red-500 ">
                                                        {item.houseName}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5 text-center">
                                                    {new Date(item.checkInDay).toLocaleDateString() +
                                                        " " +
                                                        "(" +
                                                        new Date(item.checkInDay).toLocaleTimeString() +
                                                        ")"}
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5 text-center">
                                                    {new Date(item.checkOutDay).toLocaleDateString() +
                                                        " " +
                                                        "(" +
                                                        new Date(item.checkOutDay).toLocaleTimeString() +
                                                        ")"}
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                                                    <div className="text-sm leading-5 text-blue-900 text-center ">
                                                        {item.totalMoney}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                                                    {/* <div className="text-sm leading-5 text-blue-900 text-center ">
                              {item.bookingStatus}
                            </div> */}
                                                    {item.bookingStatus &&
                                                    item.bookingStatus === "Processing ..." ? (
                                                        <>
                                                            <div
                                                                className="text-sm leading-5 text-yellow-600 text-center ">
                                                                {item.bookingStatus}
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {item.bookingStatus &&
                                                            item.bookingStatus === "Success"
                                                                ?
                                                                (<>
                                                                    <div
                                                                        className="text-sm leading-5 text-green-700 text-center ">
                                                                        {item.bookingStatus}
                                                                    </div>
                                                                </>)
                                                                :
                                                                (<>
                                                                    <div
                                                                        className="text-sm leading-5 text-red-600 text-center ">
                                                                        {item.bookingStatus}
                                                                    </div>
                                                                </>)}
                                                        </>
                                                    )}
                                                </td>
                                                {item.bookingStatus === "Cancelled" ||
                                                item.bookingStatus === "Failed" ? (
                                                    <>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                                                            <div
                                                                className="text-rose-600 text-sm rounded-lg border">
                                                                <p>processed</p>
                                                            </div>
                                                        </td>
                                                    </>
                                                ) : (
                                                    <>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                                                            <div
                                                                className="text-sm leading-5 text-blue-900 text-center ">
                                                                <button onClick={() => handleCancelOrder(item)}>
                                                                    Cancel Order
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </>
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
                <Footer/>
            </div>
        </>
    );
}

export default HistoryBooking;


