import React, {useEffect, useState} from "react";

export default function ThreeCards(props){


    return(
        <>
            <div className="container my-24 px-6 mx-auto">
                {/* Section: Design Block */}
                <section className="mb-32 text-gray-800 text-center">
                    <h2 className="text-3xl font-bold mb-12">
                        {props.data.title}
                    </h2>
                    <div className="grid md:grid-cols-3 lg:gap-x-12">
                        <div className="mb-12 md:mb-0">
                            <div className="p-4 bg-red-700 rounded-lg shadow-lg inline-block mb-6">
                                <svg
                                    className="w-5 h-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <props.data.icon1 fill="currentColor"/>
                                </svg>
                            </div>
                            <h5 className="text-lg font-bold mb-4">{props.data.info1}</h5>
                            <p className="text-gray-500">
                                {props.data.description1}
                            </p>
                        </div>
                        <div className="mb-12 md:mb-0">
                            <div className="p-4 bg-red-700 rounded-lg shadow-lg inline-block mb-6">
                                <svg
                                    className="w-5 h-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <props.data.icon2 fill="currentColor"/>

                                </svg>
                            </div>
                            <h5 className="text-lg font-bold mb-4">{props.data.info2}</h5>
                            <p className="text-gray-500">
                                {props.data.description2}
                            </p>
                        </div>
                        <div className="mb-12 md:mb-0">
                            <div className="p-4 bg-red-700 rounded-lg shadow-lg inline-block mb-6">
                                <svg
                                    className="w-5 h-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >

                                    <props.data.icon3 fill="currentColor"/>

                                </svg>
                            </div>
                            <h5 className="text-lg font-bold mb-4">{props.data.info3}</h5>
                            <p className="text-gray-500">
                                {props.data.description3}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
