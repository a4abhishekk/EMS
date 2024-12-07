import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDasboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';


const App=() => {
  const[user,setUser] =useState(null)
  const[loggedInUserData,setLoggedInUserData] = useState(null)

const authData = useContext(AuthContext)

useEffect(()=>{
  if(authData){
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      setUser(loggedInUser.role)
    }
  }
}, [authData]);

  const handleLogin = (email, password) => {
  if (email == 'admin@me.com' && password == '123') {
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
  } else if (userData && userData.length > 0) {
    const employee = userData.find((e) => email == e.email && e.password == password)
    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
    } else {
      alert("Invalid Credentials")
    }
  } else {
    alert("Invalid Credentials")
  }
}

  useEffect( ()=>{
    //setLocalStorage()
    getLocalStorage()
  },)
  return(
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? (<AdminDashboard/>) : (user == 'employee' ? <EmployeeDashboard data ={loggedInUserData}/>:null)}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App;