import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SiteHeader from '../partials/SiteHeader';

function EditProfile(props) {
   const navigate = useNavigate()
  const [profile, setProfile] = useState({})
//   const [formData, setFormData] = useState({})

  useEffect(() => {
    const fetchApi = () => {
        const api =  "https://tapcardv2.herokuapp.com/profile"
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
            const api = 'https://tapcardv2.herokuapp.com/profile/edit'
            const token = localStorage.getItem('user_token')
            axios.post(
                    api , 
                    profile,
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
            <SiteHeader token={props.token} />
        <h1>Profile Page</h1>
        <ToastContainer />
        <form onSubmit={handleFormSubmit}>
                        {/* <div className="me-12">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="string"  className="form-control" id="name" name="name" value={profile.name} onChange={handleInputChange} />
                        </div> */} 
        <Container>
            <Row>
                <Col md={6}>


                    <div className="me-12">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="string"   className="form-control" id="name" name="name" value={profile.name} onChange={handleInputChange}   />
                    </div>
                    </Col>
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">Contact</label>
                        <input type="string"   className="form-control" id="contact" name="contact" value={profile.contact}  onChange={handleInputChange} />
                    </div>
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">Whatsapp</label>
                        <input type="string"   className="form-control" id="whatsapp" name="whatsapp" value={profile.whatsapp} onChange={handleInputChange} />
                    </div>
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">Telegram</label>
                        <input type="string"   className="form-control" id="telegram" name="telegram" value={profile.telegram} onChange={handleInputChange} />
                    </div>
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">Instagram</label>
                        <input type="string"   className="form-control" id="instagram" name="instagram" value={profile.instagram} onChange={handleInputChange} />
                    </div>
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">Github</label>
                        <input type="string"   className="form-control" id="github" name="github" value={profile.github} onChange={handleInputChange}  />
                    </div>
                    <div className="me-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                        </Row>
            </Container>
        </form>

        </div>
        
    )
    }

export default EditProfile
