import React from 'react'
import resumeImg from '../assets/resume-transparent.png'
import resumePdf from '../assets/Prathosh-Anbarasan-Resume.pdf'
const Resume = () => {
  return (
    <section className='px-5 py-3 my-5' id='bg' >
        <h4 className='text-center '>Resu<span id='orange-color' >me</span></h4>
        <div className='d-flex flex-column align-items-center flex-md-row justify-content-md-around mt-4'>
            <div>
                <img src={resumeImg} alt="" />
            </div>
            <div className='d-flex align-items-center fw-semibold pt-4 pt-md-0'>
                <p>You can view my resume  <button className='btn btn-dark py-1'> <a href={resumePdf} target="_blank" className="text-white text-decoration-none">View CV</a></button> </p>
            </div>
        </div>
    </section>
  )
}

export default Resume