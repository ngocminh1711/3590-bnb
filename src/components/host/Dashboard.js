import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
import Switch from "react-switch";
function ListHost() {
  const [state, setState] = useState({
    products: [],
    isLoading: false,
  });
  const [products,setProducts] = useState([])

  const getApi = async () => {
    return await axios.get("http://localhost:8000/api/products");
  };
  const handleDelete = (id) => {Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
       axios.delete(`http://localhost:8000/api/products/${id}`)
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      }
  })
        }
    useEffect(() => {
      getApi().then((res) => {
        
        setProducts(res.data.houseForRents);
      });
    });
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
          {products.map((item, index) => (
            <tr
              key={item._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white text-center ">
                {index +1}
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
                <Switch />
              </td>
              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {item.roomRates}
              </td>
              <td className="py-4 px-6">
                <Button
                onClick={() => {
                  handleDelete(item._id);
                }}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline mr-2"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ListHost;
