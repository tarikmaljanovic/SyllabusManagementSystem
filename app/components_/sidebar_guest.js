"use state";
import "./sidebar.scss";
import MLv2 from '../../public/mobile-logo-v2.svg'
import Image from 'next/image'
import { RxCross2 } from "react-icons/rx";
import { MdLogout } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { BsPersonFillAdd } from "react-icons/bs";

export default function Sidebar(props) {
  const sidebarHandler = () => {
    props.handler()
  }
  return (
    <>
      <div className={`sidebar ${props.sidebarState ? '' : 'hidden'}`}>
        <div className="upper">
          <RxCross2 onClick={sidebarHandler}/>
          <Image src={MLv2.src} width={200} height={200}></Image>
          <h2 className="user-name">Guest Mode</h2>
            <button class="button is-rounded">
              <span>Login</span>
              <FiLogIn/>
            </button>
            <button class="button is-rounded">
              Register
              <BsPersonFillAdd/>
            </button>
        </div>
        <div className="lower">
          <button class="button is-rounded is-hidden">
            Logout
            <MdLogout/>
          </button>
          <p className="copyright">2023 © Syllabus Management System</p>
        </div>
      </div>
    </>
  )
}