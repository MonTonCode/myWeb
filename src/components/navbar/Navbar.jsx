import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Links from './Links';

export default function Navbar() {

  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    if ( !openMenu ) {
      const x = document.querySelectorAll('.dropdown')
      x.forEach((data)=>{
        data.classList.remove('open')
      })
    }

  },[openMenu])

  useEffect(()=>{
    window.addEventListener('click', handleMenu)
    return () => {
      window.removeEventListener('click', handleMenu)
    }
  })

  const handleMenu = (e) => {
    const openDropdown = e.target.nextSibling

    if (openDropdown) {
      if ( e.target.nextSibling.classList.contains('open') ) {
        e.target.nextSibling.classList.remove('open')
      } else {
        e.target.nextSibling.classList.add('open')
      }
    }
    // console.log(e.target.innerText);
    const forRemoveOpen = document.querySelectorAll('.mobile > li')
    let data = []
    forRemoveOpen.forEach((x)=>{
    })
  
  }
  

  return (
    <nav>
        <div id="nav-container">
            <div id="box-logo">
                <h1 className="logo">MonTonCode</h1>
            </div>

            <div id="box-navlinks">
              <ul className='pc'>
                <Links />
              </ul>

              <ul className={`mobile ${openMenu?'open':''}`}>
                <div id="box-search-mobile">
                  <input type="text" /><i className='bx bx-search-alt text-white text-2xl ml-1 cursor-pointer'></i>
                </div>
                <Links />
              </ul>
            </div>

            <div id="box-search-pc">
                <input type="text" /><i className='bx bx-search-alt text-white text-2xl ml-1 cursor-pointer'></i>
            </div>

            <div id="hamburger-menu" className={`${openMenu?'open':''}`} onClick={()=>setOpenMenu(!openMenu)}>
              <div>
                <i></i>
              </div>
            </div>
        </div>
    </nav>
  )
}
