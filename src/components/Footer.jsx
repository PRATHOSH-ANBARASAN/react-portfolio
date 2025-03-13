import React from 'react'

const Footer = () => {
  return (
    <section className=' bg-dark text-white px-5 py-3 small fw-semibold' >
        <div className='row'>
            <ul className=' col-12 col-md-6 list-unstyled d-flex justify-content-center gap-3'>
                <li><a href="#home" class="text-white text-decoration-none ">Home</a> </li>
                <li><a href="#about" class="text-white text-decoration-none ">About</a> </li>
                <li><a href="#eduction" class="text-white text-decoration-none ">Eduction</a> </li>
                <li><a href="#contact" class="text-white text-decoration-none ">Contact</a> </li>
            </ul>
        
            <div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
                <p >2024 @copyright make the portfolio let know container for the footer in end</p>
            </div>
        </div>
    </section>
  )
}

export default Footer