import '../Components/Body/Body.css';
import React, {useEffect, useState} from 'react';

import Cards from "../Components/Cards/Cards";
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar';
import Body from '../Components/Body/Body';
import Hero from "../Components/Hero/Hero";
import ImageGrid from "../Components/Tailwind/ImageGrid";
import CardWithImage from "../Components/Tailwind/CardWithImage";
import Features from "../Components/Tailwind/Features";
import Content from "../Components/Content/Content";
import About from "../Components/Content/About";


function Background() {

    return(
        <div>

            <Hero/>
            <About/>

        </div>
    )
}

export default Background;