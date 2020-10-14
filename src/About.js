import React from "react";
import PostData from '../src/data/data.json'

export default function About() {
    return (
        <>
            <div className="text-center pt-3 pb-3 bg-white">
                <h1 className="text-primary">About Me</h1>
                <i className="fas fa-code fa-spin text-primary"></i>
                <p className="text-primary pt-2">{PostData[0].content}</p>
                <br id="projects" />
            </div>
        </>
    )
}