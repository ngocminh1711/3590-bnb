import Swal from "sweetalert2";
import axios from "axios";
import {useEffect, useState} from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import HeaderDashBoard from "../header/HeaderDashBoard";

function ListHost() {
    const PORT = process.env.PORT || 8000;
    const userLogin = useSelector((state) => state.profileUser.idUserLogin);
    const domain = `http://localhost:${PORT}` || "https://airbnb3590.herokuapp.com"
    const navigate = useNavigate();
    const [flag, setFlag] = useState(0)
    const [products, setProducts] = useState([]);

    const getApi = async () => {
        return await axios.get(
            `${domain}/api/products/${userLogin}`
        );
    };
    const handleClick = (e) => {
        let id = e;
        navigate(`/dashboard/detail/${id}`);
    };

    const handleDelete = async (id) => {
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
                setFlag(flag + 1)
                axios.delete(`${domain}/api/products/${id}`)
                Swal.fire("Deleted!", "Your file has been deleted.", "success")
            }
        });
    };

    const DetailPage = (item) => {
        let id = item;
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        navigate("/detail-house", {state: {houseId: id}});
    };

    useEffect(() => {
        getApi().then((res) => {
            setProducts(res.data.houseForRents.reverse());
        });
    }, [flag]);

    return (<>
            <div>
                <HeaderDashBoard/>
                <>
                    <div className="-my-2 py-2 overflow-x-auto mt-20 sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
                        <link
                            href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
                            rel="stylesheet"
                        ></link>
                        <div className=" ml-32 mr-32">
                            <div
                                className="w-full text-center align-middle inline-block min-w-800 shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
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
                                            Status
                                        </th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center">
                                            Price
                                        </th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center">
                                            Renter
                                        </th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider ml-5 text-center">
                                        </th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300"/>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                    {products &&
                                        products.map((item, index) => (
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
                                                        className="w-30 h-20 -m-1 transform ml-5 hover:scale-150 "
                                                        src={item.image_backdrop}
                                                        style={{width: 150, height: 90}}
                                                        alt="null"
                                                    />
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                                                    <div
                                                        onClick={() => DetailPage(item._id)}
                                                        className="text-sm leading-5 text-blue-900 text-center cursor-pointer hover:text-red-500 ">
                                                        {item.name}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5 text-center">
                                                    {/* <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              />
                              <span className="relative text-xs">
                                {item.status.name}
                              </span>
                            </span> */}
                                                    {item.status.name &&
                                                    item.status.name === "Ready to rent" ? (
                                                        <>
                                <span
                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                      aria-hidden
                                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                  />
                                  <span className="relative text-xs">
                                    {item.status.name}
                                  </span>
                                </span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {item.status.name === "Occupied" ? (
                                                                <>
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-black leading-tight">
                                      <span
                                          aria-hidden
                                          className="absolute inset-0 bg-red-600 opacity-50 rounded-full"
                                      />
                                      <span className="relative text-xs">
                                        {item.status.name}
                                      </span>
                                    </span>
                                                                </>
                                                            ) : (
                                                                <>
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-black leading-tight">
                                      <span
                                          aria-hidden
                                          className="absolute inset-0 bg-yellow-400 opacity-50 rounded-full"
                                      />
                                      <span className="relative text-xs">
                                        {item.status.name}
                                      </span>
                                    </span>
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5 text-center">
                                                    {item.roomRates?.toLocaleString()}.00$
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5 text-center">
                                                    {item.renter}
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b  border-gray-500 text-sm leading-5 text-center">
                                                    <div className="ml-5 w-full">
                                                        <button
                                                            onClick={() => {
                                                                handleClick(item._id);
                                                            }}
                                                        >
                                                            <a className="text-blue-400 hover:text-blue-200 mr-2">
                                                                <i className="material-icons-outlined text-base">
                                                                    visibility
                                                                </i>
                                                            </a>
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                handleDelete(item._id);
                                                            }}
                                                        >
                                                            <a className="text-red-400 hover:text-orange-300  mx-2">
                                                                <i className="material-icons-round text-base">
                                                                    delete_outline
                                                                </i>
                                                            </a>
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
                <Footer/>
            </div>
        </>
    );
}

export default ListHost;





