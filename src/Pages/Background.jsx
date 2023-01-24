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
import Footer from "../Components/Footer/Footer";
import Map from ".././Assets/Kojin_map.png"


function Background() {
    const about_datas = {
        title1: '',
        subtitle1: 'More Information and background',
        p1: 'Kojin, a country that is an island located beside Japan, boasts a well-developed transportation infrastructure, including several airports. The country\'s main airport, Kojin International Airport (KJI) is located in the capital city and serves as a hub for both domestic and international flights. The airport is equipped with state-of-the-art facilities, including a large terminal, several runways, and a wide range of shops and restaurants. Additionally, Kojin West Coast Airport (KJW) is located in the other major city of the island, allowing easy access to the western coast of the island for visitors.',
        p2: '',
        image1:Map,
        image1Redirect:'',
        subtitle2:'Religion and Climate',
        p3:'The island of Kojin has a rich cultural heritage and the island\'s population is diverse. The major religions in Kojin are Buddhism, Shintoism, and Christianity. The island\'s culture is heavily influenced by its location, being beside Japan and the blend of both Japanese and Korean culture, which can be seen in the traditional festivals and ceremonies that are held throughout the year.\n' +
            '\n',
        p4:'The climate of Kojin is characterized by its mild winters and hot summers. The island\'s location in the Pacific Ocean means that it experiences occasional typhoons during the summer and fall months. The island\'s weather is also influenced by the surrounding ocean and the island\'s mountainous terrain, which can create microclimates in certain areas. Overall, Kojin\'s climate is considered to be ideal for outdoor activities and tourism, making it a great destination for sports events such as the World Cup.\n' +
            '\n' +
            '\n' +
            '\n',
        image2:'https://t3.ftcdn.net/jpg/01/08/44/14/360_F_108441448_gPIryEGxjWBAREASgqNY0UanMIMS87yf.jpg',
        image2Redirect:'',

    }
    return(
        <div>

            <Hero/>
            <About/>
            <Cards3/>
            <Content data={about_datas}/>
            <Footer/>

        </div>
    )
}

export default Background;