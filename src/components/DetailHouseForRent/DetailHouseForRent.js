import './DetailHouseForRent.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import Header from "../header/Header";


function DetailHouseForRent() {

    const [houseForRent, setHouseForRent] = useState({
        name: '',
        address: '',
        typeRoom: '',
        numberOfBedrooms: '',
        numberOfBathrooms: '',
        roomRates: '',
        description: '',
        image_backdrop: '',
        image_view: [],
    });


    const {state} = useLocation()

    const id = state.houseId
    const getData = async () => {
        return await axios.get(`http://localhost:8000/api/products/${id}`)
    }
    useEffect(() => {
        getData().then(res => {
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
                image_view: res.data.data.image_view
            })
        })
    }, [])

    return (

        <>
            <Header/>
            <div className="grid grid-cols-2 gap-4 py-5 px-24 mx-2">
                <div>
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">HOUSE FOR RENT' NAME</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{houseForRent.name}</h1>
                    <div className=" grid grid-cols-3 gap-4 ">
                        <div>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2" className="w-4 h-4 text-red-500 float-left" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <p className="float-left">4.65</p>
                        </div>
                        <p>30 reviews </p>
                        <p>{houseForRent.address}</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-10 px-24 pt-0 pb-0 max-h-50">
                <img
                    className="rounded-l-3xl border"
                    src={houseForRent.image_backdrop}/>
                <div className="flex flex-row">
                    <div className="basis-1/2">
                        <img
                            className="rounded border"
                            src={houseForRent.image_view[0]}/>
                        <img
                            className="rounded border"
                            src={houseForRent.image_view[1]}/>
                    </div>
                    <div className="basis-1/2">
                        <img
                            className="rounded-r-3xl border"
                            src={houseForRent.image_view[2]}/>
                        <img
                            className="rounded-r-3xl border"
                            src={houseForRent.image_view[3]}
                        alt={houseForRent.image_backdrop}/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-10 px-24 pb-0">
                <div className="grid grid-rows-4 gap-4">
                    <h1 className="text-black-500 text-2xl title-font font-medium mb-1">Entire rental unti hosted by Nguyen</h1>
                    <p className="text-gray-500 title-font font-medium py-3 float-left pt-0">*{houseForRent.numberOfBedrooms} bedrooms * {houseForRent.numberOfBathrooms} bathrooms </p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-left">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                        </svg>
                        <div className="grid grid-rows-2">
                            <h1 className="text-black-300 text-1.5xl title-font font-medium mb-1 float-left">Designed by</h1>
                            <p className="text-gray-500 text-1.5xl">abc</p>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-left">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        <div>
                                       <h1 className="text-black-300 text-1.5xl title-font font-medium mb-1 float-left">Free cancellation for 48 hours.</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="z-20 mt-2 h-auto">
                        <form>
                            <div className="flex bg-100 h-auto">
                                <div className="m-auto">
                                        <div className="mt-5 rounded-lg shadow">
                                            <h1 className="text-gray-900 text-2xl title-font font-medium mb-1 px-7 py-5 pb-5 inline">$ {houseForRent.roomRates} night</h1>
                                            <div className="px-5 pb-5">
                                                <div className=" grid grid cols-2 rounded-full border-x-10 border-y-10 border-red-100">
                                                    <input type="date"/>
                                                    <input type="date"/>
                                                </div>
                                                <div className="flex flex-row-reverse p-3">
                                                    <div className="flex-initial pl-3">
                                                        <button type="submit"
                                                                className="bg-rose-500 hover:bg-rose-400 text-white font-bold py-2 px-4 rounded-full">
                                                            <span>Reserve</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-10 px-24 pt-0">
                <h1 className=" text-black-300 text-1xl title-font font-normal mb-1">
                        {houseForRent.description}
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-4 py-10 px-24">
                <div>
                    <h1 className="text-gray-450 text-2xl title-font font-medium mb-1">Where you'll sleep</h1>
                    <div className=" grid grid-cols-3 gap-4">
                        <div className=" rounder-lg border px-8 py-2">
                            <div className="py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                                </svg>
                            </div>
                            <h2>
                                Bed room <p> {houseForRent.numberOfBedrooms} beds</p>
                            </h2>
                        </div>
                        <div className=" rounder-lg border px-8 py-2">
                            <div className="py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                                </svg>
                            </div>
                            <h2>
                                Bath room <p> {houseForRent.numberOfBathrooms} rooms</p>
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
        </>


    )
}

export default DetailHouseForRent;




