import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaSquareTwitter} from "react-icons/fa6";
import { FaSquareInstagram} from "react-icons/fa6";

export default function Section() {
    return (
        <>
            <section className='hero-section-left '>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 md-lg-8">
                            <div className="hero-section-left-info text-light py-5 ">
                                <span className="badge rounded-pill text-bg-primary py-2 mb-0">Health Insurance</span>
                                <h1 className=''>You are Ready to
                                    Get Your Insurance</h1>
                                <p >Get peace of mind with our comprehensive insurance coverage tailored to your needs. From home and auto to life and health, we've got you covered. Explore our range of policies and find the perfect fit for your family's security.</p>
                                <button className='btn btn-primary fw-bold px-3'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
            <section className='Home-information'>
                <div className="container">
                    <div className="row my-4">
                        <div className="col-lg-4">
                            <div className="row health-insurance-box py-4 ">
                                <div className="col-lg-3">
                                    <div className="box1 ">
                                        <img src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/icon-peace-of-mind.svg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-9 ">
                                    <h4 className='fw-bold'>Peace of Mind</h4>
                                    <p>Phasellus fermentum <br /> congue arcu.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="row health-insurance-box py-4">
                                <div className="col-lg-3">
                                    <div className="box1 ">
                                        <img src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/icon-tailored-cover.svg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-9 ">
                                    <h4 className='fw-bold'>Tailored Cover</h4>
                                    <p>Phasellus fermentum <br /> congue arcu.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="row health-insurance-box py-4 ">
                                <div className="col-lg-3">
                                    <div className="box1 ">
                                        <img src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/icon-24-7-support.svg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-9 ">
                                    <h4 className='fw-bold'>24/7 Support</h4>
                                    <p>Phasellus fermentum <br /> congue arcu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         </section>

                <div className="About-Informaton">
                    <div className="container">
                        <div className="row py-4">
                            <div className="col-lg-6">
                                <div className="About-Informaton-left">
                                    <img className='logo' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/video-placeholder.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="About-Informaton-right mx-5 mt-5">
                                    <span className='p-2 '>About Zorvixa</span>
                                    <h1 className='fs-1 fw-bold mt-3'>Reliable Insurance For Any  Purpose</h1>
                                    <p className='fs-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <div className="row mx-5">
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img className='w-40' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/icon-secure-services.svg" alt="" />
                                            </div>
                                            <div className="col-lg-8 ">
                                                <h6>100 Secure Services</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className="row ">
                                            <div className="col-lg-4">
                                                <img className='w-40' src="	https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/icon-money-back.svg" alt="" />
                                            </div>
                                            <div className="col-lg-8 ">
                                                <h6>Anytime Money Back</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-5 mt-4">
                                    <div className="col-lg-5">
                                        <button className='btn btn-primary px-4'>Read More</button>
                                    </div>
                                    <div className="col-lg-7 ">
                                        <div className="row">
                                            <div className="col-lg-2 position-relative">
                                                <img className=' rounded pill' src="	https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/home-contact-bg.png" alt="" />
                                                <span className='call'><i className="bi bi-telephone-fill p-2 text-light"> </i>
                                                </span>
                                            </div>
                                            <div className="col-lg-10">
                                                <p className='ps-5'>Contact us:+0123 456 789</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='Services' >
        <div className="container py-4 text-center">
          <span >Services</span>
          <h1 className='text-light py-3 fw-bold'> What we are Offering</h1>
          <div className="row">
            <div className="col-lg-4">
              <div className="health-insurance bg-light pb-2 position-relative">
                <div className="image overflow-hidden  ">
                  <img className='w-100 rounded ' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/services-1.jpg" alt="" />
                  </div>
                   <div className='small-box'>
                    <img className='m-3' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/icon-services-1.svg" alt="" />
                  </div>
                <div className="health-insurance-content  m-4">
                  <h6 className='fw-bold pt-3'>Health Insurance</h6>
                  <p className='pp'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                  <a href="#" className='text-dark fw-bold mb-2' > Read More <i className="bi bi-arrow-right-circle-fill ps-4 text-primary "></i> </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="health-insurance bg-light pb-2 position-relative">
                <div className="image overflow-hidden">
                  <img className='w-100' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/services-2.jpg" alt="" />
                  </div>
                  <div className='small-box'>
                    <img className='m-3' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/icon-services-2.svg" alt="" />
                  </div>
                <div className="health-insurance-content  m-4">
                  <h6 className='fw-bold pt-3'>Health Insurance</h6>
                  <p className='pp'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                  <a href="#" className='text-dark fw-bold mb-2' > Read More <i className="bi bi-arrow-right-circle-fill ps-4 text-primary "></i> </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="health-insurance bg-light pb-2 position-relative">
                <div className="image overflow-hidden ">
                  <img className='w-100' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/services-3.jpg" alt="" />
                  </div>
                  <div className='small-box'>
                    <img className='m-3' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/icon-services-3.svg" alt="" />
                  </div>
                <div className="health-insurance-content  m-4">
                  <h6 className='fw-bold pt-3'>Health Insurance</h6>
                  <p className='pp'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                  <a href="#" className='text-dark fw-bold mb-2' > Read More <i className="bi bi-arrow-right-circle-fill ps-4 text-primary "></i> </a>
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-outline-light m-5 px-5">Services</button>

        </div>
      </section>
      <section className='Services-consultancy bg-light'>
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-6">
              <div className="Services-consultancy-left my-5">
                <img className='w-100' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/get-consulations.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="Services-consultancy-right my-5 ms-4">
              <div className='p-2 '>Get Consultations</div>
              <h1 className='fw-bold my-3'>5 Years of Excellence in The Insurance Industry.</h1>
              <p className='pp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
              <h6   className=' fw-bold '> <span className='text-body-secondary '> 01.</span>  Can Save Your Money.</h6>
              <hr />
              <h6   className=' fw-bold'> <span className='text-body-secondary '> 02. </span> Our Life Insurance Is Flexible.</h6>
              <button className='btn btn-primary my-3 px-4 fw-bold '>Contact Now</button>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Our-Team'>
                <div className="container text-center py-4">
                    <span >Our Team</span>
                    <h1 className='mt-2 fw-bold'>Meet Our Experienced Team</h1>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="Our-Team-content mt-5 text-center position-relative ">
                                <div className="image overflow-hidden ">
                                    <img className='w-100' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/team-1.jpg" alt="" />
                                </div>
                                <div className="Our-Team-content-social-media">
                                    <ul>
                                        <li><a href="#"> <FaFacebookSquare /></a></li>
                                        <li><a href="#"> <FaLinkedin/> </a></li>
                                        <li><a href="#"> <FaSquareTwitter/> </a></li>
                                        <li><a href="#"> <FaSquareInstagram /></a></li>
                                    </ul>
                                </div>
                                <p className='fw-bold mt-4'>Michael Johnson</p>
                                <p className='text-secondary'>Founder</p>
                                <div className='separater'></div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="Our-Team-content mt-5 text-center position-relative">
                                <div className="image overflow-hidden ">
                                    <img className='w-100' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/team-2.jpg" alt="" />
                                </div>
                                <div className="Our-Team-content-social-media">
                                    <ul>
                                        <li><a href="#"> <FaFacebookSquare /></a></li>
                                        <li><a href="#"> <FaLinkedin /> </a></li>
                                        <li><a href="#"> <FaSquareTwitter /> </a></li>
                                        <li><a href="#"> <FaSquareInstagram /></a></li>
                                    </ul>
                                </div>
                                <p className='fw-bold mt-4'>Jessica Anderson</p>
                                <p className='text-secondary'>Co-Founder & CEO</p>
                                <div className='separater'></div>
                            </div>
                        </div> 
                        <div className="col-lg-4">
                            <div className="Our-Team-content mt-5 text-center position-relative  aligz">
                                <div className="image overflow-hidden ">
                                    <img className='w-100' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/team-3.jpg" alt="" />
                                </div>
                                <div className="Our-Team-content-social-media">
                                    <ul>
                                        <li><a href="#"> <FaFacebookSquare /></a></li>
                                        <li><a href="#"> <FaLinkedin /> </a></li>
                                        <li><a href="#"> <FaSquareTwitter /> </a></li>
                                        <li><a href="#"> <FaSquareInstagram /></a></li>
                                    </ul>
                                </div>
                                <p className='fw-bold mt-4'> Brian Wilson</p>
                                <p className='text-secondary'> Claims Representative</p>
                                <div className='separater'></div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            {/* Why we  should choose Zorvixa */}
            <section className='Why-should'>
                <div className="container">
                    <div className="row m-3">
                        <div className="col-lg-5">
                            <div className="why-should-left my-5">
                                <div className="image">
                                    <img className='w-100' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/why-choose-us-img.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 ">
                            <div className="Why-should-right my-5 text-light">
                                <div className='text'>
                                    <p>Why should choose</p>
                                </div>
                                <h1 className='fw-bold my-3'>Why you should choose <br /> Zorvixa ?</h1>
                                <p className='my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                                <div className="row my-5">
                                    <div className="col-lg-4">
                                        <div className='list-left line-height-5'>
                                            <ul>
                                                <li>100% Safe Money</li>
                                                <li>Save your Money</li>
                                                <li>Fast Process</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="list-right ps-5 line-height-5">
                                            <ul>
                                                <li>Easy Process System</li>
                                                <li>Anytime Money Back</li>
                                                <li>Digital Insurance Policy</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='vedio'>
                                <div className="row">
                                    <div className="col-lg-6 overflow-hidden  ">
                                        <div className="vedio-section position-relative ">
                                            <img className='  '  src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/why-choose-us-video-img.jpg" alt="" />
                                            </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='vedio-content pt-5 text-light'>
                                        <img  className='50' src= "	https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/icon-support-team.svg" alt="" />
                                        <p className='pt-2 '>24/7 Support Team</p>
                                           <h6> +0123 456 789</h6>
                                             <h5>info@domain.com</h5>
                                             </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
