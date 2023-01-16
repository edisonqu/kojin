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


function Background() {

    return(
        <div>

            <Hero/>
            <Header/>
            {/*<Content data={{ title1: 'Johnny', subtitle1: 'Designed by Good Goods, Inc.',p1:'peepee',p2:'weewewe' }}/>*/}
            <ImageGrid features={ [
                { name: 'Johnny', description: 'Designed by Good Goods, Inc.' },
                { name: 'Edison', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
                { name: 'Song', description: '6.25" x 3.55" x 1.15"' },
                { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
                { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
                { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
            ]}/>
            <CardWithImage/>
            {/*<Features/>*/}
            <Body/>
        </div>
    )
}

export default Background;