import "./DetailHouseForRent.css";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {useLocation} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {setIdUserLogin} from "../../features/userProfile/UserProfileSlice";

function DetailHouseForRent() {
    const PORT = process.env.PORT || 8000;
    const userLogin = useSelector((state) => state.profileUser);
    const [money, setMoney] = useState(0);
    let userId = userLogin.idUserLogin;
    const [host, setHost] = useState();
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [houseForRent, setHouseForRent] = useState({
        name: "",
        address: "",
        typeRoom: "",
        numberOfBedrooms: "",
        numberOfBathrooms: "",
        roomRates: 0,
        description: "",
        image_backdrop: "",
        image_view: [],
        // hostName: "",
    });


    const {state} = useLocation();

    const getData = async (id) => {
        return await axios.get(
            `http://localhost:8000/api/products/get-house-for-rent-by-id/${id}`
        );
    };


    useEffect(() => {
        let id = state.houseId;

        getData(id).then((res) => {
                console.log(res)
            setHouseForRent({
                ...houseForRent,
                name: res.data.data.name,
                address: res.data.data.address,
                typeRoom: res.data.data.typeRoom.name,
                numberOfBedrooms: res.data.data.numberOfBedrooms,
                numberOfBathrooms: res.data.data.numberOfBathrooms,
                roomRates: res.data.data.roomRates,
                description: res.data.data.description,
                image_backdrop: res.data.data.image_backdrop,
                image_view: res.data.data.image_view,
            });
        });
    }, []);


    const getHost = async () => {
        return await axios.get(`http://localhost:8000/api/user/${userId}`)
    }

    useEffect(() => {
        getHost()
            .then(res => setHost(res.data.data))
            .catch(err => console.log(err.message))
    }, [])

    const getApiResever = async (data) => {
        return await axios.post(`http://localhost:${PORT}/api/resever`, data);
    };

    let totalTime = endDate.getTime() - startDate.getTime();
    let totalDay = Math.round(totalTime / (60 * 60 * 1000 * 24));
    let totalMoney = totalDay * houseForRent.roomRates;

    const handleReserver = (e) => {
        e.preventDefault();
        let data = {
            houseId: state.houseId,
            tenantId: userId,
            checkInDay: startDate,
            checkOutDay: endDate,
            totalMoney: totalMoney,
            houseName: houseForRent.name,
            image: houseForRent.image_backdrop,
        };
        getApiResever(data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        setMoney(totalMoney);
    }, [totalMoney]);

    return (
        <>
            <Header/>
            {houseForRent && host ? (
                <>
                    {" "}
                    <div className="mx-auto max-w-10xl py-2  sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-2 gap-4 py-5 px-24 mx-2 ">
                            <div>
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                    HOUSE FOR RENT' NAME
                                </h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                    {houseForRent.name}
                                </h1>
                                <div className=" grid grid-cols-3 gap-4 ">
                                    <div>
                                        <svg
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 text-red-500 float-left"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <p className="float-left">4.65</p>
                                    </div>
                                    <p>30 reviews </p>
                                    <p>{houseForRent.address}</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 py-10 px-24 pt-3 pb-3 ">
                            <img
                                style={{width: 560, height: 300}}
                                className="rounded-l-3xl border"
                                src={houseForRent.image_backdrop}
                            />

                            <div className="flex flex-row">
                                <div className="basis-1/2">
                                    <img
                                        style={{width: 280, height: 150}}
                                        className="rounded border"
                                        src={houseForRent.image_view[0]}
                                    />
                                    <img
                                        className="rounded border"
                                        style={{width: 280, height: 150}}
                                        src={houseForRent.image_view[1]}
                                    />
                                </div>
                                <div className="basic-1/2">
                                    <img
                                        style={{width: 280, height: 150}}
                                        className="rounded-tr-3xl border"
                                        src={houseForRent.image_view[2]}
                                        alt="image not found"
                                    />
                                    <img
                                        className="rounded-br-3xl border "
                                        style={{width: 280, height: 150}}
                                        src={houseForRent.image_view[3]}
                                        alt="image not found"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 py-10 px-24 pb-0">
                            <div className="grid grid-rows-4 gap-4">
                                <h1 className="text-black-500 text-2xl title-font font-medium mb-1">
                                    Entire rental unti hosted by
                                    {host.name}
                                </h1>
                                <p className="text-gray-500 title-font font-medium py-3 float-left pt-0">
                                    *{houseForRent.numberOfBedrooms} bedrooms *{" "}
                                    {houseForRent.numberOfBathrooms} bathrooms{" "}
                                </p>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 float-left"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                                        />
                                    </svg>
                                    <div className="grid grid-rows-2">
                                        <h1 className="text-black-300 text-1.5xl title-font font-medium mb-1 float-left pl-2">
                                            Designed by
                                        </h1>
                                        <p className="text-gray-500 text-1.5xl">
                                            {host.name}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 float-left"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                        />
                                    </svg>
                                    <div>
                                        <h1 className="text-black-300 text-1.5xl title-font font-medium mb-1 float-left pl-2">
                                            Free cancellation for 48 hours.
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="z-20 mt-2 h-auto">
                                    <form onSubmit={(e) => handleReserver(e)}>
                                        <div className="flex bg-100 h-auto">
                                            <div className="m-auto">
                                                <div className="mt-5 rounded-lg shadow">
                                                    <h1 className="flex justify-start text-gray-900 text-2xl title-font  font-medium mb-1 px-7 py-5 pb-5 inline">
                                                        $ {houseForRent.roomRates} per night
                                                    </h1>

                                                    <div className="flex">
                                                        <div className="flex flex-row">
                                                            <div className="basis-1/2">
                                                                <DatePicker
                                                                    className="border-red-100"
                                                                    selected={startDate}
                                                                    onChange={(date) => setStartDate(date)}
                                                                />
                                                            </div>
                                                            <div className="basis-1/2">
                                                                <DatePicker
                                                                    className="border-red-100"
                                                                    selected={endDate}
                                                                    onChange={(date) => setEndDate(date)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <select className="w-full">
                                                        <option>1</option>
                                                        <option>1</option>
                                                        <option>1</option>
                                                    </select>

                                                    <div className="px-5 pt-0">
                                                        <button
                                                            type="submit"
                                                            className="bg-rose-500 hover:bg-rose-400 text-white font-bold py-2 px-4 rounded-lg border w-full"
                                                        >
                                                            <span>Reserve</span>
                                                        </button>
                                                    </div>
                                                    <div className="px-5 pt-0">
                                                        <h1 className="text-gray-900 text-1.75xl title-font font-medium mb-1 px-7 py-5 pb-5 inline">
                                                            Total before taxes{" "}
                                                        </h1>
                                                        <h1 className="text-gray-900 text-1.75xl title-font font-medium mb-1 px-7 py-5 pb-5 inline">
                                                            ${money.toLocaleString()}
                                                        </h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 py-10 px-24 pt-0 pb-0">
                            <h1 className=" text-black-300 text-1xl title-font font-normal mb-1">
                                {houseForRent.description}
                            </h1>
                        </div>
                        <div className="grid grid-cols-2  gap-4 py-10 px-24 pr-0">
                            <div className="grid grid-cols-2 grid-rows-3 gap-4 py-10 px-24 pl-0 pt-0">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 inline"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                                        />
                                    </svg>
                                    <p className="inline pl-2">City skyline view</p>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 inline"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                                        />
                                    </svg>
                                    <p className="inline pl-2">Wifi </p>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 inline"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                                        />
                                    </svg>
                                    <p className="inline pl-2">TV </p>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 inline"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                                        />
                                    </svg>
                                    <p className="inline pl-2">Security cameras on property </p>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 inline"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                                        />
                                    </svg>
                                    <p className="inline pl-2">Free parking on premises </p>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 inline"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>
                                    <p className="inline pl-2">Kitchen </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 py-10 px-24 pt-0">
                            <div>
                                <h1 className="text-gray-450 text-2xl title-font font-medium mb-1">
                                    Where you'll sleep
                                </h1>
                                <div className=" grid grid-cols-3 gap-4">
                                    <div className=" rounder-lg border px-8 py-2">
                                        <div className="py-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                                />
                                            </svg>
                                        </div>
                                        <h2>
                                            Bed room <p> {houseForRent.numberOfBedrooms} beds</p>
                                        </h2>
                                    </div>
                                    <div className=" rounder-lg border px-8 py-2">
                                        <div className="py-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                                />
                                            </svg>
                                        </div>
                                        <h2>
                                            Bath room <p> {houseForRent.numberOfBathrooms} rooms</p>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                ""
            )}
            <Footer/>
        </>
    );
}

export default DetailHouseForRent;