import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import SiteHeader from './components/partials/SiteHeader';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import EditProfile from './components/profile/EditProfile';
import Auth from './components/auth/Auth';
import Guest from './components/auth/Guest'


function App() {
  return (
    <div className="App">
      <SiteHeader />

      <Routes>
        <Route path="/" element={<Animals />} />
        <Route path="/profile" element={<Auth component={Profile} />} />
        <Route path="/editprofile" element={<Auth component={EditProfile} />} />
        {/* <Route path="/animals/:animalId/edit" element={<Auth component={EditAnimalDetails} />} /> */}
        <Route path="/register" element={<Guest component={Register} />} />
        <Route path="/user/login" element={<Guest component={Login} />} />
      </Routes>

      {/* <ToastContainer /> */}
    </div>
  );
}
function Animals() {
  return (
    <p> Home Page</p>
  )
} 
// function Profile() {
//   return (
//     <p> Profile</p>
//   )
// } 

export default App;
