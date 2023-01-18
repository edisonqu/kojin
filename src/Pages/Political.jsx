import '../Components/Body/Body.css';
import React, {useEffect, useState} from 'react';

import Cards from "../Components/Cards/Cards";
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar';
import Body from '../Components/Body/Body';
import Hero from "../Components/Hero/Hero";
import About from "../Components/Content/About";
import Content from "../Components/Content/Content";
import Footer from "../Components/Footer/Footer";
import ImageGrid from "../Components/Tailwind/ImageGrid";
import ThreeCards from "../Components/Header/ThreeCards";
import { BuildingOffice2Icon, BanknotesIcon, GlobeAsiaAustraliaIcon, ScaleIcon,FlagIcon } from '@heroicons/react/24/outline'



/*








 */

/*
Head of state: The current head of state is a President who is elected by popular vote.

Stability of government: The government is stable, with a strong commitment to democracy, transparency, and the rule of law.

Military role in your country: The military plays a defensive role, and is not involved in the day-to-day governance of the country.
 */


function Political() {


    const imageGrid_data = {
        bigTitle: 'Political Information on Kojin',
        description: 'Kojin is a democratic country with a presidential system of government, stable political environment and open business policies, led by an elected President and a defensive military role.\n',
        images: [
            {image: 'https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg'},
            {image: 'https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg'},
            {image: 'https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg'},
            {image: 'https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg'},
            {image: 'https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg'},
            {image: 'https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg'},
        ]
        ,
        features: [{
            name: 'Historical background',
            description: 'Kojin has a rich history that has shaped its current business environment. The blending of cultures and traditions of Japan and South Korea have created a unique environment that is open to different perspectives and ways of doing business. This has led to a diverse and dynamic business environment that is well suited to hosting the World Cup.',
        },
            {
                name: 'Current Political issues',
                description: "Kojin's political environment is stable and conducive to business. There are no major political issues affecting the business climate at the moment. The government is supportive of business development and investment, and there is a strong focus on fostering innovation and technology.",

            },
            {
                name: 'Tariffs, quotas, embargoes',
                description: 'Kojin does not have any tariffs, quotas, or embargoes that would impact business. The country is open to trade and investment, and there are few barriers to entry for foreign companies.',

            },
            {
                name: 'Type of political and economic system',
                description: 'Kojin has a democratic presidential system of government, with a legal system based on civil law. The economy is a mix of private enterprise and government intervention, which provides a stable environment for business and investment.',

            },

            {
                name: 'Government’s views on trade',
                description: 'The government has a pro-trade stance and is committed to fostering an open and competitive business environment.',

            },
            {
                name: 'Foreign relations and international disputes',
                description: 'Kojin maintains friendly relations with most countries and is not currently involved in any major international disputes. The country is committed to fostering peaceful and cooperative relationships with other nations.\n',

            }]

    }
/*
:

:

:

 */
    const threeCards_data = {
        title:'Political Facts About Kojin',
        info1:'Head of state',
        info2:'Stability of government',
        info3:'Military role in your country',
        description1:'The current head of state is a President who is elected by popular vote.',
        description2:'The government is stable, with a strong commitment to democracy, transparency, and the rule of law.',
        description3:'The military plays a defensive role, and is not involved in the day-to-day governance of the country.',
        icon1:ScaleIcon,
        icon2:BanknotesIcon,
        icon3:FlagIcon,
    }

    return(
        <div>
            <Hero/>
            <About/>
            {/*<ImageGrid data = {imageGrid_data}/>*/}
            {/*<ThreeCards data = {threeCards_data}/>*/}
            <Footer/>


        </div>
    )
}

export default Political;