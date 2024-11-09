// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from "react-router-dom"
import SignIn from "./pages/Signin"
import Home from "./pages/Home"
import About from "./pages/About"
import StudentSignup from "./pages/StudentSignup"
import AdminLogin from "./pages/AdminLogin"
import StudentLogin from "./pages/StudentLogin"
import Dashboard from "./pages/Dashboard"
import Forget from "./pages/Forget"
import DashboardProfile from "./pages/DashboardProfile"
import AdminSignup from "./pages/AdminSignup"
import AdminDashboard from "./pages/AdminDashboard"
import AdminOverview from "./components/AdminOverview"
import ManageStudents from "./components/ManageStudents"
import SendNotice from "./components/SendNotice"


function App() {
 


  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/studentsignup" element={<StudentSignup/>}/>
        <Route path="/adminsignup" element={<AdminSignup/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/studentlogin" element={<StudentLogin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/forgotpassword" element={<Forget/>}/>
      <Route path="/dashboard/profile" element={<DashboardProfile/>}/>
      <Route path="/admindashboard" element={<AdminDashboard />}>
                    {/* Child routes */}
                    <Route path="overview" element={<AdminOverview />} />
                    <Route path="manage-students" element={<ManageStudents />} />
                    <Route path="send-notices" element={<SendNotice />} />
                </Route>
      </Routes>
    </>
  )
}

export default App
