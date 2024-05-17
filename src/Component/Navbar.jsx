import React, { useEffect } from 'react'
import { Link, Route, Routes} from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Ourteam from './Pages/Ourteam'
import { useState } from 'react'
import { useContext } from 'react'



export default function Navbar() {
  // let {state, dispatch}=useContext([])
  // const [scrolltopdata, setscrolltopdata] = useState('');
  // useEffect(()=>{
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY < 15) {
  //         setscrolltopdata('');
  //     } else {
  //         setscrolltopdata('scrolled');
  //     }
  // });
  // },[])
  return (
    <>
      <nav className="navbar navbar-expand-lg  my-2 scrolltopdata ">
        <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/logo.svg" alt="logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
            <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/pages" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages  </Link>
        <ul className="dropdown-menu bg-primary">
          <li><a className="dropdown-item text-light" href="#">Service Single</a></li>
          <li><a className="dropdown-item text-light" href="#">Blog</a></li>
          <li><a className="dropdown-item text-light" href="#">Blogs Details</a></li>
          <li><a className="dropdown-item text-light" href="#">404</a></li>

        </ul>
      </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ourteam" >Our Team</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-primary py-2" type="submit">Contact us</button>
            </form>
          </div>
        </div>
      </nav>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<AboutUs/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/ourteam" element={<Ourteam/>}/>
</Routes>
    </>
    
  )
}
