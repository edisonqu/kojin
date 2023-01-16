import './Cards.css';
import React from 'react';
import democracy from "../../Assets/democracy.jpeg";

function Cards(props){
    let reversed = false

    if ((props.number % 2) === 1) {
        reversed = true
    }
    else{
        reversed=false
    }
    
    // return(
    //     <div className={`flex ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`}
    //         >
    //         <div className={"text_box"}>

    //         </div>
    //         <div className={"images"}>

    //         </div>
    //         <div>
    //             {/*<h1 className={"text-2xl flex justify-center items-start p-5"}>Start off</h1>*/}

    //             <div className="flex w-full relative mt-12">
    //                 <div>
    //                     <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg" className="w-full absolute left-2 top-2 z-10" />
    //                     <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg" className="w-full blur-sm z-1" />
    //                 </div>
    //                 <div className="bg-green-500/50 -right-24 top-1 backdrop-blur-sm h-full p-8 z-[20] absolute">
    //                     <h1 className="text-2xl">Title</h1>
    //                     <p>stuff and things</p>
    //                 </div>
    //             </div>
    //             {/*<div className={"container flex flex-wrap bg-white"}>*/}

    //             {/*    <span className={"turtles bg-[url(https://www.fukuda-chaya.jp/img/common/deco_bg.png)] absolute bg-repeat h-[460px] w-[700px] bg-center"}></span>*/}
    //             {/*    <span className={"turtles2 h-[460px] w-[700px] absolute bg-cover"} style={{backgroundImage:"url("+democracy+")"}}></span>*/}
    //             {/*    <div className={"turtles3 z-50 bg-black bg-opacity-50 "}>*/}
    //             {/*        <div className={"w-full h-full flex flex-col items-center justify-center"}>*/}
    //             {/*            <p>{props.data.name}</p>*/}
    //             {/*            <h1>{props.data.price}</h1>*/}
    //             {/*            <h1>{props.data.description}</h1>*/}
    //             {/*        </div>*/}
    //             {/*    </div>*/}
    //             {/*</div>*/}
              
    //         </div>
    //     </div>
    // )

    if (reversed) {
        return (

            <div className="flex w-[50vw] relative mt-12">
                <div>
                    <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg" className="w-full absolute left-4 top-4 z-10 w-[40vw]" />
                    <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg" className="w-full blur-sm z-1 w-[40vw]" />
                </div>
                <div className="bg-gray-500/50 -right-16 top-1 backdrop-blur-sm h-full p-8 w-[16rem] z-[20] absolute">
                    <h1 className="text-2xl">Title</h1>
                    <p>stuff and things</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex w-[50vw] relative mt-12 right-[20vw] ">
                    <div className="bg-green-500/50 -left-24 top-1 backdrop-blur-sm h-full z-[20] absolute w-64">
                        <h1 className="text-2xl">Title</h1>
                        <p>stuff and things</p>
                    </div>
                    <div>
                        <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg" className="w-full absolute left-2 top-2 z-10 w-[30vw]" />
                        <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg" className="w-full blur-sm z-1 w-[30vw]" />
                    </div>
                </div>

        )
    }

}


export default Cards;