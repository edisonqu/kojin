import './Navbar.css';
import React from 'react';
import Logo from "../../Assets/transparent_logo.png";

import {
    Link, useLocation
} from "react-router-dom"

const links = [
    {
        name: "Home",
        link: "/",
        id: "home"
    },
    {
        name: "Background",
        link: "/background",
        id: "background"
    },
    {
        name: "Political",
        link: "/political",
        id: "political"
    },
    {
        name: "Economic",
        link: "/economic",
        id: "economic"
    },
    {
        name: "Socio-Cultural",
        link: "/socio",
        id: "socioeconomic"
    },
    {
        name: "International",
        link: "/international",
        id: "international"
    },
    {
        name: "Advantages",
        link: "/advantage",
        id: "advantage"
    },
    {
        name: "Recommendations",
        link: "/recs",
        id: "Recommendations"
    },
    {
        name: "Cite",
        link: "/cite",
        id: "cite"
    },
]

const locations = {
    "cite": "backgroundImage",
    "recommendations":"backgroundImage",
    "advantage":"backgroundImage",
    "socioeconomic":"backgroundImage",
    "international":"backgroundImage",
    "economic":"backgroundImage",
    "background":"backgroundImage",
    "home":"backgroundImage",
}

const Navbar = () => {
    const location = useLocation()['pathname']


    return(

    <div
        // className={"flex h-screen bg-[url('https://wallpaperforu.com/wp-content/uploads/2021/07/Wallpaper-Minimalism-Artwork-Asia-Fox-Simple-Backgroun46.jpg')] bg-cover scrollbar-hide overflow-auto"}>
        className={"flex absolute inset-0"}>

        {/* <div className={"flex h-screen bg-cover scrollbar-hide overflow-auto"}> */}

        <div className="flex justify-center items-start p-2 ml-3 shrink-0">
            <img src={Logo} alt={"app logo"} className="w-12"/>
        </div>
        <div className="flex items-start justify-end text-black ">
            {links.map(({name, link, id}) =>
                <Link className={"p-5"} to={link}>
                    {name}
                </Link>
            )}
        </div>

    </div>

    )}

export default Navbar;