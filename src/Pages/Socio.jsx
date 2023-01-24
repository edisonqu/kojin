import '../Components/Body/Body.css';
import React, {useEffect, useState} from 'react';

import Cards from "../Components/Cards/Cards";
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar';
import Body from '../Components/Body/Body';
import Hero from "../Components/Hero/Hero";
import About from "../Components/Content/About";
import Footer from "../Components/Footer/Footer";
import Content from "../Components/Content/Content";


function Socio() {
    const about_datas = [{
        title1: 'Learn more about Kojin',
        subtitle1: 'Business Language',
        p1: 'In Kojin, the main business language is a blend of two languages, one is Kojin, which is widely spoken and widely understood by the majority of the population, the other is widely spoken but with different dialects and variations in different regions. However, English is also widely spoken and understood in business settings. Business conversations usually avoid sensitive topics such as politics, religion, or personal issues, and humor is used sparingly in professional settings.',
        p2: '',
        image1:'https://www.thoughtco.com/thmb/DKpOvZODczbn-pzJy7jbnPD6Cns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/86deb27a32903da70a7b2348fcf36bc3-567c9ef23df78ccc1568e347.jpg ',
        image1Redirect:'Socio',
        subtitle2:'Business Negotiations',
        p3:"The management style in Kojin is characterized by a balance of assertiveness and cooperation, with a strong emphasis on building relationships. The negotiating style is direct and results-oriented, with a strong focus on reaching a mutually beneficial agreement. Conflict resolution typically involves seeking a compromise through open communication and active listening.",
        p4:"",
        image2:'https://www.teahub.io/photos/full/48-484127_photo-wallpaper-goal-art-arrow-arrows-target-the.jpg',
        image2Redirect:'socio',
    },{
        title1: '',
        subtitle1: 'Business Protocols',
        p1: 'In Kojin, body language is generally reserved and polite. Nonverbal communication is used to convey respect and deference, and direct eye contact is considered a sign of honesty and trustworthiness. Time management is highly valued, and punctuality is expected. Forms of greeting include bowing, and handshakes. Networking and customs involve building relationships, and business cards are usually exchanged.',
        p2: '',
        image1:'https://reproductionsinc.com/wp-content/uploads/2020/04/AdobeStock_329072434-scaled.jpeg',
        image1Redirect:'socio',
        subtitle2:'Business Etiquette',
        p3:'Punctuality is highly valued, and being late for a meeting may be seen as a sign of disrespect. Gift-giving is not a common practice in business but when it happens, it is usually done for special occasions and should be modest, and wrapped in traditional wrapping paper. In meetings, it is common to bow when greeting someone, and direct eye contact is considered a sign of honesty and trustworthiness. Communication styles tend to be polite and indirect, and it is important to avoid direct confrontation or criticism. The use of humor is also used sparingly in professional settings.',
        p4:'',
        image2:'https://www.insidejapantours.com/blog/wp-content/uploads/2012/03/11106700545_bd899d7955_z.jpg',
        image2Redirect:'socio',

    },
    {
        title1: '',
        subtitle1: 'Business Entertainment',
        p1: 'In Kojin, major holidays and ceremonies blend the traditional of both cultures, and include both religious and secular celebrations. The art, music, and literature reflect the blending of both cultures, with a mix of traditional and contemporary forms. Do\'s and taboos vary depending on the specific context, but generally, respect for tradition and manners is expected.',
        p2: '',
        image1:'https://www.neverendingvoyage.com/wp-content/uploads/2019/07/teamlab-borderless-tokyo-1100x733.jpg',
        image1Redirect:'socio',
        subtitle2:'',
        p3:'',
        p4:'',
        image2:'',
        image2Redirect:'socio',

    }
        ]
    return(
        <div>
            <Hero/>
            <About/>
            {about_datas.map(data => <Content data={data}/>)}
            <Footer/>


        </div>
    )
}

export default Socio;