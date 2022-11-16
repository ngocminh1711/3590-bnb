import Header from "../../header/Header";
import Footer from "../../footer/Footer";


function RentHistory() {

  return (
    <>
      <div>
        <Header />
        <>
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
            <link
              href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
              rel="stylesheet"
            ></link>
            <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-rose-500 tracking-wider">
                      STT
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center">
                      Image
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center">
                      Name
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center">
                      Check in day
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center">
                      Check out day
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-rose-500 tracking-wider text-center">
                      Total Money
                    </th>
                    
                    <th className="px-6 py-3 border-b-2 border-gray-300" />
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm leading-5 text-gray-800"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                      <img
                        className="w-30 h-20 border-gray-200 border -m-1 transform hover:scale-150"
                        alt="null"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                      <div className="text-sm leading-5 text-blue-900 text-center "></div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                      <div className="text-sm leading-5 text-blue-900 text-center "></div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                      <div className="text-sm leading-5 text-blue-900 text-center "></div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-center">
                      <div className="text-sm leading-5 text-blue-900 text-center "></div>
                    </td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
        <Footer />
      </div>
    </>
  );
}

export default RentHistory;
