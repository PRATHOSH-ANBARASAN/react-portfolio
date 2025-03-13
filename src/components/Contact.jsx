import React from 'react'

const Contact = () => {
  const config={
    email:'prathoshpratha6@gmail',
    emailLink:'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhbmHlgJXjWNCSVDJDspmlcJVTMGsGfTpbPxGXkMjfQkkxnSHNJdlsmqjhWNgCHkgwzrXw',

    mobile:'8056315609',

    address:'Thanjavur,Tamil Nadu,614905',
    addrLink:'https://maps.app.goo.gl/BWECMLE8DK1fvAD36',

    linkedin:'linkedin.com/in/prathosh-anbarasan',
    linkedinLink:'https://www.linkedin.com/in/prathosh-anbarasan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  }

  return (
    <section className='px-5 py-3 my-5' id='contact' >
        <h4 className='text-center'>Contact <span id='orange-color' >Me</span></h4>
        <p className='small text-center mt-3'>If you want to discuss more in detail,pleace contact me</p>
        <div className='row text-center mt-4'>
            <div class="col-12 col-md-6 fw-semibold ">
                <p >Email : <a  class=" text-decoration-none" href={config.emailLink} target="_blank">{config.email}</a></p>
                <p>Mobile No. : <a class="text-decoration-none" href="#contact" >{config.mobile}</a></p>
            </div>
            <div class="col-12 col-md-6 fw-semibold">
                <p>Address : <a class="text-decoration-none" href={config.addrLink} target="_blank">{config.address}</a></p>
                <p>Linkedin : <a class=" text-decoration-none" href={config.linkedinLink} target="_blank">{config.linkedin}</a></p>
            </div>
        </div>
    </section>
  )
}

export default Contact