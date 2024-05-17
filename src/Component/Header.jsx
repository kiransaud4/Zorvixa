import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";




export default function Header() {
  return (
    <>
    <header className='hero-section'>
      <div className="container py-3">
        <div className="row align-items-center ">
          <div className="col-lg-9 col-sm-12">
            <div className="hero-section-info pr-2">
            <a href="#" className='pe-3'><i className="bi bi-telephone-fill px-1  "></i> +0123 456 789</a>
            <a href="#"> <i className="bi bi-envelope-fill px-1"></i> info@domain.com</a>
            </div>

          </div>
          <div className="col-lg-3 col-sm-12">
          <div className="hero-section-social-info text-end">
               <a href="#"><FaFacebookSquare /></a>
              <a href="#"><FaSquareTwitter /></a>
              <a href="#"><ImLinkedin /></a>
              <a href="#"><FaInstagramSquare /> </a>
          </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}


