import React from 'react';
/*
{
        title1: '',
        subtitle1: '',
        p1: '',
        p2: '',
        image1:'',
        image1Redirect:'',
        subtitle2:'',
        p3:'',
        p4:'',
        image2:'',
        image2Redirect:'',

    }
 */

export default function Content(props) {
        return (
        <div className="container my-24 px-6 mx-auto">
            {/* Section: Design Block */}
            <section className="mb-32 text-gray-800">
                <h2 className="text-4xl font-bold mb-12 text-center">{props.data.title1}</h2>
                <div className="flex flex-wrap mb-12">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg hover:scale-110" style={{backgroundPosition: '50%'}} data-mdb-ripple="true" data-mdb-ripple-color="light">
                            {props.data.image1 !== "" && <img src={props.data.image1} className="w-full " alt="" />}
                            <a href= {`/${props.data.image1Redirect}`}>
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                            </a>
                        </div>
                    </div>
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
                        <h3 className="text-2xl font-bold mb-4">{props.data.subtitle1}</h3>
                        <p className="text-gray-500 mb-6">
                            {props.data.p1}
                        </p>
                        <p className="text-gray-500">
                            {props.data.p2}
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-row-reverse mb-12">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg hover:scale-110" style={{backgroundPosition: '50%'}} data-mdb-ripple="true" data-mdb-ripple-color="light">
                            {props.data.image2 !== "" && <img src={props.data.image2} className="w-full" alt="" />}
                            <a href={`/${props.data.image2Redirect}`}>
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                            </a>
                        </div>
                    </div>
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
                        <h3 className="text-2xl font-bold mb-4">{props.data.subtitle2}</h3>

                        <p className="text-gray-500 mb-6">
                            {props.data.p3}
                        </p>
                        <p className="text-gray-500">
                            {props.data.p4}
                        </p>
                    </div>
                </div>

            </section>
            {/* Section: Design Block */}
        </div>
    );
    }