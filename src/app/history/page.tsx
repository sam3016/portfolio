export default function history() {
  return (
    <>
      <div className="p-4 mt-4 overflow-y-auto">
        <h1 className="text-4xl text-center font-semibold mb-6">Working History</h1>
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-12 text-gray-50">

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">Database Specialist</h3>
                <p className="leading-tight text-justify">
                  2016
                </p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">FileMaker Developer</h3>
                <p className="leading-tight text-justify">
                  2018
                </p>
              </div>
            </div>

            <div className="flex md:contents">
          <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
              <i className="fas fa-exclamation-circle text-gray-400"></i>
            </div>
          </div>
          <div className="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-semibold text-lg mb-1">2nd Line Support Technician</h3>
            <p className="leading-tight text-justify">
              2024
            </p>
          </div>
        </div>

          </div>
        </div>
      </div>
    </>
  )
}