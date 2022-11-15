import axios from "axios";
import {useEffect, useState} from "react";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import storage from "../../../firebaseConfig";
import {createAvatarUserURL} from "../../../features/avatarUser/avatarUserSlice";
import {useDispatch, useSelector} from "react-redux";


function EditAvatar() {

    const dispatch = useDispatch();
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [file, setFile] = useState('');
    const [percent, setPercent] = useState(0);
    const handleChangeModalAvatar = (e) => {
        setFile(e.target.files[0]);
    }

    const handleUpload = () => {
        if (!file) {
            alert('Please choosse a file')
        }
        const storageRef = ref(storage, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);


        uploadTask.on("state_changed", (snapshot) => {
            const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setPercent(percent)
        }, (err) => {
            console.log(err);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                dispatch(createAvatarUserURL(url))
            })
        })
    }


    return (<div
            className="flex flex-row px-12 justify-between items-center">
            <p>{percent} %</p>
            <label
                className=" flex flex-col items-center bg-white text-blue rounded-lg shadow-lg uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <svg className="w-8 h-8" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20">
                    <path
                        d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"/>
                </svg>
                <span className="mt-2 text-base leading-normal">Select a file</span>
                <input type="file" className="hidden"
                       onChange={handleChangeModalAvatar}/>
            </label>
            <button
                className="bg-rose-500 text-white active:bg-rose-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleUpload}
            >
                Upload
            </button>
        </div>

    )
}

export default EditAvatar;