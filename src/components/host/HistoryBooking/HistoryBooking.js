import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import {useState} from "@types/react";


function HistoryBooking () {

    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <>
            <div>
                <Header />
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
                                        Actions
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300" />
                                </tr>
                                </thead>
                                <tbody className="bg-white">
                                        <tr
                                        >
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                <div className="flex items-center">
                                                    <div>
                                                        <div className="text-sm leading-5 text-gray-800">

                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                                                <img
                                                    className="w-30 h-20 border-gray-200 border -m-1 transform hover:scale-150"
                                                    alt="null"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                                                <div className="text-sm leading-5 text-blue-900 text-center ">

                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                                                <div className="text-sm leading-5 text-blue-900 text-center ">

                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                                                <div className="text-sm leading-5 text-blue-900 text-center ">

                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                                                <div className="text-sm leading-5 text-blue-900 text-center ">

                                                </div>
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
                                                        {!showDropDown ? (
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
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
                <Footer />
            </div>
        </>
    )
}

export default HistoryBooking;