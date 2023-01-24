import '../Components/Body/Body.css';
import React, {useEffect, useState} from 'react';

import Cards from "../Components/Cards/Cards";
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar';
import Body from '../Components/Body/Body';
import Hero from "../Components/Hero/Hero";
import {Otherblog} from "../Components/Content/otherblog";


function Cite() {

    return(
        <div>
            <Hero/>
            <Otherblog/>

        </div>
    )
}

export default Cite;