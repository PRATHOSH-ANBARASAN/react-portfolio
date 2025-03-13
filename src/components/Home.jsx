import React from 'react'
import profileImg from '../assets/passport-photo.jpeg'
import './body.css'

const Home = () => {
    const config={
        name:'Prathosh',
        role:'a Frontend Developer',

        githubLink:'https://github.com/PRATHOSH-ANBARASAN',
        linkedinLink:'https://www.linkedin.com/in/prathosh-anbarasan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagramLink:'https://www.instagram.com/pratha_prathosh_?igsh=MXMzcGxtOXk3YjRsdg=='
    }
  return (
    <section style={{height:'100vh'}} className='mx-5 d-flex align-items-center ' id='home'>
        <div className='row gap-5 gap-md-0'>

            <div className='col-12 col-md-6 '>
                <h3>Hi,<br/>I'm <span id='orange-color'>{config.name}</span></h3>
                <h3>{config.role}</h3>
                <p className='mt-4 small'>As a dedicated <span className=' fw-semibold'> Computer Science and Engineering</span> student, I aim to leverage my technical knowledge and
                    problem-solving skills to contribute to innovative projects, collaborate with diverse teams, and
                    continuously adapt to the ever-evolving technology landscape, while making a meaningful impact on the
                    world
                </p>
                
                <ul className=' list-unstyled d-flex gap-5 align-items-center'>
                    <li className=' fs-5' ><a href={config.githubLink} target='_blank' id='socialIcon' ><i class="bi bi-github"></i></a></li> 
                    <li className=' fs-5'><a href={config.linkedinLink} target='_blank' id='socialIcon'><i class="bi bi-linkedin"></i></a></li>
                    <li className=' fs-5'><a href={config.instagramLink} target='_blank' id='socialIcon'><i class="bi bi-instagram"></i></a></li> 
                </ul>

                <button type="button" id='bg-orange' className='btn mx-5 my-4'>Hire me</button>
            
            </div>

            <div className='col-12 col-md-6 d-flex justify-content-center'>
                <div className=''>
                    <img src={profileImg} alt="" />
                </div>
            </div>

            

        </div>
    </section>
  )
}

export default Home