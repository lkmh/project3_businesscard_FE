import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SiteHeader from '../partials/SiteHeader';
  

function Login(props) {
  
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        fetch(`https://tapcardv2.herokuapp.com/users/login`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(response => {
                return response.json()
            })
            .then(jsonResponse => {
                if (jsonResponse.error) {
                    toast.error(jsonResponse.error)
                    return
                }

                toast("Login Successful!")

                // store the token into localstorage / cookie
                localStorage.setItem('user_token', jsonResponse.token)

                navigate('/profile')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    return (
        <div className="login-page">
            <SiteHeader token={props.token} />
          <div>
      
        <ToastContainer />
      </div>
            <h1 className="my-5">Login</h1>

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login