"use client";
import Navbar from '../components_/navbar';
import NavbarAdmin from '../components_/navbar_admin';
import Sidebar from '../components_/sidebar';
import SidebarAdmin from '../components_/sidebar_admin';
import './profile.scss';
import Image from 'next/image';
import dzelila from '../../public/dzelila.png';
import tarik from '../../public/tarik.png';
import { MdModeEdit } from "react-icons/md";
import { useEffect, useState } from 'react';


export default function Profile() {
  const [edit, setEdit] = useState(true)
  const [alert, setAlert] = useState(false)

  const [sidebar, setSidebar] = useState(false)
  const sidebarHandler = () => {
    setSidebar(!sidebar)
  }

  const navHandler = () => {
    if(localStorage.getItem('mode') == 'student') {
      return <Navbar handler={sidebarHandler}/>
    } else if(localStorage.getItem('mode') == 'admin') {
      return <NavbarAdmin handler={sidebarHandler}/>
    }
  }

  const sideHandler = () => {
    if(localStorage.getItem('mode') == 'student') {
      return <Sidebar sidebarState={sidebar} handler={sidebarHandler}/>
    } else if(localStorage.getItem('mode') == 'admin') {
      return <SidebarAdmin sidebarState={sidebar} handler={sidebarHandler}/>
    }
  }

  const userInfo = [
    {
      first_name: 'Tarik',
      last_name: 'Maljanović',
      email: 'tarik.maljanovic@stu.ibu.edu.ba',
      courses: [
        'IT 207: Introduction to Web Programming',
        'IT 206: Introductin to Mobile Programming',
        'IT 204: Operating Systems',
        'FENMS 034: Data Structures & Algorithms',
        'FENMS 030: Human-Computer Interaction',
        'IBU 041: Educatinal Psychology'
      ]
    },
    {
      first_name: 'Dželila',
      last_name: 'Mehanović',
      email: 'dzelila.mehanovic@ibu.edu.ba',
      courses: [
        'IT 207: Introduction to Web Programming',
        'IBU 008: Programming I',
        'IBU 037: Programming II',
        'IT 203: Discrete Mathematics',
        'IT 202: Object Oriented Programming',
        'IT 334: DevOps Engineering on AWS cloud'
      ]
    }
  ]

  const [user, setUser] = useState(0)

  useEffect(() => {
    if(localStorage.getItem('mode') == 'student') {
      setUser(0)
    } else {
      setUser(1)
    }
  }, [])
  
  return (
    <>
      <div className={`container is-fluid p-0 ${sidebar ? 'active-sidebar' : ''}`}>
        {navHandler()}
        <section class="section is-large">
          <div className='info-row'>
            <div className='user'>
              <Image src={user == 0 ? tarik.src : dzelila.src} width={120} height={120} alt="dzely" className='profile-picture'></Image>
              <div className='user-info'>
                <p className='first_name'>{userInfo[user].first_name} {userInfo[user].last_name}</p>
                <p className='department'>Information Technologies</p>
              </div>
            </div>
            <button className='button is-rounded' onClick={() => window.location.replace('search')}>Back to Search Page</button>
          </div>
          <div className='cards-row'>
            <div className='card-column'>
              <div className='user-details info-card'>
                <div className='head'>
                  <p className='section-title'>User Details</p>
                  <MdModeEdit onClick={() => setEdit(false)}/>
                </div>
                <div className='section-body'>
                  <div className='section-element'>
                    <p className='element-name'>Email address</p>
                    <input className={`input is-rounded ${edit ? 'is-hidden' : ''}`} type='text' value={`${userInfo[user].email}`}></input>
                    <p className={`edit-text ${edit ? '' : 'is-hidden'}`}>{userInfo[user].email}<br/>(Visible to other course participants)</p>
                  </div>
                  <div className='section-element'>
                    <p className='element-name'>Timezone</p>
                    <input className={`input is-rounded ${edit ? 'is-hidden' : ''}`} type='text' value='Europe/Sarajevo'></input>
                    <p className={`edit-text ${edit ? '' : 'is-hidden'}`}>Europe/ Sarajevo</p>
                  </div>
                  <div className='section-element'>
                    <p className='element-name'>Country</p>
                    <input className={`input is-rounded ${edit ? 'is-hidden' : ''}`} type='text' value='Bosnia and Herzegovina'></input>
                    <p className={`edit-text ${edit ? '' : 'is-hidden'}`}>Bosnia and Herzegovina</p>
                  </div>
                  <div className='section-element'>
                    <p className='element-name'>City</p>
                    <input className={`input is-rounded ${edit ? 'is-hidden' : ''}`} type='text' value='Sarajevo'></input>
                    <p className={`edit-text ${edit ? '' : 'is-hidden'}`}>Sarajevo</p>
                  </div>
                  <button className={`button is-rounded ${edit ? 'is-hidden' : ''}`} onClick={() => {setEdit(true); setAlert(true); setTimeout(() => setAlert(false), 5000)}}>Save Changes</button>
                </div>
                
              </div>
              <div className='course-details info-card'>
                <div className='head'>
                    <p className='section-title'>Login Activity</p>
                  </div>
                  <div className='section-body'>
                    <div className='section-element'>
                      <div className='element-name'>First access to site</div>
                      <p className='element-text'>Tuesday, 28 September 2021, 22:14 (1 year 227 days)</p>
                    </div>
                    <div className='section-element'>
                      <p className='element-name'>Last access to site</p>
                      <p className='element-text'>Sunday, 14 May 2023, 18:56 (5 secs)</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className='card-column info-card'>
              <div className='login-activity info-card'>
                <div className='head'>
                  <p className='section-title'>Course Details</p>
                </div>
                <div className='section-body'>
                  <div className='section-element'>
                    <p className='element-name'>Course Profiles</p>
                    <p className='element-text' onClick={() => window.location.replace('course')}>{userInfo[user].courses[0]}</p>
                    <p className='element-text'>{userInfo[user].courses[1]}</p>
                    <p className='element-text'>{userInfo[user].courses[2]}</p>
                    <p className='element-text'>{userInfo[user].courses[3]}</p>
                    <p className='element-text'>{userInfo[user].courses[4]}</p>
                    <p className='element-text'>{userInfo[user].courses[5]}</p>
                  </div>
                </div>
              </div>
              <div className='reports info-card'>
                <div className='head'>
                  <p className='section-title'>Reports</p>
                </div>
                <div className='section-body'>
                  <p className='section-link'>Browser Sessions</p>
                  <p className='section-link'>Device Management</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {sideHandler()}
        <div className={`background ${sidebar ? '' : 'is-hidden'}`}></div>
      </div>
      <div className={`success ${alert ? '' : 'is-hidden'}`}>
        <p className='success-label'>Changes Saved</p>
        <p className='success-message'>Your changes have been saved.<br/>Refresh the page if you don't seem them right away!</p>
      </div>
    </>
  )
}