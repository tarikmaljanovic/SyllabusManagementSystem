"use client";
import './landing.scss';
import Image from 'next/image';
import DLv1 from '../public/desktop-logo-v1.png';
import MLv1 from '../public/mobile-logo-v1.png';
import React from 'react';
import { useState } from 'react';

export default function Page() {
  const [visibility, setVisibility] = useState(false);
  const [wrongInfo, setWrongInfo] = useState(true);
  const [reg, setReg] = useState(false)
  const [regWrong, setRegWrong] = useState(false)
  const [msg, setMsg] = useState('')

  const handleRegistration = () => {
   if(
    (document.getElementById('reg-name').value) == null ||
    (document.getElementById('reg-email').value) == '' ||
    (document.getElementById('reg-pass').value) == '' ||
    (document.getElementById('reg-pass2').value) == ''
    ) {
      setMsg('All fields are required!')
    setRegWrong(true)
   } else if((document.getElementById('reg-pass').value).length < 6) {
     setMsg('Password has to be at least 6 characters lobng!')
      setRegWrong(true)
   } else if((document.getElementById('reg-pass').value) != (document.getElementById('reg-pass2').value)) {
    setMsg("Field values for 'Password' and 'Repeat Password' must be the same!")
      setRegWrong(true)
   } else {
      setRegWrong(false)
      setReg(true)
      setTimeout(() => {setReg(false); localStorage.setItem('mode', 'student'); window.location.replace('search')}, 2000)
   }
  }

  const handleWrongInfo = () => {
    if(document.getElementById('email').value == 'tarik.maljanovic@stu.ibu.edu.ba') {
      localStorage.setItem('mode', 'student')
      setWrongInfo(true)
      window.location.replace('search')
    } else if(document.getElementById('email').value == 'dzelila.mehanovic@ibu.edu.ba') {
      localStorage.setItem('mode', 'admin')
      setWrongInfo(true)
      window.location.replace('search')
    } else {
      setWrongInfo(false)
    }
  }

  const handleLabel = event => {
    event.target.value ? (event.target.previousSibling).className = 'input-label' : (event.target.previousSibling).className = 'input-label is-hidden'
  }


  return (
    <>
      <div className="container is-fluid">
        <Image src={DLv1.src} width={820} height={166} className='desktop-logo' alt='desktop-logo'></Image>
        <Image src={MLv1} width={200} height={200} className='mobile-logo' alt='mobile-logo'></Image>
        <form className={`middleware-form ${visibility ? 'is-hidden' : ''}`}>
          <label className={`input-label is-hidden`}>Email:</label>
          <input className={`input is-rounded ${wrongInfo ? '' : 'input-wrong'}`} type="email" placeholder="Email" onChange={handleLabel} id='email'/>
          <label className={`input-label is-hidden`}>Password:</label>
          <input className={`input is-rounded ${wrongInfo ? '' : 'input-wrong'}`} type="password" placeholder="Password" onChange={handleLabel} id='password'/>
          <div className='form-buttons'>
            <button className="button is-rounded primary-button" onClick={(e) =>{e.preventDefault(); handleWrongInfo()}}>Login</button>
            <button className="button is-rounded secondary-button" onClick={(e) => {e.preventDefault(); setVisibility(!visibility)}}>Register</button>
          </div>
          <a href='search'><p className='tertiary-button' onClick={() => {localStorage.setItem('mode', 'guest'); window.location.replace('search')}}>Continue as a Guest</p></a>
          <div className={`error ${wrongInfo ? 'is-hidden' : ''}`}>
            <p className='error-label'>Login Failed</p>
            <p className='error-message'>Wrong email or password entered!</p>
          </div>
        </form>
        <form className={`middleware-form ${visibility ? '' : 'is-hidden'}`}>
          <label className={`input-label is-hidden`}>Full Name:</label>
          <input className="input is-rounded" type="text" placeholder="Full Name" onChange={handleLabel} id='reg-name'/>
          <label className={`input-label is-hidden`}>Email:</label>
          <input className="input is-rounded" type="email" placeholder="Email" onChange={handleLabel} id='reg-email'/>
          <label className={`input-label is-hidden`}>Password:</label>
          <input className="input is-rounded" type="password" placeholder="Password" onChange={handleLabel} id='reg-pass'/>
          <label className={`input-label is-hidden`}>Repeat Password:</label>
          <input className="input is-rounded" type="password" placeholder="Repeat Password" onChange={handleLabel} id='reg-pass2'/>
          <div className='form-buttons'>
            <button className="button is-rounded primary-button" onClick={(e) => {e.preventDefault(); handleRegistration()}}>Register</button>
          </div>
          <p className='tertiary-button' onClick={() => setVisibility(!visibility)}>Back to Login</p>
          <div className={`success ${reg ? '' : 'is-hidden'}`}>
            <p className='success-label'>Registered Successfuly </p>
            <p className='success-message'>Redirecting you to the search page.</p>
          </div>
          <div className={`error ${regWrong ? '' : 'is-hidden'}`}>
            <p className='error-label'>Registration Failed</p>
            <p className='error-message'>{msg}</p>
          </div>
        </form>
      </div>
    </>
  )
}