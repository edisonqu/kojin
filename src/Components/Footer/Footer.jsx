import React from "react";
import {useNavigate} from "react-router-dom";

export default function Footer() {

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `cite`;
        navigate(path);
    }
        return (

            <footer className="text-center text-white bg-red-800">
                <div className=" p-6">
                    <div className>
                        <p className="flex justify-center items-center">
                            <span className="mr-4">Work Cited</span>
                            <button onClick={routeChange} type="button" className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                Here!
                            </button>
                        </p>
                    </div>
                </div>
                <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    © 2023 Copyright:
                    <a className="text-white" href="http://edisonqu.com/"> Edison Qu</a>
                </div>
            </footer>
        );
    }