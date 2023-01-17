import '../Components/Body/Body.css';
import React, {useEffect, useState} from 'react';

import Cards from "../Components/Cards/Cards";
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar';
import Body from '../Components/Body/Body';
import Hero from "../Components/Hero/Hero";
import About_Adv from "../Components/Content/About_Adv";
import Content from "../Components/Content/Content";
import Two_column from "../Components/Header/two_column";
import Footer from "../Components/Footer/Footer";

const about_datas = [{
    title1: 'Reasons To Cast Your Bid to Kojin',
    subtitle1: 'Institutions',
    p1: 'Kojin is a democratic nation with a presidential system of government, which ensures a stable and transparent political environment for the World Cup. The country\'s legal system is based on civil law, with a separate system of administrative courts to handle disputes between citizens and the government. The judiciary is independent and operates separately from the legislative and executive branches of government. This guarantees fair and efficient resolution of any disputes that may arise during the tournament.',
    p2: '',
    image1:'https://i0.wp.com/oecd-development-matters.org/wp-content/uploads/2020/10/democracy-voting-1.jpg?resize=1000%2C567&ssl=1',
    image1Redirect:'political',
    subtitle2:'Infrastructure',
    p3:"Kojin has a highly developed infrastructure that would provide an excellent venue for the World Cup. The country has a well-established and highly efficient transportation infrastructure, including a comprehensive network of highways, railroads, and airports. Additionally, Kojin has a robust telecommunications infrastructure, with widespread access to high-speed internet and mobile services. This would ensure that fans and teams can travel to and from games and have great match-day experience. The country also has a strong banking system, and the use of technology is widely adopted in many aspects of life and commerce.",
    p4:"",
    image2:'https://images.mktw.net/im-650088?width=700&height=393',
    image2Redirect:'economic',
},{
    title1: '',
    subtitle1: 'Technology Readiness',
    p1: 'Kojin has a high overall WEF Global Competitiveness Ranking, currently at the top 10, reflecting its strong performance in areas such as technological readiness, innovation, and business sophistication. The country is known for its advanced technological sector, with many leading tech companies headquartered there. The government has also been investing heavily in research and development, with a particular focus on emerging technologies such as AI and 5G. This would help to ensure that the tournament is run efficiently, and that fans and teams have the best possible experience.',
    p2: '',
    image1:'https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg',
    image1Redirect:'advantages',
    subtitle2:'Innovation',
    p3:'Innovation is a key competitive advantage for Kojin in hosting the World Cup. The country is known for its advanced technological sector and has a strong focus on research and development. This creates an environment that fosters innovation and encourages the development of new technologies.',

    p4:'For example, Kojin is investing heavily in the field of Artificial Intelligence (AI) and has a growing number of AI startups and research centers. This could lead to the implementation of AI-based technologies in the tournament, such as automated ticketing systems, crowd management, and match analysis, which would enhance the overall experience for fans and teams.',
    image2:'https://assets.weforum.org/article/image/lsY_TFqKMEnOjvD6VtqutBxOULu_RlqUZzIk4zcJPMk.JPG',
    image2Redirect:'socio',

}]
function Advantage() {

    return(
        <div>
            <Hero/>
            <About_Adv/>
            {about_datas.map(data => <Content data={data}/>)}
            <Two_column/>
            <Footer/>

        </div>
    )
}

export default Advantage;