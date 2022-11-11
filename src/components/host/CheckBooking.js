import Swal from "sweetalert2";
import axios from "axios";
import {useEffect, useState} from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import HeaderDashBoard from "../header/HeaderDashBoard";


function CheckBooking() {
    const PORT = process.env.PORT || 8000;
    const userLogin = useSelector((state) => state.profileUser);
    const navigate = useNavigate();
    const [booking, setBooking] = useState([]);
    const [value, setValue] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    let bookingProduct;

    const getApiResever = async () => {
        return await axios.get(
            `http://localhost:${PORT}/api/resever/${userLogin.idUserLogin}`
        );
    };
    const handleClick = (e) => {
        let id = e;
        navigate(`/detail-house`, {state: {houseId: id}});
    };


    const handleShowInfo = () => {
        setShowDropDown(!showDropDown);
    };
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/api/products/${id}`);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };
    useEffect(() => {
        getApiResever().then((res) => {
            console.log(res);
            setBooking(res.data.listBooking);
        });
    }, [value]);
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
                        <div
                            className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
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
                                        Actions
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300"/>
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
                                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5 text-center">
                                                
                                            <button
                        onClick={() => {
                          handleClick(item._id);
                        }}
                      >
                        <a
                          className="text-blue-400 hover:text-blue-200 mr-2">
                          <i className="material-icons-outlined text-base">
                            visibility
                          </i>
                        </a>
                      </button> 
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
                <Footer/>
            </div>
        </>
    );
}

export default CheckBooking;