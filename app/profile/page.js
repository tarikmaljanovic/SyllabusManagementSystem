"use client";
import Navbar from '../components_/navbar_admin';
import Sidebar from '../components_/sidebar_admin';
import './profile.scss';
import Image from 'next/image';
import dzelila from '../../public/dzelila.png'
import { MdModeEdit } from "react-icons/md";
import { useState } from 'react';


export default function Profile() {
  const [sidebar, setSidebar] = useState(false)
  const sidebarHandler = () => {
    setSidebar(!sidebar)
  }
  
  return (
    <>
      <div className={`container is-fluid p-0 ${sidebar ? 'active-sidebar' : ''}`}>
        <Navbar handler={sidebarHandler}/>
        <section class="section is-large">
          <div className='info-row'>
            <div className='user'>
              <Image src={dzelila.src} width={120} height={120} alt="dzely" className='profile-picture'></Image>
              <div className='user-info'>
                <p className='first_name'>Dželila Mehanović</p>
                <p className='department'>Information Technologies</p>
              </div>
            </div>
            <button className='button is-rounded'>Back to Search Page</button>
          </div>
          <div className='cards-row'>
            <div className='card-column'>
              <div className='user-details info-card'>
                <div className='head'>
                  <p className='section-title'>User Details</p>
                  <MdModeEdit/>
                </div>
                <div className='section-body'>
                  <div className='section-element'>
                    <p className='element-name'>Email address</p>
                    <p className='element-text'>dzelila.mehanovic@ibu.edu.ba<br/>(Visible to other course participants)</p>
                  </div>
                  <div className='section-element'>
                    <p className='element-name'>Timezone</p>
                    <p className='element-text'>Europe/ Sarajevo</p>
                  </div>
                  <div className='section-element'>
                    <p className='element-name'>Country</p>
                    <p className='element-text'>Bosnia and Herzegovina</p>
                  </div>
                  <div className='section-element'>
                    <p className='element-name'>City</p>
                    <p className='element-text'>Sarajevo</p>
                  </div>
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
                    <p className='element-text'>IT 203: Discrete Mathematics</p>
                    <p className='element-text'>IBU 008: Programming I</p>
                    <p className='element-text'>IBU 037: Programming II</p>
                    <p className='element-text'>IT 207: Introduction to Web Programming</p>
                    <p className='element-text'>IT 202: Object Oriented Programming</p>
                    <p className='element-text'>IT 334: DevOps Engineering on AWS cloud</p>
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
        <Sidebar sidebarState={sidebar} handler={sidebarHandler}/>
        <div className={`background ${sidebar ? '' : 'is-hidden'}`}></div>
      </div>
    </>
  )
}