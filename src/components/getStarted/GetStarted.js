import { useNavigate } from "react-router";

const GetStarted = () => {

  const navigate = useNavigate()

  const headToWebside = (e) => {
    navigate('/home')
  }

  return (
    <>
      <div className="flex">
        <video
          autoPlay
          loop
          muted
          className="fixed bg-cover  h-full w-full object-cover "
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/bnb-c116f.appspot.com/o/files%2FTrang%20Ch%C3%A1%C2%BB%C2%A7%20-%2026535.mp4?alt=media&token=c35a578a-79dc-44d2-b74a-a16cd7db0073"
            type="video/mp4"
          />
        </video>
        <div className="z-50">
          <div className="absolute top-0 left-0 w-full h-full bg-black-rgba"></div>
          <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center ">
            <p className="text-6xl font-extrabold uppercase text-white">
              Welcome
            </p>
            <p className="text-2xl font-medium text-white">To 3950BnB</p>
            <br />
            <button
              type="button"
              class="text-white text-xl bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-4 font-medium rounded-full px-5 py-2.5 text-center mr-2 mb-2 "
              onClick={(e)=> headToWebside(e)}
            >
              Head To Our Website
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
