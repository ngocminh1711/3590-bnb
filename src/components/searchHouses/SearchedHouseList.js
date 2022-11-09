import Banner from "../Banner";
import { useSelector } from "react-redux";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {useNavigate} from "react-router";

function SearchedHouseList() {
    const houses = useSelector((state) => state.search.searchedHouse);
    const navigate = useNavigate()

    const handleClick = (e) => {
        let id = e
        navigate('/detail-house', {state: {houseId: id}})
    }

    return (
        <>
            <Header />
            {houses.length === 0 ? (
                <div className="text-center">
                    <img
                        src="https://www.surjen.com/resources/assets/frontend/img/nodatafound.png"
                        alt="anh"
                        className="ml-44 h-100 w-50"
                    />
                </div>
            ) : (
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            Houses Search:{houses.length}
                        </h2>

                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {houses.map((item) => (
                                <div key={item._id} className="group relative"
                                     onClick={() => handleClick(item._id)}>
                                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                        <img
                                            src={item.image_backdrop}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h2 className="text-sm font-medium text-gray-700">
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {item.name}
                                            </h2>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Địa chỉ : {item.address}
                                            </p>
                                            <div className="text-sm font-medium text-gray-900">${item.roomRates} per night
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}

export default SearchedHouseList;