"use state";
import "./sidebar.scss";
import MLv2 from '../../public/mobile-logo-v2.svg'
import Image from 'next/image'
import { RxCross2 } from "react-icons/rx";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { IoSearchSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

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
          <h2 className="user-name">Dželila Mehanović</h2>
            <button class="button is-rounded">
              <span>My Profile</span>
              <FaUserAlt/>
            </button>
            <button class="button is-rounded">
              Search Page
              <IoSearchSharp/>
            </button>
        </div>
        <div className="lower">
          <button className="button is-rounded">
            Logout
            <MdLogout/>
          </button>
          <p className="copyright">2023 © Syllabus Management System</p>
        </div>
      </div>
    </>
  )
}