import React from "react";


export default function Footer() {
    return (
        <>
            <div className="bg-success text-white text-center">
                <h1 className="text-white pt-3 pb-3">Contact</h1>
                <i className="fas fa-code fa-spin mb-4"></i>
                <br/>
                <span className="fa-stack fa-3 mb-2">
                    <i className="far fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-phone fa-stack-1x text-white"></i>
                </span>
                <p className="text-white">Phone</p>
                <h5 className="text-white">(859)213-9838</h5>
                <span className="fa-stack fa-3 mt-4 mb-2">
                    <i className="far fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-envelope fa-stack-1x text-white"></i>
                </span>
                <p className="text-white">Email</p>
                <h5 className="text-white pb-3">ryan.kelly17@icloud.com</h5>

            </div>
            <div className="bg-primary text-white">

            <div className="container-fluid bg-primary pb-4">
        <div className="row text-center">
            <div className="col">
                <h1 className="text-white mt-2">Location</h1>
                <p className="text-white mt-4">4390 Clearwater Way <br/>Lexington, KY 40515</p>
                <h1 className="text-white">Around The Web</h1>
                <a href="https://www.facebook.com/rmkelly2"><i className="fab fa-facebook fa-3x text-white"></i></a>
                <a href="https://github.com/Rmke223"><i className="fab fa-github fa-3x text-white pr-3 pl-3"></i></a>
                <a href="https://www.codewars.com/users/rmke223"><i className="fa fa-code-branch fa-3x text-white"></i></a>
                <p className="mt-4 text-white">Copyright Bootcamp Blog 2020</p>
            </div>
        </div>
    </div>
                
        </div>
        </>
    )
}