import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";


function TopHouseForRent() {

    const [topHouseForRent, setTopHouseForRent] = useState([])
    const navigate = useNavigate()

    const getTopHouseForRent = async () => {

        return await axios.get('http://localhost:8000/api/products/top-house')

    }

    const handleClick = (e) => {
        let id = e
        navigate('/detail-house', {state: {houseId: id}})
    }

    useEffect(() => {

        getTopHouseForRent().then(res => {
            setTopHouseForRent(res.data.topHouseForRent)
        })

    }, [])


    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Top 4 houses with the most
                        tenants</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {topHouseForRent.map((item) => (
                            <div key={item._id}
                                 onClick={() => handleClick(item._id)}
                                 className="group relative"
                            >
                                <div
                                    className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img
                                        src={item.image_backdrop}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h2 className="text-sm font-medium text-gray-700"><span aria-hidden="true"
                                                                                                className="absolute inset-0"/>
                                            {item.name}
                                        </h2>
                                        <p className="mt-1 text-sm text-gray-500">Address : {item.address}</p>
                                        <div className="text-sm font-medium text-gray-900">VNĐ {item.roomRates} Night
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHouseForRent;