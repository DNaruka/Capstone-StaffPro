import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLogin from './Components/AdminLogin'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import StaffProHome from './Components/StaffProHome'
import StaffResource from './Components/StaffResource'
import Department from './Components/Department'
import UserProfile from './Components/UserProfile'
import AddDepartment from './Components/AddDepartment'
import AddStaffResource from './Components/AddStaffResource'
import EditStaffResource from './Components/EditStaffResource'
import StaffProFront from './Components/StaffProFront'
import StaffResourceLogin from './Components/StaffResourceLogin'
import StaffResourceDetail from './Components/StaffResourceDetail'
import SecretRoute from './Components/SecretRoute'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<StaffProFront />}></Route>
      <Route path='/Adminlogin' element={<AdminLogin />}></Route>
      <Route path='/StaffResourcelogin' element={<StaffResourceLogin />}></Route>
      <Route path='/StaffResourcedetail/:id' element={<StaffResourceDetail />}></Route>
      <Route path='/Dashboard' element={
        <SecretRoute >
          <Dashboard />
        </SecretRoute>
      }>
        <Route path='' element={<StaffProHome />}></Route>
        <Route path='/Dashboard/StaffResource' element={<StaffResource />}></Route>
        <Route path='/Dashboard/Department' element={<Department />}></Route>
        <Route path='/Dashboard/UserProfile' element={<UserProfile />}></Route>
        <Route path='/Dashboard/addDepartment' element={<AddDepartment />}></Route>
        <Route path='/Dashboard/addStaffResource' element={<AddStaffResource />}></Route>
        <Route path='/Dashboard/editStaffResource/:id' element={<EditStaffResource />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App