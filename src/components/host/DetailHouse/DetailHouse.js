import Header from "../../header/Header";
import React from "react";
import {useEffect, useRef, useState} from "react";
import "tw-elements"
import './DetailHouse.css'
import Footer from "../../footer/Footer";
import {useParams} from "react-router-dom";
import axios from "axios";



function DetailHouse() {

    const {id} = useParams()
    const PORT = process.env.PORT || 8000;

    const [house, setHouse] = useState({})
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = React.useState(false);
    const [houseStatus, setHouseStatus] = useState([]);
    const [typeRooms, setTypeRooms] = useState([]);
    const numberOfBedrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numberOfBathrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [formEdit, setFormEdit] = useState({
        name: "",
        address: "",
        typeRoom: "",
        numberOfBathrooms: "",
        numberOfBedrooms: "",
        roomRates: "",
        description: "",
        status:""
    });


    const getHouse = async () => {
        return await axios.get(`http://localhost:8000/api/products/get-house-for-rent-by-id/${id}`)
    }

    const getTypeRooms = async () => {
        return await axios.get("http://localhost:8000/api/products/type-room");
    };

    const getHouseStatus = async () => {
        return await axios.get("http://localhost:8000/api/products/house-status");
    };

    const handleChange = (e) => {
        setFormEdit({ ...formEdit, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            name: formEdit.name,
            address: formEdit.address,
            typeRoom: formEdit.typeRoom,
            numberOfBathrooms: formEdit.numberOfBathrooms,
            numberOfBedrooms: formEdit.numberOfBedrooms,
            roomRates: formEdit.roomRates,
            description: formEdit.description,
            status: formEdit.status
        };
        setShowModal(false)
        return await axios.patch(`http://localhost:${PORT}/api/products/edit/${id}`,data)
            .then(res => console.log(res))
            .catch(err => console.log(err.message))
    };

    useEffect(() => {
        getHouse().then(res => {
            setHouse(res.data.data)
        },[])

    }, [])

    useEffect(() => {
        getTypeRooms()
            .then((res) => setTypeRooms(res.data.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        getHouseStatus()
            .then((res) => setHouseStatus(res.data.data))
            .catch((err) => console.log(err));
    }, []);
    console.log(formEdit)

    return (
        <>
            <Header/>

            {house && house.name ?
                <div className="bg-white">
                    <div className="mx-auto max-w-10xl py-14 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="flex flex-row">
                            <div className="basis-1/4">
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{house.name}</h1>
                                <span></span>
                            </div>
                            <div className="basis-3/4">
                                <div className="grid grid-cols-3">
                                    <span></span>
                                    <span className="w-full h-full text-black mt-2 ml-10 text-center ">Status</span>
                                    <div className="rounded-lg border">
                                        <button className=" w-full h-full outline-8">Preview listing</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="basis-1/4">
                                <div className="max-h-screen max-w-screen flex flex-row bg-white">
                                    <ul className="flex flex-col py-4">
                                        <li>
                                            <div className="bg-gray-50">
                                                <a href="#"
                                                   className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                                    <span className="text-gray-900 text-md-2xl title-font">Listing Detail</span>
                                                </a>
                                            </div>

                                        </li>
                                        <li>
                                            <a href="#"
                                               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                                <span
                                                    className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                                    className="bx bx-music"/></span>
                                                <span className="text-gray-900 text-sm-2xl title-font">Music</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                                <span
                                                    className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                                    className="bx bx-drink"/></span>
                                                <span className="text-gray-900 text-sm-2xl title-font">Drink</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                                <span
                                                    className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                                    className="bx bx-shopping-bag"/></span>
                                                <span className="text-gray-900 text-sm-2xl title-font">Shopping</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                                <span
                                                    className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                                    className="bx bx-chat"/></span>
                                                <span className="text-gray-900 text-sm-2xl title-font">Chat</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                                <span
                                                    className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                                    className="bx bx-user"/></span>
                                                <span className="text-gray-900 text-sm-1xl title-font">Profile</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="basis-3/4">
                                <div>
                                    <div className="pb-2">
                                        <p className="text-gray-900 text-2xl title-font inline">Image</p>
                                        <button
                                            onClick={() => setShowModal(true)}
                                            className="pr-10 underline decoration-solid inline float-right">Edit >
                                        </button>
                                        {showModal ? (
                                            <>
                                                <div
                                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                >
                                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                        {/*content*/}
                                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                            {/*header*/}
                                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                                <h3 className="text-3xl font-semibold">
                                                                    Edit Your House
                                                                </h3>
                                                                <button
                                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                                    onClick={() => setShowModal(false)}
                                                                >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                                                </button>
                                                            </div>
                                                            {/*body*/}
                                                            <div className="relative p-6 flex-auto">
                                                                <form
                                                                    onSubmit={handleSubmit}>
                                                                    <div className="flex bg-100 h-auto">
                                                                        <div className="mt-5 bg-white rounded-lg shadow">
                                                                            <div className="px-5 pb-5">
                                                                                <input
                                                                                    onChange={handleChange}
                                                                                    name="name"
                                                                                    placeholder="Name House For Rent"
                                                                                    className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                                                                />

                                                                                <input
                                                                                    onChange={handleChange}
                                                                                    name="address"
                                                                                    placeholder="Address"
                                                                                    className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                                                                />
                                                                                <div className="flex">
                                                                                    <div className="flex-grow w-1/4 pr-2">
                                                                                        <select
                                                                                            name="typeRoom"
                                                                                            onChange={(e) => {
                                                                                                setFormEdit({
                                                                                                    ...formEdit,
                                                                                                    [e.target.name]: e.target.value,
                                                                                                });
                                                                                            }}
                                                                                            defaultValue={'Choose somethings ...'}
                                                                                            className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                                                                        >
                                                                                            <option value='' selected disabled hidden >Choose type ...</option>
                                                                                            {typeRooms.map((typeRoom) => (
                                                                                                <option
                                                                                                    key={typeRoom._id}
                                                                                                    value={typeRoom._id}
                                                                                                >
                                                                                                    {typeRoom.name}
                                                                                                </option>
                                                                                            ))}
                                                                                        </select>
                                                                                    </div>
                                                                                    <div className="flex-grow">
                                                                                        <input
                                                                                            onChange={handleChange}
                                                                                            type="number"
                                                                                            name="roomRates"
                                                                                            placeholder="Room Rates"
                                                                                            className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="flex-grow w-full pr-2">
                                                                                    <select
                                                                                        name="status"
                                                                                        onChange={(e) => {
                                                                                            setFormEdit({
                                                                                                ...formEdit,
                                                                                                [e.target.name]: e.target.value,
                                                                                            });
                                                                                        }}
                                                                                        className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                                                                    >
                                                                                        <option value='' selected disabled hidden >Choose status ...</option>
                                                                                        {houseStatus.map((houseStatus) => (
                                                                                            <option
                                                                                                key={houseStatus._id}
                                                                                                value={houseStatus._id}
                                                                                            >
                                                                                                {houseStatus.name}
                                                                                            </option>
                                                                                        ))}
                                                                                    </select>
                                                                                </div>
                                                                                <div className="flex">
                                                                                    <div className="flex-grow w-1/4 pr-2">
                                                                                        <select
                                                                                            name="numberOfBedrooms"
                                                                                            onChange={(e) => {
                                                                                                setFormEdit({
                                                                                                    ...formEdit,
                                                                                                    [e.target.name]: e.target.value,
                                                                                                });
                                                                                            }}
                                                                                            className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                                                                        >
                                                                                            <option value="">Number Of Bedrooms</option>
                                                                                            {numberOfBedrooms.map((item, index) => (
                                                                                                <option key={index} value={item}>
                                                                                                    {item}
                                                                                                </option>
                                                                                            ))}
                                                                                        </select>
                                                                                    </div>
                                                                                    <div className="flex-grow w-1/4 pr-2">
                                                                                        <select
                                                                                            name="numberOfBathrooms"
                                                                                            onChange={(e) => {
                                                                                                setFormEdit({
                                                                                                    ...formEdit,
                                                                                                    [e.target.name]: e.target.value,
                                                                                                });
                                                                                            }}
                                                                                            className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                                                                        >
                                                                                            <option value="">Number Of Bathrooms</option>
                                                                                            {numberOfBathrooms.map((item, index) => (
                                                                                                <option key={index} value={item}>
                                                                                                    {item}
                                                                                                </option >
                                                                                            ))}
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                                <textarea
                                                                                    onChange={handleChange}
                                                                                    name="description"
                                                                                    placeholder="Description"
                                                                                    className="form-textarea block  text-black placeholder-gray-600 w-full max-h-20  px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                                                                    id="my-textarea"
                                                                                    rows="8"
                                                                                ></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                                        <button
                                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                            type="button"
                                                                            onClick={() => setShowModal(false)}
                                                                        >
                                                                            Close
                                                                        </button>
                                                                        <button
                                                                            type="submit"
                                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                        >
                                                                            Save Changes
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                            </>
                                        ) : null}
                                    </div>
                                    <div className="rounded-lg-3xl border pb-0 pt-0"
                                    >

                                        <div id="carouselExampleCaptions" className="carousel slide relative"
                                             data-bs-ride="carousel">
                                            <div
                                                className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                                                <button type="button" data-bs-target="#carouselExampleCaptions"
                                                        data-bs-slide-to={0} className="active" aria-current="true"
                                                        aria-label="Slide 1"/>
                                                <button type="button" data-bs-target="#carouselExampleCaptions"
                                                        data-bs-slide-to={1} aria-label="Slide 2"/>
                                                <button type="button" data-bs-target="#carouselExampleCaptions"
                                                        data-bs-slide-to={2} aria-label="Slide 3"/>
                                                <button type="button" data-bs-target="#carouselExampleCaptions"
                                                        data-bs-slide-to={3} aria-label="Slide 3"/>
                                            </div>
                                            <div className="carousel-inner relative w-full overflow-hidden">
                                                <div
                                                    className="carousel-item active relative float-left w-full h-full py-0">
                                                    <img
                                                        style={{height: 300}}
                                                        src={house.image_view[0]} className="block w-full" alt="..."/>
                                                    <div
                                                        className="carousel-caption hidden md:block absolute text-center">
                                                        <h5 className="text-xl">{house.name}</h5>

                                                    </div>
                                                </div>
                                                <div className="carousel-item relative float-left w-full">
                                                    <img
                                                        style={{height: 300}}
                                                        src={house.image_view[1]} className="block w-full" alt="..."/>
                                                    <div
                                                        className="carousel-caption hidden md:block absolute text-center">
                                                        <h5 className="text-xl">{house.name}</h5>

                                                    </div>
                                                </div>
                                                <div className="carousel-item relative float-left w-full">
                                                    <img
                                                        style={{height: 300}}
                                                        src={house.image_view[2]} className="block w-full" alt="..."/>
                                                    <div
                                                        className="carousel-caption hidden md:block absolute text-center">
                                                        <h5 className="text-xl">{house.name}</h5>

                                                    </div>
                                                </div>
                                                <div className="carousel-item relative float-left w-full">
                                                    <img
                                                        style={{height: 300}}
                                                        src={house.image_view[3]} className="block w-full" alt="..."/>
                                                    <div
                                                        className="carousel-caption hidden md:block absolute text-center">
                                                        <h5 className="text-xl">{house.name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                                                type="button" data-bs-target="#carouselExampleCaptions"
                                                data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon inline-block bg-no-repeat"
                                                      aria-hidden="true"/>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button
                                                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                                                type="button" data-bs-target="#carouselExampleCaptions"
                                                data-bs-slide="next">
                                                <span className="carousel-control-next-icon inline-block bg-no-repeat"
                                                      aria-hidden="true"/>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-gray-900 text-2xl title-font font-medium mb-1 inline ">Listing
                                        Basic</h1>

                                    <div className="py-4">
                                        <h2 className="text-gray-900 text-1xl title-font font-medium">Listing title</h2>
                                        <p className="text-slate-400">{house?.name}</p>
                                    </div>
                                </div>
                                <span></span>
                                <div className="py-4">

                                    <h2 className="text-gray-900 text-1xl title-font font-medium mb-1 inline">Listing
                                        description</h2>
                                    <p className="text-slate-400">{house?.description}</p>
                                </div>
                                <span></span>
                                <div className="py-4">

                                    <h2 className="text-gray-900 text-1xl title-font font-medium mb-1 inline">Listing
                                        description</h2>

                                    <p className="text-slate-400">{house?.address}</p>
                                </div>
                                <span></span>
                                <div className="py-4">
                                    <h2 className="text-gray-900 text-1xl title-font font-medium mb-1 inline">Property and
                                        rooms</h2>
                                    <p className="text-slate-400">{house?.typeRoom.name}</p>
                                    <p className="text-slate-400">Bedroom: {house?.numberOfBedrooms}</p>
                                    <p className="text-slate-400">Bathroom: {house?.numberOfBathrooms}</p>
                                </div>
                            </div>
                        </div>
                            </div>

                </div> : <div> loading </div>
            }
            <Footer/>
        </>
    )
}

export default DetailHouse;