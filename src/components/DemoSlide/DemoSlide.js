import './DemoSlide.css'
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router";
import axios from "axios";
let count =0;
function DemoSlide() {



    const [topHouseForRent, setTopHouseForRent] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [imageView, setImageView] = useState([])
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

    const  handleOnNextClick = (index) => {
        const isLastSlide = currentIndex === topHouseForRent[index].image_view.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const  handleOnPrevClick = (index) => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? topHouseForRent[index].image_view.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    console.log(topHouseForRent)

    return (
        <>
            <div>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 ">

                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pt-0">Top 4 houses with the most
                            tenants</h2>
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {topHouseForRent.map((item,index) => (
                                <div key={item._id}
                                    // className="group relative"
                                >
                                    <div
                                        className=" aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl border bg-gray-200  ">
                                        <div className=" w-full ">
                                            <div className="aspect-w-16 aspect-h-9 ">
                                                <img
                                                    style={{width: 560, height: 300}}
                                                    src={item.image_view[currentIndex]}
                                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                />
                                            </div>
                                            <div className=' w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
                                            <button type="button" onClick={()=> handleOnPrevClick(index)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                                </svg>
                                            </button>
                                            <button type="button" onClick={()=>handleOnNextClick(index)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                </svg>
                                            </button>
                                        </div>



                                        </div>

                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h2 className="text-sm font-medium text-gray-700">
                                            <span aria-hidden="true"
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
            </div>
        </>

    )
}

export default DemoSlide;
