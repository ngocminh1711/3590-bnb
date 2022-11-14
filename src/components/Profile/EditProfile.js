import { useState, useEffect } from "react";
import Header from "../header/Header.js";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import Footer from "../footer/Footer.js";


export default function EditProfile() {

  const navigate = useNavigate();
  const PORT = process.env.PORT || 8000;
  const [infoProfile, setInfoProfile] = useState({});
  const {id} = useParams();
  let token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
  }
  const getApiProfile = async () => {
    return await axios.get(`http://localhost:${PORT}/api/user/${id}`);
  }

  useEffect(() => {
    getApiProfile().then(res => {
      setInfoProfile(res.data.data)
    }).catch(err => console.log(err.message))
}, []);

  const handleChange = (e) => {
    setInfoProfile({...infoProfile, [e.target.name]: e.target.value})
  }

  const handleBack = (e) => {
    navigate(`/profile/${id}`)
  } 

  const handleSaveChange = async (e) => {
    e.preventDefault();
    let data = {
      name: infoProfile.name,
      address: infoProfile.address,
      phone: infoProfile.phone
    }
    console.log(data)
    await axios.patch(`http://localhost:${PORT}/api/user/edit/${id}`,data)
    .then(res =>
       navigate(`/profile/${id}`))
    .catch(err => console.log(err.message))
  }
  return (
    <>
      <Header />
        <div className="mt-32 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>
              </div>
            </div>
            <div className="mt-2 md:mt-0 md:col-span-2">
              <form  onSubmit={(e)=> handleSaveChange(e)}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:px-6 sm:pt-0 sm:pb-6">
                    <div className="font-bold uppercase mb-2 text-red-500 text-2xl font-sans">Edit your profile</div>
                    <div className="">
                      <div className="col-span-6 sm:col-span-3">
                        <label className="relative block">
                          <b>Name</b>
                          <input
                            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Enter your name ..."
                            type="text"
                            name="name"
                            value={infoProfile && infoProfile.name} 
                            onChange={(e)=>handleChange(e)}
                          />
                        </label>
                      </div>
                      <br/>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="relative block">
                          
                          <b>Address</b>
                          <input
                            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Enter your address ..."
                            type="text"
                            name="address"
                            value={infoProfile && infoProfile.address} 
                            onChange={(e)=>handleChange(e)}
                          />
                        </label>
                      </div>
                      <br/>
                      <div className="col-span-6 sm:col-span-4">
                        <label className="relative block">
                        <b>Phone number</b>
                          <input
                            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Enter your phone ..."
                            type="number"
                            name="phone"
                            value={infoProfile && infoProfile.phone} 
                            onChange={(e)=>handleChange(e)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50  sm:px-6">
                    <div className="space-between">
                      <button
                        type="submit"
                        className="text-right inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </button>
                      <button
                        type="submit"
                        className="text-left inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={(e)=> handleBack(e)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  );
}
