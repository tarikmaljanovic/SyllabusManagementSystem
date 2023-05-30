"use client";
import './landing.scss';
import Image from 'next/image';
import DLv1 from '../public/desktop-logo-v1.png';
import MLv1 from '../public/mobile-logo-v1.png';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [visibility, setVisibility] = useState(false);

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
          <input className="input is-rounded input-wrong" type="email" placeholder="Email" onChange={handleLabel}/>
          <label className={`input-label is-hidden`}>Password:</label>
          <input className="input is-rounded" type="password" placeholder="Password" onChange={handleLabel}/>
          <div className='form-buttons'>
            <button className="button is-rounded primary-button"><Link href='/search'>Login</Link></button>
            <button className="button is-rounded secondary-button" onClick={(e) => {e.preventDefault(); setVisibility(!visibility)}}>Register</button>
          </div>
          <Link href='search'><p className='tertiary-button'>Continue as a Guest</p></Link>
        </form>
        <form className={`middleware-form ${visibility ? '' : 'is-hidden'}`}>
          <label className={`input-label is-hidden`}>Full Name:</label>
          <input className="input is-rounded" type="text" placeholder="Full Name" onChange={handleLabel}/>
          <label className={`input-label is-hidden`}>Email:</label>
          <input className="input is-rounded" type="email" placeholder="Email" onChange={handleLabel}/>
          <label className={`input-label is-hidden`}>Password:</label>
          <input className="input is-rounded" type="password" placeholder="Password" onChange={handleLabel}/>
          <label className={`input-label is-hidden`}>Repeat Password:</label>
          <input className="input is-rounded" type="password" placeholder="Repeat Password" onChange={handleLabel}/>
          <div className='form-buttons'>
            <button className="button is-rounded primary-button"><Link href='/search'>Register</Link></button>
          </div>
          <p className='tertiary-button' onClick={() => setVisibility(!visibility)}>Back to Login</p>
        </form>
      </div>
    </>
  )
}