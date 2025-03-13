import React, { useState } from 'react'
import './body.css'

const Header = () => {
    const [toggleMenu,setTogglemenu]= useState(false)
  return (
    <header className=' sticky-top bg-dark fw-semibold'>
        <nav className=' navbar d-flex justify-content-around '>
            <div>
                <a href="" className=' navbar-brand text-white '>Port<span id='orange-color' >folio</span></a>
            </div>

            <div className=' d-block d-md-none'>
                <button onClick={()=>setTogglemenu(!toggleMenu)} type='button' className='btn text-white fs-3 p-1'><i class="bi bi-list"></i></button>
            </div>

            <div className=' d-none d-md-block'>
                <ul className='navbar-nav d-flex flex-row gap-5'>
                    <li className=' nav-item'><a href="#home" id='navlink' className='pb-0  nav-link ' >Home</a></li>
                    <li className=' nav-item'><a href="#about" id='navlink' className=' nav-link pb-0 '>About</a></li>
                    <li className=' nav-item'><a href="#eduction" id='navlink' className=' nav-link pb-0 '>Eduction</a></li>
                    <li className=' nav-item'><a href="#contact" id='navlink' className=' nav-link pb-0 '>Contact</a></li>
                </ul>
            </div>

        </nav>

        {/*--------- mobile toggle menu --------*/}

        {toggleMenu && <div className=' d-flex d-md-none justify-content-center pb-4'>
            <ul onClick={()=>setTogglemenu(!toggleMenu)} className='navbar-nav gap-3'>
                <li className=' nav-item '><a href="#home" id='navlink' className=' nav-link pb-0 text-center '>Home</a></li>
                <li className=' nav-item '><a href="#about" id='navlink' className=' nav-link pb-0 text-center'>About</a></li>
                <li className=' nav-item'><a href="#eduction" id='navlink' className=' nav-link pb-0 text-center'>Eduction</a></li>
                <li className=' nav-item '><a href="#contact" id='navlink' className=' nav-link pb-0 text-center'>Contact</a></li>
            </ul>
        </div>}

    </header>
  )
}

export default Header