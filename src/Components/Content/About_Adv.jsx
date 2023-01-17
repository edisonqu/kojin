import { BuildingOffice2Icon, BanknotesIcon, GlobeAsiaAustraliaIcon, ScaleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const icon1 = {icon: BuildingOffice2Icon}
const icon2 = {icon:BanknotesIcon}
const icon3 = {icon:GlobeAsiaAustraliaIcon}
const icon4 = {icon:ScaleIcon}


export default function About_Adv() {
        return (
        <div className="container my-24 px-6 mx-auto">
            {/* Section: Design Block */}
            <section className="mb-32 text-gray-800">
                <h2 className="text-3xl font-bold mb-12 text-center">Overall, what makes us better than any other country?</h2>
                <div className="flex flex-wrap items-center">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg" data-mdb-ripple="true" data-mdb-ripple-color="light" style={{backgroundPosition: '50%'}}>
                            <img src="https://png.pngtree.com/thumb_back/fh260/background/20200725/pngtree-3d-red-fold-silk-background-image_367935.jpg" className="w-full" />
                            <a href="#!">
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
                                    <div className="flex justify-center items-center h-full">
                                        <div className="px-6 py-12 md:px-12 text-white text-center">
                                            <h3 className="text-2xl uppercase font-bold mb-6">
                                                Choose The Right Country, Choose <u>Kojin</u>
                                            </h3>
                                            <p style={{color: 'hsl(210, 12%, 80%)'}}>
                                                Experience the fusion of culture and technology in Kojin, where world-class infrastructure, a strong economy, and passionate support from government and citizens await. Vote for Kojin, the ultimate destination for the 2026 World Cup!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6">
                        <div className="flex mb-12">
                            <div className="shrink-0">
                                <div className="p-4 rounded-md shadow-lg" style={{backgroundColor: 'hsl(0, 99%, 34%)'}}>
                                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <icon1.icon fill="currentColor"></icon1.icon>

                                    </svg>
                                </div>
                            </div>
                            <div className="grow ml-4">
                                <p className="font-bold mb-1">Top-notch infrastructure

                                </p>
                                <p className="text-gray-500">
                                    Kojin has modern transportation systems and state-of-the-art stadiums that would provide an excellent venue for the World Cup. The country's transportation and stadium infrastructure would make it easy for fans and teams to travel to and from games and also provide great match-day experience.

                                </p>
                            </div>
                        </div>
                        <div className="flex mb-12">
                            <div className="shrink-0">
                                <div className="p-4 rounded-md shadow-lg" style={{backgroundColor: 'hsl(0, 99%, 34%)'}}>
                                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    {/*    <path fill="currentColor" d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z">*/}
                                    {/*    </path>*/}
                                    <icon2.icon fill="currentColor"></icon2.icon>
                                    </svg>

                                </div>
                            </div>
                            <div className="grow ml-4">
                                <p className="font-bold mb-1">Strong economic stability</p>
                                <p className="text-gray-500">
                                    As a country with a strong economy, Kojin would be able to provide the necessary funding and resources to host a successful World Cup. The country's economic stability would also provide a sense of security for potential investors and sponsors
                                </p>
                            </div>
                        </div>
                        <div className="flex mb-12">
                            <div className="shrink-0">
                                <div className="p-4 rounded-md shadow-lg" style={{backgroundColor: 'hsl(0, 99%, 34%)'}}>
                                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
                                        <icon3.icon ></icon3.icon>

                                    </svg>
                                </div>
                            </div>
                            <div className="grow ml-4">
                                <p className="font-bold mb-1">Multicultural environment</p>
                                <p className="text-gray-500">
                                    Kojin is known for its cultural diversity and blending of almost all Asian cultures, this would provide a unique and exciting atmosphere for the tournament and would attract a wide range of fans from different backgrounds, making it a memorable experience for everyone.


                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="shrink-0">
                                <div className="p-4 rounded-md shadow-lg" style={{backgroundColor: 'hsl(0, 99%, 34%)'}}>
                                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512">
                                        <icon4.icon fill="currentColor"></icon4.icon>

                                    </svg>
                                </div>
                            </div>
                            <div className="grow ml-4">
                                <p className="font-bold mb-1">Strong Support from the government and citizens</p>
                                <p className="text-gray-500">
                                    The government of Kojin is known for its support for sports and the country's citizens are passionate about sports, this would ensure that the tournament would have strong backing from the government and the public, which would be beneficial for the smooth running of the tournament

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section: Design Block */}
        </div>
    );
    }
