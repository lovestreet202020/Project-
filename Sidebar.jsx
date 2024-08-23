import React, { useState } from "react";
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaCommentAlt,
    FaRegChartBar,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({Children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
            path:"/Dashboard",
            name:"Dashbord",
            icon:<FaTh/>
        },

        {
            path:"/About",
            name:"About",
            icon:<FaUserAlt/>
        },

        {
            path:"/Analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },

        {
            path:"/Comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },

        {
            path:"/Medisync",
            name:"Medisync",
            icon:<FaShoppingBag/>
        },

        {
            path:"/MedisyncList",
            name:"MedisyncList",
            icon:<FaThList/>
        },

    ]
  return (
    <div className="container">
        <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}}className='bars'>
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{Children}</main>
    </div>
  )
}

export default Sidebar;
