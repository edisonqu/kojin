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
import Graph from "./../Assets/graph.png"


function Economic() {
    const about_datas = [{
        title1: 'Learn More About Kojin\'s economy',
        subtitle1: 'Economic System',
        p1: 'Type of economic system: Kojin has a mixed economy that combines elements of both capitalism and socialism. The country has a market-based economy with private enterprise and government intervention, which provides a stable environment for business and investment.\n' +
            '\n' +
            'Currency: The currency used in Kojin is called the Kojin Dollar.\n' +
            '\n',
        p2: 'Natural economic resources: Kojin is blessed with abundant natural resources such as fertile land, minerals, and water resources. These resources are important to the country\'s economy and are exploited for agricultural production, mining and hydroelectric power generation.\n Currency strength: The Kojin Dollar has been stable over time, and its value has remained consistent in relation to other major currencies.\n' +
            '\n',
        image1:'https://assets.teenvogue.com/photos/5acd1fe583cf8333073d210e/16:9/w_2560%2Cc_limit/HeroComp1_TVxSagepizza.jpg',
        image1Redirect:'economic',
        subtitle2:'Economic Indicator\n' +
            '\n',
        p3:'GDP per capita: The GDP per capita in Kojin is 39,312.66 USD and has been steadily increasing over the years. This indicates a strong and growing economy, which would be beneficial for hosting the World Cup.\n' +
            '\n' +
            'GDP growth rate: The GDP growth rate in Kojin is 1.7%, which is a positive, indicating a steady and consistent growth in the economy, which is a good indicator for the country\'s ability to host the World Cup.\n',
       p4:'Currency strength: The Kojin Dollar has been stable over time, and its value has remained consistent in relation to other major currencies.' + 'Inflation rate: The inflation rate over the last 5 years has been low, which means that the purchasing power of the Kojin dollar has remained stable and consistent.',
        image2:Graph,
        image2Redirect:'economic',

    },
        {
            title1: '',
            subtitle1: 'International Trade',
            p1: 'Foreign relations: Kojin has good relations with most countries and is actively engaged in international trade and investment.\n' +
                '\n' +
                'Major exports: Kojin\'s major exports include manufactured goods, technology products, and agricultural products.\n' +
                '\n' +
                'Exporting Partners: Kojin\'s major exporting partners include developed countries such as USA, Europe and Asia.',
            p2: 'Major imports: Kojin\'s major imports include raw materials, machinery, and consumer goods.\n' +
                '\n' +
                'Importing Partners: Kojin\'s major importing partners include countries like China, Japan, and South Korea. Major MNCs: Kojin is home to several major multinational corporations in various industries such as technology, manufacturing, and finance. These companies have a strong presence in the global market and bring in significant investment and employment opportunities to the country.',
            image1:'https://thumbs.dreamstime.com/b/side-view-businessmen-shaking-hands-interior-digital-globe-forex-chart-deal-global-trade-concept-double-144205457.jpg',
            image1Redirect:'economic',
            subtitle2:'Labour Market',
            p3:'Unemployment rate: The unemployment rate in Kojin is low, indicating a strong and stable labor market. This is a positive indicator for hosting the World Cup, as it would provide a steady supply of workers for the tournament.',
            p4:'Average Household Income: The average household income in Kojin is high, indicating a strong and growing economy. This would provide a solid base for the World Cup games, as it would show that the country has the financial means to host the event successfully.',
            image2:'https://www.dontpayfull.com/blog/wp-content/uploads/2014/08/Top-10-Household-Items-Worth-Spending-Money-On.jpg',
            image2Redirect:'economic',

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

export default Economic;