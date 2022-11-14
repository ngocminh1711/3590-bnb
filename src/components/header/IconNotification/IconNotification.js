import {useSelector} from "react-redux";
import axios from "axios";
import {useEffect, useState} from "react";
import React from "react";


export default function IconNotification() {
    const PORT = process.env.PORT || 8000;
    const [notification, setNotification] = useState([]);
    const [flag, setFlag] = useState(0);
    const [showModal, setShowModal] = React.useState(false);

    const userLoginProfile = useSelector((state) => state.profileUser.idUserLogin);

    const getNotification = async () => {
        return await axios.get(`http://localhost:${PORT}/api/notification/${userLoginProfile}`)
    }

    const handleDelete = async (item) => {
        setFlag(flag + 1)
        return await axios.delete(`http://localhost:${PORT}/api/notification/${item._id}`)
    }

    useEffect(() => {
        getNotification().then((res => setNotification(res.data.notification)));
    }, [flag])

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          hidden-arrow
          flex items-right
          ml-58
        "
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bell"
                    className="float-left w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path

                        fill="currentColor"
                        d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                    >
                    </path>

                </svg>
                <span
                    className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                {notification.length}
              </span>
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div
                                    className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Notifications
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span
                        className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                {notification && notification.map(item => (
                                    <div className="relative p-6 flex-auto">
                                        <div>
                                            <p className="bg-slate-200 my-4 text-slate-500 text-medium leading-relaxed">
                                                {item.booking.bookingStatus === "Success" ?
                                                    "Successfully rented " + item.house.name
                                                    + " check in date "
                                                    + item.booking.checkInDay
                                                    + " and check out date "
                                                    + item.booking.checkOutDay
                                                    + " with the price of $"
                                                    + item.booking.totalMoney
                                                    :
                                                    "Rent House " + item.house.name + " failed"}
                                            </p>
                                            <button
                                                onClick={() => handleDelete(item)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth="1.5" stroke="currentColor"
                                                     className="absolute top-5 right-0 h-6 w-6 hover:bg-rose-500 border rounded-lg"

                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                            </button>
                                        </div>

                                    </div>
                                ))}

                                {/*footer*/}
                                <div
                                    className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="bg-rose-500 text-white active:bg-rose-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>


    )
}