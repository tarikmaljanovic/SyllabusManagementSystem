"use client";
import './course.scss'
import Navbar from '../components_/navbar';
import NavbarAdmin from '../components_/navbar_admin';
import NavbarGuest from '../components_/navbar_guest';
import Sidebar from '../components_/sidebar';
import SidebarAdmin from '../components_/sidebar_admin2';
import SidebarGuest from '../components_/sidebar_guest'
import { FaUserCircle } from "react-icons/fa";
import dzeli from '../../public/dzelila.png';
import haris from '../../public/haris.png';
import amela from '../../public/amela.png';
import Image from 'next/image';
import { MdDescription } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { useState } from 'react';
import { MdModeEdit } from "react-icons/md";


export default function Course() {
  const [content, setContent] = useState(true)
  const [content2, setContent2] = useState(true)
  const [list, setList] = useState(true)
  const [list2, setList2] = useState(true)
  const [trigger1, setTrigger1] = useState(true)
  const [trigger2, setTrigger2] = useState(true)
  const [trigger3, setTrigger3] = useState(true)
  const [universal, setUniversal] = useState(false)
  const [current, setCurrent] = useState(3)
  const [edit, setEdit] = useState(false)
  const [alert, setAlert] = useState(false)

  const universalCard = index => {
    setCurrent(index)
    if(index == current) {
      setUniversal(false)
      setCurrent(3)
    } else {
      setUniversal(true)
    }
  }

  const [sidebar, setSidebar] = useState(false)
  const sidebarHandler = () => {
    setSidebar(!sidebar)
  }

  const editHandler = () => {
    setEdit(true)
  }

  const infoHandler = targetId => {
   (document.getElementById(targetId).classList.value).includes('is-hidden') ? document.getElementById(targetId).classList.value = 'more-info' : document.getElementById(targetId).classList.value = 'more-info is-hidden'
  }

  const sectionHandler = targetId => {
    (document.getElementById(targetId).classList.value).includes('is-hidden') ? document.getElementById(targetId).classList.value = 'text' : document.getElementById(targetId).classList.value = 'text is-hidden'
   }

   const listHandler = targetId => {
    (document.getElementById(targetId).classList.value).includes('is-hidden') ? document.getElementById(targetId).classList.value = 'list-body' : document.getElementById(targetId).classList.value = 'list-body is-hidden'
   }

   const navHandler = () => {
    if(localStorage.getItem('mode') == 'student') {
      return <Navbar handler={sidebarHandler}/>
    } else if(localStorage.getItem('mode') == 'admin') {
      return <NavbarAdmin handler={sidebarHandler}/>
    } else {
      return <NavbarGuest handler={sidebarHandler}/>
    }
  }

  const sideHandler = () => {
    if(localStorage.getItem('mode') == 'student') {
      return <Sidebar sidebarState={sidebar} handler={sidebarHandler}/>
    } else if(localStorage.getItem('mode') == 'admin') {
      return <SidebarAdmin sidebarState={sidebar} handler={sidebarHandler} editHandler={editHandler}/>
    } else {
      return <SidebarGuest sidebarState={sidebar} handler={sidebarHandler}/>
    }
  }

   const staffInfo = [
    {
      academic_rank: "Assistant Professor",
      email: "dzelila.mehanovic@ibu.edu.ba",
      linkedIn: "https://shorturl.at/cAGZ8",
      bio: "Dželila Mehanović is the assistant professor for numerous courses, such as Introdcution to Web Programming. She is also the deputy head of the Information Technologies department"
    },
    {
      academic_rank: "Teaching Assistant",
      email: "haris.cehic@ibu.edu.ba",
      linkedIn: "https://shorturl.at/eQU26",
      bio: "Haris Čehić is a part-time teaching assistant for the course 'Introduction to Web Programming'. He is also a full-time developer for the company 'Softhouse'."
    },
    {
    academic_rank: "Teaching Assistant",
    email: "amela.vatres@ibu.edu.ba",
    linkedIn: "https://shorturl.at/ABNR9",
    bio: "Amela Vatreš is the theaching assistant for courses such as Programming I, System Analysis and Design, Human-Computer Interaction, and more. She is also the coordinator for Senior Design Projects."
    },
    {

    }
   ]
  return (
    <>
      <div className={`container is-fluid p-0 ${sidebar ? 'active-sidebar' : ''}`}>
      {navHandler()}
        <section class="section px-0">
        <div className='notification p-2 course-title-mobile'>
          IT 207: Introdcution to Web Programming
          </div>
          <div className='staff-section'>
            <div className='head'>
              <FaUserCircle/>
              <h2 className='head-label'>Course Staff</h2>
            </div>
            <div className='staff-section-body'>
              <div className='member'>
                <div className='general'>
                  <Image src={dzeli.src} width={90} height={90} alt='dzelila'></Image>
                  <div className='general-info'>
                    <div className='upper'>
                      <p className='rank'>Professor</p>
                      <p className='name'>Dželila Mehanović</p>
                    </div>
                    <button className='button is-rounded' onClick={() => {infoHandler('dzelila'); setTrigger1(!trigger1); universalCard(0)}}>{trigger1 ? 'More Information' : 'Less Information'}</button>
                  </div>
                </div>
                <div className='more-info is-hidden' id='dzelila'>
                  <p className='info-row'><span className='info-label'>Academic Rank: </span><span className='info-text'>Assistant Professor</span></p>
                  <p className='info-row'><span className='info-label'>Email: </span><span className='info-text'>dzelila.mehanovic@ibu.edu.ba</span></p>
                  <p className='info-row'><span className='info-label'>LinkedIn: </span><a href='https://shorturl.at/cAGZ8' className='info-text'>https://shorturl.at/cAGZ8</a></p>
                  <p className='info-row'><span className='info-label'>Short Bio: </span><span className='info-text'>Dželila Mehanović is the assistant professor for numerous courses, such as Introdcution to Web Programming. She is also the deputy head of the Information Technologies department.</span></p>
                </div>
              </div>
              <div className='member'>
                <div className='general'>
                  <Image src={haris.src} width={90} height={90} alt='dzelila'></Image>
                  <div className='general-info'>
                    <div className='upper'>
                      <p className='rank'>Assistant</p>
                      <p className='name'>Haris Čehić</p>
                    </div>
                    <button className='button is-rounded' onClick={() => {infoHandler('haris'); setTrigger2(!trigger2); universalCard(1)}}>{trigger2 ? 'More Information' : 'Less Information'}</button>
                  </div>
                </div>
                <div className='more-info is-hidden' id='haris'>
                  <p className='info-row'><span className='info-label'>Academic Rank: </span><span className='info-text'>Assistant Professor</span></p>
                  <p className='info-row'><span className='info-label'>Email: </span><span className='info-text'>haris.cehic@ibu.edu.ba</span></p>
                  <p className='info-row'><span className='info-label'>LinkedIn: </span><a href='https://shorturl.at/eQU26' className='info-text'>https://shorturl.at/eQU26</a></p>
                  <p className='info-row'><span className='info-label'>Short Bio: </span><span className='info-text'>Haris Čehić is a part-time teaching assistant for the course 'Introduction to Web Programming'. He is also a full-time developer for the company 'Softhouse'.</span></p>
                </div>
              </div>
              <div className='member'>
                <div className='general'>
                  <Image src={amela.src} width={90} height={90} alt='dzelila'></Image>
                  <div className='general-info'>
                    <div className='upper'>
                      <p className='rank'>Assistant</p>
                      <p className='name'>Amela Vatreš</p>
                    </div>
                    <button className='button is-rounded' onClick={() => {infoHandler('amela'); setTrigger3(!trigger3); universalCard(2)}}>{trigger3 ? 'More Information' : 'Less Information'}</button>
                  </div>
                </div>
                <div className='more-info is-hidden' id='amela'>
                  <p className='info-row'><span className='info-label'>Academic Rank: </span><span className='info-text'>Teaching Assistant</span></p>
                  <p className='info-row'><span className='info-label'>Email: </span><span className='info-text'>amela.vatres@ibu.edu.ba</span></p>
                  <p className='info-row'><span className='info-label'>LinkedIn: </span><a href='https://shorturl.at/ABNR9' className='info-text'>https://shorturl.at/ABNR9</a></p>
                  <p className='info-row'><span className='info-label'>Short Bio: </span><span className='info-text'>Amela Vatreš is the theaching assistant for courses such as Programming I, System Analysis and Design, Human-Computer Interaction, and more. She is also the coordinator for Senior Design Projects.</span></p>
                </div>
              </div>
              <div className='rating'>
                <p className='rating-label'>Course Difficulty Rating</p>
                <Rater total={5} rating={4}></Rater>
              </div>
            </div>
          </div>
          <div className={`more-info-universal ${universal ? '' : 'is-hidden'}`}>
            <p className='info-row'><span className='info-label'>Academic Rank: </span><span className='info-text'>{(staffInfo[current]).academic_rank}</span></p>
            <p className='info-row'><span className='info-label'>Email: </span><span className='info-text'>{(staffInfo[current]).email}</span></p>
            <p className='info-row'><span className='info-label'>LinkedIn: </span><a href='https://shorturl.at/ABNR9' className='info-text'>{(staffInfo[current]).linkedIn}</a></p>
            <p className='info-row'><span className='info-label'>Short Bio: </span><span className='info-text'>{(staffInfo[current]).bio}</span></p>
          </div>
          <div className='rating'>
            <p className='rating-label'>Course Difficulty Rating</p>
            <Rater total={5} rating={4}></Rater>
          </div>
          <div className='course-section'>
            <div className='inner'>
              <div className='notification course-title'>
                IT 207: Introdcution to Web Programming 
                <MdModeEdit onClick={() => setEdit(true)}/>
                </div>
              <div className='course-cards'>
                <div className='info-card'>
                  <div className='slice p-0 left'>Level:</div>
                  <div className='slice p-0 right'>Undergraduate</div>
                </div>
                <div className='info-card'>
                  <div className='slice p-0 left'>Year:</div>
                  <div className='slice p-0 right'>II</div>
                </div>
                <div className='info-card'>
                  <div className='slice p-0 left'>Semester:</div>
                  <div className='slice p-0 right'>IV</div>
                </div>
                <div className='info-card'>
                  <div className='slice p-0 left'>ECTS:</div>
                  <div className='slice p-0 right'>5.0</div>
                </div>
                <div className='info-card'>
                  <div className='slice p-0 left'>Status:</div>
                  <div className='slice p-0 right'>Mandatory</div>
                </div>
                <div className='info-card'>
                  <div className='slice p-0 left'>Hours/Week:</div>
                  <div className='slice p-0 right'>2+2</div>
                </div>
              </div>
              <div className='course-content'>
                <div className='head'>
                  <div className='left'>
                    <span className='left-label'>Course Description</span>
                    <MdDescription/>
                  </div>
                  <div className='right'>
                    <RiArrowDownSLine className={`${content ? '' : 'arrow-up'}`} onClick={() => {sectionHandler('description'); setContent(!content)}}/>
                  </div>
                </div>
                <p className={`text ${edit ? 'is-hidden' : ''}`} id='description'>
                  Introduction to Web Programming is a beginners’ course in programming using  JavaScript, together with some HTML and CSS for frontend design and using PHP with framework for backend. It follows a problem-based approach which requires you
                  to design and create a website of ever-increasing sophistication as the course
                  progresses while creating design documentation, reflecting on the process, and (optionally) sharing and communicating with others on the course. The output of your
                  work will be presented as a publicly accessible website, and you will submit a portfolio.
                </p>
                <textarea className={`${edit ? '' : 'is-hidden'}`}>
                Introduction to Web Programming is a beginners’ course in programming using  JavaScript, together with some HTML and CSS for frontend design and using PHP with framework for backend. It follows a problem-based approach which requires you
                  to design and create a website of ever-increasing sophistication as the course
                  progresses while creating design documentation, reflecting on the process, and (optionally) sharing and communicating with others on the course. The output of your
                  work will be presented as a publicly accessible website, and you will submit a portfolio.
                </textarea>
              </div>
              <div className='course-content'>
                <div className='head'>
                  <div className='left'>
                    <span className='left-label'>Course Objective</span>
                    <BsFillCheckCircleFill/>
                  </div>
                  <div className='right'>
                    <RiArrowDownSLine className={`${content2 ? '' : 'arrow-up'}`} onClick={() => {sectionHandler('content'); setContent2(!content2)}}/>
                  </div>
                </div>
                <p className={`text ${edit ? 'is-hidden' : ''}`} id='content'>
                  To produce dynamic, animated, interactive and database driven web sites to prepare
                  students for internet marketing and web site administration. Students will learn
                  different languages like HTML5, CSS, JavaScript and PHP (Server-Side
                  Programming; Students will work with different technologies and software
                  components like web browsers, web servers (Apache) and database connectivity.
                </p>
                <textarea className={`${edit ? '' : 'is-hidden'}`}>
                To produce dynamic, animated, interactive and database driven web sites to prepare
                  students for internet marketing and web site administration. Students will learn
                  different languages like HTML5, CSS, JavaScript and PHP (Server-Side
                  Programming; Students will work with different technologies and software
                  components like web browsers, web servers (Apache) and database connectivity.
                </textarea>
              </div>
              <div className='course-list'>
                <div className={`head ${list ? '' : 'is-up'}`}>
                  <div className='left'>
                    <span className='left-label'>Course Objective</span>
                    <MdLibraryBooks/>
                  </div>
                  <div className='right'>
                    <RiArrowDownSLine className={`${list ? '' : 'arrow-up'}`} onClick={() => {listHandler('list1'); setList(!list)}}/>
                  </div>
                </div>
                <div className='list-body' id='list1'>
                  <p className='list-item'><span className='item-label'>Week 1: </span><span className={`text-item ${edit ? 'is-hidden' : '' }`}> Internet, organization and standards</span><span className={`item-input ${edit ? '' : 'is-hidden' }`}><input type='text' className='input is-rounded' value='Internet, organization and standards'></input></span></p>
                  <p className='list-item'><span className='item-label'>Week 2: </span><span className={`text-item ${edit ? 'is-hidden' : '' }`}> HTML Basics</span><span className={`item-input ${edit ? '' : 'is-hidden' }`}><input type='text' className='input is-rounded' value='HTML Basics'></input></span></p>
                  <p className='list-item'><span className='item-label'>Week 3: </span><span className={`text-item ${edit ? 'is-hidden' : '' }`}> CSS and Bootstrap</span><span className={`item-input ${edit ? '' : 'is-hidden' }`}><input type='text' className='input is-rounded' value='CSS and Bootstrap'></input></span></p>
                  <p className='list-item'><span className='item-label'>Week 4: </span><span className={`text-item ${edit ? 'is-hidden' : '' }`}> JavaScript</span><span className={`item-input ${edit ? '' : 'is-hidden' }`}><input type='text' className='input is-rounded' value='JavaScript'></input></span></p>
                  <p className='list-item'><span className='item-label'>Week 5: </span><span className={`text-item ${edit ? 'is-hidden' : '' }`}> jQuery</span><span className={`item-input ${edit ? '' : 'is-hidden' }`}><input type='text' className='input is-rounded' value='jQuery'></input></span></p>
                  <p className='list-item'><span className='item-label'>Week 6: </span><span className={`text-item ${edit ? 'is-hidden' : '' }`}> Introduction to PHP</span><span className={`item-input ${edit ? '' : 'is-hidden' }`}><input type='text' className='input is-rounded' value='Introduction to PHP'></input></span></p>
                  <p className='list-item'><span className='item-label'>Week 7: </span><span className={`text-item ${edit ? 'is-hidden' : '' }`}> PHP Rest API, Accessing Database Using PDO</span><span className={`item-input ${edit ? '' : 'is-hidden' }`}><input type='text' className='input is-rounded' value='PHP Rest API, Accessing Database Using PDO'></input></span></p>
                  <p className='list-item'><span className='item-label'>Week 8: </span><span className='item-label'> Midterm Week</span></p>
                  <p className='list-item'><span className='item-label'>Week 9: </span><span className={`text-item ${edit ? 'is-hidden' : '' }`}> Single Page Application</span><span className={`item-input ${edit ? '' : 'is-hidden' }`}><input type='text' className='input is-rounded' value='Single Page Application'></input></span></p>
                  <p className='list-item'><span className='item-label'>Week 10: </span><span className={`text-item ${edit ? 'is-hidden' : '' }`}> Forms and Validations</span><span className={`item-input ${edit ? '' : 'is-hidden' }`}><input type='text' className='input is-rounded' value='Forms and Validations'></input></span></p>
                  <p className='list-item'><span className='item-label'>Week 11: </span><span className={`text-item ${edit ? 'is-hidden' : '' }`}> AJAX, XML and JSON</span><span className={`item-input ${edit ? '' : 'is-hidden' }`}><input type='text' className='input is-rounded' value='AJAX, XML and JSON'></input></span></p>
                  <p className='list-item'><span className='item-label'>Week 12: </span><span className={`text-item ${edit ? 'is-hidden' : '' }`}> Cookies and Local Storage</span><span className={`item-input ${edit ? '' : 'is-hidden' }`}><input type='text' className='input is-rounded' value='Cookies and Local Storage'></input></span></p>
                  <p className='list-item'><span className='item-label'>Week 13: </span><span className={`text-item ${edit ? 'is-hidden' : '' }`}> Authentication and Authorization (JWT) and Middleware</span><span className={`item-input ${edit ? '' : 'is-hidden' }`}><input type='text' className='input is-rounded' value='Authentication and Authorization (JWT) and Middleware'></input></span></p>
                  <p className='list-item'><span className='item-label'>Week 14: </span><span className={`text-item ${edit ? 'is-hidden' : '' }`}> OpenAPI 3.0 and Swagger</span><span className={`item-input ${edit ? '' : 'is-hidden' }`}><input type='text' className='input is-rounded' value='OpenAPI 3.0 and Swagger'></input></span></p>
                  <p className='list-item'><span className='item-label'>Week 15: </span><span className='item-label'> Project Presentation</span></p>
                </div>
              </div>
              <div className='course-list'>
                <div className={`head ${list2 ? '' : 'is-up'}`}>
                  <div className='left'>
                    <span className='left-label'>Assesment Methods</span>
                    <BsStarFill/>
                  </div>
                  <div className='right'>
                    <RiArrowDownSLine className={`${list2 ? '' : 'arrow-up'}`} onClick={() => {listHandler('list2'); setList2(!list2)}}/>
                  </div>
                </div>
                <div className='list-body' id='list2'>
                  <p className='list-item'><span className='item-label'>Quiz I: </span><span className='item-text'>5%</span></p>
                  <p className='list-item'><span className='item-label'>Midterm Exam: </span><span className='item-text'>30%</span></p>
                  <p className='list-item'><span className='item-label'>Quiz II: </span><span className='item-text'>5%</span></p>
                  <p className='list-item'><span className='item-label'>Project: </span><span className='item-text'>30%</span></p>
                  <p className='list-item'><span className='item-label'>Final Exam: </span><span className='item-text'>30%</span></p>
                </div>
              </div>
              <button className={`button is-rounded save-button ${edit ? '' : 'is-hidden'}`} onClick={() =>{ setEdit(false); setAlert(true); setTimeout(() => setAlert(false), 5000)}}>Save Changes</button>
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