import './App.css';
import react, {useEffect, useState} from 'react';
import {Routes, Route, useParams} from 'react-router-dom'
import Home from "./components/home"
import Register from './components/form'
import Navbar from './components/navbar';
import Gym from './components/gym'
import Gymlist from './components/gymlist'
import Filter from './components/filter';
import GymDetails from './components/gym_details';

const Routing=()=>{
  let { id } = useParams()
  console.log("iiiiiiiiii", id)
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/register" element={<Register/>} />
        <Route path="/gym" element={<Gym/>} />
        <Route path="/gymlist" element={<Gymlist/>} />
        <Route path="/gymdetails/:id" element={<GymDetails gymId={id} />} />
      </Routes>
    </>
  )
}

const App=()=> {
  const [login, setLogin]= useState("")

  useEffect(()=>{
    let userInf= localStorage.getItem('user')
    userInf= JSON.parse(userInf)
    setLogin(userInf)
}, [])  


  return (
    <>
    <div className="App">
      <Navbar/>
      <Routing/>
      {/* <Gym/> */}
      {/* <Filter/> */}
    </div>
    </>
  );
}

export default App;
