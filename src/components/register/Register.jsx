import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

function Register() {
  
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        rfid: '',
        email: '',
        password: '',
        confirm_password: '',
        name: '',
        contact: '',

    })

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(formData))
        fetch(`http://localhost:8000/users/register`, {
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

                console.log('jsonResponse >>', jsonResponse)

                if (jsonResponse.error) {
                    console.log('success error')
                    toast.error(jsonResponse.error)
                    return
                }

                console.log("Register Sucessful")

                navigate('/user/login')
            })
            .catch(err => {
                console.log('api error')
                console.log(err)
                toast.error(err.message)
            })
    }

    return (
        <div className="register-page">
            <h1 className="my-5">Register</h1>
            <ToastContainer />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="rfid" className="form-label">RFID</label>
                        <input type="text" className="form-control" id="rfid" name="rfid" value={formData.rfid} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirm_password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="contact" className="form-label">Contact</label>
                        <input type="text" className="form-control" id="contact" name="contact" value={formData.contact} onChange={handleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register