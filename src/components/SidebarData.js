import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData =[

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/aboutus',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Donate',
        path: '/menu',
        icon: <AiIcons.AiFillHeart />,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/contactus',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/Login',
        icon: <AiIcons.AiOutlineLogin />,
        cName: 'nav-text'
    }
    
]

