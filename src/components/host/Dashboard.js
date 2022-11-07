import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
import Switch from "react-switch";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
function ListHost() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const [value, setValue] = useState(false);
  // console.log(value);

  const getApiStatus = async (id) => {
    // console.log(id)
    return await axios.put(`http://localhost:8000/api/products/${id}`);
  };
  const handleChangeStatus = (id) => {
    setValue(true);
    getApiStatus(id)
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => console.log(err));
  };
  // console.log(index)

  const getApi = async () => {
    return await axios.get("http://localhost:8000/api/products");
  };
  const handleClick = (e) => {
    let id = e;
    console.log(id)
    navigate(`/detail-house`, { state: { houseId: id } });
  };
  // const handleUpdate = (id)=>{
  //     navigate(`/update-house/${id}`)
  // }

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
    getApi().then((res) => {
      setProducts(res.data.houseForRents);
    });
  }, [value]);
  return (
    <div>
      <Header />
      <>
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
          {/* <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
          <div className="flex justify-between">
            <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
              <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                <div className="flex">
                  <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                    <svg width={18} height={18} className="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <input type="text" className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin" placeholder="Search" />
              </div>
            </div>
          </div>
        </div> */}
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
                    Image/Name
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
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center">
                    Actions
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300" />
                </tr>
              </thead>
              <tbody className="bg-white">
                {products.map((item, index) => (
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
                      <div className="text-sm leading-5 text-blue-900 text-center ">
                        {item.name}
                        <img
                          className="w-20 h-20 rounded-full border-gray-200 border -m-1 transform hover:scale-150"
                          src={item.image_backdrop}
                          alt="null"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5 text-center">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        />
                        <span className="relative text-xs">{item.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5 text-center">
                      {item.roomRates.toLocaleString()}.00$
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5 text-center">
                      {item.renter}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5 text-center">
                      <button
                        onClick={() => {
                          handleClick(item._id);
                        }}
                      >
                        <a
                          href="#"
                          className="text-gray-400 hover:text-blue-200 mr-2"
                        >
                          <i className="material-icons-outlined text-base">
                            visibility
                          </i>
                        </a>
                      </button>
                      <button
                        // onClick={() => {
                        //   handleUpdate(item._id);
                        // }}
                      >
                        <a className="text-gray-400 hover:text-orange-300  mx-2">
                          <i className="material-icons-outlined text-base">
                            edit
                          </i>
                        </a>
                      </button>
                      <button
                        onClick={() => {
                          handleDelete(item._id);
                        }}
                      >
                        <a className="text-gray-400 hover:text-orange-300  mx-2">
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
    </div>
  );
}
export default ListHost;
