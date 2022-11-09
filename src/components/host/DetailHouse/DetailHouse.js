import Header from "../../header/Header";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "tw-elements";
import "./DetailHouse.css";
import Footer from "../../footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailHouse() {
  const { id } = useParams();

  const [house, setHouse] = useState({});
  const [loading, setLoading] = useState(false);

  const getHouse = async () => {
    return await axios.get(
      `http://localhost:8000/api/products/get-house-for-rent-by-id/${id}`
    );
  };
  useEffect(() => {
    getHouse().then((res) => {
      setHouse(res.data.data);
    });
  }, []);

  return (
    <>
      {house && house.name ? (
        <div>
          <div className="mx-auto max-w-10xl py-14 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="flex">
              <div class="flex-none w-80 h-16 text-gray-800 text-gray-900 text-3xl title-font font-medium mb-1">
                {house.name}
              </div>
              <div class="flex-initial w-64 ml-32 text-black mt-2 ml-10 text-center ">
                Status
              </div>
              <div class="flex-initial ml-64 w-64 rounded-lg border border-black h-8 float-right">
                <button className=" w-full h-full  outline-5 text-center">
                  Preview listing
                </button>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="basis-1/4">
                <div className="max-h-screen max-w-screen flex flex-row bg-white">
                  <ul className="flex flex-col py-4">
                    <li>
                      <div className="bg-gray-50">
                        <a
                          href="#"
                          className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                        >
                          <span className="text-gray-900 text-md-2xl title-font">
                            Listing Detail
                          </span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                      >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                          <i className="bx bx-music" />
                        </span>
                        <span className="text-gray-900 text-sm-2xl title-font">
                          Music
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                      >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                          <i className="bx bx-drink" />
                        </span>
                        <span className="text-gray-900 text-sm-2xl title-font">
                          Drink
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                      >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                          <i className="bx bx-shopping-bag" />
                        </span>
                        <span className="text-gray-900 text-sm-2xl title-font">
                          Shopping
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                      >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                          <i className="bx bx-chat" />
                        </span>
                        <span className="text-gray-900 text-sm-2xl title-font">
                          Chat
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                      >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                          <i className="bx bx-user" />
                        </span>
                        <span className="text-gray-900 text-sm-1xl title-font">
                          Profile
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="basis-3/4">
                <div>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <div className="pb-2">
                    <p className="text-gray-900 text-2xl title-font inline">
                      Image
                    </p>
                    <button className="pr-10 underline decoration-solid inline float-right">
                      Edit
                    </button>
                  </div>
                  <div className="rounded-lg-3xl border pb-0 pt-0">
                    <div
                      id="carouselExampleCaptions"
                      className="carousel slide relative"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to={0}
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        />
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to={1}
                          aria-label="Slide 2"
                        />
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to={2}
                          aria-label="Slide 3"
                        />
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to={3}
                          aria-label="Slide 3"
                        />
                      </div>
                      <div className="carousel-inner relative w-full overflow-hidden">
                        <div className="carousel-item active relative float-left w-full h-full py-0">
                          <img
                            style={{ height: 300 }}
                            src={house.image_view[0]}
                            className="block w-full"
                            alt="..."
                          />
                          <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">{house.name}</h5>
                          </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                          <img
                            style={{ height: 300 }}
                            src={house.image_view[1]}
                            className="block w-full"
                            alt="..."
                          />
                          <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">{house.name}</h5>
                          </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                          <img
                            style={{ height: 300 }}
                            src={house.image_view[2]}
                            className="block w-full"
                            alt="..."
                          />
                          <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">{house.name}</h5>
                          </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                          <img
                            style={{ height: 300 }}
                            src={house.image_view[3]}
                            className="block w-full"
                            alt="..."
                          />
                          <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">{house.name}</h5>
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon inline-block bg-no-repeat"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon inline-block bg-no-repeat"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-gray-900 text-2xl title-font font-medium mb-1 inline ">
                    Listing Basic
                  </h1>

                  <div className="py-4 border-b-2 border-rose-400">
                    <h2 className="text-gray-900 text-1xl title-font font-medium">
                      Listing title
                    </h2>
                    <p className="text-slate-400">{house?.name}</p>
                  </div>
                </div>
                <hr color="red"></hr>
                <div className="py-4 border-b-2 border-rose-400">
                  <h2 className="text-gray-900 text-1xl title-font font-medium mb-1 inline ">
                    Listing description
                  </h2>
                  <p className="text-slate-400">{house?.description}</p>
                </div>
                
                <div className="py-4 border-b-2 border-rose-400">
                  <h2 className="text-gray-900 text-1xl title-font font-medium mb-1 inline">
                    Listing description
                  </h2>

                  <p className="text-slate-400">{house?.address}</p>
                </div>
                <hr></hr>
                <div className="py-4 border-b-2 border-rose-400">
                  <h2 className="text-gray-900 text-1xl title-font font-medium mb-1 inline">
                    Property and rooms
                  </h2>
                  <p className="text-slate-400">{house?.typeRoom.name}</p>
                  <p className="text-slate-400">
                    Bedroom: {house?.numberOfBedrooms}
                  </p>
                  <p className="text-slate-400">
                    Bathroom: {house?.numberOfBathrooms}
                  </p>
                </div>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div> loading </div>
      )}
      <Footer />
    </>
  );
}

export default DetailHouse;
