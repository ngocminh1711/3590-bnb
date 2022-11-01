import './CreateImageView.css'


function CreateImageView () {

    const handleChange = () => {


    }

    return (
        <div className="flex-grow w-1/4 pr-2 ">
            <label
                className=" flex flex-col items-center w-full px-4 py-2.5 mt-2 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <svg className="w-8 h-8" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"/>
                </svg>
                <span className="mt-2 text-base leading-normal">Select a Image_View</span>
                <input
                    multiple
                    onChange={handleChange}
                    type='file' className="hidden"/>
            </label>
        </div>
    )
}
export default CreateImageView;