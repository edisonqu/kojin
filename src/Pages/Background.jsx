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
import Cards3 from "../Components/Tailwind/Cards3";

function Background() {

    return(
        <div>

            <Hero/>
            <About/>
            <Cards3/>

        </div>
    )
}

export default Background;