import './CreateBackdrop.css'
import {useState} from "react";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {useDispatch} from "react-redux";
import {createBackdropURL} from "../../features/createBackdrop/createBackdropSlice";
import storage from "../../firebaseConfig";




function CreateBackdrop () {


    const [file, setFile] = useState('');
    const [percent, setPercent] = useState(0);

    const dispatch = useDispatch();
    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleUpload = () => {
        if (!file) {
            alert('Please choosse a file')
        }
        const storageRef = ref(storage, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);


        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent)
            },
            (err) => {
                console.log(err);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then( (url) => {
                        dispatch(createBackdropURL(url))
                })
            }
        )
    }

    return (
        <>
            <div className="flex-grow w-1/4 pr-2 ">
                <label
                    className=" flex flex-col items-center w-full px-4 py-2.5 mt-2 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                    <svg className="w-8 h-8" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"/>
                    </svg>

                    <span className="mt-2 text-base leading-normal">Select a Backdrop</span>
                    <input
                        onChange={handleChange}
                        type='file' className="hidden"
                    />
                </label>

                <button
                    onClick={handleUpload}
                    type="button"
                    className="flex px-14 py-2.5 font-medium tracking-wide text-white capitalize   bg-rose-500 rounded-md hover:bg-rose-400  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                    <span>{percent}%</span>
                    <span className="pl-2 mx-2">Upload</span>
                </button>
            </div>
        </>

    )
}
export default CreateBackdrop;