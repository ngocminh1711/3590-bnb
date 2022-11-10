import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeaderDashBoard from  "../header/HeaderDashBoard"
import jwtDecode from "jwt-decode";
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
  // console.log(index)

  const getApi = async () => {
    return await axios.get(
      `http://localhost:8000/api/products/${userLogin.idUserLogin}`
    );
  };
  const handleClick = (e) => {
    let id = e;
    navigate(`/detail-house`, { state: { houseId: id } });
  };
  // const handleUpdate = (id)=>{
  //     navigate(`/update-house/${id}`)
  // }
  const [showDropDown, setShowDropDown] = useState(false);
  const handleShowInfo = () => {
    setShowDropDown(!showDropDown);
  };
  let token = localStorage.getItem("token");
  let user;
  if (token) {
    user = jwtDecode(token);
    console.log(user);
  }

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
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
  }, [handleDelete]);

  console.log(products);
  return (
    <>
    <HeaderDashBoard/>
    <nav className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  ">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
              </path>
            </svg>
          </button>
          <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
            <a className="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      " href="#">
              <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" style={{height: '15px'}} alt="" loading="lazy" />
            </a>
            {/* Left links */}
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Dashboard</a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Team</a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Projects</a>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="flex items-center relative">
            {/* Icon */}
            <a className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4" href="#">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
                </path>
              </svg>
            </a>
            
            
          </div>
          {/* Right elements */}
        </div>
      </nav>
      <div>
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
                  {products &&
                    products.map((item, index) => (
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
                        <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-500 text-center">
                          <img
                            className="w-25 h-20 border-gray-200 border -m-1 transform hover:scale-150"
                            src={item.image_backdrop}
                            style={{ width: "200px", height: "120px" }}
                            alt="null"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                          <div className="text-sm leading-5 text-blue-900 text-center ">
                            {item.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b text-red-900 border-gray-500 text-sm leading-5 text-center">
                          <span className="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-rose-600 opacity-50 rounded-full"
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
                          <div className="text-left">
                            <div
                              className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="menu-button"
                              tabIndex="-1"
                            >
                              {showDropDown[item._id] ? (
                                <>
                                  <div className="py-1" role="none">
                                    <button
                                      href="#"
                                      className="inline-flex w-40 justify-start rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                                      role="menuitem"
                                      tabIndex="-1"
                                      id="menu-item-0"
                                      onClick={() => {
                                        handleClick(item._id);
                                      }}
                                    >
                                      <a className="text-blue-400 hover:text-blue-300  mx-2">
                                        <i className="material-icons-round text-base">
                                          visibility
                                        </i>
                                      </a>
                                    </button>
                                    <button
                                      href="#"
                                      className="inline-flex w-40 justify-start rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                                      role="menuitem"
                                      tabIndex="-1"
                                      id="menu-item-0"
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
                                </>
                              ) : (
                                ""
                              )}
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
                          <div className="text-left">
                            <div>
                              <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50 hover:shadow-md "
                                id="menu-button"
                                aria-expanded="true"
                                aria-haspopup="true"
                                onClick={() => handleShowInfo()}
                              >
                                <a className="text-black-400 hover:text-black-200 mr-2">
                                  <i className="material-icons-outlined text-base">
                                    more_horiz
                                  </i>
                                </a>
                              </button>
                            </div>

                            <div
                              className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="menu-button"
                              tabIndex="-1"
                            >
                              git{!showDropDown ? (
                                ""
                              ) : (
                                <>
                                  <div className="py-1" role="none">
                                    <button
                                      href="#"
                                      className="inline-flex w-40 justify-start rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                                      role="menuitem"
                                      tabIndex="-1"
                                      id="menu-item-0"
                                      onClick={() => {
                                        handleClick(item._id);
                                      }}
                                    >
                                      Detail
                                    </button>
                                    <br></br>
                                    <button
                                      href="#"
                                      className="inline-flex w-40 justify-start rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                                      role="menuitem"
                                      tabIndex="-1"
                                      id="menu-item-0"
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
                                </>
                              )}
                            </div>
                          </div>

                          {/* <a
                          className="text-black-400 hover:text-black-200 mr-2">
                    <i className="material-icons-outlined text-base">
                        more_horiz
                          </i>

                                </a>
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
                        // onClick={() => {
                        //   handleUpdate(item._id);
                        // }}
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
                      </button> */}
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
export default ListHost;
