import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditProfile(props) {

  const [profile, setProfile] = useState({})
//   const [formData, setFormData] = useState({})

  useEffect(() => {
    const fetchApi = () => {
        const api = 'http://localhost:8000/profile'
        const token = localStorage.getItem('user_token')
        axios.get(
                api , 
                { 
                    headers: 
                        {
                            "Authorization" : `Bearer ${token}`
                        }
                }
                )
            .then(res => {
                const data = res.data
                setProfile(profile => ({
                                    ...profile,
                                    ...data
                                    })
                            );
                console.log('DATA Profile',profile)
                }
            )
            .catch((error) => {
                console.log(error)
            }
            )
    }

    fetchApi()
    }, []
    )
    
    function handleInputChange(e) {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        })
    }

    function handleFormSubmit(e) {
            console.log('DATA submitted to the backend',profile)
            e.preventDefault()
            const api = 'http://localhost:8000/profile/edit'
            const token = localStorage.getItem('user_token')
            axios.post(
                    api , 
                    JSON.stringify(profile),
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
                    })
                    .catch(function (error) {
                        console.log('ERROR',error);
                        toast(error)
                    })
    }
    


    return (
        <div>
        <h1>Profile Page</h1>
        <p>{profile.name}</p>
        <ToastContainer />
        <form onSubmit={handleFormSubmit}>
                        {/* <div className="mb-6">
                            <label htmlFor="name-card-saved" className="form-label">Piece of Name Card Saved</label>
                            <input type="text" readonly className="form-control" id="name-card-saved" name="name-card-saved" value={formData.rfid} onChange={handleChange} />
                        </div> */}
                        <div className="me-12">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="string"  className="form-control" id="name" name="name" value={profile.name} onChange={handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        </div>
        
    )
    }

export default EditProfile
