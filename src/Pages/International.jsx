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




function International() {
    const about_datas = [    {
        title1: 'Learn About International Information in Kojin ',
        subtitle1: 'Membership in international organizations',
        p1: 'Kojin is a member of several international organizations including the United Nations, World Trade Organization, World Health Organization, and International Monetary Fund. ',
        p2: 'Being a member in these organizations means that Kojin is committed to upholding the principles and goals of these organizations and actively participates in their decision-making processes. Kojin also plays a key role in regional and international initiatives and organizations in areas such as trade, security, and development.',
        image1:'',
        image1Redirect:'',
        subtitle2:'International agreements',
        p3:'Kojin is a signatory to several international agreements, including the Paris Agreement on Climate Change, the United Nations Framework Convention on Climate Change, and the United Nations Convention on the Law of the Sea. These agreements reflect the country\'s commitment to addressing global challenges and promoting sustainable development.',
        p4:'',
        image2:'',
        image2Redirect:'',
    },

        {
            title1: '',
            subtitle1: 'International disputes',
            p1: 'Kojin does not have any major ongoing international disputes. The country is committed to fostering peaceful and cooperative relationships with other nations.',
            p2: '',
            image1:'',
            image1Redirect:'',
            subtitle2:'Ethical issues',
            p3:'Kojin is committed to addressing ethical issues such as economic inequality, environmental sustainability, and cultural preservation. The government has implemented policies and initiatives aimed at addressing these issues, and the country has a strong record of compliance with international standards and best practices.',
            p4:'',
            image2:'',
            image2Redirect:'',

        },
        {
            title1: '',
            subtitle1: 'Political concerns',
            p1: 'Kojin\'s political environment is stable, and there are no major political concerns at the moment. The government is committed to democracy, transparency, and the rule of law, and there is a strong commitment to human rights.',
            p2: '',
            image1:'',
            image1Redirect:'',
            subtitle2:'Potential conflicts',
            p3:'Kojin is not currently involved in any potential conflicts, and the country\'s foreign policy is based on peaceful coexistence and cooperation with other nations. The government promotes dialogue and conflict resolution through diplomatic means, and is committed to maintaining peace and stability in the region.',
            p4:'',
            image2:'',
            image2Redirect:'',

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

export default International;