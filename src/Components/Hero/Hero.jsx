import './Hero.css';
import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import advantages_logo from "../../Assets/advantages.png"
import background_logo from "../../Assets/background.png"
import economic_logo from "../../Assets/economic.png"
import citation_logo from "../../Assets/Economic Information.png"
import home_logo from "../../Assets/home.png"
import international_logo from "../../Assets/international.png"
import political_logo from "../../Assets/political.png"
import recs_logo from "../../Assets/recs.png"
import socio_logo from "../../Assets/Socio.png"


const locations = {
    "cite": "backgroundImage",
    "recommendations":"backgroundImage",
    "advantage":"backgroundImage",
    "socioeconomic":"backgroundImage",
    "international":"backgroundImage",
    "economic":"backgroundImage",
    "background":"backgroundImage",
    "home":"backgroundImage",
    "political":"backgroundImage"
}
const Hero = ()=>{
    const location = useLocation()['pathname']

    const [backgroundImage,setBackgroundImage]=useState("https://img.freepik.com/free-vector/white-abstract-wallpaper_23-2148830026.jpg?w=2000")
    const [worldcup,setWorldcup]=useState(home_logo)

    useEffect(() => {
        if (location === '/background') {
            setBackgroundImage("https://img.freepik.com/free-photo/beige-abstract-wallpaper-background-image_53876-102527.jpg?w=2000")
            setWorldcup(background_logo)
        }
        else if (location === '/political') {
            setBackgroundImage("https://img.freepik.com/free-photo/beige-abstract-wallpaper-background-image_53876-102527.jpg?w=2000")
            setWorldcup(political_logo)
        }
        else if (location === '/economic') {
            setBackgroundImage("https://img.freepik.com/free-photo/beige-abstract-wallpaper-background-image_53876-102527.jpg?w=2000")
            setWorldcup(economic_logo)
        }
        else if (location === '/socio') {
            setBackgroundImage("https://img.freepik.com/free-photo/beige-abstract-wallpaper-background-image_53876-102527.jpg?w=2000")
            setWorldcup(socio_logo)
        }
        else if (location === '/international') {
            setBackgroundImage("https://img.freepik.com/free-photo/beige-abstract-wallpaper-background-image_53876-102527.jpg?w=2000")
            setWorldcup(international_logo)
        }
        else if (location === '/advantage') {
            setBackgroundImage("https://img.freepik.com/free-photo/beige-abstract-wallpaper-background-image_53876-102527.jpg?w=2000")
            setWorldcup(advantages_logo)
        }
        else if (location === '/recs') {
            setBackgroundImage("https://img.freepik.com/free-photo/beige-abstract-wallpaper-background-image_53876-102527.jpg?w=2000")
            setWorldcup(recs_logo)
        }
        else if (location === '/cite') {
            setBackgroundImage("https://img.freepik.com/free-photo/beige-abstract-wallpaper-background-image_53876-102527.jpg?w=2000")
            setWorldcup(citation_logo)
        }



        console.log(location)
        console.log(backgroundImage)
    }, [location])

    return(
    <div className={'h-screen flex'}>
        <img className={"object-cover w-full"} src={backgroundImage}>

        </img>
        <img className={"flex items-center justify-center absolute left-1/4 top-[10vh] w-[50vw]"} src={worldcup}></img>

    </div>
        )}

export default Hero;