import axios from "axios";
import { useEffect, useState } from "react";
import Switch from "react-switch";
function ListHost() {

  const data = [[1,2,3,4]]
  const [state, setState] = useState({
    products:[],
    isLoading: false,
  });
  // console.log(state)
  // const deleteApi = async()=>{
  //   await axios.delete(`http://localhost:8000/api/products/${id}`)
  // }
  const getApi = async () => {
    return await axios.get("http://localhost:8000/api/products");
  };
  useEffect(() => {
    getApi().then((res) => {
      setState({products:res.data.houseForRents,isLoading:false});
    });
    
  }, []);
  console.log(state)
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6 text-center">
              STT
            </th>
            <th scope="col" className="py-3 px-6">
              <span className="sr-only"></span>
              Images
            </th>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Address
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((item, index) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white text-center ">
                {index + 1}
              </td>
              <td className="p-4 w-32">
                <img src={item.image_backdrop} alt="Apple Watch" />
              </td>
              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {item.name}
              </td>
              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {item.address}
              </td>
              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white mr-2">
                {item.status}
                <Switch
                               
                              />
              </td>
              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {item.roomRates}
              </td>
              <td className="py-4 px-6">
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline mr-2"
                >
                  Delete
                </a>

                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Update
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ListHost;
