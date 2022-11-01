import './CreateHouseForRent.css'
import {useEffect, useState} from "react";
import axios from "axios";



function CreateHouseForRent() {

    const [typeRooms, setTypeRooms] = useState([]);
    const numberOfBedrooms = [1,2,3,4,5,6,7,8,9,10];
    const numberOfBathrooms = [1,2,3]
    const [newHouseForRent, setNewHouseForRent] = useState({
        name: '',
        address: '',
        typeRoom: '',
        numberOfBathroom: '',
        numberOfBedroom: '',
        roomRate: '',
        image_backdrop: '',
        image_view: '',
        description: '',
    });


    const getTypeRooms = async () => {
        return  await axios.get('http://localhost:8000/api/products/type-room')
    }
    const handleChange = (e) => {
        setNewHouseForRent({...newHouseForRent, [e.target.name]: e.target.value});
    }


    useEffect( () => {
        getTypeRooms().then(res => setTypeRooms(res.data.data))
            .catch(err => console.log(err))
    },[])

    console.log(newHouseForRent)


    return (
        <div className="bg-[url('/src/public/background_sea.jpg')]">
                <form>
                    <div className="flex bg-100 ">
                    <div className="m-auto">
                        <div>
                            <button type="button"
                                    className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg"  height="30px"
                                     viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                                </svg>
                                <span className="text-center">Create new House For Rent</span>
                            </button>
                            <div className="mt-5 bg-white rounded-lg shadow">
                                <div className="px-5 pb-5">
                                    <input
                                        onChange={handleChange}
                                        name="name"
                                        placeholder="Name House For Rent"
                                        className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                                    <input
                                        onChange={handleChange}
                                        name="address"
                                        placeholder="Address"
                                        className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                                    <div className="flex">
                                        <div className="flex-grow w-1/4 pr-2">
                                            <select
                                                name="typeRoom"
                                                onChange={ (e) => {
                                                    setNewHouseForRent({...newHouseForRent, [e.target.name]: e.target.value})
                                                }}
                                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                                                { typeRooms.map(typeRoom => (
                                                    <option key={typeRoom._id} value={typeRoom._id}>{typeRoom.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="flex-grow">
                                            <input
                                                type="number"
                                                onChange={handleChange}
                                                name='roomRate'
                                                placeholder="Room Rates"
                                                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-grow w-1/4 pr-2">
                                            <select
                                                name="numberOfBedrooms"
                                                onChange={(e) => {
                                                    setNewHouseForRent({...newHouseForRent, [e.target.name]: e.target.value})
                                                }}
                                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                                                <option value="">Number Of Bedrooms</option>
                                                { numberOfBedrooms.map((item,index) => (
                                                    <option key={index} value={item}>{item}</option>
                                                    )
                                                ) }
                                            </select>
                                        </div>
                                        <div className="flex-grow w-1/4 pr-2">
                                            <select
                                                name="numberOfBathrooms"
                                                onChange={(e) => {
                                                    setNewHouseForRent({...newHouseForRent, [e.target.name]: e.target.value})
                                                }}
                                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                                                <option value="">Number Of Bathrooms</option>
                                                { numberOfBathrooms.map((item,index) => (
                                                    <option key={index} value={item}>{item}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-grow w-1/4 pr-2 ">
                                            <label
                                                className=" flex flex-col items-center w-full px-4 py-2.5 mt-2 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                                                <svg className="w-8 h-8" fill="currentColor"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path
                                                        d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"/>
                                                </svg>
                                                <span className="mt-2 text-base leading-normal">Select a Backdrop</span>
                                                <input type='file' className="hidden"/>
                                            </label>

                                        </div>
                                        <div className="flex-grow w-1/4 pr-2 ">
                                            <label
                                                className=" flex flex-col items-center w-full px-4 py-2.5 mt-2 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                                                <svg className="w-8 h-8" fill="currentColor"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path
                                                        d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"/>
                                                </svg>
                                                <span className="mt-2 text-base leading-normal">Select a Image_View</span>
                                                <input type='file' className="hidden"/>
                                            </label>
                                        </div>
                                    </div>
                                    <textarea
                                        onChange={handleChange}
                                        name="description"
                                        placeholder="Description"
                                        className="form-textarea block  text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" id="my-textarea"
                                        rows="8">
                                </textarea>
                                    <div className="flex flex-row-reverse p-3">
                                        <div className="flex-initial pl-3">
                                            <button type="button"
                                                    className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                                     width="24px" fill="#FFFFFF">
                                                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                    <path
                                                        d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                                                        opacity=".3"></path>
                                                    <path
                                                        d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                                                </svg>
                                                <span className="pl-2 mx-1">Save</span>
                                            </button>
                                        </div>
                                        <div className="flex-initial">
                                            <button type="button"
                                                    className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                                     width="24px">
                                                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                    <path d="M8 9h8v10H8z" opacity=".3"></path>
                                                    <path
                                                        d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                                                </svg>
                                                <span className="pl-2 mx-1">Delete</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>

                </form>




        </div>


)
}
export default CreateHouseForRent;
