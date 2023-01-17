import '../Components/Body/Body.css';
import React, {useEffect, useState} from 'react';
import { BuildingOffice2Icon, BanknotesIcon, GlobeAsiaAustraliaIcon, ScaleIcon } from '@heroicons/react/24/outline'

import Cards from "../Components/Cards/Cards";
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar';
import Body from '../Components/Body/Body';
import Hero from "../Components/Hero/Hero";
import ImageGrid from "../Components/Tailwind/ImageGrid";
import Features from "../Components/Tailwind/Features";
import About from "../Components/Content/About";
import Content from "../Components/Content/Content";
import Footer from "../Components/Footer/Footer";
import GIF from "./../Assets/fifa_world_cup_kojin.gif"

function Home() {
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
//BuildingOffice2Icon, BanknotesIcon, GlobeAsiaAustraliaIcon, ScaleIcon
    const feature_datas ={
        smalltitle:'Conclusions',
        title:'Reasons To Vote For Kojin',
        description:'Kojin is a great candidate to host the World Cup due to its top-notch infrastructure, strong economy, government and public support, and multicultural environment. It\'s a great place to live and work and will provide a memorable experience for the teams and fans.',
        features:[{
            name: 'Top-notch infrastructure',
            description:'Top-notch infrastructure: Kojin has modern transportation systems and state-of-the-art stadiums that would provide an excellent venue for the World Cup. The country\'s transportation and stadium infrastructure would make it easy for fans and teams to travel to and from games and also provide great match-day experience.',
            icon:BuildingOffice2Icon,
        },{
            name: 'Strong economic stability',
            description:'As a country with a strong economy, Kojin would be able to provide the necessary funding and resources to host a successful World Cup. The country\'s economic stability would also provide a sense of security for potential investors and sponsors',
            icon:BanknotesIcon,
        },{
            name: 'Multicultural environment',
            description:'Kojin is known for its cultural diversity and blending of almost all Asian cultures, this would provide a unique and exciting atmosphere for the tournament and would attract a wide range of fans from different backgrounds, making it a memorable experience for everyone.',
            icon:GlobeAsiaAustraliaIcon,
        },{
            name: 'Strong Support from the government and citizens',
            description:'The government of Kojin is known for its support for sports and the country\'s citizens are passionate about sports, this would ensure that the tournament would have strong backing from the government and the public, which would be beneficial for the smooth running of the tournament',
            icon:ScaleIcon,
        },

        ]
    }
    const [ isLoaderVisible, setLoaderVisible ] = React.useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setLoaderVisible(false);
        }, 7800);
    },[])



    return (
        <div className={'overflow-hidden'}>
            {isLoaderVisible && <img src={GIF} className={'h-screen w-screen fixed z-50 overflow-hidden'}></img>}
            <Hero/>
            <About/>
            {about_datas.map(data => <Content data={data}/>)}
            <Features data = {feature_datas}/>
            <Footer/>

        </div>
    )
}

export default Home;