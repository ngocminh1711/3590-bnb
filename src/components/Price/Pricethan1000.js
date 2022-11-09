import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import '../TopHouseForRent/TopHouseForRent.css'

let count = 0;

function PriceThan1000() {

    const [houseThan1000, setHouseThan1000] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [imageView, setImageView] = useState([])
    const navigate = useNavigate()


    const getHouseThan1000 = async () => {
        return await axios.get('http://localhost:8000/api/products/than1000')
    }

    const handleClick = (e) => {
        let id = e
        navigate('/detail-house', {state: {houseId: id}})
    }

    useEffect(() => {

        getHouseThan1000().then(res => {

            setHouseThan1000(res.data.roomRates)
        })

    }, [])


    console.log(houseThan1000)

    return (
        <div>
            {houseThan1000.length > 0 ? (
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">

                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pt-0">Vip House
                        </h2>
                        <div
                            className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {houseThan1000.map((item, index) => (
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
                                            <div className="text-sm font-medium text-gray-900">{item.roomRates} VNĐ/Day
                                            </div>

                                        </div>


                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <img
                        src="https://www.surjen.com/resources/assets/frontend/img/nodatafound.png"
                        alt="anh"
                        className="ml-44 h-100 w-50"
                    />
                </div>

            )}
        </div>
    )
}

export default PriceThan1000;