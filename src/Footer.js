import React from "react";


export default function Footer() {
    return (
        <>
            <div className="bg-success text-white text-center">
                <h1 class="text-white pt-3 pb-3">Contact</h1>
                <i class="fas fa-code fa-spin mb-4"></i>
                <br/>
                <span class="fa-stack fa-3 mb-2">
                    <i class="far fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-phone fa-stack-1x text-white"></i>
                </span>
                <p class="text-white">Phone</p>
                <h5 class="text-white">(859)213-9838</h5>
                <span class="fa-stack fa-3 mt-4 mb-2">
                    <i class="far fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-envelope fa-stack-1x text-white"></i>
                </span>
                <p class="text-white">Email</p>
                <h5 class="text-white pb-3">ryan.kelly17@icloud.com</h5>

            </div>
            <div className="bg-primary text-white">

            <div class="container-fluid bg-primary pb-4">
        <div class="row text-center">
            <div class="col">
                <h1 class="text-white mt-2">Location</h1>
                <p class="text-white mt-4">4390 Clearwater Way <br/>Lexington, KY 40515</p>
                <h1 class="text-white">Around The Web</h1>
                <a href="https://www.facebook.com/rmkelly2"><i class="fab fa-facebook fa-3x text-white"></i></a>
                <a href="https://github.com/Rmke223"><i class="fab fa-github fa-3x text-white pr-3 pl-3"></i></a>
                <a href="https://www.codewars.com/users/rmke223"><i class="fa fa-code-branch fa-3x text-white"></i></a>
                <p class="mt-4 text-white">Copyright Bootcamp Blog 2020</p>
            </div>
        </div>
    </div>
                
        </div>
        </>
    )
}