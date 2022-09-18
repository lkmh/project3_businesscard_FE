import React, { useEffect, useState} from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Profile(props) {

  const [profile, setProfile] = useState({})

  useEffect(() => {
    const fetchApi = () => {
        const api = 'https://tapcardv2.herokuapp.com/profile'
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
      <img src={profile.url}  width={200} height={200} alt="image not found" />
      <form>
        <Container>
            <Row>
                <Col md={6}>
                    <div className="me-12">
                        <label htmlFor="name-card-saved" className="form-label">Piece of Name Card Saved</label>
                        <input type="text" disabled={true}  className="form-control" id="name-card-saved" name="name-card-saved" value={profile.countView} />
                    </div>
                </Col>
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="string"  disabled={true} className="form-control" id="name" name="name" value={profile.name}  />
                    </div>
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">Contact</label>
                        <input type="string"  disabled={true} className="form-control" id="contact" name="contact" value={profile.contact}  />
                    </div>
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">Whatsapp</label>
                        <input type="string"  disabled={true} className="form-control" id="whatsapp" name="whatsapp" value={profile.whatsapp}  />
                    </div>
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">Telegram</label>
                        <input type="string"  disabled={true} className="form-control" id="telegram" name="telegram" value={profile.telegram}  />
                    </div>
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">Instagram</label>
                        <input type="string"  disabled={true} className="form-control" id="instagram" name="instagram" value={profile.instagram}  />
                    </div>
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">Github</label>
                        <input type="string"  disabled={true} className="form-control" id="github" name="github" value={profile.github}  />
                    </div>
                    </Row>
            </Container>
    </form>

    </div>
    
  )
}

export default Profile
