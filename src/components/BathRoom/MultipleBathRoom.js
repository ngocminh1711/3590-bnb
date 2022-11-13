import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import '../TopHouseForRent/TopHouseForRent.css'


function MultipleBathRoom() {
    const [multipleBathRoom, setMultipleBathRoom] = useState([]);
    const navigate = useNavigate()

    const getMultipleBedRoom = async () => {
        return await axios.get('http://localhost:8000/api/products/multi-bath-room')
    }

    const handleClick = (e) => {
        let id = e
        navigate('/detail-house', {state: {houseId: id}})
    }

    useEffect(() => {

        getMultipleBedRoom().then(res => {
            setMultipleBathRoom(res.data.multipleBathRoom)
        })

    }, [])


    console.log(multipleBathRoom)

    return (
        <div>

            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">

                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 pt-0">House Multiple Bath Room
                    </h2>
                    <div
                        className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {multipleBathRoom.map((item, index) => (
                            <div key={item._id}
                                 className="group relative"
                                 onClick={() => handleClick(item._id)}
                            >
                                <div
                                    className=" aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl border bg-gray-200 group-hover:opacity-75  ">
                                    <img
                                        style={{width: 560, height: 300}}
                                        src={item.image_backdrop}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h2 className="text-sm font-medium text-gray-700">
                                            <span aria-hidden="true"
                                                  className="absolute inset-0"/>
                                            {item.name}
                                        </h2>
                                        <p className="mt-1 text-sm text-gray-500">Address : {item.address}</p>
                                        <div className="text-sm font-medium text-gray-900">${item.roomRates} per night
                                        </div>

                                    </div>


                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MultipleBathRoom;