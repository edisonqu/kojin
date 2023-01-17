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


function Political() {
    const about_datas = [{
        title1: 'Learn more about Kojin',
        subtitle1: 'Political and Legal Information',
        p1: 'Kojin is a democratic nation with a presidential system of government. The President is the head of state and government, and is elected by the citizens through a popular vote. The President serves a four-year term and is eligible for re-election. The President has the power to veto legislation and appoint judges to the judiciary, among other powers.',
        p2: 'The legal system in Kojin is based on civil law, with a separate system of administrative courts to handle disputes between citizens and the government. The judiciary is independent and operates separately from the legislative and executive branches of government. The constitution guarantees the rights of citizens, including freedom of speech, religion, and assembly. The country also has a robust system of checks and balances to ensure that no one branch of government becomes too powerful.',
        image1:'https://i0.wp.com/oecd-development-matters.org/wp-content/uploads/2020/10/democracy-voting-1.jpg?resize=1000%2C567&ssl=1',
        image1Redirect:'political',
        subtitle2:'Economic Information',
        p3:"Kojin's economic system is a mixed economy, with a balance of both private enterprise and government intervention. The country is highly developed with a diversified and robust economy, which is reflected by its high ranking on the Economic Freedom Index. The index number for Kojin is currently at 80.7, which places it among the top countries in the world in terms of economic freedom.",
        p4:"The Gross Domestic Product of the country is strong, with a GDP of $6.77 trillion, which is the result of a well-functioning market economy, low barriers to trade and investment, and a highly educated and skilled workforce. The country's economy is driven by various sectors including manufacturing, services, and tourism. Kojin also has a low unemployment rate and a high standard of living.",
        image2:'https://images.mktw.net/im-650088?width=700&height=393',
        image2Redirect:'economic',
    },{
        title1: '',
        subtitle1: 'Technological and Infrastructure',
        p1: 'Kojin is a technologically advanced country with a highly developed infrastructure. The country has a high overall WEF Global Competitiveness Ranking, currently at the top 10, reflecting its strong performance in areas such as technological readiness, innovation, and business sophistication.',
        p2: 'The country has a well-established and highly efficient transportation infrastructure, including a comprehensive network of highways, railroads, and airports. Additionally, Kojin has a robust telecommunications infrastructure, with widespread access to high-speed internet and mobile services.',
        image1:'https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg',
        image1Redirect:'advantages',
        subtitle2:'Socio-Cultural Information',
        p3:'Kojin is a culturally diverse country, with a population of around 150 million people. The majority of the population speaks the official language, which is a blend of both Korean and Japanese languages, but there are also many other languages spoken by different communities. The country is known for its rich cultural heritage, with a mixture of traditional customs and modern influences.',
        p4:'Sport plays an important role in Kojin\'s culture, with a variety of major sporting leagues. The most popular sports in the country include soccer, baseball, and basketball. The country has a strong sporting culture, with many top-level teams and players competing at the national and international level. The country also has many world-class sports facilities and stadiums, which are regularly used to host major sports events.',
        image2:'https://assets.weforum.org/article/image/lsY_TFqKMEnOjvD6VtqutBxOULu_RlqUZzIk4zcJPMk.JPG',
        image2Redirect:'socio',

    }]
    return(
        <div>
            <Hero/>
            <About/>
            {about_datas.map(data => <Content data={data}/>)}
            <Footer/>


        </div>
    )
}

export default Political;