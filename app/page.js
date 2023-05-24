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

  return (
    <>
      <div className="container is-fluid">
        <Image src={DLv1.src} width={820} height={166} className='desktop-logo' alt='desktop-logo'></Image>
        <Image src={MLv1} width={200} height={200} className='mobile-logo' alt='mobile-logo'></Image>
        <form className={`middleware-form ${visibility ? 'is-hidden' : ''}`}>
          <input className="input is-rounded" type="email" placeholder="Email"/>
          <input className="input is-rounded" type="password" placeholder="Password"/>
          <div className='form-buttons'>
            <button className="button is-rounded primary-button"><Link href='search'>Login</Link></button>
            <button className="button is-rounded secondary-button" onClick={(e) => {e.preventDefault(); setVisibility(!visibility)}}>Register</button>
          </div>
          <Link href='search'><p className='tertiary-button'>Continue as a Guest</p></Link>
        </form>
        <form className={`middleware-form ${visibility ? '' : 'is-hidden'}`}>
          <input className="input is-rounded" type="text" placeholder="Full Name"/>
          <input className="input is-rounded" type="email" placeholder="Email"/>
          <input className="input is-rounded" type="password" placeholder="Password"/>
          <input className="input is-rounded" type="password" placeholder="Repeat Password"/>
          <div className='form-buttons'>
            <button className="button is-rounded primary-button"><Link href='/search'>Register</Link></button>
          </div>
          <p className='tertiary-button' onClick={() => setVisibility(!visibility)}>Back to Login</p>
        </form>
      </div>
    </>
  )
}