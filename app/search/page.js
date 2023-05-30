"use client";
import Navbar from '../components_/navbar';
import { IoSearchSharp } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import Sidebar from '../components_/sidebar';
import './search.scss';

export default function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [dropdown, setDropdown] = useState('')
  const [academicYear, setAcademicYear] = useState('')
  const [year, setYear] = useState('')
  const [list, setList] = useState(false)
  const containerRef = useRef(null)
  const [sidebar, setSidebar] = useState(false)
 
  const sidebarHandler = () => {
    setSidebar(!sidebar)
  }

  const valueCheck = event => {
    setSearchValue(event.target.value)
  }

  const dropdownHandler = selectedDropdown => {
    selectedDropdown === dropdown ? setDropdown('') : setDropdown(selectedDropdown)
  }

  useEffect(() => {
    containerRef.current.scrollIntoView({behavior: "smooth"})
  }, [list == true])

 

  return (
    <>
      <div className={`container is-fluid p-0 ${sidebar ? 'active-sidebar' : ''}`}>
        <Navbar handler={sidebarHandler}/>
        <section className="section is-medium p-0">
          <form className='course-search'>
            <label className={`search-label ${searchValue ? '' : 'is-hidden' }`}>Course Search:</label>
            <div className="control has-icons-left">
              <input className="input is-rounded mobile-search" type="search" placeholder="Search for a Course:" onChange={valueCheck}/>
              <input className="input is-rounded desktop-search" type="search" placeholder="Search for a Course: (ex. IT 204 Operating Systems)" onChange={valueCheck}/>
              <span className="icon is-small is-left">
                <IoSearchSharp/>
              </span>
            </div>
          </form>
          <form className='semester-search'>
            <h2 className='semester-search-label'>Get Semester Course List:</h2>
            <div className='form-section'>
              <div className={`dropdown ${dropdown === 'AY' ? 'is-active' : ''}`}>
                <div className="dropdown-trigger" onClick={() => dropdownHandler('AY')}>
                  <label className='select-label'>Academic Year:</label><br/>
                  <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={(e) =>{e.preventDefault()}}>
                    <span>{academicYear ? academicYear : 'Academic Year'}</span>
                    <span className="icon is-small">
                      <RiArrowDownSLine/>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="academic-year-select" role="menu">
                  <div className="dropdown-content p-0">
                    <div className={`dropdown-item ${academicYear === '2022/23' ? 'selected' : ''}`} onClick={() => {setAcademicYear('2022/23'), dropdownHandler('AY')}}>
                      <p className='select-option'>2022/23</p>
                    </div>
                    <div className={`dropdown-item ${academicYear === '2021/22' ? 'selected' : ''}`} onClick={() => {setAcademicYear('2021/22'); dropdownHandler('AY')}}>
                      <p className='select-option'>2021/22</p>
                    </div>
                    <div className={`dropdown-item ${academicYear === '2020/21' ? 'selected' : ''}`} onClick={() => {setAcademicYear('2020/21'); dropdownHandler('AY')}}>
                      <p className='select-option'>2020/21</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`dropdown ${dropdown === 'Y' ? 'is-active' : ''}`}>
                <div className="dropdown-trigger" onClick={() => dropdownHandler('Y')}>
                  <label className="select-label">Year:</label><br/>
                  <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2" onClick={(e) =>{e.preventDefault()}}>
                    <span>{year ? year : 'Year'}</span>
                    <span className="icon is-small">
                      <RiArrowDownSLine/>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="year-select" role="menu">
                  <div className="dropdown-content p-0">
                    <div className={`dropdown-item ${year === '1st' ? 'selected' : ''}`} onClick={() => {setYear('1st'); dropdownHandler('Y')}}>
                      <p className='select-option'>1st</p>
                    </div>
                    <div className={`dropdown-item ${year=== '2nd' ? 'selected' : ''}`} onClick={() => {setYear('2nd'); dropdownHandler('Y')}}>
                      <p className='select-option'>2nd</p>
                    </div>
                    <div className={`dropdown-item ${year === '3rd' ? 'selected' : ''}`} onClick={() => {setYear('3rd'); dropdownHandler('Y')}}>
                      <p className='select-option'>3rd</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="control semester-picker">
                <label className="radio"/>
                <div className='semester-option'>
                  <p>Fall Semester:</p>
                  <input type="radio" name="answer"/>
                </div>
                <div className='semester-option'>
                  <label className="radio"/>
                  <p>Spring Semester:</p>
                  <input type="radio" name="answer"/>
                </div>
              </div>
              <div className="control semester-picker mobile">
                <div className='left'>
                  <div className='semester-option buttons'>
                    <input type="radio" name="answer"/>
                    <input type="radio" name="answer"/>
                  </div>
                </div>
                <div className='right'>
                  <div className='semester-option labels'>
                    <label className="radio"/>
                    <p>Fall Semester:</p>
                    <label className="radio"/>
                    <p>Spring Semester:</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
        <div className='semester-table'>
          <div className='rows semester-list'>
            <div className='row semester-info'>
              <p className='semester-info-left'>2022/2023: Spring Semester</p>
              <p className='semester-info-right'>Year: 2</p>
            </div>
            <div className='course-list'>
              <div className='row course-row'> 
                <p className='course-info'>IT 207: Introduction to Web Programming</p>
                <p className='ects'>5.0 ECTS</p>
              </div>
              <div className='row course-row'>
                <p className='course-info'>IT 206: Introduction to Mobile Programming</p>
                <p className='ects'>5.0 ECTS</p>
              </div>
              <div className='row course-row'>
                <p className='course-info'>IT 204: Operating Systems</p>
                <p className='ects'>5.0 ECTS</p>
              </div>
              <div className='row course-row'>
                <p className='course-info'>FENMS 034: Data Structures & Algorithms</p>
                <p className='ects'>5.0 ECTS</p>
              </div>
              <div className='row course-row'>
                <p className='course-info'>FENMS 030: Human-Computer Interaction</p>
                <p className='ects'>5.0 ECTS</p>
              </div>
              <div className='row course-row' onClick={() => setList(true)}>
                <p className='course-info'>{list ? 'IBU 041: Educational Psychology' : 'Elective Courses...'}</p>
                <p className='ects'>{list ? '5.0 ECTS' : ''}</p>
              </div>
              <div className={`row course-row ${list ? '' : 'is-hidden'}`}>
                <p className='course-info'>IBU 040: Advanced Writing</p>
                <p className='ects'>5.0 ECTS</p>
              </div>
              <div className={`row course-row ${list ? '' : 'is-hidden'}`}>
                <p className='course-info'>IBU 039: Leadership</p>
                <p className='ects'>5.0 ECTS</p>
              </div>
              <div className={`row course-row ${list ? '' : 'is-hidden'}`} onClick={() => setList(false)} ref={containerRef}>
                <p className='course-info'>Hide Elective Courses...</p>
                <p className='ects'></p>
              </div>
            </div>
          </div>
        </div>
        <Sidebar sidebarState={sidebar} handler={sidebarHandler}/>
        <div className={`background ${sidebar ? '' : 'is-hidden'}`}></div>
      </div>
    </>
  )
}