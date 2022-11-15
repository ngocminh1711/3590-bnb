import {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function HomestayList() {
    const PORT = process.env.PORT || 8000;
    const [noOfElement, setNoOfElement] = useState(8)
    const [houseForRents, setHouseForRents] = useState([]);
    const navigate = useNavigate();

    const getApiHouse = async () => {
        return await axios.get(`http://localhost:${PORT}/api/products`);
    };

    const loadMore = async () => {
        await setNoOfElement(noOfElement + 100)
    }
    const slice = houseForRents.slice(0, noOfElement)

    const handleClick = (e) => {
        let id = e;
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        navigate("/detail-house", {state: {houseId: id}});
    };

  useEffect(() => {
    getApiHouse().then((res) => {
      setHouseForRents(res.data.houseForRents.reverse());
    });
  }, []);

    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto mt-50 max-w-2xl  py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div
                        className="mt-50 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 z-20">
                        {houseForRents && slice.map((item) => (
                            <div
                                key={item._id}
                                onClick={() => handleClick(item._id)}
                                className="group relative cursor-pointer"
                            >
                                <div
                                    className=" aspect-w-1 aspect-h-1 w-6/6 h-4/6 overflow-hidden rounded-2xl border bg-gray-200 group-hover:opacity-75 ">
                                    <img
                                        style={{width: 560, height: 300}}
                                        src={item.image_backdrop}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h2 className="text-sm font-medium text-gray-700">
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {item.name}
                                        </h2>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Address : {item.address}
                                        </p>
                                        <div className="text-sm font-medium text-gray-900">
                                            ${item.roomRates?.toLocaleString()} per night
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full text-center">
                    <button className="  px-3 py-2 border rounded-2xl hover:bg-gray-200 text-black "
                    onClick={loadMore}>
                        <p className="">
                            Load More </p>
                        </button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default HomestayList;
