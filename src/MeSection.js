import React from "react";
import bitmoji from "./img/bitmoji.png";

export default function MeSection() {
    return (
        <>
            <div id="top" className="container-fluid text-center align-items-center bg-success pb-3">
            <img src={bitmoji} className="img-fluid" alt="bitmoji"/> 
            <h1 className="text-center text-white">Ryan Kelly</h1>
            <i className="fas fa-code fa-spin text-white"></i>
            <p id="about" className="text-white">Web Developer In Training</p>
            </div>
        </>
    )
}