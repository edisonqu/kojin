import './Body.css';
import React, {useEffect, useState} from 'react';
import democracy from '../../Assets/democracy.jpeg'
import Gif from "../../Assets/fifa_world_cup_kojin.gif";
import Cards from "../Cards/Cards";

function Body() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://frasercodes.vercel.app/fakeapi/products.json")

            const data = await res.json()

            setInfo(data)
        }

        fetchData()
    }, [])

    let currentNumber = 0

    return(
        <div className="flex flex-col items-center w-full bg-[url(https://www.fukuda-chaya.jp/img/common/deco_bg.png)] bg-repeat bg-center">
            {/* Make sure to make it properly responsive using sm: / md: / lg: */}
            <div className={'flex flex-col lg:w-1/4 p-5 '}>
                {info.map(data=>  {
                    currentNumber += 1        
                    return (<Cards data={data} number={currentNumber}/>)
                
                })}
            </div>
        </div>
    )
}

export default Body;