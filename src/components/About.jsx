import React from 'react'
import img from '../assets/img3.webp'
import './body.css'

const About = () => {
  const config={
    line1:'Hi, My name is Prathosh. I am a Frontend Developer. I built beautiful Websites with JavaScript, React.js and Bootstrap',
    line2:'I am proficient in Frontend skills like React.js, Bootstrap,CSS and many more',
    line3:'In programming skills I know Python '
  }
  return (
    <section className='bg px-5 py-3 mb-5' id='about' >
      <h4 className='text-center '>About<span id='orange-color'>Me</span></h4>
        <div className='row'>
          <div className='col-12 col-md-6 d-flex justify-content-center '>
            <img src={img} alt="" width='200' />
          </div>

          <div className='col-12 col-md-6 small fw-semibold mt-5 '>
            <p>{config.line1}</p>
            <p>{config.line2}</p>
            <p>{config.line3}</p>
          </div>  
        </div>
    </section>
  )
}

export default About