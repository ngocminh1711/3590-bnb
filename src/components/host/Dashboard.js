import Swal from "sweetalert2";
import axios from "axios";
import {useEffect, useState} from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import HeaderDashBoard from "../header/HeaderDashBoard";

function ListHost() {
  const userLogin = useSelector((state) => state.profileUser);

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const [value, setValue] = useState(false);

  const getApiStatus = async (id) => {

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


  const getApi = async () => {
    return await axios.get(`http://localhost:8000/api/products/${userLogin.idUserLogin}`);
  };
  const handleClick = (e) => {
    let id = e;
    navigate(`/dashboard/detail/${id}`);
  };
  // const handleUpdate = (id)=>{
  //     navigate(`/update-house/${id}`)
  // }
  const [showDropDown, setShowDropDown] = useState(false);

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
    getApi().then((res) => {
      // console.log(res);
      setProducts(res.data.houseForRents);
    });
  }, [value]);

  return (<>
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
                <th className="px-6 py-3 border-b-2 border-gray-300"/>
              </tr>
              </thead>
              <tbody className="bg-white">
              {products && products.map((item, index) => (<tr
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
                      src={item.image_backdrop}
                      alt="null"
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                  <div className="text-sm leading-5 text-blue-900 text-center ">
                    {item.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5 text-center">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                                aria-hidden
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            />
                            <span className="relative text-xs">
                              {item.status.name}
                            </span>
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
                          className="text-blue-400 hover:text-blue-200 mr-2">
                          <i className="material-icons-outlined text-base">
                            visibility
                          </i>
                        </a>
                      </button>
                      <button
                      >
                        <a className="text-orange-400 hover:text-orange-300  mx-2">
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
                        <a className="text-red-400 hover:text-orange-300  mx-2">
                          <i className="material-icons-round text-base">
                            delete_outline
                          </i>
                        </a>
                      </button>
                </td>
              </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </>
      <Footer/>
    </div>
  </>);
}

export default ListHost;