import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import SiteHeader from './components/partials/SiteHeader';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import EditProfile from './components/profile/EditProfile';
import UploadPhoto from './components/profile/UploadPhoto';
import Auth from './components/auth/Auth';
import Guest from './components/auth/Guest'
import ExternalProfile from './components/profile/ExternalProfile';


function App() {
  return (
    <div className="App">
      <SiteHeader />

      <Routes>
        <Route path="/" element={<Animals />} />
        <Route path="/profile" element={<Auth component={Profile} />} />
        <Route path="/editprofile" element={<Auth component={EditProfile} />} />
        <Route path="/uploadphoto" element={<Auth component={UploadPhoto} />} />
        <Route path="/register" element={<Guest component={Register} />} />
        <Route path="/user/login" element={<Guest component={Login} />} />
        <Route path="/externalprofile" element={<Auth component={ExternalProfile} />} />
      </Routes>

      {/* <ToastContainer /> */}
    </div>
  );
}
function Animals() {
  return (
    <p> Welcome to tap card please login to continue </p>
  )
} 
// function Profile() {
//   return (
//     <p> Profile</p>
//   )
// } 

export default App;
