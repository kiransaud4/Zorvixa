import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareEnvelope } from "react-icons/fa6";







export default function Footer() {
  return (
    <>
      <footer className='bg-primary '>
        <div className="container">
          <div className="row align-items-center  bg-dark rounded ">
            <div className="col-lg-6">
              <div className="footer-left text-light m-5 rounded">
                <h1>Subscribe To Newsletter</h1>
                <p>Stay informed with our latest updates! Subscribe to our newsletter to receive exclusive content & special offers.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="newsletter-form">
                <form action="#" method="POST">
                  <div className="row align-items-center no-gutters">
                    <div className="form-group col-md-8">
                      <input type="email" name="email" className="form-control" id="newsletter_email" placeholder="Enter Email Address" required />
                      <div className="help-block with-errors" /></div>
                    <div className="col-md-4 text-end">
                      <button type="submit" className="btn-default">Subscribe</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row  py-5 align-items-center ">
            <div className="col-lg-5">
              <div className="footer-logo   text-center">
                <img className='' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/footer-logo.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
                <div className="footer-social-link ">
                  <ul>
                    <li><a href="#"><ImFacebook2 /></a></li>
                    <li> <a href="#"> <FaSquareTwitter /> </a></li>
                    <li> <a href="#"> <FaLinkedin/> </a></li>
                    <li> <a href="#"> <FaInstagramSquare/> </a></li>
                  </ul>
                </div>
              </div>
          </div>
            <div className=" footer-menu-list">
              <div className="container">
              <div className="row">
                <div className="col-12">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-3 col-md-6">
                  <div className="call-list-logo  d-flex align-items-center text-light">
                    <span>< FaPhoneSquareAlt /></span>
                    <div className='call-body px-2'>
                      <h5>Customer Support</h5>
                      <a href="#">+0 123 456 789</a>
                    </div>
                  </div>    
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="call-list-logo  d-flex align-items-center text-light">
                    <span><FaSquareEnvelope /></span>
                    <div className='call-body px-2'>

                      <h5>Support & Email</h5>
                      <a href="#">info@companyname.com</a>
                    </div>
                  </div>    
                </div>
                
              <div className="col-lg-3-">
                <div className="reserved text-light text-end ">
                <p>Copyright 2024 <strong>Zorvixa.</strong> <br />All Rights Reserved.</p>
                </div>
            </div>
          </div>
      </div>
      </footer >
    </>
  )
}
