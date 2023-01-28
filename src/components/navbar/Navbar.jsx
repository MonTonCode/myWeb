import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Links from './Links';

export default function Navbar() {
  useEffect(() => {
    const hamburger = document.querySelector('#hamburger-menu'),
      mobileMenu = document.querySelector('#nav-container .mobile'),
      forRemoveOpen = document.querySelectorAll('#nav-container .mobile .dropdown')

    function hamburgerControl(e) {
      if ( hamburger.classList.contains('open') ) {
        hamburger.classList.remove('open')
        mobileMenu.classList.remove('open')
        forRemoveOpen.forEach((x)=>{
          x.classList.remove('open')
        })
      } else {
        hamburger.classList.add('open')
        mobileMenu.classList.add('open')
      }
    }

    function linkHendle(e) {
      const openDropdown = e.target.nextSibling

      if ( e.target.localName === 'a' ) {
        hamburger.classList.remove('open')
        mobileMenu.classList.remove('open')
        forRemoveOpen.forEach((x)=>{
          x.classList.remove('open')
        })
      }

      if (openDropdown) {
        if ( e.target.nextSibling.classList.contains('open') ) {
          e.target.nextSibling.classList.remove('open')
        } else {
          e.target.nextSibling.classList.add('open')
        }
      }

    }

    hamburger.addEventListener('click', hamburgerControl)  
    document.addEventListener('click', linkHendle)
    return () => {
      hamburger.removeEventListener('click', hamburgerControl)
      document.removeEventListener('click', linkHendle)
    }
  }, [])

  
  
  return (
    <nav>
        <div id="nav-container">
            <div id="box-logo">
                <Link to={"/"}>
                  <h1 className="logo">MonTonCode</h1>
                </Link>
            </div>

            <div id="box-navlinks">
              <ul className='pc'>
                <Links />
              </ul>

              <ul className={`mobile`}>
                <div id="box-search-mobile">
                  <input type="text" /><i className='bx bx-search-alt text-white text-2xl ml-1 cursor-pointer'></i>
                </div>
                <Links />
              </ul>
            </div>

            <div id="box-search-pc">
                <input type="text" /><i className='bx bx-search-alt text-white text-2xl ml-1 cursor-pointer'></i>
            </div>

            <div id="hamburger-menu">
              <div>
                <i></i>
              </div>
            </div>
        </div>
    </nav>
  )
}
