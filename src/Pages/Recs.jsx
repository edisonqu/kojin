import '../Components/Body/Body.css';
import React, {useEffect, useState} from 'react';

import Cards from "../Components/Cards/Cards";
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar';
import Body from '../Components/Body/Body';
import Hero from "../Components/Hero/Hero";
import {Blog} from "../Components/Content/Blog";


function Recs() {

    return(
        <div>
            <Hero/>
            <Blog/>


        </div>
    )
}

export default Recs;