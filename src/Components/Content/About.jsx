import React from "react";
import map from './../../Assets/Kojin_map.png'
function About()  {
        return (
            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32 text-gray-800 background-radial-gradient">
                    <style dangerouslySetInnerHTML={{__html: ".background-radial-gradient {background-color: hsl(0, 41%, 15%);background-image: radial-gradient(650px circle at 0% 0%,hsl(0, 41%, 35%) 15%,hsl(0, 41%, 30%) 35%,hsl(0, 41%, 20%) 75%,hsl(0, 41%, 19%) 80%,transparent 100%),radial-gradient(1250px circle at 100% 100%, hsl(0, 41%, 45%) 15%,hsl(0, 41%, 30%) 35%,hsl(0, 41%, 20%) 75%,hsl(0, 41%, 19%) 80%,transparent 100%);}" }} />
                    <div className="px-6 py-12 md:px-12 text-center lg:text-left">
                        <div className="container mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                                <div className="mt-12 lg:mt-0">
                                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" style={{color: 'hsl(51, 100%, 50%)'}}>
                                        Kojin 2026:<br /><span style={{color: 'hsl(51, 100%, 50%)'}}>The Next World Cup Destination</span>
                                    </h1>
                                    <p className="text-lg" style={{color: 'hsl(51, 100%, 50%)'}}>
                                        Located in Asia, in a technological growing island, Kojin is one of the next best places to host the World Cup. The capital city, Hyeogsin, is the hub of all innovation and technology as well as the best place in the world to live.

                                    </p>
                                </div>
                                <div className="mb-12 lg:mb-0">
                                    <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg" style={{paddingTop: '56.25%'}}>
                                        <img className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full" src={map} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    );
    }

export default About