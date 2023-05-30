import './navbar.scss';
import Image from 'next/image';
import DLv2 from '../../public/desktop-logo-v2.png';
import MLv1 from '../../public/mobile-logo-v1.png';
import UserIcon from '../../public/UserIcon.png';
import { useState } from 'react';
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { IoSearchSharp } from "react-icons/io5";
import { RxTextAlignJustify } from "react-icons/rx";
import { BsPersonFillAdd } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";


export default function Navbar(handler) {
  const [dropdown, setDropdown] = useState(false)

  const sidebarHandler = () => {
    handler.handler()
  }
  
  return (
    <nav className="navbar">
      <div className='navigation'>
        <Image src={DLv2.src} width={400} height={600} className='desktop-logo'></Image>
        <RxTextAlignJustify className='hamburger-menu' onClick={sidebarHandler}/>
        <div className='right-side desktop'>
            <div className={`dropdown ${dropdown ? 'is-active' : ''}`}>
              <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                  <div className='inner'>
                    <div className="dropdown-item">
                      <FiLogIn/>
                      <p className='dropdown-item-label'>Login</p>
                    </div>
                    <div className="dropdown-item">
                      <BsPersonFillAdd/>
                      <p>Create Account</p>
                    </div>
                    <div className="dropdown-item">
                      <IoSearchSharp/>
                      <p>Search Page</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <h2 className='user-name' onClick={() => setDropdown(!dropdown)}>Guest Mode</h2>
          <Image src={UserIcon.src} width={60} height={0} className='user-icon' onClick={() => setDropdown(!dropdown)}></Image>
        </div>
        <div className='right-side mobile'>
          <Image src={MLv1} width={100} height={200} className='mobile-logo'></Image>
        </div>
      </div>
    </nav>
  )
}