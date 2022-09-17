import React, { useEffect, useState} from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function  ExternalProfile(props) {

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
        <title>{profile.name}</title>
        <img src={profile.url}  width={200} height={200} alt="not found" />
      <body>
        <div class="name">{profile.name}</div>
        <div>
            <a href={ `mailto:${profile.email}`} target="_blank" rel="noreferrer" class="links">Email Me</a>
        </div>
        <div>
         {profile.whatsapp
            ? <a href={`whatsapp://send?phone=${profile.whatsapp}`} target="_blank" rel="noreferrer" class="links">Whatsapp</a>
            : ""
         }
        </div>
        <div>
         {profile.telegram
            ? <a href={`https://telegram.me/${profile.telegram}`} target="_blank" rel="noreferrer" class="links">Telegram</a>
            : ""
         }
        </div>
        <div>
         {profile.instagram
            ? <a href={`https://telegram.me/${profile.instagram}`} target="_blank" rel="noreferrer" class="links">Instagram</a>
            : ""
         }
        </div>
        <div>
         {profile.github
            ? <a href={`https://telegram.me/${profile.github}`} target="_blank" class="links">Github</a>
            : ""
         }
        </div>
  </body>

    </div>
    
  )
}

export default ExternalProfile
