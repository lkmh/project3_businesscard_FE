import {useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
function UploadPhoto() {
    const navigate = useNavigate()
    const [images, setImages] = useState([])
    const [preview, setPreview] = useState([])

    function onImageChange(e) {
        setImages(e.target.files[0])
        setPreview(URL.createObjectURL(e.target.files[0]))
        
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        console.log('Image submitted to the backend',images)
        const formData = new FormData();
        formData.append("uploaded_file", images);
        console.log('DATA submitted to the backend',formData)
        const api = 'http://localhost:8000/profile/uploadPhoto'
        const token = localStorage.getItem('user_token')
        axios.post(
                api , 
                formData,
                { 
                    headers: 
                        {
                            "Authorization" : `Bearer ${token}`
                        }
                }
                )
                .then(function (response) {
                    console.log('RESPONSE',response)
                    toast(response.data)
                    navigate('/profile')
                })
                .catch(function (error) {
                    console.log('ERROR',error);
                    toast(error)
                })
}


    return (
        <div>
            <h1>Upload New Photo</h1>
            <ToastContainer />
            <img width={200} height={200} src={preview} />
            <form onSubmit={handleFormSubmit}>
                <input type="file" onChange={onImageChange}/>
                <button type="submit" className="btn btn-primary">Upload Photo</button>
            </form>
        </div>
    )
}

export default UploadPhoto