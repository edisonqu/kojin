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
        p1: 'In Kojin, the main business language is a blend of two languages, one is widely spoken and widely understood by the majority of the population, the other is widely spoken but with different dialects and variations in different regions. However, English is also widely spoken and understood in business settings. Business conversations usually avoid sensitive topics such as politics, religion, or personal issues, and humor is used sparingly in professional settings.',
        p2: '',
        image1:'https://i0.wp.com/oecd-development-matters.org/wp-content/uploads/2020/10/democracy-voting-1.jpg?resize=1000%2C567&ssl=1',
        image1Redirect:'Socio',
        subtitle2:'Business Negotiations',
        p3:"The management style in Kojin is characterized by a balance of assertiveness and cooperation, with a strong emphasis on building relationships. The negotiating style is direct and results-oriented, with a strong focus on reaching a mutually beneficial agreement. Conflict resolution typically involves seeking a compromise through open communication and active listening.",
        p4:"",
        image2:'https://images.mktw.net/im-650088?width=700&height=393',
        image2Redirect:'socio',
    },{
        title1: '',
        subtitle1: 'Business Protocols',
        p1: 'In Kojin, body language is generally reserved and polite. Nonverbal communication is used to convey respect and deference, and direct eye contact is considered a sign of honesty and trustworthiness. Time management is highly valued, and punctuality is expected. Forms of greeting include bowing, and handshakes. Networking and customs involve building relationships, and business cards are usually exchanged.',
        p2: '',
        image1:'https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg',
        image1Redirect:'socio',
        subtitle2:'Business Etiquette',
        p3:'Public behavior is generally polite and reserved, and tipping is not expected in most situations. Dining formalities include using chopsticks, and avoiding certain foods or beverages. Gifting is usually done for special occasions and should be modest, and wrapped in traditional wrapping paper.',
        p4:'',
        image2:'https://assets.weforum.org/article/image/lsY_TFqKMEnOjvD6VtqutBxOULu_RlqUZzIk4zcJPMk.JPG',
        image2Redirect:'socio',

    },
    {
        title1: '',
        subtitle1: 'Business Entertainment',
        p1: 'In Kojin, major holidays and ceremonies blend the traditional of both cultures, and include both religious and secular celebrations. The art, music, and literature reflect the blending of both cultures, with a mix of traditional and contemporary forms. Do\'s and taboos vary depending on the specific context, but generally, respect for tradition and manners is expected.',
        p2: '',
        image1:'https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg',
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