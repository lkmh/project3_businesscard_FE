import React, { useEffect, useState} from 'react'
import axios from 'axios';

function EditProfile(props) {

  const [profile, setProfile] = useState({})
  

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
    }, [])
    

  return (
    <div>
      <h1>Profile Page</h1>
      <form>
                    {/* <div className="mb-6">
                        <label htmlFor="name-card-saved" className="form-label">Piece of Name Card Saved</label>
                        <input type="text" readonly className="form-control" id="name-card-saved" name="name-card-saved" value={formData.rfid} onChange={handleChange} />
                    </div> */}
                    <div className="me-12">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="string"  className="form-control" id="name" name="name" defaultValue={profile.name}  />
                    </div>
    </form>

    </div>
    
  )
}

export default EditProfile
