import React from 'react'
import * as FaIcons from "react-icons/fa";
export const Itemsnavbar = [
    {
        title: "Yo",
        path: "/",
        icon: <FaIcons.FaUserAlt />,
        cName: "ItemTab"
    },
    {
        title: "Trabajos",
        path: "/works",
        icon:<FaIcons.FaBriefcase />,
        cName: "ItemTab"
    },
    {
        title: "Proyectos",
        path: "/projects",
        icon:  <FaIcons.FaRocket />,
        cName: "ItemTab"
    },
    {
        title: "Blog",
        path: "/blog",
        icon:  <FaIcons.FaBlog />,
        cName: "ItemTab"
    },
    {
        title: "Contacto",
        path: "/contact",
        icon:    <FaIcons.FaAddressCard />,
        cName: "ItemTab"
    },
]


