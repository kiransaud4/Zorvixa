import React from 'react'


export default function AboutUs() {
  return (
    <>
      <section className='About-Us mb-4'>
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className='About-Us-content '>
                <h1 className='Bold'>About Us</h1>
                <h5>Home/About Us</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Award-winning'>
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-6">
              <div className="Award-winning-left position-relative">
                <img className='w-100 rounded-circle' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/about-info-video-img.jpg" alt="" />
                <div className='small-box'><span className='position-absolute'><i class="bi bi-play-circle-fill"></i></span></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="Award-winning-right mx-3 my-4">
                <div className='p-2 '>Welcome to Zorvixa</div>
                <h2 className='fw-bold my-4'>Welcome to Zorvixa Award Winning Insurance Company Over 25+ Years.</h2>
                <h6 className=' fw-bold '> <span className='text-body-secondary '> 01.</span>Best Insurance Agency.</h6>
                <hr />
                <h6 className=' fw-bold'> <span className='text-body-secondary '> 02. </span> Fast & Easy Process</h6>
                <hr />
                <h6 className=' fw-bold'> <span className='text-body-secondary '> 03. </span>Trusted & Experience Insurance</h6>
                <hr />
                <h6 className=' fw-bold'> <span className='text-body-secondary '> 04. </span>Quality And Literacy Of Work</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Our-approach my-5'>
        <div className="Our-approach-tittle text-center py-4">
          <span className='px-4 py-1'>Our approach</span>
          <h2 className='fw-bold py-3 text-light'>Revolutionize Your Tour Business And Life Goals</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-4 rounded">
                <img src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/our-vision-img.jpg" alt="" />
                <div className='circle'><img className='p-3' src="	https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/icon-mission.svg" alt="" /></div>
                <div className="card-body my-4">
                  <h5 className="card-title fw-bold text-center">Our Vesion </h5>
                  <p className="card-text ">Adipiscing vitae proin sagittis nisl. Mauris commodo quis imperdiet massa tincidunt. Tellus integer feugiat scelerisque varius. Purus sit amet luctus venenatis. Pretium vulputate sapien nec sagittis. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-4 rounded position-relative">
                <img className='w-100' src="https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/our-vision-img.jpg" alt="" />
                <div className='circle'><img className='p-2' src="	https://demo.awaikenthemes.com/html-preview/zorvixa/html/images/icon-vision.svg" alt="" /></div>
                <div className="card-body my-4">
                  <h5 className="card-title fw-bold text-center">Our Vesion </h5>
                  <p className="card-text ">Adipiscing vitae proin sagittis nisl. Mauris commodo quis imperdiet massa tincidunt. Tellus integer feugiat scelerisque varius. Purus sit amet luctus venenatis. Pretium vulputate sapien nec sagittis. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
