import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import {searchHouse} from "../../features/search/searchSlice";
import {SearchIcon} from "@heroicons/react/solid";

function SearchHouses(){
    const dispatch = useDispatch();
    const [keywordSearch, setKeywordSearch] = useState('');
    const [houseForRents, setHouseForRents] = useState([]);
    let navigate = useNavigate();

    const PORT = process.env.PORT || 8000;

    const handleChange = (e) => {
        setKeywordSearch(e.target.value)
    }
    let getApiHouseSearch = async () => {
        return await axios.get(`http://localhost:${PORT}/api/products/search/${keywordSearch}`)
    }
    const handlePress = async (event) => {
        if (event.key === 'Enter') {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
            dispatch(searchHouse(houseForRents))
            navigate('/searchList')
        }
    }
    useEffect(()=>{
        getApiHouseSearch().then(res =>{
        console.log(res.data)
            setHouseForRents(res.data.houseForRent)

        }).catch(err => console.log({err : 'Please fill keyword to search'}))
    }, [keywordSearch])
    return(
        <div className="flex w-96 items-center md:border-2 rounded-full py-2 md:shadow-sm">
            <input
                value={keywordSearch}
                onChange={handleChange}
                onKeyUp={handlePress}
                className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                type="text"
            />
            <SearchIcon
                className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
            />
        </div>

    )

}
export default SearchHouses