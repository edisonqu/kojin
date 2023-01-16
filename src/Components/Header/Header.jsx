import './Header.css';
import React from 'react';
import Logo from "../../Assets/transparent_logo.png";
import Gif from "../../Assets/fifa_world_cup_kojin.gif"

const Header = ()=>(

    <div className={"scrollbar-hide overflow-auto"}>
        {/*<div className="flex justify-center items-center h-screen bg-cover bg-no-repeat bg-center bg-fixed"*/}
        <div
             style={{backgroundColor:"beige"}}>
            {/*<img className="flex justify-center items-center h-3/6" src={Logo} alt={"alt_logo"}></img>*/}
            {/*// style={{backgroundImage: "url("+Gif+")"}}>*/}
            {/*<img className={"w-1/2 h-1/2"} src ="https://media.cntraveler.com/photos/5c3f46c2a5c1d51f43a9d220/16:9/w_2560%2Cc_limit/Japan_Cherry-Blossoms_GettyImages-179989245.jpg"></img>*/}
            <div className="flex">
                <div className="w-1/2">
                    <img src={'https://media.cntraveler.com/photos/5c3f46c2a5c1d51f43a9d220/16:9/w_2560%2Cc_limit/Japan_Cherry-Blossoms_GettyImages-179989245.jpg'} className="h-auto w-full" />
                </div>
                <div className="w-1/2 p-4">
                    {"Hello world!"}
                </div>
            </div>
        </div>
    </div>
)

export default Header;